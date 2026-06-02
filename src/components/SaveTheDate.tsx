import Image from "next/image";
import { RoundedCard } from "@/components/RoundedCard";
import { Button } from "@/components/Button";
import type { TimelineCard } from "@/types/content";

const CARDS: TimelineCard[] = [
  {
    number: "01.",
    date: "10 April 2018",
    title: "O começo",
    front: "/images/love-107.jpg",
    back: "/images/love-184.jpg",
    frontAlt: "our-first-images",
    backAlt: "our-first-images",
  },
  {
    number: "02.",
    date: "18 Nov 2023",
    title: "O pedido",
    front: "/images/love-27.jpg",
    back: "/images/love-143.jpg",
    frontAlt: "pre-wedding-images",
    backAlt: "pre-wedding-images",
  },
  {
    number: "03.",
    date: "29 Ago 2026",
    title: "O casamento",
    front: "/images/love-93.jpg",
    back: "/images/love-65.jpg",
    frontAlt: "wedding-ask-images",
    backAlt: "wedding-ask-images",
  },
];

export function SaveTheDate() {
  return (
    <section className="relative bg-white px-8 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-12 md:flex-row md:items-center md:gap-8">

        {/* LEFT: SAVE THE DATE + CTA */}
        <div className="flex flex-col justify-between gap-8 md:w-[38%] md:self-stretch md:py-4">
          <h1 className="text-gradient-clip font-serif text-[80px] font-extralight uppercase leading-[92px] md:text-[144px] md:leading-[180px]">
            <span className="block">Save</span>
            <span className="block">The</span>
            <span className="block">Date!</span>
          </h1>

          <div className="flex items-end gap-6 md:gap-8">
            <Image
              src="/logo.png"
              alt="Karine & Samuel"
              width={45}
              height={68}
              className="hidden h-[68px] w-auto md:block"
            />
            <Button href="/pt/marque-a-data" variant="highlighted" className="w-[260px]">
              Confirme sua presença
            </Button>
          </div>
        </div>

        {/* RIGHT: 3 arch photos (desktop) / timeline vertical (mobile) */}
        <div className="flex w-full flex-col items-center gap-6 md:w-[62%] md:flex-row md:items-start md:justify-center md:gap-6">
          {CARDS.map((c) => (
            <RoundedCard key={c.number} card={c} />
          ))}
        </div>

      </div>
    </section>
  );
}
