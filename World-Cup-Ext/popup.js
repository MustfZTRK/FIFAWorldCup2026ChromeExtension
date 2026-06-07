// --- Constants & Database ---

const supportedLangs = ["en","tr","es","pt","fr","de","ar","ru","it","nl","ko","ja","fa","hi","id","pl"];

const langLabels = {
  en: "English", tr: "Türkçe", es: "Español", pt: "Português",
  fr: "Français", de: "Deutsch", ar: "العربية", ru: "Русский",
  it: "Italiano", nl: "Nederlands", ko: "한국어", ja: "日本語",
  fa: "فارسی", hi: "हिन्दी", id: "Bahasa Indonesia", pl: "Polski"
};

const langFlags = {
  en: "🇬🇧", tr: "🇹🇷", es: "🇪🇸", pt: "🇧🇷",
  fr: "🇫🇷", de: "🇩🇪", ar: "🇸🇦", ru: "🇷🇺",
  it: "🇮🇹", nl: "🇳🇱", ko: "🇰🇷", ja: "🇯🇵",
  fa: "🇮🇷", hi: "🇮🇳", id: "🇮🇩", pl: "🇵🇱"
};

const translations = {
  en: {
    title: "World Cup 2026", live: "Live", fixtures: "Fixtures", standings: "Standings", bracket: "Brackets",
    simOn: "Stop Sim", simOff: "Simulate", today: "Today", byDate: "By Date", knockouts: "Knockouts",
    allGroups: "All Groups", loading: "Loading data...", noLive: "No live matches right now.",
    searchPlaceholder: "Search players...", thNum: "#", thPlayer: "Player", thPos: "Position",
    statusLive: "Live Simulation Active", statusAPI: "Connected to API",
    statusOffline: "Offline Mode (Local Data)", simTooltip: "Toggle Live Simulation Mode",
    elapsed: "Min", cards: "Cards", matchNotStarted: "Not Started", matchFinished: "Finished",
    r16: "Round of 16", r32: "Round of 32", qf: "Quarter-finals", sf: "Semi-finals",
    third: "3rd Place", final: "Final", group: "Group",
    posGK: "Goalkeeper", posDEF: "Defender", posMID: "Midfielder", posFWD: "Forward",
    standingMP: "MP", standingW: "W", standingD: "D", standingL: "L",
    standingGF: "GF", standingGA: "GA", standingGD: "GD", standingPts: "Pts",
    lineupShow: "Show Lineups", lineupHide: "Hide Lineups",
    noSquadData: "Squad data is not available for this team.",
    noSquadDataShort: "Squad data not available",
    startingXI: "Starting XI", substitutes: "Substitutes",
    goalkeepers: "Goalkeepers", defenders: "Defenders", midfielders: "Midfielders", forwards: "Forwards",
    noMatchFound: "No matches found.", noMatchesToday: "No matches scheduled for today.",
    donate: "Donate", donate_title: "Buy Me a Coffee",
    donate_subtitle: "If you find this extension useful, consider supporting development!", copied: "Copied!",
    labelWinner: "Winner Match", labelLoser: "Loser Match", labelRunnerUp: "Runner-up Group", labelWinnerGroup: "Winner Group", labelThirdGroup: "3rd Group"
  },
  tr: {
    title: "Dünya Kupası 2026", live: "Canlı", fixtures: "Fikstür", standings: "Puan Durumu", bracket: "Eşleşmeler",
    simOn: "Durdur", simOff: "Simüle Et", today: "Bugün", byDate: "Tarihe Göre", knockouts: "Eleme Turu",
    allGroups: "Tüm Gruplar", loading: "Veriler Yükleniyor...", noLive: "Şu anda oynanan canlı maç bulunmuyor.",
    searchPlaceholder: "Oyuncu ara...", thNum: "#", thPlayer: "Oyuncu", thPos: "Pozisyon",
    statusLive: "Canlı Simülasyon Aktif", statusAPI: "Veriler API'den alındı",
    statusOffline: "Çevrimdışı Mod (Yerel Veri)", simTooltip: "Canlı Maç Simülasyonunu Aç/Kapat",
    elapsed: "Dk", cards: "Kartlar", matchNotStarted: "Başlamadı", matchFinished: "Bitti",
    r16: "Son 16", r32: "Son 32", qf: "Çeyrek Final", sf: "Yarı Final",
    third: "Üçüncülük", final: "Final", group: "Grup",
    posGK: "Kaleci", posDEF: "Defans", posMID: "Orta Saha", posFWD: "Forvet",
    standingMP: "O", standingW: "G", standingD: "B", standingL: "M",
    standingGF: "AG", standingGA: "YG", standingGD: "AV", standingPts: "P",
    lineupShow: "Kadro Göster", lineupHide: "Kadro Gizle",
    noSquadData: "Bu takım için kadro verisi mevcut değil.",
    noSquadDataShort: "Kadro verisi mevcut değil",
    startingXI: "İlk 11", substitutes: "Yedekler",
    goalkeepers: "Kaleciler", defenders: "Defans Oyuncuları", midfielders: "Orta Saha Oyuncuları", forwards: "Forvet Oyuncuları",
    noMatchFound: "Eşleşme bulunamadı.", noMatchesToday: "Bugün oynanacak maç bulunmuyor.",
    donate: "Bağış", donate_title: "Bana Bir Kahve Ismarla",
    donate_subtitle: "Bu eklentiyi faydalı buluyorsanız, geliştirmeyi desteklemeyi düşünün!", copied: "Kopyalandı!",
    labelWinner: "Galip Maç", labelLoser: "Mağlup Maç", labelRunnerUp: "Grup İkincisi", labelWinnerGroup: "Grup Birincisi", labelThirdGroup: "Grup Üçüncüsü"
  },
  es: {
    title: "Copa Mundial 2026", live: "En Vivo", fixtures: "Fixture", standings: "Clasificación", bracket: "Llave",
    simOn: "Detener Sim", simOff: "Simular", today: "Hoy", byDate: "Por Fecha", knockouts: "Eliminación",
    allGroups: "Todos los Grupos", loading: "Cargando datos...", noLive: "No hay partidos en vivo ahora.",
    searchPlaceholder: "Buscar jugadores...", thNum: "#", thPlayer: "Jugador", thPos: "Posición",
    statusLive: "Simulación en Vivo", statusAPI: "Conectado a la API",
    statusOffline: "Modo Sin Conexión (Datos Locales)", simTooltip: "Alternar Simulación en Vivo",
    elapsed: "Min", cards: "Tarjetas", matchNotStarted: "No Iniciado", matchFinished: "Finalizado",
    r16: "Octavos de Final", r32: "Treintaydosavos", qf: "Cuartos de Final", sf: "Semifinales",
    third: "Tercer Puesto", final: "Final", group: "Grupo",
    posGK: "Portero", posDEF: "Defensa", posMID: "Mediocampista", posFWD: "Delantero",
    standingMP: "PJ", standingW: "G", standingD: "E", standingL: "P",
    standingGF: "GF", standingGA: "GC", standingGD: "DG", standingPts: "Pts",
    lineupShow: "Alineación", lineupHide: "Ocultar Alineación",
    noSquadData: "No hay datos de plantilla para este equipo.",
    noSquadDataShort: "Sin datos de plantilla",
    startingXI: "Titulares", substitutes: "Suplentes",
    goalkeepers: "Porteros", defenders: "Defensas", midfielders: "Mediocampistas", forwards: "Delanteros",
    noMatchFound: "No se encontraron partidos.", noMatchesToday: "No hay partidos programados para hoy.",
    donate: "Donar", donate_title: "Invítame a un Café",
    donate_subtitle: "Si esta extensión te es útil, considera apoyar el desarrollo.", copied: "¡Copiado!",
    labelWinner: "Ganador del Partido", labelLoser: "Perdedor del Partido", labelRunnerUp: "Subcampeón del Grupo", labelWinnerGroup: "Campeón del Grupo", labelThirdGroup: "3er Puesto del Grupo"
  },
  pt: {
    title: "Copa do Mundo 2026", live: "Ao Vivo", fixtures: "Jogos", standings: "Classificação", bracket: "Chaveamento",
    simOn: "Parar Sim", simOff: "Simular", today: "Hoje", byDate: "Por Data", knockouts: "Eliminatória",
    allGroups: "Todos os Grupos", loading: "Carregando dados...", noLive: "Nenhum jogo ao vivo agora.",
    searchPlaceholder: "Buscar jogadores...", thNum: "#", thPlayer: "Jogador", thPos: "Posição",
    statusLive: "Simulação Ao Vivo", statusAPI: "Conectado à API",
    statusOffline: "Modo Offline (Dados Locais)", simTooltip: "Alternar Simulação Ao Vivo",
    elapsed: "Min", cards: "Cartões", matchNotStarted: "Não Iniciado", matchFinished: "Finalizado",
    r16: "Oitavas de Final", r32: "Trinta-e-dois avos", qf: "Quartas de Final", sf: "Semifinais",
    third: "Terceiro Lugar", final: "Final", group: "Grupo",
    posGK: "Goleiro", posDEF: "Zagueiro", posMID: "Meio-campista", posFWD: "Atacante",
    standingMP: "J", standingW: "V", standingD: "E", standingL: "D",
    standingGF: "GP", standingGA: "GC", standingGD: "SG", standingPts: "Pts",
    lineupShow: "Escalação", lineupHide: "Ocultar Escalação",
    noSquadData: "Dados do elenco não disponíveis para esta equipe.",
    noSquadDataShort: "Sem dados do elenco",
    startingXI: "Titulares", substitutes: "Reservas",
    goalkeepers: "Goleiros", defenders: "Zagueiros", midfielders: "Meio-campistas", forwards: "Atacantes",
    noMatchFound: "Nenhum jogo encontrado.", noMatchesToday: "Nenhum jogo programado para hoje.",
    donate: "Doar", donate_title: "Me Pague um Café",
    donate_subtitle: "Se esta extensão é útil para você, considere apoiar o desenvolvimento!", copied: "Copiado!",
    labelWinner: "Vencedor da Partida", labelLoser: "Perdedor da Partida", labelRunnerUp: "Vice do Grupo", labelWinnerGroup: "Campeão do Grupo", labelThirdGroup: "3º do Grupo"
  },
  fr: {
    title: "Coupe du Monde 2026", live: "En Direct", fixtures: "Calendrier", standings: "Classement", bracket: "Tableau",
    simOn: "Arrêter Sim", simOff: "Simuler", today: "Aujourd'hui", byDate: "Par Date", knockouts: "Élimination",
    allGroups: "Tous les Groupes", loading: "Chargement...", noLive: "Aucun match en direct pour le moment.",
    searchPlaceholder: "Rechercher joueurs...", thNum: "#", thPlayer: "Joueur", thPos: "Poste",
    statusLive: "Simulation En Direct", statusAPI: "Connecté à l'API",
    statusOffline: "Mode Hors Ligne (Données Locales)", simTooltip: "Basculer la Simulation En Direct",
    elapsed: "Min", cards: "Cartons", matchNotStarted: "Pas Commencé", matchFinished: "Terminé",
    r16: "Huitièmes de Finale", r32: "Trente-deuxièmes", qf: "Quarts de Finale", sf: "Demi-finales",
    third: "Troisième Place", final: "Finale", group: "Groupe",
    posGK: "Gardien", posDEF: "Défenseur", posMID: "Milieu", posFWD: "Attaquant",
    standingMP: "J", standingW: "G", standingD: "N", standingL: "P",
    standingGF: "BP", standingGA: "BC", standingGD: "DIFF", standingPts: "Pts",
    lineupShow: "Composition", lineupHide: "Masquer Composition",
    noSquadData: "Données d'effectif non disponibles pour cette équipe.",
    noSquadDataShort: "Pas de données d'effectif",
    startingXI: "Titulaires", substitutes: "Remplaçants",
    goalkeepers: "Gardiens", defenders: "Défenseurs", midfielders: "Milieux", forwards: "Attaquants",
    noMatchFound: "Aucun match trouvé.", noMatchesToday: "Aucun match prévu aujourd'hui.",
    donate: "Donner", donate_title: "Offrez-moi un Café",
    donate_subtitle: "Si cette extension vous est utile, envisagez de soutenir le développement !", copied: "Copié !",
    labelWinner: "Vainqueur du Match", labelLoser: "Perdant du Match", labelRunnerUp: "Deuxième du Groupe", labelWinnerGroup: "Premier du Groupe", labelThirdGroup: "3ème du Groupe"
  },
  de: {
    title: "Fußball-Weltmeisterschaft 2026", live: "Live", fixtures: "Spielplan", standings: "Tabelle", bracket: "Turnierbaum",
    simOn: "Sim Stoppen", simOff: "Simulieren", today: "Heute", byDate: "Nach Datum", knockouts: "K.o.-Runde",
    allGroups: "Alle Gruppen", loading: "Lade Daten...", noLive: "Gerade keine Live-Spiele.",
    searchPlaceholder: "Spieler suchen...", thNum: "#", thPlayer: "Spieler", thPos: "Position",
    statusLive: "Live-Simulation Aktiv", statusAPI: "Mit API verbunden",
    statusOffline: "Offline-Modus (Lokale Daten)", simTooltip: "Live-Simulation Ein-/Ausschalten",
    elapsed: "Min", cards: "Karten", matchNotStarted: "Noch nicht begonnen", matchFinished: "Beendet",
    r16: "Achtelfinale", r32: "Zweiunddreißigstelfinale", qf: "Viertelfinale", sf: "Halbfinale",
    third: "Spiel um Platz 3", final: "Finale", group: "Gruppe",
    posGK: "Torwart", posDEF: "Abwehrspieler", posMID: "Mittelfeldspieler", posFWD: "Stürmer",
    standingMP: "Sp", standingW: "S", standingD: "U", standingL: "N",
    standingGF: "T", standingGA: "GT", standingGD: "TD", standingPts: "Pkt",
    lineupShow: "Aufstellung", lineupHide: "Aufstellung Ausblenden",
    noSquadData: "Kaderdaten für dieses Team nicht verfügbar.",
    noSquadDataShort: "Keine Kaderdaten",
    startingXI: "Startelf", substitutes: "Ersatzbank",
    goalkeepers: "Torhüter", defenders: "Abwehrspieler", midfielders: "Mittelfeldspieler", forwards: "Stürmer",
    noMatchFound: "Keine Spiele gefunden.", noMatchesToday: "Heute sind keine Spiele geplant.",
    donate: "Spenden", donate_title: "Laden Sie mich auf einen Kaffee ein",
    donate_subtitle: "Wenn Ihnen diese Erweiterung nützlich ist, unterstützen Sie gerne die Entwicklung!", copied: "Kopiert!",
    labelWinner: "Spielsieger", labelLoser: "Spielverlierer", labelRunnerUp: "Zweiter der Gruppe", labelWinnerGroup: "Gruppensieger", labelThirdGroup: "3. der Gruppe"
  },
  ar: {
    title: "كأس العالم 2026", live: "مباشر", fixtures: "المباريات", standings: "الترتيب", bracket: "الجدول",
    simOn: "إيقاف المحاكاة", simOff: "محاكاة", today: "اليوم", byDate: "حسب التاريخ", knockouts: "الإقصاء",
    allGroups: "جميع المجموعات", loading: "جارٍ التحميل...", noLive: "لا توجد مباريات مباشرة الآن.",
    searchPlaceholder: "بحث عن لاعبين...", thNum: "#", thPlayer: "اللاعب", thPos: "المركز",
    statusLive: "محاكاة مباشرة", statusAPI: "متصل بالـ API",
    statusOffline: "وضع عدم الاتصال (بيانات محلية)", simTooltip: "تبديل المحاكاة المباشرة",
    elapsed: "د", cards: "بطاقات", matchNotStarted: "لم تبدأ", matchFinished: "انتهت",
    r16: "دور الـ 16", r32: "دور الـ 32", qf: "ربع النهائي", sf: "نصف النهائي",
    third: "المركز الثالث", final: "النهائي", group: "المجموعة",
    posGK: "حارس المرمى", posDEF: "مدافع", posMID: "لاعب وسط", posFWD: "مهاجم",
    standingMP: "م", standingW: "ف", standingD: "ت", standingL: "خ",
    standingGF: "له", standingGA: "عليه", standingGD: "الفرق", standingPts: "نقاط",
    lineupShow: "عرض التشكيلة", lineupHide: "إخفاء التشكيلة",
    noSquadData: "بيانات القائمة غير متاحة لهذه الفريق.",
    noSquadDataShort: "بيانات القائمة غير متاحة",
    startingXI: "الtitulaires", substitutes: "البدلاء",
    goalkeepers: "حراس المرمى", defenders: "المدافعين", midfielders: "لاعبو الوسط", forwards: "المهاجمون",
    noMatchFound: "لم يتم العثور على مباريات.", noMatchesToday: "لا توجد مباريات مقررة اليوم.",
    donate: "تبرع", donate_title: "ادعوني لقهوة",
    donate_subtitle: "إذا كانت هذه الإضافة مفيدة لك، فكر في دعم التطوير!", copied: "تم النسخ!",
    labelWinner: "فائز المباراة", labelLoser: "خاسر المباراة", labelRunnerUp: "وصيف المجموعة", labelWinnerGroup: "بطل المجموعة", labelThirdGroup: "ثالث المجموعة"
  },
  ru: {
    title: "Чемпионат Мира 2026", live: "Прямая Трансляция", fixtures: "Расписание", standings: "Турнирная Таблица", bracket: "Сетка",
    simOn: "Стоп Симуляция", simOff: "Симуляция", today: "Сегодня", byDate: "По Дате", knockouts: "Плей-офф",
    allGroups: "Все Группы", loading: "Загрузка данных...", noLive: "Сейчас нет canlı матчей.",
    searchPlaceholder: "Поиск игроков...", thNum: "#", thPlayer: "Игрок", thPos: "Позиция",
    statusLive: "Прямая Симуляция", statusAPI: "Подключено к API",
    statusOffline: "Автономный Режим (Локальные Данные)", simTooltip: "Включить/Выключить Симуляцию",
    elapsed: "Мин", cards: "Карточки", matchNotStarted: "Не Начат", matchFinished: "Завершён",
    r16: "1/8 Финала", r32: "1/16 Финала", qf: "1/4 Финала", sf: "Полуфинал",
    third: "Матч за 3-е Место", final: "Финал", group: "Группа",
    posGK: "Вратарь", posDEF: "Защитник", posMID: "Полузащитник", posFWD: "Нападающий",
    standingMP: "И", standingW: "В", standingD: "Н", standingL: "П",
    standingGF: "Заб", standingGA: "Проп", standingGD: "Разн", standingPts: "Очк",
    lineupShow: "Показать Состав", lineupHide: "Скрыть Состав",
    noSquadData: "Данные состава недоступны для этой команды.",
    noSquadDataShort: "Данные состава недоступны",
    startingXI: "Основной Состав", substitutes: "Запасные",
    goalkeepers: "Вратари", defenders: "Защитники", midfielders: "Полузащитники", forwards: "Нападающие",
    noMatchFound: "Матчи не найдены.", noMatchesToday: "На сегодня матчи не запланированы.",
    donate: "Пожертвовать", donate_title: "Угостите меня Кофе",
    donate_subtitle: "Если это расширение полезно вам, поддержите разработку!", copied: "Скопировано!",
    labelWinner: "Победитель Матча", labelLoser: "Проигравший Матча", labelRunnerUp: "Второе Место в Группе", labelWinnerGroup: "Победитель Группы", labelThirdGroup: "3-е Место в Группе"
  },
  it: {
    title: "Coppa del Mondo 2026", live: "In Diretta", fixtures: "Calendario", standings: "Classifica", bracket: "Tabellone",
    simOn: "Ferma Sim", simOff: "Simula", today: "Oggi", byDate: "Per Data", knockouts: "Eliminazione Diretta",
    allGroups: "Tutti i Gruppi", loading: "Caricamento...", noLive: "Nessuna partita in diretta ora.",
    searchPlaceholder: "Cerca giocatori...", thNum: "#", thPlayer: "Giocatore", thPos: "Posizione",
    statusLive: "Simulazione in Diretta", statusAPI: "Connesso all'API",
    statusOffline: "Modalità Offline (Dati Locali)", simTooltip: "Attiva/Disattiva Simulazione in Diretta",
    elapsed: "Min", cards: "Cartellini", matchNotStarted: "Non Iniziata", matchFinished: "Finita",
    r16: "Ottavi di Finale", r32: "Sedicesimi di Finale", qf: "Quarti di Finale", sf: "Semifinali",
    third: "Finale Terzo Posto", final: "Finale", group: "Girone",
    posGK: "Portiere", posDEF: "Difensore", posMID: "Centrocampista", posFWD: "Attaccante",
    standingMP: "G", standingW: "V", standingD: "P", standingL: "S",
    standingGF: "Fatti", standingGA: "Subiti", standingGD: "DR", standingPts: "Pt",
    lineupShow: "Schieramento", lineupHide: "Nascondi Schieramento",
    noSquadData: "Dati rosa non disponibili per questa squadra.",
    noSquadDataShort: "Nessun dato rosa",
    startingXI: "Titolari", substitutes: "Panchina",
    goalkeepers: "Portieri", defenders: "Difensori", midfielders: "Centrocampisti", forwards: "Attaccanti",
    noMatchFound: "Nessuna partita trovata.", noMatchesToday: "Nessuna partita prevista per oggi.",
    donate: "Dona", donate_title: "Offrimi un Caffè",
    donate_subtitle: "Se questa estensione ti è utile, considera di supportare lo sviluppo!", copied: "Copiato!",
    labelWinner: "Vincitore della Partita", labelLoser: "Sconfitto della Partita", labelRunnerUp: "Secondo del Girone", labelWinnerGroup: "Primo del Girone", labelThirdGroup: "3° del Girone"
  },
  nl: {
    title: "WK 2026", live: "Live", fixtures: "Wedstrijden", standings: "Stand", bracket: "Knockout Schema",
    simOn: "Stop Sim", simOff: "Simuleer", today: "Vandaag", byDate: "Op Datum", knockouts: "Knockout",
    allGroups: "Alle Groepen", loading: "Laden...", noLive: "Geen live wedstrijden nu.",
    searchPlaceholder: "Spelers zoeken...", thNum: "#", thPlayer: "Speler", thPos: "Positie",
    statusLive: "Live Simulatie Actief", statusAPI: "Verbonden met API",
    statusOffline: "Offline Modus (Lokale Gegevens)", simTooltip: "Live Simulatie In-/Uitschakelen",
    elapsed: "Min", cards: "Kaarten", matchNotStarted: "Niet Begonnen", matchFinished: "Afgelopen",
    r16: "Achtste Finales", r32: "Zesendertigste Finales", qf: "Kwartfinales", sf: "Halve Finales",
    third: "Wedstrijd om 3e Plaats", final: "Finale", group: "Groep",
    posGK: "Keeper", posDEF: "Verdediger", posMID: "Middenvelder", posFWD: "Aanvaller",
    standingMP: "W", standingW: "W", standingD: "G", standingL: "V",
    standingGF: "Voor", standingGA: "Tegen", standingGD: "Verschil", standingPts: "Pnt",
    lineupShow: "Opstelling", lineupHide: "Verberg Opstelling",
    noSquadData: "Selectiegegevens niet beschikbaar voor dit team.",
    noSquadDataShort: "Geen selectiegegevens",
    startingXI: "Basiself", substitutes: "Wisselspelers",
    goalkeepers: "Keepers", defenders: "Verdedigers", midfielders: "Middenvelders", forwards: "Aanvallers",
    noMatchFound: "Geen wedstrijden gevonden.", noMatchesToday: "Geen wedstrijden gepland voor vandaag.",
    donate: "Doneren", donate_title: "Trakteer Me op een Koffie",
    donate_subtitle: "Als deze extensie nuttig is, overweeg de ontwikkeling te steunen!", copied: "Gekopieerd!",
    labelWinner: "Winnaar Wedstrijd", labelLoser: "Verliezer Wedstrijd", labelRunnerUp: "Tweede van Groep", labelWinnerGroup: "Winnaar Groep", labelThirdGroup: "3e van Groep"
  },
  ko: {
    title: "월드컵 2026", live: "실시간", fixtures: "일정", standings: "순위표", bracket: "대진표",
    simOn: "시뮬 중지", simOff: "시뮬레이션", today: "오늘", byDate: "날짜별", knockouts: "토너먼트",
    allGroups: "전체 조", loading: "데이터 로딩...", noLive: "현재 실시간 경기가 없습니다.",
    searchPlaceholder: "선수 검색...", thNum: "#", thPlayer: "선수", thPos: "포지션",
    statusLive: "실시간 시뮬레이션", statusAPI: "API 연결됨",
    statusOffline: "오프라인 모드 (로컬 데이터)", simTooltip: "실시간 시뮬레이션 켜기/끄기",
    elapsed: "분", cards: "카드", matchNotStarted: "未시작", matchFinished: "종료",
    r16: "16강", r32: "32강", qf: "8강", sf: "준결승",
    third: "3위 결정전", final: "결승", group: "조",
    posGK: "골키퍼", posDEF: "수비수", posMID: "미드필더", posFWD: "공격수",
    standingMP: "경", standingW: "승", standingD: "무", standingL: "패",
    standingGF: "득", standingGA: "실", standingGD: "득실", standingPts: "승점",
    lineupShow: "라인업 보기", lineupHide: "라인업 숨기기",
    noSquadData: "이 팀의 스쿼드 데이터를 사용할 수 없습니다.",
    noSquadDataShort: "스쿼드 데이터 없음",
    startingXI: "선발 라인업", substitutes: "교체 선수",
    goalkeepers: "골키퍼", defenders: "수비수", midfielders: "미드필더", forwards: "공격수",
    noMatchFound: "경기를 찾을 수 없습니다.", noMatchesToday: "오늘 예정된 경기가 없습니다.",
    donate: "후원", donate_title: "커피 사주세요",
    donate_subtitle: "이 확장 프로그램이 유용하다면 개발을 지원해 주세요!", copied: "복사됨!",
    labelWinner: "승리 팀", labelLoser: "패배 팀", labelRunnerUp: "조 2위", labelWinnerGroup: "조 1위", labelThirdGroup: "조 3위"
  },
  ja: {
    title: "W杯 2026", live: "ライブ", fixtures: "試合日程", standings: "順位表", bracket: "トーナメント",
    simOn: "シミュ停止", simOff: "シミュレーション", today: "今日", byDate: "日付別", knockouts: "ノックアウト",
    allGroups: "全グループ", loading: "データ読み込み中...", noLive: "現在ライブ試合はありません。",
    searchPlaceholder: "選手検索...", thNum: "#", thPlayer: "選手", thPos: "ポジション",
    statusLive: "ライブシミュレーション中", statusAPI: "API接続済み",
    statusOffline: "オフラインモード（ローカルデータ）", simTooltip: "ライブシミュレーション切替",
    elapsed: "分", cards: "カード", matchNotStarted: "未開始", matchFinished: "終了",
    r16: "決勝トーナメント16", r32: "決勝トーナメント32", qf: "準々決勝", sf: "準決勝",
    third: "3位決定戦", final: "決勝", group: "グループ",
    posGK: "ゴールキーパー", posDEF: "ディフェンダー", posMID: "ミッドフィルダー", posFWD: "フォワード",
    standingMP: "試", standingW: "勝", standingD: "引", standingL: "敗",
    standingGF: "得", standingGA: "失", standingGD: "差", standingPts: "勝点",
    lineupShow: "フォーメーション表示", lineupHide: "フォーメーション非表示",
    noSquadData: "このチームのスコアデータはありません。",
    noSquadDataShort: "スコアデータなし",
    startingXI: "スターティングイレブン", substitutes: "サブメンバー",
    goalkeepers: "ゴールキーパー", defenders: "ディフェンダー", midfielders: "ミッドフィルダー", forwards: "フォワード",
    noMatchFound: "試合が見つかりません。", noMatchesToday: "今日の試合は予定されていません。",
    donate: "寄付", donate_title: "コーヒーをご馳走してください",
    donate_subtitle: "この拡張機能が有用なら、開発支援をご検討ください！", copied: "コピー済み！",
    labelWinner: "勝者", labelLoser: "敗者", labelRunnerUp: "グループ2位", labelWinnerGroup: "グループ1位", labelThirdGroup: "グループ3位"
  },
  fa: {
    title: "جام جهانی 2026", live: "زنده", fixtures: "بازی‌ها", standings: "جدول رده‌بندی", bracket: "جدول حذفی",
    simOn: "توقف شبیه‌سازی", simOff: "شبیه‌سازی", today: "امروز", byDate: "بر اساس تاریخ", knockouts: "حذفی",
    allGroups: "همه گروه‌ها", loading: "بارگذاری داده‌ها...", noLive: "اکنون بازی زنده‌ای وجود ندارد.",
    searchPlaceholder: "جستجوی بازیکنان...", thNum: "#", thPlayer: "بازیکن", thPos: "پست",
    statusLive: "شبیه‌سازی زنده", statusAPI: "اتصال به API",
    statusOffline: "حالت آفلاین (داده‌های محلی)", simTooltip: "شبیه‌سازی زنده را روشن/خاموش کنید",
    elapsed: "دقیقه", cards: "کارت‌ها", matchNotStarted: "شروع نشده", matchFinished: "پایان یافته",
    r16: "یک‌هشتم نهایی", r32: "یک‌شانزدهم نهایی", qf: "یک‌چهارم نهایی", sf: "نیمه‌نهایی",
    third: "رده‌بندی", final: "نهایی", group: "گروه",
    posGK: "دروازه‌بان", posDEF: "مدافع", posMID: "هافبک", posFWD: "مهاجم",
    standingMP: "بازی", standingW: "برد", standingD: "تساوی", standingL: "باخت",
    standingGF: "زده", standingGA: "خورده", standingGD: "تفاضل", standingPts: "امتیاز",
    lineupShow: "ترکیب را نشان بده", lineupHide: "ترکیب را پنهان کن",
    noSquadData: "داده ترکیب برای این تیم موجود نیست.",
    noSquadDataShort: "داده ترکیب موجود نیست",
    startingXI: "ترکیب اصلی", substitutes: "ذخیره‌ها",
    goalkeepers: "دروازه‌بانان", defenders: "مدافعان", midfielders: "هافبک‌ها", forwards: "مهاجمان",
    noMatchFound: "بازی‌ای یافت نشد.", noMatchesToday: "بازی برای امروز برنامه‌ریزی نشده.",
    donate: "کمک مالی", donate_title: "یک قهوه برایم بخرید",
    donate_subtitle: "اگر این افزونه برایتان مفید است، از توسعه آن حمایت کنید!", copied: "کپی شد!",
    labelWinner: "برنده بازی", labelLoser: "بازنده بازی", labelRunnerUp: "دوم گروه", labelWinnerGroup: "اول گروه", labelThirdGroup: "سوم گروه"
  },
  hi: {
    title: "विश्व कप 2026", live: "लाइव", fixtures: "मैच", standings: "तालिका", bracket: "नॉकआउट",
    simOn: "सिम बंद करें", simOff: "सिमुलेशन", today: "आज", byDate: "तिथि के अनुसार", knockouts: "नॉकआउट",
    allGroups: "सभी समूह", loading: "डेटा लोड हो रहा है...", noLive: "अभी कोई लाइव मैच नहीं।",
    searchPlaceholder: "खिलाड़ी खोजें...", thNum: "#", thPlayer: "खिलाड़ी", thPos: "स्थान",
    statusLive: "लाइव सिमुलेशन", statusAPI: "API से जुड़ा",
    statusOffline: "ऑफलाइन मोड (स्थानीय डेटा)", simTooltip: "लाइव सिमुलेशन चालू/बंद करें",
    elapsed: "मिनट", cards: "कार्ड", matchNotStarted: "शुरू नहीं हुआ", matchFinished: "समाप्त",
    r16: "16वें दौर", r32: "32वें दौर", qf: "क्वार्टर फाइनल", sf: "सेमीफाइनल",
    third: "तीसरा स्थान", final: "फाइनल", group: "समूह",
    posGK: "गोलकीपर", posDEF: "डिफेंडर", posMID: "मिडफील्डर", posFWD: "फॉरवर्ड",
    standingMP: "खे", standingW: "जीत", standingD: "ड्रॉ", standingL: "हार",
    standingGF: "किए", standingGA: "खाए", standingGD: "अंतर", standingPts: "अंक",
    lineupShow: "लाइनअप दिखाएं", lineupHide: "लाइनअप छुपाएं",
    noSquadData: "इस टीम का स्क्वाड डेटा उपलब्ध नहीं है।",
    noSquadDataShort: "स्क्वाड डेटा उपलब्ध नहीं",
    startingXI: "स्टार्टिंग इलेवन", substitutes: "रिजर्व",
    goalkeepers: "गोलकीपर", defenders: "डिफेंडर", midfielders: "मिडफील्डर", forwards: "फॉरवर्ड",
    noMatchFound: "कोई मैच नहीं मिला।", noMatchesToday: "आज कोई मैच निर्धारित नहीं।",
    donate: "दान", donate_title: "मुझे कॉफी पिलाएं",
    donate_subtitle: "यदि यह एक्सटेंशन उपयोगी है, तो विकास का समर्थन करें!", copied: "कॉपी हो गया!",
    labelWinner: "विजेता", labelLoser: "हारने वाला", labelRunnerUp: "समूह दूसरा", labelWinnerGroup: "समूह विजेता", labelThirdGroup: "समूह तीसरा"
  },
  id: {
    title: "Piala Dunia 2026", live: "Langsung", fixtures: "Jadwal", standings: "Klasemen", bracket: "Babak Gugur",
    simOn: "Hentikan Sim", simOff: "Simulasi", today: "Hari Ini", byDate: "Berdasarkan Tanggal", knockouts: "Eliminasi",
    allGroups: "Semua Grup", loading: "Memuat data...", noLive: "Tidak ada pertandingan langsung saat ini.",
    searchPlaceholder: "Cari pemain...", thNum: "#", thPlayer: "Pemain", thPos: "Posisi",
    statusLive: "Simulasi Langsung", statusAPI: "Terhubung ke API",
    statusOffline: "Mode Offline (Data Lokal)", simTooltip: "Aktifkan/Nonaktifkan Simulasi Langsung",
    elapsed: "Mnt", cards: "Kartu", matchNotStarted: "Belum Dimulai", matchFinished: "Selesai",
    r16: "Babak 16 Besar", r32: "Babak 32 Besar", qf: "Perempat Final", sf: "Semi Final",
    third: "Perebutan Juara 3", final: "Final", group: "Grup",
    posGK: "Penjaga Gawang", posDEF: "Bek", posMID: "Gelandang", posFWD: "Penyerang",
    standingMP: "M", standingW: "M", standingD: "S", standingL: "K",
    standingGF: "GM", standingGA: "GK", standingGD: "SG", standingPts: "Poin",
    lineupShow: "Tampilkan Formasi", lineupHide: "Sembunyikan Formasi",
    noSquadData: "Data skuad tidak tersedia untuk tim ini.",
    noSquadDataShort: "Data skuad tidak tersedia",
    startingXI: "Pemain Inti", substitutes: "Pemain Cadangan",
    goalkeepers: "Penjaga Gawang", defenders: "Bek", midfielders: "Gelandang", forwards: "Penyerang",
    noMatchFound: "Tidak ada pertandingan ditemukan.", noMatchesToday: "Tidak ada pertandingan hari ini.",
    donate: "Donasi", donate_title: "Traktir Saya Kopi",
    donate_subtitle: "Jika ekstensi ini bermanfaat, pertimbangkan untuk mendukung pengembangan!", copied: "Disalin!",
    labelWinner: "Pemenang", labelLoser: "Kalah", labelRunnerUp: "Juara 2 Grup", labelWinnerGroup: "Juara Grup", labelThirdGroup: "Juara 3 Grup"
  },
  pl: {
    title: "Mistrzostwa Świata 2026", live: "Na Żywo", fixtures: "Terminarz", standings: "Tabela", bracket: "Drabinka",
    simOn: "Zatrzymaj Sym", simOff: "Symuluj", today: "Dziś", byDate: "Wg Daty", knockouts: "Pucharowa",
    allGroups: "Wszystkie Grupy", loading: "Ładowanie danych...", noLive: "Brak meczów na żywo.",
    searchPlaceholder: "Szukaj zawodników...", thNum: "#", thPlayer: "Zawodnik", thPos: "Pozycja",
    statusLive: "Symulacja Na Żywo", statusAPI: "Połączono z API",
    statusOffline: "Tryb Offline (Dane Lokalne)", simTooltip: "Przełącz Symulację Na Żywo",
    elapsed: "Min", cards: "Kartki", matchNotStarted: "Nie Rozpoczęty", matchFinished: "Zakończony",
    r16: "1/8 Finału", r32: "1/16 Finału", qf: "Ćwierćfinały", sf: "Półfinały",
    third: "Mecz o 3. Miejsce", final: "Finał", group: "Grupa",
    posGK: "Bramkarz", posDEF: "Obrońca", posMID: "Pomocnik", posFWD: "Napastnik",
    standingMP: "M", standingW: "W", standingD: "R", standingL: "P",
    standingGF: "BZ", standingGA: "BS", standingGD: "RB", standingPts: "Pkt",
    lineupShow: "Pokaż Skład", lineupHide: "Ukryj Skład",
    noSquadData: "Dane składu niedostępne dla tej drużyny.",
    noSquadDataShort: "Brak danych składu",
    startingXI: "Podstawowy Skład", substitutes: "Rezerwowi",
    goalkeepers: "Bramkarze", defenders: "Obrońcy", midfielders: "Pomocnicy", forwards: "Napastnicy",
    noMatchFound: "Nie znaleziono meczów.", noMatchesToday: "Brak zaplanowanych meczów na dziś.",
    donate: "Wpłać", donate_title: "Postaw Mi Kawę",
    donate_subtitle: "Jeśli to rozszerzenie jest przydatne, rozważ wsparcie rozwoju!", copied: "Skopiowano!",
    labelWinner: "Wygrany Meczu", labelLoser: "Przegrany Meczu", labelRunnerUp: "2. Miejsce w Grupie", labelWinnerGroup: "1. Miejsce w Grupie", labelThirdGroup: "3. Miejsce w Grupie"
  }
};

const teamNames = {
  en: {
    "Mexico": "Mexico", "South Africa": "South Africa", "South Korea": "South Korea",
    "Czech Republic": "Czech Republic", "Canada": "Canada", "Bosnia and Herzegovina": "Bosnia and Herzegovina",
    "Qatar": "Qatar", "Switzerland": "Switzerland", "Brazil": "Brazil", "Morocco": "Morocco",
    "Haiti": "Haiti", "Scotland": "Scotland", "United States": "United States", "Paraguay": "Paraguay",
    "Australia": "Australia", "Turkey": "Turkey", "Germany": "Germany", "Curaçao": "Curaçao",
    "Ivory Coast": "Ivory Coast", "Ecuador": "Ecuador", "Netherlands": "Netherlands",
    "Japan": "Japan", "Sweden": "Sweden", "Tunisia": "Tunisia", "Belgium": "Belgium",
    "Egypt": "Egypt", "Iran": "Iran", "New Zealand": "New Zealand", "Spain": "Spain",
    "Cape Verde": "Cape Verde", "Saudi Arabia": "Saudi Arabia", "Uruguay": "Uruguay",
    "France": "France", "Senegal": "Senegal", "Iraq": "Iraq", "Norway": "Norway",
    "Argentina": "Argentina", "Algeria": "Algeria", "Austria": "Austria", "Jordan": "Jordan",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "DR Congo",
    "Uzbekistan": "Uzbekistan", "Colombia": "Colombia", "England": "England",
    "Croatia": "Croatia", "Ghana": "Ghana", "Panama": "Panama"
  },
  tr: {
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
  },
  es: {
    "Mexico": "México", "South Africa": "Sudáfrica", "South Korea": "Corea del Sur",
    "Czech Republic": "Chequia", "Canada": "Canadá", "Bosnia and Herzegovina": "Bosnia y Herzegovina",
    "Qatar": "Catar", "Switzerland": "Suiza", "Brazil": "Brasil", "Morocco": "Marruecos",
    "Haiti": "Haití", "Scotland": "Escocia", "United States": "Estados Unidos", "Paraguay": "Paraguay",
    "Australia": "Australia", "Turkey": "Turquía", "Germany": "Alemania", "Curaçao": "Curaçao",
    "Ivory Coast": "Costa de Marfil", "Ecuador": "Ecuador", "Netherlands": "Países Bajos",
    "Japan": "Japón", "Sweden": "Suecia", "Tunisia": "Túnez", "Belgium": "Bélgica",
    "Egypt": "Egipto", "Iran": "Irán", "New Zealand": "Nueva Zelanda", "Spain": "España",
    "Cape Verde": "Cabo Verde", "Saudi Arabia": "Arabia Saudita", "Uruguay": "Uruguay",
    "France": "Francia", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Noruega",
    "Argentina": "Argentina", "Algeria": "Argelia", "Austria": "Austria", "Jordan": "Jordania",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "RD del Congo",
    "Uzbekistan": "Uzbekistán", "Colombia": "Colombia", "England": "Inglaterra",
    "Croatia": "Croacia", "Ghana": "Ghana", "Panama": "Panamá"
  },
  pt: {
    "Mexico": "México", "South Africa": "África do Sul", "South Korea": "Coreia do Sul",
    "Czech Republic": "Tchéquia", "Canada": "Canadá", "Bosnia and Herzegovina": "Bósnia e Herzegovina",
    "Qatar": "Catar", "Switzerland": "Suíça", "Brazil": "Brasil", "Morocco": "Marrocos",
    "Haiti": "Haiti", "Scotland": "Escócia", "United States": "Estados Unidos", "Paraguay": "Paraguai",
    "Australia": "Austrália", "Turkey": "Turquia", "Germany": "Alemanha", "Curaçao": "Curaçao",
    "Ivory Coast": "Costa do Marfim", "Ecuador": "Equador", "Netherlands": "Países Baixos",
    "Japan": "Japão", "Sweden": "Suécia", "Tunisia": "Tunísia", "Belgium": "Bélgica",
    "Egypt": "Egito", "Iran": "Irã", "New Zealand": "Nova Zelândia", "Spain": "Espanha",
    "Cape Verde": "Cabo Verde", "Saudi Arabia": "Arábia Saudita", "Uruguay": "Uruguai",
    "France": "França", "Senegal": "Senegal", "Iraq": "Iraque", "Norway": "Noruega",
    "Argentina": "Argentina", "Algeria": "Argélia", "Austria": "Áustria", "Jordan": "Jordânia",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "RD do Congo",
    "Uzbekistan": "Uzbequistão", "Colombia": "Colômbia", "England": "Inglaterra",
    "Croatia": "Croácia", "Ghana": "Gana", "Panama": "Panamá"
  },
  fr: {
    "Mexico": "Mexique", "South Africa": "Afrique du Sud", "South Korea": "Corée du Sud",
    "Czech Republic": "Tchéquie", "Canada": "Canada", "Bosnia and Herzegovina": "Bosnie-Herzégovine",
    "Qatar": "Qatar", "Switzerland": "Suisse", "Brazil": "Brésil", "Morocco": "Maroc",
    "Haiti": "Haïti", "Scotland": "Écosse", "United States": "États-Unis", "Paraguay": "Paraguay",
    "Australia": "Australie", "Turkey": "Turquie", "Germany": "Allemagne", "Curaçao": "Curaçao",
    "Ivory Coast": "Côte d'Ivoire", "Ecuador": "Équateur", "Netherlands": "Pays-Bas",
    "Japan": "Japon", "Sweden": "Suède", "Tunisia": "Tunisie", "Belgium": "Belgique",
    "Egypt": "Égypte", "Iran": "Iran", "New Zealand": "Nouvelle-Zélande", "Spain": "Espagne",
    "Cape Verde": "Cap-Vert", "Saudi Arabia": "Arabie Saoudite", "Uruguay": "Uruguay",
    "France": "France", "Senegal": "Sénégal", "Iraq": "Irak", "Norway": "Norvège",
    "Argentina": "Argentine", "Algeria": "Algérie", "Austria": "Autriche", "Jordan": "Jordanie",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "RD Congo",
    "Uzbekistan": "Ouzbékistan", "Colombia": "Colombie", "England": "Angleterre",
    "Croatia": "Croatie", "Ghana": "Ghana", "Panama": "Panama"
  },
  de: {
    "Mexico": "Mexiko", "South Africa": "Südafrika", "South Korea": "Südkorea",
    "Czech Republic": "Tschechien", "Canada": "Kanada", "Bosnia and Herzegovina": "Bosnien und Herzegowina",
    "Qatar": "Katar", "Switzerland": "Schweiz", "Brazil": "Brasilien", "Morocco": "Marokko",
    "Haiti": "Haiti", "Scotland": "Schottland", "United States": "USA", "Paraguay": "Paraguay",
    "Australia": "Australien", "Turkey": "Türkei", "Germany": "Deutschland", "Curaçao": "Curaçao",
    "Ivory Coast": "Elfenbeinküste", "Ecuador": "Ecuador", "Netherlands": "Niederlande",
    "Japan": "Japan", "Sweden": "Schweden", "Tunisia": "Tunesien", "Belgium": "Belgien",
    "Egypt": "Ägypten", "Iran": "Iran", "New Zealand": "Neuseeland", "Spain": "Spanien",
    "Cape Verde": "Kap Verde", "Saudi Arabia": "Saudi-Arabien", "Uruguay": "Uruguay",
    "France": "Frankreich", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Norwegen",
    "Argentina": "Argentinien", "Algeria": "Algerien", "Austria": "Österreich", "Jordan": "Jordanien",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "DR Kongo",
    "Uzbekistan": "Usbekistan", "Colombia": "Kolumbien", "England": "England",
    "Croatia": "Kroatien", "Ghana": "Ghana", "Panama": "Panama"
  },
  ar: {
    "Mexico": "المكسيك", "South Africa": "جنوب أفريقيا", "South Korea": "كوريا الجنوبية",
    "Czech Republic": "التشيك", "Canada": "كندا", "Bosnia and Herzegovina": "البوسنة والهرسك",
    "Qatar": "قطر", "Switzerland": "سويسرا", "Brazil": "البرازيل", "Morocco": "المغرب",
    "Haiti": "هايتي", "Scotland": "اسكتلندا", "United States": "الولايات المتحدة", "Paraguay": "باراغواي",
    "Australia": "أستراليا", "Turkey": "تركيا", "Germany": "ألمانيا", "Curaçao": "كوراساو",
    "Ivory Coast": "ساحل العاج", "Ecuador": "الإكوادور", "Netherlands": "هولندا",
    "Japan": "اليابان", "Sweden": "السويد", "Tunisia": "تونس", "Belgium": "بلجيكا",
    "Egypt": "مصر", "Iran": "إيران", "New Zealand": "نيوزيلندا", "Spain": "إسبانيا",
    "Cape Verde": "الرأس الأخضر", "Saudi Arabia": "المملكة العربية السعودية", "Uruguay": "أوروغواي",
    "France": "فرنسا", "Senegal": "السنغال", "Iraq": "العراق", "Norway": "النرويج",
    "Argentina": "الأرجنتين", "Algeria": "الجزائر", "Austria": "النمسا", "Jordan": "الأردن",
    "Portugal": "البرتغال", "Democratic Republic of the Congo": "جمهورية الكونغو الديمقراطية",
    "Uzbekistan": "أوزبكستان", "Colombia": "كولومبيا", "England": "إنجلترا",
    "Croatia": "كرواتيا", "Ghana": "غانا", "Panama": "بنما"
  },
  ru: {
    "Mexico": "Мексика", "South Africa": "ЮАР", "South Korea": "Южная Корея",
    "Czech Republic": "Чехия", "Canada": "Канада", "Bosnia and Herzegovina": "Босния и Герцеговина",
    "Qatar": "Катар", "Switzerland": "Швейцария", "Brazil": "Бразилия", "Morocco": "Марокко",
    "Haiti": "Гаити", "Scotland": "Шотландия", "United States": "США", "Paraguay": "Парагвай",
    "Australia": "Австралия", "Turkey": "Турция", "Germany": "Германия", "Curaçao": "Кюрасао",
    "Ivory Coast": "Кот-д'Ивуар", "Ecuador": "Эквадор", "Netherlands": "Нидерланды",
    "Japan": "Япония", "Sweden": "Швеция", "Tunisia": "Тунис", "Belgium": "Бельгия",
    "Egypt": "Египет", "Iran": "Иран", "New Zealand": "Новая Зеландия", "Spain": "Испания",
    "Cape Verde": "Кабо-Верде", "Saudi Arabia": "Саудовская Аравия", "Uruguay": "Уругвай",
    "France": "Франция", "Senegal": "Сенегал", "Iraq": "Ирак", "Norway": "Норвегия",
    "Argentina": "Аргентина", "Algeria": "Алжир", "Austria": "Австрия", "Jordan": "Иордания",
    "Portugal": "Португалия", "Democratic Republic of the Congo": "ДР Конго",
    "Uzbekistan": "Узбекистан", "Colombia": "Колумбия", "England": "Англия",
    "Croatia": "Хорватия", "Ghana": "Гана", "Panama": "Панама"
  },
  it: {
    "Mexico": "Messico", "South Africa": "Sudafrica", "South Korea": "Corea del Sud",
    "Czech Republic": "Cechia", "Canada": "Canada", "Bosnia and Herzegovina": "Bosnia ed Erzegovina",
    "Qatar": "Qatar", "Switzerland": "Svizzera", "Brazil": "Brasile", "Morocco": "Marocco",
    "Haiti": "Haiti", "Scotland": "Scozia", "United States": "Stati Uniti", "Paraguay": "Paraguay",
    "Australia": "Australia", "Turkey": "Turchia", "Germany": "Germania", "Curaçao": "Curaçao",
    "Ivory Coast": "Costa d'Avorio", "Ecuador": "Ecuador", "Netherlands": "Paesi Bassi",
    "Japan": "Giappone", "Sweden": "Svezia", "Tunisia": "Tunisia", "Belgium": "Belgio",
    "Egypt": "Egitto", "Iran": "Iran", "New Zealand": "Nuova Zelanda", "Spain": "Spagna",
    "Cape Verde": "Capo Verde", "Saudi Arabia": "Arabia Saudita", "Uruguay": "Uruguay",
    "France": "Francia", "Senegal": "Senegal", "Iraq": "Iraq", "Norway": "Norvegia",
    "Argentina": "Argentina", "Algeria": "Algeria", "Austria": "Austria", "Jordan": "Giordania",
    "Portugal": "Portogallo", "Democratic Republic of the Congo": "RD Congo",
    "Uzbekistan": "Uzbekistan", "Colombia": "Colombia", "England": "Inghilterra",
    "Croatia": "Croazia", "Ghana": "Ghana", "Panama": "Panama"
  },
  nl: {
    "Mexico": "Mexico", "South Africa": "Zuid-Afrika", "South Korea": "Zuid-Korea",
    "Czech Republic": "Tsjechië", "Canada": "Canada", "Bosnia and Herzegovina": "Bosnië en Herzegovina",
    "Qatar": "Qatar", "Switzerland": "Zwitserland", "Brazil": "Brazilië", "Morocco": "Marokko",
    "Haiti": "Haïti", "Scotland": "Schotland", "United States": "Verenigde Staten", "Paraguay": "Paraguay",
    "Australia": "Australië", "Turkey": "Turkije", "Germany": "Duitsland", "Curaçao": "Curaçao",
    "Ivory Coast": "Ivoorkust", "Ecuador": "Ecuador", "Netherlands": "Nederland",
    "Japan": "Japan", "Sweden": "Zweden", "Tunisia": "Tunesië", "Belgium": "België",
    "Egypt": "Egypte", "Iran": "Iran", "New Zealand": "Nieuw-Zeeland", "Spanje": "Spanje",
    "Cape Verde": "Kaapverdië", "Saudi Arabia": "Saoedi-Arabië", "Uruguay": "Uruguay",
    "France": "Frankrijk", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Noorwegen",
    "Argentina": "Argentinië", "Algeria": "Algerije", "Austria": "Oostenrijk", "Jordan": "Jordanië",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "DR Congo",
    "Uzbekistan": "Oezbekistan", "Colombia": "Colombia", "England": "Engeland",
    "Croatia": "Kroatië", "Ghana": "Ghana", "Panama": "Panama"
  },
  ko: {
    "Mexico": "멕시코", "South Africa": "남아프리카 공화국", "South Korea": "대한민국",
    "Czech Republic": "체코", "Canada": "캐나다", "Bosnia and Herzegovina": "보스니아 헤르체고비나",
    "Qatar": "카타르", "Switzerland": "스위스", "Brazil": "브라질", "Morocco": "모로코",
    "Haiti": "아이티", "Scotland": "스코틀랜드", "United States": "미국", "Paraguay": "파라과이",
    "Australia": "호주", "Turkey": "튀르키예", "Germany": "독일", "Curaçao": "퀴라소",
    "Ivory Coast": "코트디부아르", "Ecuador": "에콰도르", "Netherlands": "네덜란드",
    "Japan": "일본", "Sweden": "스웨덴", "Tunisia": "튀니지", "Belgium": "벨기에",
    "Egypt": "이집트", "Iran": "이란", "New Zealand": "뉴질랜드", "Spain": "스페인",
    "Cape Verde": "카보베르데", "Saudi Arabia": "사우디아라비아", "Uruguay": "우루과이",
    "France": "프랑스", "Senegal": "세네갈", "Iraq": "이라크", "Norway": "노르웨이",
    "Argentina": "아르헨티나", "Algeria": "알제리", "Austria": "오스트리아", "Jordan": "요르단",
    "Portugal": "포르투갈", "Democratic Republic of the Congo": "콩고 민주 공화국",
    "Uzbekistan": "우즈베키스탄", "Colombia": "콜롬비아", "England": "잉글랜드",
    "Croatia": "크로아티아", "Ghana": "가나", "Panama": "파나마"
  },
  ja: {
    "Mexico": "メキシコ", "South Africa": "南アフリカ", "South Korea": "韓国",
    "Czech Republic": "チェコ", "Canada": "カナダ", "Bosnia and Herzegovina": "ボスニア・ヘルツェゴビナ",
    "Qatar": "カタール", "Switzerland": "スイス", "Brazil": "ブラジル", "Morocco": "モロッコ",
    "Haiti": "ハイチ", "Scotland": "スコットランド", "United States": "アメリカ", "Paraguay": "パラグアイ",
    "Australia": "オーストラリア", "Turkey": "トルコ", "Germany": "ドイツ", "Curaçao": "キュラソー",
    "Ivory Coast": "コートジボワール", "Ecuador": "エクアドル", "Netherlands": "オランダ",
    "Japan": "日本", "Sweden": "スウェーデン", "Tunisia": "チュニジア", "Belgium": "ベルギー",
    "Egypt": "エジプト", "Iran": "イラン", "New Zealand": "ニュージーランド", "Spain": "スペイン",
    "Cape Verde": "カーボベルデ", "Saudi Arabia": "サウジアラビア", "Uruguay": "ウルグアイ",
    "France": "フランス", "Senegal": "セネガル", "Iraq": "イラク", "Norway": "ノルウェー",
    "Argentina": "アルゼンチン", "Algeria": "アルジェリア", "Austria": "オーストリア", "Jordan": "ヨルダン",
    "Portugal": "ポルトガル", "Democratic Republic of the Congo": "コンゴ民主共和国",
    "Uzbekistan": "ウズベキスタン", "Colombia": "コロンビア", "England": "イングランド",
    "Croatia": "クロアチア", "Ghana": "ガーナ", "Panama": "パナマ"
  },
  fa: {
    "Mexico": "مکزیک", "South Africa": "آفریقای جنوبی", "South Korea": "کره جنوبی",
    "Czech Republic": "چک", "Canada": "کانادا", "Bosnia and Herzegovina": "بوسنی و هرزگوین",
    "Qatar": "قطر", "Switzerland": "سوئیس", "Brazil": "برزیل", "Morocco": "مراکش",
    "Haiti": "هائیتی", "Scotland": "اسکاتلند", "United States": "آمریکا", "Paraguay": "پاراگوئه",
    "Australia": "استرالیا", "Turkey": "ترکیه", "Germany": "آلمان", "Curaçao": "کوراسائو",
    "Ivory Coast": "ساحل عاج", "Ecuador": "اکوادور", "Netherlands": "هلند",
    "Japan": "ژاپن", "Sweden": "سوئد", "Tunisia": "تونس", "Belgium": "بلژیک",
    "Egypt": "مصر", "Iran": "ایران", "New Zealand": "نیوزیلند", "Spain": "اسپانیا",
    "Cape Verde": "کابو ورده", "Saudi Arabia": "عربستان سعودی", "Uruguay": "اروگوئه",
    "France": "فرانسه", "Senegal": "سنگال", "Iraq": "عراق", "Norway": "نروژ",
    "Argentina": "آرژانتین", "Algeria": "الجزایر", "Austria": "اتریش", "Jordan": "اردن",
    "Portugal": "پرتغال", "Democratic Republic of the Congo": "کنگو شرقی",
    "Uzbekistan": "ازبکستان", "Colombia": "کلمبیا", "England": "انگلیس",
    "Croatia": "کرواسی", "Ghana": "غنا", "Panama": "پاناما"
  },
  hi: {
    "Mexico": "मैक्सिको", "South Africa": "दक्षिण अफ्रीका", "South Korea": "दक्षिण कोरिया",
    "Czech Republic": "चेक गणराज्य", "Canada": "कनाडा", "Bosnia and Herzegovina": "बोस्निया और हर्ज़ेगोविना",
    "Qatar": "क़तर", "Switzerland": "स्विट्ज़रलैंड", "Brazil": "ब्राज़ील", "Morocco": "मोरक्को",
    "Haiti": "हैती", "Scotland": "स्कॉटलैंड", "United States": "अमेरिका", "Paraguay": "पैराग्वे",
    "Australia": "ऑस्ट्रेलिया", "Turkey": "तुर्की", "Germany": "जर्मनी", "Curaçao": "कुरासाओ",
    "Ivory Coast": "कोत दिव्वार", "Ecuador": "इक्वाडोर", "Netherlands": "नीदरलैंड",
    "Japan": "जापान", "Sweden": "स्वीडन", "Tunisia": "ट्यूनीशिया", "Belgium": "बेल्जियम",
    "Egypt": "मिस्र", "Iran": "ईरान", "New Zealand": "न्यूज़ीलैंड", "Spain": "स्पेन",
    "Cape Verde": "केप वर्डे", "Saudi Arabia": "सऊदी अरब", "Uruguay": "उरुग्वे",
    "France": "फ्रांस", "Senegal": "सेनेगल", "Iraq": "इराक", "Norway": "नॉर्वे",
    "Argentina": "अर्जेंटीना", "Algeria": "अल्जीरिया", "Austria": "ऑस्ट्रिया", "Jordan": "जॉर्डन",
    "Portugal": "पुर्तगाल", "Democratic Republic of the Congo": "कांगो लोकतांत्रिक गणराज्य",
    "Uzbekistan": "उज़्बेकिस्तान", "Colombia": "कोलंबिया", "England": "इंग्लैंड",
    "Croatia": "क्रोएशिया", "Ghana": "घाना", "Panama": "पनामा"
  },
  id: {
    "Mexico": "Meksiko", "South Africa": "Afrika Selatan", "South Korea": "Korea Selatan",
    "Czech Republic": "Ceko", "Canada": "Kanada", "Bosnia and Herzegovina": "Bosnia dan Herzegovina",
    "Qatar": "Qatar", "Switzerland": "Swiss", "Brazil": "Brasil", "Morocco": "Maroko",
    "Haiti": "Haiti", "Scotland": "Skotlandia", "United States": "Amerika Serikat", "Paraguay": "Paraguay",
    "Australia": "Australia", "Turkey": "Turki", "Germany": "Jerman", "Curaçao": "Curaçao",
    "Ivory Coast": "Pantai Gading", "Ecuador": "Ekuador", "Netherlands": "Belanda",
    "Japan": "Jepang", "Sweden": "Swedia", "Tunisia": "Tunisia", "Belgium": "Belgia",
    "Egypt": "Mesir", "Iran": "Iran", "New Zealand": "Selandia Baru", "Spain": "Spanyol",
    "Cape Verde": "Tanjung Verde", "Saudi Arabia": "Arab Saudi", "Uruguay": "Uruguay",
    "France": "Prancis", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Norwegia",
    "Argentina": "Argentina", "Algeria": "Aljazair", "Austria": "Austria", "Jordan": "Yordania",
    "Portugal": "Portugal", "Democratic Republic of the Congo": "DR Kongo",
    "Uzbekistan": "Uzbekistan", "Colombia": "Kolombia", "England": "Inggris",
    "Croatia": "Kroasia", "Ghana": "Ghana", "Panama": "Panama"
  },
  pl: {
    "Mexico": "Meksyk", "South Africa": "Republika Południowej Afryki", "South Korea": "Korea Południowa",
    "Czech Republic": "Czechy", "Canada": "Kanada", "Bosnia and Herzegovina": "Bośnia i Hercegowina",
    "Qatar": "Katar", "Switzerland": "Szwajcaria", "Brazil": "Brazylia", "Morocco": "Maroko",
    "Haiti": "Haiti", "Scotland": "Szkocja", "United States": "Stany Zjednoczone", "Paraguay": "Paragwaj",
    "Australia": "Australia", "Turkey": "Turcja", "Germany": "Niemcy", "Curaçao": "Curaçao",
    "Ivory Coast": "Wybrzeże Kości Słoniowej", "Ecuador": "Ekwador", "Netherlands": "Holandia",
    "Japan": "Japonia", "Sweden": "Szwecja", "Tunisia": "Tunezja", "Belgium": "Belgia",
    "Egypt": "Egipt", "Iran": "Iran", "New Zealand": "Nowa Zelandia", "Spain": "Hiszpania",
    "Cape Verde": "Republika Zielonego Przylądka", "Saudi Arabia": "Arabia Saudyjska", "Uruguay": "Urugwaj",
    "France": "Francja", "Senegal": "Senegal", "Iraq": "Irak", "Norway": "Norwegia",
    "Argentina": "Argentyna", "Algeria": "Algieria", "Austria": "Austria", "Jordan": "Jordania",
    "Portugal": "Portugalia", "Democratic Republic of the Congo": "DR Konga",
    "Uzbekistan": "Uzbekistan", "Colombia": "Kolumbia", "England": "Anglia",
    "Croatia": "Chorwacja", "Ghana": "Ghana", "Panama": "Panama"
  }
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
  // Language dropdown
  buildLangDropdown();
  document.getElementById("lang-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("lang-dropdown").classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    document.getElementById("lang-dropdown").classList.remove("open");
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
  const names = teamNames[state.lang] || teamNames.en;
  if (side === "home") {
    if (game.home_team_label && (!game.home_team_id || game.home_team_id === "0")) {
      return translateLabel(game.home_team_label);
    }
    return names[game.home_team_name_en] || game.home_team_name_en || "TBD";
  } else {
    if (game.away_team_label && (!game.away_team_id || game.away_team_id === "0")) {
      return translateLabel(game.away_team_label);
    }
    return names[game.away_team_name_en] || game.away_team_name_en || "TBD";
  }
}

function translateLabel(lbl) {
  const dict = translations[state.lang];
  if (dict.labelWinner && lbl.includes("Winner Match")) return lbl.replace("Winner Match", dict.labelWinner);
  if (dict.labelLoser && lbl.includes("Loser Match")) return lbl.replace("Loser Match", dict.labelLoser);
  if (dict.labelRunnerUp && lbl.includes("Runner-up Group")) return lbl.replace("Runner-up Group", dict.labelRunnerUp);
  if (dict.labelWinnerGroup && lbl.includes("Winner Group")) return lbl.replace("Winner Group", dict.labelWinnerGroup);
  if (dict.labelThirdGroup && lbl.includes("3rd Group")) return lbl.replace("3rd Group", dict.labelThirdGroup);
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
      const lineupBtnText = translations[state.lang].lineupShow;
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
    const emptyMsg = translations[state.lang].noMatchesToday;
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
      const lineupBtnText = translations[state.lang].lineupShow;
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
    const dict = translations[state.lang];
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width: 8%" class="table-num">#</th>
          <th style="width: 32%">${dict.thPlayer}</th>
          <th style="width: 7%">${dict.standingMP}</th>
          <th style="width: 7%">${dict.standingW}</th>
          <th style="width: 7%">${dict.standingD}</th>
          <th style="width: 7%">${dict.standingL}</th>
          <th style="width: 7%">${dict.standingGF}</th>
          <th style="width: 7%">${dict.standingGA}</th>
          <th style="width: 7%">${dict.standingGD}</th>
          <th style="width: 8%">${dict.standingPts}</th>
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
      
      const teamNameText = (teamNames[state.lang] || teamNames.en)[team.name_en] || team.name_en;

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
  
  const names = teamNames[state.lang] || teamNames.en;
  const displayTeamName = names[teamName] || teamName;
  document.getElementById("modal-team-name").innerText = displayTeamName;
  document.getElementById("modal-team-flag").setAttribute("src", flagUrl || getFlagFallback(teamName));
  document.getElementById("player-search").value = "";

  activeRoster = getFullSquad(teamId, teamName);

  if (activeRoster.length === 0) {
    const noDataMsg = translations[state.lang].noSquadData;
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
  
  const dict = translations[state.lang];
  const isExpanded = drawer.classList.toggle("expanded");
  
  btn.innerHTML = `${isExpanded ? "▲" : "▼"} ${isExpanded ? dict.lineupHide : dict.lineupShow}`;
  
  if (isExpanded && drawer.innerHTML === "") {
    const homeSquad = getFullSquad(homeId, homeName);
    const awaySquad = getFullSquad(awayId, awayName);

    const noDataMsg = dict.noSquadDataShort;
    const startingTitle = dict.startingXI;
    const subsTitle = dict.substitutes;

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

  const dict = translations[state.lang];
  const posLabels = {
    GK: dict.goalkeepers,
    DEF: dict.defenders,
    MID: dict.midfielders,
    FWD: dict.forwards
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
    if (player.pos === "GK") posLabel = dict.posGK;
    if (player.pos === "DEF") posLabel = dict.posDEF;
    if (player.pos === "MID") posLabel = dict.posMID;
    if (player.pos === "FWD") posLabel = dict.posFWD;

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
    const noMatch = translations[state.lang].noMatchFound;
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
      const lineupBtnText = translations[state.lang].lineupShow;
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
function buildLangDropdown() {
  const dropdown = document.getElementById("lang-dropdown");
  dropdown.innerHTML = "";
  supportedLangs.forEach(lang => {
    const btn = document.createElement("button");
    btn.setAttribute("data-lang", lang);
    btn.innerHTML = `<span>${langFlags[lang]}</span> <span>${langLabels[lang]}</span>`;
    if (lang === state.lang) btn.classList.add("active-lang");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.lang = lang;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ lang: state.lang });
      } else {
        localStorage.setItem("wc_lang", state.lang);
      }
      updateLanguageUI();
      renderAll();
      dropdown.classList.remove("open");
    });
    dropdown.appendChild(btn);
  });
}

function updateLanguageUI() {
  const dict = translations[state.lang];
  
  // RTL support
  if (state.lang === "ar" || state.lang === "fa") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  // Header
  document.getElementById("header-title").innerText = dict.title;
  document.getElementById("lang-btn").innerHTML = `🌐 ${langFlags[state.lang] || ""} ${state.lang.toUpperCase()}`;
  
  // Update active state in dropdown
  document.querySelectorAll(".lang-dropdown button").forEach(btn => {
    btn.classList.toggle("active-lang", btn.getAttribute("data-lang") === state.lang);
  });
  
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
