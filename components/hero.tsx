import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadBrochuresButton } from "@/components/download-brochures-button"
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
      </div>

      <div className="relative z-10 text-center text-foreground px-4 max-w-4xl">
        <div className="hero-text-scrim pointer-events-none absolute -inset-x-6 -inset-y-5 -z-10" aria-hidden />
        <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-foreground">1513 at Stone Creek</p>
        <h1 className="font-serif text-4xl md:text-6xl mb-6 text-balance text-foreground" style={{ fontWeight: 400 }}>
          Marry your best friend. We&apos;ll take care of the rest.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-foreground">
          A family-owned venue by Haley and Gina, built on faith and hospitality, in Rockmart, GA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownloadBrochuresButton variant="solid" size="lg" className="min-h-12 px-8" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 px-8 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
          >
            <Link href="/book-tour">Book a Tour</Link>
          </Button>
        </div>
      </div>

      <a href="#content" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
