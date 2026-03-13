const TelegramBot = require('node-telegram-bot-api');
const { ulkeler, tarihiDevletler, kitalar } = require('./veri.js');

const token = process.env.TELEGRAM_BOT_TOKEN || '8611477746:AAGHPbbHakAjj5TWEwNpTDbkq5B5YcH3wrI';
const bot = new TelegramBot(token, { polling: true });

// Kullanıcı oyun durumları
const oyunDurumlari = new Map();

// Yardımcı fonksiyonlar
function rasgeleUlkeSec(ulkeListesi) {
    return ulkeListesi[Math.floor(Math.random() * ulkeListesi.length)];
}

function skor(chatId, puan = 0) {
    const durum = oyunDurumlari.get(chatId) || { puan: 0 };
    durum.puan += puan;
    oyunDurumlari.set(chatId, durum);
    return durum.puan;
}

// Komutlar
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const hosgeldinMesaji = `
🎌 *Bayrak Tahmin Oyununa Hoş Geldiniz!* 🌍

Oyunun amacı gösterilen bayrağın hangi ülkeye ait olduğunu tahmin etmek.

*Komutlar:*
/oyna - Güncel ülkeler ile oyna
/kitalar - Kıtalara göre oyna
/tarih - Tarihsel devletler ile oyna
/skor - Puanını gör
/yardim - Yardım menüsü

Haydi başlayalım! 🚀
    `;
    
    bot.sendMessage(chatId, hosgeldinMesaji, { parse_mode: 'Markdown' });
});

bot.onText(/\/oyna/, (msg) => {
    const chatId = msg.chat.id;
    yeniSoru(chatId, ulkeler);
});

bot.onText(/\/kitalar/, (msg) => {
    const chatId = msg.chat.id;
    
    const klavye = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🇪🇺 Avrupa', callback_data: 'kita_avrupa' },
                    { text: '🇨🇳 Asya', callback_data: 'kita_asya' }
                ],
                [
                    { text: '🇺🇸 Kuzey Amerika', callback_data: 'kita_kuzey_amerika' },
                    { text: '🇧🇷 Güney Amerika', callback_data: 'kita_guney_amerika' }
                ],
                [
                    { text: '🇿🇦 Afrika', callback_data: 'kita_afrika' },
                    { text: '🇦🇺 Avustralya', callback_data: 'kita_avustralya' }
                ],
                [
                    { text: '🧊 Antarktika', callback_data: 'kita_antarktika' }
                ],
                [
                    { text: '🌍 Tüm Kıtalar', callback_data: 'kita_tumu' }
                ]
            ]
        }
    };
    
    bot.sendMessage(chatId, '🗺️ Hangi kıtadan oynamak istersiniz?', klavye);
});

bot.onText(/\/tarih/, (msg) => {
    const chatId = msg.chat.id;
    
    const klavye = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🎮 Oyna', callback_data: 'tarih_oyna' },
                    { text: '📚 Kütüphane', callback_data: 'tarih_kutuphane' }
                ]
            ]
        }
    };
    
    bot.sendMessage(chatId, '⏳ Tarihsel devletler ile ne yapmak istersiniz?', klavye);
});

bot.onText(/\/skor/, (msg) => {
    const chatId = msg.chat.id;
    const mevcutSkor = skor(chatId);
    bot.sendMessage(chatId, `🏆 Toplam Puanınız: ${mevcutSkor}`);
});

bot.onText(/\/yardim/, (msg) => {
    const chatId = msg.chat.id;
    const yardimMesaji = `
📖 *Nasıl Oynanır?*

1️⃣ Bir bayrak gösterilir
2️⃣ 4 seçenek sunulur
3️⃣ Doğru cevabı seçin
4️⃣ Her doğru cevap 10 puan!

*Mod Seçenekleri:*
• Normal Mod: Tüm güncel ülkeler
• Kıta Modu: Belirli bir kıtadan
• Tarih Modu: Tarihi devletler

*İpucu:*
Tarih kütüphanesinde devletler hakkında detaylı bilgi bulabilirsiniz!

İyi eğlenceler! 🎉
    `;
    
    bot.sendMessage(chatId, yardimMesaji, { parse_mode: 'Markdown' });
});

// Callback query handler
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;
    
    if (data.startsWith('kita_')) {
        const kitaAdi = data.replace('kita_', '');
        
        if (kitaAdi === 'tumu') {
            yeniSoru(chatId, ulkeler);
        } else {
            const kitaUlkeleri = kitalar[kitaAdi] || [];
            if (kitaUlkeleri.length === 0) {
                bot.sendMessage(chatId, '❌ Bu kıtada oynanabilir ülke bulunamadı.');
            } else {
                yeniSoru(chatId, kitaUlkeleri);
            }
        }
        bot.answerCallbackQuery(query.id);
    }
    
    if (data === 'tarih_oyna') {
        yeniSoru(chatId, tarihiDevletler, true);
        bot.answerCallbackQuery(query.id);
    }
    
    if (data === 'tarih_kutuphane') {
        tarihKutuphanesi(chatId);
        bot.answerCallbackQuery(query.id);
    }
    
    if (data.startsWith('cevap_')) {
        const cevapIndex = parseInt(data.replace('cevap_', ''));
        cevapKontrol(chatId, cevapIndex, query.id);
    }
    
    if (data.startsWith('devlet_')) {
        const devletIndex = parseInt(data.replace('devlet_', ''));
        devletDetay(chatId, devletIndex);
        bot.answerCallbackQuery(query.id);
    }
});

function yeniSoru(chatId, ulkeListesi, tarihModu = false) {
    const dogruUlke = rasgeleUlkeSec(ulkeListesi);
    const yanlisCevaplar = [];
    
    while (yanlisCevaplar.length < 3) {
        const rasgele = rasgeleUlkeSec(ulkeListesi);
        if (rasgele.isim !== dogruUlke.isim && !yanlisCevaplar.includes(rasgele)) {
            yanlisCevaplar.push(rasgele);
        }
    }
    
    const tumCevaplar = [dogruUlke, ...yanlisCevaplar];
    tumCevaplar.sort(() => Math.random() - 0.5);
    
    const dogruIndex = tumCevaplar.findIndex(u => u.isim === dogruUlke.isim);
    
    oyunDurumlari.set(chatId, {
        ...oyunDurumlari.get(chatId),
        dogruCevap: dogruIndex,
        mevcutUlke: dogruUlke
    });
    
    const klavye = {
        reply_markup: {
            inline_keyboard: tumCevaplar.map((ulke, index) => [
                { text: ulke.isim, callback_data: `cevap_${index}` }
            ])
        }
    };
    
    const baslik = tarihModu ? '⏳ Bu hangi tarihsel devletin bayrağı?' : '🎌 Bu hangi ülkenin bayrağı?';
    
    bot.sendMessage(chatId, `${baslik}\n\n${dogruUlke.bayrak}`, klavye);
}

function cevapKontrol(chatId, cevapIndex, queryId) {
    const durum = oyunDurumlari.get(chatId);
    
    if (!durum || durum.dogruCevap === undefined) {
        bot.answerCallbackQuery(queryId, { text: '❌ Önce bir oyun başlatın!' });
        return;
    }
    
    const dogru = cevapIndex === durum.dogruCevap;
    
    if (dogru) {
        const yeniSkor = skor(chatId, 10);
        bot.answerCallbackQuery(queryId, { text: '✅ Doğru! +10 puan' });
        
        let mesaj = `🎉 *Doğru!*\n\n${durum.mevcutUlke.bayrak} ${durum.mevcutUlke.isim}\n\n`;
        
        if (durum.mevcutUlke.baskent) {
            mesaj += `🏛️ Başkent: ${durum.mevcutUlke.baskent}\n`;
        }
        if (durum.mevcutUlke.yil) {
            mesaj += `📅 ${durum.mevcutUlke.yil}\n`;
        }
        if (durum.mevcutUlke.hukumdar) {
            mesaj += `👑 Hükümdar: ${durum.mevcutUlke.hukumdar}\n`;
        }
        
        mesaj += `\n🏆 Toplam Puan: ${yeniSkor}`;
        
        const devamKlavye = {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '▶️ Devam Et', callback_data: 'devam' },
                        { text: '🏁 Bitir', callback_data: 'bitir' }
                    ]
                ]
            }
        };
        
        bot.sendMessage(chatId, mesaj, { parse_mode: 'Markdown', ...devamKlavye });
    } else {
        bot.answerCallbackQuery(queryId, { text: '❌ Yanlış!' });
        bot.sendMessage(chatId, `❌ Yanlış!\n\nDoğru cevap: ${durum.mevcutUlke.bayrak} ${durum.mevcutUlke.isim}`);
    }
}

function tarihKutuphanesi(chatId, sayfa = 0) {
    const sayfaBasina = 10;
    const baslangic = sayfa * sayfaBasina;
    const bitis = baslangic + sayfaBasina;
    const sayfaDevletler = tarihiDevletler.slice(baslangic, bitis);
    
    const klavye = {
        reply_markup: {
            inline_keyboard: sayfaDevletler.map((devlet, index) => [
                { text: `${devlet.bayrak || '🏴'} ${devlet.isim}`, callback_data: `devlet_${baslangic + index}` }
            ])
        }
    };
    
    if (tarihiDevletler.length > bitis) {
        klavye.reply_markup.inline_keyboard.push([
            { text: '▶️ Sonraki Sayfa', callback_data: `sayfa_${sayfa + 1}` }
        ]);
    }
    
    if (sayfa > 0) {
        klavye.reply_markup.inline_keyboard.push([
            { text: '◀️ Önceki Sayfa', callback_data: `sayfa_${sayfa - 1}` }
        ]);
    }
    
    bot.sendMessage(chatId, '📚 *Tarihsel Devletler Kütüphanesi*\n\nBir devlet seçin:', 
        { parse_mode: 'Markdown', ...klavye });
}

function devletDetay(chatId, devletIndex) {
    const devlet = tarihiDevletler[devletIndex];
    
    if (!devlet) {
        bot.sendMessage(chatId, '❌ Devlet bulunamadı.');
        return;
    }
    
    let mesaj = `${devlet.bayrak || '🏴'} *${devlet.isim}*\n\n`;
    
    if (devlet.yil) {
        mesaj += `📅 Dönem: ${devlet.yil}\n`;
    }
    if (devlet.baskent) {
        mesaj += `🏛️ Başkent: ${devlet.baskent}\n`;
    }
    if (devlet.hukumdar) {
        mesaj += `👑 Önemli Hükümdar: ${devlet.hukumdar}\n`;
    }
    if (devlet.bilgi) {
        mesaj += `\n📖 ${devlet.bilgi}`;
    }
    
    bot.sendMessage(chatId, mesaj, { parse_mode: 'Markdown' });
}

// Devam/Bitir callback'leri
bot.on('callback_query', (query) => {
    if (query.data === 'devam') {
        const chatId = query.message.chat.id;
        const durum = oyunDurumlari.get(chatId);
        
        // Son oyunun tipine göre devam et
        if (durum && durum.mevcutUlke) {
            // Eğer tarihsel devletse tekrar tarih modu
            if (tarihiDevletler.some(d => d.isim === durum.mevcutUlke.isim)) {
                yeniSoru(chatId, tarihiDevletler, true);
            } else {
                yeniSoru(chatId, ulkeler);
            }
        } else {
            yeniSoru(chatId, ulkeler);
        }
        bot.answerCallbackQuery(query.id);
    }
    
    if (query.data === 'bitir') {
        const chatId = query.message.chat.id;
        const mevcutSkor = skor(chatId);
        bot.sendMessage(chatId, `🏁 Oyun bitti!\n\n🏆 Final Puanınız: ${mevcutSkor}\n\nTekrar oynamak için /oyna yazın!`);
        bot.answerCallbackQuery(query.id);
    }
    
    if (query.data.startsWith('sayfa_')) {
        const sayfa = parseInt(query.data.replace('sayfa_', ''));
        tarihKutuphanesi(query.message.chat.id, sayfa);
        bot.answerCallbackQuery(query.id);
    }
});

console.log('🤖 Bot başlatıldı...');
