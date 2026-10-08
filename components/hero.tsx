import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadBrochuresButton } from "@/components/download-brochures-button"
import { HeroOverlay } from "@/components/hero-overlay"
import { ResponsiveImage } from "@/components/responsive-image"

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src="/1513-photo-301.png"
          alt="Pond and tree-lined grounds at 1513 at Stone Creek, a wedding and event venue in Rockmart, Georgia"
          className="w-full h-full object-cover"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <HeroOverlay />
      </div>

      <div className="relative z-10 text-center text-venue-text-light px-4 hero-text-readable">
        <div className="hero-text-scrim pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10" aria-hidden />
        <h1 className="font-serif text-6xl md:text-8xl mb-4 text-balance italic" style={{ fontWeight: 300 }}>
          1513 at Stone Creek
        </h1>
        <p className="text-xl md:text-2xl mb-3 text-venue-text-light max-w-3xl mx-auto font-semibold leading-snug">
          All-inclusive weddings and events in Rockmart, GA, for up to 200 guests
        </p>
        <p className="text-base md:text-lg mb-8 text-venue-text-light/95 max-w-2xl mx-auto uppercase tracking-wide">
          Your Story Begins at 1513 at Stone Creek
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownloadBrochuresButton variant="hero" size="lg" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 px-8 bg-transparent border-venue-text-light text-venue-text-light hover:bg-venue-text-light hover:text-primary"
          >
            <Link href="/book-tour">Book a Tour</Link>
          </Button>
        </div>
      </div>

      <a href="#content" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-venue-text-light animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
