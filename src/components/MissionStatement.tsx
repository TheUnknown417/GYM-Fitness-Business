"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MissionStatement() {
  return (
    <section className="py-16 lg:py-24 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
              why we move
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase tracking-tight mb-6 leading-tight">
              More than a workout.
              <br />
              It's a lifestyle.
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-medium">
              <p>
                At [Studio Name], you're surrounded by passionate coaches who are
                dedicated to helping you become a better version of yourself. We
                focus on movement, mobility, agility, and strength training in
                the most efficient, safe, and fun way possible.
              </p>
              <p>
                This isn't just about looking good—it's about feeling amazing,
                performing better, and building sustainable health habits that
                last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={fadeInUp} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://source.unsplash.com/800x800/?personal-trainer-gym-coaching"
              alt="Personal training session"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

