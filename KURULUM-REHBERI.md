# 🚀 HIZLI BAŞLANGIÇ REHBERİ

## 📋 ÖNEMLİ NOTLAR

### Gizli Dosyaları Ayarlama

İndirdiğiniz dosyalar arasında `gitignore.txt` ve `env-example.txt` var.
Bunları aşağıdaki gibi yeniden adlandırmanız gerekiyor:

1. **gitignore.txt** → **.gitignore** (başına nokta ekleyin)
2. **env-example.txt** → **.env.example** (başına nokta ekleyin)

### Windows'ta Noktalı Dosya Oluşturma
Windows'ta dosya ismi sadece nokta ile başlayamaz. İki yöntem:

**Yöntem 1 - Komut Satırı:**
```cmd
ren gitignore.txt .gitignore
ren env-example.txt .env.example
```

**Yöntem 2 - VS Code veya Kod Editörü:**
- Dosyayı editörde açın
- "Save As" / "Farklı Kaydet" 
- İsmi `.gitignore` olarak girin (tırnak ile birlikte)

## 🎯 ADIM ADIM KURULUM

### 1. Telegram Bot Oluşturma
1. Telegram'da [@BotFather](https://t.me/botfather) açın
2. `/newbot` yazın
3. Bot için bir isim verin (örn: "Bayrak Oyunu")
4. Kullanıcı adı verin (örn: "bayrak_oyun_bot")
5. Token'ı kopyalayın (örn: 123456789:ABCdef...)

### 2. Proje Kurulumu
```bash
# 1. Proje klasörüne gidin
cd bayrak-tahmin-bot

# 2. Bağımlılıkları yükleyin
npm install

# 3. Token'ı ayarlayın (Aşağıdaki yöntemlerden birini seçin)
```

### 3. Token Ayarlama (3 Yöntem)

**YÖNTEM A - Environment Variable (Linux/Mac):**
```bash
export TELEGRAM_BOT_TOKEN="1234567890:ABCdefGHIjklMNOpqrsTUVwxyz"
npm start
```

**YÖNTEM B - Environment Variable (Windows CMD):**
```cmd
set TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
npm start
```

**YÖNTEM C - Direkt Kod İçinde:**
`bot.js` dosyasını açın ve 3. satırı bulun:
```javascript
// ÖNCE:
const token = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';

// SONRA (kendi token'ınızla):
const token = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz';
```

### 4. Botu Başlatma
```bash
npm start
```

Başarılı olursa görmelisiniz:
```
🤖 Bot başlatıldı...
```

### 5. Telegram'da Test
1. Telegram'da botunuzu bulun (@your_bot_username)
2. `/start` yazın
3. Oyun menüsü açılmalı!

## 🌐 GITHUB PAGES YAYINLAMA

### 1. GitHub Repository Oluştur
```bash
git init
git add .
git commit -m "İlk commit - Bayrak Tahmin Oyunu"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

### 2. GitHub Pages Aktif Et
1. GitHub repository sayfanıza gidin
2. **Settings** → **Pages**
3. **Source**: "Deploy from a branch"
4. **Branch**: "main" seçin, klasör "/" (root)
5. **Save** butonuna tıklayın

### 3. index.html Düzenle
`index.html` dosyasını açın ve değiştirin:

**Satır 194:**
```html
<!-- ÖNCE: -->
<a href="https://t.me/YOUR_BOT_USERNAME" class="cta-button">

<!-- SONRA: -->
<a href="https://t.me/bayrak_oyun_bot" class="cta-button">
```

**Satır 219:**
```html
<!-- ÖNCE: -->
<a href="https://github.com/YOUR_USERNAME/YOUR_REPO" class="github-button">

<!-- SONRA: -->
<a href="https://github.com/sizin_kullanici_adi/bayrak-bot" class="github-button">
```

### 4. Değişiklikleri Yükle
```bash
git add index.html
git commit -m "Bot linklerini güncelle"
git push
```

### 5. Sitenizi Görün
2-3 dakika sonra:
```
https://KULLANICI_ADI.github.io/REPO_ADI/
```

## 🐛 SORUN GİDERME

### "Cannot find module 'node-telegram-bot-api'"
```bash
npm install
```

### "Unauthorized" veya "404 Not Found"
- Token'ı doğru kopyaladığınızdan emin olun
- BotFather'dan yeni token alın: `/token`

### "ECONNREFUSED" hatası
- İnternet bağlantınızı kontrol edin
- Firewall'un Node.js'i engellemediğinden emin olun

### Bot cevap vermiyor
- Botu `/start` ile başlatın
- Bot çalışıyor mu kontrol edin (terminal'de hata var mı?)
- BotFather'dan `/mybots` ile botunuzu kontrol edin

## 📚 KOMUTLAR

Kullanıcılar için:
- `/start` - Botu başlat
- `/oyna` - Normal modda oyna
- `/kitalar` - Kıta seçerek oyna
- `/tarih` - Tarihsel devletlerle oyna
- `/skor` - Puanını gör
- `/yardim` - Yardım menüsü

## 🎨 ÖZELLEŞTİRME

### Yeni Ülke Eklemek
`veri.js` dosyasında `ulkeler` dizisine:
```javascript
{ isim: 'Ülke Adı', bayrak: '🏴', kita: 'avrupa', baskent: 'Başkent' }
```

### Yeni Tarihsel Devlet Eklemek
`veri.js` dosyasında `tarihiDevletler` dizisine:
```javascript
{
    isim: 'Devlet Adı',
    bayrak: '🏴',
    yil: '1000-2000',
    baskent: 'Başkent',
    hukumdar: 'Hükümdar',
    bilgi: 'Açıklama'
}
```

## 💡 İPUÇLARI

1. **Geliştirme Modu**: `npm run dev` (otomatik yeniden başlatma)
2. **Logları Görüntüle**: Terminal/CMD'de çalışırken tüm aktiviteyi görürsünüz
3. **Güvenlik**: Asla token'ınızı GitHub'a yüklemeyin (.gitignore dosyası bunu engeller)
4. **Test**: Önce kendiniz test edin, sonra paylaşın

## 📞 YARDIM

Sorun yaşarsanız:
1. README.md dosyasını okuyun
2. Terminal'deki hata mesajlarını kontrol edin
3. GitHub Issues'da sorun bildirin

---

**Başarılar! 🎉**
İyi eğlenceler!
