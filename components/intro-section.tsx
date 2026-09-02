import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IntroSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2
                    className="font-serif text-5xl md:text-6xl text-center mb-16 text-foreground italic"
                    style={{ fontWeight: 300 }}
                >
                    Weddings and Special Events
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="order-2 md:order-1">
                        <div className="rounded-full overflow-hidden w-full aspect-square">
                            <img
                                src="/1513-photo-303.jpeg"
                                alt="Wedding at 1513 at Stone Creek"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Nestled among rolling hills and whispering trees, 1513 at Stone Creek is more than a venue — it's a place where{" "}
                            <strong className="text-foreground">timeless beauty meets effortless celebration.</strong> From intimate gatherings to grand affairs, our all-inclusive approach{" "}
                            <strong className="text-foreground">brings every detail to life with warmth, style, and ease</strong>. Whether you're dreaming of a{" "}
                            <strong className="text-foreground">romantic wedding, an unforgettable event, or a space that feels like home</strong>, 1513 is where moments become memories.
                        </p>

                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Our stress-free, <strong className="text-foreground">proven planning process</strong> ensures your event
                            is <strong className="text-foreground">effortless</strong> from start to finish. With our{" "}
                            <strong className="text-foreground">all-inclusive wedding packages</strong>, you'll have everything you
                            need for your dream celebration, tailored to your vision and style.
                        </p>

                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Experience <strong className="text-foreground">timeless beauty</strong> and{" "}
                            <strong className="text-foreground">seamless planning</strong> at 1513 at Stone Creek... where your
                            unforgettable moments begin.
                        </p>

                        <p className="font-serif text-3xl text-foreground mb-6 italic" style={{ fontWeight: 300 }}>
                            Click here to learn more
                        </p>

                        <Link href="/venue">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Explore The Venue
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
