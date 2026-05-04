import { ArrowRight, CheckCircle2, Cloud, Mail, MonitorCheck, Network, Phone, ShieldCheck, Sparkles, Star, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import drDinger from "@/assets/dr-helmut-dinger.avif";
import { Footer, Navigation } from "@/components/MexaaLayout";
import { FaqSection, ReasonsForMexaa, WhyMexaa } from "@/components/MexaaSections";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { itServices, serviceIcons, solutions } from "@/components/mexaaData";

const heroHighlights = [
  {
    Icon: ShieldCheck,
    title: "IT-Sicherheit & Managed Service",
    text: "Proaktives Monitoring, Patch-Management und 24/7 Endpoint-Schutz für Ihre Geschäftskontinuität.",
    href: "/managed-service",
  },
  {
    Icon: Cloud,
    title: "Cloud & Microsoft 365",
    text: "Strukturierte Migration nach Microsoft 365 und Azure – mit Governance, MFA und klarer Lizenzstrategie.",
    href: "/microsoft-365",
  },
  {
    Icon: Users,
    title: "Modern Workplace",
    text: "Standardisierte Arbeitsplätze mit Intune & Autopilot – produktiv, sicher und schnell ausrollbar.",
    href: "/microsoft-intune",
  },
];

const HeroHighlightCard = ({ Icon, title, text, href }: typeof heroHighlights[number]) => (
  <Link
    to={href}
    className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
  >
    <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="h-5 w-5" />
    </span>
    <h3 className="mt-5 text-base font-black leading-snug text-foreground">{title}</h3>
    <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.18em] text-primary">
      Mehr erfahren <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
    </span>
  </Link>
);

const ServiceRow = ({
  title,
  path,
  description,
  Icon,
}: {
  title: string;
  path: string;
  description: string;
  Icon: typeof MonitorCheck;
}) => (
  <Link
    to={path}
    className="group flex items-start gap-4 rounded-xl border border-transparent px-4 py-4 transition hover:border-border hover:bg-secondary/60"
  >
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
      <Icon className="h-5 w-5" />
    </span>
    <div className="flex-1">
      <h3 className="text-[15px] font-black leading-snug text-foreground">{title}</h3>
      <p className="mt-1 text-[13px] leading-6 text-muted-foreground">{description}</p>
    </div>
    <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
  </Link>
);

const ServicesShowcase = () => {
  const itList = itServices.map((s, i) => ({ ...s, Icon: serviceIcons[i % serviceIcons.length] }));
  const solList = solutions.map((s, i) => ({ ...s, Icon: serviceIcons[(i + 3) % serviceIcons.length] }));
  return (
    <section id="services" className="bg-background px-6 py-16 md:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-primary">
            Leistungen
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-tight text-section-title md:text-[42px]">
            Alles, was Ihre IT braucht – aus einer Hand
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { eyebrow: "Betrieb & Support", title: "IT-Services", Icon: Wrench, items: itList },
            { eyebrow: "Cloud & Modern Work", title: "Solutions", Icon: Cloud, items: solList },
          ].map((col) => (
            <div key={col.title} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-5 flex items-center gap-4 border-b border-border pb-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <col.Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">{col.eyebrow}</div>
                  <h3 className="text-xl font-black text-foreground">{col.title}</h3>
                </div>
              </div>
              <div className="grid gap-1">
                {col.items.map((s) => (
                  <ServiceRow key={s.path} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navigation />

    {/* HERO */}
    <section id="home" className="relative overflow-hidden bg-hero text-hero-foreground">
      <img src={serverRoom} alt="Moderner Serverraum als Symbol für sichere IT-Infrastruktur" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/70" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-hero-foreground/85 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> MEXAA-IT · think for results!
            </div>
            <h1 className="text-[30px] font-black leading-[1.08] tracking-[-0.02em] text-hero-foreground sm:text-[40px] md:text-[52px]">
              Ihr IT-Dienstleister für moderne, sichere Infrastrukturen
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-hero-foreground/80 sm:text-base sm:leading-8">
              MEXAA-IT GmbH plant, betreibt und schützt IT-Landschaften für Unternehmen, die zuverlässige Systeme, klare Prozesse und messbare Ergebnisse erwarten.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-hero-foreground/85 sm:grid-cols-2">
              {["Persönliche Ansprechpartner", "Microsoft Solutions Partner", "DSGVO-konform aus DE", "Reaktion < 2 Stunden"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lift">
                Beratung anfragen <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+4961015969082" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3.5 text-sm font-black text-hero-foreground backdrop-blur transition hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" /> +49 6101 596 9082
              </a>
            </div>
          </div>

          {/* Right: Trust card */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-primary-foreground/10 pb-4">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-hero-foreground/70">Kundenstimme</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-hero-foreground/85">
                „Mit MEXAA-IT haben wir den Umstieg in eine moderne, cloudbasierte IT-Welt geschafft – mit hoher Verfügbarkeit, planbaren Kosten und einem kompetenten Ansprechpartner an unserer Seite."
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-primary-foreground/10 pt-4">
                <img src={drDinger} alt="Dr. Helmut Dinger" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-black text-hero-foreground">Dr. Helmut Dinger</div>
                  <div className="text-xs text-hero-foreground/70">Geschäftsführer · RWTH International Academy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PARTNER */}
    <PartnerMarquee />

    {/* HERO HIGHLIGHTS – 3 Cards (Itanix-Stil) */}
    <section className="bg-background px-6 pt-16 md:pt-[100px]">
      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
        {heroHighlights.map((h) => <HeroHighlightCard key={h.title} {...h} />)}
      </div>
    </section>

    {/* INTRO / VALUE */}
    <section className="bg-background px-6 py-16 md:py-[100px]">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-primary">Über MEXAA-IT</div>
        <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-tight text-section-title md:text-[40px]">
          Ihre IT – sicher, effizient und sorgenfrei
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          Wir verbinden strategische Beratung mit operativer Exzellenz – damit Ihre IT nicht bremst, sondern Ihr Wachstum zuverlässig trägt.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, "Flexible IT-Flatrates", "Transparente Leistungen, kalkulierbare Kosten und ein Serviceumfang, der zu Ihnen passt."],
            [MonitorCheck, "Proaktives Monitoring", "Wir erkennen Risiken frühzeitig, bevor Ausfälle entstehen oder Produktivität verloren geht."],
            [Network, "Persönliche Betreuung", "Direkte Ansprechpartner, klare Kommunikation und Entscheidungen auf Augenhöhe."],
          ].map(([Icon, title, text]) => {
            const FeatureIcon = Icon as typeof ShieldCheck;
            return (
              <article key={title as string} className="rounded-2xl border border-border bg-card p-7 text-left transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><FeatureIcon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-black">{title as string}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{text as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <WhyMexaa />

    <ReasonsForMexaa />

    <ServicesShowcase />

    {/* TESTIMONIAL */}
    <section className="bg-secondary px-6 py-16 md:py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_240px] md:p-12">
          <div>
            <div className="mb-5 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="text-base leading-8 text-foreground md:text-lg md:leading-9">
              Mit MEXAA-IT als unseren Full-Service IT-Dienstleister haben wir ganz ausgezeichnete Erfahrungen gemacht! Mit systemübergreifender IT-Kompetenz, hohem persönlichen Engagement, Pragmatismus und einem sehr guten Problemlösungsverständnis haben wir in kurzer Zeit den Umstieg von einer traditionellen in eine moderne cloudbasierte IT-Welt geschafft. Ergebnis ist eine sehr hohe Verfügbarkeit der IT-Anwendungen, planbare Kosten und auch auf der menschlichen Ebene das gute Gefühl immer einen kompetenten Ansprechpartner in allen IT-Fragen an unserer Seite zu haben.
            </p>
            <div className="mt-8 border-l-4 border-primary pl-5">
              <div className="text-base font-black text-foreground">Dr. Helmut Dinger</div>
              <div className="mt-1 text-sm text-muted-foreground">Geschäftsführer · RWTH International Academy</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={drDinger}
              alt="Dr. Helmut Dinger, Geschäftsführer RWTH International Academy"
              width={240}
              height={280}
              className="h-[240px] w-[200px] rounded-2xl object-cover md:h-[280px] md:w-[220px]"
            />
          </div>
        </div>
      </div>
    </section>

    <FaqSection />

    {/* CTA */}
    <section id="contact" className="bg-hero px-6 py-16 md:py-[100px] text-center text-hero-foreground">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-tight text-hero-foreground md:text-[38px]">Bereit für Ihre digitale Transformation?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-hero-foreground/75">
          Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-black text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lift">
            <Mail className="h-4 w-4" /> Kontakt aufnehmen
          </Link>
          <a href="tel:+4961015969082" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-7 py-3.5 text-sm font-black text-hero-foreground transition hover:bg-primary-foreground/10">
            <Phone className="h-4 w-4" /> Jetzt anrufen
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
