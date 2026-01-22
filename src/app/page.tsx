'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.main}
          alt="Gym training"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-demco-purple/20 to-demco-purple/60" />

        <div className="relative z-10 text-center text-demco-offwhite px-4 container-demco">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] mb-8"
          >
            Elevate Your Life
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading mb-12 leading-[0.9] tracking-tighter"
          >
            FIND YOUR<br />MOVEMENT.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/memberships"
              className="btn-pill btn-primary text-lg px-12 py-6"
            >
              Start Your Journey
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm uppercase tracking-[0.3em] hover:text-white transition-colors"
            >
              View Schedule
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION (High contrast cream) */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="section-label">Our Philosophy</p>
            <h2 className="text-5xl md:text-7xl font-heading text-demco-purple leading-tight">
              MORE THAN A WORKOUT. IT'S A LIFESTYLE.
            </h2>
            <div className="h-px bg-demco-olive/30 w-1/4 mx-auto" />
            <p className="text-xl md:text-2xl text-demco-purple/70 leading-relaxed font-body italic">
              "We focus on movement, mobility, and strength training in the most efficient, safe, and fun way possible. This isn't just about looking good—it's about feeling amazing."
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING GRID (Unbalanced/Editorial) */}
      <section className="section-padding bg-demco-offwhite">
        <div className="container-demco grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={images.training[1]}
                alt="Personal training session"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-demco-olive/10 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <p className="section-label">Expert Coaching</p>
            <h2 className="text-4xl md:text-6xl font-heading">TRAINING & GROUP FITNESS</h2>
            <p className="text-lg text-demco-purple/80 leading-relaxed">
              At Peak Fitness, you're surrounded by passionate coaches who are
              dedicated to helping you become a better version of yourself.
              Our community is what makes us special—laughter, love, and strength
              are at the core of everything we do.
            </p>
            <div className="pt-6">
              <Link href="/memberships" className="btn-pill btn-secondary">
                Explore Memberships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="section-label">The Team</p>
              <h2 className="text-5xl md:text-7xl font-heading">MEET OUR COACHES</h2>
            </div>
            <Link href="/about" className="font-mono text-sm uppercase tracking-widest border-b border-demco-purple pb-2 hover:text-demco-olive hover:border-demco-olive transition-all">
              All Trainers
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'SARAH JOHNSON', role: 'OWNER + TRAINER', img: images.coaches[0] },
              { name: 'MIKE CHEN', role: 'TRAINER', img: images.coaches[1] },
              { name: 'ALEX RIVERA', role: 'TRAINER', img: images.coaches[2] },
            ].map((coach, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-heading mb-2">{coach.name}</h3>
                <p className="font-mono text-xs tracking-widest text-demco-olive">{coach.role}</p>
                <div className="mt-4 overflow-hidden">
                  <div className="h-[2px] bg-demco-purple w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY (Sleek Borderless) */}
      <section className="bg-demco-black py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {images.training.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <Image
                src={img}
                alt={`Training session ${i + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding bg-demco-cream text-center">
        <div className="container-demco max-w-4xl space-y-12">
          <h2 className="text-4xl md:text-6xl font-heading leading-tight">
            TRANSFORM YOUR WELLNESS ROUTINE STARTING TODAY.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-pill btn-primary py-6 px-16 text-lg">
              First Class Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
