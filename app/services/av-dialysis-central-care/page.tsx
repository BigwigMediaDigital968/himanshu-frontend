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
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DialysisServicesPage() {
  const [openPopup, setOpenPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "avFistula" | "dialysisAccess" | "centralVenous"
  >("avFistula");

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contentData = {
    avFistula: {
      title: "AV Fistula",
      sections: [
        {
          heading: "What is an AV Fistula?",
          content: (
            <>
              <p className="mb-4 text-gray-700 leading-relaxed">
                An {" "}
                <Link href="/services/av-fistula-treatment-in-gurgaon" className="text-blue-500 hover:underline">
                Arteriovenous (AV) Fistula
                </Link> is a surgically created connection
                between an artery and a vein, usually in the arm, to allow
                efficient blood flow for hemodialysis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is considered the gold standard for long-term dialysis access
                due to better durability and lower infection risk.
              </p>
            </>
          ),
        },
        {
          heading: "Benefits of AV Fistula",
          content: (
            <ul className="space-y-3">
              {[
                "Lower risk of infection",
                "Better blood flow for dialysis",
                "Long-lasting access option",
                "Fewer complications compared to catheters",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
      ],
    },

    dialysisAccess: {
      title: "Dialysis Access",
      sections: [
        {
          heading: "Understanding Dialysis Access",
          content: (
            <>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Dialysis access is essential for patients undergoing kidney
                dialysis. Proper access ensures safe and effective removal of
                waste and excess fluids from the blood.
              </p>
            </>
          ),
        },
        {
          heading: "Types of Dialysis Access",
          content: (
            <ul className="space-y-3">
              {[
                "AV Fistula (preferred method)",
                "AV Graft",
                "Central Venous Catheter",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
      ],
    },

    centralVenous: {
      title: "Central Venous Care",
      sections: [
        {
          heading:
            "Central Venous Care: Expert Treatment for Better Vascular Health",
          content: (
            <>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If your doctor has advised you to get a central venous catheter,
                you may be confused about what this means and why it is
                necessary. In simple terms, central venous access allows you to
                receive longer-term, safer treatment compared to standard IV
                access.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This guide explains everything you need to know about Central
                Venous Catheters so you can feel confident about your treatment.
              </p>
            </>
          ),
        },

        {
          heading: "What is a Central Venous Catheter?",
          content: (
            <>
              <p className="mb-4 text-gray-700 leading-relaxed">
                A central venous catheter (central line) is a long, thin tube
                inserted into a large vein near your heart (neck, chest, or
                groin). It allows doctors to deliver medications and treatments
                safely.
              </p>

              <ul className="space-y-3">
                {[
                  "Delivering high-dosage medications safely",
                  "Administering long-term IV therapy",
                  "Obtaining blood samples without repeated needle sticks",
                  "Providing total parenteral nutrition (TPN)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Unlike standard IVs, central lines are placed deeper and are
                designed for long-term use.
              </p>
            </>
          ),
        },

        {
          heading: "Central Venous Catheter vs Peripheral IV",
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[var(--med-primary)] mb-2">
                  Peripheral IV
                </h4>
                <ul className="space-y-2">
                  {[
                    "Inserted into small veins in the hand or arm",
                    "Used for short-term treatment (hours to days)",
                    "Suitable for fluids and standard medications",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--med-primary)] mb-2">
                  Central Venous Catheter
                </h4>
                <ul className="space-y-2">
                  {[
                    "Placed in large veins near the heart",
                    "Used for long-term care (weeks to years)",
                    "Allows strong medications & multiple infusions",
                    "Reduces repeated needle sticks",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        },

        {
          heading: "Who Needs a Central Line?",
          content: (
            <>
              <ul className="space-y-3">
                {[
                  "Cancer patients receiving chemotherapy",
                  "Patients needing long-term IV antibiotics",
                  "Individuals requiring total parenteral nutrition (TPN)",
                  "Dialysis patients with kidney disease",
                  "Patients with poor or damaged veins",
                  "Those needing frequent blood tests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-[var(--med-light)] p-6 rounded-2xl border border-[var(--med-border)]">
                <p className="font-medium text-[var(--med-primary)] mb-3">
                  Unsure whether you need central venous care?
                </p>
                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Book a Consultation"
                />
              </div>
            </>
          ),
        },

        {
          heading: "Types of Central Venous Catheters",
          content: (
            <ul className="space-y-4">
              {[
                "PICC Line – Inserted in upper arm, ideal for weeks to months",
                "Tunneled Catheter – Threaded under skin, commonly used for dialysis",
                "Implanted Port – Fully under the skin, preferred for chemotherapy",
                "Non-Tunneled Catheter – Temporary hospital-based solution",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          ),
        },

        {
          heading: "Advanced Central Venous Treatments We Offer",
          content: (
            <>
              <h4 className="font-semibold text-[var(--med-primary)] mb-3">
                Central Venous Angioplasty
              </h4>
              <ul className="space-y-2 mb-6">
                {[
                  "Balloon gently opens narrowed veins",
                  "Restores normal blood flow",
                  "Minimally invasive with quick recovery",
                  "Helpful for dialysis patients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-[var(--med-primary)] mb-3">
                Central Venous Occlusion Recanalization
              </h4>
              <ul className="space-y-2">
                {[
                  "Reopens blocked central veins",
                  "Reduces swelling and discomfort",
                  "Restores dialysis or catheter access",
                  "Improves overall quality of life",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-[var(--med-light)] p-6 rounded-2xl border border-[var(--med-border)]">
                <p className="font-medium text-[var(--med-primary)] mb-3">
                  Feeling swelling in your arm or puffiness in your face?
                </p>
                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Contact Our Clinic"
                />
              </div>
            </>
          ),
        },

        {
          heading: "FAQs",
          isFaq: true,
          faqs: [
            {
              q: "How do you care for a central venous line?",
              a: "Keep the site clean and dry, wash hands before touching it, change dressings on time, and flush as directed. Report redness, swelling, or fever immediately.",
            },
            {
              q: "How long can a central line stay in place?",
              a: "Non-tunneled lines last days to weeks. PICC lines last weeks to months. Tunneled catheters and ports can remain for years with proper care.",
            },
            {
              q: "Is central line insertion painful?",
              a: "Local anesthesia prevents sharp pain. Mild soreness afterward is normal and temporary.",
            },
            {
              q: "What are signs of infection?",
              a: "Fever, chills, redness, swelling, warmth, or discharge at the site require immediate medical attention.",
            },
          ],
        },
      ],
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const activeContent = contentData[activeTab];

  return (
    <>
      <title>
        AV Fistula, Dialysis Access & Central Venous Care | Dr. Himanshu Verma
      </title>

      <div className="bg-[var(--med-light)]">
        <Nav />

        {/* HERO */}
        <section className="py-16 bg-[#64bab4] rounded-b-3xl md:rounded-r-full md:rounded-bl-none">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <p className="text-sm font-semibold tracking-widest text-white/80 mb-4 uppercase">
              Specialized Service
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AV Fistula, Dialysis Access & Central Venous Care
            </h1>

            <p className="text-white/80 text-lg max-w-3xl">
              Comprehensive vascular access solutions for dialysis patients,
              ensuring safety, longevity, and optimal treatment outcomes.
            </p>
          </div>
        </section>

        {/* MAIN */}
        <section className="py-16">
          <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-6">
                  Select Service
                </h3>

                {[
                  { key: "avFistula", label: "AV Fistula" },
                  { key: "dialysisAccess", label: "Dialysis Access" },
                  { key: "centralVenous", label: "Central Venous Care" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key as typeof activeTab)}
                    className={`w-full text-left px-5 py-4 rounded-xl mb-3 flex justify-between ${
                      activeTab === item.key
                        ? "bg-[var(--med-primary)] text-white"
                        : "bg-[var(--med-light)] text-gray-700"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.key && <ChevronRight size={18} />}
                  </button>
                ))}

                <div className="mt-8">
                  <ButtonFill
                    onClick={() => setOpenPopup(true)}
                    text="Book Consultation"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="lg:col-span-8">
              <div
                key={activeTab}
                data-aos="fade-up"
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-[var(--med-primary)] mb-8">
                  {activeContent.title}
                </h2>

                <div className="space-y-10">
                  {activeContent.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold mb-4">
                        {section.heading}
                      </h3>
                      {"isFaq" in section && section.isFaq ? (
                        <div className="space-y-4">
                          {section.faqs.map((faq, fIdx) => {
                            const isOpen = openFaqIndex === fIdx;

                            return (
                              <div
                                key={fIdx}
                                className="border border-[var(--med-border)] rounded-2xl overflow-hidden bg-[var(--med-light)]"
                              >
                                {/* QUESTION */}
                                <button
                                  type="button"
                                  onClick={() =>
                                    setOpenFaqIndex(isOpen ? null : fIdx)
                                  }
                                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >
                                  <span className="font-semibold text-[var(--med-primary)] text-lg">
                                    {faq.q}
                                  </span>

                                  <ChevronDown
                                    size={22}
                                    className={`text-[var(--med-primary)] transition-transform duration-300 ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {/* ANSWER */}
                                <div
                                  className={`px-6 overflow-hidden transition-all duration-300 ${
                                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                                  }`}
                                >
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        section.content
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <ButtonFill
                    onClick={() => setOpenPopup(true)}
                    text="Schedule an Appointment"
                  />
                </div>
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
