"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function WoundContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const challenges = [
    "Slow tissue repair",
    "Reduced sensation in the feet",
    "Higher infection risk",
    "Poor circulation",
    "Recurrent ulcers",
  ];

  const treatmentSteps = [
    "Detailed wound examination",
    "Cleaning and safe removal of dead tissue",
    "Infection control",
    "Advanced dressings",
    "Blood sugar monitoring guidance",
    "Pressure relief techniques for foot wounds",
  ];

  const dressingOptions = [
    "Moisture-retaining dressings",
    "Antimicrobial dressings",
    "Foam or hydrogel-based dressings",
    "Protective offloading for foot ulcers",
  ];

  const whenToSeek = [
    "Within a few days, the wound does not get better.",
    "There is pus or a foul smell",
    "The skin around the wound turns black",
    "You experience fever or increased pain",
  ];

  const faqs = [
    {
      q: "What is the best diabetic wound care in Gurgaon?",
      a: "The best diabetic wound care in Gurgaon involves professional diabetic wound care, proper cleaning, removal of dead tissue if needed, infection control, suitable dressing, and blood sugar management. Early medical care improves healing results.",
    },
    {
      q: "What is the best dressing for a diabetic wound?",
      a: "There is no single dressing for all wounds. In diabetic wound care, dressings are selected based on wound depth, moisture level, and infection risk, often guided by a Diabetic wound specialist in Gurgaon.",
    },
    {
      q: "How long does a diabetic wound take to heal?",
      a: "Healing time varies. With proper diabetic wound care, mild wounds may heal within a few weeks, while deeper ulcers may take longer, depending on circulation and sugar control. Guidance from a Diabetic wound specialist in Gurgaon can support faster recovery.",
    },
    {
      q: "Can diabetic wounds heal on their own?",
      a: "Some minor wounds may heal slowly, but without proper diabetic wound care, the risk of infection and complications increases significantly. Consulting a Diabetic wound specialist in Gurgaon is recommended for safe healing.",
    },
    {
      q: "How can I prevent diabetic foot wounds?",
      a: "Daily foot inspection, good sugar control, comfortable footwear, and regular medical checkups are essential parts of preventive diabetic wound care. Regular visits to a Diabetic wound specialist in Gurgaon can help in early detection and prevention.",
    },
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
      <div className="relative rounded-2xl overflow-hidden bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Vascular Specialist · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Diabetic Wound Care in Gurgaon
        </h2>
      </div>

      {/* INTRO */}
      <div className="space-y-4 mb-14">
        <p className="text-gray-700">
          Living with diabetes requires extra attention to even small cuts or
          blisters. A minor wound can quickly turn serious if ignored. That is
          why diabetic wound care is not just about cleaning a wound. It is
          about protecting your health, preventing infection, and helping your
          body heal the right way.
        </p>

        <p className="text-gray-700">
          Dr. Himanshu provides focused and practical Diabetic Wound Care in
          Gurgaon designed to reduce complications and improve healing outcomes.
          As a trusted Diabetic wound specialist in Gurgaon, he ensures that
          every patient receives the right treatment approach. Every wound is
          different, and proper evaluation is the first step toward recovery.
        </p>

        <div className="bg-[var(--med-light)] border rounded-xl p-5">
          <p className="text-sm text-gray-700 font-medium">
            If you have a wound that is not healing or showing signs of
            infection, do not wait. Early Diabetic Wound Care in Gurgaon can
            prevent long-term damage and hospital visits.
          </p>
        </div>
        <div className="pt-8 border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* WHY SPECIAL CARE */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4">
          Why Diabetic Wounds Need Special Attention
        </h2>

        <p className="text-gray-700 mb-4">
          Reduced blood circulation and slowed healing are two effects of high
          blood sugar. This makes infections more common and recovery slower.
          Professional Diabetic Wound Care in Gurgaon helps manage these risks
          in a structured way. <br /> <br />
          <b>Common challenges in diabetic wounds:</b>
        </p>

        <ul className="space-y-2 mb-4">
          {challenges.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>

        <p className="text-gray-700">
          With timely diabetic wound care, these risks can be controlled before
          they become severe.
        </p>

        <p className="text-gray-700 mt-2">
          If you notice redness, swelling, discharge, or pain, it is time to
          seek proper Diabetic Wound Care in Gurgaon.
        </p>
      </div>

      {/* TREATMENT */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4">
          What to Expect During Treatment
        </h2>

        <p className="text-gray-700 mb-4">
          Dr. Himanshu focuses on careful assessment and step-by-step
          management. The goal of Diabetic Wound Care in Gurgaon is to clean the
          wound, remove unhealthy tissue if required, control infection, and
          promote healthy healing. A Diabetic wound specialist in Gurgaon
          ensures that each step is performed with precision and care. <br />
          <br />
          <b>Treatment may include:</b>
        </p>

        <ul className="space-y-2 mb-4">
          {treatmentSteps.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>

        <p className="text-gray-700 mb-4">
          Each stage of diabetic wound care is planned according to the size,
          depth, and severity of the wound. Proper guidance from a Diabetic
          wound specialist in Gurgaon improves healing outcomes significantly.
        </p>

        <div className="bg-[var(--med-light)] border rounded-xl p-5">
          <p className="text-sm text-gray-700 font-medium">
            If you are unsure whether your wound needs medical attention,
            schedule a consultation and get clarity about the right diabetic
            wound care plan for you.
          </p>
        </div>
        <div className="pt-8 border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* DRESSING */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-4">
          Advanced Dressing and Healing Support
        </h2>

        <p className="text-gray-700 mb-4">
          Choosing the right dressing is an important part of Diabetic Wound
          Care in Gurgaon. A proper dressing maintains moisture balance,
          protects against infection, and speeds up tissue growth. <br />
          <br />
          <b>Depending on the wound condition, options may include:</b>
        </p>

        <ul className="space-y-2 mb-4">
          {dressingOptions.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>

        <p className="text-gray-700">
          Effective Diabetic Wound Care in Gurgaon also involves educating
          patients about daily inspection, hygiene, and foot protection. Small
          changes in routine can make a big difference in healing.
        </p>

        <p className="text-gray-700 mt-2">
          And the right approach from a Diabetic wound specialist in Gurgaon
          ensures faster and safer recovery.
        </p>
      </div>

      {/* WHEN TO SEEK */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold">When Should You Seek Help</h2>
        <p className="text-gray-700 my-4">
          You should consider professional Diabetic Wound Care in Gurgaon if:
        </p>

        <ul className="space-y-2 mb-4">
          {whenToSeek.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>

        <p className="text-gray-700">
          Prompt Diabetic Wound Care in Gurgaon reduces the risk of amputation
          and serious infection. Taking action early protects your mobility and
          overall health.
        </p>
      </div>

      {/* FAQ */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

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
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-gray-700">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl text-[var(--med-primary)] p-8 text-center border-2 border-[var(--med-primary)]">
        <h3 className="text-xl font-bold mb-3">
          Take Action Before It Gets Worse
        </h3>
        <p className="text-sm mb-6">
          Early Diabetic Wound Care in Gurgaon can prevent serious complications
          and help you heal safely.
        </p>

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule Consultation"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
