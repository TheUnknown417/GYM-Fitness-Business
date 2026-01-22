'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/data';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'tamie c.',
      quote: `I started working with the team about two years ago. I'm 70 years old. My goal was to build upper arm strength and make sure I was steady on my feet. The trainers are awesome. Their instincts are excellent with regard to the type of exercise I needed and how to make adjustments. Today I've got my own routine and go to my gym three times a week. You can even feel the muscles in my arms, which I never had before. I highly recommend this program. You're never too old to learn how to take care of your body.`,
      image: images.testimonials[0],
    },
    {
      name: 'leslie s.',
      quote: `I generally need to be forced into a gym and to work out, but working out here is a game changer! The coaches encourage me, while at the same time holding me accountable to my commitments. The positive environment creates a space where I can get personal attention and the best individualized work out for my personal needs. I work out consistently now because they push me to reach goals I did not even know I could reach!`,
      image: images.testimonials[1],
    },
    {
      name: 'phil g.',
      quote: `I have been going for some kind of fitness training for almost 40 years. Most trainers talk a good game, but then rely on the same template. There is no such thing as "one size fits all." The coaches here customize my workout to me, my size, and what I need to be fit. They aren't judgmental. Sure balance and flexibility are important, and we do some innovative work on these two vital aspects. Yet, there is no condescension—the workout also develops my body. I am beginning to look and feel better.`,
      image: images.testimonials[2],
    },
    {
      name: 'sam k.',
      quote: `I have been coming here for 6 months now. The gym is very well equipped and most importantly the vibe is very friendly. The trainers are amazing and the monthly programs are personalized and focus on overall development and growth. I had an ongoing injury and my program was curated to help with it. The results are amazing. I never get bored because every month there is a new program. I didn't do any weight training before but in these 6 months I have become stronger.`,
      image: images.testimonials[3],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={images.hero.testimonials}
          alt="Testimonials"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            real results. real reviews.<br />
            hear what our clients are saying!
          </h1>
          <p className="text-xl mb-8">
            Every success story starts with a single step. Check out what our
            happy clients have to say and claim your free first class to begin
            your journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
          >
            first class free
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {testimonials.map((review, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-start`}>
              <div className={`relative h-96 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className={`space-y-4 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-lg leading-relaxed text-gray-700">
                  {review.quote}
                </p>
                <p className="text-xl font-bold">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MORE REVIEWS CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">read more success stories</h2>
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            className="inline-block border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition"
          >
            More Reviews
          </Link>
        </div>
      </section>
    </main>
  );
}
