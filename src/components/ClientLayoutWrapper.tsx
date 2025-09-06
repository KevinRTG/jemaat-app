'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, createContext, useContext } from 'react';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';

// Context supaya isLoading bisa diakses di semua komponen
type LoadingContextType = { isLoading: boolean };
const LoadingContext = createContext<LoadingContextType>({ isLoading: false });

export function useLoading() {
  return useContext(LoadingContext);
}

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname === '/app' || pathname === '/login';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading awal, bisa diganti trigger lain
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <LoadingScreen isLoading={isLoading} />
      {children}
      {!hideFooter && <Footer />}
    </LoadingContext.Provider>
  );
}
