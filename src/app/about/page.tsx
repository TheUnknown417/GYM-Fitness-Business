"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import CoachCard from "@/components/CoachCard";
import { coaches } from "@/lib/data/coaches";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold lowercase tracking-tight"
          >
            about us
          </motion.h1>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                why we move
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase tracking-tight mb-6">
                More than a workout. It's a lifestyle.
              </h2>
              <p className="text-lg leading-relaxed text-gray-medium">
                At [Studio Name], you're surrounded by passionate coaches who are
                dedicated to helping you become a better version of yourself. We
                focus on movement, mobility, agility, and strength training in
                the most efficient, safe, and fun way possible.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                  Our Goals
                </p>
                <p className="text-base leading-relaxed text-gray-medium">
                  We create customized workout plans that fit your body and needs,
                  tracking every workout. Weekly check-ins keep you accountable.
                  We discuss goal setting, nutrition habits, and your overall
                  well-being—because health is more than just your workout.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                  Our Mission
                </p>
                <p className="text-base leading-relaxed text-gray-medium">
                  [Studio Name] is filled with laughter, love, strength, and fun.
                  Our community is what makes us special. You won't find another
                  place where you develop strength AND build genuine friendships.
                  Everyone who walks through our door becomes part of the family.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
              meet our coaches
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {coaches.map((coach) => (
              <motion.div key={coach.id} variants={fadeInUp}>
                <CoachCard coach={coach} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

