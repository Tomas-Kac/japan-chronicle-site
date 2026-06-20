// =====================================================================
// EVENTS  —  non-battle historical events (for diversity beyond battles)
// =====================================================================
// Toggle the "Events" overlay (top-right layer control) to show these.
// When the overlay is ON they are filtered by the year slider (like battles),
// and their years join the slider's range — events span 552–1923, wider than the
// battle timeline. "Show all years" shows them all at once.
//
// type is one of:
//   "contact"   foreign contact / first encounters  (⚓, teal)
//   "capital"   capitals & seats of power            (★, purple)
//   "culture"   religion, culture & economy          (⛩, green)
//   "incident"  incidents, rebellions & disasters    (⚠, orange)
//
// Fields: id, name, type, year, dateLabel, period, location{name,lat,lon},
//         summary, details, images:[{src,caption}].
// =====================================================================

const EVENTS = [
  {
    id: "evt-tanegashima",
    name: "Arrival of the Portuguese at Tanegashima",
    type: "contact",
    year: 1543,
    dateLabel: "1543",
    period: "Sengoku · foreign contact",
    location: {
      name: "Tanegashima island, Ōsumi (modern Kagoshima Prefecture)",
      lat: 30.57389,
      lon: 130.98111
    },
    summary: "The first Europeans reach Japan — and bring the matchlock gun that would transform the Sengoku wars.",
    details: `In 1543, a Chinese vessel carrying Portuguese merchants landed at Tanegashima, an island south of Kyūshū. This event marks the first documented European contact with Japan.

The merchants introduced matchlock firearms (arquebuses) to the local daimyō, Tanegashima Tokitaka. Tokitaka acquired two weapons and commissioned local swordsmiths to reverse-engineer the firing mechanisms and barrels. Mass production subsequently commenced in manufacturing centers such as Sakai and Kunitomo.

The introduction of firearms precipitated a paradigm shift in Japanese military tactics, transitioning armies from traditional mounted archers to massed formations of ashigaru (infantry) equipped with matchlocks.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tanegashima_ISS048.jpg/960px-Tanegashima_ISS048.jpg",
        caption: "Tanegashima, where the Portuguese — and firearms — first landed. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-xavier-kagoshima",
    name: "Francis Xavier lands at Kagoshima",
    type: "contact",
    year: 1549,
    dateLabel: "1549",
    period: "Sengoku · foreign contact",
    location: {
      name: "Kagoshima, Satsuma Province (modern Kagoshima)",
      lat: 31.59694,
      lon: 130.55722
    },
    summary: "The Jesuit missionary who brought Christianity to Japan steps ashore in Satsuma.",
    details: `The Jesuit Francis Xavier came ashore at Kagoshima in 1549, opening Christian missionary work in Japan. Over the next century the faith won perhaps 300,000 converts — among them daimyō such as Ōtomo Sōrin and Ōmura Sumitada, who gave Nagasaki to the Church.

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
    name: "Dejima — Japan's window on the West",
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
    name: "Perry's Black Ships at Uraga",
    type: "contact",
    year: 1853,
    dateLabel: "July 1853",
    period: "Bakumatsu",
    location: {
      name: "Uraga, Sagami Bay (modern Yokosuka, Kanagawa)",
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
    name: "Heijō-kyō — the capital at Nara",
    type: "capital",
    year: 710,
    dateLabel: "710",
    period: "Nara period",
    location: {
      name: "Heijō Palace, Nara",
      lat: 34.6911,
      lon: 135.7958
    },
    summary: "Japan's first grand, permanent capital, laid out on the grid of Tang China's Chang'an.",
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
    name: "Heian-kyō — the capital moves to Kyoto",
    type: "capital",
    year: 794,
    dateLabel: "794",
    period: "Heian period",
    location: {
      name: "Heian Palace, Heian-kyō (modern Kyoto)",
      lat: 35.0117,
      lon: 135.7447
    },
    summary: "Kyoto becomes the imperial capital — and remains so for more than a thousand years.",
    details: `In 794 Emperor Kanmu moved the capital to Heian-kyō, beginning the Heian period — the golden age of the courtly aristocracy that produced Murasaki Shikibu's Tale of Genji.

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
    name: "Kamakura — seat of the first shogunate",
    type: "capital",
    year: 1192,
    dateLabel: "1185 / 1192",
    period: "Kamakura period",
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
    name: "Azuchi — Nobunaga's castle capital",
    type: "capital",
    year: 1576,
    dateLabel: "1576",
    period: "Azuchi–Momoyama",
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
    name: "Edo — the Tokugawa capital",
    type: "capital",
    year: 1603,
    dateLabel: "1603",
    period: "Edo period",
    location: {
      name: "Edo Castle (modern Imperial Palace, Tokyo)",
      lat: 35.6852,
      lon: 139.7528
    },
    summary: "The fishing town that Ieyasu made his base — and that grew into one of the largest cities on earth.",
    details: `When Tokugawa Ieyasu became shōgun in 1603 he ruled from Edo and its vast castle, while the emperor remained in Kyoto. Under the alternate-attendance system, which compelled daimyō to keep households in the city, Edo swelled past a million people.

In 1868 it was renamed Tokyo — "eastern capital" — and became the seat of the modern state.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Edo_P_detail.jpg/960px-Edo_P_detail.jpg",
        caption: "Edo, on a 17th-century folding screen. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-todaiji",
    name: "Tōdai-ji and the Great Buddha",
    type: "culture",
    year: 752,
    dateLabel: "752",
    period: "Nara period",
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
    name: "Enryaku-ji founded on Mt Hiei",
    type: "culture",
    year: 788,
    dateLabel: "788",
    period: "Heian period",
    location: {
      name: "Enryaku-ji, Mount Hiei (Ōtsu, Shiga)",
      lat: 35.07056,
      lon: 135.84111
    },
    summary: "The great Tendai monastery above Kyoto — and a military power in its own right.",
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
    name: "Kōyasan founded by Kūkai",
    type: "culture",
    year: 816,
    dateLabel: "816",
    period: "Heian period",
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
    name: "Iwami Ginzan silver mine",
    type: "culture",
    year: 1526,
    dateLabel: "from 1526",
    period: "Sengoku · economy",
    location: {
      name: "Iwami Ginzan, Ōmori (modern Ōda, Shimane)",
      lat: 35.1116,
      lon: 132.4389
    },
    summary: "The silver mine that helped finance the Sengoku wars and drew the world's traders to Japan.",
    details: `Opened in 1526, the Iwami Ginzan became one of the world's great silver mines; at its height Japan may have produced a third of the world's silver.

That silver paid for armies, guns and gunpowder and drew Portuguese and Chinese merchants — a hidden engine of the age. It is now a UNESCO World Heritage Site.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shimizudani_Refinery_Ruins_at_Iwami_Ginzan_Silver_Mine_001.jpg/960px-Shimizudani_Refinery_Ruins_at_Iwami_Ginzan_Silver_Mine_001.jpg",
        caption: "Refinery ruins at the Iwami Ginzan silver mine. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-sakai",
    name: "Sakai, the free merchant city",
    type: "culture",
    year: 1550,
    dateLabel: "16th century",
    period: "Sengoku · economy",
    location: {
      name: "Sakai, Izumi (modern Sakai, Osaka)",
      lat: 34.57333,
      lon: 135.48306
    },
    summary: "A wealthy, self-governing port — gateway of the gun and the tea ceremony — often likened to a free city of Europe.",
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
    name: "Shimabara Rebellion",
    type: "incident",
    year: 1637,
    dateLabel: "1637–1638",
    period: "Edo period",
    location: {
      name: "Hara Castle, Shimabara (modern Minamishimabara, Nagasaki)",
      lat: 32.63,
      lon: 130.268
    },
    summary: "The great Christian-and-peasant uprising whose suppression sealed Japan's seclusion.",
    details: `In 1637–38 overtaxed peasants and persecuted Christians of the Shimabara peninsula rose in revolt, some 37,000 holding out in the ruined Hara Castle. The shogunate crushed them with an overwhelming army — even firing on them from a Dutch ship — and killed almost all the defenders.

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
    name: "The Forty-seven Rōnin (Akō incident)",
    type: "incident",
    year: 1703,
    dateLabel: "1701–1703",
    period: "Edo period",
    location: {
      name: "Sengaku-ji, Edo (modern Takanawa, Tokyo)",
      lat: 35.6383,
      lon: 139.7403
    },
    summary: "The most famous tale of loyalty and revenge in Japanese history.",
    details: `In 1701 the daimyō Asano Naganori was made to commit seppuku after drawing his sword against the official Kira Yoshinaka inside Edo Castle. Two years later forty-seven of his now-masterless retainers (rōnin) avenged him by killing Kira — then gave themselves up and were ordered to commit seppuku in turn.

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
    details: `In March 1860, just outside the Sakurada Gate of Edo Castle, rōnin from Mito cut down Ii Naosuke, the shogunate's chief minister — in revenge for his purges of dissidents and for signing the "unequal" treaties with the Western powers.

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
    name: "Hōei eruption of Mount Fuji",
    type: "incident",
    year: 1707,
    dateLabel: "December 1707",
    period: "Edo period",
    location: {
      name: "Mount Fuji (Shizuoka / Yamanashi border)",
      lat: 35.36083,
      lon: 138.7275
    },
    summary: "Mount Fuji's last eruption, which rained ash on Edo a hundred kilometres away.",
    details: `In December 1707 — only weeks after a huge earthquake had shaken the country — Mount Fuji erupted, dusting Edo with ash and ruining farmland across the region. It opened the Hōei crater on the mountain's southeastern flank, and remains Fuji's most recent eruption.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/960px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
        caption: "Mount Fuji; the Hōei crater on its flank dates from the 1707 eruption. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-kanto-1923",
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

The disaster reshaped the modern capital — and, in the ensuing chaos and rumour, triggered massacres of Koreans and other minorities.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/The_Great_Kanto_Earthquake_%283767766524%29_%28cropped%29.jpg/960px-The_Great_Kanto_Earthquake_%283767766524%29_%28cropped%29.jpg",
        caption: "Devastation from the 1923 Great Kantō earthquake. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-onin-war",
    name: "Ōnin War begins",
    type: "politics",
    year: 1467,
    dateLabel: "1467–1477",
    period: "Muromachi period",
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
        caption: "The Siege of Busan, 1592 — the opening of the Korean invasions. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-tensho-embassy",
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

For reasons that remain debated by historians—possibly due to his independent influence, disagreements over the Korean invasion, or the placement of his wooden statue at Daitoku-ji—Hideyoshi abruptly turned against him. Ordered to commit ritual suicide (seppuku) at Hideyoshi's Jurakudai palace, Rikyū's death shocked the cultural establishment.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sen_no_Rikyu_JPN_%28cropped%29.jpg/960px-Sen_no_Rikyu_JPN_%28cropped%29.jpg",
        caption: "The tea master Sen no Rikyū. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-rakuichi",
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
    name: "Meiō Earthquake and Tsunami",
    type: "disaster",
    year: 1498,
    dateLabel: "September 20, 1498 (Meiō 7/8/25)",
    period: "Sengoku",
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
        caption: "The Great Buddha of Kamakura — the 1498 Meiō tsunami swept away the hall that once enclosed it. Wikimedia Commons."
      }
    ]
  },
  {
    id: "evt-tensho-earthquake",
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
    name: "Death of Takeda Shingen",
    type: "politics",
    year: 1573,
    dateLabel: "May 13, 1573 (Genki 4/4/12)",
    period: "Sengoku",
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
    name: "Death of Uesugi Kenshin",
    type: "politics",
    year: 1578,
    dateLabel: "April 19, 1578 (Tenshō 6/3/13)",
    period: "Sengoku",
    location: {
      name: "Kasugayama Castle, Echigo (modern Jōetsu, Niigata)",
      lat: 37.1183,
      lon: 138.2417
    },
    summary: "The 'Dragon of Echigo' dies mysteriously in his castle, sparking a bitter succession war.",
    details: `Fresh from a decisive victory over Oda forces at the Battle of Tedorigawa, Uesugi Kenshin returned to his stronghold at Kasugayama Castle to mobilize for a massive spring offensive. Before the army could march, he suffered a sudden collapse in his lavatory and died days later, likely of a stroke or stomach cancer.

Having never married or named a clear heir, his death triggered the Otate no Ran—a devastating civil war between his two adopted sons that permanently crippled Uesugi power.`,
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Uesugi_Kenshin_Portrait_from_Uesugi_Shrine.png",
        caption: "Uesugi Kenshin. Wikimedia Commons."
      }
    ]
  },
  {
    id: "hokoji-bell",
    name: "The Hōkōji Bell Incident",
    type: "politics",
    year: 1614,
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
    name: "The Honnō-ji Incident",
    type: "politics",
    year: 1582,
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
    name: "Establishment of the Tokugawa Shogunate",
    type: "politics",
    year: 1603,
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
    name: "Edict of Expulsion of Missionaries",
    type: "politics",
    year: 1614,
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
    name: "Assassination of the Sword Master Shōgun",
    type: "politics",
    year: 1565,
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
    name: "Sankin-kōtai — the alternate attendance system",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Tokugawa_Seiseiroku_001.jpg", caption: "A daimyō procession — the great journeys imposed by sankin-kōtai. Wikimedia Commons." }
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
    summary: "The 'alternate attendance' rule that bound the daimyō to Edo — and quietly bankrupted them into obedience.",
    details: `Formalized in 1635, sankin-kōtai required every daimyō to spend alternating years in Edo and to leave his wife and heir there permanently as hostages. The ruinous cost of maintaining two grand residences and of the great processions to and from the capital drained the lords' treasuries — knitting the realm together with highways and post-towns while keeping potential rivals too poor, and too closely watched, to rebel. It was the quiet machinery of the Tokugawa peace.`
  },
  {
    id: "evt-sakoku",
    name: "Sakoku — the closing of the country",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Buddhist_statue_with_hidden_cross_on_back.jpg", caption: "A concealed Christian image — sakoku was driven in part by the suppression of Christianity. Wikimedia Commons." }
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
    details: `Between 1633 and 1639 the shogunate issued the edicts known as sakoku ('closed country'): the Portuguese were expelled, Japanese were forbidden to leave or return on pain of death, and foreign trade was reduced to a tightly policed trickle — the Dutch confined to the islet of Dejima, the Chinese to Nagasaki, the Koreans via Tsushima. Aimed above all at stamping out Christianity and foreign meddling after the Shimabara revolt, seclusion shaped the Edo period's two and a half centuries of inward-looking peace.`
  },
  {
    id: "evt-meireki-fire",
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
    details: `Over three days in March 1657 fire roared through the tinder-dry timber city of Edo, consuming much of the metropolis — including the main keep of Edo Castle, which was never rebuilt — and killing an estimated 100,000 people. Among history's deadliest urban fires, it forced a wholesale redesign of the city: firebreaks, widened avenues, relocated temples and a permanent firefighting corps, shaping the Edo that grew into modern Tokyo.`
  },
  {
    id: "evt-genroku-culture",
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
    summary: "Townsman culture blossoms — kabuki, ukiyo-e, Bashō's haiku and Chikamatsu's puppet plays.",
    details: `The Genroku era saw a brilliant urban culture rise on the wealth of the merchant class, especially in the Kamigata (Kyoto–Osaka) heartland. Matsuo Bashō perfected haiku; Ihara Saikaku chronicled the pleasures of the 'floating world'; Chikamatsu Monzaemon wrote tragedies for the bunraku puppet stage; and kabuki theatre and the ukiyo-e woodblock print came into their own. For the first time commoners — not the court or the warrior elite — set the pace of Japan's artistic life.`
  },
  {
    id: "evt-dojima-rice",
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
    details: `A run of cold, wet summers ruined harvests across northern Japan in the 1780s, and the violent 1783 eruption of Mount Asama — which buried whole villages and veiled the skies in ash — turned hardship into catastrophe. Hundreds of thousands died of starvation and disease, above all in the Tōhoku, and the rice riots and unrest that followed shook the shogunate's authority and spurred the austere Kansei Reforms.`
  },
  {
    id: "evt-kanagawa-treaty",
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
    details: `When Commodore Matthew Perry returned in 1854 with a larger fleet, the shogunate yielded. The Convention of Kanagawa opened the ports of Shimoda and Hakodate to American ships and shattered the sakoku policy. A cascade of further 'unequal treaties' followed — granting foreigners extraterritoriality and fixed tariffs — humiliations that inflamed the anti-shogunate movement and set Japan on the road to the Meiji Restoration.`
  },
  {
    id: "evt-meiji-restoration",
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
    summary: "Imperial rule is 'restored' — ending seven centuries of samurai government and launching Japan's headlong modernization.",
    details: `In January 1868 the backers of the young Emperor Meiji proclaimed the 'restoration of imperial rule' (ōsei fukkō), abolishing the Tokugawa shogunate. The Boshin War that followed crushed the last shogunal forces, and the new government — guided by the Charter Oath — swept away the feudal order: the domains were abolished, the samurai class dissolved, the capital moved to Tokyo, and Japan launched a breakneck drive of industrial and military modernization that within a generation made it a world power.`
  },
  {
    id: "evt-buddhism",
    name: "The Introduction of Buddhism",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Asuka-dera%2C_sanmon.jpg/960px-Asuka-dera%2C_sanmon.jpg", caption: "The gate of Asuka-dera, Japan's first Buddhist temple. Wikimedia Commons." }
    ],
    type: "culture",
    year: 552,
    dateLabel: "traditionally 552 (some sources 538)",
    period: "Asuka · religion",
    location: { name: "The Yamato court at Asuka (modern Nara Prefecture)", lat: 34.4730, lon: 135.8200 },
    summary: "The Baekje court sends a gilt-bronze Buddha and sutras to the Yamato court — the official arrival of Buddhism in Japan.",
    details: `In the mid-6th century the king of Baekje, a Korean kingdom allied to Yamato, sent the Japanese court a gilt-bronze image of the Buddha together with sutras and a letter praising the new faith. Traditionally dated to 552 (some texts say 538), this gift marks the official arrival of Buddhism in Japan.

The religion split the court: the Soga clan embraced it while the Mononobe and Nakatomi defended the native kami. The Soga's eventual victory opened the way for Buddhism to become a pillar of the state — inspiring the temples, art, and learning of the Asuka and Nara ages, from Hōryū-ji to the Great Buddha of Tōdai-ji.`
  },
  {
    id: "evt-taika",
    name: "The Taika Reform",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Irukaansatsuzu.jpg/960px-Irukaansatsuzu.jpg", caption: "The assassination of Soga no Iruka (the Isshi Incident), which opened the Taika Reform. Wikimedia Commons." }
    ],
    type: "politics",
    year: 645,
    dateLabel: "645 (Taika 1)",
    period: "Asuka · reform",
    location: { name: "The Asuka court (modern Nara Prefecture)", lat: 34.4795, lon: 135.8190 },
    summary: "A palace coup destroys the over-mighty Soga clan and launches the reforms that forge a centralized imperial state on the Chinese model.",
    details: `In 645 Prince Naka-no-Ōe and Nakatomi no Kamatari — founder of the Fujiwara — struck down Soga no Iruka in the empress's own presence (the Isshi Incident), breaking the Soga grip on the throne.

The coup ushered in the Taika ('Great Reform') edicts: land and people were declared the sovereign's, provinces and a census were organized, and a Tang-style bureaucracy imposed. Over the following decades these reforms — and the ritsuryō law codes that grew from them — turned Japan from a loose confederation of clans into a centralized empire ruled from a Chinese-style capital.`
  },
  {
    id: "evt-taiho",
    name: "The Taihō Code",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Japan_prov_map701.png", caption: "A map of Japan's provinces in 701 — the administrative order the Taihō Code created. Wikimedia Commons." }
    ],
    type: "politics",
    year: 701,
    dateLabel: "701 (Taihō 1)",
    period: "Asuka–Nara · law",
    location: { name: "Fujiwara-kyō, the imperial capital (modern Kashihara, Nara)", lat: 34.5020, lon: 135.8070 },
    summary: "Japan's first complete law code locks in the centralized ritsuryō state.",
    details: `Promulgated in 701 and named for the Taihō era, this was Japan's first complete and lasting system of administrative and penal law (ritsuryō), modelled on Tang China's. It defined the ministries of central government, a provincial administration, a hierarchy of court ranks, and the land-allotment and tax system that supported the imperial state.

Drafted under Prince Osakabe and Fujiwara no Fuhito, the Taihō Code capped the reforms begun in 645 and gave the Nara and early Heian state its legal skeleton — the framework within which the court would govern for centuries.`
  },
  {
    id: "evt-chronicles",
    name: "The Kojiki & Nihon Shoki",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Nihonshoki_tanaka_version.jpg/960px-Nihonshoki_tanaka_version.jpg", caption: "A manuscript page of the Nihon Shoki. Wikimedia Commons." }
    ],
    type: "culture",
    year: 712,
    dateLabel: "712 & 720",
    period: "Nara · culture",
    location: { name: "Heijō-kyō, the capital at Nara", lat: 34.6900, lon: 135.8050 },
    summary: "Japan's first written histories — and the founding myths of the imperial line — are compiled at the Nara court.",
    details: `At the throne's command the Nara court produced Japan's earliest surviving books: the Kojiki ('Record of Ancient Matters,' 712) and the Nihon Shoki ('Chronicles of Japan,' 720). Weaving myth, legend, and dynastic record, they trace the imperial house's descent from the sun goddess Amaterasu down to the legendary first emperor, Jimmu.

Far more than histories, they were charters of legitimacy — fixing the origin myths that justified imperial rule and that still anchor Shinto today. With the poetry anthology Man'yōshū, they mark the birth of written Japanese literature.`
  },
  {
    id: "evt-genji",
    name: "The Tale of Genji",
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Genji_emaki_01003_002.jpg/960px-Genji_emaki_01003_002.jpg", caption: "An illustration from the Genji Monogatari Emaki, the illustrated Tale of Genji scroll. Wikimedia Commons." }
    ],
    type: "culture",
    year: 1008,
    dateLabel: "c. 1008",
    period: "Heian · literature",
    location: { name: "Heian-kyō, the court at Kyoto", lat: 35.0270, lon: 135.7650 },
    summary: "Murasaki Shikibu writes what is often called the world's first novel — the supreme achievement of Heian court culture.",
    details: `Around 1008 the lady-in-waiting Murasaki Shikibu completed the Genji Monogatari ('The Tale of Genji') at the glittering Heian court in Kyoto. Following the loves and sorrows of the 'Shining Prince' Genji across more than fifty chapters, it is a work of extraordinary psychological depth — often called the world's first novel.

Written in the vernacular kana script favoured by court women, it crowns the refined aesthetic of the mid-Heian age — an era when the Fujiwara regents ruled and the court measured life by beauty, poetry, and an exquisite sensitivity to the passing of things (mono no aware).`
  },
  {
    id: "evt-fujiwara-regency",
    name: "The Fujiwara Regency",
    type: "politics",
    year: 858,
    dateLabel: "from 858",
    period: "Heian · regency",
    location: { name: "The Heian court, Kyoto", lat: 35.0254, lon: 135.7621 },
    summary: "Fujiwara no Yoshifusa becomes regent for a child emperor — beginning the line of Fujiwara regents who would rule Japan from behind the throne for two centuries.",
    details: `In 858 Fujiwara no Yoshifusa enthroned his infant grandson as Emperor Seiwa and governed as sesshō (regent) — the first regent not himself of imperial blood. The Fujiwara perfected rule through marriage politics: wedding their daughters to emperors, enthroning the resulting child-sovereigns, and governing as regent or chancellor (kampaku).

Their power reached its dazzling height under Fujiwara no Michinaga (c. 1016), whose glittering court is the very world of the Tale of Genji — an age when the aristocracy measured life by poetry, rank, and exquisite taste.`
  },
  {
    id: "evt-jogan-quake",
    name: "The Jōgan Sanriku Earthquake",
    type: "disaster",
    year: 869,
    dateLabel: "869 (Jōgan 11)",
    period: "Heian · disaster",
    location: { name: "Off the Sanriku coast / the Sendai plain, Mutsu", lat: 38.50, lon: 142.10 },
    summary: "A massive earthquake and tsunami devastate the Sanriku coast of Tōhoku — leaving deposits that warned, unheeded, of 2011.",
    details: `In 869 a great earthquake struck off the Sanriku coast, and a tsunami swept far inland across the Sendai plain, drowning perhaps a thousand people. The disaster was recorded in the court chronicle Nihon Sandai Jitsuroku.

Centuries later, geologists traced the Jōgan tsunami's sand deposits and realised the coast had been struck by giant waves before — evidence of a recurring danger that was tragically echoed by the 2011 Tōhoku earthquake and tsunami.`
  },
  {
    id: "evt-tang-embassies-end",
    name: "The End of the Tang Embassies",
    type: "contact",
    year: 894,
    dateLabel: "894",
    period: "Heian · foreign relations",
    location: { name: "The imperial court, Kyoto", lat: 35.0116, lon: 135.7681 },
    summary: "On Sugawara no Michizane's advice, Japan halts its official embassies to China — turning inward as a distinctly Japanese culture flowers.",
    details: `For over two centuries Japan had sent embassies (kentōshi) to Tang China to import its laws, script, and Buddhism. In 894, with the Tang dynasty in decline and the voyages perilous, the scholar-official Sugawara no Michizane advised the court to discontinue them, and the missions ceased.

Cut loose from the Chinese model, the Heian court turned inward — and the next century saw a native culture bloom: the kana syllabary, vernacular masterpieces like the Tale of Genji and the Pillow Book, and the refined aesthetics of the court.`
  },
  {
    id: "evt-kamakura-buddhism",
    name: "The New Kamakura Buddhism",
    type: "culture",
    year: 1200,
    dateLabel: "c. 1175–1253",
    period: "Kamakura · religion",
    location: { name: "Kamakura, Sagami Province", lat: 35.3192, lon: 139.5466 },
    summary: "A wave of charismatic teachers brings Buddhism to the common people — Pure Land devotion, Nichiren's Lotus, and Zen.",
    details: `The Kamakura age saw Buddhism break out of the aristocratic monasteries and reach ordinary people through simple, accessible paths to salvation. Hōnen and his disciple Shinran preached faith in Amida Buddha (Pure Land / Jōdo Shinshū); Nichiren taught single-minded devotion to the Lotus Sutra.

At the same time Eisai and Dōgen brought Zen — Rinzai and Sōtō — from China, its discipline and directness perfectly suited to the warrior class who now ruled. These movements reshaped Japanese religion permanently, and Zen would go on to shape the arts of tea, ink, and garden.`
  },
  {
    id: "evt-goseibai",
    name: "The Goseibai Shikimoku",
    type: "politics",
    year: 1232,
    dateLabel: "1232 (Jōei 1)",
    period: "Kamakura · law",
    location: { name: "The Kamakura shogunate, Sagami Province", lat: 35.3219, lon: 139.5503 },
    summary: "The Kamakura shogunate issues the first legal code written by and for the warrior class — plain samurai custom, not courtly law.",
    details: `Issued in 1232 under the regent Hōjō Yasutoki, the Goseibai Shikimoku (Jōei Code) was the first body of law written by and for warriors. In 51 plain-spoken articles it laid out the duties of vassals, the rules of landholding and inheritance, and the procedures of the shogunate's courts.

Rooted in practical samurai custom rather than the Chinese-derived law of the imperial state, it proved so durable that it remained the foundation of warrior law right through to the Edo period.`
  },
  {
    id: "evt-kamakura-daibutsu",
    name: "The Great Buddha of Kamakura",
    type: "culture",
    year: 1252,
    dateLabel: "from 1252",
    period: "Kamakura · culture",
    location: { name: "Kōtoku-in, Kamakura", lat: 35.3169, lon: 139.5358 },
    summary: "The colossal bronze Amida Buddha is cast at Kamakura — an enduring icon of the age's popular Pure Land faith.",
    details: `Begun around 1252, the Great Buddha (Daibutsu) of Kōtoku-in is a bronze image of Amida Buddha over 13 metres tall, embodying the Pure Land devotion that swept Kamakura-period Japan.

The great hall that once enclosed it was destroyed by storms and finally washed away by a tsunami in 1498; the Buddha has sat serenely in the open air ever since — weathered, green, and one of Japan's most beloved monuments.`
  },
  {
    id: "evt-kenmu",
    name: "The Kenmu Restoration",
    type: "politics",
    year: 1333,
    dateLabel: "1333–1336",
    period: "Nanboku-chō · restoration",
    location: { name: "The court of Emperor Go-Daigo, Kyoto", lat: 35.0254, lon: 135.7621 },
    summary: "Emperor Go-Daigo destroys the Kamakura shogunate and tries to restore direct imperial rule — a bold experiment that collapses in three years.",
    details: `Having toppled the Kamakura shogunate in 1333 with warriors such as Ashikaga Takauji and Nitta Yoshisada, Emperor Go-Daigo attempted to govern directly, without a shogun — the Kenmu Restoration.

But his court-centred rule alienated the very samurai who had won his throne; rewards favoured nobles over warriors. Within three years Takauji turned against him, drove him from Kyoto, and enthroned a rival emperor — splitting Japan into the Northern and Southern Courts and opening the Nanboku-chō wars.`
  },
  {
    id: "evt-muromachi-founded",
    name: "The Muromachi Shogunate",
    type: "politics",
    year: 1338,
    dateLabel: "1338",
    period: "Muromachi · governance",
    location: { name: "The Ashikaga shogunate, Kyoto", lat: 35.0299, lon: 135.7553 },
    summary: "Ashikaga Takauji is named shogun and founds the Muromachi shogunate — basing warrior government in Kyoto, entwined with the imperial court.",
    details: `In 1338 Ashikaga Takauji took the title of shogun and established the Ashikaga shogunate, later named for the Muromachi district of Kyoto where his heirs built their palace. Unlike the Kamakura regime, it sat in the capital itself, binding warrior rule to court culture.

Its grip on the provincial military governors (shugo) was always precarious, and it presided over the long Northern–Southern Court schism — yet under it the brilliant Kitayama and Higashiyama cultures would flower.`
  },
  {
    id: "evt-courts-reunify",
    name: "Reunification of the Courts",
    type: "politics",
    year: 1392,
    dateLabel: "1392",
    period: "Muromachi · politics",
    location: { name: "Kyoto", lat: 35.0211, lon: 135.7559 },
    summary: "After 56 years, the rival Northern and Southern imperial courts are reunited under the shogun Ashikaga Yoshimitsu.",
    details: `The schism between the Northern Court (backed by the Ashikaga in Kyoto) and the Southern Court (Go-Daigo's line, exiled at Yoshino) had divided Japan since 1336. In 1392 the shogun Ashikaga Yoshimitsu negotiated the Southern emperor's return and the handover of the imperial regalia, on a promise that the two lines would alternate the throne.

The promise was soon broken, but the reunification marked the height of Ashikaga power — and ushered in the shogunate's cultural golden age.`
  },
  {
    id: "evt-kinkakuji",
    name: "Kinkaku-ji and the Kitayama Culture",
    type: "culture",
    year: 1397,
    dateLabel: "1397",
    period: "Muromachi · culture",
    location: { name: "Kinkaku-ji, Kyoto", lat: 35.0394, lon: 135.7292 },
    summary: "Yoshimitsu builds the Golden Pavilion — centrepiece of a glittering Muromachi culture that also perfected the Noh theatre.",
    details: `At the height of his power Ashikaga Yoshimitsu built the gold-leafed Kinkaku-ji (Golden Pavilion) at Kitayama in 1397, a retirement villa of almost imperial splendour. It gave its name to the Kitayama culture — a fusion of warrior, courtly, and Zen taste, enriched by renewed trade with Ming China.

Under Yoshimitsu's patronage the actor-playwright Zeami perfected the Noh theatre, while ink painting, linked verse (renga), and the tea gathering took the refined forms that still define Japanese art.`
  }
];
