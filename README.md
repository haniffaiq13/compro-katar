# Website Profil Karang Taruna

Website profil Karang Taruna lengkap dengan halaman berita dan dashboard admin. Menggunakan React + Vite dengan localStorage sebagai mock backend.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Seed data awal
npm run seed

# Jalankan development server
npm run dev
```

Buka http://localhost:5173 untuk melihat website.

## 🔑 Dummy Admin Credentials

- Email: `admin@karangtaruna.local`
- Password: `Kontrol123!`

Dashboard admin: http://localhost:5173/admin

## 📁 Struktur Proyek

```
src/
├── components/          # Komponen reusable
│   ├── Layout.tsx      # Layout utama
│   ├── Header.tsx      # Header navigasi
│   ├── Footer.tsx      # Footer
│   ├── NewsCard.tsx    # Card artikel berita
│   └── admin/          # Komponen admin
├── pages/              # Halaman-halaman utama
│   ├── Home.tsx        # Beranda
│   ├── News.tsx        # Daftar berita
│   ├── NewsDetail.tsx  # Detail berita
│   ├── Contact.tsx     # Kontak & struktur
│   └── admin/          # Halaman admin
├── services/           # Service layer
│   ├── localPostService.ts  # Mock API posts
│   └── authService.ts       # Autentikasi
├── types/              # TypeScript definitions
├── data/               # Data seed
└── utils/              # Utilities
```

## 🗄️ Penyimpanan Data

Data disimpan di **localStorage** browser dengan key:
- `kt_posts`: Daftar artikel/berita
- `kt_auth`: Info sesi admin

## 📝 Fitur

### Halaman Publik
- ✅ Beranda (profil, visi/misi, kegiatan)
- ✅ Halaman berita dengan pagination
- ✅ Detail artikel lengkap
- ✅ Kontak dan struktur organisasi
- ✅ Responsive design

### Dashboard Admin
- ✅ Login dengan dummy credentials
- ✅ CRUD artikel (Create, Read, Update, Delete)
- ✅ Editor artikel dengan preview
- ✅ Status publish/draft
- ✅ Filter dan pagination
- ✅ Upload gambar (base64)

## 🔄 Export/Import Data

### Export Data
```javascript
// Di console browser
const data = localStorage.getItem('kt_posts');
console.log('Copy JSON ini:', data);
```

### Import Data
```javascript
// Di console browser
const jsonData = '...'; // paste JSON data
localStorage.setItem('kt_posts', jsonData);
location.reload();
```

### Reset Data
```javascript
// Di console browser
localStorage.removeItem('kt_posts');
localStorage.removeItem('kt_auth');
location.reload();
```

## 🛡️ Keamanan

⚠️ **PERINGATAN**: Autentikasi hanya di sisi klien untuk demo/development. **JANGAN gunakan untuk produksi** tanpa implementasi backend dan keamanan yang proper.

## 🧪 Testing Checklist

- [ ] `npm install` berhasil
- [ ] `npm run dev` menjalankan server
- [ ] Halaman beranda muncul
- [ ] Halaman berita menampilkan 5 artikel seed
- [ ] Bisa buka detail artikel
- [ ] Login admin dengan credentials dummy
- [ ] Bisa membuat artikel baru
- [ ] Artikel baru muncul di halaman publik setelah publish
- [ ] Bisa edit dan delete artikel
- [ ] Data persist setelah reload
- [ ] Export/import data berfungsi

## 🎨 Konten Sample

Website sudah include 5 artikel sample:
1. "Gotong Royong Bersih-Bersih Lingkungan RW 05"
2. "Pelatihan Keterampilan Digital untuk Pemuda"
3. "Turnamen Futsal Karang Taruna Se-Kelurahan"
4. "Bakti Sosial Ramadhan 1446 H"
5. "Workshop Kewirausahaan Pemuda Kreatif"

## 🔧 Commands

- `npm run dev` - Development server
- `npm run build` - Build produksi
- `npm run preview` - Preview build
- `npm run seed` - Seed data awal

## 📞 Support

Untuk pertanyaan teknis, cek kode di folder `src/` atau buka issue di repository.