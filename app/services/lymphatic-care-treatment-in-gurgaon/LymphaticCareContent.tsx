"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function LymphaticCareContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is lymphedema?",
      a: "Lymphedema is swelling caused by blockage in the lymphatic system.",
    },
    {
      q: "Can it be treated?",
      a: "While it may not be fully cured, early intervention significantly improves symptoms.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Lymphatic Care
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Lymphatic disorders result in chronic swelling due to impaired lymph
        drainage. Early diagnosis helps prevent permanent tissue damage.
      </p>

      <ul className="space-y-3 mb-10">
        {[
          "Persistent limb swelling",
          "Heaviness or tightness",
          "Skin thickening",
          "Frequent infections",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <div className="h-px bg-gray-100 mb-10" />

      <h3 className="text-xl md:text-2xl font-semibold mb-6">FAQs</h3>

      {faqs.map((faq, i) => {
        const isOpen = openFaqIndex === i;

        return (
          <div
            key={i}
            className="mb-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] overflow-hidden"
          >
            <button
              onClick={() => setOpenFaqIndex(isOpen ? null : i)}
              className="w-full flex justify-between px-6 py-5 text-left"
            >
              <span className="font-semibold text-[var(--med-primary)]">
                {faq.q}
              </span>
              <ChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-gray-700">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-12 flex justify-center">
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule Consultation"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
