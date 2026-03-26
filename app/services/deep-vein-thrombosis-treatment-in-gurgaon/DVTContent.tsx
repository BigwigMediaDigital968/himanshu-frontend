"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Stethoscope,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function DVTContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the cause of a deep vein thrombosis?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Deep Vein Thrombosis is caused by slow blood flow, vein injury, or
          increased blood clotting, often triggered by inactivity or medical
          conditions. Proper evaluation for{" "}
          <b>Deep Vein Thrombosis Treatment in Gurgaon</b> can identify the
          exact cause.
        </p>
      ),
    },
    {
      q: "What are three signs of DVT?",
      a: "Three common signs of Deep Vein Thrombosis are leg swelling, pain or tenderness, and skin warmth or redness.",
    },
    {
      q: "Can DVT be cured?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Deep Vein Thrombosis can be effectively treated and managed with
          timely medical care, reducing long-term risks. Many patients opt for{" "}
          <b>Deep Vein Thrombosis Treatment in Gurgaon</b> for advanced care
          options.
        </p>
      ),
    },
    {
      q: "What is the treatment for DVT?",
      a: "Deep Vein Thrombosis treatment usually includes blood thinners, compression therapy, and lifestyle changes.",
    },
    {
      q: "How long does Deep Vein Thrombosis treatment last?",
      a: "Treatment duration for Deep Vein Thrombosis varies, but many patients need medication for several months based on risk factors.",
    },
    {
      q: "Is Deep Vein Thrombosis life-threatening?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Deep Vein Thrombosis can be life-threatening if untreated, especially
          if it leads to a pulmonary embolism, which is why early care matters.
          For those considering <b>Deep Vein Thrombosis Treatment in Gurgaon</b>
          , early consultation significantly improves outcomes.
        </p>
      ),
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
          DVT Specialists · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Deep Vein Thrombosis Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
          Early diagnosis, effective blood clot treatment, and personalized care
          for faster recovery from experienced DVT Specialists in Gurgaon.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Early", "Diagnosis"],
            ["Advanced", "Treatment Options"],
            ["Expert", "DVT Specialists"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-lg md:text-2xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS DVT ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Deep Vein Thrombosis Treatment in Gurgaon
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Deep Vein Thrombosis is a condition caused by a clot forming inside
            one of your body's deep veins, usually in your leg; this reduces
            circulation to that area. For patients seeking{" "}
            <b>Deep Vein Thrombosis Treatment in Gurgaon</b>, early diagnosis
            and timely care are essential.
          </p>
          <p className="text-gray-700 leading-relaxed">
            DVT can be serious if not treated promptly. Many patients develop
            DVT without any noticeable symptoms. For this reason, it is
            important to recognize Deep Vein Thrombosis early and seek treatment
            immediately.
          </p>
        </div>
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Act Early
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you are experiencing unexplained leg swelling, leg pain, or any
            other signs of DVT, please see a specialist as soon as possible to
            help prevent potential complications from Deep Vein Thrombosis.
            Consulting an expert for{" "}
            <b>Deep Vein Thrombosis Treatment in Gurgaon</b> can help reduce
            serious health risks.
          </p>
          <div className="pt-2">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Schedule an Appointment"
            />
          </div>
        </div>
      </div>

      {/* ── SYMPTOMS AND CAUSES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Signs & Causes
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Symptoms and Causes of Deep Vein Thrombosis
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Different people experience different symptoms of Deep Vein
            Thrombosis. Understanding symptoms early is important for those
            considering <b>Deep Vein Thrombosis Treatment in Gurgaon</b>. Some
            patients exhibit obvious warning signs, whilst others do not realise
            anything is wrong with them. This is why timely consultation with
            experienced <b>DVT Specialists</b> is important.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms */}
          <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                Common Signs of Deep Vein Thrombosis
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Common signs of Deep Vein Thrombosis may include:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Swelling of the leg on one side",
                "Pain or tenderness when you walk or stand",
                "Warmth around the area where you have the condition",
                "Discoloration/redness of the skin",
              ].map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">
              Recognizing these signs early can help you seek{" "}
              <b>Deep Vein Thrombosis Treatment in Gurgaon</b> at the right
              time.
            </p>
          </div>

          {/* Causes */}
          <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                What Causes DVT?
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Deep Vein Thrombosis is often caused by a combination of factors
              that slow down the flow of blood through your veins, cause damage
              to the walls of your veins, or increase the clotting of blood —
              which may require proper blood clot treatment to avoid
              complications.
            </p>
            <ul className="space-y-2">
              {[
                "Sitting for long periods of time",
                "Not drinking enough fluids to stay hydrated",
                "Having recently had surgery",
                "Vein wall damage or injury",
                "Increased blood clotting tendency",
              ].map((s) => (
                <BulletItem key={s} text={s} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              If you have experienced any of these signs, a fast diagnosis can
              help treat your condition more easily and safely. Many patients
              also search for <b>DVT Treatment near me</b> to get quick medical
              attention.
            </p>
          </div>
        </div>
      </div>

      {/* ── RISK FACTORS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Who Is at Risk
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            DVT Risk Factors
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Although everyone can experience deep vein thrombosis (DVT), certain
            individuals may be at a greater risk. In such cases, consulting{" "}
            <b>DVT Specialists in Gurgaon</b> can help in early detection and
            prevention. <br /> <br />
            Some examples of risk factors associated with deep vein thrombosis
            DVT include the following:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            "Long-distance travel",
            "Prolonged immobility (such as during bed rest)",
            "Recent surgical procedures or injuries",
            "Pregnancy and postpartum changes",
            "Obesity",
            "Smoking",
            "Family history of DVT",
          ].map((t, i) => (
            <div
              key={t}
              className="rounded-2xl border border-[var(--med-border)] bg-white p-4 flex flex-col gap-2"
            >
              <span className="text-xs font-bold text-[var(--med-primary)] opacity-40">
                0{i + 1}
              </span>
              <span className="text-sm font-medium text-gray-800 leading-snug">
                {t}
              </span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm">
          Understanding the various risk factors associated with deep vein
          thrombosis will prepare you for the associated higher risk of
          developing DVT, and will help you identify ways to reduce your risk or
          prevent serious complications. People at higher risk should consider
          timely <b>Deep Vein Thrombosis Treatment in Gurgaon</b> for better
          outcomes.
        </p>
      </div>

      {/* ── COMPLICATIONS ── */}
      <div className="grid gap-6 mb-14">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Complications of Deep Vein Thrombosis
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Serious complications can occur if Deep Vein Thrombosis is
            untreated.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Pulmonary embolism - clot travels to the lungs and limits blood flow",
              "Long-term leg pain and swelling",
              "Skin changes associated with Deep Vein Thrombosis",
              "Life-threatening if not treated promptly",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-red-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mb-5">
            Immediate <b>blood clot treatment in Gurgaon</b> can help prevent
            such life-threatening situations.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="w-full text-center text-sm font-semibold text-[var(--med-primary)] border border-[var(--med-primary)] rounded-xl py-2.5 hover:bg-[var(--med-primary)] hover:text-white transition-all cursor-pointer"
          >
            Early diagnosis reduces complications. Book now →
          </button>
        </div>

        {/* Treatment */}
        <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[var(--med-primary)]" />
            <h2 className="text-lg font-bold text-gray-800">
              How Is DVT Treated?
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            If you are looking for{" "}
            <b>Deep Vein Thrombosis Treatment in Gurgaon</b>, personalized
            treatment plans can ensure effective recovery. Treating DVT focuses
            primarily on halting existing clots and preventing the formation of
            new ones. The specifics of a treatment plan will vary depending on
            the severity of the condition and the patient's general state of
            health.
          </p>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Two often-used forms of DVT treatment are:
          </h3>
          <ul className="space-y-2 mb-4">
            {[
              "Medications that thin the blood",
              "Compression stockings to promote blood flow in the legs",
              "Lifestyle modifications that keep blood flowing",
              "Advanced medical treatment for more serious cases",
            ].map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500">
            Patients searching for <b>DVT Treatment in Gurgaon</b> can benefit
            from advanced and minimally invasive options. Choosing the right
            expert for <b>Deep Vein Thrombosis Treatment in Gurgaon</b> plays a
            crucial role in recovery.
          </p>
        </div>
      </div>

      {/* ── PREVENTION ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <Zap className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Prevention and Daily Care of DVT
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              You can make lifestyle changes to help prevent Deep Vein
              Thrombosis. You may reduce your risk of developing Deep Vein
              Thrombosis by maintaining activity levels, staying hydrated, and
              avoiding prolonged periods of inactivity.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              You might think that these things are just little habits; however,
              they do have significant effects on your health-related longevity
              and overall wellness. Consulting a qualified{" "}
              <b>vein doctor in Gurgaon</b> can further support prevention and
              care.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Regular follow-ups and expert guidance for{" "}
              <b>Deep Vein Thrombosis Treatment in Gurgaon</b> can further help
              in long-term prevention.
            </p>
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
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? "border-[var(--med-primary)] bg-[var(--med-light)]" : "border-[var(--med-border)] bg-white"}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left gap-4"
                >
                  <span
                    className={`font-semibold text-sm md:text-base pr-2 ${isOpen ? "text-[var(--med-primary)]" : "text-gray-800"}`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--med-primary)]" : "text-gray-400"}`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-5" : "max-h-0"}`}
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
            Don't ignore the signs of DVT.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">If you:</p>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {[
            "Are experiencing unexplained leg swelling",
            "Have leg pain or tenderness when walking",
            "Notice skin redness or warmth in your leg",
            "Are at high risk due to recent surgery or immobility",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm mb-6">
          Schedule a structured <b>Deep Vein Thrombosis Treatment in Gurgaon</b>{" "}
          evaluation today.
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
