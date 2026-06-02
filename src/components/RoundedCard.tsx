import Image from "next/image";
import type { TimelineCard } from "@/types/content";

/**
 * Arch flip-card: 275×500, border-radius 300px (tombstone/arch), overflow hidden.
 * Front image flips to reveal the back image on hover (rotateY, backface hidden).
 * A large serif number overlaps the bottom-right — white over the photo (inner),
 * black below the arch (outer). Gold splitter + date + title underneath.
 *
 * On mobile the arch image is hidden; only the splitter + date/title timeline shows.
 */
export function RoundedCard({ card }: { card: TimelineCard }) {
  return (
    <div className="flex w-full flex-col items-center md:w-[275px]">
      <div className="relative hidden w-[275px] md:block">
        {/* Arch with flip images */}
        <div className="group relative h-[500px] w-[275px] cursor-pointer overflow-hidden rounded-[300px]">
          <div className="preserve-3d relative h-full w-full">
            <Image
              src={card.front}
              alt={card.frontAlt}
              fill
              sizes="275px"
              className="backface-hidden absolute inset-0 object-cover transition-transform duration-700 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
            />
            <Image
              src={card.back}
              alt={card.backAlt}
              fill
              sizes="275px"
              className="backface-hidden absolute inset-0 object-cover transition-transform duration-700 [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)]"
            />
          </div>
          {/* Inner (white) number — clipped to the arch, sits over the photo */}
          <span className="pointer-events-none absolute right-[-20px] top-[412px] z-[3] font-serif text-[94px] leading-[88px] text-white">
            {card.number}
          </span>
        </div>
        {/* Outer (black) number — same position, shows below the arch on white */}
        <span className="pointer-events-none absolute right-[-20px] top-[412px] z-[1] font-serif text-[94px] leading-[88px] text-black">
          {card.number}
        </span>
      </div>

      {/* Gold→white splitter */}
      <div className="gold-splitter mt-2 h-10 w-[3px] md:mt-6" />

      {/* Date + title */}
      <div className="mt-3 text-center md:mt-4">
        <span className="block font-serif text-[14px] uppercase tracking-[4px] text-[#aaa]">
          {card.date}
        </span>
        <h3 className="mt-1 font-serif text-[28px] font-thin uppercase tracking-[2px] text-[#777] md:text-[32px]">
          {card.title}
        </h3>
      </div>
    </div>
  );
}
