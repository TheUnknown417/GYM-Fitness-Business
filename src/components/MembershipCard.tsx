import Link from "next/link";
import Image from "next/image";
import { Membership } from "@/lib/data/memberships";

interface MembershipCardProps {
  membership: Membership;
}

export default function MembershipCard({ membership }: MembershipCardProps) {
  return (
    <div className="bg-primary-white border border-gray-light overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={membership.image}
          alt={membership.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold lowercase tracking-tight mb-3">
          {membership.name.toLowerCase()}
        </h3>
        <p className="text-base leading-relaxed text-gray-medium mb-6">
          {membership.description}
        </p>
        
        <div className="mb-6 space-y-2">
          {membership.introOffer && (
            <p className="text-lg font-semibold text-accent">
              {membership.introOffer}
            </p>
          )}
          <p className="text-sm text-gray-medium">
            Memberships Starting at {membership.startingPrice}
          </p>
        </div>
        
        <div className="h-px w-12 bg-gray-light mb-6" />
        
        <Link
          href={membership.bookingLink}
          className="inline-block px-6 py-3 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

