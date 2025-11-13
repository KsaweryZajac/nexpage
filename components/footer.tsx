import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-primary">NexPage.at</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Ihr Partner für professionelles Webdesign und Webentwicklung in Österreich.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/uber-uns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/preise" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Referenzen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Rechtliches</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@nexpage.at" className="hover:text-primary transition-colors">
                  info@nexpage.at
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+436604690880" className="hover:text-primary transition-colors">
                  +43 660 469 0880
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Wien, Österreich</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexPage. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
