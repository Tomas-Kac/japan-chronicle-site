// =====================================================================
// CASTLES (城)  —  major Sengoku / Nanboku-chō castles
// =====================================================================
// Toggle the "Castles" overlay (top-right layer control) to show these.
// type is one of:
//   "yamashiro"     mountain castle      (triangle icon)
//   "hirayamajiro"  hilltop castle       (diamond icon)
//   "hirajiro"      flatland castle      (square icon)
//   "mizujiro"      water castle         (circle icon)
// To add one: copy an entry, edit the fields. lat/lon in decimal degrees.
// =====================================================================

const CASTLES = [
  {
    "name": "Odawara Castle",
    "modern": "Odawara, Kanagawa Prefecture",
    "type": "hirayamajiro",
    "clan": "Go-Hojo (Later Hojo)",
    "lat": 35.2510472,
    "lon": 139.1534417,
    "note": "Capital of the Go-Hojo for five generations and the largest castle town in eastern Japan; its vast earthwork perimeter (sogamae) withstood sieges by Uesugi Kenshin and Takeda Shingen before falling to Toyotomi Hideyoshi in the 1590 Siege of Odawara, which ended the Hojo and effectively unified Japan."
  },
  {
    "name": "Edo Castle",
    "modern": "Chiyoda, Tokyo",
    "type": "hirayamajiro",
    "clan": "Tokugawa (built by Ota Dokan)",
    "lat": 35.688325,
    "lon": 139.7543667,
    "note": "Originally built by Ota Dokan in 1457 and held by the Hojo, it became Tokugawa Ieyasu's base after 1590 and the seat of the Tokugawa shogunate; now the Imperial Palace grounds. Coordinates mark the historic honmaru area."
  },
  {
    "name": "Kawagoe Castle",
    "modern": "Kawagoe, Saitama Prefecture",
    "type": "hirayamajiro",
    "clan": "Ogigayatsu Uesugi / Go-Hojo",
    "lat": 35.9245139,
    "lon": 139.4915028,
    "note": "Built by the Ota in 1457; site of the famous 1546 Night Battle of Kawagoe, where Hojo Ujiyasu's outnumbered force routed the combined Uesugi armies, securing Hojo dominance over the Kanto plain."
  },
  {
    "name": "Hachigata Castle",
    "modern": "Yorii, Osato District, Saitama Prefecture",
    "type": "hirayamajiro",
    "clan": "Go-Hojo (Hojo Ujikuni)",
    "lat": 36.1097333,
    "lon": 139.1959833,
    "note": "A major Hojo stronghold on a bluff above the Arakawa River, governed by Hojo Ujikuni; a key northern Kanto defensive node that surrendered to the Toyotomi coalition during the 1590 Odawara campaign. A well-preserved earthwork site."
  },
  {
    "name": "Hachioji Castle",
    "modern": "Hachioji, Tokyo",
    "type": "yamashiro",
    "clan": "Go-Hojo (Hojo Ujiteru)",
    "lat": 35.6529333,
    "lon": 139.2521139,
    "note": "Mountain fortress built by Hojo Ujiteru as a western anchor of the Hojo domain; stormed and destroyed in a single day in 1590 by Toyotomi forces (Maeda and Uesugi), a brutal assault that pressured Odawara into surrender."
  },
  {
    "name": "Kasugayama Castle",
    "modern": "Joetsu, Niigata Prefecture",
    "type": "yamashiro",
    "clan": "Nagao / Uesugi",
    "lat": 37.1466889,
    "lon": 138.2055528,
    "note": "The mountaintop headquarters of Uesugi Kenshin and the Echigo Nagao/Uesugi clan; one of Japan's great Sengoku mountain castles, from which Kenshin launched his campaigns against Takeda Shingen and into the Kanto."
  },
  {
    "name": "Numata Castle",
    "modern": "Numata, Gunma Prefecture",
    "type": "hirayamajiro",
    "clan": "Sanada",
    "lat": 36.648722,
    "lon": 139.039028,
    "note": "Strategic castle on a plateau controlling the Mikuni route between Kozuke and Echigo; the disputed Numata territory between the Sanada and Hojo was a direct trigger of Hideyoshi's 1590 Odawara campaign. Japanese sources class it as a hill castle (okajiro)."
  },
  {
    "name": "Minowa Castle",
    "modern": "Takasaki, Gunma Prefecture",
    "type": "hirayamajiro",
    "clan": "Nagano (later Takeda, then Ii)",
    "lat": 36.404944,
    "lon": 138.950972,
    "note": "Stronghold of the Nagano clan under the renowned Nagano Narimasa, who long resisted Takeda Shingen's invasions of western Kozuke; finally fell to Shingen in 1566 and later passed to Ii Naomasa. One of the Top 100 Castles of Japan."
  },
  {
    "name": "Karasawayama Castle",
    "modern": "Sano, Tochigi Prefecture",
    "type": "yamashiro",
    "clan": "Sano",
    "lat": 36.353639,
    "lon": 139.600944,
    "note": "Formidable mountain castle of the Sano clan in southern Shimotsuke; famed for reputedly repelling repeated attacks by Uesugi Kenshin, it sat at the contested frontier between the Uesugi, Hojo, and Satake spheres."
  },
  {
    "name": "Utsunomiya Castle",
    "modern": "Utsunomiya, Tochigi Prefecture",
    "type": "hirajiro",
    "clan": "Utsunomiya",
    "lat": 36.55444,
    "lon": 139.88583,
    "note": "Long-held seat of the powerful Utsunomiya clan, who governed central Shimotsuke from the Kamakura era for roughly five centuries; a key player in the Kanto power struggles before being dispossessed by Hideyoshi in 1597."
  },
  {
    "name": "Oyama Castle (Gion Castle)",
    "modern": "Oyama, Tochigi Prefecture",
    "type": "hirajiro",
    "clan": "Oyama",
    "lat": 36.319333,
    "lon": 139.8,
    "note": "Flatland castle of the Oyama clan, shugo of Shimotsuke; in 1380 it was the focus of the Oyama Yoshimasa Rebellion against the Kamakura kubo, a major Nanboku-cho/early-Muromachi conflict in the Kanto."
  },
  {
    "name": "Aizu-Wakamatsu Castle (Tsuruga Castle)",
    "modern": "Aizuwakamatsu, Fukushima Prefecture",
    "type": "hirayamajiro",
    "clan": "Ashina (later Date, Gamo, Uesugi)",
    "lat": 37.4877167,
    "lon": 139.9297861,
    "note": "Center of the Aizu basin, seat of the Ashina clan and briefly of Date Masamune after his 1589 victory at Suriagehara; rebuilt as a major modern castle by Gamo Ujisato. Later famous for the 1868 Boshin War siege."
  },
  {
    "name": "Yonezawa Castle",
    "modern": "Yonezawa, Yamagata Prefecture",
    "type": "hirajiro",
    "clan": "Date / Uesugi",
    "lat": 37.9096167,
    "lon": 140.1051444,
    "note": "Birthplace of Date Masamune and the early Date power base in southern Dewa; after the Sengoku it became the seat of the Uesugi clan under Uesugi Kagekatsu and his retainer Naoe Kanetsugu. A flatland castle ringed by water moats."
  },
  {
    "name": "Yamagata Castle (Kasumigajo)",
    "modern": "Yamagata, Yamagata Prefecture",
    "type": "hirajiro",
    "clan": "Mogami",
    "lat": 38.25556,
    "lon": 140.32806,
    "note": "Headquarters of the Mogami clan in Dewa, greatly expanded by Mogami Yoshiaki, who defeated the Uesugi at the Battle of Hasedo (1600); one of the largest flatland castles in Japan by enclosed area."
  },
  {
    "name": "Nihonmatsu Castle (Kasumigajo)",
    "modern": "Nihonmatsu, Fukushima Prefecture",
    "type": "hirayamajiro",
    "clan": "Hatakeyama (Nihonmatsu)",
    "lat": 37.5996417,
    "lon": 140.4279861,
    "note": "Stronghold of the Nihonmatsu Hatakeyama clan in central Mutsu; its lord Hatakeyama Yoshitsugu kidnapped and killed Date Terumune in 1585, triggering the Battle of Hitotoribashi against Date Masamune."
  },
  {
    "name": "Kubota Castle",
    "modern": "Akita, Akita Prefecture",
    "type": "hirayamajiro",
    "clan": "Satake",
    "lat": 39.7234806,
    "lon": 140.1232417,
    "note": "Built in 1604 as the new seat of the Satake clan after they were transferred from Hitachi for their lukewarm support of Tokugawa at Sekigahara; the Satake were one of the great Sengoku powers of the eastern Kanto. Included for the clan's significance though the castle itself is early-Edo."
  },
  {
    "name": "Azuchi Castle",
    "modern": "Ōmihachiman (Azuchi), Shiga Prefecture",
    "type": "yamashiro",
    "clan": "Oda",
    "lat": 35.1559139,
    "lon": 136.1394083,
    "note": "Oda Nobunaga's 1576 headquarters on Mt. Azuchiyama beside Lake Biwa; its lavish multi-story tenshu set the template for the early-modern Japanese castle."
  },
  {
    "name": "Gifu Castle (Inabayama)",
    "modern": "Gifu City, Gifu Prefecture",
    "type": "yamashiro",
    "clan": "Saitō / Oda",
    "lat": 35.4340722,
    "lon": 136.7822139,
    "note": "Saitō Dōsan's Inabayama atop Mt. Kinka; Nobunaga seized it in 1567, renamed it Gifu, and launched his 'Tenka Fubu' bid to unify Japan from here."
  },
  {
    "name": "Kiyosu Castle",
    "modern": "Kiyosu City, Aichi Prefecture",
    "type": "hirajiro",
    "clan": "Oda",
    "lat": 35.216575,
    "lon": 136.8435972,
    "note": "Nobunaga's main Owari base from 1555; site of the 1582 Kiyosu Conference where the Oda succession was decided after Honnō-ji."
  },
  {
    "name": "Inuyama Castle",
    "modern": "Inuyama City, Aichi Prefecture",
    "type": "hirayamajiro",
    "clan": "Oda (織田) / Naruse",
    "lat": 35.3883222,
    "lon": 136.9392611,
    "note": "Bluff castle commanding the Kiso River on the Owari–Mino border; its keep is one of Japan's twelve surviving original tenshu and a National Treasure."
  },
  {
    "name": "Okazaki Castle",
    "modern": "Okazaki City, Aichi Prefecture",
    "type": "hirayamajiro",
    "clan": "Matsudaira / Tokugawa",
    "lat": 34.9563083,
    "lon": 137.158806,
    "note": "Birthplace of Tokugawa Ieyasu (1543) and the ancestral seat of the Matsudaira clan; cradle of the Mikawa power base that grew into the Tokugawa shogunate."
  },
  {
    "name": "Hamamatsu Castle",
    "modern": "Hamamatsu City, Shizuoka Prefecture",
    "type": "hirayamajiro",
    "clan": "Tokugawa",
    "lat": 34.7118,
    "lon": 137.725,
    "note": "Ieyasu's stronghold in Tōtōmi for ~17 years; he marched from here to the disastrous 1572 Battle of Mikatagahara against Takeda Shingen. Later called the 'castle of success.'"
  },
  {
    "name": "Sunpu Castle",
    "modern": "Shizuoka City (Aoi Ward), Shizuoka Prefecture",
    "type": "hirajiro",
    "clan": "Imagawa / Tokugawa",
    "lat": 34.97917,
    "lon": 138.38333,
    "note": "Heart of the Imagawa domain where the young Ieyasu was held hostage; he retired here as Ōgosho, ruling Japan from behind the scenes until his death in 1616. Coordinates approx (plain flatland site)."
  },
  {
    "name": "Tsutsujigasaki Yakata (Kōfu)",
    "modern": "Kōfu City, Yamanashi Prefecture",
    "type": "hirajiro",
    "clan": "Takeda",
    "lat": 35.6868639,
    "lon": 138.577472,
    "note": "Fortified residence of the Takeda for three generations (Nobutora, Shingen, Katsuyori); the administrative center of Kai, reflecting Shingen's maxim that men, not walls, are the castle. Now Takeda Shrine."
  },
  {
    "name": "Matsumoto Castle",
    "modern": "Matsumoto City, Nagano Prefecture",
    "type": "hirajiro",
    "clan": "Ogasawara / Ishikawa",
    "lat": 36.2391,
    "lon": 137.9691194,
    "note": "Originally Fukashi Castle, contested by Ogasawara and Takeda in Shinano; its black-clad keep (built 1590s) is Japan's oldest surviving five-tier tenshu and a National Treasure, ringed by water moats."
  },
  {
    "name": "Ueda Castle",
    "modern": "Ueda City, Nagano Prefecture",
    "type": "hirajiro",
    "clan": "Sanada",
    "lat": 36.4039222,
    "lon": 138.2447944,
    "note": "Sanada Masayuki's fortress that twice repelled far larger Tokugawa armies (1585 and 1600), delaying Hidetada's force before Sekigahara — a celebrated feat of the Sanada clan."
  },
  {
    "name": "Odani Castle",
    "modern": "Nagahama City, Shiga Prefecture",
    "type": "yamashiro",
    "clan": "Azai",
    "lat": 35.45935917,
    "lon": 136.2770722,
    "note": "Mountain seat of the Azai clan in northern Ōmi; fell to Nobunaga's 1573 siege, ending Azai Nagamasa (Nobunaga's brother-in-law) and his ally Asakura. One of Japan's five great mountain castles."
  },
  {
    "name": "Sawayama Castle",
    "modern": "Hikone City, Shiga Prefecture",
    "type": "yamashiro",
    "clan": "Ishida",
    "lat": 35.2795,
    "lon": 136.268925,
    "note": "Strategic mountain castle guarding the Ōmi corridor; held by Ishida Mitsunari, leader of the Western Army at Sekigahara (1600). Its functions were later moved to nearby Hikone Castle."
  },
  {
    "name": "Kuwana Castle",
    "modern": "Kuwana City, Mie Prefecture",
    "type": "hirajiro",
    "clan": "Honda",
    "lat": 35.064625,
    "lon": 136.698722,
    "note": "Coastal flatland castle at the mouth of the Ibi/Nagara rivers guarding the Tōkaidō crossing into Ise; major Tokugawa-era fortification developed by Honda Tadakatsu after 1601."
  },
  {
    "name": "Nagashino Castle",
    "modern": "Shinshiro City, Aichi Prefecture",
    "type": "hirajiro",
    "clan": "Okudaira (Tokugawa)",
    "lat": 34.9228167,
    "lon": 137.5598472,
    "note": "Small river-confluence fortress whose heroic defense by Okudaira Sadamasa triggered the 1575 Battle of Nagashino, where Oda–Tokugawa massed gunfire shattered the Takeda cavalry."
  },
  {
    "name": "Ichijōdani Castle (Asakura residence)",
    "modern": "Fukui City, Fukui Prefecture",
    "type": "yamashiro",
    "clan": "Asakura",
    "lat": 35.9994917,
    "lon": 136.2955639,
    "note": "Mountain fortress above the Asakura clan's castle town in Echizen, a flourishing cultural capital; Nobunaga destroyed it in 1573, and its excavated townscape is now a Special Historic Site."
  },
  {
    "name": "Takatō Castle",
    "modern": "Ina City, Nagano Prefecture",
    "type": "hirayamajiro",
    "clan": "Takeda",
    "lat": 35.8330778,
    "lon": 138.0628028,
    "note": "Key Takeda mountain castle in southern Shinano; scene of the fierce 1582 last stand of Nishina Morinobu against Oda Nobutada during the Oda conquest of the Takeda. Famous today for its cherry blossoms."
  },
  {
    "name": "Osaka Castle",
    "modern": "Osaka, Osaka Prefecture",
    "type": "hirajiro",
    "clan": "Toyotomi (later Tokugawa)",
    "lat": 34.687378,
    "lon": 135.525844,
    "note": "Toyotomi Hideyoshi's grand headquarters from 1583 and seat of his regime; site of the 1614-1615 Sieges of Osaka that ended the Toyotomi house and sealed Tokugawa supremacy."
  },
  {
    "name": "Nijo Castle",
    "modern": "Kyoto (Nakagyo Ward), Kyoto Prefecture",
    "type": "hirajiro",
    "clan": "Tokugawa shogunate",
    "lat": 35.014156,
    "lon": 135.7475,
    "note": "Tokugawa Ieyasu's Kyoto residence and symbol of shogunal authority near the imperial court; in 1867 Tokugawa Yoshinobu announced the return of power to the Emperor here, ending the shogunate."
  },
  {
    "name": "Himeji Castle",
    "modern": "Himeji, Hyogo Prefecture",
    "type": "hirayamajiro",
    "clan": "Ikeda (earlier Kuroda / Hashiba)",
    "lat": 34.839378,
    "lon": 134.694097,
    "note": "Japan's finest surviving original castle and a UNESCO World Heritage Site; held in the Sengoku era by the Kuroda and Hashiba, then rebuilt into its iconic white form by Ikeda Terumasa after 1600."
  },
  {
    "name": "Bitchu-Matsuyama Castle",
    "modern": "Takahashi, Okayama Prefecture",
    "type": "yamashiro",
    "clan": "Mimura (later Mizutani)",
    "lat": 34.809078,
    "lon": 133.622303,
    "note": "The highest castle in Japan with an original keep (atop 430m Mt. Gagyu); a strategic Bitchu stronghold contested between the Mimura, Mori and Ukita during the Sengoku wars."
  },
  {
    "name": "Tottori Castle",
    "modern": "Tottori, Tottori Prefecture",
    "type": "hirayamajiro",
    "clan": "Yamana (later Ikeda)",
    "lat": 35.51,
    "lon": 134.24111,
    "note": "Site of Hashiba (Toyotomi) Hideyoshi's notorious 1581 starvation siege ('Tottori no kaw-zeme'), one of the cruelest blockades of the Sengoku period. Hilltop fort on Mt. Kyusho."
  },
  {
    "name": "Gassan-Toda Castle",
    "modern": "Yasugi, Shimane Prefecture",
    "type": "yamashiro",
    "clan": "Amago",
    "lat": 35.36095,
    "lon": 133.185261,
    "note": "Impregnable mountain seat of the Amago clan, who dominated the Izumo region; repelled a major Mori siege in 1542-43 before finally falling to Mori Motonari in 1566."
  },
  {
    "name": "Yoshida-Koriyama Castle",
    "modern": "Akitakata, Hiroshima Prefecture",
    "type": "yamashiro",
    "clan": "Mori",
    "lat": 34.674286,
    "lon": 132.709589,
    "note": "Sprawling mountain fortress (270+ enclosures) and birthplace of Mori power; Mori Motonari's 1540-41 defence here against a far larger Amago army launched his rise to mastery of western Honshu."
  },
  {
    "name": "Yuzuki Castle",
    "modern": "Matsuyama, Ehime Prefecture",
    "type": "hirayamajiro",
    "clan": "Kono",
    "lat": 33.848108,
    "lon": 132.786742,
    "note": "Rare surviving moated low-hill castle on the Dogo plain; for two centuries the seat of the Kono clan who ruled Iyo Province until conquered by the Toyotomi-backed forces in 1585."
  },
  {
    "name": "Urado Castle",
    "modern": "Kochi, Kochi Prefecture",
    "type": "hirayamajiro",
    "clan": "Chosokabe",
    "lat": 33.497203,
    "lon": 133.571986,
    "note": "Final headquarters of Chosokabe Motochika, unifier of Shikoku, after 1591; overlooks Tosa Bay. The Chosokabe were dispossessed here following their defeat at Sekigahara in 1600."
  },
  {
    "name": "Kumamoto Castle",
    "modern": "Kumamoto (Chuo Ward), Kumamoto Prefecture",
    "type": "hirayamajiro",
    "clan": "Kato (later Hosokawa)",
    "lat": 32.806028,
    "lon": 130.705897,
    "note": "Massive fortress built by master castle-builder Kato Kiyomasa from 1591, famed for its curved 'musha-gaeshi' stone walls; later withstood the 1877 Satsuma Rebellion siege."
  },
  {
    "name": "Funai Castle",
    "modern": "Oita, Oita Prefecture",
    "type": "mizujiro",
    "clan": "Fukuhara / Takenaka / Matsudaira (former Ōtomo capital)",
    "lat": 33.240642,
    "lon": 131.611433,
    "note": "In the Otomo heartland of Bungo — the Otomo capital and Christian-era trading hub before that clan's 1590s fall. The present coastal sea-castle (umijiro) was built from 1597 by Fukuhara Naotaka, then held by the Takenaka and Matsudaira."
  },
  {
    "name": "Kagoshima Castle (Tsurumaru)",
    "modern": "Kagoshima, Kagoshima Prefecture",
    "type": "hirayamajiro",
    "clan": "Shimazu",
    "lat": 31.59825,
    "lon": 130.554414,
    "note": "Seat of the Shimazu clan who nearly unified Kyushu in the 1580s; built from 1601 at the foot of Shiroyama, it governed the powerful Satsuma domain through the Edo period to the Meiji Restoration."
  },
  {
    "name": "Tachibana-yama Castle",
    "modern": "Fukuoka (Higashi Ward) / Shingu / Hisayama, Fukuoka Prefecture",
    "type": "yamashiro",
    "clan": "Tachibana (under Otomo)",
    "lat": 33.67973,
    "lon": 130.468051,
    "note": "Mountain fortress (367m) guarding the vital port of Hakata; defended by Tachibana Dosetsu and famously by the young Tachibana Muneshige, who held out against a 40,000-strong Shimazu invasion in 1586."
  },
  {
    "name": "Saiki Castle",
    "modern": "Saiki, Oita Prefecture",
    "type": "yamashiro",
    "clan": "Mori (Saiki branch)",
    "lat": 32.960231,
    "lon": 131.889819,
    "note": "Mountain castle on Mt. Yahata (144m) built 1601-06 by Mori Takamasa, a former Toyotomi general, to govern the rugged southern Bungo coast after the fall of the Otomo."
  },
  {
    "name": "Oka Castle",
    "modern": "Taketa, Oita Prefecture",
    "type": "yamashiro",
    "clan": "Shiga (under Otomo; later Nakagawa)",
    "lat": 32.969217,
    "lon": 131.408069,
    "note": "Formidable cliff-top mountain castle whose Otomo retainer Shiga Chikatsugu repelled the Shimazu invasion of 1586; its dramatic ruined stone walls later inspired Taki Rentaro's song 'Kojo no Tsuki'."
  }
];
