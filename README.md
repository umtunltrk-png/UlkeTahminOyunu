# 🎌 Telegram Bayrak Tahmin Oyunu

Telegram üzerinde çalışan, kıtalara göre ve tarihsel devletler içeren interaktif bir bayrak tahmin oyunu.

## ✨ Özellikler

### 🎮 Oyun Modları
- **Normal Mod**: Tüm güncel ülkelerle oyna
- **Kıta Modu**: Belirli bir kıtadan ülkelerle oyna
  - 🇪🇺 Avrupa
  - 🇨🇳 Asya
  - 🇺🇸 Kuzey Amerika
  - 🇧🇷 Güney Amerika
  - 🇿🇦 Afrika
  - 🇦🇺 Avustralya
  - 🧊 Antarktika
- **Tarih Modu**: Tarihte var olmuş devletlerle oyna

### 📚 Tarihsel Devletler Kütüphanesi
- 35+ tarihsel devlet bilgisi
- Her devlet için:
  - Bayrak emojisi
  - Dönem bilgisi
  - Başkent bilgisi
  - Önemli hükümdarlar
  - Detaylı açıklama

### 🏆 Puan Sistemi
- Her doğru cevap 10 puan
- Toplam puan takibi
- Sürekli gelişim

## 🚀 Kurulum

### 1. Gereksinimler
```bash
# Node.js 14 veya üzeri gereklidir
node --version
```

### 2. Bağımlılıkları Yükle
```bash
npm install
```

### 3. Telegram Bot Token'ı Al
1. Telegram'da [@BotFather](https://t.me/botfather) ile konuşun
2. `/newbot` komutunu kullanarak yeni bot oluşturun
3. Bot adı ve kullanıcı adı belirleyin
4. Aldığınız token'ı kopyalayın

### 4. Token'ı Ayarla

**Yöntem 1: Environment Variable (Önerilen)**
```bash
# Linux/Mac
export TELEGRAM_BOT_TOKEN="your_bot_token_here"

# Windows (CMD)
set TELEGRAM_BOT_TOKEN=your_bot_token_here

# Windows (PowerShell)
$env:TELEGRAM_BOT_TOKEN="your_bot_token_here"
```

**Yöntem 2: Doğrudan Kod İçinde**
`bot.js` dosyasında:
```javascript
const token = 'YOUR_BOT_TOKEN_HERE';
```

### 5. Botu Başlat
```bash
npm start
```

veya geliştirme modu için:
```bash
npm run dev
```

## 📱 Kullanım

### Ana Komutlar
- `/start` - Botu başlat ve hoş geldin mesajını gör
- `/oyna` - Tüm ülkelerle oyna
- `/kitalar` - Kıta seçerek oyna
- `/tarih` - Tarihsel devletler ile oyna veya kütüphaneye eriş
- `/skor` - Mevcut puanını gör
- `/yardim` - Yardım menüsü

### Oyun Akışı
1. Bir bayrak emoji gösterilir
2. 4 seçenekten doğru olanı seçin
3. Doğru cevap verirseniz +10 puan kazanın
4. Devam edin veya bitirin

### Kıta Modu
- Kıta seçimi yapın
- O kıtadaki ülkelerle oynayın
- İstediğiniz zaman farklı kıtaya geçin

### Tarih Modu
**Oyun Modu:**
- Tarihsel devlet bayraklarını tahmin edin
- Osmanlı, Roma, Bizans gibi büyük imparatorluklar

**Kütüphane Modu:**
- 35+ tarihsel devlet bilgisine eriş
- Her devlet hakkında detaylı bilgi
- Hükümdarlar ve önemli olaylar

## 🌐 GitHub Pages'de Yayınlama

### index.html Oluşturma
Proje klasöründe bir `index.html` dosyası oluşturun:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bayrak Tahmin Oyunu - Telegram Bot</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        h1 {
            color: #667eea;
            text-align: center;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        
        .emoji {
            text-align: center;
            font-size: 80px;
            margin: 20px 0;
        }
        
        .description {
            text-align: center;
            color: #666;
            line-height: 1.6;
            margin: 20px 0;
        }
        
        .features {
            margin: 30px 0;
        }
        
        .feature {
            background: #f8f9fa;
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }
        
        .feature h3 {
            color: #667eea;
            margin-bottom: 5px;
        }
        
        .cta-button {
            display: block;
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 10px;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 30px;
            transition: transform 0.2s;
        }
        
        .cta-button:hover {
            transform: scale(1.05);
        }
        
        .github-link {
            text-align: center;
            margin-top: 20px;
        }
        
        .github-link a {
            color: #667eea;
            text-decoration: none;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 2em;
            }
            
            .emoji {
                font-size: 60px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎌 Bayrak Tahmin Oyunu</h1>
        <div class="emoji">🌍🎮🏆</div>
        
        <p class="description">
            Telegram üzerinde çalışan, interaktif bayrak tahmin oyunu! 
            Güncel ülkeler, kıtalara göre oyun modları ve 35+ tarihsel devlet bilgisi ile dolu.
        </p>
        
        <div class="features">
            <div class="feature">
                <h3>🗺️ Kıta Modu</h3>
                <p>Avrupa, Asya, Amerika, Afrika, Avustralya - istediğiniz kıtadan oynayın!</p>
            </div>
            
            <div class="feature">
                <h3>⏳ Tarih Modu</h3>
                <p>Osmanlı, Roma, Bizans gibi tarihsel devletlerin bayraklarını tahmin edin!</p>
            </div>
            
            <div class="feature">
                <h3>📚 Kütüphane</h3>
                <p>Tarihsel devletler hakkında detaylı bilgi, hükümdarlar ve önemli olaylar.</p>
            </div>
            
            <div class="feature">
                <h3>🏆 Puan Sistemi</h3>
                <p>Her doğru cevap 10 puan! Puanınızı artırın ve kendinize meydan okuyun.</p>
            </div>
        </div>
        
        <a href="https://t.me/YOUR_BOT_USERNAME" class="cta-button" target="_blank">
            🚀 Telegram'da Oyna
        </a>
        
        <div class="github-link">
            <a href="https://github.com/YOUR_USERNAME/YOUR_REPO" target="_blank">
                📦 GitHub'da İncele
            </a>
        </div>
    </div>
</body>
</html>
```

### GitHub Pages Kurulumu

1. **GitHub Repository Oluşturun**
   ```bash
   git init
   git add .
   git commit -m "İlk commit - Bayrak Tahmin Oyunu"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

2. **GitHub Pages'i Aktif Edin**
   - GitHub repo sayfanıza gidin
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: main > / (root)
   - Save butonuna tıklayın

3. **index.html'i Güncelleyin**
   - `YOUR_BOT_USERNAME` kısmını bot kullanıcı adınızla değiştirin
   - `YOUR_USERNAME/YOUR_REPO` kısmını GitHub bilgilerinizle değiştirin

4. **Siteye Eriş**
   - 2-3 dakika sonra siteniz hazır olacak
   - URL: `https://USERNAME.github.io/REPO_NAME/`

## 🗂️ Dosya Yapısı

```
bayrak-tahmin-bot/
│
├── bot.js              # Ana bot mantığı
├── veri.js             # Ülkeler ve tarihsel devletler verisi
├── package.json        # Proje bağımlılıkları
├── index.html          # GitHub Pages landing page (opsiyonel)
└── README.md           # Bu dosya
```

## 📊 Veri İçeriği

### Güncel Ülkeler
- 60+ güncel ülke
- 7 kıta kategorisi
- Başkent bilgileri

### Tarihsel Devletler
- 35+ tarihsel devlet
- Osmanlı İmparatorluğu
- Roma İmparatorluğu
- Bizans İmparatorluğu
- Moğol İmparatorluğu
- Selçuklular
- İnka, Aztek
- Ve daha fazlası...

## 🔧 Geliştirme

### Yeni Ülke Eklemek
`veri.js` dosyasında `ulkeler` dizisine yeni obje ekleyin:
```javascript
{
    isim: 'Ülke Adı',
    bayrak: '🏴',
    kita: 'kita_adi',
    baskent: 'Başkent'
}
```

### Yeni Tarihsel Devlet Eklemek
`veri.js` dosyasında `tarihiDevletler` dizisine ekleyin:
```javascript
{
    isim: 'Devlet Adı',
    bayrak: '🏴',
    yil: '1000-2000',
    baskent: 'Başkent',
    hukumdar: 'Hükümdar Adı',
    bilgi: 'Detaylı bilgi...'
}
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request açın

## 📝 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!

## 🐛 Sorun Bildirme

Bir sorunla karşılaşırsanız GitHub Issues kullanarak bildirebilirsiniz.

## 💡 Gelecek Özellikler

- [ ] Liderlik tablosu
- [ ] Çok oyunculu mod
- [ ] Zaman sınırlı mod
- [ ] Daha fazla tarihsel devlet
- [ ] Ses efektleri
- [ ] Haftalık turnuvalar

---

**İyi Eğlenceler! 🎉**
