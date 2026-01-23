"use client";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function WellnessHubPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-demco-purple">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 text-center text-demco-offwhite mt-20 md:mt-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-testimonial text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 opacity-80"
          >
            EXPERT INSIGHTS
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-8xl lg:text-9xl font-heading leading-[0.9] tracking-tighter uppercase mb-6"
          >
            wellness<br />hub.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm md:text-base text-white/70 max-w-xl mx-auto font-testimonial uppercase tracking-widest leading-relaxed"
          >
            Workouts, nutrition advice, and wellness insights to help you live your best life.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-demco-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
