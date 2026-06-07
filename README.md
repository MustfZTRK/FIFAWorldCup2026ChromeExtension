<p align="center">
  <img src="https://i.ibb.co/0y0JGYj5/4a68fc249453407-Y3-Jvc-Cwx-Nj-Aw-LDEy-NTEs-MCwz-OQ.png" alt="FIFA World Cup 2026 Logo" width="100"/>
</p>

<h1 align="center">⚽ FIFA World Cup 2026 — Chrome Extension</h1>

<p align="center">
  Live scores, fixtures, standings, bracket, squad details & more for the FIFA World Cup 2026.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome&logoColor=white" alt="Chrome Extension"/>
  <img src="https://img.shields.io/badge/Manifest-V3-green" alt="Manifest V3"/>
  <img src="https://img.shields.io/badge/Version-1.0-orange" alt="Version 1.0"/>
  <img src="https://img.shields.io/badge/Language-TR%20%7C%20EN-lightgrey" alt="Languages"/>
</p>

---
<a href="https://ibb.co/7Jbws4mj"><img src="https://i.ibb.co/HDXW5d8B/Ekran-g-r-nt-s-2026-06-07-215631.png" alt="Ekran görüntüsü 2026 06 07 215631" border="0"></a>
<a href="https://ibb.co/pYTzc8G"><img src="https://i.ibb.co/Ncqj5PQ/Ekran-g-r-nt-s-2026-06-07-215636.png" alt="Ekran görüntüsü 2026 06 07 215636" border="0"></a>
## 🇬🇧 English

### About

A lightweight Chrome Extension that brings the FIFA World Cup 2026 right into your browser. Track live matches, view fixtures by date, check group standings with full stats, explore the knockout bracket, and browse team squads — all in a sleek dark-themed popup.

### Features

- **Live Matches** — Real-time score updates with minute-by-minute tracking
- **Fixtures** — Browse all 104 matches by date, today's games, or knockout rounds
- **Match Search** — Instantly search fixtures by team name
- **Standings** — Full group tables with W/D/L, GF/GA/GD, and points
- **Bracket** — Visual knockout bracket from Round of 32 to Final
- **Squad Details** — View player rosters with position filters (GK/DEF/MID/FWD)
- **Stadium Info** — Venue details on every match card
- **Scorers** — Goal scorer display on completed/live matches
- **Bilingual** — Turkish 🇹🇷 & English 🇬🇧 language toggle
- **Auto Refresh** — Data refreshes every 2 minutes
- **Offline Support** — Full fallback data (48 teams, 12 groups, 104 matches, 16 stadiums)
- **Dark Theme** — Glass morphism design with gold accents

### Installation

#### Option 1 — Clone & Load (Developer)

```bash
git clone https://github.com/MustfZTRK/FIFAWorldCup2026ChromeExtension.git
```

1. Open **Google Chrome** and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the cloned `World-Cup-Ext` folder
5. The extension icon appears in your toolbar — click to open!

#### Option 2 — Install from Release

1. Download the latest `.zip` or `.rar` from [Releases](https://github.com/MustfZTRK/FIFAWorldCup2026ChromeExtension/releases)
2. Extract the archive to a permanent folder
3. Open `chrome://extensions/` → Enable **Developer mode**
4. Click **Load unpacked** → Select the extracted folder

> **Note:** After installation, the extension auto-fetches data from the API. An offline fallback is built-in for unreliable connections.

### Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| UI       | HTML5, CSS3 (Glass Morphism)      |
| Logic    | Vanilla JavaScript (ES6+)         |
| Storage  | Chrome Storage API                |
| API      | `https://worldcup26.ir/get/*`     |
| Platform | Chrome Extension (Manifest V3)    |

### API Endpoints

| Endpoint             | Description         | Items  |
| -------------------- | ------------------- | ------ |
| `GET /get/games`     | All matches         | 104    |
| `GET /get/teams`     | All teams           | 48     |
| `GET /get/groups`    | Group standings     | 12     |
| `GET /get/stadiums`  | Stadium information | 16     |

---

## 🇹🇷 Türkçe

### Hakkında

FIFA Dünya Kupası 2026'yı tarayıcınıza taşıyan hafif bir Chrome Eklentisi. Canlı maçları takip edin, fikstürleri tarihe göre görüntüleyin, grup puan durumlarını tam istatistiklerle inceleyin, eleme eşleşmelerini keşfedin ve takım kadrolarını görüntüleyin — hepsi şık bir karanlık temalı popup'ta.

### Özellikler

- **Canlı Maçlar** — Dakika dakika skor güncellemeleri
- **Fikstürler** — 104 maçı tarihe göre, bugünkü maçlar veya eleme turlarına göre listeleme
- **Maç Arama** — Takım adına göre anında arama
- **Puan Durumu** — G/M/B, AT/YEN/AV ve puan ile tam grup tabloları
- **Eşleşmeler** — Son 32'den finale kadar görsel eleme turnuva ağacı
- **Kadro Bilgisi** — Pozisyona göre (KL/DEF/ORT/HÜC) oyuncu listeleri
- **Stadyum Bilgisi** — Her maç kartında mekan detayları
- **Golcüler** — Bitmiş/Canlı maçlarda gol atan oyuncular
- **İki Dilli** — Türkçe 🇹🇷 & İngilizce 🇬🇧 dil seçeneği
- **Otomatik Yenileme** — Veriler her 2 dakikada bir güncellenir
- **Çevrimdışı Desteği** — Tam yedek veri (48 takım, 12 grup, 104 maç, 16 stadyum)
- **Karanlık Tema** - Cam efektli tasarım, altın vurgular

### Kurulum

#### Seçenek 1 — Klonla ve Yükle (Geliştirici)

```bash
git clone https://github.com/MustfZTRK/FIFAWorldCup2026ChromeExtension.git
```

1. **Google Chrome**'u açın ve `chrome://extensions/` adresine gidin
2. **Geliştirici modunu** etkinleştirin (sağ üst köşedeki açma/kapama)
3. **Paketlenmemiş yükle**'ye tıklayın
4. Klonlanan `World-Cup-Ext` klasörünü seçin
5. Eklenti simgesi araç çubuğunda görünür — tıklayarak açın!

#### Seçenek 2 — Sürümden Yükle

1. [Releases](https://github.com/MustfZTRK/FIFAWorldCup2026ChromeExtension/releases) sayfasından en son `.zip` veya `.rar` dosyasını indirin
2. Arşivi kalıcı bir klasöre çıkarın
3. `chrome://extensions/` → **Geliştirici modunu** etkinleştirin
4. **Paketlenmemiş yükle** → Çıkarılan klasörü seçin

> **Not:** Kurulumdan sonra eklenti otomatik olarak API'den veri çeker. Güvenilir olmayan bağlantılar için çevrimdışı yedek veri dahildir.

### Teknoloji

| Katman | Teknoloji                          |
| ------ | ---------------------------------- |
| UI     | HTML5, CSS3 (Cam Efekti)          |
| Mantık | Vanilla JavaScript (ES6+)          |
| Depo   | Chrome Storage API                 |
| API    | `https://worldcup26.ir/get/*`      |
| Platform | Chrome Eklentisi (Manifest V3)   |

### API Endpoint'leri

| Endpoint             | Açıklama         | Adet  |
| -------------------- | ---------------- | ----- |
| `GET /get/games`     | Tüm maçlar       | 104   |
| `GET /get/teams`     | Tüm takımlar     | 48    |
| `GET /get/groups`    | Grup puan durumu | 12    |
| `GET /get/stadiums`  | Stadyum bilgisi  | 16    |

---

## ☕ Donate / Bağış

If you find this extension useful, consider supporting development!

Bu eklentiyi faydalı buluyorsanız, geliştirmeyi desteklemeyi düşünün!

| Network                     | Address                                      |
| --------------------------- | -------------------------------------------- |
| **BTC** — Bitcoin           | `14dfjBNLMznPGUA9JCHi8eGWH2tZq23pjJ`        |
| **ETC** — Ethereum Classic  | `0xef7ba89cd02d05dbc71948d34ecc3b3375b108bb` |
| **BNB** — BNB Smart Chain (BEP20) | `0xef7ba89cd02d05dbc71948d34ecc3b3375b108bb` |

---

## 📁 Project Structure

```
World-Cup-Ext/
├── manifest.json          # Chrome Extension manifest (V3)
├── popup.html             # Extension popup UI
├── popup.js               # Application logic (1500+ lines)
├── popup.css              # Styles (glass morphism, dark theme)
├── icon16.png             # Extension icon (16x16)
├── icon48.png             # Extension icon (48x48)
├── icon128.png            # Extension icon (128x128)
```

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

<p align="center">
  Made for football fans worldwide
</p>
