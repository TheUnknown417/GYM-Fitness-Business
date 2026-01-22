"use client";

import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Real Results. Real Reviews. Hear what our clients are saying!"
        description="Every success story starts with a single step. Check out what our happy clients have to say and claim your free first class to begin your journey."
        primaryCTA={{
          text: "first class free",
          href: "#trial-class",
        }}
        backgroundImage="https://source.unsplash.com/1920x1080/?happy-fitness-clients"
      />

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-16 lg:space-y-24"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  layout={i % 2 === 0 ? "image-left" : "image-right"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* External Reviews CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold lowercase tracking-tight mb-6">
              Read more success stories
            </h2>
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-primary-black text-primary-black font-semibold text-sm uppercase tracking-wide hover:bg-primary-black hover:text-primary-white transition-colors"
            >
              More Reviews
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

