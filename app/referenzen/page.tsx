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
  description: "Meine erfolgreich umgesetzten Webdesign und Webentwicklung Projekte.",
}

export default function ReferencesPage() {
  const projects = [
    {
      title: "NexPage.at - Diese Website",
      description:
        "Meine Seite habe ich natürlich auch gemacht und sie zeigt alles, was ich beherrsche: Moderne Portfolio-Website für einen Webentwickler und Designer. Responsive Design, schnelle Performance und vollständig optimiert für Suchmaschinen.",
      category: "Next.js Hardcode",
      tags: ["Next.js", "Responsive", "Performance", "SEO"],
      image: "/nexpage-website.png",
      gradient: "from-primary to-secondary",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-12 sm:py-20 lg:px-16 2xl:px-32">
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
              <span style={{ color: 'lab(37 -0.11 -6.13)' }}>Meine Referenzen</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Ein Auszug aus erfolgreich umgesetzten Projekten für zufriedene Kunden in ganz Österreich.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-16 2xl:px-32">
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
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
