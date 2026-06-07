// --- Constants & Database ---

// Multilingual Dictionary
const translations = {
  tr: {
    title: "Dünya Kupası 2026",
    live: "Canlı",
    fixtures: "Fikstür",
    standings: "Puan Durumu",
    bracket: "Eşleşmeler",
    simOn: "Durdur",
    simOff: "Simüle Et",
    today: "Bugün",
    byDate: "Tarihe Göre",
    knockouts: "Eleme Turu",
    allGroups: "Tüm Gruplar",
    loading: "Veriler Yükleniyor...",
    noLive: "Şu anda oynanan canlı maç bulunmuyor.",
    searchPlaceholder: "Oyuncu ara...",
    thNum: "#",
    thPlayer: "Oyuncu",
    thPos: "Pozisyon",
    statusLive: "Canlı Simülasyon Aktif",
    statusAPI: "Veriler API'den alındı",
    statusOffline: "Çevrimdışı Mod (Yerel Veri)",
    simTooltip: "Canlı Maç Simülasyonunu Aç/Kapat",
    elapsed: "Dk",
    cards: "Kartlar",
    matchNotStarted: "Başlamadı",
    matchFinished: "Bitti",
    r16: "Son 16",
    r32: "Son 32",
    qf: "Çeyrek Final",
    sf: "Yarı Final",
    third: "Üçüncülük",
    final: "Final",
    group: "Grup",
    posGK: "Kaleci",
    posDEF: "Defans",
    posMID: "Orta Saha",
    posFWD: "Forvet",
    donate: "Bağış",
    donate_title: "Bana Bir Kahve Ismarla",
    donate_subtitle: "Bu eklentiyi faydalı buluyorsanız, geliştirmeyi desteklemeyi düşünün!",
    copied: "Kopyalandı!"
  },
  en: {
    title: "World Cup 2026",
    live: "Live",
    fixtures: "Fixtures",
    standings: "Standings",
    bracket: "Brackets",
    simOn: "Stop Sim",
    simOff: "Simulate",
    today: "Today",
    byDate: "By Date",
    knockouts: "Knockouts",
    allGroups: "All Groups",
    loading: "Loading data...",
    noLive: "No live matches right now.",
    searchPlaceholder: "Search players...",
    thNum: "#",
    thPlayer: "Player",
    thPos: "Position",
    statusLive: "Live Simulation Active",
    statusAPI: "Connected to API",
    statusOffline: "Offline Mode (Local Data)",
    simTooltip: "Toggle Live Simulation Mode",
    elapsed: "Min",
    cards: "Cards",
    matchNotStarted: "Not Started",
    matchFinished: "Finished",
    r16: "Round of 16",
    r32: "Round of 32",
    qf: "Quarter-finals",
    sf: "Semi-finals",
    third: "3rd Place",
    final: "Final",
    group: "Group",
    posGK: "Goalkeeper",
    posDEF: "Defender",
    posMID: "Midfielder",
    posFWD: "Forward",
    donate: "Donate",
    donate_title: "Buy Me a Coffee",
    donate_subtitle: "If you find this extension useful, consider supporting development!",
    copied: "Copied!"
  }
};

const teamNameTR = {
  "Mexico": "Meksika", "South Africa": "Güney Afrika", "South Korea": "Güney Kore",
  "Czech Republic": "Çekya", "Canada": "Kanada", "Bosnia and Herzegovina": "Bosna Hersek",
  "Qatar": "Katar", "Switzerland": "İsviçre", "Brazil": "Brezilya", "Morocco": "Fas",
  "Haiti": "Haiti", "Scotland": "İskoçya", "United States": "ABD", "Paraguay": "Paraguay",
  "Australia": "Avustralya", "Turkey": "Türkiye", "Germany": "Almanya", "Curaçao": "Curaçao",
  "Ivory Coast": "Fildişi Sahili", "Ecuador": "Ekvador", "Netherlands": "Hollanda",
  "Japan": "Japonya", "Sweden": "İsveç", "Tunisia": "Tunus", "Belgium": "Belçika",
  "Egypt": "Mısır", "Iran": "İran", "New Zealand": "Yeni Zelanda", "Spain": "İspanya",
  "Cape Verde": "Cabo Verde", "Saudi Arabia": "Suudi Arabistan", "Uruguay": "Uruguay",
  "France": "Fransa", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Norveç",
  "Argentina": "Arjantin", "Algeria": "Cezayir", "Austria": "Avusturya", "Jordan": "Ürdün",
  "Portugal": "Portekiz", "Democratic Republic of the Congo": "Kongo Demokratik Cumhuriyeti",
  "Uzbekistan": "Özbekistan", "Colombia": "Kolombiya", "England": "İngiltere",
  "Croatia": "Hırvatistan", "Ghana": "Gana", "Panama": "Panama"
};

// Top players squad database for major countries
const squadDB = {
  // Turkey
  "16": [
    { num: 1, name: "Mert Günok", pos: "GK" },
    { num: 20, name: "Ferdi Kadıoğlu", pos: "DEF" },
    { num: 3, name: "Merih Demiral", pos: "DEF" },
    { num: 14, name: "Abdülkerim Bardakcı", pos: "DEF" },
    { num: 18, name: "Mert Müldür", pos: "DEF" },
    { num: 10, name: "Hakan Çalhanoğlu", pos: "MID" },
    { num: 8, name: "Arda Güler", pos: "MID" },
    { num: 22, name: "Kaan Ayhan", pos: "MID" },
    { num: 19, name: "Kenan Yıldız", pos: "FWD" },
    { num: 11, name: "Barış Alper Yılmaz", pos: "FWD" },
    { num: 7, name: "Kerem Aktürkoğlu", pos: "FWD" }
  ],
  // Argentina
  "37": [
    { num: 23, name: "Emiliano Martínez", pos: "GK" },
    { num: 13, name: "Cristian Romero", pos: "DEF" },
    { num: 25, name: "Lisandro Martínez", pos: "DEF" },
    { num: 26, name: "Nahuel Molina", pos: "DEF" },
    { num: 3, name: "Nicolás Tagliafico", pos: "DEF" },
    { num: 7, name: "Rodrigo De Paul", pos: "MID" },
    { num: 24, name: "Enzo Fernández", pos: "MID" },
    { num: 20, name: "Alexis Mac Allister", pos: "MID" },
    { num: 10, name: "Lionel Messi", pos: "FWD" },
    { num: 22, name: "Lautaro Martínez", pos: "FWD" },
    { num: 9, name: "Julián Álvarez", pos: "FWD" }
  ],
  // Brazil
  "9": [
    { num: 1, name: "Alisson Becker", pos: "GK" },
    { num: 4, name: "Marquinhos", pos: "DEF" },
    { num: 3, name: "Éder Militão", pos: "DEF" },
    { num: 14, name: "Gabriel Magalhães", pos: "DEF" },
    { num: 2, name: "Danilo", pos: "DEF" },
    { num: 5, name: "Bruno Guimarães", pos: "MID" },
    { num: 18, name: "Douglas Luiz", pos: "MID" },
    { num: 8, name: "Lucas Paquetá", pos: "MID" },
    { num: 7, name: "Vinícius Júnior", pos: "FWD" },
    { num: 10, name: "Rodrygo Goes", pos: "FWD" },
    { num: 9, name: "Endrick", pos: "FWD" }
  ],
  // Portugal
  "41": [
    { num: 22, name: "Diogo Costa", pos: "GK" },
    { num: 4, name: "Rúben Dias", pos: "DEF" },
    { num: 3, name: "Pepe", pos: "DEF" },
    { num: 2, name: "João Cancelo", pos: "DEF" },
    { num: 19, name: "Nuno Mendes", pos: "DEF" },
    { num: 6, name: "João Palhinha", pos: "MID" },
    { num: 8, name: "Bruno Fernandes", pos: "MID" },
    { num: 10, name: "Bernardo Silva", pos: "MID" },
    { num: 17, name: "Rafael Leão", pos: "FWD" },
    { num: 11, name: "João Félix", pos: "FWD" },
    { num: 7, name: "Cristiano Ronaldo", pos: "FWD" }
  ],
  // France
  "33": [
    { num: 16, name: "Mike Maignan", pos: "GK" },
    { num: 17, name: "William Saliba", pos: "DEF" },
    { num: 4, name: "Dayot Upamecano", pos: "DEF" },
    { num: 22, name: "Theo Hernández", pos: "DEF" },
    { num: 5, name: "Jules Koundé", pos: "DEF" },
    { num: 8, name: "Aurélien Tchouaméni", pos: "MID" },
    { num: 6, name: "Eduardo Camavinga", pos: "MID" },
    { num: 14, name: "Adrien Rabiot", pos: "MID" },
    { num: 7, name: "Antoine Griezmann", pos: "FWD" },
    { num: 11, name: "Ousmane Dembélé", pos: "FWD" },
    { num: 10, name: "Kylian Mbappé", pos: "FWD" }
  ],
  // Germany
  "17": [
    { num: 1, name: "Manuel Neuer", pos: "GK" },
    { num: 2, name: "Antonio Rüdiger", pos: "DEF" },
    { num: 4, name: "Jonathan Tah", pos: "DEF" },
    { num: 6, name: "Joshua Kimmich", pos: "DEF" },
    { num: 22, name: "David Raum", pos: "DEF" },
    { num: 8, name: "Toni Kroos", pos: "MID" },
    { num: 21, name: "İlkay Gündoğan", pos: "MID" },
    { num: 10, name: "Jamal Musiala", pos: "MID" },
    { num: 17, name: "Florian Wirtz", pos: "MID" },
    { num: 7, name: "Kai Havertz", pos: "FWD" },
    { num: 9, name: "Niclas Füllkrug", pos: "FWD" }
  ],
  // Spain
  "29": [
    { num: 23, name: "Unai Simón", pos: "GK" },
    { num: 3, name: "Robin Le Normand", pos: "DEF" },
    { num: 14, name: "Aymeric Laporte", pos: "DEF" },
    { num: 2, name: "Dani Carvajal", pos: "DEF" },
    { num: 24, name: "Marc Cucurella", pos: "DEF" },
    { num: 16, name: "Rodri", pos: "MID" },
    { num: 20, name: "Pedri", pos: "MID" },
    { num: 10, name: "Dani Olmo", pos: "MID" },
    { num: 19, name: "Lamine Yamal", pos: "FWD" },
    { num: 17, name: "Nico Williams", pos: "FWD" },
    { num: 7, name: "Alvaro Morata", pos: "FWD" }
  ],
  // England
  "45": [
    { num: 1, name: "Jordan Pickford", pos: "GK" },
    { num: 5, name: "John Stones", pos: "DEF" },
    { num: 6, name: "Marc Guéhi", pos: "DEF" },
    { num: 2, name: "Kyle Walker", pos: "DEF" },
    { num: 12, name: "Kieran Trippier", pos: "DEF" },
    { num: 4, name: "Declan Rice", pos: "MID" },
    { num: 10, name: "Jude Bellingham", pos: "MID" },
    { num: 24, name: "Cole Palmer", pos: "MID" },
    { num: 7, name: "Bukayo Saka", pos: "FWD" },
    { num: 11, name: "Phil Foden", pos: "FWD" },
    { num: 9, name: "Harry Kane", pos: "FWD" }
  ],
  // Netherlands
  "21": [
    { num: 1, name: "Bart Verbruggen", pos: "GK" },
    { num: 4, name: "Virgil van Dijk", pos: "DEF" },
    { num: 6, name: "Stefan de Vrij", pos: "DEF" },
    { num: 5, name: "Nathan Aké", pos: "DEF" },
    { num: 22, name: "Denzel Dumfries", pos: "DEF" },
    { num: 14, name: "Tijjani Reijnders", pos: "MID" },
    { num: 24, name: "Jerdy Schouten", pos: "MID" },
    { num: 7, name: "Xavi Simons", pos: "MID" },
    { num: 11, name: "Cody Gakpo", pos: "FWD" },
    { num: 10, name: "Memphis Depay", pos: "FWD" },
    { num: 9, name: "Wout Weghorst", pos: "FWD" }
  ],
  // Belgium
  "25": [
    { num: 1, name: "Koen Casteels", pos: "GK" },
    { num: 4, name: "Wout Faes", pos: "DEF" },
    { num: 3, name: "Arthur Theate", pos: "DEF" },
    { num: 21, name: "Timothy Castagne", pos: "DEF" },
    { num: 5, name: "Jan Vertonghen", pos: "DEF" },
    { num: 6, name: "Amadou Onana", pos: "MID" },
    { num: 8, name: "Youri Tielemans", pos: "MID" },
    { num: 7, name: "Kevin De Bruyne", pos: "MID" },
    { num: 11, name: "Jérémy Doku", pos: "FWD" },
    { num: 9, name: "Leandro Trossard", pos: "FWD" },
    { num: 10, name: "Romelu Lukaku", pos: "FWD" }
  ],
  // USA
  "13": [
    { num: 1, name: "Matt Turner", pos: "GK" },
    { num: 3, name: "Chris Richards", pos: "DEF" },
    { num: 13, name: "Tim Ream", pos: "DEF" },
    { num: 5, name: "Antonee Robinson", pos: "DEF" },
    { num: 19, name: "Joe Scally", pos: "DEF" },
    { num: 4, name: "Tyler Adams", pos: "MID" },
    { num: 8, name: "Weston McKennie", pos: "MID" },
    { num: 6, name: "Yunus Musah", pos: "MID" },
    { num: 10, name: "Christian Pulisic", pos: "FWD" },
    { num: 21, name: "Timothy Weah", pos: "FWD" },
    { num: 20, name: "Folarin Balogun", pos: "FWD" }
  ],
  // Canada
  "5": [
    { num: 16, name: "Maxime Crépeau", pos: "GK" },
    { num: 19, name: "Alphonso Davies", pos: "DEF" },
    { num: 2, name: "Alistair Johnston", pos: "DEF" },
    { num: 15, name: "Moïse Bombito", pos: "DEF" },
    { num: 13, name: "Derek Cornelius", pos: "DEF" },
    { num: 7, name: "Stephen Eustáquio", pos: "MID" },
    { num: 8, name: "Ismaël Koné", pos: "MID" },
    { num: 11, name: "Tajon Buchanan", pos: "MID" },
    { num: 22, name: "Richie Laryea", pos: "MID" },
    { num: 10, name: "Jonathan David", pos: "FWD" },
    { num: 9, name: "Cyle Larin", pos: "FWD" }
  ],
  // Mexico
  "1": [
    { num: 1, name: "Julio González", pos: "GK" },
    { num: 3, name: "César Montes", pos: "DEF" },
    { num: 5, name: "Johan Vásquez", pos: "DEF" },
    { num: 19, name: "Jorge Sánchez", pos: "DEF" },
    { num: 6, name: "Gerardo Arteaga", pos: "DEF" },
    { num: 4, name: "Edson Álvarez", pos: "MID" },
    { num: 24, name: "Luis Chávez", pos: "MID" },
    { num: 7, name: "Luis Romo", pos: "MID" },
    { num: 15, name: "Uriel Antuna", pos: "FWD" },
    { num: 17, name: "Orbelín Pineda", pos: "FWD" },
    { num: 11, name: "Santiago Giménez", pos: "FWD" }
  ],
  // Morocco
  "10": [
    { num: 1, name: "Yassine Bounou", pos: "GK" },
    { num: 2, name: "Achraf Hakimi", pos: "DEF" },
    { num: 5, name: "Nayef Aguerd", pos: "DEF" },
    { num: 6, name: "Romain Saïss", pos: "DEF" },
    { num: 3, name: "Noussair Mazraoui", pos: "DEF" },
    { num: 4, name: "Sofyan Amrabat", pos: "MID" },
    { num: 8, name: "Azzedine Ounahi", pos: "MID" },
    { num: 10, name: "Brahim Díaz", pos: "MID" },
    { num: 7, name: "Hakim Ziyech", pos: "FWD" },
    { num: 19, name: "Youssef En-Nesyri", pos: "FWD" },
    { num: 20, name: "Ayoub El Kaabi", pos: "FWD" }
  ]
};


// --- Application State ---
const state = {
  lang: "en",
  activeTab: "live",
  activeSubtab: "by-date",
  selectedGroup: "ALL",
  games: [],
  groups: [],
  teams: [],
  stadiums: [],
  modalTeamId: null
};

const fallbackTeams = [
  { id: "1", name_en: "Mexico", name_fa: "مکزیک", flag: "https://flagcdn.com/w80/mx.png", fifa_code: "MEX", groups: "A" },
  { id: "2", name_en: "South Africa", name_fa: "آفریقای جنوبی", flag: "https://flagcdn.com/w80/za.png", fifa_code: "RSA", groups: "A" },
  { id: "3", name_en: "South Korea", name_fa: "کره جنوبی", flag: "https://flagcdn.com/w80/kr.png", fifa_code: "KOR", groups: "A" },
  { id: "4", name_en: "Czech Republic", name_fa: "جمهوری چک", flag: "https://flagcdn.com/w80/cz.png", fifa_code: "CZE", groups: "A" },
  { id: "5", name_en: "Canada", name_fa: "کانادا", flag: "https://flagcdn.com/w80/ca.png", fifa_code: "CAN", groups: "B" },
  { id: "6", name_en: "Bosnia and Herzegovina", name_fa: "بوسنی و هرزگوین", flag: "https://flagcdn.com/w80/ba.png", fifa_code: "BIH", groups: "B" },
  { id: "7", name_en: "Qatar", name_fa: "قطر", flag: "https://flagcdn.com/w80/qa.png", fifa_code: "QAT", groups: "B" },
  { id: "8", name_en: "Switzerland", name_fa: "سوئیس", flag: "https://flagcdn.com/w80/ch.png", fifa_code: "SUI", groups: "B" },
  { id: "9", name_en: "Brazil", name_fa: "برزیل", flag: "https://flagcdn.com/w80/br.png", fifa_code: "BRA", groups: "C" },
  { id: "10", name_en: "Morocco", name_fa: "مراکش", flag: "https://flagcdn.com/w80/ma.png", fifa_code: "MAR", groups: "C" },
  { id: "11", name_en: "Haiti", name_fa: "هائیتی", flag: "https://flagcdn.com/w80/ht.png", fifa_code: "HAI", groups: "C" },
  { id: "12", name_en: "Scotland", name_fa: "اسکاتلند", flag: "https://flagcdn.com/w80/gb-sct.png", fifa_code: "SCO", groups: "C" },
  { id: "13", name_en: "United States", name_fa: "آمریکا", flag: "https://flagcdn.com/w80/us.png", fifa_code: "USA", groups: "D" },
  { id: "14", name_en: "Paraguay", name_fa: "پاراگوئه", flag: "https://flagcdn.com/w80/py.png", fifa_code: "PAR", groups: "D" },
  { id: "15", name_en: "Australia", name_fa: "استرالیا", flag: "https://flagcdn.com/w80/au.png", fifa_code: "AUS", groups: "D" },
  { id: "16", name_en: "Turkey", name_fa: "ترکیه", flag: "https://flagcdn.com/w80/tr.png", fifa_code: "TUR", groups: "D" },
  { id: "17", name_en: "Germany", name_fa: "آلمان", flag: "https://flagcdn.com/w80/de.png", fifa_code: "GER", groups: "E" },
  { id: "18", name_en: "Curaçao", name_fa: "کوراسائو", flag: "https://flagcdn.com/w80/cw.png", fifa_code: "CUW", groups: "E" },
  { id: "19", name_en: "Ivory Coast", name_fa: "ساحل عاج", flag: "https://flagcdn.com/w80/ci.png", fifa_code: "CIV", groups: "E" },
  { id: "20", name_en: "Ecuador", name_fa: "اکوادور", flag: "https://flagcdn.com/w80/ec.png", fifa_code: "ECU", groups: "E" },
  { id: "21", name_en: "Netherlands", name_fa: "هلند", flag: "https://flagcdn.com/w80/nl.png", fifa_code: "NED", groups: "F" },
  { id: "22", name_en: "Japan", name_fa: "ژاپن", flag: "https://flagcdn.com/w80/jp.png", fifa_code: "JPN", groups: "F" },
  { id: "23", name_en: "Sweden", name_fa: "سوئد", flag: "https://flagcdn.com/w80/se.png", fifa_code: "SWE", groups: "F" },
  { id: "24", name_en: "Tunisia", name_fa: "تونس", flag: "https://flagcdn.com/w80/tn.png", fifa_code: "TUN", groups: "F" },
  { id: "25", name_en: "Belgium", name_fa: "بلژیک", flag: "https://flagcdn.com/w80/be.png", fifa_code: "BEL", groups: "G" },
  { id: "26", name_en: "Egypt", name_fa: "مصر", flag: "https://flagcdn.com/w80/eg.png", fifa_code: "EGY", groups: "G" },
  { id: "27", name_en: "Iran", name_fa: "ایران", flag: "https://flagcdn.com/w80/ir.png", fifa_code: "IRN", groups: "G" },
  { id: "28", name_en: "New Zealand", name_fa: "نیوزیلند", flag: "https://flagcdn.com/w80/nz.png", fifa_code: "NZL", groups: "G" },
  { id: "29", name_en: "Spain", name_fa: "اسپانیا", flag: "https://flagcdn.com/w80/es.png", fifa_code: "ESP", groups: "H" },
  { id: "30", name_en: "Cape Verde", name_fa: "کیپ ورد", flag: "https://flagcdn.com/w80/cv.png", fifa_code: "CPV", groups: "H" },
  { id: "31", name_en: "Saudi Arabia", name_fa: "عربستان", flag: "https://flagcdn.com/w80/sa.png", fifa_code: "KSA", groups: "H" },
  { id: "32", name_en: "Uruguay", name_fa: "اروگوئه", flag: "https://flagcdn.com/w80/uy.png", fifa_code: "URU", groups: "H" },
  { id: "33", name_en: "France", name_fa: "فرانسه", flag: "https://flagcdn.com/w80/fr.png", fifa_code: "FRA", groups: "I" },
  { id: "34", name_en: "Senegal", name_fa: "سنگال", flag: "https://flagcdn.com/w80/sn.png", fifa_code: "SEN", groups: "I" },
  { id: "35", name_en: "Iraq", name_fa: "عراق", flag: "https://flagcdn.com/w80/iq.png", fifa_code: "IRQ", groups: "I" },
  { id: "36", name_en: "Norway", name_fa: "نروژ", flag: "https://flagcdn.com/w80/no.png", fifa_code: "NOR", groups: "I" },
  { id: "37", name_en: "Argentina", name_fa: "آرژانتین", flag: "https://flagcdn.com/w80/ar.png", fifa_code: "ARG", groups: "J" },
  { id: "38", name_en: "Algeria", name_fa: "الجزایر", flag: "https://flagcdn.com/w80/dz.png", fifa_code: "ALG", groups: "J" },
  { id: "39", name_en: "Austria", name_fa: "اتریش", flag: "https://flagcdn.com/w80/at.png", fifa_code: "AUT", groups: "J" },
  { id: "40", name_en: "Jordan", name_fa: "اردن", flag: "https://flagcdn.com/w80/jo.png", fifa_code: "JOR", groups: "J" },
  { id: "41", name_en: "Portugal", name_fa: "پرتغال", flag: "https://flagcdn.com/w80/pt.png", fifa_code: "POR", groups: "K" },
  { id: "42", name_en: "Democratic Republic of the Congo", name_fa: "جمهوری دموکراتیک کنگو", flag: "https://flagcdn.com/w80/cd.png", fifa_code: "COD", groups: "K" },
  { id: "43", name_en: "Uzbekistan", name_fa: "ازبکستان", flag: "https://flagcdn.com/w80/uz.png", fifa_code: "UZB", groups: "K" },
  { id: "44", name_en: "Colombia", name_fa: "کلمبیا", flag: "https://flagcdn.com/w80/co.png", fifa_code: "COL", groups: "K" },
  { id: "45", name_en: "England", name_fa: "انگلستان", flag: "https://flagcdn.com/w80/gb-eng.png", fifa_code: "ENG", groups: "L" },
  { id: "46", name_en: "Croatia", name_fa: "کرواسی", flag: "https://flagcdn.com/w80/hr.png", fifa_code: "CRO", groups: "L" },
  { id: "47", name_en: "Ghana", name_fa: "غنا", flag: "https://flagcdn.com/w80/gh.png", fifa_code: "GHA", groups: "L" },
  { id: "48", name_en: "Panama", name_fa: "پاناما", flag: "https://flagcdn.com/w80/pa.png", fifa_code: "PAN", groups: "L" }
];

const fallbackGroups = [
  { name: "A", teams: [{ team_id: "1", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "2", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "3", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "4", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "B", teams: [{ team_id: "5", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "6", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "7", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "8", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "C", teams: [{ team_id: "9", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "10", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "11", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "12", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "D", teams: [{ team_id: "13", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "14", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "15", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "16", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "E", teams: [{ team_id: "17", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "18", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "19", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "20", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "F", teams: [{ team_id: "21", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "22", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "23", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "24", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "G", teams: [{ team_id: "25", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "26", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "27", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "28", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "H", teams: [{ team_id: "29", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "30", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "31", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "32", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "I", teams: [{ team_id: "33", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "34", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "35", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "36", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "J", teams: [{ team_id: "37", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "38", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "39", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "40", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "K", teams: [{ team_id: "41", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "42", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "43", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "44", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] },
  { name: "L", teams: [{ team_id: "45", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "46", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "47", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }, { team_id: "48", mp: "0", w: "0", l: "0", d: "0", pts: "0", gf: "0", ga: "0", gd: "0" }] }
];

const fallbackStadiums = [
  { id: "1", name_en: "Estadio Azteca", city_en: "Mexico City", capacity: 83000 },
  { id: "2", name_en: "Estadio Akron", city_en: "Guadalajara", capacity: 48000 },
  { id: "3", name_en: "Estadio BBVA", city_en: "Monterrey", capacity: 53500 },
  { id: "4", name_en: "AT&T Stadium", city_en: "Dallas", capacity: 94000 },
  { id: "5", name_en: "NRG Stadium", city_en: "Houston", capacity: 72000 },
  { id: "6", name_en: "GEHA Field at Arrowhead Stadium", city_en: "Kansas City", capacity: 73000 },
  { id: "7", name_en: "Mercedes-Benz Stadium", city_en: "Atlanta", capacity: 75000 },
  { id: "8", name_en: "Hard Rock Stadium", city_en: "Miami", capacity: 65000 },
  { id: "9", name_en: "Gillette Stadium", city_en: "Boston", capacity: 65000 },
  { id: "10", name_en: "Lincoln Financial Field", city_en: "Philadelphia", capacity: 69000 },
  { id: "11", name_en: "MetLife Stadium", city_en: "New York", capacity: 82500 },
  { id: "12", name_en: "BMO Field", city_en: "Toronto", capacity: 45000 },
  { id: "13", name_en: "BC Place", city_en: "Vancouver", capacity: 54000 },
  { id: "14", name_en: "Lumen Field", city_en: "Seattle", capacity: 69000 },
  { id: "15", name_en: "Levi's Stadium", city_en: "San Francisco", capacity: 71000 },
  { id: "16", name_en: "SoFi Stadium", city_en: "Los Angeles", capacity: 70000 }
];

const fallbackGames = [
  { id: "1", home_team_id: "1", away_team_id: "2", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "1", local_date: "06/11/2026 13:00", type: "group", stadium_id: "1", home_scorers: "null", away_scorers: "null" },
  { id: "2", home_team_id: "3", away_team_id: "4", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "1", local_date: "06/11/2026 20:00", type: "group", stadium_id: "2", home_scorers: "null", away_scorers: "null" },
  { id: "3", home_team_id: "5", away_team_id: "6", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "1", local_date: "06/12/2026 15:00", type: "group", stadium_id: "12", home_scorers: "null", away_scorers: "null" },
  { id: "4", home_team_id: "13", away_team_id: "14", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "1", local_date: "06/12/2026 18:00", type: "group", stadium_id: "16", home_scorers: "null", away_scorers: "null" },
  { id: "5", home_team_id: "11", away_team_id: "12", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "1", local_date: "06/13/2026 21:00", type: "group", stadium_id: "9", home_scorers: "null", away_scorers: "null" },
  { id: "6", home_team_id: "15", away_team_id: "16", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "1", local_date: "06/13/2026 21:00", type: "group", stadium_id: "13", home_scorers: "null", away_scorers: "null" },
  { id: "7", home_team_id: "9", away_team_id: "10", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "1", local_date: "06/13/2026 18:00", type: "group", stadium_id: "11", home_scorers: "null", away_scorers: "null" },
  { id: "8", home_team_id: "7", away_team_id: "8", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "1", local_date: "06/13/2026 12:00", type: "group", stadium_id: "15", home_scorers: "null", away_scorers: "null" },
  { id: "9", home_team_id: "19", away_team_id: "20", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "1", local_date: "06/14/2026 19:00", type: "group", stadium_id: "10", home_scorers: "null", away_scorers: "null" },
  { id: "10", home_team_id: "17", away_team_id: "18", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "1", local_date: "06/14/2026 12:00", type: "group", stadium_id: "5", home_scorers: "null", away_scorers: "null" },
  { id: "11", home_team_id: "21", away_team_id: "22", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "1", local_date: "06/14/2026 15:00", type: "group", stadium_id: "4", home_scorers: "null", away_scorers: "null" },
  { id: "12", home_team_id: "23", away_team_id: "24", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "1", local_date: "06/14/2026 20:00", type: "group", stadium_id: "3", home_scorers: "null", away_scorers: "null" },
  { id: "13", home_team_id: "27", away_team_id: "28", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "1", local_date: "06/15/2026 18:00", type: "group", stadium_id: "16", home_scorers: "null", away_scorers: "null" },
  { id: "14", home_team_id: "29", away_team_id: "30", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "1", local_date: "06/15/2026 12:00", type: "group", stadium_id: "7", home_scorers: "null", away_scorers: "null" },
  { id: "15", home_team_id: "25", away_team_id: "26", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "1", local_date: "06/15/2026 12:00", type: "group", stadium_id: "14", home_scorers: "null", away_scorers: "null" },
  { id: "16", home_team_id: "31", away_team_id: "32", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "1", local_date: "06/15/2026 18:00", type: "group", stadium_id: "8", home_scorers: "null", away_scorers: "null" },
  { id: "17", home_team_id: "33", away_team_id: "34", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "1", local_date: "06/16/2026 15:00", type: "group", stadium_id: "11", home_scorers: "null", away_scorers: "null" },
  { id: "18", home_team_id: "35", away_team_id: "36", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "1", local_date: "06/16/2026 18:00", type: "group", stadium_id: "9", home_scorers: "null", away_scorers: "null" },
  { id: "19", home_team_id: "37", away_team_id: "38", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "1", local_date: "06/16/2026 20:00", type: "group", stadium_id: "6", home_scorers: "null", away_scorers: "null" },
  { id: "20", home_team_id: "39", away_team_id: "40", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "1", local_date: "06/16/2026 21:00", type: "group", stadium_id: "15", home_scorers: "null", away_scorers: "null" },
  { id: "21", home_team_id: "41", away_team_id: "42", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "1", local_date: "06/17/2026 12:00", type: "group", stadium_id: "5", home_scorers: "null", away_scorers: "null" },
  { id: "22", home_team_id: "45", away_team_id: "46", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "1", local_date: "06/17/2026 15:00", type: "group", stadium_id: "4", home_scorers: "null", away_scorers: "null" },
  { id: "23", home_team_id: "43", away_team_id: "44", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "1", local_date: "06/17/2026 20:00", type: "group", stadium_id: "1", home_scorers: "null", away_scorers: "null" },
  { id: "24", home_team_id: "47", away_team_id: "48", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "1", local_date: "06/17/2026 19:00", type: "group", stadium_id: "12", home_scorers: "null", away_scorers: "null" },
  { id: "25", home_team_id: "1", away_team_id: "3", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "2", local_date: "06/18/2026 19:00", type: "group", stadium_id: "2", home_scorers: "null", away_scorers: "null" },
  { id: "26", home_team_id: "8", away_team_id: "6", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "2", local_date: "06/18/2026 12:00", type: "group", stadium_id: "16", home_scorers: "null", away_scorers: "null" },
  { id: "27", home_team_id: "5", away_team_id: "7", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "2", local_date: "06/18/2026 15:00", type: "group", stadium_id: "13", home_scorers: "null", away_scorers: "null" },
  { id: "28", home_team_id: "4", away_team_id: "2", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "2", local_date: "06/18/2026 12:00", type: "group", stadium_id: "7", home_scorers: "null", away_scorers: "null" },
  { id: "29", home_team_id: "9", away_team_id: "11", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "2", local_date: "06/19/2026 21:00", type: "group", stadium_id: "10", home_scorers: "null", away_scorers: "null" },
  { id: "30", home_team_id: "12", away_team_id: "10", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "2", local_date: "06/19/2026 18:00", type: "group", stadium_id: "9", home_scorers: "null", away_scorers: "null" },
  { id: "31", home_team_id: "13", away_team_id: "15", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "2", local_date: "06/19/2026 12:00", type: "group", stadium_id: "14", home_scorers: "null", away_scorers: "null" },
  { id: "32", home_team_id: "16", away_team_id: "14", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "2", local_date: "06/19/2026 20:00", type: "group", stadium_id: "15", home_scorers: "null", away_scorers: "null" },
  { id: "33", home_team_id: "17", away_team_id: "19", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "2", local_date: "06/20/2026 16:00", type: "group", stadium_id: "12", home_scorers: "null", away_scorers: "null" },
  { id: "34", home_team_id: "20", away_team_id: "18", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "2", local_date: "06/20/2026 19:00", type: "group", stadium_id: "6", home_scorers: "null", away_scorers: "null" },
  { id: "35", home_team_id: "21", away_team_id: "23", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "2", local_date: "06/20/2026 12:00", type: "group", stadium_id: "5", home_scorers: "null", away_scorers: "null" },
  { id: "36", home_team_id: "24", away_team_id: "22", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "2", local_date: "06/20/2026 22:00", type: "group", stadium_id: "3", home_scorers: "null", away_scorers: "null" },
  { id: "37", home_team_id: "25", away_team_id: "27", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "2", local_date: "06/21/2026 12:00", type: "group", stadium_id: "16", home_scorers: "null", away_scorers: "null" },
  { id: "38", home_team_id: "28", away_team_id: "26", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "2", local_date: "06/21/2026 18:00", type: "group", stadium_id: "13", home_scorers: "null", away_scorers: "null" },
  { id: "39", home_team_id: "29", away_team_id: "31", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "2", local_date: "06/21/2026 12:00", type: "group", stadium_id: "7", home_scorers: "null", away_scorers: "null" },
  { id: "40", home_team_id: "32", away_team_id: "30", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "2", local_date: "06/21/2026 18:00", type: "group", stadium_id: "8", home_scorers: "null", away_scorers: "null" },
  { id: "41", home_team_id: "33", away_team_id: "35", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "2", local_date: "06/22/2026 17:00", type: "group", stadium_id: "10", home_scorers: "null", away_scorers: "null" },
  { id: "42", home_team_id: "36", away_team_id: "34", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "2", local_date: "06/22/2026 20:00", type: "group", stadium_id: "11", home_scorers: "null", away_scorers: "null" },
  { id: "43", home_team_id: "37", away_team_id: "39", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "2", local_date: "06/22/2026 12:00", type: "group", stadium_id: "4", home_scorers: "null", away_scorers: "null" },
  { id: "44", home_team_id: "40", away_team_id: "38", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "2", local_date: "06/22/2026 20:00", type: "group", stadium_id: "15", home_scorers: "null", away_scorers: "null" },
  { id: "45", home_team_id: "41", away_team_id: "43", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "2", local_date: "06/23/2026 12:00", type: "group", stadium_id: "5", home_scorers: "null", away_scorers: "null" },
  { id: "46", home_team_id: "48", away_team_id: "46", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "2", local_date: "06/23/2026 19:00", type: "group", stadium_id: "12", home_scorers: "null", away_scorers: "null" },
  { id: "47", home_team_id: "44", away_team_id: "42", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "2", local_date: "06/23/2026 20:00", type: "group", stadium_id: "2", home_scorers: "null", away_scorers: "null" },
  { id: "48", home_team_id: "45", away_team_id: "47", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "2", local_date: "06/23/2026 16:00", type: "group", stadium_id: "9", home_scorers: "null", away_scorers: "null" },
  { id: "49", home_team_id: "12", away_team_id: "9", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "3", local_date: "06/24/2026 18:00", type: "group", stadium_id: "8", home_scorers: "null", away_scorers: "null" },
  { id: "50", home_team_id: "10", away_team_id: "11", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "C", matchday: "3", local_date: "06/24/2026 18:00", type: "group", stadium_id: "7", home_scorers: "null", away_scorers: "null" },
  { id: "51", home_team_id: "2", away_team_id: "3", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "3", local_date: "06/24/2026 19:00", type: "group", stadium_id: "3", home_scorers: "null", away_scorers: "null" },
  { id: "52", home_team_id: "4", away_team_id: "1", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "A", matchday: "3", local_date: "06/24/2026 19:00", type: "group", stadium_id: "1", home_scorers: "null", away_scorers: "null" },
  { id: "53", home_team_id: "6", away_team_id: "7", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "3", local_date: "06/24/2026 12:00", type: "group", stadium_id: "14", home_scorers: "null", away_scorers: "null" },
  { id: "54", home_team_id: "8", away_team_id: "5", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "B", matchday: "3", local_date: "06/24/2026 12:00", type: "group", stadium_id: "13", home_scorers: "null", away_scorers: "null" },
  { id: "55", home_team_id: "18", away_team_id: "19", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "3", local_date: "06/25/2026 16:00", type: "group", stadium_id: "10", home_scorers: "null", away_scorers: "null" },
  { id: "56", home_team_id: "20", away_team_id: "17", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "E", matchday: "3", local_date: "06/25/2026 16:00", type: "group", stadium_id: "11", home_scorers: "null", away_scorers: "null" },
  { id: "57", home_team_id: "14", away_team_id: "15", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "3", local_date: "06/25/2026 19:00", type: "group", stadium_id: "15", home_scorers: "null", away_scorers: "null" },
  { id: "58", home_team_id: "16", away_team_id: "13", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "D", matchday: "3", local_date: "06/25/2026 19:00", type: "group", stadium_id: "16", home_scorers: "null", away_scorers: "null" },
  { id: "59", home_team_id: "22", away_team_id: "23", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "3", local_date: "06/25/2026 18:00", type: "group", stadium_id: "4", home_scorers: "null", away_scorers: "null" },
  { id: "60", home_team_id: "24", away_team_id: "21", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "F", matchday: "3", local_date: "06/25/2026 18:00", type: "group", stadium_id: "6", home_scorers: "null", away_scorers: "null" },
  { id: "61", home_team_id: "34", away_team_id: "35", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "3", local_date: "06/26/2026 15:00", type: "group", stadium_id: "12", home_scorers: "null", away_scorers: "null" },
  { id: "62", home_team_id: "36", away_team_id: "33", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "I", matchday: "3", local_date: "06/26/2026 15:00", type: "group", stadium_id: "9", home_scorers: "null", away_scorers: "null" },
  { id: "63", home_team_id: "26", away_team_id: "27", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "3", local_date: "06/26/2026 20:00", type: "group", stadium_id: "14", home_scorers: "null", away_scorers: "null" },
  { id: "64", home_team_id: "28", away_team_id: "25", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "G", matchday: "3", local_date: "06/26/2026 20:00", type: "group", stadium_id: "13", home_scorers: "null", away_scorers: "null" },
  { id: "65", home_team_id: "30", away_team_id: "31", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "3", local_date: "06/26/2026 19:00", type: "group", stadium_id: "5", home_scorers: "null", away_scorers: "null" },
  { id: "66", home_team_id: "32", away_team_id: "29", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "H", matchday: "3", local_date: "06/26/2026 18:00", type: "group", stadium_id: "2", home_scorers: "null", away_scorers: "null" },
  { id: "67", home_team_id: "48", away_team_id: "45", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "3", local_date: "06/27/2026 17:00", type: "group", stadium_id: "11", home_scorers: "null", away_scorers: "null" },
  { id: "68", home_team_id: "46", away_team_id: "47", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "L", matchday: "3", local_date: "06/27/2026 17:00", type: "group", stadium_id: "10", home_scorers: "null", away_scorers: "null" },
  { id: "69", home_team_id: "38", away_team_id: "39", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "3", local_date: "06/27/2026 21:00", type: "group", stadium_id: "6", home_scorers: "null", away_scorers: "null" },
  { id: "70", home_team_id: "40", away_team_id: "37", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "J", matchday: "3", local_date: "06/27/2026 21:00", type: "group", stadium_id: "4", home_scorers: "null", away_scorers: "null" },
  { id: "71", home_team_id: "44", away_team_id: "41", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "3", local_date: "06/27/2026 19:30", type: "group", stadium_id: "8", home_scorers: "null", away_scorers: "null" },
  { id: "72", home_team_id: "42", away_team_id: "43", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "K", matchday: "3", local_date: "06/27/2026 19:30", type: "group", stadium_id: "7", home_scorers: "null", away_scorers: "null" },
  { id: "73", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/28/2026 12:00", type: "r32", stadium_id: "16", home_team_label: "Runner-up Group A", away_team_label: "Runner-up Group B", home_scorers: "null", away_scorers: "null" },
  { id: "74", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/29/2026 16:30", type: "r32", stadium_id: "9", home_team_label: "Winner Group E", away_team_label: "3rd Group A/B/C/D/F", home_scorers: "null", away_scorers: "null" },
  { id: "75", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/29/2026 19:00", type: "r32", stadium_id: "3", home_team_label: "Winner Group F", away_team_label: "Runner-up Group C", home_scorers: "null", away_scorers: "null" },
  { id: "76", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/29/2026 12:00", type: "r32", stadium_id: "5", home_team_label: "Winner Group C", away_team_label: "Runner-up Group F", home_scorers: "null", away_scorers: "null" },
  { id: "77", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/30/2026 17:00", type: "r32", stadium_id: "11", home_team_label: "Winner Group I", away_team_label: "3rd Group C/D/F/G/H", home_scorers: "null", away_scorers: "null" },
  { id: "78", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/30/2026 12:00", type: "r32", stadium_id: "4", home_team_label: "Runner-up Group E", away_team_label: "Runner-up Group I", home_scorers: "null", away_scorers: "null" },
  { id: "79", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "06/30/2026 19:00", type: "r32", stadium_id: "1", home_team_label: "Winner Group A", away_team_label: "3rd Group C/E/F/H/I", home_scorers: "null", away_scorers: "null" },
  { id: "80", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/01/2026 12:00", type: "r32", stadium_id: "7", home_team_label: "Winner Group L", away_team_label: "3rd Group E/H/I/J/K", home_scorers: "null", away_scorers: "null" },
  { id: "81", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/01/2026 17:00", type: "r32", stadium_id: "15", home_team_label: "Winner Group D", away_team_label: "3rd Group B/E/F/I/J", home_scorers: "null", away_scorers: "null" },
  { id: "82", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/01/2026 13:00", type: "r32", stadium_id: "14", home_team_label: "Winner Group G", away_team_label: "3rd Group A/E/H/I/J", home_scorers: "null", away_scorers: "null" },
  { id: "83", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/02/2026 19:00", type: "r32", stadium_id: "12", home_team_label: "Runner-up Group K", away_team_label: "Runner-up Group L", home_scorers: "null", away_scorers: "null" },
  { id: "84", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/02/2026 12:00", type: "r32", stadium_id: "16", home_team_label: "Winner Group H", away_team_label: "Runner-up Group J", home_scorers: "null", away_scorers: "null" },
  { id: "85", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/02/2026 20:00", type: "r32", stadium_id: "13", home_team_label: "Winner Group B", away_team_label: "3rd Group E/F/G/I/J", home_scorers: "null", away_scorers: "null" },
  { id: "86", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/03/2026 18:00", type: "r32", stadium_id: "8", home_team_label: "Winner Group J", away_team_label: "Runner-up Group H", home_scorers: "null", away_scorers: "null" },
  { id: "87", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/03/2026 20:30", type: "r32", stadium_id: "6", home_team_label: "Winner Group K", away_team_label: "3rd Group D/E/I/J/L", home_scorers: "null", away_scorers: "null" },
  { id: "88", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R32", matchday: "4", local_date: "07/03/2026 13:00", type: "r32", stadium_id: "4", home_team_label: "Runner-up Group D", away_team_label: "Runner-up Group G", home_scorers: "null", away_scorers: "null" },
  { id: "89", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/04/2026 17:00", type: "r16", stadium_id: "10", home_team_label: "Winner Match 74", away_team_label: "Winner Match 77", home_scorers: "null", away_scorers: "null" },
  { id: "90", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/04/2026 12:00", type: "r16", stadium_id: "5", home_team_label: "Winner Match 73", away_team_label: "Winner Match 75", home_scorers: "null", away_scorers: "null" },
  { id: "91", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/05/2026 16:00", type: "r16", stadium_id: "11", home_team_label: "Winner Match 76", away_team_label: "Winner Match 78", home_scorers: "null", away_scorers: "null" },
  { id: "92", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/05/2026 18:00", type: "r16", stadium_id: "1", home_team_label: "Winner Match 79", away_team_label: "Winner Match 80", home_scorers: "null", away_scorers: "null" },
  { id: "93", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/06/2026 14:00", type: "r16", stadium_id: "4", home_team_label: "Winner Match 83", away_team_label: "Winner Match 84", home_scorers: "null", away_scorers: "null" },
  { id: "94", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/06/2026 17:00", type: "r16", stadium_id: "14", home_team_label: "Winner Match 81", away_team_label: "Winner Match 82", home_scorers: "null", away_scorers: "null" },
  { id: "95", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/07/2026 12:00", type: "r16", stadium_id: "7", home_team_label: "Winner Match 86", away_team_label: "Winner Match 88", home_scorers: "null", away_scorers: "null" },
  { id: "96", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "R16", matchday: "5", local_date: "07/07/2026 13:00", type: "r16", stadium_id: "13", home_team_label: "Winner Match 85", away_team_label: "Winner Match 87", home_scorers: "null", away_scorers: "null" },
  { id: "97", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "QF", matchday: "6", local_date: "07/09/2026 16:00", type: "qf", stadium_id: "9", home_team_label: "Winner Match 89", away_team_label: "Winner Match 90", home_scorers: "null", away_scorers: "null" },
  { id: "98", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "QF", matchday: "6", local_date: "07/10/2026 12:00", type: "qf", stadium_id: "16", home_team_label: "Winner Match 93", away_team_label: "Winner Match 94", home_scorers: "null", away_scorers: "null" },
  { id: "99", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "QF", matchday: "6", local_date: "07/11/2026 17:00", type: "qf", stadium_id: "8", home_team_label: "Winner Match 91", away_team_label: "Winner Match 92", home_scorers: "null", away_scorers: "null" },
  { id: "100", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "QF", matchday: "6", local_date: "07/11/2026 20:00", type: "qf", stadium_id: "6", home_team_label: "Winner Match 95", away_team_label: "Winner Match 96", home_scorers: "null", away_scorers: "null" },
  { id: "101", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "SF", matchday: "7", local_date: "07/14/2026 14:00", type: "sf", stadium_id: "4", home_team_label: "Winner Match 97", away_team_label: "Winner Match 98", home_scorers: "null", away_scorers: "null" },
  { id: "102", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "SF", matchday: "7", local_date: "07/15/2026 15:00", type: "sf", stadium_id: "7", home_team_label: "Winner Match 99", away_team_label: "Winner Match 100", home_scorers: "null", away_scorers: "null" },
  { id: "103", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "3RD", matchday: "8", local_date: "07/18/2026 17:00", type: "third", stadium_id: "8", home_team_label: "Loser Match 101", away_team_label: "Loser Match 102", home_scorers: "null", away_scorers: "null" },
  { id: "104", home_team_id: "0", away_team_id: "0", home_score: "0", away_score: "0", finished: "FALSE", time_elapsed: "notstarted", group: "FINAL", matchday: "9", local_date: "07/19/2026 15:00", type: "final", stadium_id: "11", home_team_label: "Winner Match 101", away_team_label: "Winner Match 102", home_scorers: "null", away_scorers: "null" }
];


// --- Initialization ---
document.addEventListener("DOMContentLoaded", async () => {
  // Load local state language preference
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["lang"], (result) => {
      if (result.lang) {
        state.lang = result.lang;
        updateLanguageUI();
      }
    });
  } else {
    // LocalStorage fallback for simple browser testing
    const localLang = localStorage.getItem("wc_lang");
    if (localLang) {
      state.lang = localLang;
      updateLanguageUI();
    }
  }

  setupEventListeners();
  await refreshData();

  // Auto-refresh every 2 minutes
  setInterval(() => {
    refreshData();
  }, 120000);
});

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Language button
  document.getElementById("lang-btn").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "tr" : "en";
    
    // Save preference
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lang: state.lang });
    } else {
      localStorage.setItem("wc_lang", state.lang);
    }
    
    updateLanguageUI();
    renderAll();
  });

  // Main Tabs navigation
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      const targetTab = e.target.getAttribute("data-tab");
      state.activeTab = targetTab;
      
      e.target.classList.add("active");
      document.getElementById(`panel-${targetTab}`).classList.add("active");

      renderAll();
    });
  });

  // Subtabs navigation (Fixtures filter)
  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
      state.activeSubtab = e.target.getAttribute("data-subtab");
      e.target.classList.add("active");
      renderFixtures();
    });
  });

  // Dropdown filter (Standings group select)
  document.getElementById("group-select").addEventListener("change", (e) => {
    state.selectedGroup = e.target.value;
    renderStandings();
  });

  // Refresh Button
  document.getElementById("refresh-btn").addEventListener("click", async () => {
    const btn = document.getElementById("refresh-btn");
    btn.style.transform = "rotate(360deg)";
    btn.style.transition = "transform 0.5s ease";
    await refreshData();
    setTimeout(() => {
      btn.style.transform = "none";
      btn.style.transition = "none";
    }, 500);
  });

  // Squad Modal Close Buttons
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("squad-modal").classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("squad-modal");
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Player search input
  document.getElementById("player-search").addEventListener("input", (e) => {
    filterRoster(e.target.value);
  });

  // Match search input (in fixtures)
  const matchSearchInput = document.getElementById("match-search");
  if (matchSearchInput) {
    matchSearchInput.addEventListener("input", (e) => {
      filterMatches(e.target.value);
    });
  }

  // Donate copy buttons
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy");
      const addressEl = document.getElementById(targetId);
      if (addressEl) {
        navigator.clipboard.writeText(addressEl.textContent).then(() => {
          btn.textContent = "✅";
          setTimeout(() => { btn.textContent = "📋"; }, 1500);
        });
      }
    });
  });
}

// --- Fetch Data ---
async function refreshData() {
  updateStatus(translations[state.lang].loading);
  showLoadingSpinners();
  
  try {
    const [gamesRes, groupsRes, teamsRes, stadiumsRes] = await Promise.all([
      fetch("https://worldcup26.ir/get/games").then(r => r.json()).catch(() => null),
      fetch("https://worldcup26.ir/get/groups").then(r => r.json()).catch(() => null),
      fetch("https://worldcup26.ir/get/teams").then(r => r.json()).catch(() => null),
      fetch("https://worldcup26.ir/get/stadiums").then(r => r.json()).catch(() => null)
    ]);

    if (gamesRes && gamesRes.games && gamesRes.games.length > 0) {
      state.games = gamesRes.games;
      state.groups = groupsRes ? groupsRes.groups : fallbackGroups;
      state.teams = teamsRes ? teamsRes.teams : fallbackTeams;
      state.stadiums = stadiumsRes ? stadiumsRes.stadiums : fallbackStadiums;
      updateStatus(translations[state.lang].statusAPI);
    } else {
      loadFallbackData(translations[state.lang].statusOffline);
    }
  } catch (error) {
    console.error("API failed. loading local mock data.", error);
    loadFallbackData(translations[state.lang].statusOffline);
  }

  // Pre-process & render
  mergeFlagsAndNames();
  renderAll();
}

function loadFallbackData(statusMsg) {
  state.games = fallbackGames;
  state.groups = fallbackGroups;
  state.teams = fallbackTeams;
  state.stadiums = fallbackStadiums;
  updateStatus(statusMsg);
}

function updateStatus(text) {
  document.getElementById("status-text").innerText = text;
}

function showLoadingSpinners() {
  const loadingHTML = `
    <div class="loading-card">
      <div class="spinner"></div>
      <span>${translations[state.lang].loading}</span>
    </div>
  `;
  document.getElementById("live-container").innerHTML = loadingHTML;
  document.getElementById("fixtures-container").innerHTML = loadingHTML;
  document.getElementById("standings-container").innerHTML = loadingHTML;
}

// Merges IDs with metadata (Flag URLs, Team Names) so that group stands and matches render fully
function mergeFlagsAndNames() {
  // Map teams for O(1) lookup
  const teamMap = {};
  state.teams.forEach(t => {
    teamMap[t.id] = t;
  });

  // Enrich games
  state.games.forEach(g => {
    if (g.home_team_id && g.home_team_id !== "0") {
      const homeTeam = teamMap[g.home_team_id];
      if (homeTeam) {
        g.home_team_name_en = homeTeam.name_en;
        g.home_team_name_fa = homeTeam.name_fa; // In Arabic/Persian
        g.home_team_flag = homeTeam.flag;
      }
    }
    if (g.away_team_id && g.away_team_id !== "0") {
      const awayTeam = teamMap[g.away_team_id];
      if (awayTeam) {
        g.away_team_name_en = awayTeam.name_en;
        g.away_team_name_fa = awayTeam.name_fa;
        g.away_team_flag = awayTeam.flag;
      }
    }
  });
}

// --- Render Engine ---
function renderAll() {
  switch (state.activeTab) {
    case "live":
      renderLive();
      break;
    case "fixtures":
      renderFixtures();
      break;
    case "standings":
      renderStandings();
      break;
    case "bracket":
      renderBracket();
      break;
  }
}

// Local helper to translate team names
function getTeamName(game, side) {
  const isEn = state.lang === "en";
  if (side === "home") {
    if (game.home_team_label && (!game.home_team_id || game.home_team_id === "0")) {
      return translateLabel(game.home_team_label);
    }
    if (state.lang === "tr") return teamNameTR[game.home_team_name_en] || game.home_team_name_en || "TBD";
    return game.home_team_name_en || "TBD";
  } else {
    if (game.away_team_label && (!game.away_team_id || game.away_team_id === "0")) {
      return translateLabel(game.away_team_label);
    }
    if (state.lang === "tr") return teamNameTR[game.away_team_name_en] || game.away_team_name_en || "TBD";
    return game.away_team_name_en || "TBD";
  }
}

function translateLabel(lbl) {
  if (state.lang === "tr") {
    return lbl
      .replace("Winner Match", "Galip Maç")
      .replace("Loser Match", "Mağlup Maç")
      .replace("Runner-up Group", "Grup İkincisi")
      .replace("Winner Group", "Grup Birincisi")
      .replace("3rd Group", "Grup Üçüncüsü");
  }
  return lbl;
}

// 1. Live Tab
function renderLive() {
  const container = document.getElementById("live-container");
  container.innerHTML = "";

  const activeMatches = state.games.filter(g => g.time_elapsed !== "notstarted" && g.finished !== "TRUE");

  if (activeMatches.length === 0) {
    container.innerHTML = `
      <div class="loading-card" style="padding: 40px 10px;">
        <span style="font-size: 32px;">⚽</span>
        <span style="color: var(--text-secondary); margin-top: 10px;">${translations[state.lang].noLive}</span>
      </div>
    `;
    return;
  }

  activeMatches.forEach(game => {
    const card = document.createElement("div");
    card.className = "match-card";

    const isLive = game.time_elapsed !== "notstarted" && game.finished !== "TRUE";
    const statusText = isLive ? `⏱️ ${game.time_elapsed}'` : (game.finished === "TRUE" ? translations[state.lang].matchFinished : translations[state.lang].matchNotStarted);

    // Build event list (goals, cards)
    let eventsHTML = "";
    if (game.events && game.events.length > 0) {
      eventsHTML = `<div class="match-events">`;
      game.events.forEach(ev => {
        let icon = "⚽";
        if (ev.type === "yellow") icon = `<span class="event-card yellow"></span>`;
        if (ev.type === "red") icon = `<span class="event-card red"></span>`;
        eventsHTML += `
          <div class="event-row">
            <span class="event-icon">${icon}</span>
            <span>${ev.player} (${ev.min}')</span>
          </div>
        `;
      });
      eventsHTML += `</div>`;
    }

    const homeFlag = game.home_team_flag || getFlagFallback(game.home_team_name_en);
    const awayFlag = game.away_team_flag || getFlagFallback(game.away_team_name_en);

    let lineupContainerHTML = "";
    if (game.home_team_id && game.home_team_id !== "0" && game.away_team_id && game.away_team_id !== "0") {
      const lineupBtnText = state.lang === "tr" ? "Kadro Göster" : "Show Lineups";
      lineupContainerHTML = `
        <div class="lineup-toggle-container">
          <button id="lineup-btn-${game.id}" class="lineup-toggle-btn">▼ ${lineupBtnText}</button>
        </div>
        <div id="lineup-drawer-${game.id}" class="lineup-drawer"></div>
      `;
    }

    card.innerHTML = `
      <div class="match-header">
        <span class="group-badge">${translations[state.lang].group} ${game.group || "Knockout"}</span>
        <span class="live-badge">${statusText}</span>
      </div>
      ${game.stadium_id ? `<div class="match-stadium">${getStadiumDisplay(game.stadium_id)}</div>` : ''}
      <div class="match-teams">
        <div class="team-row" data-team-id="${game.home_team_id}" data-team-name="${game.home_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${homeFlag}" alt="">
            <span class="team-name">${getTeamName(game, "home")}</span>
          </div>
          <span class="team-score ${parseInt(game.home_score) > parseInt(game.away_score) ? 'winning' : ''}">${game.home_score}</span>
        </div>
        <div class="team-row" data-team-id="${game.away_team_id}" data-team-name="${game.away_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${awayFlag}" alt="">
            <span class="team-name">${getTeamName(game, "away")}</span>
          </div>
          <span class="team-score ${parseInt(game.away_score) > parseInt(game.home_score) ? 'winning' : ''}">${game.away_score}</span>
        </div>
      </div>
      ${eventsHTML}
      ${renderScorers(game)}
      ${lineupContainerHTML}
    `;

    // Hook click event for team details
    card.querySelectorAll(".team-row").forEach(row => {
      row.addEventListener("click", (e) => {
        const teamId = row.getAttribute("data-team-id");
        const teamName = row.getAttribute("data-team-name");
        if (teamId && teamId !== "0") {
          openSquadModal(teamId, teamName, row.querySelector(".flag-icon").getAttribute("src"));
        }
      });
    });

    // Hook lineup toggle event
    const toggleBtn = card.querySelector(`#lineup-btn-${game.id}`);
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleLineup(game.id, game.home_team_id, game.home_team_name_en, game.away_team_id, game.away_team_name_en);
      });
    }

    container.appendChild(card);
  });
}

// FlagCDN backup generator
function getFlagFallback(name) {
  if (!name) return "https://flagcdn.com/w80/un.png";
  const map = {
    "Turkey": "tr", "Mexico": "mx", "South Africa": "za", "South Korea": "kr", "Czech Republic": "cz",
    "Canada": "ca", "United States": "us", "Haiti": "ht", "Scotland": "gb-sct", "Australia": "au",
    "Brazil": "br", "Morocco": "ma", "Qatar": "qa", "Switzerland": "ch", "Germany": "de",
    "Ivory Coast": "ci", "Ecuador": "ec", "Curaçao": "cw", "Netherlands": "nl", "Japan": "jp",
    "Sweden": "se", "Tunisia": "tn", "Iran": "ir", "New Zealand": "nz", "Spain": "es",
    "Cape Verde": "cv", "Belgium": "be", "Egypt": "eg", "Saudi Arabia": "sa", "Uruguay": "uy",
    "France": "fr", "Senegal": "sn", "Iraq": "iq", "Norway": "no", "Argentina": "ar",
    "Algeria": "dz", "Austria": "at", "Jordan": "jo", "Portugal": "pt", "Croatia": "hr",
    "Ghana": "gh", "Panama": "pa", "Uzbekistan": "uz", "Colombia": "co"
  };
  const code = map[name] || "un";
  return `https://flagcdn.com/w80/${code}.png`;
}

function getStadiumInfo(stadiumId) {
  if (!stadiumId) return null;
  const stadium = state.stadiums.find(s => s.id === stadiumId);
  return stadium || null;
}

function getStadiumDisplay(stadiumId) {
  const stadium = getStadiumInfo(stadiumId);
  if (!stadium) return "";
  return `📍 ${stadium.name_en}, ${stadium.city_en}`;
}

function renderScorers(game) {
  const homeScorers = game.home_scorers && game.home_scorers !== "null" ? game.home_scorers : "";
  const awayScorers = game.away_scorers && game.away_scorers !== "null" ? game.away_scorers : "";
  if (!homeScorers && !awayScorers) return "";
  let html = '<div class="match-scorers">';
  if (homeScorers) html += `<div class="scorer-row"><span class="scorer-team">⚽</span> <span>${homeScorers}</span></div>`;
  if (awayScorers) html += `<div class="scorer-row"><span class="scorer-team">⚽</span> <span>${awayScorers}</span></div>`;
  html += '</div>';
  return html;
}

// 2. Fixtures Tab
function renderFixtures() {
  const container = document.getElementById("fixtures-container");
  container.innerHTML = "";

  let filtered = [...state.games];

  if (state.activeSubtab === "today") {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const yyyy = now.getFullYear();
    const todayStr = `${mm}/${dd}/${yyyy}`;
    filtered = state.games.filter(g => g.local_date && g.local_date.startsWith(todayStr));
  } else if (state.activeSubtab === "knockouts") {
    filtered = state.games.filter(g => ["r32", "r16", "qf", "sf", "third", "final"].includes(g.type));
  }

  if (filtered.length === 0) {
    const emptyMsg = state.lang === "tr" ? "Bugün oynanacak maç bulunmuyor." : "No matches scheduled for today.";
    container.innerHTML = `<div class="loading-card"><span>${emptyMsg}</span></div>`;
    return;
  }

  // Sort by date
  filtered.sort((a,b) => {
    return new Date(a.local_date) - new Date(b.local_date);
  });

  filtered.forEach(game => {
    const card = document.createElement("div");
    card.className = "match-card";

    const isLive = game.time_elapsed !== "notstarted" && game.finished !== "TRUE";
    const statusText = isLive ? `⏱️ ${game.time_elapsed}'` : (game.finished === "TRUE" ? translations[state.lang].matchFinished : translations[state.lang].matchNotStarted);

    const homeFlag = game.home_team_flag || getFlagFallback(game.home_team_name_en);
    const awayFlag = game.away_team_flag || getFlagFallback(game.away_team_name_en);

    let lineupContainerHTML = "";
    if (game.home_team_id && game.home_team_id !== "0" && game.away_team_id && game.away_team_id !== "0") {
      const lineupBtnText = state.lang === "tr" ? "Kadro Göster" : "Show Lineups";
      lineupContainerHTML = `
        <div class="lineup-toggle-container">
          <button id="lineup-btn-${game.id}" class="lineup-toggle-btn">▼ ${lineupBtnText}</button>
        </div>
        <div id="lineup-drawer-${game.id}" class="lineup-drawer"></div>
      `;
    }

    card.innerHTML = `
      <div class="match-header">
        <span class="group-badge">${translations[state.lang].group} ${game.group || "Knockout"}</span>
        <span>${game.local_date} (${statusText})</span>
      </div>
      ${game.stadium_id ? `<div class="match-stadium">${getStadiumDisplay(game.stadium_id)}</div>` : ''}
      <div class="match-teams">
        <div class="team-row" data-team-id="${game.home_team_id}" data-team-name="${game.home_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${homeFlag}" alt="">
            <span class="team-name">${getTeamName(game, "home")}</span>
          </div>
          <span class="team-score">${game.home_score}</span>
        </div>
        <div class="team-row" data-team-id="${game.away_team_id}" data-team-name="${game.away_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${awayFlag}" alt="">
            <span class="team-name">${getTeamName(game, "away")}</span>
          </div>
          <span class="team-score">${game.away_score}</span>
        </div>
      </div>
      ${renderScorers(game)}
      ${lineupContainerHTML}
    `;

    card.querySelectorAll(".team-row").forEach(row => {
      row.addEventListener("click", () => {
        const teamId = row.getAttribute("data-team-id");
        const teamName = row.getAttribute("data-team-name");
        if (teamId && teamId !== "0") {
          openSquadModal(teamId, teamName, row.querySelector(".flag-icon").getAttribute("src"));
        }
      });
    });

    const toggleBtn = card.querySelector(`#lineup-btn-${game.id}`);
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleLineup(game.id, game.home_team_id, game.home_team_name_en, game.away_team_id, game.away_team_name_en);
      });
    }

    container.appendChild(card);
  });
}

// 3. Standings Tab
function renderStandings() {
  const container = document.getElementById("standings-container");
  container.innerHTML = "";

  // Merge teams metadata into groups to calculate details
  const teamMap = {};
  state.teams.forEach(t => { teamMap[t.id] = t; });

  let groupsToRender = state.groups;
  if (state.selectedGroup !== "ALL") {
    groupsToRender = state.groups.filter(g => g.name === state.selectedGroup);
  }

  // Sort groups alphabetically
  groupsToRender.sort((a,b) => a.name.localeCompare(b.name));

  groupsToRender.forEach(grp => {
    const card = document.createElement("div");
    card.className = "group-table-card";

    // Header
    card.innerHTML = `<h3 class="group-table-title">${translations[state.lang].group} ${grp.name}</h3>`;

    const table = document.createElement("table");
    table.className = "standings-table";
    const thGF = state.lang === "tr" ? "AG" : "GF";
    const thGA = state.lang === "tr" ? "YG" : "GA";
    const thGD = state.lang === "tr" ? "AV" : "GD";
    const thPts = state.lang === "tr" ? "P" : "Pts";
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width: 8%" class="table-num">#</th>
          <th style="width: 32%">${translations[state.lang].thPlayer}</th>
          <th style="width: 7%">O</th>
          <th style="width: 7%">G</th>
          <th style="width: 7%">B</th>
          <th style="width: 7%">M</th>
          <th style="width: 7%">${thGF}</th>
          <th style="width: 7%">${thGA}</th>
          <th style="width: 7%">${thGD}</th>
          <th style="width: 8%">${thPts}</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    const teamsInGroup = grp.teams.map(t => {
      const metadata = teamMap[t.team_id] || {};

      return {
        id: t.team_id,
        name_en: metadata.name_en || `Team ${t.team_id}`,
        name_fa: metadata.name_fa || `Team ${t.team_id}`,
        flag: metadata.flag || getFlagFallback(metadata.name_en),
        mp: parseInt(t.mp || 0),
        w: parseInt(t.w || 0),
        d: parseInt(t.d || 0),
        l: parseInt(t.l || 0),
        gf: parseInt(t.gf || 0),
        ga: parseInt(t.ga || 0),
        gd: parseInt(t.gd || 0),
        pts: parseInt(t.pts || 0)
      };
    });

    // Sort by points desc
    teamsInGroup.sort((a,b) => b.pts - a.pts || b.gd - a.gd);

    teamsInGroup.forEach((team, idx) => {
      const tr = document.createElement("tr");
      
      const teamNameText = state.lang === "tr" ? (teamNameTR[team.name_en] || team.name_en) : team.name_en;

      tr.innerHTML = `
        <td class="table-num">${idx + 1}</td>
        <td>
          <div class="table-team">
            <img class="flag-icon" src="${team.flag}" alt="">
            <span>${teamNameText}</span>
          </div>
        </td>
        <td>${team.mp}</td>
        <td>${team.w}</td>
        <td>${team.d}</td>
        <td>${team.l}</td>
        <td>${team.gf}</td>
        <td>${team.ga}</td>
        <td>${team.gd > 0 ? '+' : ''}${team.gd}</td>
        <td style="font-weight: 700; color: var(--gold);">${team.pts}</td>
      `;

      tr.addEventListener("click", () => {
        openSquadModal(team.id, team.name_en, team.flag);
      });

      tbody.appendChild(tr);
    });

    card.appendChild(table);
    container.appendChild(card);
  });
}

// 4. Bracket Tab (Knockouts: 16 -> 8 -> 4 -> 2)
function renderBracket() {
  const container = document.getElementById("bracket-container");
  container.innerHTML = "";

  // We filter knockout matches
  const r32Games = state.games.filter(g => g.type === "r32");
  const r16Games = state.games.filter(g => g.type === "r16");
  const qfGames = state.games.filter(g => g.type === "qf");
  const sfGames = state.games.filter(g => g.type === "sf");
  const thirdGames = state.games.filter(g => g.type === "third");
  const finalGames = state.games.filter(g => g.type === "final");

  // Create columns
  const cols = [
    { title: translations[state.lang].r32 || "R32", games: r32Games },
    { title: translations[state.lang].r16, games: r16Games },
    { title: translations[state.lang].qf, games: qfGames },
    { title: translations[state.lang].sf, games: sfGames },
    { title: translations[state.lang].third || "3rd Place", games: thirdGames },
    { title: translations[state.lang].final, games: finalGames }
  ];

  cols.forEach(col => {
    const colDiv = document.createElement("div");
    colDiv.className = "bracket-column";
    
    colDiv.innerHTML = `<div class="bracket-column-title">${col.title}</div>`;

    col.games.forEach(game => {
      const matchDiv = document.createElement("div");
      matchDiv.className = "bracket-match";

      const homeFlag = game.home_team_flag || getFlagFallback(game.home_team_name_en);
      const awayFlag = game.away_team_flag || getFlagFallback(game.away_team_name_en);

      const homeScore = game.home_score !== "null" ? game.home_score : "0";
      const awayScore = game.away_score !== "null" ? game.away_score : "0";

      const isHomeWinner = parseInt(homeScore) > parseInt(awayScore) && game.finished === "TRUE";
      const isAwayWinner = parseInt(awayScore) > parseInt(homeScore) && game.finished === "TRUE";

      matchDiv.innerHTML = `
        <div class="bracket-team ${isHomeWinner ? 'winner' : ''}" data-team-id="${game.home_team_id}" data-team-name="${game.home_team_name_en}">
          <div class="bracket-team-name">
            ${game.home_team_id && game.home_team_id !== "0" ? `<img class="flag-icon" src="${homeFlag}">` : '🏳️'}
            <span>${getTeamName(game, "home")}</span>
          </div>
          <span class="bracket-team-score">${homeScore}</span>
        </div>
        <div class="bracket-team ${isAwayWinner ? 'winner' : ''}" data-team-id="${game.away_team_id}" data-team-name="${game.away_team_name_en}">
          <div class="bracket-team-name">
            ${game.away_team_id && game.away_team_id !== "0" ? `<img class="flag-icon" src="${awayFlag}">` : '🏳️'}
            <span>${getTeamName(game, "away")}</span>
          </div>
          <span class="bracket-team-score">${awayScore}</span>
        </div>
      `;

      matchDiv.querySelectorAll(".bracket-team").forEach(row => {
        row.addEventListener("click", (e) => {
          const teamId = row.getAttribute("data-team-id");
          const teamName = row.getAttribute("data-team-name");
          const img = row.querySelector(".flag-icon");
          if (teamId && teamId !== "0") {
            openSquadModal(teamId, teamName, img ? img.getAttribute("src") : "");
          }
        });
      });

      colDiv.appendChild(matchDiv);
    });

    container.appendChild(colDiv);
  });
}


// --- Squad Detail View & Search Engine ---

let activeRoster = [];

function openSquadModal(teamId, teamName, flagUrl) {
  state.modalTeamId = teamId;
  const modal = document.getElementById("squad-modal");
  
  const displayTeamName = teamName === "Turkey" && state.lang === "tr" ? "Türkiye" : teamName;
  document.getElementById("modal-team-name").innerText = displayTeamName;
  document.getElementById("modal-team-flag").setAttribute("src", flagUrl || getFlagFallback(teamName));
  document.getElementById("player-search").value = "";

  activeRoster = getFullSquad(teamId, teamName);

  if (activeRoster.length === 0) {
    const noDataMsg = state.lang === "tr" ? "Bu takım için kadro verisi mevcut değil." : "Squad data is not available for this team.";
    document.getElementById("squad-list-body").innerHTML = `
      <tr><td colspan="3" style="text-align:center; padding:20px; color:var(--text-secondary);">📋 ${noDataMsg}</td></tr>
    `;
  } else {
    renderRoster(activeRoster);
  }

  modal.classList.add("active");
}

function getFullSquad(teamId, teamName) {
  return squadDB[teamId] ? [...squadDB[teamId]] : [];
}

function getStartingXI(squad) {
  const starts = [];
  const gks = squad.filter(p => p.pos === "GK");
  const defs = squad.filter(p => p.pos === "DEF");
  const mids = squad.filter(p => p.pos === "MID");
  const fwds = squad.filter(p => p.pos === "FWD");
  
  if (gks[0]) starts.push(gks[0]);
  for (let i = 0; i < 4; i++) { if (defs[i]) starts.push(defs[i]); }
  for (let i = 0; i < 3; i++) { if (mids[i]) starts.push(mids[i]); }
  for (let i = 0; i < 3; i++) { if (fwds[i]) starts.push(fwds[i]); }
  
  return starts;
}

function getSubs(squad, starts) {
  const startIds = new Set(starts.map(p => p.num));
  return squad.filter(p => !startIds.has(p.num));
}

function toggleLineup(matchId, homeId, homeName, awayId, awayName) {
  const drawer = document.getElementById(`lineup-drawer-${matchId}`);
  const btn = document.getElementById(`lineup-btn-${matchId}`);
  
  if (!drawer || !btn) return;
  
  const isExpanded = drawer.classList.toggle("expanded");
  
  const showText = state.lang === "tr" ? "Kadro Göster" : "Show Lineups";
  const hideText = state.lang === "tr" ? "Kadro Gizle" : "Hide Lineups";
  btn.innerHTML = `${isExpanded ? "▲" : "▼"} ${isExpanded ? hideText : showText}`;
  
  if (isExpanded && drawer.innerHTML === "") {
    const homeSquad = getFullSquad(homeId, homeName);
    const awaySquad = getFullSquad(awayId, awayName);

    const noDataMsg = state.lang === "tr" ? "Kadro verisi mevcut değil" : "Squad data not available";
    const startingTitle = state.lang === "tr" ? "İlk 11 (Starting XI)" : "Starting XI";
    const subsTitle = state.lang === "tr" ? "Yedekler (Substitutes)" : "Substitutes";

    function buildLineupHTML(squad) {
      if (squad.length === 0) {
        return `<div class="lineup-player"><span class="name" style="color:var(--text-secondary);">📋 ${noDataMsg}</span></div>`;
      }
      const starts = getStartingXI(squad);
      const subs = getSubs(squad, starts);
      let html = `<div class="lineup-title">${startingTitle}</div>`;
      starts.forEach(p => {
        const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(p.name)}`;
        html += `
          <div class="lineup-player">
            <span class="num">${p.num}</span>
            <span class="pos-badge">${p.pos}</span>
            <img class="lineup-player-avatar" src="${avatarUrl}" alt="">
            <span class="name">${p.name}</span>
          </div>`;
      });
      if (subs.length > 0) {
        html += `<div class="subs-title">${subsTitle}</div>`;
        subs.forEach(p => {
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(p.name)}`;
          html += `
            <div class="lineup-player">
              <span class="num">${p.num}</span>
              <span class="pos-badge">${p.pos}</span>
              <img class="lineup-player-avatar" src="${avatarUrl}" alt="">
              <span class="name">${p.name}</span>
            </div>`;
        });
      }
      return html;
    }

    drawer.innerHTML = `
      <div class="lineup-columns">
        <div class="lineup-col home">
          ${buildLineupHTML(homeSquad)}
        </div>
        <div class="lineup-col away">
          ${buildLineupHTML(awaySquad)}
        </div>
      </div>
    `;
  }
}

function renderRoster(roster) {
  const tbody = document.getElementById("squad-list-body");
  tbody.innerHTML = "";

  const posLabels = {
    GK: state.lang === "tr" ? "Kaleciler (Goalkeepers)" : "Goalkeepers",
    DEF: state.lang === "tr" ? "Defans Oyuncuları (Defenders)" : "Defenders",
    MID: state.lang === "tr" ? "Orta Saha Oyuncuları (Midfielders)" : "Midfielders",
    FWD: state.lang === "tr" ? "Forvet Oyuncuları (Forwards)" : "Forwards"
  };

  let currentPos = null;

  roster.forEach(player => {
    if (player.pos !== currentPos) {
      currentPos = player.pos;
      const headerTr = document.createElement("tr");
      headerTr.className = "roster-position-header";
      headerTr.innerHTML = `
        <td colspan="3" style="background: rgba(212, 175, 55, 0.15); color: var(--gold); font-weight: 700; padding: 6px 8px; font-size: 11px; text-transform: uppercase; border-bottom: 1px solid var(--border-gold);">
          ${posLabels[currentPos]}
        </td>
      `;
      tbody.appendChild(headerTr);
    }

    const tr = document.createElement("tr");

    let posLabel = player.pos;
    if (state.lang === "tr") {
      if (player.pos === "GK") posLabel = translations.tr.posGK;
      if (player.pos === "DEF") posLabel = translations.tr.posDEF;
      if (player.pos === "MID") posLabel = translations.tr.posMID;
      if (player.pos === "FWD") posLabel = translations.tr.posFWD;
    } else {
      if (player.pos === "GK") posLabel = translations.en.posGK;
      if (player.pos === "DEF") posLabel = translations.en.posDEF;
      if (player.pos === "MID") posLabel = translations.en.posMID;
      if (player.pos === "FWD") posLabel = translations.en.posFWD;
    }

    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(player.name)}`;
    tr.innerHTML = `
      <td class="player-num">#${player.num}</td>
      <td style="font-weight: 600;">
        <div class="player-name-cell">
          <img class="player-avatar" src="${avatarUrl}" alt="">
          <span>${player.name}</span>
        </div>
      </td>
      <td><span class="player-pos">${posLabel}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function filterRoster(query) {
  if (activeRoster.length === 0) return;
  const q = query.toLowerCase().trim();
  const filtered = activeRoster.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.pos.toLowerCase().includes(q) || 
    p.num.toString().includes(q)
  );
  renderRoster(filtered);
}

function filterMatches(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    renderFixtures();
    return;
  }
  const container = document.getElementById("fixtures-container");
  container.innerHTML = "";
  const filtered = state.games.filter(g => {
    const homeName = (g.home_team_name_en || "").toLowerCase();
    const awayName = (g.away_team_name_en || "").toLowerCase();
    return homeName.includes(q) || awayName.includes(q);
  });
  if (filtered.length === 0) {
    const noMatch = state.lang === "tr" ? "Eşleşme bulunamadı." : "No matches found.";
    container.innerHTML = `<div class="loading-card"><span>${noMatch}</span></div>`;
    return;
  }
  filtered.forEach(game => {
    const card = document.createElement("div");
    card.className = "match-card";

    const isLive = game.time_elapsed !== "notstarted" && game.finished !== "TRUE";
    const statusText = isLive ? `⏱️ ${game.time_elapsed}'` : (game.finished === "TRUE" ? translations[state.lang].matchFinished : translations[state.lang].matchNotStarted);

    const homeFlag = game.home_team_flag || getFlagFallback(game.home_team_name_en);
    const awayFlag = game.away_team_flag || getFlagFallback(game.away_team_name_en);

    let lineupContainerHTML = "";
    if (game.home_team_id && game.home_team_id !== "0" && game.away_team_id && game.away_team_id !== "0") {
      const lineupBtnText = state.lang === "tr" ? "Kadro Göster" : "Show Lineups";
      lineupContainerHTML = `
        <div class="lineup-toggle-container">
          <button id="lineup-btn-${game.id}" class="lineup-toggle-btn">▼ ${lineupBtnText}</button>
        </div>
        <div id="lineup-drawer-${game.id}" class="lineup-drawer"></div>
      `;
    }

    card.innerHTML = `
      <div class="match-header">
        <span class="group-badge">${translations[state.lang].group} ${game.group || "Knockout"}</span>
        <span>${game.local_date} (${statusText})</span>
      </div>
      ${game.stadium_id ? `<div class="match-stadium">${getStadiumDisplay(game.stadium_id)}</div>` : ''}
      <div class="match-teams">
        <div class="team-row" data-team-id="${game.home_team_id}" data-team-name="${game.home_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${homeFlag}" alt="">
            <span class="team-name">${getTeamName(game, "home")}</span>
          </div>
          <span class="team-score">${game.home_score}</span>
        </div>
        <div class="team-row" data-team-id="${game.away_team_id}" data-team-name="${game.away_team_name_en}">
          <div class="team-info">
            <img class="flag-icon" src="${awayFlag}" alt="">
            <span class="team-name">${getTeamName(game, "away")}</span>
          </div>
          <span class="team-score">${game.away_score}</span>
        </div>
      </div>
      ${renderScorers(game)}
      ${lineupContainerHTML}
    `;

    card.querySelectorAll(".team-row").forEach(row => {
      row.addEventListener("click", () => {
        const teamId = row.getAttribute("data-team-id");
        const teamName = row.getAttribute("data-team-name");
        if (teamId && teamId !== "0") {
          openSquadModal(teamId, teamName, row.querySelector(".flag-icon").getAttribute("src"));
        }
      });
    });

    const toggleBtn = card.querySelector(`#lineup-btn-${game.id}`);
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleLineup(game.id, game.home_team_id, game.home_team_name_en, game.away_team_id, game.away_team_name_en);
      });
    }

    container.appendChild(card);
  });
}


// --- Localization Update ---
function updateLanguageUI() {
  const dict = translations[state.lang];
  
  // Header
  document.getElementById("header-title").innerText = dict.title;
  document.getElementById("lang-btn").innerText = state.lang === "en" ? "TR" : "EN";
  
  // Tabs
  document.getElementById("tab-live").innerText = dict.live;
  document.getElementById("tab-fixtures").innerText = dict.fixtures;
  document.getElementById("tab-standings").innerText = dict.standings;
  document.getElementById("tab-bracket").innerText = dict.bracket;
  document.getElementById("tab-donate").innerText = dict.donate;

  // Donate panel
  const donateTitle = document.querySelector(".donate-header h3");
  if (donateTitle) donateTitle.innerText = dict.donate_title;
  const donateSub = document.querySelector(".donate-subtitle");
  if (donateSub) donateSub.innerText = dict.donate_subtitle;

  // Subtabs
  document.getElementById("subtab-bydate").innerText = dict.byDate;
  document.getElementById("subtab-today").innerText = dict.today;
  document.getElementById("subtab-knockouts").innerText = dict.knockouts;

  // Standings Dropdown options
  document.getElementById("opt-all-groups").innerText = dict.allGroups;
  
  // Modal Roster Header labels
  document.getElementById("player-search").setAttribute("placeholder", dict.searchPlaceholder);
  document.getElementById("th-num").innerText = dict.thNum;
  document.getElementById("th-player").innerText = dict.thPlayer;
  document.getElementById("th-pos").innerText = dict.thPos;

  // Update Status Text based on mode
  if (state.games.length > 0) {
    updateStatus(state.games === fallbackGames ? dict.statusOffline : dict.statusAPI);
  }
}
