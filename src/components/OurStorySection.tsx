import { Button } from "@/components/Button";

const PARAGRAPH =
  "Kalmar, 1518-1519; Assim, costumávamos terminar nossos textos. Em uma cidade sonhada, onde nos encontrávamos em nossas imaginações. Talvez você encontre algumas dezenas de poemas escritos em nossas redes sociais com essa assinatura. Nos conhecemos em 10 de Abril de 2018. Gosto (eu, o noivo), de pensar que - guardadas as devidas proporções -, nos encontramos em um encontro às escuras do século XXI. Ela é meu primeiro amor.";

export function OurStorySection() {
  return (
    <section className="relative bg-white px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto flex min-h-[520px] max-w-[1184px] flex-col justify-between">
        {/* Offset slogan */}
        <div className="font-serif font-extralight uppercase leading-[0.7]">
          <span className="ml-[11px] block text-[56px] text-[rgba(15,15,15,0.35)] md:text-[108px]">
            Nossa
          </span>
          <span className="block text-[96px] leading-[0.7] text-[#1a1a1a] md:text-[180px]">
            história
          </span>
        </div>

        {/* Button + paragraph */}
        <div className="mt-16 flex flex-col items-start justify-between gap-8 md:mt-0 md:flex-row md:items-end">
          <Button href="/pt/nossa-historia" variant="primary" className="font-serif">
            Continue lendo...
          </Button>
          <p className="max-w-[350px] text-right text-[16px] leading-normal text-[#1a1a1a] md:text-justify">
            {PARAGRAPH}
          </p>
        </div>
      </div>
    </section>
  );
}
