export function Gallery() {
  const images = [
    { src: "/1513image29.jpg", alt: "1513 Photo 53" },
    { src: "/the-venue18.jpg", alt: "Couple Portrait" },
    { src: "/CagleSP-41.jpg", alt: "1513 Photo 21" },
    { src: "/1513-moment20.jpg", alt: "Table Settings" },
    { src: "/1513image6.jpg", alt: "1513 Photo 72" },
    { src: "/1513-venue7.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-12.jpg", alt: "1513 Photo 3" },
    { src: "/1513-moment42.jpg", alt: "Gardens" },
    { src: "/1513image33.jpg", alt: "1513 Photo 58" },
    { src: "/the-dining2.jpg", alt: "Reception Hall" },
    { src: "/1513image17.jpg", alt: "1513 Photo 40" },
    { src: "/1513-moment4.jpg", alt: "Couple Portrait" },
    { src: "/1513image2.jpg", alt: "1513 Photo 43" },
    { src: "/1513-dining8.jpg", alt: "Gardens" },
    { src: "/1513image41.jpg", alt: "1513 Photo 67" },
    { src: "/CagleSP-27.jpg", alt: "1513 Photo 12" },
    { src: "/1513-venue25.jpg", alt: "Sunset Views" },
    { src: "/1513-moment30.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-38.jpg", alt: "1513 Photo 18" },
    { src: "/1513image10.jpg", alt: "1513 Photo 33" },
    { src: "/the-venue26.jpg", alt: "Table Settings" },
    { src: "/1513image35.jpg", alt: "1513 Photo 60" },
    { src: "/1513-moment8.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-2.jpg", alt: "1513 Photo 7" },
    { src: "/1513image25.jpg", alt: "1513 Photo 49" },
    { src: "/1513image45.jpg", alt: "1513 Photo 70" },
    { src: "/1513-spaces3.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-56.jpg", alt: "1513 Photo 29" },
    { src: "/1513-moment21.jpg", alt: "Sunset Views" },
    { src: "/1513image14.jpg", alt: "1513 Photo 37" },
    { src: "/the-moment12.jpg", alt: "Ceremony Space" },
    { src: "/1513image4.jpg", alt: "1513 Photo 65" },
    { src: "/1513-venue9.jpg", alt: "Gardens" },
    { src: "/CagleSP-45.jpg", alt: "1513 Photo 24" },
    { src: "/1513image38.jpg", alt: "1513 Photo 63" },
    { src: "/1513-dining3.jpg", alt: "Ceremony Space" },
    { src: "/1513image31.jpg", alt: "1513 Photo 56" },
    { src: "/the-venue17.jpg", alt: "Couple Portrait" },
    { src: "/CagleSP-21.jpg", alt: "1513 Photo 8" },
    { src: "/1513image1.jpg", alt: "1513 Photo 32" },
    { src: "/1513-moment33.jpg", alt: "Gardens" },
    { src: "/1513image19.jpg", alt: "1513 Photo 42" },
    { src: "/the-moment13.jpg", alt: "Reception Hall" },
    { src: "/1513image24.jpg", alt: "1513 Photo 48" },
    { src: "/1513-moment37.jpg", alt: "Table Settings" },
    { src: "/1513image9.jpg", alt: "1513 Photo 75" },
    { src: "/1513-suite2.JPG", alt: "Reception Hall" },
    { src: "/CagleSP-49.jpg", alt: "1513 Photo 28" },
    { src: "/1513image42.jpg", alt: "1513 Photo 68" },
    { src: "/the-dining1.jpg", alt: "Gardens" },
    { src: "/1513-moment43.jpg", alt: "Gardens" },
    { src: "/1513image30.jpg", alt: "1513 Photo 55" },
    { src: "/1513-moment18.jpg", alt: "Gardens" },
    { src: "/CagleSP-25.jpg", alt: "1513 Photo 10" },
    { src: "/1513image7.jpg", alt: "1513 Photo 73" },
    { src: "/1513-venue23.jpg", alt: "Gardens" },
    { src: "/1513image21.jpg", alt: "1513 Photo 45" },
    { src: "/1513-moment2.jpg", alt: "Couple Portrait" },
    { src: "/CagleSP-39.jpg", alt: "1513 Photo 19" },
    { src: "/1513image12.jpg", alt: "1513 Photo 35" },
    { src: "/1513-spaces1.jpg", alt: "Table Settings" },
    { src: "/1513image36.jpg", alt: "1513 Photo 61" },
    { src: "/the-venue19.jpg", alt: "Ceremony Space" },
    { src: "/1513image18.jpg", alt: "1513 Photo 41" },
    { src: "/1513image8.jpg", alt: "1513 Photo 74" },
    { src: "/1513image39.jpg", alt: "1513 Photo 64" },
    { src: "/CagleSP-30.jpg", alt: "1513 Photo 14" },
    { src: "/1513-moment41.jpg", alt: "Sunset Views" },
    { src: "/1513image28.jpg", alt: "1513 Photo 52" },
    { src: "/1513-suite1.JPG", alt: "Reception Hall" },
    { src: "/1513image22.jpg", alt: "1513 Photo 46" },
    { src: "/1513-moment11.jpg", alt: "Reception Hall" },
    { src: "/CagleSP-36.jpg", alt: "1513 Photo 16" },
    { src: "/1513image16.jpg", alt: "1513 Photo 39" },
    { src: "/1513image26.jpg", alt: "1513 Photo 50" },
    { src: "/the-venue2.jpg", alt: "Ceremony Space" },
    { src: "/1513-dining7.jpg", alt: "Gardens" },
    { src: "/1513image11.jpg", alt: "1513 Photo 34" },
    { src: "/1513-moment44.jpg", alt: "Sunset Views" },
    { src: "/CagleSP-6.jpg", alt: "1513 Photo 30" },
    { src: "/1513image32.jpg", alt: "1513 Photo 57" },
    { src: "/1513image40.jpg", alt: "1513 Photo 66" },
    { src: "/CagleSP-13.jpg", alt: "1513 Photo 4" },
    { src: "/1513image34.jpg", alt: "1513 Photo 59" },
    { src: "/1513image13.jpg", alt: "1513 Photo 36" },
    { src: "/1513image27.jpg", alt: "1513 Photo 51" },
    { src: "/1513image20.jpg", alt: "1513 Photo 44" },
    { src: "/1513-dining2.jpg", alt: "Gardens" },
    { src: "/CagleSP-17.jpg", alt: "1513 Photo 6" },
    { src: "/1513image23.jpg", alt: "1513 Photo 47" },
    { src: "/1513image15.jpg", alt: "1513 Photo 38" },
    { src: "/1513image5.jpg", alt: "1513 Photo 71" },
    { src: "/CagleSP-24.jpg", alt: "1513 Photo 9" }

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
