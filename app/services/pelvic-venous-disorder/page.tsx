import ServiceLayout from "../components/ServiceLayout1";
import PelvicContent from "./PelvicContent";

export const metadata = {
  title: "Pelvic Venous Disorders Treatment | Dr. Himanshu Verma",
  description:
    "Get expert care for pelvic venous disorders and PCS from Dr. Himanshu Verma. Advanced diagnosis and minimally invasive treatment for pelvic pain relief.",
  keywords:
    "pelvic venous disorders treatment, pelvic congestion syndrome treatment, PCS treatment Gurgaon, pelvic vein embolization, pelvic pain vascular specialist, Dr. Himanshu Verma",
  alternates: {
    canonical:
      "https://www.drhimanshuverma.com/services/pelvic-venous-disorder",
  },
};

export default function PelvicVenousDisorder() {
  return (
    <ServiceLayout
      title="Pelvic Venous Disorders"
      description="Advanced diagnosis and treatment of pelvic congestion syndrome and pelvic venous disorders."
      active="pelvic"
    >
      <PelvicContent />
    </ServiceLayout>
  );
}
