'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { images } from '@/lib/data';

export default function ContactPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={images.hero.main}
          alt="Contact Peak Fitness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            let's get started
          </motion.h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold mb-8">send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black" required></textarea>
              </div>
              <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-12">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="mt-1" />
                <div>
                  <p className="section-label">location</p>
                  <p className="text-lg">
                    2521 4th Ave<br />
                    Seattle, WA 98121
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Phone className="mt-1" />
                <div>
                  <p className="section-label">phone</p>
                  <p className="text-lg">(206) 919-7490</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Mail className="mt-1" />
                <div>
                  <p className="section-label">email</p>
                  <p className="text-lg">info@peakfitness.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Clock className="mt-1" />
                <div>
                  <p className="section-label">hours</p>
                  <div className="text-lg space-y-1">
                    <p>Mon/Wed/Fri: 6AM - 7PM</p>
                    <p>Tue/Thu: 6AM - 8PM</p>
                    <p>Saturday: 8AM - 11AM</p>
                    <p>Sunday: 9AM - 10AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.training.slice(0, 4).map((img, i) => (
              <div key={i} className="relative h-64 overflow-hidden">
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
