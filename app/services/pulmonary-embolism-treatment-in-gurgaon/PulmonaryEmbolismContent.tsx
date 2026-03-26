"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function PulmonaryEmbolismContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const symptoms = [
    "Sudden shortness of breath",
    "Sharp chest pain that worsens while breathing",
    "Rapid heartbeat",
    "Dizziness or fainting",
    "Coughing, sometimes with blood",
  ];

  const causes = [
    "Prolonged immobility (long travel or bed rest)",
    "Recent surgery or trauma",
    "Deep vein thrombosis (DVT)",
    "Blood clotting disorders",
    "Obesity, smoking, or dehydration",
  ];

  const complications = [
    "Reduced oxygen levels in the body",
    "Long-term lung damage",
    "Pulmonary hypertension",
    "Heart strain or failure",
    "Risk of recurrent clots",
  ];

  const faqs = [
    {
      q: "What is the management of pulmonary embolism?",
      a: "Pulmonary embolism treatment includes medications, monitoring, and preventive care aimed at restoring blood flow and reducing future clot risk. Consulting the best doctor for pulmonary embolism ensures accurate diagnosis and timely care. ",
    },
    {
      q: "What is the first-line treatment?",
      a: "Blood-thinning medicines are usually the first step to stop existing clots from growing.",
    },
    {
      q: "What is emergency treatment?",
      a: "Emergency pulmonary embolism treatment may involve oxygen support, clot-dissolving treatment, or urgent procedures in severe cases.",
    },
    {
      q: "Can pulmonary embolism come back? ",
      a: "Yes, recurrence is possible. Long-term pulmonary embolism management reduces this risk.",
    },
    {
      q: "How long does recovery take?",
      a: "Recovery varies. With proper pulmonary embolism treatment, many patients improve within weeks, while some need longer follow-up.",
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
      <div className="bg-[var(--med-primary)] text-white rounded-2xl p-10 mb-12">
        <h2 className="text-3xl font-bold mb-3">
          Pulmonary Embolism Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-justify">
          Pulmonary embolism treatment focuses on timely diagnosis, safe care,
          and long-term prevention of serious complications. A pulmonary
          embolism happens when a blood clot blocks one of the arteries in the
          lungs. This condition can become life-threatening if not managed
          properly and on time. With the right pulmonary embolism treatment
          plan, patients can recover safely and reduce the risk of recurrence.
          <br />
          <br />
          If you or a loved one has been diagnosed with this condition,
          understanding pulmonary embolism treatment and management can help you
          feel more confident about the next steps with guidance from a
          pulmonary embolism specialist.
        </p>
      </div>

      {/* INTRO */}
      <div className="grid md:grid-cols-5 gap-8 mb-14">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl font-bold">What is a Pulmonary Embolism?</h2>
          <p>
            A pulmonary embolism occurs when a blood clot, usually formed in the
            deep veins of the legs, travels to the lungs and blocks blood flow.
            This sudden blockage affects oxygen levels and puts strain on the
            heart. Pulmonary embolism treatment aims to restore circulation,
            stabilize breathing, and prevent further clot formation.
            <br />
            <br /> Early medical attention plays a major role in successful
            pulmonary embolism management. If symptoms appear suddenly,
            immediate evaluation is critical.
          </p>
        </div>

        {/* CTA */}
        <div className="md:col-span-2 bg-[var(--med-light)] p-6 rounded-xl">
          <p className="text-sm mb-4 font-bold">
            Concerned about sudden chest pain or breathlessness?
          </p>
          <p className="text-sm mb-4">
            Book a consultation for pulmonary embolism treatment in Gurgaon with
            the best doctor for pulmonary embolism to discuss personalized
            treatment options.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book Consultation"
          />
        </div>
      </div>

      {/* SYMPTOMS */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          What are the symptoms of a pulmonary embolism?
        </h2>
        <p className="text-sm mb-4">
          Symptoms may vary depending on the size of the clot and overall
          health. Common signs include:
        </p>

        <ul className="space-y-2">
          {symptoms.map((s) => (
            <BulletItem key={s} text={s} />
          ))}
        </ul>
        <p className="text-sm mt-4">
          Not all patients experience the same symptoms. Prompt pulmonary
          embolism treatment can prevent symptoms from worsening.
        </p>
      </div>

      {/* CAUSES */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          What causes a pulmonary embolism?
        </h2>
        <p className="text-sm mb-4">
          Understanding the cause helps guide pulmonary embolism treatment and
          prevention. Common causes include:
        </p>
        <ul className="space-y-2">
          {causes.map((c) => (
            <BulletItem key={c} text={c} />
          ))}
        </ul>
        <p className="text-sm mt-4">
          Identifying risk factors allows pulmonary embolism management to be
          tailored for each patient.
        </p>
      </div>

      {/* COMPLICATIONS */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          What are the complications of a pulmonary embolism?
        </h2>
        <p className="text-sm mb-4">
          Without proper pulmonary embolism treatment, complications can
          develop, such as:
        </p>
        <ul className="space-y-2">
          {complications.map((c) => (
            <BulletItem key={c} text={c} />
          ))}
        </ul>
        <p className="text-sm mt-4">
          Effective pulmonary embolism management focuses on preventing these
          outcomes through timely intervention and follow-up care.
        </p>
      </div>

      {/* TREATMENT */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          How pulmonary embolism treatment is planned?
        </h2>
        <p className="text-sm mb-4">
          Pulmonary embolism treatment depends on clot severity and patient
          stability. It usually includes:
        </p>
        <ul className="space-y-2">
          <BulletItem text="Blood-thinning medications" />
          <BulletItem text="Monitoring heart and lung function" />
          <BulletItem text="Advanced interventions in severe cases" />
          <BulletItem text="Lifestyle modifications" />
        </ul>
      </div>

      {/* CTA */}
      <div className="text-[var(--med-primary)] border-2 border-[var(--med-primary)] p-6 rounded-xl mb-14">
        <p className="mb-4">
          <b>Looking for safe and expert care?</b> <br /> <br />
          Speak with Dr. Himanshu, a trusted pulmonary embolism specialist, to
          create a personalized <b>pulmonary embolism treatment plan</b> that
          fits your condition and lifestyle, including expert{" "}
          <b>pulmonary embolism treatmentin Gurgaon</b>.
        </p>

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Consult Dr. Himanshu"
        />
      </div>

      {/* RECOVERY */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-4">
          Recovery and prevention after treatment
        </h2>
        <p className="text-sm mb-4">
          Pulmonary embolism treatment does not end after initial care.
          Long-term care may include:
        </p>
        <ul className="space-y-2">
          <BulletItem text="Regular follow-ups" />
          <BulletItem text="Medication adherence" />
          <BulletItem text="Physical activity guidance" />
          <BulletItem text="Managing risk factors" />
        </ul>

        <p className="text-sm mt-4">
          With consistent pulmonary embolism management, most patients return to
          normal daily activities safely after receiving proper pulmonary
          embolism treatment in Gurgaon.
        </p>
      </div>

      {/* FAQ */}
      <div className="mb-14">
        <h2 className="text-xl font-bold mb-6">
          FAQs on Pulmonary Embolism Treatment
        </h2>
        {faqs.map((faq, i) => {
          const isOpen = openFaqIndex === i;
          return (
            <div key={i} className="border rounded-xl mb-3">
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                className="w-full flex justify-between p-4"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`${isOpen ? "rotate-180" : ""} transition`}
                />
              </button>
              {isOpen && (
                <div className="p-4 text-sm text-gray-600">{faq.a}</div>
              )}
            </div>
          );
        })}
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
