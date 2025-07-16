'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/Particles.svg")', 
      }}
    >
      
      {/* Konten Utama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Selamat Datang di Sistem Jemaat
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Aplikasi pencatatan kartu keluarga dan anggota jemaat gereja secara online.
            Mudah, cepat, dan terorganisir.
          </p>
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition-transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded transition-transform hover:scale-105"
            >
              Daftar
            </Link>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden md:flex items-center justify-center"
        >
          <img
            src="/gkologo.png"
            alt="Gereja"
            className="rounded-xl shadow-xl w-full h-auto object-cover transition-transform hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
