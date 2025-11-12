"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-card-foreground">Cookie-Einstellungen</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer
              Website stimmen Sie der Verwendung von Cookies gemäß unserer{" "}
              <a href="/datenschutz" className="text-primary underline hover:no-underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDecline} size="sm">
              Ablehnen
            </Button>
            <Button onClick={handleAccept} size="sm">
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
