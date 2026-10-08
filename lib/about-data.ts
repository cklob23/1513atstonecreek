/** Owner-only story and stat details. Filtered out of the UI until filled. */
export const storyExtras = [
  "[CALEB: founding year of 1513 at Stone Creek]",
  "[CALEB: property history and how Haley and Gina became the third owners]",
  "[CALEB: confirm 1300+ weddings hosted]",
  "[CALEB: confirm acreage, guide lists both 20 and 30 acres]",
]

export function publishedStoryExtras() {
  return storyExtras.filter((item) => !item.includes("[CALEB"))
}

export const aboutStatDrafts = [
  { value: "200", label: "Guest Capacity" },
  { value: "[CALEB: confirm acreage, guide lists both 20 and 30 acres]", label: "Acres" },
  { value: "[CALEB: confirm 1300+ weddings hosted]", label: "Weddings Hosted" },
]

export function publishedAboutStats() {
  return aboutStatDrafts.filter((stat) => !stat.value.includes("[CALEB") && !stat.label.includes("[CALEB"))
}

export const homeStatDrafts = [
  { value: "[CALEB: confirm 1300+ weddings hosted]", label: "weddings" },
  { value: "[CALEB: confirm acreage, guide lists both 20 and 30 acres]", label: "acres" },
  { value: "up to 200", label: "guests" },
]

export function publishedHomeStats() {
  return homeStatDrafts.filter((stat) => !stat.value.includes("[CALEB") && !stat.label.includes("[CALEB"))
}
