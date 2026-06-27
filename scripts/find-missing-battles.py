#!/usr/bin/env python3
# =====================================================================
# find-missing-battles.py — the verified battle-expansion pipeline.
#
# How the comprehensive battle coverage is being built (the RELIABLE way,
# after an AI-generation sweep produced too many errors): we EXTRACT from
# real Wikipedia articles, never generate.
#
#   1. Fetch the real "List of Japanese battles" (built from records).
#   2. Diff it against data/battles.js to find genuine gaps.
#   3. For a year range, pull each missing article's coordinates + infobox
#      (date / place / result / combatants / commanders) via the Wikipedia API,
#      resolving redirects (so no 404 title-guessing).
#   4. A human (Claude + the historian) REVIEWS each candidate, drops dupes /
#      sub-battles / obscure ones, applies the lunar-date guard, and only then
#      adds it to data/battles.js with a sources:[{label,url}] citation.
#
# Usage:
#   python3 scripts/find-missing-battles.py                 # show missing counts by era
#   python3 scripts/find-missing-battles.py 1467 1600       # extract candidates in [1467,1600)
# Writes the structured candidates to /tmp/cand.json for review.
# =====================================================================
import urllib.request, urllib.parse, json, re, ssl, time, sys, os, unicodedata
CTX = ssl._create_unverified_context()
HERE = os.path.dirname(__file__)
BATTLES = os.path.join(HERE, '..', 'data', 'battles.js')

def api(params):
    params.update(format='json', formatversion='2')
    url = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'JapanChronicle/1.0 (educational; tkacbunda@gmail.com)'})
    return json.load(urllib.request.urlopen(req, timeout=40, context=CTX))

def norm(s):
    s = unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode().lower()
    s = re.sub(r'\b(the|battle of|siege of|battles of|first|second|third)\b', '', s)
    return re.sub(r'[^a-z0-9]', '', s)

def clean(s):
    if not s: return ''
    s = re.sub(r'<ref[^>]*>.*?</ref>', '', s, flags=re.S); s = re.sub(r'<ref[^>]*/>', '', s)
    for _ in range(3): s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    s = re.sub(r'\[\[[^\]|]*\|([^\]]*)\]\]', r'\1', s); s = re.sub(r'\[\[([^\]]*)\]\]', r'\1', s)
    s = re.sub(r"'''?", '', s); s = re.sub(r'<br\s*/?>', ' / ', s); s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).strip(' *./')[:200]

def field(wt, f):
    m = re.search(r'\{\{\s*Infobox military', wt, re.I)
    if not m: return ''
    seg = wt[m.start():m.start() + 9000]
    fm = re.search(r'\n\s*\|\s*' + re.escape(f) + r'\s*=\s*(.*?)(?=\n\s*\|\s*[\w]|\n\}\})', seg, re.S)
    return clean(fm.group(1)) if fm else ''

# 1. real candidate list
wt = api({'action': 'parse', 'page': 'List_of_Japanese_battles', 'prop': 'wikitext'})['parse']['wikitext']
cand = []
for ln in wt.splitlines():
    if not ln.strip().startswith('*'): continue
    m = re.search(r'\[\[([^\]|]+)', ln)
    if not m: continue
    y = re.search(r'\b(\d{3,4})\b', ln)
    cand.append((m.group(1).strip(), int(y.group(1)) if y else 0))

# 2. ours
code = open(BATTLES, encoding='utf-8').read()
ours = set(norm(m.group(1)) for m in re.finditer(r'name:\s*"([^"]+)"', code))

# 3. missing (premodern, <=1869), deduped
seen, missing = set(), []
for n, y in cand:
    if not (300 <= y <= 1869): continue
    if norm(n) in ours or norm(n) in seen: continue
    seen.add(norm(n)); missing.append((n, y))

if len(sys.argv) < 3:
    from collections import Counter
    era = lambda y: ("Asuka-Nara" if y < 794 else "Heian" if y < 1185 else "Kamakura" if y < 1333 else "Nanbokucho-Muromachi" if y < 1467 else "Sengoku" if y < 1600 else "Edo" if y < 1853 else "Bakumatsu")
    c = Counter(era(y) for _, y in missing)
    print("MISSING (vs current battles.js): %d total" % len(missing))
    for e in ["Asuka-Nara", "Heian", "Kamakura", "Nanbokucho-Muromachi", "Sengoku", "Edo", "Bakumatsu"]:
        print("  %-22s %d" % (e, c.get(e, 0)))
    print("\nRun with a year range to extract, e.g.:  python3 scripts/find-missing-battles.py 1467 1600")
    sys.exit()

LO, HI = int(sys.argv[1]), int(sys.argv[2])
titles = [n for n, y in missing if LO <= y < HI]
print("extracting %d candidates in [%d,%d)..." % (len(titles), LO, HI))
out = []
for i in range(0, len(titles), 20):
    d = api({'action': 'query', 'prop': 'coordinates|revisions', 'rvprop': 'content', 'rvslots': 'main',
             'titles': '|'.join(titles[i:i + 20]), 'redirects': '1'})
    for p in d.get('query', {}).get('pages', []):
        w = ''
        try: w = p['revisions'][0]['slots']['main']['content']
        except Exception: pass
        co = p.get('coordinates') or [{}]
        out.append({'title': p.get('title'), 'lat': co[0].get('lat'), 'lon': co[0].get('lon'),
                    'date': field(w, 'date'), 'place': field(w, 'place'), 'result': field(w, 'result'),
                    'c1': field(w, 'combatant1'), 'c2': field(w, 'combatant2'),
                    'cmd1': field(w, 'commander1'), 'cmd2': field(w, 'commander2')})
    time.sleep(0.4)
json.dump(out, open('/tmp/cand.json', 'w'), ensure_ascii=False)
good = [o for o in out if o['lat'] is not None and (o['c1'] or o['c2'])]
print("wrote /tmp/cand.json — %d candidates, %d with coords+combatants:\n" % (len(out), len(good)))
for o in sorted(good, key=lambda x: (x['date'] or '')):
    print("  %-16s %-13s %-30s | %s vs %s" % ((o['date'] or '?')[:16],
          ("%.2f,%.2f" % (o['lat'], o['lon'])), o['title'][:30], (o['c1'] or '?')[:18], (o['c2'] or '?')[:18]))
