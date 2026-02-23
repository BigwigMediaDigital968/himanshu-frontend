"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function GonadalContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How is Gonadal Vein Disease diagnosed?",
      a: "Diagnosis is confirmed through Doppler ultrasound, CT venography, MRI venography, or catheter venography to assess vein dilation and reflux.",
    },
    {
      q: "What causes Gonadal Vein Disease?",
      a: "It is caused by malfunctioning ovarian or testicular veins that allow blood to flow backward (venous reflux), leading to vein enlargement and chronic pelvic pain.",
    },
    {
      q: "Is embolization safe and effective?",
      a: "Yes, embolization is a minimally invasive and highly effective treatment performed under local anesthesia with quick recovery and long-lasting symptom relief.",
    },
    {
      q: "Can Gonadal Vein Disease cause chronic pelvic pain?",
      a: "Yes, it is one of the major causes of chronic pelvic pain, especially in women with pelvic congestion syndrome.",
    },
  ];

  return (
    <>
      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Gonadal Vein Disease
      </h2>

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is Gonadal Vein Disease?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Gonadal vein disease involves abnormal functioning of the gonadal
          veins — ovarian veins in women and testicular veins in men. When these
          veins become dilated and fail to return blood efficiently to the
          heart, venous reflux occurs.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This condition is a major contributor to chronic pelvic pain and is
          commonly associated with Pelvic Congestion Syndrome (PCS), where blood
          pools in the pelvic region instead of flowing properly.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Symptoms
        </h3>

        <ul className="space-y-3">
          {[
            "Chronic dull ache in the pelvis",
            "Pain that worsens during the day, especially with prolonged standing",
            "Visible varicose veins in the genital or pelvic area",
            "Discomfort during menstruation or intercourse",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* DIAGNOSIS & TREATMENT */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Diagnosis & Treatment
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Diagnosis involves imaging tests such as ultrasound, CT venography,
          MRI venography, or catheter venography to identify abnormal vein
          dilation and reflux.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Treatment typically involves minimally invasive embolization. During
          this procedure, faulty veins are sealed using coils or medical-grade
          embolic agents, restoring proper blood flow and relieving symptoms.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ SECTION */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          FAQs
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;

            return (
              <div
                key={i}
                className="border border-[var(--med-border)] rounded-2xl overflow-hidden bg-[var(--med-light)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
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

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule an Appointment"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
