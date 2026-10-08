/** Owner-only story details. Filtered out of the UI until filled. */
export const storyExtras = [
  "[CALEB: founding year of 1513 at Stone Creek]",
  "[CALEB: origin of the 1513 name]",
  "[CALEB: how Haley and Gina decided to open the venue]",
]

export function publishedStoryExtras() {
  return storyExtras.filter((item) => !item.includes("[CALEB"))
}
