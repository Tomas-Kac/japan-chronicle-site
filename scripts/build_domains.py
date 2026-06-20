#!/usr/bin/env python3
"""
Build domains.geojson from provinces.geojson.

Each entry below is one (clan, set of provinces, [startYear, endYear]) slice. A clan
may have SEVERAL slices so its territory can change over time — e.g. Tokugawa loses the
Tōkai and gains the Kantō at the 1590 transfer, Uesugi grows into Etchū/Noto, Chōsokabe
flashes across Shikoku in 1583–85. Boundaries are real CODH province (旧国) outlines; the
clan→province→year assignments are a province-level approximation (a whole province goes
to one clan; a clan is shown at characteristic extent, not redrawn every year).

Edit the DOMAINS table and re-run:   python3 build_domains.py

DATA NOTE: this script reads provinces_subdivided.geojson (the full CODH set, where the old
north is the 1869 七国: 陸奥/陸中/陸前/磐城/岩代 and 羽前/羽後). The map's Provinces overlay
(provinces.geojson, built by build_ancient_north.py) instead shows the dissolved ancient
provinces 陸奥 (Mutsu) / 出羽 (Dewa) — but domains keep using the finer sub-regions so the
northern clans (Date / Nanbu / Mogami) stay distinct. `display_provinces` relabels them with
the ancient names for the tooltip / panel.

KNOWN province-granularity overlaps (a province can't be split between rival clans, so a
few share one polygon in their contested years): 近江 — Rokkaku & Azai (1560–1568); 羽前
(Dewa/Yamagata) — Mogami & Date (1584–1591). Hinge years also show two clans on a handed-
over province (Takeda/Tokugawa 1582; Hōjō/Tokugawa 1590; Ōuchi/Ōtomo 1551; Miyoshi/Oda 1568).
"""
import json
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'data', 'provinces_subdivided.geojson')
OUT = os.path.join(os.path.dirname(__file__), '..', 'data', 'domains.geojson')

# One stable colour + default daimyō per clan (so every slice of a clan matches).
CLAN_COLOR = {
    'Imagawa': '#4363d8', 'Takeda': '#e6194B', 'Hōjō': '#911eb4', 'Uesugi': '#42d4f4',
    'Tokugawa': '#3cb44b', 'Oda': '#f58231', 'Asakura': '#a9a9a9', 'Mōri': '#000075',
    'Ōuchi': '#9A6324', 'Ōtomo': '#f032e6', 'Ryūzōji': '#bfef45', 'Shimazu': '#800000',
    'Chōsokabe': '#469990', 'Date': '#808000', 'Azai': '#ffe119', 'Rokkaku': '#dcbeff',
    'Saitō': '#fabed4', 'Miyoshi': '#aaffc3', 'Toyotomi': '#ff8c00', 'Mogami': '#cd853f',
    'Nanbu': '#654321', 'Ikkō-ikki': '#2f4f4f', 'Amago': '#4b0082',
    'Hatakeyama': '#ff1493', 'Kōno': '#00ced1', 'Ashikaga': '#ffd700',
    'Sanada': '#c21807', 'Satake': '#7b68ee', 'Ukita': '#ff8c69',
    'Satomi': '#d2691e',
}
CLAN_DAIMYO = {
    'Imagawa': 'Imagawa Yoshimoto', 'Takeda': 'Takeda Shingen', 'Hōjō': 'Hōjō Ujiyasu',
    'Uesugi': 'Uesugi Kenshin (then Kagekatsu)', 'Tokugawa': 'Tokugawa Ieyasu', 'Oda': 'Oda Nobunaga',
    'Asakura': 'Asakura Yoshikage', 'Mōri': 'Mōri Motonari / Terumoto',
    'Ōuchi': 'Ōuchi Yoshitaka', 'Ōtomo': 'Ōtomo Sōrin', 'Ryūzōji': 'Ryūzōji Takanobu',
    'Shimazu': 'Shimazu Yoshihisa', 'Chōsokabe': 'Chōsokabe Motochika',
    'Date': 'Date Masamune', 'Azai': 'Azai Nagamasa', 'Rokkaku': 'Rokkaku Yoshikata',
    'Saitō': 'Saitō Dōsan', 'Miyoshi': 'Miyoshi Nagayoshi', 'Toyotomi': 'Toyotomi Hideyoshi',
    'Mogami': 'Mogami Yoshiaki', 'Nanbu': 'Nanbu Nobunao', 'Ikkō-ikki': 'Jōdo-Shinshū (Ikkō) league',
    'Amago': 'Amago Haruhisa', 'Hatakeyama': 'Hatakeyama Yoshitaka',
    'Kōno': 'Kōno Michinao', 'Ashikaga': 'Ashikaga Yoshiaki',
    'Sanada': 'Sanada Masayuki', 'Satake': 'Satake Yoshishige', 'Ukita': 'Ukita Naoie',
    'Satomi': 'Satomi Yoshitaka (then Yoshiyasu)',
}

# clan, [start, end], provinces, note, and optional name / daimyo overrides.
DOMAINS = [
    # --- Tōkai / central ---
    dict(clan='Imagawa', start=1500, end=1560, provinces=['駿河', '遠江', '三河'],
         note='Tōkai hegemon; the house collapsed after Yoshimoto fell at Okehazama (1560).'),
    dict(clan='Takeda', start=1540, end=1582, provinces=['甲斐', '信濃'],
         note="Shingen's Kai–Shinano power base; the house was destroyed by Oda–Tokugawa in 1582."),
    dict(clan='Takeda', name='Takeda (Suruga)', start=1569, end=1582, provinces=['駿河'],
         note='Suruga, taken from the Imagawa in 1569 and held until the fall of the house in 1582.'),
    dict(clan='Saitō', start=1542, end=1567, provinces=['美濃'],
         note='Mino (Inabayama/Gifu); usurped by Saitō Dōsan in 1542, conquered by Nobunaga in 1567.'),
    dict(clan='Oda', start=1568, end=1582, provinces=['尾張', '美濃', '伊勢', '山城', '摂津', '大和', '河内', '和泉', '丹波'],
         note="Nobunaga's central-Japan hegemony from the 1568 march on Kyoto to Honnō-ji (1582)."),
    dict(clan='Oda', name='Oda (Ōmi)', start=1573, end=1582, provinces=['近江'],
         note='Ōmi, secured after the Azai were destroyed in 1573.'),
    # --- Tokugawa: Tōkai, then the 1590 Kantō transfer ---
    dict(clan='Tokugawa', name='Tokugawa (Mikawa–Tōtōmi)', start=1560, end=1581, provinces=['三河', '遠江'],
         note='Ieyasu broke free of the Imagawa in Mikawa (1560) and added Tōtōmi by c.1570.'),
    dict(clan='Tokugawa', name='Tokugawa (Tōkai)', start=1582, end=1589, provinces=['三河', '遠江', '駿河', '甲斐', '信濃'],
         note='The five-province Tōkai domain after the Takeda fell (1582), before the Kantō transfer.'),
    dict(clan='Tokugawa', name='Tokugawa (Kantō)', start=1590, end=1600,
         provinces=['武蔵', '相模', '伊豆', '上野', '下総', '上総', '下野'],
         note='In 1590 Hideyoshi moved Ieyasu to the former Hōjō Kantō; he lost the Tōkai entirely. (Awa stayed independent under the Satomi.)'),
    # --- Kantō ---
    dict(clan='Hōjō', name='Hōjō (max extent)', daimyo='Hōjō Ujimasa', start=1570, end=1589,
         provinces=['武蔵', '相模', '伊豆', '上野', '下総', '上総', '下野'],
         note='Maximum extent just before the Odawara campaign (under Ujimasa; Ujiyasu died 1571). Awa remained the Satomi’s.'),
    dict(clan='Hōjō', start=1500, end=1590, provinces=['相模', '伊豆', '武蔵', '上野'],
         note='Core Hōjō domains. Captured Kamakura (1512), Edo (1524), Odawara was their base.'),
    dict(clan='Satake', start=1570, end=1600, provinces=['常陸'],
         note='Lords of Hitachi who expanded aggressively under Yoshishige; allied with Hideyoshi but penalized by Ieyasu after Sekigahara.'),
    dict(clan='Satomi', start=1500, end=1614, provinces=['安房'],
         note='Lords of the Awa (Bōsō) peninsula and great rivals of the Hōjō; fought them at Kōnodai (1538, 1564), '
              'kept Awa under Hideyoshi and Ieyasu, and were attainted in 1614. (Contested Kazusa/Shimōsa are not shaded here.)'),
    # --- Hokuriku / Shinetsu ---
    dict(clan='Uesugi', name='Uesugi (Echigo)', start=1550, end=1582, provinces=['越後'],
         note="Kenshin's Echigo home province. (He did NOT hold Sado — that was the Honma clan, annexed only in 1589 by Kagekatsu.)"),
    dict(clan='Uesugi', name='Uesugi (Etchū)', start=1576, end=1582, provinces=['越中'],
         note='Etchū, secured by 1576; lost to Oda (Sassa Narimasa) around 1582.'),
    dict(clan='Uesugi', name='Uesugi (Noto)', start=1577, end=1581, provinces=['能登'],
         note='Noto, held c.1577–1581 before the Oda offensive (Maeda Toshiie) took it.'),
    dict(clan='Sanada', start=1582, end=1600, provinces=['信濃'],
         note='Master strategists holding Ueda Castle and Numata; famous for defying the Tokugawa twice.'),
    dict(clan='Asakura', start=1467, end=1573, provinces=['越前'],
         note='Long-lived Echizen house, destroyed by Nobunaga in 1573. (Wakasa was the Wakasa-Takeda’s, occupied by Asakura only c.1568–70.)'),
    dict(clan='Hatakeyama', name='Hatakeyama (Noto)', start=1467, end=1577, provinces=['能登'],
         note='Noto branch of the prestigious Hatakeyama, held until destroyed by Uesugi Kenshin.'),
    dict(clan='Hatakeyama', name='Hatakeyama (Kii)', daimyo='Hatakeyama Takamasa', start=1467, end=1573, provinces=['紀伊'],
         note='Kawachi/Kii branch of the Hatakeyama (Takamasa, then Akitaka); the line ended when Akitaka was killed in 1573.'),
    dict(clan='Ikkō-ikki', start=1488, end=1580, provinces=['加賀'],
         note='Kaga, the "peasant republic" (1488–1580) under the Jōdo-Shinshū league, crushed by Oda (Shibata) in 1580. '
              'Fortified enclaves (Ishiyama Hongan-ji in Settsu, Nagashima in Ise, Mikawa to 1564) are not shaded here.'),
    # --- Ōmi rivals ---
    dict(clan='Rokkaku', start=1500, end=1568, provinces=['近江'],
         note='Southern Ōmi (Kannonji); driven out by Nobunaga in 1568. Shown on the whole province (cannot split N/S Ōmi).'),
    dict(clan='Azai', start=1560, end=1573, provinces=['近江'],
         note='Northern Ōmi (Odani); independent from the Rokkaku from 1560, destroyed by Nobunaga in 1573. Whole-province overlap with Rokkaku 1560–68.'),
    # --- Kinai: Miyoshi then Toyotomi ---
    dict(clan='Ashikaga', start=1467, end=1573, provinces=['山城'],
         note='The Muromachi shogunate, based in Kyoto. Their direct territorial control was weak, often overshadowed by deputies (Hosokawa, Miyoshi).'),
    dict(clan='Miyoshi', name='Miyoshi (Kinai)', start=1549, end=1568, provinces=['摂津', '河内', '和泉', '山城'],
         note='Nagayoshi’s Kinai hegemony; pushed out when Nobunaga entered Kyoto in 1568.'),
    dict(clan='Miyoshi', name='Miyoshi (Shikoku home)', start=1549, end=1582, provinces=['阿波', '讃岐'],
         note='The Miyoshi home base in eastern Shikoku, held until Chōsokabe overran it by c.1582.'),
    dict(clan='Toyotomi', start=1585, end=1615, provinces=['摂津', '河内', '和泉', '山城'],
         note='Hideyoshi’s core base (Osaka), retained by Hideyori until the Winter/Summer campaigns of 1614–1615.'),
    # --- Chūgoku ---
    dict(clan='Ukita', daimyo='Ukita Hideie', start=1577, end=1600, provinces=['備前', '美作'],
         note='Rose to power through assassinations under Naoie; became core Toyotomi loyalists under Hideie until Sekigahara.'),
    dict(clan='Ōuchi', start=1490, end=1551, provinces=['周防', '長門', '安芸', '石見', '豊前', '筑前'],
         note='Dominated western Honshū and N. Kyushu until the Tainei-ji incident (1551); the Mōri inherited the region.'),
    dict(clan='Mōri', name='Mōri (1555–1566)', start=1555, end=1566, provinces=['安芸', '周防', '長門'],
         note='Chūgoku core territory after Itsukushima (1555) and the Ouchi conquest, prior to subduing the Amago.'),
    dict(clan='Mōri', name='Mōri (1567–1600)', start=1567, end=1600, provinces=['安芸', '周防', '長門', '石見', '出雲', '隠岐', '伯耆', '備後', '備中'],
         note='Chūgoku hegemon at its peak expansion after capturing Izumo (1566) until Sekigahara (1600).'),
    dict(clan='Amago', daimyo='Amago Haruhisa (then Yoshihisa)', start=1540, end=1566, provinces=['出雲', '石見', '隠岐', '伯耆'],
         note='Major daimyo house of the Sanin region based at Gassan-Toda; held out against the Mori until defeated in 1566.'),
    dict(clan='Ōtomo', start=1551, end=1586, provinces=['豊後', '豊前', '筑前', '筑後'],
         note='Northern-Kyushu power based in Bungo; broke after Mimigawa (1578) and the Shimazu advance.'),
    dict(clan='Ryūzōji', start=1570, end=1584, provinces=['肥前'],
         note='Hizen house that rose fast, then collapsed when Takanobu died at Okita-Nawate (1584).'),
    dict(clan='Shimazu', start=1550, end=1615, provinces=['薩摩', '大隅', '日向'],
         note='Southern-Kyushu house (briefly nearly all Kyushu c.1586); survived as Satsuma domain.'),
    # --- Shikoku ---
    dict(clan='Kōno', start=1467, end=1585, provinces=['伊予'],
         note='Traditional lords of Iyo Province; subjugated by Hideyoshi in 1585.'),
    dict(clan='Chōsokabe', name='Chōsokabe (Tosa)', start=1560, end=1600, provinces=['土佐'],
         note='Tosa home province, held throughout (and all that remained after Hideyoshi’s 1585 invasion).'),
    dict(clan='Chōsokabe', name='Chōsokabe (Shikoku peak)', start=1583, end=1585, provinces=['阿波', '讃岐', '伊予'],
         note='Motochika’s brief unification of Shikoku (1583–85), stripped away when he surrendered to Hideyoshi in 1585.'),
    # --- Tōhoku (approximated with 1869 subdivisions; see DATA NOTE) ---
    dict(clan='Date', start=1584, end=1591, provinces=['羽前', '岩代', '磐城', '陸前'],
         display_provinces=['出羽 (Dewa — Yonezawa)', '陸奥 (southern Mutsu — Aizu/Iwaki/Rikuzen)'],
         note='Masamune’s rise: Yonezawa in southern Dewa, plus southern Mutsu — Aizu (from 1589), Iwaki and Rikuzen. '
              'Curbed by Hideyoshi 1590–91. The Provinces overlay now draws the true ancient 陸奥/出羽; this domain is built '
              'from the finer sub-regions so Date, Nanbu and Mogami stay distinct in the north.'),
    dict(clan='Mogami', start=1570, end=1614, provinces=['羽前'],
         display_provinces=['出羽 (Dewa — Yamagata)'],
         note='Yamagata-based house of central 出羽 (Dewa); allied with Ieyasu at Sekigahara. Shares Dewa with Date’s Yonezawa c.1584–91.'),
    dict(clan='Nanbu', start=1500, end=1600, provinces=['陸奥', '陸中'],
         display_provinces=['陸奥 (northern Mutsu)'],
         note='Stable stronghold in the north of ancient 陸奥 (Mutsu) — Sannohe, later Morioka.'),
]

# Drop the placeholder line(s) (start >= end means "ignore").
DOMAINS = [d for d in DOMAINS if d['start'] <= d['end'] and d['provinces']]


def main():
    prov = json.load(open(SRC, encoding='utf-8'))
    geom = {f['properties']['name']: f['geometry'] for f in prov['features']}

    feats = []
    missing = set()
    for d in DOMAINS:
        coords = []
        for pn in d['provinces']:
            g = geom.get(pn)
            if g is None:
                missing.add(pn)
                continue
            if g['type'] == 'MultiPolygon':
                coords.extend(g['coordinates'])
            elif g['type'] == 'Polygon':
                coords.append(g['coordinates'])
        clan = d['clan']
        feats.append({
            "type": "Feature",
            "properties": {
                "name": d.get('name') or (clan + ' domain'),
                "clan": clan,
                "daimyo": d.get('daimyo') or CLAN_DAIMYO.get(clan, ''),
                "startYear": d['start'],
                "endYear": d['end'],
                "color": CLAN_COLOR.get(clan, '#e67e22'),
                "provinces": d.get('display_provinces') or d['provinces'],
                "note": d['note'],
            },
            "geometry": {"type": "MultiPolygon", "coordinates": coords},
        })

    if missing:
        print("WARNING — province names not found in provinces.geojson:", sorted(missing))

    out = {"type": "FeatureCollection", "features": feats}
    json.dump(out, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    clans = sorted({f['properties']['clan'] for f in feats})
    print(f"Wrote {len(feats)} slices across {len(clans)} clans to {OUT}")
    print(f"Size: {round(os.path.getsize(OUT) / 1024, 1)} KB")


if __name__ == '__main__':
    main()
