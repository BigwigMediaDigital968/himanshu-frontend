"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function ChronicVenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How to reverse chronic venous insufficiency?",
      a: "Chronic Venous Insufficiency cannot always be fully reversed, but early-stage CVI can significantly improve with compression therapy, exercise, and proper vein care.",
    },
    {
      q: "What is the root cause of venous insufficiency?",
      a: "The main root cause of Chronic Venous Insufficiency is damaged or weak vein valves that allow blood to flow backward.",
    },
    {
      q: "What are the early warning signs of CVI?",
      a: "Early signs of Chronic Venous Insufficiency include leg heaviness, mild swelling, aching, and visible veins.",
    },
    {
      q: "What exercises should be avoided?",
      a: "High-impact activities that strain the legs for long periods may worsen Chronic Venous Insufficiency. Low-impact exercises like walking are usually better.",
    },
    {
      q: "Can chronic venous insufficiency lead to ulcers?",
      a: "Yes, untreated Chronic Venous Insufficiency can reduce skin nutrition and cause venous ulcers over time.",
    },
    {
      q: "When should I see a doctor?",
      a: "If swelling, pain, or skin changes persist, it is wise to consult early before Chronic Venous Insufficiency progresses",
    },
  ];

  return (
    <>
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        What is chronic venous insufficiency?
      </h2>

      {/* INTRO */}
      <div className="space-y-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          Chronic Venous Insufficiency (CVI) is a long-term condition where the
          veins in your legs struggle to send blood back to the heart. The
          valves inside the veins weaken or become damaged, allowing blood to
          pool in the legs. Over time, CVI can affect daily comfort, skin
          health, and mobility if not managed early.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you notice leg heaviness or swelling that worsens by evening, it
          may be time to take action before symptoms progress.
        </p>

        <p className="font-medium text-[var(--med-primary)]">
          Feeling tired in your legs by evening? Learn how you can manage
          Chronic Venous Insufficiency today.
        </p>
      </div>

      <div className="h-px bg-gray-100 my-10" />

      {/* HOW IT AFFECTS BODY */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        How does chronic venous insufficiency affect my body?
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Chronic venous insufficiency typically occurs in the lower legs and is
        characterized by high pressure in the veins due to inadequate blood
        return. This condition leads to swelling of the legs and damage to the
        skin. The effects of chronic venous insufficiency will worsen over time
        and may cause:
      </p>

      <ul className="space-y-3 my-5">
        {[
          "The buildup of fluid in the ankles and legs",
          "Skin that is discolored and itchy",
          "Reduced oxygen in the tissue",
          "Wounds that heal slowly",
          "Reduced walking comfort and quality of life",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed">
        Chronic venous insufficiency may also decrease comfort with walking,
        thereby decreasing one's overall quality of life.
      </p>

      <div className="h-px bg-gray-100 my-10" />

      {/* SYMPTOMS */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Symptoms and Causes
      </h2>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What are the signs and symptoms of chronic venous insufficiency?
      </h2>

      <p className="text-gray-700">
        There are several common symptoms of Chronic Venous Insufficiency:{" "}
      </p>

      <ul className="space-y-3 my-5">
        {[
          "Leg heaviness or aching",
          "Swelling after prolonged sitting or standing",
          "Visible varicose veins ((large, bulging veins in your legs))",
          "Darkened skin around the ankles",
          "Leg cramps or restless legs",
          "Venous ulcers (open sores) are a sign of advanced chronic venous insufficiency.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-10">
        If you can relate to any of these symptoms, seeking treatment early can
        slow down the progression of your disease.
      </p>

      <div className="h-px bg-gray-100 mb-10" />

      {/* CAUSES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What causes chronic venous insufficiency?
      </h3>
      <p className="text-gray-700">
        Chronic venous insufficiency usually arises as a result of any of the
        following:{" "}
      </p>

      <ul className="space-y-3 my-5">
        {[
          "Weak or damaged vein valves",
          "Prolonged standing or sitting",
          "Obesity (overweight people) or",
          "Lack of physical activity, having previous pregnancies, or ",
          "Due to prior leg vein injury/clots. ",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        Learning the specific cause of chronic venous insufficiency allows for
        the provision of more personalized treatment.
      </p>

      <div className="h-px bg-gray-100 my-10" />

      {/* STAGES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What are the stages of chronic venous insufficiency?
      </h3>

      <p className="text-gray-700">
        Chronic Venous Insufficiency deteriorates through stages:
      </p>

      <ul className="space-y-3 my-5">
        {[
          "Stage 1 – Swelling and leg ache",
          "Stage 2 – Prominent varicose veins",
          "Stage 3 – Skin that becomes thicker and changes in color;",
          "Stage 4 – Leg ulcers that do not heal",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        You may find that early stage Chronic Venous Insufficiency is more
        easily treated when you seek medical treatment early.
      </p>

      <div className="h-px bg-gray-100 my-10" />

      {/* LIFESTYLE & DIAGNOSIS */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Diagnosis & Lifestyle Role
      </h3>

      <p className="text-gray-700">
        Diagnosing chronic venous insufficiency consists of a physical
        examination and imaging studies to evaluate the veins. The following
        lifestyle habits have a significant impact on the management of chronic
        venous insufficiency:
      </p>

      <ul className="space-y-3 my-5">
        {[
          "Physical examination and vein imaging",
          "Regular exercise by walking.",
          "Elevating your legs.",
          "Maintaining a healthy weight",
          "Not remaining in one position for long periods of time.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        Making incremental changes can lead to meaningful results.
      </p>

      <div className="h-px bg-gray-100 my-10" />

      {/* TREATMENT */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Treatment of Chronic Venous Insufficiency
      </h3>

      <p className="text-gray-700">
        The Management of Chronic Venous Insufficiency will include minimizing
        swelling, promoting healthy blood circulation, and supporting the
        general health of the legs as a whole. Some common treatments are:
      </p>

      <p className="text-gray-700 mt-5">
        <b className="text-[var(--med-primary)]">Compression Therapy:</b>{" "}
        Support stockings, bandages, or socks are tools used to help the venous
        function of the legs, which will ultimately assist in reducing swelling
        of the legs.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Manual Lymphatic Drainage (MLD):{" "}
        </b>{" "}
        This is a gentle, hands-on approach that encourages the movement of
        fluids and provides relief from discomfort.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Lymphedema Treatment Program:{" "}
        </b>
        A combined program that uses compression, exercise, and skin care to
        reduce long-term swelling in the legs.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">Ulcer Healing Protocols: </b>{" "}
        Address skin protection for chronic venous insufficiency-related ulcers
        and assist with the promotion of healing.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Iliac vein Stents for Ulcers that do not heal:{" "}
        </b>{" "}
        Surgical procedure performed on deeper veins to increase blood
        circulation for more stubbornly non-healing ulcers.
      </p>

      <p className="text-gray-700">
        When Chronic Venous Insufficiency is identified early and treated
        properly it will result in an easier way of life and lessen the chance
        of developing complications.
      </p>

      <div className="h-px bg-gray-100 my-10" />

      {/* FAQ SECTION */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Frequently Asked Questions
      </h3>

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

      {/* CTA */}
      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule Consultation"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
