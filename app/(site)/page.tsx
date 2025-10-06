import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "GIHCR Education Institute - Professional HR Training & Development",
  description: "Leading education institute specializing in human resource management training, professional development programs, and HR certifications. Advance your HR career with GIHCR."
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProgramsShowcase />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
      <CTA />
      <FAQ />
    </main>
  );
}
