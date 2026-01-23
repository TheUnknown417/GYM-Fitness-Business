'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for dynamic background if needed, 
  // but keeping it transparent as per "on the background" request
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`absolute top-0 left-0 right-0 z-[100] transition-all duration-500 bg-transparent`}>
      <div className="container-demco flex items-center justify-between py-10 md:py-12 lg:px-12">
        {/* LOGO - PEAK (Black) FITNESS (Light/Normal) */}
        <Link
          href="/"
          className="text-5xl md:text-6xl lg:text-7xl font-heading tracking-tighter text-white hover:opacity-80 transition-opacity flex items-baseline"
        >
          <span className="font-black">PEAK</span>
          <span className="font-light">FITNESS</span>
        </Link>

        {/* DESKTOP NAV - White/Cream for background visibility */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-testimonial text-sm uppercase tracking-widest text-white hover:text-demco-olive transition-colors font-bold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-pill bg-white text-demco-purple border-white hover:bg-transparent hover:text-white !py-4 !px-10 text-base lg:text-lg ml-4"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* MOBILE MENU - Cream background for readability when open */}
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
