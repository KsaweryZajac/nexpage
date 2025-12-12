import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, Check, CheckCircle, Globe, Smartphone, Rocket, Star } from "lucide-react"
import { AnimatedSlogan } from "@/components/animated-slogan"
import { HeroWithCursorEffect } from "@/components/hero-with-cursor-effect"

export default function HomePage() {
  const services = [
    {
      icon: Palette,
      title: "Modernes Webdesign",
      description: "Ich entwickle professionelle, ansprechende Designs, die Ihre Marke perfekt repräsentieren.",
      color: "from-primary to-secondary",
    },
    {
      icon: Code,
      title: "Webentwicklung",
      description: "WordPress oder maßgeschneiderte Hardcode-Lösungen – ich setze Ihre Vision um.",
      color: "from-secondary to-primary",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfekte Darstellung auf allen Geräten – Desktop, Tablet und Smartphone.",
      color: "from-primary to-secondary",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Schnelle Ladezeiten und optimierte Performance für beste User Experience.",
      color: "from-secondary to-primary",
    },
    {
      icon: Globe,
      title: "SEO-Optimierung",
      description: "Bessere Sichtbarkeit in Suchmaschinen durch professionelle SEO-Optimierung.",
      color: "from-primary to-secondary",
    },
    {
      icon: CheckCircle,
      title: "Wartung & Support",
      description: "Kontinuierliche Betreuung, regelmäßige Updates und zuverlässiger technischer Support.",
      color: "from-secondary to-primary",
    },
  ]

  return (
    <>
      <Header />
      <main className="home-page">
        {/* Hero Section with Cursor Effect */}
        <HeroWithCursorEffect />

        {/* Services Section */}
        <section className="py-12 sm:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center sm:text-3xl lg:text-4xl text-balance">
                Meine{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Leistungen
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
                Alles aus einer Hand – von Design bis Entwicklung
              </p>
            </div>
            <div className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <Link href="/leistungen">
                  Alle Leistungen ansehen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative overflow-hidden py-12 sm:py-24 lg:py-32 bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="opacity-0 animate-fade-in">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6 shadow-sm">
                  <Star className="h-4 w-4" />
                  <span>Über mich</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-balance">
                  Dein Partner für{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    digitalen Erfolg
                  </span>
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
                  Ich bin Ksawery Zajac, ausgebildeter Medientechniker mit leidenschaftlichem Fokus auf Webdesign und Webentwicklung. Mit jahrelanger Erfahrung setze ich Ihre digitalen Projekte professionell um. Ich verstehe die Anforderungen österreichischer Unternehmen und liefere Lösungen, die funktionieren.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Persönliche Betreuung und individuelle Beratung","Transparente Preise ohne versteckte Kosten","Schnelle Umsetzung und zuverlässiger Support","Modernste Technologien und Best Practices"].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-base text-gray-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                  >
                    <Link href="/uber-uns">Mehr über mich</Link>
                  </Button>
                </div>
              </div>
              <div className="relative opacity-0 animate-fade-in animate-delay-200 order-first lg:order-last">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 rounded-3xl blur-2xl opacity-50" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-2xl border border-gray-200">
                  <img
                    src="/profile.jpg"
                    alt="Ksawery Zajac - Medientechniker & Webentwickler"
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm">
                  <p className="text-sm font-medium text-blue-700 text-center">
                    🎓 Ausgebildeter Medientechniker<br/>
                    💻 Webentwickler & Designer<br/>
                    🚀 Dein digitaler Partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl animate-float opacity-50" />
            <div
              className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl animate-float opacity-50"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-balance">
              Bereit für deine neue{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600  bg-clip-text text-transparent">
                Website?
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 text-pretty">
              Lassen Sie uns gemeinsam Ihr Projekt besprechen. Ich freue mich auf Ihre Anfrage!
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white transition-all duration-300 hover:shadow-lg group border-0"
              >
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
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
