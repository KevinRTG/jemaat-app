'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Tentang Gereja */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">GKO Cibitung</h3>
          <p className="text-sm leading-relaxed text-justify">
            Melayani dengan kasih dan sukacita untuk kemuliaan nama Tuhan. Didirikan pada 28 Oktober 1988, GKO Cibitung terus menjadi terang di tengah masyarakat dengan misi menyebarkan Injil, menumbuhkan iman, dan melayani sesama dengan tulus.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:underline">Tentang</Link></li>
            <li><Link href="/jadwal" className="hover:underline">Jadwal</Link></li>
            <li><Link href="/app" className="hover:underline">Daftar Jemaat</Link></li>
            <li><Link href="/kontak" className="hover:underline">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Kontak</h3>
          <p className="text-sm">Jl. Cibitung Raya No. 88, Bekasi</p>
          <p className="text-sm">Email: info@gkocibitung.org</p>
          <p className="text-sm">Telp: (021) 1234-5678</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-300 px-4">
        &copy; {new Date().getFullYear()} GKO Cibitung. All rights reserved.
      </div>
    </footer>
  );
}
