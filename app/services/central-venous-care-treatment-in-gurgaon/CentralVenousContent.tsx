"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function CentralVenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
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
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Central Venous Care
      </h2>

      {/* INTRO */}
      <div className="space-y-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          If your doctor has advised you to get a central venous catheter, you
          may be confused about what this means and why it is necessary. In
          simple terms, central venous access allows you to receive longer-term,
          safer treatment compared to standard IV access.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This guide explains everything you need to know about Central Venous
          Catheters so you can feel confident about your treatment.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is a Central Venous Catheter?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          A central venous catheter (central line) is a long, thin tube inserted
          into a large vein near your heart (neck, chest, or groin). It allows
          doctors to deliver medications and treatments safely.
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

        <p className="text-gray-700 leading-relaxed">
          Unlike standard IVs, central lines are placed deeper and are designed
          for long-term use.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* VS SECTION */}
      <div className="space-y-8 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Central Venous Catheter vs Peripheral IV
        </h3>

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

      <div className="h-px bg-gray-100 mb-10" />

      {/* WHO NEEDS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Who Needs a Central Line?
        </h3>

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
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TYPES */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Types of Central Venous Catheters
        </h3>

        <ul className="space-y-3">
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
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* ADVANCED TREATMENTS */}
      <div className="space-y-8 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Advanced Central Venous Treatments We Offer
        </h3>

        <div>
          <h4 className="font-semibold text-[var(--med-primary)] mb-3">
            Central Venous Angioplasty
          </h4>
          <ul className="space-y-2">
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
        </div>

        <div>
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
        </div>

        <div className="mt-6 bg-[var(--med-light)] p-6 rounded-2xl border border-[var(--med-border)]">
          <p className="font-medium text-[var(--med-primary)] mb-3">
            Feeling swelling in your arm or puffiness in your face?
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Contact Our Clinic"
          />
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          FAQs
        </h3>

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
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
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
