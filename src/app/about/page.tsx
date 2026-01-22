'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="bg-demco-cream">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.about}
          alt="About Peak Fitness"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-demco-purple/30" />

        <div className="relative z-10 text-center text-demco-offwhite px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading"
          >
            OUR STORY
          </motion.h1>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="section-padding">
        <div className="container-demco grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <p className="section-label">Rooted in Purpose</p>
            <h2 className="text-4xl md:text-6xl font-heading leading-tight">
              BUILT ON STRENGTH,<br />DRIVEN BY PASSION.
            </h2>
            <div className="h-1 bg-demco-purple/10 w-32" />
            <p className="text-xl text-demco-purple/80 font-body leading-relaxed">
              Peak Fitness was founded on the belief that everyone deserves a movement
              practice that is both challenging and sustainable. We don't just
              teach exercises; we cultivate a community of individuals dedicated
              to long-term health and vitality.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={images.training[2]}
              alt="Community atmosphere"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-demco-olive/20" />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section-padding bg-demco-offwhite">
        <div className="container-demco grid md:grid-cols-2 gap-16">
          <div className="bg-demco-cream p-12 space-y-6">
            <p className="section-label">Our Mission</p>
            <h3 className="text-3xl font-heading">EMPOWERMENT THROUGH MOVEMENT</h3>
            <p className="text-demco-purple/70 leading-relaxed font-body">
              To provide the highest quality coaching and environment where people
              can develop their physical strength, mental resilience, and a
              lasting connection with their bodies.
            </p>
          </div>
          <div className="bg-demco-cream p-12 space-y-6">
            <p className="section-label">Our Goals</p>
            <h3 className="text-3xl font-heading">SUSTAINABLE WELLNESS</h3>
            <p className="text-demco-purple/70 leading-relaxed font-body">
              We aim to bridge the gap between high-performance training and
              everyday wellness, making elite-level coaching accessible to
              everyone who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-demco">
          <h2 className="text-4xl md:text-6xl font-heading mb-12">JOIN THE FAMILY.</h2>
          <a href="/contact" className="btn-pill btn-primary text-xl px-16 py-6">
            Join Now
          </a>
        </div>
      </section>
    </main>
  );
}
