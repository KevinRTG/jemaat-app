'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://sinodegko.org/wp-content/uploads/2021/09/cibitung-5-1024x600.jpg',
  'https://sinodegko.org/wp-content/uploads/2021/09/cibitung-7.jpg',
  'https://sinodegko.org/wp-content/uploads/2021/09/cibitung-4.jpg',
  'https://i.ytimg.com/vi/jqbIenbotw4/maxresdefault.jpg'
];

export default function HeaderImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden flex items-center justify-center text-white group">
      <AnimatePresence>
        {images.map((src, index) =>
          index === currentSlide ? (
            <motion.img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            />

          ) : null
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
        aria-label="Previous"
      >
        <ChevronLeft size={28} />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
        aria-label="Next"
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Text Content */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Tentang Kami
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto drop-shadow-md">
          Melayani dengan kasih dan sukacita untuk kemuliaan nama Tuhan.
        </p>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110 shadow'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
