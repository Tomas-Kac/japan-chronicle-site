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
  {"name":"Asuka-dera",
    sources: [ { label: "Asuka-dera — Wikipedia", url: "https://en.wikipedia.org/wiki/Asuka-dera" } ],"kind":"temple","sect":"Mahayana Buddhism (early)","founded":"588","lat":34.4787,"lon":135.8202,"note":"Japan's earliest Buddhist temple, established during the Asuka period and catalyzed the spread of Buddhism as state religion."},
  {"name":"Tōdai-ji",
    sources: [ { label: "Tōdai-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/T%C5%8Ddai-ji" } ],"kind":"temple","sect":"Kegon","founded":"738 (Great Buddha dedicated 752)","lat":34.6954,"lon":135.845,"note":"Built by Emperor Shōmu to house the colossal Buddha statue; became center of imperial Buddhism and Nara court authority."},
  {"name":"Kōfuku-ji",
    sources: [ { label: "Kōfuku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/K%C5%8Dfuku-ji" } ],"kind":"temple","sect":"Hossō","founded":"669","lat":34.685,"lon":135.8317,"note":"Major Fujiwara family temple that became powerful political and military force; controlled thousands of warrior monks."},
  {"name":"Enryaku-ji",
    sources: [ { label: "Enryaku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Enryaku-ji" } ],"kind":"monastery","sect":"Tendai","founded":"788","lat":35.0706,"lon":135.8411,"note":"Powerful Tendai sect headquarters on Mount Hiei; wielded enormous military and political influence, shaped medieval Buddhism."},
  {"name":"Mii-dera (Onjō-ji)",
    sources: [ { label: "Mii-dera — Wikipedia", url: "https://en.wikipedia.org/wiki/Mii-dera" } ],"kind":"temple","sect":"Tendai (Jimon branch)","founded":"672","lat":35.0269,"lon":135.8547,"note":"Rival Tendai branch that competed with Enryaku-ji for sectarian dominance; major military monastery."},
  {"name":"Kongōbu-ji",
    sources: [ { label: "Kongōbu-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Kongōbu-ji" } ],"kind":"monastery","sect":"Shingon","founded":"816","lat":34.2141,"lon":135.5841,"note":"Principal temple of Mount Kōya Shingon sect; became wealthy monastic center controlling significant lands and resources."},
  {"name":"Tōji",
    sources: [ { label: "Tō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Tō-ji" } ],"kind":"temple","sect":"Shingon","founded":"796","lat":34.98056,"lon":135.74778,"note":"Imperial temple protecting Kyoto's gates; became center of esoteric Buddhism and magical practices for court."},
  {"name":"Ise Grand Shrine",
    sources: [ { label: "Ise Grand Shrine — Wikipedia", url: "https://en.wikipedia.org/wiki/Ise_Grand_Shrine" } ],"kind":"shrine","sect":"Shinto","founded":"4 BCE (traditional)","lat":34.453,"lon":136.7222,"note":"Holiest Shinto shrine dedicated to Amaterasu; center of state Shinto ritual and imperial legitimacy since antiquity."},
  {"name":"Izumo-taisha",
    sources: [ { label: "Izumo-taisha — Wikipedia", url: "https://en.wikipedia.org/wiki/Izumo-taisha" } ],"kind":"shrine","sect":"Shinto","founded":"Ancient","lat":35.4019,"lon":132.6856,"note":"One of Japan's most ancient and important shrines; sacred to Ōkuninushi and associated with political legitimacy."},
  {"name":"Kasuga-taisha",
    sources: [ { label: "Kasuga-taisha — Wikipedia", url: "https://en.wikipedia.org/wiki/Kasuga-taisha" } ],"kind":"shrine","sect":"Shinto","founded":"768","lat":34.6903,"lon":135.8456,"note":"Fujiwara clan's tutelary shrine; became politically central to Nara's power structure and Fujiwara dominance."},
  {"name":"Itsukushima Shrine",
    sources: [ { label: "Itsukushima Shrine — Wikipedia", url: "https://en.wikipedia.org/wiki/Itsukushima_Shrine" } ],"kind":"shrine","sect":"Shinto","founded":"593","lat":34.2956,"lon":132.3186,"note":"Clan shrine of Taira clan; its patronage and the famous floating torii became symbol of maritime power."},
  {"name":"Kumano-Hongū Taisha",
    sources: [ { label: "Kumano Hongū Taisha — Wikipedia", url: "https://en.wikipedia.org/wiki/Kumano_Hong%C5%AB_Taisha" } ],"kind":"shrine","sect":"Shinto","founded":"Ancient","lat":33.8400,"lon":135.7739,"note":"Center of Kumano pilgrimage circuit; major spiritual destination for court and military elite; shaped mountain Buddhism."},
  {"name":"Kinkaku-ji (Temple of the Golden Pavilion)",
    sources: [ { label: "Kinkaku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Kinkaku-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1397","lat":35.0393,"lon":135.7294,"note":"Shogun Yoshimitsu's retirement villa; became icon of Zen aesthetics and cultural authority during Muromachi period."},
  {"name":"Ginkaku-ji (Temple of the Silver Pavilion)",
    sources: [ { label: "Ginkaku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Ginkaku-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1482","lat":35.0267,"lon":135.7983,"note":"Shogun Yoshimasa's cultural retreat; emblematic of Zen garden aesthetics and shogunal artistic patronage."},
  {"name":"Tenryū-ji",
    sources: [ { label: "Tenryū-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Tenry%C5%AB-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1339","lat":35.0153,"lon":135.6778,"note":"Head of Kyoto Gozan (Five Great Temples); seat of shogunal Zen authority and diplomatic missions."},
  {"name":"Shōkoku-ji",
    sources: [ { label: "Shōkoku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Sh%C5%8Dkoku-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1382","lat":35.0372,"lon":135.7417,"note":"Second Gozan temple; center of shogunal Zen training and cultural production during Muromachi period."},
  {"name":"Nanzen-ji",
    sources: [ { label: "Nanzen-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Nanzen-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1291","lat":35.0089,"lon":135.7919,"note":"Ranked above the Kyoto Gozan as the supervising 'First Temple of the Land'; former imperial villa of Emperor Kameyama converted to a Zen temple; major center of Zen scholarship."},
  {"name":"Kenchō-ji",
    sources: [ { label: "Kenchō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Kench%C5%8D-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1253","lat":35.3256,"lon":139.5553,"note":"Head of Kamakura Gozan; center of military shogunate's Zen practice and Mongol-era diplomatic Buddhism."},
  {"name":"Engaku-ji",
    sources: [ { label: "Engaku-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Engaku-ji" } ],"kind":"temple","sect":"Rinzai Zen","founded":"1282","lat":35.3289,"lon":139.5528,"note":"Second Kamakura Gozan temple; center of warrior Zen practice and military monastery influence."},
  {"name":"Negoro-ji",
    sources: [ { label: "Negoro-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Negoro-ji" } ],"kind":"temple","sect":"Shingon","founded":"1130","lat":34.2872,"lon":135.3167,"note":"Warrior monastery whose armed monks (the Negoro-shū, famed for matchlock firearms) resisted Toyotomi Hideyoshi; largely burned down in his 1585 Siege of Negoro-ji."},
  {"name":"Ishiyama Hongan-ji",
    sources: [ { label: "Ishiyama Hongan-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Ishiyama_Hongan-ji" } ],"kind":"temple","sect":"Jōdo Shinshū","founded":"1496","lat":34.6676,"lon":135.5064,"note":"Fortress-temple of Jōdo Shinshū sect; military stronghold that sustained decade-long siege against Oda Nobunaga."},
  {"name":"Nishi Hongan-ji",
    sources: [ { label: "Nishi Hongan-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Nishi_Hongan-ji" } ],"kind":"temple","sect":"Jōdo Shinshū","founded":"1591","lat":34.9933,"lon":135.7408,"note":"Headquarters of largest Jōdo Shinshū branch; major economic and cultural institution with vast holdings."},
  {"name":"Higashi Hongan-ji",
    sources: [ { label: "Higashi Hongan-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Higashi_Hongan-ji" } ],"kind":"temple","sect":"Jōdo Shinshū","founded":"1602","lat":34.9953,"lon":135.7522,"note":"Eastern branch of Hongan-ji created by Tokugawa as political counterweight; vast merchant patronage network."},
  {"name":"Byōdō-in",
    sources: [ { label: "Byōdō-in — Wikipedia", url: "https://en.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in" } ],"kind":"temple","sect":"Jōdo/Tendai","founded":"1052","lat":34.8844,"lon":135.8081,"note":"Fujiwara Yorimichi's Pure Land temple; architectural masterpiece embodying Heian Buddhist aesthetics."},
  {"name":"Zenkō-ji",
    sources: [ { label: "Zenkō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Zenk%C5%8D-ji" } ],"kind":"temple","sect":"Tendai/Jōdo","founded":"642","lat":36.6505,"lon":138.1917,"note":"Major pilgrimage destination with ancient healing tradition; drew millions of common folk believers."},
  {"name":"Kiyomizu-dera",
    sources: [ { label: "Kiyomizu-dera — Wikipedia", url: "https://en.wikipedia.org/wiki/Kiyomizu-dera" } ],"kind":"temple","sect":"Hossō (today Kita-Hossō)","founded":"780","lat":34.9948,"lon":135.7851,"note":"Major pilgrimage temple dedicated to Kannon; popular among common people for healing miracles."},
  {"name":"Sensō-ji",
    sources: [ { label: "Sensō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Sens%C5%8D-ji" } ],"kind":"temple","sect":"Tendai","founded":"645","lat":35.7148,"lon":139.7963,"note":"Tokyo's oldest temple; major pilgrimage site attracting massive crowds; center of popular Buddhism."},
  {"name":"Rinnō-ji",
    sources: [ { label: "Rinnō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/Rinn%C5%8D-ji" } ],"kind":"temple","sect":"Tendai","founded":"766","lat":36.7456,"lon":139.6089,"note":"Major pilgrimage center; headquarters of Nikkō pilgrimage circuit honored by Tokugawa shogunate."},
  {"name":"Fushimi Inari Taisha",
    sources: [ { label: "Fushimi Inari-taisha — Wikipedia", url: "https://en.wikipedia.org/wiki/Fushimi_Inari-taisha" } ],"kind":"shrine","sect":"Shinto","founded":"711","lat":34.9671,"lon":135.7727,"note":"One of Japan's most visited shrines, drawing the largest New Year crowds in western Japan; dedicated to Inari, kami of agriculture and commerce; vast merchant patronage."},
  {"name":"Sanzenin",
    sources: [ { label: "Sanzen-in — Wikipedia", url: "https://en.wikipedia.org/wiki/Sanzen-in" } ],"kind":"temple","sect":"Tendai","founded":"Enryaku era (782–806)","lat":35.1422,"lon":135.8281,"note":"Monzeki temple whose abbots included imperial princes — among them Prince Moriyoshi before the Kenmu Restoration; moved to its present Ōhara site only in 1871 (the Ōjō Gokuraku-in hall there dates to 985)."},
  {"name":"Myōhō-ji",
    sources: [ { label: "Myōhō-ji — Wikipedia", url: "https://en.wikipedia.org/wiki/My%C5%8Dh%C5%8D-ji" } ],"kind":"temple","sect":"Nichiren","founded":"1253 (Nichiren's hermitage; temple rebuilt 1357)","lat":35.3301,"lon":139.5467,"note":"Nichiren sect center in Kamakura; represented popular militant Buddhism challenging established temples."},
  {"name":"Kumano Nachi Taisha",
    sources: [ { label: "Kumano Nachi Taisha — Wikipedia", url: "https://en.wikipedia.org/wiki/Kumano_Nachi_Taisha" } ],"kind":"shrine","sect":"Shinto","founded":"Ancient","lat":33.6686,"lon":135.8906,"note":"Sacred waterfall shrine; major destination on Kumano pilgrimage route; merged Shinto-Buddhist worship."},
  {"name":"Nikkō Tōshō-gū",
    sources: [ { label: "Nikkō Tōshō-gū — Wikipedia", url: "https://en.wikipedia.org/wiki/Nikk%C5%8D_T%C5%8Dsh%C5%8D-g%C5%AB" } ],"kind":"shrine","sect":"Shinto","founded":"1617","lat":36.7445,"lon":139.6167,"note":"Tokugawa Ieyasu's mausoleum shrine; symbolic center of Tokugawa shogunal legitimacy and power."}
];

if (typeof window !== "undefined") window.TEMPLES = TEMPLES;
