"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/uber-uns" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Preise", href: "/preise" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent flex items-center gap-2 transition-all group-hover:scale-105">
              <svg
                className="h-6 w-6 group-hover:rotate-12 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="sparkles-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgb(59, 130, 246)", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "rgb(34, 211, 238)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgb(20, 184, 166)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#sparkles-gradient)"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 22l-.394-1.433a2.25 2.25 0 0 0-1.423-1.423L13.25 19l1.433-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15.75l.394 1.433a2.25 2.25 0 0 0 1.423 1.423L19.75 19l-1.035.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              NextPage.at
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menü öffnen</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-foreground/80 transition-all hover:text-primary hover:scale-110"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all hover:scale-105 hover:shadow-lg"
          >
            <Link href="/kontakt">Kostenlose Beratung</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden animate-in slide-in-from-top duration-200">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary">
                <Link href="/kontakt">Kostenlose Beratung</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
