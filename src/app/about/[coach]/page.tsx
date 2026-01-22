import { notFound } from "next/navigation";
import Image from "next/image";
import { coaches } from "@/lib/data/coaches";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CoachPageProps {
  params: {
    coach: string;
  };
}

export async function generateStaticParams() {
  return coaches.map((coach) => ({
    coach: coach.slug,
  }));
}

export default function CoachPage({ params }: CoachPageProps) {
  const coach = coaches.find((c) => c.slug === params.coach);

  if (!coach) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold lowercase tracking-tight mb-2">
            {coach.name.toLowerCase()}
          </h1>
          <p className="text-lg text-white/90">{coach.title}</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-gray-medium hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Coaches
            </Link>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-medium mb-8">
                {coach.bio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    {coach.certifications.map((cert, i) => (
                      <li key={i} className="text-base text-gray-medium">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wide text-gray-medium mb-4">
                    Specialties
                  </h3>
                  <ul className="space-y-2">
                    {coach.specialties.map((specialty, i) => (
                      <li key={i} className="text-base text-gray-medium">
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {coach.favoriteExercise && (
                <div className="mb-4">
                  <span className="text-sm text-gray-medium">
                    Favorite Exercise:{" "}
                  </span>
                  <span className="text-base font-semibold">
                    {coach.favoriteExercise}
                  </span>
                </div>
              )}

              {coach.funFact && (
                <div className="pt-8 border-t border-gray-light">
                  <p className="text-base text-gray-medium">
                    <span className="font-semibold">Fun Fact: </span>
                    {coach.funFact}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12">
              <Link
                href="/memberships"
                className="inline-block px-8 py-4 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
              >
                Train with {coach.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

