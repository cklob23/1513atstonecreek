"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadBrochuresButton } from "@/components/download-brochures-button"
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
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-venue-nav-bg backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif text-venue-text-light whitespace-nowrap">
            1513 at Stone Creek
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-venue-text-light hover:text-venue-text-muted transition-colors text-sm tracking-wide whitespace-nowrap ${pathname === link.href ? "border-b-2 border-venue-text-light" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Book Tour</Link>
            </Button>
            <DownloadBrochuresButton variant="outline" />
          </div>

          {/* Mobile Menu Button */}
          <button className="xl:hidden text-venue-text-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden pb-4 px-4 -mx-4 bg-venue-nav-bg shadow-lg">
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
            <Button asChild className="w-full mt-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Tour
              </Link>
            </Button>
            <DownloadBrochuresButton variant="outline" className="w-full mt-4" />
          </div>
        )}
      </div>
    </nav>
  )
}
