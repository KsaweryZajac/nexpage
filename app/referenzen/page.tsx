import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { PageHeader } from "@/components/page-header"
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
      <PageHeader 
        title="Referenzen" 
        description="Ein Auszug aus erfolgreich umgesetzten Projekten für zufriedene Kunden in ganz Österreich."
      />
      <main>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                    />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary" className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors text-gray-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed text-gray-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
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
              <Card className="relative overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="relative text-center">
                  <CardTitle className="text-2xl text-gray-900">
                    Ihr Projekt könnte{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      hier stehen
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2 text-base text-gray-600">
                    Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. Kontaktieren Sie uns für ein
                    unverbindliches Beratungsgespräch.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white transition-all duration-300 hover:shadow-lg group border-0"
                  >
                    <Link href="/kontakt">
                      Projekt besprechen
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
