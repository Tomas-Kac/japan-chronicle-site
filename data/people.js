// =====================================================================
// PEOPLE, the actors of Japanese history (a map of people, not just fights)
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
    sources: [ { label: "Wikipedia: Prince Shōtoku", url: "https://en.wikipedia.org/wiki/Prince_Sh%C5%8Dtoku" } ],
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
        caption: "Prince Shōtoku, Wikimedia Commons."
      }
    ]
  },
  {
    id: "emperor-tenmu",
    sources: [ { label: "Wikipedia: Emperor Tenmu", url: "https://en.wikipedia.org/wiki/Emperor_Tenmu" } ],
    name: "Emperor Tenmu",
    role: "sovereign",
    born: 631, died: 686,
    dateLabel: "c. 631 – 686",
    period: "Asuka · emperor",
    location: { name: "Asuka (Kiyomihara Palace), Yamato", lat: 34.4793, lon: 135.8200 },
    summary: "Seized the throne in Japan's largest ancient civil war and forged a centralised imperial state.",
    bio: `Prince Ōama took the throne as Emperor Tenmu after winning the Jinshin War of 672, the bloodiest succession struggle of ancient Japan, against his nephew Prince Ōtomo. The victory let him rebuild the monarchy on his own terms.

Tenmu concentrated power in the imperial house, reorganised court ranks and the provinces, promoted Buddhism as a state religion, and ordered the compilation of the histories that became the Kojiki and Nihon Shoki. It was under him that the title tennō ("heavenly sovereign") and arguably the name "Nihon" took hold.`,
    battles: ["jinshin"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Emperor_Tenmu.jpg/960px-Emperor_Tenmu.jpg",
        caption: "Emperor Tenmu, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Heian ----------------
  {
    id: "saicho",
    sources: [ { label: "Wikipedia: Saichō", url: "https://en.wikipedia.org/wiki/Saich%C5%8D" } ],
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
        caption: "Saichō (Dengyō Daishi), Wikimedia Commons."
      }
    ]
  },
  {
    id: "kukai",
    sources: [ { label: "Wikipedia: Kūkai", url: "https://en.wikipedia.org/wiki/K%C5%ABkai" } ],
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
        caption: "Kūkai (Kōbō Daishi), Wikimedia Commons."
      }
    ]
  },
  {
    id: "sei-shonagon",
    sources: [ { label: "Wikipedia: Sei Shōnagon", url: "https://en.wikipedia.org/wiki/Sei_Sh%C5%8Dnagon" } ],
    name: "Sei Shōnagon",
    role: "culture",
    born: 966, died: 1025,
    dateLabel: "c. 966 – c. 1025",
    period: "Heian · court author",
    location: { name: "Heian-kyō (the imperial court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "Court lady whose Pillow Book is one of the sharpest portraits of Heian aristocratic life.",
    bio: `A lady-in-waiting to Empress Teishi, Sei Shōnagon wrote The Pillow Book (Makura no Sōshi), a brilliant, witty collection of lists, anecdotes and observations on life in the Heian court. It stands beside The Tale of Genji as a masterpiece of the era's golden age of women's literature.

Her acid wit and aesthetic snobbery, and her famous rivalry with Murasaki Shikibu, who served the competing empress, make her one of the most vivid personalities to survive from classical Japan.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Hyakuninisshu_062.jpg",
        caption: "Sei Shōnagon, Wikimedia Commons."
      }
    ]
  },
  {
    id: "murasaki-shikibu",
    sources: [ { label: "Wikipedia: Murasaki Shikibu", url: "https://en.wikipedia.org/wiki/Murasaki_Shikibu" } ],
    name: "Murasaki Shikibu",
    role: "culture",
    born: 973, died: 1014,
    dateLabel: "c. 973 – c. 1014",
    period: "Heian · court author",
    location: { name: "Heian-kyō (the imperial court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "Author of The Tale of Genji, often called the world's first novel.",
    bio: `A lady-in-waiting to Empress Shōshi, Murasaki Shikibu wrote The Tale of Genji (Genji Monogatari) around 1008, a sweeping, psychologically subtle story of the courtier Hikaru Genji that is widely regarded as the world's first full-length novel and the supreme classic of Japanese literature.

Her diary also survives, giving a rare first-hand view of the glittering, hierarchical world of the Heian court at the height of Fujiwara power.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Murasaki-Shikibu-composing-Genji-Monogatari.png/960px-Murasaki-Shikibu-composing-Genji-Monogatari.png",
        caption: "Murasaki Shikibu, Wikimedia Commons."
      }
    ]
  },
  {
    id: "fujiwara-michinaga",
    sources: [ { label: "Wikipedia: Fujiwara no Michinaga", url: "https://en.wikipedia.org/wiki/Fujiwara_no_Michinaga" } ],
    name: "Fujiwara no Michinaga",
    role: "statesman",
    born: 966, died: 1028,
    dateLabel: "966–1028",
    period: "Heian · regent",
    location: { name: "Heian-kyō (the court), Yamashiro", lat: 35.0116, lon: 135.7681 },
    summary: "The regent at the zenith of Fujiwara power, who ruled through his daughters' marriages to emperors.",
    bio: `Michinaga brought the Fujiwara regency to its peak. By marrying four of his daughters to emperors, he made himself grandfather and father-in-law to a line of sovereigns and governed as the power behind the throne, without ever holding the office of regent for long himself.

His famous "full moon" poem, that the world was his, "like the full moon, lacking nothing", captures the confidence of the age. His court patronised Murasaki Shikibu and Sei Shōnagon, making his rule the cultural high-water mark of the Heian period.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Fujiwara_no_Michinaga_2.jpg",
        caption: "Fujiwara no Michinaga, Wikimedia Commons."
      }
    ]
  },
  {
    id: "taira-no-masakado",
    sources: [ { label: "Wikipedia: Taira no Masakado", url: "https://en.wikipedia.org/wiki/Taira_no_Masakado" } ],
    name: "Taira no Masakado",
    role: "warlord",
    born: 903, died: 940,
    dateLabel: "c. 903 – 940",
    period: "Heian · rebel",
    location: { name: "Bandō, Shimōsa (the eastern provinces)", lat: 36.0489, lon: 139.8886 },
    summary: "The eastern warrior who rebelled against the court and declared himself a 'new emperor'.",
    bio: `A provincial member of the Taira, Masakado turned a local feud into open revolt against the Heian court, overrunning the eastern provinces and proclaiming himself Shinnō, a "new emperor", an almost unthinkable challenge to the throne.

He was killed in 940, but his rising exposed how far real power had slipped into the hands of armed provincial warriors, foreshadowing the samurai age. His vengeful spirit became legendary, and his shrine (kubizuka) still stands in the heart of modern Tokyo.`,
    battles: ["masakado"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Taira_no_Masakado_01.jpg",
        caption: "Taira no Masakado, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Genpei ----------------
  {
    id: "taira-no-kiyomori",
    sources: [ { label: "Wikipedia: Taira no Kiyomori", url: "https://en.wikipedia.org/wiki/Taira_no_Kiyomori" } ],
    name: "Taira no Kiyomori",
    role: "warlord",
    born: 1118, died: 1181,
    dateLabel: "1118–1181",
    period: "Heian/Genpei · warlord",
    location: { name: "Rokuhara, Heian-kyō (Kyoto)", lat: 35.0000, lon: 135.7740 },
    summary: "First warrior to seize the court, whose Taira supremacy provoked the Genpei War.",
    bio: `By winning the Hōgen (1156) and Heiji (1160) disturbances, Kiyomori made the Taira the first warrior clan to dominate the imperial court. He took the office of Grand Minister, married his daughter to an emperor, and placed his infant grandson Antoku on the throne.

Taira arrogance and Kiyomori's heavy hand alienated the court, the temples and the rival Minamoto, igniting the Genpei War (1180–85). He died of fever in 1181, before seeing his house annihilated, a downfall immortalised in The Tale of the Heike.`,
    battles: ["hogen", "heiji"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg/960px-Taira_no_Kiyomori%2CTenshiSekkanMiei.jpg",
        caption: "Taira no Kiyomori, Wikimedia Commons."
      }
    ]
  },
  {
    id: "minamoto-yoshitsune",
    sources: [ { label: "Wikipedia: Minamoto no Yoshitsune", url: "https://en.wikipedia.org/wiki/Minamoto_no_Yoshitsune" } ],
    name: "Minamoto no Yoshitsune",
    role: "warlord",
    born: 1159, died: 1189,
    dateLabel: "1159–1189",
    period: "Genpei · commander",
    location: { name: "Heian-kyō (Kyoto), his campaign base", lat: 35.0116, lon: 135.7681 },
    summary: "The brilliant young general who destroyed the Taira, then was hunted down by his own brother.",
    bio: `Yoshitsune was the tactical genius of the Genpei War. His daring victories at Ichi-no-Tani, Yashima and finally Dan-no-Ura (1185) annihilated the Taira fleet and clan, winning the war for the Minamoto.

But his success and his court honours made his elder brother Yoritomo fear him. Driven into flight, Yoshitsune was cornered at Hiraizumi and forced to take his own life in 1189. His tragic heroism made him one of the most beloved figures in Japanese legend, the archetype of the noble warrior brought down by jealousy.`,
    battles: ["ichi-no-tani", "yashima", "dan-no-ura", "awazu"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Minamoto_no_Yoshitsune.jpg/960px-Minamoto_no_Yoshitsune.jpg",
        caption: "Minamoto no Yoshitsune, Wikimedia Commons."
      }
    ]
  },
  {
    id: "tomoe-gozen",
    sources: [ { label: "Wikipedia: Tomoe Gozen", url: "https://en.wikipedia.org/wiki/Tomoe_Gozen" } ],
    name: "Tomoe Gozen",
    role: "warlord",
    born: 1157, died: 1247,
    dateLabel: "fl. 1180s",
    period: "Genpei · woman warrior",
    location: { name: "Awazu, Ōmi (near Lake Biwa)", lat: 35.0083, lon: 135.8767 },
    summary: "The most famous woman warrior of the samurai epics, who rode with Kiso Yoshinaka.",
    bio: `Tomoe Gozen appears in The Tale of the Heike as a warrior of extraordinary skill, a peerless archer and rider "worth a thousand men", who fought beside the general Kiso (Minamoto) Yoshinaka. At the Battle of Awazu in 1184, as Yoshinaka's army collapsed, she is said to have taken an enemy head in a last show of valour before leaving the field.

Her later life is unknown and her historicity debated, but she became the enduring archetype of the onna-musha, the fighting woman of medieval Japan.`,
    battles: ["awazu"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kokon_hime_kagami_Tomoe_onna_by_Tsukioka_Yoshitoshi.jpg",
        caption: "Tomoe Gozen, Wikimedia Commons."
      }
    ]
  },
  {
    id: "minamoto-yoritomo",
    sources: [ { label: "Wikipedia: Minamoto no Yoritomo", url: "https://en.wikipedia.org/wiki/Minamoto_no_Yoritomo" } ],
    name: "Minamoto no Yoritomo",
    role: "sovereign",
    born: 1147, died: 1199,
    dateLabel: "1147–1199",
    period: "Genpei/Kamakura · first shogun",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "Victor of the Genpei War and founder of the Kamakura shogunate, Japan's first warrior government.",
    bio: `Exiled as a boy after his father's defeat, Yoritomo rose from Izu to lead the Minamoto to victory over the Taira. Rather than settle at the imperial court, he built his own government far to the east at Kamakura, rewarding his vassals with land and appointing military governors (shugo) and stewards (jitō) across the country.

Named sei-i taishōgun in 1192, he created the bakufu, the shogunate, that would let warriors rule Japan, in one form or another, for nearly 700 years. His political genius was matched by ruthlessness, not least toward his own brother Yoshitsune.`,
    battles: ["ishibashiyama", "fujigawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Minamoto_no_Yoritomo.jpg/960px-Minamoto_no_Yoritomo.jpg",
        caption: "Minamoto no Yoritomo, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Kamakura ----------------
  {
    id: "hojo-tokimune",
    sources: [ { label: "Wikipedia: Hōjō Tokimune", url: "https://en.wikipedia.org/wiki/H%C5%8Dj%C5%8D_Tokimune" } ],
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
        caption: "Hōjō Tokimune, Wikimedia Commons."
      }
    ]
  },
  {
    id: "nichiren",
    sources: [ { label: "Wikipedia: Nichiren", url: "https://en.wikipedia.org/wiki/Nichiren" } ],
    name: "Nichiren",
    role: "religious",
    born: 1222, died: 1282,
    dateLabel: "1222–1282",
    period: "Kamakura · monk",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "Fiery prophet-monk who founded the Buddhism that bears his name.",
    bio: `Nichiren taught that salvation lay solely in devotion to the Lotus Sutra, expressed in the chant Namu-myōhō-renge-kyō. Uncompromising and combative, he denounced the other Buddhist schools and warned that Japan's misrule would bring invasion and disaster, a prophecy that seemed vindicated when the Mongols came.

His attacks on the authorities earned him exile and a famous brush with execution. The school he founded, Nichiren Buddhism, became one of the most distinctive and enduring strands of Japanese religion.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Nichiren_Daishonin_Hakii_Portrait.jpg",
        caption: "Nichiren, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Nanboku-chō ----------------
  {
    id: "emperor-go-daigo",
    sources: [ { label: "Wikipedia: Emperor Go-Daigo", url: "https://en.wikipedia.org/wiki/Emperor_Go-Daigo" } ],
    name: "Emperor Go-Daigo",
    role: "sovereign",
    born: 1288, died: 1339,
    dateLabel: "1288–1339",
    period: "Nanboku-chō · emperor",
    location: { name: "Yoshino (the Southern Court), Yamato", lat: 34.3666, lon: 135.8584 },
    summary: "The emperor who toppled the Kamakura shogunate and tried to restore direct imperial rule.",
    bio: `Go-Daigo refused to be a figurehead. He plotted against the Kamakura shogunate, was exiled, escaped, and, with warriors such as Kusunoki Masashige, Ashikaga Takauji and Nitta Yoshisada, brought it down in 1333, launching the Kenmu Restoration of direct imperial government.

His attempt to rule without the warriors quickly collapsed. When Takauji turned against him and set up a rival emperor in Kyoto, Go-Daigo fled south to Yoshino and founded the Southern Court, splitting Japan into two rival imperial lines for nearly sixty years.`,
    battles: ["chihaya-1333", "fall-of-kamakura-1333", "minatogawa"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Go-Daigo.jpg",
        caption: "Emperor Go-Daigo, Wikimedia Commons."
      }
    ]
  },
  {
    id: "kusunoki-masashige",
    sources: [ { label: "Wikipedia: Kusunoki Masashige", url: "https://en.wikipedia.org/wiki/Kusunoki_Masashige" } ],
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
        caption: "Kusunoki Masashige, Wikimedia Commons."
      }
    ]
  },
  {
    id: "nitta-yoshisada",
    sources: [ { label: "Wikipedia: Nitta Yoshisada", url: "https://en.wikipedia.org/wiki/Nitta_Yoshisada" } ],
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
        caption: "Nitta Yoshisada, Wikimedia Commons."
      }
    ]
  },
  {
    id: "ashikaga-takauji",
    sources: [ { label: "Wikipedia: Ashikaga Takauji", url: "https://en.wikipedia.org/wiki/Ashikaga_Takauji" } ],
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
        caption: "Ashikaga Takauji, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Sengoku ----------------
  {
    id: "takeda-shingen",
    sources: [ { label: "Wikipedia: Takeda Shingen", url: "https://en.wikipedia.org/wiki/Takeda_Shingen" } ],
    name: "Takeda Shingen",
    role: "warlord",
    born: 1521, died: 1573,
    dateLabel: "1521–1573",
    period: "Sengoku · daimyō of Kai",
    location: { name: "Kōfu (Tsutsujigasaki), Kai", lat: 35.6642, lon: 138.5685 },
    summary: "The 'Tiger of Kai', one of the most feared generals of the warring states.",
    bio: `Lord of Kai, Takeda Shingen built one of the most formidable war machines of the age, famed for its cavalry and the banner motto Fūrinkazan, "swift as wind, silent as forest, fierce as fire, immovable as mountain." His repeated clashes with Uesugi Kenshin at Kawanakajima became the stuff of legend.

Late in life he crushed the young Tokugawa Ieyasu at Mikatagahara (1573) and was marching toward Kyoto when he died, removing the one rival Oda Nobunaga most feared.`,
    battles: ["kawanakajima", "uedahara", "odaihara", "mimasetoge", "shiojiritoge", "mikatagahara"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Takeda_Harunobu.jpg/960px-Takeda_Harunobu.jpg",
        caption: "Takeda Shingen, Wikimedia Commons."
      }
    ]
  },
  {
    id: "uesugi-kenshin",
    sources: [ { label: "Wikipedia: Uesugi Kenshin", url: "https://en.wikipedia.org/wiki/Uesugi_Kenshin" } ],
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
        caption: "Uesugi Kenshin, Wikimedia Commons."
      }
    ]
  },
  {
    id: "oda-nobunaga",
    sources: [ { label: "Wikipedia: Oda Nobunaga", url: "https://en.wikipedia.org/wiki/Oda_Nobunaga" } ],
    name: "Oda Nobunaga",
    role: "warlord",
    born: 1534, died: 1582,
    dateLabel: "1534–1582",
    period: "Sengoku · unifier",
    location: { name: "Azuchi Castle, Ōmi", lat: 35.1553, lon: 136.1390 },
    summary: "The ruthless innovator who broke the old order and began the unification of Japan.",
    bio: `From a minor Owari base, Nobunaga rose by audacity, destroying a far larger Imagawa army at Okehazama (1560), and by embracing new methods: massed firearms, professional infantry, castle towns and free markets. He toppled the last Ashikaga shogun, broke the warrior-monks, and won the gunpowder battle of Nagashino (1575).

By 1582 he controlled central Japan and the path to unification lay open. Then his own general Akechi Mitsuhide turned on him at the Honnō-ji in Kyoto, where Nobunaga died in the flames, leaving his work to be completed by Hideyoshi and Ieyasu.`,
    battles: ["okehazama", "anegawa", "nagashino", "kizugawaguchi", "honnoji"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Odanobunaga.jpg/960px-Odanobunaga.jpg",
        caption: "Oda Nobunaga, Wikimedia Commons."
      }
    ]
  },
  {
    id: "sen-no-rikyu",
    sources: [ { label: "Wikipedia: Sen no Rikyū", url: "https://en.wikipedia.org/wiki/Sen_no_Riky%C5%AB" } ],
    name: "Sen no Rikyū",
    role: "culture",
    born: 1522, died: 1591,
    dateLabel: "1522–1591",
    period: "Sengoku · tea master",
    location: { name: "Sakai (the merchant city), Izumi", lat: 34.5733, lon: 135.4830 },
    summary: "The tea master who perfected the way of tea, and was ordered to die by Hideyoshi.",
    bio: `Sen no Rikyū gave the Japanese tea ceremony (chanoyu) its enduring form, distilling it into an aesthetic of wabi: rustic simplicity, restraint and the beauty of the imperfect. As tea master to both Nobunaga and Hideyoshi, he wielded quiet cultural authority at the summit of power.

His closeness to Hideyoshi turned to friction, and in 1591 the ruler ordered him to commit seppuku. His influence on Japanese art, architecture and taste, however, has never faded.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sen_no_Rikyu_JPN_%28cropped%29.jpg/960px-Sen_no_Rikyu_JPN_%28cropped%29.jpg",
        caption: "Sen no Rikyū, Wikimedia Commons."
      }
    ]
  },
  {
    id: "toyotomi-hideyoshi",
    sources: [ { label: "Wikipedia: Toyotomi Hideyoshi", url: "https://en.wikipedia.org/wiki/Toyotomi_Hideyoshi" } ],
    name: "Toyotomi Hideyoshi",
    role: "warlord",
    born: 1537, died: 1598,
    dateLabel: "1537–1598",
    period: "Sengoku/Momoyama · unifier",
    location: { name: "Osaka Castle, Settsu", lat: 34.6873, lon: 135.5259 },
    summary: "The peasant who rose to rule all Japan and complete its unification.",
    bio: `Born a commoner, Hideyoshi rose through Nobunaga's ranks by sheer ability. After avenging his lord at Yamazaki (1582) and outmanoeuvring his rivals, he completed the unification of Japan, crowned by the great siege of Odawara in 1590.

As ruler he froze society in place, the famous "sword hunt" disarmed the peasantry and separated farmer from warrior, and built Osaka Castle as his seat. Barred by his birth from the title of shogun, he ruled as imperial regent (kampaku). His last years were marred by two ruinous invasions of Korea.`,
    battles: ["yamazaki", "shizugatake", "komaki-nagakute", "odawara-1590"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png/960px-Toyotomi_Hideyoshi_c1598_Kodai-ji_Temple.png",
        caption: "Toyotomi Hideyoshi, Wikimedia Commons."
      }
    ]
  },
  {
    id: "date-masamune",
    sources: [ { label: "Wikipedia: Date Masamune", url: "https://en.wikipedia.org/wiki/Date_Masamune" } ],
    name: "Date Masamune",
    role: "warlord",
    born: 1567, died: 1636,
    dateLabel: "1567–1636",
    period: "Sengoku/Edo · daimyō of Mutsu",
    location: { name: "Sendai Castle, Mutsu", lat: 38.2528, lon: 140.8694 },
    summary: "The one-eyed 'Dragon of Ōshū' who carved out the great northern domain of Sendai.",
    bio: `Blind in one eye from childhood smallpox, hence his nickname, the One-Eyed Dragon, Masamune became the dominant warlord of the far north, winning his realm in battles such as Hitotoribashi and Suriagahara before submitting, just in time, to Hideyoshi.

Under the Tokugawa he founded the city of Sendai and ruled one of Japan's largest domains. Famously, he even dispatched an embassy across the Pacific and Atlantic to Mexico, Spain and Rome, one of the boldest diplomatic ventures of the age.`,
    battles: ["hitotoribashi", "suriagehara", "koriyama-campaign"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Date_Masamune02.jpg/960px-Date_Masamune02.jpg",
        caption: "Date Masamune, Wikimedia Commons."
      }
    ]
  },
  {
    id: "tokugawa-ieyasu",
    sources: [ { label: "Wikipedia: Tokugawa Ieyasu", url: "https://en.wikipedia.org/wiki/Tokugawa_Ieyasu" } ],
    name: "Tokugawa Ieyasu",
    role: "warlord",
    born: 1543, died: 1616,
    dateLabel: "1543–1616",
    period: "Sengoku/Edo · founding shogun",
    location: { name: "Edo Castle, Musashi", lat: 35.6852, lon: 139.7528 },
    summary: "The patient victor of Sekigahara who founded the Tokugawa peace that lasted 250 years.",
    bio: `Held hostage as a child, Ieyasu spent decades as ally, rival and survivor, beaten by Shingen at Mikatagahara, allied with Nobunaga at Nagashino, holding his own against Hideyoshi at Komaki-Nagakute. After Hideyoshi's death he won the decisive Battle of Sekigahara (1600).

Named shogun in 1603, he made Edo his capital and destroyed the last Toyotomi loyalists at the siege of Osaka (1614–15). The regime he built, the Tokugawa shogunate, gave Japan two and a half centuries of unbroken internal peace.`,
    battles: ["mikatagahara", "nagashino", "komaki-nagakute", "sekigahara", "osaka-siege"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tokugawa_Ieyasu2.JPG/960px-Tokugawa_Ieyasu2.JPG",
        caption: "Tokugawa Ieyasu, Wikimedia Commons."
      }
    ]
  },
  {
    id: "sanada-yukimura",
    sources: [ { label: "Wikipedia: Sanada Yukimura", url: "https://en.wikipedia.org/wiki/Sanada_Yukimura" } ],
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
        caption: "Sanada Yukimura, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Edo ----------------
  {
    id: "matsuo-basho",
    sources: [ { label: "Wikipedia: Matsuo Bashō", url: "https://en.wikipedia.org/wiki/Matsuo_Bash%C5%8D" } ],
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
        caption: "Matsuo Bashō, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Bakumatsu ----------------
  {
    id: "ii-naosuke",
    sources: [ { label: "Wikipedia: Ii Naosuke", url: "https://en.wikipedia.org/wiki/Ii_Naosuke" } ],
    name: "Ii Naosuke",
    role: "statesman",
    born: 1815, died: 1860,
    dateLabel: "1815–1860",
    period: "Bakumatsu · chief minister (tairō)",
    location: { name: "Hikone Castle, Ōmi", lat: 35.2747, lon: 136.2519 },
    summary: "The chief minister who opened Japan to the West, and was assassinated for it.",
    bio: `As tairō, the shogunate's highest minister, Ii Naosuke pushed through the 1858 commercial treaties that opened Japan to foreign trade without imperial sanction. To crush the opposition he unleashed the Ansei Purge, jailing and executing dissident lords and activists.

His high-handedness made him the lightning rod for anti-shogunate fury. In 1860 he was cut down by Mito and Satsuma swordsmen outside the Sakurada Gate of Edo Castle, a killing that shattered the shogunate's prestige and accelerated its fall.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ii_Naosuke_crop.jpg/960px-Ii_Naosuke_crop.jpg",
        caption: "Ii Naosuke, Wikimedia Commons."
      }
    ]
  },
  {
    id: "sakamoto-ryoma",
    sources: [ { label: "Wikipedia: Sakamoto Ryōma", url: "https://en.wikipedia.org/wiki/Sakamoto_Ry%C5%8Dma" } ],
    name: "Sakamoto Ryōma",
    role: "statesman",
    born: 1836, died: 1867,
    dateLabel: "1836–1867",
    period: "Bakumatsu · reformer",
    location: { name: "Kyoto (where he was assassinated)", lat: 35.0094, lon: 135.7610 },
    summary: "The low-ranking samurai who brokered the alliance that doomed the shogunate.",
    bio: `A restless visionary from Tosa, Sakamoto Ryōma slipped the bonds of his rank to work for a new Japan. He helped broker the secret Satsuma–Chōshū alliance (1866) that united the two great anti-shogunate domains, and his "Eight-Point Plan" sketched a modern constitutional state.

He pressed for the shogun to resign power peacefully to the emperor, which happened in 1867, but was assassinated in Kyoto weeks later, at thirty-one. He never saw the Restoration he did so much to bring about, and became one of modern Japan's most romantic heroes.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sakamoto_Ryoma.jpg/960px-Sakamoto_Ryoma.jpg",
        caption: "Sakamoto Ryōma, Wikimedia Commons."
      }
    ]
  },
  {
    id: "saigo-takamori",
    sources: [ { label: "Wikipedia: Saigō Takamori", url: "https://en.wikipedia.org/wiki/Saig%C5%8D_Takamori" } ],
    name: "Saigō Takamori",
    role: "warlord",
    born: 1828, died: 1877,
    dateLabel: "1828–1877",
    period: "Bakumatsu · Satsuma leader",
    location: { name: "Kagoshima, Satsuma", lat: 31.5969, lon: 130.5572 },
    summary: "The Satsuma leader who commanded the imperial armies that overthrew the shogunate.",
    bio: `A towering figure of Satsuma, Saigō led the restoration forces in the Boshin War, winning at Toba-Fushimi and negotiating the surrender of Edo, before the campaigns at Ueno and in the north completed the shogunate's fall in 1868–69.

Disillusioned with the very Meiji government he had helped create, he later led the doomed Satsuma Rebellion of 1877 and died in its final battle, becoming the archetype of the tragic, principled samurai, the "last samurai" of legend.`,
    battles: ["toba-fushimi", "ueno"], // verified: in exile during the Anglo-Satsuma War (1863); not among the Aizu commanders
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Saigo_Takamori_%28b%29.jpg/960px-Saigo_Takamori_%28b%29.jpg",
        caption: "Saigō Takamori, Wikimedia Commons."
      }
    ]
  },
  {
    id: "tokugawa-yoshinobu",
    sources: [ { label: "Wikipedia: Tokugawa Yoshinobu", url: "https://en.wikipedia.org/wiki/Tokugawa_Yoshinobu" } ],
    name: "Tokugawa Yoshinobu",
    role: "sovereign",
    born: 1837, died: 1913,
    dateLabel: "1837–1913",
    period: "Bakumatsu · last shogun",
    location: { name: "Nijō Castle, Kyoto (where he resigned power)", lat: 35.0142, lon: 135.7480 },
    summary: "The fifteenth and last Tokugawa shogun, who surrendered power to the emperor.",
    bio: `Yoshinobu became shogun in 1866 as the regime crumbled. A capable reformer, he tried to remake the shogunate along Western lines, but, outmanoeuvred by Satsuma and Chōshū, he chose in 1867 to resign his authority to the emperor in the act known as the taisei hōkan.

Defeated at Toba-Fushimi in 1868, he withdrew rather than plunge Japan into total war, surrendering Edo. He lived on quietly for decades into the modern era he had helped usher in, the last of more than 250 years of Tokugawa shoguns.`,
    battles: ["toba-fushimi"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/31/1867_Osaka_Yoshinobu_Tokugawa.jpg",
        caption: "Tokugawa Yoshinobu, Wikimedia Commons."
      }
    ]
  },

  // ---------------- Added for fuller coverage (women across the eras) ----------------
  {
    id: "empress-suiko",
    sources: [ { label: "Wikipedia: Empress Suiko", url: "https://en.wikipedia.org/wiki/Empress_Suiko" } ],
    name: "Empress Suiko",
    role: "sovereign",
    born: 554, died: 628,
    dateLabel: "554–628",
    period: "Asuka · empress",
    location: { name: "Asuka (Toyura/Oharida Palace), Yamato", lat: 34.4793, lon: 135.8200 },
    summary: "Japan's first reigning empress, on the throne through the formative Asuka reforms.",
    bio: `Suiko became Japan's first empress regnant in 593 and reigned for 35 years, with her nephew Prince Shōtoku serving as regent. Her reign saw Buddhism promoted as a state faith, the first Chinese-style court ranks and reforms, and official embassies to Sui China.

She is the first of several powerful women rulers of the Asuka–Nara age, when female sovereigns were not unusual, a foundational period for the imperial state.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Empress_Suiko_by_Tosa_Mitsuyoshi_1726_Eifukuji_Osaka.png/960px-Empress_Suiko_by_Tosa_Mitsuyoshi_1726_Eifukuji_Osaka.png",
        caption: "Empress Suiko, Wikimedia Commons."
      }
    ]
  },
  {
    id: "hojo-masako",
    sources: [ { label: "Wikipedia: Hōjō Masako", url: "https://en.wikipedia.org/wiki/H%C5%8Dj%C5%8D_Masako" } ],
    name: "Hōjō Masako",
    role: "statesman",
    born: 1157, died: 1225, // verified: Hōgen 2 = 1157 (en+ja Wikipedia; 1156 was an error)
    dateLabel: "1157–1225",
    period: "Kamakura · power behind the shogunate",
    location: { name: "Kamakura, Sagami", lat: 35.3197, lon: 139.5503 },
    summary: "The 'nun shogun', Yoritomo's widow, who held real power over the early Kamakura shogunate.",
    bio: `Wife of Minamoto no Yoritomo and a daughter of the Hōjō, Masako took Buddhist vows on his death in 1199 yet kept decisive political power, earning the name "nun shogun" (ama-shōgun). With her father Tokimasa she helped establish the Hōjō regency that would dominate the Kamakura shogunate.

In the Jōkyū War of 1221 her rallying address is traditionally credited with steeling the eastern warriors against Retired Emperor Go-Toba, securing the warriors' victory over the court.`,
    battles: ["jokyu-war"],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hojo_Masako.jpg/960px-Hojo_Masako.jpg",
        caption: "Hōjō Masako, Wikimedia Commons."
      }
    ]
  },
  {
    id: "hino-tomiko",
    sources: [ { label: "Wikipedia: Hino Tomiko", url: "https://en.wikipedia.org/wiki/Hino_Tomiko" } ],
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
    sources: [ { label: "Wikipedia: Tachibana Ginchiyo", url: "https://en.wikipedia.org/wiki/Tachibana_Ginchiyo" } ],
    name: "Tachibana Ginchiyo",
    role: "warlord",
    born: 1569, died: 1602,
    dateLabel: "1569–1602",
    period: "Sengoku · woman warrior",
    location: { name: "Yanagawa, Chikugo", lat: 33.1632, lon: 130.4017 },
    summary: "An onna-musha who inherited her clan's leadership and castle in her own right.",
    bio: `Daughter of the Ōtomo general Tachibana Dōsetsu, Ginchiyo inherited the headship of the Tachibana house and its castle in her own name, an extraordinary status for a woman of the age. Renowned as an onna-musha (woman warrior), she is said to have armed her ladies-in-waiting to help defend Tachibanayama Castle.

She married Tachibana Muneshige and is remembered for her readiness to take up arms in the defence of Yanagawa during the Sekigahara campaign of 1600.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/%E7%AB%8B%E8%8A%B1%E8%AA%BE%E5%8D%83%E4%BB%A3.jpg",
        caption: "Tachibana Ginchiyo, Wikimedia Commons."
      }
    ]
  },

  // ---- Added 2026-08-01. Closes the audited gaps: every founder of the Kamakura
  // schools was absent though the atlas pins their temples, and culture held only 4.
  // Coordinates verified against each pinned place; portraits HEAD-verified. ----
  {
    id: "honen",
    sources: [ { label: "Wikipedia: Hōnen", url: "https://en.wikipedia.org/wiki/H%C5%8Dnen" } ],
    name: "Hōnen",
    role: "religious",
    born: 1133, died: 1212,
    dateLabel: "1133–1212",
    period: "Kamakura · Pure Land founder",
    location: { name: "Chion-in, Higashiyama, Kyoto (Yamashiro)", lat: 35.00639, lon: 135.78389 },
    summary: "Founder of the Pure Land school, who taught that anyone could reach paradise by calling on Amida's name.",
    bio: `Hōnen was born in the province of Mimasaka, in the west of Honshū. His father, a local official, was killed in a night raid when the boy was eight, and he was sent away to a monastery; by thirteen he was on Mount Hiei, the great Tendai centre above Kyoto. He stayed there for decades and grew dissatisfied. The learning, the discipline and the costly rituals of the old schools were within reach only of monks and of the rich, and ordinary people had no realistic hope of salvation. In 1175, reading the Chinese master Shandao, Hōnen found his answer: anyone at all could be reborn in the Pure Land of Amida Buddha simply by calling Amida's name in trust, the practice known as the nembutsu, "Namu Amida Butsu". He left the mountain and settled at Ōtani in the Higashiyama hills of Kyoto, preaching to courtiers, warriors, farmers, fishermen and women alike.

That simplicity made him famous and made him enemies. The established monasteries of Mount Hiei and Nara accused him of telling people to abandon every other Buddhist practice. In 1198 the regent Kujō Kanezane had him set out his teaching in writing, in the Senchakushū; in 1204 he and his followers signed a pledge of restraint, and in 1205 Kōfuku-ji laid formal charges against him. In 1207 the court banned exclusive nembutsu, executed four of his disciples and sent Hōnen, then in his seventies, into exile on Shikoku. He was pardoned in 1211 and returned to Kyoto, where he died on 29 February 1212, days after dictating the One-Sheet Document that boiled his message down to a single page. His school, Jōdo-shū, grew up around the place where he died, today the great temple of Chion-in, and his pupil Shinran carried the teaching further into Jōdo Shinshū, now the largest Buddhist movement in Japan.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/%E3%80%8A%E6%B3%95%E7%84%B6%E4%B8%8A%E4%BA%BA%E5%83%8F%EF%BC%88%E9%8F%A1%E5%BE%A1%E5%BD%B1%EF%BC%89%E3%80%8B13%E4%B8%96%E7%B4%80%E3%80%81%E9%8E%8C%E5%80%89%E6%99%82%E4%BB%A3%E3%80%81%E9%87%91%E6%88%92%E5%85%89%E6%98%8E%E5%AF%BA%E3%80%81%E4%BA%AC%E9%83%BD.jpg/960px-%E3%80%8A%E6%B3%95%E7%84%B6%E4%B8%8A%E4%BA%BA%E5%83%8F%EF%BC%88%E9%8F%A1%E5%BE%A1%E5%BD%B1%EF%BC%89%E3%80%8B13%E4%B8%96%E7%B4%80%E3%80%81%E9%8E%8C%E5%80%89%E6%99%82%E4%BB%A3%E3%80%81%E9%87%91%E6%88%92%E5%85%89%E6%98%8E%E5%AF%BA%E3%80%81%E4%BA%AC%E9%83%BD.jpg",
        caption: "Portrait of Hōnen, a 13th century hanging scroll at Konkai-Kōmyō-ji in Kyoto, so painted within the century of his death; Wikimedia Commons."
      }
    ],
  },
  {
    id: "shinran",
    sources: [ { label: "Wikipedia: Shinran", url: "https://en.wikipedia.org/wiki/Shinran" } ],
    name: "Shinran",
    role: "religious",
    born: 1173, died: 1263,
    dateLabel: "1173–1263",
    period: "Kamakura · Jōdo Shinshū founder",
    location: { name: "Higashi Hongan-ji (Shinran's mausoleum), Kyoto", lat: 34.991, lon: 135.7585 },
    summary: "Hōnen's exiled disciple, who married openly and founded Jōdo Shinshū, now Japan's largest Buddhist school.",
    bio: `Shinran was born near Kyoto into a minor branch of the Fujiwara family and was made a monk at nine. He spent twenty years on Mount Hiei as an ordinary hall monk, chanting the name of Amida Buddha, and came away sure that no effort of his own would ever save him. In 1201 he became a pupil of Hōnen, the teacher of the nembutsu. Six years later the court banned Hōnen's movement; both men were stripped of their monastic status and exiled, Shinran to Echigo on the Japan Sea coast. They never met again.

The exile made him. Cut off from the monasteries, he married Eshinni, raised a family, and spent about twenty years preaching in the villages of Hitachi in the east, to farmers, fishermen and low-ranking warriors. He called himself Gutoku, the bald fool, and said he was neither a monk nor a layman. He took Hōnen's teaching further: rebirth in the Pure Land is not earned by reciting the nembutsu often, nor by any merit of one's own, but is already given by Amida's vow, so the recitation is simply gratitude for a gift. Back in Kyoto in old age he finished his great book, the Kyōgyōshinshō, and died there in the winter of 1262 to 1263, ninety by the Japanese count. He founded no temple and named no successor, but his family and followers raised a chapel over his grave, and out of it grew the Hongan-ji and Jōdo Shinshū, today the most widely practised school of Buddhism in Japan.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Shinran_%28Nara_National_Museum%29.jpg/960px-Shinran_%28Nara_National_Museum%29.jpg",
        caption: "A portrait of Shinran in the Nara National Museum, painted in the Nanbokuchō period (1334 to 1392), at least seventy years after his death. Wikimedia Commons."
      }
    ],
  },
  {
    id: "dogen",
    sources: [ { label: "Wikipedia: Dōgen", url: "https://en.wikipedia.org/wiki/D%C5%8Dgen" } ],
    name: "Dōgen",
    role: "religious",
    born: 1200, died: 1253,
    dateLabel: "1200–1253",
    period: "Kamakura · founder of Sōtō Zen",
    location: { name: "Eihei-ji, Echizen Province (now Fukui Prefecture)", lat: 36.05306, lon: 136.35556 },
    summary: "Founder of Sōtō Zen and of Eihei-ji, who taught that sitting in meditation is the act of a buddha, not a route to becoming one.",
    bio: `Dōgen was born in Kyoto in 1200, probably into the court nobility, and lost his mother as a small boy. At thirteen he entered the great Tendai monastery on Mount Hiei, where one question would not leave him: if every living being already possesses the buddha nature, why does anyone need to practice at all? No teacher in Japan could answer him, so in 1223 he sailed to Song China. At Mount Tiantong he found the Chan master Rujing, and on hearing him speak of casting off body and mind Dōgen felt the question dissolve. He came home in 1227 with an answer that turned the problem inside out. Practice and awakening are not two things, he taught. Sitting in meditation is not a method for becoming a buddha; it is the act of a buddha. He called it shikantaza, just sitting.

In 1233 he opened his own temple at Fukakusa, south of Kyoto, but the Tendai establishment made his position there uncomfortable, and in 1243 a warrior patron, Hatano Yoshishige, offered him land far away in the mountains of Echizen. The temple he built there was renamed Eihei-ji in 1246 and is still one of the two head temples of the Sōtō school, where monks train under the daily rules he wrote for them. His last years went into the Shōbōgenzō, a difficult and beautiful set of essays now counted among the finest philosophical writing in Japanese. He fell ill, traveled to Kyoto for treatment and died there in 1253. He never used the name Sōtō himself; his successors attached that label to the school later.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Dogen.jpg",
        caption: "Dōgen watching the moon, a hanging scroll at Hōkyōji monastery in Fukui Prefecture that the file dates to about 1250, so within or close to his own lifetime; Wikimedia Commons."
      }
    ],
  },
  {
    id: "eisai",
    sources: [ { label: "Wikipedia, Eisai", url: "https://en.wikipedia.org/wiki/Eisai" } ],
    name: "Eisai (Yōsai)",
    role: "religious",
    born: 1141, died: 1215,
    dateLabel: "1141–1215",
    period: "Kamakura · Rinzai Zen founder",
    location: { name: "Kennin-ji, Kyoto", lat: 35.00099, lon: 135.77366 },
    summary: "The monk who sailed twice to Song China and brought back both Rinzai Zen and tea.",
    bio: `Eisai, whose name Kennin-ji itself still reads as Yōsai, was born in 1141 in Bitchū Province, in what is now Okayama, and trained as a Tendai monk on Mount Hiei. Convinced that Japanese Buddhism had gone slack, he twice crossed to China. The first voyage, in 1168, lasted only six months. The second, from 1187 to 1191, was the one that counted: he studied under a master of the Linji line of Chinese Chan and came home carrying the teaching Japan would call Rinzai Zen, a school that trains the mind through seated meditation and through wrestling with knotty questions rather than through scripture alone.

He founded Shōfuku-ji in Kyushu, usually counted as Japan's first Zen temple, and at once met fierce opposition from the established schools. His answer was the treatise Kōzen Gokokuron, which argued that Zen would protect the realm rather than divide it, together with a careful refusal to break with his old school; he never renounced his Tendai ordination and kept up esoteric practice to the end of his life. He also looked east to the new warrior government, and it took him up. Hōjō Masako backed him at Jufuku-ji in Kamakura, and the shogun Minamoto no Yoriie granted him the Kyoto ground on which he opened Kennin-ji in 1202. Eisai brought tea seeds home from China as well, and wrote the Kissa Yōjōki, a short book recommending tea as medicine. From that modest beginning grew the whole culture of tea that Sen no Rikyū would perfect four centuries later. He died in 1215 and was buried in the grounds of Kennin-ji.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Myoan-Eisai-Kennin-ji-Portrait.png",
        caption: "Painted portrait of Yōsai seated in an abbot's chair with a Chan master's staff in hand, by an unknown artist and dated on the file page to the twelfth century, close to his own lifetime; Wikimedia Commons."
      }
    ],
  },
  {
    id: "rennyo",
    sources: [ { label: "Wikipedia: Rennyo", url: "https://en.wikipedia.org/wiki/Rennyo" } ],
    name: "Rennyo",
    role: "religious",
    born: 1415, died: 1499,
    dateLabel: "1415–1499",
    period: "Muromachi · Hongan-ji restorer",
    location: { name: "Yoshizaki-gobō, Echizen Province", lat: 36.2871, lon: 136.2508 },
    summary: "The eighth head of Hongan-ji, whose plain-language letters made it Japan's largest religious movement.",
    bio: `Rennyo was born in Kyoto in 1415, the son of the seventh head of Hongan-ji and a woman who was not his father's wife and who was sent away when he was six. The temple he inherited in 1457 was poor and obscure, one minor branch of the Pure Land teaching handed down from his ancestor Shinran. In 1465 warrior monks from Mount Hiei burned it, and Rennyo fled. In 1471 he settled far to the north at Yoshizaki, on the border of Echizen and Kaga, and built a hillside compound that drew pilgrims from the northern provinces and had a town growing around it within two years.

What made Rennyo different was how he taught. He wrote pastoral letters, the Ofumi, in plain Japanese that a village priest could read aloud to farmers, and he made a hanging scroll of the six characters Namu Amida Butsu the standard object of worship in every local meeting hall. Scattered villagers now shared one text, one practice and a network of congregations that crossed provincial borders. That network became a political force. In 1488 the believers of Kaga overthrew their governor, Togashi Masachika, and ran the province themselves until 1580, the first and longest of the Ikkō-ikki risings. Rennyo urged his followers to obey the authorities and never blessed their fighting, but the organisation behind it was his. He rebuilt Hongan-ji at Yamashina, finished in 1483, handed the temple to his son Jitsunyo in 1489, and in 1496 founded the retreat at the mouth of the Yodo river that became Ishiyama Hongan-ji, the fortress temple that later held out against Oda Nobunaga for ten years. He died in 1499.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Rennyo5.1.JPG/960px-Rennyo5.1.JPG",
        caption: "A Muromachi period portrait of Rennyo, colour on silk, held at Hongan-ji in Kyoto according to the file's own description; that period spans his own lifetime, so the painting is contemporary or not much later. Wikimedia Commons."
      }
    ],
  },
  {
    id: "ganjin",
    sources: [ { label: "Wikipedia: Jianzhen (Ganjin)", url: "https://en.wikipedia.org/wiki/Jianzhen" } ],
    name: "Ganjin (Jianzhen)",
    role: "religious",
    born: 688, died: 763,
    dateLabel: "688–763",
    period: "Nara · vinaya master from Tang China",
    location: { name: "Tōshōdai-ji, Nara (Yamato)", lat: 34.67559, lon: 135.78483 },
    summary: "The blind Chinese vinaya master who, after five failed crossings, gave Japan its first valid ordination.",
    bio: `Ganjin was born at Yangzhou in Tang China in 688 and entered monastic life at fourteen. He became southern China's leading authority on the vinaya, the code of rules that governs monks, and is said to have conferred the precepts on tens of thousands of people. In 742 two Japanese monks studying in China asked him to come east. Japan had monks, but no lawful way to make them: the rule required ten fully ordained monks to confer the precepts on a formal platform, and Japan had neither, so men could simply declare themselves monks and slip out of tax and labour service. Ganjin agreed, and then spent eleven years trying to get there. Five voyages failed to storms, to informers and to officials who would not let him sail; one blew him south to Hainan, and he lost his sight on the long road back.

On the sixth attempt, blind and in his mid sixties, he sailed with a returning Japanese embassy and came ashore in Satsuma. That landing is recorded under Tenpyō-shōhō 5, an era year usually written 753, but the twelfth lunar month had already run past the Western new year, so the day was 17 January 754. He reached Nara that spring, raised an ordination platform before the Great Buddha at Tōdai-ji and gave the precepts to some four hundred people, the retired emperor Shōmu among them. In 759 the court granted him land in the western half of the capital, where he founded Tōshōdai-ji and taught until his death in 763. He is counted the founder of the Ritsu school, and his party brought sutras, relics, medicines and Chinese craftsmen, among them the sculptors who introduced hollow dry lacquer.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ganjin_Toshodai-ji.jpg/960px-Ganjin_Toshodai-ji.jpg",
        caption: "The seated dry lacquer statue of Ganjin at Tōshōdai-ji in Nara, named a National Treasure on the file's own description and photographed for a 1952 catalogue; unlike most portraits in this atlas it dates from close to the sitter's own lifetime. Wikimedia Commons."
      }
    ],
  },
  {
    id: "zeami",
    sources: [ { label: "Wikipedia: Zeami Motokiyo", url: "https://en.wikipedia.org/wiki/Zeami_Motokiyo" } ],
    name: "Zeami Motokiyo",
    role: "culture",
    born: 1363, died: 1443,
    dateLabel: "c. 1363 – c. 1443",
    period: "Muromachi · Noh master and theorist",
    location: { name: "Kitayama, Kyoto", lat: 35.0393, lon: 135.7294 },
    summary: "The actor and playwright who made village sarugaku into the classical theatre of Noh.",
    bio: `Zeami was born into a family of travelling players from Yamato, the province around Nara, who performed sarugaku: a rough mixture of comic sketches, dance and mime put on at temples and shrines. In the mid 1370s his father Kan'ami brought the troupe to Kyoto, where the young shōgun Ashikaga Yoshimitsu saw the boy Zeami act and was captivated. Players ranked near the bottom of society, so the favour was extraordinary. Zeami was taken into court circles, given a classical education by the poet and statesman Nijō Yoshimoto, and the troupe won shogunal patronage. He inherited it when his father died in 1385, and over the next fifty years he rebuilt sarugaku into Noh, the slow, masked, poetic theatre still performed today, drawing his plots from the Tale of the Heike and from court poetry and aiming at yūgen, a beauty suggested rather than shown.

He also wrote some twenty-one treatises on how to act, beginning with the Fūshikaden, the Transmission of the Flower. They are the oldest works on the theory of drama in Japanese, and they were secret teachings meant for his own family alone; most stayed unknown until manuscripts turned up in a second-hand bookshop in 1908. His last years were hard. The shōgun Ashikaga Yoshinori preferred Zeami's nephew Onnami, barred Zeami from the palace, handed the troupe to Onnami, and in 1434 exiled the old man to Sado Island. He appears to have been pardoned, and he died in 1443 and was buried in his native Yamato. He is pinned at Kitayama, Yoshimitsu's estate above Kyoto, the centre of the culture his theatre came to define.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Sousetsubon_fushikaden_7_part.PNG/960px-Sousetsubon_fushikaden_7_part.PNG",
        caption: "No portrait of Zeami is known; this is a page of the secret seventh chapter of his Fūshikaden in a copy made by Kanze Sōsetsu in 1578, some 135 years after Zeami's death. Wikimedia Commons."
      }
    ],
  },
  {
    id: "sesshu-toyo",
    sources: [ { label: "Wikipedia: Sesshū Tōyō", url: "https://en.wikipedia.org/wiki/Sessh%C5%AB_T%C5%8Dy%C5%8D" } ],
    name: "Sesshū Tōyō",
    role: "culture",
    born: 1420, died: 1506,
    dateLabel: "c. 1420 – 1506",
    period: "Muromachi · ink painter",
    location: { name: "Ikō-ji (his garden), Masuda in Iwami", lat: 34.68, lon: 131.86569 },
    summary: "The Zen monk who studied in Ming China and made ink landscape an art of its own in Japan.",
    bio: `Sesshū was born around 1420 into a samurai family in Bitchū province, in what is now Sōja in Okayama. Sent as a boy to a local temple, he moved at about twelve to Shōkoku-ji in Kyoto, one of the great Zen monasteries under Ashikaga patronage. There he trained as a monk and learned painting from Tenshō Shūbun, then the leading ink landscapist in Japan. Around 1454 he left the capital for Suō in the far west, where the Ōuchi lords protected him and he kept a studio called Unkoku-an. In 1467, the year the Ōnin War broke out in Kyoto, he sailed to Ming China with a trade mission. He spent some two years travelling from Ningbo to Beijing, and said afterwards that he had learned more from the Chinese countryside itself than from any living Chinese painter.

What he brought home in 1469 was not imitation. In works such as the Long Landscape Scroll of the Four Seasons (1486) and the splashed-ink landscape of 1495 he built pictures out of bare, decisive strokes and wide areas of empty paper, and this is the ink painting that the atlas's Kitayama and Higashiyama entries mean. Six of his paintings are National Treasures of Japan. He also designed gardens, and spent his last years in Iwami province, where the garden at Ikō-ji in Masuda is attributed to him and where tradition says his body was cremated. He is usually said to have died there in 1506 at the age of eighty-seven, though no firm record survives and some sources give 1502.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Portrait_of_Sesshu.jpg/960px-Portrait_of_Sesshu.jpg",
        caption: "A hanging scroll portrait of Sesshū, recorded on Commons as a copy by an unknown painter of the sixteenth century, so made at or near the end of his life. Wikimedia Commons."
      }
    ],
  },
  {
    id: "katsushika-hokusai",
    sources: [ { label: "Wikipedia: Hokusai", url: "https://en.wikipedia.org/wiki/Hokusai" } ],
    name: "Katsushika Hokusai",
    role: "culture",
    born: 1760, died: 1849,
    dateLabel: "c. 1760 – 1849",
    period: "Edo · ukiyo-e master",
    location: { name: "Katsushika, eastern Edo (modern Katsushika ward, Tokyo)", lat: 35.7333, lon: 139.85 },
    summary: "The ukiyo-e master who turned Japanese printmaking toward landscape and made The Great Wave.",
    bio: `Hokusai was born in 1760 in the Katsushika district on the eastern edge of Edo, and later took that district's name as his own. He was apprenticed to a woodblock carver as a boy and joined a print studio at eighteen. Ukiyo-e, "pictures of the floating world", was at that time mostly cheap portraits of kabuki actors and courtesans sold to city people; Hokusai turned it toward landscape and toward the ordinary working life of the country. He changed his artist's name about thirty times over a career of seventy years, each change marking a new direction in his work.

His best known series, Thirty-six Views of Mount Fuji, appeared around 1830, when he was already past seventy and Japan had caught a fashion for travel. One sheet from it, The Great Wave off Kanagawa, is probably the single most recognised Japanese image in the world. He also filled the sketchbooks known as the Manga with studies of everything he saw, and drew the portrait of Bashō that this atlas uses on the Oku no Hosomichi. A fire destroyed his studio and much of his work in 1839, and he kept painting almost to the end, dying in Edo in 1849 at eighty-eight. Within about ten years his prints were circulating in Paris, where they helped set off the European enthusiasm for Japanese art.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hokusai_as_an_old_man.jpg/960px-Hokusai_as_an_old_man.jpg",
        caption: "Hokusai as an old man, a self-portrait by the artist, undated on the file itself, Wikimedia Commons."
      }
    ],
  },
  {
    id: "chikamatsu-monzaemon",
    sources: [ { label: "Wikipedia: Chikamatsu Monzaemon", url: "https://en.wikipedia.org/wiki/Chikamatsu_Monzaemon" } ],
    name: "Chikamatsu Monzaemon",
    role: "culture",
    born: 1653, died: 1725,
    dateLabel: "1653–1725",
    period: "Edo · Genroku playwright",
    location: { name: "Dōtonbori, Osaka", lat: 34.6687, lon: 135.5013 },
    summary: "The playwright of the Osaka puppet stage, who made tragedy from the love suicides of townspeople.",
    bio: `Chikamatsu Monzaemon was born Sugimori Nobumori in 1653 in Echizen province, the son of a samurai who served the Matsudaira lords there as a doctor. While he was a boy the family moved to Kyoto, and instead of entering a lord's service he went into the theatre. His first puppet play appeared in 1683, and for the next twenty years he wrote mainly kabuki, above all for the great Kyoto actor Sakata Tōjūrō. In 1703 a shop clerk and a courtesan killed themselves together in the Sonezaki district of Osaka; within a month Chikamatsu had put their story on the puppet stage as The Love Suicides at Sonezaki. In 1705 or 1706 he left Kyoto for Osaka, the richest merchant city in Japan, and became house playwright of the Takemoto-za, the puppet theatre founded in 1684 by the chanter Takemoto Gidayū in the Dōtonbori theatre district.

Puppet drama, called jōruri then and bunraku today, works by three arts at once: one chanter voices every part, a shamisen player carries the feeling, and three handlers move each doll. Chikamatsu wrote some seventy history plays for it and about two dozen set among living townspeople, and it is the second group that made his reputation. Merchants, clerks and courtesans had never been treated as tragic figures before; in his hands they are destroyed by the gap between duty and love. His most spectacular success, The Battles of Coxinga of 1715, ran for seventeen months. He died on 6 January 1725, which by the old lunar calendar was the twenty-second day of the eleventh month of Kyōhō 9, so many books date his death to 1724.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Chikamatsu_Monzaemon.jpg",
        caption: "A portrait of Chikamatsu Monzaemon, given on Commons as a self-portrait. Wikimedia Commons."
      }
    ],
  },
  {
    id: "saigyo",
    sources: [ { label: "Wikipedia: Saigyō", url: "https://en.wikipedia.org/wiki/Saigy%C5%8D" } ],
    name: "Saigyō",
    role: "culture",
    born: 1118, died: 1190,
    dateLabel: "1118–1190",
    period: "Heian/Genpei · poet-monk",
    location: { name: "Hirokawa-dera, Kawachi (Kanan, Osaka)", lat: 34.4745, lon: 135.65294 },
    summary: "A palace guard who left at twenty-two to wander as a monk, and became the model for every later travelling poet.",
    bio: `Satō Norikiyo was born into a well-connected warrior family and served in the northern guard of the retired emperor Toba, alongside a young Taira no Kiyomori. In 1140, aged twenty-two, he walked away from the post for reasons no source explains, shaved his head, took the religious name En'i and became known by his pen name Saigyō, "western journey". For the next fifty years he kept hermitages at Saga and Kurama, spent long stretches on Mount Kōya and later near the shrines of Ise, and twice travelled the hard road north into Michinoku. The second journey, in 1186, he made as an old man to raise money for rebuilding Tōdai-ji, burnt in the Genpei War. On the way he was received at Kamakura by Minamoto no Yoritomo, who gave him a silver cat; Saigyō, the story goes, handed it to a child playing at the gate.

He left roughly 2,300 poems, collected in his own Sankashū, and the imperial anthology Shin Kokinshū took ninety-four of them, more than from any other poet. He had asked in verse to die in spring beneath the blossom, at the full moon of the second month. He died at Hirokawa-dera in Kawachi on the sixteenth day of the second month of 1190, one day past that full moon, and readers ever since have treated the near-miss as a kind of proof. Five centuries later Bashō set out on the road to Oku partly to walk where Saigyō had walked.`,
    battles: [],
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/PORTRAIT_OF_THE_PRIEST-POET_SAIGYO_-_Google_Art_Project.jpg/960px-PORTRAIT_OF_THE_PRIEST-POET_SAIGYO_-_Google_Art_Project.jpg",
        caption: "Portrait of the priest-poet Saigyō by an unknown artist, dated 1300 to 1400, more than a century after his death; MOA Museum of Art, via Wikimedia Commons."
      }
    ],
  }
];

// Make available to app.js (loaded as a plain script, like battles.js / events.js).
if (typeof window !== 'undefined') window.PEOPLE = PEOPLE;
