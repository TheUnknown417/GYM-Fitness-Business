"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const galleryImages = [
  "https://source.unsplash.com/800x600/?gym-interior-equipment",
  "https://source.unsplash.com/800x600/?fitness-studio-space",
  "https://source.unsplash.com/800x600/?gym-training-area",
  "https://source.unsplash.com/800x600/?personal-training-room",
  "https://source.unsplash.com/800x600/?gym-weights-equipment",
  "https://source.unsplash.com/800x600/?fitness-studio",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold lowercase tracking-tight mb-4"
          >
            Let's get started
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Have questions, suggestions or just want to say hello? Fill out the
            form below and we'll reach out!
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold lowercase tracking-tight mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-2">
                      Location
                    </h3>
                    <address className="not-italic text-base leading-relaxed">
                      2521 4th Ave
                      <br />
                      Seattle, WA 98121
                    </address>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline mt-2 inline-block"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-2">
                      Phone
                    </h3>
                    <Link
                      href="tel:206-919-7490"
                      className="text-base hover:text-accent transition-colors"
                    >
                      (206) 919-7490
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-2">
                      Email
                    </h3>
                    <Link
                      href="mailto:info@studio.com"
                      className="text-base hover:text-accent transition-colors"
                    >
                      info@studio.com
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-2">
                      Hours
                    </h3>
                    <div className="text-base leading-relaxed space-y-1">
                      <p>Mon/Wed/Fri: 6AM - 7PM</p>
                      <p>Tue/Thu: 6AM - 8PM</p>
                      <p>Saturday: 8AM - 11AM</p>
                      <p>Sunday: 9AM - 10AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-video overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Gym interior ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

