// ---------------------------------------------------------------------
// Japan Historical Battles — map setup (Leaflet, 2D + terrain)
// No access token or 3D engine needed. The battle data lives in
// battles.js, which you can edit freely to add more events.
// ---------------------------------------------------------------------

// --- Map background styles you can switch between (top-right control) ---
const CARTO_ATTR = '&copy; OpenStreetMap contributors &copy; CARTO';

// Shared options that make zooming/panning feel smoother:
//   keepBuffer        - keep extra tiles around the edges so less blank shows
//   updateWhenZooming - wait until a zoom finishes before swapping in new tiles
const SMOOTH = { keepBuffer: 4, updateWhenZooming: false };

// Modern, clean street map. Shows only major cities when zoomed out and
// reveals smaller places as you zoom in. This is the default.
const modern = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
  { maxZoom: 19, subdomains: 'abcd', attribution: CARTO_ATTR, ...SMOOTH }
);

// Minimal, light-grey map — fewest labels of all
const light = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  { maxZoom: 19, subdomains: 'abcd', attribution: CARTO_ATTR, ...SMOOTH }
);

// Satellite imagery
const satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { maxZoom: 19, attribution: 'Imagery &copy; Esri', ...SMOOTH }
);

// Topographic — contour lines and shaded relief (busier, but rich terrain)
const terrain = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Style: &copy; OpenTopoMap (CC-BY-SA)',
  ...SMOOTH,
});

// --- Lock the map to Japan so it can't pan to other countries ---
// (West edge set to 120°E so the single out-of-Japan event — the 1523 Ningbo
// incident, which took place in China — is still reachable on the map.)
const JAPAN_BOUNDS = L.latLngBounds([24.0, 120.0], [46.2, 153.5]);

// --- Create the map, framed on central Japan ---
const map = L.map('map', {
  center: [36.5, 137.8],
  zoom: 6,
  minZoom: 5,
  maxZoom: 18,
  layers: [modern],
  // Render vector overlays (provinces, domains, routes) on a CANVAS instead of SVG.
  // SVG re-paints every polygon path on each zoom frame and is the main cause of
  // janky zoom when those overlays are on; canvas is dramatically smoother.
  preferCanvas: true,
  zoomControl: true,
  maxBounds: JAPAN_BOUNDS,
  maxBoundsViscosity: 1.0,
  // Zooming: snappy full-level steps from the +/- buttons & keyboard, and a
  // responsive mouse wheel (was sluggish: half-steps + 120 px/level).
  zoomSnap: 0.5,
  zoomDelta: 1,
  wheelPxPerZoomLevel: 60,
  wheelDebounceTime: 20,
});
// Drop the "Leaflet" badge from the map — it's credited on the Sources page instead.
// (The required © OpenStreetMap / © CARTO tile attributions stay.)
map.attributionControl.setPrefix(false);

// --- "Reset view" button (sits under the +/- zoom control, top-left) ---
// Flies the camera back up to the whole-Japan overview and closes any open panel.
const HOME_VIEW = { center: [36.5, 137.8], zoom: 6 };
const ResetViewControl = L.Control.extend({
  options: { position: 'topleft' },
  onAdd: function (m) {
    const bar = L.DomUtil.create('div', 'leaflet-bar reset-view');
    const btn = L.DomUtil.create('a', '', bar);
    btn.href = '#';
    btn.title = 'Reset view — zoom back out to all of Japan';
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Reset view');
    btn.innerHTML = '⌂';
    L.DomEvent.on(btn, 'click', L.DomEvent.stop);
    L.DomEvent.on(btn, 'click', function () {
      if (typeof hideBattleInfo === 'function') hideBattleInfo();
      m.flyTo(HOME_VIEW.center, HOME_VIEW.zoom, { duration: 0.8 });
    });
    L.DomEvent.disableClickPropagation(bar);
    return bar;
  },
});
map.addControl(new ResetViewControl());

// ---- Castles overlay (toggle in the top-right control) ----
const CASTLE_TYPE_LABEL = {
  yamashiro: 'mountain castle (yamashiro)',
  hirayamajiro: 'hilltop castle (hirayamajiro)',
  hirajiro: 'flatland castle (hirajiro)',
  mizujiro: 'water castle (mizujiro)',
};
const CASTLE_TYPE_CLASS = { yamashiro: 'cy', hirayamajiro: 'ch', hirajiro: 'cf', mizujiro: 'cw' };

function castleIcon(type) {
  return L.divIcon({
    className: '',
    html: `<div class="castle ${CASTLE_TYPE_CLASS[type] || 'cf'}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    tooltipAnchor: [0, -8],
  });
}

const castleLayer = L.layerGroup(
  (typeof CASTLES !== 'undefined' ? CASTLES : []).map((c) => {
    const m = L.marker([c.lat, c.lon], { icon: castleIcon(c.type), title: c.name });
    m.bindTooltip(
      `<strong>${escapeHtml(c.name)}</strong><br>${escapeHtml(CASTLE_TYPE_LABEL[c.type] || c.type)}${
        c.clan ? '<br>' + escapeHtml(c.clan) : ''
      }`,
      { direction: 'top', className: 'castle-label' }
    );
    return m;
  })
);

// ---- March-routes overlay ----
const ROUTE_COLORS = ['#e67e22', '#a569bd', '#17a2a2'];

// Small direction arrows along a route (one at each segment's midpoint). The
// screen angle is zoom-invariant, so we compute it once at a fixed zoom.
function routeSegmentAngle(w1, w2) {
  const a = map.project(L.latLng(w1.lat, w1.lon), 8);
  const b = map.project(L.latLng(w2.lat, w2.lon), 8);
  return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
}
function addRouteArrows(waypoints, layer, color) {
  for (let i = 0; i < waypoints.length - 1; i++) {
    const w1 = waypoints[i];
    const w2 = waypoints[i + 1];
    const angle = routeSegmentAngle(w1, w2);
    L.marker([(w1.lat + w2.lat) / 2, (w1.lon + w2.lon) / 2], {
      interactive: false,
      keyboard: false,
      icon: L.divIcon({
        className: '',
        html: `<span class="route-arrow" style="transform:rotate(${angle}deg);color:${color}">➤</span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      }),
    }).addTo(layer);
  }
}

// De-duplicate route-waypoint markers so two routes that share a point (e.g. the Western
// & Eastern armies both reaching the Sekigahara battlefield) don't drop two overlapping
// labels — WITHOUT hiding genuinely distinct nearby waypoints (e.g. a commander's HQ a few
// hundred metres from the battlefield centre). Merge only when the points are essentially
// coincident (<60 m) OR share the same base name (text before "(") and are close (<1.5 km).
// `placed` holds { lat, lon, base } entries.
function wpBase(name) {
  return String(name || '').split('(')[0].trim().toLowerCase();
}
function wpAlreadyPlaced(placed, lat, lon, name) {
  const base = wpBase(name);
  return placed.some((p) => {
    const d = L.latLng(p.lat, p.lon).distanceTo([lat, lon]);
    return d < 60 || (d < 1500 && base && p.base === base);
  });
}

const routesLayer = L.layerGroup();
const routeWpPlaced = []; // shared across all routes in the always-on layer
(typeof MARCH_ROUTES !== 'undefined' ? MARCH_ROUTES : []).forEach((r, i) => {
  const color = ROUTE_COLORS[i % ROUTE_COLORS.length];
  const latlngs = (r.waypoints || []).map((w) => [w.lat, w.lon]);
  if (latlngs.length > 1) {
    const line = L.polyline(latlngs, { color, weight: 3.5, opacity: 0.9, dashArray: '7 7' });
    line.bindTooltip(`${escapeHtml(r.campaign)}${r.year ? ' (' + r.year + ')' : ''}`, {
      sticky: true,
      className: 'route-label',
    });
    routesLayer.addLayer(line);
  }
  (r.waypoints || []).forEach((w, j) => {
    if (wpAlreadyPlaced(routeWpPlaced, w.lat, w.lon, w.name)) return; // skip duplicate-of-same-place marker
    routeWpPlaced.push({ lat: w.lat, lon: w.lon, base: wpBase(w.name) });
    const cm = L.circleMarker([w.lat, w.lon], {
      radius: 4,
      color: '#fff',
      weight: 1,
      fillColor: color,
      fillOpacity: 1,
    });
    cm.bindTooltip(`${j + 1}. ${escapeHtml(w.name)}`, { direction: 'top', className: 'route-label' });
    routesLayer.addLayer(cm);
  });
  addRouteArrows(r.waypoints || [], routesLayer, color);
});

// ---- Events overlay (non-battle history; year-filtered by the slider when on — see refreshEvents) ----
const EVENT_TYPE = {
  contact: { cls: 'ev-contact', glyph: '⚓︎', label: 'Foreign contact' },
  capital: { cls: 'ev-capital', glyph: '★', label: 'Capital / seat of power' },
  culture: { cls: 'ev-culture', glyph: '⛩︎', label: 'Religion / culture / economy' },
  incident: { cls: 'ev-incident', glyph: '⚠︎', label: 'Incident / rebellion' },
  politics: { cls: 'ev-politics', glyph: '⚑︎', label: 'Politics / decree / transition' },
  disaster: { cls: 'ev-disaster', glyph: '≋', label: 'Natural disaster' },
};
function eventIcon(type) {
  const t = EVENT_TYPE[type] || EVENT_TYPE.incident;
  return L.divIcon({
    className: '',
    html: `<div class="event-icon ${t.cls}">${t.glyph}</div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    tooltipAnchor: [0, -12],
  });
}
// Each event keeps a reference to its marker so the Events overlay can be filtered
// by the year slider instead of showing every event at once.
const eventMarkers = (typeof EVENTS !== 'undefined' ? EVENTS : []).map((ev) => {
  const m = L.marker([ev.location.lat, ev.location.lon], { icon: eventIcon(ev.type), title: ev.name });
  m.bindTooltip(
    `${escapeHtml(ev.name)} <span class="evt-yr">${escapeHtml(String(ev.dateLabel || ev.year || ''))}</span>`,
    { direction: 'top', className: 'castle-label' }
  );
  m.on('click', () => {
    showBattleInfo(ev);
    focusBattle(ev);
  });
  return { event: ev, marker: m };
});
const eventsLayer = L.layerGroup();
let eventsOn = false; // true while the Events overlay is toggled on
// Sync the events layer to the current year (or show them all in overview mode).
function refreshEvents() {
  eventsLayer.clearLayers();
  if (!eventsOn) return;
  for (const em of eventMarkers) {
    if (showAll || battleYears(em.event).includes(currentYear)) eventsLayer.addLayer(em.marker);
  }
}

// ---- People overlay (the actors of history; shown across their lifespan when the slider is on) ----
// A person differs from an event: they are visible for EVERY year between birth and
// death (personActiveInYear), but only their birth & death years join the slider ticks
// (personTickYears) — otherwise a 50-year life would flood the timeline with ticks.
const PERSON_ROLE = {
  sovereign: { cls: 'pn-sovereign', glyph: '♔', label: 'Emperor / shogun / regent' },
  warlord:   { cls: 'pn-warlord',   glyph: '⚔', label: 'Daimyō / general / samurai' },
  religious: { cls: 'pn-religious', glyph: '☸', label: 'Monk / religious founder' },
  culture:   { cls: 'pn-culture',   glyph: '✎', label: 'Poet / writer / artist' },
  statesman: { cls: 'pn-statesman', glyph: '⚑', label: 'Reformer / statesman' },
};
function personIcon(role) {
  const t = PERSON_ROLE[role] || PERSON_ROLE.warlord;
  return L.divIcon({
    className: '',
    html: `<div class="person-icon ${t.cls}">${t.glyph}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    tooltipAnchor: [0, -14],
  });
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
const personMarkers = (typeof PEOPLE !== 'undefined' ? PEOPLE : []).map((p) => {
  const m = L.marker([p.location.lat, p.location.lon], { icon: personIcon(p.role), title: p.name });
  m.bindTooltip(
    `${escapeHtml(p.name)} <span class="evt-yr">${escapeHtml(String(p.dateLabel || ''))}</span>`,
    { direction: 'top', className: 'castle-label' }
  );
  m.on('click', () => {
    showPersonInfo(p);
    focusBattle(p);
  });
  return { person: p, marker: m };
});
const peopleLayer = L.layerGroup();
let peopleOn = false; // true while the People overlay is toggled on
function refreshPeople() {
  peopleLayer.clearLayers();
  if (!peopleOn) return;
  for (const pm of personMarkers) {
    if (showAll || personActiveInYear(pm.person, currentYear)) peopleLayer.addLayer(pm.marker);
  }
}

// People legend — shown only while the People overlay is on.
const peopleLegend = L.control({ position: 'bottomleft' });
peopleLegend.onAdd = function () {
  const div = L.DomUtil.create('div', 'castle-legend');
  div.innerHTML =
    '<div class="cl-title">People</div>' +
    Object.keys(PERSON_ROLE)
      .map((k) => {
        const t = PERSON_ROLE[k];
        return `<div><span class="person-icon ${t.cls} pn-legend">${t.glyph}</span> ${t.label}</div>`;
      })
      .join('');
  return div;
};
map.on('overlayadd', (e) => {
  if (e.layer === peopleLayer) peopleLegend.addTo(map);
});
map.on('overlayremove', (e) => {
  if (e.layer === peopleLayer) map.removeControl(peopleLegend);
});
// Tie the People overlay to the timeline: when on, figures are lifespan-filtered and
// their birth/death years join the slider range/ticks. When off, snap back if needed.
map.on('overlayadd', (e) => {
  if (e.layer !== peopleLayer) return;
  peopleOn = true;
  recomputeYears();
  refreshPeople();
});
map.on('overlayremove', (e) => {
  if (e.layer !== peopleLayer) return;
  peopleOn = false;
  recomputeYears();
  if (!showAll && currentYear != null && (currentYear < MIN_YEAR || currentYear > MAX_YEAR)) {
    showYear(nearestEventYear(currentYear));
  } else {
    refreshPeople();
  }
});

// ---- Historical map overlays (Ritsumeikan Map Warper, georeferenced) ----
// These old maps are drawn ON TOP of the modern base (not instead of it), so the
// floating opacity slider can fade them over today's map. They live in their own
// "pane" whose z-index sits ABOVE the base tiles (200) but BELOW the routes (400)
// and markers (600) — so battle pins and march routes stay on top of the paper map.
map.createPane('historicalTiles');
map.getPane('historicalTiles').style.zIndex = 250;
map.getPane('historicalTiles').style.pointerEvents = 'none'; // never block panning/clicks

const HIST_OPACITY = 0.85; // starting opacity (matches the slider's default value)
const histOpts = { pane: 'historicalTiles', opacity: HIST_OPACITY, minZoom: 5, maxZoom: 18, ...SMOOTH };

const genrokuMap = L.tileLayer('https://mapwarper.h-gis.jp/maps/tile/5161/{z}/{x}/{y}.png', {
  ...histOpts,
  maxNativeZoom: 17, // keep showing (scaled) tiles past z17 instead of vanishing
  attribution: 'Historical map: Genroku 3 (1690) &mdash; Ritsumeikan Map Warper',
});
const sekisuiMap = L.tileLayer('https://mapwarper.h-gis.jp/maps/tile/4056/{z}/{x}/{y}.png', {
  ...histOpts,
  maxNativeZoom: 17,
  attribution: 'Historical map: Nagakubo Sekisui (1779) &mdash; Ritsumeikan Map Warper',
});
const oedoMap = L.tileLayer('https://mapwarper.h-gis.jp/maps/tile/4149/{z}/{x}/{y}.png', {
  ...histOpts,
  maxNativeZoom: 18,
  attribution: 'Historical map: Ōedo Ōezu (1860) &mdash; Ritsumeikan Map Warper',
});

// Display name + the blurb shown in the opacity panel for each old map.
const HISTORICAL_MAPS = [
  { name: 'Genroku map (1690)', layer: genrokuMap, blurb: 'Genroku 3 (1690) · whole Japan' },
  { name: 'Sekisui map (1779)', layer: sekisuiMap, blurb: 'Nagakubo Sekisui (1779) · whole Japan' },
  { name: 'Ōedo map (1860)', layer: oedoMap, blurb: 'Ōedo Ōezu (1860) · Edo / Tokyo only' },
];
const historicalLayers = HISTORICAL_MAPS.map((h) => h.layer);

// Build the overlays list: old maps first, then the existing feature overlays.
const overlays = {};
HISTORICAL_MAPS.forEach((h) => { overlays[h.name] = h.layer; });
overlays['Castles (城)'] = castleLayer;
overlays['March routes'] = routesLayer;
overlays['Events'] = eventsLayer;
overlays['People'] = peopleLayer;

const layerControl = L.control.layers(
  { Modern: modern, Light: light, Satellite: satellite, Terrain: terrain },
  overlays,
  { position: 'topright' } // hover to open (Leaflet default) — with a delayed close, patched below
);
// Keep the hover behaviour, but wait ~0.8s before collapsing instead of closing the
// instant the cursor moves away — so there's time to reach the panel and pick a map.
// Patched BEFORE addTo, because Leaflet binds the mouseleave→collapse handler during addTo.
if (typeof layerControl.collapse === 'function') {
  let _lcTimer = null;
  const _origCollapse = layerControl.collapse;
  const _origExpand = layerControl.expand;
  layerControl.collapse = function () { clearTimeout(_lcTimer); _lcTimer = setTimeout(() => _origCollapse.call(this), 800); return this; };
  layerControl.expand = function () { clearTimeout(_lcTimer); return _origExpand.call(this); };
}
layerControl.addTo(map);

// Group headers inside the layer control so the three old maps read as one set
// ("pick one") distinct from the feature checkboxes below them. Leaflet rebuilds
// this whole list whenever an overlay is toggled or added (e.g. when provinces
// finish loading), so we re-insert the headers after every rebuild.
function labelLayerGroups() {
  const box = layerControl.getContainer();
  const ov = box && box.querySelector('.leaflet-control-layers-overlays');
  if (!ov) return;
  const labels = ov.querySelectorAll('label');
  const header = (txt) => {
    const d = L.DomUtil.create('div', 'layers-group');
    d.textContent = txt;
    return d;
  };
  if (labels[0]) ov.insertBefore(header('Historical maps (pick one)'), labels[0]);
  if (labels[HISTORICAL_MAPS.length]) {
    ov.insertBefore(header('Map features'), labels[HISTORICAL_MAPS.length]);
  }
}
const _origLayerUpdate = layerControl._update.bind(layerControl);
layerControl._update = function () {
  _origLayerUpdate();
  labelLayerGroups();
};
labelLayerGroups();

// ---- Floating opacity slider — appears only while an old map is shown ----
const opacityPanel = document.getElementById('opacityPanel');
const opacitySlider = document.getElementById('opacitySlider');
const opacityValue = document.getElementById('opacityValue');
const opacityTitle = document.getElementById('opacityTitle');

function applyHistOpacity(val) {
  opacityValue.textContent = Math.round(val * 100) + '%';
  historicalLayers.forEach((l) => l.setOpacity(val));
}
opacitySlider.addEventListener('input', (e) => applyHistOpacity(parseFloat(e.target.value)));
applyHistOpacity(parseFloat(opacitySlider.value)); // sync the % label on load

function showOpacityPanel(blurb) {
  if (blurb) opacityTitle.textContent = blurb;
  opacityPanel.classList.remove('hidden');
  opacityPanel.setAttribute('aria-hidden', 'false');
}
function hideOpacityPanel() {
  opacityPanel.classList.add('hidden');
  opacityPanel.setAttribute('aria-hidden', 'true');
}

// Make the three old maps mutually exclusive (switchable, like base layers) and
// show/hide the opacity panel as they come and go.
map.on('overlayadd', (e) => {
  const picked = HISTORICAL_MAPS.find((h) => h.layer === e.layer);
  if (!picked) return;
  historicalLayers.forEach((l) => { if (l !== e.layer && map.hasLayer(l)) map.removeLayer(l); });
  showOpacityPanel(picked.blurb);
  // The Ōedo sheet only covers Edo/Tokyo — fly there if we're zoomed out, so the
  // old map lands on screen instead of empty ocean.
  if (e.layer === oedoMap && map.getZoom() < 10) {
    map.flyTo([35.68, 139.76], 12, { duration: 1.4 });
  }
});
map.on('overlayremove', (e) => {
  if (!historicalLayers.includes(e.layer)) return;
  if (!historicalLayers.some((l) => map.hasLayer(l))) hideOpacityPanel();
});

// Castle-type legend — shown only while the Castles overlay is on.
const castleLegend = L.control({ position: 'bottomleft' });
castleLegend.onAdd = function () {
  const div = L.DomUtil.create('div', 'castle-legend');
  div.innerHTML =
    '<div class="cl-title">Castle type</div>' +
    '<div><span class="castle cy"></span> Mountain (yamashiro)</div>' +
    '<div><span class="castle ch"></span> Hilltop (hirayamajiro)</div>' +
    '<div><span class="castle cf"></span> Flatland (hirajiro)</div>' +
    '<div><span class="castle cw"></span> Water (mizujiro)</div>';
  return div;
};
map.on('overlayadd', (e) => {
  if (e.layer === castleLayer) castleLegend.addTo(map);
});
map.on('overlayremove', (e) => {
  if (e.layer === castleLayer) map.removeControl(castleLegend);
});

// Events legend — shown only while the Events overlay is on.
const eventsLegend = L.control({ position: 'bottomleft' });
eventsLegend.onAdd = function () {
  const div = L.DomUtil.create('div', 'castle-legend');
  div.innerHTML =
    '<div class="cl-title">Events</div>' +
    Object.keys(EVENT_TYPE)
      .map((k) => {
        const t = EVENT_TYPE[k];
        return `<div><span class="event-icon ${t.cls} ev-legend">${t.glyph}</span> ${t.label}</div>`;
      })
      .join('');
  return div;
};
map.on('overlayadd', (e) => {
  if (e.layer === eventsLayer) eventsLegend.addTo(map);
});
map.on('overlayremove', (e) => {
  if (e.layer === eventsLayer) map.removeControl(eventsLegend);
});
// Tie the Events overlay to the timeline: when on, events are year-filtered and their
// years join the slider range/ticks (so 552 & 1923 stay reachable). When off, battle-only.
map.on('overlayadd', (e) => {
  if (e.layer !== eventsLayer) return;
  eventsOn = true;
  recomputeYears();
  refreshEvents();
});
map.on('overlayremove', (e) => {
  if (e.layer !== eventsLayer) return;
  eventsOn = false;
  recomputeYears();
  if (!showAll && currentYear != null && (currentYear < MIN_YEAR || currentYear > MAX_YEAR)) {
    showYear(nearestEventYear(currentYear)); // snap back into the battle-only range
  } else {
    refreshEvents();
  }
});

// Keep map credits in the bottom-left so the info panel doesn't hide them
map.attributionControl.setPosition('bottomleft');

// ---- Provinces (旧国) overlay — local GeoJSON merged from CODH (CC BY-NC 4.0) ----
const PROVINCE_ATTR =
  '旧国境界 &copy; <a href="https://codh.rois.ac.jp/">CODH</a> 旧国・旧郡境界データセット (CC BY-NC 4.0)';
// The overlay appears in the layer control immediately (empty); the ~200 KB of
// province polygons are fetched LAZILY — only the first time the layer is switched on.
const provincesLayer = L.layerGroup();
let provincesLoaded = false;
layerControl.addOverlay(provincesLayer, 'Provinces (旧国)');
function loadProvinces() {
  if (provincesLoaded) return;
  provincesLoaded = true;
  fetch('data/provinces.geojson?v=' + Date.now())
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then((geo) => {
      L.geoJSON(geo, {
        smoothFactor: 1.5, // simplify polylines while drawing — fewer points, smoother zoom
        style: { color: '#7a5c3e', weight: 1, opacity: 0.7, fillColor: '#c8a15a', fillOpacity: 0.07 },
        onEachFeature: (feature, layer) => {
          const p = feature.properties || {};
          layer.bindTooltip(
            `<strong>${escapeHtml(p.name || '')}</strong>${
              p.yomi ? ' <span class="rj">' + escapeHtml(p.yomi) + '</span>' : ''
            }${p.pref ? '<br>' + escapeHtml(p.pref) : ''}`,
            { sticky: true, className: 'province-label' }
          );
          layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.28, weight: 2 }));
          layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.07, weight: 1 }));
        },
      }).addTo(provincesLayer);
    })
    .catch((err) => console.error('Could not load provinces.geojson', err));
}
// Lazy-load + show the CODH attribution only while the provinces overlay is on.
map.on('overlayadd', (e) => {
  if (e.layer !== provincesLayer) return;
  loadProvinces();
  map.attributionControl.addAttribution(PROVINCE_ATTR);
});
map.on('overlayremove', (e) => {
  if (e.layer === provincesLayer) map.attributionControl.removeAttribution(PROVINCE_ATTR);
});

// --- A reusable teardrop pin icon (pure CSS, no image files) ---
const battleIcon = L.divIcon({
  className: '',
  html: '<div class="battle-pin"></div>',
  iconSize: [30, 40],
  iconAnchor: [15, 38],
  tooltipAnchor: [0, -34],
});

// --- Build a marker for each battle (shown/hidden by the year slider) ---
const battleMarkers = BATTLES.map((battle) => {
  const marker = L.marker([battle.location.lat, battle.location.lon], {
    icon: battleIcon,
    title: battle.name,
  });

  // Name shows on hover only (above the pin), so dense years don't turn into
  // a wall of overlapping labels. Tapping/clicking still opens the full panel.
  marker.bindTooltip(battle.name, {
    direction: 'top',
    className: 'battle-label',
  });

  marker.on('click', () => {
    showBattleInfo(battle);
    focusBattle(battle);
  });

  return { battle, marker };
});

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

// Periods present in the data, ordered by their earliest battle year.
const ALL_PERIODS = [...new Set(BATTLES.map((b) => b.period).filter(Boolean))].sort((p1, p2) => {
  const minY = (p) =>
    Math.min(...BATTLES.filter((b) => b.period === p).flatMap((b) => battleYears(b)));
  return minY(p1) - minY(p2);
});
let selectedPeriods = new Set(ALL_PERIODS); // every era shown by default

// --- Era-segmented slider: each era's year range + a colour from the unified palette,
// so the slider's ticks read as era bands and the readout names the current era. ---
const ERA_COLORS = ['#7d8a55', '#c79a4e', '#5d7a96', '#4f8a85', '#8a5b76', '#b5653f', '#6b7a82', '#ffd96b'];
const ERA_RANGES = {};
for (const p of ALL_PERIODS) {
  const ys = BATTLES.filter((b) => b.period === p).flatMap((b) => battleYears(b));
  if (ys.length) ERA_RANGES[p] = [Math.min(...ys), Math.max(...ys)];
}
function eraColor(p) { const i = ALL_PERIODS.indexOf(p); return ERA_COLORS[(i < 0 ? 0 : i) % ERA_COLORS.length]; }
function eraForYear(y) {
  if (y == null) return null;
  for (const p of ALL_PERIODS) {
    const r = ERA_RANGES[p];
    if (r && y >= r[0] && y <= r[1]) return p;
  }
  return null;
}

// --- Clan detection (for the clan filter) ---------------------------------
// Battles store combatants as free text, so we detect clans by scanning the side
// names/leaders for known surnames, folding aliases (Hashiba → Toyotomi, Matsudaira
// → Tokugawa). Each battle gets a `_clans` Set; the dropdown lists every clan that
// turns up, with its battle count.
const CLAN_KEYS = [
  ['Oda', 'Oda'], ['Tokugawa', 'Tokugawa'], ['Matsudaira', 'Tokugawa'],
  ['Takeda', 'Takeda'], ['Hōjō', 'Hōjō'], ['Uesugi', 'Uesugi'], ['Imagawa', 'Imagawa'],
  ['Mōri', 'Mōri'], ['Shimazu', 'Shimazu'], ['Ōtomo', 'Ōtomo'], ['Ōuchi', 'Ōuchi'],
  ['Ryūzōji', 'Ryūzōji'], ['Chōsokabe', 'Chōsokabe'], ['Date', 'Date'],
  ['Azai', 'Azai'], ['Asai', 'Azai'], ['Rokkaku', 'Rokkaku'], ['Saitō', 'Saitō'],
  ['Miyoshi', 'Miyoshi'], ['Toyotomi', 'Toyotomi'], ['Hashiba', 'Toyotomi'],
  ['Mogami', 'Mogami'], ['Nanbu', 'Nanbu'], ['Asakura', 'Asakura'],
  ['Ashikaga', 'Ashikaga'], ['Hosokawa', 'Hosokawa'], ['Yamana', 'Yamana'],
  ['Amago', 'Amago'], ['Kōno', 'Kōno'], ['Satomi', 'Satomi'], ['Nitta', 'Nitta'],
  ['Kusunoki', 'Kusunoki'], ['Ashina', 'Ashina'], ['Hatakeyama', 'Hatakeyama'],
  ['Akechi', 'Akechi'], ['Shibata', 'Shibata'], ['Maeda', 'Maeda'],
];
function battleClanHay(b) {
  const c = b.combatants || {};
  return [c.side1 && c.side1.name, c.side1 && c.side1.leader, c.side2 && c.side2.name, c.side2 && c.side2.leader]
    .filter(Boolean)
    .join(' | ');
}
const clanCounts = {};
for (const b of BATTLES) {
  const hay = battleClanHay(b);
  const set = new Set();
  for (const [key, canon] of CLAN_KEYS) if (hay.includes(key)) set.add(canon);
  b._clans = set;
  for (const cl of set) clanCounts[cl] = (clanCounts[cl] || 0) + 1;
}
const CLAN_OPTIONS = Object.keys(clanCounts).sort(
  (a, b) => clanCounts[b] - clanCounts[a] || a.localeCompare(b)
);
let selectedClan = null; // when set, the map shows all of this clan's battles (any year)

function inSelectedPeriod(b) {
  return !b.period || selectedPeriods.has(b.period);
}

const slider = document.getElementById('yearSlider');
const yearValueEl = document.getElementById('yearValue');
const yearEventsEl = document.getElementById('yearEvents');
const yearTicksEl = document.getElementById('yearTicks');
const yearEraEl = document.getElementById('yearEra');

// The slider range + ticks are derived from the SELECTED periods, so toggling
// eras on/off expands or contracts the timeline (a union of the chosen eras).
let eventYears = [];
let MIN_YEAR = 0;
let MAX_YEAR = 0;

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
}

function renderTicks() {
  yearTicksEl.innerHTML = '';
  for (const y of eventYears) {
    const pct = ((y - MIN_YEAR) / Math.max(1, MAX_YEAR - MIN_YEAR)) * 100;
    const tick = document.createElement('div');
    tick.className = 'yearTick';
    tick.style.left = pct + '%';
    const tEra = eraForYear(y);
    if (tEra) tick.style.background = eraColor(tEra);
    tick.title = String(y);
    tick.addEventListener('click', () => showYear(y));
    yearTicksEl.appendChild(tick);
  }
}

function nearestEventYear(y) {
  if (!eventYears.length) return y;
  return eventYears.reduce((best, cur) => (Math.abs(cur - y) < Math.abs(best - y) ? cur : best), eventYears[0]);
}

recomputeYears();

// Cluster nearby markers — keeps the map readable, especially in the
// "Show all years" overview. Individual pins reappear when zoomed in.
const clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 45,
  showCoverageOnHover: false,
  spiderfyOnMaxZoom: true,
  disableClusteringAtZoom: 12,
});
clusterGroup.addTo(map);

// Layer + colour for the march route highlighted while a battle's panel is open
// (declared here, before the first showYear()/hideBattleInfo() call).
const activeRouteLayer = L.layerGroup().addTo(map);
const ACTIVE_ROUTE_COLOR = '#ffd96b';

let currentYear = null;
let currentPresent = [];
let showAll = false;

// ---- Daimyō domains overlay — clan territories that filter by the year slider ----
// Built from the province outlines (grouped per clan, in build_domains.py). Each
// domain carries an active year range, so as you move the slider clans appear and
// disappear (Imagawa gone after Okehazama 1560; Tokugawa inherits Kai/Shinano once
// Takeda falls in 1582; Mōri rises as Ōuchi fades). Province-level approximation of
// each clan's characteristic (peak) extent — see NOTES.md for caveats.
const DOMAIN_FALLBACK_COLOR = '#e67e22';
const domainsLayer = L.layerGroup();
let domainEntries = []; // [{ layer, props }] — one pre-built GeoJSON layer per clan
let domainsOn = false;
let domainsLegendDiv = null;

function domainRangeLabel(p) {
  if (p.startYear != null && p.endYear != null) return `${p.startYear}–${p.endYear}`;
  if (p.startYear != null) return `${p.startYear}+`;
  if (p.endYear != null) return `–${p.endYear}`;
  return '';
}
function domainActive(p, year) {
  if (year == null) return false;
  const s = p.startYear != null ? p.startYear : -Infinity;
  const e = p.endYear != null ? p.endYear : Infinity;
  return year >= s && year <= e;
}
function styleDomain(color) {
  const c = color || DOMAIN_FALLBACK_COLOR;
  return { color: c, weight: 1.2, opacity: 0.7, fillColor: c, fillOpacity: 0.25 };
}

// Show/hide each clan's pre-built layer so only those active in the current year
// are on the map. Cheap (just toggles membership) so it's fine on every slider tick.
function updateDomains() {
  if (!domainsOn) return;
  for (const { layer, props } of domainEntries) {
    const show = domainActive(props, currentYear);
    const has = domainsLayer.hasLayer(layer);
    if (show && !has) domainsLayer.addLayer(layer);
    else if (!show && has) domainsLayer.removeLayer(layer);
  }
  refreshDomainsLegend();
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
function renderDomainHTML(p) {
  const provs = Array.isArray(p.provinces) && p.provinces.length
    ? `<h3>Provinces (旧国)</h3><p>${escapeHtml(p.provinces.join('、'))}</p>`
    : '';
  return `
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

// Legend (clan colour key) listing the clans active in the current year, shown
// only while the Domains overlay is on. It refreshes as you scrub the slider.
function activeDomainProps() {
  return domainEntries.filter((e) => domainActive(e.props, currentYear)).map((e) => e.props);
}
function refreshDomainsLegend() {
  if (!domainsLegendDiv) return;
  // A clan can have several time-slices active at once — list each clan once.
  const seen = new Set();
  const clans = [];
  for (const p of activeDomainProps()) {
    if (seen.has(p.clan)) continue;
    seen.add(p.clan);
    clans.push(p);
  }
  const yr = currentYear != null ? currentYear : '';
  domainsLegendDiv.innerHTML =
    `<div class="cl-title">Daimyō domains · ${escapeHtml(String(yr))}</div>` +
    (clans.length
      ? `<div class="dm-items">${clans
          .map(
            (p) =>
              `<div><span class="dm-sw" style="background:${p.color || DOMAIN_FALLBACK_COLOR}"></span> ${escapeHtml(p.clan || p.name || '')}</div>`
          )
          .join('')}</div>`
      : '<div class="dm-foot">No domains mapped for this year</div>') +
    '<div class="dm-foot">province-level approximation</div>';
}
const domainsLegend = L.control({ position: 'bottomleft' });
domainsLegend.onAdd = function () {
  domainsLegendDiv = L.DomUtil.create('div', 'castle-legend domains-legend');
  refreshDomainsLegend();
  return domainsLegendDiv;
};

// The overlay appears in the control immediately; the ~270 KB of clan polygons are
// fetched LAZILY the first time the Domains layer is switched on.
let domainsLoaded = false;
layerControl.addOverlay(domainsLayer, 'Domains (大名)');
function loadDomains() {
  if (domainsLoaded) return Promise.resolve();
  domainsLoaded = true;
  return fetch('data/domains.geojson?v=' + Date.now())
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then((geo) => {
      domainEntries = (geo.features || []).map((feature) => {
        const props = feature.properties || {};
        const layer = L.geoJSON(feature, {
          smoothFactor: 1.5, // simplify polylines while drawing — fewer points, smoother zoom
          style: () => styleDomain(props.color),
          onEachFeature: (feat, lyr) => {
            lyr.bindTooltip(
              `<strong>${escapeHtml(props.name || props.clan || '')}</strong>${
                props.daimyo ? '<br>' + escapeHtml(props.daimyo) : ''
              }<br><span class="dm-yr">${escapeHtml(domainRangeLabel(props))}</span>`,
              { sticky: true, className: 'route-label' }
            );
            lyr.on('click', () => showDomainInfo(props));
          },
        });
        return { layer, props };
      });
    })
    .catch((err) => console.error('Could not load domains.geojson', err));
}

map.on('overlayadd', (e) => {
  if (e.layer !== domainsLayer) return;
  domainsOn = true;
  domainsLegend.addTo(map);
  loadDomains().then(() => { if (domainsOn) updateDomains(); });
});
map.on('overlayremove', (e) => {
  if (e.layer !== domainsLayer) return;
  domainsOn = false;
  map.removeControl(domainsLegend);
});

// Which battles belong on the map right now, given the year (or "show all")
// and which eras (periods) are selected.
function visibleBattles() {
  return BATTLES.filter((b) => {
    if (!inSelectedPeriod(b)) return false;
    if (selectedClan) return b._clans && b._clans.has(selectedClan); // clan view: all years
    return showAll || battleYears(b).includes(currentYear);
  });
}

// Sync the cluster group to exactly the visible battles.
function refreshMarkers(opts) {
  opts = opts || {};
  const vis = visibleBattles();
  const visSet = new Set(vis);
  const layers = [];
  for (const m of battleMarkers) if (visSet.has(m.battle)) layers.push(m.marker);
  clusterGroup.clearLayers();
  clusterGroup.addLayers(layers);
  currentPresent = vis;

  hideBattleInfo(); // a previously open battle may no longer be shown
  updateEventsText(vis);
  updateDomains(); // clans active in the new year (no-op unless the overlay is on)
  refreshEvents(); // sync the Events overlay to the year (no-op unless it's on)
  refreshPeople(); // sync the People overlay to the year (no-op unless it's on)
  if (yearEraEl) yearEraEl.textContent = (showAll || currentYear == null) ? '' : (eraForYear(currentYear) || '');
  if (opts.frame !== false) frameBattles(vis);
}

function updateEventsText(vis) {
  if (selectedClan) {
    yearEventsEl.innerHTML = `Showing all ${vis.length} ${escapeHtml(selectedClan)} battle${vis.length === 1 ? '' : 's'} (every year)`;
    return;
  }
  if (showAll) {
    const eras = ALL_PERIODS.length > 1 ? ' &middot; ' + escapeHtml([...selectedPeriods].join(', ')) : '';
    const evTxt = eventsOn ? ` &amp; ${eventMarkers.length} event${eventMarkers.length === 1 ? '' : 's'}` : '';
    const pplTxt = peopleOn ? ` &amp; ${personMarkers.length} ${personMarkers.length === 1 ? 'figure' : 'figures'}` : '';
    yearEventsEl.innerHTML = `Showing all ${vis.length} battle${vis.length === 1 ? '' : 's'}${evTxt}${pplTxt}${eras}`;
    return;
  }
  const evs = eventsOn
    ? eventMarkers.filter((em) => battleYears(em.event).includes(currentYear)).map((em) => em.event)
    : [];
  const ppl = peopleOn
    ? personMarkers.filter((pm) => personActiveInYear(pm.person, currentYear)).map((pm) => pm.person)
    : [];
  if (vis.length === 0 && evs.length === 0 && ppl.length === 0) {
    yearEventsEl.innerHTML = '<span class="noEvents">Nothing recorded this year</span>';
    return;
  }
  const parts = [];
  if (vis.length) parts.push(`${vis.length} battle${vis.length > 1 ? 's' : ''}: ${vis.map((b) => escapeHtml(b.name)).join(' · ')}`);
  if (evs.length) parts.push(`${evs.length} event${evs.length > 1 ? 's' : ''}: ${evs.map((e) => escapeHtml(e.name)).join(' · ')}`);
  if (ppl.length) {
    const names = ppl.length <= 6 ? ': ' + ppl.map((p) => escapeHtml(p.name)).join(' · ') : '';
    parts.push(`${ppl.length} ${ppl.length === 1 ? 'figure' : 'figures'} alive${names}`);
  }
  yearEventsEl.innerHTML = parts.join(' &nbsp;&middot;&nbsp; ');
}

function showYear(year, opts) {
  opts = opts || {};
  clearClanFilter(); // moving to a specific year leaves clan view
  showAll = false;
  setShowAllButton();
  currentYear = year;
  slider.value = year;
  yearValueEl.textContent = year;
  refreshMarkers(opts);
  setHash('y=' + year);
}

// Smoothly move/zoom the map so all of a year's battles are in view, leaving
// extra room at the bottom so markers don't hide behind the slider bar.
function frameBattles(present) {
  if (!present.length) return;

  // A single battle has a zero-size "bounds", which makes fitBounds misbehave
  // (it computes an invalid zoom and does nothing). Fly straight to the point.
  if (present.length === 1) {
    const b = present[0];
    map.flyTo([b.location.lat, b.location.lon], 9, { duration: 1.0 });
    return;
  }

  const bounds = L.latLngBounds(present.map((b) => [b.location.lat, b.location.lon]));
  map.flyToBounds(bounds, {
    paddingTopLeft: [40, 70], // room under the title banner
    paddingBottomRight: [40, 170], // room above the slider bar
    maxZoom: 9, // don't zoom in too far when battles are close together
    duration: 1.0,
  });
}

// Jump to the previous / next year that actually has a battle
function stepEventYear(direction) {
  const next =
    direction < 0
      ? eventYears.filter((y) => y < currentYear).pop()
      : eventYears.filter((y) => y > currentYear).shift();
  if (next != null) showYear(next);
}

// While dragging, update the markers live but DON'T fly (it would be jerky);
// frame the map once the slider is released.
slider.addEventListener('input', () => showYear(parseInt(slider.value, 10), { frame: false }));
slider.addEventListener('change', () => frameBattles(currentPresent));
document.getElementById('prevEvent').addEventListener('click', () => stepEventYear(-1));
document.getElementById('nextEvent').addEventListener('click', () => stepEventYear(1));

// --- "Show all years" toggle + period filter -----------------------------
const showAllBtn = document.getElementById('showAllBtn');
const periodFilter = document.getElementById('periodFilter');

function setShowAllButton() {
  showAllBtn.textContent = showAll ? '↩ Back to timeline' : 'Show all years';
  showAllBtn.classList.toggle('active', showAll);
}

showAllBtn.addEventListener('click', () => {
  clearClanFilter(); // the overview shows every clan, so leave any clan view
  showAll = !showAll;
  setShowAllButton();
  if (showAll) {
    yearValueEl.textContent = 'All';
    refreshMarkers();
  } else {
    showYear(currentYear != null ? currentYear : (eventYears.includes(1600) ? 1600 : MAX_YEAR));
  }
});

// Period chips — multi-select. The slider range is the union of selected eras.
function renderPeriodChips() {
  periodFilter.innerHTML = '';
  for (const p of ALL_PERIODS) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (selectedPeriods.has(p) ? ' active' : '');
    chip.textContent = p;
    chip.addEventListener('click', () => togglePeriod(p));
    periodFilter.appendChild(chip);
  }
}

function togglePeriod(p) {
  if (selectedPeriods.has(p)) {
    if (selectedPeriods.size === 1) return; // keep at least one era selected
    selectedPeriods.delete(p);
  } else {
    selectedPeriods.add(p);
  }
  renderPeriodChips();
  recomputeYears();
  if (showAll) {
    refreshMarkers();
  } else {
    currentYear = nearestEventYear(currentYear);
    showYear(currentYear);
  }
}

renderPeriodChips();

// --- Clan filter dropdown: focus on one clan's battles across the whole timeline ---
const clanFilter = document.getElementById('clanFilter');
function populateClanFilter() {
  clanFilter.innerHTML =
    '<option value="">All clans</option>' +
    CLAN_OPTIONS.map(
      (cl) => `<option value="${escapeHtml(cl)}">${escapeHtml(cl)} (${clanCounts[cl]})</option>`
    ).join('');
}
populateClanFilter();

function clearClanFilter() {
  if (!selectedClan) return;
  selectedClan = null;
  if (clanFilter) clanFilter.value = '';
}

// Enter clan view: show every battle that involves the clan, across all years.
function showClan(clan) {
  selectedClan = clan;
  showAll = false;
  setShowAllButton();
  yearValueEl.textContent = clan; // the big readout shows the clan instead of a year
  refreshMarkers(); // visibleBattles() now filters to the clan and frames the set
}

clanFilter.addEventListener('change', () => {
  const v = clanFilter.value;
  if (v) showClan(v);
  else showYear(currentYear != null ? currentYear : MAX_YEAR); // back to the timeline
});

// Start on Sekigahara's year if present, otherwise the most recent year.
// Keep the wide Japan overview on first load (don't auto-frame yet).
setShowAllButton();
showYear(eventYears.includes(1600) ? 1600 : MAX_YEAR, { frame: false });

// --- Fly to a battle, nudging it left so the info panel doesn't cover it ---
function focusBattle(battle) {
  // If this battle has march route(s), frame all their waypoints instead of the point.
  const routes = routesForBattle(battle);
  const pts = routes.flatMap((r) => (r.waypoints || []).map((w) => [w.lat, w.lon]));
  if (pts.length > 1) {
    map.flyToBounds(L.latLngBounds(pts), {
      paddingTopLeft: [60, 90],
      paddingBottomRight: [window.innerWidth > 700 ? 460 : 40, 70], // room for the panel
      maxZoom: 11,
      duration: 1.8,
    });
    return;
  }

  const targetZoom = 12;
  let center = L.latLng(battle.location.lat, battle.location.lon);
  if (window.innerWidth > 700) {
    const point = map.project(center, targetZoom);
    point.x += 220; // half the panel width, in pixels
    center = map.unproject(point, targetZoom);
  }
  map.flyTo(center, targetZoom, { duration: 1.6 });
}

// --- A battle's march route, highlighted while its panel is open ---
function routesForBattle(b) {
  return (typeof MARCH_ROUTES !== 'undefined' ? MARCH_ROUTES : []).filter((r) => r.battleId === b.id);
}
const ACTIVE_ROUTE_PALETTE = ['#ffd96b', '#4fb3ff']; // gold, then blue for a second army
function drawActiveRoute(battle) {
  activeRouteLayer.clearLayers();
  const placed = []; // dedupe coincident waypoint markers across this battle's routes
  routesForBattle(battle).forEach((r, idx) => {
    if (!r.waypoints || r.waypoints.length < 2) return;
    const color = ACTIVE_ROUTE_PALETTE[idx % ACTIVE_ROUTE_PALETTE.length];
    L.polyline(r.waypoints.map((w) => [w.lat, w.lon]), {
      color,
      weight: 4,
      opacity: 0.95,
      dashArray: '9 6',
    })
      .bindTooltip(escapeHtml(r.campaign || r.army || ''), { sticky: true, className: 'route-label' })
      .addTo(activeRouteLayer);
    r.waypoints.forEach((w, j) => {
      if (wpAlreadyPlaced(placed, w.lat, w.lon, w.name)) return; // skip duplicate-of-same-place marker
      placed.push({ lat: w.lat, lon: w.lon, base: wpBase(w.name) });
      L.circleMarker([w.lat, w.lon], {
        radius: 5,
        color: '#1a1a1a',
        weight: 1.5,
        fillColor: color,
        fillOpacity: 1,
      })
        .bindTooltip(`${j + 1}. ${escapeHtml(w.name)}`, { direction: 'top', className: 'route-label' })
        .addTo(activeRouteLayer);
    });
    addRouteArrows(r.waypoints, activeRouteLayer, color);
  });
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

function hideBattleInfo() {
  const panel = document.getElementById('infoPanel');
  panel.classList.add('hidden');
  panel.setAttribute('aria-hidden', 'true');
  if (typeof activeRouteLayer !== 'undefined') activeRouteLayer.clearLayers();
  if (currentYear != null) setHash('y=' + currentYear);
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

function renderBattleHTML(battle) {
  const c = battle.combatants || {};
  const sideHTML = (s) => `
    <div class="side">
      <h4>${escapeHtml(s.name || '')}</h4>
      ${s.leader ? `<p><strong>Leader:</strong> ${escapeHtml(s.leader)}</p>` : ''}
      ${s.forces ? `<p><strong>Forces:</strong> ${escapeHtml(s.forces)}</p>` : ''}
    </div>`;
  const sides = [];
  if (c.side1) sides.push(sideHTML(c.side1));
  if (c.side2) sides.push(sideHTML(c.side2));

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

  return `
    <h2>${escapeHtml(battle.name)}</h2>
    <p class="meta">${escapeHtml(battle.dateLabel || battle.date || '')}${
    battle.period ? ' &middot; ' + escapeHtml(battle.period) : ''
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

// Clicking a battle link inside a person panel opens that battle.
document.getElementById('infoContent').addEventListener('click', (e) => {
  const a = e.target.closest('.battle-link');
  if (!a) return;
  e.preventDefault();
  const b = BATTLES.find((x) => x.id === a.getAttribute('data-battle'));
  if (!b) return;
  showBattleInfo(b);
  focusBattle(b);
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

// --- Close interactions ---
document.getElementById('closeBtn').addEventListener('click', hideBattleInfo);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideBattleInfo();
});

// --- Search: find a battle by name, clan, commander or place ---------------
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let searchMatches = [];

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
  res.sort((a, b) => b.s - a.s);
  return res.slice(0, 10);
}

function battleStartYear(b) {
  return b.year != null ? b.year : b.yearStart;
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
  }
  searchInput.value = '';
  hideSearchResults();
  searchInput.blur();
}

let _searchTimer = null;
searchInput.addEventListener('input', () => {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => {
    searchMatches = searchEverything(searchInput.value);
    renderSearchResults(searchMatches);
  }, 250);
});
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchMatches = searchEverything(searchInput.value);
    if (searchMatches.length) selectSearchResult(searchMatches[0]);
  } else if (e.key === 'Escape') {
    searchInput.value = '';
    hideSearchResults();
    searchInput.blur();
  }
});
document.addEventListener('click', (e) => {
  const box = document.getElementById('searchBox');
  if (box && !box.contains(e.target)) hideSearchResults();
});

// --- First-visit welcome / help card -------------------------------------
// Shows once automatically (remembered in localStorage); reopens via "Help".
(function () {
  const overlay = document.getElementById('welcomeOverlay');
  if (!overlay) return;
  const SEEN = 'jc_welcome_seen';
  const show = () => overlay.classList.remove('hidden');
  const hide = () => {
    overlay.classList.add('hidden');
    try { localStorage.setItem(SEEN, '1'); } catch (e) {}
  };
  let seen = false;
  try { seen = !!localStorage.getItem(SEEN); } catch (e) {}
  if (!seen) show();

  const start = document.getElementById('welcomeStart');
  const close = document.getElementById('welcomeClose');
  const help = document.getElementById('helpLink');
  if (start) start.addEventListener('click', hide);
  if (close) close.addEventListener('click', hide);
  if (help) help.addEventListener('click', (e) => { e.preventDefault(); show(); });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) hide(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) hide();
  });
})();

// --- Shareable deep-links -------------------------------------------------
// The URL hash captures the current view so a link can reopen it:
//   #y=1560  a year   ·  #b=okehazama  a battle  ·  #p=oda-nobunaga  a person  ·  #e=evt-tanegashima  an event
// We write with history.replaceState (no history spam, no hashchange loop), and
// suppress writes until the initial hash has been applied (so a shared link isn't
// clobbered by the default load). `var` avoids a temporal-dead-zone error from the
// initial showYear() that runs earlier in the file.
var _hashReady = false;
function setHash(s) { if (!_hashReady) return; try { history.replaceState(null, '', '#' + s); } catch (e) {} }
function isEventId(id) { return typeof EVENTS !== 'undefined' && EVENTS.some((e) => e.id === id); }
function applyHash() {
  const m = (location.hash || '').replace(/^#/, '').match(/^([ybpe])=(.+)$/);
  if (m) {
    const k = m[1];
    let v; try { v = decodeURIComponent(m[2]); } catch (e) { v = m[2]; }
    if (k === 'y') { const y = parseInt(v, 10); if (!isNaN(y)) showYear(Math.max(MIN_YEAR, Math.min(MAX_YEAR, y)), { frame: false }); }
    else if (k === 'b') { const b = BATTLES.find((x) => x.id === v); if (b) { showYear(battleStartYear(b), { frame: false }); showBattleInfo(b); focusBattle(b); } }
    else if (k === 'e') { const ev = (typeof EVENTS !== 'undefined' ? EVENTS : []).find((x) => x.id === v); if (ev) { showBattleInfo(ev); focusBattle(ev); } }
    else if (k === 'p') { const p = (typeof PEOPLE !== 'undefined' ? PEOPLE : []).find((x) => x.id === v); if (p) { showPersonInfo(p); focusBattle(p); } }
  }
  _hashReady = true; // from now on, user actions update the URL
}
applyHash();
window.addEventListener('hashchange', () => { _hashReady = false; applyHash(); });
