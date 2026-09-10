import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | Dr. Himanshu Verma",
  description:
    "Privacy policy of Dr. Himanshu Verma's website - how patient information is collected, used and protected.",
  alternates: {
    canonical: "https://www.drhimanshuverma.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <PrivacyContent />
      <Footer />
    </>
  );
}
