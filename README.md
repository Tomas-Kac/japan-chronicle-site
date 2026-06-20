# Japan Chronicle — an interactive historical atlas

A free, interactive historical atlas of **premodern Japan**, from the arrival of Buddhism (552) to the Meiji Restoration (1868–69). Every battle and event is a clickable point on the map and a moment on an era-aware timeline — so the sweep of Japanese history can be *seen*, not just memorised.

Built by a historian as a free study tool for students, teachers, and anyone curious about Japanese history.

> **Live map:** https://tomas-kac.github.io/japan-chronicle-site/

## ✨ What's on it

- **107 battles** across 8 eras (Asuka–Nara · Heian · Genpei · Kamakura · Nanboku-chō · Sengoku · Edo · Bakumatsu)
- **59 non-battle events** — religion, culture, politics, foreign contact, disasters (552–1923)
- **31 key historical figures** — emperors, warlords, monks, poets and reformers, each shown across their lifespan and linked to the battles they fought
- **47 castles**, type-coded; **41 daimyō-domain** time-slices that rise and fall as you scrub the years
- **70 historical provinces** (旧国), **9 march routes**, and three draped historical maps (1690 / 1779 / 1860)
- A **year slider** segmented by era, an **events overlay** tied to the timeline, **clan** and **search** filters

## 🗺️ Run it locally

It's a static site — no build step, no server-side code, no API keys. Just serve the folder:

```bash
python3 -m http.server 8010
# then open http://localhost:8010
```

(Any static file server works. For GitHub Pages, just enable Pages on the repo and point it at the root.)

## 📚 Sources, data & licensing

- **History** is drawn from standard scholarship (*The Cambridge History of Japan*), primary chronicles (the *Kojiki*, the *Nihon Shoki*, the *Tale of the Heike*, the *Shinchō Kōki*), and Japanese/English Wikipedia for verification and coordinates. Full credits are on the in-app **[Sources page](sources.html)**.
- **Province boundaries** come from CODH (旧国・旧郡境界データセット), licensed **CC BY-NC 4.0**.
- **Images** are from Wikimedia Commons (public domain / freely licensed), credited per item.

> ⚠️ **Non-commercial.** Because the province data is CC BY-NC, this project — and any reuse of it — must stay **non-commercial**. Free to use and share for education and study, with attribution.


## 🧭 Structure

| Path | What it is |
|------|------------|
| `index.html` | the map (entry point) |
| `about.html`, `sources.html` | the content pages |
| `css/` | stylesheets (`styles.css`, `site.css`) |
| `js/app.js` | the map application logic |
| `data/` | **the data** — `battles.js`, `events.js`, `castles.js`, `routes.js`, and the province/domain `.geojson` files |
| `scripts/` | data generators (`build_domains.py`, `build_ancient_north.py`, `make_audit.js`) — re-run after edits |
| `NOTES.md` | the development log |

To add a battle, copy an entry in `data/battles.js` and edit its fields — the map updates itself. Instructions are at the top of that file.
