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
      <div className="container-demco flex items-center justify-between py-10">
        <Link href="/" className="text-5xl md:text-7xl font-heading tracking-tighter text-demco-purple font-black hover:opacity-80 transition-opacity">
          PEAKFITNESS
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-12">
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
            className="btn-pill btn-primary !py-5 !px-10 text-lg"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-demco-purple"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-demco-cream h-screen w-full fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10">
          <button
            className="absolute top-10 right-10 text-demco-purple"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={48} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-5xl uppercase tracking-widest text-demco-purple font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary text-3xl mt-10 px-20 py-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
