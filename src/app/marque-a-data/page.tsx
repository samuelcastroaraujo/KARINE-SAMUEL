"use client";

import { useState } from "react";
import { PageShell } from "@/components/PageShell";

// Names scattered in the background (typographic decorative effect)
const BG_NAMES = [
  "Larissa Monteiro","Caio Alves","Antônio Costa","João Pedro","Carlos Silva",
  "Fernanda Lucas","Bruna Rachiortz","Rafael Santos","Juliana Lima","Ana Gabriella",
  "Carlos Matos","Daniel Sacilos","Mariana Figueiredo","Thiago Rocha","Beatriz Campos",
  "Lucas Ferreira","Isabela Nunes","Gustavo Pereira","Camila Souza","Rodrigo Almeida",
  "Natalia Carvalho","Pedro Henrique","Amanda Costa","Felipe Martins","Leticia Oliveira",
];

export default function MarqueADataPage() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  return (
    <PageShell>
      <section className="relative flex min-h-[calc(100vh-112px)] items-center justify-center overflow-hidden bg-white px-6">
        {/* Scattered names background */}
        <div className="pointer-events-none absolute inset-0 flex flex-wrap content-center items-center justify-center gap-x-6 gap-y-2 px-12 opacity-[0.07] select-none">
          {BG_NAMES.map((n) => (
            <span key={n} className="font-serif text-[clamp(24px,3vw,56px)] font-extralight uppercase tracking-widest text-black">
              {n}
            </span>
          ))}
        </div>

        {/* Form */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <label className="font-serif text-[clamp(32px,5vw,72px)] font-extralight text-black">
                Digite seu nome<span className="text-[#d39f42]">.</span>
              </label>
              <p className="font-script text-[clamp(18px,2vw,28px)] font-light italic text-[#777]">
                Pedimos que confirme o mais rápido que puder, assim que tiver certeza!
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="mt-4 w-full max-w-md border-b border-black bg-transparent py-3 text-center font-serif text-[22px] font-extralight text-black outline-none placeholder:text-[#bbb] focus:border-[#d39f42]"
                required
              />
              <button
                type="submit"
                className="btn-pill btn-highlighted mt-4 px-12"
              >
                Confirmar presença
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-serif text-[clamp(28px,4vw,56px)] font-extralight text-black">
                Até logo, <span className="text-[#d39f42]">{name}</span>!
              </h2>
              <p className="font-script text-[clamp(18px,2vw,28px)] text-[#777]">
                Sua presença foi confirmada. Nos vemos em breve!
              </p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
