import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Transform your wellness routine starting today.
            </h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-black"
                required
              />
              <button className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition">
                Sign Up
              </button>
            </form>
          </div>

          <div>
            <p className="text-sm uppercase mb-2">Location</p>
            <p className="mb-4">
              2521 4th Ave<br />
              Seattle, WA 98121
            </p>
            <p>
              <Link href="tel:2069197490" className="hover:underline">
                (206) 919-7490
              </Link>
              <br />
              <Link href="mailto:info@peakfitness.com" className="hover:underline">
                info@peakfitness.com
              </Link>
            </p>
          </div>

          <div>
            <p className="text-sm uppercase mb-2">Hours</p>
            <p>
              Monday/Wednesday/Friday: <strong>6AM-7PM</strong><br />
              Tuesday/Thursday: <strong>6AM-8PM</strong><br />
              Saturday: <strong>8-11AM</strong><br />
              Sunday: <strong>9-10AM</strong>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          © 2025 Peak Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
