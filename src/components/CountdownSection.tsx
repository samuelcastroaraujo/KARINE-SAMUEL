"use client";

import { useEffect, useState } from "react";

const WEDDING = new Date("2026-08-29T00:00:00");

interface Parts {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function remaining(to: Date, now: Date): Parts {
  const diff = Math.max(0, Math.floor((to.getTime() - now.getTime()) / 1000));
  let months =
    (to.getFullYear() - now.getFullYear()) * 12 + (to.getMonth() - now.getMonth());
  // anchor = now advanced by `months` whole months
  const anchor = new Date(now);
  anchor.setMonth(now.getMonth() + months);
  if (anchor > to) {
    months = Math.max(0, months - 1);
    anchor.setMonth(anchor.getMonth() - 1);
  }
  let rest = Math.max(0, Math.floor((to.getTime() - anchor.getTime()) / 1000));
  const days = Math.floor(rest / 86400);
  rest -= days * 86400;
  const hours = Math.floor(rest / 3600);
  rest -= hours * 3600;
  const minutes = Math.floor(rest / 60);
  const seconds = rest - minutes * 60;
  return { months, days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function CountdownSection() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(remaining(WEDDING, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = parts
    ? [
        ["Meses", parts.months],
        ["Dias", parts.days],
        ["Horas", parts.hours],
        ["Minutos", parts.minutes],
        ["Segundos", parts.seconds],
      ]
    : [
        ["Meses", 0],
        ["Dias", 0],
        ["Horas", 0],
        ["Minutos", 0],
        ["Segundos", 0],
      ];

  return (
    <section className="relative flex min-h-[420px] justify-center overflow-hidden text-white md:min-h-[524px]">
      <div className="relative z-10 flex w-full flex-col items-center pt-8 md:pt-2">
        <div className="font-script text-[48px] leading-none md:text-[64px]">Faltam:</div>
        <div className="flex w-full max-w-[900px] justify-center">
          {units.map(([label, value]) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-2 md:w-[180px] md:flex-none"
            >
              <span className="-mt-3 font-serif text-[44px] font-thin tracking-[4px] md:text-[112px]">
                {pad(value)}
              </span>
              <span className="font-serif text-[13px] uppercase tracking-[4px] md:text-[24px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Torn-paper edge transition into the white content below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/countdown/ripped-bg-3.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />
    </section>
  );
}
