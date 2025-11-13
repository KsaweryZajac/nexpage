"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PricingPageClient() {
  const packages = [
    {
      name: "Basis",
      price: "ab € 799",
      description: "Perfekt für kleine Unternehmen und Einsteiger",
      packageId: "basis",
      features: [
        "1-3 Seiten",
        "WordPress Grundlayout",
        "Responsive Design",
        "Kontaktformular",
        "SSL-Verschlüsselung",
        "SEO optimiert",
        "1 Monat Support",
      ],
      highlighted: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Standard",
      price: "ab € 1.199",
      description: "Ideal für etablierte Unternehmen",
      packageId: "standard",
      features: [
        "5+ Seiten",
        "Individuelles Design",
        "WordPress oder Hardcode",
        "SEO-Grundoptimierung",
        "Kontaktformular mit Validierung",
        "Cookie-Banner",
        "SSL-Verschlüsselung",
        "SEO optimiert",
        "2 Monate Support",
        "Content-Einbindung",
      ],
      highlighted: true,
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      name: "E-Commerce",
      price: "ab € 1.199",
      description: "Für Online-Shops",
      packageId: "premium",
      features: [
        "Vollständig individuelles Shop-Design",
        "WooCommerce/Shopify/Stripe",
        "Erweiterte Shop-Funktionen",
        "Umfassende SEO-Optimierung für Produkte",
        "Zahlungs- und Versandintegration",
        "Performance-Optimierung für schnelle Ladezeiten",
        "Cookie-Banner für Shop & Tracking",
        "SSL-Verschlüsselung für sicheren Checkout",
        "2 Monate Support",
      ],
      highlighted: false,
      gradient: "from-teal-400 to-emerald-500",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Transparente Preise
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt. Alle Preise sind Fixpreise ohne
              versteckte Kosten.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`group relative overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                    pkg.highlighted ? "border-primary shadow-xl scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {pkg.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                  )}
                  <CardHeader className="relative">
                    {pkg.highlighted && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white animate-pulse-glow">
                        <Sparkles className="h-3 w-3" />
                        Beliebtestes Paket
                      </div>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                    <div className="mt-6">
                      <span
                        className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                      >
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground"> einmalig</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${pkg.gradient}`}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative mt-auto">
                    <Link href={`/kontakt?package=${pkg.packageId}`} className="w-full">
                      <Button
                        className={`w-full transition-all hover:scale-105 ${
                          pkg.highlighted
                            ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                            : ""
                        }`}
                        variant={pkg.highlighted ? "default" : "outline"}
                      >
                        Jetzt starten
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="relative mx-auto max-w-3xl overflow-hidden border-2 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl">
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                      Individuelles Angebot
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Benötigen Sie eine maßgeschneiderte Lösung? Wir erstellen Ihnen gerne ein individuelles Angebot, das
                    genau auf Ihre Anforderungen zugeschnitten ist.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex-1">
                  <Link href="/kontakt?package=individuell">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all hover:scale-105 hover:shadow-xl"
                    >
                      Individuelle Anfrage stellen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-24">
              <h2 className="text-3xl font-bold tracking-tight text-center text-balance mb-12">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                  Zusatzpakete
                </span>
              </h2>
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  {
                    name: "Support & Wartung",
                    price: "ab 40€/Monat",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "Domain & Hosting Setup",
                    price: "ab 20€/Monat",
                    gradient: "from-cyan-500 to-teal-400",
                  },
                  {
                    name: "Content Migration",
                    price: "ab 149€",
                    gradient: "from-teal-400 to-emerald-500",
                  },
                  {
                    name: "Notfall-Support",
                    price: "ab 70€/Stunde",
                    gradient: "from-emerald-500 to-green-500",
                  },
                ].map((addon, index) => (
                  <Card
                    key={addon.name}
                    className="group relative overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader className="relative">
                      <CardTitle className="text-lg">{addon.name}</CardTitle>
                      <div className="mt-4">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${addon.gradient} bg-clip-text text-transparent`}>
                          {addon.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardFooter className="relative mt-auto">
                      <Link href="/kontakt" className="w-full">
                        <Button
                          className="w-full transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                          variant="default"
                        >
                          Anfragen
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-muted-foreground font-light pt-10">
                Die Preise der Zusatzpakete werden basierend auf dem genauen Umfang und der benötigten Leistung kalkuliert. 
                Individuelle Anforderungen können zu abweichenden Preisen führen. Für eine genaue Kostenschätzung kontaktieren Sie uns.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center text-balance">
              Häufig gestellte{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Fragen
              </span>
            </h2>
            <div className="mt-12 space-y-6">
              {[
                {
                  q: "Was ist in den Paketen enthalten?",
                  a: "Alle Pakete beinhalten professionelles Design, responsive Entwicklung, SSL-Verschlüsselung und Support. Die genauen Leistungen finden Sie in der Paketbeschreibung.",
                },
                {
                  q: "Wie lange dauert die Umsetzung?",
                  a: "Die Dauer hängt vom gewählten Paket ab. Basis-Pakete werden in der Regel innerhalb von 2-3 Wochen fertiggestellt, Standard-Pakete in 4-6 Wochen und E-Commerce-Projekte in 6-10 Wochen.",
                },
                {
                  q: "Können Pakete angepasst werden?",
                  a: "Ja, alle Pakete können individuell angepasst werden. Kontaktieren Sie uns für ein maßgeschneidertes Angebot, das genau zu Ihren Anforderungen passt.",
                },
                {
                  q: "Was passiert nach Ablauf des Supports?",
                  a: "Nach Ablauf der inkludierten Support-Periode können Sie optional ein Wartungspaket buchen. Die Preise richten sich nach dem Umfang der benötigten Leistungen.",
                },
              ].map((faq, index) => (
                <Card
                  key={faq.q}
                  className="border-2 transition-all hover:shadow-lg hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
