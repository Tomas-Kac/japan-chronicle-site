#!/usr/bin/env node
/* =====================================================================
 * export-vault.js — one-way export of an atlas snapshot to the Obsidian vault.
 *
 *   node scripts/export-vault.js [path/to/vault]
 *
 * Writes a single generated note, "Japan Chronicle/01 Atlas index.md".
 *
 * WHY ONLY AN INDEX, and not a note per entry: data/*.js is the single source
 * of truth. It is validated before every publish and every entry carries a
 * citation. Mirroring 367 entries into Markdown would create a second copy
 * that silently drifts, and then neither could be trusted. So the vault gets
 * a snapshot for orientation and links back to the live map; the thinking
 * (reading notes, open questions) lives in hand-written notes beside it.
 *
 * This is one-way. Never edit the generated note; edit the data and re-run.
 * ===================================================================== */
const fs = require('fs');
const path = require('path');

const DEFAULT_VAULT = path.join(process.env.HOME, 'Documents', 'Obsidian');
const vault = process.argv[2] || process.env.JC_VAULT || DEFAULT_VAULT;

global.window = {};
const DATA = path.join(__dirname, '..', 'data');
const files = ['battles.js', 'castles.js', 'routes.js', 'events.js', 'people.js', 'temples.js', 'roads.js'];
const src = files.map((f) => fs.readFileSync(path.join(DATA, f), 'utf8')).join('\n');

const collect = `({
  battles: BATTLES, castles: CASTLES, events: EVENTS, people: PEOPLE,
  temples: TEMPLES, roads: HISTORIC_ROADS, marchRoutes: MARCH_ROUTES
})`;
const D = eval(src + '\n' + collect);

const cited = (arr) => arr.filter((x) => x.sources && x.sources.length).length;
const withImg = (arr) => arr.filter((x) => x.images && x.images.length).length;
const total = Object.values(D).reduce((a, arr) => a + arr.length, 0);
const totalCited = Object.values(D).reduce((a, arr) => a + cited(arr), 0);

const eraCounts = {};
for (const b of D.battles) eraCounts[b.period] = (eraCounts[b.period] || 0) + 1;

const rows = [
  ['Battles', D.battles], ['Castles', D.castles], ['Temples & shrines', D.temples],
  ['Events', D.events], ['People', D.people], ['Historic roads', D.roads], ['March routes', D.marchRoutes],
].map(([label, arr]) =>
  `| ${label} | ${arr.length} | ${cited(arr)} | ${withImg(arr) || '·'} |`).join('\n');

const md = `---
generated: true
source: data/*.js in the Japan Chronicle repository
---

# Atlas index

> [!warning] Generated file
> Rewritten by \`node scripts/export-vault.js\`. Do not edit by hand; edit the data and re-run.

Live map: https://tomas-kac.github.io/japan-chronicle-site/

## Coverage

| Layer | Entries | Cited | With image |
|---|---:|---:|---:|
${rows}
| **Total** | **${total}** | **${totalCited}** | **${Object.values(D).reduce((a, arr) => a + withImg(arr), 0)}** |

${totalCited === total ? 'Every entry on the map is source-backed.' : `${total - totalCited} entries still lack a citation.`}

## Battles by era

${Object.entries(eraCounts).sort((a, b) => b[1] - a[1]).map(([e, n]) => `- ${e}: ${n}`).join('\n')}

## Historic roads

${D.roads.map((r) => `- **${r.name}**${r.era ? ` (${r.era})` : ''}, ${r.waypoints.length} stops`).join('\n')}

## Where to think, not just look

- [[02 Open questions]] for the disputes the verification sweep turned up
- \`Reading notes/\` for the works in \`Sources/\`
`;

const outDir = path.join(vault, 'Japan Chronicle');
if (!fs.existsSync(outDir)) {
  console.error('Vault folder not found: ' + outDir + '\n(pass the vault path as an argument, or set JC_VAULT)');
  process.exit(1);
}
fs.writeFileSync(path.join(outDir, '01 Atlas index.md'), md);
console.log(`wrote ${path.join(outDir, '01 Atlas index.md')} (${total} entries, ${totalCited} cited)`);
