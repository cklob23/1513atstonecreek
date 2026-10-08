import { readFile, readdir } from "node:fs/promises"
import path from "node:path"

const outDir = path.join(process.cwd(), "out")
const siteUrl = "https://1513atstonecreek.com"
const errors = []

const expectedPaths = [
  "/",
  "/venue",
  "/packages",
  "/gallery",
  "/about",
  "/testimonials",
  "/amenities",
  "/contact",
  "/book-tour",
  "/privacy",
  "/terms",
]

const schemaTypes = new Set([
  "EventVenue",
  "LocalBusiness",
  "PostalAddress",
  "GeoCoordinates",
  "OpeningHoursSpecification",
  "AdministrativeArea",
  "Place",
  "LocationFeatureSpecification",
  "WebSite",
  "BreadcrumbList",
  "ListItem",
  "FAQPage",
  "Question",
  "Answer",
  "Organization",
  "ImageObject",
])

function fail(message) {
  errors.push(message)
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

function collectTypes(node, bucket = []) {
  if (!node || typeof node !== "object") return bucket
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, bucket)
    return bucket
  }
  const type = node["@type"]
  if (typeof type === "string") bucket.push(type)
  if (Array.isArray(type)) bucket.push(...type)
  for (const value of Object.values(node)) collectTypes(value, bucket)
  return bucket
}

async function readOutFile(relPath) {
  return readFile(path.join(outDir, relPath), "utf8")
}

async function htmlForRoute(routePath) {
  const stem = routePath === "/" ? "index.html" : `${routePath.slice(1)}.html`
  const nested = routePath === "/" ? null : path.join(routePath.slice(1), "index.html")
  try {
    return await readOutFile(stem)
  } catch {
    if (!nested) throw new Error(`Missing HTML for ${routePath}`)
    return readOutFile(nested)
  }
}

const sitemap = await readOutFile("sitemap.xml")
const robots = await readOutFile("robots.txt")

if (!sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
  fail("sitemap.xml is missing the sitemap namespace")
}

for (const routePath of expectedPaths) {
  const loc = routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`
  if (!sitemap.includes(`<loc>${loc}</loc>`)) {
    fail(`sitemap.xml is missing ${loc}`)
  }
}

if (!robots.includes("User-Agent: *") && !robots.includes("User-agent: *")) {
  fail("robots.txt is missing a wildcard user-agent rule")
}
if (!robots.includes(`${siteUrl}/sitemap.xml`)) {
  fail("robots.txt is missing the absolute sitemap URL")
}

const files = await readdir(outDir)
if (!files.includes("manifest.webmanifest") && !files.includes("manifest.json")) {
  fail("web manifest is missing from out/")
}

for (const routePath of expectedPaths) {
  const html = await htmlForRoute(routePath)
  const title = decodeHtml((html.match(/<title>([^<]+)<\/title>/i) || [])[1] || "")
  const description = decodeHtml((html.match(/<meta name="description" content="([^"]+)"/i) || [])[1] || "")
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || ""
  const ogLocale = (html.match(/<meta property="og:locale" content="([^"]+)"/i) || [])[1] || ""
  const ogSite = (html.match(/<meta property="og:site_name" content="([^"]+)"/i) || [])[1] || ""
  const ogImage = (html.match(/<meta property="og:image" content="([^"]+)"/i) || [])[1] || ""
  const twitterImage = (html.match(/<meta name="twitter:image" content="([^"]+)"/i) || [])[1] || ""
  const h1s = html.match(/<h1\b[^>]*>/gi) || []

  if (title.length > 62) fail(`${routePath} title is ${title.length} characters: ${decodeHtml(title)}`)
  if (description.length > 160) fail(`${routePath} description is ${description.length} characters`)
  if (!description) fail(`${routePath} is missing a meta description`)

  const expectedCanonical = routePath === "/" ? siteUrl : `${siteUrl}${routePath}`
  if (canonical !== expectedCanonical) {
    fail(`${routePath} canonical is ${canonical}, expected ${expectedCanonical}`)
  }
  if (ogLocale !== "en_US") fail(`${routePath} is missing og:locale en_US`)
  if (ogSite !== "1513 at Stone Creek") fail(`${routePath} is missing og:site_name`)
  if (!ogImage.startsWith(siteUrl)) fail(`${routePath} OG image is not absolute`)
  if (!twitterImage.startsWith(siteUrl)) fail(`${routePath} Twitter image is not absolute`)
  if (h1s.length !== 1) fail(`${routePath} has ${h1s.length} H1 tags, expected 1`)

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) =>
    JSON.parse(match[1]),
  )
  const types = collectTypes(blocks)
  const serialized = JSON.stringify(blocks)

  if (serialized.includes("priceRange")) fail(`${routePath} JSON-LD includes priceRange`)
  if (types.includes("Review") || types.includes("AggregateRating")) {
    fail(`${routePath} includes self-serving Review or AggregateRating markup`)
  }
  for (const type of types) {
    if (!schemaTypes.has(type)) fail(`${routePath} uses unknown schema.org type ${type}`)
  }

  if (!types.includes("EventVenue") || !types.includes("LocalBusiness")) {
    fail(`${routePath} is missing EventVenue/LocalBusiness JSON-LD`)
  }

  if (routePath === "/") {
    if (!types.includes("WebSite")) fail("Home is missing WebSite JSON-LD")
  } else if (!types.includes("BreadcrumbList")) {
    fail(`${routePath} is missing BreadcrumbList JSON-LD`)
  }

  if (routePath === "/packages") {
    if (!types.includes("FAQPage")) fail("Packages is missing FAQPage JSON-LD")
    if (!serialized.includes("What is the guest capacity?")) {
      fail("Packages FAQPage does not include the published guest-capacity question")
    }
  } else if (types.includes("FAQPage")) {
    fail(`${routePath} has FAQPage JSON-LD but does not render FAQs`)
  }
}

if (errors.length > 0) {
  console.error("SEO checks failed:")
  for (const error of errors) console.error(`  ${error}`)
  process.exit(1)
}

console.log("SEO checks passed: sitemap, robots, metadata, headings, and JSON-LD")
