'use client';

import { motion } from 'framer-motion';

const pengurus = [
  { jabatan: "Gembala Sidang 1", nama: "Pdt. Daniel Zacharias, M.Th" },
  { jabatan: "Gembala Sidang 2", nama: "Pdt. Martha Ulina Nababan" },
  { jabatan: "Sekretaris", nama: "Pnt. Gunung Efendi Ritonga" },
  { jabatan: "Wakil Sekretaris", nama: "Pnt. Kloster Antoni Sitorus" },
  { jabatan: "Bendahara", nama: "Pnt. Bulpen Tambunan" },
  { jabatan: "Ketua Bidang Kategorial", nama: "Pnt. Nixon Simanjuntak" },
  { jabatan: "Koordinator Pemuda", nama: "Pnt. Toni Nababan" },
];

export default function StrukturPengurus() {
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-10">
          Struktur Pengurus GKO Cibitung Periode Tahun 2021 - 2026
        </h2>

        <ul className="divide-y divide-gray-200">
          {pengurus.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 text-gray-700 text-base sm:text-lg"
            >
              <span className="font-medium text-blue-800">{item.jabatan}</span>
              <span className="mt-1 sm:mt-0 text-gray-600">{item.nama}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
