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
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.about}
          alt="About Peak Fitness"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center text-demco-offwhite px-4 mt-20 md:mt-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-testimonial text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 opacity-80"
          >
            OUR STORY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.9] tracking-tighter"
          >
            ABOUT<br />PEAK.
          </motion.h1>
        </div>
      </section>

      {/* WHY WE MOVE (Detailed structure matched to source code) */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading text-demco-purple leading-none hover:text-demco-olive transition-colors">
              WHY WE MOVE.
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-90">
                AT PEAK, YOU ARE SURROUNDED BY A TEAM OF PASSIONATE AND KNOWLEDGEABLE COACHES WHO ARE DEDICATED TO HELPING YOU BECOME A BETTER VERSION OF YOURSELF. THE <span className="font-black">PEAK</span><span className="font-light">FITNESS</span> GYM AND COMMUNITY WILL MOTIVATE, INSPIRE, ENCOURAGE, AND PUSH YOU TO REACH AND EXCEED YOUR GOALS. WE HELP YOU PERFORM BETTER, LOOK GOOD, AND FEEL AMAZING.
              </p>
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-90">
                WE FOCUS ON MOVEMENT, MOBILITY, AGILITY, AND STRENGTH TRAINING IN THE MOST EFFICIENT, SAFE, AND FUN WAY POSSIBLE. FOR US, IT IS NOT JUST A WORKOUT, IT IS ABOUT YOU CHANGING YOUR LIFESTYLE, ENJOYING MOVEMENT, AND GETTING STRONGER AND HEALTHIER.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[650px] w-full img-animate overflow-hidden shadow-xl"
          >
            <Image
              src={images.training[0]}
              alt="Training Group"
              fill
              className="object-cover"
            />
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
              src={images.training[1]}
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
              <h2 className="text-7xl md:text-9xl font-heading text-demco-purple leading-none tracking-tighter hover:text-demco-olive transition-colors">OUR GOALS</h2>
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-80">
                OUR TEAM WORKS WITH YOU AND CREATES A CUSTOMIZED WORKOUT PLAN THAT FITS YOUR BODY AND NEEDS, TRACKING AND SAVING EVERY WORKOUT. WE ARE DEDICATED TO CONTINUOUSLY HELPING YOU CREATE AND ACHIEVE NEW GOALS UTILIZING WEEKLY CHECK-INS. WE DISCUSS GOAL SETTING, NUTRITION HABITS AND YOUR OVERALL WELL-BEING AND MENTAL HEALTH. WE BELIEVE YOUR HEALTH IS MUCH MORE THAN YOUR WORKOUT; IT IS HOW YOU FUEL YOUR BODY, MANAGE YOUR STRESS AND CREATE DAILY ROUTINES.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-12">
              <h2 className="text-7xl md:text-9xl font-heading text-demco-purple leading-none tracking-tighter hover:text-demco-olive transition-colors">OUR MISSION</h2>
              <p className="font-testimonial text-lg md:text-xl leading-relaxed text-demco-purple text-justify opacity-80">
                <span className="font-black">PEAK</span><span className="font-light">FITNESS</span> IS AN ENVIRONMENT THAT IS FILLED WITH LAUGHTER, LOVE, STRENGTH AND FUN. IT IS IMPORTANT TO HAVE A SPACE AND COMMUNITY THAT EMBODIES DEDICATION, HARD WORK AND SUPPORT AND <span className="font-black">PEAK</span><span className="font-light">FITNESS</span> IS JUST THAT. OUR COMMUNITY IS WHAT MAKES THE GYM SO SPECIAL. YOU WON'T FIND ANOTHER PLACE WHERE YOU DEVELOP STRENGTH, MAINTAIN AND GAIN HEALTH, BUT ALSO HAVE A COMMUNITY OF INDIVIDUALS THAT TRULY BECOME YOUR FRIENDS.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MEET OUR COACHES */}
      <section className="section-padding bg-demco-cream">
        <div className="container-demco text-center mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] font-heading leading-none tracking-tighter"
          >
            MEET OUR COACHES.
          </motion.h1>
        </div>

        <div className="container-demco">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { name: 'SARAH JOHNSON', role: 'OWNER + HEAD COACH', img: images.coaches[0], pos: 'center' },
              { name: 'MIKE CHEN', role: 'STRENGTH COACH', img: images.coaches[1], pos: 'top' },
              { name: 'ALEX RIVERA', role: 'MOBILITY SPECIALIST', img: images.coaches[2], pos: 'center' },
            ].map((coach, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/5] mb-12 overflow-hidden img-animate grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ objectPosition: coach.pos }}
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
    </main>
  );
}
