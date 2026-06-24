// =====================================================================
// TEMPLES & SHRINES (寺社)  —  the great religious centres of premodern Japan
// =====================================================================
// Toggle the "Temples" overlay (top-right layer control) to show these.
// They anchored religion, politics, social life and trade. kind is one of:
//   "temple"     Buddhist temple
//   "monastery"  large temple-monastery complex
//   "shrine"     Shinto shrine
// Fields: name, kind, sect, founded, lat, lon, note.
// =====================================================================

const TEMPLES = [
  {"name":"Asuka-dera","kind":"temple","sect":"Mahayana Buddhism (early)","founded":"588","lat":34.4787,"lon":135.8202,"note":"Japan's earliest Buddhist temple, established during the Asuka period and catalyzed the spread of Buddhism as state religion."},
  {"name":"Tōdai-ji","kind":"temple","sect":"Kegon","founded":"752","lat":34.6954,"lon":135.845,"note":"Built by Emperor Shōmu to house the colossal Buddha statue; became center of imperial Buddhism and Nara court authority."},
  {"name":"Kōfuku-ji","kind":"temple","sect":"Hossō","founded":"669","lat":34.685,"lon":135.8317,"note":"Major Fujiwara family temple that became powerful political and military force; controlled thousands of warrior monks."},
  {"name":"Enryaku-ji","kind":"monastery","sect":"Tendai","founded":"788","lat":35.0706,"lon":135.8411,"note":"Powerful Tendai sect headquarters on Mount Hiei; wielded enormous military and political influence, shaped medieval Buddhism."},
  {"name":"Mii-dera (Onjō-ji)","kind":"temple","sect":"Tendai (Jimon branch)","founded":"672","lat":35.0269,"lon":135.8547,"note":"Rival Tendai branch that competed with Enryaku-ji for sectarian dominance; major military monastery."},
  {"name":"Kongōbu-ji","kind":"monastery","sect":"Shingon","founded":"816","lat":34.2141,"lon":135.5841,"note":"Principal temple of Mount Kōya Shingon sect; became wealthy monastic center controlling significant lands and resources."},
  {"name":"Tōji","kind":"temple","sect":"Shingon","founded":"796","lat":34.98056,"lon":135.74778,"note":"Imperial temple protecting Kyoto's gates; became center of esoteric Buddhism and magical practices for court."},
  {"name":"Ise Grand Shrine","kind":"shrine","sect":"Shinto","founded":"4","lat":34.453,"lon":136.7222,"note":"Holiest Shinto shrine dedicated to Amaterasu; center of state Shinto ritual and imperial legitimacy since antiquity."},
  {"name":"Izumo-taisha","kind":"shrine","sect":"Shinto","founded":"Ancient","lat":35.3967,"lon":132.7574,"note":"One of Japan's most ancient and important shrines; sacred to Ōkuninushi and associated with political legitimacy."},
  {"name":"Kasuga-taisha","kind":"shrine","sect":"Shinto","founded":"768","lat":34.6903,"lon":135.8456,"note":"Fujiwara clan's tutelary shrine; became politically central to Nara's power structure and Fujiwara dominance."},
  {"name":"Itsukushima Shrine","kind":"shrine","sect":"Shinto","founded":"593","lat":34.2956,"lon":132.3186,"note":"Clan shrine of Taira clan; its patronage and the famous floating torii became symbol of maritime power."},
  {"name":"Kumano-Hongū Taisha","kind":"shrine","sect":"Shinto","founded":"Ancient","lat":33.8889,"lon":135.5583,"note":"Center of Kumano pilgrimage circuit; major spiritual destination for court and military elite; shaped mountain Buddhism."},
  {"name":"Kinkaku-ji (Temple of the Golden Pavilion)","kind":"temple","sect":"Rinzai Zen","founded":"1397","lat":35.0393,"lon":135.7294,"note":"Shogun Yoshimitsu's retirement villa; became icon of Zen aesthetics and cultural authority during Muromachi period."},
  {"name":"Ginkaku-ji (Temple of the Silver Pavilion)","kind":"temple","sect":"Rinzai Zen","founded":"1482","lat":35.0603,"lon":135.7767,"note":"Shogun Yoshimasa's cultural retreat; emblematic of Zen garden aesthetics and shogunal artistic patronage."},
  {"name":"Tenryū-ji","kind":"temple","sect":"Rinzai Zen","founded":"1339","lat":35.0153,"lon":135.6778,"note":"Head of Kyoto Gozan (Five Great Temples); seat of shogunal Zen authority and diplomatic missions."},
  {"name":"Shōkoku-ji","kind":"temple","sect":"Rinzai Zen","founded":"1382","lat":35.0372,"lon":135.7417,"note":"Second Gozan temple; center of shogunal Zen training and cultural production during Muromachi period."},
  {"name":"Nanzen-ji","kind":"temple","sect":"Rinzai Zen","founded":"1291","lat":35.0089,"lon":135.7919,"note":"Kyoto Gozan member; former imperial villa converted to Zen temple; major center of Zen scholarship."},
  {"name":"Kenchō-ji","kind":"temple","sect":"Rinzai Zen","founded":"1253","lat":35.3256,"lon":139.5553,"note":"Head of Kamakura Gozan; center of military shogunate's Zen practice and Mongol-era diplomatic Buddhism."},
  {"name":"Engaku-ji","kind":"temple","sect":"Rinzai Zen","founded":"1282","lat":35.3289,"lon":139.5528,"note":"Second Kamakura Gozan temple; center of warrior Zen practice and military monastery influence."},
  {"name":"Negoro-ji","kind":"temple","sect":"Shingon","founded":"1131","lat":34.0622,"lon":135.3542,"note":"Warrior monastery that resisted Oda Nobunaga militarily; major center of armed warrior-monk resistance."},
  {"name":"Ishiyama Hongan-ji","kind":"temple","sect":"Jōdo Shinshū","founded":"1496","lat":34.6676,"lon":135.5064,"note":"Fortress-temple of Jōdo Shinshū sect; military stronghold that sustained decade-long siege against Oda Nobunaga."},
  {"name":"Nishi Hongan-ji","kind":"temple","sect":"Jōdo Shinshū","founded":"1591","lat":34.9933,"lon":135.7408,"note":"Headquarters of largest Jōdo Shinshū branch; major economic and cultural institution with vast holdings."},
  {"name":"Higashi Hongan-ji","kind":"temple","sect":"Jōdo Shinshū","founded":"1602","lat":34.9953,"lon":135.7522,"note":"Eastern branch of Hongan-ji created by Tokugawa as political counterweight; vast merchant patronage network."},
  {"name":"Byōdō-in","kind":"temple","sect":"Jōdo","founded":"1052","lat":34.8844,"lon":135.8081,"note":"Fujiwara Yorimichi's Pure Land temple; architectural masterpiece embodying Heian Buddhist aesthetics."},
  {"name":"Zenkō-ji","kind":"temple","sect":"Tendai/Jōdo","founded":"642","lat":36.6505,"lon":138.1917,"note":"Major pilgrimage destination with ancient healing tradition; drew millions of common folk believers."},
  {"name":"Kiyomizu-dera","kind":"temple","sect":"Kegon","founded":"780","lat":34.9948,"lon":135.7851,"note":"Major pilgrimage temple dedicated to Kannon; popular among common people for healing miracles."},
  {"name":"Sensō-ji","kind":"temple","sect":"Tendai","founded":"645","lat":35.7148,"lon":139.7963,"note":"Tokyo's oldest temple; major pilgrimage site attracting massive crowds; center of popular Buddhism."},
  {"name":"Rinnō-ji","kind":"temple","sect":"Tendai","founded":"766","lat":36.7456,"lon":139.6089,"note":"Major pilgrimage center; headquarters of Nikkō pilgrimage circuit honored by Tokugawa shogunate."},
  {"name":"Fushimi Inari Taisha","kind":"shrine","sect":"Shinto","founded":"711","lat":34.8673,"lon":135.7629,"note":"Most visited shrine in Japan; dedicated to Inari kami of agriculture and commerce; vast merchant patronage."},
  {"name":"Sanzenin","kind":"temple","sect":"Tendai","founded":"804","lat":35.1422,"lon":135.8281,"note":"Tendai-affiliated Pure Land temple; imperial patronage; hosted political negotiations during medieval period."},
  {"name":"Myōhō-ji","kind":"temple","sect":"Nichiren","founded":"1260","lat":35.3301,"lon":139.5467,"note":"Nichiren sect center in Kamakura; represented popular militant Buddhism challenging established temples."},
  {"name":"Kumano Nachi Taisha","kind":"shrine","sect":"Shinto","founded":"Ancient","lat":33.6756,"lon":135.6183,"note":"Sacred waterfall shrine; major destination on Kumano pilgrimage route; merged Shinto-Buddhist worship."},
  {"name":"Nikkō Tōshō-gū","kind":"shrine","sect":"Shinto","founded":"1617","lat":36.7445,"lon":139.6167,"note":"Tokugawa Ieyasu's mausoleum shrine; symbolic center of Tokugawa shogunal legitimacy and power."}
];

if (typeof window !== "undefined") window.TEMPLES = TEMPLES;
