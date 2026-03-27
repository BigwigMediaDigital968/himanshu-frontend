"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function OncoContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="space-y-14">
      {/* HERO */}
      <div className="bg-[var(--med-primary)] text-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-3">ONCO Vascular Surgery</h1>
        <p className="text-white/80">
          ONCO vascular Surgery plays a critical role in modern cancer care.
          Many cancers grow close to major blood vessels, and in some cases,
          they involve or surround arteries and veins that supply the heart,
          brain, and other vital organs. ONCO vascular Surgery focuses on safely
          managing these blood vessels during cancer treatment so that tumor
          removal does not compromise circulation or increase life-threatening
          risks.
          <br />
          <br />
          Dr. Himanshu provides ONCO vascular Surgery with a patient-first
          approach, focusing on safety, clarity, and long-term outcomes. The
          goal is simple. Remove cancer effectively while protecting blood flow
          to essential organs.
          <br />
          <br />
          If you or your family member is planning cancer surgery and blood
          vessel involvement has been mentioned, this page will help you
          understand what ONCO vascular Surgery really means and why it matters.
        </p>
      </div>

      {/* TERMINOLOGY */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Terminology of ONCO vascular Surgery
        </h2>
        <p>
          Understanding a few basic terms can make treatment decisions less
          overwhelming.
        </p>
        <ul className="space-y-2 text-sm my-3 list-disc pl-5">
          <li>
            ONCO vascular Surgery refers to cancer surgery that involves blood
            vessels
          </li>
          <li>
            Tumor vessel involvement means cancer is touching or surrounding an
            artery or vein
          </li>
          <li>
            Vascular reconstruction restores blood flow after tumor removal
          </li>
          <li>
            DVT refers to deep vein thrombosis, which can occur after major
            cancer surgery
          </li>
          <li>
            Arterial blockage may affect the blood supply to the heart or brain
            if not managed properly
          </li>
        </ul>

        <p>
          Knowing these terms helps patients ask better questions and feel more
          confident about their care.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[var(--med-light)] p-6 rounded-2xl border-2">
        <p className="text-sm mb-3">
          If you want clear guidance about your specific diagnosis, scheduling a
          consultation can help bring clarity.
        </p>
        <ButtonFill onClick={() => setOpenPopup(true)} text="Consult Now" />
      </div>

      {/* CONCEPT */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Concept of ONCO vascular Surgery
        </h2>
        <p>
          ONCO vascular Surgery is about maintaining a careful balance during
          cancer treatment. The main aim is to remove the tumor completely while
          keeping the blood flow to vital organs safe. When cancer grows close
          to major blood vessels, expert vascular support helps prevent serious
          risks related to the heart, brain, and limbs. This approach improves
          safety during surgery and supports a smoother recovery.
        </p>
        <ul className="space-y-2 text-sm my-3 list-disc pl-5">
          <li>
            Ensures complete tumor removal without compromising circulation
          </li>
          <li>Protects blood vessels connected to the heart and brain</li>
          <li>Reduces the risk of excessive bleeding during surgery</li>
          <li>Lowers DVT chances after cancer treatment</li>
          <li>Helps avoid long-term vessel blockage</li>
          <li>Supports faster healing and better surgical outcomes</li>
        </ul>
      </div>

      {/* ROLES */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Various Roles of Vascular Surgeons During Cancer Surgery
        </h2>
        <p>
          Vascular surgeons play multiple roles during ONCO vascular Surgery,
          both before and during the operation.
        </p>
        <ul className="space-y-2 text-sm my-3 list-disc pl-5">
          <li>Assess blood vessel involvement using imaging</li>
          <li>Plan strategies to avoid blockage</li>
          <li>Control bleeding during tumor removal</li>
          <li>Reconstruct arteries or veins</li>
          <li>Reduce post-surgery DVT chances</li>
          <li>Monitor circulation during recovery</li>
        </ul>
        <p>
          This teamwork approach ensures that cancer surgery does not create new
          risks related to blood flow or clot formation.{" "}
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[var(--med-light)] p-6 rounded-2xl border-2">
        <p className="text-sm mb-3">
          If blood vessels are involved in your cancer diagnosis, early vascular
          evaluation can make a real difference.
        </p>
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Book Consultation"
        />
      </div>

      {/* WHY IT MATTERS */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          Why ONCO vascular Surgery Matters for Patient Safety
        </h2>
        <p className="text-sm text-gray-700">
          Without ONCO vascular Surgery, tumors near vessels can increase the
          risk of sudden bleeding, vessel blockage, or reduced blood supply to
          critical organs. This can impact recovery and long-term health.
          <br />
          <br />
          ONCO vascular Surgery focuses on preventing these issues before they
          happen, helping patients recover with confidence and fewer
          complications.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          FAQs About Oncovascular Surgery
        </h2>

        {[
          {
            q: "What types of cancers need ONCO vascular Surgery?",
            a: "Cancers near major blood vessels, including abdominal, pelvic, and soft tissue tumors, may require ONCO vascular Surgery.",
          },
          {
            q: "Does ONCO vascular Surgery increase surgery time?",
            a: "It may add planning time, but it significantly improves safety and reduces complications.",
          },
          {
            q: "Are DVT chances higher after cancer surgery?",
            a: "Yes, but ONCO vascular Surgery helps reduce DVT risk through careful vessel management.",
          },
          {
            q: "Can blood flow to the heart or brain be affected?",
            a: "Without proper vascular care, yes. ONCO vascular Surgery focuses on preventing such blockages.",
          },
          {
            q: "Is recovery longer after ONCO vascular Surgery?",
            a: "Recovery is often smoother due to fewer vascular complications",
          },
        ].map((faq, i) => {
          const isOpen = openFaqIndex === i;

          return (
            <div key={i} className="border rounded-xl mb-3">
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                className="w-full flex justify-between p-4 text-left"
              >
                {faq.q}
                <ChevronDown
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="p-4 text-sm text-gray-700">{faq.a}</div>
              )}
            </div>
          );
        })}
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
