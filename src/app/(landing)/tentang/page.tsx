// src/app/(profil)/tentang/page.tsx

import HeaderImage from "@/components/ui/HeaderImage";
import VisiMisi from "@/components/ui/VisiMisi";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-y-auto bg-gray-50">
      {/* Hero Slider atau Gambar Header */}
      <HeaderImage />

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
          Tentang Kami
        </h1>

        <VisiMisi />

        {/* Tambahkan komponen lain seperti SejarahGereja, GembalaPengurus, dll */}
      </div>
    </div>
  );
}
