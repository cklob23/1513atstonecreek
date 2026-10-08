export type PackageCard = {
  name: string
  price: string
  items: string[]
}

export const packageCards: PackageCard[] = [
  {
    name: "[CALEB: package name]",
    price: "[CALEB: starting price or range]",
    items: [
      "[CALEB: included item 1]",
      "[CALEB: included item 2]",
      "[CALEB: included item 3]",
      "[CALEB: included item 4]",
      "[CALEB: included item 5]",
    ],
  },
  {
    name: "[CALEB: package name]",
    price: "[CALEB: starting price or range]",
    items: [
      "[CALEB: included item 1]",
      "[CALEB: included item 2]",
      "[CALEB: included item 3]",
      "[CALEB: included item 4]",
      "[CALEB: included item 5]",
      "[CALEB: included item 6]",
    ],
  },
  {
    name: "[CALEB: package name]",
    price: "[CALEB: starting price or range]",
    items: [
      "[CALEB: included item 1]",
      "[CALEB: included item 2]",
      "[CALEB: included item 3]",
      "[CALEB: included item 4]",
    ],
  },
]

export const includedChecklist = [
  "[CALEB: what's included — venue access]",
  "[CALEB: what's included — coordination]",
  "[CALEB: what's included — tables, chairs, or linens]",
  "[CALEB: what's included — lighting or decor]",
  "[CALEB: what's included — bridal suite access]",
  "[CALEB: what's included — parking or day-of staff]",
  "[CALEB: what's included — any extras that come standard]",
]

export const packageFaqs = [
  {
    question: "What catering options do you offer?",
    answer: "[CALEB: catering policy and in-house or preferred vendor details]",
  },
  {
    question: "How does alcohol service work?",
    answer: "[CALEB: alcohol policy, bar options, and any licensing notes]",
  },
  {
    question: "Can we bring outside vendors?",
    answer: "[CALEB: outside vendor policy and any required approvals]",
  },
  {
    question: "What is the rain plan?",
    answer: "[CALEB: rain plan for ceremony and reception spaces]",
  },
  {
    question: "Is there on-site parking?",
    answer: "[CALEB: parking details, guest count, and overflow options]",
  },
  {
    question: "Where do guests typically stay nearby?",
    answer: "[CALEB: nearest lodging and any hotel partners]",
  },
  {
    question: "How accessible is the property?",
    answer: "[CALEB: accessibility details for parking, restrooms, and event spaces]",
  },
  {
    question: "What is the event end time, and are there noise limits?",
    answer: "[CALEB: end time, music cutoff, and noise guidelines]",
  },
  {
    question: "How do deposit and booking steps work?",
    answer: "[CALEB: deposit amount, contract steps, and what reserves a date]",
  },
  {
    question: "What is the guest capacity by space?",
    answer: "[CALEB: seated vs standing capacity for Pavilion, Ballroom, and Patio]",
  },
  {
    question: "Do you host micro-weddings?",
    answer: "[CALEB: micro-wedding options, guest minimums, and package notes]",
  },
  {
    question: "Do you host events other than weddings?",
    answer: "[CALEB: other event types accepted and any different pricing]",
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

export const venueFactNotes = [
  { label: "Event hours", value: "[CALEB: event start and end hours]" },
  { label: "Rain plan", value: "[CALEB: indoor backup and how weather calls are made]" },
  { label: "Parking", value: "[CALEB: on-site parking details]" },
  { label: "Nearest lodging", value: "[CALEB: closest hotels or recommended stays]" },
]
