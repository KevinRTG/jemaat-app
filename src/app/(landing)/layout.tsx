import Navbar from '@/components/Navbar';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'GKO Cibitung',
  description: 'Website Informasi GKO Cibitung',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-50`}>
        <Navbar />
        <ClientLayoutWrapper>
          <main>{children}</main>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
