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
    <header className="sticky top-0 z-50 bg-demco-cream/80 backdrop-blur-md border-b border-demco-purple/10">
      <div className="container-demco flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-heading tracking-widest text-demco-purple">
          PEAK FITNESS
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase tracking-widest text-demco-purple hover:text-demco-olive transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary !py-3 !px-6"
          >
            Book Now
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-demco-purple"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-demco-cream h-screen w-full fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-8 right-8 text-demco-purple"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-3xl uppercase tracking-widest text-demco-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary text-xl mt-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
