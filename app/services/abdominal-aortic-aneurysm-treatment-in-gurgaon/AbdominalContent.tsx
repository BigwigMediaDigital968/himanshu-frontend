"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import { ChevronDown } from "lucide-react";

export default function AbdominalContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const symptoms = [
    "Persistent abdominal or lower back pain",
    "Pulsating sensation near the navel",
    "Sudden severe pain (emergency)",
  ];

  const causes = [
    "Age above 60",
    "Smoking history",
    "High blood pressure",
    "Family history",
    "Atherosclerosis",
  ];

  const diagnosis = [
    "Ultrasound screening",
    "CT scan for accurate size",
    "Regular monitoring",
  ];

  const treatments = [
    "EVAR (Endovascular Aneurysm Repair)",
    "TEVAR (Thoracic Endovascular Repair)",
    "Monitoring for small aneurysms",
  ];

  const faqs = [
    {
      q: "What are the symptoms of an abdominal aortic aneurysm? ",
      a: "Most cases show no symptoms. Pain or pulsation in the abdomen may appear in advanced stages. These are common abdominal aortic aneurysm symptoms that should not be ignored.",
    },
    {
      q: "How serious is an abdominal aortic aneurysm?",
      a: "This condition becomes serious as it grows. Larger aneurysms carry a higher risk and may require timely abdominal aortic aneurysm treatment.",
    },
    {
      q: "Can an abdominal aortic aneurysm be treated without surgery?",
      a: "Small cases may only need monitoring and lifestyle changes, while larger ones may require proper abdominal aortic aneurysm treatment.",
    },
    {
      q: "Are there early warning signs of an aortic aneurysm? ",
      a: "Early warning signs are rare. Screening is the most reliable way to detect it early. ",
    },
    {
      q: "Is EVAR safe for older patients? ",
      a: "Yes, EVAR is widely used for elderly patients due to quicker recovery and effectiveness. ",
    },
  ];

  return (
    <div className="space-y-12">
      {/* HERO */}
      <div className="bg-[var(--med-primary)] text-white p-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-3">
          Abdominal Aortic Aneurysm Treatment in Gurgaon
        </h1>
        <p className="text-white/80 max-w-xl">
          An abdominal aortic aneurysm occurs when the lowest portion of the
          aorta starts to weaken and bulge outwards. The aorta is the main blood
          vessel that carries blood from the heart to the rest of the body.
          Because many aneurysms can grow unnoticed until they become a problem;
          awareness of the condition and proper abdominal aortic aneurysm
          treatment will significantly affect your chances for survival. <br />
          <br /> If you or a loved one has been advised to undergo screening for
          this condition, understanding it is the first step toward safety.
        </p>
      </div>

      {/* INTRO */}
      <div>
        <h2 className="text-2xl font-bold mb-3">What is an AAA?</h2>
        <p>
          An AAA develops slowly and often without pain. It usually occurs below
          the kidneys and may remain unnoticed for years. The concern is not
          just whether the aneurysm is present, but also how big it is and how
          fast it is growing.
          <br />
          <br />
          <b>Key Things to Remember:</b>
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          {[
            "This condition can weaken the artery wall.",
            "As it gets larger, the risk of rupture increases. ",
            "Routine monitoring can help prevent complications. ",
            "If you have risk factors, early monitoring is important. ",
          ].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      {/* SYMPTOMS */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Abdominal Aortic Aneurysm Symptoms
        </h2>
        <p>
          Most people with this condition experience no symptoms. When abdominal
          aortic aneurysm symptoms do appear, they may include:
        </p>
        <ul className="list-disc pl-5 space-y-1 my-3">
          {symptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p>
          If you notice any of these abdominal aortic aneurysm symptoms, seeking
          medical guidance promptly can be life-saving.{" "}
        </p>
      </div>

      {/* CAUSES */}
      <div>
        <h2 className="text-xl font-bold mb-3">Causes & Risk Factors</h2>
        <p>This condition can develop due to: </p>
        <ul className="list-disc pl-5 space-y-1 my-3">
          {causes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p>
          Managing lifestyle factors plays an important role in controlling the
          condition.
        </p>
      </div>

      {/* DIAGNOSIS */}
      <div>
        <h2 className="text-xl font-bold mb-3">Diagnosis</h2>
        <p>
          An abdominal aortic aneurysm (AAA) is usually diagnosed at an early
          stage by:
        </p>
        <ul className="list-disc pl-5 space-y-1 my-3">
          {diagnosis.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p>
          If you have risk factors, simple tests can help detect the condition
          early.
        </p>
      </div>

      {/* Role */}
      <div>
        <h2 className="text-xl font-bold mb-3">Role of a Vascular Surgeon</h2>
        <p>
          A vascular surgeon evaluates the size, shape, and growth of the
          aneurysm and decides the safest approach. The goal is always to
          prevent rupture while keeping treatment minimally invasive when
          possible.
          <br /> <br /> Talking openly about options helps patients feel
          confident and involved.
        </p>
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Care
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Abdominal Aortic Aneurysm Treatment Options
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Treatment for an abdominal aortic aneurysm depends on its size,
            growth rate, and overall health condition. Choosing the right
            approach ensures safer outcomes, better recovery, and significantly
            reduces the risk of rupture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* TEVAR */}
          <div className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800 text-sm">
                Thoracic Endovascular Aortic Repair (TEVAR)
              </h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Minimally Invasive
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              TEVAR is a less invasive procedure used in selected cases where
              the aorta is unstable. It reinforces the weakened artery using
              advanced techniques, reducing pressure on the vessel wall and
              lowering the risk of rupture.
            </p>
          </div>

          {/* EVAR */}
          <div className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800 text-sm">
                Endovascular Aneurysm Repair (EVAR)
              </h3>
              <span className="text-xs bg-[var(--med-primary)] text-white px-2 py-1 rounded-full">
                Most Preferred
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              EVAR is one of the most commonly recommended abdominal aortic
              aneurysm treatments. A stent graft is placed through small
              incisions in the groin to strengthen the affected area. It offers
              faster recovery, minimal pain, and shorter hospital stays.
            </p>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-gray-700 text-sm max-w-2xl mb-6">
          If you're unsure which treatment is right for you, consulting a
          specialist for <b>abdominal aortic aneurysm treatment in Gurgaon</b>{" "}
          can help you understand the safest and most effective option based on
          your condition.
        </p>

        {/* WHY EARLY CARE */}
        <div className="rounded-2xl bg-red-50 border border-red-200 p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-2">
            Why Early Care Matters
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            An untreated aneurysm can rupture without warning, leading to
            life-threatening complications. Regular monitoring and timely
            treatment help reduce risks and allow patients to live with
            confidence. Taking action early often prevents serious outcomes.
          </p>
        </div>

        {/* FINAL CTA */}
        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/90 max-w-md">
            Looking for expert abdominal aortic aneurysm treatment in Gurgaon?
            Early consultation with a vascular specialist ensures safe,
            effective, and minimally invasive care tailored to your condition.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition cursor-pointer"
          >
            Consult Specialist
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold mb-4">FAQs</h2>
        {faqs.map((faq, i) => {
          const isOpen = openFaqIndex === i;
          return (
            <div key={i} className="border rounded mb-2">
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                className="w-full p-3 flex justify-between"
              >
                {faq.q}
                <ChevronDown className={isOpen ? "rotate-180" : ""} />
              </button>
              {isOpen && <p className="p-3 text-sm">{faq.a}</p>}
            </div>
          );
        })}
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
