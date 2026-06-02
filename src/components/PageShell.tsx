import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";

/** Wrapper comum a todas as páginas internas */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-[140px]">{children}</main>
      <SiteFooter />
    </>
  );
}
