import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/metadata"
import { siteFacts } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  topic: "Privacy Policy",
  path: "/privacy",
  description: "How 1513 at Stone Creek uses inquiry and tour information.",
})

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        When you submit an inquiry or book a tour, that form is handled by our booking and CRM provider. We use the
        information you share only to respond to you and to plan your event.
      </p>
      <p>
        To update or delete your information, contact us at {siteFacts.phone} or {siteFacts.email}.
      </p>
    </LegalPage>
  )
}
