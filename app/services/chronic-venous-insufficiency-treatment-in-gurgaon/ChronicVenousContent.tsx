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
  Quote,
} from "lucide-react";

export default function ChronicVenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the signs and symptoms of chronic venous insufficiency?",
      a: (
        <p>
          The signs and symptoms of chronic venous insufficiency include
          persistent leg heaviness and aching, ankle swelling that worsens
          through the day, burning or itching around the lower leg, visible
          varicose veins, skin discolouration or hardening near the ankle,
          nighttime cramps, and in advanced cases, slow-healing ulcers near the
          ankle. Many patients experience these symptoms for months or years
          before seeking evaluation — early assessment always leads to better
          outcomes.
        </p>
      ),
    },

    {
      q: "What are the stages of chronic venous insufficiency?",
      a: (
        <p>
          CVI is staged using the CEAP classification from C0 (no visible signs)
          to C6 (active venous ulcer). The stage determines the urgency and type
          of treatment required. Most patients presenting for treatment are at
          stages C2 to C4, where a single minimally invasive procedure provides
          excellent and lasting results.
        </p>
      ),
    },

    {
      q: "What is the difference between varicose veins and chronic venous insufficiency?",
      a: (
        <p>
          Varicose veins are a visible manifestation of venous valve failure.
          Chronic venous insufficiency is the underlying condition causing them
          — along with swelling, skin changes, and ulcers. Not all CVI patients
          have prominent varicose veins, but the underlying venous dysfunction
          is the same. Both conditions are assessed and treated by Dr. Himanshu
          Verma.
        </p>
      ),
    },

    {
      q: "How is chronic venous insufficiency diagnosed?",
      a: (
        <p>
          Diagnosis involves a clinical examination, CEAP staging, and a Venous
          Duplex Doppler Ultrasound — the gold standard investigation that maps
          valve function, measures reflux, and rules out deep vein thrombosis.
          Results are available the same day. No hospital admission is required
          for the diagnostic assessment.
        </p>
      ),
    },

    {
      q: "Is chronic venous insufficiency treatment covered by insurance in India?",
      a: (
        <p>
          Yes. Chronic venous insufficiency treatment in Gurgaon — including
          EVLT and Radiofrequency Ablation — is covered under most major health
          insurance plans in India, including Mediclaim. Our team assists with
          pre-authorisation and documentation before your procedure.
        </p>
      ),
    },

    {
      q: "How long does treatment take?",
      a: (
        <p>
          Most procedural treatments are completed in 30–60 minutes under local
          anaesthesia with same-day discharge. Patients walk out unassisted.
          Compression therapy is an ongoing management strategy used alongside
          or instead of procedures depending on disease stage.
        </p>
      ),
    },

    {
      q: "Can chronic venous insufficiency be reversed?",
      a: (
        <p>
          Treated veins are permanently sealed and the reflux driving your
          symptoms is eliminated. However, CVI is a systemic tendency of the
          venous system — new insufficiency can develop over time, particularly
          if underlying risk factors are not addressed. Lifestyle modification
          and annual follow-up with Doppler assessment significantly reduce
          long-term recurrence.
        </p>
      ),
    },

    {
      q: "When should I see a doctor for chronic venous insufficiency?",
      a: (
        <p>
          Seek evaluation as soon as you notice persistent leg swelling, skin
          discolouration near the ankle, varicose veins causing discomfort, or
          any wound that is not healing. At early stages, CVI is straightforward
          to treat — the best outcomes consistently follow prompt evaluation.
        </p>
      ),
    },
  ];

  const bodyEffects = [
    "Fluid leaks from vein walls into surrounding tissue, causing swelling",
    "Reduced oxygen delivery leads to skin changes and slow tissue breakdown",
    "Chronic inflammation damages the skin, causing discolouration and hardening",
    "In advanced stages, the skin breaks down entirely, forming open venous ulcers",
  ];

  const symptoms = [
    "Persistent heaviness, aching, or fatigue in the legs worse after prolonged standing or sitting",
    "Swelling in the ankles and lower legs, particularly by end of day",
    "Burning, itching, or throbbing sensation around the lower leg or ankle",
    "Visible varicose veins or dilated surface veins",
    "Skin discolouration - brownish or reddish staining near the ankles",
    "Hardening or tightening of the skin around the lower leg (lipodermatosclerosis)",
    "Nighttime leg cramps and restless legs",
    "Slow-healing wounds or open ulcers near the ankle",
    "A feeling of tightness in the calf when walking",
  ];

  const causes = [
    "Damaged or weakened vein valves - the primary underlying cause",
    "Previous deep vein thrombosis (DVT) - clots can permanently damage valve function",
    "Genetics and family history of venous disease",
    "Prolonged standing or sitting - occupational risk for teachers, healthcare workers, IT professionals, and retail staff",
    "Pregnancy - increased venous pressure and hormonal changes affect valve competence",
    "Obesity - sustained excess pressure on the venous system",
    "Aging - progressive weakening of vein wall elasticity and valve function",
    "Sedentary lifestyle - reduced calf muscle pump activity essential for venous return",
  ];

  const stages = [
    {
      stage: "C0",
      title: "No visible signs of venous disease",
      notice: "Aching or heaviness with no visible changes",
    },
    {
      stage: "C1",
      title: "Spider veins or reticular veins",
      notice: "Fine red or blue surface veins",
    },
    {
      stage: "C2",
      title: "Varicose veins",
      notice: "Bulging, rope-like veins on the leg",
    },
    {
      stage: "C3",
      title: "Oedema",
      notice: "Ankle and lower leg swelling without skin changes",
    },
    {
      stage: "C4",
      title: "Skin changes",
      notice:
        "Discolouration, hardening, or eczema-like changes near the ankle",
    },
    {
      stage: "C5",
      title: "Healed venous ulcer",
      notice: "History of ulceration, now healed",
    },
    {
      stage: "C6",
      title: "Active venous ulcer",
      notice: "Open wound on the lower leg that is not healing",
    },
  ];

  const complications = [
    {
      title: "Venous Ulcers",
      desc: "Open, slow-healing wounds near the ankle — the most serious complication of CVI",
    },
    {
      title: "Lipodermatosclerosis",
      desc: "Permanent hardening and darkening of the skin around the lower leg",
    },
    {
      title: "Chronic Oedema",
      desc: "Persistent swelling that no longer resolves with rest or elevation",
    },
    {
      title: "Superficial Thrombophlebitis",
      desc: "Painful inflammation and clotting in surface veins",
    },
    {
      title: "Deep Vein Thrombosis (DVT)",
      desc: "Blood clots in the deeper veins — potentially life-threatening",
    },
    {
      title: "Skin Breakdown",
      desc: "Eczema-like changes and fragile skin prone to injury and infection",
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
      badge: "First-Line Management",
      badgeClass: "bg-blue-100 text-blue-700 border border-blue-200",
      desc: "Medical-grade compression stockings apply graduated external pressure to the leg, reducing venous pooling, controlling oedema, and slowing disease progression. Used at all stages — alone for early CVI or alongside procedural treatment for moderate to advanced cases.",
      details: [
        "Anaesthesia: None",
        "Recovery: Ongoing management",
        "Best for: All stages, especially C1–C3; post-procedure maintenance",
      ],
    },
    {
      name: "EVLT — Endovenous Laser Treatment",
      badge: "Most Effective for Reflux",
      badgeClass: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      desc: "Laser energy delivered through a thin fibre permanently seals the incompetent superficial vein, eliminating the source of venous reflux that drives CVI progression.",
      details: [
        "Procedure time: 30–45 minutes",
        "Discharge: Same day",
        "Recovery: 1–2 days",
        "Best for: Great saphenous vein incompetence — the most common underlying cause of CVI",
      ],
    },
    {
      name: "RFA — Radiofrequency Ablation",
      badge: "Most Comfortable",
      badgeClass: "bg-purple-100 text-purple-700 border border-purple-200",
      desc: "Radiofrequency energy delivered via a catheter heats and permanently closes the refluxing vein wall. Equally effective to EVLT with excellent patient comfort.",
      details: [
        "Procedure time: 30–45 minutes",
        "Discharge: Same day",
        "Recovery: 1–2 days",
        "Best for: Medium to large incompetent saphenous or perforator veins",
      ],
    },
    {
      name: "Foam Sclerotherapy",
      badge: "Spider & Smaller Veins",
      badgeClass: "bg-pink-100 text-pink-700 border border-pink-200",
      desc: "A foam solution injected into smaller varicose or reticular veins causes the vein wall to collapse and be absorbed naturally. Also used for residual veins following ablation.",
      details: [
        "Procedure time: 15–20 minutes",
        "Discharge: Immediate",
        "Recovery: Same day",
        "Best for: Small varicose veins, spider veins, residual post-ablation veins",
      ],
    },
    {
      name: "Venous Ulcer Management",
      badge: "Advanced CVI — C5 & C6",
      badgeClass: "bg-red-100 text-red-700 border border-red-200",
      desc: "For patients with active or recurrent venous ulcers, treatment combines wound care, compression therapy, correction of the underlying venous reflux, and nutritional support. Correcting the reflux source is essential — without it, ulcers cannot close permanently.",
      details: [
        "Procedure: Reflux ablation + specialist wound management",
        "Monitoring: Regular wound review and Doppler reassessment",
        "Goal: Ulcer closure and prevention of recurrence",
        "Best for: Advanced CVI at stage C5 or C6",
      ],
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
            Chronic venous insufficiency (CVI) is a long-term vascular condition
            in which the veins in your legs are unable to return blood to the
            heart efficiently. Inside a healthy vein, small one-way valves open
            to allow blood to flow upward and close to stop it falling back.
            When these valves weaken or become damaged, blood flows backward and
            pools in the lower leg, a process called venous reflux. Over time,
            this sustained pooling raises the pressure inside the veins,
            progressively damaging the vein walls, surrounding skin, and deeper
            tissues of the leg.
            <br />
            <br />
            CVI is not a cosmetic problem. It is a chronic, progressive medical
            condition that worsens without treatment. Untreated CVI is one of
            the leading causes of venous leg ulcers - wounds that can take
            months to heal and significantly reduce quality of life. Many
            patients who seek chronic venous insufficiency treatment in Gurgaon
            have been managing symptoms for years without knowing the underlying
            cause.
          </p>
        </div>

        {/* Key facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <h2 className="text-md font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            How Does Chronic Venous Insufficiency Affect the Body?
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            When venous pressure remains persistently elevated, the following
            changes occur in the lower limb:
          </p>
          {bodyEffects.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-2">
            This progression is why early diagnosis matters. The earlier the
            condition is identified, the simpler and more effective the
            treatment.
          </p>
        </div>
      </div>

      <div>
        <img
          src="/services/chronic-venous-insufficiency/sein-stripping-1.png"
          alt="What is Chronic Venous Insufficiency?"
          className="w-full rounded-lg border border-gray-200 mb-5"
        />
      </div>

      {/* ── SYMPTOMS & CAUSES ── */}
      <div className="my-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Symptoms & Causes
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What are the signs and symptoms of chronic venous insufficiency?
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Recognising the signs and symptoms of chronic venous insufficiency
            at an early stage is the single most important factor in preventing
            disease progression. Many patients normalise symptoms like leg
            heaviness after standing, mild ankle swelling, or persistent itching
            - as routine tiredness. They are not. They are the body's earliest
            warning signals of venous disease, and acting on them before skin
            changes or ulcers develop leads to significantly better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-gray-800">
                Signs and Symptoms of Chronic Venous Insufficiency
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
      <div className="my-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Disease Progression
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are the Stages of Chronic Venous Insufficiency?
          </h2>
          <p className="text-gray-600 mt-2">
            The stages of chronic venous insufficiency are classified using the
            internationally recognised CEAP grading system from C0 (no visible
            signs) to C6 (active venous ulcer). Understanding your stage
            determines the most appropriate treatment and how urgently it is
            needed.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--med-border)] bg-white">
          {/* Header */}
          <div className="grid grid-cols-12 bg-[var(--med-light)] border-b border-[var(--med-border)]">
            <div className="col-span-2 p-4 font-semibold text-center text-sm text-gray-800">
              CEAP Stage
            </div>

            <div className="col-span-4 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
              Description
            </div>

            <div className="col-span-6 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
              What You May Notice
            </div>
          </div>

          {/* Rows */}
          {stages.map((stage, index) => (
            <div
              key={stage.stage}
              className={`grid grid-cols-12 ${
                index !== stages.length - 1
                  ? "border-b border-[var(--med-border)]"
                  : ""
              }`}
            >
              <div className="col-span-2 p-4 text-sm text-center font-semibold text-[var(--med-primary)]">
                {stage.stage}
              </div>

              <div className="col-span-4 p-4 text-sm text-gray-700 border-l border-[var(--med-border)]">
                {stage.title}
              </div>

              <div className="col-span-6 p-4 text-sm text-gray-600 border-l border-[var(--med-border)]">
                {stage.notice}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="my-6 space-y-2 text-sm text-gray-700 leading-relaxed">
          <p>
            Treating CVI at stage <strong>C2</strong> or <strong>C3</strong>{" "}
            usually requires one outpatient session with same-day discharge.
          </p>

          <p>
            Treating it at <strong>C6</strong> requires weeks of wound care and
            multiple procedures.
          </p>

          <p>
            The decision to seek early evaluation is, in almost every case, the
            most important one a patient will make.
          </p>
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-4 text-center font-semibold text-sm md:text-base">
          Early diagnosis and timely{" "}
          <b>Chronic Venous Insufficiency Treatment in Gurgaon</b> can help
          manage symptoms before the condition progresses to more advanced
          stages.
        </div>
      </div>

      {/* ── COMPLICATIONS ── */}
      <section className="my-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Are the Serious Complications of Untreated CVI?
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            When left without treatment, the sustained increase in venous
            pressure progressively damages the leg:
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-[var(--med-border)] bg-white">
          {/* Header */}
          <div className="grid grid-cols-12 bg-[var(--med-light)] border-b border-[var(--med-border)]">
            <div className="col-span-4 p-4 font-semibold text-sm text-gray-800">
              Complication
            </div>

            <div className="col-span-8 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
              What It Means
            </div>
          </div>

          {/* Rows */}
          {complications.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-12 ${
                index !== complications.length - 1
                  ? "border-b border-[var(--med-border)]"
                  : ""
              }`}
            >
              <div className="col-span-4 p-4 text-sm font-medium text-gray-900">
                {item.title}
              </div>

              <div className="col-span-8 p-4 text-sm text-gray-700 border-l border-[var(--med-border)] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Early intervention prevents all of these outcomes. Do not wait until
            symptoms worsen.
          </p>
        </div>
      </section>

      {/* ── DIAGNOSIS & LIFESTYLE ── */}
      <div className="my-14">
        <div className="rounded-3xl border border-[var(--med-border)] bg-white overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-[var(--med-light)] border-b border-[var(--med-border)] px-6 md:px-8 py-6">
            <div className="flex items-center gap-3 mb-3">
              <HeartPulse className="w-6 h-6 text-[var(--med-primary)]" />

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                How Is Chronic Venous Insufficiency Diagnosed?
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-5xl">
              Accurate diagnosis defines the stage, identifies the underlying
              venous anatomy, and guides every treatment decision. Dr. Himanshu
              Verma conducts a structured, stepwise assessment for every
              patient.
            </p>
          </div>

          {/* Steps */}
          <div className="divide-y divide-[var(--med-border)]">
            {[
              {
                step: "Step 1",
                title: "Clinical Examination",
                desc: "A thorough physical assessment of both legs in the standing position. Dr. Himanshu evaluates the distribution of varicosities, skin changes, oedema, and any areas of ulceration or wound breakdown.",
              },
              {
                step: "Step 2",
                title: "CEAP Classification",
                desc: "Each patient is formally graded using the CEAP system (C0 to C6) to determine disease severity and prioritise the type and urgency of intervention required.",
              },
              {
                step: "Step 3",
                title: "Venous Duplex Doppler Ultrasound",
                desc: "The gold standard diagnostic tool for CVI. This painless 20-minute scan maps the entire venous system of the leg — identifying where valves are failing, quantifying venous reflux, ruling out deep vein thrombosis, and confirming the anatomy needed to plan treatment.",
                highlight:
                  "Results are available the same day. No hospital admission required.",
              },
              {
                step: "Step 4",
                title: "Venography or CT Venogram (if indicated)",
                desc: "In complex or recurrent cases, or where deep venous obstruction is suspected, advanced imaging is arranged to provide a complete anatomical picture before treatment planning.",
              },
              {
                step: "Step 5",
                title: "Personalised Treatment Plan",
                desc: "A fully individualised treatment plan is prepared based on all findings — taking into account disease stage, symptom burden, lifestyle, occupation, and the patient's own goals.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="grid md:grid-cols-12 gap-6 px-6 md:px-8 py-7"
              >
                {/* Left Step */}
                <div className="md:col-span-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-[var(--med-primary)] text-white text-sm font-semibold px-4 py-2">
                    {item.step}
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                  {item.highlight && (
                    <div className="mt-4 rounded-xl bg-[var(--med-light)] border border-[var(--med-border)] px-4 py-3">
                      <p className="text-sm font-medium text-gray-800">
                        {item.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <img
          src="/services/chronic-venous-insufficiency/sein-stripping-2.png"
          alt="Treatment of Chronic Venous Insufficiency"
          className="w-full rounded-lg border border-gray-200 mb-5"
        />
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Treatment Pathways
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Chronic Venous Insufficiency Treatment in Gurgaon - Available
            Options
          </h2>
          <p className="text-gray-600 mt-2 max-w-4xl">
            CVI is a progressive condition, but it is highly treatable
            particularly when addressed before reaching advanced stages. Every
            patient receives a personalised treatment plan based on their CEAP
            stage, Doppler findings, symptom severity, lifestyle, and goals. All
            procedures are minimally invasive, performed under local
            anaesthesia, and require no overnight hospital stay.
          </p>
        </div>

        <section className="my-14">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Treatment Options for Chronic Venous Insufficiency
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-5xl">
              Treatment is selected based on the stage of disease, the pattern
              of venous reflux, symptom severity, and the patient’s lifestyle
              needs.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 mb-12">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="border border-[var(--med-border)] rounded-3xl p-6 bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-bold text-gray-900 text-base leading-snug">
                    {t.name}
                  </h3>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${t.badgeClass}`}
                  >
                    {t.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {t.desc}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {t.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--med-primary)] mt-2 flex-shrink-0" />

                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-3xl border border-[var(--med-border)] bg-white">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900 px-6 md:px-8 py-6">
              Treatment Comparison at a Glance
            </h2>
            <div className="grid grid-cols-12 bg-[var(--med-light)] border-b border-[var(--med-border)]">
              <div className="col-span-4 md:col-span-3 p-4 font-semibold text-sm text-gray-800">
                Procedure
              </div>

              <div className="col-span-2 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
                Anaesthesia
              </div>

              <div className="col-span-3 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
                Recovery
              </div>

              <div className="col-span-3 md:col-span-4 p-4 font-semibold text-sm text-gray-800 border-l border-[var(--med-border)]">
                Best For
              </div>
            </div>

            {[
              {
                procedure: "Compression Therapy",
                anaesthesia: "None",
                recovery: "Ongoing",
                best: "All stages, maintenance",
              },
              {
                procedure: "EVLT",
                anaesthesia: "Local",
                recovery: "1–2 days",
                best: "Saphenous reflux, large veins",
              },
              {
                procedure: "RFA",
                anaesthesia: "Local",
                recovery: "1–2 days",
                best: "Large/medium vein incompetence",
              },
              {
                procedure: "Foam Sclerotherapy",
                anaesthesia: "None",
                recovery: "Same day",
                best: "Small veins, residual veins",
              },
              {
                procedure: "Venous Ulcer Programme",
                anaesthesia: "Local/None",
                recovery: "Ongoing",
                best: "C5–C6 advanced disease",
              },
            ].map((row, index, arr) => (
              <div
                key={row.procedure}
                className={`grid grid-cols-12 ${
                  index !== arr.length - 1
                    ? "border-b border-[var(--med-border)]"
                    : ""
                }`}
              >
                <div className="col-span-4 md:col-span-3 p-4 text-sm font-medium text-gray-900">
                  {row.procedure}
                </div>

                <div className="col-span-2 p-4 text-sm text-gray-700 border-l border-[var(--med-border)]">
                  {row.anaesthesia}
                </div>

                <div className="col-span-3 p-4 text-sm text-gray-700 border-l border-[var(--med-border)]">
                  {row.recovery}
                </div>

                <div className="col-span-3 md:col-span-4 p-4 text-sm text-gray-700 border-l border-[var(--med-border)]">
                  {row.best}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk */}
        <section className="my-14">
          <div className="overflow-hidden rounded-3xl border border-[var(--med-border)] bg-white shadow-sm">
            {/* Header */}
            <div className="bg-red-50 border-b border-[var(--med-border)] px-6 md:px-8 py-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Risks and What to Expect
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-5xl">
                All procedures are safe and well-tolerated. Patients should be
                aware of the following:
              </p>
            </div>

            {/* Content */}
            <div className="divide-y divide-[var(--med-border)]">
              {/* Common */}
              <div className="grid md:grid-cols-12 gap-6 px-6 md:px-8 py-7">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
                    Common (Temporary)
                  </div>
                </div>

                <div className="md:col-span-9">
                  <p className="text-gray-700 leading-relaxed">
                    Mild bruising, swelling, or tightness along the treated vein
                    — usually resolves within 1–2 weeks. Skin discolouration
                    from sclerotherapy typically fades over 2–6 months.
                  </p>
                </div>
              </div>

              {/* Uncommon */}
              <div className="grid md:grid-cols-12 gap-6 px-6 md:px-8 py-7">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-semibold">
                    Uncommon
                  </div>
                </div>

                <div className="md:col-span-9">
                  <p className="text-gray-700 leading-relaxed">
                    Superficial phlebitis managed with anti-inflammatory
                    medication; small areas of temporary numbness near the
                    treated vein.
                  </p>
                </div>
              </div>

              {/* Rare */}
              <div className="grid md:grid-cols-12 gap-6 px-6 md:px-8 py-7">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-semibold">
                    Rare
                  </div>
                </div>

                <div className="md:col-span-9">
                  <p className="text-gray-700 leading-relaxed">
                    Partial vein recanalisation; infection at the access site;
                    deep vein thrombosis — risk minimised through pre-procedural
                    Doppler screening and early post-procedure mobilisation.
                  </p>
                </div>
              </div>

              {/* Emergency */}
              <div className="grid md:grid-cols-12 gap-6 px-6 md:px-8 py-7 bg-red-50/40">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 text-sm font-semibold">
                    Seek Immediate Care
                  </div>
                </div>

                <div className="md:col-span-9">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    Seek urgent medical attention if you experience sudden leg
                    pain with swelling, chest pain, or shortness of breath
                    following any procedure.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--med-border)] bg-[var(--med-light)] px-6 md:px-8 py-5">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Dr. Himanshu Verma reviews each patient&apos;s individual risk
                profile in full before any treatment is recommended.
              </p>
            </div>
          </div>
        </section>

        <div>
          <p className="text-gray-600 my-4 md:my-6">
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

      {/* ── WHY CHOOSE DR. HIMANSHU VERMA ── */}
      <div className="mb-14 rounded-3xl border border-[var(--med-border)] bg-white overflow-hidden shadow-sm">
        {/* TOP HERO */}
        <div className="bg-[var(--med-primary)] px-6 md:px-10 py-10 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>

              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider">
                  Trusted Vascular Specialist
                </p>
                <h2 className="text-lg md:text-xl font-bold leading-tight">
                  Why Choose Dr. Himanshu Verma for Chronic Venous Insufficiency
                  Treatment in Gurgaon?
                </h2>
              </div>
            </div>

            <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-4xl">
              Choosing the right vascular surgeon in Gurgaon is one of the most
              important decisions in your treatment journey. Dr. Himanshu Verma
              is among India&apos;s experienced vascular and endovascular
              surgeons with a dedicated subspecialty focus on chronic venous and
              lymphatic disorders.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-10 bg-[var(--med-light)]">
          {/* HOSPITAL */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-white p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Practising At
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              <b>Fortis Memorial Research Institute, Sector 44, Gurgaon</b> —
              accredited by both NABH and JCI, representing India&apos;s highest
              standards for hospital safety and clinical quality.
            </p>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                value: "17+",
                label: "Years Experience",
              },
              {
                value: "5,000+",
                label: "Vein Procedures",
              },
              {
                value: "29+",
                label: "Research Publications",
              },
              {
                value: "9",
                label: "Book Chapters",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-[var(--med-border)] p-5 text-center"
              >
                <div className="text-3xl font-bold text-[var(--med-primary)] mb-1">
                  {item.value}
                </div>

                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          {/* QUALIFICATIONS */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Qualifications & Memberships
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "MBBS, MS, MCh (Vascular Surgery) — Board-Certified Vascular & Endovascular Surgeon",
                "Fellow, European Venous & Lymphatic Society (FEVS)",
                "Member, Vascular Society of India (VSI)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-[var(--med-border)] p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SPECIALIZATION */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Clinical Expertise
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Specialist in EVLT, RFA, Foam Sclerotherapy, Compression Therapy, and Venous Ulcer Management",
                "Expert in recurrent and post-thrombotic chronic venous insufficiency",
                "Dedicated focus on complex venous and lymphatic disorders",
                "Extensive experience in minimally invasive endovascular procedures",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-[var(--med-border)] p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RESEARCH */}
          <div className="rounded-3xl bg-white border border-[var(--med-border)] p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Research & Academic Recognition
            </h3>

            <div className="space-y-4">
              {[
                "29+ peer-reviewed publications in indexed medical journals",
                "9 authored book chapters on vascular surgery",
                "International speaker — VEITH Symposium, New York",
                "Research referenced in clinical practice guidelines across India",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-[var(--med-primary)] px-5 py-3 text-sm font-medium text-[var(--med-primary)] hover:bg-[var(--med-primary)] hover:text-white transition-colors"
              >
                View Full Profile & Publications →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PATIENT TESTIMONIALS ── */}
      <div className="my-14">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-[var(--med-light)] border border-[var(--med-border)] px-4 py-1 text-sm font-medium text-[var(--med-primary)] mb-4">
            Real Patient Experiences
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Patients treated for chronic venous insufficiency, venous ulcers,
            and advanced varicose vein disease share their recovery experiences
            after treatment by Dr. Himanshu Verma.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              quote:
                "I had been told my leg swelling and skin discolouration were just signs of aging. Dr. Himanshu diagnosed CVI within the first visit and explained exactly what was happening inside my veins. After EVLT, the swelling reduced within two weeks. I wish I had come sooner.",
              name: "Arun K.",
              role: "Retired School Principal, Gurgaon",
              condition: "Chronic Venous Insufficiency (Stage C4)",
              procedure: "EVLT",
              recovery: "2 days",
            },
            {
              quote:
                "I had a venous ulcer on my left ankle for nearly eight months. Multiple dressings had failed to close it. Dr. Verma identified the reflux source on Doppler and treated it with RFA. The ulcer was fully healed within six weeks. I cannot overstate how much this changed my life.",
              name: "Meena T.",
              role: "Homemaker, Faridabad",
              condition: "Chronic Venous Insufficiency (Stage C6)",
              procedure: "RFA + Wound Management",
              recovery: "6 weeks to full healing",
            },
            {
              quote:
                "As a surgeon myself, I was very careful about who I chose for my own CVI treatment. Dr. Himanshu's diagnostic thoroughness and procedural precision are exceptional. His knowledge of venous disease is among the best I have encountered anywhere.",
              name: "Dr. Sanjeev R.",
              role: "Orthopaedic Surgeon, Delhi",
              condition: "Chronic Venous Insufficiency (Stage C3)",
              procedure: "RFA",
              recovery: "1 day",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-3xl border border-[var(--med-border)] bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[var(--med-light)] flex items-center justify-center mb-5">
                <Quote className="w-6 h-6 text-[var(--med-primary)]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{item.quote}"
              </p>

              {/* Patient */}
              <div className="border-t border-[var(--med-border)] pt-5">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.role}</p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-semibold text-gray-800">
                      Condition:
                    </span>
                    <span className="text-gray-600">{item.condition}</span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-semibold text-gray-800">
                      Procedure:
                    </span>
                    <span className="text-gray-600">{item.procedure}</span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-semibold text-gray-800">
                      Recovery:
                    </span>
                    <span className="text-gray-600">{item.recovery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-10 rounded-3xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Rated 4.9 / 5
            </h3>

            <p className="text-gray-600 text-sm">
              Based on 300+ verified Google reviews
            </p>
          </div>

          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book Consultation"
          />
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

      {/* ── LONG TERM LEG HEALTH ── */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-[var(--med-border)] bg-white shadow-sm">
        {/* Header */}
        <div className="bg-[var(--med-primary)] px-6 md:px-10 py-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/70">
                Prevention & Recovery
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                Protect Your Long-Term Leg Health
              </h2>
            </div>
          </div>

          <p className="text-white/85 max-w-4xl leading-relaxed text-sm md:text-base">
            Evidence-based daily habits that reduce CVI progression and support
            long-term outcomes after treatment.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 bg-[var(--med-light)]">
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Walk Daily",
                desc: "Walk for 20–30 minutes every day - the calf muscle acts as the body's natural venous pump and improves blood return from the legs.",
              },
              {
                title: "Elevate Your Legs",
                desc: "Elevate your legs above heart level for 15 minutes daily, especially after prolonged standing or sitting.",
              },
              {
                title: "Wear Compression Stockings",
                desc: "Use prescribed compression stockings consistently - compliance directly affects treatment success and symptom control.",
              },
              {
                title: "Maintain Healthy Weight",
                desc: "Maintaining a healthy body weight reduces sustained pressure on the venous system and slows disease progression.",
              },
              {
                title: "Avoid Prolonged Sitting or Standing",
                desc: "Take a movement break every 30–45 minutes if your work involves prolonged sitting or standing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--med-border)] bg-white p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--med-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)]" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 rounded-2xl border border-[var(--med-border)] bg-white p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              Long-term success in chronic venous insufficiency treatment
              depends not only on the procedure itself, but also on maintaining
              healthy venous circulation habits after treatment.
            </p>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="rounded-[2rem] border border-[var(--med-border)] bg-gradient-to-br from-[var(--med-light)] to-white p-6 sm:p-8 shadow-sm">
        {/* Heading */}
        <div className="flex items-start gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[var(--med-primary)]/10 flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-[var(--med-primary)]" />
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              Take Action Before Symptoms Progress
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Early diagnosis and timely treatment can prevent long-term vein
              damage and improve quality of life.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Hospital */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-white p-5">
            <p className="text-sm font-semibold text-[var(--med-primary)] mb-3">
              Hospital & Clinic
            </p>

            <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">Dr. Himanshu Verma</p>

              <p>Vascular & Endovascular Surgeon</p>

              <p>
                Fortis Memorial Research Institute
                <br />
                Sector 44, Opposite HUDA City Centre Metro Station
                <br />
                Gurgaon, Haryana — 122002
              </p>
            </div>
          </div>

          {/* Timing */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-white p-5">
            <p className="text-sm font-semibold text-[var(--med-primary)] mb-3">
              Consultation Details
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-base">🏥</span>
                <p>NABH & JCI Accredited Hospital</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-base">🕐</span>
                <p>OPD: Monday to Saturday, 9:00 AM – 5:00 PM</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-base">🚇</span>
                <p>Nearest Metro: HUDA City Centre (Yellow Line)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Book Appointment Online"
          className="!bg-white !text-[var(--med-primary)] hover:!bg-white/90"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
