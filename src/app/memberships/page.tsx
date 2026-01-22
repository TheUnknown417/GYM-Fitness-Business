'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/data';

export default function MembershipsPage() {
  const memberships = [
    {
      name: 'SEMI-PRIVATE TRAINING',
      description: 'Get individualized coaching and a fully customized program completely catered to your goals and abilities in a small-group setting (max 8 people). Enjoy the benefits of personal training with the added support and energy of a small group.',
      intro: 'Intro offer $250 for first month',
      price: 'Memberships Starting at $325/month',
      image: images.memberships.semiPrivate,
    },
    {
      name: 'GROUP FITNESS TRAINING',
      description: 'Group Fitness classes are welcome to all fitness levels focusing on strength and conditioning. These classes combine cardio, strength training, and flexibility workouts, allowing you to engage different muscle groups and improve overall fitness.',
      intro: null,
      price: 'Memberships Starting at $120/month',
      image: images.memberships.group,
    },
    {
      name: '1:1 PRIVATE TRAINING',
      description: 'Private 1:1 coaching provides a personalized fitness experience with expert trainers. Sessions are 60 minutes and include weekly check-ins to track progress and adjust plans, ensuring accountability and motivation.',
      intro: null,
      price: 'Memberships Starting at $95/session',
      image: images.memberships.private,
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={images.hero.memberships}
          alt="Memberships"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            discover the right membership<br />
            for your fitness goals
          </h1>
          <Link
            href="#memberships"
            className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
          >
            START YOUR JOURNEY
          </Link>
        </div>
      </section>

      {/* MEMBERSHIP CARDS */}
      <section className="py-20 px-4" id="memberships">
        <div className="max-w-7xl mx-auto space-y-20">
          {memberships.map((tier, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`relative h-96 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-3xl font-bold mb-4">{tier.name}</h2>
                <p className="text-lg text-gray-700 mb-6">{tier.description}</p>

                {tier.intro && (
                  <p className="text-lg font-semibold mb-2">{tier.intro}</p>
                )}
                <p className="text-lg font-semibold mb-6">{tier.price}</p>

                <hr className="border-black mb-6" />

                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
