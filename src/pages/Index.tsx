import { ArrowRight, CheckCircle2, Mail, MonitorCheck, Network, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import drDinger from "@/assets/dr-helmut-dinger.avif";
import { Footer, Navigation } from "@/components/MexaaLayout";
import { FaqSection, WhyMexaa } from "@/components/MexaaSections";
import { itServices, serviceIcons, solutions } from "@/components/mexaaData";

const ParticleNetwork = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1200 800" aria-hidden="true">
    <g fill="none" stroke="currentColor" className="text-primary" strokeWidth="1.2" strokeDasharray="8 14">
      <path className="animate-draw-line" d="M80 180 C260 80 370 310 540 210 S840 90 1110 210" />
      <path className="animate-draw-line" d="M120 610 C310 430 480 700 660 520 S930 390 1130 570" />
      <path className="animate-draw-line" d="M230 90 C360 250 330 430 510 500 S800 520 970 300" />
    </g>
    {[120, 260, 410, 555, 690, 840, 1010, 1120].map((x, index) => <circle key={x} cx={x} cy={index % 2 ? 215 + index * 46 : 155 + index * 38} r="4" className="fill-primary" />)}
  </svg>
);

const ServiceList = ({ title, items }: { title: string; items: typeof itServices }) => (
  <div>
    <div className="mb-6 flex items-end justify-between gap-4">
      <h3 className="text-3xl font-black tracking-tight text-section-title">{title}</h3>
      <Link to={items[0].path} className="shrink-0 text-sm font-extrabold text-primary transition hover:translate-x-1">Alle anzeigen →</Link>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <Link key={item.path} to={item.path} className="service-card group block">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-4 text-lg font-black text-foreground">{item.title}<ArrowRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-1" /></span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{item.description}</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navigation />

    <section id="home" className="relative min-h-screen overflow-hidden bg-hero text-hero-foreground">
      <img src={serverRoom} alt="Moderner Serverraum als Symbol für sichere IT-Infrastruktur" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-readable-hero" />
      <ParticleNetwork />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1200px] items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[55fr_45fr]">
        <div className="max-w-3xl text-left section-reveal">
          <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-extrabold text-hero-foreground shadow-glass backdrop-blur-xl"><Sparkles className="h-4 w-4 text-accent" /> MEXAA-IT · think for results!</div>
          <h1 className="text-[48px] font-black leading-[1.05] tracking-[-0.03em] text-hero-foreground md:text-[64px]">Gemeinsam die digitale Zukunft gestalten</h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-hero-foreground/85 sm:text-xl">MEXAA-IT GmbH entwickelt, betreibt und schützt moderne IT-Landschaften für Unternehmen, die zuverlässige Systeme, klare Prozesse und messbare Ergebnisse erwarten.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift">Beratung anfragen <ArrowRight className="h-5 w-5" /></Link>
            <Link to="/managed-service" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-7 py-4 text-base font-black text-hero-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary-foreground/16">Leistungen entdecken</Link>
          </div>
        </div>
        <aside className="glass-panel animate-float-soft rounded-md p-6 lg:p-8">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-hero-foreground/65">Warum MEXAA-IT</p>
          <div className="grid gap-4">{["Microsoft Partner", "<2h Reaktionszeit", "200+ Projekte", "Bundesweit"].map((item) => <div key={item} className="flex items-center gap-4 rounded-md bg-primary-foreground/10 p-4 text-lg font-extrabold text-hero-foreground"><CheckCircle2 className="h-6 w-6 text-accent" /> {item}</div>)}</div>
        </aside>
      </div>
    </section>

    <section className="bg-background py-8 shadow-sm" aria-label="Vertrauenssignale"><div className="mx-auto grid max-w-[1200px] gap-5 px-6 text-center text-sm font-black uppercase tracking-[0.16em] text-trust sm:grid-cols-2 lg:grid-cols-4">{['Microsoft Partner', 'Google ★★★★★ 5.0', 'ISO 27001', 'DSGVO konform'].map((item) => <div key={item}>{item}</div>)}</div></section>

    <section className="bg-background px-6 py-[100px]"><div className="mx-auto max-w-[1200px] text-center section-reveal"><h2 className="text-[40px] font-extrabold leading-tight text-primary">Ihre IT – sicher, effizient und sorgenfrei</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Wir verbinden strategische Beratung mit operativer Exzellenz – damit Ihre IT nicht bremst, sondern Ihr Wachstum zuverlässig trägt.</p><div className="mt-16 grid gap-6 md:grid-cols-3">{[[ShieldCheck, 'Flexible IT-Flatrates', 'Transparente Leistungen, kalkulierbare Kosten und ein Serviceumfang, der zu Ihrem Unternehmen passt.'], [MonitorCheck, 'Proaktives Monitoring', 'Wir erkennen Risiken frühzeitig, bevor Ausfälle entstehen oder Produktivität verloren geht.'], [Network, 'Persönliche Betreuung', 'Direkte Ansprechpartner, klare Kommunikation und Entscheidungen auf Augenhöhe.']].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <article key={title as string} className="rounded-md border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"><FeatureIcon className="mx-auto h-10 w-10 text-primary" /><h3 className="mt-6 text-xl font-black">{title as string}</h3><p className="mt-4 leading-7 text-muted-foreground">{text as string}</p></article>; })}</div></div></section>

    <section className="bg-background px-6 py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-lift md:grid-cols-[1fr_280px] md:p-12">
          <div className="relative">
            <span className="absolute -left-2 -top-6 text-[120px] font-black leading-none text-primary/15">"</span>
            <div className="mb-5 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="relative text-lg font-medium leading-8 text-foreground">
              Mit MEXAA-IT als unseren Full-Service IT-Dienstleister haben wir ganz ausgezeichnete Erfahrungen gemacht! Mit systemübergreifender IT-Kompetenz, hohem persönlichen Engagement, Pragmatismus und einem sehr guten Problemlösungsverständnis haben wir in kurzer Zeit den Umstieg von einer traditionellen in eine moderne cloudbasierte IT-Welt geschafft. Der gelungene Umstieg hat sich in einer partnerschaftlichen Zusammenarbeit im Bereich des IT-Supports, der Datensicherheit und der Systemoptimierung fortgesetzt. Ergebnis ist eine sehr hohe Verfügbarkeit der IT-Anwendungen, planbare Kosten und auch auf der menschlichen Ebene das gute Gefühl immer einen kompetenten Ansprechpartner in allen IT-Fragen an unserer Seite zu haben.
            </p>
            <div className="mt-8 border-l-4 border-primary pl-5">
              <div className="text-base font-black text-foreground">Dr. Helmut Dinger</div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">Geschäftsführer · RWTH International Academy gGmbH</div>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <img
              src={drDinger}
              alt="Dr. Helmut Dinger, Geschäftsführer RWTH International Academy"
              width={240}
              height={280}
              className="h-[280px] w-[240px] rounded-2xl object-cover shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>

    <WhyMexaa />

    <section id="services" className="bg-secondary px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center section-reveal">
          <h2 className="text-[40px] font-extrabold leading-tight text-section-title">Unsere Leistungen im Überblick</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Von Managed Services bis zu Cloud-Lösungen – alles aus einer Hand.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <ServiceList title="IT-Services" items={itServices} />
          <ServiceList title="Solutions" items={solutions} />
        </div>
      </div>
    </section>


    <FaqSection />

    <section id="contact" className="bg-hero px-6 py-[100px] text-center text-hero-foreground"><div className="mx-auto max-w-[1200px]"><h2 className="text-[40px] font-extrabold leading-tight text-hero-foreground">Bereit für Ihre digitale Transformation?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/75">Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.</p><Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift"><Mail className="h-5 w-5" /> Kontakt aufnehmen</Link></div></section>

    <Footer />
  </main>
);

export default Index;
