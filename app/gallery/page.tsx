import type { Metadata } from "next"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Wedding Photos",
  path: "/gallery",
  description: "Wedding photos from real celebrations at 1513 at Stone Creek in Rockmart, Georgia.",
})

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="Gallery"
        description=""
        image="/1513-photo-204.jpg"
        imageAlt="Wedding reception details at 1513 at Stone Creek"
      />
      <Gallery />
      <Footer />
    </main>
  )
}
