'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={images.hero.main}
          alt="Gym training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-wider mb-4"
          >
            Welcome to Peak Fitness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            build strength.<br />
            move better.<br />
            feel amazing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Personal training, semi-private sessions, and group classes designed
            to help you become the best version of yourself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="/memberships"
              className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              Start Your Journey
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
            >
              First Class Free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">why we move</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                more than a workout.<br />
                it's a lifestyle.
              </h2>

              <p className="text-lg text-gray-700 mb-4">
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

            <div className="relative h-96">
              <Image
                src={images.training[0]}
                alt="Personal training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
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
                <p className="text-sm text-gray-600 mb-4">{coach.role}</p>
                <hr className="border-black mb-4" />
                <Link href="/about" className="text-sm font-semibold hover:underline">
                  READ BIO
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.training.map((img, i) => (
              <div key={i} className="relative h-64 overflow-hidden">
                <Image
                  src={img}
                  alt={`Training ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            transform your wellness routine starting today.
          </h2>
          <p className="text-gray-700 mb-8">
            Sign up for our newsletter and receive expert tips, workouts,
            inspiration and recipes—right in your inbox.
          </p>

          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              required
            />
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
