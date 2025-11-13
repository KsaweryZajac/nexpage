import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Datenschutzerklärung - NexPage.at",
  description: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf NexPage.at",
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Datenschutzerklärung</h1>

            <div className="mt-12 space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Verantwortlicher</h2>
                <p className="mt-2">
                  NexPage.at <br />
                  Ksawery Zajac <br />
                  E-Mail: info@nexpage.at <br />
                  Telefon: +43 1 234 5678
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Allgemeine Hinweise</h2>
                <p className="mt-2 leading-relaxed">
                  Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Personenbezogene Daten sind
                  Informationen, die Sie persönlich identifizieren können. Diese Datenschutzerklärung erläutert, welche
                  Daten wir erfassen, wie wir sie verwenden und welche Rechte Sie nach der DSGVO und dem österreichischen
                  Datenschutzgesetz (DSG) haben.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Datenerhebung</h2>
                <p className="mt-2 leading-relaxed">
                  Daten werden entweder direkt von Ihnen übermittelt, z.B. über Kontaktformulare, oder automatisch beim
                  Besuch unserer Website erfasst. Dazu zählen technische Daten wie Browsertyp, Betriebssystem,
                  IP-Adresse und Zeitpunkt des Zugriffs. Diese Informationen helfen uns, den Betrieb der Website sicher
                  und fehlerfrei zu gewährleisten.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Kontaktformular</h2>
                <p className="mt-2 leading-relaxed">
                  Wenn Sie unser Kontaktformular verwenden, erfassen wir Angaben wie Name, E-Mail-Adresse, optionale
                  Telefonnummer und Ihre Nachricht. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und
                  für eventuelle Rückfragen genutzt. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6
                  Abs. 1 lit. a DSGVO) oder zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
                <p className="mt-2 leading-relaxed">
                  Die Daten werden gelöscht, sobald der Zweck der Erhebung entfällt, es sei denn, gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Server-Log-Dateien</h2>
                <p className="mt-2 leading-relaxed">
                  Unser Hoster speichert automatisch Informationen in Server-Log-Dateien, darunter Browsertyp, Betriebssystem,
                  Referrer-URL, Hostname, Uhrzeit der Anfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit
                  personenbezogenen Daten erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Hosting</h2>
                <p className="mt-2 leading-relaxed">
                  Unsere Website wird extern gehostet. Die Speicherung personenbezogener Daten erfolgt beim Hosting-Anbieter
                  und dient der sicheren, schnellen Bereitstellung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
                <p className="mt-2 leading-relaxed">
                  Wir verwenden Cookies, um die Funktionsfähigkeit der Website zu gewährleisten und die Nutzererfahrung zu verbessern. 
                  Session-Cookies werden nach dem Schließen des Browsers gelöscht, persistente Cookies können Sie jederzeit selbst löschen.
                  Notwendige Cookies sind für die Grundfunktionen der Website erforderlich, Analyse-Cookies verwenden wir nur mit Einwilligung.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Ihre Rechte</h2>
                <ul className="mt-2 list-inside list-disc space-y-2 pl-4 leading-relaxed">
                  <li>Auskunft über gespeicherte personenbezogene Daten</li>
                  <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li>Löschung Ihrer Daten („Recht auf Vergessenwerden“)</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen Verarbeitung</li>
                  <li>Beschwerderecht bei der Aufsichtsbehörde</li>
                </ul>
                <p className="mt-2 leading-relaxed">
                  Für alle Anliegen kontaktieren Sie uns unter: info@nexpage.at oder +43 1 234 5678.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">Sichere Verbindung</h2>
                <p className="mt-2 leading-relaxed">
                  Unsere Website nutzt SSL/TLS-Verschlüsselung, um die Übertragung Ihrer Daten zu schützen. Eine sichere Verbindung erkennen Sie am „https://“ und Schloss-Symbol im Browser.
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
