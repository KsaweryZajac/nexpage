import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Datenschutzerklärung - NexPage.at",
  description: "Datenschutzerklärung und DSGVO-Informationen von NexPage.at",
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
                <h2 className="text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Allgemeine Hinweise</h3>
                <p className="mt-2 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">2. Datenerfassung auf dieser Website</h2>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h3>
                <p className="mt-2 leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung oder dem
                  Impressum entnehmen.
                </p>

                <h3 className="mt-4 text-lg font-semibold text-foreground">Wie erfassen wir Ihre Daten?</h3>
                <p className="mt-2 leading-relaxed">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="mt-2 leading-relaxed">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                  Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>

                <h3 className="mt-4 text-lg font-semibold text-foreground">Wofür nutzen wir Ihre Daten?</h3>
                <p className="mt-2 leading-relaxed">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p className="mt-2 leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                  Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                  können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                  unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p className="mt-2 leading-relaxed">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">3. Hosting</h2>
                <p className="mt-4 leading-relaxed">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Externes Hosting</h3>
                <p className="mt-2 leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                  werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
                  IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                  Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="mt-2 leading-relaxed">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
                  lit. f DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  4. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Datenschutz</h3>
                <p className="mt-2 leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>
                <p className="mt-2 leading-relaxed">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                  Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                  Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                  wie und zu welchem Zweck das geschieht.
                </p>
                <p className="mt-2 leading-relaxed">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                  nicht möglich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">5. Kontaktformular</h2>
                <p className="mt-4 leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2 leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                  Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
                  oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p className="mt-2 leading-relaxed">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                  auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                  entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                  insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
                <p className="mt-4 leading-relaxed">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
                  Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
                  werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
                  gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser
                  erfolgt.
                </p>
                <p className="mt-2 leading-relaxed">
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog.
                  Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
                  Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                <p className="mt-2 leading-relaxed">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                  Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
                  von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet
                  werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground">7. Ihre Rechte</h2>
                <p className="mt-4 leading-relaxed">Sie haben das Recht:</p>
                <ul className="mt-2 list-inside list-disc space-y-2 pl-4 leading-relaxed">
                  <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                  <li>
                    Die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
                    Daten zu verlangen
                  </li>
                  <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                  <li>Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
                  <li>Auf Datenübertragbarkeit</li>
                  <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </div>

              <div className="text-sm">
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
