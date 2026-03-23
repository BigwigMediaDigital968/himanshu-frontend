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
} from "lucide-react";

export default function PeripheralArteryContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the symptoms of blocked arteries in the legs?",
      a: "Pain or cramping while walking, numbness, cold feet, slow-healing wounds, and shiny skin.",
    },
    {
      q: "How to test for Peripheral Artery Disease?",
      a: "Ankle-Brachial Index (ABI), Doppler ultrasound, and angiography.",
    },
    {
      q: "What is considered the first symptom of peripheral arterial disease?",
      a: "Intermittent leg pain while walking is called claudication.",
    },
    {
      q: "Can PAD lead to heart problems?",
      a: "Yes, it increases the risk of heart attack and stroke.",
    },
    {
      q: "Is PAD reversible?",
      a: "Lifestyle changes and medical interventions can significantly improve symptoms and blood flow.",
    },
    {
      q: "How quickly should I seek Peripheral Artery Disease treatment in Gurgaon?",
      a: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Immediate consultation for{" "}
          <b>Peripheral Artery Disease treatment in Gurgaon</b> is important if
          you notice leg pain, slow-healing wounds, or cold feet.
        </p>
      ),
    },
    {
      q: "What is the best treatment for leg artery blockage?",
      a: "Treatment depends on severity and may include angioplasty for leg arteries, medications, or bypass surgery recommended by a specialist.",
    },
  ];

  const symptoms = [
    "Leg pain or cramping while walking (intermittent claudication)",
    "Numbness or weakness in the legs",
    "Cold lower legs or feet",
    "Slow-healing wounds or ulcers on toes or feet",
    "Shiny skin, hair loss, or changes in nail growth",
    "Weak or absent pulse in the legs or feet",
  ];

  const facts = [
    "Millions worldwide are affected, often without knowing it.",
    "Smoking, diabetes, high blood pressure, and high cholesterol are key risk factors.",
    "Adults over 50 are more susceptible.",
    "PAD reduces mobility and can affect quality of life.",
    "Early diagnosis improves treatment success.",
    "Lifestyle changes enhance the effectiveness of medical treatment.",
    "PAD increases the risk of heart attack and stroke.",
    "Imaging techniques like ultrasound and angiography are essential for detection.",
    "Minimally invasive procedures can restore blood flow safely.",
    "Regular follow-up is crucial for long-term vascular health.",
  ];

  const diagnosisSteps = [
    {
      num: "01",
      title: "Medical History & Physical Exam",
      desc: "A detailed review of symptoms, risk factors, and clinical examination.",
    },
    {
      num: "02",
      title: "Ankle-Brachial Index (ABI) Test",
      desc: "Compares blood pressure in the ankle and arm to assess artery narrowing.",
    },
    {
      num: "03",
      title: "Doppler Ultrasound",
      desc: "Non-invasive imaging to evaluate blood flow and detect blockages.",
    },
    {
      num: "04",
      title: "Digital Subtraction Angiography (DSA)",
      desc: "Detailed X-ray imaging to map blood vessels and locate blockages precisely.",
    },
    {
      num: "05",
      title: "CT or MR Angiography",
      desc: "Advanced cross-sectional imaging for a comprehensive view of affected arteries.",
    },
  ];

  const treatments = [
    "Digital Subtraction Angiography (DSA)",
    "Iliac Artery Angioplasty & Stenting",
    "Femoral Artery Angioplasty",
    "Femoral Endarterectomy",
    "Superficial Femoral Artery (SFA) Angioplasty",
    "SFA Drug-Eluting Balloon Angioplasty",
    "SFA Stenting",
    "Below Knee (BTK / TBL) Angioplasty",
    "Femoro-Popliteal Bypass",
    "Femoro-Tibial Bypass",
    "Tibial / Plantar Vessel Angioplasty",
    "Intravascular Lithotripsy (Shockwave Therapy)",
    "IVUS – Intravascular Ultrasound Guided Procedures",
    "Embolectomy for Acute Limb Ischemia",
  ];

  const lifestyle = [
    "Quit smoking",
    "Maintain a healthy diet",
    "Exercise regularly",
    "Control blood pressure and cholesterol",
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
          Vascular & Endovascular Surgeon · Gurgaon
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
          Peripheral Artery Disease Treatment in Gurgaon
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
          Peripheral Artery Disease is a serious circulatory condition where
          narrowed arteries reduce blood flow to the limbs. If left untreated,
          it can cause pain, mobility issues, and in severe cases, limb loss.
          Our clinic provides personalized care for every patient, ensuring
          accurate diagnosis and effective treatment. Consulting a qualified
          <b>Peripheral Artery Disease Specialist</b> ensures timely diagnosis
          and prevents complications.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["14 Procedures", "Treatment Options"],
            ["5-Step", "Diagnosis Process"],
            ["Minimally Invasive", "Preferred Approach"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO + WHO IS A SPECIALIST ── */}
      <div className="grid  gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Who Is a Peripheral Artery Disease Specialist?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Peripheral Artery Disease is a serious circulatory condition where
            narrowed arteries reduce blood flow to the limbs. If left untreated,
            it can cause pain, mobility issues, and in severe cases, limb loss.
            Consulting a qualified <b>Peripheral Artery Disease Specialist</b>{" "}
            ensures timely diagnosis and prevents complications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A <b>Peripheral Artery Disease specialist in Gurgaon</b> is a
            trained vascular expert who focuses on conditions affecting the
            arteries outside the heart. <b>Dr. Himanshu Verma</b>, a highly
            experienced Vascular & Endovascular Surgeon, is skilled in
            identifying blockages, assessing blood flow, and recommending
            personalized <b>Peripheral Artery Disease treatment in Gurgaon</b>.
            Under his care, patients receive guidance ranging from lifestyle
            changes to advanced minimally invasive procedures tailored to their
            specific condition.
          </p>
        </div>

        {/* Key facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Why Early Consultation Matters
          </p>
          {[
            "Prevents limb loss and serious complications",
            "Accurate diagnosis of artery blockages",
            "Personalized minimally invasive treatment",
            "Guidance from a specialist at every step",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SYMPTOMS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Recognise the Signs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are Peripheral Artery Disease Symptoms?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Peripheral Artery Disease symptoms often start subtly and worsen
            over time. Watch for:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {symptoms.map((s, i) => (
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
          <div className="flex items-center gap-2 flex-1">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <p className="text-gray-700 text-sm font-medium">
              Early detection can prevent serious complications and improve
              mobility. Experiencing any of these symptoms? Contact us
              immediately for a thorough assessment.
            </p>
          </div>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Contact Us Now"
          />
        </div>
      </div>

      {/* ── 10 FACTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Know the Facts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            10 Evidence-Based Facts About Peripheral Artery Disease
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <div
              key={fact}
              className="flex items-start gap-3 border border-[var(--med-border)] rounded-2xl px-5 py-4 bg-white"
            >
              <span className="text-xs font-bold text-[var(--med-primary)] opacity-50 flex-shrink-0 mt-0.5 w-5">
                {i + 1}.
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">
                {fact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DIAGNOSIS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Our Diagnostic Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Our Peripheral Artery Disease Specialist Diagnoses the Condition
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Our diagnosis process is thorough and patient-focused. Accurate
            diagnosis ensures you receive the most effective{" "}
            <b>Peripheral Artery Disease treatment in Gurgaon</b>.
          </p>
        </div>

        <div className="space-y-0">
          {diagnosisSteps.map((step, i) => (
            <div key={step.num} className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                {i < diagnosisSteps.length - 1 && (
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
          Accurate diagnosis ensures you receive the most effective Peripheral
          Artery Disease treatment in Gurgaon.
        </div>
      </div>

      {/* ── TREATMENTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Procedures
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Treatment Options for Peripheral Artery Disease
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Every procedure is performed under the guidance of an experienced{" "}
            <b>Peripheral Artery Disease Specialist</b> to ensure safety and
            precision. We provide advanced{" "}
            <b>Peripheral Artery Disease treatment in Gurgaon</b> tailored to
            each patient, including:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {treatments.map((t, i) => (
            <div
              key={t}
              className="border border-[var(--med-border)] rounded-2xl p-4 bg-white hover:shadow-md transition-shadow flex items-start gap-3"
            >
              <span className="text-xs font-bold text-[var(--med-primary)] opacity-40 flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-gray-800 leading-snug">
                {t}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            Start your treatment journey now. Speak with our specialists for
            Peripheral Artery Disease treatment in Gurgaon to find the best
            solution for you.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Speak with Our Specialists
          </button>
        </div>
      </div>

      {/* ── LIFESTYLE + WHY CHOOSE ── */}
      <div className="mb-14 grid md:grid-cols-2 gap-6">
        {/* Lifestyle */}
        <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-[var(--med-primary)]" />
            <h2 className="text-lg font-bold text-gray-800">
              Lifestyle and Prevention
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Alongside medical procedures, lifestyle changes play a key role:
          </p>
          <ul className="space-y-2">
            {lifestyle.map((l) => (
              <BulletItem key={l} text={l} />
            ))}
          </ul>
        </div>

        {/* Why choose */}
        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          <div className="bg-[var(--med-primary)] p-6 flex flex-col justify-center gap-3">
            <ShieldCheck className="w-7 h-7 text-white/60" />
            <h2 className="text-lg font-bold text-white">
              Why Choose Dr. Himanshu Verma?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              A highly experienced Vascular & Endovascular Surgeon offering 14
              advanced procedures for{" "}
              <b className="text-white">
                Peripheral Artery Disease treatment in Gurgaon
              </b>
              .
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-6 flex flex-col gap-3">
            {[
              "Personalized treatment for every patient",
              "Minimally invasive, faster recovery",
              "Advanced imaging-guided procedures",
              "Comprehensive follow-up care",
            ].map((item) => (
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
            Don't Wait - Early Treatment Makes All the Difference.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Speak with our specialists for{" "}
          <b>Peripheral Artery Disease treatment in Gurgaon</b> to find the best
          solution for you. Schedule your consultation with Dr. Himanshu Verma
          today.
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
