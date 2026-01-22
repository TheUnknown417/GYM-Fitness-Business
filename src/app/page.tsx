'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className="bg-demco-cream">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.main}
          alt="Gym training"
          fill
          className="object-cover brightness-[0.8]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-demco-purple/20 to-demco-purple/60" />

        <div className="relative z-10 text-center text-demco-offwhite px-4 container-demco">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-testimonial text-xs md:text-sm uppercase tracking-[0.4em] mb-8"
          >
            ELEVATE YOUR LIFE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[11rem] font-heading mb-12 leading-[0.8] tracking-tighter"
          >
            FIND YOUR<br />MOVEMENT.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link
              href="/memberships"
              className="btn-pill btn-primary text-xl px-16 py-7"
            >
              START YOUR JOURNEY
            </Link>
            <Link
              href="/contact"
              className="font-testimonial text-sm uppercase tracking-[0.3em] hover:text-white transition-all underline underline-offset-8"
            >
              FIRST CLASS FREE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-5xl mx-auto text-center space-y-12"
          >
            <motion.p variants={itemVariants} className="section-label">WHY WE MOVE</motion.p>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-heading text-demco-purple leading-tight">
              MORE THAN A WORKOUT. IT'S A LIFESTYLE.
            </motion.h2>
            <motion.div variants={itemVariants} className="h-2 bg-demco-purple w-32 mx-auto" />
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-demco-purple/70 leading-relaxed font-testimonial italic">
              "WE FOCUS ON MOVEMENT, MOBILITY, AND STRENGTH TRAINING IN THE MOST EFFICIENT, SAFE, AND FUN WAY POSSIBLE."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TRAINING GRID */}
      <section className="section-padding bg-demco-offwhite">
        <div className="container-demco grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative group"
          >
            <div className="aspect-[4/5] relative overflow-hidden img-animate grayscale">
              <Image
                src={images.training[1]}
                alt="Personal training session"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-demco-olive/5 -z-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-1 lg:order-2 space-y-8"
          >
            <motion.p variants={itemVariants} className="section-label">EXPERT COACHING</motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-heading leading-[0.9]">TRAINING &<br />GROUP FITNESS</motion.h2>
            <motion.p variants={itemVariants} className="font-testimonial text-lg text-demco-purple/80 leading-relaxed">
              PEAK FITNESS IS FILLED WITH LAUGHTER, LOVE, STRENGTH, AND FUN. OUR COMMUNITY IS WHAT MAKES US SPECIAL.
            </motion.p>
            <motion.div variants={itemVariants} className="pt-6">
              <Link href="/memberships" className="btn-pill btn-secondary py-5 px-10">
                EXPLORE MEMBERSHIPS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="section-label">THE TEAM</p>
              <h2 className="text-5xl md:text-8xl font-heading leading-tight">MEET OUR<br />COACHES.</h2>
            </div>
            <Link href="/about" className="font-testimonial text-sm uppercase tracking-widest border-b border-demco-purple pb-2 hover:text-demco-olive hover:border-demco-olive transition-all">
              ALL TRAINERS
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { name: 'SARAH JOHNSON', role: 'OWNER + HEAD COACH', img: images.coaches[0] },
              { name: 'MIKE CHEN', role: 'STRENGTH COACH', img: images.coaches[1] },
              { name: 'ALEX RIVERA', role: 'MOBILITY SPECIALIST', img: images.coaches[2] },
            ].map((coach, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[3/4] mb-8 overflow-hidden img-animate grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading leading-none">{coach.name}</h3>
                  <p className="font-testimonial text-xs tracking-widest text-demco-olive">{coach.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-black p-1 md:p-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
          {images.training.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-square overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={img}
                alt={`Training ${i + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-demco-cream text-center relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 w-full opacity-5 pointer-events-none select-none -translate-y-1/2 overflow-hidden whitespace-nowrap">
          <h2 className="text-[25rem] font-heading font-black">MOVE MOVE MOVE MOVE</h2>
        </div>

        <div className="container-demco max-w-5xl space-y-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[11rem] font-heading leading-[0.8] tracking-tighter"
          >
            READY TO<br />TRANSFORM?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <Link href="/contact" className="btn-pill btn-primary py-8 px-20 text-2xl">
              CLAIM FREE CLASS
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
