"use client";

import Hero from "@/components/Hero";
import MembershipCard from "@/components/MembershipCard";
import { memberships } from "@/lib/data/memberships";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MembershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="discover the right membership for your fitness goals"
        primaryCTA={{
          text: "START YOUR JOURNEY",
          href: "#intro-offer",
        }}
        backgroundImage="https://source.unsplash.com/1920x1080/?gym-training-session"
      />

      {/* Membership Tiers */}
      <section id="intro-offer" className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {memberships.map((membership) => (
              <motion.div key={membership.id} variants={fadeInUp}>
                <MembershipCard membership={membership} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase tracking-tight mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Claim your free first class and experience the [Studio Name]
              difference.
            </p>
            <a
              href="#trial-class"
              className="inline-block px-8 py-4 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              First Class Free
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

