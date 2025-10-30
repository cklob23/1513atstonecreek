import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Gallery"
        description="Explore our beautiful venue through stunning photography"
        image="1513-moment6.jpg"
      />
      <Gallery />
      <Footer />
    </main>
  )
}
