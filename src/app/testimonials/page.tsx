'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { images } from '@/lib/data';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'TAMIE C.',
      role: 'Client Since 2022',
      quote: `I started working with the team about two years ago. I'm 70 years old. My goal was to build upper arm strength and make sure I was steady on my feet. The trainers are awesome. Their instincts are excellent with regard to the type of exercise I needed and how to make adjustments. Today I've got my own routine and go to my gym three times a week. You can even feel the muscles in my arms, which I never had before. I highly recommend this program. You're never too old to learn how to take care of your body.`,
      image: images.testimonials[0],
    },
    {
      name: 'LESLIE S.',
      role: 'Client Since 2023',
      quote: `I generally need to be forced into a gym and to work out, but working out here is a game changer! The coaches encourage me, while at the same time holding me accountable to my commitments. The positive environment creates a space where I can get personal attention and the best individualized work out for my personal needs. I work out consistently now because they push me to reach goals I did not even know I could reach!`,
      image: images.testimonials[1],
    },
    {
      name: 'PHIL G.',
      role: 'Client Since 2021',
      quote: `I have been going for some kind of fitness training for almost 40 years. Most trainers talk a good game, but then rely on the same template. There is no such thing as "one size fits all." The coaches here customize my workout to me, my size, and what I need to be fit. They aren't judgmental. Sure balance and flexibility are important, and we do some innovative work on these two vital aspects. Yet, there is no condescension—the workout also develops my body. I am beginning to look and feel better.`,
      image: images.testimonials[2],
    },
  ];

  return (
    <main className="bg-demco-cream">
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
          <motion.p className="section-label !text-demco-cream uppercase mb-6">Success Stories</motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-heading leading-[0.9]"
          >
            REAL RESULTS.<br />REAL REVIEWS.
          </motion.h1>
        </div>
      </section>

      {/* TESTIMONIALS (Stacked, bold, atmospheric) */}
      <section className="section-padding">
        <div className="container-demco max-w-5xl space-y-32">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className={`w-full md:w-1/2 aspect-square relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover grayscale"
                />
                <div className={`absolute inset-0 border-[20px] border-demco-cream/20`} />
              </div>

              <div className={`w-full md:w-1/2 space-y-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="h-px bg-demco-purple/20 w-16" />
                <p className="text-xl md:text-2xl font-body italic text-demco-purple/90 leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="pt-4">
                  <p className="text-2xl font-heading tracking-widest">{review.name}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-demco-olive mt-1">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-demco-offwhite text-center">
        <div className="container-demco space-y-12">
          <h2 className="text-4xl md:text-6xl font-heading">BECOME OUR NEXT SUCCESS STORY</h2>
          <Link
            href="/contact"
            className="btn-pill btn-primary text-xl px-16 py-6"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
