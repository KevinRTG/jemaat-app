<div align="center">
  <br />
    <a href="https://github.com/KevinRTG/jemaat-app" target="_blank">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev6WAvha6FJ0E-rZwOdFF34cAthuCbsFenTKifWVpa6maoNbsyiS1Eyoo&s=10" alt="Jemaat App Banner">
    </a>
  <br />

   <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </div>

  <h3 align="center">Jemaat App: A Church-Centered Web Platform</h3>

  <div align="center">
    A modern web application to support church communities in managing members, activities, and spiritual resources. Built with full-stack technologies and a heart for service.
  </div>
</div>

---

📋 **Table of Contents**

1. 🤖 Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. 🤸 Quick Start
5. 🛡️ Security
6. 🤝 How to Contribute
7. 🔗 Resources
8. 📄 License
9. ✍️ Author

---

## 🤖 Introduction

Jemaat App adalah platform web **_full-stack_** modern yang dirancang untuk menjadi solusi terpadu bagi gereja, berfungsi sebagai **_website_ profil publik** sekaligus **aplikasi manajemen jemaat**. Dibangun dengan **Next.js**, **Prisma**, dan **Tailwind CSS**, aplikasi ini memungkinkan gereja untuk menampilkan informasi penting seperti jadwal ibadah dan visi-misi secara online, sambil menyediakan _tools_ internal yang aman dan efisien bagi pengurus untuk mengelola data anggota, pendaftaran jemaat, dan aktivitas gereja. Dengan desain yang responsif dan fitur yang terintegrasi, Jemaat App bertujuan untuk menyederhanakan administrasi gereja dan meningkatkan interaksi antara pengurus dan seluruh anggota jemaat.


## ⚙️ Tech Stack

- **Next.js**: Framework React untuk _server-side rendering_ dan _routing_.
- **Prisma**: ORM (_Object-Relational Mapper_) yang _type-safe_ untuk akses database.
- **Tailwind CSS**: Framework CSS _utility-first_ yang fleksibel.
- **TypeScript**: Superset JavaScript dengan tipe data yang kuat untuk pengembangan yang terukur.
- **PostgreSQL**: Database relasional untuk menyimpan data terstruktur.
- **Vercel**: Platform untuk _deployment_ yang dioptimalkan untuk Next.js.

## 🔋 Features

- **Manajemen Anggota:** Pendaftaran dan pengelolaan data anggota jemaat yang komprehensif.
- **Kontrol Akses Berbasis Peran:** Sistem peran `admin` dan `user` untuk keamanan.
- **Desain Responsif:** Tampilan yang optimal di perangkat mobile dan desktop.
- **Integrasi API:** Integrasi API untuk konten yang dinamis.
- **Optimasi SEO:** Dioptimalkan untuk mesin pencari dan _deployment_ yang cepat.
- **Middleware untuk Proteksi Rute:** Keamanan tambahan untuk rute yang sensitif.
- **Basis Kode yang Bersih dan Modular:** Kode yang mudah dibaca dan dikelola.

## 🤸 Quick Start

### **Prasyarat**

Pastikan Anda telah menginstal:
- **Node.js** (versi 18 atau lebih tinggi)
- **npm**
- **PostgreSQL** (pastikan server database Anda berjalan)

### **Langkah-langkah Instalasi**

1.  **Kloning Repositori:**
    ```bash
    git clone [https://github.com/KevinRTG/jemaat-app.git](https://github.com/KevinRTG/jemaat-app.git)
    cd jemaat-app
    ```
2.  **Instal Dependensi:**
    ```bash
    npm install
    ```
3.  **Konfigurasi Database:**
    * Buat file `.env` di root folder proyek Anda.
    * Salin isi dari `.env.example` ke dalam file `.env`.
    * Sesuaikan `DATABASE_URL` dengan kredensial database PostgreSQL Anda.
4.  **Jalankan Aplikasi:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## 🛡️ Security

- **Middleware** untuk melindungi rute admin.
- Penggunaan **_environment variables_** untuk konfigurasi sensitif.
- Logika akses berbasis peran (`role-based access`).

## 🤝 How to Contribute

Kami sangat menghargai kontribusi Anda! Jika Anda menemukan _bug_, ingin mengusulkan fitur baru, atau membantu memperbaiki kode, silakan:
1.  Fork repositori ini.
2.  Buat branch baru (`git checkout -b feature/nama-fitur`).
3.  Lakukan _commit_ pada perubahan Anda (`git commit -m 'Tambahkan fitur X'`).
4.  _Push_ ke branch Anda (`git push origin feature/nama-fitur`).
5.  Buka Pull Request.

## 🔗 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under **[MIT License](https://github.com/KevinRTG/jemaat-app/blob/master/LICENSE)**.


## ✍️ Author

Dikembangkan oleh KevinRTG — bersemangat dalam membangun aplikasi yang bermakna untuk melayani komunitas.