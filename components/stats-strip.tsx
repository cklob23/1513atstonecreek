import { publishedHomeStats } from "@/lib/about-data"

export function StatsStrip() {
  const stats = publishedHomeStats()

  if (stats.length === 0) {
    return null
  }

  return (
    <section className="bg-secondary border-y border-border">
      <div className="container mx-auto px-4 py-10">
        <ul
          className={`grid gap-8 text-center ${
            stats.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
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
