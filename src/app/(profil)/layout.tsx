// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gereja Jemaat App',
  description: 'Aplikasi pendaftaran jemaat dan informasi gereja',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
