export function Gallery() {
  const images = [
    { src: "/the-venue19.jpg", alt: "Ceremony Space" },
    { src: "/1513-chimney4.jpg", alt: "Reception Hall" },
    { src: "/1513-moment2.jpg", alt: "Couple Portrait" },
    { src: "/1513-moment37.jpg", alt: "Table Settings" },
    { src: "/1513-venue25.jpg", alt: "Sunset Views" },
    { src: "/1513-venue23.jpg", alt: "Gardens" },
    { src: "/the-venue2.jpg", alt: "Ceremony Space" },
    { src: "/1513-moment11.jpg", alt: "Reception Hall" },
    { src: "/1513-moment4.jpg", alt: "Couple Portrait" },
    { src: "/1513-moment20.jpg", alt: "Table Settings" },
    { src: "/1513-venue7.jpg", alt: "Sunset Views" },
    { src: "/1513-moment18.jpg", alt: "Gardens" },
    { src: "/the-moment12.jpg", alt: "Ceremony Space" },
    { src: "/the-moment13.jpg", alt: "Reception Hall" },
    { src: "/1513-table-capture2.jpg", alt: "Couple Portrait" },
    { src: "/the-moment14.jpg", alt: "Table Settings" },
    { src: "/1513-spaces3.jpg", alt: "Sunset Views" },
    { src: "/1513-dining2.jpg", alt: "Gardens" },
    { src: "/1513-dining3.jpg", alt: "Ceremony Space" },
    { src: "/the-dining2.jpg", alt: "Reception Hall" },
    { src: "/the-venue18.jpg", alt: "Couple Portrait" },
    { src: "/the-venue26.jpg", alt: "Table Settings" },
    { src: "/1513-venue24.jpg", alt: "Sunset Views" },
    { src: "/the-dining1.jpg", alt: "Gardens" },
    { src: "/1513-moment8.jpg", alt: "Reception Hall" },
    { src: "/1513-moment10.jpg", alt: "Couple Portrait" },
    { src: "/1513-spaces1.jpg", alt: "Table Settings" },
    { src: "/1513-venue24.jpg", alt: "Sunset Views" },
    { src: "/the-dining1.jpg", alt: "Gardens" },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our stunning venue through the eyes of couples who celebrated their special day with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-venue-hover-overlay transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
