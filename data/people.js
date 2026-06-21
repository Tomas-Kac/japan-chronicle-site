// =====================================================================
// PEOPLE  —  the actors of Japanese history (a map of people, not just fights)
// =====================================================================
// Toggle the "People" overlay (top-right layer control) to show these.
// Each person is pinned at a characteristic place (a seat of power, a temple,
// a home province). Unlike a battle, a person has a LIFESPAN: when the overlay
// is on, a figure appears on the map for every year between their birth and
// death, and their birth & death years join the slider's ticks. "Show all
// years" shows every figure at once. Click a pin for a short biography and a
// list of the battles they fought (which link straight to those battle panels).
//
// role is one of:
//   "sovereign"  emperors, shoguns & regents who ruled   (♔, gold)
//   "warlord"    daimyō, unifiers, generals & samurai     (⚔, terra)
//   "religious"  monks & founders of schools              (☸, teal)
//   "culture"    poets, writers & artists                 (✎, plum)
//   "statesman"  reformers, regents & political architects (⚑, slate)
//
// Fields: id, name, role, born, died (year, CE), dateLabel, period,
//         location{name,lat,lon}, summary, bio (backtick string),
//         battles:[ battle ids ], images:[{src,caption}].
// Dates marked "c." are traditional/approximate where the sources disagree.
// =====================================================================

const PEOPLE = [
  // ---------------- Asuka – Nara ----------------
  {
    id: "prince-shotoku",
    name: "Prince Shōtoku",
    role: "sovereign",
    born: 574, died: 622,
    dateLabel: "574–622",
    period: "Asuka · prince-regent",
    location: { name: "Ikaruga (Hōryū-ji), Yamato", lat: 34.6147, lon: 135.7341 },
    summary: "The prince-regent who set Buddhism and a Chinese-style state at the heart of the young Japanese court.",
    bio: `Regent for his aunt, Empress Suiko, Prince Shōtoku (Umayado) is remembered as the architect of Japan's first centralised, continental-style government. Tradition credits him with the Seventeen-Article Constitution (604) and the twelve-cap court-rank system, and with sending the first official embassies to Sui China.

A devout patron of Buddhism, he founded Hōryū-ji and Shitennō-ji and helped secure the new faith's place at court after the Soga victory over the Mononobe (587). Later venerated almost as a saint, his idealised image long appeared on Japanese banknotes.`,
    battles: ["shigisan"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sh%C5%8Dtoku_Taishi_Sh%C5%8Dmanky%C5%8D_K%C5%8Dsan.jpg/960px-Sh%C5%8Dtoku_Taishi_Sh%C5%8Dmanky%C5%8D_K%C5%8Dsan.jpg",
        caption: "Prince Shōtoku — Wikimedia Commons."
      }
    ]
  },
  {
    id: "emperor-tenmu",
    name: "Emperor Tenmu",
    role: "sovereign",
    born: 631, died: 686,
    dateLabel: "c. 631 – 686",
    period: "Asuka · emperor",
    location: { name: "Asuka (Kiyomihara Palace), Yamato", lat: 34.4793, lon: 135.8200 },
    summary: "Seized the throne in Japan's largest ancient civil war and forged a centralised imperial state.",
    bio: `Prince Ōama took the throne as Emperor Tenmu after winning the Jinshin War of 672 — the bloodiest succession struggle of ancient Japan — against his nephew Prince Ōtomo. The victory let him rebuild the monarchy on his own terms.

Tenmu concentrated power in the imperial house, reorganised court ranks and the provinces, promoted Buddhism as a state religion, and ordered the compilation of the histories that became the Kojiki and Nihon Shoki. It was under him that the title tennō ("heavenly sovereign") and arguably the name "Nihon" took hold.`,
    battles: ["jinshin"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Emperor_Tenmu.jpg/960px-Emperor_Tenmu.jpg",
        caption: "Emperor Tenmu — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Heian ----------------
  {
    id: "saicho",
    name: "Saichō (Dengyō Daishi)",
    role: "religious",
    born: 767, died: 822,
    dateLabel: "767–822",
    period: "Heian · monk",
    location: { name: "Enryaku-ji, Mt Hiei (Ōmi/Yamashiro)", lat: 35.0714, lon: 135.8107 },
    summary: "Founder of Japanese Tendai Buddhism and of Enryaku-ji, the great monastery above Kyoto.",
    bio: `After studying on Mt Tiantai in China, Saichō established the Tendai school in Japan and built its headquarters, Enryaku-ji, on Mt Hiei overlooking the new capital of Heian-kyō. His insistence on the Mahāyāna ordination platform broke the old Nara monasteries' monopoly on ordaining monks.

Mt Hiei became the seedbed of medieval Japanese Buddhism: Hōnen, Shinran, Dōgen and Nichiren all trained there before founding their own schools. Saichō was posthumously honoured as Dengyō Daishi.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/%E6%9C%80%E6%BE%84%E5%83%8F_%E4%B8%80%E4%B9%97%E5%AF%BA%E8%94%B5_%E5%B9%B3%E5%AE%89%E6%99%82%E4%BB%A3.jpg/960px-%E6%9C%80%E6%BE%84%E5%83%8F_%E4%B8%80%E4%B9%97%E5%AF%BA%E8%94%B5_%E5%B9%B3%E5%AE%89%E6%99%82%E4%BB%A3.jpg",
        caption: "Saichō (Dengyō Daishi) — Wikimedia Commons."
      }
    ]
  },
  {
    id: "kukai",
    name: "Kūkai (Kōbō Daishi)",
    role: "religious",
    born: 774, died: 835,
    dateLabel: "774–835",
    period: "Heian · monk",
    location: { name: "Kongōbu-ji, Mt Kōya (Kii)", lat: 34.2131, lon: 135.5849 },
    summary: "Founder of Shingon esoteric Buddhism and one of the most revered figures in Japanese history.",
    bio: `Kūkai brought esoteric (Vajrayāna) Buddhism from Tang China and founded the Shingon school, establishing its monastic centre on remote Mt Kōya. A polymath credited as a master calligrapher, poet and engineer, he became one of the towering cultural figures of the Heian age.

Popular tradition holds that he did not die but entered eternal meditation on Kōya, awaiting the future Buddha. Venerated as Kōbō Daishi, he is the focus of the 88-temple Shikoku pilgrimage still walked today.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Eight_Patriarchs_of_the_Shingon_Sect_of_Buddhism_Kukai_Cropped.jpg/960px-Eight_Patriarchs_of_the_Shingon_Sect_of_Buddhism_Kukai_Cropped.jpg",
        caption: "Kūkai (Kōbō Daishi) — Wikimedia Commons."
      }
    ]
  },
  {
    id: "sei-shonagon",
    name: "Sei Shōnagon",
    role: "culture",
    born: 966, died: 1025,
    dateLabel: "c. 966 – c. 1025",
    period: "Heian · court author",
    location: { name: "Heian-kyō (the imperial court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "Court lady whose Pillow Book is one of the sharpest portraits of Heian aristocratic life.",
    bio: `A lady-in-waiting to Empress Teishi, Sei Shōnagon wrote The Pillow Book (Makura no Sōshi), a brilliant, witty collection of lists, anecdotes and observations on life in the Heian court. It stands beside The Tale of Genji as a masterpiece of the era's golden age of women's literature.

Her acid wit and aesthetic snobbery — and her famous rivalry with Murasaki Shikibu, who served the competing empress — make her one of the most vivid personalities to survive from classical Japan.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Hyakuninisshu_062.jpg",
        caption: "Sei Shōnagon — Wikimedia Commons."
      }
    ]
  },
  {
    id: "murasaki-shikibu",
    name: "Murasaki Shikibu",
    role: "culture",
    born: 973, died: 1014,
    dateLabel: "c. 973 – c. 1014",
    period: "Heian · court author",
    location: { name: "Heian-kyō (the imperial court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "Author of The Tale of Genji, often called the world's first novel.",
    bio: `A lady-in-waiting to Empress Shōshi, Murasaki Shikibu wrote The Tale of Genji (Genji Monogatari) around 1008 — a sweeping, psychologically subtle story of the courtier Hikaru Genji that is widely regarded as the world's first full-length novel and the supreme classic of Japanese literature.

Her diary also survives, giving a rare first-hand view of the glittering, hierarchical world of the Heian court at the height of Fujiwara power.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Murasaki-Shikibu-composing-Genji-Monogatari.png/960px-Murasaki-Shikibu-composing-Genji-Monogatari.png",
        caption: "Murasaki Shikibu — Wikimedia Commons."
      }
    ]
  },
  {
    id: "fujiwara-michinaga",
    name: "Fujiwara no Michinaga",
    role: "statesman",
    born: 966, died: 1028,
    dateLabel: "966–1028",
    period: "Heian · regent",
    location: { name: "Heian-kyō (the court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "The regent at the zenith of Fujiwara power, who ruled through his daughters' marriages to emperors.",
    bio: `Michinaga brought the Fujiwara regency to its peak. By marrying four of his daughters to emperors, he made himself grandfather and father-in-law to a line of sovereigns and governed as the power behind the throne — without ever holding the office of regent for long himself.

His famous "full moon" poem — that the world was his, "like the full moon, lacking nothing" — captures the confidence of the age. His court patronised Murasaki Shikibu and Sei Shōnagon, making his rule the cultural high-water mark of the Heian period.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Fujiwara_no_Michinaga_2.jpg",
        caption: "Fujiwara no Michinaga — Wikimedia Commons."
      }
    ]
  },
  {
    id: "taira-no-masakado",
    name: "Taira no Masakado",
    role: "warlord",
    born: 903, died: 940,
    dateLabel: "c. 903 – 940",
    period: "Heian · rebel",
    location: { name: "Bandō, Shimōsa (the eastern provinces)", lat: 36.0489, lon: 139.8886 },
    summary: "The eastern warrior who rebelled against the court and declared himself a 'new emperor'.",
    bio: `A provincial member of the Taira, Masakado turned a local feud into open revolt against the Heian court, overrunning the eastern provinces and proclaiming himself Shinnō, a "new emperor" — an almost unthinkable challenge to the throne.

He was killed in 940, but his rising exposed how far real power had slipped into the hands of armed provincial warriors, foreshadowing the samurai age. His vengeful spirit became legendary, and his shrine (kubizuka) still stands in the heart of modern Tokyo.`,
    battles: ["masakado"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Taira_no_Masakado_01.jpg",
        caption: "Taira no Masakado — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Genpei ----------------
  {
    id: "taira-no-kiyomori",
    name: "Taira no Kiyomori",
    role: "warlord",
    born: 1118, died: 1181,
    dateLabel: "1118–1181",
    period: "Heian/Genpei · warlord",
    location: { name: "Rokuhara, Heian-kyō (Kyoto)", lat: 35.0000, lon: 135.7740 },
    summary: "First warrior to seize the court, whose Taira supremacy provoked the Genpei War.",
    bio: `By winning the Hōgen (1156) and Heiji (1160) disturbances, Kiyomori made the Taira the first warrior clan to dominate the imperial court. He took the office of Grand Minister, married his daughter to an emperor, and placed his infant grandson Antoku on the throne.

Taira arrogance and Kiyomori's heavy hand alienated the court, the temples and the rival Minamoto, igniting the Genpei War (1180–85). He died of fever in 1181, before seeing his house annihilated — a downfall immortalised in The Tale of the Heike.`,
    battles: ["hogen", "heiji"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg/960px-Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg",
        caption: "Taira no Kiyomori — Wikimedia Commons."
      }
    ]
  },
  {
    id: "minamoto-yoshitsune",
    name: "Minamoto no Yoshitsune",
    role: "warlord",
    born: 1159, died: 1189,
    dateLabel: "1159–1189",
    period: "Genpei · commander",
    location: { name: "Heian-kyō (Kyoto), his campaign base", lat: 35.0116, lon: 135.7681 },
    summary: "The brilliant young general who destroyed the Taira — then was hunted down by his own brother.",
    bio: `Yoshitsune was the tactical genius of the Genpei War. His daring victories at Ichi-no-Tani, Yashima and finally Dan-no-Ura (1185) annihilated the Taira fleet and clan, winning the war for the Minamoto.

But his success and his court honours made his elder brother Yoritomo fear him. Driven into flight, Yoshitsune was cornered at Hiraizumi and forced to take his own life in 1189. His tragic heroism made him one of the most beloved figures in Japanese legend, the archetype of the noble warrior brought down by jealousy.`,
    battles: ["ichi-no-tani", "yashima", "dan-no-ura", "awazu"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Minamoto_no_Yoshitsune.jpg/960px-Minamoto_no_Yoshitsune.jpg",
        caption: "Minamoto no Yoshitsune — Wikimedia Commons."
      }
    ]
  },
  {
    id: "tomoe-gozen",
    name: "Tomoe Gozen",
    role: "warlord",
    born: 1157, died: 1247,
    dateLabel: "fl. 1180s",
    period: "Genpei · woman warrior",
    location: { name: "Awazu, Ōmi (near Lake Biwa)", lat: 35.0083, lon: 135.8767 },
    summary: "The most famous woman warrior of the samurai epics, who rode with Kiso Yoshinaka.",
    bio: `Tomoe Gozen appears in The Tale of the Heike as a warrior of extraordinary skill — a peerless archer and rider "worth a thousand men" — who fought beside the general Kiso (Minamoto) Yoshinaka. At the Battle of Awazu in 1184, as Yoshinaka's army collapsed, she is said to have taken an enemy head in a last show of valour before leaving the field.

Her later life is unknown and her historicity debated, but she became the enduring archetype of the onna-musha, the fighting woman of medieval Japan.`,
    battles: ["awazu"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kokon_hime_kagami_Tomoe_onna_by_Tsukioka_Yoshitoshi.jpg",
        caption: "Tomoe Gozen — Wikimedia Commons."
      }
    ]
  },
  {
    id: "minamoto-yoritomo",
    name: "Minamoto no Yoritomo",
    role: "sovereign",
    born: 1147, died: 1199,
    dateLabel: "1147–1199",
    period: "Genpei/Kamakura · first shogun",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "Victor of the Genpei War and founder of the Kamakura shogunate — Japan's first warrior government.",
    bio: `Exiled as a boy after his father's defeat, Yoritomo rose from Izu to lead the Minamoto to victory over the Taira. Rather than settle at the imperial court, he built his own government far to the east at Kamakura, rewarding his vassals with land and appointing military governors (shugo) and stewards (jitō) across the country.

Named sei-i taishōgun in 1192, he created the bakufu — the shogunate — that would let warriors rule Japan, in one form or another, for nearly 700 years. His political genius was matched by ruthlessness, not least toward his own brother Yoshitsune.`,
    battles: ["ishibashiyama", "fujigawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Minamoto_no_Yoritomo.jpg/960px-Minamoto_no_Yoritomo.jpg",
        caption: "Minamoto no Yoritomo — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Kamakura ----------------
  {
    id: "hojo-tokimune",
    name: "Hōjō Tokimune",
    role: "sovereign",
    born: 1251, died: 1284,
    dateLabel: "1251–1284",
    period: "Kamakura · regent (shikken)",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "The young regent who led Japan through the two Mongol invasions.",
    bio: `As shikken (regent) of the Kamakura shogunate, Tokimune held real power while the Hōjō ruled in the shogun's name. In his twenties he faced the gravest external threat in Japan's history: the Mongol invasions of Kublai Khan in 1274 and 1281.

He refused the Khan's demands, rallied the warriors of Kyūshū behind defensive walls, and twice saw the vast invasion fleets wrecked by storms remembered as the kamikaze, the "divine winds". A patron of Zen, he founded Engaku-ji at Kamakura. The ruinous cost of the defence, however, fatally strained the shogunate he saved.`,
    battles: ["bunei-mongol-1274", "koan-mongol-1281"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/H%C5%8Dj%C5%8D_Tokimune.jpg/960px-H%C5%8Dj%C5%8D_Tokimune.jpg",
        caption: "Hōjō Tokimune — Wikimedia Commons."
      }
    ]
  },
  {
    id: "nichiren",
    name: "Nichiren",
    role: "religious",
    born: 1222, died: 1282,
    dateLabel: "1222–1282",
    period: "Kamakura · monk",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "Fiery prophet-monk who founded the Buddhism that bears his name.",
    bio: `Nichiren taught that salvation lay solely in devotion to the Lotus Sutra, expressed in the chant Namu-myōhō-renge-kyō. Uncompromising and combative, he denounced the other Buddhist schools and warned that Japan's misrule would bring invasion and disaster — a prophecy that seemed vindicated when the Mongols came.

His attacks on the authorities earned him exile and a famous brush with execution. The school he founded, Nichiren Buddhism, became one of the most distinctive and enduring strands of Japanese religion.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Nichiren_Daishonin_Hakii_Portrait.jpg",
        caption: "Nichiren — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Nanboku-chō ----------------
  {
    id: "emperor-go-daigo",
    name: "Emperor Go-Daigo",
    role: "sovereign",
    born: 1288, died: 1339,
    dateLabel: "1288–1339",
    period: "Nanboku-chō · emperor",
    location: { name: "Yoshino (the Southern Court), Yamato", lat: 34.3666, lon: 135.8584 },
    summary: "The emperor who toppled the Kamakura shogunate and tried to restore direct imperial rule.",
    bio: `Go-Daigo refused to be a figurehead. He plotted against the Kamakura shogunate, was exiled, escaped, and — with warriors such as Kusunoki Masashige, Ashikaga Takauji and Nitta Yoshisada — brought it down in 1333, launching the Kenmu Restoration of direct imperial government.

His attempt to rule without the warriors quickly collapsed. When Takauji turned against him and set up a rival emperor in Kyoto, Go-Daigo fled south to Yoshino and founded the Southern Court, splitting Japan into two rival imperial lines for nearly sixty years.`,
    battles: ["chihaya-1333", "fall-of-kamakura-1333", "minatogawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Go-Daigo.jpg",
        caption: "Emperor Go-Daigo — Wikimedia Commons."
      }
    ]
  },
  {
    id: "kusunoki-masashige",
    name: "Kusunoki Masashige",
    role: "warlord",
    born: 1294, died: 1336,
    dateLabel: "c. 1294 – 1336",
    period: "Nanboku-chō · loyalist commander",
    location: { name: "Chihaya-Akasaka, Kawachi", lat: 34.4197, lon: 135.6486 },
    summary: "The model of samurai loyalty, who died for Emperor Go-Daigo against hopeless odds.",
    bio: `A master of guerrilla and siege warfare, Kusunoki Masashige held off vastly larger shogunate armies at the mountain forts of Akasaka and Chihaya, buying the time that let Go-Daigo's revolt succeed in 1333.

When Ashikaga Takauji turned on the emperor, Masashige advised retreat; overruled, he obeyed the doomed order to fight and was destroyed at Minatogawa in 1336. His self-sacrificing loyalty made him a national symbol of devotion to the throne for centuries afterward.`,
    battles: ["akasaka", "chihaya-1333", "minatogawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kusunoki_Masashige.JPG/960px-Kusunoki_Masashige.JPG",
        caption: "Kusunoki Masashige — Wikimedia Commons."
      }
    ]
  },
  {
    id: "nitta-yoshisada",
    name: "Nitta Yoshisada",
    role: "warlord",
    born: 1301, died: 1338,
    dateLabel: "c. 1301 – 1338",
    period: "Nanboku-chō · loyalist commander",
    location: { name: "Kamakura, Sagami (his great victory)", lat: 35.3197, lon: 139.5503 },
    summary: "The general who stormed Kamakura and ended the shogunate, loyal to Go-Daigo to the last.",
    bio: `In 1333 Nitta Yoshisada led the eastern assault that broke into Kamakura and destroyed the Hōjō regency, ending the Kamakura shogunate. Legend says the sea itself parted for his attack along the shore after he cast his sword into the waves.

A staunch loyalist of the Southern Court, he became Ashikaga Takauji's great rival. After years of campaigning he was killed at Echizen in 1338, his cause failing as the Ashikaga consolidated power in the north.`,
    battles: ["fall-of-kamakura-1333", "kanegasaki-1337"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Nitta_Yoshisada.jpg",
        caption: "Nitta Yoshisada — Wikimedia Commons."
      }
    ]
  },
  {
    id: "ashikaga-takauji",
    name: "Ashikaga Takauji",
    role: "sovereign",
    born: 1305, died: 1358,
    dateLabel: "1305–1358",
    period: "Nanboku-chō · first Ashikaga shogun",
    location: { name: "Muromachi, Heian-kyō (Kyoto)", lat: 35.0300, lon: 135.7530 },
    summary: "Founder of the Ashikaga (Muromachi) shogunate, which ruled from Kyoto for over two centuries.",
    bio: `Takauji first fought for Go-Daigo, helping destroy the Kamakura shogunate in 1333. But when the emperor's restoration failed the warriors, he rebelled, defeated the loyalists at Minatogawa (1336), and installed a rival emperor in Kyoto.

Named shogun in 1338, he founded the Ashikaga shogunate, governed from the Muromachi district of Kyoto. His regime presided over the long split between Northern and Southern Courts and over a brilliant courtly culture, even as it never fully controlled the provincial warlords.`,
    battles: ["tatarahama-1336", "minatogawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ashikaga_Takauji_J%C5%8Ddo-ji.jpg/960px-Ashikaga_Takauji_J%C5%8Ddo-ji.jpg",
        caption: "Ashikaga Takauji — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Sengoku ----------------
  {
    id: "takeda-shingen",
    name: "Takeda Shingen",
    role: "warlord",
    born: 1521, died: 1573,
    dateLabel: "1521–1573",
    period: "Sengoku · daimyō of Kai",
    location: { name: "Kōfu (Tsutsujigasaki), Kai", lat: 35.6642, lon: 138.5685 },
    summary: "The 'Tiger of Kai', one of the most feared generals of the warring states.",
    bio: `Lord of Kai, Takeda Shingen built one of the most formidable war machines of the age, famed for its cavalry and the banner motto Fūrinkazan — "swift as wind, silent as forest, fierce as fire, immovable as mountain." His repeated clashes with Uesugi Kenshin at Kawanakajima became the stuff of legend.

Late in life he crushed the young Tokugawa Ieyasu at Mikatagahara (1573) and was marching toward Kyoto when he died, removing the one rival Oda Nobunaga most feared.`,
    battles: ["kawanakajima", "uedahara", "odaihara", "mimasetoge", "shiojiritoge", "mikatagahara"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Takeda Shingen — Wikimedia Commons."
      }
    ]
  },
  {
    id: "uesugi-kenshin",
    name: "Uesugi Kenshin",
    role: "warlord",
    born: 1530, died: 1578,
    dateLabel: "1530–1578",
    period: "Sengoku · daimyō of Echigo",
    location: { name: "Kasugayama Castle, Echigo", lat: 37.1463, lon: 138.2361 },
    summary: "The 'Dragon of Echigo', a brilliant tactician who styled himself the god of war.",
    bio: `Devout, austere and a superb field commander, Uesugi Kenshin dominated the Hokuriku region from his fortress at Kasugayama. He revered the war-god Bishamonten and fought, he claimed, for honour and justice rather than conquest.

His five battles with Takeda Shingen at Kawanakajima are among the most celebrated duels in samurai history. Late in life he crushed an Oda army at Tedorigawa (1577), proving even Nobunaga's forces could be beaten, before his sudden death in 1578.`,
    battles: ["kawanakajima", "tedorigawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Uesugi_Kenshin_Portrait_from_Uesugi_Shrine.png",
        caption: "Uesugi Kenshin — Wikimedia Commons."
      }
    ]
  },
  {
    id: "oda-nobunaga",
    name: "Oda Nobunaga",
    role: "warlord",
    born: 1534, died: 1582,
    dateLabel: "1534–1582",
    period: "Sengoku · unifier",
    location: { name: "Azuchi Castle, Ōmi", lat: 35.1553, lon: 136.1390 },
    summary: "The ruthless innovator who broke the old order and began the unification of Japan.",
    bio: `From a minor Owari base, Nobunaga rose by audacity — destroying a far larger Imagawa army at Okehazama (1560) — and by embracing new methods: massed firearms, professional infantry, castle towns and free markets. He toppled the last Ashikaga shogun, broke the warrior-monks, and won the gunpowder battle of Nagashino (1575).

By 1582 he controlled central Japan and the path to unification lay open. Then his own general Akechi Mitsuhide turned on him at the Honnō-ji in Kyoto, where Nobunaga died in the flames — leaving his work to be completed by Hideyoshi and Ieyasu.`,
    battles: ["okehazama", "anegawa", "nagashino", "kizugawaguchi", "honnoji"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Odanobunaga.jpg/960px-Odanobunaga.jpg",
        caption: "Oda Nobunaga — Wikimedia Commons."
      }
    ]
  },
  {
    id: "sen-no-rikyu",
    name: "Sen no Rikyū",
    role: "culture",
    born: 1522, died: 1591,
    dateLabel: "1522–1591",
    period: "Sengoku · tea master",
    location: { name: "Sakai (the merchant city), Izumi", lat: 34.5733, lon: 135.4830 },
    summary: "The tea master who perfected the way of tea — and was ordered to die by Hideyoshi.",
    bio: `Sen no Rikyū gave the Japanese tea ceremony (chanoyu) its enduring form, distilling it into an aesthetic of wabi: rustic simplicity, restraint and the beauty of the imperfect. As tea master to both Nobunaga and Hideyoshi, he wielded quiet cultural authority at the summit of power.

His closeness to Hideyoshi turned to friction, and in 1591 the ruler ordered him to commit seppuku. His influence on Japanese art, architecture and taste, however, has never faded.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sen_no_Rikyu_JPN_%28cropped%29.jpg/960px-Sen_no_Rikyu_JPN_%28cropped%29.jpg",
        caption: "Sen no Rikyū — Wikimedia Commons."
      }
    ]
  },
  {
    id: "toyotomi-hideyoshi",
    name: "Toyotomi Hideyoshi",
    role: "warlord",
    born: 1537, died: 1598,
    dateLabel: "1537–1598",
    period: "Sengoku/Momoyama · unifier",
    location: { name: "Osaka Castle, Settsu", lat: 34.6873, lon: 135.5259 },
    summary: "The peasant who rose to rule all Japan and complete its unification.",
    bio: `Born a commoner, Hideyoshi rose through Nobunaga's ranks by sheer ability. After avenging his lord at Yamazaki (1582) and outmanoeuvring his rivals, he completed the unification of Japan, crowned by the great siege of Odawara in 1590.

As ruler he froze society in place — the famous "sword hunt" disarmed the peasantry and separated farmer from warrior — and built Osaka Castle as his seat. Barred by his birth from the title of shogun, he ruled as imperial regent (kampaku). His last years were marred by two ruinous invasions of Korea.`,
    battles: ["yamazaki", "shizugatake", "komaki-nagakute", "odawara-1590"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png/960px-Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png",
        caption: "Toyotomi Hideyoshi — Wikimedia Commons."
      }
    ]
  },
  {
    id: "date-masamune",
    name: "Date Masamune",
    role: "warlord",
    born: 1567, died: 1636,
    dateLabel: "1567–1636",
    period: "Sengoku/Edo · daimyō of Mutsu",
    location: { name: "Sendai Castle, Mutsu", lat: 38.2528, lon: 140.8694 },
    summary: "The one-eyed 'Dragon of Ōshū' who carved out the great northern domain of Sendai.",
    bio: `Blind in one eye from childhood smallpox — hence his nickname, the One-Eyed Dragon — Masamune became the dominant warlord of the far north, winning his realm in battles such as Hitotoribashi and Suriagahara before submitting, just in time, to Hideyoshi.

Under the Tokugawa he founded the city of Sendai and ruled one of Japan's largest domains. Famously, he even dispatched an embassy across the Pacific and Atlantic to Mexico, Spain and Rome — one of the boldest diplomatic ventures of the age.`,
    battles: ["hitotoribashi", "suriagehara", "koriyama-campaign"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Date_Masamune02.jpg/960px-Date_Masamune02.jpg",
        caption: "Date Masamune — Wikimedia Commons."
      }
    ]
  },
  {
    id: "tokugawa-ieyasu",
    name: "Tokugawa Ieyasu",
    role: "warlord",
    born: 1543, died: 1616,
    dateLabel: "1543–1616",
    period: "Sengoku/Edo · founding shogun",
    location: { name: "Edo Castle, Musashi", lat: 35.6852, lon: 139.7528 },
    summary: "The patient victor of Sekigahara who founded the Tokugawa peace that lasted 250 years.",
    bio: `Held hostage as a child, Ieyasu spent decades as ally, rival and survivor — beaten by Shingen at Mikatagahara, allied with Nobunaga at Nagashino, holding his own against Hideyoshi at Komaki-Nagakute. After Hideyoshi's death he won the decisive Battle of Sekigahara (1600).

Named shogun in 1603, he made Edo his capital and destroyed the last Toyotomi loyalists at the siege of Osaka (1614–15). The regime he built — the Tokugawa shogunate — gave Japan two and a half centuries of unbroken internal peace.`,
    battles: ["mikatagahara", "nagashino", "komaki-nagakute", "sekigahara", "osaka-siege"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tokugawa_Ieyasu2.JPG/960px-Tokugawa_Ieyasu2.JPG",
        caption: "Tokugawa Ieyasu — Wikimedia Commons."
      }
    ]
  },
  {
    id: "sanada-yukimura",
    name: "Sanada Yukimura",
    role: "warlord",
    born: 1567, died: 1615,
    dateLabel: "1567–1615",
    period: "Sengoku/Edo · commander",
    location: { name: "Osaka Castle, Settsu (his last stand)", lat: 34.6873, lon: 135.5259 },
    summary: "Called 'the finest warrior in Japan' for his doomed defence of Osaka against the Tokugawa.",
    bio: `Sanada Yukimura (Nobushige) made his name defying far larger Tokugawa armies, first at Ueda and finally in the great siege of Osaka. There he built the Sanada-maru bastion and, in 1615, led a desperate charge that nearly reached Ieyasu's own command post.

Cut down in that last battle, he was hailed by his enemies as "the number-one warrior in Japan" (Hinomoto-ichi no tsuwamono). His heroic defiance made him one of the most popular samurai in later legend and theatre.`,
    battles: ["osaka-siege"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Sanada_Yukimura.jpg",
        caption: "Sanada Yukimura — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Edo ----------------
  {
    id: "matsuo-basho",
    name: "Matsuo Bashō",
    role: "culture",
    born: 1644, died: 1694,
    dateLabel: "1644–1694",
    period: "Edo · poet",
    location: { name: "Fukagawa, Edo (Musashi)", lat: 35.6800, lon: 139.7990 },
    summary: "The wandering poet who raised haiku to a high art.",
    bio: `Matsuo Bashō transformed the short hokku (later haiku) from light wordplay into a serious, contemplative art rooted in nature, season and the fleeting moment. From his riverside hut in Edo he set out on long journeys on foot across Japan.

The greatest of these became Oku no Hosomichi (The Narrow Road to the Deep North), a travel diary interweaving prose and verse that is one of the most beloved works of Japanese literature.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Basho_by_Morikawa_Kyoriku_%281656-1715%29.jpg",
        caption: "Matsuo Bashō — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Bakumatsu ----------------
  {
    id: "ii-naosuke",
    name: "Ii Naosuke",
    role: "statesman",
    born: 1815, died: 1860,
    dateLabel: "1815–1860",
    period: "Bakumatsu · chief minister (tairō)",
    location: { name: "Hikone Castle, Ōmi", lat: 35.2747, lon: 136.2519 },
    summary: "The chief minister who opened Japan to the West — and was assassinated for it.",
    bio: `As tairō, the shogunate's highest minister, Ii Naosuke pushed through the 1858 commercial treaties that opened Japan to foreign trade without imperial sanction. To crush the opposition he unleashed the Ansei Purge, jailing and executing dissident lords and activists.

His high-handedness made him the lightning rod for anti-shogunate fury. In 1860 he was cut down by Mito and Satsuma swordsmen outside the Sakurada Gate of Edo Castle — a killing that shattered the shogunate's prestige and accelerated its fall.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ii_Naosuke_crop.jpg/960px-Ii_Naosuke_crop.jpg",
        caption: "Ii Naosuke — Wikimedia Commons."
      }
    ]
  },
  {
    id: "sakamoto-ryoma",
    name: "Sakamoto Ryōma",
    role: "statesman",
    born: 1836, died: 1867,
    dateLabel: "1836–1867",
    period: "Bakumatsu · reformer",
    location: { name: "Kyoto (where he was assassinated)", lat: 35.0094, lon: 135.7610 },
    summary: "The low-ranking samurai who brokered the alliance that doomed the shogunate.",
    bio: `A restless visionary from Tosa, Sakamoto Ryōma slipped the bonds of his rank to work for a new Japan. He helped broker the secret Satsuma–Chōshū alliance (1866) that united the two great anti-shogunate domains, and his "Eight-Point Plan" sketched a modern constitutional state.

He pressed for the shogun to resign power peacefully to the emperor — which happened in 1867 — but was assassinated in Kyoto weeks later, at thirty-one. He never saw the Restoration he did so much to bring about, and became one of modern Japan's most romantic heroes.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sakamoto_Ryoma.jpg/960px-Sakamoto_Ryoma.jpg",
        caption: "Sakamoto Ryōma — Wikimedia Commons."
      }
    ]
  },
  {
    id: "saigo-takamori",
    name: "Saigō Takamori",
    role: "warlord",
    born: 1828, died: 1877,
    dateLabel: "1828–1877",
    period: "Bakumatsu · Satsuma leader",
    location: { name: "Kagoshima, Satsuma", lat: 31.5969, lon: 130.5572 },
    summary: "The Satsuma leader who commanded the imperial armies that overthrew the shogunate.",
    bio: `A towering figure of Satsuma, Saigō led the restoration forces in the Boshin War, winning at Toba-Fushimi and negotiating the surrender of Edo, before the campaigns at Ueno and in the north completed the shogunate's fall in 1868–69.

Disillusioned with the very Meiji government he had helped create, he later led the doomed Satsuma Rebellion of 1877 and died in its final battle — becoming the archetype of the tragic, principled samurai, the "last samurai" of legend.`,
    battles: ["anglo-satsuma-war", "toba-fushimi", "ueno", "aizu"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Saigo_Takamori_%28b%29.jpg/960px-Saigo_Takamori_%28b%29.jpg",
        caption: "Saigō Takamori — Wikimedia Commons."
      }
    ]
  },
  {
    id: "tokugawa-yoshinobu",
    name: "Tokugawa Yoshinobu",
    role: "sovereign",
    born: 1837, died: 1913,
    dateLabel: "1837–1913",
    period: "Bakumatsu · last shogun",
    location: { name: "Nijō Castle, Kyoto (where he resigned power)", lat: 35.0142, lon: 135.7480 },
    summary: "The fifteenth and last Tokugawa shogun, who surrendered power to the emperor.",
    bio: `Yoshinobu became shogun in 1866 as the regime crumbled. A capable reformer, he tried to remake the shogunate along Western lines — but, outmanoeuvred by Satsuma and Chōshū, he chose in 1867 to resign his authority to the emperor in the act known as the taisei hōkan.

Defeated at Toba-Fushimi in 1868, he withdrew rather than plunge Japan into total war, surrendering Edo. He lived on quietly for decades into the modern era he had helped usher in, the last of more than 250 years of Tokugawa shoguns.`,
    battles: ["toba-fushimi"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/31/1867_Osaka_Yoshinobu_Tokugawa.jpg",
        caption: "Tokugawa Yoshinobu — Wikimedia Commons."
      }
    ]
  },

  // ---------------- Added for fuller coverage (women across the eras) ----------------
  {
    id: "empress-suiko",
    name: "Empress Suiko",
    role: "sovereign",
    born: 554, died: 628,
    dateLabel: "554–628",
    period: "Asuka · empress",
    location: { name: "Asuka (Toyura/Oharida Palace), Yamato", lat: 34.4793, lon: 135.8200 },
    summary: "Japan's first reigning empress, on the throne through the formative Asuka reforms.",
    bio: `Suiko became Japan's first empress regnant in 593 and reigned for 35 years, with her nephew Prince Shōtoku serving as regent. Her reign saw Buddhism promoted as a state faith, the first Chinese-style court ranks and reforms, and official embassies to Sui China.

She is the first of several powerful women rulers of the Asuka–Nara age, when female sovereigns were not unusual — a foundational period for the imperial state.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Empress_Suiko_by_Tosa_Mitsuyoshi_1726_Eifukuji_Osaka.png/960px-Empress_Suiko_by_Tosa_Mitsuyoshi_1726_Eifukuji_Osaka.png",
        caption: "Empress Suiko — Wikimedia Commons."
      }
    ]
  },
  {
    id: "hojo-masako",
    name: "Hōjō Masako",
    role: "statesman",
    born: 1156, died: 1225,
    dateLabel: "1156–1225",
    period: "Kamakura · power behind the shogunate",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "The 'nun shogun' — Yoritomo's widow, who held real power over the early Kamakura shogunate.",
    bio: `Wife of Minamoto no Yoritomo and a daughter of the Hōjō, Masako took Buddhist vows on his death in 1199 yet kept decisive political power — earning the name "nun shogun" (ama-shōgun). With her father Tokimasa she helped establish the Hōjō regency that would dominate the Kamakura shogunate.

In the Jōkyū War of 1221 her rallying address is traditionally credited with steeling the eastern warriors against Retired Emperor Go-Toba, securing the warriors' victory over the court.`,
    battles: ["jokyu-war"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hojo_Masako.jpg/960px-Hojo_Masako.jpg",
        caption: "Hōjō Masako — Wikimedia Commons."
      }
    ]
  },
  {
    id: "hino-tomiko",
    name: "Hino Tomiko",
    role: "statesman",
    born: 1440, died: 1496,
    dateLabel: "1440–1496",
    period: "Muromachi · shogunal consort",
    location: { name: "Heian-kyō (the shogunal court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "Shogunal wife and shrewd financier whose succession struggle helped ignite the Ōnin War.",
    bio: `Wife of the eighth Ashikaga shogun, Yoshimasa, Tomiko was a formidable political and financial operator who amassed great wealth through moneylending and toll gates. Her determination to secure the succession for her infant son Yoshihisa, against Yoshimasa's brother Yoshimi, deepened the rivalry of the Hosokawa and Yamana houses.

That dispute erupted in 1467 into the Ōnin War, the decade-long conflict that gutted Kyoto and opened the Sengoku age.`,
    battles: ["onin"],
    images: []
  },
  {
    id: "tachibana-ginchiyo",
    name: "Tachibana Ginchiyo",
    role: "warlord",
    born: 1569, died: 1602,
    dateLabel: "1569–1602",
    period: "Sengoku · woman warrior",
    location: { name: "Yanagawa, Chikugo", lat: 33.1632, lon: 130.4017 },
    summary: "An onna-musha who inherited her clan's leadership and castle in her own right.",
    bio: `Daughter of the Ōtomo general Tachibana Dōsetsu, Ginchiyo inherited the headship of the Tachibana house and its castle in her own name — an extraordinary status for a woman of the age. Renowned as an onna-musha (woman warrior), she is said to have armed her ladies-in-waiting to help defend Tachibanayama Castle.

She married Tachibana Muneshige and is remembered for her readiness to take up arms in the defence of Yanagawa during the Sekigahara campaign of 1600.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/%E7%AB%8B%E8%8A%B1%E8%AA%BE%E5%8D%83%E4%BB%A3.jpg",
        caption: "Tachibana Ginchiyo — Wikimedia Commons."
      }
    ]
  }
];

// Make available to app.js (loaded as a plain script, like battles.js / events.js).
if (typeof window !== 'undefined') window.PEOPLE = PEOPLE;
