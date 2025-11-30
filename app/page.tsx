import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, CheckCircle, Globe, Smartphone, Rocket, Star } from "lucide-react"
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
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-pulse-glow">
              <Rocket className="h-4 w-4" />
              <span>Deine digitale Zukunft startet hier</span>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <AnimatedSlogan />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Hi, ich bin Ksawery – ausgebildeter Medientechniker und Webentwickler aus Österreich. Ich entwickle maßgeschneiderte Weblösungen mit modernen Technologien. WordPress oder individuelle Entwicklung, performant und ready für die Zukunft.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105 hover:shadow-xl group"
              >
                <Link href="/kontakt">
                  Kostenloses Erstgespräch
                  
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105  hover:text-dark bg-white text-dark"
              >
                <Link href="/preise">Preise ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Meine{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Leistungen
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
                Alles aus einer Hand – von Design bis Entwicklung
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105  hover:text-dark bg-white text-dark"
              >
                <Link href="/leistungen">
                  Alle Leistungen ansehen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <Star className="h-4 w-4" />
                  <span>Über mich</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  Dein Partner für{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    digitalen Erfolg
                  </span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Ich bin Ksawery Zajac, ausgebildeter Medientechniker mit leidenschaftlichem Fokus auf Webdesign und Webentwicklung. Mit jahrelanger Erfahrung setze ich Ihre digitalen Projekte professionell um. Ich verstehe die Anforderungen österreichischer Unternehmen und liefere Lösungen, die funktionieren.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Persönliche Betreuung und individuelle Beratung",
                    "Transparente Preise ohne versteckte Kosten",
                    "Schnelle Umsetzung und zuverlässiger Support",
                    "Modernste Technologien und Best Practices",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-700"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                className="border-2 hover:bg-white hover:text-dark transition-all hover:scale-105  hover:text-dark bg-white text-dark"
                  >
                    <Link href="/uber-uns">Mehr über mich</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right duration-1000">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Ksawery Zajac - Medientechniker & Webentwickler"
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary text-center">
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
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-5 animate-gradient" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Bereit für deine neue{" "}
              <span className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent">
                Website?
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Lassen Sie uns gemeinsam Ihr Projekt besprechen. Ich freue mich auf Ihre Anfrage!
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary transition-all hover:scale-105 hover:shadow-xl group"
              >
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
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
