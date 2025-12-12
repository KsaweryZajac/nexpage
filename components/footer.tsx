import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10 lg:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 border border-blue-200 shadow-sm">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NexPage</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-xs">
              Medientechniker & Webentwickler. Moderne Websites für Unternehmen in Österreich.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-900">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Start", href: "/" },
                { name: "Leistungen", href: "/leistungen" },
                { name: "Preise", href: "/preise" },
                { name: "Über mich", href: "/uber-uns" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-900">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Webdesign", href: "/leistungen" },
                { name: "Webentwicklung", href: "/leistungen" },
                { name: "SEO & Performance", href: "/leistungen" },
                { name: "Support & Wartung", href: "/leistungen" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-900">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              Kontakt
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@nexpage.at"
                className="flex items-center gap-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-700 hover:bg-blue-100 transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform duration-200">info@nexpage.at</p>
                </div>
              </a>
              <a
                href="tel:+436604690880"
                className="flex items-center gap-3 rounded-lg bg-purple-50 p-3 text-sm text-purple-700 hover:bg-purple-100 transition-colors duration-200 group"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Telefon</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform duration-200">+43 660 469 0880</p>
                </div>
              </a>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white border-0 shadow-md transition-all duration-300">
                <Link href="/kontakt">Projekt starten</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} NexPage. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
