import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import EditorialPolicy from "./EditorialPolicy";

export const metadata = {
  title: "Editorial Policy | Dr. Himanshu Verma",
  description:
    "Editorial policy explaining how medical content on this site is researched, written and reviewed by Dr. Himanshu Verma and his clinical team.",
  alternates: {
    canonical: "https://www.drhimanshuverma.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Nav />
      <EditorialPolicy />
      <Footer />
    </>
  );
}
