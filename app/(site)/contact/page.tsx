import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - GIHCR Education Institute",
  description: "Get in touch with our admissions team for personalized guidance and program recommendations. Contact GIHCR Education Institute to start your HR career journey today.",
  keywords: "contact, admissions, HR education, career guidance, GIHCR, human resources programs, education consultation",
  openGraph: {
    title: "Contact Us - GIHCR Education Institute",
    description: "Get in touch with our admissions team for personalized guidance and program recommendations.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}