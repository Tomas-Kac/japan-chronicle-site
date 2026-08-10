// =====================================================================
// panels.js — Info-panel rendering: the HTML for every marker type, and the show* entry points.
//
// Split out of app.js (2026-08-10). These are function DECLARATIONS only: they are
// hoisted, and their bodies resolve map, BATTLES and friends at call time, so this
// file must simply load BEFORE app.js. No state and nothing executes here.
// =====================================================================

// Shared image gallery markup (a missing/blocked image hides its own figure).
function galleryBlock(images, heading) {
  const imgs = Array.isArray(images) ? images.filter((im) => im && im.src) : [];
  if (!imgs.length) return '';
  return `<h3>${heading || 'Images'}</h3><div class="gallery">${imgs
    .map(
      (im) =>
        `<figure><img src="${escapeHtml(im.src)}" alt="${escapeHtml(im.caption || '')}" loading="lazy" onerror="this.closest('figure').style.display='none'">${
          im.caption ? `<figcaption>${escapeHtml(im.caption)}</figcaption>` : ''
        }</figure>`
    )
    .join('')}</div>`;
}

// "Further reading" for the info panel: any precise citations from an optional
// `sources: [{label, url}]` field on the entry, plus a Wikipedia look-up that works
// for every entry. Add `sources` to a battle/event/person to show real references.
function sourcesBlock(name, sources) {
  const list = (Array.isArray(sources) ? sources : [])
    .map((s) => `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label || s.url)}</a></li>`)
    .join('');
  const lookup = 'https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(name || '');
  return `<h3>Further reading</h3><ul class="src-list">${list}<li><a href="${escapeHtml(lookup)}" target="_blank" rel="noopener">Look up "${escapeHtml(name || '')}" on Wikipedia &rarr;</a></li></ul>`;
}

// Castles open the same drawer as everything else, so their notes, images and
// citations are readable rather than hidden behind a hover tooltip.
function renderCastleHTML(c) {
  const meta = [CASTLE_TYPE_LABEL[c.type] || c.type, c.clan, c.built ? 'built ' + c.built : '']
    .filter(Boolean).join(' · ');
  return `
    <div class="kicker">CASTLE</div>
    <h2>${escapeHtml(c.name)}</h2>
    <p class="meta">${escapeHtml(meta)}</p>
    ${c.modern ? `<p class="location">${escapeHtml(c.modern)}</p>` : ''}
    ${c.note ? `<p class="summary">${escapeHtml(c.note)}</p>` : ''}
    ${galleryBlock(c.images)}
    ${sourcesBlock(c.name, c.sources)}
  `;
}

function showCastleInfo(c) {
  const panel = document.getElementById('infoPanel');
  document.getElementById('infoContent').innerHTML = renderCastleHTML(c);
  panel.scrollTop = 0;
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
}

function renderTempleHTML(t) {
  const kindLabel = t.kind === 'shrine' ? 'Shinto shrine' : (t.kind === 'monastery' ? 'Buddhist monastery' : 'Buddhist temple');
  const meta = [kindLabel, t.sect, t.founded ? 'founded ' + t.founded : ''].filter(Boolean).join(' · ');
  return `
    <div class="kicker">${t.kind === 'shrine' ? 'SHRINE' : 'TEMPLE'}</div>
    <h2>${escapeHtml(t.name)}</h2>
    <p class="meta">${escapeHtml(meta)}</p>
    ${t.note ? `<p class="summary">${escapeHtml(t.note)}</p>` : ''}
    ${galleryBlock(t.images)}
    ${sourcesBlock(t.name, t.sources)}
  `;
}

function showTempleInfo(t) {
  const panel = document.getElementById('infoPanel');
  document.getElementById('infoContent').innerHTML = renderTempleHTML(t);
  panel.scrollTop = 0;
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
}

function renderRoadHTML(road) {
  const meta = [road.era, 'historic highway (街道)'].filter(Boolean).join(' · ');
  return `
    <div class="kicker">ROAD</div>
    <h2>${escapeHtml(road.name)}</h2>
    <p class="meta">${escapeHtml(meta)}</p>
    ${road.purpose ? `<p class="summary">${escapeHtml(road.purpose)}</p>` : ''}
    <h3>Post-stations</h3>
    <p>${road.waypoints.map((w) => escapeHtml(w.name)).join(' › ')}</p>
    ${galleryBlock(road.images)}
    ${sourcesBlock(road.name, road.sources)}
  `;
}

function showRoadInfo(road) {
  const panel = document.getElementById('infoPanel');
  document.getElementById('infoContent').innerHTML = renderRoadHTML(road);
  panel.scrollTop = 0;
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
}

function renderDomainHTML(p) {
  const provs = Array.isArray(p.provinces) && p.provinces.length
    ? `<h3>Provinces (旧国)</h3><p>${escapeHtml(p.provinces.join('、'))}</p>`
    : '';
  return `
    <div class="kicker">DOMAIN</div>
    <h2>${escapeHtml(p.name || p.clan || '')}</h2>
    <p class="meta">${escapeHtml(p.clan ? p.clan + ' clan' : '')}${
      p.daimyo ? ' &middot; ' + escapeHtml(p.daimyo) : ''
    }</p>
    <p class="location">Active ${escapeHtml(domainRangeLabel(p))}</p>
    ${p.note ? `<p class="summary">${escapeHtml(p.note)}</p>` : ''}
    ${provs}
    <p class="route-note">⚑ Shown at province level — a clan's characteristic (peak) extent, not its exact borders in a given year. See NOTES.md.</p>
  `;
}

// Reuse the info panel for a clicked domain (no march route, unlike a battle).
function showDomainInfo(props) {
  const panel = document.getElementById('infoPanel');
  document.getElementById('infoContent').innerHTML = renderDomainHTML(props);
  panel.scrollTop = 0;
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
}

function renderBattleHTML(battle) {
  const c = battle.combatants || {};
  const sideHTML = (s, cls) => `
    <div class="side ${cls}">
      <h4>${escapeHtml(s.name || '')}</h4>
      ${s.leader ? `<p><strong>Leader:</strong> ${escapeHtml(s.leader)}</p>` : ''}
      ${s.forces ? `<p><strong>Forces:</strong> ${escapeHtml(s.forces)}</p>` : ''}
    </div>`;
  const sides = [];
  if (c.side1) sides.push(sideHTML(c.side1, 'side-a'));
  if (c.side2) sides.push(sideHTML(c.side2, 'side-b'));

  const detailsHTML = battle.details
    ? `<h3>Details</h3><div class="details">${battle.details
        .split(/\n\s*\n/)
        .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
        .join('')}</div>`
    : '';

  // Images are shown at the BOTTOM of the panel, beneath the details.
  // Use `images: [{ src, caption }]` (a list) and/or a single `image` string.
  const imgs = [];
  if (Array.isArray(battle.images)) imgs.push(...battle.images);
  if (battle.image) imgs.push({ src: battle.image });
  const galleryHTML = imgs.length
    ? `<h3>Images</h3><div class="gallery">${imgs
        .map(
          (im) =>
            `<figure><img src="${escapeHtml(im.src)}" alt="${escapeHtml(im.caption || '')}" loading="lazy" onerror="this.closest('figure').style.display='none'">${
              im.caption ? `<figcaption>${escapeHtml(im.caption)}</figcaption>` : ''
            }</figure>`
        )
        .join('')}</div>`
    : '';

  const routes = routesForBattle(battle);
  const routeNoteHTML = routes.length
    ? `<p class="route-note">⚑ ${routes.length === 1 ? 'March route' : routes.length + ' march routes'} shown on the map (army movements before the battle).</p>`
    : '';

  // "What happened next": optional leadsTo (a battle id or array of ids) → clickable links.
  const _leads = battle.leadsTo ? (Array.isArray(battle.leadsTo) ? battle.leadsTo : [battle.leadsTo]) : [];
  const _leadsLinked = _leads.map((id) => BATTLES.find((b) => b.id === id)).filter(Boolean);
  const nextHTML = _leadsLinked.length
    ? `<h3>What happened next</h3><ul class="person-battles">${_leadsLinked
        .map((b) => `<li><a href="#" class="battle-link" data-battle="${escapeHtml(b.id)}">${escapeHtml(b.name)}</a> <span class="pb-year">${escapeHtml(String(b.dateLabel || b.year || ''))}</span></li>`)
        .join('')}</ul>`
    : '';

  const kicker = isEventId(battle.id) ? 'EVENT' : 'BATTLE';
  return `
    <div class="kicker">${kicker}</div>
    <h2>${escapeHtml(battle.name)}</h2>
    <p class="meta">${escapeHtml(battle.dateLabel || battle.date || '')}${
    battle.period ? ' &middot; <span class="era">' + escapeHtml(battle.period) + '</span>' : ''
  }</p>
    <p class="location">${escapeHtml(battle.location.name || '')}</p>
    ${battle.summary ? `<p class="summary">${escapeHtml(battle.summary)}</p>` : ''}
    ${routeNoteHTML}
    ${sides.length ? `<h3>Combatants</h3><div class="combatants">${sides.join('')}</div>` : ''}
    ${battle.outcome ? `<h3>Outcome</h3><p>${escapeHtml(battle.outcome)}</p>` : ''}
    ${detailsHTML}
    ${nextHTML}
    ${galleryHTML}
    ${sourcesBlock(battle.name, battle.sources)}
  `;
}

// --- Info panel ---
function showBattleInfo(battle) {
  const panel = document.getElementById('infoPanel');
  const content = document.getElementById('infoContent');
  content.innerHTML = renderBattleHTML(battle);
  panel.scrollTop = 0; // the panel itself is the scroll container
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  drawActiveRoute(battle);
  setHash((isEventId(battle.id) ? 'e=' : 'b=') + battle.id);
}

function renderPersonHTML(p) {
  const roleLabel = (PERSON_ROLE[p.role] || {}).label || '';
  const bioHTML = p.bio
    ? `<h3>Life</h3><div class="details">${p.bio
        .split(/\n\s*\n/)
        .map((par) => `<p>${escapeHtml(par.trim())}</p>`)
        .join('')}</div>`
    : '';

  // Battles this figure fought — each links to that battle's own panel.
  const linked = (p.battles || []).map((id) => BATTLES.find((b) => b.id === id)).filter(Boolean);
  const battlesHTML = linked.length
    ? `<h3>Battles</h3><ul class="person-battles">${linked
        .map(
          (b) =>
            `<li><a href="#" class="battle-link" data-battle="${escapeHtml(b.id)}">${escapeHtml(
              b.name
            )}</a> <span class="pb-year">${escapeHtml(String(b.dateLabel || b.year || ''))}</span></li>`
        )
        .join('')}</ul>`
    : '';

  const imgs = Array.isArray(p.images) ? p.images : [];
  const galleryHTML = imgs.length
    ? `<h3>Images</h3><div class="gallery">${imgs
        .map(
          (im) =>
            `<figure><img src="${escapeHtml(im.src)}" alt="${escapeHtml(im.caption || '')}" loading="lazy" onerror="this.closest('figure').style.display='none'">${
              im.caption ? `<figcaption>${escapeHtml(im.caption)}</figcaption>` : ''
            }</figure>`
        )
        .join('')}</div>`
    : '';

  return `
    <div class="kicker">FIGURE</div>
    <h2>${escapeHtml(p.name)}</h2>
    <p class="meta">${escapeHtml(p.dateLabel || '')}${roleLabel ? ' &middot; ' + escapeHtml(roleLabel) : ''}</p>
    <p class="location">${escapeHtml(p.location.name || '')}</p>
    ${p.summary ? `<p class="summary">${escapeHtml(p.summary)}</p>` : ''}
    ${bioHTML}
    ${battlesHTML}
    ${galleryHTML}
    ${sourcesBlock(p.name, p.sources)}
  `;
}

// --- Person info panel (People overlay) ---
function showPersonInfo(p) {
  const panel = document.getElementById('infoPanel');
  const content = document.getElementById('infoContent');
  content.innerHTML = renderPersonHTML(p);
  panel.scrollTop = 0;
  panel.classList.remove('hidden');
  panel.setAttribute('aria-hidden', 'false');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers(); // people carry no march route
  setHash('p=' + p.id);
}

function hideBattleInfo() {
  const panel = document.getElementById('infoPanel');
  panel.classList.add('hidden');
  panel.setAttribute('aria-hidden', 'true');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
  if (currentYear != null) setHash('y=' + currentYear);
}
