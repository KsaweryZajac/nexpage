import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Über mich - NexPage.at",
  description:
    "Ksawery Zajac - Webdesigner und Entwickler aus Österreich. Erfahrung, Expertise und Leidenschaft für moderne Weblösungen.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Zielorientiert",
      description:
        "Ich fokussiere mich auf Ihre Geschäftsziele und entwickle Lösungen, die messbare Ergebnisse liefern.",
      gradient: "from-blue-600 to-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Innovativ",
      description: "Ich setze auf modernste Technologien und kreative Lösungen für Ihre digitalen Herausforderungen.",
      gradient: "from-purple-600 to-purple-500",
    },
    {
      icon: Users,
      title: "Partnerschaftlich",
      description: "Ihre Zufriedenheit steht im Mittelpunkt. Ich arbeite eng mit Ihnen zusammen und höre zu.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Qualitätsstandards in Design, Entwicklung und Service – darauf können Sie sich verlassen.",
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  return (
    <>
      <Header />
      <PageHeader 
        title="Über mich" 
        description="Ich bin Ihr verlässlicher Partner für professionelles Webdesign und Webentwicklung in Österreich."
      />
      <main>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-balance">Meine Geschichte</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Als ausgebildeter Medientechniker habe ich NexPage.at mit der Vision gegründet, österreichischen 
                  Unternehmen den Zugang zu professionellem Webdesign und moderner Webentwicklung zu ermöglichen. 
                  Was als persönliches Projekt begann, ist heute meine Leidenschaft für digitale Projekte aller 
                  Größenordnungen.
                </p>
                <p>
                  Ich vereine langjährige Erfahrung in Design und Entwicklung mit der Begeisterung für neue
                  Technologien. Ich glaube daran, dass jedes Unternehmen – ob klein oder groß – eine professionelle
                  Online-Präsenz verdient.
                </p>
                <p>
                  Durch kontinuierliche Weiterbildung und den Einsatz modernster Tools stelle ich sicher, dass meine
                  Kunden immer von den neuesten Entwicklungen im Web profitieren können.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-gray-50">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-balance">
                Meine{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Arbeitsprinzipien
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">Was mich antreibt und auszeichnet</p>
            </div>
            <div className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="group border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-balance">Mein Arbeitsansatz</h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-600">
              <p>
                Ich beginne jedes Projekt mit einem ausführlichen Beratungsgespräch. Ich möchte Ihr
                Unternehmen, Ihre Ziele und Ihre Zielgruppe verstehen, bevor ich mit der Planung beginne.
              </p>
              <p>
                Ob Sie eine einfache WordPress-Website benötigen oder eine komplexe maßgeschneiderte Webanwendung – ich
                entwickle die optimale Lösung für Ihre Anforderungen. Dabei lege ich Wert auf:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Transparente Kommunikation während des gesamten Projekts</li>
                <li>Klare Zeitpläne und realistische Meilensteine</li>
                <li>Regelmäßige Updates und Feedbackschleifen</li>
                <li>Ausführliche Dokumentation und Schulung</li>
                <li>Langfristigen Support nach dem Launch</li>
              </ul>
              <p>
                Mein Ziel ist es nicht nur, eine Website zu erstellen, sondern ein langfristiger Partner für Ihre
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
