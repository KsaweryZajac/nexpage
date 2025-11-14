import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Impressum - NexPage.at",
  description: "Impressum und rechtliche Hinweise von NexPage.at",
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
                <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG und § 55 RStV</h2><br></br>
                <h2 className="text-xl font-semibold text-foreground">Betreiber</h2>
                <p>NexPage.at</p>
                <p>Einzelunternehmen</p>
                <p>Ksawery Zajac</p>
                <p>Österreich</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
                <p>E-Mail: info@nexpage.at</p>
                <p>Telefon: +43 660</p>
                <p>Website: nexpage.at</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Gewerbewortlaut</h2>
                <p>Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
                <p>
                  Nach §§ 8 bis 10 TMG sind wir nicht verpflichtet, fremde übermittelte oder gespeicherte Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Trotz sorgfältiger Prüfung übernehmen wir keine Gewähr für Vollständigkeit, Richtigkeit oder Aktualität fremder Inhalte. Sobald uns Rechtsverletzungen bekannt werden, entfernen wir diese unverzüglich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Haftung für Links</h2>
                <p>
                  Unsere Website kann Links zu externen Websites Dritter enthalten. Wir haben keinen Einfluss auf deren Inhalte und übernehmen dafür keine Haftung.
                </p>
                <p>
                  Für die Inhalte der verlinkten Seiten sind ausschließlich die jeweiligen Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
                <p>
                  Alle Inhalte dieser Website, einschließlich Texte, Bilder, Grafiken und Videos, unterliegen dem Urheberrecht. 
                  Eine Nutzung außerhalb des privaten, nicht-kommerziellen Gebrauchs ist nur mit ausdrücklicher schriftlicher Zustimmung des Rechteinhabers erlaubt.
                </p>
                <p>Unautorisierte Nutzung kann rechtliche Konsequenzen nach sich ziehen.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Online-Streitbeilegung</h2>
                <p>
                  Informationen zu anerkannten Streitbeilegungsstellen in der EU finden Sie hier:
                </p>
                <p>
                  <a
                    href="https://consumer-redress.ec.europa.eu/dispute-resolution-bodies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    https://consumer-redress.ec.europa.eu/dispute-resolution-bodies
                  </a>
                </p>
                <p>
                  Wir sind derzeit nicht bereit und verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>


              <div className="text-sm mt-6">
                <p>Stand: {new Date().toLocaleDateString("de-AT")}</p>
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
