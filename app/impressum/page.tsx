import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Impressum - NextPage.at",
  description: "Impressum und rechtliche Informationen von NextPage.at",
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Impressum</h1>

            <div className="mt-12 space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
                <div className="mt-4 space-y-1">
                  <p>NextPage.at</p>
                  <p>Musterstraße 123</p>
                  <p>1010 Wien</p>
                  <p>Österreich</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
                <div className="mt-4 space-y-1">
                  <p>Telefon: +43 1 234 5678</p>
                  <p>E-Mail: info@nextpage.at</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Vertretungsberechtigte Geschäftsführung</h2>
                <p className="mt-4">Max Mustermann</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
                <p className="mt-4">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  ATU12345678
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Berufsbezeichnung</h2>
                <p className="mt-4">
                  Webdesign und Webentwicklung
                  <br />
                  Verliehen in: Österreich
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">EU-Streitschlichtung</h2>
                <p className="mt-4 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  .
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p className="mt-4 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
                <p className="mt-4 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-4 leading-relaxed">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Haftung für Links</h2>
                <p className="mt-4 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
                <p className="mt-4 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                  österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                  jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                  kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
