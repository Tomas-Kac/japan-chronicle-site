// =====================================================================
// MARCH ROUTES  —  army paths leading to a battle (Leaflet polylines)
// =====================================================================
// Toggle the "March routes" overlay (top-right layer control) to show these.
// Each route: { campaign, year, army, result, waypoints:[{name,lat,lon}] }.
// =====================================================================

const MARCH_ROUTES = [
  {
    "campaign": "Takeda Shingen's advance into Tōtōmi → Battle of Mikatagahara",
    "year": 1572,
    "battleId": "mikatagahara",
    "army": "Takeda army under Takeda Shingen (the 'Saijō sakusen' western campaign); ~25,000–30,000 men advancing against Tokugawa Ieyasu",
    "result": "Decisive Takeda victory. On 25 Jan 1573 (Genki 3/12/22) Shingen lured Ieyasu's smaller Tokugawa–Oda force out of Hamamatsu Castle and crushed it on the Mikatagahara plateau; Ieyasu barely escaped back to Hamamatsu.",
    "waypoints": [
      {
        "name": "Tsutsujigasaki-yakata (Takeda residence, Kai)",
        "lat": 35.6868639,
        "lon": 138.577472,
        "note": "Departure point. Takeda HQ in Kōfu, Kai Province (modern Kōfu, Yamanashi). Verified ja.Wikipedia coords."
      },
      {
        "name": "Tadaki / Tadarai Castle",
        "lat": 34.884683,
        "lon": 137.85755,
        "note": "approx — geocoded to 只来, Tenryū Ward, Hamamatsu (no published infobox coords). First Tōtōmi castle taken (fell 13 Oct 1572) as the army descended the Tenryū valley."
      },
      {
        "name": "Futamata Castle",
        "lat": 34.862025,
        "lon": 137.808933,
        "note": "Key Tokugawa stronghold at the Tenryū–Futamata river confluence; besieged from mid-Oct and surrendered ~19 Dec 1572, opening the road to Hamamatsu. Verified ja.Wikipedia coords."
      },
      {
        "name": "Hitokotozaka (Hitokotozaka skirmish site)",
        "lat": 34.725741,
        "lon": 137.838602,
        "note": "approx — geocoded to the 一言坂戦跡 marker in Iwata. Site of the 14 Oct 1572 rearguard fight (Honda Tadakatsu's famous covering action) during Ieyasu's reconnaissance; on the old road south toward Hamamatsu."
      },
      {
        "name": "Mikatagahara plateau (battlefield, N of Hamamatsu)",
        "lat": 34.79378,
        "lon": 137.70183,
        "note": "Climactic battlefield on the plateau ~10–12 km N of Hamamatsu Castle (Mikatahara-chō, Hamamatsu). Shingen, marching past Hamamatsu toward the Iwaida/Shukuda descent, turned and smashed the pursuing Tokugawa army here. Verified ja.Wikipedia battle infobox coords."
      },
      {
        "name": "Hamamatsu Castle (Tokugawa base / refuge)",
        "lat": 34.7118,
        "lon": 137.725,
        "note": "Ieyasu's main castle and the objective he sortied from; he fled back here after the rout. Included as the southern terminus of the action. Verified ja.Wikipedia coords."
      }
    ]
  },
  {
    "campaign": "Nagashino campaign — Takeda siege of Nagashino & the Oda–Tokugawa relief march to Shitaragahara",
    "year": 1575,
    "battleId": "nagashino",
    "army": "Takeda army under Takeda Katsuyori (~15,000) besieging Nagashino Castle; Oda–Tokugawa allied relief army under Oda Nobunaga and Tokugawa Ieyasu (~38,000) marching to break the siege",
    "result": "Decisive Oda–Tokugawa victory. On 28 Jun 1575 (Tenshō 3/5/21) the allied army, fighting from behind palisades along the Rengogawa on the Shitaragahara field while Sakai Tadatsugu's detachment stormed the Tobinosu-yama forts, shattered the Takeda cavalry; Katsuyori's army was destroyed.",
    "waypoints": [
      {
        "name": "Okazaki Castle (allied muster)",
        "lat": 34.9563083,
        "lon": 137.158806,
        "note": "Tokugawa's Mikawa base and the assembly point where Nobunaga joined Ieyasu before the relief march east. Verified ja.Wikipedia coords."
      },
      {
        "name": "Ushikubo Castle",
        "lat": 34.809,
        "lon": 137.383,
        "note": "approx (DMS→decimal from ja.Wikipedia) — Toyokawa, Aichi. Staging point on the allied advance (Nobunaga lodged here ~16 May) along the route toward Nagashino."
      },
      {
        "name": "Noda Castle (Mikawa)",
        "lat": 34.882056,
        "lon": 137.468306,
        "note": "Forward point on the allied march (~17 May) before reaching the Shitaragahara basin. Verified ja.Wikipedia coords."
      },
      {
        "name": "Shitaragahara battlefield / Rengogawa palisade line",
        "lat": 34.92147,
        "lon": 137.52508,
        "note": "Main battlefield: the allied army deployed behind the Rengogawa stream with Nobunaga on Chausuyama/Gokurakuji-yama and Ieyasu on Danjōyama. Verified ja.Wikipedia battle infobox coords."
      },
      {
        "name": "Nagashino Castle (besieged objective)",
        "lat": 34.9228167,
        "lon": 137.5598472,
        "note": "The Okudaira-held castle whose relief was the campaign's purpose; Katsuyori advanced here from his Iōji-yama HQ and crossed the Takisawa river toward Shitaragahara. Verified ja.Wikipedia coords."
      },
      {
        "name": "Tobinosu-yama fort",
        "lat": 34.920414,
        "lon": 137.564995,
        "note": "approx — geocoded to 新城市乗本鳶ケ巣, the hill just E of Nagashino castle. Center of the five Takeda siege forts; Sakai Tadatsugu's surprise dawn flanking assault here (松山越え) broke the siege and triggered the open battle."
      }
    ]
  },
  {
    "campaign": "Sekigahara approach — Ishida Mitsunari's Western-army concentration from Sawayama/Ōgaki to Sekigahara",
    "year": 1600,
    "battleId": "sekigahara",
    "army": "Western army field forces under Ishida Mitsunari (with Shimazu, Konishi, Ukita contingents) redeploying by night from Ōgaki to the Sekigahara defile",
    "result": "Decisive Eastern (Tokugawa) victory. After the night march of 14–15 Sep, the Western army gave battle at Sekigahara on 21 Oct 1600 (Keichō 5/9/15); the defection of Kobayakawa Hideaki collapsed Mitsunari's line and the army was routed by midday.",
    "waypoints": [
      {
        "name": "Sawayama Castle (Ishida's home castle)",
        "lat": 35.2795,
        "lon": 136.268925,
        "note": "Mitsunari's base near Lake Biwa (modern Hikone, Shiga) — the western anchor of his position and the line of retreat. Verified ja.Wikipedia coords."
      },
      {
        "name": "Ōgaki Castle (Western-army forward base)",
        "lat": 35.3619778,
        "lon": 136.6160722,
        "note": "Mitsunari's forward HQ in the Nōbi plain; the Western field army assembled here facing Ieyasu's force at Akasaka. Verified ja.Wikipedia coords."
      },
      {
        "name": "Akasaka-juku / Okayama (Eastern-army camp, passed to the N)",
        "lat": 35.390389,
        "lon": 136.582556,
        "note": "approx — Nakasendō post at Akasaka (Ōgaki), site of Ieyasu's Okayama/Katsuyama camp. The Western army slipped out of Ōgaki on the night of 14 Sep to avoid this position. Verified ja.Wikipedia (Akasaka-juku) coords."
      },
      {
        "name": "South flank of Nangū-san (night-march detour)",
        "lat": 35.353,
        "lon": 136.53,
        "note": "approx — intermediate waypoint along the southern skirt of Mt Nangū where the Western column detoured west by night to reach Sekigahara ahead of the enemy. No fixed monument; coordinate estimated on the route, marked approx."
      },
      {
        "name": "Sasaoyama — Ishida Mitsunari's HQ (Sekigahara)",
        "lat": 35.372033,
        "lon": 136.458855,
        "note": "approx — geocoded to the 笹尾山 Ishida-jin marker (ja.Wikipedia notes no infobox coords). Mitsunari anchored his line on this hill at the NW of the Sekigahara basin at dawn on 15 Sep."
      },
      {
        "name": "Sekigahara battlefield (decisive-battle ground)",
        "lat": 35.3705,
        "lon": 136.4616,
        "note": "The Sekigahara defile (Fuwa district, Gifu) where the main engagement was fought and the Western army broke. Verified ja.Wikipedia battle infobox coords."
      }
    ]
  },
  {
    "campaign": "Oda Nobunaga's sortie from Kiyosu → Battle of Okehazama",
    "year": 1560,
    "battleId": "okehazama",
    "army": "Oda Nobunaga's lightning sortie (~2,000–3,000) against the resting Imagawa headquarters",
    "result": "Stunning Oda victory: screened by a thunderstorm, Nobunaga fell on Imagawa Yoshimoto's command post at Dengaku-hazama and killed him.",
    "waypoints": [
      { "name": "Kiyosu Castle (departure)", "lat": 35.2003, "lon": 136.8453, "note": "approx — Nobunaga's base in Owari; he rode out at dawn on hearing of the Imagawa advance." },
      { "name": "Atsuta Shrine (prayed en route)", "lat": 35.1281, "lon": 136.908, "note": "Nobunaga stopped to pray and gather men. Verified shrine coords." },
      { "name": "Zenshōji fort", "lat": 35.0717, "lon": 136.9555, "note": "approx — forward Oda fort facing the Imagawa, where Nobunaga concentrated." },
      { "name": "Nakajima fort", "lat": 35.0633, "lon": 136.9667, "note": "approx — last Oda fort before the attack; he pushed forward from here under cover of the storm." },
      { "name": "Dengaku-hazama (Okehazama battlefield)", "lat": 35.05028, "lon": 136.99667, "note": "The gorge where Imagawa Yoshimoto's headquarters rested and was overrun." }
    ]
  },
  {
    "campaign": "Hashiba Hideyoshi's 'Great Return from Chūgoku' → Battle of Yamazaki",
    "year": 1582,
    "battleId": "yamazaki",
    "army": "Hashiba (Toyotomi) Hideyoshi's army (~20,000+) force-marching ~200 km from the Mōri front to avenge Nobunaga",
    "result": "Hideyoshi reached Yamazaki in about a week and crushed Akechi Mitsuhide, making himself Nobunaga's heir.",
    "waypoints": [
      { "name": "Bitchū-Takamatsu Castle (siege lifted)", "lat": 34.7236, "lon": 133.7686, "note": "Hideyoshi made a hasty peace with the Mōri and turned east on hearing of Nobunaga's death." },
      { "name": "Himeji Castle (resupply)", "lat": 34.8394, "lon": 134.6941, "note": "His stronghold, where he paused to rest, pay and reinforce the army." },
      { "name": "Amagasaki / Settsu coast", "lat": 34.7178, "lon": 135.4063, "note": "approx — the approach along the Settsu shore toward the Kinai." },
      { "name": "Yamazaki / Tennōzan (battlefield)", "lat": 34.90706, "lon": 135.69133, "note": "The narrows below Tennōzan where Hideyoshi met and destroyed the Akechi army." }
    ]
  },
  {
    "campaign": "Komaki–Nagakute — Toyotomi raiding column toward Mikawa → Battle of Nagakute",
    "year": 1584,
    "battleId": "komaki-nagakute",
    "army": "Ikeda Tsuneoki's Toyotomi detachment striking for Ieyasu's Mikawa heartland — intercepted by Tokugawa Ieyasu",
    "result": "Tokugawa victory at Nagakute: Ieyasu caught and destroyed the column, killing Ikeda Tsuneoki and Mori Nagayoshi.",
    "waypoints": [
      { "name": "Komaki area (Toyotomi lines)", "lat": 35.2917, "lon": 136.9122, "note": "approx — the entrenched front around Mt Komaki, from which the column slipped away south." },
      { "name": "Iwasaki Castle (stormed en route)", "lat": 35.1336, "lon": 137.0469, "note": "approx — Tokugawa-held castle attacked by the column; the delay let Ieyasu catch up." },
      { "name": "Nagakute (battlefield)", "lat": 35.18611, "lon": 137.05528, "note": "Where Ieyasu turned and destroyed the column as it tried to march back north." }
    ]
  },
  {
    "campaign": "Shizugatake approach — Hashiba Hideyoshi's 'Mino Great Return' (美濃大返し) from Ōgaki to the Shizugatake front",
    "year": 1583,
    "battleId": "shizugatake",
    "army": "Hashiba (Toyotomi) Hideyoshi's field army (~15,000) force-marching the ~52 km (13 ri) from Ōgaki to Kinomoto in about 5 hours along the Hokkoku Wakiōkan, to relieve the Shizugatake line against Sakuma Morimasa and Shibata Katsuie",
    "result": "Decisive Hashiba victory. Learning on 20 Apr 1583 (Tenshō 11/4/20) that Sakuma Morimasa had stormed the Ōiwayama fort and killed Nakagawa Kiyohide, Hideyoshi raced his army back from Ōgaki to Kinomoto and fell on the over-extended Sakuma force at Shizugatake near Lake Yogo; Sakuma was routed, Shibata Katsuie fled to Kitanoshō and took his own life, leaving Hideyoshi master of the Oda legacy.",
    "waypoints": [
      {
        "name": "Ōgaki Castle (departure point)",
        "lat": 35.3619778,
        "lon": 136.6160722,
        "note": "Hideyoshi's forward base in the Nōbi plain (modern Ōgaki, Gifu). On hearing of the fall of Ōiwayama he ordered the army out at about 2 p.m. on 20 Apr 1583. Verified ja.Wikipedia castle coords."
      },
      {
        "name": "Sekigahara-juku (turn onto the Hokkoku Wakiōkan)",
        "lat": 35.3711,
        "lon": 136.4664,
        "note": "The Nakasendō post at Sekigahara, where the forced-march column left the main road and turned north onto the 北国脇往還 (Hokkoku Wakiōkan) toward Ōmi. Coordinate at the Sekigahara field/town centre (verified ja.Wikipedia battle coords)."
      },
      {
        "name": "Fujikawa-juku (Hokkoku Wakiōkan post)",
        "lat": 35.396876,
        "lon": 136.417683,
        "note": "approx — geocoded to 米原市藤川. Post-town on the Hokkoku Wakiōkan just inside Ōmi; runners had been sent ahead to villages like this to lay out torches and rice balls for the passing army. No published infobox coords."
      },
      {
        "name": "Sunzu-juku / Suijō (Hokkoku Wakiōkan post below Mt Ibuki)",
        "lat": 35.386354,
        "lon": 136.374466,
        "note": "approx — geocoded to 米原市春照. Key Hokkoku Wakiōkan station at the foot of Mt Ibuki; the road then ran north past Odani toward Kinomoto. No published infobox coords."
      },
      {
        "name": "Kinomoto-juku (end of the forced march)",
        "lat": 35.512733,
        "lon": 136.230685,
        "note": "approx — geocoded to 長浜市木之本町木之本 (junction of the Hokkoku Kaidō and Hokkoku Wakiōkan). The vanguard reached Kinomoto about 7 p.m., having covered ~52 km in roughly 5 hours; this was the concentration point behind the Shizugatake line."
      },
      {
        "name": "Tagamiyama fort (Hashiba command position)",
        "lat": 35.514247,
        "lon": 136.224634,
        "note": "approx — geocoded to the 田上山砦 hill (~325 m) overlooking Kinomoto-juku. The Hashiba main camp, built in Mar 1583 and held by Hideyoshi's half-brother Hashiba Hidenaga with ~15,000 men; Hideyoshi's army rallied here before counter-attacking. No published infobox coords."
      },
      {
        "name": "Shizugatake battlefield (peak above Lake Yogo)",
        "lat": 35.50592,
        "lon": 136.19272,
        "note": "The decisive ground: the Shizugatake ridge between Lake Yogo (余呉湖) to the north and Lake Biwa to the south (Kinomoto-chō, Nagahama, Shiga). Hideyoshi's fresh troops drove Sakuma Morimasa off the Ōiwayama–Shizugatake heights here. Verified ja.Wikipedia battle infobox coords."
      }
    ]
  },
  {
    "campaign": "Sekigahara approach — the Tokugawa Eastern army's advance from the east (Ieyasu's main body from Edo up the Tōkaidō, with the Eastern vanguard via Kiyosu → Gifu → Akasaka to the Sekigahara field)",
    "year": 1600,
    "battleId": "sekigahara",
    "army": "Eastern (Tokugawa) army — Tokugawa Ieyasu's main body marching west from Edo, preceded by the Eastern vanguard under Fukushima Masanori, Ikeda Terumasa and others (~35,000) that crossed the Kiso River, stormed Gifu Castle, and concentrated at Akasaka",
    "result": "Decisive Eastern victory. The vanguard forced the Kiso River and took Gifu Castle (29 Sep 1600) from Oda Hidenobu, opening the road west; Ieyasu's main body, having advanced up the Tōkaidō from Edo, reached Akasaka on 14 Sep (old cal.) and moved forward to Sekigahara at about 10 a.m. on 21 Oct 1600 (Keichō 5/9/15), where the Western army was destroyed.",
    "waypoints": [
      {
        "name": "Edo Castle (Ieyasu's main-body departure)",
        "lat": 35.688325,
        "lon": 139.7543667,
        "note": "Tokugawa Ieyasu's seat in Musashi; the main body of the Eastern army set out from here westward up the Tōkaidō at the start of September 1600. Verified ja.Wikipedia castle coords."
      },
      {
        "name": "Kiyosu Castle (Eastern vanguard muster)",
        "lat": 35.216575,
        "lon": 136.8435972,
        "note": "The forward assembly point in Owari where Fukushima Masanori and the other 'Toyotomi' generals of the Eastern army concentrated before crossing the Kiso River. Verified ja.Wikipedia castle coords."
      },
      {
        "name": "Kaganoi crossing of the Kiso River",
        "lat": 35.324553,
        "lon": 136.703894,
        "note": "approx — geocoded to 羽島市竹鼻町 / 加賀野井 on the Kiso River. Blocked at Okoshi, Fukushima Masanori's column moved downstream and forced the river at Kaganoi (22 Aug, old cal.), then took nearby Takegahana Castle, opening the drive on Gifu. No published infobox coords."
      },
      {
        "name": "Gifu Castle (vanguard objective, stormed)",
        "lat": 35.4340722,
        "lon": 136.7822139,
        "note": "Oda Hidenobu's Western-held castle on Mt Kinka; the Eastern vanguard under Ikeda Terumasa and Fukushima Masanori overwhelmed it on 29 Sep 1600, removing the last major obstacle before Sekigahara. Verified ja.Wikipedia castle coords."
      },
      {
        "name": "Akasaka / Okayama (Ieyasu's camp on the Nakasendō)",
        "lat": 35.390389,
        "lon": 136.582556,
        "note": "approx — Nakasendō post at Akasaka (Ōgaki), where Ieyasu set up the Okayama/Katsuyama camp on 14 Sep (old cal.) facing the Western army at Ōgaki Castle. Verified ja.Wikipedia (Akasaka-juku) coords."
      },
      {
        "name": "Sekigahara battlefield (decisive ground)",
        "lat": 35.3711,
        "lon": 136.4664,
        "note": "The Sekigahara defile in Mino (Fuwa district, Gifu). The Eastern army advanced here from Akasaka before dawn on 21 Oct 1600 and crushed the Western army by midday. Verified ja.Wikipedia battle infobox coords."
      }
    ]
  },
  {
    "campaign": "Kawanakajima approach — Takeda Shingen's march from Kōfu via Kaizu Castle to the Hachimanbara plain (Fourth Battle of Kawanakajima)",
    "year": 1561,
    "battleId": "kawanakajima",
    "army": "Takeda army under Takeda Shingen (~20,000) advancing from Kai into northern Shinano, basing on Kaizu Castle before deploying onto the Hachimanbara plain against Uesugi Kenshin",
    "result": "Tactically inconclusive but extremely bloody. Shingen left Kōfu on 16 Aug, concentrated at Kaizu Castle, and on the night of 9–10 Sep 1561 (Eiroku 4/9/9–10) split his army for the 'woodpecker' (kitsutsuki) plan; Kenshin pre-empted it by descending Saijoyama and crossing the Amemiya ford, and the two main bodies collided in fog at Hachimanbara. Both sides suffered heavy losses (including Takeda Nobushige and Yamamoto Kansuke) and neither secured the plain.",
    "waypoints": [
      {
        "name": "Tsutsujigasaki-yakata (Takeda residence, Kōfu)",
        "lat": 35.6868639,
        "lon": 138.577472,
        "note": "Departure point: the Takeda headquarters in Kōfu, Kai Province (modern Kōfu, Yamanashi). Shingen marched out on 16 Aug 1561. Verified ja.Wikipedia coords."
      },
      {
        "name": "Daimon Pass (Daimon Kaidō into Shinano)",
        "lat": 36.1103,
        "lon": 138.2344,
        "note": "approx — the 1,441 m Daimon Pass on the Daimon Kaidō (one of the principal Takeda military roads, the 棒道/大門街道 system) crossing the central divide from Suwa toward the Chikuma valley. Marks the army's passage from Kai/Suwa into northern Shinano. Verified ja.Wikipedia (Daimon-tōge) coords; placed on the route as an intermediate point."
      },
      {
        "name": "Kaizu Castle (Takeda forward base)",
        "lat": 36.5661083,
        "lon": 138.1960056,
        "note": "The Takeda stronghold on the Chikuma River (later Matsushiro Castle, Nagano City) commanding the Kawanakajima plain; Shingen concentrated his army here on 24 Aug and from it launched the night operation. Verified ja.Wikipedia (Matsushiro Castle) coords."
      },
      {
        "name": "Amemiya ford (Chikuma River crossing)",
        "lat": 36.549389,
        "lon": 138.147556,
        "note": "The ford on the Chikuma River (modern Chikuma City, Nagano) on the route between Kaizu/Saijoyama and the plain; Kenshin's army crossed here by night to fall on the Takeda, and the Takeda main body deployed just to its north at Hachimanbara. Verified ja.Wikipedia (Amemiya no Watashi) coords."
      },
      {
        "name": "Hachimanbara — Takeda command post (Hachiman shrine)",
        "lat": 36.589826,
        "lon": 138.187065,
        "note": "approx — the 八幡社 in the Kawanakajima Kosenjō park (Kojirita-machi, Nagano City), traditionally Shingen's headquarters on the Hachimanbara plain and the supposed site of his single combat with Kenshin. Geocoded to the shrine; no published infobox coords."
      },
      {
        "name": "Kawanakajima / Hachimanbara battlefield",
        "lat": 36.648611,
        "lon": 138.194722,
        "note": "The Kawanakajima plain in the triangle where the Sai and Chikuma rivers meet (modern Nagano City), site of the climactic Fourth Battle. Coordinate as used for the battle marker in this project's dataset."
      }
    ]
  }
];
