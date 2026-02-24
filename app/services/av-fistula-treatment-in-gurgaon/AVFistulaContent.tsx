"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function AVFistulaContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why is AV fistula preferred for dialysis?",
      a: "AV fistula provides better blood flow, lower infection risk, and longer durability compared to grafts or catheters.",
    },
    {
      q: "How long does it take for an AV fistula to mature?",
      a: "It usually takes 4–8 weeks for the fistula to mature before it can be used for dialysis.",
    },
    {
      q: "Are there risks involved?",
      a: "Minor risks exist as with any surgery, but AV fistula has significantly fewer complications compared to other dialysis access methods.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        AV Fistula
      </h2>

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is an AV Fistula?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          An Arteriovenous (AV) Fistula is a surgically created connection
          between an artery and a vein, usually in the arm, to allow efficient
          blood flow for hemodialysis.
        </p>
        <p className="text-gray-700 leading-relaxed">
          It is considered the gold standard for long-term dialysis access due
          to better durability and lower infection risk.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* BENEFITS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Benefits of AV Fistula
        </h3>
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
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[var(--med-primary)]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
