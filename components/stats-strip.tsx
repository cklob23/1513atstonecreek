import { siteFacts } from "@/lib/site"

export function StatsStrip() {
  const stats = [
    { value: siteFacts.weddingsHosted, label: "weddings" },
    { value: siteFacts.acres, label: "acres" },
    { value: `up to ${siteFacts.guestCapacity}`, label: "guests" },
  ]

  return (
    <section className="bg-secondary border-y border-border">
      <div className="container mx-auto px-4 py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-serif text-4xl md:text-5xl text-foreground">{stat.value}</p>
              <p className="mt-2 text-base text-foreground/80 capitalize">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
