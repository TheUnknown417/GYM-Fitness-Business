'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={images.hero.about}
          alt="About Peak Fitness"
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
            about us
          </motion.h1>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label">why we move</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            more than a workout.<br />
            it's a lifestyle.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Peak Fitness, you're surrounded by passionate coaches who are
            dedicated to helping you become a better version of yourself. We
            focus on movement, mobility, agility, and strength training in
            the most efficient, safe, and fun way possible.
          </p>
          <p className="text-lg text-gray-700">
            This isn't just about looking good—it's about feeling amazing,
            performing better, and building sustainable health habits that
            last a lifetime.
          </p>
        </div>
      </section>

      {/* GOALS & MISSION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label">our goals</p>
            <p className="text-lg text-gray-700">
              We create customized workout plans that fit your body and needs,
              tracking every workout. Weekly check-ins keep you accountable.
              We discuss goal setting, nutrition habits, and your overall
              well-being—because health is more than just your workout.
            </p>
          </div>

          <div>
            <p className="section-label">our mission</p>
            <p className="text-lg text-gray-700">
              Peak Fitness is filled with laughter, love, strength, and fun.
              Our community is what makes us special. You won't find another
              place where you develop strength AND build genuine friendships.
              Everyone who walks through our door becomes part of the family.
            </p>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center">meet our coaches</p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { name: 'sarah johnson', role: 'OWNER + TRAINER', img: images.coaches[0] },
              { name: 'mike chen', role: 'TRAINER', img: images.coaches[1] },
              { name: 'alex rivera', role: 'TRAINER', img: images.coaches[2] },
            ].map((coach, i) => (
              <div key={i} className="group">
                <div className="relative h-96 mb-4 overflow-hidden">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                <p className="text-sm text-gray-600">{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
