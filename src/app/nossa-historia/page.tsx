import { PageShell } from "@/components/PageShell";

const STORY = [
  {
    heading: "Kalmar 1518-1519;",
    paragraphs: [
      "Assim, costumávamos terminar nossos textos. Em uma cidade sonhada, onde nos encontrávamos em nossas imaginações. Talvez você encontre algumas dezenas de poemas escritos em nossas redes sociais com essa assinatura.",
      "Nos conhecemos em 10 de Abril de 2018. Gosto (eu, o noivo), de imaginar que - guardadas as devidas proporções -, nos encontramos em um encontro às escuras do século XXI. Ela é meu primeiro amor.",
      "Ainda tenho memórias vívidas daquele ano.",
      "As madrugadas em ligação, com os inolvidáveis sussurros.",
      "O doze de dezembro do primeiro abraço e a primeira chuva de meteoros juntos. A verdade é que consigo narrar quase que minuto a minuto daqueles dias.",
      "Mas ainda não era o momento onde as ditas linhas se encontrariam. Ainda faltava Algo - ou Alguém. 27 de abril de 2019, a primeira despedida.",
    ],
  },
  {
    heading: "Kalmar 1520-1521;",
    paragraphs: [
      'Ainda pensamos muito sobre a cabana nas montanhas, mas agora, separados… Não para sempre, ainda bem. Muita história ainda seria escrita. Contaremos sobre a volta então: depois de um "sinal de fumaça" enviado, soubemos que ambos continuávamos dentro de nossas imaginações. As mesmas. E então, depois de um reencontro, decidimos oficializar, finalmente – é um namoro.',
      "1 de agosto de 2020, vivendo a pandemia.",
      'Sabe quando queremos muito construir algo, mas não sabemos como? Pois bem, uma edificação sobre a areia define bem essa parte da história. "These violent delights have violent ends". Mas ele é meu primeiro amor.',
      "Essa é uma parte da história que poderia ser digna de esquecimento. Mas não é. Ela é parte da prova de uma história de redenção. Escrita não com tinta, nem em tábuas de pedra, mas em tábuas de corações humanos.",
      "Hoje nós somos gratos em tudo. A verdade é que foi nessa época que entendemos que nós, por nós mesmos, não seríamos capazes de sustentar essa história. Foi então que tivemos de seguir caminhos diferentes. Para que pudéssemos ser encontrados por Ele. E em tudo, podermos ver Sua graça.",
    ],
  },
  {
    heading: "Kalmar 1523-1524;",
    paragraphs: [
      "Um mês após nosso reencontro, foi feito o pedido de casamento.",
    ],
  },
];

const POEMS = [
  "À heroica juventude",
  "Últimos olhares",
  "Versos roubados",
  "Ao amor que permanece",
  "Em primeira pessoa",
  "Antares e o Océan",
  "Billet-doux",
  "Fim",
  "Versos terapêuticos",
  "É só o tempo (ou uma face de dois gumes?)",
  "Versos heliocêntricos",
  "Você e todas as senhoras",
  "Carta à Esperança Nº4",
  "Versos livres",
];

export default function NossaHistoriaPage() {
  return (
    <PageShell>
      <section
        className="min-h-screen px-6 py-16 md:px-12"
        style={{ backgroundColor: "rgb(30,30,30)" }}
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1fr_280px]">

          {/* Left: Story */}
          <div>
            <h1 className="mb-10 font-serif text-[40px] font-extralight uppercase tracking-[3px] text-white md:text-[56px]">
              Nossa História
            </h1>

            <div className="flex flex-col gap-10">
              {STORY.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-4 font-serif text-[18px] font-light italic text-[#d39f42]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="mb-4 font-sans text-[14px] leading-relaxed text-[#ccc]">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Poems */}
          <div>
            <h2 className="mb-6 font-serif text-[28px] font-extralight uppercase tracking-[4px] text-white">
              Poemas
            </h2>
            <ul className="flex flex-col gap-3">
              {POEMS.map((poem) => (
                <li key={poem}>
                  <span className="font-serif text-[14px] italic text-[#aaa] transition-colors hover:text-[#d39f42]">
                    {poem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
