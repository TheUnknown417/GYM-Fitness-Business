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
    <header className="absolute top-0 left-0 right-0 z-[100] bg-transparent">
      {/* Container with extra-wide breathing room */}
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-12 px-10 md:px-20 lg:px-28">
        {/* LOGO - Font Nav for extra premium feel */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-nav tracking-tight text-white hover:opacity-80 transition-opacity flex items-baseline"
        >
          <span className="font-black">PEAK</span>
          <span className="font-light">FITNESS</span>
        </Link>

        {/* CLUSTERED NAV - Using New Font + Micro-typography */}
        <div className="hidden lg:flex items-center gap-16 xl:gap-24">
          <nav className="flex items-center gap-10 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-nav text-[9px] xl:text-[10px] uppercase tracking-[0.4em] text-white hover:text-white/60 transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-demco-purple/90 text-white border-none py-3 px-10 text-[9px] xl:text-[10px] font-nav tracking-[0.3em] hover:bg-demco-purple transition-all shadow-xl leading-none flex items-center justify-center uppercase font-bold"
          >
            BOOK NOW
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-demco-cream h-screen w-full fixed inset-0 z-[110] flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-8 right-8 text-demco-purple"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-nav text-4xl uppercase tracking-widest text-demco-purple font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill btn-primary text-2xl mt-8 px-16 py-6 font-nav"
            onClick={() => setMobileMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
