"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function AVFistulaContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is an AV Fistula?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            An Arteriovenous (AV) Fistula is a surgically constructed conduit
            made between an artery and vein that is typically created in the arm
            to provide stable access for hemodialysis. For patients seeking{" "}
            <b>AV Fistula Treatment in Gurgaon</b>, this procedure is considered
            the most reliable form of dialysis access.
          </p>
        </>
      ),
    },
    {
      q: "What is the best dialysis access?",
      a: "An AV fistula is considered the safest and most durable dialysis access for renal patients.",
    },
    {
      q: "How long does a fistula take to mature?",
      a: "Typically, it takes about 6–12 weeks for an AV fistula to mature. However, early Balloon Assisted Maturation can sometimes accelerate usability.",
    },
    {
      q: "Can a blocked fistula be saved?",
      a: "Yes. If treated early using procedures like thrombectomy or angioplasty, most occluded fistulas can be successfully salvaged.",
    },
    {
      q: "How long can an AV fistula last?",
      a: "With proper monitoring and maintenance, some AV fistulas can last 10–20 years or even longer.",
    },
    {
      q: "How often should a fistula be checked?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            A fistula should be checked before every dialysis session and
            periodically evaluated by a vascular access specialist providing{" "}
            <b>AV Fistula Treatment in Gurgaon</b>.
          </p>
        </>
      ),
    },
    {
      q: "Is catheter dialysis safe long-term?",
      a: "Catheter dialysis has a higher risk of infection and complications. For long-term dialysis, doctors prefer AV fistulas to avoid continuous catheter dependency.",
    },
    {
      q: "Can an AV fistula get infected?",
      a: "Infection in an AV fistula is rare but possible. Proper hygiene, monitoring, and regular medical checkups help reduce the risk.",
    },
    {
      q: "What happens if an AV fistula fails?",
      a: "If an AV fistula fails, it can lead to poor dialysis efficiency, clot formation, or infection. Early diagnosis and treatment are important to restore proper access.",
    },
    {
      q: "How do you repair an AV fistula?",
      a: "Repair procedures such as angioplasty, thrombectomy, or surgical revision can restore the function of a damaged fistula and help it last for many more years, reducing the need for repeated surgeries.",
    },
    {
      q: "Is AV fistula suitable for all patients?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Most patients are suitable for an AV fistula, but the size and
            health of the veins may influence the type of access chosen during{" "}
            <b>AV Fistula Treatment in Gurgaon</b>.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        AV Fistula Treatment in Gurgaon
      </h2>

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is an AV Fistula?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          An Arteriovenous (AV) Fistula is a surgically constructed conduit made
          between an artery and concern that is typically guided in the arm to
          provide stable access for hemodialysis. For patients seeking{" "}
          <b>AV Fistula Treatment in Gurgaon</b>, this procedure is considered
          the most reliable form of dialysis access.
        </p>

        <p className="text-gray-700 leading-relaxed">
          It is considered the gold standard for dialysis access because it:
        </p>

        <ul className="space-y-3">
          {[
            "Provides high blood flow for efficient dialysis",
            "Has the lowest infection risk",
            "Lasts longer than grafts or catheters",
            " Reduces hospitalization and access-related complications",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          At AV Access Care, we follow a structured AV Fistula Management
          Protocol focusing not only on creation, but on lifelong maintenance
          and preservation of your dialysis access for patients seeking{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* Protocol */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Our AV Fistula Management Protocol
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Dialysis access is not a one-time surgery. It takes planning, it takes
          tracking and timely intervention. Our protocol for AV Fistula
          Treatment in Gurgaon includes:
        </p>

        <h4 className="font-bold">1. Pre-Fistula Planning</h4>
        <ul className="space-y-3">
          {[
            "Early referral before dialysis starts",
            "Vein preservation education (avoid IV lines in potential access arm)",
            "Ultrasound vein mapping",
            "Individualized access planning",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-bold">2. Precision Fistula Creation</h4>
        <ul className="space-y-3">
          {[
            "Distal-first strategy (radiocephalic preferred when possible)",
            "Microsurgical techniques for better maturation",
            " Selection based on vessel quality, age, and dialysis needs",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-bold">3. Structured Surveillance Program</h4>
        <ul className="space-y-3">
          {[
            "Regular clinical examination",
            "Flow assessment during dialysis",
            "Doppler ultrasound monitoring",
            "Early detection of narrowing or flow reduction",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-bold">4. Early Intervention Strategy</h4>
        <ul className="space-y-3">
          {[
            "Balloon Assisted Maturation (BAM)",
            "Fistula angioplasty for narrowing",
            "Thrombectomy for clot removal",
            "Salvage procedures before considering abandonment",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-bold">5. Long-Term Access Preservation</h4>
        <ul className="space-y-3">
          {[
            "Aneurysm monitoring",
            "Flow regulation for high-output fistulas",
            "Access rotation planning",
            "Minimizing catheter dependency",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Our goal is simple: Create once. Maintain for years. Avoid failure - a
          key principle in effective <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TYPES */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Types of AV Fistulas
        </h2>

        <h3 className="text-gray-700 font-bold">Radiocephalic AV Fistula</h3>

        <p className="text-gray-700 leading-relaxed">
          Wrist [radial artery & cephalic vein in the wrist end-to-side
          anastomosis] making it:
        </p>

        <p className="text-gray-700 leading-relaxed">
          First and preferred option <br />
          Preserves future access sites <br />
          Lower complication rates
        </p>

        <p className="text-gray-700 leading-relaxed">
          This is often the first choice during AV Fistula Treatment in Gurgaon
          when suitable veins are available.
        </p>

        <div className="h-px bg-gray-300 mb-5" />

        <h3 className="text-gray-700 font-bold">Brachiocephalic AV Fistula</h3>

        <p className="text-gray-700 leading-relaxed">
          Connection at the elbow between the brachial artery and cephalic vein
          with features such as:
        </p>

        <p className="text-gray-700 leading-relaxed">
          Created at the elbow <br />
          Higher flow rates <br />
          Used when wrist veins are unsuitable
        </p>

        <div className="h-px bg-gray-300 mb-5" />

        <h3 className="text-gray-700 font-bold">Brachial Basilic AV Fistula</h3>

        <p className="text-gray-700 leading-relaxed">
          Involves the brachial artery and basilic vein, often requiring vein
          transposition.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Two-stage procedure <br />
          Suitable for deeper veins <br />
          Durable long-term access option
        </p>

        <div className="h-px bg-gray-300 mb-5" />

        <h3 className="text-gray-700 font-bold">
          Lower-Limb AV Fistula (Complex or Redo Fistulas)
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Rarely performed, reserved for selected cases, such as:
        </p>

        <p className="text-gray-700 leading-relaxed">
          For patients with failed previous access
          <br />
          Advanced reconstruction techniques
        </p>

        <p className="text-gray-700 leading-relaxed">
          We follow a distal-to-proximal approach to preserve future dialysis
          access options, and each type of AV Fistula is selected based on vein
          and artery quality, patient age, and dialysis needs during{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          To learn about which AV Fistula type is right for you? Schedule an
          evaluation now.
        </p>

        <div className="py-8 border-b border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* WARNING */}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Warning Signs of AV Fistula Problems
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Early detection prevents access loss.
        </p>

        <h3 className="font-semibold text-gray-800">Symptoms to Watch For:</h3>
        <p className="text-gray-700 leading-relaxed">
          Swelling of the arm
          <br />
          Pain or redness near the fistula <br />
          Weak or absent thrill (vibration) <br />
          Prolonged bleeding after dialysis <br />
          Reduced dialysis efficiency <br />
          Visible enlargement or aneurysm
        </p>

        <h3 className="font-semibold text-gray-800">Causes:</h3>
        <p className="text-gray-700 leading-relaxed">
          Swelling of the arm
          <br />
          Blood clots inside the fistula <br />
          Narrowing of the veins or arteries <br />
          Repeated trauma from dialysis needles
        </p>

        <p className="text-gray-700 leading-relaxed">
          Prompt attention to these signs helps prevent severe complications
          during <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      </div>

      {/* Complications */}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Complications of AV Fistula
        </h2>

        <p className="font-semibold text-gray-800">
          Though rare, complications can arise:
        </p>

        <p className="text-gray-700 leading-relaxed">
          Infection at the surgical site
          <br />
          Thrombosis or clot formation <br />
          Aneurysm formation in the vein <br />
          Heart strain due to high blood flow <br />
          Central venous stenosis <br />
          Recurrent catheter dependence
        </p>

        <p className="text-gray-700 leading-relaxed">
          Regular monitoring ensures timely intervention, keeping the AV Fistula
          functional for years for patients undergoing{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          Protect your dialysis access. Book a follow-up appointment today.
        </p>

        <div className="py-8 border-b border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* WHY DO AV FISTULAS FAIL? */}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Why Do AV Fistulas Fail?
        </h2>

        <p className="text-gray-700 leading-relaxed font-medium">
          Common causes include:
        </p>

        <p className="text-gray-700 leading-relaxed">
          Venous narrowing (stenosis)
          <br />
          Thrombosis (clot formation) <br />
          Poor maturation <br />
          Repeated needle trauma <br />
          High-flow complications <br />
          Infection (rare but serious)
        </p>

        <p className="text-gray-700 leading-relaxed">
          Most fistulas fail gradually and can be saved if detected early during
          ongoing <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* PROBLEM */}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          How We Diagnose AV Fistula Problems
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our protocol combines clinical expertise with imaging for accurate
          diagnosis during AV Fistula Treatment in Gurgaon:
        </p>

        <p className="text-gray-700 leading-relaxed">
          Detailed physical examination
          <br />
          Doppler ultrasound flow assessment <br />
          Fistulogram (angiography) when needed
          <br />
          Dialysis parameter review
        </p>

        <p className="text-gray-700 leading-relaxed">
          We believe clinical examination remains the most powerful surveillance
          tool when performed regularly.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* ADVANCE TREATMENT */}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Advanced Treatments for AV Fistula Salvage
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our “Salvage First” philosophy dictates every fistula deserves an
          attempt at saving during <b>AV Fistula Treatment in Gurgaon</b>.
        </p>

        <h4 className="text-gray-800 font-bold">Available Treatments:</h4>

        <p className="text-gray-700 leading-relaxed">
          Balloon Assisted Maturation (BAM)
          <br />
          AV Fistula Angioplasty <br />
          Mechanical or Pharmacomechanical Thrombectomy
          <br />
          Surgical Revision
          <br />
          Basilic Vein Transposition
          <br />
          Aneurysm Repair
          <br />
          Flow Reduction Procedures
          <br />
          Hybrid Endovascular and Surgical Salvage
        </p>

        <p className="text-gray-700 leading-relaxed">
          Only when absolutely necessary do we recommend AV graft placement. The
          AV Fistula is long-lasting; well maintained and can last for decades,
          meaning no repeated surgeries.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* Why Choose*/}
      <div className="space-y-6 my-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Why Choose Expert Care for AV Fistula?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Fistula success rates are better, complications lower and recovery
          faster in patients treated by an experienced vascular surgeon
          providing AV Fistula Treatment in Gurgaon. Consultation is the most
          important step you can take; don’t wait to notice something that makes
          your fistula look funny or feel funny before taking action to protect
          your dialysis access.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Schedule your AV Fistula consultation today for personalized care.
        </p>

        <div className="py-8 border-b border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          FAQs
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                className="border border-[var(--med-border)] rounded-2xl overflow-hidden bg-[var(--med-light)]"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between px-6 py-5 text-left"
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
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* BENEFITS */}
      <div className="space-y-6 my-10">
        <p className="text-xl md:text-2xl font-semibold text-gray-800">
          Protect your dialysis lifeline.
        </p>

        <p className="text-gray-700">If you:</p>
        <ul className="space-y-3">
          {[
            "Are planning dialysis",
            "Have a new fistula that is not maturing",
            "Notice reduced dialysis flow",
            " Have swelling or repeated clotting",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700">
          Schedule a structured <b>AV Fistula Treatment in Gurgaon</b>{" "}
          evaluation today.
        </p>
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
