"use client";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function WellnessHubPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold lowercase tracking-tight mb-4"
          >
            wellness hub
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Expert tips, workouts, nutrition advice, and wellness insights to
            help you live your best life.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
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

