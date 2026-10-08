import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Privacy Policy",
  path: "/privacy",
  description: "Privacy policy placeholder for 1513 at Stone Creek.",
})

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>[CALEB: privacy policy — how inquiry forms, tour bookings, and analytics are used]</p>
      <p>
        This page is a placeholder so couples can find a Privacy link in the footer. Replace this copy with the
        venue&apos;s actual policy before treating it as legal notice.
      </p>
    </LegalPage>
  )
}
