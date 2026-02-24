"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function PelvicContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How are pelvic venous disorders diagnosed?",
      a: "Through physical exams and imaging tests such as ultrasound, CT scan, MRI, or venography.",
    },
    {
      q: "What causes pelvic venous disorders?",
      a: "They are caused by weakened veins, hormonal changes, genetics, or prolonged pressure on pelvic veins.",
    },
    {
      q: "Can pelvic venous disorders be prevented?",
      a: "Maintaining a healthy lifestyle, regular exercise, and avoiding prolonged sitting or standing can help reduce risk.",
    },
    {
      q: "Are pelvic venous disorders painful?",
      a: "Yes, symptoms can range from mild discomfort to severe pelvic pain, especially after standing for long periods.",
    },
    {
      q: "Is treatment for pelvic venous disorders effective?",
      a: "Yes, with early diagnosis and proper intervention, patients experience significant symptom relief and improved quality of life.",
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Pelvic Venous Disorders
      </h2>

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What are Pelvic Venous Disorders?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Pelvic venous disorders are conditions caused by malfunctioning veins
          in the pelvic area, often leading to chronic pain and discomfort. One
          of the most common types is Pelvic Congestion Syndrome (PCS), which
          occurs when veins in the pelvis become dilated and fail to efficiently
          return blood to the heart.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Pelvic venous disorders are more commonly seen in women, especially
          those experiencing chronic pelvic pain. Early consultation with a
          specialist can help manage symptoms and prevent complications.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Symptoms of Pelvic Venous Disorders
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Recognizing the signs of pelvic venous disorders is crucial for timely
          intervention. Common symptoms include:
        </p>

        <ul className="space-y-3">
          {[
            "Persistent pelvic pain that worsens after standing or sitting for long periods",
            "Swelling in the pelvic area",
            "Visible varicose veins in the lower abdomen, buttocks, or thighs",
            "Pain during or after sexual activity",
            "Heaviness or pressure in the pelvis",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Many individuals with pelvic venous disorders also experience fatigue
          or discomfort that affects daily activities.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* DIAGNOSIS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          How Do I Know If I Have Pelvic Venous Disorders?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Diagnosis involves a thorough evaluation and specialized imaging to
          confirm pelvic venous disorders or PCS.
        </p>

        <ul className="space-y-3">
          {[
            "Medical history and physical examination",
            "Ultrasound to check for vein dilation",
            "CT or MRI scans for detailed views",
            "Venography to confirm abnormal vein patterns",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          How is Pelvic Venous Disorders Treated?
        </h3>

        <ul className="space-y-3">
          {[
            "Lifestyle and supportive care including exercise and avoiding prolonged sitting",
            "Minimally invasive embolization procedures",
            "Surgical intervention in rare severe cases",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
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
