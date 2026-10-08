import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Terms of Use",
  path: "/terms",
  description: "Terms of use placeholder for 1513 at Stone Creek.",
})

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>[CALEB: website terms of use]</p>
      <p>
        This page is a placeholder so couples can find a Terms link in the footer. Replace this copy with the
        venue&apos;s actual terms before treating it as a binding notice.
      </p>
    </LegalPage>
  )
}
