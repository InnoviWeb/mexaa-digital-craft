import { useState } from "react";
import { ArrowRight, Mail, MonitorCheck, Network, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import drDinger from "@/assets/dr-helmut-dinger.avif";
import { Footer, Navigation } from "@/components/MexaaLayout";
import { FaqSection, ReasonsForMexaa, WhyMexaa } from "@/components/MexaaSections";
import { PartnerMarquee } from "@/components/PartnerMarquee";
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

const ServicesShowcase = () => {
  const [tab, setTab] = useState<"it" | "sol">("it");
  const list = (tab === "it" ? itServices : solutions).map((s, i) => ({
    ...s,
    icon: serviceIcons[(i + (tab === "it" ? 0 : 3)) % serviceIcons.length],
  }));
  return (
    <section id="services" className="relative bg-secondary px-6 py-[100px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-primary">
            Leistungen
          </div>
          <h2 className="text-[34px] font-extrabold leading-tight text-section-title md:text-[44px]">
            Alles, was Ihre IT braucht – aus einer Hand
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Klar gegliedert in zwei Kompetenzbereiche – wählen Sie die Sicht, die Sie interessiert.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-background p-1.5 shadow-sm">
            {[
              { key: "it", label: "IT-Services" },
              { key: "sol", label: "Solutions" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as "it" | "sol")}
                className={`rounded-full px-6 py-2.5 text-sm font-black transition ${
                  tab === t.key
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ title, path, description, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-black leading-snug text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
                Mehr erfahren <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navigation />

    <section id="home" className="relative min-h-[88vh] overflow-hidden bg-hero text-hero-foreground">
      <img src={serverRoom} alt="Moderner Serverraum als Symbol für sichere IT-Infrastruktur" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/40" />
      <ParticleNetwork />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1200px] items-center px-6 pb-20 pt-32">
        <div className="max-w-3xl text-left section-reveal">
          <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-extrabold text-hero-foreground shadow-glass backdrop-blur-xl"><Sparkles className="h-4 w-4 text-accent" /> MEXAA-IT · think for results!</div>
          <h1 className="text-[40px] font-black leading-[1.05] tracking-[-0.03em] text-hero-foreground sm:text-[52px] md:text-[64px]">Gemeinsam die digitale Zukunft gestalten</h1>
          <p className="mt-8 max-w-2xl text-base font-medium leading-7 text-hero-foreground/85 sm:text-lg sm:leading-8 md:text-xl">MEXAA-IT GmbH entwickelt, betreibt und schützt moderne IT-Landschaften für Unternehmen, die zuverlässige Systeme, klare Prozesse und messbare Ergebnisse erwarten.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift">Beratung anfragen <ArrowRight className="h-5 w-5" /></Link>
            <Link to="/managed-service" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-7 py-4 text-base font-black text-hero-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary-foreground/16">Leistungen entdecken</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-8 shadow-sm" aria-label="Vertrauenssignale">
      <div className="mx-auto grid max-w-[1200px] gap-5 px-6 text-center text-xs font-black uppercase tracking-[0.16em] text-trust sm:grid-cols-2 sm:text-sm lg:grid-cols-4">
        {['Microsoft Partner', 'Google ★★★★★ 5.0', 'ISO 27001', 'DSGVO konform'].map((item) => <div key={item}>{item}</div>)}
      </div>
    </section>

    <section className="bg-background px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px] text-center section-reveal">
        <h2 className="text-[34px] font-extrabold leading-tight text-primary md:text-[40px]">Ihre IT – sicher, effizient und sorgenfrei</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">Wir verbinden strategische Beratung mit operativer Exzellenz – damit Ihre IT nicht bremst, sondern Ihr Wachstum zuverlässig trägt.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[[ShieldCheck, 'Flexible IT-Flatrates', 'Transparente Leistungen, kalkulierbare Kosten und ein Serviceumfang, der zu Ihrem Unternehmen passt.'], [MonitorCheck, 'Proaktives Monitoring', 'Wir erkennen Risiken frühzeitig, bevor Ausfälle entstehen oder Produktivität verloren geht.'], [Network, 'Persönliche Betreuung', 'Direkte Ansprechpartner, klare Kommunikation und Entscheidungen auf Augenhöhe.']].map(([Icon, title, text]) => {
            const FeatureIcon = Icon as typeof ShieldCheck;
            return (
              <article key={title as string} className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <FeatureIcon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-6 text-xl font-black">{title as string}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{text as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <WhyMexaa />

    <ReasonsForMexaa />

    <ServicesShowcase />

    <section className="bg-background px-6 py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-lift md:grid-cols-[1fr_280px] md:p-12">
          <div className="relative">
            <span className="absolute -left-2 -top-6 select-none text-[120px] font-black leading-none text-primary/15">"</span>
            <div className="mb-5 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="relative text-base font-medium leading-7 text-foreground md:text-lg md:leading-8">
              Mit MEXAA-IT als unseren Full-Service IT-Dienstleister haben wir ganz ausgezeichnete Erfahrungen gemacht! Mit systemübergreifender IT-Kompetenz, hohem persönlichen Engagement, Pragmatismus und einem sehr guten Problemlösungsverständnis haben wir in kurzer Zeit den Umstieg von einer traditionellen in eine moderne cloudbasierte IT-Welt geschafft. Der gelungene Umstieg hat sich in einer partnerschaftlichen Zusammenarbeit im Bereich des IT-Supports, der Datensicherheit und der Systemoptimierung fortgesetzt. Ergebnis ist eine sehr hohe Verfügbarkeit der IT-Anwendungen, planbare Kosten und auch auf der menschlichen Ebene das gute Gefühl immer einen kompetenten Ansprechpartner in allen IT-Fragen an unserer Seite zu haben.
            </p>
            <div className="mt-8 border-l-4 border-primary pl-5">
              <div className="text-base font-black text-foreground">Dr. Helmut Dinger</div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">Geschäftsführer · RWTH International Academy</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={drDinger}
              alt="Dr. Helmut Dinger, Geschäftsführer RWTH International Academy"
              width={240}
              height={280}
              className="h-[240px] w-[200px] rounded-2xl object-cover shadow-glow md:h-[280px] md:w-[240px]"
            />
          </div>
        </div>
      </div>
    </section>

    <FaqSection />

    <section id="contact" className="bg-hero px-6 py-[100px] text-center text-hero-foreground">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[34px] font-extrabold leading-tight text-hero-foreground md:text-[40px]">Bereit für Ihre digitale Transformation?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-hero-foreground/75 md:text-lg md:leading-8">Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.</p>
        <Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift">
          <Mail className="h-5 w-5" /> Kontakt aufnehmen
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
