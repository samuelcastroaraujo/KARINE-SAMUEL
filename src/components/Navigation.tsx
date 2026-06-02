"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Início", href: "/" },
  { label: "Confirme presença", href: "/marque-a-data" },
  { label: "Presentes", href: "/presentes" },
  { label: "Dicas e Instruções", href: "/dicas-e-instrucoes/cerimonia" },
  { label: "Álbum de fotos", href: "/album-de-fotos" },
  { label: "Nossa história", href: "/nossa-historia" },
];

export function Navigation() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) { setDark(true); return; }
    const onScroll = () => setDark(window.scrollY > window.innerHeight - 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const color = open ? "#fff" : dark ? "#000" : "#fff";

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-6 pt-4 pb-3 md:pt-5 md:pb-4"
      style={{ color, ["--menu-color" as string]: color }}
    >
      {/* Logo — centered */}
      <Link href="/" aria-label="Início" className="mb-2">
        <Image
          src="/logo.png"
          alt="Karine & Samuel"
          width={40}
          height={60}
          className="h-[48px] w-auto md:h-[56px]"
        />
      </Link>

      {/* Desktop menu — centered row */}
      <ul className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
        {LINKS.map((l) => {
          const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
          return (
            <li key={l.href} className="text-center">
              <Link
                href={l.href}
                className={cn("nav-item inline-block", active && "nav-item-active")}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger (mobile) — absolute top-right */}
      <button
        type="button"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="absolute right-6 top-6 z-[60] flex h-[30px] w-[30px] items-center justify-center md:hidden"
      >
        <span className="absolute h-px w-[26px] transition-all duration-200"
          style={{ backgroundColor: color, transform: open ? "rotate(45deg)" : "translateY(-8px)" }} />
        <span className="absolute h-px w-[26px] transition-all duration-200"
          style={{ backgroundColor: color, opacity: open ? 0 : 1 }} />
        <span className="absolute h-px w-[26px] transition-all duration-200"
          style={{ backgroundColor: color, transform: open ? "rotate(-45deg)" : "translateY(8px)" }} />
      </button>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ backgroundColor: "rgba(0,0,0,0.58)", color: "#fff" }}
      >
        {LINKS.map((l) => {
          const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn("nav-item inline-block", active && "nav-item-active")}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
