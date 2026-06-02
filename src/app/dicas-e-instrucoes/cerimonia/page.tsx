import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIDEBAR = [
  { label: "A Cerimônia", href: "/dicas-e-instrucoes/cerimonia", active: true },
  { label: "Código de Vestimenta", href: "/dicas-e-instrucoes/codigo-de-vestimenta" },
  { label: "Hospedagem", href: "/dicas-e-instrucoes/hospedagem" },
];

const ROUTES = [
  {
    title: "Para quem vem de SP Zona Sul",
    alts: [
      {
        label: "Alternativa 1",
        steps: [
          "Pela Via Anchieta, saia pela saída 39, logo após posto indireitai.",
          "Pegue a Rod.Edgard Máximo Zamboto e permanece por 5km.",
          "No primeiro trevo para Jarinu, pegue e permanece a Estrada Municipal Altto Siqueira Ignaca bairro Maracanã. 8. Campo Largo. Permanece por 6km.",
          "Siga em frente à Avenida Bela Vista (se tomar à esquerda) e vire após 2,4km até chegar na frente do portão de Fazenda Caioçara. Não entre, permanece na esquina e continue. Logo após a curva vire a esquerda do Ville La Rochelle.",
          "Volta: Mesmo percurso",
        ],
      },
      {
        label: "Alternativa 2",
        steps: [
          "Caso tenha perdido a entrada da Edgard Máximo Zamboto em Cajamar e não tenha feito o retorno imediato.",
          "Siga até a Rodovia Amador Aguiar. Continue seguindo por 7,7 km, no bairro Cavarucanga, chegue a Rodovia Edgar Máximo Zamboto. Após 4,7 km, no bairro Cavarino, chegue a Rodovia Amador Aguiar. Após mais 3,4 km chegue a frente do portão de Fazenda Caioçara.",
        ],
      },
      {
        label: "Alternativa 3",
        steps: ["São Paulo / Jarinu / La Rochelle Giornalista - CLIQUE AQUI (Via Bot: Anhamanguera)"],
      },
      {
        label: "Alternativa 4",
        steps: ["São Paulo / Jarinu / La Rochelle Giornalista - CLIQUE AQUI (Via Bot: Anhamanguera)"],
      },
    ],
  },
  {
    title: "Para quem vem da Zona Leste de São Paulo:",
    alts: [],
  },
  {
    title: "Para quem vem de Campinas:",
    alts: [],
  },
];

export default function CerimoniaPage() {
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
                  s.active ? "text-black" : "text-[#aaa] hover:text-black",
                )}
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 px-6 py-12 md:px-16">
          {/* Venue header */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
            {/* Venue name */}
            <div className="flex-1">
              <p className="mb-2 font-serif text-[12px] uppercase tracking-[3px] text-[#aaa]">
                A REALIZAR-SE ÀS 15H
              </p>
              <h1 className="font-serif text-[52px] font-extralight italic leading-tight text-black md:text-[72px]">
                La Rochelle
                <br />
                <span className="text-[32px]">Ville</span>
              </h1>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 text-right md:pt-4">
              <p className="font-serif text-[16px] font-light uppercase tracking-[2px] text-black">
                29 de Agosto de 2026
              </p>
              <p className="font-serif text-[14px] uppercase tracking-[1px] text-[#777]">
                Cerimônia e recepção – Ville La Rochelle
              </p>
              <p className="font-serif text-[14px] text-[#777]">
                Estrada Municipal do Bairro Caioçara 1100
              </p>
              <p className="font-serif text-[14px] text-[#777]">
                Bairro Caioçara | Jarinu – SP
              </p>
            </div>
          </div>

          <h2 className="mb-8 font-serif text-[22px] font-extralight uppercase tracking-[3px] text-black">
            Informações sobre o grande dia!
          </h2>

          {/* Routes */}
          <div className="flex flex-col gap-10">
            {ROUTES.map((route) => (
              <div key={route.title}>
                <h3 className="mb-4 font-serif text-[18px] font-light uppercase tracking-[2px] text-[#555]">
                  {route.title}
                </h3>
                {route.alts.map((alt) => (
                  <div key={alt.label} className="mb-6">
                    <p className="mb-2 font-serif text-[14px] font-semibold uppercase tracking-[2px] text-[#d39f42]">
                      {alt.label}
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      {alt.steps.map((step, i) => (
                        <li key={i} className="font-sans text-[14px] leading-relaxed text-[#555]">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile sidebar */}
          <div className="mt-12 flex gap-6 border-t border-[#eee] pt-8 md:hidden">
            {SIDEBAR.map((s) => (
              <Link key={s.href} href={s.href}
                className={cn("font-serif text-[12px] uppercase tracking-[2px]", s.active ? "text-black" : "text-[#aaa]")}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
