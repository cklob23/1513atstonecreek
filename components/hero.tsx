import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { DownloadBrochuresButton } from "@/components/download-brochures-button"

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/New_1513.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-venue-hero-overlay" />
      </div>

      <div
        className="relative z-10 text-center text-venue-text-light px-4"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
      >
        <h1 className="font-serif text-6xl md:text-8xl mb-4 text-balance italic" style={{ fontWeight: 300 }}>
          1513 at Stone Creek
        </h1>
        <p className="text-lg md:text-xl mb-2 text-venue-text-muted max-w-2xl mx-auto uppercase tracking-wider">
          Your Story Begins at 1513 at Stone Creek
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/gallery"
            className="inline-flex h-11 items-center justify-center rounded-md border border-venue-text-light/60 bg-venue-text-light/10 px-8 text-base font-medium text-venue-text-light backdrop-blur-sm transition-colors hover:bg-venue-text-light/20"
          >
            View Gallery
          </Link>
          <DownloadBrochuresButton variant="solid" size="lg" className="h-11 px-8" />
        </div>
      </div>

      <a href="#content" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-venue-text-light animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
