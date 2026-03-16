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
      a: (
        <p>
          Weak vein valves, genetics, prolonged standing, aging, pregnancy, and
          excess weight are the most common causes. These conditions often
          require professional evaluation and{" "}
          <b>varicose veins treatment in Gurgaon.</b>
        </p>
      ),
    },
    {
      q: "Are varicose veins a worry?",
      a: (
        <p>
          They can become a concern if pain, swelling, skin changes, or ulcers
          develop. Early evaluation and{" "}
          <b>varicose veins treatment in Gurgaon</b> help prevent complications.
        </p>
      ),
    },
    {
      q: "Is walking good for varicose veins?",
      a: (
        <p>
          Yes. Walking improves blood circulation in the legs and reduces
          pressure in the veins, making it one of the best daily habits for vein
          health alongside proper <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "Can varicose veins go away on their own?",
      a: (
        <p>
          Minor varicose veins may improve with lifestyle changes, but most
          require medical evaluation and{" "}
          <b>varicose veins treatment in Gurgaon</b> for long-term relief.
        </p>
      ),
    },
    {
      q: "Is treatment for varicose veins painful?",
      a: (
        <p>
          Most modern procedures used in{" "}
          <b>varicose veins treatment in Gurgaon</b> are minimally invasive and
          designed for patient comfort.
        </p>
      ),
    },
    {
      q: "Can varicose veins cause serious health problems?",
      a: (
        <p>
          Yes. If untreated, they can lead to ulcers, blood clots, or chronic
          venous insufficiency, which is why timely{" "}
          <b>varicose veins treatment in Gurgaon</b> is recommended.
        </p>
      ),
    },
    {
      q: "How can I prevent varicose veins?",
      a: (
        <p>
          Regular exercise, maintaining a healthy weight, avoiding prolonged
          standing or sitting, and wearing compression stockings can help reduce
          the risk and complement <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "When should I see a doctor?",
      a: (
        <p>
          Seek medical attention if you notice swelling, persistent pain, or
          skin changes around your veins. Early consultation ensures better
          outcomes and timely <b>varicose veins treatment in Gurgaon</b>.
        </p>
      ),
    },
  ];

  return (
    <>
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Varicose Veins Treatment in Gurgaon by Dr Himanshu Verma
      </h2>

      {/* INTRO */}
      <div className="space-y-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          The legs are the most prevalent location for varicose veins, which are
          swollen, twisted veins. The condition develops due to the weakening of
          the valves in the veins, allowing blood flow in the reverse direction
          (backward) and thus pooling; the pooling of the blood leads to
          swelling and also to the appearance of bulging out of the skin.
          Varicose veins are often thought of as only being a cosmetic problem;
          however, they can be a sign of other vascular problems and, if left
          untreated, preventable damage may result and/or lead to more serious
          conditions.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you are looking for varicose veins treatment in Gurgaon, early
          consultation with a specialist can help prevent complications and
          improve your vein health.
        </p>

        <p className="font-medium text-[var(--med-primary)]">
          Should you see varicose veins, spider veins, bluish veins, or have
          discomfort in your legs, you will want to consult a qualified varicose
          vein specialist such as Dr. Himanshu for{" "}
          <b>varicose veins treatment in Gurgaon</b>, so as to provide early
          diagnosis and effective care. Schedule a consultation today to
          understand your vein health and explore the best options for{" "}
          <b>varicose veins treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-300 mb-10" />

      {/* SYMPTOMS & CAUSES */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Symptoms and Causes
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        Comprehending the symptoms and causes of varicose veins is invaluable in
        their early detection and effective management. People seeking varicose
        veins treatment in Gurgaon should understand the warning signs to ensure
        timely medical attention.
      </p>

      {/* SYMPTOMS */}
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        What Are the Symptoms of Varicose Veins?
      </h4>

      <p className="text-gray-700 mb-5">
        Varicose veins can present themselves in various ways. Common symptoms
        include:
      </p>

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
        The symptoms vary in severity and can worsen over time. Nonetheless,
        early treatment can prevent progression of the condition. If you
        experience heavy or aching legs, consult Dr. Himanshu for proper
        evaluation and varicose veins treatment in Gurgaon tailored to your
        specific condition.
      </p>

      {/* CAUSES */}
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        What Causes Varicose Veins?
      </h4>

      <p className="text-gray-700 mb-5">
        Reasons for the development of varicose veins include:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "Valve weakness or damaged veins, causing blood pooling",
          "Aging - wall deterioration in elderly veins is natural",
          "Genetics - those with relatives afflicted by varicose veins have the condition more often",
          "Remaining upright and sitting for long periods of time (which conspires to wear on your leg veins)",
          "Pregnancy - as a result of greater blood volume and bodily hormone shifts",
          "Obesity – which puts excessive pressure on the veins",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-10">
        Early treatment and lifestyle modifications can help lower the risk of
        complications. If you notice early symptoms, consulting a specialist for
        varicose veins treatment in Gurgaon can help protect your long-term vein
        health.
      </p>

      <div className="h-px bg-gray-300 mb-10" />

      {/* COMPLICATIONS */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        What Are the Serious Complications of Varicose Veins?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        While many people experience mild symptoms, untreated varicose veins can
        lead to serious complications. This is why timely varicose veins
        treatment in Gurgaon is recommended for patients experiencing persistent
        symptoms.
      </p>

      <p className="text-gray-700 font-medium leading-relaxed mb-6">
        Possible complications include:
      </p>

      <ul className="space-y-3 mb-10">
        {[
          "Ulcers on the skin near the ankle due to long-term pooling of fluid",
          "Superficial or deep venous thrombosis (blood clots) that may be life-threatening",
          "Chronic venous insufficiency, where blood flow is compromised, causing swelling and skin changes",
          "Hemorrhage from veins located near the surface of the skin",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed mb-5">
        Early referral and intervention can help prevent these complications.
        Dr. Himanshu offers comprehensive varicose veins treatment in Gurgaon
        for patients dealing with chronic venous disorders and lymphatic issues.
        Book an appointment today to ensure long-term leg health.
      </p>

      <p className="font-medium text-[var(--med-primary)]">
        Book an appointment now to protect your long-term leg health.
      </p>

      <div className="h-px bg-gray-300 my-10" />

      {/* TREATMENT */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Advanced Varicose Veins Treatment Options
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        The treatment of varicose veins depends on the severity of symptoms and
        the underlying venous condition. Patients seeking varicose veins
        treatment in Gurgaon can benefit from advanced minimally invasive
        procedures designed to improve blood flow, relieve discomfort, and
        prevent complications.
      </p>

      <p className="font-bold">Common treatment approaches include:</p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Endovenous Laser Treatment (EVLT) –{" "}
        </b>{" "}
        One of the most effective procedures used in modern varicose veins
        treatment in Gurgaon. It uses laser energy to close the damaged vein.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Medical Glue Treatment (Cyanoacrylate Closure) –{" "}
        </b>{" "}
        A modern technique used in varicose veins treatment in Gurgaon where
        medical glue seals the affected vein without the need for multiple
        compression sessions.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">Foam Sclerotherapy – </b> A
        foam solution is injected into the problematic veins to shrink and
        eventually get rid of them.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Microphlebectomy / Stab Phlebectomy –{" "}
        </b>{" "}
        Small incisions are made to safely remove superficial varicose veins.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">Iliac Vein Stenting – </b> Used
        to treat venous hypertension by opening narrowed or compressed veins.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">Deep Vein Thrombolysis – </b> A
        specialized procedure that dissolves dangerous clots in the deep veins.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          DVT Mechanical Thrombectomy –{" "}
        </b>{" "}
        Removes clots from deep veins using advanced medical devices.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          IVC Filter Insertion & Retrieval{" "}
        </b>
        Helps prevent blood clots from reaching the lungs.
      </p>

      <p className="text-gray-700 my-5">
        <b className="text-[var(--med-primary)]">
          Pulmonary Embolism Suction Thrombectomy –{" "}
        </b>{" "}
        A life-saving procedure used to remove clots from the lungs.
      </p>

      <p className="text-gray-700">
        Early diagnosis and the right varicose veins treatment in Gurgaon can
        help prevent serious complications such as ulcers, blood clots, and
        chronic venous insufficiency. If your legs feel heavy, swollen, or
        painful, consult Dr. Himanshu to find the most suitable varicose veins
        treatment in Gurgaon for your condition.
      </p>

      <div className="h-px bg-gray-300 my-10" />

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
