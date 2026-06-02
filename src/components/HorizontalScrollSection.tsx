"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import type { HorizontalPanel } from "@/types/content";

const PANELS: HorizontalPanel[] = [
  {
    key: "cerimonia",
    heading: "A Cerimônia",
    buttonLabel: "Veja informações sobre nosso Grande Dia!",
    href: "/pt/dicas-e-instrucoes/cerimonia",
    bg: "/folha2.jpg",
    dark: false,
    address: ["Caioçara, Jarinu - SP, 13240-000", "Estrada Municipal do Bairro Caioçara 1100"],
  },
  {
    key: "presentes",
    heading: "Lista de Presentes",
    buttonLabel: "Cheque nossa lista de presentes",
    href: "/pt/presentes",
    bg: "/tulipa.jpg",
    dark: true,
  },
  {
    key: "vestimenta",
    heading: "Código de Vestimenta",
    buttonLabel: "Confira o dresscode",
    href: "/pt/dicas-e-instrucoes/codigo-de-vestimenta",
    bg: "/girassol.jpg",
    dark: false,
  },
  {
    key: "hospedagem",
    heading: "Hospedagem",
    buttonLabel: "Encontre lugares por perto para sua hospedagem!",
    href: "/pt/dicas-e-instrucoes/hospedagem",
    bg: "/dandelion.jpg",
    dark: true,
  },
  {
    key: "poemas",
    heading: "Poemas",
    buttonLabel: "Poemas que trocamos ao longo dos anos!",
    href: "/pt/nossa-historia",
    bg: "/planta.jpg",
    dark: false,
  },
  {
    key: "galeria",
    heading: "Galeria",
    buttonLabel: "As fotos do nosso pré-wedding",
    href: "/pt/album-de-fotos",
    bg: "/final.jpg",
    dark: true,
  },
];

function PanelContent({ panel }: { panel: HorizontalPanel }) {
  return (
    <div className="group flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
      <h2
        className={cn(
          "font-serif text-[28px] font-extralight uppercase tracking-[4px] md:text-[44px]",
          panel.dark ? "text-white" : "text-black",
        )}
      >
        {panel.heading}
      </h2>
      <Button
        href={panel.href}
        variant={panel.dark ? "secondary" : "primary"}
        className="max-w-[90%] text-[14px] md:w-[400px] md:text-[18px]"
      >
        {panel.buttonLabel}
      </Button>
      {panel.address && (
        <div
          className={cn(
            "mt-2 flex flex-col gap-2 font-serif text-[16px] tracking-[1.2px] text-[#717171] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-[20px]",
          )}
        >
          {panel.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let raf = 0;

    const updateHeight = () => {
      const travel = track.scrollWidth - window.innerWidth;
      section.style.height = `${window.innerHeight + Math.max(0, travel)}px`;
    };

    const update = () => {
      raf = 0;
      const travel = track.scrollWidth - window.innerWidth;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const top = -section.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, top / scrollable));
      track.style.transform = `translate3d(${-(p * travel)}px,0,0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      updateHeight();
      update();
    };

    updateHeight();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-screen will-change-transform">
          {PANELS.map((panel) => (
            <section
              key={panel.key}
              /* Desktop: 50vw (2 panels visible) | Mobile: 100vw (1 panel visible) */
              className="h-screen w-screen flex-[0_0_auto] bg-cover bg-[center_bottom] md:w-[50vw]"
              style={{ backgroundImage: `url(${panel.bg})` }}
            >
              <PanelContent panel={panel} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
