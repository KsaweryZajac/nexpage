import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Palette, Code, Smartphone, Search, ShoppingCart, Database, Lock, Gauge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Leistungen - NexPage.at",
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
      gradient: "from-blue-600 to-blue-500",
    },
    {
      icon: Code,
      title: "WordPress Entwicklung",
      description:
        "Flexible WordPress-Lösungen für schnelle und kostengünstige Websites. Perfekt für Unternehmenswebsites, Blogs und kleinere Online-Shops.",
      features: ["Custom Theme Entwicklung", "Plugin-Integration", "Wartung und Updates", "Performance-Optimierung"],
      gradient: "from-purple-600 to-purple-500",
    },
    {
      icon: Code,
      title: "Hardcode Entwicklung",
      description:
        "Maßgeschneiderte Webanwendungen mit modernsten Technologien. Für komplexe Anforderungen und maximale Performance.",
      features: ["React / Next.js", "Node.js Backend", "RESTful APIs", "Skalierbare Architektur"],
      gradient: "from-blue-500 to-purple-500",
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
      gradient: "from-purple-500 to-blue-500",
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
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: Database,
      title: "Content Management",
      description:
        "Einfache Verwaltung Ihrer Inhalte – auch ohne technische Kenntnisse. Intuitive CMS-Lösungen für maximale Flexibilität.",
      features: ["Benutzerfreundliche Oberflächen", "Mehrsprachigkeit", "Medien-Verwaltung", "Workflow-Management"],
      gradient: "from-purple-600 to-blue-600",
    },

    {
      icon: Gauge,
      title: "Wartung & Support",
      description:
        "Langfristiger Support für Ihre Website. Wir kümmern uns um Updates, Backups und technische Probleme.",
      features: ["Regelmäßige Updates", "Sicherheits-Backups", "Performance-Monitoring", "Technischer Support"],
      gradient: "from-purple-500 to-blue-600",
    },
  ]

  return (
    <>
      <Header />
      <PageHeader 
        title="Unsere Leistungen" 
        description="Von Design bis Entwicklung – alles aus einer Hand für Ihren digitalen Erfolg."
      />
      <main>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group flex flex-col border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
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

        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-100 rounded-full blur-3xl animate-float opacity-50" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-balance">
              Interessiert an unseren Leistungen?
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 text-pretty">
              Werfen Sie einen Blick auf unsere Preispakete oder kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white transition-all duration-300 hover:shadow-lg group border-0"
              >
                <Link href="/preise">
                  Preise ansehen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
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
