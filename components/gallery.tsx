export function Gallery() {
  const images = [
    { src: "/1513-moment33.jpg", alt: "Gardens" },
    { src: "/CagleSP-25.jpg", alt: "1513 Photo 10" },
    { src: "/the-venue2.jpg", alt: "Ceremony Space" },
    { src: "/1513-moment41.jpg", alt: "Sunset Views" },
    { src: "/1513-suite1.JPG", alt: "Reception Hall" },
    { src: "/CagleSP-39.jpg", alt: "1513 Photo 19" },
    { src: "/1513-dining3.jpg", alt: "Ceremony Space" },
    { src: "/1513-moment8.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-11.jpg", alt: "1513 Photo 2" },
    { src: "/1513-spaces1.jpg", alt: "Table Settings" },
    { src: "/the-moment14.jpg", alt: "Table Settings" },
    { src: "/1513-venue24.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-30.jpg", alt: "1513 Photo 14" },
    { src: "/1513-moment20.jpg", alt: "Table Settings" },
    { src: "/1513-dining7.jpg", alt: "Gardens" },
    { src: "/the-venue19.jpg", alt: "Ceremony Space" },
    { src: "/1513-suite3.JPG", alt: "Reception Hall" },
    { src: "/CagleSP-48.jpg", alt: "1513 Photo 27" },
    { src: "/1513-moment2.jpg", alt: "Couple Portrait" },
    { src: "/1513-moment44.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-21.jpg", alt: "1513 Photo 8" },
    { src: "/1513-venue9.jpg", alt: "Gardens" },
    { src: "/the-venue18.jpg", alt: "Couple Portrait" },
    { src: "/1513-dining2.jpg", alt: "Gardens" },
    { src: "/CagleSP-42.jpg", alt: "1513 Photo 22" },
    { src: "/1513-moment23.jpg", alt: "Gardens" },
    { src: "/the-dining1.jpg", alt: "Gardens" },
    { src: "/1513-spaces3.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-6.jpg", alt: "1513 Photo 30" },
    { src: "/1513-moment30.jpg", alt: "Sunset Views" },
    { src: "/the-moment12.jpg", alt: "Ceremony Space" },
    { src: "/1513-suite2.JPG", alt: "Reception Hall" },
    { src: "/CagleSP-27.jpg", alt: "1513 Photo 12" },
    { src: "/1513-moment42.jpg", alt: "Gardens" },
    { src: "/the-dining2.jpg", alt: "Reception Hall" },
    { src: "/1513-moment11.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-36.jpg", alt: "1513 Photo 16" },
    { src: "/1513-moment4.jpg", alt: "Couple Portrait" },
    { src: "/1513-venue7.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-49.jpg", alt: "1513 Photo 28" },
    { src: "/1513-moment40.jpg", alt: "Gardens" },
    { src: "/the-venue26.jpg", alt: "Table Settings" },
    { src: "/CagleSP-41.jpg", alt: "1513 Photo 21" },
    { src: "/1513-moment21.jpg", alt: "Sunset Views" },
    { src: "/1513-table-capture2.jpg", alt: "Couple Portrait" },
    { src: "/CagleSP-13.jpg", alt: "1513 Photo 4" },
    { src: "/1513-dining8.jpg", alt: "Gardens" },
    { src: "/1513-moment37.jpg", alt: "Table Settings" },
    { src: "/the-venue17.jpg", alt: "Couple Portrait" },
    { src: "/CagleSP-45.jpg", alt: "1513 Photo 24" },
    { src: "/1513-moment18.jpg", alt: "Gardens" },
    { src: "/1513-venue25.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-56.jpg", alt: "1513 Photo 29" },
    { src: "/1513-moment43.jpg", alt: "Gardens" },
    { src: "/the-moment13.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-2.jpg", alt: "1513 Photo 7" },
    { src: "/1513-venue23.jpg", alt: "Gardens" },
    { src: "/CagleSP-17.jpg", alt: "1513 Photo 6" },
    { src: "/CagleSP-24.jpg", alt: "1513 Photo 9" },
    { src: "/1513-moment44.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-38.jpg", alt: "1513 Photo 18" },
    { src: "/1513-moment8.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-47.jpg", alt: "1513 Photo 26" },
    { src: "/CagleSP-9.jpg", alt: "1513 Photo 31" },
    { src: "/1513-dining1.jpg", alt: "Gardens" },
    { src: "/CagleSP-40.jpg", alt: "1513 Photo 20" },
    { src: "/CagleSP-12.jpg", alt: "1513 Photo 3" },
    { src: "/1513-moment37.jpg", alt: "Table Settings" },
    { src: "/1513-venue24.jpg", alt: "Sunset Views" }

  ]

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Gallery</h2> */}
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
