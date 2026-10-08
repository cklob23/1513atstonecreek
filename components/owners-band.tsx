import Link from "next/link"
import { Button } from "@/components/ui/button"
import { founders } from "@/lib/staff-data"

export function OwnersBand() {
  return (
    <section id="meet-haley-and-gina" className="scroll-mt-24 py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground text-balance">Meet Haley and Gina</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            A family-owned venue by Haley and Gina, built on faith and hospitality, in Rockmart, GA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <article key={founder.name} className="flex flex-col">
              <img
                src={founder.image}
                alt={`Portrait of ${founder.name}, ${founder.roles.slice(0, 2).join(" and ")} at 1513 at Stone Creek`}
                className="w-full h-[420px] object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="font-serif text-3xl text-foreground mb-3">{founder.name}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.roles.map((role) => (
                  <span
                    key={role}
                    className="text-xs uppercase tracking-wide bg-primary/10 text-primary rounded-full px-3 py-1"
                  >
                    {role}
                  </span>
                ))}
              </div>
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/about#team">Meet the full team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
