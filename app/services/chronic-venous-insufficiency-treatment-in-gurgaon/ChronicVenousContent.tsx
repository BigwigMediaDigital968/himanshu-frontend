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
      a: (
        <>
          <p>
            Chronic Venous Insufficiency cannot always be fully reversed, but
            early-stage Chronic Venous Insufficiency can improve with
            compression, exercise, and proper vein care provided through{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>.
          </p>
        </>
      ),
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
      q: "What exercises should be avoided with venous insufficiency?",
      a: (
        <>
          <p>
            Early signs of Chronic Venous Insufficiency include leg heaviness,
            mild swelling, aching, and visible veins. Seeking{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can
            help manage these symptoms.
          </p>
        </>
      ),
    },
    {
      q: "What exercises should be avoided with venous insufficiency?",
      a: "High-impact activities that strain the legs for long periods may worsen Chronic Venous Insufficiency. Low-impact exercises like walking are usually better.",
    },
    {
      q: "Can chronic venous insufficiency lead to ulcers?",
      a: (
        <>
          <p>
            Yes, untreated Chronic Venous Insufficiency can reduce skin
            nutrition and cause venous ulcers over time. Seeking{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can
            help prevent this complication.
          </p>
        </>
      ),
    },
    {
      q: "When should I see a doctor for chronic venous insufficiency?",
      a: (
        <>
          <p>
            If swelling, pain, or skin changes persist, it is wise to consult
            early for <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>{" "}
            before the condition progresses.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* TITLE */}
      <h1 className="text-4xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Chronic Venous Insufficiency Treatment in Gurgaon
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        What is chronic venous insufficiency?
      </h2>

      {/* INTRO */}
      <div className="space-y-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          Chronic Venous Insufficiency is a long-term condition where the veins
          in your legs struggle to send blood back to the heart. In Chronic
          Venous Insufficiency, the valves inside the veins weaken or get
          damaged, allowing blood to pool in the legs. Over time, Chronic Venous
          Insufficiency can affect daily comfort, skin health, and mobility if
          not managed early.
        </p>

        <p className="text-gray-700 leading-relaxed">
          People experiencing these symptoms often search for{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> to manage
          vein health and prevent complications.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you notice leg heaviness or swelling that worsens by evening, it
          may be time to understand Chronic Venous Insufficiency better and take
          action before symptoms progress. Early consultation for{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help
          prevent the condition from worsening.
        </p>

        <p className="font-medium text-[var(--med-primary)]">
          Feeling tired in your legs by evening? Learn how{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help you
          manage Chronic Venous Insufficiency today.
        </p>
      </div>

      <div className="h-px bg-gray-300 my-10" />

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
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed">
        Chronic venous insufficiency may also decrease comfort with walking,
        thereby decreasing one's overall quality of life. Patients experiencing
        these symptoms may consider consulting a specialist for{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> to improve
        circulation and reduce discomfort.
      </p>

      <div className="h-px bg-gray-300 my-10" />

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
          "Swollen legs after prolonged sitting or standing",
          "Varicose veins (large, bulging veins in your legs)",
          "Darkened skin around the ankles",
          "Leg cramps or restless legs",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed">
        Venous ulcers (open sores) are a sign of advanced{" "}
        <b>Chronic Venous Insufficiency in Gurgaon</b>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        If you can relate to any of these symptoms, seeking{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can help
        slow down the progression of the disease and improve leg health.
      </p>

      <div className="h-px bg-gray-300 mb-10" />

      {/* CAUSES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What causes chronic venous insufficiency?
      </h3>
      <p className="text-gray-700">
        Chronic Venous Insufficiency usually arises as a result of any of the
        following:{" "}
      </p>

      <ul className="space-y-3 my-5">
        {[
          "weak vein valves",
          "Prolonged standing or sitting",
          "Obesity (overweight people) or",
          "lack of physical activity",
          "previous pregnancies",
          "prior leg vein injury or blood clots",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        Understanding the root cause of the condition can help doctors recommend
        the most suitable{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> for long-term
        vein health.
      </p>

      <div className="h-px bg-gray-300 my-10" />

      {/* STAGES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What are the stages of chronic venous insufficiency?
      </h3>

      <p className="text-gray-700">
        Chronic Venous Insufficiency deteriorates through stages:
      </p>

      <ul className="space-y-3 my-5">
        {[
          "Swelling and leg ache",
          "Obvious varicose veins",
          "Skin that becomes thicker and changes in color;",
          "Leg ulcers that do not heal",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700">
        Early diagnosis and timely{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help manage
        symptoms before the condition progresses to more advanced stages.
      </p>

      <div className="h-px bg-gray-300 my-10" />

      {/* LIFESTYLE & DIAGNOSIS */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Diagnosis & Lifestyle Role
      </h3>

      <p className="text-gray-700">
        Diagnosing chronic venous insufficiency consists of a physical
        examination and imaging studies to evaluate the veins. Doctors may
        recommend Chronic Venous Insufficiency Treatment in Gurgaon based on the
        severity of symptoms and vein health. <br /> <br /> The following
        lifestyle habits have a significant impact on the management of chronic
        venous insufficiency:
      </p>

      <ul className="space-y-3 my-5">
        {[
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
        These lifestyle adjustments often complement{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> and help
        improve circulation in the legs.
      </p>

      <div className="h-px bg-gray-300 my-10" />

      {/* TREATMENT */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Treatment of Chronic Venous Insufficiency
      </h3>

      <p className="text-gray-700">
        Several advanced options are available for{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>, depending on
        the severity of the condition and overall vein health. The management of
        Chronic Venous Insufficiency focuses on reducing swelling, improving
        blood flow, and supporting overall leg health. <br /> <br />
        Some common treatments included in{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> are:
      </p>

      <p className="text-gray-700 mt-5">
        <b className="text-[var(--med-primary)]">Compression Therapy:</b>{" "}
        Support stockings, bandages, or socks are tools used to help the venous
        function of the legs, which ultimately assist in reducing swelling.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Manual Lymphatic Drainage (MLD):{" "}
        </b>{" "}
        This gentle hands-on therapy encourages the movement of fluids and helps
        relieve discomfort.
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
        Skin protection and wound care techniques help promote healing of venous
        ulcers.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Iliac vein Stents for Ulcers that do not heal:{" "}
        </b>{" "}
        A surgical procedure performed on deeper veins to increase blood
        circulation for stubborn non-healing ulcers.
      </p>

      <p className="text-gray-700">
        With the right <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>,
        patients can experience improved mobility, reduced swelling, and better
        overall quality of life. <br /> <br /> When Chronic Venous Insufficiency
        is identified early and managed with proper{" "}
        <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>, it can
        significantly reduce the risk of complications.
      </p>

      <div className="h-px bg-gray-300 my-10" />

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
