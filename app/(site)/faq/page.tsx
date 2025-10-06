import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - GIHCR Education Institute",
  description: "Get answers to common questions about GIHCR HR programs, admissions, tuition, career support, and certification. Find everything you need to know about our Human Resources education programs.",
  keywords: "FAQ, frequently asked questions, HR education, GIHCR admissions, certification, tuition, career support, human resources programs",
  openGraph: {
    title: "Frequently Asked Questions - GIHCR Education Institute",
    description: "Get answers to common questions about GIHCR HR programs, admissions, tuition, career support, and certification.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
    </>
  );
}