import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 px-3 py-2 border border-primary/20">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <span className="font-semibold text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NexPage</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground max-w-xs">
              Medientechniker & Webentwickler. Moderne Websites für Unternehmen in Österreich.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
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
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all">
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
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-secondary to-primary" />
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
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all">
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
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold text-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Kontakt
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@nexpage.at"
                className="flex items-center gap-3 rounded-lg bg-primary/10 p-3 text-sm text-primary hover:bg-primary/20 transition-all duration-300 group"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform">info@nexpage.at</p>
                </div>
              </a>
              <a
                href="tel:+436604690880"
                className="flex items-center gap-3 rounded-lg bg-secondary/10 p-3 text-sm text-secondary hover:bg-secondary/20 transition-all duration-300 group"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Telefon</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform">+43 660 469 0880</p>
                </div>
              </a>
              <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105 hover:shadow-xl group">
                <Link href="/kontakt">Projekt starten</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NexPage. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link href="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
