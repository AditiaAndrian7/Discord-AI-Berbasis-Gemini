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

## 🔧 **Instalasi & Setup - LANGKAH DEMI LANGKAH**

### **📌 LANGKAH 1: Clone/Download Repository**

**Pilih salah satu cara:**

**Cara 1: Clone (jika pakai Git):**
```bash
git clone [url-repository-kamu]
cd nama-folder-bot
```

**Cara 2: Download ZIP:**
1. Klik tombol "Code" di GitHub
2. Pilih "Download ZIP"
3. Ekstrak file ZIP ke folder yang diinginkan
4. Buka terminal di folder tersebut

---

### **📌 LANGKAH 2: Inisialisasi Project**

**Jalankan perintah ini di terminal:**
```bash
npm init -y
```

**Penjelasan:**
- `npm init -y` membuat file `package.json` secara otomatis
- File ini menyimpan informasi project dan dependencies

---

### **📌 LANGKAH 3: Install Dependencies**

**Jalankan semua perintah ini satu per satu di terminal:**

**1. Install discord.js:**
```bash
npm install discord.js
```

**2. Install Google Generative AI:**
```bash
npm install @google/generative-ai
```

**3. Install dotenv:**
```bash
npm install dotenv
```

**Atau install semua sekaligus:**
```bash
npm install discord.js @google/generative-ai dotenv
```

**Verifikasi instalasi:**
```bash
npm list discord.js @google/generative-ai dotenv
```

---

### **📌 LANGKAH 4: Setup Bot Discord**

**Step-by-step:**

1. **Buka [Discord Developer Portal](https://discord.com/developers/applications)**
2. **Login dengan akun Discord kamu**
3. **Klik "New Application"**
4. **Beri nama bot (contoh: "Gemini-AI-Bot") → Klik "Create"**

5. **Pilih menu "Bot" di sidebar kiri**
6. **Klik "Reset Token" → "Yes, do it!"**
7. **SALIN token yang muncul (ini DISCORD_TOKEN kamu)**

   **⚠️ PENTING:** Token seperti password, jangan pernah dibagikan!

8. **Aktifkan Privileged Gateway Intents:**
   - ✅ PRESENCE INTENT
   - ✅ SERVER MEMBERS INTENT
   - ✅ MESSAGE CONTENT INTENT

---

### **📌 LANGKAH 5: Dapatkan API Key Gemini AI**

1. **Buka [Google AI Studio](https://makersuite.google.com/app/apikey)**
2. **Login dengan akun Google kamu**
3. **Klik "Get API Key" → "Create API Key"**
4. **Pilih "Create API key in new project"**
5. **SALIN API Key yang diberikan (ini GEMINI_API_KEY kamu)**

---

### **📌 LANGKAH 6: Buat & Konfigurasi File .env**

**Buat file `.env` di folder project:**

**Cara 1: Lewat terminal (direkomendasikan):**
```bash
# Buat file .env
touch .env

# Edit file .env dengan nano (Linux/Mac)
nano .env

# Atau dengan notepad (Windows)
notepad .env
```

**Cara 2: Manual:**
1. Buka text editor (VS Code, Notepad++, Sublime, dll)
2. Buat file baru
3. Simpan sebagai `.env` di folder project

**Isi file `.env` dengan format berikut:**
```env
# DISCORD BOT TOKEN (Dapatkan dari Discord Developer Portal)
DISCORD_TOKEN=Ambil_dari_bot_token_discord

# GEMINI API KEY (Dapatkan dari Google AI Studio)
GEMINI_API_KEY=Ganti_Jadi_Apikey_dari_gemini
```

**Contoh isi file `.env` yang benar:**
```env
DISCORD_TOKEN=MTE5ODU4Nz111111111111222222331234234124
GEMINI_API_KEY=AIzaSyB12342343245123456789abcdefghijklmnopqrstuvwxyz
```

---

### **📌 LANGKAH 7: Struktur Project**

**Setelah semua langkah, struktur folder kamu harus seperti ini:**
```
gemini-discord-bot/
├── 📁 node_modules/           # Folder dependencies (terbentuk otomatis)
├── 📄 index.js                # File utama bot
├── 📄 package.json            # Informasi project
├── 📄 package-lock.json       # Lock file dependencies
├── 📄 .env                    # File konfigurasi (RAHASIA!)
└── 📄 README.md               # File panduan ini
```

**Cek struktur dengan:**
```bash
# Linux/Mac
ls -la

# Windows
dir
```

---

### **📌 LANGKAH 8: Jalankan Bot**

**Pastikan kamu berada di folder project yang benar, lalu jalankan:**
```bash
node index.js
```

**Atau jika menggunakan file JavaScript lain:**
```bash
node namafile.js
```

**Jika berhasil, akan muncul pesan:**
```
✅ Bot Discord berhasil login sebagai [Nama-Bot-Kamu]
🤖 Gemini AI siap digunakan!
```

---

## ✅ **Checklist Final Sebelum Run**

- [ ] `npm init -y` ✓
- [ ] `npm install discord.js` ✓
- [ ] `npm install @google/generative-ai` ✓
- [ ] `npm install dotenv` ✓
- [ ] File `.env` sudah dibuat ✓
- [ ] DISCORD_TOKEN diisi ✓
- [ ] GEMINI_API_KEY diisi ✓
- [ ] Bot diinvite ke server ✓
- [ ] File `index.js` ada ✓
- [ ] Terminal di folder project ✓

---

## 🎉 **SELAMAT! KAMU SIAP JALANKAN BOT!**

**Jalankan dengan perintah:**
```bash
node index.js
```

---

**⭐ Support project ini dengan kasih star di repository!**  
**🐛 Laporkan bug di Issues section**  
**💬 Tanya jawab di Discussions**

---

### **Status Badge**
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue)
![Node.js](https://img.shields.io/badge/Node.js-≥16.9.0-green)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-yellow)

---

**Bot siap menemani server Discord kamu! 🚀**

