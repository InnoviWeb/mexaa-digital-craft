import { ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, Cloud, Mail, MonitorCheck, Phone, Quote, Server, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import drDinger from "@/assets/dr-helmut-dinger.avif";
import { Footer, Navigation } from "@/components/MexaaLayout";
import { FaqSection, ReasonsForMexaa, WhyMexaa } from "@/components/MexaaSections";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { itServices, serviceIcons, solutions } from "@/components/mexaaData";

/* ---------- Hero (Linear/Stripe-style, light + abstract gradient blob) ---------- */
const trustBullets = [
  "Microsoft Solutions Partner",
  "DSGVO-konform · Hosting in Deutschland",
  "Reaktionszeit < 2 Stunden",
  "Persönliche Ansprechpartner statt Callcenter",
];

const HeroBlob = () => (
  <div className="relative aspect-square w-full max-w-[520px]">
    {/* soft grid background */}
    <div
      className="absolute inset-0 rounded-[2rem] opacity-[0.5]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }}
    />
    {/* primary gradient blob */}
    <div
      className="absolute left-[10%] top-[8%] h-[78%] w-[78%] rounded-full blur-2xl"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.55), hsl(var(--primary) / 0.15) 55%, transparent 75%)",
      }}
    />
    {/* secondary accent blob */}
    <div
      className="absolute bottom-[6%] right-[8%] h-[42%] w-[42%] rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle, hsl(190 90% 60% / 0.45), transparent 70%)",
      }}
    />
    {/* geometric ring */}
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGrad)" strokeWidth="1" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" />
    </svg>
    {/* floating card 1 */}
    <div className="absolute left-2 top-[18%] flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
        <Server className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Uptime</div>
        <div className="text-sm font-black text-foreground">99,9 %</div>
      </div>
    </div>
    {/* floating card 2 */}
    <div className="absolute bottom-[14%] right-0 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
        <Sparkles className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Reaktion</div>
        <div className="text-sm font-black text-foreground">&lt; 2 Stunden</div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-background pt-28 md:pt-32">
    <div className="mx-auto max-w-[1240px] px-6 pb-20 md:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> IT-Systemhaus · Rhein-Main
          </div>
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-[-0.025em] text-section-title sm:text-[54px] md:text-[64px]">
            IT, die Ihr Geschäft <span className="text-primary">stabil</span> und <span className="text-primary">skalierbar</span> macht.
          </h1>
          <p className="mt-7 max-w-xl text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
            Wir betreiben, sichern und modernisieren die IT mittelständischer Unternehmen –
            mit klaren SLAs, persönlichen Ansprechpartnern und einer durchgängigen Microsoft-Cloud-Strategie.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Kostenlose Erstberatung <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Leistungen ansehen
            </a>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {trustBullets.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-muted-foreground">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <HeroBlob />
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 3 Feature-Cards (clean, no stock photos) ---------- */
type FeatureCard = {
  Icon: typeof Server;
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  bullets: string[];
  href: string;
};

const featureCards: FeatureCard[] = [
  {
    Icon: Server,
    eyebrow: "Cloud Infrastruktur",
    title: "Planung, Aufbau & Betrieb",
    subtitle: "Azure & Hybrid Cloud",
    text: "Moderne Cloud-Infrastrukturen auf Basis von Microsoft Azure – sicher konzipiert, sauber dokumentiert und nachhaltig betrieben.",
    bullets: ["Architektur & Migration", "Backup & Disaster Recovery", "24/7 Monitoring"],
    href: "/azure-infrastruktur",
  },
  {
    Icon: Cloud,
    eyebrow: "Cloud Migration",
    title: "Analyse, Umsetzung & Go-Live",
    subtitle: "Microsoft 365 & Teams",
    text: "Strukturierte Migration nach Microsoft 365 – inklusive Identitäten, E-Mail, Daten und Zusammenarbeit ohne Reibungsverluste.",
    bullets: ["Lizenz- & Tenant-Strategie", "Daten-, Mail- & Teams-Migration", "MFA, Conditional Access"],
    href: "/microsoft-365",
  },
  {
    Icon: MonitorCheck,
    eyebrow: "Modern Workplace",
    title: "Zusammenarbeit & Produktivität",
    subtitle: "Intune, Autopilot & Copilot",
    text: "Standardisierte Arbeitsplätze mit Microsoft Intune und Autopilot – für sicheres, ortsunabhängiges Arbeiten.",
    bullets: ["Geräte-Lifecycle", "Endpoint Security", "Copilot Enablement"],
    href: "/microsoft-intune",
  },
];

const FeatureCardItem = ({ Icon, eyebrow, title, subtitle, text, bullets, href }: FeatureCard) => (
  <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:shadow-lift">
    <div className="relative mb-7 h-20 w-20">
      <div
        className="absolute inset-0 rounded-2xl opacity-90"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.10), hsl(var(--primary) / 0.02))",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
    </div>
    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
    <h3 className="mt-2 text-xl font-extrabold leading-snug text-foreground md:text-[22px]">{title}</h3>
    <div className="mt-1 text-sm font-medium text-muted-foreground">{subtitle}</div>
    <p className="mt-4 text-[14px] leading-7 text-muted-foreground">{text}</p>
    <ul className="mt-5 space-y-2 text-[13.5px] text-foreground/80">
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} /> {b}
        </li>
      ))}
    </ul>
    <Link
      to={href}
      className="mt-7 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
    >
      Mehr erfahren <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  </article>
);

const FeatureCardsSection = () => (
  <section className="bg-background px-6 pb-20 pt-10 md:pb-[100px]">
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
  <section className="bg-secondary px-6 py-16 md:py-[80px]">
    <div className="mx-auto max-w-[1200px]">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-4xl font-extrabold text-section-title md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Services ---------- */
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
    className="group flex items-start gap-4 rounded-xl border border-transparent px-4 py-4 transition hover:border-border hover:bg-secondary"
  >
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary transition group-hover:bg-primary/15">
      <Icon className="h-5 w-5" strokeWidth={1.6} />
    </span>
    <div className="flex-1">
      <h4 className="text-[15px] font-bold leading-snug text-foreground">{title}</h4>
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
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
            Leistungen
          </div>
          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-section-title sm:text-[38px] md:text-[48px]">
            Alles, was Ihre IT braucht – aus einer Hand
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-8 text-muted-foreground">
            Vom Tagesbetrieb bis zur Cloud-Transformation: Unsere Leistungen greifen nahtlos ineinander.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {[
            { eyebrow: "Betrieb & Support", title: "IT-Services", Icon: Wrench, items: itList },
            { eyebrow: "Cloud & Modern Work", title: "Solutions", Icon: Cloud, items: solList },
          ].map((col) => (
            <div key={col.title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-lift md:p-8">
              <div className="mb-6 flex items-center gap-4 border-b border-border pb-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <col.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">{col.eyebrow}</div>
                  <h3 className="text-2xl font-extrabold text-foreground">{col.title}</h3>
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
  <section className="bg-secondary px-6 py-16 md:py-[100px]">
    <div className="mx-auto max-w-[1100px]">
      <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_240px] md:p-12">
        <div>
          <Quote className="h-8 w-8 text-primary/50" />
          <p className="mt-5 text-[16px] leading-8 text-foreground md:text-[18px] md:leading-9">
            „Mit MEXAA-IT als unseren Full-Service IT-Dienstleister haben wir ganz ausgezeichnete Erfahrungen gemacht. Mit systemübergreifender IT-Kompetenz, hohem persönlichen Engagement und einem sehr guten Problemlösungsverständnis haben wir den Umstieg in eine moderne, cloudbasierte IT-Welt geschafft – mit hoher Verfügbarkeit, planbaren Kosten und einem kompetenten Ansprechpartner an unserer Seite."
          </p>
          <div className="mt-8 border-l-2 border-primary pl-5">
            <div className="text-base font-extrabold text-foreground">Dr. Helmut Dinger</div>
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
            className="h-[240px] w-[200px] rounded-2xl object-cover md:h-[280px] md:w-[220px]"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CTA (light, Stripe-style) ---------- */
const CtaSection = () => (
  <section id="contact" className="relative overflow-hidden bg-background px-6 py-16 md:py-[110px]">
    <div className="mx-auto max-w-[1100px]">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16 md:py-20">
        {/* abstract gradient accents */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(190 90% 50% / 0.15), transparent 70%)" }}
        />
        <div className="relative">
          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-section-title sm:text-[38px] md:text-[46px]">
            Bereit für Ihre digitale Transformation?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-8 text-muted-foreground md:text-[16.5px]">
            Sprechen wir über Ihre Ziele, Risiken und nächsten Schritte. In einem unverbindlichen Erstgespräch erhalten Sie eine klare Einschätzung für Ihre IT-Roadmap.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-glow">
              <Mail className="h-4 w-4" /> Kontakt aufnehmen
            </Link>
            <a href="tel:+4961015969082" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-primary/40 hover:text-primary">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </div>
        </div>
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
