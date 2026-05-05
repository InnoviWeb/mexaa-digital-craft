import { ArrowRight, ChevronDown, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/mexaa-logo.png";
import { itServices, navGroups, solutions } from "./mexaaData";

export const FERNWARTUNG_URL = "https://mexaa.islonline.net/users/main/join.html";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6" aria-label="Hauptnavigation">
        <Link to="/" className="flex items-center" aria-label="MEXAA-IT Startseite">
          <img src={logo} alt="MEXAA-IT Logo" width={160} height={48} className="h-11 w-auto object-contain" />
        </Link>
        <div className="hidden items-center gap-0.5 lg:flex">
          {navGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="group relative">
                <button className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-foreground/75 transition-colors duration-200 hover:bg-secondary hover:text-primary">
                  <Icon className="h-3.5 w-3.5 opacity-70" /> {group.title} <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="nav-dropdown">
                  {group.items.map((item) => (
                    <Link key={item.path} to={item.path} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary hover:text-primary">
                      {item.label}
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <a href="tel:+4961015969082" className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-foreground/75 transition hover:text-primary xl:inline-flex">
            <Phone className="h-3.5 w-3.5" /> +49 6101 596 9082
          </a>
          <Link to="/kontakt" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13.5px] font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex">
            Kontakt <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Menü öffnen" className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-5rem)] max-w-[1200px] overflow-y-auto overscroll-contain px-6 py-4 pb-8">
            {navGroups.map((group) => (
              <div key={group.title} className="border-b border-border py-3 last:border-0">
                <div className="mb-2 text-xs font-black uppercase tracking-wider text-muted-foreground">{group.title}</div>
                <div className="grid gap-1">
                  {group.items.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/kontakt" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground sm:hidden">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-footer px-6 py-16 text-hero-foreground">
    <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 lg:grid-cols-5">
      <div>
        <img src={logo} alt="MEXAA-IT Logo" width={170} height={52} className="h-13 w-auto object-contain brightness-0 invert" />
        <p className="mt-6 text-sm leading-6 text-hero-foreground/65">Professionelle IT-Services, Cloud-Lösungen und Beratung für Unternehmen in Deutschland. Seit 2013 entwickeln wir IT, die Wettbewerbsvorteile schafft.</p>
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
          <p className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> +49 6101 596 9082</p>
          <p className="flex gap-2"><Mail className="h-4 w-4 text-primary" /> info@mexaa.de</p>
          <p className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Homburger Str. 69a, 61118 Bad Vilbel</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-primary"><Linkedin className="h-4 w-4 text-primary" /> LinkedIn</a>
        </div>
        <a href={FERNWARTUNG_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-md border border-primary-foreground/15 px-4 py-3 text-sm font-black transition hover:bg-primary hover:text-primary-foreground">Fernwartung starten</a>
      </div>
    </div>
    <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-4 border-t border-primary-foreground/10 pt-8 text-sm text-hero-foreground/55 md:flex-row md:items-center md:justify-between">
      <p>© 2026 MEXAA-IT GmbH - Alle Rechte vorbehalten.</p>
      <div className="flex flex-wrap gap-5"><Link to="/impressum">Impressum</Link><a href="#">AGB</a><a href="#">Datenschutz</a><a href="#">Cookies</a></div>
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
