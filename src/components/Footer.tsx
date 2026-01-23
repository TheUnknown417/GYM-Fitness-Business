'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-reveal-container bg-demco-purple text-demco-cream overflow-hidden">
      <div className="container-demco pt-32 pb-16 px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-24 mb-32">
          <div className="space-y-8">
            <h3 className="text-2xl font-heading tracking-widest text-demco-cream leading-tight">
              TRANSFORM YOUR WELLNESS ROUTINE STARTING TODAY.
            </h3>
            <form className="flex flex-col gap-6">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-demco-cream/30 py-4 font-testimonial text-sm uppercase tracking-widest focus:border-demco-olive outline-none transition-colors w-full"
                required
              />
              <button className="btn-pill bg-demco-cream text-demco-purple w-fit hover:bg-demco-olive hover:text-white border-none py-4 px-12">
                SIGN UP
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <p className="section-label !text-demco-cream !opacity-50 !mb-2">LOCATION</p>
            <p className="font-testimonial text-xl leading-relaxed">
              2521 4TH AVE<br />
              SEATTLE, WA 98121
            </p>
            <div className="pt-6 space-y-3">
              <Link href="tel:2069197490" className="block font-testimonial text-sm hover:text-demco-olive transition-colors tracking-widest">
                (206) 919-7490
              </Link>
              <Link href="mailto:info@peakfitness.com" className="block font-testimonial text-sm hover:text-demco-olive transition-colors tracking-widest">
                INFO@PEAKFITNESS.COM
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <p className="section-label !text-demco-cream !opacity-50 !mb-2">HOURS</p>
            <div className="font-testimonial text-sm space-y-4 uppercase tracking-[0.2em]">
              <div className="flex justify-between border-b border-demco-cream/10 pb-2">
                <span>MON/WED/FRI</span>
                <span>6AM - 7PM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-2">
                <span>TUE/THU</span>
                <span>6AM - 8PM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-2">
                <span>SATURDAY</span>
                <span>8AM - 11AM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-2">
                <span>SUNDAY</span>
                <span>9AM - 10AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-demco-cream/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-testimonial uppercase tracking-[0.4em] opacity-40">
          <span>© 2025 PEAKFITNESS</span>
          <div className="flex gap-12">
            <Link href="/privacy" className="hover:text-demco-cream">PRIVACY</Link>
            <Link href="/terms" className="hover:text-demco-cream">TERMS</Link>
          </div>
        </div>
      </div>

      {/* GIANT BRAND REVEAL TEXT - Responsive Fix */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mt-8 sm:-mt-16 lg:-mt-32">
        <h2 className="text-[14vw] sm:text-[16vw] lg:text-[18vw] font-heading font-black text-demco-cream opacity-[0.08] leading-none text-center tracking-tighter whitespace-nowrap px-4">
          PEAKFITNESS
        </h2>
      </div>
    </footer>
  );
}
