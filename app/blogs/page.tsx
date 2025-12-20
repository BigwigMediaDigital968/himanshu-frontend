"use client";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileText } from "lucide-react";
import ButtonFill from "../components/Button";
import FloatingContactActions from "../components/ContactActions";

export default function Blog() {
  const [openPopup, setOpenPopup] = useState(false);

  // INITIALIZE AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <Nav />

      {/* HERO SECTION */}
      <section className="py-16 bg-[#64bab4] rounded-r-full">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
            Medical Knowledge & Awareness
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            Blogs & Health Insights
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Expert articles, medical insights, and patient awareness content
            focused on vascular and endovascular health.
          </p>
        </div>
      </section>

      {/* EMPTY BLOG STATE */}
      <section className="py-24 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <div
            className="
              max-w-xl mx-auto
              bg-[var(--med-light)]
              border border-[var(--med-border)]
              rounded-3xl p-12
            "
            data-aos="fade-up"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center">
              <FileText size={28} className="text-[var(--med-primary)]" />
            </div>

            <h2 className="text-2xl font-semibold text-[var(--med-text)] mb-4">
              No Blogs Available Yet
            </h2>

            <p className="text-[var(--med-text)]/70 leading-relaxed mb-8">
              We are currently working on informative articles and medical
              insights to help you better understand vascular and endovascular
              health. Please check back soon.
            </p>

            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Book Consultation"
            />
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
      <FloatingContactActions />
    </div>
  );
}
