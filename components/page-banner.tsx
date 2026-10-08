import { HeroOverlay } from "@/components/hero-overlay"
import { ResponsiveImage } from "@/components/responsive-image"

interface PageBannerProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export function PageBanner({ title, description, image, imageAlt }: PageBannerProps) {
  const src = !image
    ? "/1513-hero-pic.jpg"
    : image.startsWith("/")
      ? image
      : `/${image}`

  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src={src}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
          sizes="100vw"
          loading="eager"
        />
        <HeroOverlay />
      </div>

      <div
        className="relative z-10 text-center text-venue-text-light px-4"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65)" }}
      >
        <div className="hero-text-scrim pointer-events-none absolute -inset-x-8 -inset-y-8 -z-10" aria-hidden />
        <h1 className="font-serif text-4xl md:text-6xl mb-4 text-balance">{title}</h1>
        {description ? (
          <p className="text-xl md:text-2xl font-semibold text-venue-text-light max-w-2xl mx-auto text-balance">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
