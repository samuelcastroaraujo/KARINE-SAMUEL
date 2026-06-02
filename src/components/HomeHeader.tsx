/**
 * Hero — full-viewport, transparent (sits over the fixed gray slideshow).
 * Title "AMÁBILLY & GABRIEL" (freight-big-pro), script subtitle, date, location.
 */
export function HomeHeader() {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center px-8 text-center text-white">
      <div className="flex flex-col items-center gap-1">
        <h1 className="m-0 mb-3 pb-3 font-serif font-extralight uppercase leading-none text-white">
          <span className="text-[58px] tracking-[6px] sm:text-[74px] md:text-[96px]">
            Karine
          </span>
          <span className="px-3 text-[58px] sm:text-[74px] md:text-[96px]">&amp;</span>
          <span className="inline-block pl-2.5 text-[58px] tracking-[6px] sm:text-[74px] md:text-[96px]">
            Samuel
          </span>
        </h1>

        <div className="h-px w-20 bg-white/80" />

        <h2 className="mt-3 font-script text-[40px] font-light leading-[54px] text-white sm:text-[50px] md:text-[60px]">
          nas ditas linhas em que nos encontramos
        </h2>

        <span className="pt-1 font-serif text-[18px] uppercase tracking-[2px] text-white">
          29 de agosto de 2026
        </span>
        <span className="pt-1 font-serif text-[18px] uppercase tracking-[2px] text-white">
          Anápolis <span className="px-2">–</span> GO
        </span>
      </div>
    </header>
  );
}
