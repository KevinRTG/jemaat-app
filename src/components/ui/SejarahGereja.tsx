'use client';

import { motion } from 'framer-motion';

export default function SejarahGereja() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Sejarah Gereja
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          GKO Cibitung didirikan pada <strong className="text-blue-800">28 Oktober 1988</strong>, dan diresmikan bersama Peneguhan Majelis Pertama pada <strong className="text-blue-800">3 November 1988</strong>. Sejak saat itu, gereja terus bertumbuh menjadi komunitas yang aktif dalam pelayanan, persekutuan, dan kesaksian iman di tengah masyarakat.
        </p>
      </motion.div>
    </section>
  );
}
