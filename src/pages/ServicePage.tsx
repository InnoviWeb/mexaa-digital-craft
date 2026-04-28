import { ArrowRight, CheckCircle2, Clock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { type FormEvent, useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import { PageShell } from "@/components/MexaaLayout";

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<Record<string, any> & { title: string }>;
  stats?: string[][];
  table?: string[][];
};

const pageData: Record<string, PageContent> = {
  "/managed-service": {
    eyebrow: "Managed Service", title: "Managed Services, die Ihre IT dauerhaft stabil halten", intro: "Wir betreiben Ihre IT proaktiv, transparent und mit klaren Service-Leveln – damit Ihr Team arbeiten kann, während wir Risiken früh erkennen und lösen.",
    sections: [
      { title: "Was ist Managed Service?", text: "Managed Service bedeutet: Ihre IT wird nicht erst betreut, wenn etwas ausfällt. MEXAA-IT überwacht Systeme, installiert Updates, dokumentiert Änderungen und optimiert Ihre Umgebung kontinuierlich." },
      { title: "Leistungsumfang", bullets: ["Server- und Client-Monitoring", "Patch- und Update-Management", "Backup-Kontrolle und Wiederherstellungstests", "Endpoint Security und Schwachstellenbewertung", "Regelmäßige IT-Reviews", "Persönlicher Service Manager"] },
      { title: "Vorteile", bullets: ["Planbare Kosten statt Überraschungen", "Weniger Ausfallzeiten im Tagesgeschäft", "Bessere Dokumentation und Compliance", "Schnelle Eskalation bei kritischen Ereignissen"] },
    ], stats: [["99.9%", "Uptime"], ["<2h", "Reaktion"], ["24/7", "Monitoring"], ["100%", "Transparenz"]]
  },
  "/it-outsourcing": {
    eyebrow: "IT-Outsourcing", title: "Ihre IT-Abteilung als verlässlicher externer Partner", intro: "Wir übernehmen Verantwortung für Betrieb, Support und Weiterentwicklung Ihrer IT – flexibel skalierbar und wirtschaftlich planbar.",
    sections: [
      { title: "Vollständige IT-Auslagerung", text: "Ob Ergänzung Ihres internen Teams oder vollständige Auslagerung: Wir schaffen klare Zuständigkeiten, definierte Prozesse und einen Service, der zu Ihrem Unternehmen passt." },
      { title: "Leistungspunkte", bullets: ["Betrieb von Infrastruktur und Arbeitsplätzen", "Helpdesk für Anwenderinnen und Anwender", "Lieferanten- und Lizenzmanagement", "Cloud- und Security-Betrieb", "Projektsteuerung und Dokumentation", "Strategische IT-Roadmap"] },
    ], stats: [["30%", "Kostensenkung"], ["1", "Ansprechpartner"], ["Flex", "Skalierung"], ["0", "Ausfallzeiten"]]
  },
  "/it-service-support": {
    eyebrow: "IT-Service & Support", title: "Helpdesk und Support mit klarer Reaktionszeit", intro: "Unser Support löst technische Anliegen schnell, verständlich und nachvollziehbar – vom Passwortproblem bis zur komplexen Störung.",
    sections: [
      { title: "Helpdesk & Support", text: "Wir entlasten Ihre Mitarbeitenden mit einem professionellen First- und Second-Level-Support, sauberer Ticketdokumentation und priorisierten Eskalationswegen." },
      { title: "Leistungen", bullets: ["Remote- und Vor-Ort-Support", "Ticketannahme und Priorisierung", "Benutzerverwaltung", "Hardware- und Software-Support", "Störungsanalyse", "Monatliche Support-Auswertung"] },
    ], table: [["Kritisch", "< 2 Stunden", "Betriebsunterbrechung"], ["Hoch", "< 4 Stunden", "Mehrere Nutzer betroffen"], ["Normal", "< 1 Arbeitstag", "Einzelanfrage"], ["Service", "Nach Vereinbarung", "Änderung oder Bestellung"]]
  },
  "/it-rollout": {
    eyebrow: "IT-Rollout", title: "Rollouts ohne Chaos, Stillstand oder Überraschungen", intro: "Wir planen und realisieren Hardware-, Software- und Standort-Rollouts mit sauberer Kommunikation, Tests und messbarer Qualität.",
    sections: [
      { title: "Rollout-Prozess", steps: ["Analyse", "Pilotierung", "Paketierung", "Ausführung", "Abnahme"] },
      { title: "Leistungen", bullets: ["Client- und Notebook-Rollouts", "Microsoft 365 Migrationen", "Standort- und Netzwerkumzüge", "Image- und Softwareverteilung", "Benutzereinweisung", "Abschlussdokumentation"] },
    ]
  },
  "/it-beratung": {
    eyebrow: "IT-Beratung", title: "Strategische IT-Beratung mit Blick auf Ergebnisse", intro: "Wir verbinden technische Tiefe mit wirtschaftlicher Perspektive und entwickeln Roadmaps, die realistisch umsetzbar sind.",
    sections: [
      { title: "Unser Beratungsansatz", text: "Wir analysieren Systeme, Risiken, Kosten und Prozesse. Daraus entstehen priorisierte Maßnahmen, klare Entscheidungsgrundlagen und ein realistischer Umsetzungsplan." },
      { title: "Leistungen", bullets: ["IT-Audit und Reifegradanalyse", "Cloud- und Security-Strategie", "Lizenz- und Kostenoptimierung", "Modern Workplace Konzepte", "Ausschreibungsbegleitung", "Projekt- und Change-Beratung"] },
    ]
  },
  "/microsoft-365": {
    eyebrow: "Microsoft 365", title: "Microsoft 365 produktiv, sicher und sauber eingeführt", intro: "Wir gestalten Microsoft 365 so, dass Zusammenarbeit, Sicherheit und Governance im Alltag funktionieren.",
    sections: [
      { title: "M365 Apps Übersicht", bullets: ["Teams für Kommunikation und Meetings", "Outlook und Exchange Online", "SharePoint als Intranet- und Dokumentenplattform", "OneDrive für sichere Dateien", "Planner und To Do für Aufgaben", "Power Platform für Automatisierung"] },
      { title: "Vorteile", bullets: ["Einheitliche Zusammenarbeit", "Sichere Identitäten", "Mobile Produktivität", "Weniger Schatten-IT"] },
    ]
  },
  "/azure-infrastruktur": {
    eyebrow: "Azure Infrastruktur", title: "Skalierbare Cloud-Infrastruktur auf Microsoft Azure", intro: "Wir planen, migrieren und betreiben Azure-Umgebungen mit klarer Architektur, Kostenkontrolle und Security by Design.",
    sections: [
      { title: "Azure Services", bullets: ["Virtuelle Maschinen und Netzwerke", "Backup und Disaster Recovery", "Azure Virtual Desktop", "Storage und Datenplattformen", "Identity und Conditional Access", "Monitoring und Kostenanalyse"] },
      { title: "Migration-Prozess", steps: ["Assessment", "Zielarchitektur", "Pilotmigration", "Produktivumzug", "Optimierung"] },
    ]
  },
  "/microsoft-intune": {
    eyebrow: "Microsoft Intune", title: "Geräte sicher verwalten – unabhängig vom Standort", intro: "Mit Intune steuern wir Clients, Smartphones, Compliance und Sicherheitsrichtlinien zentral und nachvollziehbar.",
    sections: [
      { title: "Intune Funktionen", bullets: ["Geräteregistrierung und Autopilot", "Compliance-Richtlinien", "App-Verteilung", "Endpoint Security Baselines", "Mobile Device Management", "Reporting und Gerätestatus"] },
      { title: "Gerätemanagement", text: "Wir standardisieren Endgeräte, reduzieren manuelle Einrichtung und sorgen dafür, dass jedes Gerät den Sicherheitsanforderungen Ihres Unternehmens entspricht." },
    ]
  },
  "/client-management": {
    eyebrow: "Client Management", title: "Standardisierte Clients für sichere Produktivität", intro: "Wir verwalten Arbeitsplätze über den gesamten Lifecycle – von Beschaffung und Einrichtung bis Patch, Support und Austausch.",
    sections: [{ title: "Client Management Leistungen", bullets: ["Windows Deployment", "Softwareverteilung", "Patch-Management", "Inventarisierung", "Endpoint Protection", "Lifecycle-Planung"] }]
  },
  "/cloud-telefonie": {
    eyebrow: "Cloud Telefonie", title: "Moderne Telefonie direkt aus der Cloud", intro: "Wir bringen Ihre Kommunikation in Microsoft Teams oder VoIP-Plattformen – flexibel, standortunabhängig und professionell betreut.",
    sections: [
      { title: "VoIP Vorteile", bullets: ["Telefonieren von überall", "Weniger Hardware vor Ort", "Flexible Rufgruppen", "Einfache Skalierung", "Bessere Integration in Collaboration", "Transparente Betriebskosten"] },
      { title: "Funktionen", bullets: ["Rufnummernportierung", "Warteschleifen", "Auto Attendant", "Headset- und Geräteberatung", "Notrufkonzept", "Monitoring"] },
    ]
  },
  "/ki-loesungen": {
    eyebrow: "KI-Lösungen", title: "KI sinnvoll einsetzen – sicher, messbar und alltagstauglich", intro: "Wir helfen Unternehmen, Microsoft Copilot und Automatisierung dort einzusetzen, wo echte Entlastung entsteht.",
    sections: [
      { title: "Microsoft Copilot", text: "Wir prüfen Datenqualität, Berechtigungen und Use Cases, bevor Copilot ausgerollt wird. So entsteht Nutzen ohne Kontrollverlust." },
      { title: "KI Automatisierung", bullets: ["Dokumentenprozesse", "E-Mail- und Ticketklassifizierung", "Wissenssuche", "Reporting", "Meeting-Zusammenfassungen", "Workflow-Automatisierung"] },
      { title: "Use Cases", bullets: ["Vertriebsvorbereitung", "HR-Onboarding", "Support-Assistenz", "Management-Reports"] },
    ]
  },
  "/workshops-schulungen": {
    eyebrow: "Workshops & Schulungen", title: "Schulungen, die Teams wirklich weiterbringen", intro: "Praxisnahe Trainings für moderne Zusammenarbeit, Security Awareness und Microsoft 365 – verständlich, konkret und umsetzbar.",
    sections: [
      { title: "Schulungsangebot", bullets: ["Microsoft 365 Grundlagen", "Teams produktiv nutzen", "Security Awareness", "SharePoint Struktur", "Copilot Einführung", "Administrator Workshops"] },
      { title: "Ablauf", steps: ["Bedarf klären", "Agenda abstimmen", "Workshop durchführen", "Unterlagen bereitstellen", "Follow-up sichern"] },
    ]
  },
  "/ueber-uns": {
    eyebrow: "Über uns", title: "IT-Partner mit Haltung, Präzision und Ergebnisfokus", intro: "MEXAA-IT GmbH steht für verlässliche IT-Betreuung, klare Kommunikation und Lösungen, die Unternehmen langfristig stärker machen.",
    sections: [
      { title: "Unternehmensgeschichte", text: "Aus der täglichen Praxis mittelständischer IT entstand unser Anspruch: weniger Fachchinesisch, mehr Verantwortung, bessere Ergebnisse. Heute begleiten wir Unternehmen bundesweit bei Betrieb, Cloud und Transformation." },
      { title: "Team", bullets: ["Senior IT Consultants", "Cloud Architects", "Support Specialists", "Security Engineers"] },
      { title: "Werte", bullets: ["Verantwortung", "Transparenz", "Verlässlichkeit", "Pragmatismus"] },
    ], stats: [["15+", "Jahre Erfahrung"], ["200+", "Projekte"], ["50+", "Kunden"], ["98%", "Zufriedenheit"]]
  },
  "/karriere": {
    eyebrow: "Karriere", title: "Arbeiten an IT, die Unternehmen wirklich weiterbringt", intro: "Bei MEXAA-IT zählen Eigenverantwortung, sauberes Handwerk und Teamgeist. Wir suchen Menschen, die Verantwortung übernehmen möchten.",
    sections: [
      { title: "Warum MEXAA-IT", bullets: ["Moderne Projekte", "Klare Entwicklungsperspektiven", "Faire Kommunikation", "Flexibles Arbeiten"] },
      { title: "Offene Stellen", jobs: ["IT Support Specialist (m/w/d)", "Cloud Consultant Microsoft 365 (m/w/d)", "System Engineer Infrastruktur (m/w/d)"] },
      { title: "Bewerbungsprozess", steps: ["Kurzbewerbung", "Erstgespräch", "Fachlicher Austausch", "Angebot"] },
    ]
  },
  "/soziales-engagement": {
    eyebrow: "Soziales Engagement", title: "Technologie soll Verantwortung stärken", intro: "Wir unterstützen Initiativen, die Bildung, digitale Teilhabe und lokale Gemeinschaften fördern.",
    sections: [
      { title: "Unsere Initiativen", cards: [["Digitale Bildung", "Workshops und Geräteberatung für gemeinnützige Bildungsträger."], ["Hardware spenden", "Aufbereitete Geräte für Vereine und soziale Einrichtungen."], ["Security Awareness", "Kostenfreie Impulse für Organisationen mit begrenzten Ressourcen."]] },
    ]
  },
};

type PageKey = keyof typeof pageData;

const Hero = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) => (
  <section className="relative overflow-hidden bg-hero px-6 pt-36 text-hero-foreground">
    <img src={serverRoom} alt="Professionelle IT-Infrastruktur im Rechenzentrum" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-readable-hero" />
    <div className="relative mx-auto max-w-[1200px] py-[100px]">
      <div className="max-w-3xl animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-extrabold backdrop-blur-xl"><Sparkles className="h-4 w-4 text-accent" /> {eyebrow}</div>
        <h1 className="text-[48px] font-black leading-[1.05] tracking-[-0.03em] text-hero-foreground md:text-[64px]">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-hero-foreground/82">{intro}</p>
      </div>
    </div>
  </section>
);

const ContactCta = () => (
  <section className="bg-hero px-6 py-[100px] text-center text-hero-foreground">
    <div className="mx-auto max-w-[1200px]">
      <h2 className="text-[40px] font-extrabold leading-tight text-hero-foreground">Bereit für den nächsten Schritt?</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-hero-foreground/72">Lassen Sie uns Ihre Anforderungen gemeinsam bewerten und eine klare, realistische IT-Roadmap entwickeln.</p>
      <Link to="/kontakt" className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift">Kontakt aufnehmen <ArrowRight className="h-5 w-5" /></Link>
    </div>
  </section>
);

const ContentSection = ({ section }: { section: any }) => (
  <section className="bg-background px-6 py-[100px] even:bg-secondary">
    <div className="mx-auto max-w-[1200px] animate-fade-up">
      <h2 className="text-[40px] font-extrabold leading-tight text-section-title">{section.title}</h2>
      {section.text && <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{section.text}</p>}
      {section.bullets && <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{section.bullets.map((b: string) => <div key={b} className="service-card flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><span className="font-semibold leading-7">{b}</span></div>)}</div>}
      {section.steps && <div className="mt-10 grid gap-4 md:grid-cols-5">{section.steps.map((s: string, i: number) => <div key={s} className="rounded-md border border-border bg-card p-6 text-center shadow-sm"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary font-black text-primary-foreground">{i + 1}</div><h3 className="mt-5 font-black">{s}</h3></div>)}</div>}
      {section.jobs && <div className="mt-10 grid gap-5 md:grid-cols-3">{section.jobs.map((j: string) => <div key={j} className="service-card"><h3 className="text-xl font-black">{j}</h3><p className="mt-3 text-muted-foreground">Vollzeit oder hybrid · Start nach Vereinbarung · Entwicklungsperspektive inklusive.</p></div>)}</div>}
      {section.cards && <div className="mt-10 grid gap-5 md:grid-cols-3">{section.cards.map(([t, d]: string[]) => <div key={t} className="service-card"><h3 className="text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-muted-foreground">{d}</p></div>)}</div>}
    </div>
  </section>
);

const ContactPage = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const schema = z.object({ name: z.string().trim().min(2).max(100), firma: z.string().trim().max(100), email: z.string().trim().email().max(255), telefon: z.string().trim().max(40), betreff: z.string().trim().min(1), nachricht: z.string().trim().min(10).max(1000), dsgvo: z.literal(true) });
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = schema.safeParse({ ...Object.fromEntries(form.entries()), dsgvo: form.get("dsgvo") === "on" });
    if (!result.success) setErrors(Object.fromEntries(result.error.issues.map((i) => [String(i.path[0]), "Bitte prüfen Sie dieses Feld."])));
    else setErrors({});
  };
  return <PageShell><Hero eyebrow="Kontakt" title="Sprechen wir über Ihre IT-Ziele" intro="Ob Beratung, Support oder konkretes Projekt: Wir melden uns schnell und mit einer klaren nächsten Empfehlung." />
    <section className="bg-background px-6 py-[100px]"><div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={submit} className="rounded-md border border-border bg-card p-8 shadow-lift"><div className="grid gap-5 md:grid-cols-2">{[["name","Name"],["firma","Firma"],["email","Email"],["telefon","Telefon"]].map(([n,l]) => <label key={n} className="text-sm font-bold">{l}<input name={n} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />{errors[n] && <span className="mt-1 block text-xs text-destructive">{errors[n]}</span>}</label>)}<label className="text-sm font-bold md:col-span-2">Betreff<select name="betreff" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"><option value="">Bitte wählen</option><option>Managed Service</option><option>Cloud Projekt</option><option>Support Anfrage</option><option>Karriere</option></select>{errors.betreff && <span className="mt-1 block text-xs text-destructive">{errors.betreff}</span>}</label><label className="text-sm font-bold md:col-span-2">Nachricht<textarea name="nachricht" rows={6} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />{errors.nachricht && <span className="mt-1 block text-xs text-destructive">{errors.nachricht}</span>}</label></div><label className="mt-5 flex gap-3 text-sm text-muted-foreground"><input name="dsgvo" type="checkbox" className="mt-1" /> Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.</label>{errors.dsgvo && <span className="mt-1 block text-xs text-destructive">Bitte stimmen Sie zu.</span>}<button className="mt-7 rounded-md bg-primary px-7 py-4 font-black text-primary-foreground shadow-glow transition hover:-translate-y-1">Anfrage senden</button></form>
      <aside className="rounded-md bg-hero p-8 text-hero-foreground shadow-lift"><h2 className="text-[40px] font-extrabold">Direkter Kontakt</h2><div className="mt-8 space-y-5 text-hero-foreground/75"><p className="flex gap-3"><Mail className="h-5 w-5 text-primary" /> kontakt@mexaa-it.de</p><p className="flex gap-3"><Clock className="h-5 w-5 text-primary" /> Mo–Fr 08:00–18:00 Uhr</p><p className="flex gap-3"><ShieldCheck className="h-5 w-5 text-primary" /> Fernwartung nach Freigabe starten</p></div><button className="mt-8 rounded-md border border-primary-foreground/20 px-5 py-3 font-black transition hover:bg-primary">Fernwartung starten</button></aside>
    </div></section></PageShell>;
};

export const GenericPage = ({ path }: { path: string }) => {
  if (path === "/kontakt") return <ContactPage />;
  const page = pageData[path] ?? pageData["/managed-service"];
  return <PageShell><Hero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
    {page.stats && <section className="bg-hero px-6 py-[100px] text-hero-foreground"><div className="mx-auto grid max-w-[1200px] gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">{page.stats.map(([n,l]) => <div key={l} className="rounded-md border border-primary-foreground/10 bg-primary-foreground/10 p-7 backdrop-blur"><div className="text-5xl font-black text-primary">{n}</div><div className="mt-3 font-bold text-hero-foreground/70">{l}</div></div>)}</div></section>}
    {page.sections.map((section) => <ContentSection key={section.title} section={section} />)}
    {page.table && <section className="bg-secondary px-6 py-[100px]"><div className="mx-auto max-w-[1200px]"><h2 className="text-[40px] font-extrabold text-section-title">Reaktionszeiten-Tabelle</h2><div className="mt-8 overflow-hidden rounded-md border border-border bg-card shadow-sm">{page.table.map((r) => <div key={r[0]} className="grid grid-cols-3 border-b border-border p-4 last:border-0"><strong>{r[0]}</strong><span>{r[1]}</span><span className="text-muted-foreground">{r[2]}</span></div>)}</div></div></section>}
    <ContactCta />
  </PageShell>;
};
