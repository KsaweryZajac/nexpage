import type { Metadata } from "next"
import { Suspense } from "react"
import ContactPageContent from "./contact-page-content"

export const metadata: Metadata = {
  title: "Kontakt | NexPage.at",
  description: "Kontaktieren Sie uns für Ihr Webprojekt",
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Lädt...</div>}>
      <ContactPageContent />
    </Suspense>
  )
}
