'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Jadwal', href: '/jadwal' },
  { label: 'Daftar Jemaat', href: '/app' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = scrolled ? 'hover:text-black-600' : 'hover:text-black';

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/gkologo.png"
            alt="Logo Gereja"
            className="h-10 w-auto"
          />
          <span className={clsx('text-2xl font-extrabold tracking-wide transition-colors duration-300', textColor)}>
            GKO Cibitung
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-medium transition-colors duration-300">
          {navItems.map((item) => (
          <li key={item.href}>
            {item.label === 'Daftar Jemaat' ? (
              <Link
                href={item.href}
                className="px-6 py-3 text-base bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <Link
              href={item.href}
              className={clsx(
                textColor,
                hoverColor,
                'transition-all duration-300 px-4 py-3 rounded-md hover:bg-blue-100'
              )}
            >
              {item.label}
            </Link>

            )}
          </li>
        ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx('md:hidden transition-colors duration-300', textColor)}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-base font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
