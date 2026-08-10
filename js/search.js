// =====================================================================
// search.js — Search across every layer, and what happens when a result is chosen.
//
// Split out of app.js (2026-08-10). These are function DECLARATIONS only: they are
// hoisted, and their bodies resolve map, BATTLES and friends at call time, so this
// file must simply load BEFORE app.js. No state and nothing executes here.
// =====================================================================

// Search battles, people AND events. Returns typed results: {type, item, name, year}.
function searchEverything(query) {
  // Macron-insensitive: users type "kukai"/"saigo", the data has "Kūkai"/"Saigō".
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const q = norm(query.trim());
  if (!q) return [];
  const res = [];
  // Rank a match by how well the QUERY hits the NAME (so a person/battle whose
  // name contains the query outranks one that only matched via a commander/place).
  const score = (name) => { const n = norm(name); return n === q ? 4 : n.startsWith(q) ? 3 : n.includes(q) ? 2 : 1; };
  for (const b of BATTLES) {
    const c = b.combatants || {};
    const hay = [b.name, b.location && b.location.name,
      c.side1 && c.side1.name, c.side1 && c.side1.leader,
      c.side2 && c.side2.name, c.side2 && c.side2.leader].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'battle', item: b, name: b.name,
      year: (b.year != null ? b.year : `${b.yearStart}–${b.yearEnd}`), s: score(b.name) });
  }
  if (typeof PEOPLE !== 'undefined') for (const p of PEOPLE) {
    const hay = [p.name, p.role, p.location && p.location.name].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'person', item: p, name: p.name, year: (p.dateLabel || ''), s: score(p.name) });
  }
  if (typeof EVENTS !== 'undefined') for (const ev of EVENTS) {
    const hay = [ev.name, ev.location && ev.location.name, ev.type].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'event', item: ev, name: ev.name, year: (ev.dateLabel || ev.year || ''), s: score(ev.name) });
  }
  // Castles, temples and roads were missing here, so the placeholder promised "places"
  // while a search for "Himeji" returned nothing at all.
  if (typeof CASTLES !== 'undefined') for (const c of (Array.isArray(CASTLES) ? CASTLES : Object.values(CASTLES))) {
    const hay = [c.name, c.modern, c.clan].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'castle', item: c, name: c.name, year: (c.clan || ''), s: score(c.name) });
  }
  if (typeof TEMPLES !== 'undefined') for (const t of TEMPLES) {
    const hay = [t.name, t.sect, t.kind].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'temple', item: t, name: t.name, year: (t.founded || ''), s: score(t.name) });
  }
  if (typeof HISTORIC_ROADS !== 'undefined') for (const rd of HISTORIC_ROADS) {
    const hay = [rd.name, rd.romaji, (rd.waypoints || []).map((w) => w.name).join(' ')].filter(Boolean).join(' ').toLowerCase();
    if (norm(hay).includes(q)) res.push({ type: 'road', item: rd, name: rd.name, year: (rd.era || ''), s: score(rd.name) });
  }
  res.sort((a, b) => b.s - a.s);
  return res.slice(0, 10);
}

function renderSearchResults(list) {
  if (!list.length) {
    hideSearchResults();
    return;
  }
  searchResults.innerHTML = list
    .map((r) =>
      `<li><span class="r-name">${escapeHtml(r.name)}</span><span class="r-meta"><span class="r-type r-${r.type}">${r.type}</span> ${escapeHtml(String(r.year))}</span></li>`
    )
    .join('');
  [...searchResults.children].forEach((li, i) => {
    li.addEventListener('click', () => selectSearchResult(list[i]));
  });
  searchResults.classList.remove('hidden');
}

function hideSearchResults() {
  searchResults.classList.add('hidden');
  searchResults.innerHTML = '';
}

function selectSearchResult(r) {
  if (r.type === 'battle') {
    showYear(battleStartYear(r.item), { frame: false }); // show that year's markers
    showBattleInfo(r.item);
    focusBattle(r.item);
  } else if (r.type === 'event') {
    showBattleInfo(r.item); // events render through the same info panel
    focusBattle(r.item);
  } else if (r.type === 'person') {
    showPersonInfo(r.item);
    focusBattle(r.item);
  } else if (r.type === 'castle') {
    showCastleInfo(r.item);
    map.flyTo([r.item.lat, r.item.lon], 11, { duration: 1.0 });
  } else if (r.type === 'temple') {
    showTempleInfo(r.item);
    map.flyTo([r.item.lat, r.item.lon], 12, { duration: 1.0 });
  } else if (r.type === 'road') {
    showRoadInfo(r.item);
    const pts = (r.item.waypoints || []).map((w) => [w.lat, w.lon]);
    if (pts.length > 1) map.flyToBounds(L.latLngBounds(pts), { paddingTopLeft: [40, 70], paddingBottomRight: [40, 170], duration: 1.0 });
  }
  searchInput.value = '';
  hideSearchResults();
  searchInput.blur();
}
