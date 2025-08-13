import type { Metadata } from "next";
import { inter } from '@/fonts';
import "./globals.css";
import ClientProvider from "./client-provider"; // ⬅️ Import ini
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Aplikasi Jemaat",
  description: "Login dengan Google + Credentials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${inter.variable} bg-gray-50`}>
        <ClientProvider>{children}</ClientProvider> 
         <Analytics />
      </body>
    </html>
  );
}
