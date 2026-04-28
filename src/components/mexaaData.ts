import {
  BriefcaseBusiness,
  Building2,
  Cloud,
  Cpu,
  Headphones,
  HeartHandshake,
  Laptop,
  MonitorCheck,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const navGroups = [
  {
    title: "IT-Services",
    icon: Wrench,
    items: [
      { label: "Managed Service", path: "/managed-service" },
      { label: "IT-Outsourcing", path: "/it-outsourcing" },
      { label: "IT-Service & Support", path: "/it-service-support" },
      { label: "IT-Rollout", path: "/it-rollout" },
      { label: "IT-Beratung", path: "/it-beratung" },
    ],
  },
  {
    title: "Solutions",
    icon: Cloud,
    items: [
      { label: "Microsoft 365", path: "/microsoft-365" },
      { label: "Azure Infrastruktur", path: "/azure-infrastruktur" },
      { label: "Microsoft Intune", path: "/microsoft-intune" },
      { label: "Client Management", path: "/client-management" },
      { label: "Cloud Telefonie", path: "/cloud-telefonie" },
      { label: "KI-Lösungen", path: "/ki-loesungen" },
      { label: "Workshops & Schulungen", path: "/workshops-schulungen" },
    ],
  },
  {
    title: "Unternehmen",
    icon: Building2,
    items: [
      { label: "Über uns", path: "/ueber-uns" },
      { label: "Karriere", path: "/karriere" },
      { label: "Soziales Engagement", path: "/soziales-engagement" },
      { label: "Kontakt", path: "/kontakt" },
    ],
  },
];

export const itServices = [
  { title: "Managed Service", path: "/managed-service", description: "Planbare IT-Betreuung mit Monitoring, Wartung und persönlichem Ansprechpartner." },
  { title: "IT-Outsourcing", path: "/it-outsourcing", description: "Wir übernehmen Betrieb, Support und Weiterentwicklung Ihrer IT-Infrastruktur." },
  { title: "IT-Service & Support", path: "/it-service-support", description: "Schnelle Hilfe für Teams, Arbeitsplätze, Server, Netzwerke und Cloud-Dienste." },
  { title: "IT-Rollout", path: "/it-rollout", description: "Strukturierte Migrationen, Hardware-Rollouts und Standortanbindungen ohne Reibungsverluste." },
  { title: "IT-Beratung", path: "/it-beratung", description: "Strategische Roadmaps für sichere, skalierbare und wirtschaftliche IT-Umgebungen." },
];

export const solutions = [
  { title: "Microsoft 365", path: "/microsoft-365", description: "Produktive Zusammenarbeit, sichere Identitäten und moderne Arbeitsplätze aus einer Hand." },
  { title: "Azure Infrastruktur", path: "/azure-infrastruktur", description: "Cloud-Architekturen, Backups und hybride Szenarien mit klarer Governance." },
  { title: "Microsoft Intune", path: "/microsoft-intune", description: "Geräteverwaltung, Compliance und Security Policies für moderne Unternehmen." },
  { title: "Client Management", path: "/client-management", description: "Standardisierte Clients, Patch-Prozesse und transparente Lifecycle-Steuerung." },
  { title: "Cloud Telefonie", path: "/cloud-telefonie", description: "Flexible Kommunikation mit Teams-Telefonie, Rufnummernkonzept und Support." },
  { title: "KI-Lösungen", path: "/ki-loesungen", description: "Pragmatische Automatisierung und Copilot-Enablement mit messbarem Nutzen." },
  { title: "Workshops & Schulungen", path: "/workshops-schulungen", description: "Praxisnahe Trainings für Microsoft 365, Security Awareness und moderne Zusammenarbeit." },
];

export const serviceIcons = [MonitorCheck, Network, Headphones, Laptop, BriefcaseBusiness, Cloud, ShieldCheck, Cpu, HeartHandshake];
