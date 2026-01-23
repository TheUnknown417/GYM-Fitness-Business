'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
    <header className="absolute top-0 left-0 right-0 z-[100] bg-transparent">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between py-12 px-8 md:px-16 lg:px-24">
        {/* LOGO - Scaled down for elegance */}
        <Link
          href="/"
          className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter text-white hover:opacity-80 transition-opacity flex items-baseline"
        >
          <span className="font-black">PEAK</span>
          <span className="font-light">FITNESS</span>
        </Link>

        {/* CLUSTERED NAV - Pushed to the right but before the button */}
        <div className="hidden lg:flex items-center gap-12 xl:gap-20">
          <nav className="flex items-center gap-10 xl:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-testimonial text-xs xl:text-sm uppercase tracking-[0.3em] text-white hover:text-white/70 transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-demco-purple/90 text-white border-none py-4 px-10 text-sm xl:text-base font-testimonial tracking-[0.2em] hover:bg-demco-purple transition-colors shadow-lg"
          >
            BOOK NOW
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-demco-cream h-screen w-full fixed inset-0 z-[110] flex flex-col items-center justify-center space-y-10">
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
            className="btn-pill btn-primary text-3xl mt-12 px-20 py-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
