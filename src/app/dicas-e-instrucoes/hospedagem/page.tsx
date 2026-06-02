import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIDEBAR = [
  { label: "A Cerimônia", href: "/dicas-e-instrucoes/cerimonia" },
  { label: "Código de Vestimenta", href: "/dicas-e-instrucoes/codigo-de-vestimenta" },
  { label: "Hospedagem", href: "/dicas-e-instrucoes/hospedagem", active: true },
];

const DISTANCIAS = [
  "São Paulo 75km",
  "Campinas 70km",
  "Jarinú 10km",
  "Jundiaí 35km",
  "Atibaia 35km",
  "Itatiba 37km",
  "Brag. Paulista 53km",
];

const HOTEIS = [
  { name: "La Maison Caiçara", dist: "500m" },
  { name: "Hotel Recanto da Paz", dist: "10,9km" },
  { name: "Alegro Hotel by Tauá", dist: "23km" },
  { name: "Tauá Hotel Atibaia", dist: "22km" },
  { name: "Bourbon Atibaia Resort", dist: "24km" },
  { name: "Unique Garden Hotel", dist: "24,8km" },
];

const AEROPORTOS = [
  { name: "Viracopos", dist: "69,5km (1h10)" },
  { name: "Guarulhos", dist: "70,6km (1h20)" },
];

export default function HospedagemPage() {
  return (
    <PageShell>
      <div className="flex min-h-[calc(100vh-112px)]">
        {/* Sidebar */}
        <aside className="hidden w-[240px] shrink-0 border-r border-[#eee] px-8 pt-12 md:block">
          <nav className="flex flex-col gap-4">
            {SIDEBAR.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={cn(
                  "font-serif text-[14px] uppercase tracking-[2px] transition-colors",
                  s.active ? "text-[#d39f42]" : "text-[#aaa] hover:text-black",
                )}
              >
                {s.active ? <em>{s.label}</em> : s.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-12 px-6 py-16 md:flex-row md:px-12">

          {/* Map placeholder */}
          <div className="flex shrink-0 items-start justify-center md:w-[340px]">
            <div className="flex h-[300px] w-full items-center justify-center rounded-xl bg-[#f0ede8] md:h-[380px]">
              <div className="text-center">
                <p className="font-serif text-[18px] font-light text-[#888]">La Rochelle Ville</p>
                <p className="mt-1 font-sans text-[13px] text-[#aaa]">Jarinu – SP</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            {/* Script heading */}
            <h1 className="mb-10 font-script text-[clamp(32px,4vw,56px)] font-light leading-tight text-black">
              Dicas de hospedagem e locomoção
            </h1>

            {/* Distâncias */}
            <div className="mb-10">
              <h2 className="mb-4 font-serif text-[22px] font-extralight uppercase tracking-[4px] text-black">
                Distâncias:
              </h2>
              <ol className="flex flex-col gap-1">
                {DISTANCIAS.map((d, i) => (
                  <li key={d} className="font-serif text-[15px] uppercase tracking-[1px] text-[#555]">
                    {i + 1}. {d}
                  </li>
                ))}
              </ol>
            </div>

            {/* Hotéis */}
            <div className="mb-10">
              <h2 className="mb-4 font-serif text-[22px] font-extralight uppercase tracking-[4px] text-black">
                Hotéis:
              </h2>
              <ol className="flex flex-col gap-1">
                {HOTEIS.map((h, i) => (
                  <li key={h.name} className="font-serif text-[15px] text-[#555]">
                    {i + 1}. {h.name} – {h.dist}
                  </li>
                ))}
              </ol>
            </div>

            {/* Aviso */}
            <p className="mb-10 max-w-[540px] font-sans text-[13px] leading-relaxed text-[#888]">
              <strong className="text-[#555]">IMPORTANTE:</strong> Informamos que não temos nenhum vínculo, parceria, contrato ou ganhamos comissões por essas indicações acima. Qualquer contato e contratação deve ser realizado diretamente com o local indicado e qualquer problema que venha acontecer, gostaríamos de ser comunicados imediatamente.
            </p>

            {/* Aeroportos */}
            <div>
              <h2 className="mb-4 font-serif text-[22px] font-extralight uppercase tracking-[4px] text-black">
                Aeroportos:
              </h2>
              <ol className="flex flex-col gap-1">
                {AEROPORTOS.map((a, i) => (
                  <li key={a.name} className="font-serif text-[15px] uppercase tracking-[1px] text-[#555]">
                    {i + 1}. {a.name} – {a.dist}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        <div className="flex gap-6 border-t border-[#eee] px-6 py-6 md:hidden">
          {SIDEBAR.map((s) => (
            <Link key={s.href} href={s.href}
              className={cn("font-serif text-[11px] uppercase tracking-[2px]", s.active ? "text-[#d39f42]" : "text-[#aaa]")}>
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
