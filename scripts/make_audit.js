// Regenerates audit_data.json (compact, verifiable facts) from the source data files,
// for the fact-check workflow. Run: node make_audit.js
const fs = require('fs');
eval(fs.readFileSync(__dirname + '/../data/battles.js', 'utf8') + '\nglobalThis.__B = BATTLES;');
eval(fs.readFileSync(__dirname + '/../data/castles.js', 'utf8') + '\nglobalThis.__C = CASTLES;');
const dom = JSON.parse(fs.readFileSync(__dirname + '/../data/domains.geojson', 'utf8'));

const side = (s) => (s ? [s.name, s.leader].filter(Boolean).join(' — ') : '');

const battles = globalThis.__B.map((b) => ({
  id: b.id,
  n: b.name,
  y: b.year != null ? String(b.year) : (b.yearStart != null ? b.yearStart + '–' + b.yearEnd : ''),
  d: b.dateLabel || b.date || '',
  loc: (b.location && b.location.name) || '',
  la: b.location && b.location.lat,
  lo: b.location && b.location.lon,
  p: b.period || '',
  a: side(b.combatants && b.combatants.side1),
  b: side(b.combatants && b.combatants.side2),
  o: b.outcome || '',
}));
const castles = globalThis.__C.map((c) => ({ n: c.name, t: c.type, la: c.lat, lo: c.lon, clan: c.clan || '' }));
const domains = dom.features.map((f) => {
  const p = f.properties;
  return { clan: p.clan, name: p.name, daimyo: p.daimyo, s: p.startYear, e: p.endYear, prov: p.provinces };
});

fs.writeFileSync(__dirname + '/../data/audit_data.json', JSON.stringify({ battles, castles, domains }));
console.log(`wrote audit_data.json: ${battles.length} battles, ${castles.length} castles, ${domains.length} domains`);
