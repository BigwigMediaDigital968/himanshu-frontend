import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import TermsOfUse from "./TermsOfUse";

export const metadata = {
  title: "Terms and Conditions | Dr. Himanshu Verma",
  description: "Terms and conditions for using Dr. Himanshu Verma's website and booking consultations for vascular & endovascular care.",
  alternates: {
    canonical: "https://www.drhimanshuverma.com/terms-and-conditions",
  },
};

export default function TermsAndCondition() {
  return (
    <>
      <Nav />
      <TermsOfUse />
      <Footer />
    </>
  );
}
