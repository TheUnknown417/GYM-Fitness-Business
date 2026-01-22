"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export default function Hero({
  eyebrow = "Welcome to [Studio Name]",
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = "https://source.unsplash.com/1920x1080/?gym-workout-strength",
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {eyebrow && (
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-wide mb-4 text-white/90"
            >
              {eyebrow}
            </motion.p>
          )}
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lowercase tracking-tight mb-6 leading-tight"
          >
            {headline}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/95"
            >
              {description}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="px-8 py-4 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors inline-block"
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="px-8 py-4 bg-transparent border-2 border-primary-white text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-primary-white hover:text-primary-black transition-colors inline-block"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

