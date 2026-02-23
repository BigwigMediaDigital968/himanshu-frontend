import ServiceLayout3 from "../components/ServiceLayout3";
import VaricoseVeinsContent from "./VaricoseVeinsContent";

export const metadata = {
  title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment by Dr. Himanshu Verma. Get expert diagnosis and minimally invasive care for lasting vein relief.",
  keywords:
    "varicose veins treatment in Gurgaon, varicose vein specialist in Gurgaon, Dr Himanshu Verma vascular surgeon, EVLT treatment for varicose veins, foam sclerotherapy treatment, medical glue varicose veins treatment, spider veins treatment Gurgaon, leg vein specialist Gurgaon, minimally invasive varicose veins treatment, chronic venous insufficiency treatment, best varicose veins doctor in Gurgaon",
};

export default function VaricoseVeinsPage() {
  return (
    <ServiceLayout3
      title="Varicose Veins Treatment"
      description="Advanced diagnosis and minimally invasive treatment options for varicose veins, spider veins, and chronic venous disorders."
      active="varicose"
    >
      <VaricoseVeinsContent />
    </ServiceLayout3>
  );
}
