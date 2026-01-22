"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const galleryImages = [
  {
    src: "https://source.unsplash.com/800x600/?gym-workout-training",
    alt: "Training session",
    ratio: "4/3",
  },
  {
    src: "https://source.unsplash.com/600x800/?strength-training",
    alt: "Strength training",
    ratio: "3/4",
  },
  {
    src: "https://source.unsplash.com/800x800/?personal-training",
    alt: "Personal training",
    ratio: "1/1",
  },
  {
    src: "https://source.unsplash.com/1000x600/?fitness-community",
    alt: "Fitness community",
    ratio: "5/3",
  },
  {
    src: "https://source.unsplash.com/600x800/?gym-equipment",
    alt: "Gym equipment",
    ratio: "3/4",
  },
  {
    src: "https://source.unsplash.com/800x600/?group-fitness-class",
    alt: "Group fitness class",
    ratio: "4/3",
  },
];

export default function ImageGallery() {
  return (
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
              className={`relative overflow-hidden group ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-96">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

