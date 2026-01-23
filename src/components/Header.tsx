'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-demco-cream/80 backdrop-blur-md border-b border-demco-purple/10">
      <div className="container-demco flex items-center justify-between py-6 md:py-8 lg:px-12">
        {/* LOGO - PEAK (Black) FITNESS (Medium) */}
        <Link href="/" className="text-5xl md:text-6xl lg:text-7xl font-heading tracking-tighter text-demco-purple hover:opacity-80 transition-opacity flex items-baseline">
          <span className="font-black">PEAK</span>
          <span className="font-medium">FITNESS</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-testimonial text-sm uppercase tracking-widest text-demco-purple hover:text-demco-olive transition-colors font-bold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary !py-4 !px-8 text-base lg:text-lg ml-4"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-demco-purple p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-demco-cream h-screen w-full fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-8 right-8 text-demco-purple"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-4xl uppercase tracking-widest text-demco-purple font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary text-2xl mt-8 px-16 py-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
