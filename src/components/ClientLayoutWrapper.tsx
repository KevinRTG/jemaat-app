'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname === '/app' || pathname === '/login';

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
