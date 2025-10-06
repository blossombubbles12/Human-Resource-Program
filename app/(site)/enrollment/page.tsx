import { Metadata } from "next";
import EnrollmentFlow from "@/components/Enrollment/EnrollmentFlow";

export const metadata: Metadata = {
  title: "Enrollment - Global Institute of Human Capital and Resources | GIHCR",
  description: "Complete your enrollment for GIHCR's HR programs. Simple, secure, and guided enrollment process with multiple payment options.",
  keywords: "enrollment, HR program enrollment, GIHCR registration, apply now, HR education",
};

export default function EnrollmentPage() {
  return (
    <main>
      <EnrollmentFlow />
    </main>
  );
}