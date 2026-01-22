'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { images } from '@/lib/data';

export default function ContactPage() {
  return (
    <main className="bg-demco-cream">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.main}
          alt="Contact Peak Fitness"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-demco-purple/40" />

        <div className="relative z-10 text-center text-demco-offwhite px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading"
          >
            LET'S WORK.
          </motion.h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding">
        <div className="container-demco grid lg:grid-cols-2 gap-24">
          {/* CONTACT FORM */}
          <div className="bg-demco-offwhite p-12 shadow-sm">
            <h2 className="text-4xl font-heading mb-12">INQUIRE TODAY</h2>
            <form className="space-y-8 font-mono">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] opacity-50">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-demco-purple/30 py-3 outline-none focus:border-demco-purple transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] opacity-50">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-demco-purple/30 py-3 outline-none focus:border-demco-purple transition-colors" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] opacity-50">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-demco-purple/30 py-3 outline-none focus:border-demco-purple transition-colors" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] opacity-50">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-demco-purple/30 py-3 outline-none focus:border-demco-purple transition-colors resize-none" required></textarea>
              </div>
              <button className="btn-pill btn-primary w-full py-6 mt-8">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-16">
            <div className="grid sm:grid-cols-2 gap-16">
              <div className="space-y-4">
                <p className="section-label">Location</p>
                <p className="text-xl font-body">
                  2521 4TH AVE<br />
                  SEATTLE, WA 98121
                </p>
              </div>
              <div className="space-y-4">
                <p className="section-label">Contact</p>
                <div className="text-xl font-body space-y-2">
                  <p>(206) 919-7490</p>
                  <p className="text-demco-olive">info@peakfitness.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="section-label">Hours of Operation</p>
              <div className="font-mono text-sm space-y-4 uppercase tracking-widest max-w-sm">
                <div className="flex justify-between border-b border-demco-purple/10 pb-2">
                  <span>MON/WED/FRI</span>
                  <span>6AM - 7PM</span>
                </div>
                <div className="flex justify-between border-b border-demco-purple/10 pb-2">
                  <span>TUE/THU</span>
                  <span>6AM - 8PM</span>
                </div>
                <div className="flex justify-between border-b border-demco-purple/10 pb-2">
                  <span>SATURDAY</span>
                  <span>8AM - 11AM</span>
                </div>
                <div className="flex justify-between border-b border-demco-purple/10 pb-2">
                  <span>SUNDAY</span>
                  <span>9AM - 10AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
