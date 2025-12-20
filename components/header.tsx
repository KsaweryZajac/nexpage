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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <img
              src="/logo.png"
              alt="NexPage.at"
              className="h-8 sm:h-9 w-20 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 rounded-lg group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/kontakt">Kostenloses Erstgespräch</Link>
          </Button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full z-40 lg:hidden bg-white border-b border-gray-200 shadow-lg transform transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-1 px-6 pb-6 pt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white border-0 shadow-md transition-all duration-300">
              <Link href="/kontakt">Kostenlose Beratung</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
