import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GalleryPreview() {
  const images = [
    { src: "/1513-moment4.jpg", alt: "Ceremony Space" },
    { src: "/1513-open-area-lights.jpg", alt: "Reception Hall" },
    { src: "/1513-room1.jpg", alt: "Couple Portrait" },
    { src: "/1513-moment2.jpg", alt: "Table Settings" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Captured Moments</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A glimpse into the beautiful celebrations that have taken place at 1513 at Stone Creek
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-96">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-venue-hover-overlay transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
