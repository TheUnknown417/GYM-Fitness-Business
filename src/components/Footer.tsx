import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-demco-purple text-demco-cream py-20 px-6">
      <div className="container-demco">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-heading tracking-widest text-demco-cream">
              Transform your wellness routine starting today.
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-demco-cream/30 py-3 font-mono text-sm uppercase tracking-widest focus:border-demco-olive outline-none transition-colors"
                required
              />
              <button className="btn-pill bg-demco-cream text-demco-purple w-fit hover:bg-demco-olive hover:text-white border-none">
                Sign Up
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <p className="section-label !text-demco-cream !opacity-50">Location</p>
            <p className="font-body text-lg leading-relaxed">
              2521 4th Ave<br />
              Seattle, WA 98121
            </p>
            <div className="pt-4 space-y-2">
              <Link href="tel:2069197490" className="block font-mono text-sm hover:text-demco-olive transition-colors">
                (206) 919-7490
              </Link>
              <Link href="mailto:info@peakfitness.com" className="block font-mono text-sm hover:text-demco-olive transition-colors">
                info@peakfitness.com
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-label !text-demco-cream !opacity-50">Hours</p>
            <div className="font-mono text-sm space-y-3 uppercase tracking-widest">
              <div className="flex justify-between border-b border-demco-cream/10 pb-1">
                <span>MON/WED/FRI</span>
                <span>6AM - 7PM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-1">
                <span>TUE/THU</span>
                <span>6AM - 8PM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-1">
                <span>SATURDAY</span>
                <span>8AM - 11AM</span>
              </div>
              <div className="flex justify-between border-b border-demco-cream/10 pb-1">
                <span>SUNDAY</span>
                <span>9AM - 10AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-demco-cream/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] opacity-40">
          <span>© 2025 Peak Fitness</span>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-demco-cream">Privacy</Link>
            <Link href="/terms" className="hover:text-demco-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
