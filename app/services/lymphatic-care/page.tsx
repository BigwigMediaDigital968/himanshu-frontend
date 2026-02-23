import ServiceLayout3 from "../components/ServiceLayout3";
import LymphaticCareContent from "./LymphaticCareContent";

export const metadata = {
  title: "Lymphatic Care & Lymphedema Treatment | Dr. Himanshu Verma",
  description:
    "Specialized lymphatic care and lymphedema treatment to manage chronic swelling and improve circulation. Advanced vascular expertise by Dr. Himanshu Verma.",
};

export default function LymphaticCarePage() {
  return (
    <ServiceLayout3
      title="Lymphatic Care"
      description="Comprehensive care for lymphedema and lymphatic disorders to reduce swelling and improve long-term limb health."
      active="lymphatic"
    >
      <LymphaticCareContent />
    </ServiceLayout3>
  );
}
