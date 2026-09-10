import { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import MedicalDisclaimer from "./MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Dr. Himanshu Verma, Vascular Surgeon",
  description:
    "Medical disclaimer for content on Dr. Himanshu Verma's website. Information is educational and not a substitute for professional medical advice.",
  keywords: [
    "medical disclaimer",
    "disclaimer",
    "medical advice",
    "health information",
    "Dr. Himanshu Verma",
  ],
  alternates: {
    canonical: "https://www.drhimanshuverma.com/medical-disclaimer",
  },

  openGraph: {
    title: "Medical Disclaimer | Dr. Himanshu Verma, Vascular Surgeon",
    description:
      "Medical disclaimer for content on Dr. Himanshu Verma's website. Information is educational and not a substitute for professional medical advice.",
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <Nav />
      <MedicalDisclaimer />
      <Footer />
    </>
  );
}
