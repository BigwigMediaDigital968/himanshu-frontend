"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";
import diafoot1 from "../../assets/service/diabatic-foot/1.png";
import diafoot2 from "../../assets/service/diabatic-foot/2.png";
import diafoot3 from "../../assets/service/diabatic-foot/3.png";
import Image from "next/image";

export default function DiabeticContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the first signs of Diabetic Foot?",
      a: "Early signs of Diabetic Foot include numbness, tingling, mild pain, skin color changes, or small wounds that heal slowly. Consulting Dr. Himanshu Verma for Diabetic Foot Treatment in Gurgaon can help detect problems early.",
    },
    {
      q: "What are the 5 main symptoms of diabetic neuropathy?",
      a: "Numbness, burning pain, tingling, muscle weakness, and sensitivity to touch are the primary symptoms.",
    },
    {
      q: "Can Diabetic Foot be prevented?",
      a: "Yes. Proper blood sugar control, daily foot checks, and early medical care significantly reduce Diabetic Foot risk. Preventive consultations for Diabetic Foot Treatment in Gurugram can also help detect early signs.",
    },
    {
      q: "When should I see a doctor?",
      a: "You should seek care from a diabetic foot specialist in Gurgaon if you notice pain, numbness, wounds, or infections that do not heal within a few days. Early Diabetic Foot Treatment in Gurgaon with Dr. Himanshu Verma can prevent complications.",
    },
    {
      q: "Is Diabetic Foot treatment painful?",
      a: "Most Diabetic Foot treatments focus on comfort, wound healing, and preventing further damage, with minimal discomfort. Dr. Himanshu Verma offers Diabetic Foot Treatment in Gurgaon with a patient-focused approach to ensure effective and comfortable care.",
    },
  ];

  const causes = [
    "Loss of sensation makes injuries go unnoticed",
    "Reduced blood flow delays wound healing",
    "Higher infection risk due to weakened immunity",
    "Dry skin and cracks allowing bacteria entry",
  ];

  const conditions = [
    "Diabetic neuropathy affecting sensation",
    "Slow-healing foot ulcers",
    "Skin infections and calluses",
    "Foot deformities or structural changes",
    "Gangrene in severe cases",
  ];

  const symptoms = [
    "Numbness or tingling",
    "Burning or sharp pain",
    "Swelling or redness",
    "Slow-healing wounds",
    "Skin color or temperature changes",
  ];

  const BulletItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)]" />
      {text}
    </li>
  );

  return (
    <div className="font-sans">
      {/* HERO */}
      <div className="rounded-2xl bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14 text-white">
        <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
          Vascular Specialist · Gurgaon
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Diabetic Foot Treatment in Gurgaon
        </h2>
        <p className="text-white/80 max-w-xl mb-6">
          Diabetic foot conditions can start small but become serious if
          ignored. Early care helps prevent complications and protect long-term
          mobility.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
          {[
            ["Early Care", "Prevents Damage"],
            ["5+ Symptoms", "Recognize Early"],
            ["Advanced Care", "Better Outcomes"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="font-bold">{val}</p>
              <p className="text-white/60 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT IS DIABETIC FOOT */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What is Diabetic Foot?
        </h2>
        <p className="text-gray-700 mb-4">
          Diabetic Foot is a condition that affects people living with diabetes,
          where high blood sugar levels damage nerves and blood vessels in the
          feet. Over time, this can reduce sensation, slow healing, and increase
          the risk of infections or wounds that do not heal properly. Diabetic
          Foot problems often start small but can become serious if ignored.
          Early care and awareness play a major role in protecting foot health
          and mobility. <br /> <br /> People experiencing symptoms such as pain,
          numbness, tingling, swelling, or slow-healing wounds should seek
          timely medical attention to prevent further complications and protect
          their foot health.
          <br /> <br />
          If you notice changes in your feet, pain, numbness, or slow-healing
          wounds, it may be time to consult Dr. Himanshu Verma for Diabetic Foot
          Treatment in Gurgaon. He is a trusted diabetic foot specialist in
          Gurgaon.
        </p>
      </div>

      <Image
        src={diafoot1}
        sizes="80"
        alt="Diabetic Foot Treatment in Gurgaon image"
        className="rounded-2xl mb-14"
      />

      {/* WHAT IS DIABETES */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          What is Diabetes?
        </h2>
        <p className="text-gray-700">
          Diabetes is a chronic illness in which blood sugar levels are
          difficult for the body to regulate. When blood sugar remains high for
          years, it silently affects nerves, blood flow, and immunity. This
          directly increases the risk of Diabetic Foot complications. Managing
          diabetes well helps reduce the chances of developing Diabetic Foot and
          related issues. <br /> <br /> Proper diabetes management and timely
          consultation with Dr. Himanshu Verma, an experienced Diabetic foot
          specialist in Gurgaon, for Diabetic Foot Treatment in Gurgaon can
          significantly reduce the risk of severe complications.
        </p>
      </div>

      {/* CAUSES */}
      <div className="mb-14 grid gap-6">
        <div className="bg-[var(--med-light)] p-6 rounded-2xl border">
          <h2 className="font-bold text-gray-800 text-xl">
            How Diabetes Causes Foot Problems
          </h2>
          <p className="text-gray-700 text-[14px] my-4">
            Diabetes affects the feet mainly in two ways: nerve damage and poor
            blood circulation. These changes increase the risk of Diabetic Foot
            complications.
          </p>
          <ul className="space-y-2">
            {causes.map((c) => (
              <BulletItem key={c} text={c} />
            ))}
          </ul>
          <p className="text-gray-700 text-[14px] my-4">
            Regular monitoring and early Diabetic Foot Treatment in Gurgaon can
            help address these issues before they lead to serious complications.{" "}
            <br /> <br />
            Regular foot checks and timely medical care can help prevent
            Diabetic Foot from progressing. Regular foot checks and timely
            consultation with a diabetic foot specialist in Gurgaon can help
            prevent Diabetic Foot from progressing.
          </p>
        </div>

        <div className="bg-[var(--med-light)] p-6 rounded-2xl border">
          <h3 className="font-bold mb-4 text-gray-800 text-xl">
            Types of Diabetes Related Foot Conditions
          </h3>
          <p className="text-gray-700 text-[14px] my-4">
            Diabetic Foot can present in different forms depending on the
            underlying damage. <br /> <br /> Common Diabetic Foot conditions
            include:
          </p>
          <ul className="space-y-2">
            {conditions.map((c) => (
              <BulletItem key={c} text={c} />
            ))}
          </ul>
          <p className="text-gray-700 text-[14px] my-4">
            Early diagnosis and Diabetic Foot Treatment in Gurgaon can help
            manage these conditions effectively and reduce complications.
          </p>
        </div>
      </div>

      <Image
        src={diafoot2}
        sizes="80"
        alt="Diabetic Foot Treatment in Gurgaon image"
        className="rounded-2xl mb-14"
      />

      {/* SYMPTOMS */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Symptoms of Diabetic Foot
        </h2>

        <p className="text-gray-700 text-[14px] my-4">
          Recognizing Diabetic Foot symptoms early can protect your feet and
          overall health.
          <br /> <br /> Common symptoms include:
        </p>

        <ul className="grid sm:grid-cols-2 gap-3">
          {symptoms.map((s) => (
            <BulletItem key={s} text={s} />
          ))}
        </ul>

        <p className="text-gray-700 text-[14px] my-4">
          Consulting a diabetic foot specialist in Gurgaon at the right time can
          help prevent complications and support faster healing. Don't wait if
          any of these symptoms show up. Early evaluation and Diabetic Foot
          Treatment can prevent serious Diabetic Foot complications.
        </p>
      </div>

      {/* WHY EARLY CARE */}
      <div className="mb-14 bg-[var(--med-light)] p-6 rounded-2xl border">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          Why Early Care Matters
        </h2>
        <p className="text-gray-700">
          Ignoring Diabetic Foot symptoms can lead to infections and long-term
          mobility issues. With proper assessment, wound care, and circulation
          management, many Diabetic Foot problems can be treated effectively. If
          you are living with diabetes, regular foot evaluations should be part
          of your routine care.
          <br />
          <br /> Seeking Diabetic Foot Treatment in Gurgaon with Dr. Himanshu
          Verma at the right time can help protect your feet, improve healing,
          and reduce the risk of severe complications.
          <br />
          <br /> If you are unsure about your symptoms, booking a consultation
          with Dr. Himanshu Verma for Diabetic Foot Treatment in Gurugram can
          help you understand your Diabetic Foot risk and next steps.
        </p>
      </div>

      <Image
        src={diafoot3}
        sizes="80"
        alt="Diabetic Foot Treatment in Gurgaon image"
        className="rounded-2xl mb-14"
      />

      {/* MANAGEMENT */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          How Diabetic Foot is Managed
        </h2>
        <p className="text-gray-700">
          Diabetic Foot care focuses on treating wounds, improving circulation,
          and preventing future damage. Simple steps such as proper footwear,
          blood sugar control, and timely medical attention can make a big
          difference.
          <br />
          <br /> Dr. Himanshu Verma provides Diabetic Foot Treatment in
          Gurugram, offering advanced wound care, infection management,
          circulation improvement, and preventive foot care strategies to
          support long-term foot health.
          <br /> <br /> With the right care and timely treatment, patients can
          experience improved healing, reduced infection risk, and better
          overall foot health.
        </p>
      </div>

      {/* FAQ */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-gray-600">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="text-[var(--med-primary)] p-8 rounded-2xl text-center border-2 border-[var(--med-primary)]">
        <h3 className="text-xl font-bold mb-3">
          Don’t Ignore Early Foot Symptoms
        </h3>
        <p className="mb-5">
          Early diagnosis and treatment can prevent serious complications and
          protect your mobility.
        </p>
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Book Consultation"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
