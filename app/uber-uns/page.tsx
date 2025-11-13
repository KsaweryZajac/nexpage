import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Über uns - NexPage.at",
  description:
    "Lernen Sie das Team von NexPage.at kennen. Erfahrung, Expertise und Leidenschaft für professionelles Webdesign.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Zielorientiert",
      description:
        "Wir fokussieren uns auf Ihre Geschäftsziele und entwickeln Lösungen, die messbare Ergebnisse liefern.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovativ",
      description: "Wir setzen auf modernste Technologien und kreative Lösungen für Ihre digitalen Herausforderungen.",
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      icon: Users,
      title: "Partnerschaftlich",
      description: "Ihre Zufriedenheit steht im Mittelpunkt. Wir arbeiten eng mit Ihnen zusammen und hören zu.",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Qualitätsstandards in Design, Entwicklung und Service – darauf können Sie sich verlassen.",
      gradient: "from-emerald-500 to-blue-500",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Über NexPage.at
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Wir sind Ihr verlässlicher Partner für professionelles Webdesign und Webentwicklung in Österreich.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-1000">
                <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">Unsere Geschichte</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    NexPage.at wurde mit der Vision gegründet, österreichischen Unternehmen den Zugang zu
                    professionellem Webdesign und moderner Webentwicklung zu ermöglichen. Was als kleines Team begann,
                    ist heute ein etablierter Partner für digitale Projekte aller Größenordnungen.
                  </p>
                  <p>
                    Unser Team vereint langjährige Erfahrung in Design und Entwicklung mit der Begeisterung für neue
                    Technologien. Wir glauben daran, dass jedes Unternehmen – ob klein oder groß – eine professionelle
                    Online-Präsenz verdient.
                  </p>
                  <p>
                    Durch kontinuierliche Weiterbildung und den Einsatz modernster Tools stellen wir sicher, dass unsere
                    Kunden immer von den neuesten Entwicklungen im Web profitieren können.
                  </p>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right duration-1000">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl border-2 border-primary/10">
                  <img
                    src="/professional-web-development-team-collaboration.jpg"
                    alt="Unser Team bei der Arbeit"
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">
                Unsere{" "}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                  Werte
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">Was uns antreibt und auszeichnet</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="group border-2 transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                    >
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">Unser Ansatz</h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Bei NexPage.at beginnen wir jedes Projekt mit einem ausführlichen Beratungsgespräch. Wir möchten Ihr
                Unternehmen, Ihre Ziele und Ihre Zielgruppe verstehen, bevor wir mit der Planung beginnen.
              </p>
              <p>
                Ob Sie eine einfache WordPress-Website benötigen oder eine komplexe maßgeschneiderte Webanwendung – wir
                entwickeln die optimale Lösung für Ihre Anforderungen. Dabei legen wir Wert auf:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Transparente Kommunikation während des gesamten Projekts</li>
                <li>Klare Zeitpläne und realistische Meilensteine</li>
                <li>Regelmäßige Updates und Feedbackschleifen</li>
                <li>Ausführliche Dokumentation und Schulung</li>
                <li>Langfristigen Support nach dem Launch</li>
              </ul>
              <p>
                Unser Ziel ist es nicht nur, eine Website zu erstellen, sondern einen langfristigen Partner für Ihre
                digitale Präsenz zu sein.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
