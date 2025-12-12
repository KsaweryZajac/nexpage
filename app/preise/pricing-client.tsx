"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Rocket } from "lucide-react"
import Link from "next/link"

export default function PricingPageClient() {
  const packages = [
    {
      name: "Basis",
      price: "ab € 799",
      description: "Perfekt für kleine Unternehmen und Einsteiger",
      packageId: "basis",
      features: [
        "1-4 Seiten",
        "WordPress Grundlayout",
        "Responsive Design",
        "Kontaktformular",
        "SSL-Verschlüsselung",
        "SEO optimiert",
        "1 Monat Support",
      ],
      highlighted: false,
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
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-12 sm:py-20 lg:px-16 2xl:px-32 bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span style={{ color: 'lab(37 -0.11 -6.13)' }}>Transparente Preise</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 text-pretty">
              Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt. Alle Preise sind Fixpreise ohne versteckte Kosten.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-16 2xl:px-32 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`group relative overflow-visible transition-all hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                    pkg.highlighted ? "border-2 border-blue-300 shadow-lg" : "border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg group-hover:scale-105 transition-transform duration-700">
                      <Rocket className="h-3 w-3" />
                      <span className="text-xs">{pkg.price}</span>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    {pkg.highlighted && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        <Sparkles className="h-3 w-3" />
                        Beliebteste Wahl
                      </div>
                    )}
                    <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                    <CardDescription className="mt-2 text-gray-600">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative mt-auto">
                    <Link href={`/kontakt?package=${pkg.packageId}`} className="w-full">
                      <Button
                        className={`w-full transition-all hover:scale-105 ${
                          pkg.highlighted
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                            : "border border-gray-300 text-gray-900 hover:bg-gray-50"
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
              <Card className="relative mx-auto max-w-3xl overflow-hidden border border-gray-200 flex flex-col bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="relative">
                  <CardTitle className="text-2xl">
                    <span style={{ color: 'lab(37 -0.11 -6.13)' }}>
                      Individuelles Angebot
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2 text-base text-gray-600">
                    Benötigen Sie eine maßgeschneiderte Lösung? Wir erstellen Ihnen gerne ein individuelles Angebot, das genau auf Ihre Anforderungen zugeschnitten ist.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex-1">
                  <Link href="/kontakt?package=individuell">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all hover:scale-105 hover:shadow-lg border-0"
                    >
                      Individuelle Anfrage stellen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-24">
              <h2 className="text-3xl font-bold tracking-tight text-center text-balance mb-12 text-gray-900">
                <span style={{ color: 'lab(37 -0.11 -6.13)' }}>
                  Zusatzpakete
                </span>
              </h2>
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  {
                    name: "Support & Wartung",
                    price: "ab 40€/Monat",
                    features: ["Regelmäßige Updates", "Sicherheits-Backups", "Technischer Support"],
                  },
                  {
                    name: "Domain & Hosting Setup",
                    price: "ab 20€/Monat",
                    features: ["Domain Registration", "Hosting-Verwaltung", "SSL-Zertifikat"],
                  },
                  {
                    name: "Content Migration",
                    price: "ab 149€",
                    features: ["Datenübertragung", "SEO-Bewahrung", "Fehlerprüfung"],
                  },
                  {
                    name: "Notfall-Support",
                    price: "ab 70€/Stunde",
                    features: ["Schnelle Reaktion", "Bug Fixes", "Performance-Optimierung"],
                  },
                ].map((addon, index) => (
                  <Card
                    key={addon.name}
                    className="group relative overflow-visible border border-gray-200 transition-all hover:shadow-lg hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg group-hover:scale-105 transition-transform duration-700">
                        <Rocket className="h-3 w-3" />
                        <span className="text-xs">{addon.price}</span>
                      </div>
                    </div>
                    <CardHeader className="relative">
                      <CardTitle className="text-lg text-gray-900">{addon.name}</CardTitle>
                      <ul className="mt-4 space-y-2">
                        {addon.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs font-light text-gray-600">
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-blue-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                    <CardFooter className="relative mt-auto">
                      <Link href="/kontakt" className="w-full">
                        <Button
                          className="w-full transition-all hover:scale-105 bg-white text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-300 hover:border-transparent"
                          variant="default"
                        >
                          Anfragen
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-gray-600 font-light pt-10">
                Die Preise der Zusatzpakete werden basierend auf dem genauen Umfang und der benötigten Leistung kalkuliert. Individuelle Anforderungen können zu abweichenden Preisen führen. Für eine genaue Kostenschätzung kontaktieren Sie uns.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-16 2xl:px-32 bg-gray-50">
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center text-balance">
              Häufig gestellte{" "}
              <span style={{ color: 'lab(37 -0.11 -6.13)' }}>
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
                  className="border border-gray-200 transition-all hover:shadow-lg hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
