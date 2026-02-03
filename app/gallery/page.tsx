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
        description=""
        image="DJI_0140.jpg"
      />
      <Gallery />
      <Footer />
    </main>
  )
}
