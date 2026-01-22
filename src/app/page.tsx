"use client";

import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import CoachCard from "@/components/CoachCard";
import ImageGallery from "@/components/ImageGallery";
import NewsletterForm from "@/components/NewsletterForm";
import { coaches } from "@/lib/data/coaches";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Build Strength. Move Better. Feel Amazing."
        description="Personal training, semi-private sessions, and group classes designed to help you become the best version of yourself."
        primaryCTA={{
          text: "Start Your Journey",
          href: "/memberships",
        }}
        secondaryCTA={{
          text: "First Class Free",
          href: "#trial-class",
        }}
      />

      {/* Mission Statement */}
      <MissionStatement />

      {/* Goals & Mission Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                Our Goals
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-medium">
                We create customized workout plans that fit your body and needs,
                tracking every workout. Weekly check-ins keep you accountable.
                We discuss goal setting, nutrition habits, and your overall
                well-being—because health is more than just your workout.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                Our Mission
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-medium">
                [Studio Name] is filled with laughter, love, strength, and fun.
                Our community is what makes us special. You won't find another
                place where you develop strength AND build genuine friendships.
                Everyone who walks through our door becomes part of the family.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-16 lg:py-24 bg-primary-white">
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

      {/* Photo Gallery */}
      <ImageGallery />

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase tracking-tight mb-4">
              Transform your wellness routine starting today.
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Sign up for our newsletter and get a free digital guide with
              expert tips, workouts, and recipes—right in your inbox.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

