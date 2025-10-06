import { Metadata } from "next";
import { Suspense } from "react";
import EnrollmentFlow from "@/components/Enrollment/EnrollmentFlow";

export const metadata: Metadata = {
  title: "Enrollment - Global Institute of Human Capital and Resources | GIHCR",
  description: "Complete your enrollment for GIHCR's HR programs. Simple, secure, and guided enrollment process with multiple payment options.",
  keywords: "enrollment, HR program enrollment, GIHCR registration, apply now, HR education",
};

function EnrollmentLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  );
}

export default function EnrollmentPage() {
  return (
    <main>
      <Suspense fallback={<EnrollmentLoading />}>
        <EnrollmentFlow />
      </Suspense>
    </main>
  );
}