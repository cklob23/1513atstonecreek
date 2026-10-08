import type { Metadata } from "next"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse wedding and event photos from 1513 at Stone Creek, a countryside venue in Rockmart, Georgia.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Gallery"
        description=""
        image="/1513-photo-204.jpg"
      />
      <Gallery />
      <Footer />
    </main>
  )
}
