import { publishedAboutStats, publishedStoryExtras } from "@/lib/about-data"
import { ResponsiveImage } from "@/components/responsive-image"

export function About() {
  const extras = publishedStoryExtras()
  const stats = publishedAboutStats()

  return (
    <section id="about" className="scroll-mt-24 py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
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
              1513 at Stone Creek was founded by Haley and Gina with one simple vision: to create a place where every
              couple felt genuinely cared for, and where every wedding is treated as if it were our own. What started
              as a shared dream grew into a family-owned venue built on faith, hospitality, and a passion for serving
              people.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Our venue takes its name from Romans 15:13: &ldquo;May the God of hope fill you with all joy and peace as
              you trust in Him.&rdquo; That verse serves as the foundation of everything we do.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              When you choose 1513 at Stone Creek, you become part of our family. We look forward to celebrating
              alongside you and creating a wedding day you will remember for the rest of your life.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Imagine exchanging vows with Fish Creek flowing softly behind you, then gathering your people for a
              celebration of up to 200 guests.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 mb-6">
              <p className="font-serif text-xl text-foreground mb-4">A note from Haley and Gina</p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The flowers will eventually fade. The cake will be eaten. The music will end, and the last dance will
                become a memory. But the marriage you are beginning will last a lifetime.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As you plan your wedding, do not lose sight of what this day is truly about. The most meaningful
                moments are not the ones on the timeline. They are the quiet glance across the aisle, the hug from a
                grandparent, the laughter with your bridal party, and the moment you realize you are surrounded by
                everyone you love.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Hold someone. Pause a little longer. Look around the room. Take it all in. Those are the memories you
                will carry with you forever.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Thank you for allowing us to be a small part of your family&apos;s story. It is such an honor to
                celebrate alongside you. We will handle the details, so you can fully be present for every
                unforgettable moment.
              </p>
              <p className="text-foreground/80 leading-relaxed">With love, Haley and Gina</p>
            </blockquote>
            {extras.length > 0 ? (
              <ul className="text-foreground/80 text-lg leading-relaxed mb-6 space-y-2">
                {extras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {stats.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-serif text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-foreground/75">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
