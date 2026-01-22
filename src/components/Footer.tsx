import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 lowercase tracking-tight">
              Transform your wellness routine starting today.
            </h3>
            <NewsletterForm compact />
          </div>

          {/* Location Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-medium mb-4">
              Location
            </h4>
            <address className="not-italic text-sm leading-relaxed mb-4">
              2521 4th Ave
              <br />
              Seattle, WA 98121
            </address>
            <div className="space-y-2 text-sm">
              <Link
                href="tel:206-919-7490"
                className="block hover:text-accent transition-colors"
              >
                (206) 919-7490
              </Link>
              <Link
                href="mailto:info@studio.com"
                className="block hover:text-accent transition-colors"
              >
                info@studio.com
              </Link>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-medium mb-4">
              Hours
            </h4>
            <div className="text-sm leading-relaxed space-y-1">
              <p>Monday/Wednesday/Friday: 6AM-7PM</p>
              <p>Tuesday/Thursday: 6AM-8PM</p>
              <p>Saturday: 8-11AM</p>
              <p>Sunday: 9-10AM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-medium">
            © 2025 [Studio Name]
          </p>
          <div className="flex gap-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-medium hover:text-accent transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-medium hover:text-accent transition-colors"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

