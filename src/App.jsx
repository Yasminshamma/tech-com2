import { useLegacySite } from "./hooks/useLegacySite.js";
import { SiteHeader, ProgressRail, SkipLink } from "./components/chrome/SiteChrome.jsx";
import {
  AboutSection,
  AutomateSection,
  BuildSection,
  ContactSection,
  CreateSection,
  HeroSection,
  LearnSection,
  JourneyRibbon,
} from "./components/sections/index.jsx";

export default function App() {
  useLegacySite();

  return (
    <>
      <SkipLink />
      <SiteHeader />
      <ProgressRail />
      <main id="main">
        <JourneyRibbon />
        <HeroSection />
        <BuildSection />
        <AutomateSection />
        <LearnSection />
        <CreateSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
