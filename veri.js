// Güncel ülkeler
const ulkeler = [
    // Avrupa
    { isim: 'Türkiye', bayrak: '🇹🇷', kita: 'avrupa', baskent: 'Ankara' },
    { isim: 'Almanya', bayrak: '🇩🇪', kita: 'avrupa', baskent: 'Berlin' },
    { isim: 'Fransa', bayrak: '🇫🇷', kita: 'avrupa', baskent: 'Paris' },
    { isim: 'İtalya', bayrak: '🇮🇹', kita: 'avrupa', baskent: 'Roma' },
    { isim: 'İspanya', bayrak: '🇪🇸', kita: 'avrupa', baskent: 'Madrid' },
    { isim: 'Birleşik Krallık', bayrak: '🇬🇧', kita: 'avrupa', baskent: 'Londra' },
    { isim: 'Hollanda', bayrak: '🇳🇱', kita: 'avrupa', baskent: 'Amsterdam' },
    { isim: 'Belçika', bayrak: '🇧🇪', kita: 'avrupa', baskent: 'Brüksel' },
    { isim: 'İsviçre', bayrak: '🇨🇭', kita: 'avrupa', baskent: 'Bern' },
    { isim: 'Avusturya', bayrak: '🇦🇹', kita: 'avrupa', baskent: 'Viyana' },
    { isim: 'Yunanistan', bayrak: '🇬🇷', kita: 'avrupa', baskent: 'Atina' },
    { isim: 'Portekiz', bayrak: '🇵🇹', kita: 'avrupa', baskent: 'Lizbon' },
    { isim: 'İsveç', bayrak: '🇸🇪', kita: 'avrupa', baskent: 'Stockholm' },
    { isim: 'Norveç', bayrak: '🇳🇴', kita: 'avrupa', baskent: 'Oslo' },
    { isim: 'Danimarka', bayrak: '🇩🇰', kita: 'avrupa', baskent: 'Kopenhag' },
    { isim: 'Finlandiya', bayrak: '🇫🇮', kita: 'avrupa', baskent: 'Helsinki' },
    { isim: 'Polonya', bayrak: '🇵🇱', kita: 'avrupa', baskent: 'Varşova' },
    { isim: 'Çekya', bayrak: '🇨🇿', kita: 'avrupa', baskent: 'Prag' },
    { isim: 'Macaristan', bayrak: '🇭🇺', kita: 'avrupa', baskent: 'Budapeşte' },
    { isim: 'Romanya', bayrak: '🇷🇴', kita: 'avrupa', baskent: 'Bükreş' },
    { isim: 'Bulgaristan', bayrak: '🇧🇬', kita: 'avrupa', baskent: 'Sofya' },
    { isim: 'Ukrayna', bayrak: '🇺🇦', kita: 'avrupa', baskent: 'Kiev' },
    { isim: 'İrlanda', bayrak: '🇮🇪', kita: 'avrupa', baskent: 'Dublin' },
    { isim: 'İzlanda', bayrak: '🇮🇸', kita: 'avrupa', baskent: 'Reykjavik' },
    
    // Asya
    { isim: 'Çin', bayrak: '🇨🇳', kita: 'asya', baskent: 'Pekin' },
    { isim: 'Japonya', bayrak: '🇯🇵', kita: 'asya', baskent: 'Tokyo' },
    { isim: 'Güney Kore', bayrak: '🇰🇷', kita: 'asya', baskent: 'Seul' },
    { isim: 'Hindistan', bayrak: '🇮🇳', kita: 'asya', baskent: 'Yeni Delhi' },
    { isim: 'Endonezya', bayrak: '🇮🇩', kita: 'asya', baskent: 'Jakarta' },
    { isim: 'Tayland', bayrak: '🇹🇭', kita: 'asya', baskent: 'Bangkok' },
    { isim: 'Vietnam', bayrak: '🇻🇳', kita: 'asya', baskent: 'Hanoi' },
    { isim: 'Malezya', bayrak: '🇲🇾', kita: 'asya', baskent: 'Kuala Lumpur' },
    { isim: 'Singapur', bayrak: '🇸🇬', kita: 'asya', baskent: 'Singapur' },
    { isim: 'Filipinler', bayrak: '🇵🇭', kita: 'asya', baskent: 'Manila' },
    { isim: 'Pakistan', bayrak: '🇵🇰', kita: 'asya', baskent: 'İslamabad' },
    { isim: 'Bangladeş', bayrak: '🇧🇩', kita: 'asya', baskent: 'Dakka' },
    { isim: 'Suudi Arabistan', bayrak: '🇸🇦', kita: 'asya', baskent: 'Riyad' },
    { isim: 'Birleşik Arap Emirlikleri', bayrak: '🇦🇪', kita: 'asya', baskent: 'Abu Dabi' },
    { isim: 'İran', bayrak: '🇮🇷', kita: 'asya', baskent: 'Tahran' },
    { isim: 'Irak', bayrak: '🇮🇶', kita: 'asya', baskent: 'Bağdat' },
    { isim: 'İsrail', bayrak: '🇮🇱', kita: 'asya', baskent: 'Tel Aviv' },
    { isim: 'Azerbaycan', bayrak: '🇦🇿', kita: 'asya', baskent: 'Bakü' },
    { isim: 'Kazakistan', bayrak: '🇰🇿', kita: 'asya', baskent: 'Nur-Sultan' },
    { isim: 'Özbekistan', bayrak: '🇺🇿', kita: 'asya', baskent: 'Taşkent' },
    
    // Kuzey Amerika
    { isim: 'Amerika Birleşik Devletleri', bayrak: '🇺🇸', kita: 'kuzey_amerika', baskent: 'Washington D.C.' },
    { isim: 'Kanada', bayrak: '🇨🇦', kita: 'kuzey_amerika', baskent: 'Ottawa' },
    { isim: 'Meksika', bayrak: '🇲🇽', kita: 'kuzey_amerika', baskent: 'Mexico City' },
    { isim: 'Küba', bayrak: '🇨🇺', kita: 'kuzey_amerika', baskent: 'Havana' },
    { isim: 'Jamaika', bayrak: '🇯🇲', kita: 'kuzey_amerika', baskent: 'Kingston' },
    { isim: 'Panama', bayrak: '🇵🇦', kita: 'kuzey_amerika', baskent: 'Panama City' },
    { isim: 'Kosta Rika', bayrak: '🇨🇷', kita: 'kuzey_amerika', baskent: 'San José' },
    
    // Güney Amerika
    { isim: 'Brezilya', bayrak: '🇧🇷', kita: 'guney_amerika', baskent: 'Brasília' },
    { isim: 'Arjantin', bayrak: '🇦🇷', kita: 'guney_amerika', baskent: 'Buenos Aires' },
    { isim: 'Şili', bayrak: '🇨🇱', kita: 'guney_amerika', baskent: 'Santiago' },
    { isim: 'Kolombiya', bayrak: '🇨🇴', kita: 'guney_amerika', baskent: 'Bogota' },
    { isim: 'Peru', bayrak: '🇵🇪', kita: 'guney_amerika', baskent: 'Lima' },
    { isim: 'Venezuela', bayrak: '🇻🇪', kita: 'guney_amerika', baskent: 'Caracas' },
    { isim: 'Ekvador', bayrak: '🇪🇨', kita: 'guney_amerika', baskent: 'Quito' },
    { isim: 'Uruguay', bayrak: '🇺🇾', kita: 'guney_amerika', baskent: 'Montevideo' },
    
    // Afrika
    { isim: 'Güney Afrika', bayrak: '🇿🇦', kita: 'afrika', baskent: 'Pretoria' },
    { isim: 'Mısır', bayrak: '🇪🇬', kita: 'afrika', baskent: 'Kahire' },
    { isim: 'Nijerya', bayrak: '🇳🇬', kita: 'afrika', baskent: 'Abuja' },
    { isim: 'Kenya', bayrak: '🇰🇪', kita: 'afrika', baskent: 'Nairobi' },
    { isim: 'Etiyopya', bayrak: '🇪🇹', kita: 'afrika', baskent: 'Addis Ababa' },
    { isim: 'Fas', bayrak: '🇲🇦', kita: 'afrika', baskent: 'Rabat' },
    { isim: 'Cezayir', bayrak: '🇩🇿', kita: 'afrika', baskent: 'Cezayir' },
    { isim: 'Tunus', bayrak: '🇹🇳', kita: 'afrika', baskent: 'Tunus' },
    { isim: 'Gana', bayrak: '🇬🇭', kita: 'afrika', baskent: 'Accra' },
    { isim: 'Senegal', bayrak: '🇸🇳', kita: 'afrika', baskent: 'Dakar' },
    
    // Avustralya ve Okyanusya
    { isim: 'Avustralya', bayrak: '🇦🇺', kita: 'avustralya', baskent: 'Canberra' },
    { isim: 'Yeni Zelanda', bayrak: '🇳🇿', kita: 'avustralya', baskent: 'Wellington' },
    { isim: 'Fiji', bayrak: '🇫🇯', kita: 'avustralya', baskent: 'Suva' },
];

// Tarihsel devletler
const tarihiDevletler = [
    {
        isim: 'Osmanlı İmparatorluğu',
        bayrak: '🏴',
        yil: '1299-1922',
        baskent: 'İstanbul (Konstantinopolis)',
        hukumdar: 'Kanuni Sultan Süleyman, Fatih Sultan Mehmet',
        bilgi: 'Üç kıtaya yayılan, 600 yılı aşkın süre varlığını sürdüren güçlü bir imparatorluk. En parlak dönemi Kanuni Sultan Süleyman zamanında yaşandı.'
    },
    {
        isim: 'Roma İmparatorluğu',
        bayrak: '🏛️',
        yil: 'MÖ 27 - MS 476',
        baskent: 'Roma',
        hukumdar: 'Augustus, Traianus, Marcus Aurelius',
        bilgi: 'Antik çağın en büyük imparatorluklarından biri. Akdeniz havzasının tamamına ve Avrupa\'nın büyük bir kısmına hakim oldu.'
    },
    {
        isim: 'Bizans İmparatorluğu',
        bayrak: '⛪',
        yil: '395-1453',
        baskent: 'Konstantinopolis (İstanbul)',
        hukumdar: 'Iustinianus I, XI. Konstantinos',
        bilgi: 'Roma İmparatorluğu\'nun doğu yarısının devamı. 1000 yılı aşkın süre varlığını korudu. 1453\'te Fatih Sultan Mehmet tarafından fethedildi.'
    },
    {
        isim: 'Moğol İmparatorluğu',
        bayrak: '🐎',
        yil: '1206-1368',
        baskent: 'Karakurum',
        hukumdar: 'Cengiz Han, Kubilay Han',
        bilgi: 'Tarihin en büyük kara imparatorluğu. Asya\'nın büyük bir kısmını ve Doğu Avrupa\'yı ele geçirdi.'
    },
    {
        isim: 'Eski Mısır',
        bayrak: '𓂀',
        yil: 'MÖ 3100 - MÖ 30',
        baskent: 'Memphis, Thebes',
        hukumdar: 'Tutankamon, II. Ramses, Kleopatra',
        bilgi: '3000 yılı aşkın süre varlığını koruyan antik uygarlık. Piramitler ve firavunlar ile ünlüdür.'
    },
    {
        isim: 'Büyük Selçuklu İmparatorluğu',
        bayrak: '☪️',
        yil: '1037-1194',
        baskent: 'Rey, İsfahan',
        hukumdar: 'Alparslan, Melikşah',
        bilgi: 'Orta Asya\'dan Anadolu\'ya uzanan büyük Türk-İslam devleti. Malazgirt Zaferi ile Anadolu\'nun Türkleşmesinin önünü açtı.'
    },
    {
        isim: 'Anadolu Selçuklu Devleti',
        bayrak: '🕌',
        yil: '1077-1308',
        baskent: 'İznik, Konya',
        hukumdar: 'I. Alâeddin Keykubad, I. Kılıç Arslan',
        bilgi: 'Anadolu\'da kurulan Türk devleti. Osmanlı İmparatorluğu\'nun temelleri bu devletin topraklarında atıldı.'
    },
    {
        isim: 'Abbasi Devleti',
        bayrak: '🕋',
        yil: '750-1258',
        baskent: 'Bağdat',
        hukumdar: 'Harun Reşid, Memun',
        bilgi: 'İslam\'ın Altın Çağı olarak bilinen dönemde hüküm süren hilafet. Bilim, sanat ve edebiyatta büyük gelişmeler yaşandı.'
    },
    {
        isim: 'Emevi Devleti',
        bayrak: '🌙',
        yil: '661-750',
        baskent: 'Şam',
        hukumdar: 'Muaviye, Abdülmelik',
        bilgi: 'İlk büyük İslam hanedanı. İspanya\'dan Orta Asya\'ya kadar geniş topraklara hakim oldu.'
    },
    {
        isim: 'Pers İmparatorluğu',
        bayrak: '🦁',
        yil: 'MÖ 550 - MÖ 330',
        baskent: 'Persepolis',
        hukumdar: 'Büyük Kyros, Darius I',
        bilgi: 'Antik dünyanın en büyük imparatorluklarından. Hindistan\'dan Mısır\'a kadar uzanan topraklara sahipti.'
    },
    {
        isim: 'Asur İmparatorluğu',
        bayrak: '🦅',
        yil: 'MÖ 2500 - MÖ 609',
        baskent: 'Ninova, Aşur',
        hukumdar: 'Sargon II, Sanherib',
        bilgi: 'Mezopotamya\'da kurulan güçlü bir imparatorluk. Askeri gücü ve kütüphaneleriyle ünlüdür.'
    },
    {
        isim: 'İnka İmparatorluğu',
        bayrak: '🌞',
        yil: '1438-1533',
        baskent: 'Cusco',
        hukumdar: 'Pachacuti, Atahualpa',
        bilgi: 'Güney Amerika\'nın en büyük yerli imparatorluğu. Machu Picchu gibi muhteşem yapılar inşa etti.'
    },
    {
        isim: 'Aztek İmparatorluğu',
        bayrak: '🐍',
        yil: '1428-1521',
        baskent: 'Tenochtitlan',
        hukumdar: 'Montezuma II',
        bilgi: 'Meksika\'da kurulan güçlü Mezoamerikan imparatorluğu. İspanyol fatihler tarafından yıkıldı.'
    },
    {
        isim: 'Makedonya İmparatorluğu',
        bayrak: '⚔️',
        yil: 'MÖ 336 - MÖ 323',
        baskent: 'Pella',
        hukumdar: 'Büyük İskender',
        bilgi: 'Büyük İskender tarafından kurulan ve kısa sürede üç kıtaya yayılan imparatorluk.'
    },
    {
        isim: 'Hun İmparatorluğu',
        bayrak: '🏹',
        yil: '370-469',
        baskent: 'Göktürk',
        hukumdar: 'Attila',
        bilgi: 'Avrupa\'yı sarsan Türk kavmi. Attila\'nın önderliğinde Roma İmparatorluğu\'nu tehdit etti.'
    },
    {
        isim: 'Göktürk Devleti',
        bayrak: '🐺',
        yil: '552-745',
        baskent: 'Ötüken',
        hukumdar: 'Bumin Kağan, Bilge Kağan',
        bilgi: 'Türk tarihinin ilk büyük devletlerinden. Orta Asya\'da geniş bir alana hakim oldu.'
    },
    {
        isim: 'Uygur Devleti',
        bayrak: '🎭',
        yil: '744-840',
        baskent: 'Karabalgasun',
        hukumdar: 'Moyun Çor',
        bilgi: 'Göktürk\'lerden sonra Orta Asya\'ya hakim olan Türk devleti. Kültür ve sanatta gelişmiştir.'
    },
    {
        isim: 'Karahanlılar',
        bayrak: '📿',
        yil: '840-1212',
        baskent: 'Balasagun',
        hukumdar: 'Satuk Buğra Han',
        bilgi: 'İslam\'ı devlet dini olarak kabul eden ilk Türk devleti. Türk-İslam kültürünün gelişmesinde önemli rol oynadı.'
    },
    {
        isim: 'Gazneliler',
        bayrak: '⚜️',
        yil: '963-1187',
        baskent: 'Gazne',
        hukumdar: 'Mahmud Gazneli',
        bilgi: 'Hindistan\'a düzenlenen akınlarla ünlü Türk-İslam devleti. İlk Türkçe şiirler bu dönemde yazıldı.'
    },
    {
        isim: 'Timurlu Devleti',
        bayrak: '👑',
        yil: '1370-1507',
        baskent: 'Semerkand',
        hukumdar: 'Timur, Uluğ Bey',
        bilgi: 'Orta Asya ve İran\'da kurulan büyük imparatorluk. Bilim ve sanatta önemli gelişmeler yaşandı.'
    },
    {
        isim: 'Babür İmparatorluğu',
        bayrak: '🕌',
        yil: '1526-1857',
        baskent: 'Delhi, Agra',
        hukumdar: 'Babür Şah, Ekber Şah',
        bilgi: 'Hindistan\'da Türk-Moğol kökenli hanedanın kurduğu imparatorluk. Tac Mahal bu dönemde inşa edildi.'
    },
    {
        isim: 'Kutsal Roma Germen İmparatorluğu',
        bayrak: '👑',
        yil: '962-1806',
        baskent: 'Aachen, Viyana',
        hukumdar: 'I. Otto, V. Karl',
        bilgi: 'Orta Çağ Avrupa\'sının en önemli siyasi yapılarından. Almanya ve İtalya\'yı içeriyordu.'
    },
    {
        isim: 'Habsburg İmparatorluğu',
        bayrak: '🦅',
        yil: '1273-1918',
        baskent: 'Viyana',
        hukumdar: 'Franz Joseph, Maria Theresa',
        bilgi: 'Avrupa\'nın en uzun ömürlü hanedanlarından. Avusturya-Macaristan İmparatorluğu\'nu yönetti.'
    },
    {
        isim: 'Rus Çarlığı',
        bayrak: '🇷🇺',
        yil: '1547-1917',
        baskent: 'Moskova, St. Petersburg',
        hukumdar: 'Korkunç İvan, I. Petro, II. Katerina',
        bilgi: 'Rusya\'nın çarlık dönemi. Avrupa\'nın en büyük gücü haline geldi.'
    },
    {
        isim: 'Prusya Krallığı',
        bayrak: '🦅',
        yil: '1701-1918',
        baskent: 'Berlin',
        hukumdar: 'Friedrich II (Büyük Friedrich)',
        bilgi: 'Almanya\'nın birleşmesinde önemli rol oynayan krallık. Askeri gücüyle tanınırdı.'
    },
    {
        isim: 'Britanya İmparatorluğu',
        bayrak: '🇬🇧',
        yil: '1583-1997',
        baskent: 'Londra',
        hukumdar: 'Kraliçe Victoria, Kral George V',
        bilgi: 'Tarihte "güneş batmayan imparatorluk". Dünyanın dörtte birini kontrol etti.'
    },
    {
        isim: 'Fransız İmparatorluğu',
        bayrak: '🇫🇷',
        yil: '1804-1815, 1852-1870',
        baskent: 'Paris',
        hukumdar: 'Napolyon Bonaparte, III. Napolyon',
        bilgi: 'Napolyon\'un kurduğu imparatorluk. Avrupa\'nın büyük kısmını ele geçirdi.'
    },
    {
        isim: 'İspanyol İmparatorluğu',
        bayrak: '🇪🇸',
        yil: '1492-1976',
        baskent: 'Madrid',
        hukumdar: 'II. Felipe, Isabella',
        bilgi: 'Amerika kıtasında büyük koloniler kuran imparatorluk. Altın Çağı 16. yüzyılda yaşandı.'
    },
    {
        isim: 'Portekiz İmparatorluğu',
        bayrak: '🇵🇹',
        yil: '1415-1999',
        baskent: 'Lizbon',
        hukumdar: 'Manuel I, João II',
        bilgi: 'İlk küresel deniz imparatorluğu. Brezilya ve Afrika\'da koloniler kurdu.'
    },
    {
        isim: 'Memluk Sultanlığı',
        bayrak: '🗡️',
        yil: '1250-1517',
        baskent: 'Kahire',
        hukumdar: 'Baybars, Kutuz',
        bilgi: 'Mısır ve Suriye\'yi yöneten askeri devlet. Moğollara karşı başarılı savaşlar verdi.'
    },
    {
        isim: 'Safevi Devleti',
        bayrak: '🦁',
        yil: '1501-1736',
        baskent: 'Tebriz, İsfahan',
        hukumdar: 'Şah İsmail, Şah Abbas',
        bilgi: 'İran\'da kurulan Şii İslam devleti. Osmanlı\'nın doğu rakibiydi.'
    },
    {
        isim: 'Dulkadirliler',
        bayrak: '⚔️',
        yil: '1339-1522',
        baskent: 'Maraş, Elbistan',
        hukumdar: 'Alâüddevle Bozkurt Bey',
        bilgi: 'Anadolu\'da kurulan Türkmen beyliği. Osmanlı ve Memluklar arasında denge politikası izledi.'
    },
    {
        isim: 'Karamanoğulları',
        bayrak: '🏰',
        yil: '1250-1487',
        baskent: 'Konya, Larende',
        hukumdar: 'Mehmet Bey',
        bilgi: 'Anadolu\'nun en güçlü beylikleri arasındaydı. Türkçenin resmi dil olmasını sağladı.'
    },
    {
        isim: 'Akkoyunlu Devleti',
        bayrak: '🐏',
        yil: '1378-1508',
        baskent: 'Diyarbakır, Tebriz',
        hukumdar: 'Uzun Hasan',
        bilgi: 'Doğu Anadolu ve İran\'da kurulan Türkmen devleti. Osmanlı ile rekabet etti.'
    },
    {
        isim: 'Karakoyunlu Devleti',
        bayrak: '🐑',
        yil: '1375-1468',
        baskent: 'Van, Tebriz',
        hukumdar: 'Kara Yusuf',
        bilgi: 'Doğu Anadolu\'da kurulan Türkmen beyliği. Akkoyunlular tarafından yıkıldı.'
    }
];

// Kıtalara göre ülkeler
const kitalar = {
    avrupa: ulkeler.filter(u => u.kita === 'avrupa'),
    asya: ulkeler.filter(u => u.kita === 'asya'),
    kuzey_amerika: ulkeler.filter(u => u.kita === 'kuzey_amerika'),
    guney_amerika: ulkeler.filter(u => u.kita === 'guney_amerika'),
    afrika: ulkeler.filter(u => u.kita === 'afrika'),
    avustralya: ulkeler.filter(u => u.kita === 'avustralya'),
    antarktika: [] // Antarktika'da ülke yok ama menüde gösterilsin
};

module.exports = {
    ulkeler,
    tarihiDevletler,
    kitalar
};
