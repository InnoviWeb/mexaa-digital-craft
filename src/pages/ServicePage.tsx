import { ArrowRight, CheckCircle2, Clock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { type FormEvent, useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import serverRoom from "@/assets/mexaa-server-room.jpg";
import { FERNWARTUNG_URL, PageShell } from "@/components/MexaaLayout";
import { FaqSection, getFaqsForPath } from "@/components/MexaaSections";

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
    eyebrow: "Managed Service", title: "Managed Services, die Ihre IT dauerhaft stabil halten",
    intro: "Mit unseren Managed Services übernehmen wir die kontinuierliche Verantwortung für den Betrieb Ihrer IT-Landschaft. Wir überwachen Server, Clients, Netzwerke und Cloud-Dienste rund um die Uhr, installieren Updates kontrolliert, sichern Daten zuverlässig und beheben Störungen meist, bevor Sie sie überhaupt bemerken. Sie erhalten planbare monatliche Kosten, klare Service-Level und einen festen Ansprechpartner, der Ihre Umgebung wirklich kennt – damit sich Ihr Team auf das Kerngeschäft konzentrieren kann.",
    sections: [
      { title: "Was ist Managed Service?", text: "Managed Service bedeutet: Ihre IT wird nicht erst betreut, wenn etwas ausfällt. MEXAA-IT überwacht Systeme, installiert Updates, dokumentiert Änderungen und optimiert Ihre Umgebung kontinuierlich. So entstehen weniger Tickets, kürzere Stillstandzeiten und eine IT, die mit Ihrem Unternehmen mitwächst." },
      { title: "Leistungsumfang", bullets: ["Server- und Client-Monitoring", "Patch- und Update-Management", "Backup-Kontrolle und Wiederherstellungstests", "Endpoint Security und Schwachstellenbewertung", "Regelmäßige IT-Reviews", "Persönlicher Service Manager"] },
      { title: "Vorteile", bullets: ["Planbare Kosten statt Überraschungen", "Weniger Ausfallzeiten im Tagesgeschäft", "Bessere Dokumentation und Compliance", "Schnelle Eskalation bei kritischen Ereignissen"] },
    ], stats: [["99.9%", "Uptime"], ["<2h", "Reaktion"], ["24/7", "Monitoring"], ["100%", "Transparenz"]]
  },
  "/it-outsourcing": {
    eyebrow: "IT-Outsourcing", title: "Ihre IT-Abteilung als verlässlicher externer Partner",
    intro: "IT-Outsourcing mit MEXAA-IT bedeutet, dass Sie sich auf einen erfahrenen Partner verlassen können, der Verantwortung für Betrieb, Support und Weiterentwicklung Ihrer IT übernimmt. Ob als vollständige Auslagerung oder als Ergänzung Ihres internen Teams: Wir definieren klare Prozesse, übernehmen die Steuerung von Lieferanten und Lizenzen und sorgen für eine moderne, sichere und wirtschaftlich planbare IT. So gewinnen Sie Flexibilität, reduzieren Risiken und erhalten gleichzeitig Zugriff auf hochqualifizierte Spezialisten.",
    sections: [
      { title: "Vollständige IT-Auslagerung", text: "Ob Ergänzung Ihres internen Teams oder vollständige Auslagerung: Wir schaffen klare Zuständigkeiten, definierte Prozesse und einen Service, der zu Ihrem Unternehmen passt. Sie behalten die strategische Kontrolle, wir übernehmen den operativen Betrieb mit dokumentierten Standards." },
      { title: "Leistungspunkte", bullets: ["Betrieb von Infrastruktur und Arbeitsplätzen", "Helpdesk für Anwenderinnen und Anwender", "Lieferanten- und Lizenzmanagement", "Cloud- und Security-Betrieb", "Projektsteuerung und Dokumentation", "Strategische IT-Roadmap"] },
    ], stats: [["30%", "Kostensenkung"], ["1", "Ansprechpartner"], ["Flex", "Skalierung"], ["0", "Ausfallzeiten"]]
  },
  "/it-service-support": {
    eyebrow: "IT-Service & Support", title: "Helpdesk und Support mit klarer Reaktionszeit",
    intro: "Unser IT-Service & Support steht Ihren Mitarbeitenden als zuverlässige Anlaufstelle für alle technischen Fragen zur Verfügung. Wir lösen Anliegen aus erster Hand, dokumentieren transparent jede Anfrage und eskalieren komplexe Themen strukturiert an unsere Fachspezialisten. Vom einfachen Passwort-Reset über Druckerprobleme bis hin zu kritischen Server-Störungen – Sie erhalten schnelle Hilfe per Remote-Verbindung, telefonisch oder direkt vor Ort, mit klar definierten Reaktionszeiten und nachvollziehbarer Bearbeitung.",
    sections: [
      { title: "Helpdesk & Support", text: "Wir entlasten Ihre Mitarbeitenden mit einem professionellen First- und Second-Level-Support, sauberer Ticketdokumentation und priorisierten Eskalationswegen. Jede Anfrage wird erfasst, klassifiziert und nach vereinbarten SLAs bearbeitet – inklusive monatlicher Auswertung." },
      { title: "Leistungen", bullets: ["Remote- und Vor-Ort-Support", "Ticketannahme und Priorisierung", "Benutzerverwaltung", "Hardware- und Software-Support", "Störungsanalyse", "Monatliche Support-Auswertung"] },
    ], table: [["Kritisch", "< 2 Stunden", "Betriebsunterbrechung"], ["Hoch", "< 4 Stunden", "Mehrere Nutzer betroffen"], ["Normal", "< 1 Arbeitstag", "Einzelanfrage"], ["Service", "Nach Vereinbarung", "Änderung oder Bestellung"]]
  },
  "/it-rollout": {
    eyebrow: "IT-Rollout", title: "Rollouts ohne Chaos, Stillstand oder Überraschungen",
    intro: "Ein erfolgreicher IT-Rollout entscheidet darüber, wie schnell und reibungslos Ihre Mitarbeitenden mit neuer Technologie produktiv werden. MEXAA-IT plant und realisiert Hardware-Rollouts, Microsoft 365 Migrationen, Standortumzüge und Software-Verteilungen mit präziser Vorbereitung, klaren Kommunikationswegen und ausführlichen Tests. Vom Pilotprojekt über die Paketierung bis zur finalen Abnahme begleiten wir jeden Schritt, schulen Ihre Anwender und liefern eine vollständige Dokumentation – damit der Rollout messbar erfolgreich ist.",
    sections: [
      { title: "Rollout-Prozess", steps: ["Analyse", "Pilotierung", "Paketierung", "Ausführung", "Abnahme"] },
      { title: "Leistungen", bullets: ["Client- und Notebook-Rollouts", "Microsoft 365 Migrationen", "Standort- und Netzwerkumzüge", "Image- und Softwareverteilung", "Benutzereinweisung", "Abschlussdokumentation"] },
      { title: "Vorteile für Ihr Unternehmen", text: "Wir minimieren Stillstandzeiten durch eine durchdachte Projektorganisation, klare Eskalationswege und ein erfahrenes Rollout-Team. Mitarbeitende erhalten vorkonfigurierte Geräte, klare Anleitungen und persönliche Unterstützung am Stichtag – damit der Wechsel reibungslos gelingt." },
      { title: "Was wir mitbringen", cards: [["Projektmanagement", "Erfahrene Projektleitung mit klarer Kommunikation, Statusberichten und Risikomanagement."], ["Logistik & Imaging", "Vorkonfiguration, Verpackung und Versand Ihrer Geräte – auch bundesweit."], ["Vor-Ort-Teams", "Geschultes Personal an jedem Standort für Aufbau, Migration und Übergabe."]] },
    ], stats: [["1000+", "Geräte/Jahr"], ["98%", "On-Time"], ["0", "Datenverluste"], ["5", "Phasen"]]
  },
  "/it-beratung": {
    eyebrow: "IT-Beratung", title: "Strategische IT-Beratung mit Blick auf Ergebnisse",
    intro: "IT-Beratung von MEXAA-IT verbindet technische Tiefe mit wirtschaftlichem Verständnis. Wir analysieren Ihre bestehende Infrastruktur, identifizieren Risiken und Effizienzpotenziale und entwickeln gemeinsam mit Ihnen eine realistische Roadmap. Dabei sind wir hersteller- und reselleroffen: Empfehlungen entstehen ausschließlich auf Basis Ihres Bedarfs, Ihrer Sicherheitsanforderungen und Ihrer wirtschaftlichen Rahmenbedingungen. Sie erhalten klare Entscheidungsgrundlagen, priorisierte Maßnahmen und einen Umsetzungsplan, der zu Ihrem Unternehmen passt.",
    sections: [
      { title: "Unser Beratungsansatz", text: "Wir analysieren Systeme, Risiken, Kosten und Prozesse. Daraus entstehen priorisierte Maßnahmen, klare Entscheidungsgrundlagen und ein realistischer Umsetzungsplan. Unsere Beratung ist immer ergebnisorientiert – mit messbarem Mehrwert für Ihr Unternehmen." },
      { title: "Leistungen", bullets: ["IT-Audit und Reifegradanalyse", "Cloud- und Security-Strategie", "Lizenz- und Kostenoptimierung", "Modern Workplace Konzepte", "Ausschreibungsbegleitung", "Projekt- und Change-Beratung"] },
      { title: "Vorgehen", steps: ["Kick-off", "Analyse", "Workshops", "Roadmap", "Umsetzung"] },
      { title: "Ihre Vorteile", cards: [["Unabhängige Beratung", "Hersteller- und reselleroffen, ausschließlich an Ihrem Bedarf orientiert."], ["Klare Entscheidungsgrundlagen", "Priorisierte Maßnahmen, Business-Cases und realistische Aufwandsschätzungen."], ["Umsetzungsstärke", "Wir begleiten nicht nur die Strategie, sondern auch die operative Umsetzung."]] },
    ]
  },
  "/microsoft-365": {
    eyebrow: "Microsoft 365", title: "Microsoft 365 produktiv, sicher und sauber eingeführt",
    intro: "Microsoft 365 ist weit mehr als E-Mail und Office. Richtig eingeführt wird es zur zentralen Plattform für Zusammenarbeit, Kommunikation, Dokumentenmanagement und Sicherheit. Wir gestalten Ihre M365-Umgebung mit klarer Governance, durchdachter Berechtigungsstruktur und einer Adoption-Strategie, die Ihre Mitarbeitenden mitnimmt. Von Teams und SharePoint über Exchange Online und OneDrive bis hin zu Power Platform und Copilot – Sie erhalten eine moderne, sichere und produktive Arbeitsumgebung aus einer Hand.",
    sections: [
      { title: "M365 Apps Übersicht", bullets: ["Teams für Kommunikation und Meetings", "Outlook und Exchange Online", "SharePoint als Intranet- und Dokumentenplattform", "OneDrive für sichere Dateien", "Planner und To Do für Aufgaben", "Power Platform für Automatisierung"] },
      { title: "Governance & Sicherheit", text: "Wir definieren Berechtigungsmodelle, Conditional Access, MFA und Datenschutzrichtlinien, damit Microsoft 365 nicht zur Schatten-IT wird. Sensible Informationen bleiben geschützt, ohne die Produktivität Ihrer Teams zu bremsen." },
      { title: "Einführungsprozess", steps: ["Assessment", "Konzept", "Pilot", "Rollout", "Adoption"] },
      { title: "Vorteile", bullets: ["Einheitliche Zusammenarbeit", "Sichere Identitäten", "Mobile Produktivität", "Weniger Schatten-IT", "Skalierbar und zukunftssicher", "Integration mit Copilot"] },
    ], stats: [["100%", "Cloud-native"], ["MFA", "Pflicht"], ["365", "Tage Support"], ["1", "Plattform"]]
  },
  "/azure-infrastruktur": {
    eyebrow: "Azure Infrastruktur", title: "Skalierbare Cloud-Infrastruktur auf Microsoft Azure",
    intro: "Mit Microsoft Azure schaffen wir eine flexible, hoch verfügbare und sichere Cloud-Infrastruktur, die exakt zu Ihren Anforderungen passt. Wir planen die Architektur, migrieren bestehende Workloads kontrolliert in die Cloud und betreiben Ihre Umgebung mit klarer Governance, integrierter Security und transparenter Kostenkontrolle. Ob hybride Szenarien, Azure Virtual Desktop, Backup-Lösungen oder vollständige Cloud-Native-Architekturen – wir liefern eine Plattform, die mit Ihrem Geschäft skaliert und gleichzeitig höchste Compliance-Anforderungen erfüllt.",
    sections: [
      { title: "Azure Services", bullets: ["Virtuelle Maschinen und Netzwerke", "Backup und Disaster Recovery", "Azure Virtual Desktop", "Storage und Datenplattformen", "Identity und Conditional Access", "Monitoring und Kostenanalyse"] },
      { title: "Migration-Prozess", steps: ["Assessment", "Zielarchitektur", "Pilotmigration", "Produktivumzug", "Optimierung"] },
      { title: "Sicherheit & Compliance", text: "Wir implementieren Azure-Sicherheitsbaselines, Defender for Cloud und Conditional Access. Daten werden verschlüsselt gespeichert und übertragen, Zugriffe werden granular gesteuert und protokolliert – DSGVO-konform und auditierbar." },
      { title: "Ihre Vorteile", cards: [["Hochverfügbarkeit", "Geo-redundante Architekturen mit definierten SLAs und Failover-Strategien."], ["Kostenkontrolle", "Reservierungen, Auto-Scaling und Tagging sorgen für transparente, planbare Cloud-Kosten."], ["Skalierung on demand", "Ressourcen wachsen mit Ihrem Geschäft – ohne neue Hardware oder Wartezeiten."]] },
    ], stats: [["99.99%", "SLA"], ["DSGVO", "konform"], ["DE", "Region"], ["24/7", "Monitoring"]]
  },
  "/microsoft-intune": {
    eyebrow: "Microsoft Intune", title: "Geräte sicher verwalten – unabhängig vom Standort",
    intro: "Microsoft Intune ist die zentrale Plattform, mit der Sie Notebooks, Smartphones und Tablets unabhängig vom Standort verwalten, absichern und mit Anwendungen versorgen. Wir konzipieren Ihre Intune-Umgebung mit durchdachten Compliance-Richtlinien, automatisierter Geräteregistrierung über Windows Autopilot und einer App-Strategie, die Ihren Anwendern alles Wichtige sofort zur Verfügung stellt. So entsteht eine moderne, sichere Arbeitsumgebung – auch im Homeoffice oder unterwegs – mit voller Transparenz über jeden Endpunkt.",
    sections: [
      { title: "Intune Funktionen", bullets: ["Geräteregistrierung und Autopilot", "Compliance-Richtlinien", "App-Verteilung", "Endpoint Security Baselines", "Mobile Device Management", "Reporting und Gerätestatus"] },
      { title: "Gerätemanagement", text: "Wir standardisieren Endgeräte, reduzieren manuelle Einrichtung und sorgen dafür, dass jedes Gerät den Sicherheitsanforderungen Ihres Unternehmens entspricht. Verlorene Geräte können zentral gesperrt oder gelöscht werden – ohne Eingriff der Anwender." },
      { title: "Einführung in 5 Schritten", steps: ["Analyse", "Pilotgeräte", "Richtlinien", "Rollout", "Betrieb"] },
      { title: "Mehrwert für Ihr Unternehmen", cards: [["Zero-Touch Onboarding", "Neue Geräte sind nach dem Auspacken automatisch eingerichtet und einsatzbereit."], ["Maximale Sicherheit", "Compliance, Verschlüsselung und Conditional Access für jedes Endgerät."], ["Weniger Support-Aufwand", "Standardisierung reduziert Tickets und beschleunigt den Arbeitsalltag."]] },
    ], stats: [["BYOD", "fähig"], ["Win/Mac", "iOS/Android"], ["100%", "Compliance"], ["0-Touch", "Setup"]]
  },
  "/client-management": {
    eyebrow: "Client Management", title: "Standardisierte Clients für sichere Produktivität",
    intro: "Professionelles Client Management ist die Grundlage für sichere, produktive Arbeitsplätze. MEXAA-IT begleitet Ihre Clients über den gesamten Lebenszyklus: von der Beschaffung und Standardisierung über die automatisierte Einrichtung mit vorinstallierten Anwendungen bis zu Patch-Management, Sicherheitsüberwachung, Inventarisierung und planmäßigem Austausch. Sie erhalten einheitliche, sichere und schnell einsatzbereite Geräte, eine transparente Übersicht über Ihren Bestand und reduzieren gleichzeitig den Aufwand für Support und Administration deutlich.",
    sections: [
      { title: "Client Management Leistungen", bullets: ["Windows Deployment", "Softwareverteilung", "Patch-Management", "Inventarisierung", "Endpoint Protection", "Lifecycle-Planung"] },
      { title: "Lifecycle in 5 Phasen", steps: ["Beschaffung", "Imaging", "Verteilung", "Betrieb", "Austausch"] },
      { title: "Ihre Vorteile", cards: [["Einheitlichkeit", "Standardisierte Images und Konfigurationen reduzieren Fehlerquellen."], ["Transparenz", "Vollständige Inventarübersicht inklusive Lizenzen, Garantie und Standort."], ["Sicherheit", "Patches, Endpoint Protection und Verschlüsselung auf jedem Gerät."]] },
    ], stats: [["100%", "Patch-Quote"], ["<24h", "Bereitstellung"], ["1 Image", "Pro Modell"], ["Lifecycle", "End-to-End"]]
  },
  "/cloud-telefonie": {
    eyebrow: "Cloud Telefonie", title: "Moderne Telefonie direkt aus der Cloud",
    intro: "Mit Cloud Telefonie wird Ihre Geschäftskommunikation flexibel, standortunabhängig und zukunftssicher. Wir integrieren Telefonie direkt in Microsoft Teams oder professionelle VoIP-Plattformen, übernehmen die Rufnummernportierung und gestalten ein durchdachtes Konzept aus Warteschleifen, Rufgruppen und Auto Attendants. Ihre Mitarbeitenden telefonieren komfortabel über ihr Notebook, Smartphone oder ein Tischtelefon – im Büro, zu Hause oder unterwegs. Hardware-Investitionen entfallen, Betriebskosten werden transparent und die Skalierung gelingt ohne Aufwand.",
    sections: [
      { title: "VoIP Vorteile", bullets: ["Telefonieren von überall", "Weniger Hardware vor Ort", "Flexible Rufgruppen", "Einfache Skalierung", "Bessere Integration in Collaboration", "Transparente Betriebskosten"] },
      { title: "Funktionen", bullets: ["Rufnummernportierung", "Warteschleifen", "Auto Attendant", "Headset- und Geräteberatung", "Notrufkonzept", "Monitoring"] },
      { title: "Einführung", steps: ["Bedarf erfassen", "Konzept", "Portierung", "Rollout", "Optimierung"] },
      { title: "Plattformen", cards: [["Microsoft Teams Phone", "Telefonie nahtlos integriert in Teams – ein Tool für Chat, Meeting und Anruf."], ["Placetel & 3CX", "Klassische Cloud-PBX-Lösungen mit umfangreichen Routing-Funktionen."], ["Hybride Szenarien", "Schrittweise Migration ohne Bruch der bestehenden Telefonieprozesse."]] },
    ], stats: [["0", "TK-Anlagen"], ["100%", "Mobil"], ["DE", "Hosting"], ["24/7", "Erreichbar"]]
  },
  "/ki-loesungen": {
    eyebrow: "KI-Lösungen", title: "KI sinnvoll einsetzen – sicher, messbar und alltagstauglich",
    intro: "Künstliche Intelligenz entfaltet ihren Wert erst dann, wenn sie sicher, kontrolliert und auf konkrete Anwendungsfälle ausgerichtet eingeführt wird. MEXAA-IT begleitet Sie bei der pragmatischen Einführung von Microsoft Copilot, Workflow-Automatisierung und KI-gestützten Geschäftsprozessen. Wir prüfen vorab Datenqualität, Berechtigungen und Compliance-Anforderungen, definieren passende Use Cases und schulen Ihre Mitarbeitenden im verantwortungsvollen Umgang. So wird KI zum messbaren Produktivitätsfaktor – ohne Risiko für Ihre Daten und Prozesse.",
    sections: [
      { title: "Microsoft Copilot", text: "Wir prüfen Datenqualität, Berechtigungen und Use Cases, bevor Copilot ausgerollt wird. So entsteht Nutzen ohne Kontrollverlust und Ihre Mitarbeitenden lernen, das Werkzeug effektiv und sicher zu nutzen." },
      { title: "KI Automatisierung", bullets: ["Dokumentenprozesse", "E-Mail- und Ticketklassifizierung", "Wissenssuche", "Reporting", "Meeting-Zusammenfassungen", "Workflow-Automatisierung"] },
      { title: "Use Cases", bullets: ["Vertriebsvorbereitung", "HR-Onboarding", "Support-Assistenz", "Management-Reports"] },
      { title: "Vorgehen", steps: ["Readiness-Check", "Use Case Auswahl", "Pilot", "Rollout", "Schulung"] },
      { title: "Sicherheit & Governance", cards: [["Datenklassifizierung", "Sensible Inhalte werden vor dem KI-Zugriff erkannt und geschützt."], ["Berechtigungen", "Copilot greift ausschließlich auf Daten zu, für die Nutzer berechtigt sind."], ["Schulung", "Ihre Mitarbeitenden lernen den verantwortungsvollen Umgang mit generativer KI."]] },
    ], stats: [["+30%", "Produktivität"], ["DSGVO", "konform"], ["EU", "Datenraum"], ["1:1", "Schulung"]]
  },
  "/workshops-schulungen": {
    eyebrow: "Workshops & Schulungen", title: "Schulungen, die Teams wirklich weiterbringen",
    intro: "Technologie entfaltet ihren Wert nur, wenn die Menschen, die sie nutzen, sicher mit ihr umgehen können. Unsere Workshops und Schulungen sind praxisnah, verständlich und auf den konkreten Arbeitsalltag Ihrer Teams zugeschnitten. Wir vermitteln Microsoft 365 Grundlagen, fortgeschrittene Teams- und SharePoint-Nutzung, Security Awareness und die richtige Einführung von Copilot. Jede Schulung wird im Vorfeld auf Ihren Bedarf abgestimmt und endet nicht mit dem letzten Termin – Follow-ups sichern den nachhaltigen Lernerfolg.",
    sections: [
      { title: "Schulungsangebot", bullets: ["Microsoft 365 Grundlagen", "Teams produktiv nutzen", "Security Awareness", "SharePoint Struktur", "Copilot Einführung", "Administrator Workshops"] },
      { title: "Ablauf", steps: ["Bedarf klären", "Agenda abstimmen", "Workshop durchführen", "Follow-up sichern"] },
      { title: "Formate", cards: [["Vor-Ort-Workshop", "Interaktiv in Ihren Räumen mit praktischen Übungen am eigenen Gerät."], ["Live Online", "Remote-Schulungen über Microsoft Teams – ortsunabhängig und effizient."], ["Hybrid & Coaching", "Kombination aus Schulung und individuellem Coaching für Power-User."]] },
    ], stats: [["6+", "Themen"], ["DE", "Sprache"], ["100%", "Praxisnah"], ["Follow-up", "inklusive"]]
  },
  "/ueber-uns": {
    eyebrow: "#thinkforresults!", title: "Steigerung der Wettbewerbsfähigkeit durch innovative digitale Lösungen", intro: "Seit unserer Gründung im Jahr 2013 verfolgen wir ein Ziel: #think for results! Wir setzen auf Transparenz, Verlässlichkeit und nachhaltige Strategien. Mit technischem Know-how auf aktuellem Stand und einem klaren Blick für individuelle Anforderungen entwickeln wir gemeinsam mit unseren Kunden Lösungen, die messbare und langfristige Wettbewerbsvorteile schaffen.",
    sections: [
      { title: "Unsere Mission – Zukunft gestalten. Partnerschaftlich. Verlässlich.", text: "Wir verstehen IT als strategischen Erfolgsfaktor. Deshalb hören wir zu, analysieren präzise und entwickeln Lösungen, die zu Ihrem Unternehmen, Ihrer Kultur und Ihren Zielen passen. Unsere Beratung ist hersteller- und reselleroffen – Sie bekommen das, was wirklich zu Ihnen passt." },
      { title: "Ihre Vorteile", cards: [["Maßgeschneiderte Lösungen", "Konzepte, die exakt auf Ihre Anforderungen zugeschnitten sind."], ["Erfahrene Berater", "Unterstützung durch Spezialisten mit langjähriger Projekterfahrung."], ["Hersteller-unabhängig", "Unabhängig von Herstellern und Resellern – objektiv und im Sinne unserer Kunden."], ["Partnerschaftlich", "Langfristige Zusammenarbeit auf Augenhöhe statt kurzfristiger Verkauf."]] },
      { title: "Technologien, auf die wir setzen", bullets: ["Microsoft 365 · Microsoft Azure · Microsoft Hyper-V", "Microsoft Intune · Microsoft Defender · Windows Server", "VMware · Proxmox · Citrix · Terraform", "Lenovo · Dell · HP · Apple · Samsung", "Ubiquiti · Placetel · CodeTwo · Robopack", "Atlassian Jira · Confluence · GitHub · XWiki"] },
      { title: "Teil unserer Erfolgsgeschichte werden", text: "Wir sind immer auf der Suche nach talentierten Persönlichkeiten. Auch wenn derzeit keine passende Stelle ausgeschrieben ist, freuen wir uns auf Ihre Initiativbewerbung." },
    ], stats: [["2013", "Gegründet"], ["200+", "Projekte"], ["50+", "Kunden"], ["98%", "Zufriedenheit"]]
  },
  "/impressum": {
    eyebrow: "Impressum", title: "Angaben gemäß § 5 DDG", intro: "Rechtliche Informationen zur MEXAA-IT GmbH gemäß den gesetzlichen Anforderungen.",
    sections: [
      { title: "MEXAA-IT GmbH", bullets: ["Homburger Str. 69a", "D-61118 Bad Vilbel"] },
      { title: "Handelsregister", bullets: ["Handelsregister: HRB 117429", "Registergericht: Amtsgericht Bad Vilbel"] },
      { title: "Vertreten durch", text: "Mehmet Aggün" },
      { title: "Kontakt", bullets: ["Telefon: +49 6101 596 9082", "E-Mail: info@mexaa.de"] },
      { title: "Umsatzsteuer", text: "Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz: DE32 8347185" },
      { title: "Webdesign und Realisierung von", text: "MEXAA-IT GmbH" },
    ]
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
        <h1 className="text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-hero-foreground sm:text-[44px] md:text-[58px] lg:text-[64px]">{title}</h1>
        <p className="mt-6 max-w-2xl text-sm font-medium leading-6 text-hero-foreground/82 sm:text-base sm:leading-7 md:text-lg md:leading-8">{intro}</p>
      </div>
    </div>
  </section>
);

const ContactCta = () => (
  <section className="bg-background px-6 py-[100px]">
    <div className="mx-auto max-w-[1200px]">
      <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-hero p-10 text-hero-foreground shadow-lift md:flex-row md:items-center md:p-14">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-extrabold leading-tight md:text-[40px]">Jetzt persönliche Beratung anfragen</h2>
          <p className="mt-4 text-lg leading-8 text-hero-foreground/75">Unsere Teams stehen Ihnen deutschlandweit zur Verfügung. Lassen Sie uns gemeinsam besprechen, wie wir Ihre IT zukunftssicher aufstellen können.</p>
        </div>
        <Link to="/kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-7 py-4 font-black text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lift">Jetzt Kontakt aufnehmen <ArrowRight className="h-5 w-5" /></Link>
      </div>
    </div>
  </section>
);

const ContentSection = ({ section }: { section: any }) => (
  <section className="bg-background px-6 py-16 even:bg-secondary md:py-[100px]">
    <div className="mx-auto max-w-[1200px] animate-fade-up">
      <h2 className="text-[26px] font-extrabold leading-tight text-section-title sm:text-[32px] md:text-[40px]">{section.title}</h2>
      {section.text && <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">{section.text}</p>}
      {section.bullets && <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">{section.bullets.map((b: string) => <div key={b} className="service-card flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><span className="font-semibold leading-7">{b}</span></div>)}</div>}
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
      <aside className="rounded-md bg-hero p-8 text-hero-foreground shadow-lift"><h2 className="text-[40px] font-extrabold">Direkter Kontakt</h2><div className="mt-8 space-y-5 text-hero-foreground/75"><p><strong className="block text-hero-foreground">Adresse</strong>MEXAA-IT GmbH · Homburger Str. 69a · 61118 Bad Vilbel</p><p><strong className="block text-hero-foreground">Telefon</strong>+49 6101 596 9082</p><p className="flex gap-3"><Mail className="h-5 w-5 text-primary" /> info@mexaa.de</p><p className="flex gap-3"><Clock className="h-5 w-5 text-primary" /> Öffnungszeiten: Mo–Fr 08:00–18:00 Uhr</p><p className="flex gap-3"><ShieldCheck className="h-5 w-5 text-primary" /> Sichere Fernwartung nach ausdrücklicher Freigabe</p></div><a href={FERNWARTUNG_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-md border border-primary-foreground/20 px-5 py-3 font-black transition hover:bg-primary">Fernwartung starten</a></aside>
    </div></section></PageShell>;
};

export const GenericPage = ({ path }: { path: string }) => {
  if (path === "/kontakt") return <ContactPage />;
  const page = pageData[path] ?? pageData["/managed-service"];
  return <PageShell><Hero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
    {page.stats && <section className="bg-hero px-6 py-[100px] text-hero-foreground"><div className="mx-auto grid max-w-[1200px] gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">{page.stats.map(([n,l]) => <div key={l} className="rounded-md border border-primary-foreground/10 bg-primary-foreground/10 p-7 backdrop-blur"><div className="text-5xl font-black text-primary">{n}</div><div className="mt-3 font-bold text-hero-foreground/70">{l}</div></div>)}</div></section>}
    {page.sections.map((section) => <ContentSection key={section.title} section={section} />)}
    {page.table && <section className="bg-secondary px-6 py-[100px]"><div className="mx-auto max-w-[1200px]"><h2 className="text-[40px] font-extrabold text-section-title">Reaktionszeiten-Tabelle</h2><div className="mt-8 overflow-hidden rounded-md border border-border bg-card shadow-sm">{page.table.map((r) => <div key={r[0]} className="grid grid-cols-3 border-b border-border p-4 last:border-0"><strong>{r[0]}</strong><span>{r[1]}</span><span className="text-muted-foreground">{r[2]}</span></div>)}</div></div></section>}
    <FaqSection faqs={getFaqsForPath(path)} />
    <ContactCta />
  </PageShell>;
};
