# User Manual - Himajo Outdoor Rent

## Daftar Isi
1. [Pendahuluan](#pendahuluan)
2. [Fitur Utama](#fitur-utama)
3. [Navigasi Situs](#navigasi-situs)
4. [Detail Halaman](#detail-halaman)
   - [Halaman Beranda](#halaman-beranda)
   - [Halaman Produk](#halaman-produk)
   - [Halaman Bantuan / FAQ](#halaman-bantuan--faq)
5. [Cara Menghubungi & Pemesanan](#cara-menghubungi--pemesanan)
6. [Pertanyaan Umum (FAQ)](#pertanyaan-umum-faq)
7. [Kontak](#kontak)

---

## Pendahuluan
Himajo Outdoor Rent adalah platform penyewaan perlengkapan outdoor (carrier, tenda, jaket, dll.). Website ini memudahkan Anda menelusuri katalog produk, membaca detail ketersediaan, dan menghubungi tim kami sebelum melakukan transaksi.

---

## Fitur Utama
- **Daftar Produk** dengan informasi harga, kategori, dan stok.
- **Halaman Detail Produk** untuk melihat foto dan keterangan singkat.
- **Halaman Bantuan** yang menampilkan FAQ terbaru dari basis data.
- **Form Kontak & Info Operasional** sehingga pelanggan tahu cara menghubungi kami.
- **Panel Admin (khusus internal)** untuk mengubah daftar produk dan FAQ.

---

## Navigasi Situs
| Menu | Deskripsi |
| --- | --- |
| **Beranda** | Ringkasan kategori, highlight produk, CTA pendaftaran penyewa. |
| **Products / Produk** | Katalog lengkap dengan filter kategori & harga. |
| **Register / Info** | Formulir pendaftaran penyewa & informasi prosedur. |
| **Help / Bantuan** | FAQ dinamis serta data kontak dukungan. |
| **Admin** | Login khusus staff (tidak untuk pelanggan umum). |

---

## Detail Halaman

### Halaman Beranda
- **Hero Section**: Menyambut pengunjung dan menampilkan tombol ajakan (CTA) ke halaman informasi.
- **Highlight Produk**: Kartu produk favorit / best seller dengan tombol menuju detail.
- **Kategori / Layanan**: Ringkasan kategori barang sewaan (tas carrier, mendaki, camping, dsb).
- **Testimoni & FAQ singkat**: Memberi gambaran reputasi layanan.

### Halaman Produk
1. **Filter & Sortir**
   - Masukkan kata kunci di kotak pencarian.
   - Gunakan filter kategori dan rentang harga.
   - Atur urutan tampilan (harga naik/turun, terbaru).
2. **Kartu Produk**
   - Menampilkan nama, harga, stok, dan label “Best Seller”.
   - Tombol “Lihat” membuka halaman detail dengan URL `/products/:slug`.
3. **Detail Produk**
   - Foto produk.
   - Harga sewa per periode.
   - Kategori dan ketersediaan stok (diambil dari basis data).
   - Tombol kontak (WhatsApp / CTA manual) untuk menyewa.

### Halaman Bantuan / FAQ
- Menarik data langsung dari endpoint `/api/faqs`.
- Klik judul pertanyaan untuk membuka jawaban (accordion).
- Jika FAQ tidak tersedia, halaman menampilkan pesan “Belum ada FAQ”.
- Sertakan informasi kontak (email, telepon, alamat, jam operasional).

---

## Cara Menghubungi & Pemesanan
Walaupun belum terdapat keranjang belanja otomatis, pelanggan bisa melakukan pemesanan dengan langkah berikut:
1. Telusuri produk dan tentukan barang yang ingin disewa.
2. Catat nama produk, jumlah, serta periode sewa yang diinginkan.
3. Hubungi CS melalui:
   - Email `cs@himajo-outdoor.com`
   - Telepon/WhatsApp (021) 1234-5678
4. CS akan mengonfirmasi ketersediaan dan mengirimkan instruksi pembayaran.

> Saran: lampirkan juga foto KTP dan jadwal peminjaman ketika menghubungi CS supaya proses verifikasi lebih cepat.

---

## Pertanyaan Umum (FAQ)
| Pertanyaan | Jawaban |
| --- | --- |
| Berapa lama waktu pemrosesan pesanan? | Maksimal 1x24 jam pada hari kerja setelah pembayaran diterima. |
| Apakah perlu deposit? | Ya, beberapa produk memerlukan uang jaminan (nominal diinformasikan oleh CS). |
| Bagaimana jika barang rusak? | Laporkan segera. Biaya perbaikan akan dibebankan sesuai ketentuan pada kontrak sewa. |
| Apakah bisa kirim luar kota? | Bisa, menggunakan jasa ekspedisi yang disepakati. Biaya ditanggung penyewa. |

FAQ pada halaman Help selalu diperbarui oleh admin. Jika pertanyaan Anda belum tercantum, gunakan form kontak.

---

## Kontak
- **Email**: cs@himajo-outdoor.com
- **Telepon / WhatsApp**: (021) 1234-5678
- **Alamat**: Jl. Contoh No.123, Jakarta Selatan, Indonesia
- **Jam Operasional**: Senin–Minggu, 09.00 – 21.00 WIB

---
*Terakhir diperbarui: 18 Desember 2025*
