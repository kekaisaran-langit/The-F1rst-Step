# THE F1RST STEP — Website

Website statis bilingual (Indonesia/English), dibangun menggunakan HTML5, CSS3, dan Vanilla JavaScript.

## 1. Struktur

```text
the-f1rst-step/
├── index.html
├── README.md
├── assets/
├── images/
│   └── (letakkan og-cover.jpg di sini)
├── css/
│   └── style.css
└── js/
    ├── config.js
    └── main.js
```

## 2. Menjalankan

- Ekstrak folder project.
- Buka `index.html` di browser untuk preview.
- Untuk workflow yang lebih konsisten, jalankan folder melalui local development server (misalnya VS Code Live Server).
- Upload seluruh isi folder ke hosting static website saat siap dipublikasikan.

## 3. Konfigurasi wajib sebelum publikasi

Buka `js/config.js` dan isi:
- `whatsappNumber`: nomor WhatsApp resmi, format internasional tanpa `+`.
- `social.instagram`, `social.linkedin`, `social.whatsapp`: URL profil resmi.
- `contactEmail`: email penerima pesan form.
- `googleAnalyticsId`: measurement ID GA4 jika analytics akan digunakan.

Tautan sosial yang kosong otomatis disembunyikan. Form menggunakan `mailto:` sehingga membuka aplikasi email pengguna; ini bukan backend form dan tidak menjamin pesan terkirim. Untuk pengiriman langsung tanpa aplikasi email, hubungkan layanan form/backend yang memiliki endpoint HTTPS dan proteksi spam.

## 4. Logo dan gambar

Area `.brand-mark` pada `index.html` sengaja kosong sesuai brief. Isi sendiri dengan logo SVG atau elemen gambar. Siapkan `images/og-cover.jpg` (disarankan 1200 × 630 px) untuk preview Open Graph ketika URL website dibagikan.

## 5. Analytics dan privasi

GA4 hanya dimuat bila `googleAnalyticsId` memiliki format `G-...`. Sebelum mengaktifkannya, tambahkan kebijakan privasi dan mekanisme consent yang sesuai dengan audiens dan yurisdiksi website.

## 6. Validasi sebelum launch

- [ ] Uji tampilan pada lebar 360 px, 390 px, tablet, dan desktop.
- [ ] Uji menu mobile, language toggle, dan theme toggle.
- [ ] Uji semua anchor navigation dan FAQ.
- [ ] Isi seluruh URL resmi dan uji tautan sosial/WhatsApp.
- [ ] Isi `contactEmail`, lalu uji form pada perangkat yang memiliki aplikasi email.
- [ ] Tambahkan OG cover dan verifikasi metadata setelah website memiliki domain publik.
- [ ] Periksa kontras, keyboard navigation, dan Lighthouse (Performance, Accessibility, Best Practices, SEO).
- [ ] Tambahkan Privacy Policy bila analytics diaktifkan.

## Catatan

Project ini merupakan implementasi frontend statis. Belum termasuk CMS, database, autentikasi, penyimpanan pesan, atau dashboard admin.
