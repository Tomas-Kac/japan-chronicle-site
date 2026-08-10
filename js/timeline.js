// =====================================================================
// timeline.js — The year slider, era ribbon and clan filter: year maths and the controls that draw them.
//
// Split out of app.js (2026-08-10). These are function DECLARATIONS only: they are
// hoisted, and their bodies resolve map, BATTLES and friends at call time, so this
// file must simply load BEFORE app.js. No state and nothing executes here.
// =====================================================================

// --- Year timeline slider --------------------------------------------------
// Every calendar year a battle should appear on. A single-year battle uses
// `year`; a multi-year campaign uses `yearStart` + `yearEnd`.
function battleYears(b) {
  if (b.yearStart != null && b.yearEnd != null) {
    const years = [];
    for (let y = b.yearStart; y <= b.yearEnd; y++) years.push(y);
    return years;
  }
  const y = b.year != null ? b.year : (b.date ? parseInt(String(b.date).slice(0, 4), 10) : null);
  return y != null ? [y] : [];
}

function battleStartYear(b) {
  return b.year != null ? b.year : b.yearStart;
}

function personTickYears(p) {
  const ys = [];
  if (p.born != null) ys.push(p.born);
  if (p.died != null) ys.push(p.died);
  return ys;
}

function personActiveInYear(p, y) {
  if (y == null) return false;
  const b = p.born != null ? p.born : y;
  const d = p.died != null ? p.died : y;
  return y >= b && y <= d;
}

function eraColor(p) { return (ERA_BY_NAME[p] && ERA_BY_NAME[p].color) || '#8a9a5b'; }
function eraTint(p)  { return (ERA_BY_NAME[p] && ERA_BY_NAME[p].tint)  || 'rgba(32,38,46,.06)'; }
function eraForYear(y) {
  if (y == null) return null;
  for (const e of ERAS) if (y >= e.start && y < e.end) return e.name;
  return null;
}

function eraIndexForYear(y) {
  for (let i = 0; i < ERAS.length; i++) if (y >= ERAS[i].start && y < ERAS[i].end) return i;
  return y < ERAS[0].start ? 0 : ERAS.length - 1;
}

function yearToPct(y) {
  if (y == null) return 0;
  const i = eraIndexForYear(y);
  const e = ERAS[i];
  const f = Math.max(0, Math.min(1, (y - e.start) / (e.end - e.start)));
  return ((i + f) / N_ERAS) * 100;
}

function recomputeYears() {
  const set = new Set();
  for (const b of BATTLES) {
    if (!inSelectedPeriod(b)) continue;
    for (const y of battleYears(b)) set.add(y);
  }
  // When the Events overlay is on, its years join the timeline too, so the slider
  // and ticks reach events outside the battle range (e.g. 552, 1923).
  if (eventsOn) {
    for (const em of eventMarkers) for (const y of battleYears(em.event)) set.add(y);
  }
  // When the People overlay is on, each figure's birth & death years join the ticks too.
  if (peopleOn) {
    for (const pm of personMarkers) for (const y of personTickYears(pm.person)) set.add(y);
  }
  // Safety: if nothing is selected (e.g. every era filtered off), fall back to all
  // battle years so the slider never ends up with an undefined range.
  if (!set.size) { for (const b of BATTLES) for (const y of battleYears(b)) set.add(y); }
  eventYears = [...set].sort((a, b) => a - b);
  MIN_YEAR = eventYears[0];
  MAX_YEAR = eventYears[eventYears.length - 1];
  slider.min = MIN_YEAR;
  slider.max = MAX_YEAR;
  renderTicks();
  renderEraBands();
}

function renderTicks() {
  yearTicksEl.innerHTML = '';
  for (const y of eventYears) {
    const tick = document.createElement('div');
    tick.className = 'yearTick';
    tick.style.left = yearToPct(y) + '%';
    const tEra = eraForYear(y);
    if (tEra) tick.style.background = eraColor(tEra);
    tick.title = String(y);
    tick.addEventListener('click', (e) => { e.stopPropagation(); showYear(y); });
    yearTicksEl.appendChild(tick);
  }
}

// Equal-width era bands, one per slot, aligned under the ribbon segments above.
function renderEraBands() {
  if (!eraBandsEl) return;
  eraBandsEl.innerHTML = '';
  for (let i = 0; i < ERAS.length; i++) {
    const band = document.createElement('div');
    band.className = 'era-band';
    band.style.left = (i / N_ERAS) * 100 + '%';
    band.style.width = 100 / N_ERAS + '%';
    band.style.background = ERAS[i].color;
    eraBandsEl.appendChild(band);
  }
}

// The 8-era segmented selector. Clicking a segment jumps to that era's midpoint.
function renderEraSelector() {
  if (!eraSelectorEl) return;
  eraSelectorEl.innerHTML = '';
  for (const e of ERAS) {
    const seg = document.createElement('button');
    seg.type = 'button';
    seg.className = 'era-seg';
    seg.dataset.era = e.name;
    seg.innerHTML =
      `<span class="seg-fill" aria-hidden="true"></span>` +
      `<span class="lbl">${escapeHtml(e.name)}</span>` +
      `<span class="sub">${escapeHtml(e.label)}</span>`;
    seg.addEventListener('click', () => {
      const mid = Math.round((e.start + e.end) / 2);
      showYear(nearestEventYear(mid));
    });
    eraSelectorEl.appendChild(seg);
  }
}

// Highlight the segment whose era contains the current year.
function updateEraSelectorActive() {
  if (!eraSelectorEl) return;
  const active = (currentYear != null && !showAll && !selectedClan) ? eraForYear(currentYear) : null;
  let activeSeg = null;
  for (const seg of eraSelectorEl.children) {
    const p = seg.dataset.era;
    const on = p === active;
    seg.classList.toggle('active', on);
    if (on) activeSeg = seg;
    const fill = seg.querySelector('.seg-fill');
    if (fill) {
      fill.style.setProperty('--seg-tint', on ? eraTint(p) : 'transparent');
      fill.style.setProperty('--seg-color', on ? eraColor(p) : 'transparent');
    }
  }
  // On phones the ribbon scrolls sideways, so the highlighted era can sit off-screen.
  // Measured with rects, not offsetLeft: #eraSelector is not positioned, so offsetLeft
  // would resolve against #timeBar and land the scroll in the wrong place.
  if (activeSeg && eraSelectorEl.scrollWidth > eraSelectorEl.clientWidth + 1) {
    const seg = activeSeg.getBoundingClientRect();
    const box = eraSelectorEl.getBoundingClientRect();
    if (seg.left < box.left || seg.right > box.right) {
      const delta = seg.left - box.left - (box.width - seg.width) / 2;
      // Plain assignment, not scrollTo({behavior:'smooth'}): the era can change on every
      // tick of timeline playback, and queued smooth scrolls fight each other.
      eraSelectorEl.scrollLeft = eraSelectorEl.scrollLeft + delta;
    }
  }
}

// Position the scrubber knob at the current year.
function updateScrub() {
  if (!scrubKnob) return;
  if (currentYear == null || showAll || selectedClan) {
    scrubKnob.style.display = 'none';
    if (scrubKnobLine) scrubKnobLine.style.display = 'none';
    return;
  }
  const pct = Math.max(0, Math.min(100, yearToPct(currentYear)));
  scrubKnob.style.display = '';
  scrubKnob.style.left = pct + '%';
  if (scrubKnobLine) { scrubKnobLine.style.display = ''; scrubKnobLine.style.left = pct + '%'; }
}

// Click / drag anywhere on the track → set the year from the x-position
// (inverse of yearToPct: figure out which era slot x fell in, then the year within).
function yearFromTrackX(clientX) {
  const rect = scrubTrackEl.getBoundingClientRect();
  const frac = Math.max(0, Math.min(0.999999, (clientX - rect.left) / Math.max(1, rect.width)));
  let slot = Math.floor(frac * N_ERAS);
  slot = Math.max(0, Math.min(N_ERAS - 1, slot));
  const within = frac * N_ERAS - slot;
  const e = ERAS[slot];
  return Math.round(e.start + within * (e.end - e.start));
}

function nearestEventYear(y) {
  if (!eventYears.length) return y;
  return eventYears.reduce((best, cur) => (Math.abs(cur - y) < Math.abs(best - y) ? cur : best), eventYears[0]);
}

// Jump to the previous / next year that actually has a battle
function stepEventYear(direction) {
  const next =
    direction < 0
      ? eventYears.filter((y) => y < currentYear).pop()
      : eventYears.filter((y) => y > currentYear).shift();
  if (next != null) showYear(next);
}

function stopPlay() { if (_playTimer) { clearInterval(_playTimer); _playTimer = null; } if (playBtn) playBtn.innerHTML = PLAY_ICON; }
function startPlay() {
  if (!eventYears.length) return;
  if (showAll || selectedClan) showYear(eventYears.includes(1600) ? 1600 : eventYears[0]);
  if (playBtn) playBtn.innerHTML = PAUSE_ICON;
  _playTimer = setInterval(() => {
    const next = eventYears.filter((y) => y > currentYear).shift();
    if (next == null) { stopPlay(); return; }   // reached the end — stop
    showYear(next);
  }, 1100);
}

function battleClanHay(b) {
  const c = b.combatants || {};
  return [c.side1 && c.side1.name, c.side1 && c.side1.leader, c.side2 && c.side2.name, c.side2 && c.side2.leader]
    .filter(Boolean)
    .join(' | ');
}

function populateClanFilter() {
  clanFilter.innerHTML =
    '<option value="">All clans</option>' +
    CLAN_OPTIONS.map(
      (cl) => `<option value="${escapeHtml(cl)}">${escapeHtml(cl)} (${clanCounts[cl]})</option>`
    ).join('');
}

function clearClanFilter() {
  if (!selectedClan) return;
  selectedClan = null;
  if (clanFilter) clanFilter.value = '';
}

function setShowAllButton() {
  showAllBtn.textContent = showAll ? '↩ Back to timeline' : 'Show all years';
  showAllBtn.classList.toggle('active', showAll);
}
