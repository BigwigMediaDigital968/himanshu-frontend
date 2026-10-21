import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import ThankYouContent from "./ThankYouContent";

export const metadata = {
  title: "Thank You | Dr. Himanshu Verma",
  description: "Your appointment request has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <ThankYouContent />
      <Footer />
    </>
  );
}
