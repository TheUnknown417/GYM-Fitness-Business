'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          PEAK FITNESS
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/memberships" className="hover:underline">Memberships</Link>
          <Link href="/testimonials" className="hover:underline">Testimonials</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:block bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800 transition"
        >
          Book Now
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/memberships" onClick={() => setMobileMenuOpen(false)}>Memberships</Link>
            <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 text-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
