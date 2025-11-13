import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Quote } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Referenzen - NexPage.at",
  description: "Unsere erfolgreich umgesetzten Webdesign und Webentwicklung Projekte.",
}

export default function ReferencesPage() {
  const projects = [
    {
      title: "Rechtsanwaltskanzlei Weber",
      description:
        "Professionelle Website für eine etablierte Wiener Anwaltskanzlei mit Mandantenportal und DSGVO-konformem Kontaktformular.",
      category: "WordPress",
      tags: ["Responsive Design", "SEO", "Kontaktformular"],
      image: "/law-firm-website-professional.png",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Restaurant Alpengasthof",
      description:
        "Ansprechende Website mit Online-Reservierungssystem und mehrsprachiger Speisekarte für ein traditionelles österreichisches Restaurant.",
      category: "WordPress + WooCommerce",
      tags: ["E-Commerce", "Mehrsprachig", "Booking-System"],
      image: "/restaurant-website-elegant-menu.jpg",
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      title: "TechStart Solutions",
      description:
        "Moderne Corporate Website mit individuellem Design für ein IT-Startup. Inklusive Blog, Karriereseite und Kundenportal.",
      category: "Next.js Hardcode",
      tags: ["Custom Design", "Performance", "API Integration"],
      image: "/tech-startup-website-modern.jpg",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      title: "Modehaus Schneider",
      description:
        "Online-Shop für ein lokales Modegeschäft mit 200+ Produkten, Payment-Integration und Lagerverwaltung.",
      category: "WooCommerce",
      tags: ["E-Commerce", "Payment", "Lagerverwaltung"],
      image: "/fashion-boutique-website-shop.jpg",
      gradient: "from-emerald-500 to-blue-500",
    },
    {
      title: "Fitness Studio Bodyform",
      description: "Dynamische Website mit Kursplan-Integration, Mitgliederverwaltung und Online-Buchungssystem.",
      category: "WordPress",
      tags: ["Booking-System", "Mitgliederverwaltung", "Responsive"],
      image: "/fitness-gym-website-modern-clean.jpg",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Architektur Atelier Huber",
      description: "Portfolio-Website für ein Architekturbüro mit Projekt-Galerie und interaktivem 3D-Viewer.",
      category: "Next.js Hardcode",
      tags: ["Portfolio", "Custom Features", "Performance"],
      image: "/architecture-portfolio-website-minimal.jpg",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-0 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Unsere Referenzen
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Ein Auszug aus erfolgreich umgesetzten Projekten für zufriedene Kunden in ganz Österreich.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                    />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary" className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <Card className="relative overflow-hidden border-2 hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                <CardHeader className="relative text-center">
                  <CardTitle className="text-2xl">
                    Ihr Projekt könnte{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                      hier stehen
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. Kontaktieren Sie uns für ein
                    unverbindliches Beratungsgespräch.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all hover:scale-105 hover:shadow-xl group"
                  >
                    <Link href="/kontakt">
                      Projekt besprechen
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center text-balance mb-12">
              Was unsere{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  text: "Die Zusammenarbeit mit NexPage.at war hervorragend. Von der ersten Beratung bis zum Launch wurde alles professionell und termingerecht umgesetzt. Unsere neue Website übertrifft unsere Erwartungen!",
                  name: "Dr. Maria Weber",
                  role: "Rechtsanwaltskanzlei Weber, Wien",
                },
                {
                  text: "Endlich eine Agentur, die versteht, was wir brauchen! Das Team hat uns hervorragend beraten und eine Website erstellt, die nicht nur gut aussieht, sondern auch technisch auf höchstem Niveau ist.",
                  name: "Thomas Huber",
                  role: "Geschäftsführer, TechStart Solutions",
                },
                {
                  text: "Unser Online-Shop läuft seit dem Relaunch deutlich besser. Die Conversion-Rate hat sich verdoppelt und wir bekommen regelmäßig Komplimente für das Design. Danke für die tolle Arbeit!",
                  name: "Anna Schneider",
                  role: "Inhaberin, Modehaus Schneider",
                },
              ].map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="border-2 transition-all hover:shadow-lg hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">{testimonial.text}</p>
                    <div className="mt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
