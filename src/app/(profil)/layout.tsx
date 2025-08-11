// src/app/(profil)/layout.tsx
import Link from 'next/link';

export default function ProfilLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Gereja Jemaat App</Link>
          <nav>
            <Link href="/" className="mx-2 hover:text-blue-200">Beranda</Link>
            <Link href="/tentang" className="mx-2 hover:text-blue-200">Tentang</Link>
            <Link href="/jadwal" className="mx-2 hover:text-blue-200">Jadwal</Link>
            {/* Link ke aplikasi pendaftaran, bisa menggunakan tombol */}
            <Link href="/(app)" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4">
              Masuk Aplikasi
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-blue-900 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Gereja Jemaat App. All rights reserved.</p>
      </footer>
    </div>
  );
}