import Link from "next/link";
import Image from "next/image";
import { Coach } from "@/lib/data/coaches";

interface CoachCardProps {
  coach: Coach;
}

export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden mb-4">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold lowercase tracking-tight mb-1">
          {coach.name.toLowerCase()}
        </h3>
        <p className="text-sm text-gray-medium mb-4">{coach.title}</p>
        <div className="h-px w-12 bg-gray-light mb-4" />
        <Link
          href={`/about/${coach.slug}`}
          className="text-xs font-semibold uppercase tracking-wide text-gray-medium hover:text-accent transition-colors"
        >
          READ BIO
        </Link>
      </div>
    </div>
  );
}

