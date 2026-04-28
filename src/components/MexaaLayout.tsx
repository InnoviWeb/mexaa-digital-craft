import { ArrowRight, ChevronDown, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { itServices, navGroups, solutions } from "./mexaaData";

export const Navigation = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-hero/75 backdrop-blur-2xl">
    <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6" aria-label="Hauptnavigation">
      <Link to="/" className="group flex items-center gap-3" aria-label="MEXAA-IT Startseite">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-primary font-black text-primary-foreground shadow-glow">M</span>
        <span className="leading-tight text-hero-foreground">
          <span className="block text-lg font-black tracking-tight">MEXAA-IT</span>
          <span className="block text-xs font-semibold text-hero-foreground/70">think for results!</span>
        </span>
      </Link>
      <div className="hidden items-center gap-1 lg:flex">
        {navGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="group relative">
              <button className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-hero-foreground/85 transition hover:bg-primary-foreground/10 hover:text-hero-foreground">
                <Icon className="h-4 w-4" /> {group.title} <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>
              <div className="nav-dropdown">
                {group.items.map((item) => (
                  <Link key={item.path} to={item.path} className="flex items-center justify-between rounded-sm px-3 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary hover:text-primary">
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/kontakt" className="rounded-md bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-hero">
        Kontakt
      </Link>
    </nav>
  </header>
);

export const Footer = () => (
  <footer className="bg-footer px-6 py-16 text-hero-foreground">
    <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 lg:grid-cols-5">
      <div>
        <div className="text-2xl font-black">MEXAA-IT</div>
        <div className="mt-1 text-sm font-bold text-hero-foreground/60">think for results!</div>
        <p className="mt-6 text-sm leading-6 text-hero-foreground/65">Professionelle IT-Services, Cloud-Lösungen und Beratung für Unternehmen in Deutschland.</p>
      </div>
      {[["IT-Services", itServices], ["Solutions", solutions.slice(0, 6)], ["Unternehmen", navGroups[2].items]].map(([title, links]) => (
        <div key={title as string}>
          <h3 className="font-black">{title as string}</h3>
          <div className="mt-5 space-y-3">
            {(links as Array<{ title?: string; label?: string; path: string }>).map((link) => (
              <Link key={link.path} to={link.path} className="block text-sm text-hero-foreground/65 transition hover:text-primary">{link.title ?? link.label}</Link>
            ))}
          </div>
        </div>
      ))}
      <div>
        <h3 className="font-black">Direktkontakt</h3>
        <div className="mt-5 space-y-3 text-sm text-hero-foreground/65">
          <p className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> +49 000 000000</p>
          <p className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Bundesweit im Einsatz</p>
          <p className="flex gap-2"><Linkedin className="h-4 w-4 text-primary" /> LinkedIn</p>
        </div>
        <Link to="/kontakt" className="mt-6 inline-flex rounded-md border border-primary-foreground/15 px-4 py-3 text-sm font-black transition hover:bg-primary hover:text-primary-foreground">Fernwartung starten</Link>
      </div>
    </div>
    <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-4 border-t border-primary-foreground/10 pt-8 text-sm text-hero-foreground/55 md:flex-row md:items-center md:justify-between">
      <p>© 2026 MEXAA-IT GmbH. Alle Rechte vorbehalten.</p>
      <div className="flex flex-wrap gap-5"><a href="#">Impressum</a><a href="#">AGB</a><a href="#">Datenschutz</a><a href="#">Cookies</a></div>
    </div>
  </footer>
);

export const PageShell = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen bg-background text-foreground">
    <Navigation />
    {children}
    <Footer />
  </main>
);
