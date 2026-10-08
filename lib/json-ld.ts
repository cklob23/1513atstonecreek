import { publishedFaqs } from "@/lib/packages-data"
import {
  absoluteUrl,
  defaultOgImage,
  siteDescription,
  siteFacts,
  siteId,
  siteName,
  siteRoutes,
  siteUrl,
} from "@/lib/site"

export function venueJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EventVenue", "LocalBusiness"],
    "@id": siteId,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: absoluteUrl(defaultOgImage.url),
    logo: absoluteUrl("/1513icon300x300.png"),
    telephone: siteFacts.phone,
    email: siteFacts.email,
    maximumAttendeeCapacity: Number(siteFacts.guestCapacity),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteFacts.streetAddress,
      addressLocality: siteFacts.addressLocality,
      addressRegion: siteFacts.addressRegion,
      postalCode: siteFacts.postalCode,
      addressCountry: siteFacts.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteFacts.geo.latitude,
      longitude: siteFacts.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "13:00",
        closes: "17:00",
      },
    ],
    sameAs: siteFacts.sameAs,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Georgia" },
      { "@type": "Place", name: "Southeast United States" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Outdoor Ceremony Space" },
      { "@type": "LocationFeatureSpecification", name: "Covered Pavilion" },
      { "@type": "LocationFeatureSpecification", name: "Bridal Suite" },
      { "@type": "LocationFeatureSpecification", name: "Scenic Pond & Gardens" },
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-US",
    publisher: { "@id": siteId },
  }
}

export function breadcrumbJsonLd(path: string) {
  const route = siteRoutes.find((item) => item.path === path)
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ]

  if (route && route.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: route.crumb,
      item: absoluteUrl(route.path),
    })
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }
}

export function faqJsonLd() {
  const faqs = publishedFaqs()
  if (faqs.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
