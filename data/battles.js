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
    period: "Sengoku",
    location: {
      name: "Sekigahara, Mino Province (modern Gifu Prefecture)",
      lat: 35.3711,
      lon: 136.4664
    },
    combatants: {
      side1: {
        name: "Eastern Army",
        leader: "Tokugawa Ieyasu",
        forces: "approximately 75,000"
      },
      side2: {
        name: "Western Army",
        leader: "Ishida Mitsunari (de facto)",
        forces: "approximately 80,000"
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
    period: "Sengoku",
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
    period: "Sengoku",
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

Several senior Ōtomo commanders fell, and the survivors fled some 25 kilometres back to the Mimi River. The victory broke Ōtomo power and launched the Shimazu campaign to unify Kyūshū — a drive only halted by Toyotomi Hideyoshi's intervention in 1587.`
  },
  {
    id: "kawanakajima",
    name: "Battles of Kawanakajima",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/BattleKawanakajima.jpg/960px-BattleKawanakajima.jpg",
        caption: "Edo-period depiction of the single combat between Uesugi Kenshin and Takeda Shingen at Kawanakajima. Wikimedia Commons."
      }
    ],
    year: 1561,
    date: "1561-10-18",
    dateLabel: "Fourth (greatest) battle: October 18, 1561 — series 1553–1564",
    period: "Sengoku",
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

Despite enormous casualties on both sides, the battles ended without a decisive result — yet they became one of the most cherished tales in Japanese military history.`
  },
  {
    id: "azukizaka-1542",
    name: "Battle of Azukizaka (1542)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Site_of_Azukizaka_Battle.jpg/960px-Site_of_Azukizaka_Battle.jpg",
        caption: "The site of the Battle of Azukizaka today. Wikimedia Commons."
      }
    ],
    year: 1542,
    dateLabel: "1542",
    period: "Sengoku",
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
    summary: "Oda Nobuhide, father of Oda Nobunaga, defeated the powerful Imagawa Yoshimoto in Mikawa, asserting Oda strength along the road his son would later make famous.",
    details: `In 1542 Oda Nobuhide met the westward-pressing Imagawa Yoshimoto at Azukizaka in Mikawa, the province contested with the Matsudaira (the future Tokugawa). Nobuhide's forces prevailed in hard fighting, temporarily blunting Imagawa ambitions there.

Although Yoshimoto recovered and won a second clash at Azukizaka in 1548, the 1542 victory burnished the reputation of the Oda house into which Nobunaga had been born eight years earlier.`
  },
  {
    id: "uedahara",
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
    period: "Sengoku",
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
    summary: "Murakami Yoshikiyo handed Takeda Shingen the first defeat of his career — a battle also remembered as one of the first in Japan to see firearms used in the field.",
    details: `Advancing to subdue northern Shinano, Takeda Shingen was checked at Uedahara by Murakami Yoshikiyo on 14 February 1548. The Takeda lost roughly 700 men, including two veteran generals, in Shingen's first battlefield defeat. The engagement is often cited as the first field battle in Japan in which firearms — recently introduced — were used.

Murakami's victory was costly, however, and within a few years Shingen drove him from Shinano altogether, pushing Murakami into the arms of Uesugi Kenshin and helping to ignite the Kawanakajima wars.`
  },
  {
    id: "suriagehara",
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
    period: "Sengoku",
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
    period: "Sengoku",
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

It was the Shimazu's last victory of the Kyūshū campaign — within months Hideyoshi's overwhelming numbers forced the clan to submit.`
  },
  {
    id: "hitotoribashi",
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
    period: "Sengoku",
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
    summary: "Outnumbered roughly four to one, Date Masamune held off a grand coalition until it fell apart — an early proof of the young warlord's resilience.",
    details: `Seeking revenge for his father's death against the Nihonmatsu, the young Date Masamune found himself confronted near the Hitotori Bridge by a coalition of the Satake, Ashina, Sōma and others, perhaps 30,000 strong.

Forced back toward Motomiya Castle, Masamune nonetheless held his ground, and when the Satake abruptly withdrew the whole alliance disintegrated. The narrow escape marked Masamune's emergence as a major power in northeastern Japan.`
  },
  {
    id: "taineiji",
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
    period: "Sengoku",
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

The fall of the Ōuchi — long the dominant power and trade gateway of western Honshū — opened the way for the rise of Mōri Motonari, who would destroy Sue at Itsukushima four years later.`
  },
  {
    id: "arita-nakaide",
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
    period: "Sengoku",
    location: {
      name: "Arita Castle, Aki Province (modern Hiroshima Prefecture)",
      lat: 34.66825,
      lon: 132.53206
    },
    combatants: {
      side1: {
        name: "Mōri clan (with Yoshikawa)",
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
    summary: "Sometimes called 'the Okehazama of the west', this was the young Mōri Motonari's first battle — a victory against the odds that announced the rise of the Mōri.",
    details: `In 1517 the Aki-Takeda under Motoshige moved against Arita Castle, an ally of the young Mōri Motonari. Though heavily outnumbered, Motonari and the allied Yoshikawa fell on the Takeda and killed their commander, breaking the assault.

It was Motonari's first battle and the opening note of a career that would make him master of nearly all western Honshū.`
  },
  {
    id: "mimasetoge",
    name: "Battle of Mimasetoge",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mimase-kosenjyo.JPG/960px-Mimase-kosenjyo.JPG",
        caption: "The old battlefield at Mimase Pass. Wikimedia Commons."
      }
    ],
    year: 1569,
    dateLabel: "1569",
    period: "Sengoku",
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
    outcome: "Takeda victory; the Hōjō pursuit was beaten off.",
    summary: "Withdrawing from a failed assault on the Hōjō capital at Odawara, Takeda Shingen turned at the Mimase Pass and routed the pursuing Hōjō army.",
    details: `After failing to take the great Hōjō fortress of Odawara, Takeda Shingen retreated westward and was intercepted at the Mimase Pass by a larger Hōjō force under Ujiteru and Ujikuni.

A fierce counterattack led by Yamagata Masakage shattered the pursuit and let the Takeda withdraw intact — a textbook example of Shingen's skill in managing a fighting retreat.`
  },
  {
    id: "tatarahama-1569",
    name: "Battle of Tatarahama (1569)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tachibana_Dosetsu.jpg/960px-Tachibana_Dosetsu.jpg",
        caption: "Portrait of Tachibana Dōsetsu, the famed Ōtomo general. Wikimedia Commons."
      }
    ],
    year: 1569,
    dateLabel: "1569",
    period: "Sengoku",
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

But the Ōtomo's diplomacy — reviving the Amago to threaten the Mōri rear in Izumo — compelled Mōri Motonari to withdraw from Kyūshū, leaving the Ōtomo dominant in the north of the island.`
  },
  {
    id: "odaihara",
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
    period: "Sengoku",
    location: {
      name: "Odaihara, Saku, Shinano Province (modern Nagano) — coordinates approximate",
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
    period: "Sengoku",
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
    name: "Battle of Kōnodai (1538)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Konodai_Castle.jpg/960px-Konodai_Castle.jpg",
        caption: "Kōnodai, the high ground that gave the battle its name. Wikimedia Commons."
      }
    ],
    year: 1538,
    dateLabel: "1538",
    period: "Sengoku",
    location: {
      name: "Kōnodai, Shimōsa Province (modern Ichikawa, Chiba)",
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
    summary: "The Later Hōjō defeated the Satomi and their Ashikaga ally near the Tone River, extending Hōjō power across the lower Kantō.",
    details: `At Kōnodai in 1538, overlooking the lower Tone River, Hōjō Ujitsuna defeated the combined forces of the Satomi of Awa and the rival 'Oyumi' Ashikaga, killing Ashikaga Yoshiaki in the fighting.

The battle was a critical milestone in the rise of the Later Hōjō clan. By destroying the Oyumi kubō (the regional Ashikaga authority) and driving the Satomi back into the Bōsō Peninsula, Ujitsuna cemented Hōjō control over the Musashi-Shimōsa border, paving the way for their eventual mastery of the entire Kantō plain.`
  },
  {
    id: "konodai-1564",
    name: "Battle of Kōnodai (1564)",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ujiyasu_Hojo.jpg",
        caption: "Portrait of Hōjō Ujiyasu, the victor. Wikimedia Commons."
      }
    ],
    year: 1564,
    dateLabel: "1564",
    period: "Sengoku",
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
    summary: "A generation after the first battle, the sons fought again at Kōnodai — and again the Hōjō prevailed, cementing their grip on the Kantō.",
    details: `In 1564 Hōjō Ujiyasu met Satomi Yoshihiro at Kōnodai in a rematch of the 1538 battle fought by their fathers. The victory secured Hōjō dominance over the lower Kantō.

According to the Hōjō Godaiki, the Satomi forces initially gained the upper hand. Believing the fighting was over for the day, Satomi Yoshihiro's men removed their armor and fed their horses. At that moment, Ujiyasu's son Ujimasa let out a great war cry while Ujiyasu charged directly into the surprised camp, routing the Satomi completely.`
  },
  {
    id: "unnokuchi",
    name: "Battle of Un no Kuchi",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), who won his first battle here aged fifteen. Wikimedia Commons."
      }
    ],
    year: 1536,
    dateLabel: "1536",
    period: "Sengoku",
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
    summary: "The future Takeda Shingen, aged fifteen, won his first battle here with a clever ambush — an early glimpse of the strategist to come.",
    details: `In 1536 the Takeda under Nobutora campaigned into Shinano against Hiraga Genshin. When the initial Takeda advance fell back, the fifteen-year-old Takeda Harunobu — later famous as Shingen — wheeled about and ambushed the unprepared garrison, winning his first victory.

It was an early sign of the tactical gifts that would define his career.`
  },
  {
    id: "kaga-rebellion",
    name: "Kaga Rebellion",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Provinces_of_Japan-Kaga.svg/960px-Provinces_of_Japan-Kaga.svg.png",
        caption: "Kaga Province (highlighted), which the Ikkō-ikki governed for nearly a century. Wikimedia Commons."
      }
    ],
    year: 1488,
    dateLabel: "1487–1488",
    period: "Sengoku",
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
    details: `In 1487–88 the Ikkō-ikki — leagues of True Pure Land Buddhist believers, farmers and minor samurai — rose against the provincial governor Togashi Masachika. Vastly outnumbering his forces, they besieged him in Takao Castle, where he took his own life.

The Ikkō-ikki then governed Kaga themselves for almost a hundred years, a remarkable instance of popular self-rule in medieval Japan, until Oda Nobunaga's forces finally crushed the movement in the 1570s–80s.`
  },
  {
    id: "sakainehara",
    name: "Battle of Sakainehara",
    year: 1479,
    date: "1479-01-02",
    dateLabel: "January 2, 1479 (Bummei 10/12/10)",
    period: "Sengoku",
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
    details: `In 1478 Ōta Dōkan — the warrior-poet who built Edo Castle — defeated a rival Chiba force at Sakainehara during the turmoil of the Kantō. It is the earliest battle in this collection, from the troubled decades that opened the Sengoku period.

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
    name: "Battle of Iidagawara",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Takeda_Nobutora_by_Takeda_Nobukado_%28Daisenji_Kofu%29.jpg", caption: "Takeda Nobutora, victor at Iidagawara (1521). Wikimedia Commons." }
    ],
    year: 1521,
    dateLabel: "1521",
    period: "Sengoku",
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
    summary: "An early triumph of Takeda Nobutora — father of Takeda Shingen — defending his home province of Kai against an Imagawa invasion.",
    details: `In 1521 an Imagawa army pushed into Kai but was thrown back by Takeda Nobutora at Iidagawara near Kōfu. The victory secured the Takeda hold on their home province; Nobutora's son Harunobu — the future Shingen — was born that same year.

The Imagawa forces, led by Fukushima Masashige, had threatened the very heart of the Takeda domain, advancing close to the capital. Nobutora's decisive defense at the Kōfu riverbed averted disaster, proving his military capability and stabilizing Kai after years of bloody internal strife.`
  },
  {
    id: "ningbo-incident",
    name: "Ningbo incident",
    year: 1523,
    dateLabel: "May 1523",
    period: "Sengoku",
    location: {
      name: "Ningbo, China — NOT in Japan; a clash between Japanese clan missions on Ming soil",
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
    summary: "Not a battle in Japan at all, but a deadly brawl in the Chinese port of Ningbo between rival Japanese clan missions over the Ming tribute trade — included here as a member of the Sengoku battle category.",
    details: `In 1523 two Japanese trade missions — one sent by the Ōuchi, one by the Hosokawa — clashed at the Ming port of Ningbo when the Hosokawa party won favour through bribery. The enraged Ōuchi envoys killed their rivals, burned their ship and plundered the coast. The incident severed official Ming–Japanese trade and helped touch off decades of wokō (pirate) raids.

(This event took place in China; on this Japan-focused map its marker sits at the far western edge.)`
  },
  {
    id: "nashinokidaira",
    name: "Battle of Nashinokidaira",
    year: 1526,
    dateLabel: "1526",
    period: "Sengoku",
    location: {
      name: "Nashinokidaira, Kai Province (modern Yamanashi Prefecture) — coordinates approximate",
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
    name: "Battle of Ozawahara",
    year: 1530,
    dateLabel: "1530",
    period: "Sengoku",
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
    outcome: "Hōjō victory — the first battle of the sixteen-year-old Ujiyasu.",
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
    name: "Battle of Idano",
    year: 1536,
    date: "1536-01-05",
    dateLabel: "January 5, 1536 (Tenbun 4/12/12)",
    period: "Sengoku",
    location: {
      name: "Idano, Mikawa Province (modern Aichi Prefecture)",
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
    outcome: "Matsudaira victory; Oda Nobuhide's opportunistic invasion of Mikawa was repulsed.",
    summary: "After their lord Kiyoyasu was assassinated, the Matsudaira — the line that would produce Tokugawa Ieyasu — beat back an invasion by Oda Nobuhide of Owari, who had seized on the chaos to push into Mikawa.",
    details: `In late 1535 the Matsudaira chief Kiyoyasu (grandfather of the future Tokugawa Ieyasu) was killed by his own retainer Abe Masatoyo — the "Moriyama Collapse" (Moriyama kuzure) — throwing the clan into crisis. Seizing the moment, Oda Nobuhide of Owari invaded Mikawa and advanced on Okazaki, encamping at Daiju-ji.

The ten-year-old Matsudaira Hirotada, backed by his uncles Nobutaka and Yasutaka, met the Oda at Idano and threw them back — steadying the house and preserving the lineage that would eventually rule Japan.`
  },
  {
    id: "momotsugi",
    name: "Battle of Momotsugi",
    year: 1539,
    date: "1539-09-10",
    dateLabel: "September 10, 1539 (Tenbun 8/8/27)",
    period: "Sengoku",
    location: {
      name: "Iwaya (Momotsugi) Castle, Satsuma Province (modern Kagoshima) — coordinates approximate",
      lat: 31.785,
      lon: 130.462
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
    details: `In 1539 Iriki-in Shigetomo, fighting for the main Shimazu line under Takahisa, stormed Iwaya (Momotsugi) Castle in a single night raid. The feat helped the Shimazu end the long rebellion of the rival Sanehisa and reunify Satsuma — the base from which they would later nearly conquer all Kyūshū.`
  },
  {
    id: "ankokuji",
    name: "Battle of Ankokuji",
    year: 1542,
    date: "1542-11-02",
    dateLabel: "November 2, 1542 (Tenbun 11/9/25)",
    period: "Sengoku",
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
    name: "Battle of Kanōguchi",
    year: 1547,
    date: "1547-11-04",
    dateLabel: "November 4, 1547",
    period: "Sengoku",
    location: {
      name: "Kanō, Mino Province (modern Gifu) — coordinates approximate",
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
    summary: "Saitō Dōsan, the cunning 'Viper of Mino', repelled Oda Nobuhide before the Mino capital — a rivalry later sealed by marrying his daughter to Nobuhide's son, Oda Nobunaga.",
    details: `Oda Nobuhide's drive into Mino was checked at Kanōguchi in 1547, where Saitō Dōsan inflicted thousands of casualties. The bitter rivalry ended in alliance when Dōsan married his daughter Nōhime to Nobuhide's son, the young Oda Nobunaga.

Nobuhide had launched a massive invasion force to seize Mino Province, pushing to the very gates of Dōsan's stronghold at Inabayama Castle. But Dōsan, famously known as the "Viper of Mino," feigned weakness before launching a devastating counter-attack that routed the Oda army. Realizing a military conquest was impossible, Nobuhide shifted to diplomacy.`
  },
  {
    id: "oshikibata",
    name: "Battle of Oshikibata",
    year: 1554,
    dateLabel: "1554",
    period: "Sengoku",
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
    details: `In 1554 Mōri Motonari defeated a larger Sue force under Miyagawa Fusanaga at Oshikibata — a prelude to his decisive ambush at Itsukushima (Miyajima) in 1555. With Sue destroyed, the Mōri absorbed the old Ōuchi domains and became the greatest power in western Japan.

When Sue Harukata usurped the Ōuchi clan, Motonari feigned loyalty before breaking away. The victory at Oshikibata proved that the smaller Mōri forces stand against the Sue armies in the field. This tactical success gave Motonari the breathing room to prepare his famous trap on the island sanctuary of Itsukushima the following year.`
  },
  {
    id: "norada",
    name: "Battle of Norada",
    year: 1560,
    dateLabel: "1560",
    period: "Sengoku",
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
    details: `In 1560 the young Azai Nagamasa threw off Rokkaku overlordship, defeating a much larger Rokkaku army at Norada near Hikone. The victory broke Rokkaku power and established Nagamasa — later Oda Nobunaga's brother-in-law, then his enemy — as master of northern Ōmi.

The Rokkaku had long dominated the Azai, even forcing Nagamasa to take a Rokkaku bride and a humiliating name. By repudiating the bride and marching to war, the fifteen-year-old Nagamasa took a massive gamble. His stunning tactical victory against a force twice his size won him total independence and control of the strategic crossroads province.`
  },
  {
    id: "kyokoji",
    name: "Battle of Kyōkōji",
    year: 1562,
    date: "1562-05-19",
    dateLabel: "May 19–20, 1562",
    period: "Sengoku",
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
    summary: "A huge clash near Osaka in which Miyoshi Nagayoshi — for a time the most powerful man in central Japan — beat the Hatakeyama and tightened his hold on the capital region.",
    details: `At Kyōkōji in 1562 the Miyoshi under Nagayoshi defeated the Hatakeyama in one of the larger battles of the Kinai, confirming Miyoshi dominance around the capital in the years just before Oda Nobunaga's rise.

The Miyoshi clan, controlling the commercial wealth of Sakai and the vital sea routes of the Inland Sea, had established a hegemony over the central provinces that effectively marginalized the Ashikaga shogunate. By crushing the Hatakeyama resistance at Kyōkōji, Miyoshi Nagayoshi eliminated his last major regional rival, reaching the zenith of his power.`
  },
  {
    id: "kizaki",
    name: "Battle of Kizaki",
    year: 1572,
    date: "1572-06-14",
    dateLabel: "June 14, 1572",
    period: "Sengoku",
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
    name: "Battle of Tonegawa",
    year: 1571,
    dateLabel: "1571",
    period: "Sengoku",
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
    summary: "The last meeting in arms of the great rivals Uesugi Kenshin and Takeda Shingen, ending — as so often — without a decision.",
    details: `In 1571 Uesugi Kenshin struck at a Takeda satellite castle in Kōzuke, bringing him once more face to face with Takeda Shingen across the Tone River. The two old adversaries drew apart without a decisive fight — the final encounter of a rivalry that had defined a generation. Shingen died two years later.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Portrait of Takeda Shingen (Harunobu), one of the two rivals. Wikimedia Commons."
      }
    ]
  },
  {
    id: "mimaomote",
    name: "Battle of Mimaomote",
    year: 1581,
    dateLabel: "1581 (Tenshō 9/5/21) — modern dating; traditionally 1579",
    period: "Sengoku",
    location: {
      name: "Mimaomote, Iyo Province (modern Ehime Prefecture) — coordinates approximate",
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
        leader: "Kumu Chikanobu (久武親信)",
        forces: "approximately 7,000"
      }
    },
    outcome: "Kōno victory; the Chōsokabe commander Kumu Chikanobu was killed.",
    summary: "The Kōno of Iyo threw back a Chōsokabe thrust into Shikoku, killing the invading general Kumu Chikanobu (久武親信).",
    details: `As the Chōsokabe of Tosa pressed their conquest of Shikoku, a Kōno force under Doi Kiyonaga repelled their thrust into Iyo and killed the Chōsokabe commander Kumu Chikanobu (久武親信). Traditional accounts date the battle to Tenshō 7 (1579), but recent scholarship — based on source criticism and surviving epigraphy — places it in Tenshō 9 (1581).`
  },
  {
    id: "tensho-iga-war",
    name: "Tenshō Iga War",
    yearStart: 1579,
    yearEnd: 1582,
    dateLabel: "1579–1582",
    period: "Sengoku",
    location: {
      name: "Iga Province (modern Iga, Mie Prefecture) — coordinates approximate",
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
    summary: "Oda Nobunaga's brutal subjugation of the independent warrior leagues of Iga — whose guerrilla and espionage traditions became the legend of the ninja.",
    details: `The mountainous province of Iga was ruled not by a daimyō but by a confederation of self-governing warrior bands. After a humiliating repulse of Oda Nobukatsu in 1579, Oda Nobunaga invaded in force in 1581 with some 42,000 men, crushing the defenders and laying the province waste; mopping-up continued into 1582.

The Iga fighters' mastery of ambush, infiltration and espionage became the historical seed of the "ninja" tradition forever associated with the region.`
  },
  {
    id: "nagasaki-attacks",
    name: "Attacks on Nagasaki (1574–1579)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Portuguese_silktraders_in_Nagasaki.jpg", caption: "Portuguese traders at Nagasaki, the contested Christian port. Wikimedia Commons." }
    ],
    yearStart: 1574,
    yearEnd: 1579,
    dateLabel: "1574–1579",
    period: "Sengoku",
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
        leader: "Ryūzōji Takanobu",
        forces: "approximately 8,000"
      }
    },
    outcome: "Ōmura held Nagasaki but, hard-pressed, ceded it to the Jesuits in 1580.",
    summary: "A series of assaults on the new port of Nagasaki, defended by Japan's first Christian daimyō, that led to the town being handed to the Jesuits — the seed of Nagasaki's later role as Japan's window on the West.",
    details: `Ōmura Sumitada, baptised Bartolomeu and the first Christian daimyō, had opened Nagasaki to Portuguese trade. Between 1574 and 1579 his small garrison beat off repeated attacks by rivals such as the Ryūzōji. Worn down, in 1580 Sumitada ceded Nagasaki itself to the Society of Jesus — an extraordinary arrangement that made the port the centre of Christianity in Japan until the faith's suppression.`
  },
  {
    id: "numajiri",
    name: "Battle of Numajiri",
    year: 1584,
    dateLabel: "May–August 1584",
    period: "Sengoku",
    location: {
      name: "Numajiri, Shimotsuke Province (modern Tochigi) — coordinates approximate",
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
    summary: "A massive but largely bloodless confrontation in the Kantō, notable for the thousands of matchlock guns deployed by both sides.",
    details: `Through the summer of 1584 a huge Hōjō army faced a Satake-led northern coalition at Numajiri. After 110 days of stalemate — and remarkable use of over 8,000 firearms — the two sides made peace, restoring the previous borders. The crisis pushed the northern Kantō lords toward Toyotomi Hideyoshi, who would crush the Hōjō six years later.`
  },
  {
    id: "kanagawa-1582",
    name: "Battle of Kanagawa",
    year: 1582,
    date: "1582-07-05",
    dateLabel: "July 5–8, 1582 (Tenshō 10/6/16)",
    period: "Sengoku",
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
    details: `Days after Oda Nobunaga was killed at the Honnō-ji, the Later Hōjō moved to seize the Kantō from his deputy Takigawa Kazumasu. Across the Kanna River the Hōjō overwhelmed the outnumbered Oda army, driving Takigawa from the region — helping to spark the scramble among Hōjō, Tokugawa and Uesugi for the former Takeda and Oda lands.`
  },
  {
    id: "nakatomigawa",
    name: "Battle of Nakatomigawa",
    year: 1582,
    date: "1582-09-13",
    dateLabel: "September 13, 1582 (Tenshō 10/8/27)",
    period: "Sengoku",
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
    details: `At the Nakatomi River in 1582 Chōsokabe Motochika's army overwhelmed the Miyoshi of Awa, bringing him close to mastering all four provinces of Shikoku — an ambition soon cut short by Toyotomi Hideyoshi's invasion of the island in 1585.

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
    name: "Battle of Sendaigawa",
    year: 1587,
    date: "1587-06-06",
    dateLabel: "June 6, 1587",
    period: "Sengoku",
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
    details: `By mid-1587 Toyotomi Hideyoshi's enormous army had driven the Shimazu back to their Satsuma heartland. At the Sendai River, Niiro Tadamoto led a hopeless but ferocious rearguard — even crossing swords with Katō Kiyomasa — before retreating under cover of night. Days later the Shimazu submitted, and Hideyoshi was master of Kyūshū.`
  },
  {
    id: "koriyama-campaign",
    name: "Kōriyama Campaign",
    year: 1588,
    dateLabel: "February–July 1588",
    period: "Sengoku",
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
    details: `Through the first half of 1588 Date Masamune and a coalition of rival northern clans manoeuvred and skirmished around Kōriyama in southern Mutsu. The inconclusive fighting ended in a settlement that left the Date ascendant — a year before Masamune's decisive triumph at Suriagehara.`
  },
  {
    id: "asai-nawate",
    name: "Battle of Asai-nawate",
    year: 1600,
    date: "1600-09-16",
    dateLabel: "September 16, 1600 (Keichō 5/8/9)",
    period: "Sengoku",
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
    name: "Battle of Kuisegawa",
    year: 1600,
    dateLabel: "October 1600 (eve of Sekigahara)",
    period: "Sengoku",
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
        leader: "Honda Tadakatsu and others",
        forces: "approximately 6,000"
      }
    },
    outcome: "Western Army victory; the Eastern vanguard fell back to Sekigahara.",
    summary: "A skilful ambush by Shima Sakon on the eve of Sekigahara that bloodied the Tokugawa vanguard and briefly lifted Western morale — hours before the decisive battle.",
    details: `On the eve of the main battle, Ishida Mitsunari's general Shima Sakon lured part of the Eastern army across the Kuise River near Ōgaki and ambushed it, inflicting heavy losses. The success heartened the Western Army — but the great clash at Sekigahara the next morning would undo it all.`
  },
  {
    id: "sendanno",
    name: "Battle of Sendanno",
    year: 1536,
    dateLabel: "December 1536",
    period: "Sengoku",
    location: {
      name: "Sendanno, Etchū Province (modern Toyama Prefecture) — coordinates approximate",
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
    outcome: "Ikkō-ikki victory; Nagao Tamekage was defeated and retired.",
    summary: "The militant Ikkō-ikki of Etchū defeated the Echigo warlord Nagao Tamekage, father of Uesugi Kenshin, forcing his retirement.",
    details: `In late 1536 the militant Ikkō-ikki defeated the forces of Nagao Tamekage at Sendanno in Etchū. Traditional military chronicles claimed that Tamekage was killed in this battle, which plunged Echigo into turmoil.

    However, modern historical research shows that Tamekage survived the defeat, returned to Echigo, and formally retired in late 1536 in favor of his eldest son Harukage. He died of illness on Tenbun 10, 12th month, 24th day (January 20, 1542 Julian), while his younger son Kagetora (the future Uesugi Kenshin) eventually succeeded to unify the province.`
  },
  {
    id: "shiojiritoge",
    name: "Battle of Shiojiritoge",
    year: 1548,
    date: "1548-08-23",
    dateLabel: "August 23, 1548 (Tenbun 17/7/19)",
    period: "Sengoku",
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
    name: "Battle of Tatarahama (1336)",
    year: 1336,
    date: "1336-04-14",
    dateLabel: "April 14, 1336",
    period: "Nanboku-chō",
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
    details: `Forced out of the capital in early 1336, Ashikaga Takauji regrouped in Kyūshū and met the Imperial loyalist Kikuchi at Tatarahama on Hakata Bay. His victory — combined with lenient treatment of the defeated — won him the island and the army with which he marched back east to triumph at Minatogawa.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tatarahama_Battlefield.JPG/960px-Tatarahama_Battlefield.JPG",
        caption: "The Tatarahama battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "minatogawa",
    name: "Battle of Minatogawa",
    year: 1336,
    date: "1336-07-05",
    dateLabel: "July 5, 1336",
    period: "Nanboku-chō",
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
    summary: "The famous last stand of Kusunoki Masashige, the model of samurai loyalty, who marched to a battle he knew was lost on his emperor's orders — opening Kyoto to the Ashikaga.",
    details: `Ordered by Emperor Go-Daigo to make a hopeless frontal stand rather than the guerrilla campaign he advised, Kusunoki Masashige met the returning Ashikaga army at the Minato River. Surrounded and overwhelmed, he and his brother took their own lives.

His self-sacrifice made him an enduring symbol of loyalty in Japanese culture, and the victory let Ashikaga Takauji take Kyoto and install a rival emperor — beginning the split between the Northern and Southern Courts.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Great-Battle-of-Minatogawa-by-Takeuchi-Tacho.png/960px-Great-Battle-of-Minatogawa-by-Takeuchi-Tacho.png",
        caption: "The Battle of Minatogawa, by Takeuchi Tachō. Wikimedia Commons."
      }
    ]
  },
  {
    id: "kanegasaki-1337",
    name: "Siege of Kanegasaki",
    year: 1337,
    date: "1337-04-07",
    dateLabel: "January – April 7, 1337",
    period: "Nanboku-chō",
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
    outcome: "Ashikaga victory; the castle fell and two imperial princes perished.",
    summary: "A three-month siege that broke the Nitta clan's defence of the Southern Court in the north, ending with the deaths of imperial princes sheltered within.",
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
    name: "Battle of Ishizu",
    year: 1338,
    date: "1338-06-10",
    dateLabel: "June 10, 1338",
    period: "Nanboku-chō",
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
    details: `Kitabatake Akiie, only twenty-one, had twice swept down from Mutsu to threaten the Ashikaga. Worn down after a long campaign, he was cornered and killed at Ishizu near Sakai in 1338. His loss — soon followed by Nitta Yoshisada's death the same year — stripped the Southern Court of its ablest commanders.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/%E5%8C%97%E7%95%A0%E9%A1%95%E5%AE%B6.png",
        caption: "Portrait of Kitabatake Akiie, who fell here. Wikimedia Commons."
      }
    ]
  },
  {
    id: "shijo-nawate",
    name: "Battle of Shijō Nawate",
    year: 1348,
    date: "1348-02-04",
    dateLabel: "February 4, 1348",
    period: "Nanboku-chō",
    location: {
      name: "Shijōnawate, Kawachi Province (modern Shijōnawate, Osaka)",
      lat: 34.732494,
      lon: 135.637009
    },
    combatants: {
      side1: {
        name: "Northern Court (Ashikaga)",
        leader: "Kō no Moronao & Moroyasu",
        forces: "60,000–80,000"
      },
      side2: {
        name: "Southern Court",
        leader: "Kusunoki Masatsura",
        forces: "approximately 3,000"
      }
    },
    outcome: "Northern Court victory; Kusunoki Masatsura died and Yoshino was sacked.",
    summary: "The doomed charge of Kusunoki Masatsura — son of the Minatogawa hero — whose death let the Ashikaga burn the Southern capital at Yoshino.",
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
    name: "Kannō Incident",
    yearStart: 1350,
    yearEnd: 1352,
    dateLabel: "1350–1352",
    period: "Nanboku-chō",
    location: {
      name: "Satta Pass, Suruga Province — a key battle of the Kannō Incident (modern Shizuoka)",
      lat: 35.071694,
      lon: 138.541167
    },
    combatants: {
      side1: {
        name: "Ashikaga Takauji's faction",
        leader: "Ashikaga Takauji (with Kō no Moronao)"
      },
      side2: {
        name: "Ashikaga Tadayoshi's faction",
        leader: "Ashikaga Tadayoshi (allied to the Southern Court)"
      }
    },
    outcome: "Takauji prevailed; his brother Tadayoshi died in 1352.",
    summary: "A civil war within the ruling Ashikaga house itself, as shōgun Takauji and his brother Tadayoshi tore the young shogunate apart — even briefly allying with the enemy Southern Court.",
    details: `The Kannō Incident pitted Ashikaga Takauji and his administrator Kō no Moronao against Takauji's own brother and co-ruler Tadayoshi. The feud convulsed the realm: each side in turn made common cause with the Southern Court to gain advantage. It ended with the Kō brothers dead and Tadayoshi defeated and dying (poisoned, by tradition) in 1352 — a near-fatal wound to the early Ashikaga order.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ashikaga_Takauji_J%C5%8Ddo-ji.jpg/960px-Ashikaga_Takauji_J%C5%8Ddo-ji.jpg",
        caption: "Portrait of Ashikaga Takauji. Wikimedia Commons."
      }
    ]
  },
  {
    id: "uchidehama",
    name: "Battle of Uchidehama",
    year: 1351,
    date: "1351-03-15",
    dateLabel: "March 15, 1351",
    period: "Nanboku-chō",
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
    details: `At Uchidehama on the Settsu shore, the forces of Ashikaga Tadayoshi decisively beat his brother Takauji's much larger army. The defeat compelled Takauji to give up the hated Kō no Moronao and Moroyasu, who were murdered on the road soon after — though the brothers' reconciliation would not last.`
  },
  {
    id: "chikugogawa",
    name: "Battle of Chikugogawa",
    year: 1359,
    date: "1359-08-29",
    dateLabel: "August 1359",
    period: "Nanboku-chō",
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
    summary: "The largest battle of the Nanboku-chō wars in Kyūshū — a Southern triumph that gave Prince Kanenaga's court control of the island for over a decade.",
    details: `On the banks of the Chikugo River, the Southern Court army of Prince Kanenaga and Kikuchi Takemitsu met the Northern coalition under Shōni Yorihisa. Despite being outnumbered, the Southern forces won a bloody victory — some 5,000 fell — and made the Seisei-fu (the Southern Court's Kyūshū headquarters) the dominant power on the island until the 1370s.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kikuchi_Takemitu.jpg/960px-Kikuchi_Takemitu.jpg",
        caption: "Portrait of Kikuchi Takemitsu, the Southern commander. Wikimedia Commons."
      }
    ]
  },
  {
    id: "oei-rebellion",
    name: "Ōei Rebellion",
    year: 1399,
    dateLabel: "October – December 1399",
    period: "Nanboku-chō",
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
    summary: "Shōgun Ashikaga Yoshimitsu crushed the over-mighty Ōuchi Yoshihiro at Sakai, cementing the centralized power of the Muromachi shogunate at its height.",
    details: `Ōuchi Yoshihiro, master of six provinces and rich on the Korea trade, defied the great shōgun Ashikaga Yoshimitsu and fortified Sakai. Yoshimitsu besieged the port, took it, and killed Yoshihiro in the fighting. Coming just after Yoshimitsu had reunited the Northern and Southern Courts (1392), the victory marked the peak of shogunal authority.`
  },
  {
    id: "uesugi-zenshu",
    name: "Rebellion of Uesugi Zenshū",
    yearStart: 1416,
    yearEnd: 1417,
    dateLabel: "1416–1417",
    period: "Nanboku-chō",
    location: {
      name: "Kamakura, Sagami Province (modern Kanagawa) — coordinates approximate",
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
    details: `Uesugi Ujinori — known by his monk's name Zenshū — had served as Kantō kanrei (deputy) before falling out with the young Kamakura kubō Ashikaga Mochiuji. His 1416 rising briefly drove Mochiuji from Kamakura, but shogunal help turned the tables and Zenshū killed himself in early 1417. The instability he unleashed fed directly into the later Eikyō and Yūki conflicts.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ashikaga_Mochijuji_color.jpg",
        caption: "Portrait of Ashikaga Mochiuji, the Kamakura kubō. Wikimedia Commons."
      }
    ]
  },
  {
    id: "eikyo-rebellion",
    name: "Eikyō Rebellion",
    yearStart: 1438,
    yearEnd: 1439,
    dateLabel: "1438–1439",
    period: "Nanboku-chō",
    location: {
      name: "Kamakura, Sagami Province (modern Kanagawa) — coordinates approximate",
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
    summary: "Shōgun Ashikaga Yoshinori destroyed the defiant Kamakura kubō Mochiuji, ending the independence of the eastern Ashikaga and tightening shogunal control of the Kantō.",
    details: `The Kamakura kubō Ashikaga Mochiuji had grown increasingly hostile to the Kyoto shogunate. When he broke with his own deputy Uesugi Norizane, shōgun Yoshinori sent armies east. Defeated, Mochiuji was forced to take his own life in 1439, and his heirs were hunted down — a brutal assertion of central authority whose aftershocks produced the Yūki War.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ashikaga_Yoshinori_cropped.jpg/960px-Ashikaga_Yoshinori_cropped.jpg",
        caption: "Portrait of shōgun Ashikaga Yoshinori. Wikimedia Commons."
      }
    ]
  },
  {
    id: "yuki-war",
    name: "Yūki War (incl. Siege of Yūki)",
    yearStart: 1440,
    yearEnd: 1441,
    dateLabel: "1440–1441",
    period: "Nanboku-chō",
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
    summary: "Loyalists of the fallen Mochiuji rallied his surviving sons at Yūki Castle; the shogunate besieged and destroyed them, snuffing out Kantō resistance — for the moment.",
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
    name: "Kakitsu Incident",
    year: 1441,
    dateLabel: "1441",
    period: "Nanboku-chō",
    location: {
      name: "Kyoto (Ashikaga shogunate) — coordinates approximate",
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
    summary: "The shocking assassination of the strong-willed shōgun Ashikaga Yoshinori by the lord Akamatsu Mitsusuke — a blow from which the shogunate's authority never fully recovered.",
    details: `Fearing the autocratic shōgun meant to destroy his house, Akamatsu Mitsusuke invited Ashikaga Yoshinori to a banquet in Kyoto in 1441 and had him killed. The shogunate's vengeance was total — the Akamatsu were crushed within months — but the murder of a sitting shōgun shattered the prestige of the office. The weakening of central authority that followed helped set the stage for the Ōnin War and the Sengoku period.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/%E5%98%89%E5%90%89%E3%81%AE%E4%B9%B1.png",
        caption: "Depiction of the Kakitsu Incident. Wikimedia Commons."
      }
    ]
  },
  {
    id: "itsukushima",
    name: "Battle of Itsukushima",
    year: 1555,
    date: "1555-10-16",
    dateLabel: "October 16, 1555",
    period: "Sengoku",
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
    summary: "Mōri Motonari lured the far larger Sue army onto the sacred island of Itsukushima and destroyed it in a daring night amphibious assault — the victory that made the Mōri masters of western Japan.",
    details: `The Battle of Itsukushima was fought on October 16, 1555, on the island of Miyajima in Aki Province. Mōri Motonari, commanding 4,000 troops, engaged an Ōuchi faction army of 20,000 men commanded by Sue Harukata.

Motonari established Miyao Castle on the island and disseminated disinformation suggesting the fort's vulnerability. Sue Harukata subsequently transported his army to the island, isolating his forces geographically. Exploiting adverse weather conditions, the Mōri forces executed a nocturnal amphibious transit and launched a coordinated land and naval assault at dawn, supported by the Murakami naval clan.

The Sue forces were enveloped and destroyed. Sue Harukata committed seppuku. The strategic victory established the Mōri clan as the paramount military power in the Chūgoku region.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mori_Motonari.jpg/960px-Mori_Motonari.jpg",
        caption: "Portrait of Mōri Motonari, the victor at Itsukushima. Wikimedia Commons."
      }
    ]
  },
  {
    id: "okehazama",
    name: "Battle of Okehazama",
    year: 1560,
    date: "1560-06-12",
    dateLabel: "June 12, 1560 (Eiroku 3/5/19)",
    period: "Sengoku",
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
    summary: "Oda Nobunaga's audacious surprise attack destroyed an army ten times his size and killed the great Imagawa Yoshimoto — the upset that announced Nobunaga to the realm.",
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
    name: "Battle of Anegawa",
    year: 1570,
    date: "1570-07-30",
    dateLabel: "July 30, 1570 (Genki 1/6/28)",
    period: "Sengoku",
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
        leader: "Azai Nagamasa & Asakura Yoshikage",
        forces: "approximately 18,000"
      }
    },
    outcome: "Oda–Tokugawa victory.",
    summary: "The first battle Nobunaga and Ieyasu fought side by side — a confused melee in the shallows of the Ane River against Nobunaga's treacherous brother-in-law Azai Nagamasa and his Asakura allies.",
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
    name: "Battle of Mikatagahara",
    year: 1573,
    date: "1573-01-25",
    dateLabel: "January 25, 1573 (Genki 3/12/22)",
    period: "Sengoku",
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
    summary: "Takeda Shingen, marching on Kyoto, lured Tokugawa Ieyasu out of Hamamatsu Castle and routed him on the Mikatagahara plateau — the worst defeat of Ieyasu's life.",
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
    name: "Battle of Nagashino",
    year: 1575,
    date: "1575-06-28",
    dateLabel: "June 28, 1575 (Tenshō 3/5/21)",
    period: "Sengoku",
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
    outcome: "Decisive Oda–Tokugawa victory; the Takeda cavalry was broken.",
    summary: "The famous clash where Nobunaga's massed arquebusiers behind palisades shattered the charges of the vaunted Takeda cavalry — long seen as the dawn of gunpowder warfare in Japan.",
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
    name: "Battle of Tedorigawa",
    year: 1577,
    date: "1577-11-03",
    dateLabel: "November 3, 1577 (Tenshō 5/9/23)",
    period: "Sengoku",
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
        leader: "Oda Nobunaga (Shibata Katsuie)",
        forces: "approximately 50,000"
      }
    },
    outcome: "Uesugi victory; the Oda army was driven back across the river.",
    summary: "Uesugi Kenshin's last great victory — a defeat inflicted on an Oda army at the flooded Tedori River, the only serious check Nobunaga's forces suffered in the late 1570s.",
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
    name: "Honnō-ji Incident",
    year: 1582,
    date: "1582-06-21",
    dateLabel: "June 21, 1582 (Tenshō 10/6/2)",
    period: "Sengoku",
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
    details: `In June 1582, ordered west to reinforce Hideyoshi, Akechi Mitsuhide instead wheeled his army toward Kyoto — declaring, by tradition, that "the enemy is at Honnō-ji." He surrounded the temple where Nobunaga rested with only a small guard. Nobunaga fought with bow and spear, then set the temple ablaze and took his own life; his son Nobutada died nearby.

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
    name: "Battle of Yamazaki",
    year: 1582,
    date: "1582-07-02",
    dateLabel: "July 2, 1582",
    period: "Sengoku",
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
    summary: "Eleven days after killing Nobunaga, Akechi Mitsuhide was crushed by Hideyoshi at Yamazaki — the battle that made Hideyoshi heir to Nobunaga's power.",
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
    name: "Battle of Shizugatake",
    year: 1583,
    date: "1583-06-11",
    dateLabel: "June 10–11, 1583",
    period: "Sengoku",
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
    summary: "Hideyoshi defeated Nobunaga's senior general Shibata Katsuie in the struggle for the Oda succession — famous for the 'Seven Spears of Shizugatake' and another of Hideyoshi's lightning marches.",
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
    name: "Battle of Komaki and Nagakute",
    year: 1584,
    dateLabel: "March–November 1584",
    period: "Sengoku",
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
    outcome: "Tactically a Tokugawa success (Nagakute); strategically inconclusive — settled by negotiation.",
    summary: "The only war between the two eventual giants, Hideyoshi and Tokugawa Ieyasu — a campaign of manoeuvre in which Ieyasu won the sharp battle of Nagakute but both sides ultimately made peace.",
    details: `When Hideyoshi moved against Nobunaga's son Nobukatsu, Tokugawa Ieyasu allied with the latter and the two great captains faced off across the entrenched lines of Komaki. The decisive action came at Nagakute, where Ieyasu ambushed and destroyed a Toyotomi raiding column, killing the generals Ikeda Tsuneoki and Mori Nagayoshi.

Unable to break Ieyasu in the field, Hideyoshi turned to diplomacy; the war ended in a negotiated settlement and an exchange of hostages. Ieyasu had proved he could not be beaten outright — shaping the uneasy partnership that lasted until Hideyoshi's death.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nagakute_Historic_Battlefield.jpg/960px-Nagakute_Historic_Battlefield.jpg",
        caption: "The Nagakute battlefield today. Wikimedia Commons."
      }
    ]
  },
  {
    id: "okita-nawate",
    name: "Battle of Okita-Nawate",
    year: 1584,
    date: "1584-05-04",
    dateLabel: "May 4, 1584",
    period: "Sengoku",
    location: {
      name: "Okita-Nawate, Hizen Province (modern Shimabara, Nagasaki)",
      lat: 32.7919,
      lon: 130.3703
    },
    combatants: {
      side1: {
        name: "Shimazu–Arima coalition",
        leader: "Shimazu Iehisa",
        forces: "approximately 3,000–5,000"
      },
      side2: {
        name: "Ryūzōji clan",
        leader: "Ryūzōji Takanobu",
        forces: "approximately 30,000"
      }
    },
    outcome: "Decisive Shimazu–Arima victory; Ryūzōji Takanobu was killed in action.",
    summary: "A legendary Kyūshū clash in which a small Shimazu–Arima coalition lured the huge Ryūzōji army into a narrow marshy causeway (nawate) and destroyed it.",
    details: `At Okita-Nawate in 1584, Shimazu Iehisa allied with Arima Harunobu to defend Shimabara against Ryūzōji Takanobu. Using the Shimazu clan's signature decoy tactic (tsuri-no-bushi), the defenders feigned a retreat, drawing the Ryūzōji vanguard onto a narrow causeway hemmed by deep marshes.

Trapped and unable to deploy their huge numbers, the Ryūzōji army broke when a sudden Shimazu flank attack struck home. Takanobu himself was cut down — crippling the Ryūzōji and securing Shimazu dominance over western Kyūshū.`
  },
  {
    id: "odawara-1590",
    name: "Siege of Odawara (1590)",
    year: 1590,
    dateLabel: "May – August 4, 1590",
    period: "Sengoku",
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
    summary: "Hideyoshi's overwhelming envelopment of the great Hōjō fortress of Odawara — the siege that ended the last independent power in the east and completed the unification of Japan.",
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
    name: "Siege of Osaka",
    yearStart: 1614,
    yearEnd: 1615,
    dateLabel: "Winter 1614 – Summer 1615",
    period: "Sengoku",
    location: {
      name: "Osaka Castle, Settsu Province (modern Osaka)",
      lat: 34.6873,
      lon: 135.5259
    },
    combatants: {
      side1: {
        name: "Tokugawa shogunate",
        leader: "Tokugawa Ieyasu & Hidetada",
        forces: "approximately 150,000–200,000"
      },
      side2: {
        name: "Toyotomi clan",
        leader: "Toyotomi Hideyori (Sanada Yukimura)",
        forces: "approximately 60,000–120,000"
      }
    },
    outcome: "Tokugawa victory; the Toyotomi were destroyed and Osaka Castle fell.",
    summary: "The two-part siege that destroyed the Toyotomi and snuffed out the last armed resistance to Tokugawa rule — the closing battle of the Sengoku age, famous for the last stand of Sanada Yukimura.",
    details: `Determined to remove the lingering Toyotomi, Ieyasu besieged Hideyori in the mighty Osaka Castle. In the Winter Campaign of 1614 the defenders — stiffened by masterless samurai and the brilliant Sanada Yukimura at his "Sanada-maru" barbican — held firm, and Ieyasu made a treacherous peace that let him fill in the outer moats.

In the Summer Campaign of 1615 the now-defenceless castle was stormed; Sanada Yukimura died in a charge that nearly reached Ieyasu himself, and Hideyori and his mother Yodo-dono perished as the keep burned. With the Toyotomi gone, the wars were over — and the Tokugawa peace that followed would last over 250 years.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Osakarakuzyou_%28cropped%29.jpg",
        caption: "The fall of Osaka Castle, depicted on a folding screen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "uji-1180",
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
    name: "Battle of Ishibashiyama",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tsuruya_Kiemon_-_Yobu_hakkei_-_Walters_95109.jpg/960px-Tsuruya_Kiemon_-_Yobu_hakkei_-_Walters_95109.jpg", caption: "Woodblock print depicting the Battle of Ishibashiyama (1180). Wikimedia Commons." }
    ],
    year: 1180,
    date: "1180-09-14",
    dateLabel: "September 14, 1180 (Jishō 4/8/23)",
    period: "Genpei",
    location: {
      name: "Ishibashiyama, near Odawara, Sagami Province (modern Kanagawa) — coordinates approximate",
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
    summary: "Minamoto no Yoritomo's disastrous first battle. Heavily outnumbered and caught in a night rainstorm, his small band was crushed by the Taira loyalist Ōba Kagechika. Yoritomo escaped into hiding — by legend in a hollow tree — and slipped away by boat to rebuild his forces in the east.",
    details: `The Battle of Ishibashiyama occurred in 1180 at Ishibashiyama, near Odawara, Sagami Province (modern Kanagawa) — coordinates approximate. The engagement involved forces of the Minamoto clan, commanded by Minamoto no Yoritomo, engaging the Taira loyalists, commanded by Ōba Kagechika. Minamoto no Yoritomo's disastrous first battle. Heavily outnumbered and caught in a night rainstorm, his small band was crushed by the Taira loyalist Ōba Kagechika. Yoritomo escaped into hiding — by legend in a hollow tree — and slipped away by boat to rebuild his forces in the east. The conflict resulted in a Taira (Ōba) victory; Yoritomo was defeated and fled by sea to Awa. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "fujigawa",
    name: "Battle of Fujigawa",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yoshifuji-utagawa-rr213.png/960px-Yoshifuji-utagawa-rr213.png", caption: "Utagawa woodblock print of the Battle of Fujigawa (1180). Wikimedia Commons." }
    ],
    year: 1180,
    date: "1180-11-09",
    dateLabel: "November 9, 1180 (Jishō 4/10/20)",
    period: "Genpei",
    location: {
      name: "Fuji River, Suruga Province (modern Fuji, Shizuoka) — coordinates approximate",
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
    outcome: "Minamoto victory — essentially without a fight, as the Taira army fled.",
    summary: "Advancing to crush the revived Minamoto, the Taira army under Koremori panicked in the night when a great flock of waterbirds suddenly took flight — mistaking the noise for an enveloping attack — and fled back toward the capital. A bloodless rout that hugely emboldened Yoritomo.",
    details: `The Battle of Fujigawa occurred in 1180 at Fuji River, Suruga Province (modern Fuji, Shizuoka) — coordinates approximate. The engagement involved forces of the Minamoto clan, commanded by Minamoto no Yoritomo (with Takeda Nobuyoshi), engaging the Taira clan, commanded by Taira no Koremori. Advancing to crush the revived Minamoto, the Taira army under Koremori panicked in the night when a great flock of waterbirds suddenly took flight — mistaking the noise for an enveloping attack — and fled back toward the capital. A bloodless rout that hugely emboldened Yoritomo. The conflict resulted in a Minamoto victory — essentially without a fight, as the Taira army fled. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "kurikara",
    name: "Battle of Kurikara",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Battle_of_Kurikaradani_Kassen_Zu.jpg/960px-Battle_of_Kurikaradani_Kassen_Zu.jpg", caption: "‘Battle of Kurikara’ (Kurikara-dani Kassen-zu). Wikimedia Commons." }
    ],
    year: 1183,
    date: "1183-06-02",
    dateLabel: "June 2, 1183 (Juei 2/5/11)",
    period: "Genpei",
    location: {
      name: "Kurikara Pass (Tonamiyama), Etchū–Kaga border (modern Toyama / Ishikawa) — coordinates approximate",
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
    details: `Marching to crush the resurgent Minamoto of the north, the Taira under Koremori met Kiso Yoshinaka in the mountains on the Etchū–Kaga border. Yoshinaka fixed their attention with banners and skirmishing through the day, then launched a night attack — the famous "ox-fire" charge of the Tale of the Heike — that panicked the Taira into the steep Kurikara valley, where vast numbers perished.

The shattering of the Taira field army let Yoshinaka march on the capital; the Taira soon abandoned Kyoto, carrying the child-emperor Antoku west.`
  },
  {
    id: "awazu",
    name: "Battle of Awazu",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Y%C5%8Dsh%C5%AB_Chikanobu_Tomoe_Gozen.jpg/960px-Y%C5%8Dsh%C5%AB_Chikanobu_Tomoe_Gozen.jpg", caption: "Tomoe Gozen, who fought at Awazu, by Yōshū Chikanobu. Wikimedia Commons." }
    ],
    year: 1184,
    date: "1184-03-04",
    dateLabel: "March 4, 1184 (Juei 3/1/20)",
    period: "Genpei",
    location: {
      name: "Awazu, Ōtsu, Ōmi Province (modern Ōtsu, Shiga) — coordinates approximate",
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
    details: `The Battle of Awazu occurred in 1184 at Awazu, Ōtsu, Ōmi Province (modern Ōtsu, Shiga) — coordinates approximate. The engagement involved forces of the Kamakura Minamoto, commanded by Minamoto no Yoshitsune & Noriyori, engaging the Kiso Minamoto, commanded by Kiso Yoshinaka. The Minamoto turned on one another. Having seized and then alienated the capital, Kiso Yoshinaka was attacked by his cousins Yoshitsune and Noriyori on Yoritomo's orders. Yoshinaka was run down and killed near the shore of Lake Biwa at Awazu, his foster-brother Imai Kanehira dying beside him. The conflict resulted in a Yoritomo's forces victorious; Kiso Yoshinaka was killed. This event remains a historically significant military engagement within the context of the Genpei period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "ichi-no-tani",
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
    summary: "Yoshitsune's most famous stroke. While the main Minamoto army assaulted the Taira fortress at Ichi-no-Tani from the front, Yoshitsune led a handful of riders down the precipitous Hiyodorigoe slope to fall on the defenders' rear, throwing the Taira into rout. It is the setting of the death of the young flute-player Taira no Atsumori at the hands of Kumagai Naozane.",
    leadsTo: "yashima",
    details: `Re-established at Ichi-no-Tani between the mountains and the sea near Suma, the Taira were attacked on several fronts in early 1184. The decisive moment came when Minamoto no Yoshitsune, with a small mounted party, descended the cliff at Hiyodorigoe — thought impassable — and struck the fortress from behind. The Taira line collapsed and the survivors fled to their fleet, carrying the war out to sea.`
  },
  {
    id: "yashima",
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
    summary: "The naval battle that ended the Genpei War. In the swift tidal narrows of the Shimonoseki Strait the two fleets met; as the tide turned and Taira allies defected, their cause collapsed. The grandmother of the seven-year-old Emperor Antoku leapt into the sea with him rather than be captured, and with the Taira annihilated the way lay open to the Kamakura shogunate.",
    details: `On 25 April 1185 the Minamoto and Taira fleets joined battle in the Kanmon Strait off Dan-no-ura. Early advantage lay with the Taira, who knew the tides, but as the current reversed through the day and the Taira general Taguchi Shigeyoshi changed sides, the Minamoto closed in. Realizing all was lost, the Taira nobles and women threw themselves into the sea; Nii-no-Ama plunged beneath the waves clutching her grandson, the boy-emperor Antoku.

The destruction of the Taira ended the five-year war and left Minamoto no Yoritomo supreme — the foundation of the Kamakura shogunate, the first lasting warrior government of Japan.`
  },
  {
    id: "jokyu-war",
    name: "Jōkyū War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emperor_Go-Toba.jpg/960px-Emperor_Go-Toba.jpg", caption: "Retired Emperor Go-Toba, who launched the Jōkyū War in 1221. Wikimedia Commons." }
    ],
    year: 1221,
    dateLabel: "June–July 1221 (Jōkyū 3)",
    period: "Kamakura",
    location: {
      name: "Uji–Seta river crossings, approaches to Kyoto (modern Kyoto) — coordinates approximate",
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
    summary: "The retired Emperor Go-Toba's bid to overthrow the Kamakura shogunate and restore direct imperial rule. The Hōjō regency's eastern armies crushed the imperial forces at the river crossings south of Kyoto and took the capital within weeks — sealing warrior dominance over the court for the rest of the medieval age.",
    details: `The Jōkyū War occurred in 1221 at Uji–Seta river crossings, approaches to Kyoto (modern Kyoto) — coordinates approximate. The engagement involved forces of the Kamakura shogunate, commanded by Hōjō Yasutoki (for regent Hōjō Yoshitoki), engaging the Retired Emperor Go-Toba's forces, commanded by Go-Toba (retired emperor). The retired Emperor Go-Toba's bid to overthrow the Kamakura shogunate and restore direct imperial rule. The Hōjō regency's eastern armies crushed the imperial forces at the river crossings south of Kyoto and took the capital within weeks — sealing warrior dominance over the court for the rest of the medieval age. The conflict resulted in a Decisive shogunate victory; Go-Toba was exiled to the Oki Islands. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "bunei-mongol-1274",
    name: "Mongol Invasion of 1274 (Bun'ei)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg/960px-M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg", caption: "The Mongol invasion, from the Mōko Shūrai Ekotoba scroll. Wikimedia Commons." }
    ],
    year: 1274,
    dateLabel: "November 1274 (Bun'ei 11)",
    period: "Kamakura",
    location: {
      name: "Hakata Bay, Chikuzen Province (modern Fukuoka) — coordinates approximate",
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
    summary: "The first Mongol invasion. A Yuan–Goryeo fleet landed in Hakata Bay and shook the Japanese with massed formations, poisoned arrows and exploding bombs, but re-embarked at nightfall and was scattered by a storm — sparing Kyūshū and prompting Japan to build a defensive stone wall along the bay.",
    details: `The Mongol Invasion of 1274 (Bun'ei) occurred in 1274 at Hakata Bay, Chikuzen Province (modern Fukuoka) — coordinates approximate. The engagement involved forces of the Kamakura shogunate (Kyūshū defenders), commanded by Hōjō regency (regent Hōjō Tokimune), engaging the Yuan (Mongol) & Goryeo invasion force, commanded by Hol Don (Hindu) & Kim Bang-gyeong. The first Mongol invasion. A Yuan–Goryeo fleet landed in Hakata Bay and shook the Japanese with massed formations, poisoned arrows and exploding bombs, but re-embarked at nightfall and was scattered by a storm — sparing Kyūshū and prompting Japan to build a defensive stone wall along the bay. The conflict resulted in a The invaders withdrew to their ships and were scattered by a storm; Kyūshū held. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "koan-mongol-1281",
    name: "Mongol Invasion of 1281 (Kōan)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kikuchi_Yoosai_-_Mongol_Invasion_%28m%C5%8Dko_sh%C5%ABrai%29_-_Tokyo_National_Museum.jpg/960px-Kikuchi_Yoosai_-_Mongol_Invasion_%28m%C5%8Dko_sh%C5%ABrai%29_-_Tokyo_National_Museum.jpg", caption: "The Mongol invasion, by Kikuchi Yōsai (Tokyo National Museum). Wikimedia Commons." }
    ],
    year: 1281,
    dateLabel: "June–August 1281 (Kōan 4)",
    period: "Kamakura",
    location: {
      name: "Hakata Bay & the defensive stone wall, Chikuzen Province (modern Fukuoka) — coordinates approximate",
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
        leader: "Eastern Route & Jiangnan armies"
      }
    },
    outcome: "Japanese victory; the vast invasion fleet was destroyed by a typhoon — the 'kamikaze'.",
    summary: "The second and far larger Mongol invasion. Two huge fleets converged on Kyūshū but were held off the new stone wall along Hakata Bay for weeks; then a great typhoon — remembered as the kamikaze, the 'divine wind' — annihilated the anchored armada, ending Kublai Khan's attempts to conquer Japan.",
    details: `Kublai Khan launched one of the largest seaborne invasions of the pre-modern world: an Eastern Route fleet from Korea and a vast Jiangnan fleet from southern China, together carrying well over 100,000 men. The defensive wall (Genkō Bōrui) built after 1274 kept them from securing a beachhead at Hakata, and Japanese warriors raided the anchored ships in small boats by night.

In August 1281 a typhoon struck the crowded fleet and destroyed it; great numbers drowned. The deliverance entered legend as the kamikaze — though the staggering defensive costs would, in time, help undermine the very Hōjō regency that had organised the victory.`
  },
  {
    id: "chihaya-1333",
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
    summary: "Kusunoki Masashige's legendary defense of the small mountain fortress of Chihaya against a vast Hōjō army. His ingenious guerrilla tricks — logs, boulders and feints — held the castle for months, tying down the shogunate's strength and emboldening Emperor Go-Daigo's supporters to rise across the country.",
    details: `The Siege of Chihaya occurred in 1333 at Chihaya Castle, Mt. Kongō, Kawachi Province (modern Chihayaakasaka, Osaka). The engagement involved forces of the Go-Daigo loyalists, commanded by Kusunoki Masashige, engaging the Kamakura shogunate, commanded by Hōjō army. Kusunoki Masashige's legendary defense of the small mountain fortress of Chihaya against a vast Hōjō army. His ingenious guerrilla tricks — logs, boulders and feints — held the castle for months, tying down the shogunate's strength and emboldening Emperor Go-Daigo's supporters to rise across the country. The conflict resulted in a Loyalist success; Kusunoki held out and tied down the shogunate's forces. This event remains a historically significant military engagement within the context of the Kamakura period, contributing to the broader geopolitical realignment of the era.`
  },
  {
    id: "fall-of-kamakura-1333",
    name: "Fall of Kamakura",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Yoshitoshi_-_100_Aspects_of_the_Moon_-_39.jpg", caption: "Tsukioka Yoshitoshi, ‘One Hundred Aspects of the Moon’ — evoking the fall of the Hōjō. Wikimedia Commons." }
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
        leader: "Hōjō regency (regent Hōjō Takatoki)"
      }
    },
    outcome: "Kamakura fell; Hōjō Takatoki and his kin took their own lives — ending the Kamakura shogunate.",
    summary: "Nitta Yoshisada's assault on the shogunal capital. By tradition he turned the city's coastal defenses by leading his army across the beach at Inamuragasaki at an unusually low tide; Kamakura fell amid heavy fighting, and the last Hōjō regent Takatoki and hundreds of his kin took their own lives — ending nearly 150 years of Kamakura rule and opening the way to the Kenmu Restoration.",
    leadsTo: "minatogawa",
    details: `As risings against the Hōjō spread in 1333, Nitta Yoshisada raised the loyalist banner in the east and drove on Kamakura. Blocked at the fortified passes, he is said to have prayed at Inamuragasaki, where the tide drew back and let his army sweep around the defenses along the shore.

The city was stormed and burned; Hōjō Takatoki and the leading members of the regency took their own lives at the temple of Tōshō-ji. With the Hōjō gone, Emperor Go-Daigo's Kenmu Restoration began — though within three years it collapsed into the Nanboku-chō wars already on your map.`
  },
  {
    id: "kizugawaguchi",
    name: "Battles of Kizugawaguchi",
    year: 1576,
    yearStart: 1576,
    yearEnd: 1578,
    dateLabel: "1576 and 1578",
    period: "Sengoku",
    location: {
      name: "Mouth of the Kizu River, Osaka Bay",
      lat: 34.63,
      lon: 135.432
    },
    combatants: {
      side1: {
        name: "Oda clan fleet",
        leader: "Kuki Yoshitaka",
        forces: "Ironclad warships (1578)"
      },
      side2: {
        name: "Mōri & Murakami fleets",
        leader: "Murakami Takeyoshi",
        forces: "Hundreds of wooden warships"
      }
    },
    outcome: "Initial Mōri victory (1576); Decisive Oda victory (1578).",
    summary: "Two massive naval engagements. The Mōri initially broke the Oda blockade of Ishiyama Hongan-ji, prompting Nobunaga to build revolutionary ironclad warships to crush the Mōri fleet two years later.",
    details: `The Battles of Kizugawaguchi comprised two naval engagements (1576 and 1578) at the mouth of the Kizu River in Osaka Bay, fought between the Oda clan and the Mōri clan.

In the First Battle (1576), the Mōri navy successfully broke the Oda blockade of Ishiyama Hongan-ji utilizing incendiary projectiles to destroy the Oda fleet. 

In response, Oda Nobunaga commissioned the construction of six heavily armed, iron-plated warships (Tekkōsen). During the Second Battle (1578), the Oda ironclads engaged the Mōri fleet. The iron plating neutralized Mōri incendiary tactics, and the Oda vessels utilized naval artillery to sink the opposing wooden ships. The Oda victory successfully re-established the blockade, leading to the capitulation of Ishiyama Hongan-ji in 1580.`
  },
  {
    id: "shimabara",
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
      side1: { name: "Imperial (Satsuma–Chōshū–Tosa) forces", leader: "Itagaki Taisuke & Yamagata Aritomo", forces: "approximately 30,000" },
      side2: { name: "Aizu domain", leader: "Matsudaira Katamori", forces: "approximately 5,000" }
    },
    outcome: "Imperial victory after a month-long siege; the Aizu domain was crushed.",
    summary: "The bloodiest campaign of the Boshin War. The Tokugawa-loyalist Aizu domain made a desperate stand at Tsuruga Castle; the tragedy of the teenage Byakkotai, who took their own lives believing the castle had fallen, became a national legend.",
    leadsTo: "hakodate",
    details: `Aizu, staunchest of the Tokugawa loyalist domains under Matsudaira Katamori, became the focus of the Imperial army's northern campaign against the Ōuetsu Reppan Dōmei (Northern Alliance).

Imperial forces stormed into the Aizu basin in October 1868 and besieged the formidable Tsuruga (Aizuwakamatsu) Castle. During the chaos the Byakkotai — a reserve unit of teenage samurai — withdrew to Iimoriyama; seeing smoke over the castle town and believing it lost, most took their own lives. The castle held out about a month before Katamori surrendered in early November.

The fall of Aizu broke the back of the Northern Alliance and remains a byword for tragic loyalty.`
  },
  {
    id: "hakodate",
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
    summary: "The last stand of the Tokugawa cause. Naval officer Enomoto Takeaki and former Shinsengumi commander Hijikata Toshizō held the star-shaped Goryōkaku fortress in Hokkaido as the short-lived 'Ezo Republic,' until Imperial forces overwhelmed them in mid-1869.",
    details: `Refusing to surrender, Enomoto Takeaki led part of the shogunate navy north to Ezo (Hokkaido), where the loyalists proclaimed the Ezo Republic and fortified the Western-style star fort of Goryōkaku at Hakodate.

Imperial forces landed in spring 1869 and ground down the defenders by land and sea, an action that included the ironclad warship Kōtetsu. Hijikata Toshizō, the famed Shinsengumi commander, was killed in the fighting. Enomoto surrendered Goryōkaku in June 1869.

The capitulation ended the Boshin War and completed the Meiji government's consolidation of power — closing the age of the samurai and opening Japan's rapid modernization.`
  },
  {
    id: "onin",
    name: "Ōnin War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png/960px-Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png", caption: "‘The Battle of Ōnin’ by Utagawa Yoshitora. Wikimedia Commons." }
    ],
    yearStart: 1467,
    yearEnd: 1477,
    dateLabel: "1467–1477",
    period: "Sengoku",
    location: {
      name: "Kyoto (Kamigyō / Nishijin), Yamashiro Province",
      lat: 35.0290,
      lon: 135.7510
    },
    combatants: {
      side1: { name: "Eastern Army", leader: "Hosokawa Katsumoto", forces: "approximately 160,000" },
      side2: { name: "Western Army", leader: "Yamana Sōzen (Mochitoyo)", forces: "approximately 110,000" }
    },
    outcome: "Inconclusive stalemate; Kyoto was devastated and shogunal authority collapsed, opening the Sengoku period.",
    summary: "A decade-long conflict that began as a shogunal succession dispute and engulfed Kyoto, splitting the great houses into Eastern (Hosokawa) and Western (Yamana) armies. The capital was reduced to ashes and the Muromachi shogunate's authority shattered — the conventional opening of the Sengoku 'Warring States' age.",
    details: `The war grew out of a tangle of succession disputes — over the Ashikaga shogunate itself (Yoshimasa's brother Yoshimi versus his infant son Yoshihisa) and within the powerful Hatakeyama and Shiba houses — which polarized the warrior aristocracy into two camps.

From 1467 the Eastern Army of Hosokawa Katsumoto and the Western Army of Yamana Sōzen fought a grinding, largely static war through the streets of Kyoto. Much of the capital, including countless temples and aristocratic mansions, was burned. Both principal commanders died in 1473, yet the fighting dragged on until 1477.

The war settled nothing at the centre but destroyed it: with the shogunate powerless, real authority devolved to provincial warlords (daimyō), beginning the century of disunion known as the Sengoku period.`
  },
  {
    id: "anglo-satsuma-war",
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
      side1: { name: "Satsuma Domain", leader: "Shimazu Hisamitsu", forces: "shore batteries; ~80 guns" },
      side2: { name: "British Royal Navy", leader: "Vice-Admiral Augustus Kuper", forces: "7 warships" }
    },
    outcome: "Inconclusive bombardment — but it pushed Satsuma toward Britain and rapid modernization.",
    summary: "Retaliation for the killing of an English merchant at Namamugi (1862), a British squadron bombarded Kagoshima. Both sides claimed victory, but Satsuma drew the real lesson — that 'expel the barbarians' was futile — and turned to Western arms.",
    details: `In 1862 Satsuma retainers had cut down the British merchant Charles Richardson on the Tōkaidō (the Namamugi Incident). When Satsuma refused reparations, a Royal Navy squadron entered Kagoshima Bay in August 1863, seized Satsuma steamers, and exchanged fire with the domain's shore batteries in a typhoon. Much of Kagoshima burned; both sides took casualties and both claimed victory.

The deeper result was a reversal of policy. Having felt Western firepower first-hand, Satsuma abandoned the slogan "expel the barbarians" (jōi), reconciled with Britain, and bought modern ships and guns — beginning the path that would make it, with Chōshū, the spearhead of the movement to topple the shogunate.`
  },
  {
    id: "shimonoseki",
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
    summary: "After Chōshū fired on foreign shipping in the strait to 'expel the barbarians,' a four-nation fleet returned in 1864 and smashed its forts — teaching Chōshū the same hard lesson Satsuma had learned at Kagoshima.",
    details: `Acting on the court's order to "expel the barbarians," Chōshū batteries began firing on Western merchant and naval vessels passing through the strategic Shimonoseki Strait in 1863. American and French ships retaliated that year, and in September 1864 a combined squadron of seventeen British, French, Dutch and American warships bombarded and then landed troops to destroy the Chōshū forts outright.

The defeat was total — and, like Satsuma at Kagoshima, transformative. Chōshū dropped its anti-foreign stance, modernized its army with Western rifles and the mixed-class Kiheitai militia, and soon allied in secret with Satsuma against the shogunate.`
  },
  {
    id: "kinmon",
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
      side1: { name: "Shogunate forces (Aizu & Satsuma)", leader: "Matsudaira Katamori & Saigō Takamori", forces: "Aizu, Satsuma and allied domains" },
      side2: { name: "Chōshū Domain", leader: "Kusaka Genzui & Kijima Matabei", forces: "~2,000" }
    },
    outcome: "Shogunate victory; Chōshū was driven from Kyoto and branded an 'enemy of the court.'",
    summary: "Seeking to reverse its loss of influence, Chōshū marched on the Kyoto palace to 'rescue' the Emperor. Aizu and Satsuma troops beat the assault back at the Hamaguri Gate; the fighting set off a fire that burned much of Kyoto.",
    details: `Expelled from court politics after a 1863 coup, Chōshū sent armed forces to Kyoto in 1864 ostensibly to petition the throne. On 20 August they attacked the Imperial Palace, with the heaviest fighting at the Hamaguri ('Clam') Gate. Defending forces led by Matsudaira Katamori of Aizu and Saigō Takamori of Satsuma threw them back; Chōshū leaders Kusaka Genzui and Kijima Matabei died, and the resulting conflagration — the "Dondon-yaki" — destroyed tens of thousands of houses.

Declared an enemy of the court, Chōshū now faced the First Chōshū Expedition. Yet the humiliation radicalized the domain and, within two years, drove it into the Satsuma–Chōshū alliance that would end the shogunate.`
  },
  {
    id: "choshu-expedition-1866",
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
    outcome: "Chōshū victory — the shogunate's punitive campaign collapsed, exposing its weakness.",
    summary: "The shogunate's second attempt to crush Chōshū ended in humiliating failure: Chōshū's small, modern, rifle-armed force defeated the vast but antiquated Tokugawa coalition on every front. The defeat doomed the shogunate.",
    details: `When Chōshū defied the shogunate and rearmed, the Tokugawa launched a second punitive expedition in 1866 with an enormous coalition army. But Chōshū, now equipped with Western breech- and Minié rifles and led by innovators like Takasugi Shinsaku and Ōmura Masujirō, fought a mobile, modern war. On all four fronts — Ōshima, the Geishū (Aki) border, Sekishū (Iwami) and Kokura — the smaller Chōshū forces routed or stalemated the lumbering shogunate host.

When Shōgun Tokugawa Iemochi died in Osaka that summer, the campaign was quietly abandoned. The defeat shattered the shogunate's prestige beyond repair: secretly allied with Satsuma, Chōshū now stood at the head of the movement that, two years later, would sweep the Tokugawa away in the Boshin War.`
  },
  {
    id: "masakado",
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
    details: `Drawn into the blood-feuds of the eastern Kantō, the warrior Taira no Masakado turned his private wars against the imperial government itself. By 939 he had seized eight provinces of the east and styled himself shinnō — 'New Emperor' — a stunning challenge to the throne in Kyoto.

The court kept no army of its own, so it set warriors against the warrior. In early 940 Taira no Sadamori and Fujiwara no Hidesato hunted Masakado down and killed him. Yet his revolt — and Fujiwara no Sumitomo's in the west at the same moment — laid bare how far real power had slipped from the aristocracy to the provincial fighting men who would one day rule Japan. Masakado himself became a dreaded, venerated spirit, enshrined to this day in the heart of Tokyo.`
  },
  {
    id: "sumitomo",
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
    summary: "A court official turned pirate king raises the Inland Sea against Kyoto — the western half of the twin revolts that revealed the warriors' rising power.",
    details: `Sent to suppress piracy in the Seto Inland Sea, Fujiwara no Sumitomo instead made himself its master, leading great pirate fleets that raided the coasts and even sacked the government headquarters at Dazaifu in Kyushu.

His rebellion erupted in the same years as Masakado's in the east, and the simultaneous threat from both flanks terrified the Heian court. By 941 imperial commanders Ono no Yoshifuru and Minamoto no Tsunemoto had broken his fleets and killed him. Together the two revolts — the Jōhei–Tengyō disturbances — taught the aristocracy a lasting lesson: it now survived only by setting one warrior house against another.`
  },
  {
    id: "zenkunen",
    name: "Former Nine Years' War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/A-38_C0080776.jpg/960px-A-38_C0080776.jpg", caption: "A scroll depicting the Former Nine Years' War. Wikimedia Commons." }
    ],
    yearStart: 1051, yearEnd: 1063,
    dateLabel: "1051–1063 (Zenkunen no Eki)",
    period: "Heian",
    location: { name: "Mutsu Province — the Kitakami valley (modern Iwate)", lat: 39.7036, lon: 141.1525 },
    combatants: {
      side1: { name: "Minamoto (court-appointed)", leader: "Minamoto no Yoriyoshi & Yoshiie", forces: "Minamoto warriors + Kiyowara allies" },
      side2: { name: "Abe clan", leader: "Abe no Yoritoki & Abe no Sadato" }
    },
    outcome: "Minamoto victory (1063); the Abe destroyed and the Minamoto rooted in the east.",
    summary: "A twelve-year war in the far north that made the Minamoto the pre-eminent warrior house of eastern Japan.",
    details: `The Abe clan, hereditary strongmen of the northern frontier in Mutsu, defied the provincial governor and the court. To break them, Kyoto sent Minamoto no Yoriyoshi and his son Yoshiie, who fought a grinding campaign up the Kitakami valley against the Abe's river stockades.

Only with the help of the powerful Kiyowara clan of Dewa did the Minamoto finally storm the Abe's last fortress at Kuriyagawa in 1063, killing Abe no Sadato. The long war forged deep bonds of loyalty between the Minamoto and the eastern warriors who fought beside them — bonds the family would one day call upon to win the Genpei War and found the Kamakura shogunate.`
  },
  {
    id: "gosannen",
    name: "Later Three Years' War",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gosannen_kassen_ekotoba_-_Scroll_1_part_13.jpg/960px-Gosannen_kassen_ekotoba_-_Scroll_1_part_13.jpg", caption: "The Later Three Years' War, from the Gosannen Kassen Ekotoba scroll. Wikimedia Commons." }
    ],
    yearStart: 1083, yearEnd: 1087,
    dateLabel: "1083–1087 (Gosannen no Eki)",
    period: "Heian",
    location: { name: "Dewa Province — the Kanezawa stockade (modern Yokote, Akita)", lat: 39.3186, lon: 140.5666 },
    combatants: {
      side1: { name: "Minamoto & Fujiwara no Kiyohira", leader: "Minamoto no Yoshiie" },
      side2: { name: "Kiyowara clan", leader: "Kiyowara no Iehira & Takehira" }
    },
    outcome: "Yoshiie wins, but the court refuses to call it an official war — so he pays his men himself.",
    summary: "Minamoto Yoshiie intervenes in a northern clan's feud; the court denies him reward, so he rewards his warriors with his own wealth, binding them to his house.",
    details: `When a succession feud tore apart the Kiyowara — the very clan that had helped win the earlier war — Minamoto no Yoshiie, now governor of Mutsu, took the field on behalf of Fujiwara no Kiyohira. After a hard siege he stormed the Kanezawa stockade in 1087 and crushed the rival Kiyowara.

The court, however, ruled the conflict a private quarrel and granted Yoshiie nothing. In a celebrated gesture he paid and rewarded his followers out of his own purse — an act that won the Minamoto a fierce personal loyalty across the east. The war's other legacy was the rise of Fujiwara no Kiyohira, who built the golden Buddhist culture of the Northern Fujiwara at Hiraizumi.`
  },
  {
    id: "hogen",
    name: "Hōgen Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/H%C5%8Dgen_no_ran.jpg/960px-H%C5%8Dgen_no_ran.jpg", caption: "The Hōgen Rebellion of 1156. Wikimedia Commons." }
    ],
    year: 1156,
    dateLabel: "1156 (Hōgen 1)",
    period: "Heian",
    location: { name: "Kyoto — the Shirakawa-den palace", lat: 35.0254, lon: 135.7780 },
    combatants: {
      side1: { name: "Emperor Go-Shirakawa's faction", leader: "Taira no Kiyomori & Minamoto no Yoshitomo" },
      side2: { name: "Retired Emperor Sutoku's faction", leader: "Minamoto no Tameyoshi & Taira no Tadamasa" }
    },
    outcome: "Go-Shirakawa's side wins; Sutoku is exiled — and the samurai become the arbiters of the court.",
    summary: "A palace succession quarrel is settled not by courtiers but by warriors — the moment the samurai step to the centre of national politics.",
    leadsTo: "heiji",
    details: `A dispute over the imperial succession split the court between the reigning Emperor Go-Shirakawa and his exiled-minded brother, the retired Emperor Sutoku. Crucially, it also split the great warrior houses: fathers and sons, the Taira and the Minamoto, took opposite sides.

In a single night's fighting in Kyoto in 1156, the warriors of Go-Shirakawa's party — led by Taira no Kiyomori and Minamoto no Yoshitomo — overwhelmed Sutoku's. Sutoku was banished; defeated leaders, including Yoshitomo's own father, were executed. For the first time a question of who ruled Japan had been decided by samurai swords, and Kiyomori and Yoshitomo emerged as the indispensable men of the realm — soon to turn on each other.`
  },
  {
    id: "heiji",
    name: "Heiji Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Heiji_rokuhara_gyoukou.jpg/960px-Heiji_rokuhara_gyoukou.jpg", caption: "The Heiji Rebellion — a scene from the Heiji Monogatari scrolls. Wikimedia Commons." }
    ],
    year: 1160,
    dateLabel: "January–February 1160 (Heiji 1/12)",
    period: "Heian",
    location: { name: "Kyoto — the Sanjō Palace", lat: 35.0116, lon: 135.7681 },
    combatants: {
      side1: { name: "Taira", leader: "Taira no Kiyomori" },
      side2: { name: "Minamoto & Fujiwara no Nobuyori", leader: "Minamoto no Yoshitomo" }
    },
    outcome: "Decisive Taira victory; Yoshitomo is killed and his young son Yoritomo exiled — setting up the Genpei War.",
    summary: "Kiyomori destroys his Minamoto rival and seizes supremacy over the court — the first samurai to dominate Japan, and the spark, twenty years on, of the Genpei War.",
    leadsTo: "uji-1180",
    details: `The alliance of Hōgen did not last. While Taira no Kiyomori was away on pilgrimage, Minamoto no Yoshitomo and the courtier Fujiwara no Nobuyori seized the capital in a coup, attacking and burning the Sanjō Palace and taking the retired emperor captive.

Kiyomori raced back, outmanoeuvred the rebels, and crushed them. Yoshitomo was killed fleeing east; his thirteen-year-old son, Minamoto no Yoritomo, was spared and exiled to Izu. Kiyomori now stood unrivalled — the first warrior to rule the court from within, climbing to the office of chancellor. But the boy he had let live would, in 1180, raise the east against the Taira and bring the whole order crashing down in the Genpei War.`
  },
  {
    id: "jinshin",
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
    details: `When Emperor Tenji died in 671, his brother Prince Ōama — who had withdrawn to Yoshino as a monk to avoid suspicion — rose against Tenji's son and heir, Prince Ōtomo (Emperor Kōbun), who held the court at Ōtsu on Lake Biwa.

Ōama raised the eastern provinces of Mino and Owari and swept west in a lightning campaign. The war was decided at the Seta Bridge outside Ōtsu, where Ōtomo's army broke; the young emperor took his own life. Victorious, Ōama ascended as Emperor Tenmu and used his unrivalled authority to drive the great reforms — the centralized ritsuryō codes, the histories, and the cult of the throne — that shaped the classical Japanese state. The conflict takes its name from the jinshin year in the sexagenary cycle.`
  },
  {
    id: "hirotsugu",
    name: "Fujiwara no Hirotsugu's Rebellion",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fujiwara_no_Hirotsugu.jpg/960px-Fujiwara_no_Hirotsugu.jpg", caption: "Fujiwara no Hirotsugu. Wikimedia Commons." }
    ],
    year: 740,
    dateLabel: "740 (Tenpyō 12)",
    period: "Asuka–Nara",
    location: { name: "The Itabitsu River, near Dazaifu (modern Kitakyūshū)", lat: 33.8835, lon: 130.8752 },
    combatants: {
      side1: { name: "Imperial court forces", leader: "Ōno no Azumahito", forces: "~17,000" },
      side2: { name: "Rebels", leader: "Fujiwara no Hirotsugu", forces: "Kyushu levies" }
    },
    outcome: "Rebellion crushed; Hirotsugu executed — but it shook Emperor Shōmu deeply.",
    summary: "A Nara-period courtier, exiled to Kyushu, raises a revolt against the government — and so unnerves the emperor that he flees the capital and turns to the Great Buddha for protection.",
    details: `Sidelined by rivals and posted to the frontier headquarters at Dazaifu, Fujiwara no Hirotsugu rose in revolt in 740, demanding the removal of the emperor's advisers. He mustered the levies of Kyushu, but the court's army under Ōno no Azumahito met and broke him at the Itabitsu River; Hirotsugu was captured and beheaded.

Though quickly suppressed, the revolt rattled Emperor Shōmu so badly that he abandoned the capital at Nara and wandered between temporary palaces for years. His search for spiritual protection helped drive the colossal project that defines the age — the casting of the Great Buddha of Tōdai-ji.`
  },
  {
    id: "emishi-war",
    name: "Conquest of the Emishi (Aterui's Resistance)",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Monument_of_Aterui_in_Hirakata.jpeg", caption: "Monument to Aterui, the Emishi leader who defied the imperial army. Wikimedia Commons." }
    ],
    yearStart: 789, yearEnd: 802,
    dateLabel: "789–802 (the Emishi campaigns)",
    period: "Asuka–Nara",
    location: { name: "Isawa, Mutsu Province — the Kitakami valley (modern Iwate)", lat: 39.1447, lon: 141.1389 },
    combatants: {
      side1: { name: "Imperial forces", leader: "Ki no Kosami (789), then Sakanoue no Tamuramaro" },
      side2: { name: "The Emishi", leader: "Aterui & More" }
    },
    outcome: "After a famous early defeat, the court subdues the Emishi; Aterui surrenders in 802.",
    summary: "The long war to conquer the Emishi of the north — and the origin of the title 'Seii Taishōgun,' the barbarian-subduing great general that the shōguns would one day bear.",
    details: `For decades the imperial state pushed its frontier north into the lands of the Emishi, the indigenous peoples of Tōhoku. In 789 a great government army under Ki no Kosami was lured across the Kitakami River and crushed by the Emishi leader Aterui at the Battle of Subuse — a humiliating defeat that shocked the court.

Emperor Kanmu responded by appointing Sakanoue no Tamuramaro, who waged a relentless campaign and built fortresses deep in Emishi country. In 802, with his cause lost, Aterui surrendered and was taken to the capital and executed. The conquest extended imperial rule to the far north and gave Tamuramaro the title Seii Taishōgun — "great general who subdues the barbarians" — the very office that, four centuries later, Minamoto no Yoritomo would transform into the shogunate.`
  },
  {
    id: "shigisan",
    name: "Battle of Shigisan",
    year: 587,
    dateLabel: "587",
    period: "Asuka–Nara",
    location: { name: "Mount Shigi, Kawachi/Yamato border (modern Nara/Osaka)", lat: 34.6131, lon: 135.6689 },
    combatants: {
      side1: { name: "Soga clan (pro-Buddhist)", leader: "Soga no Umako (with Prince Shōtoku)" },
      side2: { name: "Mononobe clan (pro-kami)", leader: "Mononobe no Moriya" }
    },
    outcome: "Soga victory; the Mononobe destroyed — securing Buddhism's place in the Japanese state.",
    summary: "The Soga clan crushes the Mononobe — settling, by the sword, whether Japan would embrace Buddhism.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Shotoku_killing_Moriya_no_Omuraji.jpg",
        caption: "Battle of Shigisan. Wikimedia Commons."
      }
    ],
    details: `The arrival of Buddhism (552) had split the Yamato court: the Soga clan championed the foreign faith while the Mononobe and Nakatomi defended the native kami. In 587 the quarrel turned to open war.

Soga no Umako led a coalition — including the young Prince Shōtoku — against Mononobe no Moriya, defeating and killing him near Mount Shigi. The Soga victory secured Buddhism at the heart of the Japanese state and cleared the way for the temple-building and reform of the Asuka age.`
  },
  {
    id: "akasaka",
    name: "Siege of Akasaka",
    year: 1331,
    dateLabel: "1331 (Genkō 1)",
    period: "Kamakura",
    location: { name: "Akasaka Castle, Kawachi Province (modern Chihaya-Akasaka, Osaka)", lat: 34.4583, lon: 135.6361 },
    combatants: {
      side1: { name: "Imperial loyalists", leader: "Kusunoki Masashige" },
      side2: { name: "Kamakura shogunate", leader: "Hōjō forces" }
    },
    outcome: "Akasaka fell, but Kusunoki escaped by faking his death — keeping Go-Daigo's revolt alive.",
    summary: "Kusunoki Masashige's tiny garrison defies the Kamakura shogunate at Akasaka — the opening of the Genkō War and the birth of a legend of loyalty.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shimo-akasaka-jyo02.jpg/960px-Shimo-akasaka-jyo02.jpg",
        caption: "Siege of Akasaka. Wikimedia Commons."
      }
    ],
    details: `When Emperor Go-Daigo rose against the Kamakura shogunate in 1331, the warrior Kusunoki Masashige raised the imperial banner in the hills of Kawachi and held the small fort of Akasaka against a vast shogunal army.

Wildly outnumbered, he held out with ingenious improvised defences — logs, boiling water, and dummy troops — before the fort finally fell, slipping away by faking his own death in the flames. His resistance kept Go-Daigo's cause alive and made Kusunoki the very model of the loyal samurai, revered for centuries.`
  },
  {
    id: "bubaigawara",
    name: "Battle of Bubaigawara",
    year: 1333,
    dateLabel: "1333 (Genkō 3)",
    period: "Kamakura",
    location: { name: "Bubaigawara, Musashi Province (modern Fuchū, Tokyo)", lat: 35.6614, lon: 139.4786 },
    combatants: {
      side1: { name: "Imperial loyalists", leader: "Nitta Yoshisada" },
      side2: { name: "Kamakura shogunate", leader: "Hōjō forces" }
    },
    outcome: "Nitta victory; the road to Kamakura lay open — and the shogunate fell days later.",
    summary: "Nitta Yoshisada smashes the Hōjō field army on the Musashi plain, opening the road to Kamakura and the shogunate's fall.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Bubaigawara-kosenjou.jpg",
        caption: "Battle of Bubaigawara. Wikimedia Commons."
      }
    ],
    details: `In the summer of 1333, as Go-Daigo's revolt gathered force, Nitta Yoshisada raised the eastern warriors and marched on Kamakura itself. At Bubaigawara, on the Musashi plain, his army broke the Hōjō shogunate's defending force after fierce fighting along the Tama River.

The victory threw open the road to the shogunal capital. Within days Nitta stormed Kamakura, the Hōjō regents took their own lives at Tōshō-ji, and the Kamakura shogunate — after 150 years — was destroyed.`
  },
  {
    id: "oshu-1189",
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

The destruction of the Northern Fujiwara annexed the great provinces of Mutsu and Dewa and removed the last power in Japan independent of Yoritomo — clearing his path to the office of shōgun three years later.`,
    sources: [
      { label: "Battle of Ōshū — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_%C5%8Csh%C5%AB" }
    ]
  },
  {
    id: "wada-rebellion-1213",
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
    summary: "A revolt by Wada Yoshimori — head of the shogunate's Board of Retainers (samurai-dokoro) — against the dominance of the Hōjō regent Yoshitoki, after Wada kinsmen were arrested for conspiracy. In fierce street fighting across Kamakura the Wada were defeated and annihilated.",
    details: `Tensions between the powerful Wada Yoshimori and the Hōjō regent Hōjō Yoshitoki erupted in 1213 when Wada kinsmen were accused of conspiracy and arrested. Yoshimori rose in arms, and the two sides fought through the streets of Kamakura.

The Wada were defeated and Yoshimori killed together with his sons; control of the samurai-dokoro passed to the Hōjō, further concentrating power in the regency that would dominate the Kamakura shogunate.`,
    sources: [
      { label: "Wada Yoshimori (Wada Rebellion) — Wikipedia", url: "https://en.wikipedia.org/wiki/Wada_Yoshimori" }
    ]
  },
  {
    id: "kasagi-1331",
    name: "Siege of Kasagi",
    year: 1331,
    dateLabel: "September 1331 (Genkō 1)",
    period: "Kamakura",
    location: { name: "Kasagiyama (Kasagi-dera), Yamashiro — near Kyoto", lat: 34.7544, lon: 135.9422 },
    combatants: {
      side1: { name: "Emperor Go-Daigo's loyalists", leader: "Emperor Go-Daigo" },
      side2: { name: "Kamakura shogunate (Hōjō)", leader: "shogunate army (incl. Suyama Yoshitaka)" }
    },
    outcome: "Shogunate victory; Kasagi fell and Go-Daigo was captured and exiled to Oki — but the rising had begun the Genkō War that toppled the shogunate in 1333.",
    summary: "Emperor Go-Daigo raised the standard of revolt against the Kamakura shogunate from the fortified mountaintop temple of Kasagi. A shogunate army stormed it by a daring night climb and set it ablaze; Go-Daigo was captured and exiled, yet his rising had opened the Genkō War.",
    details: `In 1331 Emperor Go-Daigo, plotting to overthrow the Kamakura shogunate, fled the capital with the imperial regalia and fortified himself at the mountain temple of Kasagi. A large shogunate army surrounded the heights; a picked band scaled the cliffs by night and set the temple aflame.

Kasagi fell and Go-Daigo was captured and exiled to the Oki Islands. But the rising he had begun — the Genkō War — spread to Kusunoki Masashige's forts and, within two years, brought down the Kamakura shogunate.`,
    leadsTo: "akasaka",
    sources: [
      { label: "Siege of Kasagi — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Kasagi" }
    ]
  },
  {
    id: "sunomatagawa-1181",
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
    sources: [ { label: "Battle of Sunomata-gawa — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Sunomata-gawa" } ]
  },
  {
    id: "hojujidono-1183",
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
    summary: "Kiso Yoshinaka, his position in Kyoto crumbling, attacked the Hōjūji palace of the retired Emperor Go-Shirakawa and the courtiers and warrior-monks defending it. His victory made him briefly master of the capital — and prompted Yoritomo to send an army that destroyed him weeks later.",
    details: `By late 1183 Kiso (Minamoto) Yoshinaka, who had driven the Taira from Kyoto, had fallen out with the retired Emperor Go-Shirakawa. He assaulted the Hōjūji palace, defended by court nobles and warrior-monks from Enryaku-ji and Mii-dera, and seized the retired emperor.

His seizure of power was short-lived: Yoritomo dispatched his brothers Yoshitsune and Noriyori, who crossed into the capital and broke Yoshinaka's forces at Uji in early 1184.`,
    leadsTo: "uji-1184",
    sources: [ { label: "Siege of Hōjūjidono — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_H%C5%8Dj%C5%ABjidono" } ]
  },
  {
    id: "uji-1184",
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
    summary: "Yoritomo's brothers Yoshitsune and Noriyori forced the Uji river crossing against Kiso Yoshinaka, who had seized the capital. Yoshinaka's army collapsed and he fled, to be hunted down and killed at Awazu — clearing the way for the Minamoto to turn on the Taira.",
    details: `In early 1184 Minamoto no Yoshitsune and Noriyori, sent by Yoritomo, attacked Kiso Yoshinaka's forces holding the approaches to Kyoto. At the Uji river — the same crossing fought over in 1180 — Yoshitsune's men forced their way across and shattered Yoshinaka's army.

Yoshinaka fled and was killed at Awazu a few days later. With the Minamoto reunified under Yoritomo's command, the war turned decisively against the Taira.`,
    leadsTo: "awazu",
    sources: [ { label: "Battle of Uji (1184) — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Uji_(1184)" } ]
  },
  {
    id: "kojima-1184",
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
    sources: [ { label: "Battle of Kojima — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Kojima" } ]
  },
  {
    id: "toi-invasion-1019",
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
    summary: "A seaborne raid by Jurchen ('Toi') pirates that struck Iki, Tsushima and northern Kyūshū, killing and carrying off many. The Dazaifu government under Fujiwara no Takaie organised the defence and drove the raiders back out to sea — a rare foreign assault on Heian Japan.",
    details: `In the fifth month of 1019 a fleet of Jurchen ("Toi") raiders fell on Tsushima, Iki and the coast around Hakata Bay, killing villagers and carrying off captives and livestock. The provincial and Dazaifu forces, led by Fujiwara no Takaie, rallied and beat the raiders off.

The Toi invasion was one of the few foreign attacks on Japan in the Heian period and a reminder of the dangers of the Korea Strait long before the Mongol invasions.`,
    sources: [ { label: "Toi invasion — Wikipedia", url: "https://en.wikipedia.org/wiki/Toi_invasion" } ]
  },
  {
    id: "baekgang-663",
    name: "Battle of Baekgang",
    year: 663,
    dateLabel: "663 (Tenji 2) — 8th lunar month",
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
    sources: [ { label: "Battle of Baekgang — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Baekgang" } ]
  },
  {
    id: "hayato-720",
    name: "Hayato Rebellion",
    year: 720,
    dateLabel: "720–721 (Yōrō 4–5)",
    period: "Asuka–Nara",
    location: { name: "Ōsumi Province, southern Kyūshū — coordinates approximate", lat: 31.74, lon: 130.76 },
    combatants: {
      side1: { name: "Yamato court", leader: "Ōtomo no Tabito" },
      side2: { name: "Hayato", leader: "—" }
    },
    outcome: "Imperial victory; the Hayato of southern Kyūshū were subjugated after a long campaign.",
    summary: "A revolt of the Hayato, the indigenous people of southern Kyūshū, against the expanding Nara state. The court sent a large army under Ōtomo no Tabito which, after more than a year of mountain warfare, broke Hayato resistance and brought Ōsumi and Satsuma firmly under imperial control.",
    details: `In 720 the Hayato of Ōsumi and Satsuma rose against the Nara court's tightening administration of southern Kyūshū. The court appointed Ōtomo no Tabito to lead a punitive expedition of tens of thousands.

After more than a year of sieges in the mountainous south, the rebellion was crushed. The campaign completed the incorporation of the Hayato lands into the ritsuryō state.`,
    sources: [ { label: "Hayato rebellion — Wikipedia", url: "https://en.wikipedia.org/wiki/Hayato_rebellion" } ]
  },
  {
    id: "nakamaro-764",
    name: "Fujiwara no Nakamaro Rebellion",
    year: 764,
    dateLabel: "764 (Tenpyō-hōji 8)",
    period: "Asuka–Nara",
    location: { name: "Ōmi Province, by Lake Biwa — coordinates approximate", lat: 35.3, lon: 136.05 },
    combatants: {
      side1: { name: "Fujiwara no Nakamaro's faction", leader: "Fujiwara no Nakamaro (with Prince Shioyaki)" },
      side2: { name: "Retired Empress Kōken's forces", leader: "Fujiwara no Kurajimaro" }
    },
    outcome: "Kōken's victory; Nakamaro was defeated by Lake Biwa and killed, and Kōken returned to the throne as Empress Shōtoku.",
    summary: "Also called the Emi Rebellion, this was a failed coup by the once-dominant minister Fujiwara no Nakamaro against the retired Empress Kōken and her favourite, the monk Dōkyō. Nakamaro's forces were cut off and destroyed at Lake Biwa, ending Fujiwara dominance for a generation.",
    details: `By 764 Fujiwara no Nakamaro (Emi no Oshikatsu), long the leading minister, was losing power to the retired Empress Kōken and the monk Dōkyō. He rose in revolt, but the court seized the imperial seals and bell before he could act decisively.

Nakamaro fled toward Ōmi and was caught and killed on the shores of Lake Biwa. Kōken reascended the throne as Empress Shōtoku, and Dōkyō rose to extraordinary power.`,
    sources: [ { label: "Fujiwara no Nakamaro Rebellion — Wikipedia", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Nakamaro_Rebellion" } ]
  },
  {
    id: "koshamain-1457",
    name: "Koshamain's War",
    year: 1457,
    dateLabel: "1457–1458 (Chōroku)",
    period: "Nanboku-chō",
    location: { name: "Oshima Peninsula, southern Ezo (Hokkaido) — coordinates approximate", lat: 41.78, lon: 140.12 },
    combatants: {
      side1: { name: "Ainu", leader: "Koshamain" },
      side2: { name: "Wajin (Kakizaki clan)", leader: "Takeda Nobuhiro" }
    },
    outcome: "Wajin (Japanese) victory; Koshamain was killed and the Ainu rising suppressed, entrenching Japanese settlement in southern Ezo.",
    summary: "The first major war between the Ainu and the Wajin (Japanese) settlers of southern Ezo, sparked by a trade dispute and the killing of an Ainu man. Led by the chief Koshamain, the Ainu stormed most of the Wajin forts before Takeda Nobuhiro killed Koshamain and broke the rising — the foundation of the later Matsumae domain.",
    details: `In 1457 long-standing friction between Ainu and Wajin settlers on the Oshima Peninsula erupted after a Wajin smith killed an Ainu customer. The Ainu chief Koshamain led a rising that overran all but two of the Wajin stockades of southern Ezo.

Takeda Nobuhiro of the Kakizaki rallied the settlers and killed Koshamain, ending the war. The Kakizaki — later the Matsumae — emerged as the dominant Wajin power in Ezo, beginning centuries of Ainu–Wajin conflict over trade and land.`,
    sources: [ { label: "Koshamain's War — Wikipedia", url: "https://en.wikipedia.org/wiki/Koshamain%27s_War" } ]
  },
  {
    id: "kawagoe-1546", name: "Night Battle of Kawagoe", year: 1546, dateLabel: "1546 (Tenbun 15)", period: "Sengoku",
    location: { name: "Kawagoe Castle, Musashi (modern Saitama)", lat: 35.9244, lon: 139.4914 },
    combatants: { side1: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" }, side2: { name: "Uesugi coalition & Ashikaga", leader: "Uesugi Tomosada & Uesugi Norimasa" } },
    outcome: "Hōjō victory; a night attack routed a far larger besieging army and secured Hōjō dominance of the Kantō.",
    summary: "One of the most famous night attacks of the Sengoku: Hōjō Ujiyasu, badly outnumbered, relieved the besieged Kawagoe Castle with a surprise assault that shattered the great Uesugi coalition. The victory made the Later Hōjō the masters of the Kantō plain.",
    details: `In 1546 a huge coalition of the two Uesugi houses and the Kantō Kubō besieged the Hōjō garrison in Kawagoe Castle. Hōjō Ujiyasu marched to its relief and, rather than fight a pitched battle against the odds, struck at night in a co-ordinated attack with the garrison.`,
    sources: [ { label: "Siege of Kawagoe Castle — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Kawagoe_Castle" } ]
  },
  {
    id: "miyajima-1555", name: "Battle of Miyajima", year: 1555, dateLabel: "October 1555 (Kōji 1)", period: "Sengoku",
    location: { name: "Itsukushima (Miyajima), Aki (modern Hiroshima)", lat: 34.3016, lon: 132.3223 },
    combatants: { side1: { name: "Ōuchi", leader: "Sue Harukata" }, side2: { name: "Mōri", leader: "Mōri Motonari" } },
    outcome: "Decisive Mōri victory; Sue Harukata was destroyed, launching Mōri Motonari's rise to dominance over western Honshū.",
    summary: "Mōri Motonari lured Sue Harukata's much larger army onto the sacred island of Itsukushima, then crushed it in a surprise amphibious dawn attack in a storm. The victory broke Ōuchi power and made the Mōri the great power of the Chūgoku region — one of Japan's three classic surprise attacks.",
    details: `In 1555 Mōri Motonari enticed Sue Harukata's army to land on the narrow island of Itsukushima by feigning weakness. Crossing by sea in a night storm, the Mōri fell on the trapped Ōuchi host at dawn and annihilated it; Sue Harukata took his own life.`,
    sources: [ { label: "Battle of Miyajima — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Miyajima" } ]
  },
  {
    id: "nagaragawa-1556", name: "Battle of Nagara-gawa", year: 1556, dateLabel: "1556 (Kōji 2)", period: "Sengoku",
    location: { name: "Nagara River, Mino (modern Gifu)", lat: 35.4451, lon: 136.7635 },
    combatants: { side1: { name: "Saitō Yoshitatsu's forces", leader: "Saitō Yoshitatsu" }, side2: { name: "Saitō Dōsan's forces", leader: "Saitō Dōsan" } },
    outcome: "Yoshitatsu's victory; Saitō Dōsan was defeated and killed by his own son.",
    summary: "The 'Viper of Mino', Saitō Dōsan, was overthrown and killed by his son Yoshitatsu at the Nagara River. Dōsan's death — he was Nobunaga's father-in-law and ally — opened the way for Oda Nobunaga's later conquest of Mino.",
    details: `By 1556 Saitō Dōsan had fallen out with his son and heir Yoshitatsu. The two met in battle on the Nagara River near Inabayama; Dōsan, deserted by many retainers, was defeated and killed.`,
    sources: [ { label: "Battle of Nagara-gawa — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Nagara-gawa" } ]
  },
  {
    id: "azukizaka-1564", name: "Battle of Azukizaka (1564)", year: 1564, dateLabel: "1564 (Eiroku 7)", period: "Sengoku",
    location: { name: "Okazaki, Mikawa (modern Aichi)", lat: 34.9303, lon: 137.1783 },
    combatants: { side1: { name: "Mikawa Ikkō-ikki", leader: "Ikkō-ikki leaders" }, side2: { name: "Matsudaira clan", leader: "Matsudaira Motoyasu (Tokugawa Ieyasu)" } },
    outcome: "Matsudaira victory; the young Ieyasu crushed the Ikkō-ikki revolt and consolidated his hold on Mikawa.",
    summary: "The future Tokugawa Ieyasu put down the great Ikkō-ikki uprising in his home province of Mikawa, in which many of his own retainers had joined the rebels. His victory ended the threat of the warrior-monk leagues to his power and unified Mikawa behind him.",
    details: `In 1564 the Jōdo-Shinshū Ikkō-ikki of Mikawa rose against Matsudaira Motoyasu (Tokugawa Ieyasu), splitting his vassals on lines of faith. Ieyasu defeated the leagues and then suppressed their temples, securing his base for the campaigns to come.`,
    sources: [ { label: "Battle of Azukizaka (1564) — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Azukizaka_(1564)" } ]
  },
  {
    id: "nagashima-1571", name: "Sieges of Nagashima (first)", year: 1571, dateLabel: "1571 (Genki 2)", period: "Sengoku",
    location: { name: "Nagashima fortress, Owari (modern Mie)", lat: 35.0886, lon: 136.6981 },
    combatants: { side1: { name: "Ikkō-ikki", leader: "Ikkō-ikki of Nagashima" }, side2: { name: "Oda", leader: "Oda Nobunaga (Shibata Katsuie)" } },
    outcome: "Ikkō-ikki victory; Nobunaga's first assault on the river fortress was repelled with heavy loss.",
    summary: "The first of Oda Nobunaga's three campaigns against the Ikkō-ikki stronghold of Nagashima, set amid the rivers of the Kiso delta. This assault failed bloodily — but Nobunaga returned, and in 1574 annihilated the fortress and its defenders.",
    details: `In 1571 Nobunaga launched his first attack on the Ikkō-ikki river-fortress of Nagashima. The marshy terrain and fierce defence threw back the Oda army, wounding the general Shibata Katsuie. Nobunaga would besiege Nagashima twice more, destroying it utterly in 1574.`,
    sources: [ { label: "Sieges of Nagashima — Wikipedia", url: "https://en.wikipedia.org/wiki/Sieges_of_Nagashima" } ]
  },
  {
    id: "ichijodani-1573", name: "Siege of Ichijōdani Castle", year: 1573, dateLabel: "1573 (Tenshō 1)", period: "Sengoku",
    location: { name: "Ichijōdani, Echizen (modern Fukui)", lat: 35.9995, lon: 136.2956 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobunaga" }, side2: { name: "Asakura", leader: "Asakura Yoshikage" } },
    outcome: "Oda victory; the Asakura clan was destroyed and their castle-town burned.",
    summary: "Oda Nobunaga overran the Asakura capital of Ichijōdani, ending the clan that had long defied him. The fall of the Asakura — and of the Azai days later — removed two of the chief members of the anti-Nobunaga coalition.",
    details: `In 1573 Nobunaga drove into Echizen and stormed the Asakura's fortified valley-capital of Ichijōdani. Asakura Yoshikage fled and was forced to take his own life, and the once-splendid castle town was put to the torch.`,
    sources: [ { label: "Siege of Ichijōdani Castle — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Ichij%C5%8Ddani_Castle" } ]
  },
  {
    id: "otate-1578", name: "Siege of Otate (Otate no Ran)", year: 1578, dateLabel: "1578–1579 (Tenshō 6–7)", period: "Sengoku",
    location: { name: "Otate, Kasugayama, Echigo (modern Niigata)", lat: 37.1673, lon: 138.2356 },
    combatants: { side1: { name: "Uesugi Kagetora's faction", leader: "Uesugi Kagetora" }, side2: { name: "Uesugi Kagekatsu's faction", leader: "Uesugi Kagekatsu" } },
    outcome: "Kagekatsu's victory; he won the succession after defeating his rival, who took his own life.",
    summary: "The civil war over the succession to Uesugi Kenshin, who died in 1578 leaving two adopted heirs. Uesugi Kagekatsu defeated his rival Kagetora and secured the Uesugi domain — though the struggle left the clan weakened.",
    details: `Uesugi Kenshin's sudden death in 1578 left his adopted sons Kagekatsu and Kagetora contesting the inheritance. The war centred on the Otate residence at Kasugayama; Kagekatsu prevailed and Kagetora killed himself, but the bloodletting sapped Uesugi strength.`,
    sources: [ { label: "Siege of Otate — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Otate" } ]
  },
  {
    id: "tottori-1581", name: "Siege of Tottori", year: 1581, dateLabel: "1581 (Tenshō 9)", period: "Sengoku",
    location: { name: "Tottori Castle, Inaba (modern Tottori)", lat: 35.5074, lon: 134.24 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Mōri", leader: "Kikkawa Tsuneie" } },
    outcome: "Hideyoshi victory; the garrison was starved into surrender.",
    summary: "Hideyoshi took Tottori Castle not by storm but by starvation — buying up the region's rice beforehand and blockading the fortress until famine forced its surrender. The commander Kikkawa Tsuneie gave his life to save the garrison.",
    details: `In 1581 Hashiba Hideyoshi blockaded Tottori after quietly cornering the local rice supply. The defenders, swollen with refugees, starved within months; Kikkawa Tsuneie surrendered and committed suicide to spare his men in one of the cruellest sieges of the age.`,
    sources: [ { label: "Siege of Tottori — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Tottori" } ]
  },
  {
    id: "takamatsu-1582", name: "Siege of Takamatsu", year: 1582, dateLabel: "April–June 1582 (Tenshō 10)", period: "Sengoku",
    location: { name: "Takamatsu Castle, Bitchū (modern Okayama)", lat: 34.693, lon: 133.822 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Mōri", leader: "Shimizu Muneharu" } },
    outcome: "Peace negotiated; Hideyoshi withdrew on news of the Honnō-ji Incident, beginning his lightning march back to avenge Nobunaga.",
    summary: "Hideyoshi besieged Takamatsu by damming a river and flooding the castle into an island. Mid-siege came word that Nobunaga had been killed at the Honnō-ji; Hideyoshi swiftly made peace (the commander Shimizu Muneharu taking his own life) and raced east — the 'Great Return' that led to Yamazaki.",
    details: `In 1582 Hideyoshi flooded Takamatsu Castle with a great earthwork dam. When news arrived of Nobunaga's death at the Honnō-ji, Hideyoshi concealed it, made a hasty peace under which Shimizu Muneharu committed suicide, and marched his army back to the capital with astonishing speed.`,
    leadsTo: "yamazaki",
    sources: [ { label: "Siege of Takamatsu — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Takamatsu" } ]
  },
  {
    id: "tenmokuzan-1582", name: "Battle of Tenmokuzan", year: 1582, dateLabel: "March 1582 (Tenshō 10)", period: "Sengoku",
    location: { name: "Mt Tenmoku, Kai (modern Yamanashi)", lat: 35.6507, lon: 138.8124 },
    combatants: { side1: { name: "Oda–Tokugawa", leader: "Oda Nobutada" }, side2: { name: "Takeda", leader: "Takeda Katsuyori" } },
    outcome: "Oda victory; Takeda Katsuyori was hunted down and the Takeda clan eradicated.",
    summary: "The last stand of the Takeda. As Oda and Tokugawa armies overran Kai, Takeda Katsuyori — abandoned by his vassals — made a final stand and took his own life at Mt Tenmoku, ending the great clan of Shingen.",
    details: `By 1582 the Oda–Tokugawa invasion of Kai had collapsed Takeda support. Deserted by all but a handful of retainers, Takeda Katsuyori was cornered at Mt Tenmoku and killed himself with his family, extinguishing the house that Takeda Shingen had raised to greatness.`,
    sources: [ { label: "Battle of Tenmokuzan — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Tenmokuzan" } ]
  },
  {
    id: "kunohe-1591", name: "Kunohe Rebellion", year: 1591, dateLabel: "1591 (Tenshō 19)", period: "Sengoku",
    location: { name: "Kunohe Castle, Mutsu (modern Ninohe, Iwate)", lat: 40.2667, lon: 141.3036 },
    combatants: { side1: { name: "Toyotomi", leader: "Toyotomi Hidetsugu & Gamō Ujisato" }, side2: { name: "Kunohe", leader: "Kunohe Masazane" } },
    outcome: "Toyotomi victory; the last armed resistance to Hideyoshi was crushed, completing the unification of Japan.",
    summary: "A revolt by Kunohe Masazane in the far north against Hideyoshi's new order — the final battle of the Sengoku unification. A vast Toyotomi army overwhelmed Kunohe Castle, and with its fall Hideyoshi's authority reached every corner of Japan.",
    details: `In 1591 Kunohe Masazane rose against the Nanbu lord backed by Hideyoshi. Hideyoshi sent an enormous coalition army north under his nephew Hidetsugu; Kunohe Castle fell and its defenders were executed. The campaign completed the unification of Japan begun by Nobunaga.`,
    sources: [ { label: "Kunohe rebellion — Wikipedia", url: "https://en.wikipedia.org/wiki/Kunohe_rebellion" } ]
  },
  {
    id: "gassantoda-1543", name: "Sieges of Gassantoda Castle", year: 1543, dateLabel: "1542–1543 (Tenbun 11–12)", period: "Sengoku",
    location: { name: "Gassantoda Castle, Izumo (modern Shimane)", lat: 35.3636, lon: 133.1828 },
    combatants: { side1: { name: "Ōuchi & Mōri", leader: "Ōuchi Yoshitaka & Mōri Motonari" }, side2: { name: "Amago", leader: "Amago Haruhisa" } },
    outcome: "Amago victory; the Ōuchi–Mōri assault on the mountain fortress failed and was driven back.",
    summary: "Ōuchi Yoshitaka, with the young Mōri Motonari, marched deep into Izumo to storm the Amago stronghold of Gassantoda — and failed badly. The repulse shattered Ōuchi prestige and helped set Motonari on his own path to power.",
    details: `In 1542–43 Ōuchi Yoshitaka invaded Izumo to destroy the Amago at their great mountain castle of Gassantoda. The siege collapsed, the retreat turned disastrous, and Ōuchi power never fully recovered. (The Amago were finally broken at Gassantoda by Mōri Motonari two decades later.)`,
    sources: [ { label: "Sieges of Gassantoda Castle — Wikipedia", url: "https://en.wikipedia.org/wiki/Sieges_of_Gassantoda_Castle" } ]
  },
  {
    id: "ino-1556", name: "Battle of Inō", year: 1556, dateLabel: "1556 (Kōji 2)", period: "Sengoku",
    location: { name: "Inō, Owari (modern Aichi)", lat: 35.2061, lon: 136.8905 },
    combatants: { side1: { name: "Oda Nobunaga's forces", leader: "Oda Nobunaga" }, side2: { name: "Oda Nobuyuki's forces", leader: "Oda Nobuyuki" } },
    outcome: "Nobunaga's victory; he defeated his younger brother's revolt and consolidated the Oda house.",
    summary: "An Oda family civil war in which Nobunaga crushed the revolt of his younger brother Nobuyuki and the elders backing him. The victory secured Nobunaga's leadership of the clan at the outset of his rise.",
    details: `In 1556 retainers led by Shibata Katsuie and Hayashi Hidesada backed Nobunaga's brother Nobuyuki against him. Nobunaga won the field at Inō; he pardoned Nobuyuki once, then had him killed when he plotted again, ending the threat from within his own house.`,
    sources: [ { label: "Battle of Inō — Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_In%C5%8D" } ]
  },
  {
    id: "odawara-1561", name: "Siege of Odawara (1561)", year: 1561, dateLabel: "1561 (Eiroku 4)", period: "Sengoku",
    location: { name: "Odawara Castle, Sagami (modern Kanagawa)", lat: 35.2508, lon: 139.1536 },
    combatants: { side1: { name: "Uesugi coalition", leader: "Uesugi Kenshin" }, side2: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" } },
    outcome: "Hōjō held; Kenshin's great coalition could not take Odawara and withdrew.",
    summary: "Uesugi Kenshin led a vast Kantō coalition against the Hōjō capital of Odawara, but the fortress held and supply forced him to retreat. It showed both Kenshin's reach and the strength of Odawara's defences — which would defy Shingen too, and only fall to Hideyoshi in 1590.",
    details: `In 1561 Uesugi Kenshin marched a huge allied army to the walls of Odawara, but the Hōjō refused battle behind their ramparts and Kenshin, unable to sustain the siege, withdrew. Odawara's reputation for impregnability grew.`,
    sources: [ { label: "Siege of Odawara (1561) — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Odawara_(1561)" } ]
  },
  {
    id: "minowa-1566", name: "Siege of Minowa", year: 1566, dateLabel: "1566 (Eiroku 9)", period: "Sengoku",
    location: { name: "Minowa Castle, Kōzuke (modern Gunma)", lat: 36.4044, lon: 138.9514 },
    combatants: { side1: { name: "Nagano (Uesugi-allied)", leader: "Kamiizumi Hidetsuna" }, side2: { name: "Takeda", leader: "Takeda Shingen" } },
    outcome: "Takeda victory; Minowa fell, extending Takeda power into Kōzuke.",
    summary: "Takeda Shingen took the Nagano clan's castle of Minowa after a long contest for western Kōzuke. Among its defenders was the famed swordsman Kamiizumi Hidetsuna, founder of the Shinkage-ryū.",
    details: `By 1566 Takeda Shingen had ground down the Nagano of Kōzuke; with their leader dead, Minowa fell. Its capture pushed Takeda influence into the Kantō and against the Uesugi.`,
    sources: [ { label: "Siege of Minowa — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Minowa" } ]
  },
  {
    id: "nanao-1577", name: "Siege of Nanao", year: 1577, dateLabel: "1576–1577 (Tenshō 4–5)", period: "Sengoku",
    location: { name: "Nanao Castle, Noto (modern Ishikawa)", lat: 37.0092, lon: 136.9842 },
    combatants: { side1: { name: "Uesugi", leader: "Uesugi Kenshin" }, side2: { name: "Hatakeyama", leader: "Chō Tsugutsura" } },
    outcome: "Uesugi victory; Nanao fell to Kenshin, who then defeated an Oda relief army at Tedorigawa.",
    summary: "Uesugi Kenshin captured the great Noto fortress of Nanao after a long siege and an inside betrayal. With Nanao taken, he turned to meet Oda Nobunaga's relief army and crushed it at Tedorigawa.",
    details: `Kenshin besieged Nanao through 1576–77; the castle fell amid plague and treachery within. Days later he routed the approaching Oda army at the Tedori River, proving even Nobunaga's forces could be beaten in the field.`,
    leadsTo: "tedorigawa",
    sources: [ { label: "Siege of Nanao — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Nanao" } ]
  },
  {
    id: "itami-1579", name: "Siege of Itami (1579)", year: 1579, dateLabel: "1578–1579 (Tenshō 6–7)", period: "Sengoku",
    location: { name: "Arioka (Itami) Castle, Settsu (modern Hyōgo)", lat: 34.7801, lon: 135.4214 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobutada (for Nobunaga)" }, side2: { name: "Araki Murashige's forces", leader: "Araki Murashige" } },
    outcome: "Oda victory; the revolt was crushed, Araki fled, and his family and retainers were executed.",
    summary: "Nobunaga's general Araki Murashige rebelled and held out at Arioka (Itami) Castle for over a year. When it fell, Araki escaped but Nobunaga had his abandoned family and hundreds of followers put to death in a notorious reprisal.",
    details: `Araki Murashige's defection in 1578 threatened Nobunaga's flank near the capital. The long siege of Arioka ended in 1579; Araki slipped away, but Nobunaga's savage execution of his household became one of the war's most infamous episodes.`,
    sources: [ { label: "Siege of Itami (1579) — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Itami_(1579)" } ]
  },
  {
    id: "miki-1580", name: "Siege of Miki", year: 1580, dateLabel: "1578–1580 (Tenshō 6–8)", period: "Sengoku",
    location: { name: "Miki Castle, Harima (modern Hyōgo)", lat: 34.7999, lon: 134.9878 },
    combatants: { side1: { name: "Oda", leader: "Hashiba (Toyotomi) Hideyoshi" }, side2: { name: "Bessho", leader: "Bessho Nagaharu" } },
    outcome: "Hideyoshi victory; the garrison was starved out and Bessho Nagaharu took his own life to save his men.",
    summary: "Hideyoshi's two-year blockade of Miki Castle — the 'starvation of Miki' — broke the Bessho clan's revolt in Harima. Like Tottori after it, it showed Hideyoshi's preference for siege and supply over costly assault.",
    details: `From 1578 Hideyoshi ringed Miki with forts and cut its supply lines. After nearly two years of famine, Bessho Nagaharu surrendered and committed suicide in exchange for his soldiers' lives, opening Harima to the Oda advance west.`,
    sources: [ { label: "Siege of Miki — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Miki" } ]
  },
  {
    id: "arai-1516", name: "Siege of Arai", year: 1516, dateLabel: "1516 (Eishō 13)", period: "Sengoku",
    location: { name: "Arai Castle, Miura Peninsula, Sagami (modern Kanagawa)", lat: 35.1597, lon: 139.6128 },
    combatants: { side1: { name: "Miura & Ōgigayatsu Uesugi", leader: "Miura Yoshiatsu" }, side2: { name: "Later Hōjō", leader: "Hōjō Sōun" } },
    outcome: "Hōjō victory; the Miura were destroyed and Hōjō Sōun completed his conquest of Sagami.",
    summary: "Hōjō Sōun's final blow against the Miura clan, ending a long war for Sagami. The fall of Arai made Sōun — often called the first Sengoku daimyō — master of the province and founded the power of the Later Hōjō.",
    details: `After years of war, Hōjō Sōun cornered the Miura at their last stronghold of Arai on the Miura Peninsula. The defenders fell in 1516, completing Sōun's takeover of Sagami and laying the foundation of a Hōjō realm that would dominate the Kantō for five generations.`,
    sources: [ { label: "Siege of Arai — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Arai" } ]
  },
  {
    id: "odawara-1569", name: "Siege of Odawara (1569)", year: 1569, dateLabel: "1569 (Eiroku 12)", period: "Sengoku",
    location: { name: "Odawara Castle, Sagami (modern Kanagawa)", lat: 35.251, lon: 139.1535 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen" }, side2: { name: "Later Hōjō", leader: "Hōjō Ujiyasu" } },
    outcome: "Hōjō held; Takeda Shingen burned the town but could not take the castle and withdrew.",
    summary: "Takeda Shingen drove into the Kantō and reached the walls of Odawara, but — like Uesugi Kenshin before him — could not crack the Hōjō fortress. He burned the castle town and pulled back, fighting the Hōjō again at Mimasetōge on the retreat.",
    details: `In 1569 Shingen invaded Hōjō territory and approached Odawara, but the great castle held. He withdrew after a few days, and on the way home beat off a Hōjō pursuit at Mimasetōge.`,
    sources: [ { label: "Siege of Odawara (1569) — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Odawara_(1569)" } ]
  },
  {
    id: "noda-1573", name: "Siege of Noda Castle", year: 1573, dateLabel: "1573 (Genki 4)", period: "Sengoku",
    location: { name: "Noda Castle, Mikawa (modern Aichi)", lat: 34.882, lon: 137.4684 },
    combatants: { side1: { name: "Takeda", leader: "Takeda Shingen" }, side2: { name: "Tokugawa garrison", leader: "Suganuma Sadamichi" } },
    outcome: "Takeda took the castle — but Shingen was wounded during the siege and died soon after, ending his westward advance.",
    summary: "Takeda Shingen's last siege. He captured the small Tokugawa fort of Noda, but fell ill or was wounded there and died on the march home — a death that saved the embattled Tokugawa and Oda from his advance on Kyoto.",
    details: `In 1573 Shingen, marching west after crushing Ieyasu at Mikatagahara, besieged and took Noda Castle. There he was stricken (tradition says shot by a marksman); he died during the withdrawal to Kai, and the great Takeda offensive collapsed with him.`,
    sources: [ { label: "Siege of Noda Castle — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Noda_Castle" } ]
  },
  {
    id: "takato-1582", name: "Siege of Takatō (1582)", year: 1582, dateLabel: "March 1582 (Tenshō 10)", period: "Sengoku",
    location: { name: "Takatō Castle, Shinano (modern Nagano)", lat: 35.8332, lon: 138.0625 },
    combatants: { side1: { name: "Oda", leader: "Oda Nobutada" }, side2: { name: "Takeda", leader: "Nishina Morinobu" } },
    outcome: "Oda victory; the lone Takeda castle to resist was stormed, days before the clan's final destruction at Tenmokuzan.",
    summary: "As the Oda–Tokugawa invasion swept through Takeda lands in 1582, every castle surrendered except Takatō, held by Katsuyori's brother Nishina Morinobu. His defiant last stand and death came just before the Takeda were extinguished at Tenmokuzan.",
    details: `In the 1582 conquest of the Takeda, only Takatō resisted. Nishina Morinobu rejected Nobutada's demand to surrender and fought to the death when the castle was stormed — a celebrated act of loyalty in the clan's final days.`,
    leadsTo: "tenmokuzan-1582",
    sources: [ { label: "Siege of Takatō (1582) — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Takat%C5%8D_(1582)" } ]
  },
  {
    id: "oshi-1590", name: "Siege of Oshi", year: 1590, dateLabel: "1590 (Tenshō 18)", period: "Sengoku",
    location: { name: "Oshi Castle, Musashi (modern Saitama)", lat: 36.1372, lon: 139.4529 },
    combatants: { side1: { name: "Later Hōjō garrison", leader: "Narita; Kaihime" }, side2: { name: "Toyotomi", leader: "Ishida Mitsunari" } },
    outcome: "The 'floating castle' held against a water attack and surrendered only after Odawara itself fell.",
    summary: "During Hideyoshi's Odawara campaign, Ishida Mitsunari tried to take Oshi by damming a river and flooding it — but the 'floating castle' withstood the water attack. It gave up only after the main Hōjō capital surrendered, one of the campaign's few defensive successes.",
    details: `In 1590, while Hideyoshi besieged Odawara, Ishida Mitsunari attempted to drown Oshi Castle behind an earthwork dam. The waters failed to break the defence — remembered for the warrior-woman Kaihime — and Oshi held until news came that Odawara had fallen.`,
    sources: [ { label: "Siege of Oshi — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Oshi" } ]
  },
  {
    id: "iwaya-1585", name: "Siege of Iwaya Castle", year: 1585, dateLabel: "1585 (Tenshō 13)", period: "Sengoku",
    location: { name: "Iwaya Castle, Chikuzen (modern Fukuoka)", lat: 33.5258, lon: 130.5203 },
    combatants: { side1: { name: "Shimazu", leader: "Shimazu Yoshihisa" }, side2: { name: "Ōtomo (Takahashi)", leader: "Takahashi Jōun (Shigetane)" } },
    outcome: "Shimazu victory; the garrison was annihilated after a celebrated last-ditch defence.",
    summary: "As the Shimazu drove north to conquer Kyūshū, the Ōtomo general Takahashi Jōun made a famous last stand at Iwaya with a tiny garrison against an overwhelming Shimazu army, dying with all his men. The heroic defence bought time before Hideyoshi's intervention saved the Ōtomo.",
    details: `In 1585 the Shimazu besieged Iwaya, held by Takahashi Jōun with only a few hundred men. They fought to the last and were wiped out — but their stand delayed the Shimazu advance, and the next year Hideyoshi's invasion of Kyūshū turned the tide.`,
    sources: [ { label: "Siege of Iwaya Castle — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Iwaya_Castle" } ]
  },
  {
    id: "hiketa-1583", name: "Siege of Hiketa", year: 1583, dateLabel: "1583 (Tenshō 11)", period: "Sengoku",
    location: { name: "Hiketa, Sanuki (modern Kagawa, Shikoku)", lat: 34.2337, lon: 134.4084 },
    combatants: { side1: { name: "Chōsokabe", leader: "Chōsokabe Motochika" }, side2: { name: "Toyotomi (Sengoku)", leader: "Sengoku Hidehisa" } },
    outcome: "Chōsokabe victory; the repulse of Sengoku Hidehisa helped Motochika complete his conquest of Shikoku.",
    summary: "Chōsokabe Motochika defeated a Toyotomi-allied force under Sengoku Hidehisa at Hiketa in eastern Sanuki, a step in his bid to unify all of Shikoku — a dream Hideyoshi's great invasion would end two years later.",
    details: `In 1583 Chōsokabe Motochika beat back Sengoku Hidehisa at Hiketa, tightening his grip on Sanuki and bringing him close to ruling all four provinces of Shikoku. Hideyoshi's invasion of 1585 would force his submission.`,
    sources: [ { label: "Siege of Hiketa — Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Hiketa" } ]
  }
];
