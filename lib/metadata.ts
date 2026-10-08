import type { Metadata } from "next"
import { ogImageAbsolute, siteName, siteUrl } from "@/lib/site"

export function pageMetadata({
  topic,
  description,
  path,
  absoluteTitle,
  keywords,
}: {
  topic: string
  description: string
  path: string
  absoluteTitle?: string
  keywords?: string[]
}): Metadata {
  const fullTitle = absoluteTitle ?? `${topic} | ${siteName}`
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`
  const images = [ogImageAbsolute()]

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : topic,
    description,
    keywords,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [images[0].url],
    },
    alternates: {
      canonical,
    },
  }
}
