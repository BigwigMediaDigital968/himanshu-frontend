import ServiceLayout1 from "../components/ServiceLayout1";
import GonadalContent from "./GonadalContent";

export const metadata = {
  title: "Gonadal Vein Disease Treatment | Dr. Himanshu Verma",
  description:
    "Specialized diagnosis and minimally invasive embolization treatment for ovarian and testicular vein reflux.",
  alternates: {
    canonical: "https://www.drhimanshuverma.com/services/gonadal-vein-disease",
  },
};

export default function GonadalVeinDisease() {
  return (
    <ServiceLayout1
      title="Gonadal Vein Disease"
      description="Comprehensive diagnosis and minimally invasive treatment for ovarian and testicular vein reflux disorders."
      active="gonadal"
    >
      <GonadalContent />
    </ServiceLayout1>
  );
}
