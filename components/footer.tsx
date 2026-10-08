import Link from "next/link"
import { siteFacts } from "@/lib/site"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "The Venue" },
  { href: "/packages", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Get Pricing" },
  { href: "/book-tour", label: "Book a Tour" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">1513 at Stone Creek</h3>
            <p className="text-primary-foreground/85 leading-relaxed mb-4">
              All-inclusive weddings and events in {siteFacts.city}
            </p>
            <address className="not-italic text-primary-foreground/85 leading-relaxed space-y-1">
              {siteFacts.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div>
                <a href={`tel:+14702960272`} className="hover:text-primary-foreground">
                  {siteFacts.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${siteFacts.email}`} className="hover:text-primary-foreground">
                  {siteFacts.email}
                </a>
              </div>
            </address>
            <div className="mt-4 text-primary-foreground/85 text-sm space-y-1">
              {siteFacts.hours.map((row) => (
                <div key={row.days}>
                  {row.days}: {row.time}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/85">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/stonecreekvenue/?hl=en"
                className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/stonecreekinnvenue"
                className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
              >
                Facebook
              </a>
            </div>
            <ul className="space-y-2 text-primary-foreground/85">
              <li>
                <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} 1513 at Stone Creek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
