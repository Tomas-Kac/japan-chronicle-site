#!/usr/bin/env python3
"""
Rebuild provinces.geojson with the historically-correct Sengoku-era north.

Our CODH source (kept as provinces_subdivided.geojson) splits the old north into the
1869 七国 units — Mutsu became 磐城/岩代/陸前/陸中/陸奥, and Dewa became 羽前/羽後. In
Sengoku times those were just TWO provinces, 陸奥 (Mutsu) and 出羽 (Dewa). This script
dissolves the modern pieces back into those two ancient provinces (real polygon union,
internal borders removed) and writes provinces.geojson for the "Provinces (旧国)" overlay.
It likewise merges Hokkaido's eleven 1869 provinces into a single 蝦夷地 (Ezo) region —
Sengoku Hokkaido was Ainu land outside the 旧国 system (only the southern Oshima tip was
Japanese-settled), so showing Meiji provinces there is an anachronism.

    cp provinces.geojson provinces_subdivided.geojson   # once, to preserve the source
    python3 build_ancient_north.py

(The domains keep using provinces_subdivided.geojson, because Date / Nanbu / Mogami each
held only PART of the north and can't be told apart on a single giant Mutsu/Dewa polygon.)
"""
import json
import os
from shapely.geometry import shape, mapping
from shapely.ops import unary_union

HERE = os.path.dirname(__file__)
SRC = os.path.join(HERE, '..', 'data', 'provinces_subdivided.geojson')  # the full 85-province CODH data
OUT = os.path.join(HERE, '..', 'data', 'provinces.geojson')             # the overlay file (ancient north)

# Ancient province  ->  the 1869 sub-provinces that make it up, + display fields.
GROUPS = {
    '陸奥': dict(yomi='むつ', pref='青森県,岩手県,宮城県,福島県',
                pieces=['陸奥', '陸中', '陸前', '磐城', '岩代']),
    '出羽': dict(yomi='でわ', pref='山形県,秋田県',
                pieces=['羽前', '羽後']),
}

# Independent simplification can leave hairline gaps between neighbouring pieces; a small
# buffer-out / union / buffer-in closes them so the dissolve yields one clean outline.
EPS = 0.004  # degrees (~400 m)
SIMP = 0.005  # Douglas–Peucker tolerance (~500 m), to match the overview-level resolution


def dissolve(geoms):
    cleaned = [g.buffer(0) for g in geoms]            # fix any self-intersections
    merged = unary_union([g.buffer(EPS, quad_segs=2) for g in cleaned]).buffer(-EPS, quad_segs=2)
    return merged.simplify(SIMP, preserve_topology=True)  # drop the buffer-induced extra points


def main():
    data = json.load(open(SRC, encoding='utf-8'))
    by_name = {f['properties']['name']: f for f in data['features']}

    groups = dict(GROUPS)
    # 蝦夷地 (Ezo): every Hokkaido province in the CODH set is an 1869 creation. In Sengoku,
    # Hokkaido was Ezo — Ainu land outside the 旧国 system — so merge them all into one Ezo
    # region instead of showing fake provinces.
    hokkaido = [f['properties']['name'] for f in data['features'] if f['properties'].get('pref') == '北海道']
    if hokkaido:
        groups['蝦夷地'] = dict(yomi='えぞち', pref='北海道', pieces=hokkaido)

    merged_pieces = set()
    for g in groups.values():
        merged_pieces.update(g['pieces'])

    # Keep every province that is NOT being merged, verbatim.
    feats = [f for f in data['features'] if f['properties']['name'] not in merged_pieces]

    # Add the dissolved regions (ancient 陸奥 / 出羽, and 蝦夷地 / Ezo).
    report = []
    for name, info in groups.items():
        geoms = [shape(by_name[p]['geometry']) for p in info['pieces']]
        merged = dissolve(geoms)
        feats.append({
            'type': 'Feature',
            'properties': {'id': name, 'name': name, 'yomi': info['yomi'], 'pref': info['pref']},
            'geometry': mapping(merged),
        })
        parts = len(merged.geoms) if merged.geom_type == 'MultiPolygon' else 1
        report.append(f"{name} ({info['yomi']}): {merged.geom_type}, {parts} part(s)")

    out = {'type': 'FeatureCollection', 'features': feats}
    json.dump(out, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print(f"Wrote {len(feats)} provinces to {OUT} (was {len(data['features'])})")
    for line in report:
        print('  ', line)
    print(f"Size: {round(os.path.getsize(OUT) / 1024, 1)} KB")


if __name__ == '__main__':
    main()
