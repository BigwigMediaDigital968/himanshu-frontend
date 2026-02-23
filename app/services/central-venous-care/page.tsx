import ServiceLayout2 from "../components/ServiceLayout2";
import CentralVenousContent from "./CentralVenousContent";

export const metadata = {
  title: "Central Venous Catheter Treatment | Dr. Himanshu Verma",
  description:
    "Expert central venous catheter placement and vein care by Dr. Himanshu Verma. Safe PICC lines, ports & angioplasty for long-term vascular access.",
  keywords:
    "central venous catheter treatment, central line placement Gurgaon, PICC line insertion, chemo port placement, dialysis catheter specialist, Dr. Himanshu Verma vascular surgeon",
};

export default function CentralVenousCarePage() {
  return (
    <ServiceLayout2
      title="Central Venous Care"
      description="Advanced central line placement and vascular intervention treatments."
      active="venouscare"
    >
      <CentralVenousContent />
    </ServiceLayout2>
  );
}
