import type { Metadata } from "next"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Wedding Photos in Rockmart, GA",
  path: "/gallery",
  description:
    "See real wedding photos from 1513 at Stone Creek, an all-inclusive venue in Rockmart, GA near Atlanta and northwest Georgia.",
})

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={breadcrumbJsonLd("/gallery")} />
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
