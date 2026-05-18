import { ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, Cloud, Mail, MonitorCheck, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import drDinger from "@/assets/dr-helmut-dinger.avif";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import cardCloud from "@/assets/card-cloud.jpg";
import cardInfra from "@/assets/card-infra.jpg";
import cardWorkplace from "@/assets/card-workplace.jpg";
import { Footer, Navigation } from "@/components/MexaaLayout";
import { FaqSection, ReasonsForMexaa, WhyMexaa } from "@/components/MexaaSections";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { itServices, serviceIcons, solutions } from "@/components/mexaaData";

/* ---------- Hero (Split-Grid, Corporate Trust) ---------- */
const trustBullets = [
  "Microsoft Solutions Partner",
  "DSGVO-konform · Hosting in Deutschland",
  "Reaktionszeit < 2 Stunden",
  "Persönliche Ansprechpartner statt Callcenter",
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
    {/* Background image covering full hero */}
    <div className="absolute inset-0 -z-10">
      <img
        src={serverRoom}
        alt="MEXAA-IT Rechenzentrum – moderne Cloud- und Server-Infrastruktur"
        className="h-full w-full object-cover opacity-70"
      />
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-6 md:pb-32 md:pt-12">
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-foreground/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> IT-Systemhaus · Rhein-Main
        </div>
        <h1 className="text-[36px] font-black leading-[1.06] tracking-[-0.02em] text-section-title sm:text-[48px] md:text-[60px]">
          IT, die Ihr Geschäft <span className="text-primary">stabil</span> und <span className="text-primary">skalierbar</span> macht.
        </h1>
        <p className="mt-7 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-[16.5px]">
          Wir betreiben, sichern und modernisieren die IT mittelständischer Unternehmen –
          mit klaren SLAs, persönlichen Ansprechpartnern und einer durchgängigen Microsoft-Cloud-Strategie.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Kostenlose Erstberatung <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/90 px-7 py-3.5 text-sm font-black text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
          >
            Leistungen ansehen
          </a>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {trustBullets.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-foreground/80">
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ---------- 3 große Image-Cards (Itanix-Stil) ---------- */
type FeatureCard = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  bullets: string[];
  href: string;
};

const featureCards: FeatureCard[] = [
  {
    image: cardInfra,
    eyebrow: "Cloud Infrastruktur",
    title: "Planung, Aufbau & Betrieb",
    subtitle: "Azure & Hybrid Cloud",
    text: "Moderne Cloud-Infrastrukturen auf Basis von Microsoft Azure – sicher konzipiert, sauber dokumentiert und nachhaltig betrieben.",
    bullets: ["Architektur & Migration", "Backup & Disaster Recovery", "24/7 Monitoring"],
    href: "/azure-infrastruktur",
  },
  {
    image: cardCloud,
    eyebrow: "Cloud Migration",
    title: "Analyse, Umsetzung & Go-Live",
    subtitle: "Microsoft 365 & Teams",
    text: "Strukturierte Migration nach Microsoft 365 – inklusive Identitäten, E-Mail, Daten und Zusammenarbeit ohne Reibungsverluste.",
    bullets: ["Lizenz- & Tenant-Strategie", "Daten-, Mail- & Teams-Migration", "MFA, Conditional Access"],
    href: "/microsoft-365",
  },
  {
    image: cardWorkplace,
    eyebrow: "Modern Workplace",
    title: "Zusammenarbeit & Produktivität",
    subtitle: "Intune, Autopilot & Copilot",
    text: "Standardisierte Arbeitsplätze mit Microsoft Intune und Autopilot – für sicheres, ortsunabhängiges Arbeiten.",
    bullets: ["Geräte-Lifecycle", "Endpoint Security", "Copilot Enablement"],
    href: "/microsoft-intune",
  },
];

const FeatureCardItem = ({ image, eyebrow, title, subtitle, text, bullets, href }: FeatureCard) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
      <img
        src={image}
        alt={title}
        loading="lazy"
        width={1024}
        height={768}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
    <div className="flex flex-1 flex-col p-7">
      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">{eyebrow}</div>
      <h3 className="mt-2 text-xl font-black leading-snug text-foreground md:text-2xl">{title}</h3>
      <div className="mt-1 text-sm font-semibold text-muted-foreground">{subtitle}</div>
      <p className="mt-4 text-[14px] leading-7 text-muted-foreground">{text}</p>
      <ul className="mt-5 space-y-2 text-[13px] text-foreground">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
          </li>
        ))}
      </ul>
      <Link
        to={href}
        className="mt-7 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary"
      >
        Mehr erfahren <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  </article>
);

const FeatureCardsSection = () => (
  <section className="bg-background px-6 pb-16 md:pb-[100px]">
    <div className="mx-auto grid max-w-[1240px] gap-7 md:grid-cols-3">
      {featureCards.map((c) => (
        <FeatureCardItem key={c.title} {...c} />
      ))}
    </div>
  </section>
);

/* ---------- Stats / Trust-Band ---------- */
const stats = [
  { value: "10+", label: "Jahre IT-Erfahrung" },
  { value: "99,9 %", label: "System­verfügbarkeit" },
  { value: "< 2 h", label: "Reaktionszeit" },
  { value: "100 %", label: "DSGVO-konform" },
];

const StatsBand = () => (
  <section className="bg-background px-6 py-16 md:py-[80px]">
    <div className="mx-auto max-w-[1200px] rounded-3xl border border-border bg-gradient-to-br from-secondary via-card to-secondary p-8 md:p-12">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-4xl font-black text-section-title md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Services (zwei Spalten, sauber, Itanix-ähnlich) ---------- */
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
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="h-5 w-5" />
    </span>
    <div className="flex-1">
      <h4 className="text-[15px] font-black leading-snug text-foreground">{title}</h4>
      <p className="mt-1 text-[13px] leading-6 text-muted-foreground">{description}</p>
    </div>
    <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
  </Link>
);

const ServicesShowcase = () => {
  const itList = itServices.map((s, i) => ({ ...s, Icon: serviceIcons[i % serviceIcons.length] }));
  const solList = solutions.map((s, i) => ({ ...s, Icon: serviceIcons[(i + 3) % serviceIcons.length] }));
  return (
    <section id="services" className="bg-secondary/40 px-6 py-16 md:py-[100px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-primary">
            Leistungen
          </div>
          <h2 className="text-[28px] font-black leading-tight text-section-title sm:text-[36px] md:text-[46px]">
            Alles, was Ihre IT braucht – aus einer Hand
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-muted-foreground">
            Vom Tagesbetrieb bis zur Cloud-Transformation: Unsere Leistungen greifen nahtlos ineinander.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {[
            { eyebrow: "Betrieb & Support", title: "IT-Services", Icon: Wrench, items: itList },
            { eyebrow: "Cloud & Modern Work", title: "Solutions", Icon: Cloud, items: solList },
          ].map((col) => (
            <div key={col.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-center gap-4 border-b border-border pb-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
                  <col.Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">{col.eyebrow}</div>
                  <h3 className="text-2xl font-black text-foreground">{col.title}</h3>
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

/* ---------- Testimonial ---------- */
const Testimonial = () => (
  <section className="bg-background px-6 py-16 md:py-[100px]">
    <div className="mx-auto max-w-[1100px]">
      <div className="grid gap-10 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary p-8 shadow-sm md:grid-cols-[1fr_240px] md:p-12">
        <div>
          <div className="mb-5 flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="text-[16px] leading-8 text-foreground md:text-[18px] md:leading-9">
            „Mit MEXAA-IT als unseren Full-Service IT-Dienstleister haben wir ganz ausgezeichnete Erfahrungen gemacht. Mit systemübergreifender IT-Kompetenz, hohem persönlichen Engagement und einem sehr guten Problemlösungsverständnis haben wir den Umstieg in eine moderne, cloudbasierte IT-Welt geschafft – mit hoher Verfügbarkeit, planbaren Kosten und einem kompetenten Ansprechpartner an unserer Seite."
          </p>
          <div className="mt-8 border-l-4 border-primary pl-5">
            <div className="text-base font-black text-foreground">Dr. Helmut Dinger</div>
            <div className="mt-1 text-sm text-muted-foreground">Geschäftsführer · RWTH International Academy</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={drDinger}
            alt="Dr. Helmut Dinger"
            width={240}
            height={280}
            loading="lazy"
            className="h-[240px] w-[200px] rounded-2xl object-cover shadow-lift md:h-[280px] md:w-[220px]"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CTA ---------- */
const CtaSection = () => (
  <section id="contact" className="relative overflow-hidden bg-hero px-6 py-16 md:py-[110px] text-hero-foreground">
    <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary)/.4), transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/.25), transparent 45%)" }} />
    <div className="relative mx-auto max-w-[900px] text-center">
      <h2 className="text-[28px] font-black leading-tight text-hero-foreground sm:text-[36px] md:text-[44px]">
        Bereit für Ihre digitale Transformation?
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-hero-foreground/80 md:text-[16px]">
        Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-black text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-glow">
          <Mail className="h-4 w-4" /> Kontakt aufnehmen
        </Link>
        <a href="tel:+4961015969082" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-7 py-3.5 text-sm font-black text-hero-foreground transition hover:bg-primary-foreground/10">
          <Phone className="h-4 w-4" /> Jetzt anrufen
        </a>
      </div>
    </div>
  </section>
);

/* ---------- Page ---------- */
const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navigation />
    <Hero />
    <FeatureCardsSection />
    <PartnerMarquee />
    <StatsBand />
    <WhyMexaa />
    <ServicesShowcase />
    <ReasonsForMexaa />
    <Testimonial />
    <FaqSection />
    <CtaSection />
    <Footer />
  </main>
);

export default Index;
