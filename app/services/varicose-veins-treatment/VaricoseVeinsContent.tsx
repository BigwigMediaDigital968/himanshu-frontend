"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function VaricoseVeinsContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the main causes of varicose veins?",
      a: "Weak vein valves, genetics, prolonged standing, aging, pregnancy, and excess weight are the most common causes.",
    },
    {
      q: "Are varicose veins a worry?",
      a: "They can become a concern if pain, swelling, skin changes, or ulcers develop. Early evaluation helps prevent complications.",
    },
    {
      q: "Is walking good for varicose veins?",
      a: "Yes. Walking improves blood circulation in the legs and reduces pressure in the veins, making it one of the best daily habits for vein health.",
    },
    {
      q: "Can varicose veins go away on their own?",
      a: "Minor varicose veins may improve with lifestyle changes, but most require medical evaluation for long-term relief.",
    },
    {
      q: "Is treatment for varicose veins painful?",
      a: "Most modern procedures are minimally invasive and designed for patient comfort. Dr. Himanshu ensures a safe and effective approach.",
    },
    {
      q: "Can varicose veins cause serious health problems?",
      a: "Yes. If untreated, they can lead to ulcers, blood clots, or chronic venous insufficiency.",
    },
    {
      q: "How can I prevent varicose veins?",
      a: "Regular exercise, maintaining a healthy weight, avoiding prolonged standing or sitting, and wearing compression stockings can help reduce risk.",
    },
    {
      q: "When should I see a doctor?",
      a: "Seek medical attention if you notice swelling, persistent pain, or skin changes around your veins. Early consultation ensures better outcomes.",
    },
  ];

  return (
    <>
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Varicose Veins Treatment by an Expert Varicose Vein Specialist
      </h2>

      {/* INTRO */}
      <div className="space-y-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          The legs are the most prevalent location for varicose veins, which are
          swollen, twisted veins. The condition develops due to the weakening of
          the valves in the veins, allowing blood flow in the reverse direction
          (backward) and thus pooling; the pooling of the blood leads to
          swelling and also to the appearance of bulging out of the skin.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Varicose veins are often thought of as only being a cosmetic problem;
          however, they can be a sign of other vascular problems and, if left
          untreated, preventable damage may result and/or lead to more serious
          conditions.
        </p>

        <p className="font-medium text-[var(--med-primary)]">
          Should you see varicose veins, spider veins, bluish veins, or have
          discomfort in your legs, you will want to consult a qualified varicose
          vein specialist such as Dr. Himanshu, so as to provide early diagnosis
          and effective varicose veins treatment. Schedule a consultation today
          to understand your vein health.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS & CAUSES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Symptoms and Causes
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        Comprehending that the symptoms and causes of varicose veins are
        invaluable in their early detection and effective management.
      </p>

      {/* SYMPTOMS */}
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        What Are the Symptoms of Varicose Veins?
      </h4>

      <ul className="space-y-3 mb-6">
        {[
          "Twisted, bulging blue veins in the legs",
          "Visible spider veins on thighs and/or calves.",
          "Heaviness or ache in the legs, especially after standing for long periods or sitting with knees bent.",
          "Swelling of the lower legs, ankles, and feet.",
          "Itching or irritation around the affected veins",
          "Muscle cramps or restless legs, especially at night",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-10">
        The symptoms vary in unseemly nature, can become severe, and worsen over
        time. Nonetheless, early palliation can keep you from going further down
        this dark path. When your legs are heavy or aching, consult Dr Himanshu
        whether a visit to further discuss your unique needs is in order.
      </p>

      {/* CAUSES */}
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        What Causes Varicose Veins?
      </h4>

      <ul className="space-y-3 mb-6">
        {[
          "Valve weakness or damaged veins, causing blood pooling",
          "Aging - wall deterioration in elderly veins is natural",
          "Genetics: those with relatives afflicted by varicose veins have the condition more often",
          "Remaining upright and sitting for long periods of time (which conspires to wear on your leg veins)",
          "Pregnancy - as a result of greater blood volume and bodily hormone shifts",
          "Obesity (as this puts undue pressure on the veins)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-10">
        Early treatment and lifestyle modifications can help lower the risk of
        complications. Don’t wait until it’s too late; get started on the path
        to happier, healthier veins today!
      </p>

      <div className="h-px bg-gray-100 mb-10" />

      {/* COMPLICATIONS */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What Are the Serious Complications of Varicose Veins?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        While most people have mild symptoms, if left untreated, varicose veins
        can lead to complications such as:
      </p>

      <ul className="space-y-3 mb-10">
        {[
          "Ulcers on the skin near the ankle due to long-term pooling of fluid",
          "Superficial or deep venous thrombosis (blood clots) that may be life-threatening",
          "With chronic venous insufficiency, however, blood flow is compromised, and there may be swelling and skin changes.",
          "Hemorrhage from the veins that lie near the surface of the skin",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-10">
        Early referral and interventions will prevent these complications. Dr.
        Himanshu provides individualized care for patients experiencing varicose
        veins, chronic venous disorders, and lymphatic issues. Book an
        appointment now to protect your long-term leg health.
      </p>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Advanced Varicose Veins Treatment Options
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        The treatment of varicose veins will depend on how bad your symptoms are
        and the cause (underlying venous condition). Dr. Himanshu provides
        minimally invasive as well as complex procedures to improve blood flow,
        alleviate pain, and prevent complications.
      </p>

      <ul className="space-y-3 mb-10">
        {[
          "Endovenous Laser Treatment (EVLT) for Varicose Veins",
          "Medical Glue Treatment (Cyanoacrylate Closure)",
          "Foam Sclerotherapy",
          "Microphlebectomy / Stab Phlebectomy",
          "Iliac Vein Stenting",
          "Deep Vein Thrombolysis",
          "DVT Mechanical Thrombectomy",
          "IVC Filter Insertion & Retrieval",
          "Pulmonary Embolism Suction Thrombectomy",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        FAQs
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
