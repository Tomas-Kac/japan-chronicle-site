#!/usr/bin/env node
/* =====================================================================
 * apply-citations.js — attach verified source citations to data entries.
 *
 * Part of the verify-and-cite sweep (2026-06-30): a verification pass
 * checks each entry against its Wikipedia article; this script then
 * mechanically inserts the approved citations, so no hand-editing of
 * 300 entries is needed (and no typos can corrupt the data files).
 *
 * Usage:  node scripts/apply-citations.js <file.js> <citations.json>
 *   citations.json = [ { "key": "<id or name>", "label": "...", "url": "..." }, ... ]
 *
 * It finds each entry by  id: "<key>"  (or name: "<key>" / "name": "<key>"
 * for name-keyed files) and inserts  sources: [ { label, url } ],  right
 * after that key property. Skips entries that already have sources.
 * Run validate-data.js afterwards (publish-site.sh does it anyway).
 * ===================================================================== */
const fs = require('fs');
const [, , dataFile, citFile] = process.argv;
if (!dataFile || !citFile) {
  console.error('usage: node scripts/apply-citations.js <data/file.js> <citations.json>');
  process.exit(1);
}
let src = fs.readFileSync(dataFile, 'utf8');
const cits = JSON.parse(fs.readFileSync(citFile, 'utf8'));

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const jsStr = (s) => JSON.stringify(String(s)); // safe quoting for label/url

let applied = 0, skipped = [], notFound = [];
for (const c of cits) {
  if (!c.key || !c.url) { skipped.push(c.key + ' (no url)'); continue; }
  // match  id: "key",   or   name: "key",   or   "name": "key",
  const re = new RegExp('((?:\\bid|\\bname|"name")\\s*:\\s*' + esc(JSON.stringify(c.key)) + '\\s*,)');
  const m = src.match(re);
  if (!m) { notFound.push(c.key); continue; }
  // idempotency: does this entry already have sources? Scan ahead only within
  // this entry's scope — from the key property to the next entry's key property.
  const tail = src.slice(m.index + m[0].length, m.index + m[0].length + 8000);
  const nextKey = tail.search(/\n\s*(?:id|"name"|name)\s*:\s*"/);
  const scope = nextKey === -1 ? tail : tail.slice(0, nextKey);
  if (/\bsources\s*:/.test(scope)) {
    skipped.push(c.key + ' (already cited)');
    continue;
  }
  const insertion = m[0] + '\n    sources: [ { label: ' + jsStr(c.label || 'Wikipedia') + ', url: ' + jsStr(c.url) + ' } ],';
  src = src.slice(0, m.index) + insertion + src.slice(m.index + m[0].length);
  applied++;
}
fs.writeFileSync(dataFile, src);
console.log('applied ' + applied + ' citations to ' + dataFile);
if (skipped.length) console.log('skipped: ' + skipped.join(', '));
if (notFound.length) { console.error('NOT FOUND (fix manually): ' + notFound.join(', ')); process.exit(2); }
