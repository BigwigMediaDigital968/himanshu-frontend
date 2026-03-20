"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Activity,
  ShieldCheck,
  Zap,
  HeartPulse,
} from "lucide-react";

export default function ChronicVenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How to reverse chronic venous insufficiency?",
      a: (
        <p>
          Chronic Venous Insufficiency cannot always be fully reversed, but
          early-stage Chronic Venous Insufficiency can improve with compression,
          exercise, and proper vein care provided through{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "What is the root cause of venous insufficiency?",
      a: "The main root cause of Chronic Venous Insufficiency is damaged or weak vein valves that allow blood to flow backward.",
    },
    {
      q: "What are the early warning signs of CVI?",
      a: (
        <p>
          Early signs of Chronic Venous Insufficiency include leg heaviness,
          mild swelling, aching, and visible veins. Seeking{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can
          help manage these symptoms.
        </p>
      ),
    },
    {
      q: "What exercises should be avoided with venous insufficiency?",
      a: "High-impact activities that strain the legs for long periods may worsen Chronic Venous Insufficiency. Low-impact exercises like walking are usually better.",
    },
    {
      q: "Can chronic venous insufficiency lead to ulcers?",
      a: (
        <p>
          Yes, untreated Chronic Venous Insufficiency can reduce skin nutrition
          and cause venous ulcers over time, which may require advanced{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "When should I see a doctor for chronic venous insufficiency?",
      a: (
        <p>
          If swelling, pain, or skin changes persist, it is wise to consult
          early for <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>{" "}
          before the condition progresses.
        </p>
      ),
    },
  ];

  const bodyEffects = [
    "The buildup of fluid in the ankles and legs",
    "Skin that is discolored and itchy",
    "Reduced oxygen in the tissue",
    "Wounds that heal slowly",
  ];

  const symptoms = [
    "Leg heaviness or aching",
    "Swollen legs after prolonged sitting or standing",
    "Varicose veins (large, bulging veins in your legs)",
    "Darkened skin around the ankles",
    "Leg cramps or restless legs",
  ];

  const causes = [
    "Weak vein valves",
    "Prolonged standing or sitting",
    "Obesity (overweight people)",
    "Lack of physical activity",
    "Previous pregnancies",
    "Prior leg vein injury or blood clots",
  ];

  const stages = [
    {
      num: "01",
      title: "Swelling & Ache",
      desc: "Initial fluid buildup and leg heaviness, especially by evening.",
    },
    {
      num: "02",
      title: "Obvious Varicose Veins",
      desc: "Visible, bulging veins appear on the legs as pressure increases.",
    },
    {
      num: "03",
      title: "Skin Changes",
      desc: "Skin becomes thicker and changes in color around the ankles.",
    },
    {
      num: "04",
      title: "Non-Healing Ulcers",
      desc: "Leg ulcers that do not heal - a sign of advanced CVI requiring urgent care.",
    },
  ];

  const lifestyle = [
    "Regular exercise by walking",
    "Elevating your legs",
    "Maintaining a healthy weight",
    "Not remaining in one position for long periods of time",
  ];

  const treatments = [
    {
      name: "Compression Therapy",
      badge: "First-Line",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "Support stockings, bandages, or socks help the venous function of the legs and assist in reducing swelling.",
    },
    {
      name: "Manual Lymphatic Drainage (MLD)",
      badge: "Gentle Therapy",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: "This gentle hands-on therapy encourages the movement of fluids and helps relieve discomfort.",
    },
    {
      name: "Lymphedema Treatment Program",
      badge: "Combined Care",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "A combined program using compression, exercise, and skin care to reduce long-term swelling in the legs.",
    },
    {
      name: "Ulcer Healing Protocols",
      badge: "Wound Care",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: "Skin protection and wound care techniques to help promote healing of venous ulcers.",
    },
    {
      name: "Iliac Vein Stents for Non-Healing Ulcers",
      badge: "Advanced",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "A surgical procedure performed on deeper veins to increase blood circulation for stubborn non-healing ulcers.",
    },
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
          Vascular Specialist · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Chronic Venous Insufficiency Treatment in Gurgaon
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
          Feeling tired or heavy in your legs by evening? Early consultation for
          CVI Treatment in Gurgaon can help prevent the condition from
          worsening.
        </p>
        {/* <button
          onClick={() => setOpenPopup(true)}
          className="inline-flex items-center gap-2 bg-white text-[var(--med-primary)] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all"
        >
          Book a Consultation with Dr. Himanshu Verma
        </button> */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["4 Stages", "Disease Progression"],
            ["5 Treatments", "Available Options"],
            ["Early Care", "Best Outcomes"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS CVI ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What is Chronic Venous Insufficiency?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Chronic Venous Insufficiency is a long-term condition where the
            veins in your legs struggle to send blood back to the heart. In
            Chronic Venous Insufficiency, the valves inside the veins weaken or
            get damaged, allowing blood to pool in the legs. Over time, Chronic
            Venous Insufficiency can affect daily comfort, skin health, and
            mobility if not managed early.
          </p>
          <p className="text-gray-700 leading-relaxed">
            People experiencing these symptoms often search for{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> to manage
            vein health and prevent complications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you notice leg heaviness or swelling that worsens by evening, it
            may be time to understand Chronic Venous Insufficiency better and
            take action before symptoms progress. Early consultation for{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help
            prevent the condition from worsening.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Feeling tired in your legs by evening? Learn how Chronic Venous
            Insufficiency Treatment in Gurgaon can help you manage Chronic
            Venous Insufficiency today.
          </p>
        </div>

        {/* Key facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <h2 className="text-md font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            How does chronic venous insufficiency affect my body?
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            Chronic venous insufficiency typically occurs in the lower legs and
            is characterized by high pressure due to inadequate blood return.
            Effects include:
          </p>
          {bodyEffects.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-2">
            Chronic venous insufficiency may also decrease comfort with walking,
            thereby decreasing one's overall quality of life. Patients
            experiencing these symptoms may consider consulting a specialist
            like Dr. Himanshu Verma for{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> to improve
            circulation and reduce discomfort.
          </p>
        </div>
      </div>

      {/* ── SYMPTOMS & CAUSES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Symptoms & Causes
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What are the signs and symptoms of chronic venous insufficiency?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-gray-800">
                Signs & Symptoms of CVI
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              There are several common symptoms of Chronic Venous Insufficiency:
            </p>
            <ul className="space-y-2">
              {symptoms.map((s) => (
                <BulletItem key={s} text={s} color="bg-orange-400" />
              ))}
            </ul>
            <p className="text-xs text-gray-600 mt-4 italic">
              Venous ulcers (open sores) are a sign of advanced Chronic Venous
              Insufficiency.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              If you can relate to any of these symptoms, seeking{" "}
              <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can
              help slow down the progression of the disease and improve leg
              health.{" "}
            </p>
          </div>

          {/* Causes */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                What Causes Chronic Venous Insufficiency?
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Chronic Venous Insufficiency usually arises as a result of any of
              the following:
            </p>
            <ul className="space-y-2">
              {causes.map((c) => (
                <BulletItem key={c} text={c} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Understanding the root cause helps doctors recommend the most
              suitable CVI Treatment in Gurgaon for long-term vein health.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            If you can relate to any of these symptoms, seeking{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> early can
            help slow down the progression of the disease and improve leg
            health.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Check-up"
          />
        </div>
      </div>

      {/* ── STAGES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Disease Progression
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are the Stages of Chronic Venous Insufficiency?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Chronic Venous Insufficiency deteriorates through stages. Early
            diagnosis and timely{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help
            manage symptoms before the condition progresses.
          </p>
        </div>

        <div className="space-y-0">
          {stages.map((stage, i) => (
            <div key={stage.num} className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {stage.num}
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
                    style={{ minHeight: "40px" }}
                  />
                )}
              </div>
              <div className="md:col-span-11 pb-8 md:pl-6">
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {stage.title}
                </h3>
                <p className="text-gray-600 text-sm">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-2xl bg-[var(--med-primary)] text-white px-6 py-4 text-center font-semibold text-sm md:text-base">
          Early diagnosis and timely{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help
          manage symptoms before the condition progresses to more advanced
          stages.
        </div>
      </div>

      {/* ── DIAGNOSIS & LIFESTYLE ── */}
      <div className="mb-14">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Diagnosis */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <HeartPulse className="w-5 h-5 text-[var(--med-primary)]" />
              <h2 className="text-lg font-bold text-gray-800">
                Diagnosis of CVI
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Diagnosing chronic venous insufficiency consists of a physical
              examination and imaging studies to evaluate the veins. Doctors may
              recommend <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>{" "}
              based on the severity of symptoms and vein health.
            </p>
            <div className="mt-4 space-y-2">
              {[
                "Physical examination",
                "Doppler ultrasound imaging",
                "Venography if needed",
                "Assessment of vein health & severity",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h2 className="text-lg font-bold text-gray-800">
                Lifestyle & Management
              </h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              The following lifestyle habits have a significant impact on the
              management of chronic venous insufficiency:
            </p>
            <ul className="space-y-2">
              {lifestyle.map((l) => (
                <BulletItem key={l} text={l} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              These lifestyle adjustments often complement{" "}
              <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> and help
              improve circulation in the legs.
            </p>
          </div>
        </div>
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Treatment Pathways
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Treatment of Chronic Venous Insufficiency
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Several advanced options are available for{" "}
            <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>, depending
            on the severity of the condition and overall vein health. The
            management focuses on reducing swelling, improving blood flow, and
            supporting overall leg health. <br /> <br />
            Some common treatments included in Chronic Venous Insufficiency
            Treatment in Gurgaon are:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-gray-800 text-sm leading-snug">
                  {t.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-gray-600 my-4 md:my-6 max-w-3xl">
            When Chronic Venous Insufficiency is identified early and managed
            with proper <b>Chronic Venous Insufficiency Treatment in Gurgaon</b>
            , it can significantly reduce the risk of complications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-primary)]">
          <p className="text-white/90 text-sm font-medium flex-1">
            With the right{" "}
            <b className="text-white">
              Chronic Venous Insufficiency Treatment in Gurgaon
            </b>
            , patients can experience improved mobility, reduced swelling, and
            better overall quality of life.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Schedule an Appointment
          </button>
        </div>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Dr. Himanshu Verma?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              When Chronic Venous Insufficiency is identified early and managed
              with proper{" "}
              <b className="text-white">
                Chronic Venous Insufficiency Treatment in Gurgaon
              </b>
              , it can significantly reduce the risk of complications.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            {[
              "Comprehensive evaluation and imaging",
              "Personalized treatment for every stage",
              "Advanced endovascular expertise",
              "Holistic care including lifestyle guidance",
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
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
                  className="w-full flex justify-between items-center px-6 py-4 text-left gap-4 cursor-pointer"
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
            Take Action Before Symptoms Progress.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Feeling tired in your legs by evening?{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help you
          manage CVI today. Schedule a structured evaluation with Dr. Himanshu
          Verma and take the first step toward better leg health.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Consultation"
          />
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
