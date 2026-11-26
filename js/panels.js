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

  const ev = evidenceParts(battle);
  const kicker = isEventId(battle.id) ? 'EVENT' : 'BATTLE';
  return `
    <div class="kicker">${kicker}</div>
    <h2>${escapeHtml(battle.name)}</h2>
    <p class="meta">${escapeHtml(battle.dateLabel || battle.date || '')}${
    battle.period ? ' &middot; <span class="era">' + escapeHtml(battle.period) + '</span>' : ''
  }</p>
    <p class="location">${escapeHtml(battle.location.name || '')}</p>
    ${ev.chip}
    ${battle.summary ? `<p class="summary">${escapeHtml(battle.summary)}</p>` : ''}
    ${routeNoteHTML}
    ${sides.length ? `<h3>Combatants</h3><div class="combatants">${sides.join('')}</div>` : ''}
    ${battle.outcome ? `<h3>Outcome</h3><p>${escapeHtml(battle.outcome)}</p>` : ''}
    ${detailsHTML}
    ${ev.section}
    ${nextHTML}
    ${galleryHTML}
    ${sourcesBlock(battle.name, battle.sources)}
  `;
}

// --- "How we know where it was" -----------------------------------------------------
// Renders the evidential fields (coordSource, certainty, alternatives, extent) in words.
// The point is that a reader of the MAP learns what a reader of the TEXT would: a 1542
// battle that may never have happened must not look like Sekigahara.
const LOC_TEXT = {
  A: ['Site secured', 'The place survives or is secured: a castle or temple site, an excavated or designated historic site, or an unmistakable landform.'],
  B: ['Place name only', 'The place name is known, but not the extent of the fighting; the marker stands on the name.'],
  C: ['Site disputed', 'Rival sites are proposed for this event.'],
};
const REF_TEXT = {
  point: 'One engagement at one place.',
  area: 'A war or campaign fought over a wider area. The marker is only one place associated with it.',
  series: 'Several separate engagements are combined in this entry.',
};
const BASIS_TEXT = {
  verified: 'checked against a source outside Wikipedia (heritage register, excavation report or the national mapping agency)',
  high: 'follows from what the entry and its sources state',
  heuristic: 'assigned by a default rule and not yet checked one by one',
};
function wikiLink(lang, title) {
  return `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(String(title).replace(/ /g, '_'))}`;
}
function coordSourceHTML(cs) {
  if (!cs) return '';
  const how = cs.how === 'matched' ? ' The marker matches its coordinate.' : cs.how === 'rounded' ? ' The marker agrees with it to within 100 m (rounded).' : '';
  const a = (href, text) => `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(text)}</a>`;
  switch (cs.kind) {
    case 'wikipedia-en': return `Taken from the English Wikipedia article ${a(wikiLink('en', cs.ref), '“' + cs.ref + '”')}.${how}`;
    case 'wikipedia-ja': return `Taken from the Japanese Wikipedia article ${a(wikiLink('ja', cs.ref), '「' + cs.ref + '」')}.${how}`;
    case 'wikidata': return `Taken from Wikidata, item ${a('https://www.wikidata.org/wiki/' + cs.ref, cs.ref)}.${how}`;
    case 'gsi': return `Taken from the place-name search of the Geospatial Information Authority of Japan: ${escapeHtml(cs.ref)}.`;
    case 'register': return `Taken from the national register of cultural properties, record ${escapeHtml(cs.ref)}.`;
    case 'codh': return `Taken from the CODH gazetteer of historical place names (日本歴史地名大系), item ${escapeHtml(cs.ref)}.`;
    case 'castle': { const c = (Array.isArray(CASTLES) ? CASTLES : Object.values(CASTLES)).find((x) => x.id === cs.ref);
      return `The same point as ${escapeHtml(c ? c.name : cs.ref)} in the castle layer, so the two cannot drift apart.`; }
    case 'temple': { const t = (typeof TEMPLES !== 'undefined' ? TEMPLES : []).find((x) => x.id === cs.ref);
      return `The same point as ${escapeHtml(t ? t.name : cs.ref)} in the temples layer.`; }
    case 'derived': return `Derived: ${escapeHtml(cs.ref)}.`;
    default: return 'Placed by hand on the named place. No published coordinate it was copied from has been identified.';
  }
}
function evidenceParts(b) {
  const c = b.certainty;
  if (!c) return { chip: '', section: '' };
  const loc = LOC_TEXT[c.location] || LOC_TEXT.B;
  const bits = [loc[0]];
  if (c.referent === 'area') bits.push('stands for a wider area');
  if (c.referent === 'series') bits.push('several engagements');
  if (c.historicity === 'contested') bits.unshift('May not have happened');
  const chip = `<p class="certainty-chip ${c.historicity === 'contested' ? 'pin-q' : 'pin-' + c.location.toLowerCase()}"><span class="battle-pin ${c.historicity === 'contested' ? 'pin-q' : 'pin-' + c.location.toLowerCase()} pin-legend" aria-hidden="true"></span>${escapeHtml(bits.join(' · '))}</p>`;
  const rows = [];
  if (c.historicity === 'contested') rows.push(['Did it happen?', 'Whether this event happened at all is doubted.']);
  rows.push(['The place', escapeHtml(loc[1])]);
  rows.push(['The marker stands for', escapeHtml(REF_TEXT[c.referent] || '')]);
  rows.push(['Coordinate', coordSourceHTML(b.coordSource)]);
  const alts = (b.alternatives || []);
  const altHTML = alts.length
    ? `<ol class="alt-list">${alts.map((a) => `<li>${escapeHtml(a.label)}${a.source ? ` <span class="alt-src">(${a.source.url ? `<a href="${escapeHtml(a.source.url)}" target="_blank" rel="noopener">${escapeHtml(a.source.label)}</a>` : escapeHtml(a.source.label)})</span>` : ''}</li>`).join('')}</ol>`
    : '';
  const x = b.extent;
  const extHTML = x
    ? `<p class="ext-note">Shaded on the map while this entry is open: ${escapeHtml(x.label || (x.provinces ? x.provinces.join(', ') : x.kind === 'districts' ? 'three districts' : ''))}. Boundary from ${x.source.url ? `<a href="${escapeHtml(x.source.url)}" target="_blank" rel="noopener">${escapeHtml(x.source.label)}</a>` : escapeHtml(x.source.label)}${x.kind === 'provinces' ? '. Whole provinces are only an approximation of where the fighting took place' : ''}.</p>`
    : '';
  const section = `
    <h3>How we know where it was</h3>
    <div class="evidence">
      ${c.why ? `<p class="ev-why">${escapeHtml(c.why)}</p>` : ''}
      ${altHTML ? `<p class="ev-alt-h">${b.certainty.referent === 'series' ? 'The engagements, numbered on the map:' : 'Candidate sites, numbered on the map:'}</p>${altHTML}` : ''}
      ${extHTML}
      <dl class="ev-rows">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
      <p class="ev-basis">This coding ${escapeHtml(BASIS_TEXT[c.basis] || '')}. <a href="sources.html#evidence">What these terms mean</a></p>
    </div>`;
  return { chip, section };
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
  if (typeof drawEvidence === 'function') drawEvidence(battle);
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
  if (typeof evidenceLayer !== 'undefined') evidenceLayer.clearLayers();
  if (currentYear != null) setHash('y=' + currentYear);
}
