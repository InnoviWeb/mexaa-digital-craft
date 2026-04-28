import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Headphones,
  HeartHandshake,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  MonitorCheck,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import serverRoom from "@/assets/mexaa-server-room.jpg";

const itServices = [
  ["Managed Service", "Planbare IT-Betreuung mit Monitoring, Wartung und persönlichem Ansprechpartner."],
  ["IT-Outsourcing", "Wir übernehmen Betrieb, Support und Weiterentwicklung Ihrer IT-Infrastruktur."],
  ["IT-Service & Support", "Schnelle Hilfe für Teams, Arbeitsplätze, Server, Netzwerke und Cloud-Dienste."],
  ["IT-Rollout", "Strukturierte Migrationen, Hardware-Rollouts und Standortanbindungen ohne Reibungsverluste."],
  ["IT-Beratung", "Strategische Roadmaps für sichere, skalierbare und wirtschaftliche IT-Umgebungen."],
];

const solutions = [
  ["Microsoft 365", "Produktive Zusammenarbeit, sichere Identitäten und moderne Arbeitsplätze aus einer Hand."],
  ["Azure Infrastruktur", "Cloud-Architekturen, Backups und hybride Szenarien mit klarer Governance."],
  ["Microsoft Intune", "Geräteverwaltung, Compliance und Security Policies für moderne Unternehmen."],
  ["Client Management", "Standardisierte Clients, Patch-Prozesse und transparente Lifecycle-Steuerung."],
  ["Cloud Telefonie", "Flexible Kommunikation mit Teams-Telefonie, Rufnummernkonzept und Support."],
  ["KI-Lösungen", "Pragmatische Automatisierung und Copilot-Enablement mit messbarem Nutzen."],
];

const navGroups = [
  {
    title: "IT-Services",
    icon: Wrench,
    items: ["Managed Service", "IT-Outsourcing", "IT-Service & Support", "IT-Rollout", "IT-Beratung"],
  },
  {
    title: "Solutions",
    icon: Cloud,
    items: ["Microsoft 365", "Azure Infrastruktur", "Microsoft Intune", "Client Management", "Cloud Telefonie", "KI-Lösungen", "Workshops & Schulungen"],
  },
  {
    title: "Unternehmen",
    icon: Building2,
    items: ["Über uns", "Karriere", "Soziales Engagement", "Kontakt"],
  },
];

const serviceIcons = [MonitorCheck, Network, Headphones, Laptop, BriefcaseBusiness, Cloud, ShieldCheck, Cpu];

const ParticleNetwork = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1200 800" aria-hidden="true">
    <g fill="none" stroke="currentColor" className="text-primary" strokeWidth="1.2" strokeDasharray="8 14">
      <path className="animate-draw-line" d="M80 180 C260 80 370 310 540 210 S840 90 1110 210" />
      <path className="animate-draw-line" d="M120 610 C310 430 480 700 660 520 S930 390 1130 570" />
      <path className="animate-draw-line" d="M230 90 C360 250 330 430 510 500 S800 520 970 300" />
    </g>
    {[120, 260, 410, 555, 690, 840, 1010, 1120].map((x, index) => (
      <circle key={x} cx={x} cy={index % 2 ? 215 + index * 46 : 155 + index * 38} r="4" className="fill-primary" />
    ))}
  </svg>
);

const Navigation = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-hero/70 backdrop-blur-2xl">
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Hauptnavigation">
      <a href="#home" className="group flex items-center gap-3" aria-label="MEXAA-IT Startseite">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-primary font-black text-primary-foreground shadow-glow">M</span>
        <span className="leading-tight text-hero-foreground">
          <span className="block text-lg font-black tracking-tight">MEXAA-IT</span>
          <span className="block text-xs font-semibold text-hero-foreground/65">think for results!</span>
        </span>
      </a>

      <div className="hidden items-center gap-1 lg:flex">
        {navGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="group relative">
              <button className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font700 font-semibold text-hero-foreground/82 transition hover:bg-primary-foreground/10 hover:text-hero-foreground">
                <Icon className="h-4 w-4" /> {group.title} <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>
              <div className="nav-dropdown">
                {group.items.map((item) => (
                  <a key={item} href="#services" className="flex items-center justify-between rounded-sm px-3 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary hover:text-primary">
                    {item}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <a href="#contact" className="rounded-md bg-primary px-5 py-3 text-sm font800 font-extrabold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-hero">
        Kontakt
      </a>
    </nav>
  </header>
);

const ServiceList = ({ title, items }: { title: string; items: string[][] }) => (
  <div>
    <div className="mb-6 flex items-end justify-between gap-4">
      <h3 className="text-3xl font-black tracking-tight text-foreground">{title}</h3>
      <a href="#contact" className="shrink-0 text-sm font-extrabold text-primary transition hover:translate-x-1">Alle anzeigen →</a>
    </div>
    <div className="space-y-4">
      {items.map(([name, description], index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <a key={name} href="#contact" className="service-card group block">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-4 text-lg font900 font-black text-foreground">
                  {name}
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{description}</span>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section id="home" className="relative min-h-screen overflow-hidden bg-hero text-hero-foreground">
        <img src={serverRoom} alt="Moderner Serverraum als Symbol für sichere IT-Infrastruktur" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero/80" />
        <div className="absolute inset-0 bg-hero-radial" />
        <ParticleNetwork />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-28 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
          <div className="max-w-4xl section-reveal">
            <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-primary-foreground/18 bg-primary-foreground/10 px-4 py-2 text-sm font-extrabold text-hero-foreground shadow-glass backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-accent" /> MEXAA-IT · think for results!
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Gemeinsam die digitale Zukunft gestalten
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-hero-foreground/78 sm:text-xl">
              MEXAA-IT GmbH entwickelt, betreibt und schützt moderne IT-Landschaften für Unternehmen, die zuverlässige Systeme, klare Prozesse und messbare Ergebnisse erwarten.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-hero">
                Beratung anfragen <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-7 py-4 text-base font-black text-hero-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary-foreground/16">
                Leistungen entdecken
              </a>
            </div>
          </div>

          <aside className="glass-panel animate-float-soft rounded-md p-6 lg:p-8">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-hero-foreground/58">Warum MEXAA-IT</p>
            <div className="grid gap-4">
              {["Microsoft Partner", "<2h Reaktionszeit", "200+ Projekte", "Bundesweit"].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-md bg-primary-foreground/10 p-4 text-lg font-extrabold text-hero-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent" /> {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-background py-8 shadow-sm" aria-label="Vertrauenssignale">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 text-center text-sm font-black uppercase tracking-[0.16em] text-trust sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {['Microsoft Partner', 'Google ★★★★★ 5.0', 'ISO 27001', 'DSGVO konform'].map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center section-reveal">
          <h2 className="text-4xl font-black tracking-tight text-primary sm:text-5xl">Ihre IT – sicher, effizient und sorgenfrei</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Wir verbinden strategische Beratung mit operativer Exzellenz – damit Ihre IT nicht bremst, sondern Ihr Wachstum zuverlässig trägt.</p>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[[ShieldCheck, 'Flexible IT-Flatrates', 'Transparente Leistungen, kalkulierbare Kosten und ein Serviceumfang, der zu Ihrem Unternehmen passt.'], [MonitorCheck, 'Proaktives Monitoring', 'Wir erkennen Risiken frühzeitig, bevor Ausfälle entstehen oder Produktivität verloren geht.'], [HeartHandshake, 'Persönliche Betreuung', 'Direkte Ansprechpartner, klare Kommunikation und Entscheidungen auf Augenhöhe.']].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return <article key={title as string} className="rounded-md border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"><FeatureIcon className="mx-auto h-10 w-10 text-primary" /><h3 className="mt-6 text-xl font-black">{title as string}</h3><p className="mt-4 leading-7 text-muted-foreground">{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-secondary px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <ServiceList title="IT-Services" items={itServices} />
          <ServiceList title="Solutions" items={solutions} />
        </div>
      </section>

      <section className="bg-hero px-6 py-24 text-hero-foreground lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[['200+', 'Projekte'], ['50+', 'Kunden'], ['15+', 'Jahre'], ['98%', 'Zufriedenheit']].map(([number, label], index) => (
            <div key={label} className="animate-count-pop rounded-md border border-primary-foreground/10 bg-primary-foreground/8 p-8 backdrop-blur" style={{ animationDelay: `${index * 110}ms` }}>
              <div className="text-5xl font-black tracking-tight text-primary">{number}</div>
              <div className="mt-3 text-sm font-extrabold uppercase tracking-[0.2em] text-hero-foreground/62">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">Vertrauen, das im Alltag entsteht</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              ['SK', '„MEXAA-IT hat unsere Microsoft 365 Umgebung sauber strukturiert und die Akzeptanz im Team spürbar erhöht.“', 'Geschäftsführung, Kanzlei'],
              ['AM', '„Support reagiert schnell, dokumentiert nachvollziehbar und denkt immer einen Schritt weiter.“', 'Leitung Operations, Mittelstand'],
              ['TB', '„Der Rollout lief im laufenden Betrieb ruhig, planbar und professionell – genau wie versprochen.“', 'IT-Koordination, Handelsgruppe'],
            ].map(([initials, quote, role]) => (
              <article key={initials} className="rounded-md border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                <p className="text-lg font-semibold leading-8 text-foreground">{quote}</p>
                <div className="mt-7 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-primary font-black text-primary-foreground">{initials}</span><span className="text-sm font-bold text-muted-foreground">{role}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-hero px-6 py-24 text-center text-hero-foreground lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Bereit für Ihre digitale Transformation?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/72">Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.</p>
          <a href="mailto:kontakt@mexaa-it.de" className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift"><Mail className="h-5 w-5" /> Kontakt aufnehmen</a>
        </div>
      </section>

      <footer className="bg-footer px-6 py-16 text-hero-foreground lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div><div className="text-2xl font-black">MEXAA-IT</div><div className="mt-1 text-sm font-bold text-hero-foreground/58">think for results!</div><p className="mt-6 text-sm leading-6 text-hero-foreground/62">Professionelle IT-Services, Cloud-Lösungen und Beratung für Unternehmen in Deutschland.</p></div>
          {[["IT-Services", itServices.map(i => i[0])], ["Solutions", solutions.slice(0, 6).map(i => i[0])], ["Unternehmen", ["Über uns", "Karriere", "Soziales Engagement", "Kontakt"]]].map(([title, links]) => <div key={title as string}><h3 className="font-black">{title as string}</h3><div className="mt-5 space-y-3">{(links as string[]).map(link => <a key={link} href="#services" className="block text-sm text-hero-foreground/62 transition hover:text-primary">{link}</a>)}</div></div>)}
          <div><h3 className="font-black">Direktkontakt</h3><div className="mt-5 space-y-3 text-sm text-hero-foreground/62"><p className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> +49 000 000000</p><p className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Bundesweit im Einsatz</p><p className="flex gap-2"><Linkedin className="h-4 w-4 text-primary" /> LinkedIn</p></div><a href="#contact" className="mt-6 inline-flex rounded-md border border-primary-foreground/15 px-4 py-3 text-sm font-black transition hover:bg-primary hover:text-primary-foreground">Fernwartung starten</a></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-primary-foreground/10 pt-8 text-sm text-hero-foreground/52 md:flex-row md:items-center md:justify-between"><p>© 2026 MEXAA-IT GmbH. Alle Rechte vorbehalten.</p><div className="flex flex-wrap gap-5"><a href="#">Impressum</a><a href="#">AGB</a><a href="#">Datenschutz</a><a href="#">Cookies</a></div></div>
      </footer>
    </main>
  );
};

export default Index;