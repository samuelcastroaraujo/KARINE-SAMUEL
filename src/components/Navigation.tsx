"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/content";

const LINKS: NavLink[] = [
  { label: "Início", href: "/pt", active: true },
  { label: "Confirme presença", href: "/pt/marque-a-data" },
  { label: "Presentes", href: "/pt/presentes" },
  { label: "Dicas e Instruções", href: "/pt/dicas-e-instrucoes/cerimonia" },
  { label: "Álbum de fotos", href: "/pt/album-de-fotos" },
  { label: "Nossa história", href: "/pt/nossa-historia" },
];

export function Navigation() {
  const [dark, setDark] = useState(false); // dark === true => black text (over white sections)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // White over the gray hero; black once the white content scrolls under the bar.
      const threshold = window.innerHeight - 112;
      setDark(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu open forces white text (full-screen dark overlay).
  const color = open ? "#fff" : dark ? "#000" : "#fff";

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-6 md:px-12"
      style={{ color, ["--menu-color" as string]: color }}
    >
      <Link href="/pt" className="shrink-0" aria-label="Início">
        <Image src="/logo.png" alt="Karine & Samuel" width={40} height={60} className="h-[50px] w-auto md:h-[60px]" />
      </Link>

      {/* Hamburger (mobile) */}
      <button
        type="button"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] flex h-[30px] w-[30px] items-center justify-center md:hidden"
      >
        <span
          className="absolute h-px w-[26px] transition-all duration-200"
          style={{
            backgroundColor: color,
            transform: open ? "rotate(45deg)" : "translateY(-8px)",
          }}
        />
        <span
          className="absolute h-px w-[26px] transition-all duration-200"
          style={{ backgroundColor: color, opacity: open ? 0 : 1 }}
        />
        <span
          className="absolute h-px w-[26px] transition-all duration-200"
          style={{
            backgroundColor: color,
            transform: open ? "rotate(-45deg)" : "translateY(8px)",
          }}
        />
      </button>

      {/* Desktop menu */}
      <ul className="hidden items-center justify-center gap-8 md:flex">
        {LINKS.map((l) => (
          <li key={l.href} className="text-center">
            <Link
              href={l.href}
              className={cn("nav-item inline-block", l.active && "nav-item-active")}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ backgroundColor: "rgba(0,0,0,0.58)", color: "#fff" }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={cn("nav-item inline-block", l.active && "nav-item-active")}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
