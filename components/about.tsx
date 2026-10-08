import { publishedStoryExtras } from "@/lib/about-data"
import { ResponsiveImage } from "@/components/responsive-image"

export function About() {
  const extras = publishedStoryExtras()

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ResponsiveImage
              src="/1513-photo-296.jpeg"
              alt="Covered pavilion and grounds at 1513 at Stone Creek"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">A place that feels like family</h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              When Haley and Gina started 1513, they were not only building a wedding venue. They wanted a place where
              people feel welcomed, loved, celebrated, and cared for. A space where couples feel like family, where you
              know you are loved and never just another wedding on the calendar.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              They walk alongside couples for a year, so by the time wedding day arrives it feels like celebrating
              friends. From florals to catering, décor to coordination, the team curates every detail so you can savor
              the day.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Imagine exchanging vows with Fish Creek flowing softly behind you, then gathering your people across 30
              acres in Rockmart, GA. The venue has hosted 1300+ weddings, with room for celebrations of up to 200
              guests.
            </p>
            {extras.length > 0 ? (
              <ul className="text-foreground/80 text-lg leading-relaxed mb-6 space-y-2">
                {extras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-serif text-foreground mb-2">200</div>
                <div className="text-sm text-foreground/75">Guest Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-foreground mb-2">30</div>
                <div className="text-sm text-foreground/75">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-foreground mb-2">1300+</div>
                <div className="text-sm text-foreground/75">Weddings Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
