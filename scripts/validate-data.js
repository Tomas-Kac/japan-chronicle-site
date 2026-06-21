#!/usr/bin/env node
/* =====================================================================
 * validate-data.js — a safety net for editing the data by hand.
 *
 * Run it any time you change a data file (and publish-site.sh runs it for
 * you before every publish):   node scripts/validate-data.js
 *
 * It checks each entry for the fields the map needs, valid coordinates,
 * unique ids, and that people/battle links point at things that exist.
 * It prints clear ERRORS (which block publishing) and softer WARNINGS.
 * A typo like  lon:  ->  lno:  becomes a one-line message instead of a
 * silently missing marker on the live map.
 * ===================================================================== */
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'data');

// Load the data files (they declare const BATTLES / CASTLES / ... ). We eval them
// together so the consts share one scope, with a window shim for people.js.
global.window = {};
const files = ['battles.js', 'castles.js', 'routes.js', 'events.js', 'people.js'];
const src = files.map((f) => fs.readFileSync(path.join(DATA, f), 'utf8')).join('\n');

const errors = [];
const warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

// Japan-ish bounding box (battles abroad like Ningbo are allowed a wide west edge).
const inRange = (lat, lon) =>
  typeof lat === 'number' && typeof lon === 'number' &&
  lat > 24 && lat < 46 && lon > 119 && lon < 146;

function checkLoc(kind, id, loc) {
  if (!loc || typeof loc !== 'object') { E(`${kind} "${id}": missing location {}`); return; }
  if (typeof loc.lat !== 'number' || typeof loc.lon !== 'number')
    E(`${kind} "${id}": location.lat/lon must be numbers (got lat=${loc.lat}, lon=${loc.lon})`);
  else if (!inRange(loc.lat, loc.lon))
    W(`${kind} "${id}": coordinates look outside Japan (lat=${loc.lat}, lon=${loc.lon})`);
}
function checkImages(kind, id, images) {
  if (images == null) return;
  if (!Array.isArray(images)) { E(`${kind} "${id}": images must be an array`); return; }
  images.forEach((im, i) => {
    if (!im || !im.src) E(`${kind} "${id}": images[${i}] has no src`);
    else if (!/^https:\/\//.test(im.src)) W(`${kind} "${id}": images[${i}] src is not https`);
  });
}
function dupIds(kind, arr) {
  const seen = new Set();
  for (const x of arr) {
    if (x.id == null) { E(`${kind}: an entry has no id`); continue; }
    if (seen.has(x.id)) E(`${kind}: duplicate id "${x.id}"`);
    seen.add(x.id);
  }
}

const checks = `
  dupIds('battles', BATTLES);
  const _bids = new Set(BATTLES.map((x) => x.id));
  for (const b of BATTLES) {
    if (!b.name) E('battle "'+b.id+'": missing name');
    if (b.year == null && (b.yearStart == null || b.yearEnd == null) && !b.date)
      E('battle "'+b.id+'": needs year, or yearStart+yearEnd, or date');
    checkLoc('battle', b.id, b.location);
    checkImages('battle', b.id, b.images);
    for (const id of (Array.isArray(b.leadsTo) ? b.leadsTo : (b.leadsTo ? [b.leadsTo] : [])))
      if (!_bids.has(id)) E('battle "'+b.id+'": leadsTo "'+id+'" does not exist');
  }
  const _castleNames = new Set();
  for (const c of CASTLES) {
    if (!c.name) { E('castle: an entry has no name'); continue; }
    if (_castleNames.has(c.name)) E('castle: duplicate name "'+c.name+'"'); else _castleNames.add(c.name);
    checkLoc('castle', c.name, { lat: c.lat, lon: c.lon });
  }
  dupIds('events', EVENTS);
  for (const e of EVENTS) {
    if (!e.name) E('event "'+e.id+'": missing name');
    if (e.year == null && (e.yearStart == null || e.yearEnd == null)) E('event "'+e.id+'": needs year or yearStart+yearEnd');
    checkLoc('event', e.id, e.location);
    checkImages('event', e.id, e.images);
  }
  dupIds('people', PEOPLE);
  const battleIds = new Set(BATTLES.map((b) => b.id));
  for (const p of PEOPLE) {
    if (!p.name) E('person "'+p.id+'": missing name');
    if (p.born == null || p.died == null) W('person "'+p.id+'": missing born/died');
    else if (p.born > p.died) E('person "'+p.id+'": born ('+p.born+') is after died ('+p.died+')');
    checkLoc('person', p.id, p.location);
    checkImages('person', p.id, p.images);
    for (const bid of (p.battles || [])) if (!battleIds.has(bid)) E('person "'+p.id+'": battle link "'+bid+'" does not exist');
  }
  ({ b: BATTLES.length, c: CASTLES.length, e: EVENTS.length, p: PEOPLE.length, r: (typeof MARCH_ROUTES!=='undefined'?MARCH_ROUTES.length:0) });
`;

let counts;
try {
  counts = eval(src + '\n' + checks);
} catch (err) {
  console.error('✗ A data file failed to parse:\n  ' + err.message);
  process.exit(1);
}

if (warnings.length) { console.log('Warnings (' + warnings.length + '):'); warnings.forEach((w) => console.log('  ⚠ ' + w)); }
if (errors.length) {
  console.error('\n✗ ' + errors.length + ' ERROR(S) — fix these before publishing:');
  errors.forEach((e) => console.error('  • ' + e));
  process.exit(1);
}
console.log('✓ data OK — ' + counts.b + ' battles, ' + counts.c + ' castles, ' + counts.e + ' events, ' + counts.p + ' people, ' + counts.r + ' routes; no errors.');
