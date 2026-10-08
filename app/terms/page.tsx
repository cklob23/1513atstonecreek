import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/metadata"
import { siteFacts } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  topic: "Terms of Use",
  path: "/terms",
  description: "Terms for using the 1513 at Stone Creek website.",
})

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        This website shares information about 1513 at Stone Creek. Using the site does not create a booking. Dates,
        packages, and responsibilities are set in a written agreement with the venue.
      </p>
      <p>
        If something on the site differs from your agreement, the agreement controls. Questions? Call {siteFacts.phone}{" "}
        or email {siteFacts.email}.
      </p>
    </LegalPage>
  )
}
