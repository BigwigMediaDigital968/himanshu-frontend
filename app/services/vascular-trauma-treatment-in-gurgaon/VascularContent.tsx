"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function VascularContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="font-sans space-y-14">
      {/* HERO */}
      <div className="bg-[var(--med-primary)] text-white rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-4">
          Vascular Trauma: Comprehensive Care for Emergency Blood Vessel
          Injuries
        </h1>
        <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
          Vascular trauma represents one of the most critical medical
          emergencies, involving damage to the body's blood vessels, arteries,
          veins, or capillaries that transport blood throughout the body.
        </p>
        <p className="text-white/70 text-sm mt-4 max-w-3xl">
          These injuries can occur suddenly through accidents, violence, or
          medical complications, and require immediate expert intervention to
          prevent life-threatening consequences.
          <br />
          <br />
          Understanding vascular trauma and recognizing its signs can make the
          difference between full recovery and permanent disability. This
          comprehensive guide explores everything you need to know about
          vascular trauma, from identification to advanced treatment options.
        </p>
      </div>

      {/* WHAT IS */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What is Vascular Trauma?</h2>

        <p className="text-gray-700 text-sm mb-6">
          Vascular trauma refers to any injury that damages blood vessels,
          disrupting normal blood flow to organs, limbs, and tissues. These
          injuries can range from minor lacerations to complete vessel
          transection, and their severity depends on several factors:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Location of the injury - damage to major vessels like the aorta or femoral artery poses greater risk",
            "Type of vessel affected - arterial injuries are typically more serious than venous injuries",
            "Extent of damage - partial tears versus complete rupture",
            "Time elapsed - delayed treatment significantly impacts outcomes",
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* TYPES */}
      <div className="grid md:grid-cols-2 gap-4">
        <p>Vascular trauma can be classified into two main categories:</p>
        <div className="p-5 border rounded-xl">
          <h3 className="font-bold mb-2">Penetrating Trauma</h3>
          <p className="text-sm text-gray-600">
            Caused by sharp objects, gunshot wounds, knife injuries, or
            impalement that pierce through the skin and damage underlying
            vessels.
          </p>
        </div>

        <div className="p-5 border rounded-xl">
          <h3 className="font-bold mb-2">Blunt Trauma</h3>
          <p className="text-sm text-gray-600">
            Results from motor vehicle accidents, falls, crush injuries, or
            direct impact that damages vessels without breaking the skin, often
            causing internal bleeding or vessel compression.
          </p>
        </div>
      </div>

      {/* CAUSES */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Common Causes of Vascular Trauma
        </h2>

        <p>Vascular Trauma can occur in various circumstances:</p>

        <div className="grid sm:grid-cols-2 gap-4 my-3">
          {[
            "Motor vehicle accidents and motorcycle crashes",
            "Workplace accidents involving machinery or equipment",
            "Gunshot wounds and stab injuries",
            "Sports injuries, particularly in high-impact activities",
            "Falls from significant heights",
            "Crush injuries from collapsed structures",
            "Iatrogenic injuries during surgical or catheterization procedures",
            "Animal attacks or bites",
            "Fractures and dislocations that damage nearby vessels",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-red-50 border rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── SYMPTOMS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Emergency Awareness
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Recognizing the Symptoms of Vascular Trauma
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl text-sm">
            Early recognition of vascular trauma symptoms is crucial for timely
            intervention. Signs and symptoms vary depending on the injury's
            location and severity:
          </p>
        </div>

        {/* Immediate */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3">
            Immediate Warning Signs:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Active bleeding or blood spurting from a wound",
              "Rapidly expanding hematoma (blood collection under the skin)",
              "Absent or weak pulse below the injury site",
              "Cold, pale, or bluish discoloration of limbs",
              "Severe pain disproportionate to the visible injury",
              "Numbness or tingling in affected areas",
              "Visible deformity or swelling",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Progressive */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3">
            Progressive Symptoms:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Persistent bleeding that doesn't stop with pressure",
              "Progressive swelling of the affected limb",
              "Muscle weakness or paralysis",
              "Shock symptoms: confusion, rapid heartbeat, shallow breathing",
              "Loss of function in the affected extremity",
              "Compartment syndrome: intense pressure and pain in muscle compartments",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-orange-50 border border-orange-200 rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Delayed */}
        <div>
          <h3 className="font-bold text-gray-800 mb-3">
            Delayed Presentations:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Pseudoaneurysm formation (false aneurysm at injury site)",
              "Arteriovenous fistula (an abnormal connection between an artery and a vein)",
              "Chronic pain or claudication (pain with activity)",
              "Non-healing wounds",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EMERGENCY CTA ── */}
      <div className="mb-14 rounded-2xl bg-[var(--med-primary)] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm max-w-xl">
          <b>Don't Wait Until It's Too Late</b>
          <br />
          <br />
          If you or someone you know has experienced trauma and shows any signs
          of vascular trauma, immediate medical attention is critical. Time is
          tissue; every minute counts in preserving limb function and preventing
          complications.
        </p>
        <button
          onClick={() => setOpenPopup(true)}
          className="bg-white text-[var(--med-primary)] px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
        >
          Emergency Consultation
        </button>
      </div>

      {/* ── DIAGNOSIS ── */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          How is Vascular Trauma Diagnosed?
        </h2>

        <p className="text-gray-700 text-sm mb-6">
          Accurate and rapid diagnosis is essential for effective treatment.
          Vascular surgeons employ a combination of clinical assessment and
          advanced imaging techniques:
        </p>

        <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
          <h3 className="font-bold mb-3">Clinical Examination:</h3>
          <p>The initial evaluation includes: </p>
          <ul className="space-y-2 pl-5 text-sm list-disc text-gray-700 my-3">
            {[
              "Assessment of vital signs and hemodynamic stability",
              'Physical examination for "hard signs" of vascular Trauma (absent pulses, expanding hematoma, pulsatile bleeding, audible bruit, palpable thrill)',
              'Evaluation of "soft signs" (history of arterial bleeding, proximity of wound to major vessels, reduced but present pulses, peripheral nerve injury)',
              "Ankle-Brachial Index (ABI) measurement to assess blood flow",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── BENEFITS ── */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Benefits and Effectiveness of Modern Vascular Trauma Care
        </h2>
        <p>
          Advances in vascular trauma management have dramatically improved
          outcomes:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-3">
          <div className="p-6 border rounded-2xl bg-green-50">
            <h3 className="font-bold mb-3">Immediate Benefits:</h3>
            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>
                Life-saving hemorrhage control prevents death from
                exsanguination
              </li>
              <li>Restoration of blood flow to threatened limbs and organs</li>
              <li>
                Prevention of immediate complications like compartment
                syndrome{" "}
              </li>
              <li>
                Reduced transfusion requirements with endovascular
                techniques{" "}
              </li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl bg-blue-50">
            <h3 className="font-bold mb-3">Long-term Advantages:</h3>
            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>
                Limb salvage rates exceeding 85-90% when treated promptly{" "}
              </li>
              <li>Preservation of normal vascular anatomy when possible </li>
              <li>Return to functional activities and work</li>
              <li>Minimized disability and improved quality of life</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 my-3">
          <div className="p-6 border rounded-2xl bg-green-50">
            <h3 className="font-bold mb-3">
              Effectiveness of Treatment Approaches:
            </h3>
            <p className="text-sm">
              Modern vascular trauma care achieves remarkable success rates:
            </p>
            <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
              <li>
                Limb salvage success: 85-95% for most extremity vascular
                injuries with timely intervention
              </li>
              <li>
                Mortality reduction: Contemporary protocols have decreased
                trauma-related vascular death rates significantly{" "}
              </li>
              <li>
                Endovascular success: 90-95% technical success for appropriate
                injuries
              </li>
              <li>
                Open surgical repair: Excellent patency rates with 80-90% of
                repairs remaining functional long-term{" "}
              </li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl bg-blue-50">
            <h3 className="font-bold mb-3">Factors Influencing Outcomes: </h3>
            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>Time to treatment (golden hour principle) </li>
              <li>Severity and location of injury</li>
              <li>Presence of associated injuries</li>
              <li>Patient's overall health status</li>
              <li>Surgical expertise and facility resources</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── PROCEDURE ── */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          The Procedure: What to Expect
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Before the Procedure",
              points: [
                "Emergency assessment and imaging",
                "Stabilization of blood pressure and bleeding",
                "Consent and treatment planning",
              ],
            },
            {
              title: "During the Procedure",
              points: [
                "Surgical or endovascular repair",
                "Continuous monitoring",
                "Team coordination",
              ],
            },
            {
              title: "After the Procedure",
              points: [
                "ICU or monitored recovery",
                "Pain management",
                "Physiotherapy and recovery",
              ],
            },
          ].map((sec, i) => (
            <div key={i} className="p-5 border rounded-2xl bg-white">
              <h3 className="font-bold mb-3">{sec.title}</h3>
              <ul className="text-sm list-disc pl-5 space-y-2">
                {sec.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <p className="text-gray-700 text-sm mb-6">
          In some cases, vascular health issues extend beyond trauma and may
          include chronic conditions such as varicose veins or peripheral artery
          disease. We provide advanced{" "}
          <Link
            href="/services/varicose-veins-treatment-in-gurgaon"
            className="text-blue-500 font-bold hover:text-blue-700 transition-all"
          >
            varicose vein treatment in Gurgaon{" "}
          </Link>{" "}
          using modern techniques, along with effective{" "}
          <Link
            href={"/services/peripheral-artery-disease-treatment-in-gurgaon"}
            className="text-blue-500 font-bold hover:text-blue-700 transition-all"
          >
            peripheral artery disease treatment in Gurgaon
          </Link>{" "}
          to restore proper blood circulation and prevent complications.
        </p>
      </div>

      {/* ── CONCLUSION ── */}
      <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
        <h2 className="text-xl font-bold mb-3">Conclusion</h2>
        <p className="text-sm text-gray-700">
          Vascular trauma is a medical emergency that demands rapid and expert
          care. With advanced diagnostic tools and modern surgical and
          endovascular techniques, most vascular trauma can be treated
          successfully, saving both life and limb.
        </p>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Common Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How quickly must vascular trauma be treated?",
              a: "Vascular trauma is a true emergency requiring treatment within 6-8 hours for best limb salvage outcomes. For life-threatening bleeding, treatment must be immediate.",
            },
            {
              q: "What are the chances of saving a limb?",
              a: "With prompt treatment, limb salvage rates typically range from 85-95%, depending on injury severity and time to treatment.",
            },
            {
              q: "Will I need blood thinners after repair?",
              a: "Many patients require antiplatelet therapy or anticoagulation after vascular repair to prevent clotting. Your surgeon will determine the specific medication and duration based on your repair type.",
            },
            {
              q: "How long is recovery?",
              a: "Hospital stays range from several days to weeks. Return to normal activities typically takes 6-12 weeks for less severe injuries, while complex cases may require 3-6 months.",
            },
            {
              q: "Can vascular trauma heal without surgery?",
              a: "Most significant vascular trauma requires intervention. Attempting to wait with serious vascular injuries risks limb loss or death. Professional evaluation is essential.",
            },
            {
              q: "What if I notice problems after treatment?",
              a: "Contact your vascular surgeon immediately if you notice new symptoms like pain, swelling, color changes, or decreased pulses. Early detection allows for easier management of any complications.",
            },
          ].map((faq, i) => {
            const isOpen = openFaqIndex === i;

            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen
                    ? "border-[var(--med-primary)] bg-[var(--med-light)]"
                    : "border-[var(--med-border)] bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left gap-4"
                >
                  <span
                    className={`font-semibold text-sm md:text-base pr-2 ${
                      isOpen ? "text-[var(--med-primary)]" : "text-gray-800"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-[var(--med-primary)]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-[var(--med-primary)] border-2 border-[var(--med-primary)] p-6 rounded-xl text-center">
        <p className="mb-4">
          Immediate care is critical in vascular trauma cases.
        </p>
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Get Emergency Consultation"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
