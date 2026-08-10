// =====================================================================
// HOW TO ADD A NEW BATTLE
// =====================================================================
// Copy one of the entries below (everything from the opening { to the
// closing }, including the comma at the end) and paste it as a new
// entry in the BATTLES array. Then edit the fields.
//
// REQUIRED fields:
//   id        - unique short name in lowercase, e.g. "nagashino"
//   name      - full battle name shown to users
//   year      - the calendar year, e.g. 1600  (this drives the slider)
//   location  - { name: "...", lat: <number>, lon: <number> }
//   summary   - 1-2 sentence overview shown in the info panel
//
// OPTIONAL fields:
//   date       - ISO format "YYYY-MM-DD" (precise date, if known)
//   dateLabel  - human-readable date, e.g. "October 21, 1600"
//   period     - historical period, e.g. "Sengoku", "Bakumatsu"
//   combatants - { side1: {...}, side2: {...} } where each side has
//                { name, leader, forces }  (forces is optional)
//   outcome    - short sentence on the result
//   details    - longer narrative; use a blank line between paragraphs
//   image      - URL of a single image (shown at the bottom of the panel)
//   images     - a list of images shown at the bottom of the panel, e.g.
//                images: [
//                  { src: "https://…/picture.jpg", caption: "What it shows" },
//                ]
//
//   yearStart + yearEnd - use these INSTEAD of `year` for a campaign
//                that spanned several years (e.g. yearStart: 1579,
//                yearEnd: 1581). The marker then shows for every year
//                in that range as you move the slider.
//
// To find the lat/lon for a place: open Google Maps, right-click on
// the location, and click the coordinates that appear at the top of
// the menu. Paste them in as lat (first number) and lon (second).
//
// NOTE: A few entries below carry coordinates marked "approximate" in
// their location name, because Wikipedia gave no exact battlefield
// coordinates. Feel free to refine those.
// =====================================================================

const BATTLES = [
  {
    id: "sekigahara",
    sources: [ { label: "Wikipedia: Battle of Sekigahara", url: "https://en.wikipedia.org/wiki/Battle_of_Sekigahara" } ],
    name: "Battle of Sekigahara",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sekigaharascreen.jpg/960px-Sekigaharascreen.jpg",
        caption: "Folding screen (byōbu) depicting the Battle of Sekigahara. Wikimedia Commons."
      }
    ],
    year: 1600,
    date: "1600-10-21",
    dateLabel: "October 21, 1600",
    period: "Azuchi–Momoyama",
    location: {
      name: "Sekigahara, Mino Province (modern Gifu Prefecture)",
      lat: 35.3711,
      lon: 136.4664
    },
    combatants: {
      side1: {
        name: "Eastern Army",
        leader: "Tokugawa Ieyasu",
        forces: "approximately 75,000 initially; ~89,000 engaged"
      },
      side2: {
        name: "Western Army",
        leader: "Ishida Mitsunari (de facto)",
        forces: "approximately 120,000 nominally; ~82,000 engaged"
      }
    },
    outcome: "Decisive Eastern Army victory. Tokugawa Ieyasu's path to the shogunate was secured.",
    summary: "Often called the battle that decided the realm (天下分け目の戦い), Sekigahara was the climactic engagement of the Sengoku period and set the stage for over 250 years of Tokugawa rule.",
    leadsTo: "osaka-siege",
    details: `Following the death of Toyotomi Hideyoshi in 1598, a power struggle emerged between Tokugawa Ieyasu, the most powerful member of the Council of Five Elders, and Ishida Mitsunari, who sought to preserve the succession of Hideyoshi's young heir Toyotomi Hideyori.

The two armies met in a narrow valley in Mino Province on the morning of October 21, 1600. Heavy fog initially obscured the field. The battle's turning point came when Kobayakawa Hideaki, positioned on Mount Matsuo and nominally allied with the Western Army, defected to Ieyasu's side after hours of hesitation. His attack on the Western flank triggered a cascade of further defections.

Within three years of the battle, Ieyasu was appointed shōgun by Emperor Go-Yōzei, founding the Tokugawa shogunate that would govern Japan until the Meiji Restoration of 1868.`
  },
  {
    id: "gifu-castle",
    sources: [ { label: "Wikipedia: Battle of Gifu Castle", url: "https://en.wikipedia.org/wiki/Battle_of_Gifu_Castle" } ],
    name: "Battle of Gifu Castle",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gifujyou11.jpg/960px-Gifujyou11.jpg",
        caption: "Gifu Castle, rebuilt on Mount Kinka above the old battlefield. Wikimedia Commons."
      }
    ],
    year: 1600,
    date: "1600-09-29",
    dateLabel: "September 29–30, 1600",
    period: "Azuchi–Momoyama",
    location: {
      name: "Gifu Castle, Mino Province (modern Gifu)",
      lat: 35.4339,
      lon: 136.7821
    },
    combatants: {
      side1: {
        name: "Eastern Army",
        leader: "Ikeda Terumasa & Fukushima Masanori",
        forces: "approximately 35,000"
      },
      side2: {
        name: "Western Army",
        leader: "Oda Hidenobu",
        forces: "approximately 6,000"
      }
    },
    outcome: "Eastern Army victory; Gifu Castle fell, removing a key Western stronghold.",
    summary: "A swift prelude to Sekigahara: Tokugawa's vanguard stormed the castle of Oda Hidenobu, grandson of Oda Nobunaga, barely three weeks before the decisive battle nearby.",
    details: `Oda Hidenobu, grandson of Oda Nobunaga, held Gifu Castle for the Western cause. As the Eastern army advanced westward, its vanguard under Ikeda Terumasa and Fukushima Masanori converged on the castle and overwhelmed its far smaller garrison on 29–30 September 1600.

The fall of Gifu opened the road west and set the stage for the Battle of Sekigahara, fought only a short distance away barely three weeks later.`
  },
  {
    id: "mimigawa",
    sources: [ { label: "Wikipedia: Battle of Mimigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Mimigawa" } ],
    name: "Battle of Mimigawa",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shimazu_Yoshihisa.jpg/960px-Shimazu_Yoshihisa.jpg",
        caption: "Portrait of Shimazu Yoshihisa, the victor at Mimigawa. Wikimedia Commons."
      }
    ],
    year: 1578,
    date: "1578-12-10",
    dateLabel: "December 10, 1578",
    period: "Azuchi–Momoyama",
    location: {
      name: "Mimi River, Hyūga Province (modern Miyazaki Prefecture)",
      lat: 32.16617,
      lon: 131.4805
    },
    combatants: {
      side1: {
        name: "Shimazu clan",
        leader: "Shimazu Yoshihisa",
        forces: "approximately 30,000"
      },
      side2: {
        name: "Ōtomo clan",
        leader: "Ōtomo Sōrin (with Ōtomo Yoshimune)",
        forces: "approximately 50,000"
      }
    },
    outcome: "Decisive Shimazu victory; the Ōtomo invasion of Hyūga collapsed.",
    summary: "The Shimazu of Satsuma crushed the much larger army of the Christian daimyō Ōtomo Sōrin, halting Ōtomo expansion and beginning the Shimazu drive to dominate Kyūshū.",
    details: `The Ōtomo clan invaded Hyūga in 1578 to expand their domain and, under the recently baptised Sōrin, to found a Christian settlement. The Shimazu, led by Shimazu Yoshihisa, lured the Ōtomo centre across the Takajō River with a feigned retreat, then ambushed and shattered it.

Several senior Ōtomo commanders fell, and the survivors fled some 25 kilometres back to the Mimi River. The victory broke Ōtomo power and launched the Shimazu campaign to unify Kyūshū, a drive only halted by Toyotomi Hideyoshi's intervention in 1587.`
  },
  {
    id: "kawanakajima",
    sources: [ { label: "Wikipedia: Battles of Kawanakajima", url: "https://en.wikipedia.org/wiki/Battles_of_Kawanakajima" } ],
    name: "Battles of Kawanakajima",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/BattleKawanakajima.jpg/960px-BattleKawanakajima.jpg",
        caption: "Edo-period depiction of the single combat between Uesugi Kenshin and Takeda Shingen at Kawanakajima. Wikimedia Commons."
      }
    ],
    year: 1561,
    date: "1561-10-18",
    dateLabel: "Fourth (greatest) battle: October 18, 1561, series 1553–1564",
    period: "Muromachi",
    location: {
      name: "Kawanakajima plain, Shinano Province (modern Nagano)",
      lat: 36.648611,
      lon: 138.194722
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen",
        forces: "approximately 20,000 (1561)"
      },
      side2: {
        name: "Uesugi clan",
        leader: "Uesugi Kenshin",
        forces: "approximately 13,000 (1561)"
      }
    },
    outcome: "Tactically inconclusive across five engagements; neither clan secured the plain.",
    summary: "The legendary rivalry of Takeda Shingen and Uesugi Kenshin produced five clashes on the Kawanakajima plain between 1553 and 1564; the fourth, in 1561, was the bloodiest and most celebrated in samurai lore.",
    details: `Between 1553 and 1564 Takeda Shingen and Uesugi Kenshin fought five times for control of the Kawanakajima plain in northern Shinano.

The fourth battle, on 18 October 1561, was by far the largest. Kenshin's surprise descent from Saijoyama nearly broke the Takeda centre, and tradition holds that he reached Shingen's command post and struck at him personally before Takeda reserves restored the line.

Despite enormous casualties on both sides, the battles ended without a decisive result, yet they became one of the most cherished tales in Japanese military history.`
  },
  {
    id: "azukizaka-1542",
    sources: [ { label: "Wikipedia: Battle of Azukizaka (1542)", url: "https://en.wikipedia.org/wiki/Battle_of_Azukizaka_(1542)" } ],
    name: "Battle of Azukizaka (1542)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Site_of_Azukizaka_Battle.jpg/960px-Site_of_Azukizaka_Battle.jpg",
        caption: "The site of the Battle of Azukizaka today. Wikimedia Commons."
      }
    ],
    year: 1542,
    dateLabel: "1542",
    period: "Muromachi",
    location: {
      name: "Azukizaka, Mikawa Province (modern Aichi Prefecture)",
      lat: 34.9303,
      lon: 137.1783
    },
    combatants: {
      side1: {
        name: "Oda clan",
        leader: "Oda Nobuhide"
      },
      side2: {
        name: "Imagawa clan",
        leader: "Imagawa Yoshimoto (with Imagawa Sessai)"
      }
    },
    outcome: "Oda victory; Nobuhide checked Imagawa expansion into Mikawa.",
    summary: "Oda Nobuhide, father of Oda Nobunaga, is recorded as defeating Imagawa Yoshimoto in Mikawa, asserting Oda strength along the road his son would later make famous, though some historians hold this first Azukizaka battle to be a later fabrication, since the Imagawa push into eastern Mikawa is dated only from 1543.",
    details: `In 1542 Oda Nobuhide met the westward-pressing Imagawa Yoshimoto at Azukizaka in Mikawa, the province contested with the Matsudaira (the future Tokugawa). Nobuhide's forces prevailed in hard fighting, temporarily blunting Imagawa ambitions there.

Although Yoshimoto recovered and won a second clash at Azukizaka in 1548, the 1542 victory burnished the reputation of the Oda house into which Nobunaga had been born eight years earlier.`
  },
  {
    id: "uedahara",
    sources: [ { label: "Wikipedia: Battle of Uedahara", url: "https://en.wikipedia.org/wiki/Battle_of_Uedahara" } ],
    name: "Battle of Uedahara",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Katsurao_Jyo.jpg/960px-Katsurao_Jyo.jpg",
        caption: "Katsurao Castle, stronghold of Murakami Yoshikiyo, who handed Shingen his first defeat. Wikimedia Commons."
      }
    ],
    year: 1548,
    date: "1548-03-23",
    dateLabel: "March 23, 1548 (Tenbun 17/2/14)",
    period: "Muromachi",
    location: {
      name: "Uedahara, Shinano Province (modern Ueda, Nagano)",
      lat: 36.39569,
      lon: 138.21331
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen",
        forces: "approximately 7,000"
      },
      side2: {
        name: "Murakami clan",
        leader: "Murakami Yoshikiyo",
        forces: "approximately 3,000"
      }
    },
    outcome: "Murakami victory (pyrrhic); the first defeat of Takeda Shingen's career.",
    summary: "Murakami Yoshikiyo handed Takeda Shingen the first defeat of his career, a battle also remembered as one of the first in Japan to see firearms used in the field.",
    details: `Advancing to subdue northern Shinano, Takeda Shingen was checked at Uedahara by Murakami Yoshikiyo on 14 February 1548. The Takeda lost roughly 700 men, including two veteran generals, in Shingen's first battlefield defeat. The engagement is often cited as the first field battle in Japan in which firearms, recently introduced, were used.

Murakami's victory was costly, however, and within a few years Shingen drove him from Shinano altogether, pushing Murakami into the arms of Uesugi Kenshin and helping to ignite the Kawanakajima wars.`
  },
  {
    id: "suriagehara",
    sources: [ { label: "Wikipedia: Battle of Suriagehara", url: "https://en.wikipedia.org/wiki/Battle_of_Suriagehara" } ],
    name: "Battle of Suriagehara",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Date_Masamune02.jpg/960px-Date_Masamune02.jpg",
        caption: "Portrait of Date Masamune, the 'One-Eyed Dragon', whose victory here sealed his hold on southern Mutsu. Wikimedia Commons."
      }
    ],
    year: 1589,
    date: "1589-07-17",
    dateLabel: "July 17, 1589",
    period: "Azuchi–Momoyama",
    location: {
      name: "Suriagehara, Mutsu Province (modern Inawashiro / Bandai, Fukushima)",
      lat: 37.56214,
      lon: 140.06633
    },
    combatants: {
      side1: {
        name: "Date clan",
        leader: "Date Masamune",
        forces: "approximately 23,000"
      },
      side2: {
        name: "Ashina clan",
        leader: "Ashina Yoshihiro",
        forces: "approximately 16,000"
      }
    },
    outcome: "Decisive Date victory; the Ashina clan was destroyed.",
    summary: "The young 'One-Eyed Dragon' Date Masamune annihilated the Ashina clan, sealing his hegemony over southern Mutsu just before Hideyoshi's unification reached the north.",
    details: `The Battle of Suriagehara was fought on July 17, 1589, in Mutsu Province. The Date clan, commanded by Date Masamune with 23,000 troops, engaged the Ashina clan, commanded by Ashina Yoshihiro with 16,000 troops.

The engagement occurred at the base of Mount Bandai. Initial Ashina assaults were successful, but a counter-offensive led by Masamune reversed the momentum. A sudden shift in wind direction blew particulate matter into the Ashina ranks, degrading their combat effectiveness.

The Date forces broke the Ashina lines, resulting in a disorganized rout. Significant Ashina casualties occurred during the retreat across the Nitsubashi River. The victory eliminated the Ashina clan and consolidated Date Masamune's hegemony over the Tōhoku region.`
  },
  {
    id: "hetsugigawa",
    sources: [ { label: "Wikipedia: Battle of Hetsugigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Hetsugigawa" } ],
    name: "Battle of Hetsugigawa",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hetsugigawa_Battle_Dead_Rest-in-peace_Memorial.jpg/960px-Hetsugigawa_Battle_Dead_Rest-in-peace_Memorial.jpg",
        caption: "Memorial to the fallen of the Battle of Hetsugigawa. Wikimedia Commons."
      }
    ],
    year: 1587,
    date: "1587-01-20",
    dateLabel: "January 20, 1587",
    period: "Azuchi–Momoyama",
    location: {
      name: "Hetsugi River (modern Ōno River), Bungo Province (modern Ōita)",
      lat: 33.13892,
      lon: 131.65833
    },
    combatants: {
      side1: {
        name: "Shimazu clan",
        leader: "Shimazu Iehisa",
        forces: "approximately 10,000–13,000"
      },
      side2: {
        name: "Toyotomi vanguard (Ōtomo allied)",
        leader: "Chōsokabe Motochika & Sengoku Hidehisa",
        forces: "approximately 20,000"
      }
    },
    outcome: "Shimazu victory; the Toyotomi vanguard was mauled.",
    summary: "The Shimazu ambushed Toyotomi Hideyoshi's Kyūshū vanguard, winning their last success before Hideyoshi's main army overwhelmed them.",
    details: `Ordered to stay on the defensive until Hideyoshi's main army arrived, the Toyotomi vanguard under Sengoku Hidehisa instead crossed the Hetsugi River to relieve a besieged castle. The Shimazu sprang their favourite trap and routed them; Chōsokabe Motochika's son Nobuchika was among the slain.

It was the Shimazu's last victory of the Kyūshū campaign, within months Hideyoshi's overwhelming numbers forced the clan to submit.`
  },
  {
    id: "hitotoribashi",
    sources: [ { label: "Wikipedia: Battle of Hitotoribashi", url: "https://en.wikipedia.org/wiki/Battle_of_Hitotoribashi" } ],
    name: "Battle of Hitotoribashi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%E4%BA%BA%E5%8F%96%E3%82%8A%E6%A9%8B_%E5%A2%93_%E5%85%A8%E6%99%AF_%E3%83%A1%E3%83%BC%E3%83%AB%E7%94%A8.jpg/960px-%E4%BA%BA%E5%8F%96%E3%82%8A%E6%A9%8B_%E5%A2%93_%E5%85%A8%E6%99%AF_%E3%83%A1%E3%83%BC%E3%83%AB%E7%94%A8.jpg",
        caption: "Memorial mound at the Hitotori Bridge battlefield. Wikimedia Commons."
      }
    ],
    year: 1586,
    date: "1586-01-06",
    dateLabel: "January 6, 1586",
    period: "Azuchi–Momoyama",
    location: {
      name: "Hitotori Bridge, Mutsu Province (modern Motomiya, Fukushima)",
      lat: 37.517,
      lon: 140.4
    },
    combatants: {
      side1: {
        name: "Date clan",
        leader: "Date Masamune",
        forces: "approximately 7,000"
      },
      side2: {
        name: "Anti-Date coalition",
        leader: "Satake Yoshishige & allied clans",
        forces: "approximately 30,000"
      }
    },
    outcome: "Strategic Date survival; the coalition dissolved and withdrew.",
    summary: "Outnumbered roughly four to one, Date Masamune held off a grand coalition until it fell apart, an early proof of the young warlord's resilience.",
    details: `Seeking revenge for his father's death against the Nihonmatsu, the young Date Masamune found himself confronted near the Hitotori Bridge by a coalition of the Satake, Ashina, Sōma and others, perhaps 30,000 strong.

Forced back toward Motomiya Castle, Masamune nonetheless held his ground, and when the Satake abruptly withdrew the whole alliance disintegrated. The narrow escape marked Masamune's emergence as a major power in northeastern Japan.`
  },
  {
    id: "taineiji",
    sources: [ { label: "Wikipedia: Tainei-ji incident", url: "https://en.wikipedia.org/wiki/Tainei-ji_incident" } ],
    name: "Tainei-ji incident",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nagato_Tainei-ji_Temple._Grave_of_Ouchi_Yoshitaka_and_his_valet.jpg/960px-Nagato_Tainei-ji_Temple._Grave_of_Ouchi_Yoshitaka_and_his_valet.jpg",
        caption: "Grave of Ōuchi Yoshitaka at the Tainei-ji temple, where he took his own life. Wikimedia Commons."
      }
    ],
    year: 1551,
    date: "1551-09-30",
    dateLabel: "September 28–30, 1551",
    period: "Muromachi",
    location: {
      name: "Tainei-ji temple, Nagato Province (modern Nagato, Yamaguchi)",
      lat: 34.328222,
      lon: 131.162833
    },
    combatants: {
      side1: {
        name: "Ōuchi retainers (rebels)",
        leader: "Sue Harukata (Takafusa)",
        forces: "approximately 5,000"
      },
      side2: {
        name: "Ōuchi clan",
        leader: "Ōuchi Yoshitaka",
        forces: "a few thousand, collapsing to a final 20"
      }
    },
    outcome: "Rebel victory; Ōuchi Yoshitaka was forced to commit seppuku.",
    summary: "A coup by the retainer Sue Harukata destroyed the great Ōuchi house of western Japan, toppling one of the richest daimyō of the age.",
    details: `In the autumn of 1551 the senior Ōuchi general Sue Harukata revolted against his cultured but militarily neglectful lord, Ōuchi Yoshitaka. Driven from his capital at Yamaguchi, Yoshitaka took refuge at the Tainei-ji temple in Nagato, where, abandoned by all but a handful of followers, he committed seppuku on 30 September.

The fall of the Ōuchi, long the dominant power and trade gateway of western Honshū, opened the way for the rise of Mōri Motonari, who would destroy Sue at Itsukushima four years later.`
  },
  {
    id: "arita-nakaide",
    sources: [ { label: "Wikipedia: Battle of Arita-Nakaide", url: "https://en.wikipedia.org/wiki/Battle_of_Arita-Nakaide" } ],
    name: "Battle of Arita-Nakaide",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mori_Motonari.jpg/960px-Mori_Motonari.jpg",
        caption: "Portrait of Mōri Motonari, who fought his first battle here. Wikimedia Commons."
      }
    ],
    year: 1517,
    date: "1517-11-05",
    dateLabel: "November 5, 1517 (Eishō 14/10/22)",
    period: "Muromachi",
    location: {
      name: "Arita Castle, Aki Province (modern Hiroshima Prefecture)",
      lat: 34.66825,
      lon: 132.53206
    },
    combatants: {
      side1: {
        name: "Mōri clan (with Kikkawa)",
        leader: "Mōri Motonari",
        forces: "approximately 1,150"
      },
      side2: {
        name: "Aki-Takeda clan",
        leader: "Takeda Motoshige",
        forces: "approximately 5,000"
      }
    },
    outcome: "Mōri victory; Takeda Motoshige killed.",
    summary: "Sometimes called 'the Okehazama of the west', this was the young Mōri Motonari's first battle, a victory against the odds that announced the rise of the Mōri.",
    details: `In 1517 the Aki-Takeda under Motoshige moved against Arita Castle, an ally of the young Mōri Motonari. Though heavily outnumbered, Motonari and the allied Yoshikawa fell on the Takeda and killed their commander, breaking the assault.

It was Motonari's first battle and the opening note of a career that would make him master of nearly all western Honshū.`
  },
  {
    id: "mimasetoge",
    sources: [ { label: "Wikipedia: Battle of Mimasetōge", url: "https://en.wikipedia.org/wiki/Battle_of_Mimasetoge" } ],
    name: "Battle of Mimasetoge",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mimase-kosenjyo.JPG/960px-Mimase-kosenjyo.JPG",
        caption: "The old battlefield at Mimase Pass. Wikimedia Commons."
      }
    ],
    year: 1569,
    dateLabel: "1569",
    period: "Muromachi",
    location: {
      name: "Mimase Pass, Sagami Province (modern Kanagawa Prefecture)",
      lat: 35.535,
      lon: 139.29444
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen (Yamagata Masakage, Baba Nobuharu)",
        forces: "approximately 10,000"
      },
      side2: {
        name: "Hōjō clan",
        leader: "Hōjō Ujiteru & Hōjō Ujikuni",
        forces: "approximately 20,000"
      }
    },
    outcome: "Takeda victory; the Hōjō blocking force under Ujiteru and Ujikuni was driven off and the Takeda withdrew to Kai.",
    summary: "Withdrawing from a failed assault on the Hōjō capital at Odawara, Takeda Shingen found the Mimase Pass held against him by Hōjō Ujiteru and Ujikuni; he broke their blocking force before Hōjō Ujimasa's main body could come up from Odawara.",
    details: `After failing to take the great Hōjō fortress of Odawara, Takeda Shingen retreated westward and was intercepted at the Mimase Pass by a larger Hōjō force under Ujiteru and Ujikuni.

A fierce counterattack led by Yamagata Masakage shattered the pursuit and let the Takeda withdraw intact, a textbook example of Shingen's skill in managing a fighting retreat.`
  },
  {
    id: "tatarahama-1569",
    sources: [ { label: "Wikipedia: Battle of Tatarahama (1569)", url: "https://en.wikipedia.org/wiki/Battle_of_Tatarahama_(1569)" } ],
    name: "Battle of Tatarahama (1569)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tachibana_Dosetsu.jpg/960px-Tachibana_Dosetsu.jpg",
        caption: "Portrait of Tachibana Dōsetsu, the famed Ōtomo general. Wikimedia Commons."
      }
    ],
    year: 1569,
    dateLabel: "1569",
    period: "Muromachi",
    location: {
      name: "Tatarahama, Hakata Bay, Chikuzen Province (modern Fukuoka)",
      lat: 33.6280462,
      lon: 130.4429303
    },
    combatants: {
      side1: {
        name: "Ōtomo clan",
        leader: "Ōtomo Sōrin (Tachibana Dōsetsu)"
      },
      side2: {
        name: "Mōri clan",
        leader: "Mōri Motonari (Kikkawa Motoharu, Kobayakawa Takakage)"
      }
    },
    outcome: "Ōtomo advantage; the Mōri ultimately abandoned their Kyūshū foothold.",
    summary: "On the sands of Hakata Bay the Ōtomo and Mōri fought for control of northern Kyūshū; pressure elsewhere finally forced the Mōri to give up the contest.",
    details: `In 1569 the Ōtomo of Bungo and the Mōri of western Honshū clashed at Tatarahama on Hakata Bay over the rich port and the Tachibana fortress. The fighting was evenly matched.

But the Ōtomo's diplomacy, reviving the Amago to threaten the Mōri rear in Izumo, compelled Mōri Motonari to withdraw from Kyūshū, leaving the Ōtomo dominant in the north of the island.`
  },
  {
    id: "odaihara",
    sources: [ { label: "Wikipedia: Battle of Odaihara", url: "https://en.wikipedia.org/wiki/Battle_of_Odaihara" } ],
    name: "Battle of Odaihara",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), whose Shinano campaign this victory advanced. Wikimedia Commons."
      }
    ],
    year: 1547,
    date: "1547-09-19",
    dateLabel: "September 19, 1547",
    period: "Muromachi",
    location: {
      name: "Odaihara, Saku, Shinano Province (modern Nagano), coordinates approximate",
      lat: 36.3083,
      lon: 138.498
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen (Itagaki Nobukata, Sanada Yukitaka)",
        forces: "approximately 5,000"
      },
      side2: {
        name: "Yamanouchi-Uesugi clan",
        leader: "Kanai Hidekage (sent by Uesugi Norimasa)",
        forces: "approximately 3,000–3,800"
      }
    },
    outcome: "Takeda victory; the Uesugi relief of Shinano failed.",
    summary: "Takeda Shingen's vanguard under Itagaki Nobukata beat back a Yamanouchi-Uesugi relief force, clearing the way to capture Shika Castle.",
    details: `As Takeda Shingen pressed his conquest of Shinano, the Kantō-based Uesugi Norimasa sent a relief force to support the besieged Shika Castle. The Uesugi army, commanded by Norimasa's vassal Kanai Hidekage, was intercepted and defeated at Odaihara near Saku on 19 September 1547 by a Takeda force under Itagaki Nobukata.

Following the victory, Shingen had the severed heads of the fallen Uesugi soldiers displayed in front of Shika Castle, destroying the garrison's morale and forcing its surrender. This relentless expansion into northern Shinano eventually led to the Kawanakajima campaigns against Uesugi Kenshin.`
  },
  {
    id: "sezawa",
    sources: [ { label: "Wikipedia: Battle of Sezawa", url: "https://en.wikipedia.org/wiki/Battle_of_Sezawa" } ],
    name: "Battle of Sezawa (Legendary)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), at the start of his Shinano campaign. Wikimedia Commons."
      }
    ],
    year: 1542,
    date: "1542-04-23",
    dateLabel: "April 23, 1542 (Tenbun 11/3/9)",
    period: "Muromachi",
    location: {
      name: "Sezawa, Shinano Province (modern Fujimi, Nagano)",
      lat: 35.89603,
      lon: 138.24458
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen",
        forces: "approximately 3,000"
      },
      side2: {
        name: "Shinano coalition",
        leader: "Suwa Yorishige, Ogasawara Nagatoki, Murakami Yoshikiyo",
        forces: "approximately 12,000"
      }
    },
    outcome: "Takeda victory (recorded in Kōyō Gunkan; historicity disputed).",
    summary: "A legendary night battle recorded in the Edo-period Kōyō Gunkan where a young Takeda Shingen supposedly routed a coalition four times his size.",
    details: `According to the 17th-century chronicle Kōyō Gunkan, a coalition of Shinano lords gathered in the spring of 1542 to stop Takeda Shingen. Shingen is said to have launched a daring night attack in the rain and scattered them.

    However, modern historians classify the Battle of Sezawa as fictional or highly embellished. During this time, the Takeda and Suwa clans were close allies invading other regions, and did not clash. The narrative was likely created to glorify Shingen's early career and justify the subsequent conquest of Suwa. The traditional date of the 3rd month, 9th day converts to April 23, 1542 in the Julian calendar (May 3 Gregorian).`
  },
  {
    id: "konodai-1538",
    sources: [ { label: "Wikipedia: Battle of Kōnodai (1538)", url: "https://en.wikipedia.org/wiki/Battle_of_K%C5%8Dnodai_(1538)" } ],
    name: "Battle of Kōnodai (1538)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Konodai_Castle.jpg/960px-Konodai_Castle.jpg",
        caption: "Kōnodai, the high ground that gave the battle its name. Wikimedia Commons."
      }
    ],
    year: 1538,
    dateLabel: "1538",
    period: "Muromachi",
    location: {
      name: "Kōnodai–Sagamidai, Shimōsa Province (modern Matsudo/Ichikawa, Chiba)",
      lat: 35.78375,
      lon: 139.90406
    },
    combatants: {
      side1: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujitsuna"
      },
      side2: {
        name: "Satomi–Ashikaga alliance",
        leader: "Satomi Yoshitaka & Ashikaga Yoshiaki (Oyumi)"
      }
    },
    outcome: "Hōjō victory; Ashikaga Yoshiaki of Oyumi killed.",
    summary: "The Later Hōjō defeated the Satomi and their Ashikaga ally above the Futoi River (太日川, the channel that is now the Edo River), extending Hōjō power across the lower Kantō.",
    details: `At Kōnodai in 1538, overlooking the lower Tone River, Hōjō Ujitsuna defeated the combined forces of the Satomi of Awa and the rival 'Oyumi' Ashikaga, killing Ashikaga Yoshiaki in the fighting.

The battle was a critical milestone in the rise of the Later Hōjō clan. By destroying the Oyumi kubō (the regional Ashikaga authority) and driving the Satomi back into the Bōsō Peninsula, Ujitsuna cemented Hōjō control over the Musashi-Shimōsa border, paving the way for their eventual mastery of the entire Kantō plain.`
  },
  {
    id: "konodai-1564",
    sources: [ { label: "Wikipedia: Battle of Kōnodai (1564)", url: "https://en.wikipedia.org/wiki/Battle_of_K%C5%8Dnodai_(1564)" } ],
    name: "Battle of Kōnodai (1564)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ujiyasu_Hojo.jpg",
        caption: "Portrait of Hōjō Ujiyasu, the victor. Wikimedia Commons."
      }
    ],
    year: 1564,
    dateLabel: "1564",
    period: "Muromachi",
    location: {
      name: "Kōnodai, Shimōsa Province (modern Ichikawa, Chiba)",
      lat: 35.76028,
      lon: 139.89511
    },
    combatants: {
      side1: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujiyasu (with Ujimasa & Ujiteru)",
        forces: "approximately 20,000"
      },
      side2: {
        name: "Satomi clan",
        leader: "Satomi Yoshihiro (with Ōta Sukemasa)",
        forces: "approximately 8,000"
      }
    },
    outcome: "Decisive Hōjō victory.",
    summary: "A generation after the first battle, the sons fought again at Kōnodai, and again the Hōjō prevailed, cementing their grip on the Kantō.",
    details: `In 1564 Hōjō Ujiyasu met Satomi Yoshihiro at Kōnodai in a rematch of the 1538 battle fought by their fathers. The victory secured Hōjō dominance over the lower Kantō.

According to the Hōjō Godaiki, the Satomi forces initially gained the upper hand. Believing the fighting was over for the day, Satomi Yoshihiro's men removed their armor and fed their horses. At that moment, Ujiyasu's son Ujimasa let out a great war cry while Ujiyasu charged directly into the surprised camp, routing the Satomi completely.`
  },
  {
    id: "unnokuchi",
    sources: [ { label: "Wikipedia: Battle of Un no Kuchi", url: "https://en.wikipedia.org/wiki/Battle_of_Un_no_Kuchi" } ],
    name: "Battle of Un no Kuchi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), who won his first battle here aged fifteen. Wikimedia Commons."
      }
    ],
    year: 1536,
    dateLabel: "1536",
    period: "Muromachi",
    location: {
      name: "Un no Kuchi, Shinano Province (modern Nagano Prefecture)",
      lat: 36.037036,
      lon: 138.495622
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Nobutora & Takeda Harunobu (Shingen)",
        forces: "approximately 8,000"
      },
      side2: {
        name: "Hiraga clan",
        leader: "Hiraga Genshin",
        forces: "over 1,000"
      }
    },
    outcome: "Takeda victory; Hiraga Genshin killed.",
    summary: "The future Takeda Shingen, aged fifteen, won his first battle here with a clever ambush, an early glimpse of the strategist to come.",
    details: `In 1536 the Takeda under Nobutora campaigned into Shinano against Hiraga Genshin. When the initial Takeda advance fell back, the fifteen-year-old Takeda Harunobu, later famous as Shingen, wheeled about and ambushed the unprepared garrison, winning his first victory.

It was an early sign of the tactical gifts that would define his career.`
  },
  {
    id: "kaga-rebellion",
    sources: [ { label: "Wikipedia: Kaga Rebellion", url: "https://en.wikipedia.org/wiki/Kaga_Rebellion" } ],
    name: "Kaga Rebellion",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Provinces_of_Japan-Kaga.svg/960px-Provinces_of_Japan-Kaga.svg.png",
        caption: "Kaga Province (highlighted), which the Ikkō-ikki governed for nearly a century. Wikimedia Commons."
      }
    ],
    year: 1488,
    dateLabel: "1487–1488",
    period: "Muromachi",
    location: {
      name: "Kaga Province (Takao Castle, near modern Kanazawa, Ishikawa)",
      lat: 36.51347,
      lon: 136.637759
    },
    combatants: {
      side1: {
        name: "Ikkō-ikki",
        leader: "Ikkō (True Pure Land) leagues",
        forces: "100,000–200,000 mobilised"
      },
      side2: {
        name: "Togashi clan",
        leader: "Togashi Masachika"
      }
    },
    outcome: "Ikkō-ikki victory; Togashi Masachika forced to suicide.",
    summary: "A mass uprising of Ikkō (True Pure Land) believers overthrew their governor and turned Kaga into a 'province ruled by peasants' for nearly a century.",
    details: `In 1487–88 the Ikkō-ikki, leagues of True Pure Land Buddhist believers, farmers and minor samurai, rose against the provincial governor Togashi Masachika. Vastly outnumbering his forces, they besieged him in Takao Castle, where he took his own life.

The Ikkō-ikki then governed Kaga themselves for almost a hundred years, a remarkable instance of popular self-rule in medieval Japan, until Oda Nobunaga's forces finally crushed the movement in the 1570s–80s.`
  },
  {
    id: "sakainehara",
    sources: [ { label: "Wikipedia: Battle of Sakainehara", url: "https://en.wikipedia.org/wiki/Battle_of_Sakainehara" } ],
    name: "Battle of Sakainehara",
    year: 1479,
    date: "1479-01-02",
    dateLabel: "January 2, 1479 (Bummei 10/12/10)",
    period: "Muromachi",
    location: {
      name: "Sakainehara, Shimōsa Province (modern Kashiwa, Chiba)",
      lat: 35.83208,
      lon: 139.9535
    },
    combatants: {
      side1: {
        name: "Ōgigayatsu-Uesugi side",
        leader: "Ōta Dōkan (with Chiba Yoritane)"
      },
      side2: {
        name: "Rival Chiba branch",
        leader: "Chiba Takatane"
      }
    },
    outcome: "Uesugi/Ōta victory.",
    summary: "An early battle of the famed castle-builder Ōta Dōkan, from the long Kantō wars that ushered in the Sengoku age in eastern Japan.",
    details: `In 1478 Ōta Dōkan, the warrior-poet who built Edo Castle, defeated a rival Chiba force at Sakainehara during the turmoil of the Kantō. It is the earliest battle in this collection, from the troubled decades that opened the Sengoku period.

The engagement was part of the labyrinthine Kyōtoku Incident, a thirty-year conflict that tore the Kantō region apart long before the rest of Japan erupted into the Ōnin War. Dōkan's tactical brilliance at Sakainehara helped stabilize the region temporarily for the Uesugi, though he would later be assassinated by his own paranoid lord.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sakainehara_Battlefield.JPG/960px-Sakainehara_Battlefield.JPG",
        caption: "The Sakainehara battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "iidagawara",
    sources: [ { label: "Japanese Wikipedia: 飯田河原の戦い", url: "https://ja.wikipedia.org/wiki/飯田河原の戦い" } ],
    name: "Battle of Iidagawara",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Takeda_Nobutora_by_Takeda_Nobukado_%28Daisenji_Kofu%29.jpg", caption: "Takeda Nobutora, victor at Iidagawara (1521). Wikimedia Commons." }
    ],
    year: 1521,
    dateLabel: "1521",
    period: "Muromachi",
    location: {
      name: "Iidagawara, Kai Province (modern Kōfu, Yamanashi)",
      lat: 35.6709,
      lon: 138.5505
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Nobutora"
      },
      side2: {
        name: "Imagawa clan",
        leader: "Imagawa forces (Fukushima Masashige)"
      }
    },
    outcome: "Takeda victory.",
    summary: "An early triumph of Takeda Nobutora, father of Takeda Shingen, defending his home province of Kai against an Imagawa invasion.",
    details: `In 1521 an Imagawa army pushed into Kai but was thrown back by Takeda Nobutora at Iidagawara near Kōfu. The victory secured the Takeda hold on their home province; Nobutora's son Harunobu, the future Shingen, was born that same year.

The Imagawa forces, led by Fukushima Masashige, had threatened the very heart of the Takeda domain, advancing close to the capital. Nobutora's decisive defense at the Kōfu riverbed averted disaster, proving his military capability and stabilizing Kai after years of bloody internal strife.`
  },
  {
    id: "ningbo-incident",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/%C5%8Cuchi_Yoshioki.jpg/960px-%C5%8Cuchi_Yoshioki.jpg",
        caption: "Portrait of Ōuchi Yoshioki, who sent the 1523 mission whose envoy Kendō Sōsetsu attacked the rival Hosokawa party at Ningbo; Yoshioki himself was not there. Yamaguchi Museum, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Ningbo incident", url: "https://en.wikipedia.org/wiki/Ningbo_incident" } ],
    name: "Ningbo incident",
    year: 1523,
    dateLabel: "May 1523",
    period: "Muromachi",
    location: {
      name: "Ningbo, China, NOT in Japan; a clash between Japanese clan missions on Ming soil",
      lat: 29.868,
      lon: 121.544
    },
    combatants: {
      side1: {
        name: "Ōuchi clan mission",
        leader: "Kendō Sōsetsu"
      },
      side2: {
        name: "Hosokawa clan mission",
        leader: "Rankō Zuisa & Song Suqing"
      }
    },
    outcome: "Ōuchi rampage; official Ming–Japan tally trade was broken off.",
    summary: "Not a battle in Japan at all, but a deadly brawl in the Chinese port of Ningbo between rival Japanese clan missions over the Ming tribute trade, included here as a member of the Sengoku battle category.",
    details: `In 1523 two Japanese trade missions, one sent by the Ōuchi, one by the Hosokawa, clashed at the Ming port of Ningbo when the Hosokawa party won favour through bribery. The enraged Ōuchi envoys killed their rivals, burned their ship and plundered the coast. The incident severed official Ming–Japanese trade and helped touch off decades of wokō (pirate) raids.

(This event took place in China; on this Japan-focused map its marker sits at the far western edge.)`
  },
  {
    id: "nashinokidaira",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ujituna_Hojo.jpg",
        caption: "Portrait of Hōjō Ujitsuna, second head of the Later Hōjō, who was beaten back here by Takeda Nobutora in 1526; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Nashinokidaira", url: "https://en.wikipedia.org/wiki/Battle_of_Nashinokidaira" } ],
    name: "Battle of Nashinokidaira",
    year: 1526,
    dateLabel: "1526",
    period: "Muromachi",
    location: {
      name: "Nashinokidaira, Kai Province (modern Yamanashi Prefecture), coordinates approximate",
      lat: 35.42,
      lon: 138.86
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Nobutora"
      },
      side2: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujitsuna"
      }
    },
    outcome: "Takeda victory.",
    summary: "Takeda Nobutora repelled a Hōjō incursion into Kai, holding his home province against the rising power of the Kantō.",
    details: `In 1526 Takeda Nobutora defeated a Hōjō army under Ujitsuna at Nashinokidaira in Kai, fending off the Later Hōjō's probing into the mountains.

The victory was a crucial defensive success for Nobutora, who had spent years unifying Kai against internal rebellion and external pressure. By repelling the powerful Hōjō advance, he secured the mountainous borders of the province, leaving a consolidated domain for his son, the future Takeda Shingen. The Takeda–Hōjō rivalry would simmer for two more generations.`
  },
  {
    id: "ozawahara",
    sources: [ { label: "Wikipedia: Battle of Ozawahara", url: "https://en.wikipedia.org/wiki/Battle_of_Ozawahara" } ],
    name: "Battle of Ozawahara",
    year: 1530,
    dateLabel: "1530",
    period: "Muromachi",
    location: {
      name: "Ozawahara, Musashi Province (modern Asao, Kawasaki, Kanagawa)",
      lat: 35.5937,
      lon: 139.5026
    },
    combatants: {
      side1: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujiyasu"
      },
      side2: {
        name: "Ōgigayatsu-Uesugi clan",
        leader: "Uesugi Tomooki"
      }
    },
    outcome: "Hōjō victory, the first battle of the sixteen-year-old Ujiyasu.",
    summary: "The debut victory of Hōjō Ujiyasu, who would become the greatest of the Later Hōjō lords of the Kantō.",
    details: `At Ozawahara in 1530 the sixteen-year-old Hōjō Ujiyasu won his first battle, defeating Uesugi Tomooki. It was an early step in the long Hōjō–Uesugi struggle for the Kantō plain.

According to the Hōjō Godaiki, when the Hōjō vanguard was initially pushed back by the Uesugi assault, the young Ujiyasu led the second division in a fierce counter-charge. This tactical reserve broke the Uesugi lines, resulting in over 1,000 enemy casualties and securing a brilliant debut for the future lord of Odawara.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ujiyasu_Hojo.jpg",
        caption: "Portrait of Hōjō Ujiyasu, who fought his first battle here. Wikimedia Commons."
      }
    ]
  },
  {
    id: "idano",
    sources: [ { label: "Japanese Wikipedia: 井田野の戦い", url: "https://ja.wikipedia.org/wiki/井田野の戦い" } ],
    name: "Battle of Idano",
    year: 1536,
    date: "1536-01-05",
    dateLabel: "Winter 1535–36, shortly after the Moriyama Incident (Tenbun 4/12/5 = 29 Dec 1535); exact date uncertain",
    period: "Muromachi",
    location: {
      name: "Idano, Mikawa Province (modern Ida-chō, Okazaki, Aichi)",
      lat: 34.978763,
      lon: 137.16724
    },
    combatants: {
      side1: {
        name: "Matsudaira clan",
        leader: "Matsudaira Hirotada (with Nobutaka & Yasutaka)"
      },
      side2: {
        name: "Oda clan",
        leader: "Oda Nobuhide"
      }
    },
    outcome: "Matsudaira victory by most accounts, though contested, some sources record heavy Matsudaira losses and a negotiated truce; Oda Nobuhide's invasion of Mikawa was checked.",
    summary: "After their lord Kiyoyasu was assassinated, the Matsudaira, the line that would produce Tokugawa Ieyasu, beat back an invasion by Oda Nobuhide of Owari, who had seized on the chaos to push into Mikawa.",
    details: `In late 1535 the Matsudaira chief Kiyoyasu (grandfather of the future Tokugawa Ieyasu) was killed by his own retainer Abe Masatoyo, the "Moriyama Collapse" (Moriyama kuzure), throwing the clan into crisis. Seizing the moment, Oda Nobuhide of Owari invaded Mikawa and advanced on Okazaki, encamping at Daiju-ji.

The ten-year-old Matsudaira Hirotada, backed by his uncles Nobutaka and Yasutaka, met the Oda at Idano and threw them back, steadying the house and preserving the lineage that would eventually rule Japan.`
  },
  {
    id: "momotsugi",
    sources: [ { label: "Wikipedia: Battle of Momotsugi", url: "https://en.wikipedia.org/wiki/Battle_of_Momotsugi" } ],
    name: "Battle of Momotsugi",
    year: 1539,
    date: "1539-09-10",
    dateLabel: "October 9, 1539 (Tenbun 8/8/27)",
    period: "Muromachi",
    location: {
      name: "Momotsugi Castle (百次城, also Iwataga-jō), Satsuma Province (modern Satsumasendai, Kagoshima)",
      lat: 31.7908,
      lon: 130.3383
    },
    combatants: {
      side1: {
        name: "Iriki-in clan (for Shimazu Takahisa)",
        leader: "Iriki-in Shigetomo"
      },
      side2: {
        name: "Shimazu Sanehisa's faction",
        leader: "Shimazu Sanehisa"
      }
    },
    outcome: "Iriki-in victory; Iwaya Castle taken in a night raid.",
    summary: "An episode in the internal Shimazu power struggle: a loyal vassal seized a castle by night and helped the main Shimazu line reunite Satsuma.",
    details: `In 1539 Iriki-in Shigetomo, fighting for the main Shimazu line under Takahisa, stormed Iwaya (Momotsugi) Castle in a single night raid. The feat helped the Shimazu end the long rebellion of the rival Sanehisa and reunify Satsuma, the base from which they would later nearly conquer all Kyūshū.`
  },
  {
    id: "ankokuji",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Portrait_of_Itagaki_Nobukata.jpg/960px-Portrait_of_Itagaki_Nobukata.jpg",
        caption: "Portrait of Itagaki Nobukata, the Takeda general who defeated Takatō Yoritsugu at Ankokuji, painted by Matsumoto Fūko in 1860 and dedicated to Erin-ji, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Ankokuji", url: "https://en.wikipedia.org/wiki/Battle_of_Ankokuji" } ],
    name: "Battle of Ankokuji",
    year: 1542,
    date: "1542-11-02",
    dateLabel: "November 2, 1542 (Tenbun 11/9/25)",
    period: "Muromachi",
    location: {
      name: "Ankokuji, Shinano Province (modern Chino, Nagano)",
      lat: 35.9887,
      lon: 138.1409
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen (Itagaki Nobukata)"
      },
      side2: {
        name: "Takatō clan",
        leader: "Takatō Yoritsugu"
      }
    },
    outcome: "Takeda victory; Takatō Yoritsugu was defeated and his brother Yorimune was killed.",
    summary: "A decisive engagement in Takeda Shingen's conquest of Shinano, in which the Takatō forces were defeated and their leader's brother slain.",
    details: `Following the fall of Fukuyo, Takeda Shingen's general Itagaki Nobukata defeated the Takatō clan at Ankokuji on November 2, 1542. Takatō Yoritsugu's brother, Yorimune, fell in the battle. Yoritsugu himself managed to escape via the Tsuezuki Pass to Takatō Castle, continuing his resistance until surrendering in 1545. He was eventually ordered to commit seppuku in Kōfu in 1552.`
  },
  {
    id: "kanoguchi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Oda-zuka.jpg/960px-Oda-zuka.jpg",
        caption: "The Oda-zuka in Gifu City, marked as the reburial site of the Oda dead of this battle; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Kanōguchi", url: "https://en.wikipedia.org/wiki/Battle_of_Kan%C5%8Dguchi" } ],
    name: "Battle of Kanōguchi",
    year: 1547,
    date: "1547-11-04",
    dateLabel: "November 4, 1547 (Tenbun 16/9/22); some sources date the battle to Tenbun 13/9/22 = October 8, 1544",
    period: "Muromachi",
    location: {
      name: "Kanō, Mino Province (modern Gifu), coordinates approximate",
      lat: 35.422,
      lon: 136.768
    },
    combatants: {
      side1: {
        name: "Saitō clan",
        leader: "Saitō Dōsan"
      },
      side2: {
        name: "Oda clan",
        leader: "Oda Nobuhide"
      }
    },
    outcome: "Saitō victory; the Oda were thrown back with heavy losses.",
    summary: "Saitō Dōsan, the cunning 'Viper of Mino', repelled Oda Nobuhide before the Mino capital, a rivalry later sealed by marrying his daughter to Nobuhide's son, Oda Nobunaga.",
    details: `Oda Nobuhide's drive into Mino was checked at Kanōguchi in 1547, where Saitō Dōsan inflicted thousands of casualties. The bitter rivalry ended in alliance when Dōsan married his daughter Nōhime to Nobuhide's son, the young Oda Nobunaga.

Nobuhide had launched a massive invasion force to seize Mino Province, pushing to the very gates of Dōsan's stronghold at Inabayama Castle. But Dōsan, famously known as the "Viper of Mino," feigned weakness before launching a devastating counter-attack that routed the Oda army. Realizing a military conquest was impossible, Nobuhide shifted to diplomacy.`
  },
  {
    id: "oshikibata",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Sue_Harukata_by_Zoku_Eiyu_Hyakunin_Isshu.jpg",
        caption: "Sue Harukata, whose general Miyagawa Fusanaga was defeated at Oshikibata, in a woodblock portrait of 1849 from the Zoku Eiyū Hyakunin Isshu; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Oshikibata", url: "https://en.wikipedia.org/wiki/Battle_of_Oshikibata" } ],
    name: "Battle of Oshikibata",
    year: 1554,
    dateLabel: "1554",
    period: "Muromachi",
    location: {
      name: "Oshikibata, Aki Province (modern Hiroshima Prefecture)",
      lat: 34.35689,
      lon: 132.28433
    },
    combatants: {
      side1: {
        name: "Mōri clan",
        leader: "Mōri Motonari",
        forces: "approximately 3,000"
      },
      side2: {
        name: "Sue clan",
        leader: "Miyagawa Fusanaga (for Sue Harukata)",
        forces: "approximately 7,000"
      }
    },
    outcome: "Mōri victory.",
    summary: "A preliminary victory in Mōri Motonari's war against the usurper Sue Harukata, setting up his famous triumph at Miyajima the next year.",
    details: `In 1554 Mōri Motonari defeated a larger Sue force under Miyagawa Fusanaga at Oshikibata, a prelude to his decisive ambush at Itsukushima (Miyajima) in 1555. With Sue destroyed, the Mōri absorbed the old Ōuchi domains and became the greatest power in western Japan.

When Sue Harukata usurped the Ōuchi clan, Motonari feigned loyalty before breaking away. The victory at Oshikibata proved that the smaller Mōri forces stand against the Sue armies in the field. This tactical success gave Motonari the breathing room to prepare his famous trap on the island sanctuary of Itsukushima the following year.`
  },
  {
    id: "norada",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Azai_Nagamasa3.jpg/960px-Azai_Nagamasa3.jpg", caption: "Period portrait of Azai Nagamasa, the teenage victor of Norada. Wikimedia Commons." } ],
    sources: [ { label: "Wikipedia: Battle of Norada", url: "https://en.wikipedia.org/wiki/Battle_of_Norada" } ],
    name: "Battle of Norada",
    year: 1560,
    dateLabel: "1560",
    period: "Muromachi",
    location: {
      name: "Norada, near Hikone, Ōmi Province (modern Shiga Prefecture)",
      lat: 35.1961,
      lon: 136.2
    },
    combatants: {
      side1: {
        name: "Azai clan",
        leader: "Azai Nagamasa",
        forces: "approximately 11,000"
      },
      side2: {
        name: "Rokkaku clan",
        leader: "Rokkaku Yoshikata",
        forces: "approximately 25,000"
      }
    },
    outcome: "Azai victory against more than two-to-one odds.",
    summary: "The teenage Azai Nagamasa announced himself by routing the Rokkaku, winning his clan's independence in Ōmi.",
    details: `In 1560 the young Azai Nagamasa threw off Rokkaku overlordship, defeating a much larger Rokkaku army at Norada near Hikone. The victory broke Rokkaku power and established Nagamasa, later Oda Nobunaga's brother-in-law, then his enemy, as master of northern Ōmi.

The Rokkaku had long dominated the Azai, even forcing Nagamasa to take a Rokkaku bride and a humiliating name. By repudiating the bride and marching to war, the fifteen-year-old Nagamasa took a massive gamble. His stunning tactical victory against a force twice his size won him total independence and control of the strategic crossroads province.`
  },
  {
    id: "kyokoji",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/%E6%95%99%E8%88%88%E5%AF%BA%E5%B1%B1%E9%96%80.JPG/960px-%E6%95%99%E8%88%88%E5%AF%BA%E5%B1%B1%E9%96%80.JPG", caption: "The mountain gate of Kyōkōji in Yao, Osaka, the temple that gives the battle its name. Wikimedia Commons." } ],
    sources: [ { label: "Wikipedia: Battle of Kyōkōji", url: "https://en.wikipedia.org/wiki/Battle_of_Ky%C5%8Dk%C5%8Dji" } ],
    name: "Battle of Kyōkōji",
    year: 1562,
    date: "1562-05-19",
    dateLabel: "May 19–20, 1562",
    period: "Muromachi",
    location: {
      name: "Kyōkōji, Kawachi Province (modern Yao, Osaka)",
      lat: 34.61872,
      lon: 135.63625
    },
    combatants: {
      side1: {
        name: "Miyoshi clan",
        leader: "Miyoshi Nagayoshi",
        forces: "approximately 60,000"
      },
      side2: {
        name: "Hatakeyama clan",
        leader: "Hatakeyama Takamasa",
        forces: "approximately 40,000"
      }
    },
    outcome: "Miyoshi victory.",
    summary: "A huge clash near Osaka in which Miyoshi Nagayoshi, for a time the most powerful man in central Japan, beat the Hatakeyama and tightened his hold on the capital region.",
    details: `At Kyōkōji in 1562 the Miyoshi under Nagayoshi defeated the Hatakeyama in one of the larger battles of the Kinai, confirming Miyoshi dominance around the capital in the years just before Oda Nobunaga's rise.

The Miyoshi clan, controlling the commercial wealth of Sakai and the vital sea routes of the Inland Sea, had established a hegemony over the central provinces that effectively marginalized the Ashikaga shogunate. By crushing the Hatakeyama resistance at Kyōkōji, Miyoshi Nagayoshi eliminated his last major regional rival, reaching the zenith of his power.`
  },
  {
    id: "kizaki",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Earthen_wall_of_Honmaru_%28Iino_Castle%29.jpg/960px-Earthen_wall_of_Honmaru_%28Iino_Castle%29.jpg", caption: "Earthen ramparts of the honmaru at Iino Castle in Ebino, Shimazu Yoshihiro's seat beside the Kizaki plain. Wikimedia Commons." } ],
    sources: [ { label: "Wikipedia: Battle of Kizaki", url: "https://en.wikipedia.org/wiki/Battle_of_Kizaki" } ],
    name: "Battle of Kizaki",
    year: 1572,
    date: "1572-06-14",
    dateLabel: "June 14, 1572",
    period: "Muromachi",
    location: {
      name: "Kizaki plain, Hyūga–Ōsumi border (modern Miyazaki Prefecture)",
      lat: 32.03944,
      lon: 130.83028
    },
    combatants: {
      side1: {
        name: "Shimazu clan",
        leader: "Shimazu Yoshihiro",
        forces: "approximately 300"
      },
      side2: {
        name: "Itō clan",
        leader: "Itō Sukeyasu",
        forces: "approximately 3,000"
      }
    },
    outcome: "Stunning Shimazu victory against ten-to-one odds.",
    summary: "Called 'the Okehazama of Kyūshū', Shimazu Yoshihiro's 300 men destroyed an Itō army ten times their size through a classic feigned-retreat ambush.",
    details: `At Kizaki in 1572 Shimazu Yoshihiro, vastly outnumbered, lured the Itō into a headlong pursuit and then turned and shattered them. The upset crippled the Itō clan and opened Hyūga to Shimazu expansion.

The battle is celebrated as a classic execution of the Shimazu's signature "tsuri-no-bushi" (decoy-and-ambush) tactical system. Facing an Itō army of 3,000 with only 300 men, Yoshihiro staged a rapid, controlled false retreat. When the Itō rushed forward in pursuit, hidden Shimazu units struck from the flanks, crushing the larger force against overwhelming odds.`
  },
  {
    id: "tonegawa",
    sources: [ { label: "Wikipedia: Battle of Tonegawa", url: "https://en.wikipedia.org/wiki/Battle_of_Tonegawa" } ],
    name: "Battle of Tonegawa",
    year: 1571,
    dateLabel: "1571",
    period: "Muromachi",
    location: {
      name: "Tone River, Kōzuke Province (modern Gunma Prefecture)",
      lat: 36.67861,
      lon: 138.99917
    },
    combatants: {
      side1: {
        name: "Uesugi clan",
        leader: "Uesugi Kenshin"
      },
      side2: {
        name: "Takeda clan",
        leader: "Takeda Shingen"
      }
    },
    outcome: "Inconclusive; the rivals disengaged across the river.",
    summary: "The last meeting in arms of the great rivals Uesugi Kenshin and Takeda Shingen, ending, as so often, without a decision.",
    details: `In 1571 Uesugi Kenshin struck at a Takeda satellite castle in Kōzuke, bringing him once more face to face with Takeda Shingen across the Tone River. The two old adversaries drew apart without a decisive fight, the final encounter of a rivalry that had defined a generation. Shingen died two years later.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), one of the two rivals. Wikimedia Commons."
      }
    ]
  },
  {
    id: "mimaomote",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Tyousokabe_Mototika.jpg",
        caption: "Portrait of Chōsokabe Motochika, painted 1599 and held at Hada Shrine in Kōchi; the Tosa daimyō's push into Iyo was checked at Mimaomote, where his field commander was Hisatake Chikanobu. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Mimaomote", url: "https://en.wikipedia.org/wiki/Battle_of_Mimaomote" } ],
    name: "Battle of Mimaomote",
    year: 1581,
    dateLabel: "1581 (Tenshō 9/5/21), modern dating; traditionally 1579",
    period: "Azuchi–Momoyama",
    location: {
      name: "Okamoto Castle, Mima, Iyo Province (modern Mima-chō, Uwajima, Ehime), coordinates approximate",
      lat: 33.2897,
      lon: 132.6232
    },
    combatants: {
      side1: {
        name: "Kōno clan",
        leader: "Doi Kiyonaga"
      },
      side2: {
        name: "Chōsokabe clan",
        leader: "Hisatake Chikanobu (久武親信)",
        forces: "approximately 7,000"
      }
    },
    outcome: "Kōno victory; the Chōsokabe commander Hisatake Chikanobu was killed.",
    summary: "The Kōno of Iyo threw back a Chōsokabe thrust into Shikoku, killing the invading general Hisatake Chikanobu (久武親信).",
    details: `As the Chōsokabe of Tosa pressed their conquest of Shikoku, a Kōno force under Doi Kiyonaga repelled their thrust into Iyo and killed the Chōsokabe commander Hisatake Chikanobu (久武親信). Traditional accounts date the battle to Tenshō 7 (1579), but recent scholarship, based on source criticism and surviving epigraphy, places it in Tenshō 9 (1581).`
  },
  {
    id: "tensho-iga-war",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kashihara_Castle_%28Iga%29%2C_honmaru.jpg/960px-Kashihara_Castle_%28Iga%29%2C_honmaru.jpg", caption: "The honmaru of Kashihara Castle in Iga, the last stronghold to hold out against Nobunaga in 1581. Wikimedia Commons." } ],
    sources: [ { label: "Wikipedia: Tenshō Iga War", url: "https://en.wikipedia.org/wiki/Tensh%C5%8D_Iga_War" } ],
    name: "Tenshō Iga War",
    yearStart: 1579,
    yearEnd: 1582,
    dateLabel: "1579–1582",
    period: "Azuchi–Momoyama",
    location: {
      name: "Iga Province (modern Iga, Mie Prefecture), coordinates approximate",
      lat: 34.77,
      lon: 136.13
    },
    combatants: {
      side1: {
        name: "Oda clan",
        leader: "Oda Nobunaga & Oda Nobukatsu",
        forces: "up to 42,000 (1581)"
      },
      side2: {
        name: "Iga ikki (warrior leagues)",
        leader: "Iga local confederation",
        forces: "around 10,000"
      }
    },
    outcome: "Oda victory; Iga was conquered and devastated.",
    summary: "Oda Nobunaga's brutal subjugation of the independent warrior leagues of Iga, whose guerrilla and espionage traditions became the legend of the ninja.",
    details: `The mountainous province of Iga was ruled not by a daimyō but by a confederation of self-governing warrior bands. After a humiliating repulse of Oda Nobukatsu in 1579, Oda Nobunaga invaded in force in 1581 with some 42,000 men, crushing the defenders and laying the province waste; mopping-up continued into 1582.

The Iga fighters' mastery of ambush, infiltration and espionage became the historical seed of the "ninja" tradition forever associated with the region.`
  },
  {
    id: "nagasaki-attacks",
    sources: [ { label: "Wikipedia: Donation of Bartolomeu", url: "https://en.wikipedia.org/wiki/Donation_of_Bartolomeu" } ],
    name: "Attacks on Nagasaki (1574–1579)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Portuguese_silktraders_in_Nagasaki.jpg", caption: "Portuguese traders at Nagasaki, the contested Christian port. Wikimedia Commons." }
    ],
    yearStart: 1574,
    yearEnd: 1579,
    dateLabel: "1574–1579",
    period: "Azuchi–Momoyama",
    location: {
      name: "Nagasaki, Hizen Province (modern Nagasaki Prefecture)",
      lat: 32.7448,
      lon: 129.8737
    },
    combatants: {
      side1: {
        name: "Ōmura clan (Christian, Jesuit-aligned)",
        leader: "Ōmura Sumitada"
      },
      side2: {
        name: "Ryūzōji and local rivals",
        leader: "Fukahori Sumikata, Ryūzōji Takanobu & Matsura Shigenobu",
        forces: "a fleet of 60 ships (Fukahori, 1574)"
      }
    },
    outcome: "Ōmura held Nagasaki, but was beaten in his home domain and submitted as a vassal of the Ryūzōji; under continuing pressure he ceded Nagasaki and Mogi to the Society of Jesus in June 1580.",
    summary: "A series of assaults on the new port of Nagasaki, defended by Japan's first Christian daimyō, that led to the town being handed to the Jesuits, the seed of Nagasaki's later role as Japan's window on the West.",
    details: `Ōmura Sumitada, baptised Bartolomeu and the first Christian daimyō, had opened Nagasaki to Portuguese trade. Between 1574 and 1579 his small garrison beat off repeated attacks by rivals such as the Ryūzōji. Worn down, in 1580 Sumitada ceded Nagasaki itself to the Society of Jesus, an extraordinary arrangement that made the port the centre of Christianity in Japan until the faith's suppression.`
  },
  {
    id: "numajiri",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Hojo_Ujinao.jpg",
        caption: "Posthumous portrait of Hōjō Ujinao, who led the Later Hōjō army at Numajiri, painted in 1803 and held at Hōun-ji. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Numajiri", url: "https://en.wikipedia.org/wiki/Battle_of_Numajiri" } ],
    name: "Battle of Numajiri",
    year: 1584,
    dateLabel: "May–August 1584",
    period: "Azuchi–Momoyama",
    location: {
      name: "Numajiri, Shimotsuke Province (modern Tochigi), coordinates approximate",
      lat: 36.282,
      lon: 139.66
    },
    combatants: {
      side1: {
        name: "Satake-led coalition",
        leader: "Satake Yoshishige",
        forces: "approximately 20,000"
      },
      side2: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujinao",
        forces: "approximately 80,000"
      }
    },
    outcome: "Satake coalition holds; a 110-day standoff ended in a negotiated peace.",
    summary: "A massive but largely bloodless confrontation in the Kantō, notable for the more than 8,000 matchlock guns fielded by the Satake-led northern Kantō coalition, reportedly exceeding the roughly 3,000 credited to Oda Nobunaga at Nagashino.",
    details: `Through the summer of 1584 a huge Hōjō army faced a Satake-led northern coalition at Numajiri. After 110 days of stalemate, and remarkable use of over 8,000 firearms, the two sides made peace, restoring the previous borders. The crisis pushed the northern Kantō lords toward Toyotomi Hideyoshi, who would crush the Hōjō six years later.`
  },
  {
    id: "kanagawa-1582",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/NDL-DC_1306238-Keisai_Eisen-%E5%8D%81%E5%A3%B1_%E6%94%AF%E8%98%87%E8%B7%AF%E3%83%8E%E9%A7%85%E6%9C%AC%E5%BA%84%E5%AE%BF%E7%A5%9E%E6%B5%81%E5%B7%9D%E6%B8%A1%E5%A0%B4.jpg/960px-NDL-DC_1306238-Keisai_Eisen-%E5%8D%81%E5%A3%B1_%E6%94%AF%E8%98%87%E8%B7%AF%E3%83%8E%E9%A7%85%E6%9C%AC%E5%BA%84%E5%AE%BF%E7%A5%9E%E6%B5%81%E5%B7%9D%E6%B8%A1%E5%A0%B4.jpg", caption: "Edo period woodblock print of the ferry crossing on the Kanna River at Honjō. Wikimedia Commons." } ],
    sources: [ { label: "Wikipedia: Battle of Kanagawa", url: "https://en.wikipedia.org/wiki/Battle_of_Kanagawa" } ],
    name: "Battle of Kanagawa",
    year: 1582,
    date: "1582-07-05",
    dateLabel: "July 5–8, 1582 (Tenshō 10/6/16)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Kanna River, Kōzuke–Musashi border (modern Gunma / Saitama)",
      lat: 36.26944,
      lon: 139.11633
    },
    combatants: {
      side1: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujinao & Ujikuni",
        forces: "approximately 55,000"
      },
      side2: {
        name: "Oda clan",
        leader: "Takigawa Kazumasu",
        forces: "approximately 18,000"
      }
    },
    outcome: "Decisive Hōjō victory.",
    summary: "In the chaos after Oda Nobunaga's death, the Hōjō smashed the Oda governor of the Kantō, Takigawa Kazumasu, in one of the largest battles of the eastern provinces.",
    details: `Days after Oda Nobunaga was killed at the Honnō-ji, the Later Hōjō moved to seize the Kantō from his deputy Takigawa Kazumasu. Across the Kanna River the Hōjō overwhelmed the outnumbered Oda army, driving Takigawa from the region, helping to spark the scramble among Hōjō, Tokugawa and Uesugi for the former Takeda and Oda lands.`
  },
  {
    id: "nakatomigawa",
    sources: [ { label: "Wikipedia: Battle of Nakatomigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Nakatomigawa" } ],
    name: "Battle of Nakatomigawa",
    year: 1582,
    date: "1582-09-13",
    dateLabel: "September 13, 1582 (Tenshō 10/8/27)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Nakatomi River, Awa Province (modern Tokushima, Shikoku)",
      lat: 34.1342461,
      lon: 134.5168406
    },
    combatants: {
      side1: {
        name: "Chōsokabe clan",
        leader: "Chōsokabe Motochika",
        forces: "approximately 20,000"
      },
      side2: {
        name: "Miyoshi clan",
        leader: "Sogō Masayasu",
        forces: "approximately 5,000"
      }
    },
    outcome: "Chōsokabe victory.",
    summary: "Chōsokabe Motochika crushed the Miyoshi in Awa, all but completing his conquest of Shikoku.",
    details: `At the Nakatomi River in 1582 Chōsokabe Motochika's army overwhelmed the Miyoshi of Awa, bringing him close to mastering all four provinces of Shikoku, an ambition soon cut short by Toyotomi Hideyoshi's invasion of the island in 1585.

The battle marked the culmination of Motochika's ruthless expansion. Sweeping down from Tosa, his well-organized peasant-warrior (ichiryō gusoku) forces caught the Miyoshi army crossing the Nakatomi River. The Chōsokabe inflicted crushing casualties, effectively extinguishing Miyoshi influence in Shikoku and leaving Motochika briefly undisputed master of the island.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Shozuijo12.jpg/960px-Shozuijo12.jpg",
        caption: "Shōzui Castle, near the Nakatomigawa battlefield. Wikimedia Commons."
      }
    ]
  },
  {
    id: "sendaigawa",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Niiro_Tadamoto.jpg/960px-Niiro_Tadamoto.jpg",
        caption: "Niiro Tadamoto, the Shimazu commander who charged the Toyotomi army at the Sendai River, in a 19th-century woodblock print from Utagawa Yoshiiku's Taiheiki eiyūden series. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Sendaigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Sendaigawa" } ],
    name: "Battle of Sendaigawa",
    year: 1587,
    date: "1587-06-06",
    dateLabel: "June 6, 1587",
    period: "Azuchi–Momoyama",
    location: {
      name: "Sendai River, Satsuma Province (north of Kagoshima, Kyūshū)",
      lat: 32.01869,
      lon: 130.58786
    },
    combatants: {
      side1: {
        name: "Toyotomi forces",
        leader: "Toyotomi Hideyoshi (Hashiba Hidenaga)",
        forces: "approximately 170,000"
      },
      side2: {
        name: "Shimazu clan",
        leader: "Niiro Tadamoto",
        forces: "approximately 5,000"
      }
    },
    outcome: "Toyotomi victory; the Shimazu withdrew and Satsuma soon submitted.",
    summary: "The last stand of the Kyūshū Campaign: a doomed Shimazu rearguard on the Sendai River before Hideyoshi's overwhelming host reached Kagoshima.",
    details: `By mid-1587 Toyotomi Hideyoshi's enormous army had driven the Shimazu back to their Satsuma heartland. At the Sendai River, Niiro Tadamoto led a hopeless but ferocious rearguard, even crossing swords with Katō Kiyomasa, before retreating under cover of night. Days later the Shimazu submitted, and Hideyoshi was master of Kyūshū.`
  },
  {
    id: "koriyama-campaign",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Date_Masamune02.jpg/960px-Date_Masamune02.jpg",
        caption: "Portrait of Date Masamune, who led the Date forces through this campaign, painted after his death by Tosa Mitsusada (1738 to 1806); Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Kōriyama Campaign", url: "https://en.wikipedia.org/wiki/K%C5%8Driyama_Campaign" } ],
    name: "Kōriyama Campaign",
    year: 1588,
    dateLabel: "February–July 1588",
    period: "Azuchi–Momoyama",
    location: {
      name: "Adachi & Asaka districts, Mutsu Province (modern Kōriyama, Fukushima)",
      lat: 37.3506,
      lon: 140.4199
    },
    combatants: {
      side1: {
        name: "Date clan",
        leader: "Date Masamune"
      },
      side2: {
        name: "Ashina–Sōma–Satake coalition",
        leader: "Ashina Yoshihiro & Satake Yoshishige"
      }
    },
    outcome: "Effective Date victory; the confrontation was settled in July 1588.",
    summary: "A months-long campaign of skirmishes around Kōriyama that further consolidated Date Masamune's grip on southern Mutsu.",
    details: `Through the first half of 1588 Date Masamune and a coalition of rival northern clans manoeuvred and skirmished around Kōriyama in southern Mutsu. The inconclusive fighting ended in a settlement that left the Date ascendant, a year before Masamune's decisive triumph at Suriagehara.`
  },
  {
    id: "asai-nawate",
    sources: [ { label: "Wikipedia: Battle of Asai", url: "https://en.wikipedia.org/wiki/Battle_of_Asai" } ],
    name: "Battle of Asai-nawate",
    year: 1600,
    date: "1600-09-16",
    dateLabel: "September 16, 1600 (Keichō 5/8/9)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Asai Nawate, Kaga Province (modern Komatsu, Ishikawa)",
      lat: 36.382667,
      lon: 136.451139
    },
    combatants: {
      side1: {
        name: "Niwa clan (Western-aligned)",
        leader: "Niwa Nagashige",
        forces: "approximately 3,000"
      },
      side2: {
        name: "Maeda clan (Eastern-aligned)",
        leader: "Maeda Toshinaga",
        forces: "approximately 25,000"
      }
    },
    outcome: "Niwa tactical victory by ambush, though the Maeda withdrew in good order.",
    summary: "A sharp Sekigahara-campaign skirmish in the north, where Niwa Nagashige's hidden troops bloodied the far larger Maeda army on narrow ground.",
    details: `As the Sekigahara campaign played out across Japan, Maeda Toshinaga of Kaga marched against the Niwa. At Asai Nawate, Niwa Nagashige sprang an ambush on the narrow road and inflicted heavy losses, forcing the Maeda back on Kanazawa. Nagashige nonetheless later submitted to the victorious Tokugawa and was pardoned through Toshinaga's intercession.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/54/Battle_of_Asainawate_screen_3-4.jpg",
        caption: "Folding screen depicting the Battle of Asainawate. Wikimedia Commons."
      }
    ]
  },
  {
    id: "kuisegawa",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kabuto-zuka_in_%C5%8Cgaki.jpg/960px-Kabuto-zuka_in_%C5%8Cgaki.jpg",
        caption: "A burial mound at Akasaka in Ōgaki, Gifu, said to hold the head and armour of Noisshiki Sukeyoshi, a Nakamura retainer killed in this battle; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Kuisegawa", url: "https://en.wikipedia.org/wiki/Battle_of_Kuisegawa" } ],
    name: "Battle of Kuisegawa",
    year: 1600,
    dateLabel: "October 20, 1600 (Keichō 5/9/14), eve of Sekigahara",
    period: "Azuchi–Momoyama",
    location: {
      name: "Kuise River, near Ōgaki Castle, Mino Province (modern Gifu)",
      lat: 35.38892,
      lon: 136.57606
    },
    combatants: {
      side1: {
        name: "Western Army",
        leader: "Ishida Mitsunari (Shima Sakon)",
        forces: "approximately 1,300"
      },
      side2: {
        name: "Eastern Army",
        leader: "Nakamura Kazuhide and Arima Toyouji (Honda Tadakatsu came up to cover their retreat)",
        forces: "approximately 6,000"
      }
    },
    outcome: "Western Army victory; the Eastern vanguard fell back to Sekigahara.",
    summary: "A skilful ambush by Shima Sakon on the eve of Sekigahara that bloodied the Tokugawa vanguard and briefly lifted Western morale, hours before the decisive battle.",
    details: `On the eve of the main battle, Ishida Mitsunari's general Shima Sakon lured part of the Eastern army across the Kuise River near Ōgaki and ambushed it, inflicting heavy losses. The success heartened the Western Army, but the great clash at Sekigahara the next morning would undo it all.`
  },
  {
    id: "sendanno",
    sources: [ { label: "Wikipedia: Battle of Sendanno", url: "https://en.wikipedia.org/wiki/Battle_of_Sendanno" } ],
    name: "Battle of Sendanno",
    year: 1536,
    dateLabel: "December 1536",
    period: "Muromachi",
    location: {
      name: "Sendanno, Etchū Province (modern Toyama Prefecture), coordinates approximate",
      lat: 36.614,
      lon: 137.025
    },
    combatants: {
      side1: {
        name: "Ikkō-ikki",
        leader: "Ikkō (True Pure Land) leagues"
      },
      side2: {
        name: "Nagao clan",
        leader: "Nagao Tamekage"
      }
    },
    outcome: "Ikkō-ikki victory; Nagao Tamekage was defeated and, in the traditional account, killed, though his end is disputed, with other sources having him retire and die in 1542.",
    summary: "The Ikkō-ikki of Kaga defeated the Echigo warlord Nagao Tamekage, father of Uesugi Kenshin, at Sendanno in Etchū; the traditional account has him killed there, though his fate is disputed.",
    details: `In late 1536 the militant Ikkō-ikki defeated the forces of Nagao Tamekage at Sendanno in Etchū. Traditional military chronicles claimed that Tamekage was killed in this battle, which plunged Echigo into turmoil.

    However, modern historical research shows that Tamekage survived the defeat, returned to Echigo, and formally retired in late 1536 in favor of his eldest son Harukage. He died of illness on Tenbun 10, 12th month, 24th day (January 20, 1542 Julian), while his younger son Kagetora (the future Uesugi Kenshin) eventually succeeded to unify the province.`
  },
  {
    id: "shiojiritoge",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Kisokaido30_Shiojiri.jpg",
        caption: "Keisai Eisen's woodblock view from Shiojiri Pass across frozen Lake Suwa, the Shinano pass where the 1548 battle was fought. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Shiojiritoge", url: "https://en.wikipedia.org/wiki/Battle_of_Shiojiritoge" } ],
    name: "Battle of Shiojiritoge",
    year: 1548,
    date: "1548-08-23",
    dateLabel: "August 22, 1548 (Tenbun 17/7/19)",
    period: "Muromachi",
    location: {
      name: "Shiojiri Pass, Shinano Province (modern Nagano Prefecture)",
      lat: 36.06989,
      lon: 138.02772
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen"
      },
      side2: {
        name: "Ogasawara clan",
        leader: "Ogasawara Nagatoki"
      }
    },
    outcome: "Takeda victory by surprise dawn attack.",
    summary: "Months after his humiliation at Uedahara, Takeda Shingen restored his fortunes with a lightning dawn raid on the Ogasawara at the Shiojiri Pass.",
    details: `In the summer of 1548 Takeda Shingen caught Ogasawara Nagatoki's camp unprepared at the Shiojiri Pass, scattering it with a small, fast mounted force at dawn. The victory reversed the momentum lost at Uedahara and pushed his conquest of Shinano forward once more.

Following his severe defeat at Uedahara earlier that year, Shingen faced a massive coalition attempting to drive him from Shinano. Launching a surprise forced march through the mountains at night, Shingen hit the Ogasawara camp at daybreak while the defenders were still sleeping or preparing breakfast. The rout was total, restoring Takeda prestige.`
  },
  {
    id: "tatarahama-1336",
    sources: [ { label: "Wikipedia: Battle of Tatarahama (1336)", url: "https://en.wikipedia.org/wiki/Battle_of_Tatarahama_(1336)" } ],
    name: "Battle of Tatarahama (1336)",
    year: 1336,
    date: "1336-04-14",
    dateLabel: "April 13, 1336 (Engen 1 / Kenmu 3, 3rd month, 2nd day)",
    period: "Muromachi",
    location: {
      name: "Tatarahama, Hakata Bay, Chikuzen Province (modern Fukuoka)",
      lat: 33.628,
      lon: 130.4451
    },
    combatants: {
      side1: {
        name: "Ashikaga (Northern Court)",
        leader: "Ashikaga Takauji"
      },
      side2: {
        name: "Imperial loyalists (Southern)",
        leader: "Kikuchi Taketoshi"
      }
    },
    outcome: "Ashikaga victory; Kyūshū secured for Takauji.",
    summary: "Driven west after a setback near Kyoto, Ashikaga Takauji rallied on Kyūshū and beat the Kikuchi at Hakata Bay, turning the tide of his bid for power.",
    details: `Forced out of the capital in early 1336, Ashikaga Takauji regrouped in Kyūshū and met the Imperial loyalist Kikuchi at Tatarahama on Hakata Bay. His victory, combined with lenient treatment of the defeated, won him the island and the army with which he marched back east to triumph at Minatogawa.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tatarahama_Battlefield.JPG/960px-Tatarahama_Battlefield.JPG",
        caption: "The Tatarahama battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "minatogawa",
    sources: [ { label: "Wikipedia: Battle of Minatogawa", url: "https://en.wikipedia.org/wiki/Battle_of_Minatogawa" } ],
    name: "Battle of Minatogawa",
    year: 1336,
    date: "1336-07-05",
    dateLabel: "July 5, 1336",
    period: "Muromachi",
    location: {
      name: "Minato River, Settsu Province (modern Kobe, Hyōgo)",
      lat: 34.67997,
      lon: 135.16586
    },
    combatants: {
      side1: {
        name: "Ashikaga (Northern Court)",
        leader: "Ashikaga Takauji & Tadayoshi",
        forces: "approximately 35,000"
      },
      side2: {
        name: "Imperial loyalists (Southern)",
        leader: "Kusunoki Masashige & Nitta Yoshisada",
        forces: "approximately 17,500"
      }
    },
    outcome: "Decisive Ashikaga victory; Kusunoki Masashige died on the field.",
    summary: "The famous last stand of Kusunoki Masashige, the model of samurai loyalty, who marched to a battle he knew was lost on his emperor's orders, opening Kyoto to the Ashikaga.",
    details: `Ordered by Emperor Go-Daigo to make a hopeless frontal stand rather than the guerrilla campaign he advised, Kusunoki Masashige met the returning Ashikaga army at the Minato River. Surrounded and overwhelmed, he and his brother took their own lives.

His self-sacrifice made him an enduring symbol of loyalty in Japanese culture, and the victory let Ashikaga Takauji take Kyoto and install a rival emperor, beginning the split between the Northern and Southern Courts.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Great-Battle-of-Minatogawa-by-Takeuchi-Tacho.png/960px-Great-Battle-of-Minatogawa-by-Takeuchi-Tacho.png",
        caption: "The Battle of Minatogawa, by Takeuchi Tachō. Wikimedia Commons."
      }
    ]
  },
  {
    id: "kanegasaki-1337",
    sources: [ { label: "Wikipedia: Siege of Kanegasaki (1337)", url: "https://en.wikipedia.org/wiki/Siege_of_Kanegasaki_(1337)" } ],
    name: "Siege of Kanegasaki",
    year: 1337,
    date: "1337-04-07",
    dateLabel: "January – April 7, 1337",
    period: "Muromachi",
    location: {
      name: "Kanegasaki Castle, Tsuruga, Echizen Province (modern Fukui)",
      lat: 35.666083,
      lon: 136.074167
    },
    combatants: {
      side1: {
        name: "Ashikaga (Northern Court)",
        leader: "Kō no Moroyasu"
      },
      side2: {
        name: "Nitta / Southern Court",
        leader: "Nitta Yoshisada"
      }
    },
    outcome: "Ashikaga victory; the castle fell, Prince Takanaga and Nitta Yoshisada's son Yoshiaki took their own lives, and Prince Tsunenaga was killed after being captured in flight.",
    summary: "A three-month siege that broke the Nitta clan's defence of the Southern Court in the north, ending with the suicides of Prince Takanaga and Nitta Yoshiaki as the starving castle fell; Prince Tsunenaga escaped only to be captured and killed.",
    details: `Nitta Yoshisada held Kanegasaki Castle for the Southern Court, sheltering two of Emperor Go-Daigo's sons. After a punishing winter siege the Ashikaga forces under Kō no Moroyasu stormed it in April 1337; Prince Takanaga and Nitta Yoshiaki died, and Prince Tsunenaga was captured. It was the effective end of Nitta resistance in the Hokuriku region.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Siege_of_Kanegasaki_Memorial.jpg/960px-Siege_of_Kanegasaki_Memorial.jpg",
        caption: "Memorial at the site of the Siege of Kanegasaki. Wikimedia Commons."
      }
    ]
  },
  {
    id: "ishizu",
    sources: [ { label: "Japanese Wikipedia: 石津の戦い (Battle of Ishizu)", url: "https://ja.wikipedia.org/wiki/%E7%9F%B3%E6%B4%A5%E3%81%AE%E6%88%A6%E3%81%84" } ],
    name: "Battle of Ishizu",
    year: 1338,
    date: "1338-06-10",
    dateLabel: "June 10, 1338",
    period: "Muromachi",
    location: {
      name: "Ishizu, Sakai, Izumi Province (modern Sakai, Osaka)",
      lat: 34.554867,
      lon: 135.453445
    },
    combatants: {
      side1: {
        name: "Ashikaga (Northern Court)",
        leader: "Kō no Moronao & Moroyasu",
        forces: "approximately 18,000"
      },
      side2: {
        name: "Southern Court",
        leader: "Kitabatake Akiie",
        forces: "depleted"
      }
    },
    outcome: "Northern Court victory; Kitabatake Akiie was killed.",
    summary: "The death of the brilliant young Southern general Kitabatake Akiie, ending the great cavalry raids he had led from the northeast and badly weakening the Southern cause.",
    details: `Kitabatake Akiie, only twenty-one, had twice swept down from Mutsu to threaten the Ashikaga. Worn down after a long campaign, he was cornered and killed at Ishizu near Sakai in 1338. His loss, soon followed by Nitta Yoshisada's death the same year, stripped the Southern Court of its ablest commanders.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/%E5%8C%97%E7%95%A0%E9%A1%95%E5%AE%B6.png",
        caption: "Portrait of Kitabatake Akiie, who fell here. Wikimedia Commons."
      }
    ]
  },
  {
    id: "shijo-nawate",
    sources: [ { label: "Wikipedia: Battle of Shijōnawate", url: "https://en.wikipedia.org/wiki/Battle_of_Shij%C5%8Dnawate" } ],
    name: "Battle of Shijō Nawate",
    year: 1348,
    date: "1348-02-04",
    dateLabel: "February 4, 1348",
    period: "Muromachi",
    location: {
      name: "Nozaki to Kita-Shijō, Kawachi Province (modern Daitō, Osaka)",
      lat: 34.732494,
      lon: 135.637009
    },
    combatants: {
      side1: {
        name: "Northern Court (Ashikaga)",
        leader: "Kō no Moronao & Moroyasu",
        forces: "approximately 10,000 (the Taiheiki's 60,000–80,000 is a known exaggeration)"
      },
      side2: {
        name: "Southern Court",
        leader: "Kusunoki Masatsura",
        forces: "unknown; estimated in the hundreds (the Taiheiki's 3,000 is exaggerated)"
      }
    },
    outcome: "Northern Court victory; Kusunoki Masatsura committed seppuku and the Southern Court abandoned its capital at Yoshino, retreating to Anō.",
    summary: "The doomed charge of Kusunoki Masatsura, son of the Minatogawa hero, whose death let the Ashikaga overrun the Southern capital at Yoshino and drive the court to Anō.",
    details: `A generation after Minatogawa, Kusunoki Masatsura led a tiny Southern army against the vast host of Kō no Moronao at Shijō Nawate. Like his father, he fought to the death against hopeless odds. The victory opened the road to Yoshino, which the Northern army then put to the torch, forcing the Southern Court to flee deeper into the mountains.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kusunoki_Masashige.JPG/960px-Kusunoki_Masashige.JPG",
        caption: "Kusunoki Masashige; his son Masatsura died leading the Southern army here. Wikimedia Commons."
      }
    ]
  },
  {
    id: "kanno-incident",
    sources: [ { label: "Wikipedia: Kannō disturbance", url: "https://en.wikipedia.org/wiki/Kann%C5%8D_disturbance" } ],
    name: "Kannō Incident",
    yearStart: 1350,
    yearEnd: 1352,
    dateLabel: "1350–1352",
    period: "Muromachi",
    location: {
      name: "Satta Pass, Suruga Province, a key battle of the Kannō Incident (modern Shizuoka)",
      lat: 35.071694,
      lon: 138.541167
    },
    combatants: {
      side1: {
        name: "Ashikaga Takauji's faction",
        leader: "Ashikaga Takauji (with Kō no Moronao until Moronao's execution in 1351)"
      },
      side2: {
        name: "Ashikaga Tadayoshi's faction",
        leader: "Ashikaga Tadayoshi (allied to the Southern Court)"
      }
    },
    outcome: "Takauji prevailed; his brother Tadayoshi died in 1352.",
    summary: "A civil war within the ruling Ashikaga house itself, as shōgun Takauji and his brother Tadayoshi tore the young shogunate apart, even briefly allying with the enemy Southern Court.",
    details: `The Kannō Incident pitted Ashikaga Takauji and his administrator Kō no Moronao against Takauji's own brother and co-ruler Tadayoshi. The feud convulsed the realm: each side in turn made common cause with the Southern Court to gain advantage. It ended with the Kō brothers dead and Tadayoshi defeated and dying (poisoned, by tradition) in 1352, a near-fatal wound to the early Ashikaga order.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ashikaga_Takauji_J%C5%8Ddo-ji.jpg/960px-Ashikaga_Takauji_J%C5%8Ddo-ji.jpg",
        caption: "Portrait of Ashikaga Takauji. Wikimedia Commons."
      }
    ]
  },
  {
    id: "uchidehama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E8%B6%B3%E5%88%A9%E7%9B%B4%E7%BE%A9.jpg/960px-%E8%B6%B3%E5%88%A9%E7%9B%B4%E7%BE%A9.jpg",
        caption: "A nineteenth century woodblock portrait of Ashikaga Tadayoshi, from Mizutani Ryokutei's Eiyū Hyakunin Isshu; in 1351 he routed the army of his brother Takauji at Uchidehama. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Japanese Wikipedia: Battle of Uchidehama (打出浜の戦い)", url: "https://ja.wikipedia.org/wiki/打出浜の戦い" } ],
    name: "Battle of Uchidehama",
    year: 1351,
    date: "1351-03-15",
    dateLabel: "March 15, 1351",
    period: "Muromachi",
    location: {
      name: "Uchidehama, Settsu Province (modern Ashiya, Hyōgo)",
      lat: 34.734848,
      lon: 135.31778
    },
    combatants: {
      side1: {
        name: "Ashikaga Tadayoshi's faction",
        leader: "Ashikaga Tadayoshi"
      },
      side2: {
        name: "Ashikaga Takauji's faction",
        leader: "Ashikaga Takauji (with Kō no Moronao)",
        forces: "approximately 20,000"
      }
    },
    outcome: "Tadayoshi's faction won; Takauji's army was routed.",
    summary: "A battle of the Kannō Incident in which Tadayoshi's side routed Takauji and forced the surrender of the Kō brothers, who were then killed.",
    details: `At Uchidehama on the Settsu shore, the forces of Ashikaga Tadayoshi decisively beat his brother Takauji's much larger army. The defeat compelled Takauji to give up the hated Kō no Moronao and Moroyasu, who were murdered on the road soon after, though the brothers' reconciliation would not last.`
  },
  {
    id: "chikugogawa",
    sources: [ { label: "Japanese Wikipedia: Battle of Chikugogawa (筑後川の戦い)", url: "https://ja.wikipedia.org/wiki/筑後川の戦い" } ],
    name: "Battle of Chikugogawa",
    year: 1359,
    date: "1359-08-29",
    dateLabel: "August 1359",
    period: "Muromachi",
    location: {
      name: "Chikugo River, near Kurume, Chikugo Province (modern Fukuoka)",
      lat: 33.396526,
      lon: 130.555832
    },
    combatants: {
      side1: {
        name: "Southern Court (Seisei-fu)",
        leader: "Prince Kanenaga & Kikuchi Takemitsu",
        forces: "approximately 40,000"
      },
      side2: {
        name: "Northern Court (Ashikaga)",
        leader: "Shōni Yorihisa",
        forces: "approximately 60,000"
      }
    },
    outcome: "Southern Court victory; Northern power in Kyūshū was broken for years.",
    summary: "The largest battle of the Nanboku-chō wars in Kyūshū, a Southern triumph that gave Prince Kanenaga's court control of the island for over a decade.",
    details: `On the banks of the Chikugo River, the Southern Court army of Prince Kanenaga and Kikuchi Takemitsu met the Northern coalition under Shōni Yorihisa. Despite being outnumbered, the Southern forces won a bloody victory, some 5,000 fell, and made the Seisei-fu (the Southern Court's Kyūshū headquarters) the dominant power on the island until the 1370s.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kikuchi_Takemitu.jpg/960px-Kikuchi_Takemitu.jpg",
        caption: "Portrait of Kikuchi Takemitsu, the Southern commander. Wikimedia Commons."
      }
    ]
  },
  {
    id: "oei-rebellion",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Yoshimitsu_Ashikaga_cropped.jpg/960px-Yoshimitsu_Ashikaga_cropped.jpg",
        caption: "Portrait of Ashikaga Yoshimitsu, by 1399 a retired and tonsured shōgun who still held the real power and who directed the campaign that burned Sakai; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Japanese Wikipedia: Ōei Rebellion (応永の乱)", url: "https://ja.wikipedia.org/wiki/応永の乱" } ],
    name: "Ōei Rebellion",
    year: 1399,
    dateLabel: "10th–12th months, Ōei 6 (November 1399 – 17 January 1400)",
    period: "Muromachi",
    location: {
      name: "Sakai, Izumi Province (modern Sakai, Osaka)",
      lat: 34.568077,
      lon: 135.464401
    },
    combatants: {
      side1: {
        name: "Ashikaga shogunate",
        leader: "Ashikaga Yoshimitsu"
      },
      side2: {
        name: "Ōuchi clan",
        leader: "Ōuchi Yoshihiro"
      }
    },
    outcome: "Shogunate victory; Ōuchi Yoshihiro died and Sakai fell.",
    summary: "Retired shōgun Ashikaga Yoshimitsu, still the real ruler behind his son Yoshimochi, crushed the over-mighty Ōuchi Yoshihiro at Sakai, cementing the centralized power of the Muromachi shogunate at its height.",
    details: `Ōuchi Yoshihiro, master of six provinces and rich on the Korea trade, defied the great shōgun Ashikaga Yoshimitsu and fortified Sakai. Yoshimitsu besieged the port, took it, and killed Yoshihiro in the fighting. Coming just after Yoshimitsu had reunited the Northern and Southern Courts (1392), the victory marked the peak of shogunal authority.`
  },
  {
    id: "uesugi-zenshu",
    sources: [ { label: "Japanese Wikipedia: Uesugi Zenshū's Rebellion (上杉禅秀の乱)", url: "https://ja.wikipedia.org/wiki/上杉禅秀の乱" } ],
    name: "Rebellion of Uesugi Zenshū",
    yearStart: 1416,
    yearEnd: 1417,
    dateLabel: "1416–1417",
    period: "Muromachi",
    location: {
      name: "Kamakura, Sagami Province (modern Kanagawa), coordinates approximate",
      lat: 35.322643,
      lon: 139.554535
    },
    combatants: {
      side1: {
        name: "Kamakura kubō's side",
        leader: "Ashikaga Mochiuji"
      },
      side2: {
        name: "Uesugi Zenshū's rebels",
        leader: "Uesugi Ujinori (Zenshū)"
      }
    },
    outcome: "Mochiuji's side won; Zenshū took his own life at Kamakura.",
    summary: "A revolt by a former deputy of the Kamakura kubō that shook the shogunate's hold on eastern Japan and sowed the seeds of decades of Kantō unrest.",
    details: `Uesugi Ujinori, known by his monk's name Zenshū, had served as Kantō kanrei (deputy) before falling out with the young Kamakura kubō Ashikaga Mochiuji. His 1416 rising briefly drove Mochiuji from Kamakura, but shogunal help turned the tables and Zenshū killed himself in early 1417. The instability he unleashed fed directly into the later Eikyō and Yūki conflicts.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ashikaga_Mochijuji_color.jpg",
        caption: "Portrait of Ashikaga Mochiuji, the Kamakura kubō. Wikimedia Commons."
      }
    ]
  },
  {
    id: "eikyo-rebellion",
    sources: [ { label: "Japanese Wikipedia: Eikyō Rebellion (永享の乱)", url: "https://ja.wikipedia.org/wiki/永享の乱" } ],
    name: "Eikyō Rebellion",
    yearStart: 1438,
    yearEnd: 1439,
    dateLabel: "1438–1439",
    period: "Muromachi",
    location: {
      name: "Kamakura, Sagami Province (modern Kanagawa), coordinates approximate",
      lat: 35.329098,
      lon: 139.57106
    },
    combatants: {
      side1: {
        name: "Shogunate & Kantō kanrei",
        leader: "Ashikaga Yoshinori & Uesugi Norizane"
      },
      side2: {
        name: "Kamakura kubō",
        leader: "Ashikaga Mochiuji"
      }
    },
    outcome: "Shogunate victory; Mochiuji was forced to commit suicide in 1439.",
    summary: "Shōgun Ashikaga Yoshinori destroyed the defiant Kamakura kubō Mochiuji, leaving the office vacant and briefly asserting shogunal control over the Kantō, but the kubō was revived for Mochiuji's son Shigeuji in 1447, who broke away again as Koga kubō in 1455.",
    details: `The Kamakura kubō Ashikaga Mochiuji had grown increasingly hostile to the Kyoto shogunate. When he broke with his own deputy Uesugi Norizane, shōgun Yoshinori sent armies east. Defeated, Mochiuji was forced to take his own life in 1439, and his heirs were hunted down, a brutal assertion of central authority whose aftershocks produced the Yūki War.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ashikaga_Yoshinori_cropped.jpg/960px-Ashikaga_Yoshinori_cropped.jpg",
        caption: "Portrait of shōgun Ashikaga Yoshinori. Wikimedia Commons."
      }
    ]
  },
  {
    id: "yuki-war",
    sources: [ { label: "Wikipedia: Yūki War", url: "https://en.wikipedia.org/wiki/Y%C5%ABki_War" } ],
    name: "Yūki War (incl. Siege of Yūki)",
    yearStart: 1440,
    yearEnd: 1441,
    dateLabel: "1440–1441",
    period: "Muromachi",
    location: {
      name: "Yūki Castle, Shimōsa Province (modern Yūki, Ibaraki)",
      lat: 36.308022,
      lon: 139.885956
    },
    combatants: {
      side1: {
        name: "Shogunate (Uesugi)",
        leader: "Uesugi Kiyokata"
      },
      side2: {
        name: "Yūki clan & Mochiuji loyalists",
        leader: "Yūki Ujitomo"
      }
    },
    outcome: "Rebellion crushed; Yūki Castle fell and the clan was destroyed.",
    summary: "Loyalists of the fallen Mochiuji rallied his surviving sons at Yūki Castle; the shogunate besieged and destroyed them, snuffing out Kantō resistance, for the moment.",
    details: `After the Eikyō Rebellion, the Yūki clan sheltered two young sons of Ashikaga Mochiuji and raised the Kantō against the shogunate. The Uesugi-led siege of Yūki Castle ground on for a year before the fortress fell in 1441; the defenders were killed and the boys executed. Yet within a few years a surviving son would revive the Kamakura kubō, and the Kantō slid toward the wars that opened the Sengoku age.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Graves_of_Haru%C5%8D_and_Yasu%C5%8D.jpg/960px-Graves_of_Haru%C5%8D_and_Yasu%C5%8D.jpg",
        caption: "Graves of Mochiuji's sons Haruō and Yasuō, executed after the war. Wikimedia Commons."
      }
    ]
  },
  {
    id: "kakitsu-incident",
    sources: [ { label: "Wikipedia: Kakitsu incident", url: "https://en.wikipedia.org/wiki/Kakitsu_incident" } ],
    name: "Kakitsu Incident",
    year: 1441,
    dateLabel: "1441",
    period: "Muromachi",
    location: {
      name: "Kyoto (Ashikaga shogunate), coordinates approximate",
      lat: 35.010365,
      lon: 135.751709
    },
    combatants: {
      side1: {
        name: "Akamatsu clan",
        leader: "Akamatsu Mitsusuke"
      },
      side2: {
        name: "Muromachi shogunate",
        leader: "Ashikaga Yoshinori (assassinated)"
      }
    },
    outcome: "The shōgun was assassinated; the Akamatsu were then hunted down and destroyed.",
    summary: "The shocking assassination of the strong-willed shōgun Ashikaga Yoshinori by the lord Akamatsu Mitsusuke, a blow from which the shogunate's authority never fully recovered.",
    details: `Fearing the autocratic shōgun meant to destroy his house, Akamatsu Mitsusuke invited Ashikaga Yoshinori to a banquet in Kyoto in 1441 and had him killed. The shogunate's vengeance was total, the Akamatsu were crushed within months, but the murder of a sitting shōgun shattered the prestige of the office. The weakening of central authority that followed helped set the stage for the Ōnin War and the Sengoku period.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/%E5%98%89%E5%90%89%E3%81%AE%E4%B9%B1.png",
        caption: "Depiction of the Kakitsu Incident. Wikimedia Commons."
      }
    ]
  },
  {
    id: "itsukushima",
    sources: [ { label: "Wikipedia: Battle of Miyajima", url: "https://en.wikipedia.org/wiki/Battle_of_Miyajima" } ],
    name: "Battle of Itsukushima (Miyajima)",
    year: 1555,
    date: "1555-10-16",
    dateLabel: "October 16, 1555",
    period: "Muromachi",
    location: {
      name: "Itsukushima (Miyajima), Aki Province (modern Hiroshima)",
      lat: 34.30161,
      lon: 132.32231
    },
    combatants: {
      side1: {
        name: "Mōri clan",
        leader: "Mōri Motonari",
        forces: "approximately 4,000–10,000"
      },
      side2: {
        name: "Ōuchi / Sue",
        leader: "Sue Harukata",
        forces: "approximately 20,000–30,000"
      }
    },
    outcome: "Decisive Mōri victory; Sue Harukata committed suicide.",
    summary: "Mōri Motonari lured the far larger Sue army onto the sacred island of Itsukushima and destroyed it in a daring night amphibious assault, the victory that made the Mōri masters of western Japan and one of the three classic surprise attacks of Japanese history.",
    details: `The Battle of Itsukushima was fought on October 16, 1555, on the island of Miyajima in Aki Province. Mōri Motonari, commanding 4,000 troops, engaged an Ōuchi faction army of 20,000 men commanded by Sue Harukata.

Motonari established Miyao Castle on the island and disseminated disinformation suggesting the fort's vulnerability. Sue Harukata subsequently transported his army to the island, isolating his forces geographically. Exploiting adverse weather conditions, the Mōri forces executed a nocturnal amphibious transit and launched a coordinated land and naval assault at dawn, supported by the Murakami naval clan.

The Sue forces were enveloped and destroyed. Sue Harukata committed seppuku. The strategic victory established the Mōri clan as the paramount military power in the Chūgoku region.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/201201-TaroTokyo-Itsukushima-DSC08992.jpg/960px-201201-TaroTokyo-Itsukushima-DSC08992.jpg",
        caption: "Itsukushima Shrine and its great torii on Miyajima, seen from Mount Misen above the strait the Sue fleet crossed in 1555; Wikimedia Commons."
      }
    ]
  },
  {
    id: "okehazama",
    sources: [ { label: "Wikipedia: Battle of Okehazama", url: "https://en.wikipedia.org/wiki/Battle_of_Okehazama" } ],
    name: "Battle of Okehazama",
    year: 1560,
    date: "1560-06-12",
    dateLabel: "June 12, 1560 (Eiroku 3/5/19)",
    period: "Muromachi",
    location: {
      name: "Dengaku-hazama, Owari Province (modern Toyoake, Aichi)",
      lat: 35.05028,
      lon: 136.99667
    },
    combatants: {
      side1: {
        name: "Oda clan",
        leader: "Oda Nobunaga",
        forces: "approximately 2,000–3,000"
      },
      side2: {
        name: "Imagawa clan",
        leader: "Imagawa Yoshimoto",
        forces: "approximately 25,000"
      }
    },
    outcome: "Stunning Oda victory; Imagawa Yoshimoto was killed.",
    summary: "Oda Nobunaga's audacious surprise attack destroyed an army ten times his size and killed the great Imagawa Yoshimoto, the upset that announced Nobunaga to the realm.",
    details: `The Battle of Okehazama occurred in June 1560 in Owari Province. Imagawa Yoshimoto, commanding an army of approximately 25,000 troops, invaded the territory of Oda Nobunaga, whose forces numbered between 2,000 and 3,000.

The Imagawa army established an encampment in a narrow gorge known as Dengakuhazama. Taking advantage of a severe thunderstorm to mask his movements, Nobunaga launched a rapid, downhill surprise attack directly against the Imagawa headquarters. 

The Imagawa forces were routed. Imagawa Yoshimoto was killed in action by Oda retainers Hattori Koheita and Mōri Shinsuke. This decisive victory eliminated the Imagawa clan as a major regional power and initiated Oda Nobunaga's military ascendancy in central Japan.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bish%C5%AB_Okehazama-gassen.jpg/960px-Bish%C5%AB_Okehazama-gassen.jpg",
        caption: "'Bishū Okehazama Gassen', a woodblock print of the battle. Wikimedia Commons."
      }
    ]
  },
  {
    id: "anegawa",
    sources: [ { label: "Wikipedia: Battle of Anegawa", url: "https://en.wikipedia.org/wiki/Battle_of_Anegawa" } ],
    name: "Battle of Anegawa",
    year: 1570,
    date: "1570-07-30",
    dateLabel: "July 30, 1570 (Genki 1/6/28)",
    period: "Muromachi",
    location: {
      name: "Ane River, near Nagahama, Ōmi Province (modern Shiga)",
      lat: 35.41606,
      lon: 136.32217
    },
    combatants: {
      side1: {
        name: "Oda–Tokugawa alliance",
        leader: "Oda Nobunaga & Tokugawa Ieyasu",
        forces: "approximately 28,000"
      },
      side2: {
        name: "Azai–Asakura alliance",
        leader: "Azai Nagamasa & Asakura Kagetake",
        forces: "approximately 18,000"
      }
    },
    outcome: "Oda–Tokugawa victory.",
    summary: "The first battle Nobunaga and Ieyasu fought side by side, a confused melee in the shallows of the Ane River against Nobunaga's brother-in-law Azai Nagamasa, who had broken with him to honour the Azai clan's older alliance with the Asakura.",
    details: `The Battle of Anegawa was fought on August 9, 1570, in Ōmi Province. A coalition of 28,000 Oda and Tokugawa troops engaged an allied force of 18,000 Azai and Asakura troops.

The conflict originated from Azai Nagamasa's abrogation of his alliance with Oda Nobunaga. The armies engaged in the shallow waters of the Ane River. The Azai vanguard successfully breached the Oda frontline, precipitating heavy casualties. However, the Tokugawa contingent, having routed the opposing Asakura forces, executed a flanking maneuver against the Azai right wing.

The envelopment forced the Azai and Asakura armies into a general retreat toward Odani Castle. While the engagement was a tactical victory for the Oda-Tokugawa coalition, it failed to eliminate the Azai-Asakura alliance, which persisted until 1573.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Anegawa_Historic_Battlefield.jpg/960px-Anegawa_Historic_Battlefield.jpg",
        caption: "The Anegawa battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "mikatagahara",
    sources: [ { label: "Wikipedia: Battle of Mikatagahara", url: "https://en.wikipedia.org/wiki/Battle_of_Mikatagahara" } ],
    name: "Battle of Mikatagahara",
    year: 1573,
    date: "1573-01-25",
    dateLabel: "January 25, 1573 (Genki 3/12/22)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Mikatagahara plateau, Tōtōmi Province (modern Hamamatsu, Shizuoka)",
      lat: 34.71,
      lon: 137.72
    },
    combatants: {
      side1: {
        name: "Takeda clan",
        leader: "Takeda Shingen",
        forces: "approximately 35,000"
      },
      side2: {
        name: "Tokugawa–Oda alliance",
        leader: "Tokugawa Ieyasu",
        forces: "approximately 11,000"
      }
    },
    outcome: "Decisive Takeda victory; Ieyasu barely escaped to Hamamatsu.",
    summary: "Takeda Shingen, marching on Kyoto, lured Tokugawa Ieyasu out of Hamamatsu Castle and routed him on the Mikatagahara plateau, the worst defeat of Ieyasu's life.",
    details: `The Battle of Mikatagahara was fought on January 25, 1573, in Tōtōmi Province. Takeda Shingen, commanding an army of 27,000 troops, engaged a combined Tokugawa-Oda force of 11,000 men led by Tokugawa Ieyasu.

The Takeda forces utilized a "crane's wing" (kakuyoku) tactical formation. The engagement commenced with a projectile barrage from Takeda stone-slingers, followed by a heavy cavalry charge that penetrated the Tokugawa lines. The Tokugawa army collapsed and initiated a disorganized retreat toward Hamamatsu Castle.

Tokugawa casualties were severe, mitigated only by rearguard actions from commanders such as Natsume Yoshinobu and Honda Tadakatsu. Upon returning to Hamamatsu, Ieyasu employed an "empty fort strategy" (leaving the gates open with braziers lit), which deterred the Takeda vanguard from pursuing a siege. The battle represents one of Tokugawa Ieyasu's most significant military defeats.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Battle_of_Mikatagahara.jpg/960px-Battle_of_Mikatagahara.jpg",
        caption: "Depiction of the Battle of Mikatagahara. Wikimedia Commons."
      }
    ]
  },
  {
    id: "nagashino",
    sources: [ { label: "Wikipedia: Battle of Nagashino", url: "https://en.wikipedia.org/wiki/Battle_of_Nagashino" } ],
    name: "Battle of Nagashino",
    year: 1575,
    date: "1575-06-28",
    dateLabel: "June 28, 1575 (Tenshō 3/5/21)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Shitaragahara, near Nagashino Castle, Mikawa Province (modern Shinshiro, Aichi)",
      lat: 34.92056,
      lon: 137.5625
    },
    combatants: {
      side1: {
        name: "Oda–Tokugawa alliance",
        leader: "Oda Nobunaga & Tokugawa Ieyasu",
        forces: "approximately 38,000"
      },
      side2: {
        name: "Takeda clan",
        leader: "Takeda Katsuyori",
        forces: "approximately 15,000"
      }
    },
    outcome: "Decisive Oda–Tokugawa victory; the Takeda army was shattered, losing roughly 10,000 men and many senior commanders.",
    summary: "The clash where Oda–Tokugawa arquebusiers, fighting from behind field palisades, broke Takeda Katsuyori's assaults. Long celebrated as the dawn of gunpowder warfare in Japan, though modern scholarship rejects both the 'three-stage volley' of 3,000 guns and the image of a massed Takeda cavalry charge.",
    details: `The Battle of Nagashino occurred on June 28, 1575, near Nagashino Castle in Mikawa Province. Takeda Katsuyori besieged the castle with 15,000 troops. A combined relief force of 38,000 men under Oda Nobunaga and Tokugawa Ieyasu deployed along the Rengogawa stream at Shitaragahara. 

The Oda-Tokugawa forces constructed defensive wooden palisades and deployed approximately 3,000 matchlock infantry in staggered ranks to maintain continuous fire. The Takeda cavalry initiated multiple frontal assaults against the fortified positions and suffered catastrophic casualties. Concurrently, a detachment led by Sakai Tadatsugu neutralized the Takeda siege camps.

The Takeda clan sustained an estimated 10,000 casualties, including the loss of numerous senior commanders. The engagement is historically significant for demonstrating the tactical superiority of massed firearms deployed behind field fortifications over traditional cavalry charges.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Battle-of-Nagashino-Map-Folding-Screen-1575.png/960px-Battle-of-Nagashino-Map-Folding-Screen-1575.png",
        caption: "The Battle of Nagashino, on a folding screen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "tedorigawa",
    sources: [ { label: "Wikipedia: Battle of Tedorigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Tedorigawa" } ],
    name: "Battle of Tedorigawa",
    year: 1577,
    date: "1577-11-03",
    dateLabel: "November 3, 1577 (Tenshō 5/9/23)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Tedori River, Kaga Province (modern Ishikawa)",
      lat: 36.467,
      lon: 136.483
    },
    combatants: {
      side1: {
        name: "Uesugi clan",
        leader: "Uesugi Kenshin",
        forces: "approximately 30,000"
      },
      side2: {
        name: "Oda clan",
        leader: "Shibata Katsuie (Nobunaga not present)",
        forces: "approximately 50,000"
      }
    },
    outcome: "Traditionally recorded as a Uesugi victory, with the Oda army withdrawing across the flooded river and losing men to drowning; the outcome and scale are debated in modern scholarship.",
    summary: "Uesugi Kenshin's last major campaign, an Oda relief army under Shibata Katsuie was caught withdrawing across the flooded Tedori River and mauled. Nobunaga was not present, and the battle's scale and outcome rest on thin evidence: the Shinchō Kōki records the sortie but no battle.",
    details: `The Battle of Tedorigawa occurred on November 3, 1577, in Kaga Province. Uesugi Kenshin, commanding 30,000 troops, engaged an Oda clan army of 50,000 men led by Shibata Katsuie.

The engagement centered on the crossing of the Tedori River. Uesugi Kenshin executed a strategic release of upstream floodgates to artificially elevate the river's water levels. As the Oda forces attempted the crossing, the Uesugi vanguard initiated a cavalry assault.

The combination of the sudden deluge and the Uesugi offensive resulted in critical casualties for the Oda army, with numerous combatants drowning or being killed in the ensuing rout. The battle functioned as a significant strategic check on Oda Nobunaga's expansion into the Hokuriku region.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%E6%89%8B%E5%8F%96%E5%B7%9D_%E5%B7%9D%E5%8C%97%E5%A4%A7%E6%A9%8B%E3%82%88%E3%82%8A%E9%B6%B4%E6%9D%A5%E5%81%B4_-_panoramio.jpg/960px-%E6%89%8B%E5%8F%96%E5%B7%9D_%E5%B7%9D%E5%8C%97%E5%A4%A7%E6%A9%8B%E3%82%88%E3%82%8A%E9%B6%B4%E6%9D%A5%E5%81%B4_-_panoramio.jpg",
        caption: "The Tedori River, site of the battle. Wikimedia Commons."
      }
    ]
  },
  {
    id: "honnoji",
    sources: [ { label: "Wikipedia: Honnō-ji Incident", url: "https://en.wikipedia.org/wiki/Honn%C5%8D-ji_Incident" } ],
    name: "Honnō-ji Incident",
    year: 1582,
    date: "1582-06-21",
    dateLabel: "June 21, 1582 (Tenshō 10/6/2)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Honnō-ji temple, Kyoto",
      lat: 35.005833,
      lon: 135.753889
    },
    combatants: {
      side1: {
        name: "Akechi clan",
        leader: "Akechi Mitsuhide",
        forces: "approximately 13,000"
      },
      side2: {
        name: "Oda Nobunaga's retinue",
        leader: "Oda Nobunaga",
        forces: "about 150"
      }
    },
    outcome: "Nobunaga was forced to take his own life; the would-be unifier was dead.",
    summary: "The coup that killed Oda Nobunaga: his trusted general Akechi Mitsuhide turned his army on the lightly guarded temple where Nobunaga lodged, ending the career of the man who had nearly unified Japan.",
    leadsTo: "yamazaki",
    details: `In June 1582, ordered west to reinforce Hideyoshi, Akechi Mitsuhide instead wheeled his army toward Kyoto, declaring, by tradition, that "the enemy is at Honnō-ji." He surrounded the temple where Nobunaga rested with only a small guard. Nobunaga fought with bow and spear, then set the temple ablaze and took his own life; his son Nobutada died nearby.

Mitsuhide's triumph lasted only eleven days: Hideyoshi raced back from the west and destroyed him at Yamazaki, then seized Nobunaga's mantle.

The Shinchō Kōki tells how Mitsuhide's men "in no time at all surrounded the Honnō-ji" at dawn; Nobunaga, wounded in the elbow by a spear, sent the women away, set his quarters ablaze, and "coolly cut his own belly" deep within, that none might witness his end.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Honnoj.jpg/960px-Honnoj.jpg",
        caption: "The Honnō-ji Incident. Wikimedia Commons."
      }
    ]
  },
  {
    id: "yamazaki",
    sources: [ { label: "Wikipedia: Battle of Yamazaki", url: "https://en.wikipedia.org/wiki/Battle_of_Yamazaki" } ],
    name: "Battle of Yamazaki",
    year: 1582,
    date: "1582-07-02",
    dateLabel: "July 2, 1582 (Tenshō 10/6/13)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Yamazaki, below Tennōzan (modern Ōyamazaki, Kyoto)",
      lat: 34.90706,
      lon: 135.69133
    },
    combatants: {
      side1: {
        name: "Hashiba (Toyotomi) forces",
        leader: "Hashiba (Toyotomi) Hideyoshi",
        forces: "approximately 20,000–36,000"
      },
      side2: {
        name: "Akechi clan",
        leader: "Akechi Mitsuhide",
        forces: "approximately 10,000–16,000"
      }
    },
    outcome: "Hideyoshi's victory; Akechi Mitsuhide was defeated and killed in flight.",
    summary: "Eleven days after killing Nobunaga, Akechi Mitsuhide was crushed by Hideyoshi at Yamazaki, the battle that made Hideyoshi heir to Nobunaga's power.",
    leadsTo: "shizugatake",
    details: `The Battle of Yamazaki occurred on July 2, 1582, following the assassination of Oda Nobunaga at the Honnō-ji Incident. Toyotomi Hideyoshi rapidly concluded a truce with the Mōri clan and executed a forced march from Bitchū Province to confront the assassin, Akechi Mitsuhide.

The armies engaged near the village of Yamazaki, south of Kyoto. The tactical objective was control of Mount Tennōzan, a strategic elevation bordering the Yodo River. Hideyoshi's vanguard, commanded by Nakagawa Kiyohide and Takayama Ukon, successfully secured the heights.

Utilizing the elevation, Hideyoshi's forces directed sustained matchlock fire against the Akechi positions, initiating a rout. Akechi Mitsuhide fled the battlefield but was subsequently killed by local peasants. The victory allowed Toyotomi Hideyoshi to consolidate political and military control as Nobunaga's de facto successor.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yamazaki04.jpg/960px-Yamazaki04.jpg",
        caption: "The Yamazaki battlefield area, below Tennōzan. Wikimedia Commons."
      }
    ]
  },
  {
    id: "shizugatake",
    sources: [ { label: "Wikipedia: Battle of Shizugatake", url: "https://en.wikipedia.org/wiki/Battle_of_Shizugatake" } ],
    name: "Battle of Shizugatake",
    year: 1583,
    date: "1583-06-11",
    dateLabel: "June 10–11, 1583",
    period: "Azuchi–Momoyama",
    location: {
      name: "Shizugatake, near Lake Yogo, Ōmi Province (modern Nagahama, Shiga)",
      lat: 35.50592,
      lon: 136.19272
    },
    combatants: {
      side1: {
        name: "Hashiba (Toyotomi) forces",
        leader: "Hashiba Hideyoshi",
        forces: "approximately 50,000"
      },
      side2: {
        name: "Shibata clan",
        leader: "Shibata Katsuie",
        forces: "approximately 30,000"
      }
    },
    outcome: "Decisive Hideyoshi victory; Shibata Katsuie killed himself at Kitanoshō.",
    summary: "Hideyoshi defeated Nobunaga's senior general Shibata Katsuie in the struggle for the Oda succession, famous for the 'Seven Spears of Shizugatake' and another of Hideyoshi's lightning marches.",
    leadsTo: "komaki-nagakute",
    details: `The Battle of Shizugatake was fought in May 1583 in Ōmi Province. It was a succession conflict between Toyotomi Hideyoshi and Shibata Katsuie for control of the Oda clan following Oda Nobunaga's death.

Shibata forces under Sakuma Morimasa launched an offensive against Hideyoshi's fortifications at Mount Shizugatake. Hideyoshi responded with an accelerated forced march from Mino Province, arriving at the battlefield within 24 hours. Hideyoshi's counterattack was spearheaded by a cadre of elite bodyguards known as the "Seven Spears of Shizugatake" (including Katō Kiyomasa and Fukushima Masanori).

Following the unauthorized withdrawal of Maeda Toshiie from the Shibata coalition, the Shibata lines disintegrated. Shibata Katsuie retreated to Kitanoshō Castle, where he subsequently committed seppuku. The victory neutralized Hideyoshi's primary military rival and solidified his hegemony.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Battle_of_Shizugatake.jpg/960px-Battle_of_Shizugatake.jpg",
        caption: "The Battle of Shizugatake (woodblock print). Wikimedia Commons."
      }
    ]
  },
  {
    id: "komaki-nagakute",
    sources: [ { label: "Wikipedia: Battle of Komaki and Nagakute", url: "https://en.wikipedia.org/wiki/Battle_of_Komaki_and_Nagakute" } ],
    name: "Battle of Komaki and Nagakute",
    year: 1584,
    dateLabel: "March–November 1584",
    period: "Azuchi–Momoyama",
    location: {
      name: "Komaki & Nagakute, Owari Province (modern Aichi)",
      lat: 35.18611,
      lon: 137.05528
    },
    combatants: {
      side1: {
        name: "Tokugawa–Oda alliance",
        leader: "Tokugawa Ieyasu & Oda Nobukatsu",
        forces: "approximately 30,000"
      },
      side2: {
        name: "Hashiba (Toyotomi) forces",
        leader: "Hashiba Hideyoshi",
        forces: "approximately 100,000"
      }
    },
    outcome: "Tactically a Tokugawa success (Nagakute); strategically inconclusive, settled by negotiation.",
    summary: "The only war between the two eventual giants, Hideyoshi and Tokugawa Ieyasu, a campaign of manoeuvre in which Ieyasu won the sharp battle of Nagakute but both sides ultimately made peace.",
    details: `When Hideyoshi moved against Nobunaga's son Nobukatsu, Tokugawa Ieyasu allied with the latter and the two great captains faced off across the entrenched lines of Komaki. The decisive action came at Nagakute, where Ieyasu ambushed and destroyed a Toyotomi raiding column, killing the generals Ikeda Tsuneoki and Mori Nagayoshi.

Unable to break Ieyasu in the field, Hideyoshi turned to diplomacy; the war ended in a negotiated settlement and an exchange of hostages. Ieyasu had proved he could not be beaten outright, shaping the uneasy partnership that lasted until Hideyoshi's death.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nagakute_Historic_Battlefield.jpg/960px-Nagakute_Historic_Battlefield.jpg",
        caption: "The Nagakute battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "okita-nawate",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ry%C5%ABz%C5%8Dji_Takanobu.jpg/960px-Ry%C5%ABz%C5%8Dji_Takanobu.jpg",
        caption: "Portrait of Ryūzōji Takanobu, the Hizen lord defeated and killed in this battle; a sixteenth-century painting in the Saga Prefectural Museum, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battle of Okitanawate", url: "https://en.wikipedia.org/wiki/Battle_of_Okitanawate" } ],
    name: "Battle of Okita-Nawate",
    year: 1584,
    date: "1584-05-04",
    dateLabel: "May 4, 1584",
    period: "Azuchi–Momoyama",
    location: {
      name: "Okita-Nawate, Hizen Province (modern Shimabara, Nagasaki)",
      lat: 32.7919,
      lon: 130.3703
    },
    combatants: {
      side1: {
        name: "Shimazu–Arima coalition",
        leader: "Arima Harunobu & Shimazu Iehisa",
        forces: "approximately 6,000–9,000"
      },
      side2: {
        name: "Ryūzōji clan",
        leader: "Ryūzōji Takanobu",
        forces: "approximately 25,000 (estimates range 25,000–60,000)"
      }
    },
    outcome: "Decisive Shimazu–Arima victory; Ryūzōji Takanobu was killed in action.",
    summary: "A legendary Kyūshū clash in which a small Shimazu–Arima coalition lured the huge Ryūzōji army into a narrow marshy causeway (nawate) and destroyed it.",
    details: `At Okita-Nawate in 1584, Shimazu Iehisa allied with Arima Harunobu to defend Shimabara against Ryūzōji Takanobu. Using the Shimazu clan's signature decoy tactic (tsuri-no-bushi), the defenders feigned a retreat, drawing the Ryūzōji vanguard onto a narrow causeway hemmed by deep marshes.

Trapped and unable to deploy their huge numbers, the Ryūzōji army broke when a sudden Shimazu flank attack struck home. Takanobu himself was cut down, crippling the Ryūzōji and securing Shimazu dominance over western Kyūshū.`
  },
  {
    id: "odawara-1590",
    sources: [ { label: "Wikipedia: Siege of Odawara (1590)", url: "https://en.wikipedia.org/wiki/Siege_of_Odawara_(1590)" } ],
    name: "Siege of Odawara (1590)",
    year: 1590,
    dateLabel: "May – August 4, 1590",
    period: "Azuchi–Momoyama",
    location: {
      name: "Odawara Castle, Sagami Province (modern Odawara, Kanagawa)",
      lat: 35.2508,
      lon: 139.1536
    },
    combatants: {
      side1: {
        name: "Toyotomi coalition",
        leader: "Toyotomi Hideyoshi",
        forces: "approximately 220,000"
      },
      side2: {
        name: "Later Hōjō clan",
        leader: "Hōjō Ujimasa & Ujinao",
        forces: "approximately 82,000"
      }
    },
    outcome: "Toyotomi victory; the Hōjō surrendered and the clan was dissolved.",
    summary: "Hideyoshi's overwhelming envelopment of the great Hōjō fortress of Odawara, the siege that ended the last independent power in the east and completed the unification of Japan.",
    details: `The Siege of Odawara occurred from May to August 1590. It was the decisive military campaign initiated by Toyotomi Hideyoshi to subjugate the Later Hōjō clan and complete the unification of Japan.

Hideyoshi mobilized a coalition army of over 200,000 troops to besiege Odawara Castle, which was garrisoned by approximately 80,000 Hōjō personnel defending extensive outer fortifications (sōgamae). To demonstrate logistical supremacy, Hideyoshi constructed "Ishigakiyama Ichiya Castle" (One-Night Castle) overlooking the besieged fortress and initiated a war of attrition.

Concurrently, Toyotomi subordinate commanders captured Hōjō satellite castles throughout the Kantō region. Exhausting their supplies and facing overwhelming numerical disparity, Hōjō Ujinao formally capitulated in August 1590. Hōjō Ujimasa was ordered to commit seppuku, and the clan's domains were subsequently transferred to Tokugawa Ieyasu.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Odawara_Castle_02.jpg/960px-Odawara_Castle_02.jpg",
        caption: "Odawara Castle (reconstruction), the Hōjō stronghold besieged in 1590. Wikimedia Commons."
      }
    ]
  },
  {
    id: "osaka-siege",
    sources: [ { label: "Wikipedia: Siege of Osaka", url: "https://en.wikipedia.org/wiki/Siege_of_Osaka" } ],
    name: "Siege of Osaka",
    yearStart: 1614,
    yearEnd: 1615,
    dateLabel: "Winter 1614 – Summer 1615",
    period: "Edo",
    location: {
      name: "Osaka Castle, Settsu Province (modern Osaka)",
      lat: 34.6873,
      lon: 135.5259
    },
    combatants: {
      side1: {
        name: "Tokugawa shogunate",
        leader: "Tokugawa Ieyasu & Hidetada",
        forces: "approximately 150,000–164,000"
      },
      side2: {
        name: "Toyotomi clan",
        leader: "Toyotomi Hideyori (Sanada Yukimura)",
        forces: "approximately 60,000–120,000"
      }
    },
    outcome: "Tokugawa victory; the Toyotomi were destroyed and Osaka Castle fell.",
    summary: "The two-part siege that destroyed the Toyotomi and snuffed out the last armed resistance to Tokugawa rule, the closing battle of the Sengoku age, famous for the last stand of Sanada Yukimura.",
    details: `Determined to remove the lingering Toyotomi, Ieyasu besieged Hideyori in the mighty Osaka Castle. In the Winter Campaign of 1614 the defenders, stiffened by masterless samurai and the brilliant Sanada Yukimura at his "Sanada-maru" barbican, held firm, and Ieyasu made a treacherous peace that let him fill in the outer moats.

In the Summer Campaign of 1615 the now-defenceless castle was stormed; Sanada Yukimura died in a charge that nearly reached Ieyasu himself, and Hideyori and his mother Yodo-dono perished as the keep burned. With the Toyotomi gone, the wars were over, and the Tokugawa peace that followed would last over 250 years.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Osakarakuzyou_%28cropped%29.jpg",
        caption: "The fall of Osaka Castle, depicted on a folding screen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "uji-1180",
    sources: [ { label: "Wikipedia: Battle of Uji (1180)", url: "https://en.wikipedia.org/wiki/Battle_of_Uji_(1180)" } ],
    name: "First Battle of Uji",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Phoenix_Hall%2C_Byodo-in%2C_November_2016_-01.jpg/960px-Phoenix_Hall%2C_Byodo-in%2C_November_2016_-01.jpg", caption: "Byōdō-in at Uji, where Minamoto no Yorimasa made his last stand in 1180. Wikimedia Commons." }
    ],
    year: 1180,
    date: "1180-06-20",
    dateLabel: "June 20, 1180 (Jishō 4/5/26)",
    period: "Genpei",
    location: {
      name: "Uji River / Byōdō-in, Yamashiro Province (modern Uji, Kyoto)",
      lat: 34.8893,
      lon: 135.8074
    },
    combatants: {
      side1: {
        name: "Minamoto / Prince Mochihito's forces",
        leader: "Minamoto no Yorimasa (with Prince Mochihito)"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Tomomori"
      }
    },
    outcome: "Taira victory; Minamoto no Yorimasa took his own life and Prince Mochihito was killed.",
    summary: "The opening clash of the Genpei War. Minamoto no Yorimasa and Prince Mochihito, joined by warrior-monks, tore up the planks of the Uji bridge to hold the river, but were overwhelmed by the pursuing Taira. Yorimasa's death is traditionally remembered as one of the first formal samurai seppuku.",
    details: `The First Battle of Uji occurred in 1180 at Uji River / Byōdō-in, Yamashiro Province (modern Uji, Kyoto). The engagement involved forces of the Minamoto / Prince Mochihito's forces, commanded by Minamoto no Yorimasa (with Prince Mochihito), engaging the Taira clan, commanded by Taira no Tomomori. The opening clash of the Genpei War. Minamoto no Yorimasa and Prince Mochihito, joined by warrior-monks, tore up the planks of the Uji bridge to hold the river, but were overwhelmed by the pursuing Taira. Yorimasa's death is traditionally remembered as one of the first formal samurai seppuku. The conflict resulted in a Taira victory; Minamoto no Yorimasa took his own life and Prince Mochihito was killed. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "ishibashiyama",
    sources: [ { label: "Wikipedia: Battle of Ishibashiyama", url: "https://en.wikipedia.org/wiki/Battle_of_Ishibashiyama" } ],
    name: "Battle of Ishibashiyama",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tsuruya_Kiemon_-_Yobu_hakkei_-_Walters_95109.jpg/960px-Tsuruya_Kiemon_-_Yobu_hakkei_-_Walters_95109.jpg", caption: "Woodblock print depicting the Battle of Ishibashiyama (1180). Wikimedia Commons." }
    ],
    year: 1180,
    date: "1180-09-14",
    dateLabel: "September 14, 1180 (Jishō 4/8/23)",
    period: "Genpei",
    location: {
      name: "Ishibashiyama, near Odawara, Sagami Province (modern Kanagawa), coordinates approximate",
      lat: 35.2186,
      lon: 139.1363
    },
    combatants: {
      side1: {
        name: "Minamoto clan",
        leader: "Minamoto no Yoritomo"
      },
      side2: {
        name: "Taira loyalists",
        leader: "Ōba Kagechika"
      }
    },
    outcome: "Taira (Ōba) victory; Yoritomo was defeated and fled by sea to Awa.",
    summary: "Minamoto no Yoritomo's disastrous first battle. Heavily outnumbered and caught in a night rainstorm, his small band was crushed by the Taira loyalist Ōba Kagechika. Yoritomo escaped into hiding, by legend in a hollow tree, and slipped away by boat to rebuild his forces in the east.",
    details: `The Battle of Ishibashiyama occurred in 1180 at Ishibashiyama, near Odawara, Sagami Province (modern Kanagawa), coordinates approximate. The engagement involved forces of the Minamoto clan, commanded by Minamoto no Yoritomo, engaging the Taira loyalists, commanded by Ōba Kagechika. Minamoto no Yoritomo's disastrous first battle. Heavily outnumbered and caught in a night rainstorm, his small band was crushed by the Taira loyalist Ōba Kagechika. Yoritomo escaped into hiding, by legend in a hollow tree, and slipped away by boat to rebuild his forces in the east. The conflict resulted in a Taira (Ōba) victory; Yoritomo was defeated and fled by sea to Awa. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "fujigawa",
    sources: [ { label: "Wikipedia: Battle of Fujigawa", url: "https://en.wikipedia.org/wiki/Battle_of_Fujigawa" } ],
    name: "Battle of Fujigawa",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yoshifuji-utagawa-rr213.png/960px-Yoshifuji-utagawa-rr213.png", caption: "Utagawa woodblock print of the Battle of Fujigawa (1180). Wikimedia Commons." }
    ],
    year: 1180,
    date: "1180-11-09",
    dateLabel: "November 9, 1180 (Jishō 4/10/20)",
    period: "Genpei",
    location: {
      name: "Fuji River, Suruga Province (modern Fuji, Shizuoka), coordinates approximate",
      lat: 35.1613,
      lon: 138.6266
    },
    combatants: {
      side1: {
        name: "Minamoto clan",
        leader: "Minamoto no Yoritomo (with Takeda Nobuyoshi)"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Koremori"
      }
    },
    outcome: "Minamoto victory, essentially without a fight, as the Taira army fled.",
    summary: "Advancing to crush the revived Minamoto, the Taira army under Koremori panicked in the night when a great flock of waterbirds suddenly took flight, mistaking the noise for an enveloping attack, and fled back toward the capital. A bloodless rout that hugely emboldened Yoritomo.",
    details: `The Battle of Fujigawa occurred in 1180 at Fuji River, Suruga Province (modern Fuji, Shizuoka), coordinates approximate. The engagement involved forces of the Minamoto clan, commanded by Minamoto no Yoritomo (with Takeda Nobuyoshi), engaging the Taira clan, commanded by Taira no Koremori. Advancing to crush the revived Minamoto, the Taira army under Koremori panicked in the night when a great flock of waterbirds suddenly took flight, mistaking the noise for an enveloping attack, and fled back toward the capital. A bloodless rout that hugely emboldened Yoritomo. The conflict resulted in a Minamoto victory, essentially without a fight, as the Taira army fled. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "kurikara",
    sources: [ { label: "Wikipedia: Battle of Kurikara Pass", url: "https://en.wikipedia.org/wiki/Battle_of_Kurikara_Pass" } ],
    name: "Battle of Kurikara",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Battle_of_Kurikaradani_Kassen_Zu.jpg/960px-Battle_of_Kurikaradani_Kassen_Zu.jpg", caption: "‘Battle of Kurikara’ (Kurikara-dani Kassen-zu). Wikimedia Commons." }
    ],
    year: 1183,
    date: "1183-06-02",
    dateLabel: "June 2, 1183 (Juei 2/5/11)",
    period: "Genpei",
    location: {
      name: "Kurikara Pass (Tonamiyama), Etchū–Kaga border (modern Toyama / Ishikawa), coordinates approximate",
      lat: 36.6872,
      lon: 136.8081
    },
    combatants: {
      side1: {
        name: "Minamoto (Kiso) clan",
        leader: "Kiso (Minamoto no) Yoshinaka"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Koremori"
      }
    },
    outcome: "Decisive Minamoto (Yoshinaka) victory.",
    summary: "Kiso Yoshinaka's masterpiece. Pinning the huge Taira army at the Kurikara Pass, he is said to have driven a herd of oxen with torches lashed to their horns into the Taira camp by night, stampeding thousands of warriors to their deaths down the ravine. The victory threw open the road to Kyoto.",
    details: `Marching to crush the resurgent Minamoto of the north, the Taira under Koremori met Kiso Yoshinaka in the mountains on the Etchū–Kaga border. Yoshinaka fixed their attention with banners and skirmishing through the day, then launched a night attack, the famous "ox-fire" charge of the Tale of the Heike, that panicked the Taira into the steep Kurikara valley, where vast numbers perished.

The shattering of the Taira field army let Yoshinaka march on the capital; the Taira soon abandoned Kyoto, carrying the child-emperor Antoku west.`
  },
  {
    id: "awazu",
    sources: [ { label: "Japanese Wikipedia: 粟津の戦い", url: "https://ja.wikipedia.org/wiki/%E7%B2%9F%E6%B4%A5%E3%81%AE%E6%88%A6%E3%81%84" } ],
    name: "Battle of Awazu",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Y%C5%8Dsh%C5%AB_Chikanobu_Tomoe_Gozen.jpg/960px-Y%C5%8Dsh%C5%AB_Chikanobu_Tomoe_Gozen.jpg", caption: "Tomoe Gozen, who fought at Awazu, by Yōshū Chikanobu. Wikimedia Commons." }
    ],
    year: 1184,
    date: "1184-03-04",
    dateLabel: "March 4, 1184 (Juei 3/1/20)",
    period: "Genpei",
    location: {
      name: "Awazu, Ōtsu, Ōmi Province (modern Ōtsu, Shiga), coordinates approximate",
      lat: 34.9989,
      lon: 135.8921
    },
    combatants: {
      side1: {
        name: "Kamakura Minamoto",
        leader: "Minamoto no Noriyori & Ichijō Tadayori"
      },
      side2: {
        name: "Kiso Minamoto",
        leader: "Kiso Yoshinaka"
      }
    },
    outcome: "Yoritomo's forces victorious; Kiso Yoshinaka was killed.",
    summary: "The Minamoto turned on one another. Having seized and then alienated the capital, Kiso Yoshinaka was attacked by his cousins Yoshitsune and Noriyori on Yoritomo's orders. Yoshinaka was run down and killed near the shore of Lake Biwa at Awazu, his foster-brother Imai Kanehira dying beside him.",
    details: `The Battle of Awazu occurred in 1184 at Awazu, Ōtsu, Ōmi Province (modern Ōtsu, Shiga), coordinates approximate. The engagement involved forces of the Kamakura Minamoto, commanded by Minamoto no Yoshitsune & Noriyori, engaging the Kiso Minamoto, commanded by Kiso Yoshinaka. The Minamoto turned on one another. Having seized and then alienated the capital, Kiso Yoshinaka was attacked by his cousins Yoshitsune and Noriyori on Yoritomo's orders. Yoshinaka was run down and killed near the shore of Lake Biwa at Awazu, his foster-brother Imai Kanehira dying beside him. The conflict resulted in a Yoritomo's forces victorious; Kiso Yoshinaka was killed. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "ichi-no-tani",
    sources: [ { label: "Wikipedia: Battle of Ichi-no-Tani", url: "https://en.wikipedia.org/wiki/Battle_of_Ichi-no-Tani" } ],
    name: "Battle of Ichi-no-Tani",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Battle_of_Ichi-no-Tani_Folding_Screen_by_Kano_School.jpg/960px-Battle_of_Ichi-no-Tani_Folding_Screen_by_Kano_School.jpg", caption: "Folding screen of the Battle of Ichi-no-Tani (Kanō school). Wikimedia Commons." }
    ],
    year: 1184,
    date: "1184-03-20",
    dateLabel: "March 20, 1184 (Juei 3/2/7)",
    period: "Genpei",
    location: {
      name: "Ichi-no-Tani, Suma, Settsu Province (modern Suma-ku, Kobe)",
      lat: 34.6431,
      lon: 135.1313
    },
    combatants: {
      side1: {
        name: "Minamoto clan",
        leader: "Minamoto no Yoshitsune & Noriyori"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Munemori"
      }
    },
    outcome: "Minamoto victory; the Taira fortress fell and they fled to their ships.",
    summary: "Yoshitsune's most famous stroke. While Noriyori's main army struck the Taira line at Ikuta Shrine to the east, Yoshitsune took a detachment of about a hundred riders over the mountains behind the fortress and fell on the defenders' rear, throwing the Taira into rout. It is the setting of the death of the young flute-player Taira no Atsumori at the hands of Kumagai Naozane.",
    leadsTo: "yashima",
    details: `Re-established at Ichi-no-Tani between the mountains and the sea near Suma, the Taira were attacked on several fronts in early 1184. The decisive moment came when Minamoto no Yoshitsune, with a small mounted party, descended the cliff at Hiyodorigoe, thought impassable, and struck the fortress from behind. The Taira line collapsed and the survivors fled to their fleet, carrying the war out to sea.`
  },
  {
    id: "yashima",
    sources: [ { label: "Wikipedia: Battle of Yashima", url: "https://en.wikipedia.org/wiki/Battle_of_Yashima" } ],
    name: "Battle of Yashima",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Battle_of_Yashima_Folding_Screens_Kano_School.jpg/960px-Battle_of_Yashima_Folding_Screens_Kano_School.jpg", caption: "Folding screens of the Battle of Yashima (Kanō school). Wikimedia Commons." }
    ],
    year: 1185,
    date: "1185-03-22",
    dateLabel: "March 22, 1185 (Genryaku 2/2/19)",
    period: "Genpei",
    location: {
      name: "Yashima, Sanuki Province (modern Takamatsu, Kagawa)",
      lat: 34.3566,
      lon: 134.1072
    },
    combatants: {
      side1: {
        name: "Minamoto clan",
        leader: "Minamoto no Yoshitsune"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Munemori"
      }
    },
    outcome: "Minamoto victory; the Taira abandoned Yashima and fled west by sea.",
    summary: "Crossing a stormy strait to land where he was not expected, Yoshitsune stormed the Taira island base at Yashima, and the Taira again took to their ships. The battle is remembered for the archer Nasu no Yoichi, who at the Taira's taunting challenge shot down a fan held aloft on a pole on one of their boats.",
    leadsTo: "dan-no-ura",
    details: `The Battle of Yashima occurred in 1185 at Yashima, Sanuki Province (modern Takamatsu, Kagawa). The engagement involved forces of the Minamoto clan, commanded by Minamoto no Yoshitsune, engaging the Taira clan, commanded by Taira no Munemori. Crossing a stormy strait to land where he was not expected, Yoshitsune stormed the Taira island base at Yashima, and the Taira again took to their ships. The battle is remembered for the archer Nasu no Yoichi, who at the Taira's taunting challenge shot down a fan held aloft on a pole on one of their boats. The conflict resulted in a Minamoto victory; the Taira abandoned Yashima and fled west by sea. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "dan-no-ura",
    sources: [ { label: "Wikipedia: Battle of Dan-no-ura", url: "https://en.wikipedia.org/wiki/Battle_of_Dan-no-ura" } ],
    name: "Battle of Dan-no-ura",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/AntokuTennou_Engi.7%268_Dannoura_Kassen.jpg/960px-AntokuTennou_Engi.7%268_Dannoura_Kassen.jpg", caption: "The Battle of Dan-no-ura, from the Antoku Tennō Engi scrolls. Wikimedia Commons." }
    ],
    year: 1185,
    date: "1185-04-25",
    dateLabel: "April 25, 1185 (Genryaku 2/3/24)",
    period: "Genpei",
    location: {
      name: "Dan-no-ura, Shimonoseki Strait, Nagato Province (modern Shimonoseki, Yamaguchi)",
      lat: 33.9613,
      lon: 130.9601
    },
    combatants: {
      side1: {
        name: "Minamoto clan",
        leader: "Minamoto no Yoshitsune"
      },
      side2: {
        name: "Taira clan",
        leader: "Taira no Munemori (with Taira no Tomomori)"
      }
    },
    outcome: "Decisive Minamoto victory; the Taira clan was destroyed and the child-emperor Antoku drowned.",
    summary: "The naval battle that ended the Genpei War. In the swift tidal narrows of the Shimonoseki Strait the two fleets met; as the tide turned and Taira allies defected, their cause collapsed. The grandmother of the six-year-old Emperor Antoku leapt into the sea with him rather than be captured, and with the Taira annihilated the way lay open to the Kamakura shogunate.",
    details: `On 25 April 1185 the Minamoto and Taira fleets joined battle in the Kanmon Strait off Dan-no-ura. Early advantage lay with the Taira, who knew the tides, but as the current reversed through the day and the Taira general Taguchi Shigeyoshi changed sides, the Minamoto closed in. Realizing all was lost, the Taira nobles and women threw themselves into the sea; Nii-no-Ama plunged beneath the waves clutching her grandson, the boy-emperor Antoku.

The destruction of the Taira ended the five-year war and left Minamoto no Yoritomo supreme, the foundation of the Kamakura shogunate, the first lasting warrior government of Japan.`
  },
  {
    id: "jokyu-war",
    sources: [ { label: "Wikipedia: Jōkyū War", url: "https://en.wikipedia.org/wiki/J%C5%8Dky%C5%AB_War" } ],
    name: "Jōkyū War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emperor_Go-Toba.jpg/960px-Emperor_Go-Toba.jpg", caption: "Retired Emperor Go-Toba, who launched the Jōkyū War in 1221. Wikimedia Commons." }
    ],
    year: 1221,
    dateLabel: "June–July 1221 (Jōkyū 3)",
    period: "Kamakura",
    location: {
      name: "Uji–Seta river crossings, approaches to Kyoto (modern Kyoto), coordinates approximate",
      lat: 34.8929,
      lon: 135.8074
    },
    combatants: {
      side1: {
        name: "Kamakura shogunate",
        leader: "Hōjō Yasutoki (for regent Hōjō Yoshitoki)"
      },
      side2: {
        name: "Retired Emperor Go-Toba's forces",
        leader: "Go-Toba (retired emperor)"
      }
    },
    outcome: "Decisive shogunate victory; Go-Toba was exiled to the Oki Islands.",
    summary: "The retired Emperor Go-Toba's bid to overthrow the Kamakura shogunate and restore direct imperial rule. The Hōjō regency's eastern armies crushed the imperial forces at the river crossings south of Kyoto and took the capital within weeks, sealing warrior dominance over the court for the rest of the medieval age.",
    details: `The Jōkyū War occurred in 1221 at Uji–Seta river crossings, approaches to Kyoto (modern Kyoto), coordinates approximate. The engagement involved forces of the Kamakura shogunate, commanded by Hōjō Yasutoki (for regent Hōjō Yoshitoki), engaging the Retired Emperor Go-Toba's forces, commanded by Go-Toba (retired emperor). The retired Emperor Go-Toba's bid to overthrow the Kamakura shogunate and restore direct imperial rule. The Hōjō regency's eastern armies crushed the imperial forces at the river crossings south of Kyoto and took the capital within weeks, sealing warrior dominance over the court for the rest of the medieval age. The conflict resulted in a Decisive shogunate victory; Go-Toba was exiled to the Oki Islands. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "bunei-mongol-1274",
    sources: [ { label: "Wikipedia: Battle of Bun'ei", url: "https://en.wikipedia.org/wiki/Battle_of_Bun%27ei" } ],
    name: "Mongol Invasion of 1274 (Bun'ei)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg/960px-M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg", caption: "The Mongol invasion, from the Mōko Shūrai Ekotoba scroll. Wikimedia Commons." }
    ],
    year: 1274,
    dateLabel: "November 1274 (Bun'ei 11)",
    period: "Kamakura",
    location: {
      name: "Hakata Bay, Chikuzen Province (modern Fukuoka), coordinates approximate",
      lat: 33.5951,
      lon: 130.4017
    },
    combatants: {
      side1: {
        name: "Kamakura shogunate (Kyūshū defenders)",
        leader: "Hōjō regency (regent Hōjō Tokimune)"
      },
      side2: {
        name: "Yuan (Mongol) & Goryeo invasion force",
        leader: "Hol Don (Hindu) & Kim Bang-gyeong"
      }
    },
    outcome: "The invaders withdrew to their ships and were scattered by a storm; Kyūshū held.",
    summary: "The first Mongol invasion. A Yuan–Goryeo fleet landed in Hakata Bay and shook the Japanese with massed formations, poisoned arrows and exploding bombs, but re-embarked at nightfall and was scattered by a storm, sparing Kyūshū and prompting Japan to build a defensive stone wall along the bay.",
    details: `The Mongol Invasion of 1274 (Bun'ei) occurred in 1274 at Hakata Bay, Chikuzen Province (modern Fukuoka), coordinates approximate. The engagement involved forces of the Kamakura shogunate (Kyūshū defenders), commanded by Hōjō regency (regent Hōjō Tokimune), engaging the Yuan (Mongol) & Goryeo invasion force, commanded by Hol Don (Hindu) & Kim Bang-gyeong. The first Mongol invasion. A Yuan–Goryeo fleet landed in Hakata Bay and shook the Japanese with massed formations, poisoned arrows and exploding bombs, but re-embarked at nightfall and was scattered by a storm, sparing Kyūshū and prompting Japan to build a defensive stone wall along the bay. The conflict resulted in a The invaders withdrew to their ships and were scattered by a storm; Kyūshū held. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "koan-mongol-1281",
    sources: [ { label: "Wikipedia: Battle of Kōan", url: "https://en.wikipedia.org/wiki/Battle_of_K%C5%8Dan" } ],
    name: "Mongol Invasion of 1281 (Kōan)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kikuchi_Yoosai_-_Mongol_Invasion_%28m%C5%8Dko_sh%C5%ABrai%29_-_Tokyo_National_Museum.jpg/960px-Kikuchi_Yoosai_-_Mongol_Invasion_%28m%C5%8Dko_sh%C5%ABrai%29_-_Tokyo_National_Museum.jpg", caption: "The Mongol invasion, by Kikuchi Yōsai (Tokyo National Museum). Wikimedia Commons." }
    ],
    year: 1281,
    dateLabel: "June–August 1281 (Kōan 4)",
    period: "Kamakura",
    location: {
      name: "Hakata Bay & the defensive stone wall, Chikuzen Province (modern Fukuoka), coordinates approximate",
      lat: 33.6038,
      lon: 130.3816
    },
    combatants: {
      side1: {
        name: "Kamakura shogunate (Kyūshū defenders)",
        leader: "Hōjō regency (regent Hōjō Tokimune)"
      },
      side2: {
        name: "Yuan (Mongol), Goryeo & Southern Song force",
        leader: "Eastern Route army (Hong Dagu & Kim Bang-gyeong); Jiangnan/Southern Route army (Fan Wenhu)"
      }
    },
    outcome: "Japanese victory; the vast invasion fleet was destroyed by a typhoon, the 'kamikaze'.",
    summary: "The second and far larger Mongol invasion. Two huge fleets converged on Kyūshū but were held off the new stone wall along Hakata Bay for weeks; after withdrawing west to Imari Bay, off Takashima, the anchored armada was annihilated by a great typhoon, remembered as the kamikaze, the 'divine wind', ending Kublai Khan's attempts to conquer Japan.",
    details: `Kublai Khan launched one of the largest seaborne invasions of the pre-modern world: an Eastern Route fleet from Korea and a vast Jiangnan fleet from southern China, together carrying well over 100,000 men. The defensive wall (Genkō Bōrui) built after 1274 kept them from securing a beachhead at Hakata, and Japanese warriors raided the anchored ships in small boats by night.

In August 1281 a typhoon struck the crowded fleet and destroyed it; great numbers drowned. The deliverance entered legend as the kamikaze, though the staggering defensive costs would, in time, help undermine the very Hōjō regency that had organised the victory.`
  },
  {
    id: "chihaya-1333",
    sources: [ { label: "Wikipedia: Siege of Chihaya", url: "https://en.wikipedia.org/wiki/Siege_of_Chihaya" } ],
    name: "Siege of Chihaya",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chihaya_Castle16.jpg/960px-Chihaya_Castle16.jpg", caption: "The site of Chihaya Castle, held by Kusunoki Masashige. Wikimedia Commons." }
    ],
    year: 1333,
    dateLabel: "1333 (Genkō 3)",
    period: "Kamakura",
    location: {
      name: "Chihaya Castle, Mt. Kongō, Kawachi Province (modern Chihayaakasaka, Osaka)",
      lat: 34.4189,
      lon: 135.6717
    },
    combatants: {
      side1: {
        name: "Go-Daigo loyalists",
        leader: "Kusunoki Masashige"
      },
      side2: {
        name: "Kamakura shogunate",
        leader: "Hōjō army"
      }
    },
    outcome: "Loyalist success; Kusunoki held out and tied down the shogunate's forces.",
    summary: "Kusunoki Masashige's legendary defense of the small mountain fortress of Chihaya against a vast Hōjō army. His ingenious guerrilla tricks, logs, boulders and feints, held the castle for months, tying down the shogunate's strength and emboldening Emperor Go-Daigo's supporters to rise across the country.",
    details: `The Siege of Chihaya occurred in 1333 at Chihaya Castle, Mt. Kongō, Kawachi Province (modern Chihayaakasaka, Osaka). The engagement involved forces of the Go-Daigo loyalists, commanded by Kusunoki Masashige, engaging the Kamakura shogunate, commanded by Hōjō army. Kusunoki Masashige's legendary defense of the small mountain fortress of Chihaya against a vast Hōjō army. His ingenious guerrilla tricks, logs, boulders and feints, held the castle for months, tying down the shogunate's strength and emboldening Emperor Go-Daigo's supporters to rise across the country. The conflict resulted in a Loyalist success; Kusunoki held out and tied down the shogunate's forces. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "fall-of-kamakura-1333",
    sources: [ { label: "Wikipedia: Siege of Kamakura (1333)", url: "https://en.wikipedia.org/wiki/Siege_of_Kamakura_(1333)" } ],
    name: "Fall of Kamakura",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Yoshitoshi_-_100_Aspects_of_the_Moon_-_39.jpg", caption: "Tsukioka Yoshitoshi, ‘One Hundred Aspects of the Moon’, evoking the fall of the Hōjō. Wikimedia Commons." }
    ],
    year: 1333,
    dateLabel: "July 1333 (Genkō 3)",
    period: "Kamakura",
    location: {
      name: "Kamakura, Sagami Province (modern Kanagawa)",
      lat: 35.3197,
      lon: 139.5469
    },
    combatants: {
      side1: {
        name: "Go-Daigo loyalists",
        leader: "Nitta Yoshisada"
      },
      side2: {
        name: "Kamakura shogunate",
        leader: "Hōjō regency (tokusō Hōjō Takatoki; last shikken Hōjō Moritoki)"
      }
    },
    outcome: "Kamakura fell; Hōjō Takatoki and his kin took their own lives, ending the Kamakura shogunate.",
    summary: "Nitta Yoshisada's assault on the shogunal capital. By tradition he turned the city's coastal defenses by leading his army across the beach at Inamuragasaki at an unusually low tide; Kamakura fell amid heavy fighting, and the last Hōjō regent Takatoki and hundreds of his kin took their own lives, ending nearly 150 years of Kamakura rule and opening the way to the Kenmu Restoration.",
    leadsTo: "minatogawa",
    details: `As risings against the Hōjō spread in 1333, Nitta Yoshisada raised the loyalist banner in the east and drove on Kamakura. Blocked at the fortified passes, he is said to have prayed at Inamuragasaki, where the tide drew back and let his army sweep around the defenses along the shore.

The city was stormed and burned; Hōjō Takatoki and the leading members of the regency took their own lives at the temple of Tōshō-ji. With the Hōjō gone, Emperor Go-Daigo's Kenmu Restoration began, though within three years it collapsed into the Nanboku-chō wars already on your map.`
  },
  {
    id: "kizugawaguchi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/%E9%9B%A3%E6%B3%A2%E8%88%B9%E8%BB%8D%E5%9B%B3.jpg",
        caption: "Naniwa Sengun Zu, an Edo-period painting of the first battle at Kizugawaguchi in 1576, deposited at the Murakami Kaizoku Museum in Imabari; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Battles of Kizugawaguchi", url: "https://en.wikipedia.org/wiki/Battles_of_Kizugawaguchi" } ],
    name: "Battles of Kizugawaguchi",
    year: 1576,
    yearStart: 1576,
    yearEnd: 1578,
    dateLabel: "1576 and 1578",
    period: "Azuchi–Momoyama",
    location: {
      name: "Mouth of the Kizu River, Osaka Bay",
      lat: 34.63,
      lon: 135.432
    },
    combatants: {
      side1: {
        name: "Oda clan fleet",
        leader: "Kuki Yoshitaka",
        forces: "Six great atakebune, reportedly iron-reinforced (1578)"
      },
      side2: {
        name: "Mōri & Murakami fleets",
        leader: "Murakami Motoyoshi (1576); Murakami Takeyoshi (1578)",
        forces: "Hundreds of wooden warships"
      }
    },
    outcome: "Mōri victory (1576); Oda tactical victory (1578), but the blockade of Ishiyama Hongan-ji still failed.",
    summary: "Two massive naval engagements. The Mōri initially broke the Oda blockade of Ishiyama Hongan-ji, prompting Nobunaga to build six great iron-reinforced atakebune, which beat back the Mōri fleet in 1578 but still could not seal off the fortress.",
    details: `The Battles of Kizugawaguchi comprised two naval engagements (1576 and 1578) at the mouth of the Kizu River in Osaka Bay, fought between the Oda clan and the Mōri clan.

In the First Battle (1576), the Mōri navy successfully broke the Oda blockade of Ishiyama Hongan-ji utilizing incendiary projectiles to destroy the Oda fleet. 

In response, Oda Nobunaga commissioned the construction of six heavily armed, iron-plated warships (Tekkōsen). During the Second Battle (1578), the Oda ironclads engaged the Mōri fleet. The iron plating neutralized Mōri incendiary tactics, and the Oda vessels utilized naval artillery to sink the opposing wooden ships. The Oda victory successfully re-established the blockade, leading to the capitulation of Ishiyama Hongan-ji in 1580.`
  },
  {
    id: "shimabara",
    sources: [ { label: "Wikipedia: Shimabara Rebellion", url: "https://en.wikipedia.org/wiki/Shimabara_Rebellion" } ],
    name: "Shimabara Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Shimabara-Battle-Map-c17th-century.png/960px-Shimabara-Battle-Map-c17th-century.png", caption: "A 17th-century map of the siege of Hara Castle in the Shimabara Rebellion. Wikimedia Commons." }
    ],
    yearStart: 1637,
    yearEnd: 1638,
    dateLabel: "December 1637 – April 1638",
    period: "Edo",
    location: {
      name: "Hara Castle, Shimabara Peninsula, Hizen Province (modern Nagasaki Prefecture)",
      lat: 32.6353,
      lon: 130.2733
    },
    combatants: {
      side1: { name: "Tokugawa shogunate", leader: "Matsudaira Nobutsuna (after Itakura Shigemasa fell)", forces: "over 125,000" },
      side2: { name: "Christian & peasant rebels", leader: "Amakusa Shirō (Tokisada)", forces: "approximately 27,000–37,000" }
    },
    outcome: "Shogunate victory; the rebels were annihilated and Christianity driven underground.",
    summary: "The largest uprising of the Edo period: overtaxed peasants and persecuted Christians on the Shimabara Peninsula and Amakusa Islands rose under the teenage Amakusa Shirō, holding out at Hara Castle against a vast shogunate army.",
    details: `Sparked by crushing taxation under the Matsukura lords and the persecution of Christians, the revolt broke out in late 1637 and coalesced around the 16-year-old Amakusa Shirō. Tens of thousands of rebels fortified the ruined Hara Castle.

An initial assault failed and the shogunate commander Itakura Shigemasa was killed. Matsudaira Nobutsuna then took command of a force exceeding 125,000, blockading the castle and even enlisting Dutch ships to bombard it from the sea. After a months-long siege starved the defenders, the castle fell in April 1638 and the rebels were massacred.

The rebellion hardened the shogunate's resolve: Christianity was suppressed ever more harshly and the sakoku ("closed country") policy tightened, sealing Japan off for over two centuries.`
  },
  {
    id: "toba-fushimi",
    sources: [ { label: "Wikipedia: Battle of Toba–Fushimi", url: "https://en.wikipedia.org/wiki/Battle_of_Toba%E2%80%93Fushimi" } ],
    name: "Battle of Toba–Fushimi",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Monument_of_Meijiishin_Fushimi_no_senseki.jpg/960px-Monument_of_Meijiishin_Fushimi_no_senseki.jpg", caption: "Monument at the Toba–Fushimi battlefield, where the Boshin War began. Wikimedia Commons." }
    ],
    year: 1868,
    date: "1868-01-27",
    dateLabel: "January 27–31, 1868 (Keiō 4/1/3)",
    period: "Bakumatsu",
    location: {
      name: "Toba and Fushimi, south of Kyoto",
      lat: 34.9320,
      lon: 135.7530
    },
    combatants: {
      side1: { name: "Imperial (Satsuma–Chōshū) forces", leader: "Saigō Takamori", forces: "approximately 5,000" },
      side2: { name: "Tokugawa shogunate forces", leader: "Tokugawa Yoshinobu (nominal)", forces: "approximately 15,000" }
    },
    outcome: "Decisive Imperial victory; the opening battle of the Boshin War.",
    summary: "Though outnumbered three to one, the modernized, Imperial-bannered Satsuma–Chōshū army routed the shogunate forces south of Kyoto, opening the Boshin War and turning the conflict into a legitimist crusade against the Tokugawa.",
    leadsTo: "ueno",
    details: `When Tokugawa Yoshinobu marched on Kyoto to reverse the new Meiji government's seizure of power, his army met the Satsuma–Chōshū forces at Toba and Fushimi on the southern approaches to the city.

Despite being heavily outnumbered, the Imperial side was better armed and disciplined. The decisive moment came when the court granted the Satsuma–Chōshū army the brocade banner (nishiki no mihata), branding the Tokugawa "enemies of the court"; several wavering domains defected. Yoshinobu abandoned his army and fled by ship to Edo.

The victory transformed a domain quarrel into a national war and sent the Imperial army marching east toward Edo.`
  },
  {
    id: "ueno",
    sources: [ { label: "Wikipedia: Battle of Ueno", url: "https://en.wikipedia.org/wiki/Battle_of_Ueno" } ],
    name: "Battle of Ueno",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/UenoSenso.jpg/960px-UenoSenso.jpg", caption: "The Battle of Ueno (Ueno Sensō), 1868. Wikimedia Commons." }
    ],
    year: 1868,
    date: "1868-07-04",
    dateLabel: "July 4, 1868 (Keiō 4/5/15)",
    period: "Bakumatsu",
    location: {
      name: "Ueno (Kan'ei-ji), Edo / Tokyo",
      lat: 35.7156,
      lon: 139.7740
    },
    combatants: {
      side1: { name: "Imperial army", leader: "Ōmura Masujirō", forces: "approximately 10,000" },
      side2: { name: "Shōgitai (pro-Tokugawa retainers)", leader: "Shibusawa Seiichirō & Amano Hachirō", forces: "approximately 2,000" }
    },
    outcome: "Imperial victory in a single day; the Shōgitai were destroyed.",
    summary: "After Edo surrendered peacefully, the die-hard Shōgitai held out at Kan'ei-ji temple in Ueno. Ōmura Masujirō's Imperial troops, using Armstrong guns, crushed them in one day, cementing Imperial control of the new capital.",
    leadsTo: "aizu",
    details: `Following the bloodless surrender of Edo Castle, a body of pro-Tokugawa loyalists known as the Shōgitai entrenched themselves around Kan'ei-ji, the great temple in Ueno that housed the Tokugawa mortuary shrines.

On 4 July 1868 the Imperial commander Ōmura Masujirō attacked, deploying modern Armstrong breech-loading cannon. The temple complex was bombarded and stormed in a single day; the Shōgitai were scattered and Kan'ei-ji burned.

The victory secured Tokyo for the new government and broke organized resistance in the Kantō, pushing the remaining Tokugawa loyalists north.`
  },
  {
    id: "aizu",
    sources: [ { label: "Wikipedia: Battle of Aizu", url: "https://en.wikipedia.org/wiki/Battle_of_Aizu" } ],
    name: "Battle of Aizu (Siege of Aizuwakamatsu)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Battle_of_Aizu_at_Wakamatsu_castle_by_Tsukioka_Yoshitoshi.png/960px-Battle_of_Aizu_at_Wakamatsu_castle_by_Tsukioka_Yoshitoshi.png", caption: "The Battle of Aizu at Wakamatsu Castle, by Tsukioka Yoshitoshi. Wikimedia Commons." }
    ],
    year: 1868,
    dateLabel: "October – November 1868",
    period: "Bakumatsu",
    location: {
      name: "Tsuruga Castle, Aizuwakamatsu, Mutsu Province (modern Fukushima Prefecture)",
      lat: 37.4877,
      lon: 139.9298
    },
    combatants: {
      side1: { name: "Imperial (Satsuma–Chōshū–Tosa) forces", leader: "Itagaki Taisuke & Yamagata Aritomo", forces: "approximately 15,000 combatants (up to ~75,000 with reinforcements)" },
      side2: { name: "Aizu domain", leader: "Matsudaira Katamori", forces: "approximately 5,000" }
    },
    outcome: "Imperial victory after a month-long siege; the Aizu domain was crushed.",
    summary: "The bloodiest campaign of the Boshin War. The Tokugawa-loyalist Aizu domain made a desperate stand at Tsuruga Castle; the tragedy of the teenage Byakkotai, who took their own lives believing the castle had fallen, became a national legend.",
    leadsTo: "hakodate",
    details: `Aizu, staunchest of the Tokugawa loyalist domains under Matsudaira Katamori, became the focus of the Imperial army's northern campaign against the Ōuetsu Reppan Dōmei (Northern Alliance).

Imperial forces stormed into the Aizu basin in October 1868 and besieged the formidable Tsuruga (Aizuwakamatsu) Castle. During the chaos the Byakkotai, a reserve unit of teenage samurai, withdrew to Iimoriyama; seeing smoke over the castle town and believing it lost, most took their own lives. The castle held out about a month before Katamori surrendered in early November.

The fall of Aizu broke the back of the Northern Alliance and remains a byword for tragic loyalty.`
  },
  {
    id: "hakodate",
    sources: [ { label: "Wikipedia: Battle of Hakodate", url: "https://en.wikipedia.org/wiki/Battle_of_Hakodate" } ],
    name: "Battle of Hakodate (Goryōkaku)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/BakufuTroopsToEzo.jpg", caption: "Shogunate troops embarking for Ezo (Hokkaidō) in the Hakodate campaign. Wikimedia Commons." }
    ],
    yearStart: 1868,
    yearEnd: 1869,
    dateLabel: "December 1868 – June 1869",
    period: "Bakumatsu",
    location: {
      name: "Goryōkaku fortress, Hakodate, Ezo (modern Hokkaido)",
      lat: 41.7969,
      lon: 140.7570
    },
    combatants: {
      side1: { name: "Imperial forces", leader: "Kuroda Kiyotaka", forces: "approximately 7,000" },
      side2: { name: "Ezo Republic (Tokugawa loyalists)", leader: "Enomoto Takeaki & Hijikata Toshizō", forces: "approximately 3,000" }
    },
    outcome: "Imperial victory; the surrender at Goryōkaku ended the Boshin War.",
    summary: "The last stand of the Tokugawa cause. Naval officer Enomoto Takeaki and former Shinsengumi vice-commander Hijikata Toshizō held the star-shaped Goryōkaku fortress in Hokkaido as the short-lived 'Ezo Republic,' until Imperial forces overwhelmed them in mid-1869.",
    details: `Refusing to surrender, Enomoto Takeaki led part of the shogunate navy north to Ezo (Hokkaido), where the loyalists proclaimed the Ezo Republic and fortified the Western-style star fort of Goryōkaku at Hakodate.

Imperial forces landed in spring 1869 and ground down the defenders by land and sea, an action that included the ironclad warship Kōtetsu. Hijikata Toshizō, the famed Shinsengumi commander, was killed in the fighting. Enomoto surrendered Goryōkaku in June 1869.

The capitulation ended the Boshin War and completed the Meiji government's consolidation of power, closing the age of the samurai and opening Japan's rapid modernization.`
  },
  {
    id: "onin",
    sources: [ { label: "Wikipedia: Ōnin War", url: "https://en.wikipedia.org/wiki/%C5%8Cnin_War" } ],
    name: "Ōnin War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png/960px-Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png", caption: "‘The Battle of Ōnin’ by Utagawa Yoshitora. Wikimedia Commons." }
    ],
    yearStart: 1467,
    yearEnd: 1477,
    dateLabel: "1467–1477",
    period: "Muromachi",
    location: {
      name: "Kyoto (Kamigyō / Nishijin), Yamashiro Province",
      lat: 35.0290,
      lon: 135.7510
    },
    combatants: {
      side1: { name: "Eastern Army", leader: "Hosokawa Katsumoto", forces: "approximately 160,000" },
      side2: { name: "Western Army", leader: "Yamana Sōzen (Mochitoyo)", forces: "approximately 116,000" }
    },
    outcome: "Militarily inconclusive, both sides exhausted, but the Hosokawa emerged in control of the shogunate; Kyoto was devastated and shogunal authority collapsed, opening the Sengoku period.",
    summary: "A decade-long conflict that began as a shogunal succession dispute and engulfed Kyoto, splitting the great houses into Eastern (Hosokawa) and Western (Yamana) armies. The capital was reduced to ashes and the Muromachi shogunate's authority shattered, the conventional opening of the Sengoku 'Warring States' age.",
    details: `The war grew out of a tangle of succession disputes, over the Ashikaga shogunate itself (Yoshimasa's brother Yoshimi versus his infant son Yoshihisa) and within the powerful Hatakeyama and Shiba houses, which polarized the warrior aristocracy into two camps.

From 1467 the Eastern Army of Hosokawa Katsumoto and the Western Army of Yamana Sōzen fought a grinding, largely static war through the streets of Kyoto. Much of the capital, including countless temples and aristocratic mansions, was burned. Both principal commanders died in 1473, yet the fighting dragged on until 1477.

The war settled nothing at the centre but destroyed it: with the shogunate powerless, real authority devolved to provincial warlords (daimyō), beginning the century of disunion known as the Sengoku period.`
  },
  {
    id: "anglo-satsuma-war",
    sources: [ { label: "Wikipedia: Bombardment of Kagoshima", url: "https://en.wikipedia.org/wiki/Bombardment_of_Kagoshima" } ],
    name: "Bombardment of Kagoshima (Anglo-Satsuma War)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bombardment_of_Kagoshima_1863_by_E._Roevens.jpg/960px-Bombardment_of_Kagoshima_1863_by_E._Roevens.jpg", caption: "The bombardment of Kagoshima, 1863 (painting by E. Roevens). Wikimedia Commons." }
    ],
    year: 1863,
    date: "1863-08-15",
    dateLabel: "August 15–17, 1863",
    period: "Bakumatsu",
    location: { name: "Kagoshima Bay, Satsuma Province (modern Kagoshima)", lat: 31.5969, lon: 130.5571 },
    combatants: {
      side1: { name: "Satsuma Domain", leader: "Shimazu Hisamitsu", forces: "shore batteries (11 emplacements, ~89 guns)" },
      side2: { name: "British Royal Navy", leader: "Rear-Admiral Augustus Kuper", forces: "7 warships" }
    },
    outcome: "Inconclusive bombardment, but it pushed Satsuma toward Britain and rapid modernization.",
    summary: "Retaliation for the killing of an English merchant at Namamugi (1862), a British squadron bombarded Kagoshima. Both sides claimed victory, but Satsuma drew the real lesson, that 'expel the barbarians' was futile, and turned to Western arms.",
    details: `In 1862 Satsuma retainers had cut down the British merchant Charles Richardson on the Tōkaidō (the Namamugi Incident). When Satsuma refused reparations, a Royal Navy squadron entered Kagoshima Bay in August 1863, seized Satsuma steamers, and exchanged fire with the domain's shore batteries in a typhoon. Much of Kagoshima burned; both sides took casualties and both claimed victory.

The deeper result was a reversal of policy. Having felt Western firepower first-hand, Satsuma abandoned the slogan "expel the barbarians" (jōi), reconciled with Britain, and bought modern ships and guns, beginning the path that would make it, with Chōshū, the spearhead of the movement to topple the shogunate.`
  },
  {
    id: "shimonoseki",
    sources: [ { label: "Wikipedia: Shimonoseki campaign", url: "https://en.wikipedia.org/wiki/Shimonoseki_campaign" } ],
    name: "Bombardment of Shimonoseki",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Choshu-Battery-Capture-Shimonoseki-1864.jpg/960px-Choshu-Battery-Capture-Shimonoseki-1864.jpg", caption: "A captured Chōshū battery at Shimonoseki, 1864 (photograph by Felice Beato). Wikimedia Commons." }
    ],
    yearStart: 1863,
    yearEnd: 1864,
    dateLabel: "1863 – September 1864",
    period: "Bakumatsu",
    location: { name: "Shimonoseki Strait, Nagato Province (modern Yamaguchi)", lat: 33.9578, lon: 130.9410 },
    combatants: {
      side1: { name: "Chōshū Domain", leader: "Mōri Takachika", forces: "shore batteries" },
      side2: { name: "Allied fleet (Britain, France, Netherlands, USA)", leader: "Admiral Augustus Kuper", forces: "17 warships" }
    },
    outcome: "Decisive Allied victory; Chōshū's batteries were destroyed and the strait reopened.",
    summary: "After Chōshū fired on foreign shipping in the strait to 'expel the barbarians,' a four-nation fleet returned in 1864 and smashed its forts, teaching Chōshū the same hard lesson Satsuma had learned at Kagoshima.",
    details: `Acting on the court's order to "expel the barbarians," Chōshū batteries began firing on Western merchant and naval vessels passing through the strategic Shimonoseki Strait in 1863. American and French ships retaliated that year, and in September 1864 a combined squadron of seventeen British, French, Dutch and American warships bombarded and then landed troops to destroy the Chōshū forts outright.

The defeat was total, and, like Satsuma at Kagoshima, transformative. Chōshū dropped its anti-foreign stance, modernized its army with Western rifles and the mixed-class Kiheitai militia, and soon allied in secret with Satsuma against the shogunate.`
  },
  {
    id: "kinmon",
    sources: [ { label: "Wikipedia: Kinmon incident", url: "https://en.wikipedia.org/wiki/Kinmon_incident" } ],
    name: "Kinmon Incident (Hamaguri Gate)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hamaguri_rebellion.jpg/960px-Hamaguri_rebellion.jpg", caption: "The Kinmon (Hamaguri Gate) Incident, 1864. Wikimedia Commons." }
    ],
    year: 1864,
    date: "1864-08-20",
    dateLabel: "August 20, 1864 (Genji 1/7/19)",
    period: "Bakumatsu",
    location: { name: "Hamaguri Gate, Kyoto Imperial Palace", lat: 35.0254, lon: 135.7610 },
    combatants: {
      side1: { name: "Shogunate forces (Aizu & Satsuma)", leader: "Tokugawa (Hitotsubashi) Yoshinobu; Matsudaira Katamori & Saigō Takamori", forces: "Aizu, Satsuma and allied domains" },
      side2: { name: "Chōshū Domain", leader: "Fukuhara Mototake (Echigo); Kusaka Genzui & Kijima Matabei (both killed in action)", forces: "~3,000 (1,400 Chōshū regulars + 1,600 rōnin)" }
    },
    outcome: "Shogunate victory; Chōshū was driven from Kyoto and branded an 'enemy of the court.'",
    summary: "Seeking to reverse its loss of influence, Chōshū marched on the Kyoto palace to 'rescue' the Emperor. Aizu and Satsuma troops beat the assault back at the Hamaguri Gate; the defeated Chōshū force set Kyoto ablaze, beginning with the Takatsukasa mansion; the resulting fire destroyed some 28,000 houses.",
    details: `Expelled from court politics after a 1863 coup, Chōshū sent armed forces to Kyoto in 1864 ostensibly to petition the throne. On 20 August they attacked the Imperial Palace, with the heaviest fighting at the Hamaguri ('Clam') Gate. Defending forces led by Matsudaira Katamori of Aizu and Saigō Takamori of Satsuma threw them back; Chōshū leaders Kusaka Genzui and Kijima Matabei died, and the resulting conflagration, the "Dondon-yaki", destroyed tens of thousands of houses.

Declared an enemy of the court, Chōshū now faced the First Chōshū Expedition. Yet the humiliation radicalized the domain and, within two years, drove it into the Satsuma–Chōshū alliance that would end the shogunate.`
  },
  {
    id: "choshu-expedition-1866",
    sources: [ { label: "Wikipedia: Second Chōshū expedition", url: "https://en.wikipedia.org/wiki/Second_Ch%C5%8Dsh%C5%AB_expedition" } ],
    name: "Second Chōshū Expedition",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Operations_map_of_the_Second_Choshu_Expedition_by_Sakamoto_Ryoma.jpg/960px-Operations_map_of_the_Second_Choshu_Expedition_by_Sakamoto_Ryoma.jpg", caption: "Operations map of the Second Chōshū Expedition, drawn by Sakamoto Ryōma. Wikimedia Commons." }
    ],
    year: 1866,
    dateLabel: "July – October 1866 (Keiō 2/6/7 – 9/2)",
    period: "Bakumatsu",
    location: { name: "The Chōshū borders (Suō / Nagato), four fronts around Yamaguchi", lat: 34.1785, lon: 131.4737 },
    combatants: {
      side1: { name: "Chōshū Domain", leader: "Mōri Takachika; cmdrs. Takasugi Shinsaku & Ōmura Masujirō", forces: "~4,000, modern rifles & Kiheitai" },
      side2: { name: "Tokugawa shogunate coalition", leader: "Shōgun Tokugawa Iemochi", forces: "over 100,000" }
    },
    outcome: "Chōshū victory, the shogunate's punitive campaign collapsed, exposing its weakness.",
    summary: "The shogunate's second attempt to crush Chōshū ended in humiliating failure: Chōshū's small, modern, rifle-armed force defeated the vast but antiquated Tokugawa coalition on every front. The defeat doomed the shogunate.",
    details: `When Chōshū defied the shogunate and rearmed, the Tokugawa launched a second punitive expedition in 1866 with an enormous coalition army. But Chōshū, now equipped with Western breech- and Minié rifles and led by innovators like Takasugi Shinsaku and Ōmura Masujirō, fought a mobile, modern war. On all four fronts, Ōshima, the Geishū (Aki) border, Sekishū (Iwami) and Kokura, the smaller Chōshū forces routed or stalemated the lumbering shogunate host.

When Shōgun Tokugawa Iemochi died in Osaka that summer, the campaign was quietly abandoned. The defeat shattered the shogunate's prestige beyond repair: secretly allied with Satsuma, Chōshū now stood at the head of the movement that, two years later, would sweep the Tokugawa away in the Boshin War.`
  },
  {
    id: "masakado",
    sources: [ { label: "Wikipedia: Taira no Masakado", url: "https://en.wikipedia.org/wiki/Taira_no_Masakado" } ],
    name: "Taira no Masakado's Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Taira_no_Masakado_01.jpg", caption: "Taira no Masakado, who proclaimed himself 'New Emperor' in 939. Wikimedia Commons." }
    ],
    yearStart: 939, yearEnd: 940,
    dateLabel: "939–940 (Jōhei–Tengyō)",
    period: "Heian",
    location: { name: "Sashima, Shimōsa Province (modern Bandō, Ibaraki)", lat: 36.0489, lon: 139.8886 },
    combatants: {
      side1: { name: "Imperial court forces", leader: "Taira no Sadamori & Fujiwara no Hidesato" },
      side2: { name: "Rebels", leader: "Taira no Masakado", forces: "the eastern warrior bands" }
    },
    outcome: "Masakado defeated and killed (940), but the revolt exposed the court's weakness.",
    summary: "The first great samurai revolt: a Kantō warrior overruns eight eastern provinces and proclaims himself a 'New Emperor,' shocking the Heian court.",
    details: `Drawn into the blood-feuds of the eastern Kantō, the warrior Taira no Masakado turned his private wars against the imperial government itself. By 939 he had seized eight provinces of the east and styled himself shinnō, 'New Emperor', a stunning challenge to the throne in Kyoto.

The court kept no army of its own, so it set warriors against the warrior. In early 940 Taira no Sadamori and Fujiwara no Hidesato hunted Masakado down and killed him. Yet his revolt, and Fujiwara no Sumitomo's in the west at the same moment, laid bare how far real power had slipped from the aristocracy to the provincial fighting men who would one day rule Japan. Masakado himself became a dreaded, venerated spirit, enshrined to this day in the heart of Tokyo.`
  },
  {
    id: "sumitomo",
    sources: [ { label: "Wikipedia: Fujiwara no Sumitomo", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Sumitomo" } ],
    name: "Fujiwara no Sumitomo's Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Fujiwara_no_Sumitomo.jpg", caption: "Fujiwara no Sumitomo, the pirate-rebel of the Inland Sea. Wikimedia Commons." }
    ],
    yearStart: 939, yearEnd: 941,
    dateLabel: "939–941 (Jōhei–Tengyō)",
    period: "Heian",
    location: { name: "Iyo Province & the Seto Inland Sea (modern Ehime)", lat: 33.8416, lon: 132.7857 },
    combatants: {
      side1: { name: "Imperial court forces", leader: "Ono no Yoshifuru & Minamoto no Tsunemoto" },
      side2: { name: "Pirate rebels", leader: "Fujiwara no Sumitomo", forces: "Inland Sea pirate fleets" }
    },
    outcome: "Suppressed in 941; Sumitomo killed. Paired with Masakado, it shook the court east and west.",
    summary: "A court official turned pirate king raises the Inland Sea against Kyoto, the western half of the twin revolts that revealed the warriors' rising power.",
    details: `Sent to suppress piracy in the Seto Inland Sea, Fujiwara no Sumitomo instead made himself its master, leading great pirate fleets that raided the coasts and even sacked the government headquarters at Dazaifu in Kyushu.

His rebellion erupted in the same years as Masakado's in the east, and the simultaneous threat from both flanks terrified the Heian court. By 941 imperial commanders Ono no Yoshifuru and Minamoto no Tsunemoto had broken his fleets and killed him. Together the two revolts, the Jōhei–Tengyō disturbances, taught the aristocracy a lasting lesson: it now survived only by setting one warrior house against another.`
  },
  {
    id: "zenkunen",
    sources: [ { label: "Wikipedia: Former Nine Years' War", url: "https://en.wikipedia.org/wiki/Former_Nine_Years%27_War" } ],
    name: "Former Nine Years' War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/A-38_C0080776.jpg/960px-A-38_C0080776.jpg", caption: "A scroll depicting the Former Nine Years' War. Wikimedia Commons." }
    ],
    yearStart: 1051, yearEnd: 1062,
    dateLabel: "1051–1062 (Zenkunen no Eki)",
    period: "Heian",
    location: { name: "Mutsu Province, the Kitakami valley (modern Iwate)", lat: 39.7036, lon: 141.1525 },
    combatants: {
      side1: { name: "Minamoto (court-appointed)", leader: "Minamoto no Yoriyoshi & Yoshiie", forces: "Minamoto warriors + Kiyowara allies" },
      side2: { name: "Abe clan", leader: "Abe no Yoritoki & Abe no Sadato" }
    },
    outcome: "Minamoto victory (1062); the Abe destroyed and the Minamoto rooted in the east.",
    summary: "A twelve-year war in the far north that made the Minamoto the pre-eminent warrior house of eastern Japan.",
    details: `The Abe clan, hereditary strongmen of the northern frontier in Mutsu, defied the provincial governor and the court. To break them, Kyoto sent Minamoto no Yoriyoshi and his son Yoshiie, who fought a grinding campaign up the Kitakami valley against the Abe's river stockades.

Only with the help of the powerful Kiyowara clan of Dewa did the Minamoto finally storm the Abe's last fortress at Kuriyagawa in 1062, killing Abe no Sadato. The long war forged deep bonds of loyalty between the Minamoto and the eastern warriors who fought beside them, bonds the family would one day call upon to win the Genpei War and found the Kamakura shogunate.`
  },
  {
    id: "gosannen",
    sources: [ { label: "Wikipedia: Gosannen War", url: "https://en.wikipedia.org/wiki/Gosannen_War" } ],
    name: "Later Three Years' War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gosannen_kassen_ekotoba_-_Scroll_1_part_13.jpg/960px-Gosannen_kassen_ekotoba_-_Scroll_1_part_13.jpg", caption: "The Later Three Years' War, from the Gosannen Kassen Ekotoba scroll. Wikimedia Commons." }
    ],
    yearStart: 1083, yearEnd: 1087,
    dateLabel: "1083–1087 (Gosannen no Eki)",
    period: "Heian",
    location: { name: "Dewa Province, the Kanezawa stockade (modern Yokote, Akita)", lat: 39.3186, lon: 140.5666 },
    combatants: {
      side1: { name: "Minamoto & Fujiwara no Kiyohira", leader: "Minamoto no Yoshiie" },
      side2: { name: "Kiyowara clan", leader: "Kiyowara no Iehira & Takehira" }
    },
    outcome: "Yoshiie wins, but the court refuses to call it an official war, so he pays his men himself.",
    summary: "Minamoto Yoshiie intervenes in a northern clan's feud; the court denies him reward, so he rewards his warriors with his own wealth, binding them to his house.",
    details: `When a succession feud tore apart the Kiyowara, the very clan that had helped win the earlier war, Minamoto no Yoshiie, now governor of Mutsu, took the field on behalf of Fujiwara no Kiyohira. After a hard siege he stormed the Kanezawa stockade in 1087 and crushed the rival Kiyowara.

The court, however, ruled the conflict a private quarrel and granted Yoshiie nothing. In a celebrated gesture he paid and rewarded his followers out of his own purse, an act that won the Minamoto a fierce personal loyalty across the east. The war's other legacy was the rise of Fujiwara no Kiyohira, who built the golden Buddhist culture of the Northern Fujiwara at Hiraizumi.`
  },
  {
    id: "hogen",
    sources: [ { label: "Wikipedia: Hōgen rebellion", url: "https://en.wikipedia.org/wiki/H%C5%8Dgen_rebellion" } ],
    name: "Hōgen Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/H%C5%8Dgen_no_ran.jpg/960px-H%C5%8Dgen_no_ran.jpg", caption: "The Hōgen Rebellion of 1156. Wikimedia Commons." }
    ],
    year: 1156,
    dateLabel: "1156 (Hōgen 1)",
    period: "Heian",
    location: { name: "Kyoto, the Shirakawa-den palace", lat: 35.0254, lon: 135.7780 },
    combatants: {
      side1: { name: "Emperor Go-Shirakawa's faction", leader: "Taira no Kiyomori & Minamoto no Yoshitomo" },
      side2: { name: "Retired Emperor Sutoku's faction", leader: "Minamoto no Tameyoshi & Taira no Tadamasa" }
    },
    outcome: "Go-Shirakawa's side wins; Sutoku is exiled, and the samurai become the arbiters of the court.",
    summary: "A palace succession quarrel is settled not by courtiers but by warriors, the moment the samurai step to the centre of national politics.",
    leadsTo: "heiji",
    details: `A dispute over the imperial succession split the court between the reigning Emperor Go-Shirakawa and his exiled-minded brother, the retired Emperor Sutoku. Crucially, it also split the great warrior houses: fathers and sons, the Taira and the Minamoto, took opposite sides.

In a single night's fighting in Kyoto in 1156, the warriors of Go-Shirakawa's party, led by Taira no Kiyomori and Minamoto no Yoshitomo, overwhelmed Sutoku's. Sutoku was banished; defeated leaders, including Yoshitomo's own father, were executed. For the first time a question of who ruled Japan had been decided by samurai swords, and Kiyomori and Yoshitomo emerged as the indispensable men of the realm, soon to turn on each other.`
  },
  {
    id: "heiji",
    sources: [ { label: "Wikipedia: Heiji rebellion", url: "https://en.wikipedia.org/wiki/Heiji_rebellion" } ],
    name: "Heiji Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Heiji_rokuhara_gyoukou.jpg/960px-Heiji_rokuhara_gyoukou.jpg", caption: "The Heiji Rebellion, a scene from the Heiji Monogatari scrolls. Wikimedia Commons." }
    ],
    year: 1160,
    dateLabel: "January–February 1160 (Heiji 1/12)",
    period: "Heian",
    location: { name: "Kyoto, the Sanjō Palace", lat: 35.0116, lon: 135.7681 },
    combatants: {
      side1: { name: "Taira", leader: "Taira no Kiyomori" },
      side2: { name: "Minamoto & Fujiwara no Nobuyori", leader: "Minamoto no Yoshitomo" }
    },
    outcome: "Decisive Taira victory; Yoshitomo is killed and his young son Yoritomo exiled, setting up the Genpei War.",
    summary: "Kiyomori destroys his Minamoto rival and seizes supremacy over the court, the first samurai to dominate Japan, and the spark, twenty years on, of the Genpei War.",
    leadsTo: "uji-1180",
    details: `The alliance of Hōgen did not last. While Taira no Kiyomori was away on pilgrimage, Minamoto no Yoshitomo and the courtier Fujiwara no Nobuyori seized the capital in a coup, attacking and burning the Sanjō Palace and taking the retired emperor captive.

Kiyomori raced back, outmanoeuvred the rebels, and crushed them. Yoshitomo was killed fleeing east; his thirteen-year-old son, Minamoto no Yoritomo, was spared and exiled to Izu. Kiyomori now stood unrivalled, the first warrior to rule the court from within, climbing to the office of chancellor. But the boy he had let live would, in 1180, raise the east against the Taira and bring the whole order crashing down in the Genpei War.`
  },
  {
    id: "jinshin",
    sources: [ { label: "Wikipedia: Jinshin War", url: "https://en.wikipedia.org/wiki/Jinshin_War" } ],
    name: "Jinshin War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Omi_Otsu-no-miya%2C_dairi-seiden-ato.jpg/960px-Omi_Otsu-no-miya%2C_dairi-seiden-ato.jpg", caption: "The site of the Ōmi-Ōtsu palace, seat of the court defeated in the Jinshin War. Wikimedia Commons." }
    ],
    year: 672,
    dateLabel: "672 (the jinshin year)",
    period: "Asuka–Nara",
    location: { name: "Seta Bridge, Ōmi Province (modern Ōtsu, Shiga)", lat: 34.9714, lon: 135.9092 },
    combatants: {
      side1: { name: "Prince Ōama's forces", leader: "Prince Ōama (later Emperor Tenmu)", forces: "levies of Mino, Owari & the east" },
      side2: { name: "The Ōmi court", leader: "Emperor Kōbun (Prince Ōtomo)" }
    },
    outcome: "Decisive victory for Prince Ōama, who took the throne as Emperor Tenmu.",
    summary: "The largest civil war of ancient Japan: a disputed succession that pitted the late emperor's brother against his son, and remade the imperial state.",
    details: `When Emperor Tenji died in 671, his brother Prince Ōama, who had withdrawn to Yoshino as a monk to avoid suspicion, rose against Tenji's son and heir, Prince Ōtomo (Emperor Kōbun), who held the court at Ōtsu on Lake Biwa.

Ōama raised the eastern provinces of Mino and Owari and swept west in a lightning campaign. The war was decided at the Seta Bridge outside Ōtsu, where Ōtomo's army broke; the young emperor took his own life. Victorious, Ōama ascended as Emperor Tenmu and used his unrivalled authority to drive the great reforms, the centralized ritsuryō codes, the histories, and the cult of the throne, that shaped the classical Japanese state. The conflict takes its name from the jinshin year in the sexagenary cycle.`
  },
  {
    id: "hirotsugu",
    sources: [ { label: "Wikipedia: Fujiwara no Hirotsugu rebellion", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Hirotsugu_rebellion" } ],
    name: "Fujiwara no Hirotsugu's Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fujiwara_no_Hirotsugu.jpg/960px-Fujiwara_no_Hirotsugu.jpg", caption: "Fujiwara no Hirotsugu. Wikimedia Commons." }
    ],
    year: 740,
    dateLabel: "740 (Tenpyō 12)",
    period: "Asuka–Nara",
    location: { name: "The Itabitsu River, on the Buzen–Chikuzen border (modern Kitakyūshū); Hirotsugu had raised his army at Dazaifu", lat: 33.8835, lon: 130.8752 },
    combatants: {
      side1: { name: "Imperial court forces", leader: "Ōno no Azumahito", forces: "~17,000" },
      side2: { name: "Rebels", leader: "Fujiwara no Hirotsugu", forces: "Kyushu levies" }
    },
    outcome: "Rebellion crushed; Hirotsugu executed, but it shook Emperor Shōmu deeply.",
    summary: "A Nara-period courtier, demoted to a post in Kyushu, raises a revolt against the government, and so unnerves the emperor that he flees the capital and turns to the buddhas for protection, ordering great Kannon images cast and sutras read in every province.",
    details: `Sidelined by rivals and posted to the frontier headquarters at Dazaifu, Fujiwara no Hirotsugu rose in revolt in 740, demanding the removal of the emperor's advisers. He mustered the levies of Kyushu, but the court's army under Ōno no Azumahito met and broke him at the Itabitsu River; Hirotsugu was captured and beheaded.

Though quickly suppressed, the revolt rattled Emperor Shōmu so badly that he abandoned the capital at Nara and wandered between temporary palaces for years. His search for spiritual protection helped drive the colossal project that defines the age, the casting of the Great Buddha of Tōdai-ji.`
  },
  {
    id: "emishi-war",
    sources: [ { label: "Wikipedia: Emishi", url: "https://en.wikipedia.org/wiki/Emishi" } ],
    name: "Conquest of the Emishi (Aterui's Resistance)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Monument_of_Aterui_in_Hirakata.jpeg", caption: "Monument to Aterui, the Emishi leader who defied the imperial army. Wikimedia Commons." }
    ],
    yearStart: 789, yearEnd: 802,
    dateLabel: "789–802 (the Emishi campaigns)",
    period: "Asuka–Nara",
    location: { name: "Isawa, Mutsu Province, the Kitakami valley (modern Iwate)", lat: 39.1447, lon: 141.1389 },
    combatants: {
      side1: { name: "Imperial forces", leader: "Ki no Kosami (789), then Sakanoue no Tamuramaro" },
      side2: { name: "The Emishi", leader: "Aterui & More" }
    },
    outcome: "After a famous early defeat, the court subdues the Emishi; Aterui surrenders in 802.",
    summary: "The long war to conquer the Emishi of the north, and the origin of the title 'Seii Taishōgun,' the barbarian-subduing great general that the shōguns would one day bear.",
    details: `For decades the imperial state pushed its frontier north into the lands of the Emishi, the indigenous peoples of Tōhoku. In 789 a great government army under Ki no Kosami was lured across the Kitakami River and crushed by the Emishi leader Aterui at the Battle of Subuse, a humiliating defeat that shocked the court.

Emperor Kanmu responded by appointing Sakanoue no Tamuramaro, who waged a relentless campaign and built fortresses deep in Emishi country. In 802, with his cause lost, Aterui surrendered and was taken to the capital and executed. The conquest extended imperial rule to the far north and gave Tamuramaro the title Seii Taishōgun, "great general who subdues the barbarians", the very office that, four centuries later, Minamoto no Yoritomo would transform into the shogunate.`
  },
  {
    id: "shigisan",
    sources: [ { label: "Wikipedia: Soga–Mononobe conflict", url: "https://en.wikipedia.org/wiki/Soga%E2%80%93Mononobe_conflict" } ],
    name: "Battle of Shigisan",
    year: 587,
    dateLabel: "587",
    period: "Asuka–Nara",
    location: { name: "Mount Shigi, Kawachi/Yamato border (modern Nara/Osaka)", lat: 34.6131, lon: 135.6689 },
    combatants: {
      side1: { name: "Soga clan (pro-Buddhist)", leader: "Soga no Umako (with Prince Shōtoku)" },
      side2: { name: "Mononobe clan (pro-kami)", leader: "Mononobe no Moriya" }
    },
    outcome: "Soga victory; the Mononobe destroyed, securing Buddhism's place in the Japanese state.",
    summary: "The Soga clan crushes the Mononobe, settling, by the sword, whether Japan would embrace Buddhism.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Shotoku_killing_Moriya_no_Omuraji.jpg",
        caption: "Battle of Shigisan. Wikimedia Commons."
      }
    ],
    details: `The arrival of Buddhism (552) had split the Yamato court: the Soga clan championed the foreign faith while the Mononobe and Nakatomi defended the native kami. In 587 the quarrel turned to open war.

Soga no Umako led a coalition, including the young Prince Shōtoku, against Mononobe no Moriya, defeating and killing him near Mount Shigi. The Soga victory secured Buddhism at the heart of the Japanese state and cleared the way for the temple-building and reform of the Asuka age.`
  },
  {
    id: "akasaka",
    sources: [ { label: "Wikipedia: Siege of Akasaka", url: "https://en.wikipedia.org/wiki/Siege_of_Akasaka" } ],
    name: "Siege of Akasaka",
    year: 1331,
    dateLabel: "1331 (Genkō 1)",
    period: "Kamakura",
    location: { name: "Akasaka Castle, Kawachi Province (modern Chihaya-Akasaka, Osaka)", lat: 34.4583, lon: 135.6361 },
    combatants: {
      side1: { name: "Imperial loyalists", leader: "Kusunoki Masashige" },
      side2: { name: "Kamakura shogunate", leader: "Hōjō forces" }
    },
    outcome: "Akasaka fell, but Kusunoki escaped by faking his death, keeping Go-Daigo's revolt alive.",
    summary: "Kusunoki Masashige's tiny garrison defies the Kamakura shogunate at Akasaka, one of the opening battles of the Genkō War and the birth of a legend of loyalty.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shimo-akasaka-jyo02.jpg/960px-Shimo-akasaka-jyo02.jpg",
        caption: "Siege of Akasaka. Wikimedia Commons."
      }
    ],
    details: `When Emperor Go-Daigo rose against the Kamakura shogunate in 1331, the warrior Kusunoki Masashige raised the imperial banner in the hills of Kawachi and held the small fort of Akasaka against a vast shogunal army.

Wildly outnumbered, he held out with ingenious improvised defences, logs, boiling water, and dummy troops, before the fort finally fell, slipping away by faking his own death in the flames. His resistance kept Go-Daigo's cause alive and made Kusunoki the very model of the loyal samurai, revered for centuries.`
  },
  {
    id: "bubaigawara",
    sources: [ { label: "Wikipedia: Battle of Bubaigawara", url: "https://en.wikipedia.org/wiki/Battle_of_Bubaigawara" } ],
    name: "Battle of Bubaigawara",
    year: 1333,
    dateLabel: "1333 (Genkō 3)",
    period: "Kamakura",
    location: { name: "Bubaigawara, Musashi Province (modern Fuchū, Tokyo)", lat: 35.6614, lon: 139.4786 },
    combatants: {
      side1: { name: "Imperial loyalists", leader: "Nitta Yoshisada" },
      side2: { name: "Kamakura shogunate", leader: "Hōjō forces" }
    },
    outcome: "Nitta victory; the road to Kamakura lay open, and the shogunate fell days later.",
    summary: "Nitta Yoshisada smashes the Hōjō field army on the Musashi plain, opening the road to Kamakura and the shogunate's fall.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Bubaigawara-kosenjou.jpg",
        caption: "Battle of Bubaigawara. Wikimedia Commons."
      }
    ],
    details: `In the summer of 1333, as Go-Daigo's revolt gathered force, Nitta Yoshisada raised the eastern warriors and marched on Kamakura itself. At Bubaigawara, on the Musashi plain, his army broke the Hōjō shogunate's defending force after fierce fighting along the Tama River.

The victory threw open the road to the shogunal capital. Within days Nitta stormed Kamakura, the Hōjō regents took their own lives at Tōshō-ji, and the Kamakura shogunate, after 150 years, was destroyed.`
  },
  {
    id: "oshu-1189",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%E5%A5%A5%E5%B7%9E%E9%AB%98%E9%A4%A8%E5%A4%A7%E5%90%88%E6%88%A6.jpg/960px-%E5%A5%A5%E5%B7%9E%E9%AB%98%E9%A4%A8%E5%A4%A7%E5%90%88%E6%88%A6.jpg",
        caption: "Ōshū Takadachi Ōgassen, a woodblock print by Utagawa Yoshitora of the fighting at Takadachi in Hiraizumi, where Minamoto no Yoshitsune was hunted down in 1189; Wikimedia Commons."
      }
    ],
    name: "Battle of Ōshū",
    year: 1189,
    dateLabel: "1189 (Bunji 5)",
    period: "Kamakura",
    location: {
      name: "Hiraizumi, Mutsu (the Northern Fujiwara capital)",
      lat: 38.987,
      lon: 141.1126
    },
    combatants: {
      side1: { name: "Kamakura government", leader: "Minamoto no Yoritomo" },
      side2: { name: "Northern Fujiwara", leader: "Fujiwara no Yasuhira" }
    },
    outcome: "Kamakura victory; the Northern Fujiwara were destroyed and Mutsu and Dewa annexed, completing Yoritomo's domination of Japan.",
    summary: "Minamoto no Yoritomo led a vast army north to crush the Northern Fujiwara of Hiraizumi after they killed the fugitive Minamoto no Yoshitsune. The fall of Hiraizumi ended the independent power of the Tōhoku and left Yoritomo master of all Japan, on the eve of his shogunate.",
    details: `Mobilising warriors from across the country in the seventh month of Bunji 5 (1189), Minamoto no Yoritomo invaded the realm of the Northern Fujiwara, who had sheltered and then killed his brother Minamoto no Yoshitsune. After a series of engagements in Mutsu his armies took the Fujiwara capital of Hiraizumi, and Fujiwara no Yasuhira was killed.

The destruction of the Northern Fujiwara annexed the great provinces of Mutsu and Dewa and removed the last power in Japan independent of Yoritomo, clearing his path to the office of shōgun three years later.`,
    sources: [
      { label: "Wikipedia: Battle of Ōshū", url: "https://en.wikipedia.org/wiki/Battle_of_%C5%8Csh%C5%AB" }
    ]
  },
  {
    id: "wada-rebellion-1213",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/NDL-DC_9369963-066_Utagawa_Kunisada_crd.jpg/960px-NDL-DC_9369963-066_Utagawa_Kunisada_crd.jpg",
        caption: "Wada Kassen Zu, a woodblock print by Utagawa Kunisada of the Wada revolt in Kamakura, Wikimedia Commons."
      }
    ],
    name: "Wada Rebellion",
    year: 1213,
    dateLabel: "May 1213 (Kenryaku 3)",
    period: "Kamakura",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    combatants: {
      side1: { name: "Wada clan", leader: "Wada Yoshimori" },
      side2: { name: "Hōjō regency", leader: "Hōjō Yoshitoki (shikken)" }
    },
    outcome: "Hōjō victory; Wada Yoshimori and his family were destroyed, tightening the Hōjō grip on the shogunate.",
    summary: "A revolt by Wada Yoshimori, head of the shogunate's Board of Retainers (samurai-dokoro), against the dominance of the Hōjō regent Yoshitoki, after Wada kinsmen were arrested for conspiracy. In fierce street fighting across Kamakura the Wada were defeated and annihilated.",
    details: `Tensions between the powerful Wada Yoshimori and the Hōjō regent Hōjō Yoshitoki erupted in 1213 when Wada kinsmen were accused of conspiracy and arrested. Yoshimori rose in arms, and the two sides fought through the streets of Kamakura.

The Wada were defeated and Yoshimori killed together with his sons; control of the samurai-dokoro passed to the Hōjō, further concentrating power in the regency that would dominate the Kamakura shogunate.`,
    sources: [
      { label: "Wikipedia: Wada Yoshimori (Wada Rebellion)", url: "https://en.wikipedia.org/wiki/Wada_Yoshimori" }
    ]
  },
  {
    id: "kasagi-1331",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Emperor-Go-Daigo-by-Ogata-Gekko-1904.png/960px-Emperor-Go-Daigo-by-Ogata-Gekko-1904.png",
        caption: "Woodblock triptych by Ogata Gekko, 1904, showing Emperor Go-Daigo, defender of Kasagi, dreaming at Kasagiyama; Wikimedia Commons."
      }
    ],
    name: "Siege of Kasagi",
    year: 1331,
    dateLabel: "September 1331 (Genkō 1)",
    period: "Kamakura",
    location: { name: "Kasagiyama (Kasagi-dera), Yamashiro, near Kyoto", lat: 34.7544, lon: 135.9422 },
    combatants: {
      side1: { name: "Emperor Go-Daigo's loyalists", leader: "Emperor Go-Daigo" },
      side2: { name: "Kamakura shogunate (Hōjō)", leader: "shogunate army (incl. Suyama Yoshitaka)" }
    },
    outcome: "Shogunate victory; Kasagi fell and Go-Daigo was captured and exiled to Oki, but the rising had begun the Genkō War that toppled the shogunate in 1333.",
    summary: "Emperor Go-Daigo raised the standard of revolt against the Kamakura shogunate from the fortified mountaintop temple of Kasagi. A shogunate army stormed it by a daring night climb and set it ablaze; Go-Daigo was captured and exiled, yet his rising had opened the Genkō War.",
    details: `In 1331 Emperor Go-Daigo, plotting to overthrow the Kamakura shogunate, fled the capital with the imperial regalia and fortified himself at the mountain temple of Kasagi. A large shogunate army surrounded the heights; a picked band scaled the cliffs by night and set the temple aflame.

Kasagi fell and Go-Daigo was captured and exiled to the Oki Islands. But the rising he had begun, the Genkō War, spread to Kusunoki Masashige's forts and, within two years, brought down the Kamakura shogunate.`,
    leadsTo: "akasaka",
    sources: [
      { label: "Wikipedia: Siege of Kasagi", url: "https://en.wikipedia.org/wiki/Siege_of_Kasagi" }
    ]
  },
  {
    id: "sunomatagawa-1181",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sunomata.JPG",
        caption: "Stone marker at Sunomata in Gifu Prefecture, inscribed as the old Genpei battlefield of Sunomata; Wikimedia Commons."
      }
    ],
    name: "Battle of Sunomata-gawa",
    year: 1181,
    dateLabel: "1181 (Yōwa 1)",
    period: "Genpei",
    location: { name: "Sunomata River, Owari–Mino border (modern Gifu)", lat: 35.353, lon: 136.684 },
    combatants: {
      side1: { name: "Minamoto", leader: "Minamoto no Yukiie" },
      side2: { name: "Taira", leader: "Taira no Koremori & Taira no Shigehira" }
    },
    outcome: "Taira victory; Minamoto no Yukiie's night attack across the river failed.",
    summary: "An early Genpei-War clash in which Minamoto no Yukiie attempted a night crossing of the Sunomata River against the Taira and was repulsed. The defeat checked the Minamoto advance toward the capital from the east for a time.",
    details: `In 1181 Minamoto no Yukiie tried to force the Sunomata River on the Owari–Mino border with a night attack on the Taira army under Taira no Koremori and Shigehira. The assault was detected and thrown back with heavy loss.

The reverse blunted the eastern Minamoto thrust toward Kyoto early in the Genpei War, before the initiative passed to Kiso Yoshinaka and then to Yoritomo's brothers.`,
    sources: [ { label: "Wikipedia: Battle of Sunomata-gawa", url: "https://en.wikipedia.org/wiki/Battle_of_Sunomata-gawa" } ]
  },
  {
    id: "hojujidono-1183",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Houjyuuji_01.jpg/960px-Houjyuuji_01.jpg",
        caption: "A gate at the Hōjū-ji in Kyoto, on the site of the Hōjūji-dono palace stormed in 1183; Wikimedia Commons."
      }
    ],
    name: "Siege of Hōjūjidono",
    year: 1183,
    dateLabel: "late 1183 (Juei 2)",
    period: "Genpei",
    location: { name: "Hōjūji Palace, Heian-kyō (eastern Kyoto)", lat: 34.988, lon: 135.772 },
    combatants: {
      side1: { name: "Kiso Yoshinaka's forces", leader: "Minamoto (Kiso) no Yoshinaka" },
      side2: { name: "Court & temple forces (for Go-Shirakawa)", leader: "Taira no Tomoyasu" }
    },
    outcome: "Yoshinaka victory; he stormed the palace and seized control of the capital and the retired emperor.",
    summary: "Kiso Yoshinaka, his position in Kyoto crumbling, attacked the Hōjūji palace of the retired Emperor Go-Shirakawa and the courtiers and warrior-monks defending it. His victory made him briefly master of the capital, and prompted Yoritomo to send an army that destroyed him weeks later.",
    details: `By late 1183 Kiso (Minamoto) Yoshinaka, who had driven the Taira from Kyoto, had fallen out with the retired Emperor Go-Shirakawa. He assaulted the Hōjūji palace, defended by court nobles and warrior-monks from Enryaku-ji and Mii-dera, and seized the retired emperor.

His seizure of power was short-lived: Yoritomo dispatched his brothers Yoshitsune and Noriyori, who crossed into the capital and broke Yoshinaka's forces at Uji in early 1184.`,
    leadsTo: "uji-1184",
    sources: [ { label: "Wikipedia: Siege of Hōjūjidono", url: "https://en.wikipedia.org/wiki/Siege_of_H%C5%8Dj%C5%ABjidono" } ]
  },
  {
    id: "uji-1184",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kagesue%2C_Takatsuna_and_Shigetada_crossing_the_Uji_river.jpg/960px-Kagesue%2C_Takatsuna_and_Shigetada_crossing_the_Uji_river.jpg",
        caption: "Print of Kajiwara Kagesue, Sasaki Takatsuna and Hatakeyama Shigetada fording the Uji River in 1184; Wikimedia Commons."
      }
    ],
    name: "Battle of Uji (1184)",
    year: 1184,
    dateLabel: "February 1184 (Genryaku 1)",
    period: "Genpei",
    location: { name: "Uji, just outside Kyoto (Yamashiro)", lat: 34.890, lon: 135.809 },
    combatants: {
      side1: { name: "Minamoto (Yoritomo's forces)", leader: "Minamoto no Yoshitsune" },
      side2: { name: "Kiso Yoshinaka's forces", leader: "Minamoto (Kiso) no Yoshinaka" }
    },
    outcome: "Yoshitsune's victory; Yoshinaka's forces broke and he was killed days later at Awazu.",
    summary: "Yoritomo's brothers Yoshitsune and Noriyori forced the Uji river crossing against Kiso Yoshinaka, who had seized the capital. Yoshinaka's army collapsed and he fled, to be hunted down and killed at Awazu, clearing the way for the Minamoto to turn on the Taira.",
    details: `In early 1184 Minamoto no Yoshitsune and Noriyori, sent by Yoritomo, attacked Kiso Yoshinaka's forces holding the approaches to Kyoto. At the Uji river, the same crossing fought over in 1180, Yoshitsune's men forced their way across and shattered Yoshinaka's army.

Yoshinaka fled and was killed at Awazu a few days later. With the Minamoto reunified under Yoritomo's command, the war turned decisively against the Taira.`,
    leadsTo: "awazu",
    sources: [ { label: "Wikipedia: Battle of Uji (1184)", url: "https://en.wikipedia.org/wiki/Battle_of_Uji_(1184)" } ]
  },
  {
    id: "kojima-1184",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Battle_of_Fujito.jpg/960px-Battle_of_Fujito.jpg",
        caption: "Utagawa Kuniyoshi's 19th century ukiyo-e print of the Battle of Fujito, also known as the Battle of Kojima, 1184; image from Wikimedia Commons."
      }
    ],
    name: "Battle of Kojima",
    year: 1184,
    dateLabel: "1184 (Genryaku 1)",
    period: "Genpei",
    location: { name: "Kojima, Bizen (Seto Inland Sea coast, modern Okayama)", lat: 34.556, lon: 133.800 },
    combatants: {
      side1: { name: "Minamoto", leader: "Minamoto no Noriyori" },
      side2: { name: "Taira", leader: "Taira no Yukimori" }
    },
    outcome: "Minamoto victory; the Taira were pushed further back toward Yashima.",
    summary: "A Minamoto victory on the Inland Sea coast as Noriyori's forces pressed the retreating Taira. It was one of the engagements that drove the Taira toward their stronghold at Yashima.",
    details: `In 1184 Minamoto no Noriyori's forces engaged the Taira at Kojima on the Bizen coast of the Inland Sea. The Minamoto prevailed, continuing to squeeze the Taira westward.

The defeat helped push the Taira back on their base at Yashima in Shikoku, the next great target of Yoshitsune's campaign.`,
    leadsTo: "yashima",
    sources: [ { label: "Wikipedia: Battle of Kojima", url: "https://en.wikipedia.org/wiki/Battle_of_Kojima" } ]
  },
  {
    id: "toi-invasion-1019",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Fujiwara_no_Takaie.png",
        caption: "Portrait of Fujiwara no Takaie, who directed the defence of northern Kyushu, drawn by Kikuchi Yōsai in 1852, from Wikimedia Commons."
      }
    ],
    name: "Toi invasion",
    year: 1019,
    dateLabel: "May 1019 (Kannin 3)",
    period: "Heian",
    location: { name: "Hakata Bay & northern Kyūshū (Chikuzen)", lat: 33.600, lon: 130.380 },
    combatants: {
      side1: { name: "Toi raiders (Jurchen pirates)" },
      side2: { name: "Dazaifu defenders", leader: "Fujiwara no Takaie" }
    },
    outcome: "Raiders repelled; they pillaged the coast and seized captives but were driven off by the Dazaifu defence.",
    summary: "A seaborne raid by Jurchen ('Toi') pirates that struck Iki, Tsushima and northern Kyūshū, killing and carrying off many. The Dazaifu government under Fujiwara no Takaie organised the defence and drove the raiders back out to sea, a rare foreign assault on Heian Japan.",
    details: `In the fifth month of 1019 a fleet of Jurchen ("Toi") raiders fell on Tsushima, Iki and the coast around Hakata Bay, killing villagers and carrying off captives and livestock. The provincial and Dazaifu forces, led by Fujiwara no Takaie, rallied and beat the raiders off.

The Toi invasion was one of the few foreign attacks on Japan in the Heian period and a reminder of the dangers of the Korea Strait long before the Mongol invasions.`,
    sources: [ { label: "Wikipedia: Toi invasion", url: "https://en.wikipedia.org/wiki/Toi_invasion" } ]
  },
  {
    id: "baekgang-663",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Map_of_the_Battle_of_Baekgang.png/960px-Map_of_the_Battle_of_Baekgang.png",
        caption: "A modern map of the 663 Baekgang campaign, showing the Yamato fleet and the Baekje revival forces against the allied Tang and Silla armies at the mouth of the Geum River; Wikimedia Commons."
      }
    ],
    name: "Battle of Baekgang",
    year: 663,
    dateLabel: "663 (Tenji 2), 8th lunar month",
    period: "Asuka–Nara",
    location: { name: "Baengma/Geum River, Korea (Yamato expeditionary fleet)", lat: 36.0, lon: 126.667 },
    combatants: {
      side1: { name: "Yamato Japan & Baekje", leader: "Abe no Hirafu; Prince Buyeo Pung (Baekje)" },
      side2: { name: "Tang China & Silla", leader: "Su Dingfang (Tang)" }
    },
    outcome: "Decisive Tang–Silla victory; the Yamato–Baekje fleet was annihilated, ending Japanese intervention in Korea and Baekje as a state.",
    summary: "Yamato Japan sent a great fleet to Korea to restore its ally Baekje, and was crushed by the Tang–Silla navy at the mouth of the Geum River. The catastrophe ended Japan's involvement on the peninsula for centuries and spurred a wave of defensive fortifications and reforms at home.",
    details: `In 663 Yamato Japan dispatched a large expeditionary fleet to the Korean peninsula to help restore the kingdom of Baekje against the Tang–Silla alliance. At the Baekgang (the lower Geum River) the Japanese and Baekje ships were trapped and burned by the Tang–Silla navy over two days of fighting.

The defeat was total: Baekje was extinguished, Japan withdrew from the continent, and the shock drove the Yamato court to build coastal forts in Kyūshū and accelerate the centralising reforms that shaped the early imperial state.`,
    sources: [ { label: "Wikipedia: Battle of Baekgang", url: "https://en.wikipedia.org/wiki/Battle_of_Baekgang" } ]
  },
  {
    id: "hayato-720",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Himekijou_Kagoshima_Japan.jpg/960px-Himekijou_Kagoshima_Japan.jpg",
        caption: "The hill of Himeki castle in Kirishima, Kagoshima, a site identified with one of the Hayato strongholds besieged in 720; photograph from Wikimedia Commons."
      }
    ],
    name: "Hayato Rebellion",
    year: 720,
    dateLabel: "720–721 (Yōrō 4–5)",
    period: "Asuka–Nara",
    location: { name: "Ōsumi Province, southern Kyūshū, coordinates approximate", lat: 31.74, lon: 130.76 },
    combatants: {
      side1: { name: "Yamato court", leader: "Ōtomo no Tabito" },
      side2: { name: "Hayato", leader: ", " }
    },
    outcome: "Imperial victory; the Hayato of southern Kyūshū were subjugated after a long campaign.",
    summary: "A revolt of the Hayato, the indigenous people of southern Kyūshū, against the expanding Nara state. The court sent a large army under Ōtomo no Tabito which, after more than a year of mountain warfare, broke Hayato resistance and brought Ōsumi and Satsuma firmly under imperial control.",
    details: `In 720 the Hayato of Ōsumi and Satsuma rose against the Nara court's tightening administration of southern Kyūshū. The court appointed Ōtomo no Tabito to lead a punitive expedition of tens of thousands.

After more than a year of sieges in the mountainous south, the rebellion was crushed. The campaign completed the incorporation of the Hayato lands into the ritsuryō state.`,
    sources: [ { label: "Wikipedia: Hayato rebellion", url: "https://en.wikipedia.org/wiki/Hayato_rebellion" } ]
  },
  {
    id: "nakamaro-764",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sakanoue_no_Karitamaro_Drawing_His_Bow_LACMA_M.84.31.256.jpg/960px-Sakanoue_no_Karitamaro_Drawing_His_Bow_LACMA_M.84.31.256.jpg",
        caption: "Tsukioka Yoshitoshi's print of 1880 showing the archer Sakanoue no Karitamaro drawing his bow on Fujiwara no Kusumaro, Nakamaro's son, during the revolt of 764; Wikimedia Commons."
      }
    ],
    name: "Fujiwara no Nakamaro Rebellion",
    year: 764,
    dateLabel: "764 (Tenpyō-hōji 8)",
    period: "Asuka–Nara",
    location: { name: "Ōmi Province, by Lake Biwa, coordinates approximate", lat: 35.3, lon: 136.05 },
    combatants: {
      side1: { name: "Fujiwara no Nakamaro's faction", leader: "Fujiwara no Nakamaro (with Prince Shioyaki)" },
      side2: { name: "Retired Empress Kōken's forces", leader: "Fujiwara no Kurajimaro" }
    },
    outcome: "Kōken's victory; Nakamaro was defeated by Lake Biwa and killed, and Kōken returned to the throne as Empress Shōtoku.",
    summary: "Also called the Emi Rebellion, this was a failed coup by the once-dominant minister Fujiwara no Nakamaro against the retired Empress Kōken and her favourite, the monk Dōkyō. Nakamaro's forces were cut off and destroyed at Lake Biwa, ending Fujiwara dominance for a generation.",
    details: `By 764 Fujiwara no Nakamaro (Emi no Oshikatsu), long the leading minister, was losing power to the retired Empress Kōken and the monk Dōkyō. He rose in revolt, but the court seized the imperial seals and bell before he could act decisively.

Nakamaro fled toward Ōmi and was caught and killed on the shores of Lake Biwa. Kōken reascended the throne as Empress Shōtoku, and Dōkyō rose to extraordinary power.`,
    sources: [ { label: "Wikipedia: Fujiwara no Nakamaro Rebellion", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Nakamaro_Rebellion" } ]
  },
  {
    id: "koshamain-1457",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Dounan12.svg/960px-Dounan12.svg.png",
        caption: "Map of the Dōnan Jūni Tate, the twelve Wajin stockades of southern Ezo; most of them fell to Koshamain's forces in 1457. Labels in Japanese. Wikimedia Commons."
      }
    ],
    name: "Koshamain's War",
    year: 1457,
    dateLabel: "1457–1458 (Chōroku)",
    period: "Muromachi",
    location: { name: "Oshima Peninsula, southern Ezo (Hokkaido), coordinates approximate", lat: 41.78, lon: 140.12 },
    combatants: {
      side1: { name: "Ainu", leader: "Koshamain" },
      side2: { name: "Wajin (Kakizaki clan)", leader: "Takeda Nobuhiro" }
    },
    outcome: "Wajin (Japanese) victory; Koshamain was killed and the Ainu rising suppressed, entrenching Japanese settlement in southern Ezo.",
    summary: "The first major war between the Ainu and the Wajin (Japanese) settlers of southern Ezo, sparked by a trade dispute and the killing of an Ainu man. Led by the chief Koshamain, the Ainu stormed most of the Wajin forts before Takeda Nobuhiro killed Koshamain and broke the rising, the foundation of the later Matsumae domain.",
    details: `In 1457 long-standing friction between Ainu and Wajin settlers on the Oshima Peninsula erupted after a Wajin smith killed an Ainu customer. The Ainu chief Koshamain led a rising that overran all but two of the Wajin stockades of southern Ezo.

Takeda Nobuhiro of the Kakizaki rallied the settlers and killed Koshamain, ending the war. The Kakizaki, later the Matsumae, emerged as the dominant Wajin power in Ezo, beginning centuries of Ainu–Wajin conflict over trade and land.`,
    sources: [ { label: "Wikipedia: Koshamain's War", url: "https://en.wikipedia.org/wiki/Koshamain%27s_War" } ]
  },
  {
    id: "kawagoe-1546",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kawagoejou.jpg/960px-Kawagoejou.jpg", caption: "The surviving honmaru palace on the site of Kawagoe Castle in Saitama, an Edo period building of 1848; Wikimedia Commons." } ], name: "Night Battle of Kawagoe", year: 1546, dateLabel: "1546 (Tenbun 15)", period: "Muromachi",
    location: { name: "Kawagoe Castle, Musashi (modern Saitama)", lat: 35.9244, lon: 139.4914 },
    combatants: { side1: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" }, side2: { name: "Uesugi coalition & Ashikaga", leader: "Uesugi Tomosada & Uesugi Norimasa" } },
    outcome: "Hōjō victory; a night attack routed a far larger besieging army and secured Hōjō dominance of the Kantō.",
    summary: "One of the most famous night attacks of the Sengoku: Hōjō Ujiyasu, badly outnumbered, relieved the besieged Kawagoe Castle with a surprise assault that shattered the great Uesugi coalition. The victory made the Later Hōjō the masters of the Kantō plain.",
    details: `In 1546 a huge coalition of the two Uesugi houses and the Kantō Kubō besieged the Hōjō garrison in Kawagoe Castle. Hōjō Ujiyasu marched to its relief and, rather than fight a pitched battle against the odds, struck at night in a co-ordinated attack with the garrison.`,
    sources: [ { label: "Wikipedia: Siege of Kawagoe Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Kawagoe_Castle" } ]
  },
  {
    id: "nagaragawa-1556",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nagararivergifu.JPG/960px-Nagararivergifu.JPG", caption: "The Nagara River at Gifu, where Saito Dosan was defeated and killed by his son Yoshitatsu in 1556; Wikimedia Commons." } ], name: "Battle of Nagara-gawa", year: 1556, dateLabel: "1556 (Kōji 2)", period: "Muromachi",
    location: { name: "Nagara River, Mino (modern Gifu)", lat: 35.4451, lon: 136.7635 },
    combatants: { side1: { name: "Saitō Yoshitatsu's forces", leader: "Saitō Yoshitatsu" }, side2: { name: "Saitō Dōsan's forces", leader: "Saitō Dōsan" } },
    outcome: "Yoshitatsu's victory; Saitō Dōsan was defeated and killed by his own son.",
    summary: "The 'Viper of Mino', Saitō Dōsan, was overthrown and killed by his son Yoshitatsu at the Nagara River. Dōsan's death, he was Nobunaga's father-in-law and ally, opened the way for Oda Nobunaga's later conquest of Mino.",
    details: `By 1556 Saitō Dōsan had fallen out with his son and heir Yoshitatsu. The two met in battle on the Nagara River near Inabayama; Dōsan, deserted by many retainers, was defeated and killed.`,
    sources: [ { label: "Wikipedia: Battle of Nagara-gawa", url: "https://en.wikipedia.org/wiki/Battle_of_Nagara-gawa" } ]
  },
  {
    id: "azukizaka-1564",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Azukizaka_1564.JPG/960px-Azukizaka_1564.JPG", caption: "A woodblock triptych by Tsukioka Yoshitoshi, published in 1873, of the 1564 fighting at Daiju-ji between Matsudaira men and the Mikawa Ikko-ikki; Wikimedia Commons." } ], name: "Battle of Azukizaka (1564)", year: 1564, dateLabel: "1564 (Eiroku 7)", period: "Muromachi",
    location: { name: "Okazaki, Mikawa (modern Aichi)", lat: 34.9303, lon: 137.1783 },
    combatants: { side1: { name: "Mikawa Ikkō-ikki", leader: "Ikkō-ikki leaders" }, side2: { name: "Matsudaira clan", leader: "Matsudaira Motoyasu (Tokugawa Ieyasu)" } },
    outcome: "Matsudaira victory; the young Ieyasu crushed the Ikkō-ikki revolt and consolidated his hold on Mikawa.",
    summary: "The future Tokugawa Ieyasu put down the great Ikkō-ikki uprising in his home province of Mikawa, in which many of his own retainers had joined the rebels. His victory ended the threat of the warrior-monk leagues to his power and unified Mikawa behind him.",
    details: `In 1564 the Jōdo-Shinshū Ikkō-ikki of Mikawa rose against Matsudaira Motoyasu (Tokugawa Ieyasu), splitting his vassals on lines of faith. Ieyasu defeated the leagues and then suppressed their temples, securing his base for the campaigns to come.`,
    sources: [ { label: "Wikipedia: Battle of Azukizaka (1564)", url: "https://en.wikipedia.org/wiki/Battle_of_Azukizaka_(1564)" } ]
  },
  {
    id: "nagashima-1571",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Battle_of_Nagashima.jpg/960px-Battle_of_Nagashima.jpg", caption: "A nineteenth century triptych by Utagawa Yoshikazu showing the fighting at Nagashima between Oda samurai and the Ikko-ikki; Wikimedia Commons." } ], name: "Sieges of Nagashima (first)", year: 1571, dateLabel: "1571 (Genki 2)", period: "Muromachi",
    location: { name: "Nagashima fortress, Owari (modern Mie)", lat: 35.0886, lon: 136.6981 },
    combatants: { side1: { name: "Ikkō-ikki", leader: "Ikkō-ikki of Nagashima" }, side2: { name: "Oda", leader: "Oda Nobunaga (Shibata Katsuie)" } },
    outcome: "Ikkō-ikki victory; Nobunaga's first assault on the river fortress was repelled with heavy loss.",
    summary: "The first of Oda Nobunaga's three campaigns against the Ikkō-ikki stronghold of Nagashima, set amid the rivers of the Kiso delta. This assault failed bloodily, but Nobunaga returned, and in 1574 annihilated the fortress and its defenders.",
    details: `In 1571 Nobunaga launched his first attack on the Ikkō-ikki river-fortress of Nagashima. The marshy terrain and fierce defence threw back the Oda army, wounding the general Shibata Katsuie. Nobunaga would besiege Nagashima twice more, destroying it utterly in 1574.`,
    sources: [ { label: "Wikipedia: Sieges of Nagashima", url: "https://en.wikipedia.org/wiki/Sieges_of_Nagashima" } ]
  },
  {
    id: "ichijodani-1573",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Fukugen-madhinami_of_Ichijodani_Asakura_Family_Historic_Ruins07s3s4500.jpg/960px-Fukugen-madhinami_of_Ichijodani_Asakura_Family_Historic_Ruins07s3s4500.jpg", caption: "The reconstructed street of the Asakura castle town at Ichijodani in Fukui, rebuilt on the excavated foundations of the town Nobunaga burned in 1573; Wikimedia Commons." } ], name: "Siege of Ichijōdani Castle", year: 1573, dateLabel: "1573 (Tenshō 1)", period: "Azuchi–Momoyama",
    location: { name: "Ichijōdani, Echizen (modern Fukui)", lat: 35.9995, lon: 136.2956 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga" }, side2: { name: "Asakura", leader: "Asakura Yoshikage" } },
    outcome: "Oda victory; the Asakura clan was destroyed and their castle-town burned.",
    summary: "Oda Nobunaga overran the Asakura capital of Ichijōdani, ending the clan that had long defied him. The fall of the Asakura, and of the Azai days later, removed two of the chief members of the anti-Nobunaga coalition.",
    details: `In 1573 Nobunaga drove into Echizen and stormed the Asakura's fortified valley-capital of Ichijōdani. Asakura Yoshikage fled and was forced to take his own life, and the once-splendid castle town was put to the torch.`,
    sources: [ { label: "Wikipedia: Siege of Ichijōdani Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Ichij%C5%8Ddani_Castle" } ]
  },
  {
    id: "otate-1578",
    images: [ { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Honmaru_of_Kasugayama_Castle.jpg/960px-Honmaru_of_Kasugayama_Castle.jpg", caption: "The honmaru enclosure on Kasugayama Castle in Joetsu, the Uesugi seat that Kagekatsu seized when the succession war opened; Wikimedia Commons." } ], name: "Siege of Otate (Otate no Ran)", year: 1578, dateLabel: "1578–1579 (Tenshō 6–7)", period: "Azuchi–Momoyama",
    location: { name: "Otate, Kasugayama, Echigo (modern Niigata)", lat: 37.1673, lon: 138.2356 },
    combatants: { side1: { name: "Uesugi Kagetora's faction", leader: "Uesugi Kagetora" }, side2: { name: "Uesugi Kagekatsu's faction", leader: "Uesugi Kagekatsu" } },
    outcome: "Kagekatsu's victory; he won the succession after defeating his rival, who took his own life.",
    summary: "The civil war over the succession to Uesugi Kenshin, who died in 1578 leaving two adopted heirs. Uesugi Kagekatsu defeated his rival Kagetora and secured the Uesugi domain, though the struggle left the clan weakened.",
    details: `Uesugi Kenshin's sudden death in 1578 left his adopted sons Kagekatsu and Kagetora contesting the inheritance. The war centred on the Otate residence at Kasugayama; Kagekatsu prevailed and Kagetora killed himself, but the bloodletting sapped Uesugi strength.`,
    sources: [ { label: "Wikipedia: Siege of Otate", url: "https://en.wikipedia.org/wiki/Siege_of_Otate" } ]
  },
  {
    id: "tottori-1581", name: "Siege of Tottori", year: 1581, dateLabel: "1581 (Tenshō 9)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tottori_castle04_2816.jpg/960px-Tottori_castle04_2816.jpg",
        caption: "The stone ramparts of Tottori Castle in Tottori Prefecture, the fortress starved into surrender in 1581, Wikimedia Commons."
      }
    ],
    location: { name: "Tottori Castle, Inaba (modern Tottori)", lat: 35.5074, lon: 134.24 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Mōri", leader: "Kikkawa Tsuneie" } },
    outcome: "Hideyoshi victory; the garrison was starved into surrender.",
    summary: "Hideyoshi took Tottori Castle not by storm but by starvation, buying up the region's rice beforehand and blockading the fortress until famine forced its surrender. The commander Kikkawa Tsuneie gave his life to save the garrison.",
    details: `In 1581 Hashiba Hideyoshi blockaded Tottori after quietly cornering the local rice supply. The defenders, swollen with refugees, starved within months; Kikkawa Tsuneie surrendered and committed suicide to spare his men in one of the cruellest sieges of the age.`,
    sources: [ { label: "Wikipedia: Siege of Tottori", url: "https://en.wikipedia.org/wiki/Siege_of_Tottori" } ]
  },
  {
    id: "takamatsu-1582", name: "Siege of Takamatsu", year: 1582, dateLabel: "April–June 1582 (Tenshō 10)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Takamatsumizuseme2.jpg/960px-Takamatsumizuseme2.jpg",
        caption: "Nishiki-e triptych by Utagawa Kuniyoshi of the flooding of Takamatsu Castle, published in 1860, Wikimedia Commons."
      }
    ],
    location: { name: "Takamatsu Castle, Bitchū (modern Okayama)", lat: 34.693, lon: 133.822 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Mōri", leader: "Shimizu Muneharu" } },
    outcome: "Peace negotiated; Hideyoshi withdrew on news of the Honnō-ji Incident, beginning his lightning march back to avenge Nobunaga.",
    summary: "Hideyoshi besieged Takamatsu by damming a river and flooding the castle into an island. Mid-siege came word that Nobunaga had been killed at the Honnō-ji; Hideyoshi swiftly made peace (the commander Shimizu Muneharu taking his own life) and raced east, the 'Great Return' that led to Yamazaki.",
    details: `In 1582 Hideyoshi flooded Takamatsu Castle with a great earthwork dam. When news arrived of Nobunaga's death at the Honnō-ji, Hideyoshi concealed it, made a hasty peace under which Shimizu Muneharu committed suicide, and marched his army back to the capital with astonishing speed.`,
    leadsTo: "yamazaki",
    sources: [ { label: "Wikipedia: Siege of Takamatsu", url: "https://en.wikipedia.org/wiki/Siege_of_Takamatsu" } ]
  },
  {
    id: "tenmokuzan-1582", name: "Battle of Tenmokuzan", year: 1582, dateLabel: "March 1582 (Tenshō 10)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Katsuyori_died_at_Mt.Tenmoku_01.jpg/960px-Katsuyori_died_at_Mt.Tenmoku_01.jpg",
        caption: "Ukiyo-e triptych of the death of Takeda Katsuyori at Mount Tenmoku; Wikimedia Commons."
      }
    ],
    location: { name: "Mt Tenmoku, Kai (modern Yamanashi)", lat: 35.6507, lon: 138.8124 },
    combatants: { side1: { name: "Oda–Tokugawa", leader: "Oda Nobutada" }, side2: { name: "Takeda", leader: "Takeda Katsuyori" } },
    outcome: "Oda victory; Takeda Katsuyori was hunted down and the Takeda clan eradicated.",
    summary: "The last stand of the Takeda. As Oda and Tokugawa armies overran Kai, Takeda Katsuyori, abandoned by his vassals, made a final stand and took his own life at Mt Tenmoku, ending the great clan of Shingen.",
    details: `By 1582 the Oda–Tokugawa invasion of Kai had collapsed Takeda support. Deserted by all but a handful of retainers, Takeda Katsuyori was cornered at Mt Tenmoku and killed himself with his family, extinguishing the house that Takeda Shingen had raised to greatness.`,
    sources: [ { label: "Wikipedia: Battle of Tenmokuzan", url: "https://en.wikipedia.org/wiki/Battle_of_Tenmokuzan" } ]
  },
  {
    id: "kunohe-1591", name: "Kunohe Rebellion", year: 1591, dateLabel: "1591 (Tenshō 19)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Kunohejou001.jpg",
        caption: "Earth ramparts and a dry moat surviving at the site of Kunohe Castle in Ninohe, Iwate, besieged by the Toyotomi army in 1591; Wikimedia Commons."
      }
    ],
    location: { name: "Kunohe Castle, Mutsu (modern Ninohe, Iwate)", lat: 40.2667, lon: 141.3036 },
    combatants: { side1: { name: "Toyotomi", leader: "Toyotomi Hidetsugu & Gamō Ujisato" }, side2: { name: "Kunohe", leader: "Kunohe Masazane" } },
    outcome: "Toyotomi victory; the last armed resistance to Hideyoshi was crushed, completing the unification of Japan.",
    summary: "A revolt by Kunohe Masazane in the far north against Hideyoshi's new order, the final battle of the Sengoku unification. A vast Toyotomi army overwhelmed Kunohe Castle, and with its fall Hideyoshi's authority reached every corner of Japan.",
    details: `In 1591 Kunohe Masazane rose against the Nanbu lord backed by Hideyoshi. Hideyoshi sent an enormous coalition army north under his nephew Hidetsugu; Kunohe Castle fell and its defenders were executed. The campaign completed the unification of Japan begun by Nobunaga.`,
    sources: [ { label: "Wikipedia: Kunohe rebellion", url: "https://en.wikipedia.org/wiki/Kunohe_rebellion" } ]
  },
  {
    id: "gassantoda-1543", name: "Sieges of Gassantoda Castle", year: 1543, dateLabel: "1542–1543 (Tenbun 11–12)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%E6%9C%88%E5%B1%B1.jpg/960px-%E6%9C%88%E5%B1%B1.jpg",
        caption: "The ruins of Gassan-Toda Castle at Yasugi in Izumo province, now Shimane Prefecture; Wikimedia Commons."
      }
    ],
    location: { name: "Gassantoda Castle, Izumo (modern Shimane)", lat: 35.3636, lon: 133.1828 },
    combatants: { side1: { name: "Ōuchi & Mōri", leader: "Ōuchi Yoshitaka & Mōri Motonari" }, side2: { name: "Amago", leader: "Amago Haruhisa" } },
    outcome: "Amago victory; the Ōuchi–Mōri assault on the mountain fortress failed and was driven back.",
    summary: "Ōuchi Yoshitaka, with the young Mōri Motonari, marched deep into Izumo to storm the Amago stronghold of Gassantoda, and failed badly. The repulse shattered Ōuchi prestige and helped set Motonari on his own path to power.",
    details: `In 1542–43 Ōuchi Yoshitaka invaded Izumo to destroy the Amago at their great mountain castle of Gassantoda. The siege collapsed, the retreat turned disastrous, and Ōuchi power never fully recovered. (The Amago were finally broken at Gassantoda by Mōri Motonari two decades later.)`,
    sources: [ { label: "Wikipedia: Sieges of Gassantoda Castle", url: "https://en.wikipedia.org/wiki/Sieges_of_Gassantoda_Castle" } ]
  },
  {
    id: "ino-1556", name: "Battle of Inō", year: 1556, dateLabel: "1556 (Kōji 2)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/In%C5%8Dgahara_Battlefield.jpg/960px-In%C5%8Dgahara_Battlefield.jpg",
        caption: "Memorial stones marking the Inogahara battlefield in Nagoya, Aichi, Wikimedia Commons."
      }
    ],
    location: { name: "Inō, Owari (modern Aichi)", lat: 35.2061, lon: 136.8905 },
    combatants: { side1: { name: "Oda Nobunaga's forces", leader: "Oda Nobunaga" }, side2: { name: "Oda Nobuyuki's forces", leader: "Oda Nobuyuki" } },
    outcome: "Nobunaga's victory; he defeated his younger brother's revolt and consolidated the Oda house.",
    summary: "An Oda family civil war in which Nobunaga crushed the revolt of his younger brother Nobuyuki and the elders backing him. The victory secured Nobunaga's leadership of the clan at the outset of his rise.",
    details: `In 1556 retainers led by Shibata Katsuie and Hayashi Hidesada backed Nobunaga's brother Nobuyuki against him. Nobunaga won the field at Inō; he pardoned Nobuyuki once, then had him killed when he plotted again, ending the threat from within his own house.`,
    sources: [ { label: "Wikipedia: Battle of Inō", url: "https://en.wikipedia.org/wiki/Battle_of_In%C5%8D" } ]
  },
  {
    id: "odawara-1561", name: "Siege of Odawara (1561)", year: 1561, dateLabel: "1561 (Eiroku 4)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Odawara_2006-02-21_c.jpg/960px-Odawara_2006-02-21_c.jpg",
        caption: "The reconstructed keep of Odawara Castle in Kanagawa Prefecture, the Hojo stronghold that Uesugi Kenshin besieged in 1561; Wikimedia Commons."
      }
    ],
    location: { name: "Odawara Castle, Sagami (modern Kanagawa)", lat: 35.2508, lon: 139.1536 },
    combatants: { side1: { name: "Uesugi coalition", leader: "Uesugi Kenshin" }, side2: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" } },
    outcome: "Hōjō held; Kenshin's great coalition could not take Odawara and withdrew.",
    summary: "Uesugi Kenshin led a vast Kantō coalition against the Hōjō capital of Odawara, but the fortress held and supply forced him to retreat. It showed both Kenshin's reach and the strength of Odawara's defences, which would defy Shingen too, and only fall to Hideyoshi in 1590.",
    details: `In 1561 Uesugi Kenshin marched a huge allied army to the walls of Odawara, but the Hōjō refused battle behind their ramparts and Kenshin, unable to sustain the siege, withdrew. Odawara's reputation for impregnability grew.`,
    sources: [ { label: "Wikipedia: Siege of Odawara (1561)", url: "https://en.wikipedia.org/wiki/Siege_of_Odawara_(1561)" } ]
  },
  {
    id: "minowa-1566", name: "Siege of Minowa", year: 1566, dateLabel: "1566 (Eiroku 9)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Minowajyo.jpg/960px-Minowajyo.jpg",
        caption: "A stone marker at the ruins of Minowa Castle in Gunma Prefecture, the Nagano clan fortress taken by Takeda Shingen; Wikimedia Commons."
      }
    ],
    location: { name: "Minowa Castle, Kōzuke (modern Gunma)", lat: 36.4044, lon: 138.9514 },
    combatants: { side1: { name: "Nagano (Uesugi-allied)", leader: "Kamiizumi Hidetsuna" }, side2: { name: "Takeda", leader: "Takeda Shingen" } },
    outcome: "Takeda victory; Minowa fell, extending Takeda power into Kōzuke.",
    summary: "Takeda Shingen took the Nagano clan's castle of Minowa after a long contest for western Kōzuke. Among its defenders was the famed swordsman Kamiizumi Hidetsuna, founder of the Shinkage-ryū.",
    details: `By 1566 Takeda Shingen had ground down the Nagano of Kōzuke; with their leader dead, Minowa fell. Its capture pushed Takeda influence into the Kantō and against the Uesugi.`,
    sources: [ { label: "Wikipedia: Siege of Minowa", url: "https://en.wikipedia.org/wiki/Siege_of_Minowa" } ]
  },
  {
    id: "nanao-1577", name: "Siege of Nanao", year: 1577, dateLabel: "1576–1577 (Tenshō 4–5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nanaojo-old-rute.JPG/960px-Nanaojo-old-rute.JPG",
        caption: "The old approach road on the mountain at Nanao Castle in Ishikawa Prefecture, the Hatakeyama seat besieged by Uesugi Kenshin; Wikimedia Commons."
      }
    ],
    location: { name: "Nanao Castle, Noto (modern Ishikawa)", lat: 37.0092, lon: 136.9842 },
    combatants: { side1: { name: "Uesugi", leader: "Uesugi Kenshin" }, side2: { name: "Hatakeyama", leader: "Chō Tsugutsura" } },
    outcome: "Uesugi victory; Nanao fell to Kenshin, who then defeated an Oda relief army at Tedorigawa.",
    summary: "Uesugi Kenshin captured the great Noto fortress of Nanao after a long siege and an inside betrayal. With Nanao taken, he turned to meet Oda Nobunaga's relief army and crushed it at Tedorigawa.",
    details: `Kenshin besieged Nanao through 1576–77; the castle fell amid plague and treachery within. Days later he routed the approaching Oda army at the Tedori River, proving even Nobunaga's forces could be beaten in the field.`,
    leadsTo: "tedorigawa",
    sources: [ { label: "Wikipedia: Siege of Nanao", url: "https://en.wikipedia.org/wiki/Siege_of_Nanao" } ]
  },
  {
    id: "itami-1579", name: "Siege of Itami (1579)", year: 1579, dateLabel: "1578–1579 (Tenshō 6–7)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Itamij15.jpg/960px-Itamij15.jpg",
        caption: "A period map of the Settsu campaign from the war chronicle Itami Araki gunki, showing Itami Castle and the Oda positions around it; Wikimedia Commons."
      }
    ],
    location: { name: "Arioka (Itami) Castle, Settsu (modern Hyōgo)", lat: 34.7801, lon: 135.4214 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobutada (for Nobunaga)" }, side2: { name: "Araki Murashige's forces", leader: "Araki Murashige" } },
    outcome: "Oda victory; the revolt was crushed, Araki fled, and his family and retainers were executed.",
    summary: "Nobunaga's general Araki Murashige rebelled and held out at Arioka (Itami) Castle for over a year. When it fell, Araki escaped but Nobunaga had his abandoned family and hundreds of followers put to death in a notorious reprisal.",
    details: `Araki Murashige's defection in 1578 threatened Nobunaga's flank near the capital. The long siege of Arioka ended in 1579; Araki slipped away, but Nobunaga's savage execution of his household became one of the war's most infamous episodes.`,
    sources: [ { label: "Wikipedia: Siege of Itami (1579)", url: "https://en.wikipedia.org/wiki/Siege_of_Itami_(1579)" } ]
  },
  {
    id: "miki-1580", name: "Siege of Miki", year: 1580, dateLabel: "1578–1580 (Tenshō 6–8)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mikij31.jpg/960px-Mikij31.jpg",
        caption: "Painted screen map of Hashiba Hideyoshi's encirclement of Miki Castle, held at Unryuji temple; Wikimedia Commons."
      }
    ],
    location: { name: "Miki Castle, Harima (modern Hyōgo)", lat: 34.7999, lon: 134.9878 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Bessho", leader: "Bessho Nagaharu" } },
    outcome: "Hideyoshi victory; the garrison was starved out and Bessho Nagaharu took his own life to save his men.",
    summary: "Hideyoshi's two-year blockade of Miki Castle, the 'starvation of Miki', broke the Bessho clan's revolt in Harima. Like Tottori after it, it showed Hideyoshi's preference for siege and supply over costly assault.",
    details: `From 1578 Hideyoshi ringed Miki with forts and cut its supply lines. After nearly two years of famine, Bessho Nagaharu surrendered and committed suicide in exchange for his soldiers' lives, opening Harima to the Oda advance west.`,
    sources: [ { label: "Wikipedia: Siege of Miki", url: "https://en.wikipedia.org/wiki/Siege_of_Miki" } ]
  },
  {
    id: "arai-1516", name: "Siege of Arai", year: 1516, dateLabel: "1516 (Eishō 13)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Soun_Hojo_portrait.jpg",
        caption: "Portrait of Hōjō Sōun (1432 to 1519), who besieged and took Arai Castle in 1516; Wikimedia Commons."
      }
    ],
    location: { name: "Arai Castle, Miura Peninsula, Sagami (modern Kanagawa)", lat: 35.1597, lon: 139.6128 },
    combatants: { side1: { name: "Miura & Ōgigayatsu Uesugi", leader: "Miura Yoshiatsu" }, side2: { name: "Later Hōjō", leader: "Hōjō Sōun" } },
    outcome: "Hōjō victory; the Miura were destroyed and Hōjō Sōun completed his conquest of Sagami.",
    summary: "Hōjō Sōun's final blow against the Miura clan, ending a long war for Sagami. The fall of Arai made Sōun, often called the first Sengoku daimyō, master of the province and founded the power of the Later Hōjō.",
    details: `After years of war, Hōjō Sōun cornered the Miura at their last stronghold of Arai on the Miura Peninsula. The defenders fell in 1516, completing Sōun's takeover of Sagami and laying the foundation of a Hōjō realm that would dominate the Kantō for five generations.`,
    sources: [ { label: "Wikipedia: Siege of Arai", url: "https://en.wikipedia.org/wiki/Siege_of_Arai" } ]
  },
  {
    id: "odawara-1569", name: "Siege of Odawara (1569)", year: 1569, dateLabel: "1569 (Eiroku 12)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/OdawaraJo1.jpg/960px-OdawaraJo1.jpg",
        caption: "The reconstructed keep of Odawara Castle in Kanagawa, the Hojo stronghold Takeda Shingen failed to take in 1569; Wikimedia Commons."
      }
    ],
    location: { name: "Odawara Castle, Sagami (modern Kanagawa)", lat: 35.251, lon: 139.1535 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen" }, side2: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" } },
    outcome: "Hōjō held; Takeda Shingen burned the town but could not take the castle and withdrew.",
    summary: "Takeda Shingen drove into the Kantō and reached the walls of Odawara, but, like Uesugi Kenshin before him, could not crack the Hōjō fortress. He burned the castle town and pulled back, fighting the Hōjō again at Mimasetōge on the retreat.",
    details: `In 1569 Shingen invaded Hōjō territory and approached Odawara, but the great castle held. He withdrew after a few days, and on the way home beat off a Hōjō pursuit at Mimasetōge.`,
    sources: [ { label: "Wikipedia: Siege of Odawara (1569)", url: "https://en.wikipedia.org/wiki/Siege_of_Odawara_(1569)" } ]
  },
  {
    id: "noda-1573", name: "Siege of Noda Castle", year: 1573, dateLabel: "1573 (Genki 4)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Takeda_Daizentay%C5%AB_Harunobu_Ny%C5%ABd%C5%8D_Shingen.jpg/960px-Takeda_Daizentay%C5%AB_Harunobu_Ny%C5%ABd%C5%8D_Shingen.jpg",
        caption: "Takeda Shingen, the commander who besieged Noda Castle, in an 1879 woodblock print by Tsukioka Yoshitoshi; Wikimedia Commons."
      }
    ],
    location: { name: "Noda Castle, Mikawa (modern Aichi)", lat: 34.882, lon: 137.4684 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen" }, side2: { name: "Tokugawa garrison", leader: "Suganuma Sadamichi" } },
    outcome: "Takeda took the castle, but Shingen was wounded during the siege and died soon after, ending his westward advance.",
    summary: "Takeda Shingen's last siege. He captured the small Tokugawa fort of Noda, but fell ill or was wounded there and died on the march home, a death that saved the embattled Tokugawa and Oda from his advance on Kyoto.",
    details: `In 1573 Shingen, marching west after crushing Ieyasu at Mikatagahara, besieged and took Noda Castle. There he was stricken (tradition says shot by a marksman); he died during the withdrawal to Kai, and the great Takeda offensive collapsed with him.`,
    sources: [ { label: "Wikipedia: Siege of Noda Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Noda_Castle" } ]
  },
  {
    id: "takato-1582", name: "Siege of Takatō (1582)", year: 1582, dateLabel: "March 1582 (Tenshō 10)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Burg_Takato_Plan_2.jpg/960px-Burg_Takato_Plan_2.jpg",
        caption: "Annotated plan of Takatō Castle in Ina, Nagano, the fortress besieged in 1582, from Wikimedia Commons."
      }
    ],
    location: { name: "Takatō Castle, Shinano (modern Nagano)", lat: 35.8332, lon: 138.0625 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobutada" }, side2: { name: "Takeda", leader: "Nishina Morinobu" } },
    outcome: "Oda victory; the lone Takeda castle to resist was stormed, days before the clan's final destruction at Tenmokuzan.",
    summary: "As the Oda–Tokugawa invasion swept through Takeda lands in 1582, every castle surrendered except Takatō, held by Katsuyori's brother Nishina Morinobu. His defiant last stand and death came just before the Takeda were extinguished at Tenmokuzan.",
    details: `In the 1582 conquest of the Takeda, only Takatō resisted. Nishina Morinobu rejected Nobutada's demand to surrender and fought to the death when the castle was stormed, a celebrated act of loyalty in the clan's final days.`,
    leadsTo: "tenmokuzan-1582",
    sources: [ { label: "Wikipedia: Siege of Takatō (1582)", url: "https://en.wikipedia.org/wiki/Siege_of_Takat%C5%8D_(1582)" } ]
  },
  {
    id: "oshi-1590", name: "Siege of Oshi", year: 1590, dateLabel: "1590 (Tenshō 18)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Oshi-jo_fukugen_001.jpg/960px-Oshi-jo_fukugen_001.jpg",
        caption: "The reconstructed three-storey turret of Oshi Castle in Gyōda, Saitama, from Wikimedia Commons."
      }
    ],
    location: { name: "Oshi Castle, Musashi (modern Saitama)", lat: 36.1372, lon: 139.4529 },
    combatants: { side1: { name: "Later Hōjō garrison", leader: "Narita; Kaihime" }, side2: { name: "Toyotomi", leader: "Ishida Mitsunari" } },
    outcome: "The 'floating castle' held against a water attack and surrendered only after Odawara itself fell.",
    summary: "During Hideyoshi's Odawara campaign, Ishida Mitsunari tried to take Oshi by damming a river and flooding it, but the 'floating castle' withstood the water attack. It gave up only after the main Hōjō capital surrendered, one of the campaign's few defensive successes.",
    details: `In 1590, while Hideyoshi besieged Odawara, Ishida Mitsunari attempted to drown Oshi Castle behind an earthwork dam. The waters failed to break the defence, remembered for the warrior-woman Kaihime, and Oshi held until news came that Odawara had fallen.`,
    sources: [ { label: "Wikipedia: Siege of Oshi", url: "https://en.wikipedia.org/wiki/Siege_of_Oshi" } ]
  },
  {
    id: "iwaya-1585", name: "Siege of Iwaya Castle", year: 1585, dateLabel: "1585 (Tenshō 13)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Iwaya-jyou.jpg",
        caption: "Monument marking the site of Iwaya Castle in Dazaifu, Fukuoka, from Wikimedia Commons."
      }
    ],
    location: { name: "Iwaya Castle, Chikuzen (modern Fukuoka)", lat: 33.5258, lon: 130.5203 },
    combatants: { side1: { name: "Shimazu", leader: "Shimazu Yoshihisa" }, side2: { name: "Ōtomo (Takahashi)", leader: "Takahashi Jōun (Shigetane)" } },
    outcome: "Shimazu victory; the garrison was annihilated after a celebrated last-ditch defence.",
    summary: "As the Shimazu drove north to conquer Kyūshū, the Ōtomo general Takahashi Jōun made a famous last stand at Iwaya with a tiny garrison against an overwhelming Shimazu army, dying with all his men. The heroic defence bought time before Hideyoshi's intervention saved the Ōtomo.",
    details: `In 1585 the Shimazu besieged Iwaya, held by Takahashi Jōun with only a few hundred men. They fought to the last and were wiped out, but their stand delayed the Shimazu advance, and the next year Hideyoshi's invasion of Kyūshū turned the tide.`,
    sources: [ { label: "Wikipedia: Siege of Iwaya Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Iwaya_Castle" } ]
  },
  {
    id: "hiketa-1583", name: "Siege of Hiketa", year: 1583, dateLabel: "1583 (Tenshō 11)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Hiketa_jyou.jpg/960px-Hiketa_jyou.jpg",
        caption: "Surviving stone walls of Hiketa Castle in Higashikagawa, Kagawa, from Wikimedia Commons."
      }
    ],
    location: { name: "Hiketa, Sanuki (modern Kagawa, Shikoku)", lat: 34.2337, lon: 134.4084 },
    combatants: { side1: { name: "Chōsokabe", leader: "Chōsokabe Motochika" }, side2: { name: "Toyotomi (Sengoku)", leader: "Sengoku Hidehisa" } },
    outcome: "Chōsokabe victory; the repulse of Sengoku Hidehisa helped Motochika complete his conquest of Shikoku.",
    summary: "Chōsokabe Motochika defeated a Toyotomi-allied force under Sengoku Hidehisa at Hiketa in eastern Sanuki, a step in his bid to unify all of Shikoku, a dream Hideyoshi's great invasion would end two years later.",
    details: `In 1583 Chōsokabe Motochika beat back Sengoku Hidehisa at Hiketa, tightening his grip on Sanuki and bringing him close to ruling all four provinces of Shikoku. Hideyoshi's invasion of 1585 would force his submission.`,
    sources: [ { label: "Wikipedia: Siege of Hiketa", url: "https://en.wikipedia.org/wiki/Siege_of_Hiketa" } ]
  },
  {
    id: "muraki-1554", name: "Battle of Muraki Castle", year: 1554, dateLabel: "1554 (Tenbun 23)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Oda-Nobunaga-by-Utagawa-Kuniyoshi.png/960px-Oda-Nobunaga-by-Utagawa-Kuniyoshi.png",
        caption: "Woodblock portrait of Oda Nobunaga by Utagawa Kuniyoshi; Wikimedia Commons."
      }
    ],
    location: { name: "Muraki Castle, Owari (modern Aichi)", lat: 34.9967, lon: 136.9689 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga (with the Mizuno)" }, side2: { name: "Imagawa", leader: "Imagawa garrison (Yoshimoto / Sessai Chōrō)" } },
    outcome: "Oda victory; the Imagawa-held castle was stormed and taken.",
    summary: "One of the young Oda Nobunaga's earliest notable victories: he stormed the Imagawa-held fort of Muraki to relieve his Mizuno allies, reportedly using arquebuses fired in relays, an early sign of the gunnery that would later define his career.",
    details: `In early 1554 the twenty-year-old Nobunaga crossed into the contested Owari–Mikawa borderland to break Imagawa pressure on his Mizuno allies. He assaulted Muraki Castle directly, and chronicles credit him with keeping a steady fire going by rotating teams of gunners, a tactic he would refine over the next two decades. The castle fell, an early hint of the commander he would become.`,
    sources: [ { label: "Wikipedia: Battle of Muraki Castle", url: "https://en.wikipedia.org/wiki/Battle_of_Muraki_Castle" } ]
  },
  {
    id: "katsurayama-1557", name: "Siege of Katsurayama", year: 1557, dateLabel: "1557 (Kōji 3)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Katsurayamajyo.jpg",
        caption: "Marker post at the ruins of Katsurayama Castle in Nagano; Wikimedia Commons."
      }
    ],
    location: { name: "Katsurayama Castle, Shinano (modern Nagano)", lat: 36.6709, lon: 138.1662 },
    combatants: { side1: { name: "Takeda", leader: "Baba Nobuharu" }, side2: { name: "Uesugi", leader: "Ochiai Haruyoshi" } },
    outcome: "Takeda victory; the garrison was annihilated and the castle destroyed.",
    summary: "During the third Kawanakajima campaign, Takeda troops under Baba Nobuharu overran the Uesugi-aligned fort of Katsurayama north of Zenkō-ji, wiping out its garrison, one episode in the long Takeda–Uesugi struggle for northern Shinano.",
    details: `In the spring of 1557, as Takeda Shingen and Uesugi Kenshin fought their drawn-out contest over Shinano, Baba Nobuharu stormed Katsurayama, a hill fort guarding the approaches to Zenkō-ji. The defenders were overwhelmed and the castle razed. The campaign would culminate four years later in the fourth and bloodiest battle of Kawanakajima.`,
    sources: [ { label: "Wikipedia: Siege of Katsurayama", url: "https://en.wikipedia.org/wiki/Siege_of_Katsurayama" } ]
  },
  {
    id: "toishi-1550", name: "Sieges of Toishi", yearStart: 1550, yearEnd: 1551, dateLabel: "1550–1551 (Tenbun 19–20)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Toishijyo.JPG/960px-Toishijyo.JPG",
        caption: "The hill of Toishi Castle in Ueda, Nagano; Wikimedia Commons."
      }
    ],
    location: { name: "Toishi Castle, Shinano (modern Ueda, Nagano)", lat: 36.4245, lon: 138.2915 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen / Sanada Yukitaka" }, side2: { name: "Murakami", leader: "Murakami Yoshikiyo" } },
    outcome: "Takeda victory (1551), after a costly repulse in 1550.",
    summary: "Two linked actions over a Murakami stronghold in Shinano. Takeda Shingen's 1550 assault ended in a bloody repulse remembered as the 'Toishi collapse', one of his worst defeats, before the castle fell in 1551 to the stratagem of Sanada Yukitaka, beginning the Sanada family's rise.",
    details: `Toishi guarded Murakami Yoshikiyo's lands in northern Shinano. Shingen's direct attack in 1550 was thrown back with heavy loss, the *Toishi-kuzure*, a rare and humiliating Takeda defeat. The following year the castle was taken not by storm but by the cunning of Sanada Yukitaka, who turned the garrison and opened the way in. It marked both the breaking of Murakami power and the beginning of the Sanada's celebrated service to the Takeda.`,
    sources: [ { label: "Wikipedia: Sieges of Toishi", url: "https://en.wikipedia.org/wiki/Sieges_of_Toishi" } ]
  },
  {
    id: "yoshida-1575", name: "Siege of Yoshida Castle", year: 1575, dateLabel: "1575 (Tenshō 3)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Yoshida_Castle_%28Aichi%29_3.jpg/960px-Yoshida_Castle_%28Aichi%29_3.jpg",
        caption: "Reconstructed turret and stone walls of Yoshida Castle in Toyohashi, Aichi; Wikimedia Commons."
      }
    ],
    location: { name: "Yoshida Castle, Mikawa (modern Toyohashi, Aichi)", lat: 34.7701, lon: 137.3934 },
    combatants: { side1: { name: "Tokugawa", leader: "Sakai Tadatsugu" }, side2: { name: "Takeda", leader: "Takeda Katsuyori" } },
    outcome: "Takeda withdrawal; the Tokugawa held the castle.",
    summary: "Invading Mikawa in 1575, Takeda Katsuyori probed Yoshida Castle, stoutly held for the Tokugawa by Sakai Tadatsugu. Unable to take it, he turned aside to besiege Nagashino instead, the move that led straight to his catastrophe there.",
    details: `Katsuyori's spring 1575 thrust into Tokugawa territory ran up against Yoshida Castle and its determined castellan, Sakai Tadatsugu. Rather than batter himself against it, Katsuyori shifted his army to the smaller fort of Nagashino. That decision drew Oda Nobunaga and Tokugawa Ieyasu to relieve the siege, and the Takeda were shattered in the famous battle that followed.`,
    leadsTo: "nagashino",
    sources: [ { label: "Wikipedia: Siege of Yoshida Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Yoshida_Castle" } ]
  },
  {
    id: "takabaru-1576", name: "Siege of Takabaru", year: 1576, dateLabel: "1576 (Tenshō 4)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/It%C5%8D_Yoshisuke.png",
        caption: "Portrait of Itō Yoshisuke, whose clan lost Takabaru to the Shimazu in 1576. Wikimedia Commons."
      }
    ],
    location: { name: "Takabaru Castle, Hyūga (modern Miyazaki, Kyūshū)", lat: 31.9356, lon: 131.0103 },
    combatants: { side1: { name: "Shimazu", leader: "Shimazu Yoshihisa / Yoshihiro / Toshihisa" }, side2: { name: "Itō", leader: "Itō Yoshisuke" } },
    outcome: "Shimazu victory; a key step in dismantling Itō power in Hyūga.",
    summary: "The Shimazu brothers took Takabaru Castle from the Itō, cracking open Itō Yoshisuke's domain in Hyūga and advancing the Shimazu drive to dominate Kyūshū, which soon drove Yoshisuke into the arms of the Ōtomo and on to the great clash at Mimigawa.",
    details: `By the mid-1570s the Shimazu of Satsuma were pushing north and east across Kyūshū. The capture of Takabaru in 1576 broke the southern flank of Itō Yoshisuke's holdings in Hyūga; within two years the Itō domain collapsed and Yoshisuke fled to the Ōtomo. The Ōtomo intervention on his behalf ended in their ruinous defeat at Mimigawa in 1578, leaving the Shimazu the strongest power on the island.`,
    sources: [ { label: "Wikipedia: Siege of Takabaru", url: "https://en.wikipedia.org/wiki/Siege_of_Takabaru" } ]
  },
  {
    id: "omosu-1580", name: "Battle of Omosu", year: 1580, dateLabel: "1580 (Tenshō 8)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Takeda_Katsuyori.jpg/960px-Takeda_Katsuyori.jpg",
        caption: "Portrait of Takeda Katsuyori, whose fleet fought the Hōjō off Omosu in 1580. Wikimedia Commons."
      }
    ],
    location: { name: "Suruga Bay, off Omosu (modern Numazu, Shizuoka)", lat: 35.0200, lon: 138.8880 },
    combatants: { side1: { name: "Hōjō", leader: "Hōjō Ujimasa (Fūma Kotarō)" }, side2: { name: "Takeda", leader: "Takeda Katsuyori (Ohama Kagetaka)" } },
    outcome: "Inconclusive, claimed as a Hōjō success; a rare Sengoku naval engagement.",
    summary: "A fleet action in Suruga Bay after the Takeda–Hōjō alliance collapsed: the Hōjō navy met the Takeda fleet under Ohama Kagetaka in one of the era's uncommon naval battles. The fighting was indecisive, though the Hōjō claimed the advantage.",
    details: `When the old Takeda–Hōjō alliance broke down at the end of the 1570s, the two houses contested the Suruga coast by sea as well as land. At Omosu their fleets clashed in the bay, galleys and oared warships exchanging arrow and gunfire at close range. Neither side won a decisive result, a reminder that naval power, though secondary, still mattered in the wars of the warring states.`,
    sources: [ { label: "Wikipedia: Battle of Omosu", url: "https://en.wikipedia.org/wiki/Battle_of_Omosu" } ]
  },
  {
    id: "uozu-1582", name: "Siege of Uozu", yearStart: 1582, yearEnd: 1582, dateLabel: "May–June 1582 (Tenshō 10)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Uozu_Castle_Site.jpg/960px-Uozu_Castle_Site.jpg",
        caption: "The site of Uozu Castle in Uozu, Toyama Prefecture, via Wikimedia Commons."
      }
    ],
    location: { name: "Uozu Castle, Etchū (modern Toyama)", lat: 36.8133, lon: 137.3975 },
    combatants: { side1: { name: "Oda", leader: "Shibata Katsuie / Sassa Narimasa" }, side2: { name: "Uesugi", leader: "Uesugi Kagekatsu (garrison)" } },
    outcome: "Oda victory; the garrison was annihilated, the day after Nobunaga's death at Honnō-ji.",
    summary: "Shibata Katsuie's Oda army besieged the Uesugi fortress of Uozu in Etchū through the spring of 1582. The garrison held out and was wiped out almost to a man, the castle falling on the 3rd day of the 6th lunar month (≈22 June 1582), the day after Oda Nobunaga was killed at Honnō-ji, news the defenders never lived to hear.",
    details: `As Nobunaga's generals closed in on the Uesugi from every side, Shibata Katsuie drove into Etchū and pinned the defenders of Uozu in a long siege. The garrison fought to the end and the castle fell on the 3rd day of the 6th lunar month, Tenshō 10, about 22 June 1582 by the Western calendar. By a cruel irony it fell the day after Nobunaga himself died at Honnō-ji in Kyoto; when word of his death reached the front, Shibata had to abandon his hard-won gains and turn south into the succession struggle that would consume the Oda.`,
    sources: [ { label: "Wikipedia: Siege of Uozu", url: "https://en.wikipedia.org/wiki/Siege_of_Uozu" } ]
  },
  {
    id: "kiyosu-1552", name: "Battle of Kiyosu Castle", yearStart: 1552, yearEnd: 1554, dateLabel: "1552–1554 (Tenbun 21–23)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kiyosu_Castle.JPG",
        caption: "The modern reconstructed keep of Kiyosu Castle in Kiyosu, Aichi Prefecture, via Wikimedia Commons."
      }
    ],
    location: { name: "Kiyosu Castle, Owari (modern Kiyosu, Aichi)", lat: 35.1997, lon: 136.8528 },
    combatants: { side1: { name: "Oda (Nagoya line)", leader: "Oda Nobunaga" }, side2: { name: "Oda (Kiyosu line)", leader: "Oda Nobutomo" } },
    outcome: "Nobunaga victory; the rival Kiyosu branch was destroyed and Kiyosu became his base.",
    summary: "A struggle within the Oda house itself. The young Nobunaga overcame the rival Kiyosu branch of his own clan, took their castle, and made it his headquarters, a decisive step toward unifying his home province of Owari.",
    details: `The Oda were split among branches, and Nobunaga's path to power ran first through his own kinsmen. Over 1552–1554 he outmanoeuvred and destroyed the Kiyosu line under Oda Nobutomo, seizing the strong castle of Kiyosu. It became the seat from which he would unify Owari and, within a few years, defeat the Imagawa at Okehazama.`,
    sources: [ { label: "Wikipedia: Battle of Kiyosu Castle", url: "https://en.wikipedia.org/wiki/Battle_of_Kiyosu_Castle" } ]
  },
  {
    id: "fukuda-bay-1565", name: "Battle of Fukuda Bay", year: 1565, dateLabel: "1565 (Eiroku 8)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Matsura_Takanobu%2816th%29cr.jpg/960px-Matsura_Takanobu%2816th%29cr.jpg",
        caption: "Portrait of Matsura Takanobu, the Hirado daimyō whose ships attacked João Pereira's Portuguese carrack at Fukuda Bay; Wikimedia Commons."
      }
    ],
    location: { name: "Fukuda Bay, off Nagasaki, Hizen (Kyūshū)", lat: 32.7450, lon: 129.8250 },
    combatants: { side1: { name: "Matsura clan", leader: "Matsura Takanobu" }, side2: { name: "Portuguese Empire", leader: "João Pereira" } },
    outcome: "Portuguese victory; the Japanese assault on the carracks was repelled.",
    summary: "The first recorded armed clash between Japanese forces and a European power. The Matsura attacked Portuguese trading carracks anchored at Fukuda Bay near Nagasaki, but the Europeans' shipboard cannon drove the attackers off.",
    details: `When the Portuguese shifted their lucrative trade from Hirado to Fukuda Bay, the Matsura clan moved to seize the ships by force. The Japanese fighting craft swarmed the anchored carracks, but the high-sided European vessels and their heavy guns beat back the assault, the first time Japanese and Western arms met in battle. The episode pushed the Portuguese to seek a safer, dedicated harbour, leading a few years later to the opening of Nagasaki itself.`,
    sources: [ { label: "Wikipedia: Battle of Fukuda Bay", url: "https://en.wikipedia.org/wiki/Battle_of_Fukuda_Bay" } ]
  },
  {
    id: "inabayama-1567", name: "Siege of Inabayama Castle", year: 1567, dateLabel: "1567 (Eiroku 10)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Gifu_Castle.jpg/960px-Gifu_Castle.jpg",
        caption: "The reconstructed keep of Gifu Castle on Mount Kinka, the site of Inabayama Castle, Wikimedia Commons."
      }
    ],
    location: { name: "Mt. Inaba, Mino (modern Gifu)", lat: 35.4339, lon: 136.7822 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga (with Kinoshita Tōkichirō, later Hideyoshi)" }, side2: { name: "Saitō", leader: "Saitō Tatsuoki" } },
    outcome: "Oda victory; Nobunaga took Mino, renamed the castle Gifu, and adopted the seal 'Tenka Fubu'.",
    summary: "Nobunaga's capture of the great mountain fortress of Inabayama broke the Saitō and gave him the province of Mino. He renamed the castle Gifu and took up the seal 'Tenka Fubu', 'the realm under one sword', announcing his ambition to unify Japan.",
    details: `For years the Saitō of Mino had blocked Nobunaga's path. In 1567 he finally took their seemingly impregnable mountain castle of Inabayama, helped by the defection of local lords engineered by his rising retainer Kinoshita Tōkichirō, the future Toyotomi Hideyoshi. Nobunaga renamed the place Gifu and adopted the famous seal *Tenka Fubu*. From this base he marched on Kyoto the very next year, beginning his drive to dominate the country.`,
    sources: [ { label: "Wikipedia: Siege of Inabayama Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Inabayama_Castle" } ]
  },
  {
    id: "takatenjin-1574", name: "Siege of Takatenjin (1574)", year: 1574, dateLabel: "1574 (Tenshō 2)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Takatenjin_Castle_Site.01.jpg/960px-Takatenjin_Castle_Site.01.jpg",
        caption: "The hilltop remains of Takatenjin Castle in Kakegawa, Shizuoka, Wikimedia Commons."
      }
    ],
    location: { name: "Takatenjin fortress, Tōtōmi (modern Kakegawa, Shizuoka)", lat: 34.6983, lon: 138.0347 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Katsuyori" }, side2: { name: "Tokugawa", leader: "Ogasawara Nagatada (castellan)" } },
    outcome: "Takeda victory; Katsuyori took the fortress his father Shingen had never managed to.",
    summary: "Takeda Katsuyori captured the formidable Tōtōmi fortress of Takatenjin, a prize his celebrated father, Shingen, had failed to take. It was the high-water mark of Katsuyori's fortunes; overconfidence after it would carry him to disaster at Nagashino the following year.",
    details: `Takatenjin perched on steep hills and had defied even Takeda Shingen. When Katsuyori stormed it in 1574, the feat seemed to prove he had surpassed his father. But the triumph bred over-reach: in 1575 he pressed deep into Tokugawa and Oda territory and was annihilated at Nagashino, a defeat from which the Takeda never recovered.`,
    leadsTo: "nagashino",
    sources: [ { label: "Wikipedia: Siege of Takatenjin (1574)", url: "https://en.wikipedia.org/wiki/Siege_of_Takatenjin_(1574)" } ]
  },
  {
    id: "takatenjin-1581", name: "Siege of Takatenjin (1581)", yearStart: 1580, yearEnd: 1581, dateLabel: "1580–1581 (Tenshō 8–9)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Takatenjin_Castle_Site.02.jpg/960px-Takatenjin_Castle_Site.02.jpg",
        caption: "The stone marker on the honmaru of the Takatenjin Castle site, Wikimedia Commons."
      }
    ],
    location: { name: "Takatenjin fortress, Tōtōmi (modern Kakegawa, Shizuoka)", lat: 34.6983, lon: 138.0353 },
    combatants: { side1: { name: "Oda–Tokugawa", leader: "Tokugawa Ieyasu" }, side2: { name: "Takeda", leader: "Okabe Motonobu (garrison)" } },
    outcome: "Oda–Tokugawa victory; the starving garrison was destroyed and Takeda prestige collapsed.",
    summary: "Tokugawa Ieyasu retook Takatenjin after a long, grinding blockade. Katsuyori dared not march to relieve it, and the abandoned garrison was wiped out, a humiliation that shattered the Takeda's standing and foreshadowed the clan's destruction the next year.",
    details: `Ieyasu ringed Takatenjin with siege forts and slowly starved it out. Katsuyori, fearing another Nagashino, never came to its rescue; when the garrison under Okabe Motonobu finally broke out in early 1581 it was cut to pieces. The lords of Tōtōmi drew the obvious lesson, that the Takeda could no longer protect their own, and began deserting. Within a year Oda and Tokugawa armies overran the Takeda lands and Katsuyori took his own life at Tenmokuzan.`,
    leadsTo: "tenmokuzan-1582",
    sources: [ { label: "Wikipedia: Siege of Takatenjin (1581)", url: "https://en.wikipedia.org/wiki/Siege_of_Takatenjin_(1581)" } ]
  },
  {
    id: "kyushu-campaign-1586", name: "Kyūshū Campaign (Hideyoshi's invasion)", yearStart: 1586, yearEnd: 1587, dateLabel: "1586–1587 (Tenshō 14–15)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png/960px-Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png",
        caption: "Portrait of Toyotomi Hideyoshi, who commanded the invasion of Kyūshū, painted about 1598 and held at Kōdai-ji in Kyoto; Wikimedia Commons."
      }
    ],
    location: { name: "Kyūshū", lat: 33.0000, lon: 131.0000 },
    combatants: { side1: { name: "Toyotomi", leader: "Toyotomi Hideyoshi / Toyotomi Hidenaga" }, side2: { name: "Shimazu", leader: "Shimazu Yoshihisa / Shimazu Yoshihiro" } },
    outcome: "Toyotomi victory; the Shimazu submitted and Kyūshū came under Hideyoshi's control.",
    summary: "With the Shimazu of Satsuma on the verge of conquering all Kyūshū, Hideyoshi answered the Ōtomo's plea for help and poured a vast army onto the island. Overwhelmed by numbers, the Shimazu submitted, and the whole of Kyūshū passed under Toyotomi authority.",
    details: `By the mid-1580s the Shimazu had beaten down the Ōtomo and nearly unified Kyūshū. Hideyoshi, now master of central Japan, invoked his authority to order a halt; when the Shimazu pressed on, he sent his brother Hidenaga and then himself with armies numbering in the hundreds of thousands. The Shimazu were driven back into Satsuma and Yoshihisa surrendered in 1587, shaving his head and submitting. Hideyoshi left the Shimazu their home provinces but bound them into his new national order, one more piece of his reunification of Japan.`,
    sources: [ { label: "Wikipedia: Kyūshū campaign", url: "https://en.wikipedia.org/wiki/Ky%C5%ABsh%C5%AB_campaign" } ]
  },
  {
    id: "takato-1545", name: "Siege of Takatō (1545)", year: 1545, dateLabel: "1545 (Tenbun 14)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TakatoCastle%EF%BC%88%E9%AB%98%E9%81%A0%E5%9F%8E%EF%BC%89.JPG/960px-TakatoCastle%EF%BC%88%E9%AB%98%E9%81%A0%E5%9F%8E%EF%BC%89.JPG",
        caption: "The Takatō Castle site at Ina in Nagano, taken by the Takeda in 1545 and now a park famous for its cherry blossom; Wikimedia Commons."
      }
    ],
    location: { name: "Takatō Castle, Ina valley, Shinano (modern Ina, Nagano)", lat: 35.8331, lon: 138.0628 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen (with Itagaki Nobukata)" }, side2: { name: "Takatō", leader: "Takatō Yoritsugu" } },
    outcome: "Takeda victory; the castle fell after Yoritsugu's allies failed to relieve him.",
    summary: "In 1545 Takeda Shingen besieged and captured Takatō Castle in the Ina valley of Shinano, defeating Takatō Yoritsugu and pressing forward the Takeda conquest of the province.",
    details: `In 1545 Takeda Shingen carried his methodical conquest of Shinano into the Ina valley, laying siege to Takatō Castle held by Takatō Yoritsugu. The two sides were evenly matched in numbers, roughly five thousand each, but Yoritsugu's would-be allies, Ogasawara Nagatoki and Tozawa Yorichika, failed to come to his aid, and Shingen's veteran general Itagaki Nobukata helped carry the assault. The castle fell to the Takeda, one more step in Shingen's absorption of the province. This was the first of two sieges of Takatō; the fortress would fall again in 1582, in the final destruction of the Takeda by Oda Nobunaga's armies.`,
    sources: [ { label: "Wikipedia: Siege of Takatō (1545)", url: "https://en.wikipedia.org/wiki/Siege_of_Takat%C5%8D_(1545)" } ]
  },
  {
    id: "kajiki-1549", name: "Siege of Kajiki", year: 1549, dateLabel: "1549 (Tenbun 18)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Shimazu_Takahisa.jpg",
        caption: "Portrait of Shimazu Takahisa, who led the attack on Kajiki Castle in 1549; Wikimedia Commons."
      }
    ],
    location: { name: "Kajiki, Ōsumi Province (modern Kagoshima)", lat: 31.7497, lon: 130.6692 },
    combatants: { side1: { name: "Shimazu", leader: "Shimazu Takahisa (with Ijūin Tadaaki & Tanegashima Tokitaka)" }, side2: { name: "Kajiki garrison", leader: "(commander unrecorded)" } },
    outcome: "Shimazu victory; cited as the first battlefield use of firearms in Japan.",
    summary: "In 1549 (Tenbun 18) Shimazu Takahisa stormed and captured Kajiki castle in Ōsumi, a Shimazu victory remembered as the first battlefield use of Portuguese-derived arquebuses in Japan, the moment European firearms entered the country's wars.",
    details: `In 1549, the year known as Tenbun 18, Shimazu Takahisa laid siege to Kajiki castle in Ōsumi, part of his clan's long campaign to consolidate southern Kyūshū. He was joined by his retainers Ijūin Tadaaki and Tanegashima Tokitaka, the latter from the island where Portuguese guns had first reached Japan in 1543, and who supplied the firearms that give the siege its lasting fame: tradition holds that Ijūin Tadaaki discharged a *teppō* of Portuguese design, making this the first recorded use of European arquebuses in a Japanese battle. The assault overwhelmed the garrison; the fighting was severe, with the entire defending force of some 320 killed against roughly 210 Shimazu dead. The fall of Kajiki strengthened the Shimazu hold on Ōsumi and stands as an early marker of the firearms revolution that would reshape Sengoku warfare.`,
    sources: [ { label: "Wikipedia: Siege of Kajiki", url: "https://en.wikipedia.org/wiki/Siege_of_Kajiki" } ]
  },
  {
    id: "terabe-1558", name: "Siege of Terabe", year: 1558, dateLabel: "1558 (Eiroku 1)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Toyota_terabe_castle_01.jpg/960px-Toyota_terabe_castle_01.jpg",
        caption: "Excavated building foundations at the Terabe Castle site in Toyota, Aichi, the castle attacked in 1558; Wikimedia Commons."
      }
    ],
    location: { name: "Terabe Castle, Mikawa (modern Toyota, Aichi)", lat: 35.0958, lon: 137.1711 },
    combatants: { side1: { name: "Matsudaira (for the Imagawa)", leader: "Matsudaira Motoyasu (later Tokugawa Ieyasu)" }, side2: { name: "Oda-aligned garrison", leader: "Suzuki Shigeteru" } },
    outcome: "Oda victory; Matsudaira Motoyasu, the future Ieyasu, was repelled in his first battle.",
    summary: "In 1558 (Eiroku 1) the young Matsudaira Motoyasu, the future Tokugawa Ieyasu, led an Imagawa army against Terabe Castle in Mikawa, whose lord had defected to Oda Nobunaga. The assault was driven off by Oda reinforcements, and the action is remembered as Motoyasu's first battle.",
    details: `Terabe Castle stood in the Mikawa borderland that the Imagawa and Oda contested. Its lord, Suzuki Shigeteru, had abandoned the Imagawa to side with Oda Nobunaga, and the Imagawa answered by sending the young Matsudaira Motoyasu, later known to history as Tokugawa Ieyasu, to bring the castle to heel. The clash carried the weight of being Motoyasu's debut in the field, the opening action of a career that would end in the founding of the Tokugawa shogunate. By the surviving account his forces were repelled by reinforcements Nobunaga sent to relieve the garrison, and it is recorded as an Oda victory. No precise lunar date survives, so no confident Western month can be assigned beyond the year 1558.`,
    sources: [ { label: "Wikipedia: Siege of Terabe", url: "https://en.wikipedia.org/wiki/Siege_of_Terabe" } ]
  },
  {
    id: "musashi-matsuyama-1563", name: "Siege of Musashi-Matsuyama (1563)", year: 1563, dateLabel: "1563 (Eiroku 6)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Musashi_Matsuyama_Castle.jpg",
        caption: "The wooded remains of Musashi-Matsuyama Castle at Yoshimi in Saitama, the fortress besieged in 1563; Wikimedia Commons."
      }
    ],
    location: { name: "Matsuyama Castle, Musashi (modern Yoshimi, Saitama)", lat: 36.0369, lon: 139.4211 },
    combatants: { side1: { name: "Hōjō–Takeda alliance", leader: "Hōjō Ujiyasu & Takeda Shingen" }, side2: { name: "Uesugi–Ōta garrison", leader: "Uesugi Norikatsu & Ōta Sukemasa" } },
    outcome: "Hōjō–Takeda victory; the garrison surrendered after miners undermined the walls.",
    summary: "In 1563 (Eiroku 6) the allied forces of Hōjō Ujiyasu and Takeda Shingen besieged Matsuyama Castle in Musashi; their 24,000 troops, aided by miners tunnelling beneath the walls, forced the surrender of the 10,000-strong Uesugi and Ōta garrison, tightening the allies' grip on the contested Kantō plain.",
    details: `Matsuyama Castle in Musashi (modern Yoshimi, Saitama) stood at the centre of the long struggle for the Kantō between the Hōjō and their Uesugi rivals. In 1563 a combined Hōjō–Takeda army of some 24,000 under Hōjō Ujiyasu and Takeda Shingen laid siege to the castle, held by an Uesugi and Ōta garrison of roughly 10,000 under Uesugi Norikatsu and Ōta Sukemasa. Rather than rely on assault alone, the besiegers set a team of miners to dig beneath the defences, undermining the castle's ability to hold out. The garrison surrendered, a Hōjō–Takeda victory. As with most pre-1873 dates, only the year is securely recorded; the lunar calendar means no specific Western month is asserted here.`,
    sources: [ { label: "Wikipedia: Siege of Musashi-Matsuyama (1563)", url: "https://en.wikipedia.org/wiki/Siege_of_Musashi-Matsuyama_(1563)" } ]
  },
  {
    id: "chokoji-1570", name: "Siege of Chōkō-ji", year: 1570, dateLabel: "1570 (Genki 1)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Kamewari_Shibata.jpg",
        caption: "An Edo period woodblock illustration from the Ehon Taikōki showing Shibata Katsuie smashing the last water jars during the siege of Chōkō-ji, the legend that earned him the nickname Kamewari (jar breaking) Shibata, Wikimedia Commons."
      }
    ],
    location: { name: "Chōkō-ji Castle, Ōmi Province (modern Shiga)", lat: 35.1056, lon: 136.1319 },
    combatants: { side1: { name: "Rokkaku", leader: "Rokkaku Yoshisuke" }, side2: { name: "Oda", leader: "Shibata Katsuie (with Sakuma Nobumori)" } },
    outcome: "Oda victory; Shibata Katsuie's defenders sallied out and routed the besieging Rokkaku, lifting the siege.",
    summary: "In 1570 the Rokkaku besieged Chōkō-ji Castle in Ōmi, which Oda Nobunaga had taken from them two years earlier, and cut off its water. The Oda garrison under Shibata Katsuie sallied out and routed the attackers, lifting the siege.",
    details: `Chōkō-ji, a fortified temple in Ōmi, had been seized from the Rokkaku by Nobunaga in 1568. In 1570 Rokkaku Yoshisuke moved to retake it and cut off the castle's water supply. By a celebrated tradition, Shibata Katsuie, entrusted with the defence alongside Sakuma Nobumori, smashed the garrison's last water jars so his men would have no choice but to win, then led them out in a sally that broke the besiegers; the feat helped earn him the nickname *Oni Shibata*, "Devil Shibata." English sources fix the action only to the year 1570 (Genki 1); Japanese sources place it in the sixth lunar month, which falls in July 1570 by the Western calendar, so a "June 1570" date is a lunar-conversion error.`,
    sources: [ { label: "Wikipedia: Siege of Chōkō-ji", url: "https://en.wikipedia.org/wiki/Siege_of_Ch%C5%8Dk%C5%8D-ji" } ]
  },
  {
    id: "toyama-1585", name: "Siege of Toyama", year: 1585, dateLabel: "1585 (Tenshō 13)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg/960px-Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg",
        caption: "The mock keep on the site of Toyama Castle, now the city folk museum, the fortress Sassa Narimasa surrendered to Hideyoshi in 1585; Wikimedia Commons."
      }
    ],
    location: { name: "Toyama Castle, Etchū Province (modern Toyama)", lat: 36.6933, lon: 137.2111 },
    combatants: { side1: { name: "Toyotomi", leader: "Toyotomi Hideyoshi (with Maeda Toshinaga)" }, side2: { name: "Sassa", leader: "Sassa Narimasa" } },
    outcome: "Toyotomi victory; Sassa Narimasa submitted and Etchū passed to Hideyoshi.",
    summary: "In 1585 (Tenshō 13) Toyotomi Hideyoshi marched on Toyama Castle in Etchū and overwhelmed the defending Sassa Narimasa, shattering his resistance and securing Toyotomi mastery of the province.",
    details: `In 1585, as he extended his power across central Japan, Hideyoshi turned on Etchū, where his former ally Sassa Narimasa held Toyama Castle. Leading the campaign in person, with Maeda Toshinaga prominent in the attack and commanders including Horio Yoshiharu, Hachiya Yoritaka and Kanamori Nagachika, he brought a reported 100,000 men against Narimasa's roughly 20,000. The disparity told: Narimasa's defence collapsed and he submitted, and the fall of Toyama gave the Toyotomi control of Etchū. The action is dated to 1585 (Tenshō 13), with no exact day preserved.`,
    sources: [ { label: "Wikipedia: Siege of Toyama", url: "https://en.wikipedia.org/wiki/Siege_of_Toyama" } ]
  },
  {
    id: "ueda-1600", name: "Siege of Ueda (1600)", year: 1600, dateLabel: "1600 (Keichō 5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ueda_Castle_Amagafuchi.jpg/960px-Ueda_Castle_Amagafuchi.jpg",
        caption: "Ueda Castle in Nagano Prefecture, held by the Sanada against Tokugawa Hidetada in 1600; the castle was razed soon after, and the surviving turrets belong to a rebuilding begun in 1626. Wikimedia Commons."
      }
    ],
    location: { name: "Ueda Castle, Shinano Province (modern Ueda, Nagano)", lat: 36.4042, lon: 138.2439 },
    combatants: { side1: { name: "Tokugawa", leader: "Tokugawa Hidetada" }, side2: { name: "Sanada", leader: "Sanada Masayuki (with Sanada Yukimura)" } },
    outcome: "Sanada victory; ~2,000 defenders held off Hidetada's ~38,000, and the delay made him miss Sekigahara.",
    summary: "In 1600 a Sanada garrison of roughly 2,000 under Sanada Masayuki held Ueda Castle in Shinano against Tokugawa Hidetada's army of some 38,000, and the delay this imposed kept Hidetada from reaching the decisive Battle of Sekigahara in time.",
    details: `As the Tokugawa moved to consolidate power in the autumn of Keichō 5 (1600), Tokugawa Hidetada led a force of about 38,000, supported by commanders such as Sakakibara Yasumasa and Honda Masanobu, against the Sanada stronghold of Ueda Castle in Shinano (present-day Nagano). Defending it were only some 2,000 troops under Sanada Masayuki, alongside his son Sanada Yukimura (Nobushige). Despite the vast disparity, the castle did not fall, and Hidetada eventually abandoned the siege. The cost of the delay was severe: he failed to reach the field in time for the Battle of Sekigahara, the engagement that would settle the fate of Japan. The siege is remembered as a celebrated example of a small, determined defence thwarting an overwhelming force.`,
    leadsTo: "sekigahara",
    sources: [ { label: "Wikipedia: Siege of Ueda", url: "https://en.wikipedia.org/wiki/Siege_of_Ueda" } ]
  },
  {
    id: "hasedo-1600", name: "Siege of Hasedō", year: 1600, dateLabel: "1600 (Keichō 5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Battle_of_Hased%C5%8D_02.jpg/960px-Battle_of_Hased%C5%8D_02.jpg",
        caption: "Left screen of the Edo period folding screen Hasedō gassen zu byōbu, depicting the fighting at Hasedō, Mogami Yoshiaki Historical Museum, Yamagata; Wikimedia Commons."
      }
    ],
    location: { name: "Hasedō Castle, near Yamagata (modern Yamagata Pref.)", lat: 38.2127, lon: 140.2724 },
    combatants: { side1: { name: "Eastern Army (Mogami–Date)", leader: "Mogami Yoshiaki (with Date relief force)" }, side2: { name: "Western Army (Uesugi)", leader: "Uesugi Kagekatsu (field command: Naoe Kanetsugu)" } },
    outcome: "Eastern Army victory; the outnumbered defenders held until the Uesugi withdrew on news of Sekigahara.",
    summary: "On the northern front of the Sekigahara campaign, the Tokugawa-aligned Mogami Yoshiaki, reinforced by the Date, withstood a far larger Uesugi assault on Hasedō Castle near Yamagata, repelling Naoe Kanetsugu and securing the Tōhoku theatre.",
    details: `The siege unfolded on the northern theatre of the Sekigahara campaign, the contest that would decide who held power across Japan. Mogami Yoshiaki defended Hasedō Castle with some 7,000 men, joined by a 3,000-strong Date relief force, against a Uesugi army of roughly 20,000 commanded in the field by Naoe Kanetsugu under the daimyō Uesugi Kagekatsu. For about a fortnight the outnumbered defenders held, and when word arrived of Tokugawa Ieyasu's victory at Sekigahara, Naoe broke off the assault and withdrew to Yonezawa. The Eastern Army emerged victorious, having lost 623 killed against 1,580 on the Uesugi side. Only the year 1600 is securely recorded for the fighting itself.`,
    sources: [ { label: "Wikipedia: Siege of Hasedō", url: "https://en.wikipedia.org/wiki/Siege_of_Hased%C5%8D" } ]
  },
  {
    id: "tanabe-1600", name: "Siege of Tanabe", year: 1600, dateLabel: "1600 (Keichō 5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Maizuru_city_Tanabe_Castle_ac_%281%29.jpg/960px-Maizuru_city_Tanabe_Castle_ac_%281%29.jpg",
        caption: "Reconstructed keep and walls at the Tanabe Castle site, Maizuru Park, Kyoto Prefecture; Wikimedia Commons."
      }
    ],
    location: { name: "Tanabe Castle, Tango Province (modern Maizuru, Kyoto)", lat: 35.4458, lon: 135.3310 },
    combatants: { side1: { name: "Eastern Army (Hosokawa garrison)", leader: "Hosokawa Yūsai (Fujitaka)" }, side2: { name: "Western Army", leader: "Onoki Shigekatsu (forces of Ikoma Chikamasa)" } },
    outcome: "Inconclusive; ~500 defenders pinned down ~15,000 Western troops away from Sekigahara.",
    summary: "Some 500 defenders under the poet-general Hosokawa Yūsai held Tanabe Castle in Tango against roughly 15,000 Western Army besiegers; the siege ended inconclusively but tied down a large force that never reached the decisive battle at Sekigahara.",
    details: `The Siege of Tanabe was one of the parallel actions of the Sekigahara campaign. Tanabe Castle in Tango (modern Maizuru, Kyoto) was nominally held by the Eastern-aligned Hosokawa Tadaoki, but he had ridden with Tokugawa Ieyasu to Sekigahara, leaving the castle to his elderly father, the poet-general Hosokawa Yūsai (Fujitaka), and a garrison of only about 500. Against them came some 15,000 Western Army troops. The defence held, and the siege is recorded as inconclusive; its real value to the Tokugawa cause was that it tied down a large enemy force far from the decisive battlefield. By a famous tradition, the siege ended when Emperor Go-Yōzei intervened to spare Yūsai, the last living master of the *Kokin denju*, the secret transmission of Kokinshū poetics, though this celebrated detail comes from later accounts rather than the bare record.`,
    sources: [ { label: "Wikipedia: Siege of Tanabe", url: "https://en.wikipedia.org/wiki/Siege_of_Tanabe" } ]
  },
  {
    id: "uto-1600", name: "Siege of Uto", year: 1600, dateLabel: "1600 (Keichō 5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uto_Castle_%28Kinsei%29%2C_honmaru.jpg/960px-Uto_Castle_%28Kinsei%29%2C_honmaru.jpg",
        caption: "Honmaru grounds and interpretive sign at the early modern Uto Castle ruins, Uto, Kumamoto Prefecture; Wikimedia Commons."
      }
    ],
    location: { name: "Uto Castle, Higo Province, Kyūshū (modern Kumamoto)", lat: 32.6794, lon: 130.6464 },
    combatants: { side1: { name: "Eastern Army (Katō)", leader: "Katō Kiyomasa (with Nabeshima Naoshige)" }, side2: { name: "Western Army (Konishi)", leader: "Konishi Yukikage" } },
    outcome: "Eastern victory; on news of Sekigahara the defender surrendered and committed seppuku.",
    summary: "During the Sekigahara campaign, the Eastern general Katō Kiyomasa besieged Uto Castle in Higo, held for the Western Army by Konishi Yukikage; when word came of the Western defeat, Yukikage surrendered and took his own life, and Kiyomasa absorbed the Konishi lands of Higo.",
    details: `In 1600 the Eastern Army general Katō Kiyomasa besieged Uto Castle in Higo, on Kyūshū, held for the Western Army by Konishi Yukikage, who kept the castle for his brother Konishi Yukinaga. When news arrived of the Western defeat at Sekigahara, Yukikage surrendered and committed *seppuku*. Kiyomasa spared the castle's defenders and took the surviving Konishi vassals into his own service, extending his grip over Higo, the province he would soon rule from his great new fortress at Kumamoto. As with the other 1600 sieges, the record fixes only the year, Keichō 5, with no reliable Western month.`,
    sources: [ { label: "Wikipedia: Siege of Uto", url: "https://en.wikipedia.org/wiki/Siege_of_Uto" } ]
  },
  {
    id: "yanagawa-1600", name: "Siege of Yanagawa", year: 1600, dateLabel: "1600 (Keichō 5)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Yanagawa_Castle01s5s3200.jpg/960px-Yanagawa_Castle01s5s3200.jpg",
        caption: "Stone monument and marker post at the Yanagawa Castle ruins, Yanagawa, Fukuoka Prefecture; Wikimedia Commons."
      }
    ],
    location: { name: "Yanagawa Castle, Chikugo Province, Kyūshū (modern Fukuoka)", lat: 33.1608, lon: 130.4011 },
    combatants: { side1: { name: "Eastern Army", leader: "Katō Kiyomasa, Kuroda Yoshitaka & Nabeshima Naoshige" }, side2: { name: "Western Army (Tachibana)", leader: "Tachibana Muneshige" } },
    outcome: "Eastern victory; Tachibana Muneshige surrendered and the clan lost its fief.",
    summary: "In the aftermath of Sekigahara, a Tokugawa-aligned army besieged Yanagawa Castle in Chikugo on Kyūshū and forced the surrender of its renowned defender Tachibana Muneshige, a sign that Ieyasu's victory was being enforced even on the far edges of the realm.",
    details: `The Siege of Yanagawa belonged to the closing phase of the Sengoku wars and the wider Sekigahara campaign of 1600. With the decisive battle already settled in the Tokugawa favour, forces loyal to Ieyasu, led by Katō Kiyomasa, Kuroda Yoshitaka and Nabeshima Naoshige, converged on Yanagawa Castle, held by the Tachibana under Tachibana Muneshige and his wife Tachibana Ginchiyo. Muneshige surrendered, ending the siege in a Tokugawa victory; he had hoped to then change sides and march with the victors against the Shimazu of Satsuma, but Ieyasu forbade it. The episode shows how the reckoning of Sekigahara reached even the western rim of Japan, bringing one of the era's most celebrated warrior houses to terms.`,
    sources: [ { label: "Wikipedia: Siege of Yanagawa", url: "https://en.wikipedia.org/wiki/Siege_of_Yanagawa" } ]
  },
  {
    id: "tennoji-1615", name: "Battle of Tennōji", year: 1615, dateLabel: "1615 (Keichō 20)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_Siege_of_Osaka_Castle.jpg/960px-The_Siege_of_Osaka_Castle.jpg",
        caption: "Right screen of the Osaka Summer Campaign folding screens, the Kuroda byobu, depicting the 1615 fighting at Osaka; Wikimedia Commons."
      }
    ],
    location: { name: "South of Osaka Castle, Settsu Province (modern Osaka)", lat: 34.6544, lon: 135.5112 },
    combatants: { side1: { name: "Tokugawa shogunate", leader: "Tokugawa Ieyasu & Tokugawa Hidetada" }, side2: { name: "Toyotomi", leader: "Toyotomi Hideyori (Sanada Yukimura)" } },
    outcome: "Decisive Tokugawa victory; Sanada Yukimura was killed, Osaka fell, and the Toyotomi were destroyed.",
    summary: "South of Osaka Castle in 1615, the Tokugawa shogunate crushed the Toyotomi in the final clash of the Summer Campaign, Sanada Yukimura fell, Osaka Castle was taken, and the Toyotomi line was extinguished. It is often called the last great battle between two samurai armies.",
    details: `The Battle of Tennōji was fought in Keichō 20 (1615) on the ground south of Osaka Castle, the final clash of the Summer Campaign that closed the Siege of Osaka. Against the Toyotomi of Toyotomi Hideyori, whose cause was carried by Yodo-dono and the celebrated Sanada Yukimura, stood the overwhelming strength of the Tokugawa shogunate under Tokugawa Ieyasu, Hidetada and Matsudaira Tadanao. The fighting was ruinous, the Tokugawa losing some 8,000 men and the Toyotomi more than 15,000; Sanada Yukimura fell here, in what is often described as his last battle. With the castle taken, Hideyori and Yodo-dono committed *seppuku* and Hideyori's young son was put to death, extinguishing the Toyotomi. The engagement closed the wars that had divided the realm and is frequently called the last great battle between two samurai armies, sealing Tokugawa supremacy.`,
    sources: [ { label: "Wikipedia: Battle of Tennōji", url: "https://en.wikipedia.org/wiki/Battle_of_Tenn%C5%8Dji" } ]
  },
  {
    id: "domyoji-1615", name: "Battle of Dōmyōji", year: 1615, dateLabel: "1615 (Keichō 20)", period: "Azuchi–Momoyama",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Osakagunki.jpg/960px-Osakagunki.jpg",
        caption: "Woodblock print from the series Osaka gunki, 1883, showing Goto Mototsugu and Sanada Nobushige, both commanders at Domyoji; Wikimedia Commons."
      }
    ],
    location: { name: "Dōmyōji, near Osaka (modern Fujiidera, Osaka)", lat: 34.5676, lon: 135.6201 },
    combatants: { side1: { name: "Tokugawa shogunate", leader: "Mizuno Katsushige, Date Masamune & others" }, side2: { name: "Toyotomi", leader: "Gotō Mototsugu & Sanada Yukimura" } },
    outcome: "Tokugawa victory; the Toyotomi commander Gotō Mototsugu was shot and took his own life.",
    summary: "At Dōmyōji in 1615, a Tokugawa army defeated the Toyotomi in one of the major clashes of the Osaka Summer Campaign; the celebrated Toyotomi commander Gotō Mototsugu was shot down and committed suicide, one of the battles that led to the fall of Osaka.",
    details: `The Battle of Dōmyōji was fought in 1615 near Tamateyama, in what is now Osaka Prefecture, as part of the Summer Campaign of the Siege of Osaka. A Tokugawa army of some 34,000, with commanders including Mizuno Katsushige, Honda Tadamasa, Matsudaira Tadaaki and Date Masamune, met a Toyotomi force of roughly 18,000 under Gotō Mototsugu, Sanada Yukimura and Susukida Kanesuke. In the fighting Gotō Mototsugu was shot and committed ritual suicide, and Susukida Kanesuke also fell; the day ended in a Tokugawa victory. The year is securely Keichō 20 (1615), the era changed to Genna only later that year, after the siege, though, the original date being lunar, the exact Western day is best treated with caution.`,
    sources: [ { label: "Wikipedia: Battle of Dōmyōji", url: "https://en.wikipedia.org/wiki/Battle_of_D%C5%8Dmy%C5%8Dji" } ]
  },
  {
    id: "utsunomiya-1868", name: "Battle of Utsunomiya Castle", year: 1868, dateLabel: "1868 (Keiō 4)", period: "Bakumatsu",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/UtsunomiyaCastle.jpg/960px-UtsunomiyaCastle.jpg",
        caption: "An Edo-period painted plan (ezu) of Utsunomiya Castle showing its honmaru, ninomaru and moats, the fortress fought over in 1868; Wikimedia Commons."
      }
    ],
    location: { name: "Utsunomiya Castle, Shimotsuke Province (modern Utsunomiya, Tochigi)", lat: 36.5547, lon: 139.8851 },
    combatants: { side1: { name: "Imperial (Meiji government)", leader: "Imperial army (Ōyama Iwao, Nozu Michitsura)" }, side2: { name: "Tokugawa shogunate remnants", leader: "Ōtori Keisuke & Hijikata Toshizō" } },
    outcome: "Imperial victory; the imperial army recaptured the castle, opening its advance into the northeast.",
    summary: "In spring 1868 the new Meiji government's imperial army recaptured Utsunomiya Castle from Tokugawa shogunate remnants under Ōtori Keisuke and Hijikata Toshizō, securing an early foothold for the imperial advance north during the Boshin War.",
    details: `During the Boshin War, the civil conflict that ended Tokugawa rule, a force of shogunate loyalists led by Ōtori Keisuke and the former Shinsengumi commander Hijikata Toshizō seized Utsunomiya Castle in Shimotsuke (present-day Utsunomiya, Tochigi) on 10 May 1868. The imperial army, with field commanders including Ōyama Iwao and Nozu Michitsura, counterattacked and retook the castle on 14 May, turning back the shogunate thrust. The fighting fell in the fourth lunar month of Keiō 4; the Meiji era proper would not begin until later that year, so the battle belongs to the closing months of the old reign-name rather than to "Meiji 1." Defeated here, the shogunate forces withdrew north by way of Nikkō toward Aizu, opening the imperial path into the northeast, where the war would continue.`,
    leadsTo: "aizu",
    sources: [ { label: "Wikipedia: Battle of Utsunomiya Castle", url: "https://en.wikipedia.org/wiki/Battle_of_Utsunomiya_Castle" } ]
  },
  {
    id: "hoji-war-1247", name: "Hōji War (Miura Rebellion)", year: 1247, dateLabel: "1247 (Hōji 1)", period: "Kamakura",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hokke-d%C5%8D_stele_-_Minamoto_no_Yoritomo_tomb_-_Kamakura%2C_Japan.JPG/960px-Hokke-d%C5%8D_stele_-_Minamoto_no_Yoritomo_tomb_-_Kamakura%2C_Japan.JPG",
        caption: "The stele at the site of the Hokke-dō beside Minamoto no Yoritomo's tomb in Kamakura, where Miura Yasumura and his kinsmen took their own lives in 1247; Wikimedia Commons."
      }
    ],
    location: { name: "Kamakura (Hokke-dō / Nishi Mikado), Sagami Province (modern Kanagawa)", lat: 35.3254, lon: 139.5565 },
    combatants: { side1: { name: "Hōjō (with the Adachi)", leader: "Hōjō Tokiyori (attack led by Adachi Yasumori)" }, side2: { name: "Miura", leader: "Miura Yasumura" } },
    outcome: "Decisive Hōjō victory; the Miura clan was destroyed, cementing Hōjō regental (tokusō) supremacy.",
    summary: "In 1247 the Hōjō, allied with the Adachi, destroyed the rival Miura clan at Kamakura, driving Miura Yasumura and some five hundred of his kin to mass suicide and cementing Hōjō supremacy over the Kamakura shogunate.",
    details: `By the mid-thirteenth century the Miura were among the most powerful warrior houses serving the Kamakura shogunate, and their rivalry with the regent's faction had become untenable. In 1247, the first year of the Hōji era, the conflict known as the Hōji War (宝治合戦), or Miura Rebellion (三浦の乱), came to a head when Adachi Yasumori's troops attacked Miura Yasumura's mansion in the Nishi Mikado quarter of Kamakura. Cornered, Yasumura and roughly five hundred members of the Miura clan barricaded themselves inside the Hokke-dō and committed *seppuku* together. With the Miura annihilated, the Hōjō under the regent Hōjō Tokiyori consolidated their authority over the shogunate, securing the *tokusō* line's dominance. The exact lunar date within the sixth month of Hōji 1 is recorded differently across sources, so it is given here only as the year 1247.`,
    sources: [ { label: "Japanese Wikipedia: Hōji War (宝治合戦)", url: "https://ja.wikipedia.org/wiki/宝治合戦" }, { label: "Wikipedia: Hōji era", url: "https://en.wikipedia.org/wiki/H%C5%8Dji_(era)" } ]
  },
  {
    id: "nakasendai-1335", name: "Nakasendai Rebellion", year: 1335, dateLabel: "1335 (Kenmu 2)", period: "Muromachi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%E4%BA%95%E6%89%8B%E3%81%AE%E6%B2%A2%E5%8F%A4%E6%88%A6%E5%A0%B4%E7%A2%91.jpg/960px-%E4%BA%95%E6%89%8B%E3%81%AE%E6%B2%A2%E3%81%AE%E6%B2%A2%E5%8F%A4%E6%88%A6%E5%A0%B4%E7%A2%91.jpg",
        caption: "The battlefield stele at Ide no sawa in Machida, where Hōjō Tokiyuki routed Ashikaga Tadayoshi on the march to Kamakura during the Nakasendai Rebellion of 1335. Wikimedia Commons."
      }
    ],
    location: { name: "Kamakura, Sagami Province (campaign from Shinano via Musashi; modern Kanagawa)", lat: 35.3160, lon: 139.5500 },
    combatants: { side1: { name: "Hōjō remnants", leader: "Hōjō Tokiyuki (backed by Suwa Yorishige)" }, side2: { name: "Ashikaga", leader: "Ashikaga Takauji" } },
    outcome: "Ashikaga victory; Takauji crushed the revolt, then broke with the Kenmu court, the spark of the Nanboku-chō wars.",
    summary: "In 1335 Hōjō Tokiyuki, son of the last Hōjō regent, briefly seized Kamakura and drove out Ashikaga Tadayoshi, but Ashikaga Takauji put down the revolt and took the city for himself; Takauji's move to reward his followers without imperial sanction broke his ties with Emperor Go-Daigo and set Japan on the road to the Ashikaga shogunate.",
    details: `In 1335 (Kenmu 2), Hōjō Tokiyuki, son of Takatoki, the last Hōjō regent of the fallen Kamakura shogunate, launched the Nakasendai Rebellion in an attempt to re-establish the shogunate at Kamakura. Backed by Suwa Yorishige and other clans loyal to the Hōjō, the rebels briefly occupied Kamakura and forced Ashikaga Tadayoshi to flee. Ashikaga Takauji then put down the revolt and took Kamakura for himself; Suwa Yorishige committed suicide at Shōchōju-in alongside his son and dozens of others. Having recovered the city, Takauji claimed the title of Sei-i Taishōgun and granted land to his followers without the court's permission, an act of defiance that ruptured his relationship with Emperor Go-Daigo, who sent Nitta Yoshisada against him. A rebellion meant to revive the old Hōjō order thus became the catalyst for the rise of the Ashikaga.`,
    leadsTo: "minatogawa",
    sources: [ { label: "Japanese Wikipedia: Nakasendai Rebellion (中先代の乱)", url: "https://ja.wikipedia.org/wiki/中先代の乱" }, { label: "Wikipedia: Ashikaga Takauji", url: "https://en.wikipedia.org/wiki/Ashikaga_Takauji" } ]
  },

  // ---- Added 2026-08-02. Audited gaps: the Boshin War had 5 of its engagements
  // pinned, the Edo layer held ONE battle across 237 years, and Nitta Yoshisada was in
  // the People layer though the battle he died in was not on the map. ----
  {
    id: "tadatsune-1028",
    sources: [ { label: "Japanese Wikipedia: 平忠常の乱 (Taira no Tadatsune Rebellion)", url: "https://ja.wikipedia.org/wiki/平忠常の乱" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Minamotono_Yorinobu.jpg",
        caption: "Minamoto no Yorinobu, the commander whose appointment ended the rising; woodblock print by Tsukioka Yoshitoshi, 1879, from the series Dai Nippon Meishō Kagami. The file's Commons description links the scene to the Konjaku Monogatarishū account of his march against Tadatsune; Wikimedia Commons."
      }
    ],
    name: "Taira no Tadatsune's Rebellion",
    year: 1028,
    dateLabel: "1028 to 1031 (Chōgen 1 to Chōgen 4)",
    period: "Heian",
    location: { name: "Kazusa provincial headquarters, Ichihara, Chiba Prefecture", lat: 35.49806, lon: 140.11544 },
    combatants: { side1: { name: "Rebels of the Bōsō provinces", leader: "Taira no Tadatsune", forces: "his own retainers and the landholders of Kazusa, Shimōsa and Awa" }, side2: { name: "Imperial court forces", leader: "Taira no Naokata and Nakahara Narimichi, later Minamoto no Yorinobu", forces: "pursuit envoys with levies raised from the eastern and central provinces" } },
    outcome: "Court victory. Tadatsune surrendered to Minamoto no Yorinobu in 1031 without a battle and died on the road to Kyoto; the three Bōsō provinces were left in ruins.",
    summary: "Taira no Tadatsune, the greatest landholder on the Bōsō peninsula, burned out a provincial governor and seized the Kazusa government office, then held off the court for three years. He gave in only when Minamoto no Yorinobu, his former lord, took command, and that surrender handed the Minamoto the east.",
    details: `Tadatsune was a grandson of Taira no Yoshifumi, an uncle of the rebel Masakado, and by the 1020s the largest landholder in Kazusa, Shimōsa and Hitachi. He ignored the governors sent from Kyoto and paid no tax. In the sixth lunar month of 1028 he had the governor of Awa burned to death and then occupied the Kazusa provincial headquarters, which stood in what is now Ichihara. The vice governor's family fled to the capital, local warriors joined him, and the rising spread across all three provinces of the Bōsō peninsula.

The court answered slowly and badly. Fujiwara no Sanesuke urged sending Minamoto no Yorinobu, who had made Tadatsune his sworn man years earlier while vice governor of Hitachi, but the command went to Taira no Naokata and Nakahara Narimichi, who left Kyoto with only two hundred men. The two quarrelled, achieved nothing in two years, and Narimichi was dismissed. Tadatsune stormed the Awa headquarters in 1030 and held a stronghold in Isumi district. Fighting, requisitioning by both sides and famine ruined the countryside; one official report claimed the cultivated land of Kazusa had fallen from 22,000 chō to 18.

In late 1030 the court finally gave the command to Yorinobu, by then governor of Kai. In the spring of 1031 Tadatsune shaved his head as a monk and surrendered without a fight, and he died of illness at Nogami in Mino on the road to the capital. His sons were pardoned and their line became the Chiba clan. The bloodless ending mattered more than any battle: the warriors of the east had seen that Tadatsune would yield to a Minamoto but not to the court's Taira, and many of them became Yorinobu's men. That allegiance is where Minamoto power in the Kantō begins.`
  },
  {
    id: "fujishima",
    sources: [ { label: "Japanese Wikipedia: 藤島の戦い (Battle of Fujishima)", url: "https://ja.wikipedia.org/wiki/%E8%97%A4%E5%B3%B6%E3%81%AE%E6%88%A6%E3%81%84" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/%E6%96%B0%E7%94%B0%E7%BE%A9%E8%B2%9E%E6%88%A6%E6%B2%A1%E4%BC%9D%E8%AA%AC%E5%9C%B0.jpg/960px-%E6%96%B0%E7%94%B0%E7%BE%A9%E8%B2%9E%E6%88%A6%E6%B2%A1%E4%BC%9D%E8%AA%AC%E5%9C%B0.jpg",
        caption: "The memorial at the traditional site of Nitta Yoshisada's death, Nittazuka, Fukui City. Photograph taken 2007. Wikimedia Commons, CC BY-SA 3.0."
      }
    ],
    name: "Battle of Fujishima",
    year: 1338,
    dateLabel: "August 17, 1338 (Engen 3 / Ryakuō 1, intercalary 7th month, 2nd day)",
    period: "Muromachi",
    location: { name: "Tōmyōji causeway, Fujishima, Echizen Province (modern Nittazuka, Fukui City)", lat: 36.08828889, lon: 136.20928611 },
    combatants: { side1: { name: "Ashikaga (Northern Court)", leader: "Shiba Takatsune, with Hosokawa of Echizen", forces: "about 300 horse in the encounter" }, side2: { name: "Southern Court", leader: "Nitta Yoshisada", forces: "an escort of about 50 horse" } },
    outcome: "Northern Court victory; Nitta Yoshisada was killed and the Southern Court lost its hold on Echizen.",
    summary: "The death of Nitta Yoshisada, the general who had destroyed Kamakura in 1333. Riding out with about fifty horsemen, he was cornered by a far larger Ashikaga force in the flooded rice country north of Fukui, hit by an arrow and killed himself.",
    details: `By 1338 Nitta Yoshisada had been fighting in Echizen for over a year, ever since Kanegasaki fell the previous spring. His target was Kuromaru, the fortress of Shiba Takatsune, the Ashikaga commander in the province. Yoshisada had drawn the warrior monks of Heisenji into his army, but Takatsune bought them off by confirming their claim to the Fujishima estate, and they changed sides. On the second day of the intercalary seventh month, Yoshisada rode out with an escort of about fifty horsemen to see why his troops were held up outside Fujishima castle. On the causeway at Tōmyōji, flat and waterlogged rice country, he ran into a relief column of roughly three hundred Ashikaga men. They dismounted and shot; his small party was caught in the open with nowhere to turn. The Taiheiki says his horse was brought down, that an arrow struck him between the eyes, and that he cut his own throat rather than be taken alive. He was about thirty-seven. The chronicle's numbers are not to be trusted in detail, but the outcome is not in doubt. Yoshisada's death came barely two months after Kitabatake Akiie was killed at Ishizu, and it left the Southern Court without either of its two best field commanders. Ashikaga Takauji was appointed shogun before the year was out. The spot where Yoshisada is said to have fallen, in what is now Nittazuka in Fukui City, was made a national historic site in 1924.`
  },
  {
    id: "shakushains-revolt-1669",
    sources: [ { label: "Wikipedia, Shakushain's revolt", url: "https://en.wikipedia.org/wiki/Shakushain%27s_revolt" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/01%E3%82%B7%E3%83%A3%E3%82%AF%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E5%83%8F%EF%BC%88%E6%96%9C%E3%82%81%EF%BC%89IMG_6337.jpg/960px-01%E3%82%B7%E3%83%A3%E3%82%AF%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E5%83%8F%EF%BC%88%E6%96%9C%E3%82%81%EF%BC%89IMG_6337.jpg",
        caption: "Statue of Shakushain at Shinhidaka, Hokkaido, photographed in 2016. Photo by Kakohamatugeniikou, CC BY-SA 4.0."
      }
    ],
    name: "Shakushain's Revolt",
    year: 1669,
    dateLabel: "June to 16 November 1669 (Kanbun 9/6 to 9/10/23)",
    period: "Edo",
    location: { name: "Shibuchari, Hidaka, Ezo (present-day Shinhidaka, Hokkaido)", lat: 42.329722, lon: 142.368056 },
    combatants: { side1: { name: "Ainu coalition of Ezo", leader: "Shakushain, chief of Shibuchari", forces: "About 2,000 fighters at the outbreak, mainly bows, with roughly 27 firearms" }, side2: { name: "Matsumae domain, backed by the Tokugawa shogunate", leader: "Matsumae Yasuhiro, shogunal commander, for the boy daimyo Matsumae Norihiro", forces: "Matsumae troops with about 70 firearms; men, guns and rice sent by Hirosaki, Morioka and Akita, including 700 Hirosaki soldiers on garrison duty" } },
    outcome: "Matsumae victory. Shakushain was murdered at a peace banquet at Pipok on 16 November 1669, resistance collapsed, and Matsumae took undisputed control of all trade in Ezo.",
    summary: "The largest Ainu rising against Japanese rule. Shakushain, chief of Shibuchari, united Ainu groups across Ezo against the Matsumae domain's trade monopoly in the summer of 1669, then was murdered at a peace banquet four months later, and the revolt died with him.",
    details: `Trade caused this war. From the early 1600s the shogunate gave the Matsumae domain the sole right to trade with the Ainu of Ezo, today's Hokkaido. Matsumae paid its samurai not in land but in trading posts, and those men set the exchange rates. In 1665 the rate for rice against salmon was moved so sharply against the Ainu that many families were left short of food.

The rising began as a quarrel between Ainu. Shakushain led the Menashikuru of the Shibuchari valley; Onibishi led the rival Shumkuru. Shakushain killed Onibishi in 1668. Onibishi's kin asked Matsumae for weapons and were refused, and when one envoy died of smallpox on the way home a rumour spread that Matsumae had poisoned him. That false report turned two feuding groups into one alliance.

In the sixth month of Kanbun 9, June 1669, Ainu rose from Shiranuka in the east to Mashike in the north west. Some two thousand fighters attacked gold panners, falconers and trading ships and killed about 356 Japanese, most of them not soldiers. Shakushain drove south west towards Matsumae Castle and was stopped at Kunnui, near modern Oshamambe. There the war turned. Edo ordered Hirosaki, Morioka and Akita to send men, guns and rice, and sent the hatamoto Matsumae Yasuhiro to command. Shakushain had about 27 firearms; his enemies gathered about 70.

Cut off from the Ainu of the Oshima peninsula, Shakushain fell back on his fort at Shibuchari and then accepted terms, his life promised. On Kanbun 9, tenth month, twenty third day, 16 November 1669, he entered the Matsumae camp at Pipok in today's Niikappu and was cut down at the peace banquet. His fort fell the next day. Mopping up ran to 1672, the Ainu swore obedience in a seven article oath, and Matsumae control of Ezo was never seriously challenged again.`
  },
  {
    id: "oshio-heihachiro-rebellion-1837",
    sources: [ { label: "Japanese Wikipedia, 大塩平八郎の乱 (Ōshio Heihachirō's Rebellion)", url: "https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%A1%A9%E5%B9%B3%E5%85%AB%E9%83%8E%E3%81%AE%E4%B9%B1" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Oshio_Heihachiro.jpg/960px-Oshio_Heihachiro.jpg",
        caption: "Ōshio Heihachirō, painted by Kikuchi Yōsai in the nineteenth century. Osaka Castle Museum collection."
      }
    ],
    name: "Ōshio Heihachirō's Rebellion",
    year: 1837,
    dateLabel: "25 March 1837 (Tenpō 8/2/19)",
    period: "Edo",
    location: { name: "Temma, Osaka", lat: 34.6968, lon: 135.5212 },
    combatants: { side1: { name: "Ōshio Heihachirō's insurgents", leader: "Ōshio Heihachirō", forces: "About 300; students of his Senshindō academy, villagers from the Osaka plain and townspeople, with a few light cannon" }, side2: { name: "Tokugawa shogunate, Osaka city magistracy and castle garrison", leader: "Atobe Yoshisuke, east city magistrate, under Osaka jōdai Doi Toshitsura", forces: "Yoriki and dōshin of the two city magistracies, backed by troops from Osaka Castle" } },
    outcome: "Rising broken up within half a day. The fires it lit destroyed about a fifth of Osaka. Ōshio hid for forty days, then killed himself on 1 May 1837.",
    summary: "A serving shogunal police officer turned Confucian teacher led some 300 followers against the magistrates of Osaka during the Tenpō famine. The rising was crushed in half a day, but the fires it started burned roughly a fifth of the city.",
    details: `Ōshio Heihachirō was no outsider. For years he served as a yoriki, a senior police officer in Osaka's east city magistracy, and he ran a private academy, the Senshindō, teaching the Wang Yangming school of Confucianism, which held that knowing what is right obliges you to act on it.

The Tenpō famine of the 1830s hit Osaka hard. Rice prices soared and the poor starved in the streets, while the magistrate Atobe Yoshisuke, brother of the senior councillor Mizuno Tadakuni, kept shipping rice to Edo. Ōshio sold his library and gave the money to the hungry, then petitioned the magistrate to open the granaries. Nothing came of it. He began buying weapons and had a manifesto cut on woodblocks and sent out to the villages, accusing officials and rich merchants of feeding themselves while the people died.

Two of his own followers informed on him. Ōshio moved at once. At dawn he set fire to his house in Temma as a signal, raised a banner reading kyūmin, save the people, and marched south with about 300 men. They crossed into Senba, the merchant quarter, and shelled and burned the great trading houses.

The magistrate's men met them within hours and the column broke apart. The fighting was over in half a day; the fires were not. They destroyed roughly a fifth of the city and drove tens of thousands from their homes. Ōshio hid in a merchant's house for forty days, then blew it up with himself and his adopted son inside.

The shock was national. A serving bakufu official had taken up arms against the bakufu, copycat risings followed within months, and the failure to feed Japan's richest city helped drive the Tenpō Reforms.`
  },
  {
    id: "hokuetsu-nagaoka-1868",
    sources: [ { label: "Wikipedia: Battle of Hokuetsu", url: "https://en.wikipedia.org/wiki/Battle_of_Hokuetsu" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Kawai_Tugunosuke.jpg",
        caption: "Kawai Tsugunosuke, chief retainer of Nagaoka domain, in a photograph of the late Edo period; Nagaoka City Central Library collection, via Wikimedia Commons."
      }
    ],
    name: "Hokuetsu War (Battle of Nagaoka Castle)",
    year: 1868,
    dateLabel: "June to September 1868 (Keiō 4, fifth to eighth lunar months)",
    period: "Bakumatsu",
    location: { name: "Nagaoka Castle, Echigo Province (modern Nagaoka, Niigata Prefecture)", lat: 37.4476, lon: 138.8531 },
    combatants: { side1: { name: "Imperial (Meiji government) forces", leader: "Yamagata Aritomo and Yamada Akiyoshi", forces: "several tens of thousands across the campaign; figures vary widely" }, side2: { name: "Nagaoka domain and the Ōuetsu Reppan Dōmei", leader: "Kawai Tsugunosuke, for the daimyō Makino Tadakuni", forces: "about 2,000 Nagaoka troops, with Aizu, Yonezawa and Kuwana contingents" } },
    outcome: "Imperial victory. Nagaoka Castle fell on 8 July 1868, was retaken by Kawai Tsugunosuke on 10 September and lost again on 15 September; all Echigo passed to the new government.",
    summary: "Nagaoka domain tried to stay out of the Boshin War, and when the imperial commanders refused to hear it, its chief retainer Kawai Tsugunosuke fought them with modern rifles and two of the only three Gatling guns in Japan. His castle fell, was recaptured in a night crossing of a marsh, then fell for good.",
    leadsTo: "aizu",
    details: `Nagaoka was a mid-sized domain on the Sea of Japan coast. Its chief retainer, Kawai Tsugunosuke, had spent years buying modern weapons through the foreign traders at Yokohama and Nagasaki, and he wanted his domain to stay out of the war and broker peace instead. On 21 June 1868 (Keiō 4/5/2) he met the imperial army inspector Iwamura Seiichirō at Jigen-ji temple in Ojiya and asked for a pause. Iwamura, who saw only the retainer of a small domain, broke off the talks almost at once. Nagaoka joined the Ōuetsu Reppan Dōmei, the alliance of northern domains, and fought.

What followed was the hardest fighting of the northern war. Nagaoka's small army had imported rifles and two of the only three Gatling guns then in Japan, and it held the passes and river crossings south of the town for weeks. On 8 July (5/19) government troops crossed the Shinano River at an unguarded point and took Nagaoka Castle, which burned.

Kawai did not leave it there. On the night of 10 September (7/24) he ferried some 680 men across the Hatchōoki, a shallow marsh the government side had thought impassable, and retook the castle at dawn. It was the boldest stroke of the campaign, but he was shot through the knee in the street fighting. Government troops recovered the town on 15 September (7/29) and landed on the coast to seize the port of Niigata, cutting the alliance off from imported arms. Carried over the mountains toward Aizu, Kawai died of the infected wound on 1 October 1868 (8/16).

Roughly a thousand men died on each side. With Echigo gone, Aizu stood alone. The dates here are converted from the lunar calendar; the era name was still Keiō, since Meiji was proclaimed only that October.`
  },
  {
    id: "miyako-bay-1869",
    sources: [ { label: "Wikipedia: Battle of Miyako Bay", url: "https://en.wikipedia.org/wiki/Battle_of_Miyako_Bay" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Takao1869.jpg/960px-Takao1869.jpg",
        caption: "The Takao, as pictured in the 1874 French account 'Une aventure au Japon 1868-1869'. Wikimedia Commons."
      }
    ],
    name: "Naval Battle of Miyako Bay",
    year: 1869,
    dateLabel: "6 May 1869 (Meiji 2/3/25)",
    period: "Bakumatsu",
    location: { name: "Miyako Bay, Mutsu Province (modern Iwate Prefecture)", lat: 39.66, lon: 142 },
    combatants: { side1: { name: "Imperial forces (Meiji government)", leader: "Masuda Toranosuke; Kōtetsu under Nakajima Shirō", forces: "8 ships including the ironclad Kōtetsu; about 2,500 sailors and officers" }, side2: { name: "Ezo Republic (Tokugawa loyalists)", leader: "Arai Ikunosuke; boarding party under Kōga Gengo", forces: "3 warships sent, only the Kaiten reached the target; about 500 samurai" } },
    outcome: "Imperial victory. The Kōtetsu was not taken, the boarding party was shot down, and the Ezo steamer Takao was beached and scuttled during the retreat.",
    summary: "The Ezo Republic's one attempt to go on the offensive: a boarding raid meant to capture the imperial ironclad Kōtetsu at anchor in Miyako Bay. Only one of the three attacking ships arrived, and a Gatling gun cut the boarders down as they dropped onto the ironclad's deck.",
    leadsTo: "hakodate",
    details: `When the Meiji government sent its fleet north in the spring of 1869 to finish off the Ezo Republic, the Tokugawa loyalists on Hokkaido knew they could not beat it in a straight fight. One imperial ship decided everything: the Kōtetsu, a French built ironclad bought from the United States and the only armoured warship in Japanese waters. Wooden ships could not hurt it.

Enomoto Takeaki decided to steal it instead. On 6 May 1869 three Ezo warships headed for Miyako Bay in northern Honshu, where the imperial fleet lay at anchor. The plan, drawn up by the French adviser Eugène Collache, was to enter flying an American flag, pull alongside the Kōtetsu and take her by boarding, in the old style, with swords.

The weather wrecked it. The Banryū lost the squadron and turned back; the Takao broke down and straggled. Only the flagship Kaiten arrived. She swapped the American flag for the Ezo flag and rammed the ironclad's side. But the Kaiten's deck stood nearly three metres above the Kōtetsu's, so the boarders had to drop down one at a time instead of swarming across. The imperial crew recovered from the shock, swung a Gatling gun onto the gap and cut them down. Kōga Gengo, who led the boarding party, was killed at his post.

The Kaiten tore free and ran for Hokkaido, damaging three ships on the way out. The Takao, arriving just as the flagship left, was too slow to escape, so her crew beached her, blew her up and fled inland before surrendering.

This was the first attempt in Japan to capture an ironclad steamship by boarding, and it failed. The Kōtetsu sailed on undamaged to cover the imperial landings at Hakodate.`
  },

  // ---- Sengoku additions 2026-08-10. Proposed per theatre, triaged per theatre,
  // then 15 of 36 cut as second rank. Coordinates reverse-geosearched: most land within
  // metres of the site, several on the article for the event itself. ----
  {
    id: "kyotoku-war",
    sources: [ { label: "Wikipedia: Kyōtoku incident", url: "https://en.wikipedia.org/wiki/Ky%C5%8Dtoku_incident" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Koga_castle_suwakuruwa_dorui_hori.jpg/960px-Koga_castle_suwakuruwa_dorui_hori.jpg",
        caption: "Earth rampart and moat of the Suwa bailey at Koga Castle in Koga, Ibaraki, the seat Ashikaga Shigeuji took in 1455 and held as Koga kubō. Photograph by Monado, 2007, CC BY-SA 2.5 via Wikimedia Commons."
      }
    ],
    name: "Kyōtoku War (Kyōtoku no Ran)",
    year: 1455,
    dateLabel: "Kyōtoku 3.12.27 to Bunmei 14.11.27 (1455 to 1483)",
    period: "Muromachi",
    location: { name: "Koga Castle, Shimōsa Province (modern Koga, Ibaraki)", lat: 36.186889, lon: 139.695472 },
    combatants: { side1: { name: "Koga kubō side", leader: "Ashikaga Shigeuji", forces: "Yūki, Oyama, Nasu, Takeda of Kazusa and other eastern Kantō houses" }, side2: { name: "Uesugi houses and the shogunate", leader: "Uesugi Fusaaki, later Uesugi Akisada and Uesugi Sadamasa", forces: "Yamanouchi and Ōgigayatsu Uesugi with Ōta Dōkan, a shogunal army under Imagawa Noritada, and from 1457 the Horigoe kubō Ashikaga Masatomo" } },
    outcome: "Stalemate closed by the peace of Bunmei 14. Shigeuji kept the east as Koga kubō, the Uesugi held the west, and Kamakura ceased to be the seat of Kantō government.",
    summary: "A twenty eight year civil war for the Kantō, begun when the Kamakura kubō Ashikaga Shigeuji murdered his own deputy, the Kantō kanrei Uesugi Noritada. It split the region along the Tone, created the rival Koga and Horigoe kubō, and for many historians opens the warring states age in the east.",
    details: `In the twelfth month of Kyōtoku 3, Ashikaga Shigeuji, the shogun's governor at Kamakura, invited his own deputy to his palace and had him cut down. Uesugi Noritada belonged to the house that had driven Shigeuji's father to suicide in 1439, and the killing settled that score at the cost of the Kantō. The Uesugi vassals rose at once, the shogun Yoshimasa declared Shigeuji a rebel, and in 1455 a shogunal army under Imagawa Noritada took Kamakura. Shigeuji withdrew east to Koga and ruled from there as the Koga kubō.

Neither side could finish the other. The Tone became a military frontier, with Koga and the eastern houses, Yūki, Oyama and Chiba, on one bank and the two Uesugi branches, Yamanouchi and Ōgigayatsu, on the other, dug in at their long standing camp at Igarasu in Musashi. In 1457 the shogun sent his half brother Ashikaga Masatomo east as the lawful governor, but Masatomo could not enter Kamakura and settled at Horigoe in Izu, so the Kantō now had two kubō. In the same year the Uesugi retainer Ōta Dōkan raised new fortresses to hold the western line, among them Kawagoe and Edo.

The war outlasted the Ōnin War in the capital and was decided less by any battle than by the Uesugi side tearing itself apart in the revolt of Nagao Kageharu, which carried the Igarasu camp in 1477. Peace came in the eleventh month of Bunmei 14. Shigeuji was recognised as kubō at Koga, Izu was left to the Horigoe line, and nobody went back to Kamakura. Both institutions the war created were later swept away by the Later Hōjō, Horigoe in 1493. Many historians date the warring states age in eastern Japan from 1455, not 1467.`
  },
  {
    id: "yamashiro-kuni-ikki",
    sources: [ { label: "Wikipedia: Yamashiro ikki", url: "https://en.wikipedia.org/wiki/Yamashiro_ikki" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jinson.jpg/960px-Jinson.jpg",
        caption: "Jinson (1430 to 1508), abbot of the Daijōin at Kōfuku-ji, whose diary is the only record of the assembly and of its verdict on gekokujō. Sixteenth-century portrait, artist unknown. Wikimedia Commons."
      }
    ],
    name: "Yamashiro no Kuni Ikki",
    year: 1486,
    dateLabel: "Bunmei 17/12/11 (January 1486); self-rule to Meiō 2 (1493)",
    period: "Muromachi",
    location: { name: "Kami-Koma, Sōraku district, southern Yamashiro Province (modern Kizugawa, Kyoto); one of the league's assembly villages", lat: 34.75049, lon: 135.82108 },
    combatants: { side1: { name: "Yamashiro provincial league (kuni-ikki)", leader: "The kokujin of Kuse, Tsuzuki and Sōraku districts, later organised as the 'thirty-six'", forces: "the assembled landholders of the three southern districts, from men of sixty to boys of fifteen, with a crowd of villagers" }, side2: { name: "Hatakeyama clan, both warring branches", leader: "Hatakeyama Masanaga (east) and Hatakeyama Yoshinari (west)", forces: "about 1,500 under Masanaga, about 1,000 under Yoshinari" } },
    outcome: "Both Hatakeyama armies withdrew within six days; the league then governed the three southern districts itself until it voted to submit to the shogunate's governor in 1493.",
    summary: "On the eleventh day of the twelfth month of Bunmei 17, a date that falls in January 1486, the warrior landholders of the three southern districts of Yamashiro met in assembly, ordered both warring Hatakeyama armies out of the province, and then governed it themselves for close to eight years.",
    details: `After the Ōnin War ended, the two claimants to the Hatakeyama house, Masanaga and Yoshinari, kept fighting, and southern Yamashiro became their battleground. By the tenth month of Bunmei 17 the two armies were dug in either side of the Kuse and Tsuzuki district boundary, roughly 1,500 men to the north and 1,000 to the south, feeding off villages that had been fought over for years.

On the eleventh day of the twelfth month the kokujin, the resident warrior landholders of Kuse, Tsuzuki and Sōraku, called a general assembly with a crowd of villagers looking on. Jinson, abbot of the Daijōin at Kōfuku-ji in Nara, wrote in his diary that they came from men of sixty down to boys of fifteen or sixteen, then added the line every textbook now quotes: fitting, perhaps, but also gekokujō in the extreme, the low overturning the high.

The assembly ordered both armies out, and within six days both had gone. At Byōdō-in in Uji, in the second month of Bunmei 18, the league put its terms in writing: no Hatakeyama troops in the province, estate rights as before, dues to be paid, no new toll barriers. A council remembered as the thirty-six, served by officers who rotated month by month, then ran policing, the roads and taxation.

Self-rule lasted close to eight years. Taxing the villages to pay for itself split the league from the farmers who had backed it, the shogunate installed Ise Sadamichi as governor, and in 1493 an assembly voted to submit. Holdouts were stormed in Inayazuma castle in Sōraku.`
  },
  {
    id: "izu-invasion",
    sources: [ { label: "Japanese Wikipedia: 伊豆討ち入り (Invasion of Izu)", url: "https://ja.wikipedia.org/wiki/%E4%BC%8A%E8%B1%86%E8%A8%8E%E3%81%A1%E5%85%A5%E3%82%8A" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%E4%BC%9D%E5%A0%80%E8%B6%8A%E5%BE%A1%E6%89%80%E8%B7%A1.jpg/960px-%E4%BC%9D%E5%A0%80%E8%B6%8A%E5%BE%A1%E6%89%80%E8%B7%A1.jpg",
        caption: "The site of the Horigoe palace at Jike, Izunokuni, Shizuoka Prefecture, a national historic site. Photograph, 2022. Wikimedia Commons."
      }
    ],
    name: "Invasion of Izu (fall of the Horigoe kubō)",
    year: 1493,
    dateLabel: "Meiō 2, 10th month (November 1493); exact day unrecorded",
    period: "Muromachi",
    location: { name: "Horigoe palace site, Jike, Izu Province (modern Izunokuni, Shizuoka Prefecture)", lat: 35.0485, lon: 138.9382 },
    combatants: { side1: { name: "Ise (later Hōjō) forces, with Imagawa support", leader: "Ise Moritoki (Sōzui), later known as Hōjō Sōun", forces: "Numbers unrecorded. Ise housemen from Bitchū, Tōtōmi and Mikawa, Imagawa retainers under the Kazurayama, and Izu landholders such as the Suzuki of Enashi and the Tominaga" }, side2: { name: "Horigoe kubō", leader: "Ashikaga Chachamaru", forces: "Numbers unrecorded. Retainers of the kubō house and Izu warriors, with Yamanouchi Uesugi backing" } },
    outcome: "Chachamaru abandoned the Horigoe palace and fled south. The Horigoe kubō ended after two holders, and Izu passed to Ise Moritoki, the future Hōjō Sōun.",
    summary: "In 1493 the shogunal officer Ise Moritoki, later known as Hōjō Sōun, crossed from Suruga into Izu and stormed the palace of the Horigoe kubō, the Ashikaga branch the shogunate had planted there. Its holder fled, the line ended, and Sōun gained the province that became the cradle of the Later Hōjō.",
    details: `Izu held an awkward experiment. In 1457 the shogunate sent Ashikaga Masatomo east to replace the rebel Kamakura kubō, but he could never enter Kamakura and settled instead at Horigoe in the north of the province, becoming the Horigoe kubō. The settlement of 1483 that closed the Kyōtoku War recognised his rival at Koga and left Masatomo lord of Izu alone.

Masatomo died in 1491. He had disinherited his eldest son, Chachamaru, in favour of a younger half-brother, Jundōji; Chachamaru struck first, killed Jundōji and the boy's mother inside the palace, and seized the office by force. That made him the killer of the mother and brother of Kyoto's next shogun, for Jundōji's full brother Seikō was being groomed for the succession. When Hosokawa Masamoto's coup in the fourth month of 1493 installed Seikō as shogun Ashikaga Yoshizumi, Chachamaru's crime became a matter of state.

Ise Moritoki, a shogunal retainer who had made himself indispensable to the Imagawa of Suruga, held Kōkokuji castle just across the border and had lost his own Izu estates to Chachamaru. Whether he was formally ordered to avenge the new shogun's kin or simply read the mood in Kyoto, he attacked that year with Imagawa backing and with Izu landholders joining him. In the tenth month Chachamaru abandoned Horigoe and fled south.

Older accounts make this the opening act of gekokujō, the low overthrowing the high; recent scholarship stresses instead how closely it tracked Kyoto politics. Moritoki, remembered by his monastic name as Hōjō Sōun, built a base at Nirayama, took Odawara the next year, and founded the house that held the Kantō for a century. Chachamaru fought on until his death in 1498.`
  },
  {
    id: "nagamorihara",
    sources: [ { label: "Japanese Wikipedia: 長森原の戦い (Battle of Nagamorihara)", url: "https://ja.wikipedia.org/wiki/%E9%95%B7%E6%A3%AE%E5%8E%9F%E3%81%AE%E6%88%A6%E3%81%84" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%E7%AE%A1%E9%A0%98%E5%A1%9A.jpg/960px-%E7%AE%A1%E9%A0%98%E5%A1%9A.jpg",
        caption: "The Kanreizuka mound, traditionally held to be the grave of Uesugi Akisada, in the historic park at Shimobara-shinden, Minamiuonuma, Niigata. Photograph by 黒エサ屋さん, 2023, CC BY-SA 4.0, via Wikimedia Commons."
      }
    ],
    name: "Battle of Nagamorihara",
    year: 1510,
    dateLabel: "July 25, 1510 (Eishō 7/6/20)",
    period: "Muromachi",
    location: { name: "Nagamorihara, Echigo Province (modern Shimobara-shinden, Minamiuonuma, Niigata Prefecture)", lat: 37.1018, lon: 138.9202 },
    combatants: { side1: { name: "Echigo Nagao clan, with Takanashi reinforcements from Shinano", leader: "Nagao Tamekage and Takanashi Masamori", forces: "about 500 under Tamekage, joined by roughly 700 Takanashi troops" }, side2: { name: "Yamanouchi Uesugi clan", leader: "Uesugi Akisada, Kantō kanrei", forces: "about 800 in the retreating column" } },
    outcome: "Nagao victory. Akisada died on the field with Nagao Sadaaki and Takayama Norishige; Tamekage took effective control of Echigo and the Yamanouchi Uesugi never recovered.",
    summary: "Retreating from a failed occupation of Echigo, the Kantō kanrei Uesugi Akisada was overtaken on the Nagamorihara plain and died there. Nagao Tamekage, the deputy governor whose revolt had killed Akisada's brother, then held Echigo outright and founded the line that produced Uesugi Kenshin.",
    details: `Nagamorihara closed the Eishō disturbance, the quarrel that broke the old order in Echigo. In 1507 the shugodai, or deputy governor, Nagao Tamekage rebelled against his lord Uesugi Fusayoshi, drove him to suicide at Amamizukoshi, and installed a puppet, Uesugi Sadazane, in his place. Fusayoshi's elder brother was Uesugi Akisada, head of the Yamanouchi Uesugi and Kantō kanrei, the shogunate's deputy for the eastern provinces, an office he had held for more than forty years.

In the seventh month of 1509 Akisada crossed into Echigo to avenge his brother. He seized the provincial seat at Funai and drove Tamekage and Sadazane out of the province altogether. The occupation then went wrong. Akisada governed heavily, and the Echigo kokujin, the local warrior landholders, turned against him. Tamekage came back across the sea the next summer, retook Funai, and Akisada began to withdraw southward toward the Mikuni road and home.

On the twentieth day of the sixth month his column of some 800 men was caught on the alluvial fan of the Udasawa river. Tamekage attacked with about 500 and was held off, but Takanashi Masamori then arrived from Shinano with roughly 700 more and struck the flank. Akisada died in the rout, aged fifty-seven, along with Nagao Sadaaki and Takayama Norishige; the sources differ over whether he was cut down or took his own life.

Tamekage now ruled Echigo in fact, with Sadazane as a figurehead. The Yamanouchi Uesugi fell into a succession war and never recovered. Half a century later, in 1561, it was Tamekage's son Kagetora who received both the Uesugi surname and the kanrei title, becoming Uesugi Kenshin.`
  },
  {
    id: "yoshida-koriyama-1540",
    sources: [ { label: "Wikipedia: Siege of Yoshida-Kōriyama Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Yoshida-K%C5%8Driyama_Castle" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Yoshida-kouriyama_Castle_Honmaru.JPG/960px-Yoshida-kouriyama_Castle_Honmaru.JPG",
        caption: "The honmaru and inner enclosures of the Yoshida-Kōriyama Castle ruins at Akitakata, Hiroshima Prefecture; Wikimedia Commons."
      }
    ],
    name: "Siege of Yoshida-Kōriyama Castle",
    year: 1540,
    dateLabel: "1540–1541 (Tenbun 9/9/4 to Tenbun 10/1/13)",
    period: "Muromachi",
    location: { name: "Yoshida-Kōriyama Castle, Aki (modern Akitakata, Hiroshima)", lat: 34.674286, lon: 132.709589 },
    combatants: { side1: { name: "Mōri, with Ōuchi relief", leader: "Mōri Motonari; relief under Sue Takafusa", forces: "About 3,000 fighting men in the castle with some 5,000 non-combatants sheltering inside, plus an Ōuchi relief army of 10,000" }, side2: { name: "Amago", leader: "Amago Haruhisa, then still named Akihisa", forces: "A reported 30,000" } },
    outcome: "Mōri victory; the Amago broke off the siege after Amago Hisayuki was killed. Aki stayed in Ōuchi hands and Amago expansion westward ended permanently.",
    summary: "Amago Haruhisa brought a reported 30,000 men into Aki to destroy Mōri Motonari, who held Yoshida-Kōriyama with about 3,000. Motonari raided out of the castle all winter until an Ōuchi relief army arrived and drove the Amago off. Aki stayed Ōuchi, and the Mōri became a power in their own right.",
    details: `Yoshida-Kōriyama was the Mōri seat, a fortified mountain in the hills of Aki. Through the 1530s Mōri Motonari had balanced between the two great powers of western Japan, the Ōuchi of Suō to his west and the Amago of Izumo to his north. By 1540 he had committed to the Ōuchi, and Amago Haruhisa, then still called Akihisa, invaded Aki to settle the matter.

The Amago camped below the castle in the ninth month of Tenbun 9 with a reported 30,000 men. Motonari had perhaps 3,000 fighting men and some 5,000 villagers sheltering behind his walls, and he refused to simply sit there. Through the autumn he fought a running series of sorties and ambushes down the wooded spurs, denying the Amago the open battle they wanted and bleeding them in the ravines instead.

Late in the year an Ōuchi relief army of 10,000 arrived under Sue Takafusa, the man who would later destroy his own lord and die at Itsukushima. On the thirteenth day of the first month of Tenbun 10 a joint Mōri and Ōuchi attack broke the Amago lines. The aged Amago Hisayuki, brother of the clan's builder Tsunehisa, had opposed the invasion and been mocked as a coward for it; he was killed by an arrow leading a last charge. That night the Amago withdrew through the snow.

Three things followed. Amago expansion westward stopped for good. The emboldened Ōuchi invaded Izumo the next year and were wrecked at Gassantoda. And Motonari, who had held his own castle with his own men, stepped out of the crowd of small Aki lords into the front rank.`
  },
  {
    id: "tenbun-no-ran",
    sources: [ { label: "Japanese Wikipedia: 天文の乱 (Tenbun no Ran)", url: "https://ja.wikipedia.org/wiki/天文の乱" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Date_Tanemune.JPG/960px-Date_Tanemune.JPG",
        caption: "Portrait of Date Tanemune, whose plan to place a son over the Uesugi split his house; Edo period painting held by the Sendai City Museum. Wikimedia Commons."
      }
    ],
    name: "Tenbun no Ran (Date Succession War)",
    year: 1542,
    dateLabel: "Sixth month, Tenbun 11 to ninth month, Tenbun 17 (1542 to 1548)",
    period: "Muromachi",
    location: { name: "Koori Nishiyama Castle, Date district, Mutsu Province (modern Koori, Fukushima)", lat: 37.855417, lon: 140.508333 },
    combatants: { side1: { name: "Date clan, Tanemune faction, with Sōma, Kakeda, Ōsaki and Mogami allies", leader: "Date Tanemune", forces: "most of the houses of southern Ōu at the outset" }, side2: { name: "Date clan, Harumune faction, with the Nakano and Koori retainers and, from 1547, the Ashina", leader: "Date Harumune", forces: "core Date retainers, growing steadily by defection" } },
    outcome: "Harumune victory. Tanemune retired, Harumune took the clan and moved its seat to Yonezawa, but Date overlordship of southern Ōu was broken.",
    summary: "A six year civil war inside the Date house, fought between Date Tanemune and his son Harumune over a plan to place a Date son over the Uesugi of Echigo. It pulled in almost every clan of southern Ōu and broke Date power for a generation.",
    details: `Date Tanemune, fourteenth head of the house, had spent thirty years marrying his many children into the neighbouring clans of southern Ōu. By the 1540s he held ten districts, the office of shugo of Mutsu, and the submission of the Ashina, Sōma, Mogami, Ōsaki and Kasai; his law code, the Jinkaishū of 1536, was one of the most ambitious of the age. In 1542 he proposed to send his third son Tokimunemaru, later Date Sanemoto, to be adopted as heir of Uesugi Sadazane, the shugo of Echigo, and to send a hundred picked retainers with him. His heir Harumune, backed by senior men who resented his father's centralising, refused.

In the sixth month of Tenbun 11 Harumune ambushed his father returning from a hawking trip and shut him in the family seat, Koori Nishiyama Castle. Tanemune was smuggled out by the retainer Koyanagawa Munetomo, reached Kakeda Castle held by his son-in-law Kakeda Toshimune, and called on his relatives by marriage. Sōma, Mogami, Ōsaki and others rose for him, and the quarrel became a general war. Tanemune held the advantage until 1547, when a falling out between Tamura Takaaki and Ashina Moriuji carried the Ashina over to Harumune. Defections followed, and in the ninth month of Tenbun 17 a settlement issued in the name of the shogun Ashikaga Yoshiteru required Tanemune to retire.

The cost was enormous. Tanemune withdrew to Marumori, Harumune moved the seat to Yonezawa and Nishiyama was razed. Ashina, Sōma and Mogami broke free, the Ashina rising to rival the Date outright, and the Date sons planted on the Ōsaki and Kasai were killed. Kakeda fought on for five more years. Not until Date Masamune, two generations later, did the house recover its reach.`
  },
  {
    id: "eguchi",
    sources: [ { label: "Japanese Wikipedia: Battle of Eguchi (江口の戦い)", url: "https://ja.wikipedia.org/wiki/%E6%B1%9F%E5%8F%A3%E3%81%AE%E6%88%A6%E3%81%84" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eguti9.jpg/960px-Eguti9.jpg",
        caption: "The Yodo River in Higashiyodogawa Ward, Osaka, near the presumed site of Eguchi Castle. Wikimedia Commons."
      }
    ],
    name: "Battle of Eguchi",
    year: 1549,
    dateLabel: "July 6–18, 1549 (Tenbun 18/6/12–24)",
    period: "Muromachi",
    location: { name: "Eguchi Castle, Settsu Province (modern Higashiyodogawa Ward, Osaka)", lat: 34.749908, lon: 135.550727 },
    combatants: { side1: { name: "Miyoshi Nagayoshi, allied with Hosokawa Ujitsuna", leader: "Miyoshi Nagayoshi", forces: "about 3,000 at Eguchi, with his brothers Atagi Fuyuyasu and Sogō Kazumasa" }, side2: { name: "Hosokawa Harumoto's party", leader: "Miyoshi Masanaga (killed), with Hosokawa Harumoto in support at Miyake", forces: "about 3,000 in the castle" } },
    outcome: "Decisive victory for Nagayoshi. Masanaga was killed with about 800 men; Harumoto abandoned Kyoto and the Miyoshi took control of the capital region.",
    summary: "Miyoshi Nagayoshi trapped his kinsman and rival Miyoshi Masanaga between the Yodo and Kanzaki rivers north of Osaka and destroyed him, breaking the shogunal deputy Hosokawa Harumoto and driving the shogun himself out of Kyoto.",
    details: `Eguchi sat on low, flat ground where the Kanzaki River branches off the Yodo, north of modern Osaka. Water on three sides made it a strong post and, if the waterways were closed, a trap. Miyoshi Masanaga occupied it on the eleventh day of the sixth month of 1549, meaning to wedge himself between his enemy's two forces and hold the road open until a relief army from Ōmi arrived.

Masanaga was Hosokawa Harumoto's trusted kinsman and confidant. Harumoto governed the capital region in the shogun's name, and Masanaga had spent years intriguing against the senior Miyoshi line. Its head, Miyoshi Nagayoshi, asked Harumoto to have Masanaga put to death; when Harumoto refused, Nagayoshi went over to Harumoto's rival Hosokawa Ujitsuna. He now posted his brothers Atagi Fuyuyasu and Sogō Kazumasa north of Eguchi, severing the castle from Harumoto's army and from its supplies.

Fighting began on the twelfth. For nearly two weeks the garrison waited on food that never came. On the twenty fourth, with a Rokkaku relief column of some ten thousand men only half a day away at Yamazaki, Nagayoshi struck from two sides at once. The starving defenders broke. Masanaga fell with roughly eight hundred of his men; one tradition holds that he drowned trying to escape down the Yodo.

Harumoto never gave battle. He withdrew the next day, then fled to Sakamoto on Lake Biwa with the young shogun Ashikaga Yoshiteru and his father Yoshiharu. Nagayoshi entered Kyoto three weeks later. For the next fifteen years the Kinai was run neither by the shogun nor by a Hosokawa deputy, but by the Miyoshi.`
  },
  {
    id: "satta-pass",
    sources: [ { label: "Japanese Wikipedia: 薩埵峠の戦い (戦国時代) (Battle of Satta Pass, Sengoku period)", url: "https://ja.wikipedia.org/wiki/薩埵峠の戦い_(戦国時代)" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mount_Fuji_and_Ashitaka_Mountains_from_Satta_Pass.JPG/960px-Mount_Fuji_and_Ashitaka_Mountains_from_Satta_Pass.JPG",
        caption: "Satta Pass looking east across Suruga Bay to Mount Fuji. Road, railway and expressway share the one narrow shelf between cliff and sea that the Imagawa tried to hold. Photograph by Alpsdake, 2016, Wikimedia Commons, CC BY-SA 4.0."
      }
    ],
    name: "Battle of Satta Pass and the Fall of Sunpu",
    year: 1568,
    dateLabel: "December 30 to 31, 1568 (Eiroku 11/12/12 to 12/13)",
    period: "Muromachi",
    location: { name: "Satta Pass, Suruga Province (modern Shimizu ward, Shizuoka city)", lat: 35.0717, lon: 138.5412 },
    combatants: { side1: { name: "Takeda clan", leader: "Takeda Shingen", forces: "army out of Kai; strength not reliably recorded" }, side2: { name: "Imagawa clan", leader: "Imagawa Ujizane", forces: "a reported 15,000 at the pass under Ihara Tadatane" } },
    outcome: "Decisive Takeda victory. Sunpu fell in a day and Ujizane fled to Kakegawa; the Imagawa ended as a daimyo house and the Kai-Sagami-Suruga alliance collapsed.",
    summary: "Takeda Shingen tore up the Kai-Sagami-Suruga alliance and marched on Suruga. His agents had already bought the Imagawa high command, so the defence of Satta Pass dissolved without a real battle and Sunpu fell in a single day.",
    details: `For fourteen years the Kai-Sagami-Suruga alliance of 1554 had kept the Takeda, Hōjō and Imagawa from one another's throats. After Imagawa Yoshimoto fell at Okehazama in 1560 his son Ujizane could not carry that weight. Takeda Shingen, landlocked in Kai, wanted a coastline, and he agreed secretly with Tokugawa Ieyasu to divide the Imagawa lands at the Ōi River.

Shingen left Kōfu on Eiroku 11/12/6 and was in Suruga six days later. Ujizane sent Ihara Tadatane with a reported 15,000 men to hold Satta Pass, where the mountains fall into Suruga Bay and the Tōkaidō is squeezed onto a shelf between cliff and water. It is the one place a small force can stop a large one, and Ujizane meant to pin Shingen there until his father-in-law Hōjō Ujiyasu came up behind. The plan never reached the fighting. Takeda and Tokugawa agents had already turned the Imagawa's own senior men, among them Asahina Nobuoki and Sena Nobuteru; the chronicle Matsudaira ki counts twenty-one. Fighting opened on 12/12. On the 13th Ujizane fled his camp at Seiken-ji, the line dissolved behind him, and Takeda troops were inside Sunpu the same day. Baba Nobuharu took the hill fort above the town and burned the Imagawa mansion. Ujizane's wife, Ujiyasu's daughter, escaped on foot for want of a palanquin.

Ujizane reached Kakegawa in Tōtōmi and gave it up in the fifth month of 1569. The Imagawa were finished as a daimyo house. The insult to his daughter turned Ujiyasu against Shingen, and the eastern settlement of 1554 came apart, producing the Hōjō pact with Uesugi, Shingen's raid on Odawara and the running fight at Mimasetōge later in 1569.`
  },
  {
    id: "ishiyama-honganji",
    sources: [ { label: "Wikipedia: Ishiyama Hongan-ji War", url: "https://en.wikipedia.org/wiki/Ishiyama_Hongan-ji_War" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Utagawa_Yoshifuji_-_The_Battle_of_Ishiyama_Hongan-ji.jpg/960px-Utagawa_Yoshifuji_-_The_Battle_of_Ishiyama_Hongan-ji.jpg",
        caption: "\"The Battle of Ishiyama Hongan-ji\", a woodblock print (nishiki-e) by Utagawa Yoshifuji, 1869, made nearly three centuries after the war. Museum of Fine Arts, Boston; Wikimedia Commons."
      }
    ],
    name: "Ishiyama Hongan-ji War",
    year: 1570,
    dateLabel: "Genki 1/9/12 to Tenshō 8/8/2 (11 October 1570 to 10 September 1580)",
    period: "Muromachi",
    location: { name: "Ishiyama Hongan-ji, Settsu Province (modern Osaka)", lat: 34.684295, lon: 135.524889 },
    combatants: { side1: { name: "Oda clan", leader: "Oda Nobunaga", forces: "Rotating field armies and blockading forces under Sakuma Nobumori, Akechi Mitsuhide and Kuki Yoshitaka's fleet" }, side2: { name: "Hongan-ji and the Ikkō-ikki", leader: "Kennyo (Kōsa), eleventh abbot", forces: "Temple garrison reported at some 15,000, Saika gunners, Mōri supply fleets" } },
    outcome: "Oda victory. Kennyo surrendered under imperial mediation and the complex burned; the Hongan-ji never again fielded an army.",
    summary: "Ten years of siege for the fortified temple-city at Osaka, the longest war Nobunaga ever fought. The abbot Kennyo called out the Ikkō-ikki of every province against him, and only when the Mōri supply route was cut at sea did the temple give in and burn.",
    details: `Ishiyama Hongan-ji was not a castle in the ordinary sense but a fortified temple-city on the bluff at Osaka, ringed with moats and walls and surrounded by the townships of its own believers. It sat at the mouth of the Yodo River and controlled the sea road into the capital region, which is why Nobunaga wanted it and why its abbot, Kennyo, refused to give it up. On the twelfth day of the ninth month of Genki 1 the temple's men fell on the Oda siege lines at Noda and Fukushima in Settsu, and the war began.

What followed was less a siege than a ten-year contest for the centre of Japan. Kennyo wrote to Ikkō congregations in every province, so Nobunaga had to fight them in Ise, Echizen and Kaga as well as at Osaka; the Nagashima strongholds were destroyed in 1574 and the Echizen ikki crushed in 1575. Around Osaka the war turned on supply. Nobunaga was wounded in the leg at Tennōji in 1576, and that summer the Mōri fleet broke his blockade at the mouth of the Kizu River. Only when Kuki Yoshitaka's armoured ships won there in 1578 did the sea road finally close.

Starving and isolated, Kennyo accepted a peace brokered by the court of Emperor Ōgimachi and withdrew to Kii in the spring of 1580. His son Kyōnyo held out into the eighth month; when he too rode away the complex caught fire and burned for three days and nights. Jōdo Shinshū survived and is still one of Japan's largest Buddhist schools, but it never again put an army in the field, and three years later Hideyoshi began Osaka Castle on the cleared hill.`
  },
  {
    id: "imayama",
    sources: [ { label: "Japanese Wikipedia: 今山の戦い (Battle of Imayama)", url: "https://ja.wikipedia.org/wiki/今山の戦い" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Nabeshima_Naoshige_by_Miura_Shisan_%28Chokokan%29_%28detail%29.jpg",
        caption: "Portrait of Nabeshima Naoshige, who led the night attack at Imayama; an eighteenth-century painting by Miura Shisan in the Chōkokan, Saga. Wikimedia Commons."
      }
    ],
    name: "Battle of Imayama",
    year: 1570,
    dateLabel: "Genki 1, 8th month, 20th day (19 September 1570)",
    period: "Muromachi",
    location: { name: "Imayama, Hizen Province (modern Kuruma, Yamato-chō, Saga City, Saga)", lat: 33.3171667, lon: 130.2431111 },
    combatants: { side1: { name: "Ryūzōji clan", leader: "Ryūzōji Takanobu (raid led by Nabeshima Naoshige)", forces: "approximately 5,000 in Saga castle; roughly 500 in the night attack" }, side2: { name: "Ōtomo clan", leader: "Ōtomo Sōrin (Ōtomo Chikasada commanding at Imayama)", forces: "war tales give 60,000 to 80,000, certainly inflated; some 3,000 in the Imayama camp" } },
    outcome: "Ryūzōji victory; the Ōtomo field commander Ōtomo Chikasada was killed and his camp destroyed, though the siege itself ended only with a negotiated peace in the tenth month.",
    summary: "Besieged in Saga castle by a far larger Ōtomo army, the Ryūzōji sent about five hundred men out by night against the enemy forward camp on Imayama, killed its commander and wrecked it. The raid made Nabeshima Naoshige's name and set the Ryūzōji on the road to becoming a great Kyūshū power.",
    details: `In the third month of Genki 1 the Bungo warlord Ōtomo Sōrin invaded Hizen to break Ryūzōji Takanobu, whose expansion was eating into Ōtomo authority in northern Kyūshū. Takanobu shut himself in Saga castle with perhaps five thousand men. War tales credit the besiegers with sixty to eighty thousand, certainly an inflated figure, but the disparity was real and no relief army was coming. After months of stalemate Sōrin, directing the campaign from Kōrasan in Chikugo, sent forward his kinsman Ōtomo Chikasada with orders to storm the place. Chikasada camped on the hill of Imayama north of the town and fixed the assault for the twentieth day of the eighth month.

The night before, his men held a victory banquet. Ryūzōji scouts reported it, and Nabeshima Naoshige, one of Takanobu's captains, proposed a night attack. The council called it suicide; Saga tradition says Takanobu's mother, the nun Keigin-ni, shamed them into agreeing. Naoshige slipped out with some five hundred men, worked round behind the camp before dawn, opened fire and spread word that the Ōtomo had been betrayed from within. In the confusion the besiegers fought each other, Chikasada was cut down and his army scattered.

The siege was not lifted at once; peace was negotiated only in the tenth month, and Takanobu remained nominally an Ōtomo subordinate. Yet Imayama made the Ryūzōji. Within a decade Takanobu held Chikugo, Chikuzen and much of Higo and was reckoned with the Ōtomo and Shimazu as one of the three powers of Kyūshū. Naoshige, whose heirs would rule Saga into the nineteenth century, marked the victory by adopting the Ōtomo gyōyō as the Nabeshima crest.`
  },
  {
    id: "kanegasaki-1570",
    sources: [ { label: "Japanese Wikipedia: Kanegasaki no nokiguchi (金ヶ崎の戦い)", url: "https://ja.wikipedia.org/wiki/%E9%87%91%E3%83%B6%E5%B4%8E%E3%81%AE%E6%88%A6%E3%81%84" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Kanegasaki_Castle_Site.jpg/960px-Kanegasaki_Castle_Site.jpg",
        caption: "The stone marker on the Kanegasaki castle ridge above Tsuruga, Fukui Prefecture, reading \"Historic Site, Kanegasaki Castle Ruins\"; only earthworks survive on the hill, Wikimedia Commons."
      }
    ],
    name: "Kanegasaki Retreat (Kanegasaki no Nokiguchi)",
    year: 1570,
    dateLabel: "May 30 to June 3, 1570 (Genki 1/4/26 to 4/30)",
    period: "Muromachi",
    location: { name: "Kanegasaki Castle, Tsuruga, Echizen Province (modern Fukui)", lat: 35.666083, lon: 136.074167 },
    combatants: { side1: { name: "Oda–Tokugawa army", leader: "Oda Nobunaga, with Tokugawa Ieyasu", forces: "approximately 30,000 (Tokitsugu kyōki)" }, side2: { name: "Asakura clan, joined mid-campaign by the Azai", leader: "Asakura Yoshikage and Azai Nagamasa; Asakura Kagetsune held Kanegasaki", forces: "not reliably recorded" } },
    outcome: "The Oda took Kanegasaki, then abandoned Echizen and escaped to Kyoto through the Kutsuki valley. No province changed hands; the campaign against the Asakura had to be begun again.",
    summary: "Nobunaga had taken Kanegasaki and was pushing into Echizen when his brother-in-law Azai Nagamasa changed sides and closed the road home. He ran for Kyoto with a rearguard holding the pass behind him, and the escape became the most famous fighting withdrawal in Japanese military history.",
    details: `Nobunaga left Kyoto on the twentieth day of the fourth month with an Oda and Tokugawa army of about thirty thousand, giving out that he was disciplining the Mutō of Wakasa for the shogun Ashikaga Yoshiaki. The real target was Asakura Yoshikage, who had ignored a summons to the capital. The era name changed from Eiroku to Genki while the army was on the road. On the twenty fifth the Oda stormed Tezutsuyama; the next day Asakura Kagetsune surrendered Kanegasaki. Then word came that Azai Nagamasa of northern Ōmi, married to Nobunaga's sister Oichi, had gone over to the Asakura, whose alliance with his house was two generations old. Facing encirclement, Nobunaga abandoned the campaign, slipped south through the Kutsuki valley under the local lord Kutsuki Motosuna, and reached Kyoto on the thirtieth with a handful of companions.

The rearguard, the shingari, is why the episode is taught. Tradition has the young Kinoshita Tōkichirō, the future Toyotomi Hideyoshi, volunteering for the most dangerous post, and Nobunaga did reward him with gold. But the sources also place Ikeda Katsumasa, military governor of Settsu, and Akechi Mitsuhide in the rearguard, both senior to him, and Ieyasu's share appears only in Tokugawa records written long afterwards. The story of Oichi warning her brother with a bean bag tied at both ends is a later invention. Losses are reported as anything from negligible to two thousand, and one reading of Nobunaga's letter to Mōri Motonari has him learning of the betrayal only after he had turned for home. No province changed hands here. The pin marks a lesson and a cause: Anegawa followed eight weeks later.`
  },
  {
    id: "mount-hiei-1571",
    sources: [ { label: "Wikipedia: Siege of Mount Hiei", url: "https://en.wikipedia.org/wiki/Siege_of_Mount_Hiei" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Enryakuji1.jpg",
        caption: "The burning of Mount Hiei, an Edo-period woodblock illustration catalogued on Commons under the Ehon Taikōki. Public domain, Wikimedia Commons."
      }
    ],
    name: "Burning of Mount Hiei (Enryaku-ji)",
    year: 1571,
    dateLabel: "30 September 1571 (Genki 2/9/12)",
    period: "Muromachi",
    location: { name: "Enryaku-ji on Mount Hiei, above Sakamoto, Ōmi Province (modern Ōtsu, Shiga)", lat: 35.070556, lon: 135.841111 },
    combatants: { side1: { name: "Oda clan", leader: "Oda Nobunaga, with Sakuma Nobumori, Akechi Mitsuhide, Niwa Nagahide and Ikeda Tsuneoki", forces: "reported at about 30,000" }, side2: { name: "Enryaku-ji, the Tendai head temple", leader: "the temple's own abbots and sōhei captains, not named in the records", forces: "around 4,000 warrior monks and armed residents" } },
    outcome: "Oda victory; Enryaku-ji, the Hiyoshi shrine and the town of Sakamoto were burned, the temple estates confiscated, and Tendai military power destroyed.",
    summary: "Nobunaga encircled Mount Hiei and burned Enryaku-ji, the head temple of the Tendai school, together with the town of Sakamoto below it. Six centuries of monastic military power ended in a day. The standard teaching case for his campaign against Japan's armed temples.",
    details: `Enryaku-ji, founded on Mount Hiei in 788, was the head temple of the Tendai school and the most feared religious power near the capital. Its sōhei, the warrior monks, had marched down on Kyoto for centuries to press the court, and the mountain overlooked the roads linking the capital to Lake Biwa.

The quarrel with Oda Nobunaga began after Anegawa in 1570, when beaten Asai and Asakura troops withdrew onto Mount Hiei and the monks sheltered them through the winter. Nobunaga offered to restore confiscated temple estates in return for neutrality, and promised destruction if the offer was refused. It was refused.

On Genki 2/9/12, 30 September 1571, an Oda army reported at some 30,000 men closed on the mountain from every side. Sakamoto and Katata at the foot were fired first, then the troops worked upward, burning the Konpon Chūdō, the Hiyoshi shrine complex and the halls along the ridge. Contemporary witnesses put the dead between 1,500 and 4,000, monks, servants, women and children among them; later chronicles inflated the number. Recent excavation suggests much of the complex was already derelict and that fewer buildings burned than the chronicles claim.

Nobunaga forbade rebuilding and split the temple lands among his commanders. Akechi Mitsuhide took the Shiga district and raised Sakamoto Castle on the lakeshore to watch the mountain. Enryaku-ji revived as a place of learning under Hideyoshi and the Tokugawa, but never again as a military power. The burning set the pattern for Nagashima and the long war on Ishiyama Hongan-ji.`
  },
  {
    id: "odani-1573",
    sources: [ { label: "Wikipedia: Siege of Odani Castle", url: "https://en.wikipedia.org/wiki/Siege_of_Odani_Castle" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Odanij18.jpg/960px-Odanij18.jpg",
        caption: "The ōishigaki, the large surviving stone rampart on the ridge of the Odani Castle site in Nagahama, Shiga; uploader's photograph, 2008, Wikimedia Commons."
      }
    ],
    name: "Siege of Odani Castle",
    year: 1573,
    dateLabel: "1573 (Tenshō 1/8/8 to 9/1)",
    period: "Azuchi–Momoyama",
    location: { name: "Odani Castle, Ōmi Province (modern Nagahama, Shiga)", lat: 35.459284, lon: 136.277 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga", forces: "about 30,000" }, side2: { name: "Azai", leader: "Azai Nagamasa and Azai Hisamasa", forces: "about 5,000" } },
    outcome: "Oda victory; the Azai clan was destroyed, Nagamasa and his father Hisamasa took their own lives, and northern Ōmi passed to Hashiba Hideyoshi.",
    summary: "Nobunaga's final reckoning with the brother-in-law who had betrayed him. With the Asakura destroyed days earlier, the Azai stronghold on Mount Odani was split in two and stormed. The clan was wiped out, and Hideyoshi received northern Ōmi as the first domain he held in his own name.",
    details: `Odani was a yamashiro, a fortress strung along a ridge north of Lake Biwa, and it had been the Azai seat since the 1520s. Azai Nagamasa was married to Nobunaga's sister Oichi, but in 1570 he chose his older alliance with the Asakura of Echizen over his brother-in-law. That betrayal led to Anegawa and to three years of war. In the eighth month of Tenshō 1 Nobunaga brought some thirty thousand men against the mountain. When Asakura Yoshikage marched south to relieve it, Nobunaga turned on him, broke his army at Tonezaka and pursued it home, destroying Ichijōdani and the Asakura within days. Then he came back to Odani. The garrison numbered perhaps five thousand. The decisive stroke came from Hashiba Hideyoshi, who seized the Kyōgoku-maru enclosure in the middle of the ridge and so cut the retired lord Hisamasa, in the Komaru above, off from Nagamasa in the main keep below. Hisamasa killed himself on the twenty-seventh day of the eighth month. Nagamasa sent Oichi and their three daughters out to Nobunaga, then took his own life on the first day of the ninth month. His infant son Manpukumaru was hunted down and killed, and the Azai line ended. The daughters mattered later: Chacha became Hideyoshi's consort Yodo-dono and mother of Hideyori, and Gō married the second Tokugawa shogun. Nobunaga granted the three northern districts of Ōmi to Hideyoshi, the first land he held in his own right. Finding the mountain awkward to govern from, he soon built a new castle on the lakeshore at Nagahama and quarried Odani for its stone.`
  },
  {
    id: "echizen-ikko-ikki-1575",
    sources: [ { label: "Japanese Wikipedia: 越前一向一揆 (Echizen Ikkō-ikki)", url: "https://ja.wikipedia.org/wiki/%E8%B6%8A%E5%89%8D%E4%B8%80%E5%90%91%E4%B8%80%E6%8F%86" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kinome-touge.jpg/960px-Kinome-touge.jpg",
        caption: "Kinome Pass on the old Hokuriku road in Fukui, one of the hardest stretches of the route and a position the Echizen ikki fortified against Nobunaga in 1575; photograph by TR15336300101, Wikimedia Commons, CC BY-SA 4.0."
      }
    ],
    name: "Nobunaga's Suppression of the Echizen Ikkō-ikki",
    year: 1575,
    dateLabel: "1575 (Tenshō 3, 8th month)",
    period: "Azuchi–Momoyama",
    location: { name: "Fuchū, Echizen (modern Echizen City, Fukui)", lat: 35.9033, lon: 136.1684 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga (Shibata Katsuie, Hashiba Hideyoshi, Akechi Mitsuhide, Niwa Nagahide)", forces: "About 30,000, with several hundred ships from Wakasa and Tango" }, side2: { name: "Echizen Ikkō-ikki", leader: "Shimotsuma Raishō, Shichiri Yorichika, Sugiura Gennin", forces: "Unknown; provincial congregations holding the Kinome pass line and the coastal forts" } },
    outcome: "Oda victory; the ikki state in Echizen was destroyed with mass killing and enslavement, and Nobunaga granted eight districts of the province to Shibata Katsuie.",
    summary: "Echizen threw off Oda rule in 1574 and became a province governed by the Honganji and its congregations. In 1575 Nobunaga returned with some thirty thousand men, broke the ikki within days, and handed the province to Shibata Katsuie, whose castle at Kitanoshō became the Oda base in the north.",
    details: `When Nobunaga destroyed the Asakura in 1573 he left Echizen in the hands of a former Asakura retainer, Katsurada Nagatoshi, as deputy governor. In the first month of 1574 a rival, Tomita Nagashige, raised the villages against him and killed him. The risen peasants then turned on Tomita, killed him too, and invited leaders of the Kaga Ikkō-ikki to command them. Honganji sent the priest-official Shimotsuma Raishō to govern, and Echizen joined Kaga as a province run by its congregations rather than by a warrior house. The new rulers taxed harder than the man they had replaced, and revolts against them began within the year.

Free after Nagashino, Nobunaga left Gifu on the twelfth day of the eighth month of 1575 and entered Echizen from Tsuruga three days later with some thirty thousand men, while several hundred ships from Wakasa and Tango landed and burned the ports behind the ikki lines. The defenders held the Kinome pass and the castles along the Hokuriku road, but a night attack on Fuchū took them from the rear, and about two thousand were cut down in the town. Hachibuse, Suizu and, on the eighteenth, Toba castle fell; the ikki commanders fled into the mountains and were hunted down. Nobunaga's own letters and the Shinchō kōki count more than twelve thousand executed and thirty to forty thousand sent as slaves to Owari and Mino.

Nobunaga then gave eight districts of Echizen to Shibata Katsuie, who built Kitanoshō castle on the site of modern Fukui, with Maeda Toshiie, Sassa Narimasa and Fuwa Mitsuharu at Fuchū to assist and watch him. That settlement made Katsuie the Oda commander in the north.`
  },
  {
    id: "oyama-gobo",
    sources: [ { label: "Wikipedia: Kanazawa Castle", url: "https://en.wikipedia.org/wiki/Kanazawa_Castle" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Morimasa.jpg",
        caption: "Sakuma Morimasa on horseback. He led the storming of the Gobō and built the first castle on the site. Painter unknown; original held by Kenkun Shrine, Kyoto. Wikimedia Commons."
      }
    ],
    name: "Fall of Oyama Gobō (Kanazawa Gobō)",
    year: 1580,
    dateLabel: "Spring 1580 (Tenshō 8, intercalary 3rd month)",
    period: "Azuchi–Momoyama",
    location: { name: "Oyama Gobō, Kaga Province (site of Kanazawa Castle, Kanazawa, Ishikawa)", lat: 36.564317, lon: 136.659228 },
    combatants: { side1: { name: "Oda clan", leader: "Shibata Katsuie and Sakuma Morimasa", forces: "reported at about 15,000" }, side2: { name: "Kaga Ikkō-ikki (Hongan-ji)", leader: "Matsunaga Tanba and the Hongan-ji deputies", forces: "not reliably recorded" } },
    outcome: "Oda victory; the temple fortress was stormed and its captains killed, ending 92 years of Ikkō-ikki rule in Kaga. Sakuma Morimasa held the site and turned it into a castle.",
    summary: "The fortified cathedral that served as the capital of Ikkō-ikki Kaga fell to Shibata Katsuie and Sakuma Morimasa. Ninety-two years of rule by a Buddhist league ended, and Morimasa raised a castle on the ridge; three years later it became the Maeda seat of Kanazawa.",
    details: `Oyama Gobō, also called the Kanazawa Gobō, was not a castle but a fortified cathedral. The Hongan-ji branch of True Pure Land Buddhism built it in 1546 on the tip of the Kodatsuno ridge, hills at its back and rivers on two flanks, and made it the seat of government for Kaga. Since the rising of 1488 the province had been run by the Ikkō leagues rather than by a warrior house, the only province in Japan governed by a religious confederation. A temple town grew below it, the ancestor of modern Kanazawa.

Oda Nobunaga had been grinding the leagues down since the early 1570s and gave Echizen to Shibata Katsuie in 1575. Uesugi Kenshin's victory at Tedorigawa in 1577 delayed the advance, but Kenshin died the following spring. In the intercalary third month of Tenshō 8, imperial mediation ended the ten-year siege of the Ishiyama Hongan-ji and the abbot Kennyo told his followers to disarm. Many in Kaga refused. Katsuie crossed from Echizen on the ninth of that month, and his nephew Sakuma Morimasa stormed the Gobō; Matsunaga Tanba and the other ikki captains died there.

Morimasa took the site, began moats and a castle town, and was made lord of half of Kaga that winter. Fighting went on in the hills around Torigoe and Futoge until 1582, when the last few hundred holdouts were crucified. Morimasa was executed after Shizugatake in 1583 and Kanazawa passed to Maeda Toshiie, whose family held it until 1869.`
  },
  {
    id: "tensho-jingo-1582",
    sources: [ { label: "Wikipedia: Tenshō-Jingo war", url: "https://en.wikipedia.org/wiki/Tensh%C5%8D-Jingo_war" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wakamiko_castle_01.jpg/960px-Wakamiko_castle_01.jpg",
        caption: "The main enclosure of the ruined Wakamiko Castle in Hokuto, Yamanashi, where Hōjō Ujinao made his headquarters during the eighty-day standoff. Wikimedia Commons."
      }
    ],
    name: "Tenshō-Jingo War",
    year: 1582,
    dateLabel: "Tenshō 10, 6th month to 10th month, 29th day (1582)",
    period: "Azuchi–Momoyama",
    location: { name: "Wakamiko Castle, Kai Province (modern Hokuto, Yamanashi)", lat: 35.79403, lon: 138.41811 },
    combatants: { side1: { name: "Tokugawa clan", leader: "Tokugawa Ieyasu", forces: "about 8,000, swelled by more than 800 former Takeda retainers" }, side2: { name: "Later Hōjō clan", leader: "Hōjō Ujinao, backed by Hōjō Ujimasa", forces: "reported at 40,000 to 55,000, with Satomi reinforcements" } },
    outcome: "Truce mediated by Oda Nobukatsu on the 29th day of the 10th month. Kai and most of Shinano went to Ieyasu, Kōzuke to the Hōjō; the Uesugi kept four districts of northern Shinano.",
    summary: "When Oda Nobunaga was killed in 1582, the former Takeda provinces of Kai and Shinano were left with no ruler, and the Tokugawa, the Later Hōjō and the Uesugi all marched in to claim them. Tokugawa Ieyasu, badly outnumbered, held on for eighty days and came away with two new provinces.",
    details: `Nobunaga destroyed the Takeda at Tenmokuzan in the third month of 1582 and handed their provinces to his own officers. Eleven weeks later he was dead at the Honnō-ji, and his governors in the east were murdered or driven out. Kai, Shinano and western Kōzuke suddenly belonged to nobody, and three neighbours moved at once: Hōjō Ujinao from the Kantō, Uesugi Kagekatsu from Echigo, and Tokugawa Ieyasu from Suruga. Japanese historians call the resulting three-way scramble the Tenshō-Jingo War, after the cyclical name of the year.

Ieyasu entered Kai with about 8,000 men against a Hōjō army that the chronicles put at forty thousand and more. From the seventh month the two sides faced each other across the upper Kamanashi valley for roughly eighty days, Ieyasu at Shinpu Castle and Ujinao at Wakamiko. Ujinao tried to break the deadlock by sending a column, reported at 10,000, over the Misaka Pass to come round behind. Torii Mototada and Mizuno Katsunari intercepted it near Kurokoma village on the twelfth day of the eighth month and turned it back. Meanwhile the Uesugi had already made their own truce, and Sanada Masayuki changed sides to Ieyasu in the tenth month.

Oda Nobukatsu brokered the settlement. Ujinao married Ieyasu's daughter Tokuhime, Kai and Shinano were conceded to the Tokugawa and Kōzuke to the Hōjō. Ieyasu now held five provinces instead of three, and absorbed hundreds of masterless Takeda veterans, including the red-armoured cavalry he gave to Ii Naomasa. Two years later that army fought Hideyoshi to a standstill at Komaki and Nagakute. The one loose end, Numata, led straight to the Sanada war at Ueda.`
  },
  {
    id: "shikoku-campaign-1585",
    sources: [ { label: "Wikipedia: Invasion of Shikoku (1585)", url: "https://en.wikipedia.org/wiki/Invasion_of_Shikoku_(1585)" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Shikoku_Seit%C5%8D.jpg/960px-Shikoku_Seit%C5%8D.jpg",
        caption: "Hōkō Shikoku Seitō no zu, an 1883 woodblock print of Hideyoshi's conquest of Shikoku by Toyohara Chikanobu; Wikimedia Commons."
      }
    ],
    name: "Shikoku Campaign (Hideyoshi's invasion)",
    year: 1585,
    dateLabel: "Tenshō 13, 6th to 8th months (12 July to 30 August 1585)",
    period: "Azuchi–Momoyama",
    location: { name: "Ichinomiya Castle, Awa (modern Tokushima, Shikoku)", lat: 34.03404, lon: 134.46321 },
    combatants: { side1: { name: "Hashiba (Toyotomi)", leader: "Hashiba Hidenaga, with Hashiba Hidetsugu, Ukita Hideie and Kobayakawa Takakage", forces: "about 100,000 in three seaborne columns" }, side2: { name: "Chōsokabe", leader: "Chōsokabe Motochika", forces: "20,000 to 40,000, split across three fronts" } },
    outcome: "Toyotomi victory; Motochika submitted and was left only Tosa, while Awa, Sanuki and Iyo were parcelled out to Hideyoshi's and the Mōri's men.",
    summary: "In the summer of 1585 Hideyoshi sent about a hundred thousand men across the Inland Sea in three columns to break Chōsokabe Motochika, who had just made himself master of all four provinces of Shikoku. Within two months Motochika submitted, keeping only his native Tosa.",
    details: `Chōsokabe Motochika had fought his way out of a corner of Tosa to hold all four provinces of Shikoku by 1585, and he had backed nearly every enemy Hideyoshi made, first Shibata Katsuie, then Oda Nobukatsu and Tokugawa Ieyasu. When Hideyoshi destroyed the Negoro and Saiga warrior bands in Kii that spring, Motochika was left without allies.

The armies sailed on the sixteenth day of the sixth month. Hideyoshi, unwell and still watching Sassa Narimasa in Etchū, stayed behind at Kishiwada and gave command to his younger brother Hashiba Hidenaga, with their nephew Hidetsugu under him. Roughly a hundred thousand men crossed in three columns: from Awaji into Awa, from Bizen into Sanuki, and from Aki into Iyo under Kobayakawa Takakage and the Mōri. Motochika could raise perhaps forty thousand and had to divide them three ways.

Everything turned on Ichinomiya Castle in Awa. Hidenaga's troops cut the garrison off from supplies and mined a tunnel to destroy its water source, and the castle opened its gates in the middle of the seventh month. With Waki and Iwakura also lost, Motochika's headquarters at Hakuchi lay between two converging armies, and his retainer Tani Tadasumi talked him into terms: Tosa alone, hostages, three thousand men for Hideyoshi's future campaigns, and no dealings with Ieyasu.

Hideyoshi was appointed kampaku while the fighting was still going on. Awa went to Hachisuka Iemasa, Sanuki to Sengoku Hidehisa, Iyo to Kobayakawa Takakage, and Shikoku became the staging ground for the invasion of Kyūshū the next year.`
  },
  {
    id: "higo-kokujin-ikki-1587",
    sources: [ { label: "Japanese Wikipedia: 肥後国人一揆 (Higo kokujin ikki)", url: "https://ja.wikipedia.org/wiki/%E8%82%A5%E5%BE%8C%E5%9B%BD%E4%BA%BA%E4%B8%80%E6%8F%86" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tanaka_Castle_in_Kumamoto_01.jpg/960px-Tanaka_Castle_in_Kumamoto_01.jpg",
        caption: "Tanaka Castle in Nagomi, Kumamoto Prefecture, one of the rebel strongholds besieged during the uprising; photograph by YAPON, Wikimedia Commons (CC BY-SA 3.0)."
      }
    ],
    name: "Higo Kokujin Uprising (Higo kokujin ikki)",
    year: 1587,
    dateLabel: "1587–1588 (Tenshō 15, 7th to 12th month)",
    period: "Azuchi–Momoyama",
    location: { name: "Jōmura Castle, Yamaga, Higo Province (modern Kumamoto Prefecture)", lat: 33.04825, lon: 130.670178 },
    combatants: { side1: { name: "Higo kokujin league (ikki)", leader: "Kumabe Chikanaga and his son Kumabe Chikayasu, with Kai Chikahide, Wani Chikazane and Kikuchi Takekuni", forces: "reported at some 35,000 including armed farmers; over 18,000 said to have held Jōmura Castle with 830 matchlocks and 500 bows" }, side2: { name: "Toyotomi forces", leader: "Sassa Narimasa, then Kobayakawa Hidekane with Tachibana Muneshige, Nabeshima Naoshige and Katō Kiyomasa", forces: "7,000 under Sassa at the outset, later a coalition of Kyūshū and Shikoku daimyo mobilised by Hideyoshi" } },
    outcome: "Toyotomi victory. Sassa Narimasa lost Higo and was made to commit seppuku in 1588; most of the province's old warrior houses were destroyed with him.",
    summary: "When Sassa Narimasa forced a cadastral survey on the warrior houses of Higo, the whole province rose against him. The revolt held him off for five months, cost him his life, and left Higo to be carved up between Katō Kiyomasa and Konishi Yukinaga. Its scale helped prompt Hideyoshi's sword hunt of 1588.",
    details: `Hideyoshi's Kyūshū campaign ended in the fifth month of Tenshō 15 (1587). In the resettlement that followed he confirmed fifty-two Higo kokujin, small warrior houses holding land of their own, as vassals of a newcomer from Etchū, Sassa Narimasa. Told to bring the province to order fast, Sassa began a cadastral survey at once.

In the seventh month Kumabe Chikanaga refused the surveyors and took up arms, citing a letter under Hideyoshi's own vermilion seal. Sassa marched with 7,000 men and stormed Chikanaga's castle at Waifu, but the family dug in at Jōmura, a hill fort on the edge of the Kikuka basin that local record credits with 830 matchlocks. While that siege dragged, other houses raised the countryside; a force reported at 35,000, much of it armed farmers, closed on Sassa's own base at Kumamoto.

Hideyoshi needed Kyūshū quiet as a supply base for his coming invasion of Korea, so he called in daimyo from Kyūshū and Shikoku under Kobayakawa Hidekane. Tachibana Muneshige forced the road at Nankan, Tanaka castle fell after weeks of assault, and Jōmura opened on the twenty-sixth day of the twelfth month, late January 1588 by the Western calendar.

The reckoning was severe. Sassa was refused an audience, confined at Amagasaki and made to commit seppuku in 1588. Of the fifty-two houses, forty-eight are said to have died fighting or been executed, and twelve Kumabe were cut down at the black gate of Yanagawa Castle. Higo went to Katō Kiyomasa in the north and Konishi Yukinaga in the south. Because so many rebels were farmers who owned blades, the rising is the usual explanation for Hideyoshi's sword hunt edict of 1588.`
  },
  {
    id: "jugorigahara-1588",
    sources: [ { label: "Japanese Wikipedia: 十五里ヶ原の戦い (Battle of Jūgorigahara)", url: "https://ja.wikipedia.org/wiki/%E5%8D%81%E4%BA%94%E9%87%8C%E3%83%B6%E5%8E%9F%E3%81%AE%E6%88%A6%E3%81%84" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Honjo_Shigenaga_parriying_an_exploding_shell.jpg/960px-Honjo_Shigenaga_parriying_an_exploding_shell.jpg",
        caption: "Honjō Shigenaga, the victor at Jūgorigahara, in the woodblock print Kōetsu yūshōden: Honjō Echizen no Kami Shigenaga by Utagawa Kuniyoshi. The exploding shell he parries is a legendary feat attached to his name, not a scene from this battle. Wikimedia Commons, public domain."
      }
    ],
    name: "Battle of Jūgorigahara",
    year: 1588,
    dateLabel: "8th month, Tenshō 16 (autumn 1588)",
    period: "Azuchi–Momoyama",
    location: { name: "Jūgorigahara, Tomoe, Tagawa District, Dewa Province (modern Tsuruoka, Yamagata Pref.)", lat: 38.747534, lon: 139.78765 },
    combatants: { side1: { name: "Uesugi and Mutō (Daihōji) allied army", leader: "Honjō Shigenaga, with Daihōji (Mutō) Yoshikatsu", forces: "about 5,000" }, side2: { name: "Mogami army of Shōnai", leader: "Tōzenji Yoshinaga and Tōzenji Katsumasa, both killed", forces: "about 10,000 including troops from Yamagata; one account says 18,000, probably inflated" } },
    outcome: "Uesugi and Mutō victory; both Tōzenji brothers killed and the Shōnai plain with the port of Sakata passed to the Uesugi.",
    summary: "While Mogami Yoshiaki was pinned down against Date Masamune in the Ōsaki war, Honjō Shigenaga led an Uesugi army into Shōnai and destroyed the Mogami force under the Tōzenji brothers on the plain west of Tsuruoka, winning the Shōnai rice plain and the port of Sakata for Uesugi Kagekatsu.",
    details: `Shōnai, the rice plain behind the port of Sakata, was the richest ground in Dewa, and the Daihōji (Mutō) house that had held it for generations tore itself apart in the 1580s. Mogami Yoshiaki exploited the feuds. In 1583 his client Tōzenji Yoshinaga drove Daihōji Yoshiuji to suicide, and in 1587 the Tōzenji and Mogami killed Yoshiuji's brother Yoshioki. The heir Yoshikatsu, a son of the Echigo lord Honjō Shigenaga adopted into the Daihōji, fled to Oguni Castle on the Echigo border, and Shōnai passed to Mogami, governed from Tōzenji Castle at Sakata.

In the first month of Tenshō 16 Date Masamune intervened in the Ōsaki succession quarrel and Yoshiaki marched east to fight him. Uesugi Kagekatsu used the opening. In the eighth month he sent Shigenaga and Yoshikatsu against Oura Castle, and the Tōzenji brothers chose to meet them in the open at Jūgorigahara. The Mogami had perhaps twice the numbers, though the war tales inflate the figures, but Shigenaga had already turned the local landholders and the fight went against Mogami from the start. Yoshinaga charged the Uesugi command post and was killed; his brother Katsumasa rode in alone and split Shigenaga's helmet from temple to ear before he too was cut down. The blade he used, so the story goes, became the celebrated sword Honjō Masamune.

Resistance at Asahiyama Castle collapsed soon after and the whole plain was Uesugi. Hideyoshi had banned private war in the northeast only months earlier, yet he let the result stand. Yoshikatsu was restored at Oura, then stripped of it in 1591 after the Fujishima rising, and Shōnai went to Kagekatsu outright. Yoshiaki did not get it back until 1601.`
  },
  {
    id: "kasai-osaki-ikki-1590",
    sources: [ { label: "Japanese Wikipedia: Kasai-Ōsaki ikki (葛西大崎一揆)", url: "https://ja.wikipedia.org/wiki/%E8%91%9B%E8%A5%BF%E5%A4%A7%E5%B4%8E%E4%B8%80%E6%8F%86" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Toyoma_teraike_castle_gate.JPG/960px-Toyoma_teraike_castle_gate.JPG",
        caption: "The entrance to the site of Teraike Castle at Toyoma in Tome, Miyagi, the seat Kimura Yoshikiyo took as new lord of the Kasai and Ōsaki districts; the rebels held it until its fall in 1591 ended the rising. Photograph by Hokahoka, Wikimedia Commons, CC BY-SA 3.0."
      }
    ],
    name: "Kasai-Ōsaki Ikki",
    year: 1590,
    dateLabel: "Tenshō 18/10/16 to Tenshō 19/7/4 (Nov 1590 to Aug 1591)",
    period: "Azuchi–Momoyama",
    location: { name: "Teraike Castle, Mutsu (modern Toyoma, Tome, Miyagi)", lat: 38.6554, lon: 141.2816 },
    combatants: { side1: { name: "Toyotomi forces of the Ōshū settlement", leader: "Kimura Yoshikiyo and Kimura Kiyohisa, then Gamō Ujisato and Date Masamune", forces: "The new lord's thin garrisons, then the field armies of Aizu and the Date; Tokugawa Ieyasu was later sent to survey the districts and repair their castles" }, side2: { name: "Kasai and Ōsaki rebels", leader: "Former Kasai and Ōsaki retainers, with no single commander", forces: "Dispossessed samurai and villagers across thirteen districts; a Date document calls the whole fief ikki held" } },
    outcome: "Rebellion crushed; Kimura Yoshikiyo was stripped of his fief, and Date Masamune, suspected of provoking the rising, lost Yonezawa and was moved north to Iwadeyama at about 580,000 koku.",
    summary: "When Hideyoshi's Ōshū settlement dispossessed the Kasai and Ōsaki and handed their thirteen districts to an outsider, the whole country rose. The new lord was besieged in his own fief, and the man sent to rescue him, Date Masamune, was widely believed to have started it.",
    details: `In the seventh month of Tenshō 18 Hideyoshi stripped Kasai Harunobu and Ōsaki Yoshitaka of their lands for missing the Odawara campaign, and gave their thirteen districts, some 300,000 koku, to Kimura Yoshikiyo, a Toyotomi captain rewarded for that campaign. Yoshikiyo took the Kasai seat at Teraike and put his son Kiyohisa in the Ōsaki seat at Myō. Their survey and demands were resented at once. On the sixteenth day of the tenth month, days after the commissioner Asano Nagayoshi started home, retainers of the old castellan of Iwatezawa seized that castle; within weeks a Date document called the whole fief ikki held, with Kiyohisa and his father shut up in Sanuma.

Asano turned back and ordered Gamō Ujisato of Aizu and Date Masamune to rescue them. On the eve of the joint advance one of Masamune's own retainers told Ujisato that Masamune had written to the rebels, and a secretary produced the letters. Ujisato barricaded himself in Myō Castle and reported to Kyoto; Masamune went on alone, took Sanuma and handed the Kimura over. Questioned before Hideyoshi in the second month of Tenshō 19, he said the letters were forged, since his true seal carried a pinhole in the eye of its wagtail. Hideyoshi let that stand and sent him back to finish the work. Teraike fell on the fourth day of the seventh month; a month later Masamune called the surviving leaders to Sueyama and had them killed.

The reckoning came as an exchange of land. Kimura was dispossessed. Masamune gained the wrecked thirteen districts but surrendered six older ones, Nagai with Yonezawa among them, ending at about 580,000 koku. He moved to Iwatezawa, renamed Iwadeyama, and kept it until he built Sendai in 1601.`
  }
];
