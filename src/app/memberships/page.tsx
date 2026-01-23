'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function MembershipsPage() {
  const memberships = [
    {
      name: 'SEMI-PRIVATE TRAINING',
      description: 'Individualized coaching and customized programs catered to your goals in a small-group setting (max 8 people). Enjoy the benefits of personal training with added energy.',
      intro: 'Intro offer $250 for first month',
      price: 'Starting at $325/month',
      image: images.memberships.semiPrivate,
    },
    {
      name: 'GROUP FITNESS TRAINING',
      description: 'Strength and conditioning classes welcome to all fitness levels. These classes combine cardio, strength training, and flexibility workouts for overall fitness.',
      intro: null,
      price: 'Starting at $120/month',
      image: images.memberships.group,
    },
    {
      name: '1:1 PRIVATE TRAINING',
      description: 'Personalized fitness experience with expert trainers. Sessions are 60 minutes and include weekly check-ins to track progress and ensure accountability.',
      intro: null,
      price: 'Starting at $95/session',
      image: images.memberships.private,
    },
  ];

  return (
    <main className="bg-demco-cream">
      {/* HERO */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.memberships}
          alt="Memberships"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center text-demco-offwhite px-4 container-demco mt-20 md:mt-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-testimonial text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 opacity-80"
          >
            MEMBERSHIP OPTIONS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading leading-[0.9] tracking-tighter"
          >
            DISCOVER YOUR<br />FITNESS PATH.
          </motion.h1>
        </div>
      </section>

      {/* MEMBERSHIP LIST (Minimalist alternating layout) */}
      <section className="section-padding">
        <div className="container-demco space-y-48">
          {memberships.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-12 gap-16 items-center`}
            >
              <div className={`lg:col-span-7 relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-demco-olive/10 -z-10`} />
              </div>

              <div className={`lg:col-span-5 space-y-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <p className="section-label">Membership Type</p>
                  <h2 className="text-4xl md:text-5xl font-heading tracking-tight leading-none">{tier.name}</h2>
                </div>

                <p className="text-lg text-demco-purple/80 font-body leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-4 pt-4">
                  {tier.intro && (
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-demco-olive rounded-full" />
                      <p className="font-mono text-sm tracking-widest uppercase">{tier.intro}</p>
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-demco-purple rounded-full" />
                    <p className="font-mono text-sm tracking-widest uppercase font-bold">{tier.price}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className="btn-pill btn-primary w-full sm:w-auto"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
