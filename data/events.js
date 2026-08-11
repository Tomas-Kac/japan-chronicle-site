// =====================================================================
// EVENTS, non-battle historical events (for diversity beyond battles)
// =====================================================================
// Toggle the "Events" overlay (top-right layer control) to show these.
// When the overlay is ON they are filtered by the year slider (like battles),
// and their years join the slider's range, events span 552–1923, wider than the
// battle timeline. "Show all years" shows them all at once.
//
// type is one of:
//   "contact"   foreign contact / first encounters  (⚓, teal)
//   "capital"   capitals & seats of power            (★, purple)
//   "culture"   religion, culture & economy          (⛩, green)
//   "incident"  incidents & rebellions               (⚠, orange)
//   "politics"  decrees, transitions & governance    (⚑, slate)
//   "disaster"  earthquakes, fires & famines         (≋, grey)
//
// period is display text only (the year slider does the filtering), written as a
// canonical era name optionally followed by " · " and a short tag, e.g.
// "Heian · literature". Use the eight era names from ERAS in app.js. Where an entry
// sits on an era boundary the historically natural era wins over the slider's cut-off:
// the Tokugawa shogunate (1603) reads "Edo", not "Azuchi–Momoyama".
//
// Fields: id, name, type, year, dateLabel, period, location{name,lat,lon},
//         summary, details, images:[{src,caption}].
// =====================================================================

const EVENTS = [
  {
    id: "evt-tanegashima",
    sources: [ { label: "Wikipedia: Tanegashima", url: "https://en.wikipedia.org/wiki/Tanegashima" } ],
    name: "Arrival of the Portuguese at Tanegashima",
    type: "contact",
    year: 1543,
    dateLabel: "1543",
    period: "Muromachi · foreign contact",
    location: {
      name: "Tanegashima island, Ōsumi (modern Kagoshima Prefecture)",
      lat: 30.57389,
      lon: 130.98111
    },
    summary: "The first Europeans reach Japan, and bring the matchlock gun that would transform the Sengoku wars.",
    details: `In 1543, a Chinese vessel carrying Portuguese merchants landed at Tanegashima, an island south of Kyūshū. This event marks the first documented European contact with Japan.

The merchants introduced matchlock firearms (arquebuses) to the local daimyō, Tanegashima Tokitaka. Tokitaka acquired two weapons and commissioned local swordsmiths to reverse-engineer the firing mechanisms and barrels. Mass production subsequently commenced in manufacturing centers such as Sakai and Kunitomo.

The introduction of firearms precipitated a paradigm shift in Japanese military tactics, transitioning armies from traditional mounted archers to massed formations of ashigaru (infantry) equipped with matchlocks.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tanegashima_ISS048.jpg/960px-Tanegashima_ISS048.jpg",
        caption: "Tanegashima, where the Portuguese, and firearms, first landed. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-xavier-kagoshima",
    sources: [ { label: "Wikipedia: Francis Xavier", url: "https://en.wikipedia.org/wiki/Francis_Xavier" } ],
    name: "Francis Xavier lands at Kagoshima",
    type: "contact",
    year: 1549,
    dateLabel: "1549",
    period: "Muromachi · foreign contact",
    location: {
      name: "Kagoshima, Satsuma Province (modern Kagoshima)",
      lat: 31.59694,
      lon: 130.55722
    },
    summary: "The Jesuit missionary who brought Christianity to Japan steps ashore in Satsuma.",
    details: `The Jesuit Francis Xavier came ashore at Kagoshima in 1549, opening Christian missionary work in Japan. Over the next century the faith won perhaps 300,000 converts, among them daimyō such as Ōtomo Sōrin and Ōmura Sumitada, who gave Nagasaki to the Church.

The Tokugawa later banned and brutally suppressed Christianity, driving it underground for over two centuries.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Franciscus_de_Xabier.jpg/960px-Franciscus_de_Xabier.jpg",
        caption: "Portrait of St Francis Xavier. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-dejima",
    sources: [ { label: "Wikipedia: Dejima", url: "https://en.wikipedia.org/wiki/Dejima" } ],
    name: "Dejima, Japan's window on the West",
    type: "contact",
    year: 1641,
    dateLabel: "from 1641",
    period: "Edo · sakoku",
    location: {
      name: "Dejima, Nagasaki harbour (modern Nagasaki)",
      lat: 32.74352,
      lon: 129.87302
    },
    summary: "The tiny fan-shaped island that was Japan's sole licensed link to Europe during two centuries of seclusion.",
    details: `Dejima was an artificial island constructed in Nagasaki Bay in 1634 by order of the Tokugawa shogunate. Its initial purpose was to segregate Portuguese merchants from the Japanese populace to curtail Christian proselytization.

Following the expulsion of the Portuguese in 1639, the Dutch East India Company (VOC) was relocated to Dejima in 1641. For the duration of the Edo period's isolationist policy (Sakoku), Dejima functioned as the exclusive conduit for Western trade and intellectual exchange.

The island facilitated the importation of "Rangaku" (Dutch Learning), enabling Japanese scholars to study Western medicine, astronomy, cartography, and military science. This academic transmission ensured that Japan maintained a foundational understanding of European scientific developments.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Plattegrond_van_Deshima.jpg/960px-Plattegrond_van_Deshima.jpg",
        caption: "Plan of the fan-shaped island of Dejima. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-perry-uraga",
    sources: [ { label: "Wikipedia: Perry Expedition", url: "https://en.wikipedia.org/wiki/Perry_Expedition" } ],
    name: "Perry's Black Ships at Uraga",
    type: "contact",
    year: 1853,
    dateLabel: "July 1853",
    period: "Bakumatsu",
    location: {
      name: "Uraga, at the mouth of Edo Bay / Tokyo Bay (modern Yokosuka, Kanagawa)",
      lat: 35.2497,
      lon: 139.7206
    },
    summary: "The American squadron whose arrival shattered Japan's seclusion and set the fall of the shogunate in motion.",
    details: `In July 1853 Commodore Matthew Perry's steam-powered "Black Ships" (kurofune) anchored off Uraga and demanded that Japan open to trade.

The shock exposed the shogunate's weakness, forced the end of seclusion, and ignited the turmoil of the Bakumatsu that would topple the Tokugawa and bring the Meiji Restoration of 1868.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Japanese_1854_print_Commodore_Perry.jpg/960px-Japanese_1854_print_Commodore_Perry.jpg",
        caption: "Japanese print of Commodore Perry, 1854. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-heijo-nara",
    sources: [ { label: "Wikipedia: Heijō-kyō", url: "https://en.wikipedia.org/wiki/Heij%C5%8D-ky%C5%8D" } ],
    name: "Heijō-kyō, the capital at Nara",
    type: "capital",
    year: 710,
    dateLabel: "710",
    period: "Asuka–Nara",
    location: {
      name: "Heijō Palace, Nara",
      lat: 34.6911,
      lon: 135.7958
    },
    summary: "The great capital of the Nara period from 710, laid out on the grid of Tang China's Chang'an (following the shorter-lived Fujiwara-kyō, Japan's first Chinese-plan capital).",
    details: `In 710 the court founded Heijō-kyō at Nara, modelled on the Chinese capital Chang'an. The Nara period saw Buddhism flourish under state patronage, the casting of the Great Buddha at Tōdai-ji, and the writing of Japan's first chronicles, the Kojiki and Nihon Shoki.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Heijokyo_-_Map_of_major_buildings.png",
        caption: "Plan of Heijō-kyō, the Nara capital. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-heian-kyoto",
    sources: [ { label: "Wikipedia: Heian-kyō", url: "https://en.wikipedia.org/wiki/Heian-kyō" } ],
    name: "Heian-kyō, the capital moves to Kyoto",
    type: "capital",
    year: 794,
    dateLabel: "794",
    period: "Heian",
    location: {
      name: "Heian Palace, Heian-kyō (modern Kyoto)",
      lat: 35.0117,
      lon: 135.7447
    },
    summary: "Kyoto becomes the imperial capital, and remains so for more than a thousand years.",
    details: `In 794 Emperor Kanmu moved the capital to Heian-kyō, beginning the Heian period, the golden age of the courtly aristocracy that produced Murasaki Shikibu's Tale of Genji.

Kyoto would stay the seat of the emperor until 1868, even as real power passed to warrior governments elsewhere.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/63/Heiankyo_palace_location.png",
        caption: "Site of the Heian Palace in Kyoto. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-kamakura",
    sources: [ { label: "Wikipedia: Kamakura shogunate", url: "https://en.wikipedia.org/wiki/Kamakura_shogunate" } ],
    name: "Kamakura, seat of the first shogunate",
    type: "capital",
    year: 1192,
    dateLabel: "1185 / 1192",
    period: "Kamakura",
    location: {
      name: "Kamakura, Sagami (modern Kanagawa)",
      lat: 35.31972,
      lon: 139.5525
    },
    summary: "Warrior government is born: Minamoto no Yoritomo rules Japan from a seaside town far from the court.",
    details: `After the Genpei War, Minamoto no Yoritomo established his warrior government (bakufu) at Kamakura, and in 1192 took the title of shōgun. For some 150 years this town ruled Japan, while the Hōjō regents who succeeded Yoritomo repelled the Mongol invasions of 1274 and 1281.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/TsurugaokaHachiman-M8867.jpg/960px-TsurugaokaHachiman-M8867.jpg",
        caption: "Tsurugaoka Hachimangū, the shrine at the heart of Kamakura. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-azuchi",
    sources: [ { label: "Wikipedia: Azuchi Castle", url: "https://en.wikipedia.org/wiki/Azuchi_Castle" } ],
    name: "Azuchi, Nobunaga's castle capital",
    type: "capital",
    year: 1576,
    dateLabel: "1576",
    period: "Azuchi–Momoyama · capital",
    location: {
      name: "Azuchi Castle, Ōmi (modern Ōmihachiman, Shiga)",
      lat: 35.1558,
      lon: 136.1392
    },
    summary: "Oda Nobunaga's gilded hilltop castle on Lake Biwa, the showpiece of a new age.",
    details: `From 1576 Oda Nobunaga raised a spectacular castle at Azuchi on the shore of Lake Biwa, its lavish gold-leafed keep announcing his supremacy. The whole "Azuchi–Momoyama" period takes its name from it.

The castle burned within days of Nobunaga's death at Honnō-ji in 1582 and was never rebuilt.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/%E8%BF%91%E6%B1%9F%E5%9B%BD%E8%92%B2%E7%94%9F%E9%83%A1%E5%AE%89%E5%9C%9F%E5%9F%8E%E4%B9%8B.jpg/960px-%E8%BF%91%E6%B1%9F%E5%9B%BD%E8%92%B2%E7%94%9F%E9%83%A1%E5%AE%89%E5%9C%9F%E5%9F%8E%E4%B9%8B.jpg",
        caption: "Edo-period depiction of Azuchi Castle. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-edo",
    sources: [ { label: "Wikipedia: Edo", url: "https://en.wikipedia.org/wiki/Edo" } ],
    name: "Edo, the Tokugawa capital",
    type: "capital",
    year: 1603,
    dateLabel: "1603",
    period: "Edo",
    location: {
      name: "Edo Castle (modern Imperial Palace, Tokyo)",
      lat: 35.6852,
      lon: 139.7528
    },
    summary: "The fishing town that Ieyasu made his base, and that grew into one of the largest cities on earth.",
    details: `When Tokugawa Ieyasu became shōgun in 1603 he ruled from Edo and its vast castle, while the emperor remained in Kyoto. Under the alternate-attendance system, which compelled daimyō to keep households in the city, Edo swelled past a million people.

In 1868 it was renamed Tokyo, "eastern capital", and became the seat of the modern state.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edo_P_detail.jpg/960px-Edo_P_detail.jpg",
        caption: "Edo, on a 17th-century folding screen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-todaiji",
    sources: [ { label: "Wikipedia: Tōdai-ji", url: "https://en.wikipedia.org/wiki/Tōdai-ji" } ],
    name: "Tōdai-ji and the Great Buddha",
    type: "culture",
    year: 752,
    dateLabel: "752",
    period: "Asuka–Nara",
    location: {
      name: "Tōdai-ji, Nara",
      lat: 34.68917,
      lon: 135.83972
    },
    summary: "The colossal bronze Buddha of Nara, proclaiming Buddhism the protector of the state.",
    details: `The Tōdai-ji and the Great Buddha occurred in 752 in Tōdai-ji, Nara. The colossal bronze Buddha of Nara, proclaiming Buddhism the protector of the state. This historical event holds significant importance in the culture history of Japan, reflecting the broader socio-political dynamics of the era. The implications of this event extensively influenced contemporary policy and regional stability.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/T%C5%8Ddai-ji_Kon-d%C5%8D.jpg/960px-T%C5%8Ddai-ji_Kon-d%C5%8D.jpg",
        caption: "The Great Buddha Hall of Tōdai-ji. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-enryakuji",
    sources: [ { label: "Wikipedia: Enryaku-ji", url: "https://en.wikipedia.org/wiki/Enryaku-ji" } ],
    name: "Enryaku-ji founded on Mt Hiei",
    type: "culture",
    year: 788,
    dateLabel: "788",
    period: "Heian",
    location: {
      name: "Enryaku-ji, Mount Hiei (Ōtsu, Shiga)",
      lat: 35.07056,
      lon: 135.84111
    },
    summary: "The great Tendai monastery above Kyoto, and a military power in its own right.",
    details: `Saichō founded Enryaku-ji on Mount Hiei in 788; it became the head temple of Tendai Buddhism and grew so powerful that its warrior-monks (sōhei) repeatedly intervened in court politics.

Oda Nobunaga, determined to break that power, burned the entire mountain complex in 1571.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Enryakuji_Konponchudo02s5s3200.jpg/960px-Enryakuji_Konponchudo02s5s3200.jpg",
        caption: "The Konpon-chūdō of Enryaku-ji, Mt Hiei. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-koyasan",
    sources: [ { label: "Wikipedia: Mount Kōya", url: "https://en.wikipedia.org/wiki/Mount_K%C5%8Dya" } ],
    name: "Kōyasan founded by Kūkai",
    type: "culture",
    year: 816,
    dateLabel: "816",
    period: "Heian",
    location: {
      name: "Mount Kōya, Kii (modern Wakayama)",
      lat: 34.2125,
      lon: 135.58639
    },
    summary: "The mountain headquarters of Shingon Buddhism, founded by the monk Kūkai.",
    details: `The Kōyasan founded by Kūkai occurred in 816 in Mount Kōya, Kii (modern Wakayama). The mountain headquarters of Shingon Buddhism, founded by the monk Kūkai. This historical event holds significant importance in the culture history of Japan, reflecting the broader socio-political dynamics of the era. The implications of this event extensively influenced contemporary policy and regional stability.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Danjogaran_Koyasan12n3200.jpg/960px-Danjogaran_Koyasan12n3200.jpg",
        caption: "The Danjō Garan complex on Mount Kōya. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-iwami-ginzan",
    sources: [ { label: "Wikipedia: Iwami Ginzan Silver Mine", url: "https://en.wikipedia.org/wiki/Iwami_Ginzan_Silver_Mine" } ],
    name: "Iwami Ginzan silver mine",
    type: "culture",
    year: 1526,
    dateLabel: "from 1526",
    period: "Muromachi · economy",
    location: {
      name: "Iwami Ginzan, Ōmori (modern Ōda, Shimane)",
      lat: 35.1116,
      lon: 132.4389
    },
    summary: "The silver mine that helped finance the Sengoku wars and drew the world's traders to Japan.",
    details: `Opened in 1526, the Iwami Ginzan became one of the world's great silver mines; at its height Japan may have produced a third of the world's silver.

That silver paid for armies, guns and gunpowder and drew Portuguese and Chinese merchants, a hidden engine of the age. It is now a UNESCO World Heritage Site.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shimizudani_Refinery_Ruins_at_Iwami_Ginzan_Silver_Mine_001.jpg/960px-Shimizudani_Refinery_Ruins_at_Iwami_Ginzan_Silver_Mine_001.jpg",
        caption: "Refinery ruins at the Iwami Ginzan silver mine. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-sakai",
    sources: [ { label: "Wikipedia: Sakai", url: "https://en.wikipedia.org/wiki/Sakai" } ],
    name: "Sakai, the free merchant city",
    type: "culture",
    year: 1550,
    dateLabel: "16th century",
    period: "Muromachi · economy",
    location: {
      name: "Sakai, Izumi (modern Sakai, Osaka)",
      lat: 34.57333,
      lon: 135.48306
    },
    summary: "A wealthy, self-governing port, gateway of the gun and the tea ceremony, often likened to a free city of Europe.",
    details: `Sakai grew rich on overseas trade and the firearms industry, run by a council of its own merchants with a degree of self-rule rare in Japan. The great tea master Sen no Rikyū was a Sakai man.

Its independence ended when Oda Nobunaga forced the city to submit and pay a heavy levy.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Old_Sakai_Lighthouse.jpg/960px-Old_Sakai_Lighthouse.jpg",
        caption: "The old lighthouse marking the historic port of Sakai. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-shimabara",
    sources: [ { label: "Wikipedia: Shimabara Rebellion", url: "https://en.wikipedia.org/wiki/Shimabara_Rebellion" } ],
    name: "Shimabara Rebellion",
    type: "incident",
    year: 1637,
    dateLabel: "1637–1638",
    period: "Edo",
    location: {
      name: "Hara Castle, Shimabara (modern Minamishimabara, Nagasaki)",
      lat: 32.63,
      lon: 130.268
    },
    summary: "The great Christian-and-peasant uprising whose suppression sealed Japan's seclusion.",
    details: `In 1637–38 overtaxed peasants and persecuted Christians of the Shimabara peninsula rose in revolt, some 37,000 holding out in the ruined Hara Castle. The shogunate crushed them with an overwhelming army, even firing on them from a Dutch ship, and killed almost all the defenders.

The rising hardened the Tokugawa resolve to ban Christianity and close the country to the outside world.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Shimabara-Battle-Map-c17th-century.png/960px-Shimabara-Battle-Map-c17th-century.png",
        caption: "A 17th-century map of the Shimabara Rebellion. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-ako-47ronin",
    sources: [ { label: "Wikipedia: Forty-seven rōnin", url: "https://en.wikipedia.org/wiki/Forty-seven_r%C5%8Dnin" } ],
    name: "The Forty-seven Rōnin (Akō incident)",
    type: "incident",
    year: 1703,
    dateLabel: "1701–1703",
    period: "Edo",
    location: {
      name: "Sengaku-ji, Edo (modern Takanawa, Tokyo)",
      lat: 35.6383,
      lon: 139.7403
    },
    summary: "The most famous tale of loyalty and revenge in Japanese history.",
    details: `In 1701 the daimyō Asano Naganori was made to commit seppuku after drawing his sword against the official Kira Yoshinaka inside Edo Castle. Two years later forty-seven of his now-masterless retainers (rōnin) avenged him by killing Kira, then gave themselves up and were ordered to commit seppuku in turn.

Their graves at Sengaku-ji are still visited today, and their story became the beloved drama Chūshingura.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sengakuji_03.JPG/960px-Sengakuji_03.JPG",
        caption: "Sengaku-ji, where the forty-seven rōnin are buried. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-sakuradamon",
    sources: [ { label: "Wikipedia: Sakuradamon Incident (1860)", url: "https://en.wikipedia.org/wiki/Sakuradamon_Incident_(1860)" } ],
    name: "Sakuradamon Incident",
    type: "incident",
    year: 1860,
    dateLabel: "March 24, 1860",
    period: "Bakumatsu",
    location: {
      name: "Sakurada Gate of Edo Castle (modern Tokyo)",
      lat: 35.6772,
      lon: 139.753
    },
    summary: "The assassination of the shogunate's chief minister that broke Tokugawa authority.",
    details: `In March 1860, just outside the Sakurada Gate of Edo Castle, rōnin from Mito cut down Ii Naosuke, the shogunate's chief minister, in revenge for his purges of dissidents and for signing the "unequal" treaties with the Western powers.

The murder of so high an official in the heart of Edo shattered the shogunate's prestige and hastened its collapse.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sakuradamon_Gate_%28Koraimon_Gate%29_of_The_Imperial_Palace.JPG/960px-Sakuradamon_Gate_%28Koraimon_Gate%29_of_The_Imperial_Palace.JPG",
        caption: "The Sakurada Gate of the former Edo Castle. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-fuji-hoei",
    sources: [ { label: "Wikipedia: Hōei eruption", url: "https://en.wikipedia.org/wiki/H%C5%8Dei_eruption" } ],
    name: "Hōei eruption of Mount Fuji",
    type: "incident",
    year: 1707,
    dateLabel: "December 1707",
    period: "Edo",
    location: {
      name: "Mount Fuji (Shizuoka / Yamanashi border)",
      lat: 35.36083,
      lon: 138.7275
    },
    summary: "Mount Fuji's last eruption, which rained ash on Edo a hundred kilometres away.",
    details: `In December 1707, only weeks after a huge earthquake had shaken the country, Mount Fuji erupted, dusting Edo with ash and ruining farmland across the region. It opened the Hōei crater on the mountain's southeastern flank, and remains Fuji's most recent eruption.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/960px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
        caption: "Mount Fuji; the Hōei crater on its flank dates from the 1707 eruption. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-kanto-1923",
    sources: [ { label: "Wikipedia: Great Kantō Earthquake", url: "https://en.wikipedia.org/wiki/Great_Kant%C5%8D_Earthquake" } ],
    name: "Great Kantō Earthquake",
    type: "incident",
    year: 1923,
    dateLabel: "September 1, 1923",
    period: "Taishō era",
    location: {
      name: "Sagami Bay epicentre (off Kanagawa)",
      lat: 35.32667,
      lon: 139.13833
    },
    summary: "The earthquake and firestorms that destroyed Tokyo and Yokohama and killed over 100,000.",
    details: `On 1 September 1923 a magnitude-7.9 earthquake struck beneath Sagami Bay. The firestorms that swept the wooden cities afterward did the deadliest damage, devastating Tokyo and Yokohama and killing more than 100,000 people.

The disaster reshaped the modern capital, and, in the ensuing chaos and rumour, triggered massacres of Koreans and other minorities.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/The_Great_Kanto_Earthquake_%283767766524%29_%28cropped%29.jpg/960px-The_Great_Kanto_Earthquake_%283767766524%29_%28cropped%29.jpg",
        caption: "Devastation from the 1923 Great Kantō earthquake. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-onin-war",
    sources: [ { label: "Wikipedia: Ōnin War", url: "https://en.wikipedia.org/wiki/%C5%8Cnin_War" } ],
    name: "Ōnin War begins",
    type: "politics",
    year: 1467,
    dateLabel: "1467–1477",
    period: "Muromachi",
    location: {
      name: "Kyoto",
      lat: 35.0116,
      lon: 135.7681
    },
    summary: "The devastating civil war that destroyed the capital and sparked the Sengoku period.",
    details: `Triggered by a succession dispute in the Ashikaga shogunate and rivalries between the powerful Hosokawa and Yamana clans, the Ōnin War turned Kyoto into a battlefield. For a decade, massive armies fought street by street, burning the imperial capital to the ground.

While the war ended in exhaustion with no clear victor, it utterly shattered the central authority of the shogunate, ushering in the century-long Sengoku period of warring states.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png/960px-Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png",
        caption: "‘The Battle of Ōnin’ by Utagawa Yoshitora. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-ashikaga-fall",
    sources: [ { label: "Wikipedia: Ashikaga shogunate", url: "https://en.wikipedia.org/wiki/Ashikaga_shogunate" } ],
    name: "Fall of the Ashikaga Shogunate",
    type: "politics",
    year: 1573,
    dateLabel: "August 1573",
    period: "Azuchi–Momoyama",
    location: {
      name: "Kyoto",
      lat: 35.0116,
      lon: 135.7681
    },
    summary: "Oda Nobunaga expels the last shōgun, officially ending the Muromachi period.",
    details: `After years of tension, the 15th Ashikaga shōgun, Yoshiaki, raised arms against his former sponsor Oda Nobunaga. In response, Nobunaga marched on Kyoto, burned the upper Kamigyō district, and besieged Yoshiaki.

Nobunaga forced Yoshiaki into exile, effectively ending the Ashikaga shogunate that had ruled Japan for over 230 years. This event marked the definitive transition of power to Nobunaga and the beginning of the Azuchi-Momoyama period.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ashikaga_Yoshiaki2.jpg",
        caption: "Ashikaga Yoshiaki, the last Muromachi shogun. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-sword-hunt",
    sources: [ { label: "Wikipedia: Sword hunt", url: "https://en.wikipedia.org/wiki/Sword_hunt" } ],
    name: "Hideyoshi's Sword Hunt (Katanagari)",
    type: "politics",
    year: 1588,
    dateLabel: "1588",
    period: "Azuchi–Momoyama",
    location: {
      name: "Kyoto (Nationwide edict)",
      lat: 35.0116,
      lon: 135.7681
    },
    summary: "Toyotomi Hideyoshi disarms the peasantry, cementing the rigid class divide between samurai and commoners.",
    details: `To prevent uprisings and solidify his control over the newly unified country, Toyotomi Hideyoshi issued the famous Sword Hunt edict. It commanded all farmers to surrender their swords, bows, spears, and firearms, ostensibly to melt them down for a great Buddha statue in Kyoto.

This revolutionary act, combined with his nationwide land surveys, formalized the strict class separation between armed professional warriors (samurai) and unarmed agricultural workers that would define Japanese society for the next 280 years.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png/960px-Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png",
        caption: "Toyotomi Hideyoshi, who decreed the Sword Hunt. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-korean-invasions",
    sources: [ { label: "Wikipedia: Imjin War", url: "https://en.wikipedia.org/wiki/Imjin_War" } ],
    name: "Invasions of Korea (Bunroku–Keichō Wars)",
    type: "politics",
    year: 1592,
    dateLabel: "1592–1598",
    period: "Azuchi–Momoyama",
    location: {
      name: "Nagoya Castle, Hizen (modern Karatsu, Saga)",
      lat: 33.5358,
      lon: 129.8732
    },
    summary: "Hideyoshi launches massive invasions of Korea from a vast new fortress in Kyushu.",
    details: `Having unified Japan, Hideyoshi turned his ambitions toward conquering Ming China. He built a massive staging base at Nagoya Castle in northern Kyushu and launched two invasions of the Korean peninsula in 1592 (Bunroku) and 1597 (Keichō).

The campaigns involved hundreds of thousands of troops and devastated Korea, but stalled against combined Korean-Ming resistance and Admiral Yi Sun-sin's naval victories. The Japanese armies withdrew following Hideyoshi's death in 1598.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Siege-of-Busanjin-1592.jpg/960px-Siege-of-Busanjin-1592.jpg",
        caption: "The Siege of Busan, 1592, the opening of the Korean invasions. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-tensho-embassy",
    sources: [ { label: "Wikipedia: Tenshō embassy", url: "https://en.wikipedia.org/wiki/Tenshō_embassy" } ],
    name: "Tenshō Embassy to Europe",
    type: "contact",
    year: 1582,
    dateLabel: "February 20, 1582",
    period: "Azuchi–Momoyama",
    location: {
      name: "Nagasaki",
      lat: 32.7503,
      lon: 129.8779
    },
    summary: "Four Japanese boys sail from Nagasaki to meet the Pope in Rome.",
    details: `Organized by the Jesuit Alessandro Valignano and sponsored by three Christian daimyō from Kyushu, the Tenshō Embassy saw four young Japanese noblemen dispatched to Europe. 

They traveled via Macau, India, and Portugal, eventually meeting King Philip II of Spain and Pope Gregory XIII in Rome. They returned to Japan in 1590, bringing back a Gutenberg printing press and Western instruments, though they found their homeland growing increasingly hostile to Christianity.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/First_Japanese_Embassy_to_Europe_1586.png/960px-First_Japanese_Embassy_to_Europe_1586.png",
        caption: "The Tenshō embassy of young Japanese Christians to Europe, 1586. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-enryakuji-burning",
    sources: [ { label: "Wikipedia: Siege of Mount Hiei", url: "https://en.wikipedia.org/wiki/Siege_of_Mount_Hiei" } ],
    name: "Burning of Enryaku-ji",
    type: "culture",
    year: 1571,
    dateLabel: "September 30, 1571 (Genki 2/9/12)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Mount Hiei (modern Ōtsu, Shiga)",
      lat: 35.0706,
      lon: 135.8411
    },
    summary: "Nobunaga destroys the powerful Tendai monastic complex to break the power of its warrior-monks.",
    details: `The vast temple complex of Enryaku-ji on Mount Hiei had sheltered Oda Nobunaga's enemies (the Asakura and Azai) and wielded immense political and military power through its armies of warrior-monks (sōhei).

Determined to eliminate this threat, Nobunaga ordered his forces to encircle the mountain. They burned every building to the ground and massacred thousands of monks, women, and children. The destruction permanently broke the secular military power of the great Buddhist institutions.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Enryakuji_Konponchudo02s5s3200.jpg/960px-Enryakuji_Konponchudo02s5s3200.jpg",
        caption: "Enryaku-ji on Mount Hiei, burned by Nobunaga in 1571. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-rikyu-seppuku",
    sources: [ { label: "Wikipedia: Sen no Rikyū", url: "https://en.wikipedia.org/wiki/Sen_no_Rikyū" } ],
    name: "Sen no Rikyū's Forced Seppuku",
    type: "culture",
    year: 1591,
    dateLabel: "April 21, 1591 (Tenshō 19/2/28)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Jurakudai, Kyoto",
      lat: 35.025,
      lon: 135.745
    },
    summary: "The great tea master and confidant of Hideyoshi is ordered to commit suicide.",
    details: `Sen no Rikyū, the merchant from Sakai who perfected the wabi-cha style of tea ceremony, had risen to become one of Toyotomi Hideyoshi's most trusted political advisors.

For reasons that remain debated by historians, possibly due to his independent influence, disagreements over the Korean invasion, or the placement of his wooden statue at Daitoku-ji, Hideyoshi abruptly turned against him. Ordered to commit ritual suicide (seppuku) at Hideyoshi's Jurakudai palace, Rikyū's death shocked the cultural establishment.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sen_no_Rikyu_JPN_%28cropped%29.jpg/960px-Sen_no_Rikyu_JPN_%28cropped%29.jpg",
        caption: "The tea master Sen no Rikyū. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-rakuichi",
    sources: [ { label: "Japanese Wikipedia: 楽市・楽座", url: "https://ja.wikipedia.org/wiki/楽市・楽座" } ],
    name: "Rakuichi-Rakuza Decrees",
    type: "culture",
    year: 1577,
    dateLabel: "1577",
    period: "Azuchi–Momoyama",
    location: {
      name: "Azuchi",
      lat: 35.1558,
      lon: 136.1392
    },
    summary: "Nobunaga establishes 'free markets and open guilds' to supercharge his domain's economy.",
    details: `To stimulate the economy of his new capital at Azuchi and undercut the financial power of traditional temples and aristocrats, Oda Nobunaga issued the Rakuichi-Rakuza edicts.

These decrees abolished the monopolistic control of traditional guilds (za) and eliminated toll barriers (sekisho), creating a free-trade zone. This revolutionary economic policy drew merchants from across Japan, drastically increasing Nobunaga's wealth and military capacity, and laid the foundation for early modern Japanese commerce.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Odanobunaga.jpg/960px-Odanobunaga.jpg",
        caption: "Oda Nobunaga, author of the Rakuichi-Rakuza free-market decrees. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-meio-earthquake",
    sources: [ { label: "Wikipedia: 1498 Meiō earthquake", url: "https://en.wikipedia.org/wiki/1498_Meiō_earthquake" } ],
    name: "Meiō Earthquake and Tsunami",
    type: "disaster",
    year: 1498,
    dateLabel: "September 20, 1498 (Meiō 7/8/25)",
    period: "Muromachi · disaster",
    location: {
      name: "Suruga Bay",
      lat: 34.8,
      lon: 138.5
    },
    summary: "A massive earthquake and tsunami that devastated the Tōkai region and reshaped the coastline.",
    details: `Estimated at magnitude 8.6, the Meiō Nankaidō earthquake generated a massive tsunami that washed over the Tōkai coast. The waves breached the sand spit separating Lake Hamana from the ocean, turning it into a brackish lagoon connected to the sea.

In Kamakura, the tsunami washed away the great wooden hall housing the monumental bronze Buddha at Kōtoku-in. The hall was never rebuilt, leaving the Great Buddha to sit in the open air to this day.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/230128_Kamakura_Daibutsu_Japan04s3.jpg/960px-230128_Kamakura_Daibutsu_Japan04s3.jpg",
        caption: "The Great Buddha of Kamakura, the 1498 Meiō tsunami swept away the hall that once enclosed it. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-tensho-earthquake",
    sources: [ { label: "Wikipedia: 1586 Tenshō earthquake", url: "https://en.wikipedia.org/wiki/1586_Tenshō_earthquake" } ],
    name: "Tenshō Earthquake",
    type: "disaster",
    year: 1586,
    dateLabel: "January 18, 1586 (Tenshō 13/11/29)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Central Honshu (Epicenter region)",
      lat: 36.05,
      lon: 136.9
    },
    summary: "A catastrophic inland earthquake that destroyed castles and altered the course of military campaigns.",
    details: `A massive seismic event struck central Japan during Toyotomi Hideyoshi's unification campaigns. The shock was so violent it collapsed Ōgaki Castle, buried the ruling family of Kaerikumo Castle under a massive landslide, and caused extensive damage to Hideyoshi's own Nagahama Castle.

Fires broke out across the region, and rivers changed course. The disaster forced a temporary halt to regional conflicts as daimyō scrambled to rebuild their shattered strongholds.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ogaki_Castle.jpg/960px-Ogaki_Castle.jpg",
        caption: "Ōgaki Castle, wrecked by the 1586 Tenshō earthquake. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-shingen-death",
    sources: [ { label: "Wikipedia: Takeda Shingen", url: "https://en.wikipedia.org/wiki/Takeda_Shingen" } ],
    name: "Death of Takeda Shingen",
    type: "politics",
    year: 1573,
    dateLabel: "May 13, 1573 (Genki 4/4/12)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Komaba, Shinano Province (modern Achi, Nagano)",
      lat: 35.4322,
      lon: 137.8278
    },
    summary: "The greatest military threat to the Oda-Tokugawa alliance suddenly dies of illness on campaign.",
    details: `Having crushed Tokugawa Ieyasu at Mikatagahara, Takeda Shingen was seemingly unstoppable in his march toward Kyoto. However, his campaign abruptly halted when he fell seriously ill.

He died at Komaba in Shinano while his army was retreating to Kai. Shingen ordered his death kept secret for three years, but the news leaked, lifting a massive strategic burden from Oda Nobunaga and Tokugawa Ieyasu and altering the course of the Sengoku period.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Takeda Shingen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-kenshin-death",
    sources: [ { label: "Wikipedia: Uesugi Kenshin", url: "https://en.wikipedia.org/wiki/Uesugi_Kenshin" } ],
    name: "Death of Uesugi Kenshin",
    type: "politics",
    year: 1578,
    dateLabel: "April 19, 1578 (Tenshō 6/3/13)",
    period: "Azuchi–Momoyama",
    location: {
      name: "Kasugayama Castle, Echigo (modern Jōetsu, Niigata)",
      lat: 37.1183,
      lon: 138.2417
    },
    summary: "The 'Dragon of Echigo' dies mysteriously in his castle, sparking a bitter succession war.",
    details: `Fresh from a decisive victory over Oda forces at the Battle of Tedorigawa, Uesugi Kenshin returned to his stronghold at Kasugayama Castle to mobilize for a massive spring offensive. Before the army could march, he suffered a sudden collapse in his lavatory and died days later, likely of a stroke or stomach cancer.

Having never married or named a clear heir, his death triggered the Otate no Ran, a devastating civil war between his two adopted sons that permanently crippled Uesugi power.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Uesugi_Kenshin_Portrait_from_Uesugi_Shrine.png",
        caption: "Uesugi Kenshin. Wikimedia Commons."
      }
    ]
  },
  {
    id: "hokoji-bell",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hokoji_Kyoto01bs1920.jpg/960px-Hokoji_Kyoto01bs1920.jpg",
        caption: "The main hall of Hōkō-ji in Kyoto, the temple whose new bell carried the inscription that Tokugawa Ieyasu seized on as his pretext in 1614; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Hōkō-ji (Kyoto)", url: "https://en.wikipedia.org/wiki/Hōkō-ji_(Kyoto)" } ],
    name: "The Hōkōji Bell Incident",
    type: "politics",
    year: 1614,
    period: "Edo · incident",
    location: {
      name: "Hōkō-ji Temple, Kyoto",
      lat: 34.991,
      lon: 135.772
    },
    summary: "Tokugawa Ieyasu manufactured a political crisis over an inscription on a temple bell to justify a war of annihilation against the Toyotomi clan.",
    details: `The Hōkōji Bell Incident was a political controversy manufactured by Tokugawa Ieyasu in 1614. It served as the casus belli for the Tokugawa shogunate to initiate hostilities against the Toyotomi clan.

Toyotomi Hideyori sponsored the casting of a large bronze bell for the Hōkō-ji temple in Kyoto. The bell's inscription included the characters "Kokka ankō" (May the state be peaceful and prosperous). Tokugawa scholars argued that separating the characters for "Ie" and "Yasu" constituted a curse against Ieyasu and an act of treason.

The shogunate rejected all diplomatic overtures and apologies from the Toyotomi administration. The incident precipitated the Siege of Osaka, resulting in the eradication of the Toyotomi lineage in 1615.`
  },
  {
    id: "honnoji-incident",
    sources: [ { label: "Wikipedia: Honnō-ji Incident", url: "https://en.wikipedia.org/wiki/Honnō-ji_Incident" } ],
    name: "The Honnō-ji Incident",
    type: "politics",
    year: 1582,
    period: "Azuchi–Momoyama · incident",
    location: {
      name: "Honnō-ji Temple, Kyoto",
      lat: 35.009,
      lon: 135.768
    },
    summary: "The shocking betrayal and assassination of Oda Nobunaga by his trusted general Akechi Mitsuhide, instantly plunging Japan back into chaos.",
    details: `The Honnō-ji Incident occurred on June 21, 1582, when Oda Nobunaga was betrayed and assassinated by his subordinate general, Akechi Mitsuhide.

Nobunaga was resting at the Honnō-ji temple in Kyoto with a minimal guard detachment, en route to reinforce military operations against the Mōri clan. Akechi Mitsuhide, commanding an army of 10,000 troops, diverted his forces to Kyoto and besieged the temple. Facing overwhelming odds, Nobunaga committed seppuku within the burning structure.

The incident abruptly halted Nobunaga's unification campaign and created a power vacuum. Akechi Mitsuhide's subsequent administration was defeated thirteen days later by Toyotomi Hideyoshi at the Battle of Yamazaki.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Honnoj.jpg/960px-Honnoj.jpg",
        caption: "The Honnō-ji, where Oda Nobunaga met his end in 1582. Wikimedia Commons."
      }
    ]
  },
  {
    id: "edo-shogunate",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tokugawa_Ieyasu2.JPG/960px-Tokugawa_Ieyasu2.JPG",
        caption: "Early Edo-period portrait of Tokugawa Ieyasu, founder of the shogunate, Osaka Castle Museum; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Tokugawa shogunate", url: "https://en.wikipedia.org/wiki/Tokugawa_shogunate" } ],
    name: "Establishment of the Tokugawa Shogunate",
    type: "politics",
    year: 1603,
    period: "Edo · governance",
    location: {
      name: "Edo Castle (modern Tokyo)",
      lat: 35.685,
      lon: 139.753
    },
    summary: "Emperor Go-Yōzei formally appointed Tokugawa Ieyasu as Shōgun, marking the official beginning of the Edo Period.",
    details: `On March 24, 1603, Emperor Go-Yōzei appointed Tokugawa Ieyasu to the office of Sei-i Taishōgun. This appointment formalized the establishment of the Tokugawa Shogunate (bakufu) and the commencement of the Edo Period.

To satisfy the prerequisite that a Shōgun must possess Minamoto clan lineage, Tokugawa genealogists fabricated records linking the clan to the Minamoto. Ieyasu centralized administrative operations in Edo (modern Tokyo), fundamentally shifting Japan's political epicenter away from Kyoto.

In 1605, Ieyasu abdicated the shogunal title to his son Hidetada. This action institutionalized the shogunate as a hereditary Tokugawa apparatus rather than an individual military commission.`
  },
  {
    id: "christian-expulsion",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/JapaneseChristiansInPortugueseCostume16-17thCentury.jpg/960px-JapaneseChristiansInPortugueseCostume16-17thCentury.jpg",
        caption: "Japanese Christians in Portuguese dress, painted in the sixteenth or seventeenth century, from the community the 1614 edict set out to suppress; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Kirishitan", url: "https://en.wikipedia.org/wiki/Kirishitan" } ],
    name: "Edict of Expulsion of Missionaries",
    type: "politics",
    year: 1614,
    period: "Edo · religion",
    location: {
      name: "Edo (Nationwide edict)",
      lat: 35.685,
      lon: 139.753
    },
    summary: "Tokugawa Hidetada formally banned Christianity in Japan, ordering all foreign missionaries deported and Japanese Christians to recant.",
    details: `In 1614, the Tokugawa shogunate promulgated the Edict of Expulsion of Missionaries, formally outlawing the practice of Christianity in Japan. The decree was drafted by the Zen monk Konchiin Suden under the authorization of retired Shōgun Tokugawa Ieyasu.

The policy shift was motivated by systemic concerns that European missionary activity served as a precursor to political subversion and territorial colonization. The edict mandated the deportation of all foreign religious personnel, the demolition of Christian infrastructure, and required Japanese adherents to publicly renounce their faith via apostasy tests (fumie).

The decree initiated state-sponsored persecution, forcing domestic Christian communities into clandestine existence (Kakure Kirishitan) and establishing the ideological foundation for Japan's eventual maritime isolation (Sakoku).`
  },
  {
    id: "yoshiteru-assassination",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Ashikaga_Yoshiteru_cropped.jpg/960px-Ashikaga_Yoshiteru_cropped.jpg",
        caption: "Portrait of the shōgun Ashikaga Yoshiteru, painted in 1577, twelve years after his death, National Museum of Japanese History; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Ashikaga Yoshiteru", url: "https://en.wikipedia.org/wiki/Ashikaga_Yoshiteru" } ],
    name: "Assassination of the Sword Master Shōgun",
    type: "politics",
    year: 1565,
    period: "Muromachi · politics",
    location: {
      name: "Nijō Palace, Kyoto",
      lat: 35.014,
      lon: 135.748
    },
    summary: "Ashikaga Yoshiteru, the 13th Ashikaga Shōgun, died defending his palace in a legendary last stand against Miyoshi assassins.",
    details: `In June 1565, Ashikaga Yoshiteru, the 13th Ashikaga Shōgun, was assassinated at Nijō Palace in Kyoto. The assault was orchestrated by the Miyoshi clan and Matsunaga Hisahide to eliminate Yoshiteru's efforts to restore shogunal political authority.

A Miyoshi force of 10,000 men besieged the compound. Yoshiteru, a recognized practitioner of martial arts under Tsukahara Bokuden, engaged the attackers personally. Historical accounts assert he utilized his extensive collection of culturally significant swords during the defense, discarding blades as they degraded. 

Upon being overwhelmed, Yoshiteru committed seppuku. The regicide destabilized regional politics and facilitated Oda Nobunaga's subsequent military intervention in Kyoto.`
  },
  {
    id: "evt-sankin-kotai",
    sources: [ { label: "Wikipedia: Sankin-kōtai", url: "https://en.wikipedia.org/wiki/Sankin-kōtai" } ],
    name: "Sankin-kōtai, the alternate attendance system",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Tokugawa_Seiseiroku_001.jpg", caption: "A daimyō procession, the great journeys imposed by sankin-kōtai. Wikimedia Commons." }
    ],
    type: "politics",
    year: 1635,
    dateLabel: "1635",
    period: "Edo · governance",
    location: {
      name: "Edo (modern Tokyo)",
      lat: 35.6895,
      lon: 139.7531
    },
    summary: "The 'alternate attendance' rule that bound the daimyō to Edo, and quietly bankrupted them into obedience.",
    details: `Formalized in 1635, sankin-kōtai required every daimyō to spend alternating years in Edo and to leave his wife and heir there permanently as hostages. The ruinous cost of maintaining two grand residences and of the great processions to and from the capital drained the lords' treasuries, knitting the realm together with highways and post-towns while keeping potential rivals too poor, and too closely watched, to rebel. It was the quiet machinery of the Tokugawa peace.`
  },
  {
    id: "evt-sakoku",
    sources: [ { label: "Wikipedia: Sakoku", url: "https://en.wikipedia.org/wiki/Sakoku" } ],
    name: "Sakoku, the closing of the country",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Buddhist_statue_with_hidden_cross_on_back.jpg", caption: "A concealed Christian image, sakoku was driven in part by the suppression of Christianity. Wikimedia Commons." }
    ],
    type: "politics",
    year: 1639,
    dateLabel: "1633–1639",
    period: "Edo · seclusion",
    location: {
      name: "Edo (the shogunate's seclusion edicts)",
      lat: 35.6852,
      lon: 139.7528
    },
    summary: "A series of edicts seals Japan off from most of the world for over two centuries.",
    details: `Between 1633 and 1639 the shogunate issued the edicts known as sakoku ('closed country'): the Portuguese were expelled, Japanese were forbidden to leave or return on pain of death, and foreign trade was reduced to a tightly policed trickle, the Dutch confined to the islet of Dejima, the Chinese to Nagasaki, the Koreans via Tsushima. Aimed above all at stamping out Christianity and foreign meddling after the Shimabara revolt, seclusion shaped the Edo period's two and a half centuries of inward-looking peace.`
  },
  {
    id: "evt-meireki-fire",
    sources: [ { label: "Wikipedia: Great Fire of Meireki", url: "https://en.wikipedia.org/wiki/Great_Fire_of_Meireki" } ],
    name: "The Great Meireki Fire",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Meireki_fire.JPG/960px-Meireki_fire.JPG", caption: "The Great Meireki Fire of 1657. Wikimedia Commons." }
    ],
    type: "disaster",
    year: 1657,
    dateLabel: "March 1657",
    period: "Edo · disaster",
    location: {
      name: "Edo (modern Tokyo)",
      lat: 35.701,
      lon: 139.7595
    },
    summary: "The 'Furisode Fire' destroys two-thirds of Edo and kills perhaps 100,000 people.",
    details: `Over three days in March 1657 fire roared through the tinder-dry timber city of Edo, consuming much of the metropolis, including the main keep of Edo Castle, which was never rebuilt, and killing an estimated 100,000 people. Among history's deadliest urban fires, it forced a wholesale redesign of the city: firebreaks, widened avenues, relocated temples and a permanent firefighting corps, shaping the Edo that grew into modern Tokyo.`
  },
  {
    id: "evt-genroku-culture",
    sources: [ { label: "Wikipedia: Genroku", url: "https://en.wikipedia.org/wiki/Genroku" } ],
    name: "The Genroku cultural flowering",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/1696_Genroku_9_%28early_Edo%29_Japanese_Map_of_Kyoto%2C_Japan_-_Geographicus_-_Kyoto-genroku9-1696.jpg/960px-1696_Genroku_9_%28early_Edo%29_Japanese_Map_of_Kyoto%2C_Japan_-_Geographicus_-_Kyoto-genroku9-1696.jpg", caption: "A Genroku-era (1696) map of Kyoto, heart of Kamigata culture. Wikimedia Commons." }
    ],
    type: "culture",
    year: 1700,
    dateLabel: "c. 1688–1704",
    period: "Edo · Genroku culture",
    location: {
      name: "Kyoto / Kamigata (Kyoto–Osaka)",
      lat: 35.0116,
      lon: 135.7681
    },
    summary: "Townsman culture blossoms, kabuki, ukiyo-e, Bashō's haiku and Chikamatsu's puppet plays.",
    details: `The Genroku era saw a brilliant urban culture rise on the wealth of the merchant class, especially in the Kamigata (Kyoto–Osaka) heartland. Matsuo Bashō perfected haiku; Ihara Saikaku chronicled the pleasures of the 'floating world'; Chikamatsu Monzaemon wrote tragedies for the bunraku puppet stage; and kabuki theatre and the ukiyo-e woodblock print came into their own. For the first time commoners, not the court or the warrior elite, set the pace of Japan's artistic life.`
  },
  {
    id: "evt-dojima-rice",
    sources: [ { label: "Wikipedia: Dōjima Rice Exchange", url: "https://en.wikipedia.org/wiki/D%C5%8Djima_Rice_Exchange" } ],
    name: "The Dōjima Rice Exchange",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dojima_komeichiba.jpg/960px-Dojima_komeichiba.jpg", caption: "The Dōjima rice market in Osaka. Wikimedia Commons." }
    ],
    type: "culture",
    year: 1730,
    dateLabel: "1730",
    period: "Edo · economy",
    location: {
      name: "Dōjima, Osaka",
      lat: 34.6938,
      lon: 135.4942
    },
    summary: "Osaka's rice market becomes, in effect, the world's first organized futures exchange.",
    details: `Osaka was 'the nation's kitchen,' and at Dōjima its merchants traded rice not as sacks but as standardized warehouse receipts. From 1730 the shogunate licensed forward contracts on future harvests, making the Dōjima Rice Exchange what many regard as the world's first true futures market. Its traders even developed the 'candlestick' charting of prices that is still used in financial markets the world over.`
  },
  {
    id: "evt-tenmei-famine",
    sources: [ { label: "Wikipedia: Great Tenmei famine", url: "https://en.wikipedia.org/wiki/Great_Tenmei_famine" } ],
    name: "The Tenmei Famine & eruption of Mt Asama",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Great_Tenmei_Famine_Map_Artwork.png", caption: "Artwork depicting the Great Tenmei Famine of the 1780s. Wikimedia Commons." }
    ],
    type: "disaster",
    year: 1783,
    dateLabel: "1782–1788",
    period: "Edo · disaster",
    location: {
      name: "Mount Asama (Gunma / Nagano border)",
      lat: 36.4061,
      lon: 138.523
    },
    summary: "The deadliest famine of the Edo period, deepened by the catastrophic 1783 eruption of Mount Asama.",
    details: `A run of cold, wet summers ruined harvests across northern Japan in the 1780s, and the violent 1783 eruption of Mount Asama, which buried whole villages and veiled the skies in ash, turned hardship into catastrophe. Hundreds of thousands died of starvation and disease, above all in the Tōhoku, and the rice riots and unrest that followed shook the shogunate's authority and spurred the austere Kansei Reforms.`
  },
  {
    id: "evt-kanagawa-treaty",
    sources: [ { label: "Wikipedia: Convention of Kanagawa", url: "https://en.wikipedia.org/wiki/Convention_of_Kanagawa" } ],
    name: "The Convention of Kanagawa",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ratification_of_the_Japan_USA_Treaty_of_Peace_and_Amity_21_February_1855.jpg/960px-Ratification_of_the_Japan_USA_Treaty_of_Peace_and_Amity_21_February_1855.jpg", caption: "Ratification of the Japan–US Treaty of Peace and Amity, 1855. Wikimedia Commons." }
    ],
    type: "contact",
    year: 1854,
    dateLabel: "March 31, 1854",
    period: "Bakumatsu · foreign contact",
    location: {
      name: "Kanagawa / Yokohama",
      lat: 35.4548,
      lon: 139.641
    },
    summary: "Forced open by Perry's return, Japan signs its first treaty with a Western power, ending two centuries of seclusion.",
    details: `When Commodore Matthew Perry returned in 1854 with a larger fleet, the shogunate yielded. The Convention of Kanagawa opened the ports of Shimoda and Hakodate to American ships and shattered the sakoku policy. A cascade of further 'unequal treaties' followed, granting foreigners extraterritoriality and fixed tariffs, humiliations that inflamed the anti-shogunate movement and set Japan on the road to the Meiji Restoration.`
  },
  {
    id: "evt-meiji-restoration",
    sources: [ { label: "Wikipedia: Meiji Restoration", url: "https://en.wikipedia.org/wiki/Meiji_Restoration" } ],
    name: "The Meiji Restoration",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Emperor_Meiji_by_Takahashi_Yuichi.jpg/960px-Emperor_Meiji_by_Takahashi_Yuichi.jpg", caption: "Emperor Meiji, by Takahashi Yuichi. Wikimedia Commons." }
    ],
    type: "politics",
    year: 1868,
    dateLabel: "January 3, 1868 (Keiō 3/12/9)",
    period: "Bakumatsu · Meiji Restoration",
    location: {
      name: "Kyoto Imperial Palace",
      lat: 35.0254,
      lon: 135.7621
    },
    summary: "Imperial rule is 'restored', ending seven centuries of samurai government and launching Japan's headlong modernization.",
    details: `In January 1868 the backers of the young Emperor Meiji proclaimed the 'restoration of imperial rule' (ōsei fukkō), abolishing the Tokugawa shogunate. The Boshin War that followed crushed the last shogunal forces, and the new government, guided by the Charter Oath, swept away the feudal order: the domains were abolished, the samurai class dissolved, the capital moved to Tokyo, and Japan launched a breakneck drive of industrial and military modernization that within a generation made it a world power.`
  },
  {
    id: "evt-buddhism",
    sources: [ { label: "Wikipedia: Buddhism in Japan", url: "https://en.wikipedia.org/wiki/Buddhism_in_Japan" } ],
    name: "The Introduction of Buddhism",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Asuka-dera%2C_sanmon.jpg/960px-Asuka-dera%2C_sanmon.jpg", caption: "The gate of Asuka-dera, Japan's first Buddhist temple. Wikimedia Commons." }
    ],
    type: "culture",
    year: 552,
    dateLabel: "traditionally 552 (some sources 538)",
    period: "Asuka–Nara · religion",
    location: { name: "The Yamato court at Asuka (modern Nara Prefecture)", lat: 34.4730, lon: 135.8200 },
    summary: "The Baekje court sends a gilt-bronze Buddha and sutras to the Yamato court, the official arrival of Buddhism in Japan.",
    details: `In the mid-6th century the king of Baekje, a Korean kingdom allied to Yamato, sent the Japanese court a gilt-bronze image of the Buddha together with sutras and a letter praising the new faith. Traditionally dated to 552 (some texts say 538), this gift marks the official arrival of Buddhism in Japan.

The religion split the court: the Soga clan embraced it while the Mononobe and Nakatomi defended the native kami. The Soga's eventual victory opened the way for Buddhism to become a pillar of the state, inspiring the temples, art, and learning of the Asuka and Nara ages, from Hōryū-ji to the Great Buddha of Tōdai-ji.`
  },
  {
    id: "evt-taika",
    sources: [ { label: "Wikipedia: Taika Reform", url: "https://en.wikipedia.org/wiki/Taika_Reform" } ],
    name: "The Taika Reform",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Irukaansatsuzu.jpg/960px-Irukaansatsuzu.jpg", caption: "The assassination of Soga no Iruka (the Isshi Incident), which opened the Taika Reform. Wikimedia Commons." }
    ],
    type: "politics",
    year: 645,
    dateLabel: "645 (Taika 1)",
    period: "Asuka–Nara · reform",
    location: { name: "The Asuka court (modern Nara Prefecture)", lat: 34.4795, lon: 135.8190 },
    summary: "A palace coup destroys the over-mighty Soga clan and launches the reforms that forge a centralized imperial state on the Chinese model.",
    details: `In 645 Prince Naka-no-Ōe and Nakatomi no Kamatari, founder of the Fujiwara, struck down Soga no Iruka in the empress's own presence (the Isshi Incident), breaking the Soga grip on the throne.

The coup ushered in the Taika ('Great Reform') edicts: land and people were declared the sovereign's, provinces and a census were organized, and a Tang-style bureaucracy imposed. Over the following decades these reforms, and the ritsuryō law codes that grew from them, turned Japan from a loose confederation of clans into a centralized empire ruled from a Chinese-style capital.`
  },
  {
    id: "evt-taiho",
    sources: [ { label: "Wikipedia: Taihō Code", url: "https://en.wikipedia.org/wiki/Taih%C5%8D_Code" } ],
    name: "The Taihō Code",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Japan_prov_map701.png", caption: "A map of Japan's provinces in 701, the administrative order the Taihō Code created. Wikimedia Commons." }
    ],
    type: "politics",
    year: 701,
    dateLabel: "701 (Taihō 1)",
    period: "Asuka–Nara · law",
    location: { name: "Fujiwara-kyō, the imperial capital (modern Kashihara, Nara)", lat: 34.5020, lon: 135.8070 },
    summary: "Japan's first complete law code locks in the centralized ritsuryō state.",
    details: `Promulgated in 701 and named for the Taihō era, this was Japan's first complete and lasting system of administrative and penal law (ritsuryō), modelled on Tang China's. It defined the ministries of central government, a provincial administration, a hierarchy of court ranks, and the land-allotment and tax system that supported the imperial state.

Drafted under Prince Osakabe and Fujiwara no Fuhito, the Taihō Code capped the reforms begun in 645 and gave the Nara and early Heian state its legal skeleton, the framework within which the court would govern for centuries.`
  },
  {
    id: "evt-chronicles",
    sources: [ { label: "Wikipedia: Kojiki", url: "https://en.wikipedia.org/wiki/Kojiki" } ],
    name: "The Kojiki & Nihon Shoki",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Nihonshoki_tanaka_version.jpg/960px-Nihonshoki_tanaka_version.jpg", caption: "A manuscript page of the Nihon Shoki. Wikimedia Commons." }
    ],
    type: "culture",
    year: 712,
    dateLabel: "712 & 720",
    period: "Asuka–Nara · culture",
    location: { name: "Heijō-kyō, the capital at Nara", lat: 34.6900, lon: 135.8050 },
    summary: "Japan's first written histories, and the founding myths of the imperial line, are compiled at the Nara court.",
    details: `At the throne's command the Nara court produced Japan's earliest surviving books: the Kojiki ('Record of Ancient Matters,' 712) and the Nihon Shoki ('Chronicles of Japan,' 720). Weaving myth, legend, and dynastic record, they trace the imperial house's descent from the sun goddess Amaterasu down to the legendary first emperor, Jimmu.

Far more than histories, they were charters of legitimacy, fixing the origin myths that justified imperial rule and that still anchor Shinto today. With the poetry anthology Man'yōshū, they mark the birth of written Japanese literature.`
  },
  {
    id: "evt-genji",
    sources: [ { label: "Wikipedia: The Tale of Genji", url: "https://en.wikipedia.org/wiki/The_Tale_of_Genji" } ],
    name: "The Tale of Genji",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Genji_emaki_01003_002.jpg/960px-Genji_emaki_01003_002.jpg", caption: "An illustration from the Genji Monogatari Emaki, the illustrated Tale of Genji scroll. Wikimedia Commons." }
    ],
    type: "culture",
    year: 1008,
    dateLabel: "c. 1008",
    period: "Heian · literature",
    location: { name: "Heian-kyō, the court at Kyoto", lat: 35.0270, lon: 135.7650 },
    summary: "Murasaki Shikibu writes what is often called the world's first novel, the supreme achievement of Heian court culture.",
    details: `Around 1008 the lady-in-waiting Murasaki Shikibu completed the Genji Monogatari ('The Tale of Genji') at the glittering Heian court in Kyoto. Following the loves and sorrows of the 'Shining Prince' Genji across more than fifty chapters, it is a work of extraordinary psychological depth, often called the world's first novel.

Written in the vernacular kana script favoured by court women, it crowns the refined aesthetic of the mid-Heian age, an era when the Fujiwara regents ruled and the court measured life by beauty, poetry, and an exquisite sensitivity to the passing of things (mono no aware).`
  },
  {
    id: "evt-fujiwara-regency",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Fujiwara_no_Yoshifusa.jpg/960px-Fujiwara_no_Yoshifusa.jpg",
        caption: "Fujiwara no Yoshifusa, the first Fujiwara regent, in an imagined portrait drawn by Kikuchi Yōsai and published in 1903; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Fujiwara no Yoshifusa", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Yoshifusa" } ],
    name: "The Fujiwara Regency",
    type: "politics",
    year: 858,
    dateLabel: "from 858",
    period: "Heian · regency",
    location: { name: "The Heian court, Kyoto", lat: 35.0254, lon: 135.7621 },
    summary: "Fujiwara no Yoshifusa becomes regent for a child emperor, beginning the line of Fujiwara regents who would rule Japan from behind the throne for two centuries.",
    details: `In 858 Fujiwara no Yoshifusa enthroned his infant grandson as Emperor Seiwa and governed as sesshō (regent), the first regent not himself of imperial blood. The Fujiwara perfected rule through marriage politics: wedding their daughters to emperors, enthroning the resulting child-sovereigns, and governing as regent or chancellor (kampaku).

Their power reached its dazzling height under Fujiwara no Michinaga (c. 1016), whose glittering court is the very world of the Tale of Genji, an age when the aristocracy measured life by poetry, rank, and exquisite taste.`
  },
  {
    id: "evt-jogan-quake",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tagajo_Sue-no-Matsuyama_01.JPG/960px-Tagajo_Sue-no-Matsuyama_01.JPG",
        caption: "The pines of Sue-no-Matsuyama at Tagajō in Miyagi, which classical poetry took as the rise the waves never crossed, a saying long connected with the Jōgan tsunami; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: 869 Jōgan earthquake", url: "https://en.wikipedia.org/wiki/869_J%C5%8Dgan_earthquake" } ],
    name: "The Jōgan Sanriku Earthquake",
    type: "disaster",
    year: 869,
    dateLabel: "869 (Jōgan 11)",
    period: "Heian · disaster",
    location: { name: "Off the Sanriku coast / the Sendai plain, Mutsu", lat: 38.50, lon: 142.10 },
    summary: "A massive earthquake and tsunami devastate the Sanriku coast of Tōhoku, leaving deposits that warned, unheeded, of 2011.",
    details: `In 869 a great earthquake struck off the Sanriku coast, and a tsunami swept far inland across the Sendai plain, drowning perhaps a thousand people. The disaster was recorded in the court chronicle Nihon Sandai Jitsuroku.

Centuries later, geologists traced the Jōgan tsunami's sand deposits and realised the coast had been struck by giant waves before, evidence of a recurring danger that was tragically echoed by the 2011 Tōhoku earthquake and tsunami.`
  },
  {
    id: "evt-tang-embassies-end",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%E6%9D%9F%E5%B8%AF%E5%A4%A9%E7%A5%9E%E5%83%8F.png/960px-%E6%9D%9F%E5%B8%AF%E5%A4%A9%E7%A5%9E%E5%83%8F.png",
        caption: "Sugawara no Michizane, who advised breaking off the embassies, shown as the deity Tenjin in court dress; a fifteenth-century hanging scroll at Egara Tenjin Shrine, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Japanese missions to Tang China", url: "https://en.wikipedia.org/wiki/Japanese_missions_to_Tang_China" } ],
    name: "The End of the Tang Embassies",
    type: "contact",
    year: 894,
    dateLabel: "894",
    period: "Heian · foreign relations",
    location: { name: "The imperial court, Kyoto", lat: 35.0116, lon: 135.7681 },
    summary: "On Sugawara no Michizane's advice, Japan halts its official embassies to China, turning inward as a distinctly Japanese culture flowers.",
    details: `For over two centuries Japan had sent embassies (kentōshi) to Tang China to import its laws, script, and Buddhism. In 894, with the Tang dynasty in decline and the voyages perilous, the scholar-official Sugawara no Michizane advised the court to discontinue them, and the missions ceased.

Cut loose from the Chinese model, the Heian court turned inward, and the next century saw a native culture bloom: the kana syllabary, vernacular masterpieces like the Tale of Genji and the Pillow Book, and the refined aesthetics of the court.`
  },
  {
    id: "evt-kamakura-buddhism",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Takanobu-no-miei.jpg",
        caption: "Portrait of Hōnen, founder of the Pure Land school, attributed to Fujiwara no Takanobu; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Buddhism in Japan", url: "https://en.wikipedia.org/wiki/Buddhism_in_Japan" } ],
    name: "The New Kamakura Buddhism",
    type: "culture",
    year: 1200,
    dateLabel: "c. 1175–1253",
    period: "Kamakura · religion",
    location: { name: "Kamakura, Sagami Province", lat: 35.3192, lon: 139.5466 },
    summary: "A wave of charismatic teachers brings Buddhism to the common people, Pure Land devotion, Nichiren's Lotus, and Zen.",
    details: `The Kamakura age saw Buddhism break out of the aristocratic monasteries and reach ordinary people through simple, accessible paths to salvation. Hōnen and his disciple Shinran preached faith in Amida Buddha (Pure Land / Jōdo Shinshū); Nichiren taught single-minded devotion to the Lotus Sutra.

At the same time Eisai and Dōgen brought Zen, Rinzai and Sōtō, from China, its discipline and directness perfectly suited to the warrior class who now ruled. These movements reshaped Japanese religion permanently, and Zen would go on to shape the arts of tea, ink, and garden.`
  },
  {
    id: "evt-goseibai",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/WUL-wa03_03332_%E8%B2%9E%E6%B0%B8%E5%BC%8F%E7%9B%AE%E4%B8%80%E5%90%8D%E5%BE%A1%E6%88%90%E6%95%97%E5%BC%8F%E7%9B%AE.pdf/page4-960px-WUL-wa03_03332_%E8%B2%9E%E6%B0%B8%E5%BC%8F%E7%9B%AE%E4%B8%80%E5%90%8D%E5%BE%A1%E6%88%90%E6%95%97%E5%BC%8F%E7%9B%AE.pdf.jpg",
        caption: "An opening from a manuscript copy of the Goseibai Shikimoku, also called the Jōei Shikimoku, with red reading marks; Waseda University Library, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Goseibai Shikimoku", url: "https://en.wikipedia.org/wiki/Goseibai_Shikimoku" } ],
    name: "The Goseibai Shikimoku",
    type: "politics",
    year: 1232,
    dateLabel: "1232 (Jōei 1)",
    period: "Kamakura · law",
    location: { name: "The Kamakura shogunate, Sagami Province", lat: 35.3219, lon: 139.5503 },
    summary: "The Kamakura shogunate issues the first legal code written by and for the warrior class, plain samurai custom, not courtly law.",
    details: `Issued in 1232 under the regent Hōjō Yasutoki, the Goseibai Shikimoku (Jōei Code) was the first body of law written by and for warriors. In 51 plain-spoken articles it laid out the duties of vassals, the rules of landholding and inheritance, and the procedures of the shogunate's courts.

Rooted in practical samurai custom rather than the Chinese-derived law of the imperial state, it proved so durable that it remained the foundation of warrior law right through to the Edo period.`
  },
  {
    id: "evt-kamakura-daibutsu",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/230128_Kamakura_Daibutsu_Japan04s3.jpg/960px-230128_Kamakura_Daibutsu_Japan04s3.jpg",
        caption: "The Great Buddha of Kamakura at Kōtoku-in, cast in bronze in the thirteenth century and open to the sky since its hall was lost; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Kōtoku-in", url: "https://en.wikipedia.org/wiki/K%C5%8Dtoku-in" } ],
    name: "The Great Buddha of Kamakura",
    type: "culture",
    year: 1252,
    dateLabel: "from 1252",
    period: "Kamakura · culture",
    location: { name: "Kōtoku-in, Kamakura", lat: 35.3169, lon: 139.5358 },
    summary: "The colossal bronze Amida Buddha is cast at Kamakura, an enduring icon of the age's popular Pure Land faith.",
    details: `Begun around 1252, the Great Buddha (Daibutsu) of Kōtoku-in is a bronze image of Amida Buddha over 13 metres tall, embodying the Pure Land devotion that swept Kamakura-period Japan.

The great hall that once enclosed it was destroyed by storms and finally washed away by a tsunami in 1498; the Buddha has sat serenely in the open air ever since, weathered, green, and one of Japan's most beloved monuments.`
  },
  {
    id: "evt-kenmu",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Emperor_Godaigo_%28cropped%29.jpg",
        caption: "Portrait of Emperor Go-Daigo, who briefly restored direct imperial rule, painted in 1339 and held at Shōjōkō-ji; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Kenmu Restoration", url: "https://en.wikipedia.org/wiki/Kenmu_Restoration" } ],
    name: "The Kenmu Restoration",
    type: "politics",
    year: 1333,
    dateLabel: "1333–1336",
    period: "Muromachi · restoration",
    location: { name: "The court of Emperor Go-Daigo, Kyoto", lat: 35.0254, lon: 135.7621 },
    summary: "Emperor Go-Daigo destroys the Kamakura shogunate and tries to restore direct imperial rule, a bold experiment that collapses in three years.",
    details: `Having toppled the Kamakura shogunate in 1333 with warriors such as Ashikaga Takauji and Nitta Yoshisada, Emperor Go-Daigo attempted to govern directly, without a shogun, the Kenmu Restoration.

But his court-centred rule alienated the very samurai who had won his throne; rewards favoured nobles over warriors. Within three years Takauji turned against him, drove him from Kyoto, and enthroned a rival emperor, splitting Japan into the Northern and Southern Courts and opening the Nanboku-chō wars.`
  },
  {
    id: "evt-muromachi-founded",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ashikaga_Takauji_J%C5%8Ddo-ji.jpg/960px-Ashikaga_Takauji_J%C5%8Ddo-ji.jpg",
        caption: "Portrait of Ashikaga Takauji, first shōgun of the Muromachi line, a fourteenth or fifteenth century painting at Jōdo-ji in Onomichi; Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Ashikaga shogunate", url: "https://en.wikipedia.org/wiki/Ashikaga_shogunate" } ],
    name: "The Muromachi Shogunate",
    type: "politics",
    year: 1338,
    dateLabel: "1338",
    period: "Muromachi · governance",
    location: { name: "The Ashikaga shogunate, Kyoto", lat: 35.0299, lon: 135.7553 },
    summary: "Ashikaga Takauji is named shogun and founds the Muromachi shogunate, basing warrior government in Kyoto, entwined with the imperial court.",
    details: `In 1338 Ashikaga Takauji took the title of shogun and established the Ashikaga shogunate, later named for the Muromachi district of Kyoto where his heirs built their palace. Unlike the Kamakura regime, it sat in the capital itself, binding warrior rule to court culture.

Its grip on the provincial military governors (shugo) was always precarious, and it presided over the long Northern–Southern Court schism, yet under it the brilliant Kitayama and Higashiyama cultures would flower.`
  },
  {
    id: "evt-courts-reunify",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Emperor_Go-Komatsu.jpg/960px-Emperor_Go-Komatsu.jpg",
        caption: "Portrait of Emperor Go-Komatsu, in whose reign the two courts were reunited in 1392; a mid-Edo painting, Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Nanboku-chō period", url: "https://en.wikipedia.org/wiki/Nanboku-ch%C5%8D_period" } ],
    name: "Reunification of the Courts",
    type: "politics",
    year: 1392,
    dateLabel: "1392",
    period: "Muromachi · politics",
    location: { name: "Kyoto", lat: 35.0211, lon: 135.7559 },
    summary: "After 56 years, the rival Northern and Southern imperial courts are reunited under the shogun Ashikaga Yoshimitsu.",
    details: `The schism between the Northern Court (backed by the Ashikaga in Kyoto) and the Southern Court (Go-Daigo's line, exiled at Yoshino) had divided Japan since 1336. In 1392 the shogun Ashikaga Yoshimitsu negotiated the Southern emperor's return and the handover of the imperial regalia, on a promise that the two lines would alternate the throne.

The promise was soon broken, but the reunification marked the height of Ashikaga power, and ushered in the shogunate's cultural golden age.`
  },
  {
    id: "evt-kinkakuji",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kinkaku-ji_2015.JPG/960px-Kinkaku-ji_2015.JPG",
        caption: "The Golden Pavilion of Kinkaku-ji, Ashikaga Yoshimitsu's retirement villa and the emblem of Kitayama culture; the present building is a 1955 rebuilding. Wikimedia Commons."
      }
    ],
    sources: [ { label: "Wikipedia: Kinkaku-ji", url: "https://en.wikipedia.org/wiki/Kinkaku-ji" } ],
    name: "Kinkaku-ji and the Kitayama Culture",
    type: "culture",
    year: 1397,
    dateLabel: "1397",
    period: "Muromachi · culture",
    location: { name: "Kinkaku-ji, Kyoto", lat: 35.0394, lon: 135.7292 },
    summary: "Yoshimitsu builds the Golden Pavilion, centrepiece of a glittering Muromachi culture that also perfected the Noh theatre.",
    details: `At the height of his power Ashikaga Yoshimitsu built the gold-leafed Kinkaku-ji (Golden Pavilion) at Kitayama in 1397, a retirement villa of almost imperial splendour. It gave its name to the Kitayama culture, a fusion of warrior, courtly, and Zen taste, enriched by renewed trade with Ming China.

Under Yoshimitsu's patronage the actor-playwright Zeami perfected the Noh theatre, while ink painting, linked verse (renga), and the tea gathering took the refined forms that still define Japanese art.`
  },

  // ---- Early-period events added 2026-08-01, each verified against its source
  // article for date (lunar year-end checked), coordinates and image. ----
  {
    id: "evt-seventeen-articles",
    sources: [ { label: "Wikipedia: Seventeen-article constitution", url: "https://en.wikipedia.org/wiki/Seventeen-article_constitution" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Portrait_of_Prince_Sh%C5%8Dtoku_and_Two_Princes.jpg/960px-Portrait_of_Prince_Sh%C5%8Dtoku_and_Two_Princes.jpg",
        caption: "A painting of the seventh or eighth century, traditionally identified as Prince Shōtoku with two princes, from the Imperial Household collection. Wikimedia Commons."
      }
    ],
    name: "The Seventeen-Article Constitution",
    type: "politics",
    year: 604,
    dateLabel: "604 (Suiko 12), 4th month 3rd day",
    period: "Asuka–Nara · law",
    location: { name: "Oharida Palace, the Suiko court; presumed site by Ikazuchi Hill, Asuka, Nara", lat: 34.4836, lon: 135.8156 },
    summary: "The Nihon Shoki credits Prince Shōtoku with Japan's first written statement of governing principles, seventeen Confucian and Buddhist maxims on how officials should serve the throne.",
    details: `The Nihon Shoki records that on the third day of the fourth month of Suiko 12, which converts to 6 May 604 on the Julian calendar, the crown prince himself composed a constitution of seventeen articles. That prince is Shōtoku, and the court sat at Oharida Palace in Asuka, the palace Empress Suiko had moved into the year before.

Despite the name it is not a constitution in the modern sense. It is a set of moral instructions to officials, built on Confucian ideas of duty and hierarchy with Buddhist devotion mixed in. Article 1 calls for harmony, Article 2 for reverence toward the Three Treasures of Buddhism, Article 3 for obedience to imperial commands. With the Twelve Cap Ranks of 603 it belongs to the reform drive Suiko's court began after the first embassy to Sui China came home with a poor report on Japanese government.

Whether Shōtoku wrote it is disputed. In 1930 Tsuda Sōkichi argued that terms such as kokushi, provincial governor, belong to a later age and that the text was composed when the Nihon Shoki was compiled around 720. Sakamoto Tarō defended the traditional attribution in 1979; Mori Hiromichi in 1999 found its Chinese prose too Japanese for the seventh century; Yoshikawa Shinji in 2011 judged the substance a good fit for Suiko's court even if later editors polished the wording. No copy older than the Nihon Shoki survives.`
  },
  {
    id: "evt-sui-embassy-imoko",
    sources: [ { label: "Wikipedia: Japanese missions to Imperial China", url: "https://en.wikipedia.org/wiki/Japanese_missions_to_Imperial_China" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ono_no_Imoko.jpg/960px-Ono_no_Imoko.jpg",
        caption: "Ono no Imoko, the envoy of 607, in a later Japanese painting; Wikimedia Commons."
      }
    ],
    name: "Ono no Imoko's Embassy to Sui China",
    type: "contact",
    year: 607,
    dateLabel: "607 (Suiko 15)",
    period: "Asuka–Nara · foreign relations",
    location: { name: "Sumiyoshi-tsu, the embassy port, Osaka", lat: 34.6124, lon: 135.4938 },
    summary: "The court of Empress Suiko sent Ono no Imoko as ambassador to Sui China carrying a letter that addressed the Chinese emperor as an equal, opening the age of official embassies that brought law, writing and Buddhism to Japan.",
    details: `In the seventh month of 607, early autumn on the Japanese calendar, the court of Empress Suiko sent the official Ono no Imoko as ambassador to the Sui emperor, with the interpreter Kuratsukuri no Fukuri. Missions like this set out from Sumiyoshi-tsu, the harbour on the old shoreline beside Sumiyoshi Taisha in what is now Osaka, where envoys prayed to the sea gods before working down the Inland Sea to Kyushu and crossing to the continent.

Imoko carried a letter, usually credited to Prince Shōtoku, that called Japan "the land of the rising sun" and China the land of the setting sun, and that gave the title Son of Heaven to both rulers. Emperor Yang took offence, since Chinese thinking allowed only one Son of Heaven, but he still sent his own envoy Pei Shiqing back to Japan with Imoko in 608. Imoko sailed again that autumn with eight students and monks, several of whom stayed in China for decades and came home to shape Japan's reforms.

A Japanese mission of 600 appears in the Chinese Book of Sui, so 607 is the first embassy recorded on both sides and the first known to carry a formal letter. The line of embassies it opened ran on to Tang China until the court broke them off in 894.`
  },
  {
    id: "evt-fujiwara-kyo",
    sources: [ { label: "Wikipedia: Fujiwara-kyō", url: "https://en.wikipedia.org/wiki/Fujiwara-ky%C5%8D" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/210401_One-thousandth_scale_model_of_Aramashinomiyako.jpg/960px-210401_One-thousandth_scale_model_of_Aramashinomiyako.jpg",
        caption: "A modern 1:1000 scale model of Fujiwara-kyō, displayed in Kashihara City's exhibition room at the Fujiwara capital site. Wikimedia Commons."
      }
    ],
    name: "Fujiwara-kyō, Japan's first grid capital",
    type: "capital",
    year: 694,
    dateLabel: "694 (Jitō 8, 12th month, 6th day; 27 December 694, Julian)",
    period: "Asuka–Nara · capital",
    location: { name: "Fujiwara Palace site (藤原宮跡), Kashihara, Nara", lat: 34.50222, lon: 135.80722 },
    summary: "In the last days of 694 Empress Jitō moved her court into Fujiwara-kyō, the first Japanese capital laid out on a Chinese-style square grid of streets. It served as capital for sixteen years and for three sovereigns, breaking the old habit of building a new palace at every accession.",
    details: `The Nihon Shoki records the court moving into the Fujiwara Palace on the sixth day of the twelfth lunar month of Jitō 8. That day falls on 27 December 694 in the Julian calendar, right at the end of the Western year. Building had begun under Emperor Tenmu around 676, stopped when he died, and resumed under Empress Jitō in 690. The finished city ran about 5.3 km east to west and 4.8 km north to south and covered at least 25 square kilometres, a larger area than either Heijō-kyō or Heian-kyō would later cover.

Two things made it new. Earlier rulers had usually raised a fresh palace at each accession, but Fujiwara-kyō was kept, and three sovereigns ruled from it: Jitō, Monmu and Genmei. The Taihō Code was issued here in 701. Its walled palace of roughly one square kilometre stood at the centre of the grid rather than at the northern edge as in the later capitals, a plan closer to the Chinese classic the Rites of Zhou than to Chang'an itself, and its halls were the first in Japan set on stone foundations and roofed with Chinese-style tiles. The court left for Heijō-kyō in 710. Excavation has recovered some 1,200 inscribed wooden slips, or mokkan, and most of the site is protected as a Special National Historic Site.`
  },
  {
    id: "evt-ganjin-arrival",
    sources: [ { label: "Japanese Wikipedia: 鑑真", url: "https://ja.wikipedia.org/wiki/鑑真" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ganjin_wajyo_portrait.JPG",
        caption: "The dry lacquer portrait statue of Ganjin at Tōshōdai-ji in Nara, made soon after his death in 763. Wikimedia Commons."
      }
    ],
    name: "Ganjin (Jianzhen) reaches Japan",
    type: "contact",
    year: 754,
    dateLabel: "17 January 754 (Tenpyō-shōhō 5, 12th month, 20th day)",
    period: "Asuka–Nara · religion",
    location: { name: "Akime bay, Satsuma (modern Bōnotsu, Minamisatsuma, Kagoshima Prefecture)", lat: 31.36103, lon: 130.19914 },
    summary: "After five failed crossings and twelve years of trying, the blind Chinese master of monastic discipline Ganjin came ashore in Satsuma. He brought Japan its first proper ordination platform, so that monks could at last be ordained in a recognised lineage.",
    details: `Nara Japan had no proper way to ordain monks. The rules required ten qualified monks to confer the full precepts on a formal platform, and Japan had neither, so men could simply declare themselves monks and escape tax and labour service. In 742 two Japanese monks studying in Tang China asked Ganjin, abbot of Daming-si at Yangzhou and a celebrated master of monastic discipline, to put this right.

Five crossings failed over eleven years, undone by storms, informers and officials; one voyage blew him to Hainan, and he lost his sight before he got back to Yangzhou. On the sixth attempt he sailed with a returning Japanese embassy, and his ship was driven ashore at Akime, a small bay on the Satsuma coast.

He reached Nara that spring, raised an ordination platform before the Great Buddha at Tōdai-ji and ordained some four hundred people, the retired emperor Shōmu among them. In 759 he founded Tōshōdai-ji on land granted in western Nara, and died there in 763.

Watch the date. The landing is recorded as the twentieth day of the twelfth month of Tenpyō-shōhō 5, an era year normally written 753. The old calendar was lunar, and that twelfth month had already run past the Western New Year, so the real day was 17 January 754.`
  },
  {
    id: "evt-usa-hachiman-oracle",
    sources: [ { label: "Wikipedia: Empress Kōken (Dōkyō affair)", url: "https://en.wikipedia.org/wiki/Empress_K%C5%8Dken" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Usa_Shrine_Nanchu_Romon.JPG/960px-Usa_Shrine_Nanchu_Romon.JPG",
        caption: "The Minami Chūrōmon gate at Usa Jingū in Ōita, the shrine that gave both oracles of 769; the present gate is a much later rebuilding. Wikimedia Commons."
      }
    ],
    name: "The Usa Hachiman Oracle",
    type: "politics",
    year: 769,
    dateLabel: "769 (Jingo-keiun 3)",
    period: "Asuka–Nara · succession",
    location: { name: "Usa Jingū, Buzen Province (modern Usa, Ōita)", lat: 33.5261, lon: 131.3747 },
    summary: "A shrine oracle from Usa announces that the monk Dōkyō should be made emperor. The courtier Wake no Kiyomaro is sent to check it and comes back with the opposite message, that the throne belongs only to the imperial line.",
    details: `By 769 the monk Dōkyō stood higher than any commoner in Japanese history. Empress Shōtoku, whose illness he had treated, had made him chancellor and then hōō, 'Buddhist king', with a palace beside her own.

That year an official of the Dazaifu, the government seat in Kyushu, reported an oracle from the Hachiman shrine at Usa: make Dōkyō emperor and the realm will be at peace. The empress sent the courtier Wake no Kiyomaro to Usa to hear the god again. On the eleventh day of the seventh month he received a very different answer, recorded in the Shoku Nihongi: since the founding of the state, lord and subject have been fixed, and never has a subject been made lord; the throne must go to one of the imperial line. Kiyomaro reported it, was stripped of his office, given a deliberately insulting new name and banished to Ōsumi; his sister was defrocked and exiled as well.

Dōkyō was never enthroned. When Shōtoku died in 770 he was packed off to a provincial temple and Kiyomaro was recalled. Historians still argue over who really wanted the first oracle, Dōkyō or the childless empress herself, but the rule Kiyomaro brought back was quoted for more than a thousand years afterwards.`
  },
  {
    id: "evt-nagaoka-kyo",
    sources: [ { label: "Wikipedia: Nagaoka-kyō", url: "https://en.wikipedia.org/wiki/Nagaoka-ky%C5%8D" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nagaokakyo_Chodoin.jpg/960px-Nagaokakyo_Chodoin.jpg",
        caption: "A scale reconstruction model of the Chōdō-in, the state halls of the Nagaoka palace, in the Mukō City Cultural Museum. Wikimedia Commons."
      }
    ],
    name: "Nagaoka-kyō, the capital that failed",
    type: "capital",
    year: 784,
    dateLabel: "784 (Enryaku 3, 11th month, 11th day)",
    period: "Asuka–Nara · capital",
    location: { name: "Nagaoka Palace site, Kaidechō, Mukō (Kyoto Prefecture)", lat: 34.9435, lon: 135.7032 },
    summary: "In 784 Emperor Kanmu walked away from Nara and built a brand new capital at Nagaoka, then abandoned that too ten years later after an assassination, a dead prince's vengeful ghost and floods. The move to Kyoto in 794 was the second try, not the first.",
    details: `In the eleventh month of 784 Emperor Kanmu moved his court out of Nara to a new city at Nagaoka, on the plain where three great rivers, the Katsura and the Uji among them, join to form the Yodo. Boats could reach the city directly, spring water flushed its drains, and the palace stood on ground raised above the streets, all things flat, landlocked Heijō-kyō lacked. The site also put the emperor at a distance from the great Nara temples, close to the wealthy immigrant families of Yamashiro, and in the home district of his chief adviser, Fujiwara no Tanetsugu.

Politically it collapsed. Tanetsugu, the official in charge of building the palace, was assassinated in 785, and Kanmu's own brother and heir, Prince Sawara, was accused, stripped of his rank and sent into exile; he died on the road. Famine, epidemic and a run of deaths in the imperial family followed, court diviners blamed Sawara's vengeful spirit, and then floods tore through the city. Kanmu gave up and moved again in 794, to Heian-kyō, modern Kyoto.

Nagaoka was so thoroughly forgotten that its palace was called a phantom capital until the site was rediscovered in 1954. Excavation has since shown a real, largely finished city, with halls brought in from the older palace at Naniwa.`
  },
  {
    id: "evt-sugawara-michizane-exile",
    sources: [ { label: "Wikipedia: Sugawara no Michizane", url: "https://en.wikipedia.org/wiki/Sugawara_no_Michizane" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sugawara_Michizane_in_Exile_by_Kobayashi_Kiyochika.jpg/960px-Sugawara_Michizane_in_Exile_by_Kobayashi_Kiyochika.jpg",
        caption: "Sugawara no Michizane in exile, a woodblock print triptych by Kobayashi Kiyochika, 1884. Wikimedia Commons."
      }
    ],
    name: "Exile of Sugawara no Michizane to Dazaifu",
    type: "politics",
    year: 901,
    dateLabel: "16 February 901 (Shōtai 4, 1st month, 25th day)",
    period: "Heian · regency",
    location: { name: "Dazaifu government headquarters, Chikuzen Province (Dazaifu, Fukuoka Prefecture)", lat: 33.514542, lon: 130.515144 },
    summary: "In the first month of 901 the imperial court stripped Sugawara no Michizane, a scholar who had risen to Minister of the Right, of his rank and packed him off to the Dazaifu in Kyushu. He died there in 903, and the disasters that followed turned him into the dreaded spirit Tenjin.",
    details: `Michizane was a professor's son who rose by learning rather than birth. Emperor Uda promoted him to offset the Fujiwara, and by 899 he was Minister of the Right, serving beside the Fujiwara head Tokihira as Minister of the Left. Once Uda stepped down, that protection thinned. Tokihira told the young Emperor Daigo that Michizane meant to put his own son-in-law, Prince Tokiyo, on the throne. On the 25th day of the 1st month of Shōtai 4 an imperial decree demoted Michizane to provisional Governor-General of the Dazaifu, the regional government seat for Kyushu. It was exile in all but name; his sons were scattered to the provinces as well. He was kept under guard, wrote his bleakest poems there, and died in 903.

What followed mattered as much as the fall. Tokihira died young in 909, plague and drought came, and in 930 lightning struck the palace hall of Seiryōden and killed two courtiers in front of Emperor Daigo, who died months later. The court read all of it as the revenge of Michizane's angry spirit. It restored his rank in 923, and in 947 built him a shrine at Kitano in Kyoto. At Dazaifu a shrine already stood over his grave, rebuilt on a grand scale in 919. The wronged minister became Tenjin, now the god of learning.`
  },
  {
    id: "evt-kokin-wakashu",
    sources: [ { label: "Wikipedia: Kokin Wakashū", url: "https://en.wikipedia.org/wiki/Kokin_Wakash%C5%AB" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kokin_Wakashu_Genei.jpg/960px-Kokin_Wakashu_Genei.jpg",
        caption: "Part of the kana preface to the Kokin Wakashū, from the Gen'ei manuscript of 1120 now in the Tokyo National Museum. Wikimedia Commons."
      }
    ],
    name: "The Kokin Wakashū, the first imperial poetry anthology",
    type: "culture",
    year: 905,
    dateLabel: "905 (Engi 5, fourth month)",
    period: "Heian · literature",
    location: { name: "Heian Palace (Daidairi), Heian-kyō, modern Kyoto", lat: 35.0136, lon: 135.7422 },
    summary: "Emperor Daigo orders the first anthology of Japanese poetry compiled by imperial command. Its preface, written by Ki no Tsurayuki in Japanese instead of Chinese, is the oldest literary criticism in the Japanese language.",
    details: `In 905 four court poets, led by Ki no Tsurayuki, presented Emperor Daigo with the Kokin Wakashū, the 'Collection of Japanese Poems of Ancient and Modern Times'. It gathered roughly 1,100 short poems (waka) into twenty books arranged by season, love, parting, grief and other themes, and it was the first anthology of Japanese verse ever assembled by imperial command. All twenty-one later imperial anthologies followed its pattern.

What made it revolutionary was the language. For a century the court had treated Chinese as the proper medium for serious writing, and earlier imperial anthologies had collected Chinese verse. Tsurayuki opened this one with a preface written in Japanese, in the kana script, arguing that poetry grows out of human feeling and appraising the poets of the past. It is the earliest work of literary criticism in the Japanese language, and it set the vernacular beside Chinese at the very top of court culture.

The prefaces are dated to the fourth month of Engi 5, that is 905, but the collection contains poems composed after that year, so scholars think it reached its final shape somewhere around 914 to 920. The work was done at the Heian Palace in Kyoto; Tsurayuki's own poetry collection places the selection sessions in a room just east of the Jōkyōden hall, inside the emperor's private quarters.`
  },
  {
    id: "evt-byodoin-phoenix-hall",
    sources: [ { label: "Wikipedia: Byōdō-in", url: "https://en.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%E5%B9%B3%E7%AD%89%E9%99%A2%E9%B3%B3%E5%87%B0%E5%A0%82%EF%BC%882023%E5%B9%B4%EF%BC%89.jpg/960px-%E5%B9%B3%E7%AD%89%E9%99%A2%E9%B3%B3%E5%87%B0%E5%A0%82%EF%BC%882023%E5%B9%B4%EF%BC%89.jpg",
        caption: "The Phoenix Hall of Byōdō-in seen across its pond at Uji, the hall completed in 1053. Wikimedia Commons."
      }
    ],
    name: "The Phoenix Hall of Byōdō-in",
    type: "culture",
    year: 1053,
    dateLabel: "1053 (Tenki 1, third month, fourth day)",
    period: "Heian · religion",
    location: { name: "Byōdō-in, Uji, Yamashiro (modern Uji, Kyoto Prefecture)", lat: 34.88944, lon: 135.80778 },
    summary: "Fujiwara no Yorimichi completes an Amida hall at Uji designed to look like the Pure Land made visible, the finest surviving building of the Heian aristocracy.",
    details: `In 1052 the regent Fujiwara no Yorimichi turned his family's riverside villa at Uji, south of the capital, into a temple. Many people believed that year was the first of mappō, the 'Latter Day of the Law', an age in which Buddhist teaching would decay and no one could reach enlightenment by their own effort. The comfort on offer was Amida Buddha, who had vowed to carry the faithful to his Pure Land in the west.

The Amida hall was dedicated on the fourth day of the third month of Tenki 1, that is 26 March 1053. Its later nickname Hōō-dō, the Phoenix Hall, comes from the two bronze phoenixes on the roof and from the outstretched corridors that look like wings. It stands beyond a pond and faces east, so a worshipper approaching over the water repeats the journey of a soul travelling to paradise. Inside sits a gilded cypress Amida almost three metres tall, carved by Jōchō; it is the only sculpture certainly by his hand that survives, and its calm proportions became the model for Japanese Buddhist sculpture for centuries.

Fire during the fighting of 1336 destroyed almost all of Byōdō-in, but the Phoenix Hall came through. It is a National Treasure, part of the UNESCO Historic Monuments of Ancient Kyoto, and the building on the Japanese ten yen coin.`
  },
  {
    id: "evt-shirakawa-insei-1087",
    sources: [ { label: "Wikipedia: Cloistered rule", url: "https://en.wikipedia.org/wiki/Cloistered_rule" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/%E7%99%BD%E6%B2%B3%E4%B8%8A%E7%9A%87%E3%81%AE%E5%BE%A1%E5%B9%B8.jpg/960px-%E7%99%BD%E6%B2%B3%E4%B8%8A%E7%9A%87%E3%81%AE%E5%BE%A1%E5%B9%B8.jpg",
        caption: "Retired Emperor Shirakawa's procession, with his ox carriage and armed escort, from the fourteenth century Kasuga Gongen Genki-e handscrolls in an 1870 copy; Wikimedia Commons."
      }
    ],
    name: "Retired Emperor Shirakawa begins cloistered rule (insei)",
    type: "politics",
    year: 1087,
    dateLabel: "3 January 1087 (Ōtoku 3, 26th day of the 11th month)",
    period: "Heian · insei",
    location: { name: "Shirakawa district, Hosshō-ji site, Okazaki, Sakyō-ku, Kyoto", lat: 35.01378, lon: 135.78781 },
    summary: "Emperor Shirakawa gave the throne to his eight year old son Horikawa and then, as retired emperor, went on running the government himself from the Shirakawa district east of the capital. This was the start of insei, cloistered rule, the system that shaped court politics for a century.",
    details: `Shirakawa named his eight year old son Taruhito crown prince and abdicated to him on the same day, the 26th of the 11th month of Ōtoku 3, which falls on 3 January 1087 in the Western calendar. The boy became Emperor Horikawa. The point was to lock the succession into Shirakawa's own line and shut out his half brother Sukehito. As a retired emperor, Daijō Tennō, Shirakawa held no office and no formal power, but he was the reigning emperor's father, and he simply carried on governing. He did so for 43 years, through the reigns of Horikawa, Toba and Sutoku, until his death in 1129.

His base was Shirakawa, a district on the east bank of the Kamo river just outside the capital, where he had already raised Hosshō-ji, a huge vow temple with an octagonal nine storey pagoda about 80 metres tall. From around 1090 he built his retirement palaces beside it, and the district gave him the name history uses. Historians caution that he probably did not set out to invent a new system. For the first decade the regent Fujiwara no Morozane still handled much of the business of state, and the retired emperor only became the dominant figure after 1099. Even the word insei is a later label, coined in the Edo period.`
  },
  {
    id: "evt-konjikido-chusonji",
    sources: [ { label: "Wikipedia: Chūson-ji", url: "https://en.wikipedia.org/wiki/Ch%C5%ABson-ji" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Interior_of_Konjikido%2C_Chusonji_%2862%29.jpg/960px-Interior_of_Konjikido%2C_Chusonji_%2862%29.jpg",
        caption: "The gilded interior of the Konjikidō, showing a seated Amida Buddha with attendant figures on one of its three altars, in a photograph published in 1915; Wikimedia Commons."
      }
    ],
    name: "The Konjikidō (Golden Hall) of Chūson-ji, Hiraizumi",
    type: "culture",
    year: 1124,
    dateLabel: "1124 (Tenji 1)",
    period: "Heian · northern Fujiwara",
    location: { name: "Konjikidō, Chūson-ji, Hiraizumi, Mutsu Province (modern Hiraizumi, Iwate Prefecture)", lat: 39.001361, lon: 141.099889 },
    summary: "In 1124 the northern lord Fujiwara no Kiyohira raised the Konjikidō, a small hall gilded inside and out, at his temple of Chūson-ji in Hiraizumi. It is the only building of his era still standing there, and it holds the embalmed bodies of his family.",
    details: `Fujiwara no Kiyohira ruled Mutsu and Dewa, the far north of Japan, from Hiraizumi, roughly 650 kilometres in a straight line from the imperial capital at Heian-kyō. He had survived the brutal northern wars of the eleventh century, and from about 1100 he spent the gold, horses and trade wealth of the region on a temple complex meant to be a Pure Land on earth, a memorial for the dead of all sides.

The Konjikidō is what survives of that plan. An inscription written on its ridgepole dates the raising of the frame to Tenji 1, 1124. The hall is small, roughly five and a half metres square, but it is gilded on every surface inside and out, and its pillars and altar rails carry mother of pearl inlay and gold lacquer equal to anything being made in Kyoto. Three altars stand inside, each with a seated Amida Buddha and attendant figures. Beneath them lie the embalmed bodies of Kiyohira, his son Motohira and his grandson Hidehira, along with the head of Yasuhira, so the building is a mausoleum as well as a chapel.

Minamoto no Yoritomo destroyed the Northern Fujiwara in 1189, but the Konjikidō itself was spared and was later enclosed in a protective covering hall. It is the only building of the Fujiwara era still standing at Chūson-ji, a National Treasure, and part of the Hiraizumi World Heritage site.`
  },
  {
    id: "evt-kiyomori-daijo-daijin-1167",
    sources: [ { label: "Wikipedia: Taira no Kiyomori", url: "https://en.wikipedia.org/wiki/Taira_no_Kiyomori" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg/960px-Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg",
        caption: "Taira no Kiyomori as painted in the fourteenth century scroll Tenshi Sekkan Miei, a posthumous court portrait made long after his death. Wikimedia Commons."
      }
    ],
    name: "Taira no Kiyomori becomes Chancellor of the Realm",
    type: "politics",
    year: 1167,
    dateLabel: "4 March 1167 (Nin'an 2, 2nd month, 11th day)",
    period: "Heian · Taira ascendancy",
    location: { name: "Rokuhara, Higashiyama-ku, Kyoto", lat: 34.9971, lon: 135.7733 },
    summary: "In 1167 Taira no Kiyomori became Daijō-daijin, chancellor of the realm and the highest office in the imperial government. He was the first man from a warrior house ever to hold it, and he ran the country from his clan's mansion quarter at Rokuhara in Kyoto.",
    details: `Taira no Kiyomori headed the Ise branch of the Taira, a warrior family that had risen through service to the retired emperors. He came out of the Hōgen disturbance of 1156 and the Heiji disturbance of 1160 as the strongest military man in the capital, then climbed the ordinary ladder of court office rather than building a rival government. On the eleventh day of the second month of Nin'an 2, which falls on 4 March 1167 in the Western calendar, he was made Daijō-daijin, the chancellor who sat at the top of the civil government created by the Taihō Code. No man from a provincial warrior house had ever held the post.

The title was largely honorary, and Kiyomori resigned it after about three months, then took Buddhist vows the following year. What mattered was the precedent and what came with it. His sons and kinsmen filled court posts, his daughter Tokuko married Emperor Takakura and bore the future Emperor Antoku, and Kiyomori went on directing affairs from the family mansion quarter at Rokuhara, east of the Kamo river, until his death in 1181. Historians sometimes call the regime he built the Rokuhara government for that reason.

The appointment itself was a court act, made at the palace. The pin marks Rokuhara, the Taira headquarters, whose surviving landmark is the temple Rokuharamitsu-ji.`
  },
  {
    id: "evt-bunji-shugo-jito",
    sources: [ { label: "Japanese Wikipedia: 文治の勅許", url: "https://ja.wikipedia.org/wiki/文治の勅許" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emperor_Goshirakawa%2Cmy%C5%8Dh%C5%8Din.jpg/960px-Emperor_Goshirakawa%2Cmy%C5%8Dh%C5%8Din.jpg",
        caption: "Thirteenth-century portrait of the cloistered emperor Go-Shirakawa, who granted the sanction; the painting is kept at Myōhō-in in Kyoto. Wikimedia Commons."
      }
    ],
    name: "The Bunji Sanction: shugo and jitō granted to Yoritomo",
    type: "politics",
    year: 1185,
    dateLabel: "December 21, 1185 (Bunji 1/11/28)",
    period: "Kamakura · politics",
    location: { name: "Rokujō-dono, the cloistered emperor's palace at Rokujō and Nishinotōin, Kyoto", lat: 34.9941, lon: 135.7552 },
    summary: "In December 1185 the retired emperor Go-Shirakawa authorised Minamoto no Yoritomo to appoint constables (shugo) in the provinces and stewards (jitō) on the estates. Many historians date the birth of national warrior government to this decree rather than to Yoritomo's shogun title of 1192.",
    details: `Three months after the Genpei War ended at Dan-no-ura, Yoritomo's father-in-law Hōjō Tokimasa rode into Kyoto with an armed escort. On the 28th day of the 11th month of Bunji 1 he put a request to the cloistered emperor Go-Shirakawa through the courtier Yoshida Tsunefusa, and it was granted. Yoritomo could place his own men across the country as shugo (constables, holding police and military authority) and jitō (stewards, with rights over land and its taxes), and could levy a war-rice tax of five shō per tan of paddy. The stated pretext was the hunt for his fugitive brother Yoshitsune; the effect was permanent.

Historians still argue over how much was really settled that day. The Kamakura chronicle Azuma Kagami describes a nationwide system of shugo and jitō and credits the plan to Yoritomo's adviser Ōe no Hiromoto. The courtier Kujō Kanezane, writing in his diary Gyokuyō at the time, records the same decision without those words. Many specialists now think what was created was a broader provincial office, the kuni-jitō, which only later hardened into the shugo of later Kamakura practice. Either way, this is why Japanese textbooks no longer simply date the shogunate to 1192.`
  },
  {
    id: "evt-sanetomo-assassination",
    sources: [ { label: "Wikipedia: Minamoto no Sanetomo", url: "https://en.wikipedia.org/wiki/Minamoto_no_Sanetomo" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sanetomo%27s_assassination_Crime_scene.jpg/960px-Sanetomo%27s_assassination_Crime_scene.jpg",
        caption: "The great stone steps at Tsurugaoka Hachimangū where Sanetomo was killed, photographed in 2008 with the shrine's old ginkgo still standing at left; the tree blew down in 2010. Wikimedia Commons."
      }
    ],
    name: "The Assassination of Minamoto no Sanetomo",
    type: "incident",
    year: 1219,
    dateLabel: "13 February 1219 (Kenpō 7, 1st month, 27th day)",
    period: "Kamakura · succession",
    location: { name: "Tsurugaoka Hachimangū, Kamakura", lat: 35.32609, lon: 139.55644 },
    summary: "On a snowy evening in February 1219 the third shogun, Minamoto no Sanetomo, was cut down on the stone steps of Tsurugaoka Hachimangū by his own nephew Kugyō. With his death the Minamoto line of shoguns ended after three generations, leaving the Hōjō regents in sole command of Kamakura.",
    details: `Sanetomo became shogun at eleven, but real power in Kamakura lay with his mother Hōjō Masako and his uncle Hōjō Yoshitoki. Shut out of government, he turned to poetry and to court rank, and in 1218 he was made Minister of the Right. On the 27th day of the first month of Kenpō 7, in deep snow, he went up to Tsurugaoka Hachimangū to give thanks for the appointment. Coming back down the great stone steps after dark, he was attacked and beheaded by Kugyō, son of his murdered elder brother Yoriie. Kugyō was head priest of the shrine itself and had been raised as Sanetomo's adopted heir. He shouted that he had avenged his father, then was hunted down and killed the same night.

Sanetomo left no children, so the Minamoto line of shoguns ended after three generations. The shogunate itself survived: the Hōjō brought a two year old boy of the Kujō branch of the Fujiwara from Kyoto to serve as a figurehead, with Masako governing in his name. Retired Emperor Go-Toba refused to send a prince of his own, and the quarrel that followed led to the Jōkyū War of 1221. A well known story has Kugyō hiding behind the shrine's great ginkgo, but that detail appears only in Edo period writing, not in the thirteenth century sources; the tree blew down in 2010.`
  },
  {
    id: "evt-rokuhara-tandai",
    sources: [ { label: "Wikipedia: Rokuhara Tandai", url: "https://en.wikipedia.org/wiki/Rokuhara_Tandai" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Higashiyama_Kaiseikan_ac.jpg/960px-Higashiyama_Kaiseikan_ac.jpg",
        caption: "Nothing of the headquarters survives; a Kyoto city school now covers the Rokuhara ground where it stood. Wikimedia Commons."
      }
    ],
    name: "The Rokuhara Tandai",
    type: "politics",
    year: 1221,
    dateLabel: "1221 (Jōkyū 3, 6th month)",
    period: "Kamakura · governance",
    location: { name: "Rokuhara, Higashiyama, Kyoto", lat: 34.996083, lon: 135.774472 },
    summary: "After crushing Retired Emperor Go-Toba's rebellion in 1221, the Kamakura shogunate posted two of its own deputies at Rokuhara in Kyoto. From there warriors watched the imperial court, policed the capital and judged disputes across western Japan until 1333.",
    details: `Rokuhara is the strip of ground on the east bank of the Kamo river below the Higashiyama hills, between the old Gojō and Shichijō avenues. The Taira family filled it with mansions in the twelfth century; they burned in 1183 when the Taira fled the capital, and the land passed to Minamoto no Yoritomo and his Kyoto deputies. In the sixth month of Jōkyū 3, the summer of 1221, the two commanders who had just beaten Go-Toba, Hōjō Yasutoki and Hōjō Tokifusa, stayed on in the city rather than return east. They took offices at Rokuhara, one north and one south, and the post came to be called the Rokuhara Tandai. It was reserved for members of the Hōjō family and ranked just below the top posts at Kamakura; several holders later became regent. The deputies watched the court, oversaw the estates confiscated after the war, judged lawsuits between warriors and landholders across western Japan, and from 1238 ran the watch-houses that guarded Kyoto at night. Their power had limits, since verdicts were referred back to Kamakura and the great temples could still force the shogunate to give way. The office died with the shogunate in 1333, when Ashikaga Takauji changed sides and stormed Rokuhara; the last two deputies fled with two retired emperors and Emperor Kōgon, and Hōjō Nakatoki killed himself at Banba in Ōmi.`
  },
  {
    id: "evt-utsunomiya-tsuji",
    sources: [ { label: "Japanese Wikipedia: 宇都宮辻子幕府", url: "https://ja.wikipedia.org/wiki/宇都宮辻子幕府" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Utsunomiya_Inari_shrine_in_Kamakura_city.jpg/960px-Utsunomiya_Inari_shrine_in_Kamakura_city.jpg",
        caption: "The stone marker recording the site of the Utsunomiya-tsuji palace, standing beside Utsunomiya Inari Shrine in Komachi, Kamakura; Wikimedia Commons."
      }
    ],
    name: "The Hōjō Council of State at Utsunomiya-tsuji",
    type: "politics",
    year: 1226,
    dateLabel: "January 1226 (Karoku 1/12/20 and 12/21)",
    period: "Kamakura · governance",
    location: { name: "Utsunomiya-tsuji palace site, Komachi, Kamakura, Sagami Province", lat: 35.320306, lon: 139.553944 },
    summary: "The Kamakura shogunate moves its palace from Ōkura to a new site beside Wakamiya-ōji, and the next day the regent Hōjō Yasutoki seats a standing council of senior vassals to decide law and policy by discussion.",
    details: `When Hōjō Yoshitoki died in 1224, and Hōjō Masako and Ōe no Hiromoto followed in 1225, the founding generation of the Kamakura shogunate was gone. Yoshitoki's son Yasutoki, the third shikken or regent, had already taken his uncle Hōjō Tokifusa as rensho, a co-signer whose name went on shogunal documents beside his own. Then, on the 20th day of the 12th month of Karoku 1, which falls in January 1226, Yasutoki moved the shogunal palace out of Ōkura, which sat below Yoritomo's grave and was thought unlucky, to a plot in Komachi just east of Wakamiya-ōji, next to his own family's houses. The following day he seated the hyōjōshū, a standing council of eleven senior vassals and legal officers who settled lawsuits and policy by discussion.

Nine days later the child shōgun Kujō Yoritsune came of age in the new hall, and he was formally appointed shōgun in the next month. From then on the shogunate's business was transacted by a named council under a regent and a co-signer, not by the shōgun in person. This is the machinery the Hōjō used to govern Japan for a century without ever holding the office of shōgun themselves, and it was this council that issued the Goseibai Shikimoku in 1232. The palace stood eleven years before Yasutoki rebuilt it in 1236 as the Wakamiya-ōji palace.`
  },
  {
    id: "evt-genko-borui-hakata-wall",
    sources: [ { label: "Wikipedia: Genkō Bōrui", url: "https://en.wikipedia.org/wiki/Genk%C5%8D_B%C5%8Drui" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Genko_Defence_Stone_Wall_in_Iki_Pine_Grove.JPG/960px-Genko_Defence_Stone_Wall_in_Iki_Pine_Grove.JPG",
        caption: "The excavated and restored stretch of the Genkō Bōrui behind the pines at Ikinomatsubara, Nishi Ward, Fukuoka. Wikimedia Commons."
      }
    ],
    name: "The Genkō Bōrui, the Hakata Bay Stone Wall",
    type: "contact",
    year: 1276,
    dateLabel: "1276 (Kenji 2, 3rd month)",
    period: "Kamakura · defence",
    location: { name: "Ikinomatsubara, Nishi Ward, Fukuoka", lat: 33.5855556, lon: 130.3083333 },
    summary: "After the first Mongol landing of 1274, the Kamakura government ordered a stone wall built right around Hakata Bay. Each Kyushu province was assigned a stretch, about 20 km in all. When the Mongols came back in 1281 they could not get ashore where the wall stood.",
    details: `The first Mongol landing in 1274 showed the Kamakura shogunate that Hakata Bay, the gateway to northern Kyushu, lay wide open. In the third month of Kenji 2, spring 1276, the government ordered a continuous stone rampart along the shore. At the time it was simply called ishitsuiji, the stone embankment; the name Genkō Bōrui, Mongol invasion wall, was coined only in 1913 by the scholar Nakayama Heijirō.

Finished, it ran about 20 km from Imazu in the west to Kashii in the east, averaging two metres in height and width. The core was packed with rubble, the landward face was sloped, the seaward face left sheer so that defenders could stand on top and shoot down at anyone wading ashore. The work was parcelled out province by province, and the levy fell on every rice field regardless of whether a warrior house or a court proprietor held it. At Ikinomatsubara the join is visible in the stone itself: granite from Nagatare to the west, sandstone from Odo to the east.

Enough stood by 1281 that the second Mongol fleet gave up on landing at Hakata and anchored off Shikanoshima instead. The picture scroll commissioned by the warrior Takezaki Suenaga shows the wall as it then looked. Repairs went on until 1332. Later the stones were carted off to build Fukuoka Castle, but excavated stretches survive at Ikinomatsubara, Imazu and Nishijin, a National Historic Site since 1931.`
  },
  {
    id: "evt-einin-tokusei",
    sources: [ { label: "Japanese Wikipedia: 永仁の徳政令", url: "https://ja.wikipedia.org/wiki/永仁の徳政令" } ],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/H%C5%8Dj%C5%8D_Sadatoki.jpg/960px-H%C5%8Dj%C5%8D_Sadatoki.jpg",
        caption: "Hōjō Sadatoki, the regent who issued the edict, in an imagined portrait drawn some five centuries later by Kurihara Nobumitsu. Wikimedia Commons."
      }
    ],
    name: "The Einin Debt Cancellation Edict",
    type: "politics",
    year: 1297,
    dateLabel: "March 30, 1297 (Einin 5/3/6)",
    period: "Kamakura · law",
    location: { name: "The Wakamiya Ōji palace, seat of the Kamakura shogunate, Sagami Province", lat: 35.3223, lon: 139.5558 },
    summary: "The Kamakura shogunate cancels its vassals' debts and orders land they had sold or pawned returned to them without payment, the first tokusei, or 'virtuous government', edict in Japanese history.",
    details: `The warriors who beat back the Mongol invasions of 1274 and 1281 had defended Japan rather than conquered anyone, so there was no captured land to share out as reward. Many gokenin, the shogunate's sworn vassals, had gone into debt paying for those campaigns and for the coastal guard duty that followed, and had pawned or sold their estates. On March 30, 1297 the regent Hōjō Sadatoki responded: the courts would no longer hear suits about debts, vassals were forbidden to sell or pawn their land, and land already sold or foreclosed was to go back to its original holder for nothing.

The exact wording is lost. Three of its articles survive only in copies kept in the archive of Tō-ji in Kyoto, and that very document shows peasants, not only warriors, using the edict to reclaim land they had sold. Two of the three clauses were repealed in 1298, though the order to return sold land was reaffirmed. Historians now read the edict less as relief for hard-up warriors than as an attempt to freeze vassal landholding in place and so shore up the shogunate's own power base. It did not work. Divided inheritance kept splitting estates, the money economy kept advancing, and the Kamakura regime fell in 1333.`
  }
];
