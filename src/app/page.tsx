import { Navigation } from "@/components/Navigation";
import { SlideshowBackground } from "@/components/SlideshowBackground";
import { HomeHeader } from "@/components/HomeHeader";
import { CountdownSection } from "@/components/CountdownSection";
import { SaveTheDate } from "@/components/SaveTheDate";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { OurStorySection } from "@/components/OurStorySection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Fixed gray hero background behind the transparent hero + countdown */}
      <SlideshowBackground />
      <main className="relative">
        <HomeHeader />
        <CountdownSection />
        <SaveTheDate />
        <HorizontalScrollSection />
        <OurStorySection />
        <SiteFooter />
      </main>
    </>
  );
}
