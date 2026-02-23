import ServiceLayout2 from "../components/ServiceLayout2";
import AVFistulaContent from "./AVFistulaContent";

export const metadata = {
  title: "AV Fistula Surgery | Dr. Himanshu Verma",
  description:
    "Expert AV fistula creation for safe and long-term dialysis access.",
};

export default function AVFistulaPage() {
  return (
    <ServiceLayout2
      title="AV Fistula"
      description="Gold standard vascular access for safe and long-term dialysis."
      active="avfistula"
    >
      <AVFistulaContent />
    </ServiceLayout2>
  );
}
