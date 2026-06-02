import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIDEBAR = [
  { label: "A Cerimônia", href: "/dicas-e-instrucoes/cerimonia" },
  { label: "Código de Vestimenta", href: "/dicas-e-instrucoes/codigo-de-vestimenta", active: true },
  { label: "Hospedagem", href: "/dicas-e-instrucoes/hospedagem" },
];

const ELE = [
  "Terno ou costume",
  "Gravata ou gravata-borboleta",
  "Sapato social",
  "Cores neutras ou frias",
  "Evitar branco ou preto total",
];

const ELA = [
  "Vestido longo ou midi",
  "Terceira peça (casaco, blazer ou xale)",
  "Salto bloco — cerimônia no gramado",
  "Cores neutras, pastéis ou floreadas",
  "Evitar branco, off-white ou creme",
];

export default function CodigoVestimentaPage() {
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
        <div className="flex-1 px-6 py-16 md:px-16">
          {/* Script heading */}
          <h2 className="mb-2 text-center font-script text-[clamp(28px,3vw,48px)] font-light text-black">
            Convidados, preparem suas vestimentas!
          </h2>

          {/* Title */}
          <h1 className="mb-8 text-center font-serif text-[clamp(40px,6vw,80px)] font-extralight uppercase tracking-[4px] text-black">
            Passeio
            <br />
            Completo
          </h1>

          {/* Notes */}
          <div className="mx-auto mb-12 max-w-[480px] text-center">
            <p className="mb-2 font-sans text-[14px] text-[#555]">
              Lembrem-se de que nosso casamento será no inverno! (Frio).
              Indicamos investir em uma terceira peça ou em mangas longas.
            </p>
            <p className="font-sans text-[13px] italic text-[#888]">
              Mulheres: A cerimônia será no gramado, opte por um salto bloco.
            </p>
          </div>

          {/* ELE / ELA columns */}
          <div className="mx-auto flex max-w-[700px] divide-x divide-[#ddd]">
            {/* ELE */}
            <div className="flex flex-1 flex-col items-center gap-4 pr-8">
              <h3 className="font-serif text-[22px] font-extralight uppercase tracking-[6px] text-black">
                ELE
              </h3>
              <ul className="flex flex-col gap-3">
                {ELE.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-[14px] text-[#555]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d39f42]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ELA */}
            <div className="flex flex-1 flex-col items-center gap-4 pl-8">
              <h3 className="font-serif text-[22px] font-extralight uppercase tracking-[6px] text-black">
                ELA
              </h3>
              <ul className="flex flex-col gap-3">
                {ELA.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-[14px] text-[#555]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d39f42]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile sidebar */}
          <div className="mt-12 flex gap-6 border-t border-[#eee] pt-8 md:hidden">
            {SIDEBAR.map((s) => (
              <Link key={s.href} href={s.href}
                className={cn("font-serif text-[12px] uppercase tracking-[2px]", s.active ? "text-[#d39f42]" : "text-[#aaa]")}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
