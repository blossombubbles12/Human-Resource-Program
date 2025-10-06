import { Metadata } from "next";
import AboutHero from "@/components/About/AboutHero";
import AboutMission from "@/components/About/AboutMission";
import AboutStats from "@/components/About/AboutStats";
import AboutTeam from "@/components/About/AboutTeam";
import AboutValues from "@/components/About/AboutValues";
import AboutHistory from "@/components/About/AboutHistory";
import AboutAccreditation from "@/components/About/AboutAccreditation";
import AboutCTA from "@/components/About/AboutCTA";

export const metadata: Metadata = {
  title: "About GIHCR - Global Institute of Human Capital and Resources",
  description: "Learn about GIHCR's mission to advance human capital development through world-class education, research, and professional development programs.",
  keywords: "GIHCR, human resources education, HR institute, professional development, global education",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
      <AboutAccreditation />
      <AboutCTA />
    </main>
  );
}