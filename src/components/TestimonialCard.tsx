import Image from "next/image";
import { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  layout?: "image-left" | "image-right";
}

export default function TestimonialCard({
  testimonial,
  layout = "image-left",
}: TestimonialCardProps) {
  const isImageLeft = layout === "image-left";

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isImageLeft ? "md:grid-flow-dense" : ""
      }`}
    >
      <div className={!isImageLeft ? "md:col-start-2" : ""}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className={!isImageLeft ? "md:col-start-1 md:row-start-1" : ""}>
        <blockquote className="text-xl sm:text-2xl leading-relaxed mb-6 text-gray-medium">
          "{testimonial.quote}"
        </blockquote>
        <p className="text-base font-semibold">
          — {testimonial.name}
          {testimonial.age && `, ${testimonial.age}`}
        </p>
      </div>
    </div>
  );
}

