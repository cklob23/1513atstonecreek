import type { Metadata } from "next"
import { defaultOgImage, siteName, siteUrl } from "@/lib/site"

export function pageMetadata({
  topic,
  description,
  path,
  absoluteTitle,
}: {
  topic: string
  description: string
  path: string
  absoluteTitle?: string
}): Metadata {
  const fullTitle = absoluteTitle ?? `${topic} | ${siteName}`
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : topic,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName,
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage.url],
    },
    alternates: {
      canonical,
    },
  }
}
