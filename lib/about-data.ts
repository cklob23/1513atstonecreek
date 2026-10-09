import { siteFacts } from "@/lib/site"

/** Owner-only story details. Filtered out of the UI until filled. */
export const storyExtras = [
  "[CALEB: founding year of 1513 at Stone Creek]",
  "[CALEB: property history and how Haley and Gina became the third owners]",
]

export function publishedStoryExtras() {
  return storyExtras.filter((item) => !item.includes("[CALEB"))
}

/** Restored from c59d2cc. Same values and capacity label on Home and About. */
export const venueStats = [
  { value: siteFacts.weddingsHosted, label: "Weddings Hosted" },
  { value: siteFacts.acres, label: "Acres" },
  { value: `Up to ${siteFacts.guestCapacity}`, label: "Guests" },
]

export function publishedAboutStats() {
  return venueStats.filter((stat) => !stat.value.includes("[CALEB") && !stat.label.includes("[CALEB"))
}

export function publishedHomeStats() {
  return publishedAboutStats()
}
