export const siteUrl = "https://1513atstonecreek.com"
export const siteName = "1513 at Stone Creek"
export const siteId = `${siteUrl}/#venue`

export const siteFacts = {
  weddingsHosted: "1300+",
  acres: "30",
  guestCapacity: "200",
  city: "Rockmart, GA",
  addressLines: ["2769 Cedartown Hwy", "Rockmart, GA, 30153"],
  streetAddress: "2769 Cedartown Hwy",
  addressLocality: "Rockmart",
  addressRegion: "GA",
  postalCode: "30153",
  addressCountry: "US",
  phone: "(470) 296-0272",
  phoneHref: "+14702960272",
  email: "info@1513atstonecreek.com",
  hours: [
    { days: "Monday - Saturday", time: "10am - 6pm" },
    { days: "Sunday", time: "1pm - 5pm" },
  ],
  // Coordinates for the published street address, 2769 Cedartown Hwy, Rockmart, GA 30153.
  geo: {
    latitude: 34.0098055,
    longitude: -85.1213397,
  },
  sameAs: [
    "https://www.facebook.com/stonecreekinnvenue",
    "https://www.instagram.com/stonecreekvenue/?hl=en",
  ],
}

export const siteDescription =
  "All-inclusive wedding and event venue in Rockmart, GA, near Atlanta and northwest Georgia. 1300+ weddings on 30 acres for up to 200 guests."

export const defaultOgImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Pond and countryside grounds at 1513 at Stone Creek, a wedding venue in Rockmart, Georgia",
}

export type SiteRoute = {
  path: string
  title: string
  crumb: string
  priority: number
  changeFrequency: "weekly" | "monthly" | "yearly"
}

export const siteRoutes: SiteRoute[] = [
  { path: "/", title: "Home", crumb: "Home", priority: 1, changeFrequency: "weekly" },
  { path: "/venue", title: "The Venue", crumb: "The Venue", priority: 0.9, changeFrequency: "weekly" },
  { path: "/packages", title: "Pricing & Packages", crumb: "Packages", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gallery", title: "Gallery", crumb: "Gallery", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", title: "About", crumb: "About", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", title: "Testimonials", crumb: "Testimonials", priority: 0.7, changeFrequency: "monthly" },
  { path: "/amenities", title: "Amenities", crumb: "Amenities", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", title: "Contact", crumb: "Contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/book-tour", title: "Book a Tour", crumb: "Book a Tour", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", title: "Privacy Policy", crumb: "Privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", title: "Terms of Use", crumb: "Terms", priority: 0.2, changeFrequency: "yearly" },
]

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteUrl
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export function ogImageAbsolute() {
  return {
    url: absoluteUrl(defaultOgImage.url),
    width: defaultOgImage.width,
    height: defaultOgImage.height,
    alt: defaultOgImage.alt,
  }
}
