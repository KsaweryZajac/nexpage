"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Preise", href: "/preise" },
    { name: "Über uns", href: "/uber-uns" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <img
                    src="/logo.png"
                    alt="NexPage.at Team"
                    className="w-30 object-cover hover:scale-110 transition-transform duration-700"
                  />
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
            className="bg-white hover:bg-white text-foreground border-2 bg-clip-border transition-all hover:scale-110 hover:shadow-xl group"
          >
            <Link href="/kontakt">Kostenloses Erstgespräch</Link>
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
