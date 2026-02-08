# Gemini AI Discord Bot 🤖

> Bot Discord cerdas yang ditenagai oleh Gemini AI. Siap membantu berbagai keperluan, dari obrolan santai hingga bantuan tugas, cocok untuk temani server Discord kamu!  
> Panduan lengkap dengan langkah-langkah detail untuk semua kalangan, dari pemula hingga yang sudah berpengalaman.

---

## 🚀 **Fitur Utama**

- 💬 **Chat Interaktif**: Ngobrol dengan AI dalam channel Discord
- 🧠 **Pemrosesan Cerdas**: Memahami konteks percakapan
- 📚 **Bantuan Tugas**: Membantu dengan berbagai topik pembelajaran
- 🎮 **Fitur Server**: Tambahkan kecerdasan buatan ke komunitas kamu
- ⚡ **Responsif**: Respon cepat dan akurat

---

## 📋 **Prasyarat**

Sebelum memulai, pastikan kamu memiliki:

### **Persiapan Wajib:**
- ✅ **Node.js** versi 16.9.0 atau lebih tinggi
- ✅ **Akun Discord** yang aktif
- ✅ **Akun Google** untuk Gemini AI
- ✅ **Koneksi internet** yang stabil

---

## 🔧 **Instalasi & Setup**

### **Step 1: Persiapan Awal**

1. **Clone/Download Repository**
   ```bash
   git clone [url-repository-kamu]
   cd nama-folder-bot
   ```

2. **Verifikasi Node.js**
   ```bash
   node --version
   ```
   Pastikan versi Node.js ≥ 16.9.0

### **Step 2: Setup Bot Discord**

1. **Buka [Discord Developer Portal](https://discord.com/developers/applications)**
2. **Klik "New Application" → Beri nama bot kamu**
3. **Pilih "Bot" di menu sidebar**
4. **Klik "Reset Token" dan salin tokennya**
5. **Aktifkan Privileged Gateway Intents:**
   - ✅ PRESENCE INTENT
   - ✅ SERVER MEMBERS INTENT
   - ✅ MESSAGE CONTENT INTENT

### **Step 3: Dapatkan API Key Gemini AI**

1. **Kunjungi [Google AI Studio](https://makersuite.google.com/app/apikey)**
2. **Login dengan akun Google kamu**
3. **Klik "Create API Key"**
4. **Salin API Key yang diberikan**

### **Step 4: Konfigurasi File Environment**

1. **Buat file `.env` di root folder:**
   ```bash
   touch .env
   ```

2. **Edit file `.env` dengan konten berikut:**
   ```env
   # ====================================
   # DISCORD BOT CONFIGURATION
   # ====================================
   DISCORD_TOKEN=your_discord_bot_token_here
   
   # ====================================
   # GEMINI AI CONFIGURATION
   # ====================================
   API_KEY=your_gemini_api_key_here
   
   # ====================================
   # BOT SETTINGS
   # ====================================
   PREFIX=!
   MAX_HISTORY=10
   ENABLE_LOGGING=true
   ```

### **Step 5: Install Dependencies**

**Jalankan perintah berikut di terminal:**
```bash
npm install discord.js @google/generative-ai dotenv
```

### **Step 6: Struktur File Project**
```
gemini-discord-bot/
├── 📁 node_modules/
├── 📄 index.js          # File utama bot
├── 📄 .env             # File konfigurasi (rahasia!)
├── 📄 package.json     # Dependencies
├── 📄 package-lock.json
└── 📄 README.md        # Panduan ini
```

---

## ⚙️ **Menjalankan Bot**

### **Mode Development:**
```bash
node index.js
```

### **Mode Production (Dengan Restart Otomatis):**
1. **Install nodemon:**
   ```bash
   npm install -g nodemon
   ```
   
2. **Jalankan dengan:**
   ```bash
   nodemon index.js
   ```

---

## 🔐 **Keamanan & Best Practices**

### **⚠️ PENTING: Jangan pernah share:**
- **Token Bot Discord** (DISCORD_TOKEN)
- **API Key Gemini AI** (API_KEY)
- **File `.env`** ke publik

### **Tips Keamanan:**
1. **Gunakan file `.gitignore`** untuk file sensitif:
   ```gitignore
   .env
   node_modules/
   *.log
   ```

2. **Setup GitHub Secrets** jika deploy ke cloud

---

## 🛠 **Troubleshooting**

### **Masalah Umum & Solusi:**

| Masalah | Penyebab | Solusi |
|---------|----------|---------|
| Bot tidak online | Token salah | Periksa ulang token di `.env` |
| AI tidak merespon | API Key invalid | Generate API Key baru |
| Error module | Node.js versi lama | Update Node.js ke versi terbaru |
| Permission denied | Intents tidak aktif | Aktifkan semua intents di Developer Portal |

### **Cek Koneksi:**
```bash
# Cek apakah dependencies terinstall
npm list discord.js @google/generative-ai

# Cek versi Node.js
node --version

# Cek file .env
cat .env | head -2
```

---

## 📚 **Penggunaan Bot**

### **Perintah Dasar:**
```
!chat [pesan]      - Chat dengan AI
!help              - Tampilkan bantuan
!ping              - Cek status bot
!clear             - Bersihkan riwayat chat
```

### **Contoh Penggunaan:**
```
User: !help
Bot: 🎯 **Perintah yang tersedia:** ...

User: !chat Apa itu JavaScript?
Bot: 🤖 JavaScript adalah bahasa pemrograman...
```

---

## 🔄 **Update & Maintenance**

### **Update Dependencies:**
```bash
npm update
```

### **Backup Configuration:**
```bash
# Backup file .env
cp .env .env.backup
```

---

## 🤝 **Kontribusi**

Ingin berkontribusi? Silakan:
1. Fork repository
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Tambahkan fitur'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

---

## 📝 **Lisensi**

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail.

---

## 🙏 **Dukungan & Bantuan**

### **Jika mengalami kesulitan:**
1. **Cek bagian Troubleshooting** di atas
2. **Buka Issue** di repository
3. **Hubungi developer** melalui kontak yang tersedia

### **Referensi Berguna:**
- [Discord.js Documentation](https://discord.js.org/)
- [Google Gemini AI Docs](https://ai.google.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

## ✨ **Credits**

Dibuat dengan ❤️ menggunakan:
- [Discord.js](https://discord.js.org/)
- [Google Gemini AI](https://gemini.google.com/)
- [Node.js](https://nodejs.org/)

---

**⭐ Jangan lupa kasih bintang jika project ini membantu!**  
**🐛 Laporkan bug di Issues section**

---

### **Status Badge**
![Discord](https://img.shields.io/badge/Discord-Bot_Online-success)
![Node.js](https://img.shields.io/badge/Node.js-≥16.9.0-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

**Selamat menggunakan bot! 🎉**  
*Bot siap menemani server Discord kamu dengan kecerdasan buatan terbaru!*
