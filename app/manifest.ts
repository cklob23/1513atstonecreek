import type { MetadataRoute } from "next"
import { siteDescription, siteName } from "@/lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "1513",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0eb",
    theme_color: "#f5f0eb",
    lang: "en-US",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        src: "/1513icon300x300.png",
        sizes: "300x300",
        type: "image/png",
      },
    ],
  }
}
