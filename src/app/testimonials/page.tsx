'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { images } from '@/lib/data';

// Dynamically import Masonry to avoid SSR issues
const Masonry = dynamic(() => import('react-masonry-css'), {
  ssr: false,
});

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'TAMIE C.',
      quote: `I STARTED WORKING WITH THE TEAM ABOUT TWO YEARS AGO. I'M 70 YEARS OLD. MY GOAL WAS TO BUILD UPPER ARM STRENGTH AND MAKE SURE I WAS STEADY ON MY FEET. THE TRAINERS ARE AWESOME. THEIR INSTINCTS ARE EXCELLENT WITH REGARD TO THE TYPE OF EXERCISE I NEEDED AND HOW TO MAKE ADJUSTMENTS. TODAY I'VE GOT MY OWN ROUTINE AND GO TO MY GYM THREE TIMES A WEEK. YOU CAN EVEN FEEL THE MUSCLES IN MY ARMS, WHICH I NEVER HAD BEFORE. I HIGHLY RECOMMEND THIS PROGRAM. YOU'RE NEVER TOO OLD TO LEARN HOW TO TAKE CARE OF YOUR BODY.`,
      image: images.testimonials[0],
    },
    {
      id: 2,
      name: 'LESLIE S.',
      quote: `I GENERALLY NEED TO BE FORCED INTO A GYM AND TO WORK OUT, BUT WORKING OUT HERE IS A GAME CHANGER! THE COACHES ENCOURAGE ME, WHILE AT THE SAME TIME HOLDING ME ACCOUNTABLE TO MY COMMITMENTS. THE POSITIVE ENVIRONMENT CREATES A SPACE WHERE I CAN GET PERSONAL ATTENTION AND THE BEST INDIVIDUALIZED WORK OUT FOR MY PERSONAL NEEDS. I WORK OUT CONSISTENTLY NOW BECAUSE THEY PUSH ME TO REACH GOALS I DID NOT EVEN KNOW I COULD REACH!`,
      image: images.testimonials[1],
    },
    {
      id: 3,
      name: 'PHIL G.',
      quote: `I HAVE BEEN GOING FOR SOME KIND OF FITNESS TRAINING FOR ALMOST 40 YEARS. MOST TRAINERS TALK A GOOD GAME, BUT THEN RELY ON THE SAME TEMPLATE. THERE IS NO SUCH THING AS "ONE SIZE FITS ALL." THE COACHES HERE CUSTOMIZE MY WORKOUT TO ME, MY SIZE, AND WHAT I NEED TO BE FIT. THEY AREN'T JUDGMENTAL. SURE BALANCE AND FLEXIBILITY ARE IMPORTANT, AND WE DO SOME INNOVATIVE WORK ON THESE TWO VITAL ASPECTS. YET, THERE IS NO CONDESCENSION—THE WORKOUT ALSO DEVELOPS MY BODY. I AM BEGINNING TO LOOK AND FEEL BETTER.`,
      image: images.testimonials[2],
    },
    {
      id: 4,
      name: 'SAM K.',
      quote: `I HAVE BEEN COMING HERE FOR 6 MONTHS NOW. THE GYM IS VERY WELL EQUIPPED AND MOST IMPORTANTLY THE VIBE IS VERY FRIENDLY. THE TRAINERS ARE AMAZING AND THE MONTHLY PROGRAMS ARE PERSONALIZED AND FOCUS ON OVERALL DEVELOPMENT AND GROWTH. I HAD AN ONGOING INJURY AND MY PROGRAM WAS CURATED TO HELP WITH IT. THE RESULTS ARE AMAZING. I NEVER GET BORED BECAUSE EVERY MONTH THERE IS A NEW PROGRAM. I DIDN'T DO ANY WEIGHT TRAINING BEFORE BUT IN THESE 6 MONTHS I HAVE BECOME STRONGER.`,
      image: images.testimonials[3],
    },
    {
      id: 5,
      name: 'MARCUS R.',
      quote: `PEAK FITNESS HAS TOTALLY CHANGED MY PERSPECTIVE ON WHAT A GYM SHOULD BE. IT ISN'T JUST ABOUT THE EQUIPMENT; IT'S ABOUT THE PEOPLE. THE COACHES GENUINELY CARE ABOUT YOUR PROGRESS AND THE COMMUNITY IS INCREDIBLY SUPPORTIVE. I'VE ACHIEVED PERSONAL BESTS I NEVER THOUGHT POSSIBLE IN JUST A FEW MONTHS.`,
      image: images.testimonials[4]
    },
    {
      id: 6,
      name: 'ELENA D.',
      quote: `I'VE TRAINED AT MANY STUDIOS, BUT PEAK FITNESS IS ON ANOTHER LEVEL. THE SEMI-PRIVATE SESSIONS GIVE ME THE PERSONAL ATTENTION I NEED WHILE STILL FEELING LIKE PART OF THE GROUP. THE ATTENTION TO DETAIL IN THE PROGRAMMING IS UNMATCHED.`,
      image: images.testimonials[5]
    }
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-demco-cream min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero.testimonials}
          alt="Testimonials"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-demco-purple/40" />

        <div className="relative z-10 text-center text-demco-offwhite px-4 container-demco">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label !text-demco-cream mb-6"
          >
            WHAT OUR CLIENTS SAY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-heading leading-tight"
          >
            SUCCESS<br />STORIES.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link href="#reviews" className="btn-pill btn-secondary border-white text-white hover:bg-white hover:text-demco-purple">
              MORE REVIEWS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MASONRY TESTIMONIALS */}
      <section className="section-padding" id="reviews">
        <div className="container-demco">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {testimonials.map((review) => (
                <motion.div
                  key={review.id}
                  variants={itemVariants}
                  className="bg-demco-offwhite p-10 space-y-8 flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden img-animate">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="font-testimonial text-lg leading-relaxed text-demco-purple">
                      "{review.quote}"
                    </p>
                    <div className="h-px bg-demco-purple/10 w-12" />
                    <p className="font-heading text-xl tracking-widest">{review.name}</p>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER SECTION (Matched to screenshot) */}
      <section className="py-24 bg-[#E5E5E5] border-t border-b border-gray-300">
        <div className="container-demco grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading leading-tight">
              TRANSFORM YOUR WELLNESS ROUTINE STARTING TODAY.
            </h2>
            <p className="font-testimonial text-sm opacity-70 max-w-md">
              SIGN UP FOR OUR NEWSLETTER AND GET A FREE DIGITAL GUIDE WITH EXPERT TIPS, WORKOUTS, AND RECIPES—RIGHT IN YOUR INBOX.
            </p>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="w-full max-w-md">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white px-6 py-5 font-testimonial text-sm focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="btn-pill bg-black text-white hover:bg-demco-purple border-none px-12 py-4 font-heading tracking-widest text-base">
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
