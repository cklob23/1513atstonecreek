import { founders, team } from "@/lib/staff-data"

export function StaffSection() {
    return (
        <section id="team" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Meet the Wedding Dream Team</p>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground text-balance">The Hearts Behind 1513</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                        Because at 1513 at Stone Creek, you&apos;re not just booking a venue - you&apos;re gaining a team that&apos;s
                        honored to celebrate, serve, and care for you on one of the biggest days of your life.
                    </p>
                </div>

                {/* Founders */}
                <div className="space-y-12 mb-20">
                    {founders.map((founder, index) => (
                        <div
                            key={founder.name}
                            className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                                }`}
                        >
                            <div>
                                <img
                                    src={founder.image || "/placeholder.svg"}
                                    alt={`Portrait of ${founder.name}, ${founder.roles.slice(0, 2).join(" and ")} at 1513 at Stone Creek`}
                                    className="w-full h-[460px] object-cover rounded-lg shadow-xl"
                                />
                            </div>
                            <div>
                                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-3">{founder.name}</h3>
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
                                {founder.bio.map((paragraph, i) => (
                                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                                <ul className="mt-6 space-y-2">
                                    {founder.funFacts.map((fact, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                            <span>{fact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team */}
                <div className="text-center mb-12">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground">Our Team</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="flex flex-col bg-secondary rounded-lg overflow-hidden shadow-md border border-border"
                        >
                            <img
                                src={member.image || "/placeholder.svg"}
                                alt={`Portrait of ${member.name}, ${member.role} at 1513 at Stone Creek`}
                                className="w-full h-72 object-cover"
                            />
                            <div className="flex flex-col flex-1 p-6">
                                <h4 className="font-serif text-2xl text-foreground">{member.name}</h4>
                                <p className="text-sm uppercase tracking-wide text-primary mb-4">{member.role}</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                                <ul className="mt-auto space-y-2 pt-2 border-t border-border">
                                    {member.funFacts.map((fact, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                            <span>{fact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
