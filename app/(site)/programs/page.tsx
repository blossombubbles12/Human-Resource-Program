import { Metadata } from "next";
import ProgramsHero from "@/components/Programs/ProgramsHero";
import ProgramsFilter from "@/components/Programs/ProgramsFilter";
import ProgramsList from "@/components/Programs/ProgramsList";
import ProgramsCTA from "@/components/Programs/ProgramsCTA";

export const metadata: Metadata = {
  title: "HR Programs - Global Institute of Human Capital and Resources | GIHCR",
  description: "Discover GIHCR's comprehensive HR education programs. From certificates to master's degrees, find the perfect program to advance your human resources career.",
  keywords: "HR programs, human resources education, HR certification, HR diploma, HR master's degree, professional development",
};

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
      <ProgramsFilter />
      <ProgramsList />
      <ProgramsCTA />
    </main>
  );
}