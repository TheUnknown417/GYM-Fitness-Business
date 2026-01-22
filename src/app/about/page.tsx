'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function AboutPage() {
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
    <main className="bg-demco-cream min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.about}
          alt="About Peak Fitness"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-demco-purple/30" />

        <div className="relative z-10 text-center text-demco-offwhite px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[12rem] font-heading leading-[0.8]"
          >
            ABOUT<br />PEAK.
          </motion.h1>
        </div>
      </section>

      {/* WE ARE PEAK (Introduction Section) */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-5xl space-y-12"
          >
            <motion.p variants={itemVariants} className="section-label">WE ARE PEAK FITNESS</motion.p>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-9xl font-heading text-demco-purple leading-[0.9]">
              ELEVATING YOUR<br />MOOD.
            </motion.h2>
            <motion.div variants={itemVariants} className="h-2 bg-demco-purple w-32" />
            <motion.p variants={itemVariants} className="font-testimonial text-xl md:text-3xl leading-relaxed text-demco-purple max-w-4xl text-justify">
              PEAK FITNESS WAS FOUNDED ON THE BELIEF THAT EVERYONE DESERVES A MOVEMENT PRACTICE THAT IS BOTH CHALLENGING AND SUSTAINABLE. WE DON'T JUST TEACH EXERCISES; WE CULTIVATE A COMMUNITY OF INDIVIDUALS DEDICATED TO LONG-TERM HEALTH AND VITALITY.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & GOALS GRID (Matched to DEMCO) */}
      <section className="section-padding bg-demco-offwhite">
        <div className="container-demco grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Large Vertical Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[1100px] w-full img-animate overflow-hidden order-2 lg:order-1 shadow-2xl"
          >
            <Image
              src={images.training[3]}
              alt="Our Facility Vertical"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Text Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-48 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="space-y-12">
              <h2 className="text-7xl md:text-9xl font-heading text-demco-purple leading-none tracking-tighter">OUR GOALS</h2>
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-80">
                OUR TEAM WORKS WITH YOU AND CREATES A CUSTOMIZED WORKOUT PLAN THAT FITS YOUR BODY AND NEEDS, TRACKING AND SAVING EVERY WORKOUT. WE ARE DEDICATED TO CONTINUOUSLY HELPING YOU CREATE AND ACHIEVE NEW GOALS UTILIZING WEEKLY CHECK-INS. WE DISCUSS GOAL SETTING, NUTRITION HABITS AND YOUR OVERALL WELL-BEING AND MENTAL HEALTH. WE BELIEVE YOUR HEALTH IS MUCH MORE THAN YOUR WORKOUT; IT IS HOW YOU FUEL YOUR BODY, MANAGE YOUR STRESS AND CREATE DAILY ROUTINES.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-12">
              <h2 className="text-7xl md:text-9xl font-heading text-demco-purple leading-none tracking-tighter">OUR MISSION</h2>
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-80">
                PEAK FITNESS IS AN ENVIRONMENT THAT IS FILLED WITH LAUGHTER, LOVE, STRENGTH AND FUN. IT IS IMPORTANT TO HAVE A SPACE AND COMMUNITY THAT EMBODIES DEDICATION, HARD WORK AND SUPPORT AND PEAK FITNESS IS JUST THAT. OUR COMMUNITY IS WHAT MAKES THE GYM SO SPECIAL. YOU WON'T FIND ANOTHER PLACE WHERE YOU DEVELOP STRENGTH, MAINTAIN AND GAIN HEALTH, BUT ALSO HAVE A COMMUNITY OF INDIVIDUALS THAT TRULY BECOME YOUR FRIENDS.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section className="section-padding bg-demco-cream relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none -translate-y-1/2 overflow-hidden whitespace-nowrap">
          <h2 className="text-[30rem] font-heading font-black">PEAK PEAK PEAK PEAK</h2>
        </div>

        <div className="container-demco relative z-10">
          <div className="mb-32 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <p className="section-label">THE TEAM</p>
              <h2 className="text-6xl md:text-[10rem] font-heading leading-[0.8] tracking-tighter">MEET OUR<br />COACHES.</h2>
            </div>
            <div className="h-2 bg-demco-purple w-64 hidden lg:block mb-8" />
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[3/4] mb-12 overflow-hidden img-animate grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-heading leading-tight tracking-tight">{coach.name}</h3>
                  <p className="font-testimonial text-sm tracking-[0.3em] text-demco-olive uppercase">{coach.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-black text-demco-cream text-center relative overflow-hidden">
        <div className="container-demco max-w-6xl space-y-16 relative z-10">
          <p className="section-label !text-demco-cream opacity-60">READY TO JOIN THE COMMUNITY?</p>
          <h2 className="text-6xl md:text-[12rem] font-heading leading-[0.8] tracking-widest mb-16">MOVE<br />BETTER.</h2>
          <a href="/contact" className="btn-pill bg-white text-black hover:bg-demco-olive hover:text-white border-none text-2xl px-24 py-10 tracking-widest transition-all">
            GET STARTED
          </a>
        </div>
      </section>
    </main>
  );
}
