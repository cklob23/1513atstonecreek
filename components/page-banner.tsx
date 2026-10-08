import { HeroOverlay } from "@/components/hero-overlay"
import { ResponsiveImage } from "@/components/responsive-image"

interface PageBannerProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
  overlay?: "default" | "strong"
}

export function PageBanner({ title, description, image, imageAlt, overlay = "default" }: PageBannerProps) {
  const src = !image
    ? "/1513-hero-pic.jpg"
    : image.startsWith("/")
      ? image
      : `/${image}`
  const strong = overlay === "strong"

  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src={src}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        {strong ? <div className="absolute inset-0 hero-dark-overlay" aria-hidden /> : <HeroOverlay />}
      </div>

      <div
        className={`relative z-10 text-center text-venue-text-light px-4 ${strong ? "" : "hero-text-readable"}`}
      >
        {strong ? null : (
          <div className="hero-text-scrim pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10" aria-hidden />
        )}
        <h1 className="font-serif text-4xl md:text-6xl mb-4 text-balance text-white">{title}</h1>
        {description ? (
          <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl mx-auto text-balance">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
