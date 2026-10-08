export type PackageCard = {
  name: string
  audience: string
  badge?: string
  items: string[]
}

export const packageCards: PackageCard[] = [
  {
    name: "Basically Beautiful",
    audience: "Venue rental only. A stunning, seamless wedding day without managing all the moving pieces.",
    items: [
      "Venue rental only, with exclusive use of the property for your day",
      "Pavilion, ballroom, bridal suite, groom's lounge, and patio with fireplace",
      "Ceremony and reception setup, including tables and chairs",
      "Day-of venue manager",
      "Full-day access and a one-hour rehearsal",
      "Unlimited communication and planning portal access",
    ],
  },
  {
    name: "The Intimate Experience",
    audience: "One team coordinates catering, florals, décor, and day-of execution.",
    items: [
      "Everything in Basically Beautiful",
      "In-house florals, décor, catering, and coordination",
      "Welcome meeting, planning consult, and tasting",
      "Wedding coordinator on the day, with rehearsal included",
      "Wedding cake and cake-cutting service",
      "Full team execution from start to finish",
    ],
  },
  {
    name: "The Timeless Experience",
    audience: "Elevated catering, expanded florals, and full design consultation so you can be fully present.",
    badge: "Most Popular",
    items: [
      "Everything in The Intimate Experience",
      "Full design consultation and ceremony-to-reception styling",
      "Elevated catering with a private tasting",
      "Expanded florals",
      "Place settings with linen napkins and chargers",
      "Photo booth and yard games for social hour",
    ],
  },
  {
    name: "The Signature Experience",
    audience: "Luxury florals, premium catering, full design detail, and a dedicated planning experience.",
    badge: "Best Value",
    items: [
      "Everything in The Timeless Experience",
      "Luxury florals and elevated styling throughout the celebration",
      "Premium catering",
      "Champagne toast",
      "Patio string lights and sparkler send-off",
      "Engagement photo access to the venue",
    ],
  },
  {
    name: "The Grand Affair",
    audience: "The ultimate celebration, from rehearsal dinner to the final send-off.",
    items: [
      "Everything in The Signature Experience",
      "Rehearsal dinner access",
      "Bridal breakfast and lunch, plus groom's lunch",
      "Full wedding director and complete event management",
      "Firework send-off",
      "Photo booth",
    ],
  },
]

export const includedChecklist = [
  "Florals",
  "Catering",
  "Décor",
  "Coordination",
  "[CALEB: Experience Guide - venue access hours]",
  "[CALEB: Experience Guide - tables, chairs, or linens]",
  "[CALEB: Experience Guide - lighting or extra decor]",
  "[CALEB: Experience Guide - bridal suite access]",
  "[CALEB: Experience Guide - parking or day-of staff]",
  "[CALEB: Experience Guide - any extras that come standard]",
]

export const enhancementsLine =
  "Enhance your experience with floral, venue, food and beverage, entertainment, and planning add-ons. Do not see what you are looking for? We would love to create a custom proposal for your day."

export const nextStepsIntro =
  "One of the questions we hear most often is what happens after we book. The answer is simple. You get to enjoy being engaged. From the moment you choose 1513 at Stone Creek, you become part of our family."

export const nextSteps = [
  {
    title: "Fall in love",
    body: "Tour the venue, dream a little, ask every question you have, and picture yourself saying I do. We want you to leave feeling excited, confident, and completely at home.",
  },
  {
    title: "Make it official",
    body: "When you are ready, we will reserve your date and celebrate right alongside you. This is where the excitement really begins.",
  },
  {
    title: "Dream together",
    body: "We will get to know you as a couple: your style, your personalities, and the moments that matter most. Together we will shape a wedding day that feels completely you.",
  },
  {
    title: "We handle the details",
    body: "As the day approaches, we help with timelines, florals, menus, décor, and the little details that can quickly become overwhelming. That is what we are here for.",
  },
  {
    title: "Be present",
    body: "When your wedding day arrives, laugh along the way, dance with your grandparents, and take it all in. We will be behind the scenes so you can enjoy one of the greatest days of your life.",
  },
]

export type ExperienceGuideSection = {
  title: string
  body: string
  items?: string[]
}

/** Draft slots for Experience Guide copy. Filtered out of the UI until filled. */
export const experienceGuideSections: ExperienceGuideSection[] = [
  {
    title: "[CALEB: Experience Guide section title - guest experience extras]",
    body: "[CALEB: Experience Guide body - parking, lodging partner name, and guest flow details beyond the FAQ]",
  },
]

export type PackageFaq = {
  question: string
  answer: string
  /** When true, the answer sends cost or deposit questions to /contact. */
  pricingCta?: boolean
}

export const packageFaqs: PackageFaq[] = [
  {
    question: "How much do packages cost?",
    answer: "Request current package pricing through Get Pricing.",
    pricingCta: true,
  },
  {
    question: "Can your wedding package be customized?",
    answer:
      "Absolutely. Our packages are designed as a starting point. If you have a different vision, guest count, or budget, we would love to create a custom option that fits. For current details and cost, request them through Get Pricing.",
    pricingCta: true,
  },
  {
    question: "What does all-inclusive mean?",
    answer:
      "Our all-inclusive packages bring many of the most important parts of your wedding together: venue, florals, catering, coordination, and more. Depending on the package you choose, inclusions vary. This means fewer vendors to manage, fewer separate payments, and more time for you to enjoy your engagement and wedding day.",
  },
  {
    question: "How many guests can the venue accommodate?",
    answer:
      "1513 at Stone Creek can accommodate weddings of up to 200 guests. We also offer options for smaller and more intimate celebrations.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We offer a payment plan to help make the investment more manageable. Your payment schedule will be outlined clearly in your agreement. For current details, request them through Get Pricing.",
    pricingCta: true,
  },
  {
    question: "Can we bring our own alcohol?",
    answer:
      "Yes. Couples may provide their own alcohol, but bar service must be coordinated internally. Our bar package includes a licensed bartender.",
  },
  {
    question: "Do you have a rain plan?",
    answer:
      "Yes. We have both indoor and covered spaces so your celebration can continue comfortably. If the weather is significant, our team will help guide you through any necessary adjustments and make sure the transition feels seamless.",
  },
  {
    question: "Are setup and cleanup included?",
    answer:
      "Setup and cleanup of the venue, tables, chairs, and linens are included in your package or handled by our team. Personal décor and outside items may need extra setup. Ask our team for details.",
  },
  {
    question: "Can we use outside vendors?",
    answer:
      "Yes. Outside vendors are welcome as long as they meet the venue's licensing and insurance requirements. We also have trusted vendor recommendations available for couples who prefer additional guidance.",
  },
  {
    question: "Are florals in-house?",
    answer:
      "Yes. Our in-house floral studio creates custom florals designed specifically for your wedding. Floral options and inclusions vary by package.",
  },
  {
    question: "Is there a place for the wedding party to get ready?",
    answer:
      "Yes. The property includes a dedicated space for the wedding party to relax, prepare, and enjoy the hours leading up to the ceremony.",
  },
  {
    question: "Can we have engagement or bridal portraits at the venue?",
    answer:
      "Portrait access may be included with select packages or added to your wedding experience. Please speak with our team about availability and scheduling.",
  },
  {
    question: "Is lodging available nearby?",
    answer:
      "Yes. We work with a nearby lodging partner located just a short distance from the venue. There are also hotels and additional accommodations available in the surrounding area.",
  },
  {
    question: "Can we have our rehearsal or rehearsal dinner at the venue?",
    answer:
      "A one-hour rehearsal is typically included. Rehearsal dinner rentals may also be added to select packages.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Saturday, Sunday, and peak-season dates can book well in advance. We recommend scheduling a tour as soon as you have a preferred month or date in mind.",
  },
  {
    question: "How do we reserve our date?",
    answer:
      "Your wedding date is officially reserved once the required agreement has been signed. For current booking steps, request them through Get Pricing.",
    pricingCta: true,
  },
  {
    question: "How do deposit and booking steps work?",
    answer: "Request current deposit and booking details through Get Pricing.",
    pricingCta: true,
  },
  {
    question: "What makes 1513 at Stone Creek different?",
    answer:
      "Our couples say our team helps guide the planning process, brings their ideas to life, and cares deeply about their experience. Our goal is for you and your family to be fully present, not setting tables, managing vendors, or worrying about the timeline. From the first meeting to the final send-off, we are here to serve you with honesty, excellence, and genuine care.",
  },
  {
    question: "Is there on-site parking?",
    answer: "[CALEB: Experience Guide - parking details, guest count, and overflow options]",
  },
  {
    question: "How accessible is the property?",
    answer: "[CALEB: Experience Guide - accessibility details for parking, restrooms, and event spaces]",
  },
  {
    question: "What is the event end time, and are there noise limits?",
    answer: "[CALEB: Experience Guide - end time, music cutoff, and noise guidelines]",
  },
  {
    question: "Do you host events other than weddings?",
    answer: "[CALEB: other event types accepted]. For cost, request details through Get Pricing.",
    pricingCta: true,
  },
]

export const venueFacts = [
  {
    space: "Pavilion",
    seated: "[CALEB: Pavilion seated capacity]",
    standing: "[CALEB: Pavilion standing capacity]",
  },
  {
    space: "Ballroom",
    seated: "Up to 200 guests",
    standing: "[CALEB: Ballroom standing capacity]",
  },
  {
    space: "Patio",
    seated: "[CALEB: Patio seated capacity]",
    standing: "[CALEB: Patio standing capacity]",
  },
]

export function isOwnerDraft(text: string) {
  return text.includes("[CALEB")
}

export function publishedPackageCards() {
  return packageCards
    .map((card) => ({
      ...card,
      badge: card.badge && isOwnerDraft(card.badge) ? undefined : card.badge,
      items: card.items.filter((item) => !isOwnerDraft(item)),
    }))
    .filter((card) => !isOwnerDraft(card.name) && !isOwnerDraft(card.audience) && card.items.length > 0)
}

export function publishedIncludedChecklist() {
  return includedChecklist.filter((item) => !isOwnerDraft(item))
}

export function publishedExperienceGuideSections() {
  return experienceGuideSections
    .map((section) => ({
      ...section,
      items: section.items?.filter((item) => !isOwnerDraft(item)),
    }))
    .filter((section) => !isOwnerDraft(section.title) && !isOwnerDraft(section.body))
}

export function publishedFaqs() {
  return packageFaqs.filter((faq) => !isOwnerDraft(faq.question) && !isOwnerDraft(faq.answer))
}

export function publishedNextSteps() {
  return nextSteps.filter((step) => !isOwnerDraft(step.title) && !isOwnerDraft(step.body))
}

export function publishedEnhancementsLine() {
  return isOwnerDraft(enhancementsLine) ? "" : enhancementsLine
}

export function publishedVenueFacts() {
  return venueFacts
    .map((row) => ({
      space: row.space,
      seated: isOwnerDraft(row.seated) ? "" : row.seated,
      standing: isOwnerDraft(row.standing) ? "" : row.standing,
    }))
    .filter((row) => !isOwnerDraft(row.space) && (row.seated || row.standing))
}

export function publishedVenueFactNotes() {
  return venueFactNotes.filter((note) => !isOwnerDraft(note.label) && !isOwnerDraft(note.value))
}

export const venueFactNotes = [
  { label: "Event hours", value: "[CALEB: event start and end hours]" },
  { label: "Rain plan", value: "[CALEB: indoor backup and how weather calls are made]" },
  { label: "Parking", value: "[CALEB: on-site parking details]" },
  { label: "Nearest lodging", value: "[CALEB: closest hotels or recommended stays]" },
]
