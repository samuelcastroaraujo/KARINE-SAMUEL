import { PageShell } from "@/components/PageShell";

const PRODUCTS = [
  { name: "Cortina para janela", price: "R$ 90,00", bought: true },
  { name: "Air Fryer", price: "R$ 500,00", bought: true },
  { name: "Utensílios de cozinha", price: "R$ 40,00", bought: true },
  { name: "Conjunto de taças para sobremesa", price: "R$ 65,00", bought: true },
  { name: "Faqueiro", price: "R$ 250,00", bought: true },
  { name: "Jantar romântico na lua de mel", price: "R$ 250,00", bought: true },
  { name: "Potes plásticos", price: "R$ 60,00", bought: true },
  { name: "Ferro de passar", price: "R$ 90,00", bought: true },
  { name: "Conjunto de xícaras", price: "R$ 120,00", bought: true },
  { name: "Formas e assadeiras", price: "R$ 220,00", bought: true },
  { name: "Ventilador", price: "R$ 250,00", bought: true },
  { name: "Conjunto de taças", price: "R$ 160,00", bought: true },
  { name: "Purificador de água", price: "R$ 900,00", bought: true },
  { name: "Varal dobrável", price: "R$ 80,00", bought: true },
  { name: "Tábua de passar", price: "R$ 150,00", bought: true },
  { name: "Panela elétrica de arroz", price: "R$ 200,00", bought: true },
  { name: "Jarras", price: "R$ 65,00", bought: true },
  { name: "Cortina para porta", price: "R$ 150,00", bought: true },
  { name: "Mesa de centro", price: "R$ 350,00", bought: true },
  { name: "Liquidificador", price: "R$ 120,00", bought: false },
  { name: "Conjunto de panelas", price: "R$ 500,00", bought: false },
  { name: "Aparelho de jantar", price: "R$ 400,00", bought: false },
  { name: "Fritadeira elétrica", price: "R$ 300,00", bought: false },
  { name: "Batedeira", price: "R$ 250,00", bought: false },
  { name: "Aspirador de pó", price: "R$ 450,00", bought: false },
  { name: "Cafeteira", price: "R$ 180,00", bought: false },
  { name: "Micro-ondas", price: "R$ 600,00", bought: false },
  { name: "Sanduicheira", price: "R$ 90,00", bought: false },
  { name: "Toalhas de banho", price: "R$ 120,00", bought: false },
  { name: "Jogo de lençóis", price: "R$ 200,00", bought: false },
  { name: "Edredom", price: "R$ 350,00", bought: false },
  { name: "Travesseiros", price: "R$ 180,00", bought: false },
];

export default function PresentsPage() {
  return (
    <PageShell>
      <section
        className="min-h-screen px-8 py-16 md:px-16"
        style={{ backgroundImage: "url(/folha2.jpg)", backgroundSize: "cover", backgroundPosition: "50% 25%" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-12 text-center font-serif text-[40px] font-extralight uppercase tracking-[4px] text-white md:text-[56px]">
            Lista de Presentes
          </h1>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md"
              >
                {/* Image placeholder square */}
                <div className="aspect-square w-full bg-[#e8e8e8]">
                  {p.bought && (
                    <div className="flex h-full items-center justify-center bg-black/10">
                      <span className="font-serif text-[11px] uppercase tracking-[2px] text-[#777]">Comprado</span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="flex flex-col gap-1 p-3">
                  <span className="font-serif text-[13px] font-light leading-tight text-black">{p.name}</span>
                  <span className="font-serif text-[12px] text-[#d39f42]">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
