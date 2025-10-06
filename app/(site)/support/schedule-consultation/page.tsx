import { Metadata } from "next";
import ScheduleConsultation from "@/components/Support/ScheduleConsultation";

export const metadata: Metadata = {
  title: "Schedule Consultation - Global Institute of Human Capital and Resources | GIHCR",
  description: "Schedule a free consultation with our education advisors. Get personalized guidance for your HR career development and program selection.",
  keywords: "consultation, education advisor, HR programs, career guidance, schedule meeting",
};

export default function ScheduleConsultationPage() {
  return (
    <>
      <ScheduleConsultation />
    </>
  );
}