interface PageBannerProps {
  title: string
  description: string
  image: string
}

export function PageBanner({ title, description, image }: PageBannerProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={`${image}?height=400&width=1200`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-venue-hero-overlay" />
      </div>

      <div className="relative z-10 text-center text-venue-text-light px-4">
        <h1 className="font-serif text-4xl md:text-6xl mb-4 text-balance">{title}</h1>
        <p className="text-lg md:text-xl text-venue-text-muted max-w-2xl mx-auto text-balance">{description}</p>
      </div>
    </section>
  )
}
