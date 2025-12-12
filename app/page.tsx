import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, Check, CheckCircle, Globe, Smartphone, Rocket, Star } from "lucide-react"
import { AnimatedSlogan } from "@/components/animated-slogan"

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
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-24 lg:py-8 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary/10 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary animate-pulse-glow">
              <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Deine digitale Zukunft startet hier</span>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <AnimatedSlogan />
            </div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-base leading-relaxed text-muted-foreground text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Hi, ich bin Ksawery – ausgebildeter Medientechniker und Webentwickler aus Österreich. Ich entwickle maßgeschneiderte Weblösungen mit modernen Technologien. WordPress oder individuelle Entwicklung, performant und ready für die Zukunft.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                asChild
                size="default"
                className="bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105 hover:shadow-xl group "
              >
                <Link href="/kontakt">
                  Kostenloses Erstgespräch
                  
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105 hover:shadow-xl  bg-white text-dark "
              >
                <Link href="/preise">Preise ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground text-center sm:text-3xl lg:text-4xl text-balance">
                Meine{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Leistungen
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                Alles aus einer Hand – von Design bis Entwicklung
              </p>
            </div>
            <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:gap-4 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <CardHeader className="pb-3 sm:pb-6 lg:pb-3">
                    <div
                      className={`mb-3 sm:mb-4 lg:mb-2 flex h-10 w-10 sm:h-12 sm:w-12 lg:h-10 lg:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-lg group-hover:text-primary transition-colors">
                      {service.title === "Webentwicklung" ? (
                        <>
                          <span className="block sm:hidden">Web-Entwicklung</span>
                          <span className="hidden sm:inline">Webentwicklung</span>
                        </>
                      ) : (
                        service.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm sm:text-base lg:text-xs leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="default"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105 hover:shadow-xl bg-white text-dark text-sm sm:text-base"
              >
                <Link href="/leistungen">
                  Alle Leistungen ansehen
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary/10 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Über mich</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl text-balance">
                  Dein Partner für{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    digitalen Erfolg
                  </span>
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                  Ich bin Ksawery Zajac, ausgebildeter Medientechniker mit leidenschaftlichem Fokus auf Webdesign und Webentwicklung. Mit jahrelanger Erfahrung setze ich Ihre digitalen Projekte professionell um. Ich verstehe die Anforderungen österreichischer Unternehmen und liefere Lösungen, die funktionieren.
                </p>
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {[
                    "Persönliche Betreuung und individuelle Beratung",
                    "Transparente Preise ohne versteckte Kosten",
                    "Schnelle Umsetzung und zuverlässiger Support",
                    "Modernste Technologien und Best Practices",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 sm:gap-3 animate-in fade-in slide-in-from-left duration-700"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-10">
                  <Button
                    asChild
                    size="default"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105 bg-white text-dark text-sm sm:text-base"
                  >
                    <Link href="/uber-uns">Mehr über mich</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right duration-1000 order-first lg:order-last">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-muted shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Ksawery Zajac - Medientechniker & Webentwickler"
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-xs sm:text-sm font-medium text-primary text-center">
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
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-5 animate-gradient" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl text-balance">
              Bereit für deine neue{" "}
              <span className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent">
                Website?
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
              Lassen Sie uns gemeinsam Ihr Projekt besprechen. Ich freue mich auf Ihre Anfrage!
            </p>
            <div className="mt-6 sm:mt-10">
              <Button
                asChild
                size="default"
                className="bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105 hover:shadow-xl group"
              >
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-2 transition-transform" />
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
