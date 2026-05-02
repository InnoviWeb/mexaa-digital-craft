import msPartner from "@/assets/partners/microsoft-solutions-partner.png";
import lenovo from "@/assets/partners/lenovo.gif";
import vmware from "@/assets/partners/vmware.png";
import placetel from "@/assets/partners/placetel.png";
import robopack from "@/assets/partners/robopack.webp";

const logos = [
  { src: msPartner, alt: "Microsoft Solutions Partner" },
  { src: lenovo, alt: "Lenovo" },
  { src: vmware, alt: "VMware" },
  { src: placetel, alt: "Placetel" },
  { src: robopack, alt: "Robopack" },
];

export const PartnerMarquee = () => {
  const loop = [...logos, ...logos, ...logos];
  return (
    <section aria-label="Unsere Partner und Zertifizierungen" className="relative overflow-hidden border-y border-border bg-background py-10">
      <div className="mx-auto mb-6 max-w-[1200px] px-6 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          Unsere Partner & Zertifizierungen
        </p>
      </div>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="flex h-16 w-40 shrink-0 items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
