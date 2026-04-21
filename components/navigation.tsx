"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/venue", label: "The Venue" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    // { href: "/amenities", label: "Amenities" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={
        [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // MOBILE: always solid background
          "bg-venue-nav-bg",
          // DESKTOP (md+): scroll behavior
          isScrolled
            ? "md:bg-venue-nav-bg md:backdrop-blur-sm md:shadow-lg"
            : "md:bg-transparent"
        ].join(" ")
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif text-venue-text-light">
            1513 at Stone Creek
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-venue-text-light hover:text-venue-text-muted transition-colors text-sm tracking-wide ${pathname === link.href ? "border-b-2 border-venue-text-light" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link href="https://premiervenuepricing.com/pricing-pamphlet-1513-at-stone-creek" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-transparent border-venue-text-light text-venue-text-light hover:bg-venue-text-light hover:text-primary"
              >
                Download Brochure
              </Button>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-venue-text-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-venue-text-light hover:text-venue-text-muted transition-colors ${pathname === link.href ? "font-semibold" : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link href="https://premiervenuepricing.com/stone-creek-inn-wedding-pricing" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-1/2 mt-4 bg-transparent border-venue-text-light text-venue-text-light"
              >
                Download Brochure
              </Button>
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  )
}
