import type { ReactNode } from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

type LegalPageProps = {
  title: string
  children: ReactNode
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">{title}</h1>
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
