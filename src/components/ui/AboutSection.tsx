'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="tentang" className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Tentang GKO Cibitung
          </h2>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Gereja kami didirikan pada <strong className="text-blue-800">28 Oktober 1988</strong>, dan diresmikan bersama Peneguhan Majelis Pertama pada <strong className="text-blue-800">3 November 1988</strong>.
            </p>
            <p>
              <span className="font-semibold text-blue-800">Visi:</span> Menjadi terang di tengah-tengah masyarakat.
            </p>
            <p>
              <span className="font-semibold text-blue-800">Misi:</span> Menyebarkan Injil, menumbuhkan iman, dan melayani sesama dengan tulus.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/gerejagko.png"
            alt="Komunitas Gereja"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
