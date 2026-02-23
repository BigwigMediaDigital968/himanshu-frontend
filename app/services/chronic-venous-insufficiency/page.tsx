import ServiceLayout3 from "../components/ServiceLayout3";
import ChronicVenousContent from "./ChronicVenousContent";

export const metadata = {
  title: "Chronic Venous Insufficiency Treatment | Dr. Himanshu Verma",
  description:
    "Get expert care for Chronic Venous Insufficiency from Dr. Himanshu Verma. Advanced diagnosis and treatment to reduce swelling, pain, and leg ulcers.",
  keywords:
    "chronic venous insufficiency treatment Gurgaon, CVI treatment Gurgaon, Dr Himanshu Verma vein specialist, leg swelling treatment Gurgaon, venous ulcer treatment, vein doctor Gurgaon",
};

export default function ChronicVenousPage() {
  return (
    <ServiceLayout3
      title="Chronic Venous Insufficiency"
      description="Expert diagnosis and personalized treatment for leg swelling, venous ulcers, and chronic venous insufficiency."
      active="chronic"
    >
      <ChronicVenousContent />
    </ServiceLayout3>
  );
}
