"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGES = ["/banner/03.jpg", "/banner/02.jpg"];

/**
 * Fixed full-viewport hero background: crossfading banner photos with a
 * black 42.5% overlay (matches `imagesContainer::after { background:#000; opacity:.425 }`).
 * Sits behind the hero + countdown (transparent sections) at z-index -5.
 */
export function SlideshowBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden">
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="The day we met"
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-[2000ms] ease-in-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-[0.425]" />
    </div>
  );
}
