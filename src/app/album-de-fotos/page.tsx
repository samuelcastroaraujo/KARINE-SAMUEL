import { PageShell } from "@/components/PageShell";

// Layout de grade com quadrados (sem fotos reais)
const TOTAL = 48;

export default function AlbumPage() {
  return (
    <PageShell>
      <section className="min-h-screen bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-3 text-center font-serif text-[40px] font-extralight uppercase tracking-[4px] text-black md:text-[56px]">
            Álbum de Fotos
          </h1>
          <p className="mb-12 text-center font-script text-[28px] text-[#777]">
            pré-wedding
          </p>

          {/* Masonry-style grid */}
          <div className="columns-2 gap-3 sm:columns-3 md:columns-4">
            {Array.from({ length: TOTAL }).map((_, i) => {
              // Vary heights for masonry feel
              const tall = i % 5 === 0 || i % 7 === 0;
              return (
                <div
                  key={i}
                  className={`mb-3 w-full break-inside-avoid rounded-sm bg-[#e0e0e0] ${tall ? "aspect-[3/4]" : "aspect-square"}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
