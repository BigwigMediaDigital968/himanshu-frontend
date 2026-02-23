import ServiceLayout2 from "../components/ServiceLayout2";
import DialysisAccessContent from "./DialysisAccessContent";

export const metadata = {
  title: "Dialysis Access Surgery | Dr. Himanshu Verma",
  description:
    "Comprehensive dialysis access solutions including AV fistula, graft, and catheter care.",
};

export default function DialysisAccessPage() {
  return (
    <ServiceLayout2
      title="Dialysis Access"
      description="Safe and reliable vascular access solutions for dialysis patients."
      active="dialysisaccess"
    >
      <DialysisAccessContent />
    </ServiceLayout2>
  );
}
