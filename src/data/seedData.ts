import type { Post } from '../types';

export const seedPosts: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: "Gotong Royong Bersih-Bersih Lingkungan RW 05",
    slug: "gotong-royong-bersih-bersih-lingkungan-rw-05",
    content: `
      <p>Karang Taruna RW 05 melaksanakan aksi bersih-bersih lingkungan pada Sabtu, 10 September 2025. Kegiatan ini diikuti oleh 35 pemuda dan pemudi dari berbagai RT di wilayah RW 05.</p>
      
      <p>Aksi gotong royong dimulai pukul 07.00 WIB dengan pembersihan selokan, pengecatan pos ronda, dan penataan taman RT. "Lingkungan bersih adalah tanggung jawab kita bersama," ujar Andi Pratama, Ketua Karang Taruna RW 05.</p>
      
      <p>Kegiatan ini mendapat apresiasi tinggi dari warga sekitar dan RT/RW setempat. Direncanakan akan diadakan rutin setiap bulan untuk menjaga kebersihan dan keindahan lingkungan.</p>
      
      <p>Selain gotong royong, juga dilakukan penanaman pohon di area kosong sebagai upaya penghijauan. Total 15 bibit pohon buah-buahan ditanam di sepanjang jalan utama RW.</p>
    `,
    excerpt: "Karang Taruna RW 05 melaksanakan aksi bersih-bersih di lingkungan pada 10 September 2025. Diikuti 35 pemuda pemudi dengan kegiatan pembersihan selokan dan penataan taman.",
    author: "Admin Karang Taruna",
    publishedAt: "2025-09-10T07:00:00Z",
    status: "published"
  },
  {
    title: "Pelatihan Keterampilan Digital untuk Pemuda",
    slug: "pelatihan-keterampilan-digital-untuk-pemuda",
    content: `
      <p>Karang Taruna menyelenggarakan pelatihan keterampilan digital selama 3 hari, 15-17 September 2025. Program ini bertujuan meningkatkan kemampuan pemuda dalam bidang teknologi informasi.</p>
      
      <p>Materi pelatihan meliputi dasar-dasar komputer, penggunaan internet yang produktif, media sosial untuk bisnis, dan pengenalan aplikasi desain grafis. Pelatihan diikuti oleh 25 peserta dari berbagai kalangan.</p>
      
      <p>"Kami ingin pemuda di sini tidak ketinggalan dengan perkembangan teknologi," kata Sari Dewi, coordinator pelatihan. "Keterampilan digital sangat penting untuk masa depan mereka."</p>
      
      <p>Pelatihan dilaksanakan di Balai RW dengan menghadirkan instruktur berpengalaman dari komunitas IT lokal. Peserta mendapat sertifikat dan materi pembelajaran lengkap.</p>
    `,
    excerpt: "Pelatihan keterampilan digital 3 hari untuk 25 pemuda. Materi meliputi komputer dasar, internet produktif, media sosial bisnis, dan desain grafis.",
    author: "Sari Dewi",
    publishedAt: "2025-09-15T10:00:00Z",
    status: "published"
  },
  {
    title: "Turnamen Futsal Karang Taruna Se-Kelurahan",
    slug: "turnamen-futsal-karang-taruna-se-kelurahan",
    content: `
      <p>Turnamen Futsal Karang Taruna se-Kelurahan akan digelar pada 22-24 September 2025 di lapangan futsal Graha Sport. Event ini diikuti oleh 16 tim dari seluruh RW di kelurahan.</p>
      
      <p>Turnamen dibuka langsung oleh Bapak Lurah dengan menendang bola pertama. "Olahraga adalah cara terbaik mempererat persaudaraan antar pemuda," ungkap Lurah dalam sambutannya.</p>
      
      <p>Sistem pertandingan menggunakan grup dan eliminasi. Pemenang juara 1, 2, dan 3 akan mendapat trophy dan hadiah uang pembinaan masing-masing Rp 2.000.000, Rp 1.500.000, dan Rp 1.000.000.</p>
      
      <p>Selain kompetisi, juga ada doorprize menarik untuk penonton dan stan makanan dari UMKM setempat. Acara ini diharapkan dapat meningkatkan sportivitas dan kekompakan antar Karang Taruna.</p>
    `,
    excerpt: "Turnamen Futsal se-Kelurahan 22-24 September 2025. Diikuti 16 tim dengan total hadiah jutaan rupiah dan doorprize untuk penonton.",
    author: "Budi Santoso",
    publishedAt: "2025-09-20T14:30:00Z",
    status: "published"
  },
  {
    title: "Bakti Sosial Ramadhan 1446 H",
    slug: "bakti-sosial-ramadhan-1446-h",
    content: `
      <p>Menyambut bulan suci Ramadhan 1446 H, Karang Taruna menggelar program bakti sosial untuk keluarga kurang mampu di lingkungan sekitar. Kegiatan ini berlangsung setiap weekend selama bulan Ramadhan.</p>
      
      <p>Program meliputi pembagian sembako, takjil gratis, dan santunan untuk anak yatim. Total 150 paket sembako dan 200 porsi takjil dibagikan setiap minggunya.</p>
      
      <p>"Berbagi adalah bagian dari nilai-nilai yang kami junjung tinggi," kata Fatimah, bendahara Karang Taruna. "Ramadhan adalah momentum tepat untuk lebih peduli sesama."</p>
      
      <p>Dana kegiatan diperoleh dari swadaya anggota, donasi warga, dan kerja sama dengan pengusaha lokal. Antusiasme warga sangat tinggi dalam mendukung program ini.</p>
      
      <p>Ke depan, program serupa akan terus dilanjutkan tidak hanya saat Ramadhan, tetapi juga pada momen-momen penting lainnya sebagai wujud kepedulian sosial.</p>
    `,
    excerpt: "Program bakti sosial Ramadhan dengan pembagian 150 paket sembako dan 200 porsi takjil setiap weekend. Termasuk santunan anak yatim.",
    author: "Fatimah",
    publishedAt: "2025-09-05T16:00:00Z",
    status: "published"
  },
  {
    title: "Workshop Kewirausahaan Pemuda Kreatif",
    slug: "workshop-kewirausahaan-pemuda-kreatif",
    content: `
      <p>Workshop kewirausahaan untuk pemuda kreatif diselenggarakan pada 28-30 September 2025. Event ini menghadirkan praktisi bisnis sukses dan mentor berpengalaman dari berbagai bidang usaha.</p>
      
      <p>Materi workshop mencakup ide bisnis kreatif, perencanaan usaha, pemasaran digital, manajemen keuangan sederhana, dan legalitas usaha. Peserta juga mendapat kesempatan pitch ide bisnis.</p>
      
      <p>"Kami ingin melahirkan entrepreneur-entrepreneur muda yang inovatif," ungkap Dedi Kurniawan, pembicara utama yang juga pemilik startup teknologi lokal.</p>
      
      <p>3 ide bisnis terbaik akan mendapat modal awal masing-masing Rp 5.000.000 dan mentoring lanjutan selama 6 bulan. Workshop ini diikuti 40 peserta dengan background beragam.</p>
      
      <p>Diharapkan dari kegiatan ini lahir unit-unit usaha baru yang dapat menyerap tenaga kerja dan menggerakkan ekonomi lokal di tingkat RT/RW.</p>
    `,
    excerpt: "Workshop kewirausahaan 3 hari dengan mentor bisnis sukses. 3 ide terbaik dapat modal Rp 5 juta dan mentoring 6 bulan.",
    author: "Dedi Kurniawan",
    publishedAt: "2025-09-25T09:00:00Z",
    status: "published"
  }
];