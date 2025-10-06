import { Metadata } from "next";
import { Suspense } from "react";
import ScheduleConsultation from "@/components/Support/ScheduleConsultation";

export const metadata: Metadata = {
  title: "Schedule Consultation - Global Institute of Human Capital and Resources | GIHCR",
  description: "Schedule a free consultation with our education advisors. Get personalized guidance for your HR career development and program selection.",
  keywords: "consultation, education advisor, HR programs, career guidance, schedule meeting",
};

function ConsultationLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  );
}

export default function ScheduleConsultationPage() {
  return (
    <>
      <Suspense fallback={<ConsultationLoading />}>
        <ScheduleConsultation />
      </Suspense>
    </>
  );
}