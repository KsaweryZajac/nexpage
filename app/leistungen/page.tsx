import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Palette, Code, Smartphone, Search, ShoppingCart, Database, Lock, Gauge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Leistungen - NextPage.at",
  description: "Unsere Webdesign und Webentwicklung Services: WordPress, Hardcode, E-Commerce, SEO und mehr.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Webdesign",
      description:
        "Professionelles, modernes Design, das Ihre Marke perfekt repräsentiert. Wir gestalten benutzerfreundliche Interfaces, die Ihre Besucher begeistern.",
      features: [
        "Individuelles Design",
        "Corporate Design Integration",
        "User Experience (UX) Optimierung",
        "Responsive Design",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "WordPress Entwicklung",
      description:
        "Flexible WordPress-Lösungen für schnelle und kostengünstige Websites. Perfekt für Unternehmenswebsites, Blogs und kleinere Online-Shops.",
      features: ["Custom Theme Entwicklung", "Plugin-Integration", "Wartung und Updates", "Performance-Optimierung"],
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      icon: Code,
      title: "Hardcode Entwicklung",
      description:
        "Maßgeschneiderte Webanwendungen mit modernsten Technologien. Für komplexe Anforderungen und maximale Performance.",
      features: ["React / Next.js", "Node.js Backend", "RESTful APIs", "Skalierbare Architektur"],
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ihre Website sieht auf allen Geräten perfekt aus – vom Smartphone über Tablet bis zum Desktop-Computer.",
      features: [
        "Mobile-First Ansatz",
        "Touch-optimierte Bedienung",
        "Flexible Layouts",
        "Cross-Browser Kompatibilität",
      ],
      gradient: "from-emerald-500 to-blue-500",
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Bessere Sichtbarkeit in Suchmaschinen durch professionelle Suchmaschinenoptimierung.",
      features: ["On-Page SEO", "Technisches SEO", "Keyword-Recherche", "Performance-Optimierung"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Professionelle Online-Shop Lösungen für Ihr Geschäft. Von einfachen Produktpräsentationen bis zu komplexen Shop-Systemen.",
      features: ["WooCommerce", "Zahlungsintegration", "Lagerverwaltung", "Versandoptionen"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Content Management",
      description:
        "Einfache Verwaltung Ihrer Inhalte – auch ohne technische Kenntnisse. Intuitive CMS-Lösungen für maximale Flexibilität.",
      features: ["Benutzerfreundliche Oberflächen", "Mehrsprachigkeit", "Medien-Verwaltung", "Workflow-Management"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Lock,
      title: "DSGVO & Sicherheit",
      description:
        "Alle Websites entsprechen den österreichischen und EU-Datenschutzrichtlinien. Ihre Daten und die Ihrer Kunden sind sicher.",
      features: ["DSGVO-konforme Umsetzung", "SSL-Verschlüsselung", "Datenschutzerklärung", "Cookie-Banner"],
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: Gauge,
      title: "Wartung & Support",
      description:
        "Langfristiger Support für Ihre Website. Wir kümmern uns um Updates, Backups und technische Probleme.",
      features: ["Regelmäßige Updates", "Sicherheits-Backups", "Performance-Monitoring", "Technischer Support"],
      gradient: "from-orange-500 to-blue-500",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Unsere Leistungen
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Von Design bis Entwicklung – alles aus einer Hand für Ihren digitalen Erfolg.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group flex flex-col border-2 transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">
              Interessiert an unseren Leistungen?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Werfen Sie einen Blick auf unsere Preispakete oder kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all hover:scale-105 hover:shadow-xl group"
              >
                <Link href="/preise">
                  Preise ansehen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 bg-transparent"
              >
                <Link href="/kontakt">Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
