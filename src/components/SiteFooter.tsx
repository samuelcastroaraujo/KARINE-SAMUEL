import Image from "next/image";

export function SiteFooter() {
  return (
    <>
      <section className="flex items-center justify-center border-t border-black bg-white py-8">
        <Image src="/logo.png" alt="Karine & Samuel" width={55} height={80} className="h-[80px] w-auto" />
      </section>
      <footer className="bg-black py-3 text-center">
        <span className="font-sans text-[11px] uppercase tracking-[2px] text-white">
          Developed by Gabriel Max &amp; Ana Amábilly
        </span>
      </footer>
    </>
  );
}
