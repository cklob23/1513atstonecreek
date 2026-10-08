import { ResponsiveImage } from "@/components/responsive-image"

export function About() {
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Your Dream Venue Awaits</h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              At 1513 at Stone Creek, we believe your celebration should be as seamless as it is stunning. Our
              all-inclusive venue was designed with intention, blending modern amenities with the natural beauty of
              Georgia&apos;s countryside. Imagine exchanging vows with the sound of Fish Creek flowing softly behind
              you, celebrating beneath the glow of chandeliers, and dancing the night away surrounded by the people
              who matter most.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              From florals to catering, décor to coordination, our talented team curates every detail so you can simply
              savor the day. Whether it&apos;s the rolling hills, the timeless architecture, or the peace that settles
              over the property as the sun sets, 1513 at Stone Creek is where elegance meets ease, and your dream day
              comes to life.
            </p>
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
