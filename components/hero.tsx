import { ChevronDown } from "lucide-react"
import { DownloadBrochuresButton } from "@/components/download-brochures-button"
import { HeroOverlay } from "@/components/hero-overlay"

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/1513-photo-301.png"
          alt="1513 at Stone Creek Venue"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <HeroOverlay />
      </div>

      <div
        className="relative z-10 text-center text-venue-text-light px-4"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65)" }}
      >
        <div className="hero-text-scrim pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10" aria-hidden />
        <h1 className="font-serif text-6xl md:text-8xl mb-4 text-balance italic" style={{ fontWeight: 300 }}>
          1513 at Stone Creek
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-venue-text-light max-w-3xl mx-auto uppercase tracking-wide font-semibold">
          Your Story Begins at 1513 at Stone Creek
        </p>

        <div className="flex items-center justify-center">
          <DownloadBrochuresButton variant="solid" size="lg" className="h-11 px-8" />
        </div>
      </div>

      <a href="#content" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-venue-text-light animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
