import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import Faq from "@/components/Faq";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import SponsorInterest from "@/components/SponsorInterest";
import { landingFaq, site } from "@/lib/content";

// The page is just the sections in order. Reorder or remove lines to change the page.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {site.showFullSite ? (
          // Full site (turn on with site.showFullSite in lib/content.ts)
          <>
            <Hero />
            <Stats />
            <About />
            <Tracks />
            <Schedule />
            <Faq />
            <Sponsors />
            <Team />
          </>
        ) : (
          // Simple landing page (MLH "placeholder website"): name, About, buttons,
          // date, AmStat UCF logo, a short FAQ, and a way for sponsors to reach us
          <>
            <Landing />
            <Faq items={landingFaq} eyebrow="FAQ" />
            <SponsorInterest />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
