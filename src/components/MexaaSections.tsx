import { Award, Gauge, Layers, Mail, MapPin, Phone, ShieldCheck, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const advantages = [
  { icon: Layers, title: "Flexible Abrechnungsmodelle und IT-Flatrates", text: "Planbare IT-Kosten ohne böse Überraschungen durch flexible Abrechnungsmodelle und IT-Flatrates." },
  { icon: ShieldCheck, title: "Nachhaltige Fehlererkennung und -behebung", text: "Unser proaktives Monitoring erkennt Probleme frühzeitig, bevor sie Schäden verursachen – für stabile IT-Systeme." },
  { icon: Zap, title: "Hohe Systemverfügbarkeit von 99,9 %", text: "Hochverfügbare IT-Infrastruktur durch professionelles Management und redundante Systeme." },
  { icon: Gauge, title: "Schnelle Implementierung neuer Technologien", text: "Rasche Umsetzung innovativer IT-Lösungen durch erfahrene Teams und etablierte Prozesse." },
];

const reasons = [
  { number: "01", title: "Erfahrung", badge: "ZUVERLÄSSIG", text: "Durch langjährige Tätigkeit in der Administration und Optimierung komplexer IT-Infrastrukturen verfügen wir über das notwendige Know-how, um Ihre Systeme sicher und effizient zu führen." },
  { number: "02", title: "Flexibilität", badge: "DYNAMISCH", text: "Wir bieten Ihnen flexible Servicemodelle, die sich exakt an Ihren aktuellen Bedarf anpassen – ob Cloud-Migration, hybride Infrastrukturen oder kurzfristige Kapazitätserweiterungen." },
  { number: "03", title: "Zertifikate", badge: "AKTUELL", text: "Sicherheit ist in der IT kein Zustand, sondern ein kontinuierlicher Prozess. Wir arbeiten nach strengen Industriestandards und lassen unsere Expertise regelmäßig durch führende Technologiepartner zertifizieren." },
  { number: "04", title: "Mehrwert", badge: "INNOVATIV", text: "Unser Ziel ist es, Ihre interne IT vollständig zu entlasten, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Durch proaktives Monitoring, minimierte Ausfallzeiten und eine strategische IT-Beratung schaffen wir messbaren Mehrwert." },
];

export const WhyMexaa = () => (
  <section className="relative overflow-hidden bg-background px-6 py-16 md:py-[100px]">
    <div className="relative mx-auto max-w-[1200px]">
      <div className="text-center">
        <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-section-title md:text-[46px]">Ihr IT-Partner für innovative<br className="hidden md:block" /> und wachsende Unternehmen</h2>
        <p className="mx-auto mt-6 max-w-3xl text-[15.5px] leading-8 text-muted-foreground md:text-[16.5px]">Unser Anspruch ist es, der beste IT-Dienstleister in Hessen zu werden. Höchste Qualität, Zuverlässigkeit und Kundenorientierung – damit komplexe Projekte erfolgreich werden.</p>
      </div>
      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map(({ icon: Icon, title, text }) => (
          <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition hover:shadow-lift">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h3 className="text-[15px] font-extrabold leading-snug text-foreground">{title}</h3>
            <p className="mt-3 text-[13.5px] leading-7 text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const ReasonsForMexaa = () => (
  <section className="relative overflow-hidden bg-secondary px-6 py-16 md:py-[100px]">
    <div className="relative mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary"><Award className="h-3.5 w-3.5" /> Unsere Stärken</div>
        <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-section-title md:text-[46px]">Gründe, die für MEXAA-IT als Dienstleister sprechen</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {reasons.map((r) => (
          <article key={r.title} className="group rounded-2xl border border-border bg-card p-8 transition hover:shadow-lift">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-extrabold text-foreground md:text-2xl">{r.title}</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-primary">{r.badge}</span>
            </div>
            <p className="mt-4 text-[14px] leading-7 text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const defaultFaqs: Array<{ q: string; a: string }> = [
  { q: "Welche IT-Leistungen bietet MEXAA-IT als IT-Dienstleister an?", a: "Wir übernehmen die Verantwortung für Ihre IT – von der Planung bis zum laufenden Betrieb. Ob sichere Infrastruktur, moderne Cloud-Lösungen oder produktives Arbeiten mit Microsoft 365: Unsere Leistungen greifen nahtlos ineinander. Das Ergebnis sind stabile Systeme, transparente Kosten und eine IT, die Ihr Tagesgeschäft unterstützt statt bremst." },
  { q: "Für welche Unternehmensgröße sind IT-Services geeignet?", a: "Unsere IT-Services richten sich primär an Unternehmen ab 50 Mitarbeitern. Diese Zielgruppe profitiert optimal von unseren Dienstleistungen, da sie professionelle IT-Lösungen benötigen und oft keine eigene IT-Abteilung haben." },
  { q: "Bietet MEXAA ihre Leistungen auch für Unternehmen außerhalb von Hessen zur Verfügung?", a: "Unsere Leistungen bieten wir deutschlandweit an." },
  { q: "Werden auch Schulungen für Kunden angeboten?", a: "Neue Systeme entfalten ihren Nutzen erst im Alltag. Deshalb integrieren wir Schulungen fest in jedes Implementierungsprojekt. Ihre Mitarbeitenden lernen genau die Funktionen und Prozesse, die sie wirklich benötigen. Inhalte und Umfang passen wir individuell an Ihre Arbeitsabläufe und Vorkenntnisse an. So stellen wir sicher, dass neue Technologien schnell und effizient eingesetzt werden." },
];

export const FaqSection = ({ faqs = defaultFaqs }: { faqs?: Array<{ q: string; a: string }> }) => (
  <section className="bg-background px-6 py-16 md:py-[100px]">
    <div className="mx-auto max-w-[1200px]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-2xl border border-border bg-secondary p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">FAQ</div>
          <h2 className="mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-section-title md:text-[38px]">Fragen & Antworten</h2>
          <p className="mt-5 text-[14px] leading-7 text-muted-foreground">Sie finden Ihre Antwort nicht? Schreiben Sie uns oder rufen Sie an – wir freuen uns auf Sie.</p>
          <div className="mt-8 space-y-4">
            {[[Phone, "+49 6101 596 90 82"], [Mail, "info@mexaa.de"], [MapPin, "Homburger Str. 69a, 61118 Bad Vilbel"]].map(([Icon, text]) => {
              const Ico = Icon as typeof Phone;
              return (
                <div key={text as string} className="flex items-center gap-4 text-sm font-semibold">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10"><Ico className="h-4 w-4 text-primary" strokeWidth={1.8} /></span>
                  <span className="text-foreground">{text as string}</span>
                </div>
              );
            })}
          </div>
        </aside>
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-6 transition data-[state=open]:border-primary/40 data-[state=open]:shadow-lift">
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <span className="text-[15px] font-bold leading-snug text-foreground">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[14px] leading-7 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

const faqLibrary: Record<string, Array<{ q: string; a: string }>> = {
  "/managed-service": [
    { q: "Was beinhaltet ein Managed-Service-Vertrag?", a: "Monitoring, Patch- und Update-Management, Backup-Kontrolle, Endpoint Security, regelmäßige IT-Reviews sowie ein persönlicher Service Manager als fester Ansprechpartner." },
    { q: "Wie schnell reagiert MEXAA-IT bei Störungen?", a: "Bei kritischen Vorfällen reagieren wir in unter 2 Stunden. Unser Monitoring erkennt viele Probleme bereits, bevor Anwender sie bemerken." },
    { q: "Sind die Kosten wirklich planbar?", a: "Ja. Sie zahlen eine vereinbarte monatliche Pauschale auf Basis Ihrer Systeme und Nutzer – ohne versteckte Zusatzkosten im Tagesbetrieb." },
    { q: "Können wir später skalieren?", a: "Selbstverständlich. Managed Service wächst flexibel mit Ihrem Unternehmen – Geräte, Standorte oder Cloud-Dienste lassen sich jederzeit ergänzen." },
  ],
  "/it-outsourcing": [
    { q: "Übernehmen Sie unsere komplette IT?", a: "Ja, wir übernehmen wahlweise den vollständigen Betrieb oder ergänzen Ihr internes Team mit klar definierten Verantwortlichkeiten." },
    { q: "Wie viel Kosten lassen sich einsparen?", a: "Im Schnitt erreichen unsere Kunden 30 % Kostensenkung gegenüber einer komplett internen IT-Organisation – bei höherer Servicequalität." },
    { q: "Behalten wir die Kontrolle über unsere IT?", a: "Absolut. Sie erhalten transparente Reports, klare Eskalationswege und ein gemeinsames Steuerungsgremium für strategische Entscheidungen." },
    { q: "Wie läuft der Übergang ab?", a: "Mit einer strukturierten Transition-Phase: Bestandsaufnahme, Wissensübergabe, Tooling-Integration und stufenweise Übernahme – ohne Unterbrechung im Tagesgeschäft." },
  ],
  "/it-service-support": [
    { q: "Wie erreichen wir den Support?", a: "Per Telefon, E-Mail oder Ticketportal. Jede Anfrage wird priorisiert, dokumentiert und mit klarer Reaktionszeit bearbeitet." },
    { q: "Wer bearbeitet unsere Tickets?", a: "Erfahrene IT-Spezialisten aus unserem Team in Bad Vilbel – kein anonymes Callcenter, sondern feste Ansprechpartner, die Ihre Umgebung kennen." },
    { q: "Bieten Sie auch Vor-Ort-Support an?", a: "Ja, deutschlandweit. Für viele Anliegen genügt jedoch die sichere Fernwartung – schneller, günstiger und nachvollziehbar dokumentiert." },
    { q: "Erhalten wir Auswertungen?", a: "Monatlich erhalten Sie ein Reporting mit Ticketvolumen, Reaktionszeiten und wiederkehrenden Themen für gezielte Optimierungen." },
  ],
  "/it-rollout": [
    { q: "Wie groß dürfen Rollouts sein?", a: "Wir realisieren Rollouts vom kleinen Standortwechsel bis zur unternehmensweiten Migration mit mehreren hundert Geräten." },
    { q: "Wird der Tagesbetrieb gestört?", a: "Nein. Wir planen Rollouts in klaren Wellen, kommunizieren transparent und führen Pilotphasen durch, bevor wir flächig ausrollen." },
    { q: "Übernehmen Sie auch die Datenmigration?", a: "Ja. Wir migrieren Profile, Dokumente, Postfächer und Anwendungen strukturiert und mit Erfolgskontrolle." },
    { q: "Erhalten Mitarbeitende Einweisungen?", a: "Auf Wunsch ja – kompakte Schulungen oder Quick-Guides sorgen für eine schnelle Akzeptanz neuer Geräte und Tools." },
  ],
  "/it-beratung": [
    { q: "Sind Sie herstellerunabhängig?", a: "Ja. Wir empfehlen ausschließlich Lösungen, die zu Ihren fachlichen und wirtschaftlichen Zielen passen – ohne Reseller-Bindung." },
    { q: "Wie sieht ein typisches Beratungsprojekt aus?", a: "Wir starten mit einem Audit, definieren Zielbild und Roadmap, priorisieren Maßnahmen und begleiten die Umsetzung optional bis zur Inbetriebnahme." },
    { q: "Welche Themen deckt die Beratung ab?", a: "IT-Strategie, Cloud, Security, Modern Workplace, Lizenzoptimierung, Compliance sowie Projekt- und Change-Begleitung." },
    { q: "Lohnt sich Beratung auch für kleinere Unternehmen?", a: "Ja. Bereits ein klar strukturierter Tagesworkshop schafft Orientierung, identifiziert Risiken und priorisiert Investitionen." },
  ],
  "/microsoft-365": [
    { q: "Welche Lizenzen empfehlen Sie?", a: "Das hängt von Nutzungsszenario, Sicherheitsanforderungen und Compliance ab. Wir analysieren Ihre Anforderungen und vermeiden teure Über- oder Unterlizenzierung." },
    { q: "Migrieren Sie auch von Drittanbietern?", a: "Ja, von Google Workspace, IMAP, Exchange On-Premises und weiteren Quellen – inklusive Fileserver-Migration nach SharePoint/OneDrive." },
    { q: "Wie sicher ist Microsoft 365?", a: "Mit korrekt konfigurierten Identitäten, Conditional Access, MFA und Defender entsteht ein hohes Sicherheitsniveau – wir setzen genau das um." },
    { q: "Schulen Sie unser Team?", a: "Ja, wir bieten zielgruppenspezifische Trainings für Teams, SharePoint, OneDrive, Outlook und Microsoft Copilot." },
  ],
  "/azure-infrastruktur": [
    { q: "Lohnt sich der Wechsel zu Azure?", a: "Wenn Sie Skalierbarkeit, Standortunabhängigkeit oder Modernisierung priorisieren, in vielen Fällen ja. Wir prüfen TCO und Architektur vor jeder Empfehlung." },
    { q: "Wie sicher sind Daten in Azure?", a: "Microsoft betreibt Azure mit höchsten Sicherheitsstandards. Entscheidend ist eine saubere Konfiguration von Identitäten, Netzwerk und Backup – das ist unsere Aufgabe." },
    { q: "Können wir hybrid arbeiten?", a: "Ja. Hybride Architekturen mit Azure und vorhandenem On-Premises-Anteil sind ein häufiger und sinnvoller Weg in die Cloud." },
    { q: "Wer betreibt die Umgebung?", a: "Auf Wunsch übernehmen wir den vollständigen Betrieb inklusive Monitoring, Backup, Updates und Kostenkontrolle." },
  ],
  "/microsoft-intune": [
    { q: "Welche Geräte unterstützt Intune?", a: "Windows, macOS, iOS und Android – inklusive automatischer Bereitstellung mit Windows Autopilot und Apple Business Manager." },
    { q: "Können wir BYOD erlauben?", a: "Ja, mit App-Schutzrichtlinien lassen sich auch private Geräte sicher in den Unternehmenskontext einbinden – ohne tiefen Eingriff in das Privatgerät." },
    { q: "Wie verhindern wir Datenabfluss?", a: "Über Conditional Access, Compliance-Richtlinien, App Protection und Defender for Endpoint schaffen wir einen mehrschichtigen Schutz." },
    { q: "Migrieren Sie aus klassischer GPO-Welt?", a: "Ja, wir analysieren bestehende Group Policies und überführen sie strukturiert in moderne Intune-Richtlinien." },
  ],
  "/client-management": [
    { q: "Was umfasst Client Management?", a: "Die komplette Steuerung von Arbeitsplätzen: Beschaffung, Standardisierung, Patches, Software, Sicherheit, Support und Austausch im Lifecycle." },
    { q: "Standardisieren Sie unsere Geräte?", a: "Ja. Einheitliche Images, Software-Sets und Konfigurationen reduzieren Supportaufwand und erhöhen die Sicherheit deutlich." },
    { q: "Wie schnell sind neue Mitarbeitende einsatzbereit?", a: "Mit Autopilot und vorbereiteten Profilen ist ein neuer Arbeitsplatz oft am ersten Arbeitstag produktiv nutzbar." },
    { q: "Behalten wir die Übersicht?", a: "Ja, über zentrale Inventarisierung und Reporting wissen Sie jederzeit, welche Geräte, Versionen und Risiken im Unternehmen vorhanden sind." },
  ],
  "/cloud-telefonie": [
    { q: "Können wir Rufnummern mitnehmen?", a: "Ja, wir portieren Ihre Rufnummern und stellen einen reibungslosen Wechsel zum Wunschtermin sicher." },
    { q: "Funktioniert Telefonie über Microsoft Teams?", a: "Ja, Teams Phone ist eine ausgereifte Plattform – wir richten Direct Routing oder Operator Connect passend für Sie ein." },
    { q: "Was passiert bei Internetausfall?", a: "Über Failover, Mobilanbindung und Rufumleitung stellen wir sicher, dass Sie auch bei Störungen erreichbar bleiben." },
    { q: "Welche Hardware brauchen wir?", a: "Oft genügen Headsets und Smartphones. Tischtelefone sind möglich, aber selten zwingend nötig – wir beraten passend zu Ihrem Arbeitsalltag." },
  ],
  "/ki-loesungen": [
    { q: "Lohnt sich Microsoft Copilot bereits?", a: "In vielen Wissens- und Office-Prozessen ja. Wir prüfen Datenqualität, Berechtigungen und konkrete Use Cases vor einem Rollout." },
    { q: "Wie sicher sind unsere Daten bei KI-Nutzung?", a: "Bei Microsoft Copilot bleiben Ihre Daten in Ihrem Tenant. Voraussetzung ist eine saubere Berechtigungsstruktur – die schaffen wir mit Ihnen." },
    { q: "Können wir KI in eigene Prozesse integrieren?", a: "Ja, über Power Automate, Azure OpenAI und APIs lassen sich passgenaue Automatisierungen umsetzen." },
    { q: "Bieten Sie KI-Schulungen an?", a: "Ja. Wir vermitteln pragmatisch, wann KI hilft, wo Grenzen liegen und wie Mitarbeitende sie verantwortungsvoll nutzen." },
  ],
  "/workshops-schulungen": [
    { q: "Sind die Schulungen praxisnah?", a: "Ja. Wir arbeiten mit echten Beispielen aus Ihrem Unternehmensalltag und vermeiden trockene Folienschlachten." },
    { q: "Online oder vor Ort?", a: "Beides ist möglich. Auch hybride Formate mit Aufzeichnung und Nachschulung bieten wir an." },
    { q: "Erhalten Teilnehmende Materialien?", a: "Ja, jede Schulung wird mit verständlichen Handouts und kurzen Lernvideos begleitet." },
    { q: "Können Sie individuelle Themen aufnehmen?", a: "Selbstverständlich. Wir stimmen Inhalte exakt auf Ihre Rollen, Tools und Ziele ab." },
  ],
  "/ueber-uns": [
    { q: "Seit wann gibt es MEXAA-IT?", a: "Wir sind seit 2013 aktiv und betreuen heute Kunden in ganz Deutschland." },
    { q: "Wofür steht „think for results!“?", a: "Für Lösungen, die nicht nur technisch funktionieren, sondern messbar zum Unternehmenserfolg beitragen." },
    { q: "Sind Sie an Hersteller gebunden?", a: "Nein. Wir beraten herstelleroffen und empfehlen, was zu Ihren Anforderungen wirklich passt." },
    { q: "Wo befindet sich Ihr Sitz?", a: "Unser Hauptsitz ist in Bad Vilbel im Rhein-Main-Gebiet. Tätig sind wir bundesweit." },
  ],
  "/karriere": [
    { q: "Welche Profile suchen Sie?", a: "Vom IT-Support über System Engineering bis zur Cloud-Beratung – Erfahrung und Lernbereitschaft zählen mehr als Buzzwords im Lebenslauf." },
    { q: "Sind Initiativbewerbungen erwünscht?", a: "Ja, sehr gerne. Auch wenn aktuell keine passende Stelle ausgeschrieben ist, freuen wir uns über Ihre Initiativbewerbung." },
    { q: "Bieten Sie Weiterbildung an?", a: "Ja. Zertifizierungen, Konferenzen und interne Wissensformate sind fester Bestandteil unserer Kultur." },
    { q: "Ist Remote-Arbeit möglich?", a: "Wir arbeiten hybrid. Je nach Rolle ist ein hoher Remote-Anteil möglich – Kundeneinsätze sind ggf. vor Ort." },
  ],
  "/soziales-engagement": [
    { q: "Welche Initiativen unterstützen Sie?", a: "Wir engagieren uns in den Bereichen digitale Bildung, Hardware-Spenden und Security Awareness für gemeinnützige Organisationen." },
    { q: "Können wir Geräte spenden?", a: "Ja, wir vermitteln aufbereitete Hardware an Vereine und soziale Einrichtungen mit konkretem Bedarf." },
    { q: "Bieten Sie pro-bono-Workshops an?", a: "In begrenztem Umfang ja. Sprechen Sie uns an – wir prüfen Ihre Anfrage individuell." },
  ],
  "/impressum": [
    { q: "Wer ist verantwortlich für den Inhalt?", a: "Verantwortlich gemäß § 5 DDG ist die MEXAA-IT GmbH, vertreten durch den Geschäftsführer Mehmet Aggün." },
    { q: "Wo finde ich die Datenschutzerklärung?", a: "Diese finden Sie über den Link „Datenschutz“ im Footer dieser Website." },
  ],
};

export const getFaqsForPath = (path: string) => faqLibrary[path] ?? defaultFaqs;
