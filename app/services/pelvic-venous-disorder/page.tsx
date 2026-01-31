"use client";

import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import FinalCTA from "../../components/CTA";
import FloatingContactActions from "../../components/ContactActions";
import ButtonFill from "../../components/Button";

export default function PelvicVenousDisorder() {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <title>
        Pelvic Venous Disorders & Gonadal Vein Disease | Dr. Himanshu Verma
      </title>
      <meta
        name="title"
        content="Pelvic Venous Disorders & Gonadal Vein Disease | Dr. Himanshu Verma"
      />
      <meta
        name="description"
        content="Advanced diagnosis and treatment of pelvic congestion syndrome and gonadal vein disorders causing chronic pelvic pain. Expert care by Dr. Himanshu Verma."
      />
      <link
        rel="canonical"
        href="https://www.drhimanshuverma.com/services/pelvic-venous-disorder"
      />

      <div className="bg-[var(--med-light)]">
        <Nav />

        {/* HERO / INTRO */}
        <section className="py-16 bg-[#64bab4] rounded-b-3xl md:rounded-r-full md:rounded-bl-none">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
              Specialized Service
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pelvic Venous Disorders & Gonadal Vein Disease
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Advanced diagnosis and treatment of pelvic congestion syndrome and
              gonadal vein disorders causing chronic pelvic pain. We offer
              comprehensive management using minimally invasive techniques.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="w-11/12 md:w-4/6 mx-auto">
            <div
              data-aos="fade-up"
              className="relative bg-white rounded-3xl p-8 md:p-10 border border-[var(--med-border)] shadow-lg"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--med-primary)] mb-4">
                  What We Treat
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pelvic venous disorders can cause significant discomfort and
                  pain. Our specialized approach ensures accurate diagnosis and
                  effective treatment for conditions related to pelvic and
                  gonadal vein reflux.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Pelvic Congestion Syndrome (PCS) due to pelvic venous reflux",
                  "Vulval, vaginal, and perineal varicosities",
                  "Male varicocele related to gonadal vein reflux",
                  "Integrated management of pelvic and lower-limb venous reflux",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--med-light)] text-gray-700 border border-transparent hover:border-[var(--med-primary)] transition"
                  >
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--med-primary)] text-white text-xs font-bold shadow-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
                <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-4">
                  Advanced Treatments
                </h3>
                <p className="mb-4 text-gray-700">
                  We utilize image-guided, minimally invasive endovascular
                  treatments including:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Pelvic vein embolization / coiling",
                    "Gonadal (ovarian and testicular) vein embolization",
                  ].map((sub, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-800 font-medium">
                      <span className="h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Book an Appointment"
                />
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
        <FloatingContactActions />
      </div>
    </>
  );
}
