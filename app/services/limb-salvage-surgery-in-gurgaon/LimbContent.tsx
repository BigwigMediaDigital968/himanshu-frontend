"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
  Stethoscope,
} from "lucide-react";

export default function LimbSalvageContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a salvage surgery?",
      a: "Salvage surgery refers to procedures done to save a body part that is at risk of being lost. Limb salvage surgery specifically aims to preserve an arm or leg.",
    },
    {
      q: "Who needs limb salvage surgery?",
      a: "People with severe circulation issues, infections, injuries, or diabetic complications may need limb salvage surgery when the limb can still be saved.",
    },
    {
      q: "Is limb salvage better than amputation?",
      a: "In many cases, limb salvage surgery is preferred because it helps maintain natural movement and independence. Each case is evaluated individually.",
    },
    {
      q: "How long does recovery from limb salvage surgery take?",
      a: "Recovery varies based on the condition and procedures involved. Some patients heal in weeks, while others may need longer support.",
    },
    {
      q: "Can limb salvage surgery prevent future amputations?",
      a: "When done at the right time, limb salvage surgery can significantly reduce the risk of amputation and improve long-term outcomes.",
    },
    {
      q: "Where can I get diabetic foot treatment in Gurgaon?",
      a: (
        <p className="text-gray-700 text-sm leading-relaxed">
          You can consult an experienced vascular specialist like Dr. Himanshu
          Verma for advanced <b>diabetic foot treatment in Gurgaon</b> along
          with comprehensive limb salvage care.
        </p>
      ),
    },
  ];

  const whenRecommended = [
    "Non-healing foot or leg ulcers",
    "Severe infections that have not responded to basic treatment",
    "Peripheral arterial disease reduces blood flow",
    "Traumatic injuries affecting bones, nerves, or vessels",
    "Complications related to diabetes",
  ];

  const howItWorksSteps = [
    {
      num: "01",
      title: "Restoring blood circulation through vascular procedures",
      desc: "Vascular procedures are performed to improve blood supply to the affected limb.",
    },
    {
      num: "02",
      title: "Removing Infected or Dead Tissue",
      desc: "Damaged tissue is carefully removed to allow healthy tissue to heal and recover.",
    },
    {
      num: "03",
      title: "Treating wounds using advanced wound care techniques",
      desc: "Wounds are treated using advanced techniques closely linked with diabetic foot treatment, especially in cases involving chronic wounds and infection.",
    },
    {
      num: "04",
      title: "Stabilizing Bones & Soft Tissues",
      desc: "Structural support is restored to ensure the limb can bear weight and function properly.",
    },
    {
      num: "05",
      title: "Ongoing Monitoring to Support Healing",
      desc: "Regular follow-ups and monitoring keep the recovery on track and catch any complications early.",
    },
  ];

  const risks = [
    "Delayed wound healing",
    "Recurring infection",
    "Need for additional procedures",
    "Prolonged recovery time",
  ];

  const whyItMatters = [
    "Supports better balance and movement",
    "Preserves emotional well-being and confidence",
    "Reduces long-term dependence on artificial aids",
    "Empowers patients to make informed decisions",
  ];

  const BulletItem = ({
    text,
    color = "bg-[var(--med-primary)]",
  }: {
    text: string;
    color?: string;
  }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <span
        className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${color}`}
      />
      {text}
    </li>
  );

  return (
    <div className="font-sans">
      {/* ── HERO ── */}
      <div className="relative rounded-2xl overflow-hidden bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Vascular Surgeon · Gurgaon
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
          Limb Salvage Surgery in Gurgaon
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-2">
          Diabetes & Trauma Care
        </p>
        <p className="text-white/60 text-sm max-w-xl mb-8">
          A specialized medical approach focused on saving an injured or
          diseased arm or leg instead of removing it - restoring blood flow,
          controlling infection, and preserving mobility.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Limb-First", "Preservation Approach"],
            ["5-Step", "Structured Process"],
            ["Early Action", "Best Outcomes"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS LIMB SALVAGE ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Is Limb Salvage Surgery?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <b>Limb salvage surgery in Gurgaon</b> is a specialized medical
            approach focused on saving an injured or diseased arm or leg instead
            of removing it. The goal of limb salvage surgery is to restore blood
            flow, control infection, repair damaged tissues, and help patients
            continue using their natural limb.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This type of care is often chosen when there is a risk of amputation
            due to poor circulation, severe trauma, chronic wounds, or long
            standing diabetes related problems. Many of these cases begin with
            conditions that require proper <b>diabetic foot treatment</b> to
            prevent complications and support limb preservation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Limb salvage surgery looks beyond removing the problem and focuses
            on preserving mobility, confidence, and daily independence.
          </p>
        </div>

        {/* Early action card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Act Early
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you or a loved one is facing the possibility of limb loss,
            exploring <b>limb salvage surgery in Gurugram</b> early can open
            doors to better outcomes.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you are looking for <b>diabetic foot treatment in Gurgaon</b>,
            early care can help reduce the risk of serious complications and
            limb loss.
          </p>
          {[
            "Timely consultation makes a real difference",
            "Limb preservation over amputation",
            "Personalized care for each patient",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <div className="pt-2">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Book a Consultation"
            />
          </div>
        </div>
      </div>

      {/* ── WHEN IS IT RECOMMENDED ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Indications
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            When Is Limb Salvage Surgery Recommended?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Limb salvage surgery is usually recommended when the limb is still
            viable but under serious threat. Dr. Himanshu Verma considers{" "}
            <b>limb salvage surgery in Gurugram</b> when the blood supply can be
            improved, and tissues have the potential to heal. Common situations
            include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {whenRecommended.map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{s}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            Patients with such conditions often require structured{" "}
            <b>diabetic foot treatment</b> before considering advanced limb
            salvage procedures. Choosing <b>limb salvage surgery in Gurgaon</b>{" "}
            at the right time can reduce pain, shorten recovery, and help
            patients return to everyday activities. Speaking with a specialist
            early helps you understand if limb salvage surgery is the right path
            for you.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Speak with a Specialist"
          />
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            The Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Limb Salvage Surgery Works
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            <b>Limb salvage surgery in Gurgaon</b> usually involves a
            step-by-step plan rather than a single procedure. The process is
            designed around the patient's condition and overall health.
          </p>
        </div>

        <div className="space-y-0">
          {howItWorksSteps.map((step, i) => (
            <div key={step.num} className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                {i < howItWorksSteps.length - 1 && (
                  <div
                    className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
                    style={{ minHeight: "40px" }}
                  />
                )}
              </div>
              <div className="md:col-span-11 pb-8 md:pl-6">
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-2xl bg-[var(--med-primary)] text-white px-6 py-4 text-center font-semibold text-sm md:text-base">
          Every Limb salvage surgery in Gurugram plan is personalized. The focus
          stays on saving the limb while improving comfort and function.
          Patients are guided through each stage so they feel informed and
          involved.
        </div>
      </div>

      {/* ── RISKS + WHO PERFORMS ── */}
      <div className="mb-14 grid gap-6">
        {/* Risks */}
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Risks and Complications of Limb Salvage Surgery
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Like any medical procedure, limb salvage surgery carries certain
            risks. These depend on the severity of the condition and the
            patient's health. Possible risks include:
          </p>
          <ul className="space-y-2">
            {risks.map((r) => (
              <BulletItem key={r} text={r} color="bg-red-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Even with these risks, <b>limb salvage surgery in Gurgaon</b> is
            often preferred when it offers a chance to keep the limb functional.
            Clear communication and regular follow-ups help reduce
            complications.
          </p>
        </div>

        {/* Who Performs */}
        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          <div className="bg-[var(--med-primary)] p-6 flex flex-col justify-center gap-3">
            <Stethoscope className="w-7 h-7 text-white/60" />
            <h2 className="text-lg font-bold text-white">
              Who Performs Limb Salvage Surgery?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              <b>Limb salvage surgery in Gurgaon</b> is performed by experienced
              vascular surgeons like Dr. Himanshu Verma, who specialize in
              restoring blood flow and managing complex limb conditions.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-6 flex flex-col gap-3">
            {[
              "Assesses whether limb salvage is possible",
              "Plans the best outcome for each patient",
              "Balances medical expertise with thoughtful decision-making",
              "Brings clarity and reassurance at every step",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY ADVANCED LIMB SALVAGE MATTERS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Why It Matters
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Advanced Limb Salvage Matters
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          <div className="grid md:grid-cols-2">
            <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
              <ShieldCheck className="w-8 h-8 text-white/60" />
              <p className="text-white/80 text-sm leading-relaxed">
                Advanced{" "}
                <b className="text-white">limb salvage surgery in Gurgaon</b>{" "}
                focuses not just on saving a limb, but on improving quality of
                life. Keeping your natural limb can support better balance,
                movement, and emotional well-being.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Limb salvage surgery in Gurgaon also helps many patients avoid
                long-term dependence on artificial aids. Taking action early and
                understanding your choices empowers you to make informed
                decisions.
              </p>
            </div>
            <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)]">
                Benefits of Keeping Your Natural Limb
              </p>
              {whyItMatters.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Schedule an Appointment"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Common Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">FAQs</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
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

      {/* ── FINAL CTA ── */}
      <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-[var(--med-primary)]" />
          <p className="text-xl font-bold text-gray-800">
            Explore Your Options Before It's Too Late.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          If you or a loved one is facing the possibility of limb loss, consult
          Dr. Himanshu Verma for expert <b>limb salvage surgery in Gurgaon</b>{" "}
          and <b>diabetic foot treatment in Gurgaon</b>. A timely consultation
          can make a real difference.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
