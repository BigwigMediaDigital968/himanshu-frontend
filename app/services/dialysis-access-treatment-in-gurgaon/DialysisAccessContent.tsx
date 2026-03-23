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

export default function DialysisAccessContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const whyItHelps = [
    "Allowing smooth blood flow during dialysis",
    "Reducing repeated vein damage",
    "Supporting long-term kidney care",
    "Improving comfort during every session",
  ];

  const beforePlacement = [
    "Vein mapping may be advised",
    "Medical history is reviewed",
    "Daily activity and comfort are considered",
  ];

  const permacathPoints = [
    "Used for short-term or emergency Dialysis Access",
    "Allows immediate dialysis without waiting time",
    "Placed under imaging guidance for safety",
    "Requires careful hygiene to reduce infection risk",
  ];

  const avGraftBenefits = [
    "Suitable when veins are not ideal for AV Fistula",
    "Can be used relatively quickly after placement",
    "Provides stable blood flow for dialysis",
    "Supports consistent AV access during sessions",
  ];

  const avFistulaReasons = [
    "Long-lasting and durable Dialysis Access",
    "Lower risk of infection and clotting",
    "Better blood flow for efficient dialysis",
    "Most reliable form of AV access",
    "Offers optimal AV fistula maturity time for long-term use",
  ];

  const templinePoints = [
    "Used for very short-term dialysis access needs",
    "Quick placement for urgent dialysis",
    "Acts as a bridge to permanent AV access",
    "Requires close monitoring and care",
  ];

  const managementTips = [
    "Check for redness, pain, or swelling",
    "Keep the area clean and dry",
    "Avoid pressure on Dialysis Access",
    "Listen for blood flow changes in AV access",
    "Warning signs like fistula not working or dialysis access blockage should be addressed early",
  ];

  const accessTypes = [
    {
      name: "Permacath",
      badge: "Emergency / Short-Term",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: "Permacath is a temporary Dialysis Access option used when dialysis needs to start without delay, and it is usually placed by a skilled Dialysis Access Surgeon in Gurgaon. Permacath insertion for dialysis allows immediate treatment when urgent dialysis access is required. This Dialysis Access is placed into a large central vein, usually in the neck or chest, and can be used immediately after placement. Permacath is often chosen by a Dialysis Access Surgeon in Gurgaon when kidney function has declined suddenly or when permanent AV access is still being prepared.",
      desc2:
        "While Permacath is effective in urgent situations, long term Dialysis Access planning usually includes creating a permanent AV access alongside it.",
      points: permacathPoints,
    },
    {
      name: "AV Graft",
      badge: "When Veins Are Weak",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "An AV Graft is a type of Dialysis Access created using a soft synthetic tube that connects an artery to a vein, typically performed by a qualified Dialysis Access Surgeon in Gurgaon. AV graft placement is commonly used when natural veins are not suitable for fistula creation. This option is chosen when natural veins are not strong enough for a fistula. AV Graft Dialysis Access offers predictable blood flow and can be used sooner than a fistula.",
      desc2:
        "Although AV Graft is reliable, it requires regular monitoring to prevent clotting or infection.",
      points: avGraftBenefits,
    },
    {
      name: "AV Fistula",
      badge: "Gold Standard",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "AV Fistula is considered the best long term Dialysis Access option for most patients and is commonly recommended by an experienced Dialysis Access Surgeon in Gurgaon and AV Fistula Surgeon in Gurgaon. AV fistula creation surgery provides better durability and fewer dialysis access complications. It is created by directly connecting your own artery and vein, allowing the vein to grow stronger over time. This natural Dialysis Access lasts longer and performs better with fewer complications.",
      desc2:
        "AV Fistula needs time to mature before use, so early planning is important for successful Dialysis Access.",
      points: avFistulaReasons,
    },
    {
      name: "Templine",
      badge: "Urgent Bridge",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "Templine is a short-term dialysis access used in specific clinical situations. This type of dialysis catheter placement is used in emergency situations for immediate access. It is commonly placed when dialysis is urgently required, and other access options are not immediately available. Templine supports temporary dialysis while permanent AV access is being planned.",
      desc2:
        "Templine is not meant for long-term use but plays an important role in immediate patient care.",
      points: templinePoints,
    },
  ];

  const treatments = [
    {
      name: "Tunneled Hemodialysis Catheter (Permacath) Insertion",
      desc: "This procedure provides temporary Dialysis Access when dialysis needs to start quickly. The catheter is placed in a large vein and allows immediate treatment while planning permanent AV access.",
    },
    {
      name: "Permacath Removal, Exchange & Repositioning",
      desc: "These procedures are done when a Permacath needs replacement due to infection, blockage, or position issues, helping maintain safe Dialysis Access.",
    },
    {
      name: "Temporary Hemodialysis Catheter Insertion & Removal",
      desc: "Temporary Dialysis Access used in emergencies and removed once permanent AV access is ready.",
    },
    {
      name: "Radiocephalic Arteriovenous Fistula creation",
      desc: "This AV access is created at the wrist using natural blood vessels and is preferred for long term Dialysis Access when veins are suitable.",
    },
    {
      name: "Brachiocephalic Arteriovenous Fistula Creation",
      desc: "This Dialysis Access is created at the elbow and is chosen when wrist veins are not strong enough.",
    },
    {
      name: "Arteriovenous Fistula Angiography",
      desc: "Imaging is used to check blood flow in existing Dialysis Access and identify narrowing or blockage early.",
    },
    {
      name: "Arteriovenous Fistula balloon angioplasty",
      desc: "This treatment opens narrowed areas in AV access to restore proper blood flow and improve dialysis efficiency. ",
    },
    {
      name: "Cephalic Arch Swing Point Angioplasty",
      desc: "This focused procedure that treats common narrowing points in Dialysis Access to prevent access failure.",
    },
    {
      name: "Arteriovenous Graft Creation for Hemodialysis",
      desc: "A synthetic graft used as Dialysis Access when natural veins cannot support a fistula.",
    },
    {
      name: "Arteriovenous Graft thrombectomy and angioplasty",
      desc: "These procedures remove clots and widen narrowed grafts to restore AV access function.",
    },
    {
      name: "Central Venous Angioplasty",
      desc: "This treatment improves blood flow in large central veins that affect Dialysis Access performance.",
    },
    {
      name: "Central Venous Occlusion Recanalization",
      desc: "Blocked central veins are reopened to preserve or restore Dialysis Access.",
    },
    {
      name: "Redo Arteriovenous Fistula Reconstruction",
      desc: "When a previous Dialysis Access fails, reconstruction helps restore function and avoid repeated catheter use.",
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
          Dialysis Access Surgeon · Gurgaon
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
          Dialysis Access Surgeon in Gurgaon <br />
          <span className="text-white/70 text-sm md:text-base max-w-xl mb-2">
            AV Fistula & AV Graft Care by Dr. Himanshu
          </span>
        </h2>
        <p className="text-white/60 text-sm max-w-xl mb-8">
          Dialysis Access is the lifeline for people who need regular dialysis.
          It allows blood to safely leave the body, get cleaned, and return
          again. When Dialysis Access is planned and created the right way,
          daily life becomes easier, and treatment becomes smoother. Dr.
          Himanshu, an experienced Dialysis Access Surgeon in Gurgaon and a
          trusted AV Fistula Surgeon in Gurgaon, focuses on creating Dialysis
          Access that is reliable, comfortable, and suited to each patient’s
          body and routine. This page helps you understand Dialysis Access in
          simple terms so you can feel confident about your care with guidance
          from a Dialysis Access Surgeon in Gurgaon.
        </p>
        {/* <button
          onClick={() => setOpenPopup(true)}
          className="inline-flex items-center gap-2 bg-white text-[var(--med-primary)] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all"
        >
          Talk to Dr. Himanshu — Dialysis Access Specialist
        </button> */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["4 Access Types", "Permacath, Graft, Fistula & More"],
            ["13 Procedures", "Complete Access Care"],
            ["AV Fistula", "Gold Standard Option"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-lg">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY IT IS DONE ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Dialysis Access Is Done
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dialysis Access is done to make dialysis possible and safe over the
            long term, and planning it with an experienced{" "}
            <b>Dialysis Access Surgeon in Gurgaon</b> helps ensure the best
            results. Proper vascular access for dialysis is essential to ensure
            smooth and effective treatment. Without proper Dialysis Access
            created by a Dialysis Access Surgeon in Gurgaon, dialysis sessions
            can become painful, risky, or ineffective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The goal is to ensure steady blood flow and reduce repeated needle
            issues.
          </p>
        </div>

        {/* Why it helps card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Dialysis Access Helps By
          </p>
          {whyItHelps.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}

          <p className="text-xs font-semibold tracking-widest my-4">
            If you or a loved one is preparing for dialysis, learning about
            Dialysis Access early can help you make better choices.
          </p>

          <div className="pt-3">
            <ButtonFill onClick={() => setOpenPopup(true)} text="Consult Now" />
          </div>
        </div>
      </div>

      {/* ── PLACEMENT PLANNING ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Before You Begin
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Dialysis Access Placement
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Dialysis Access placement is a planned procedure done after
            evaluating veins, arteries, and overall health by a qualified
            <b> Dialysis Access Surgeon in Gurgaon</b>. A proper dialysis access
            surgeon in Gurgaon reduces future problems and supports better
            dialysis outcomes. This dialysis access procedure is designed to
            create long term dialysis access with fewer complications. AV access
            is also considered during planning by a Dialysis Access Surgeon in
            Gurgaon to decide the best approach for blood flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                Before Placement
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              A well-planned dialysis access placement by an experienced
              Dialysis Access Surgeon means fewer complications later. If you
              want clarity before starting dialysis, this is the right time to
              ask questions.
            </p>
            <ul className="space-y-2">
              {beforePlacement.map((b) => (
                <BulletItem key={b} text={b} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Options like AV fistula creation surgery or AV graft placement are
              selected based on vein condition and overall health.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                Managing Your Dialysis Access
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Managing Dialysis Access daily helps avoid infections and
              blockages. Regular check-ups with a{" "}
              <b>Dialysis Access Surgeon in Gurgaon</b> help keep the access
              working well.
            </p>
            <ul className="space-y-2">
              {managementTips.map((t) => (
                <BulletItem key={t} text={t} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── ACCESS TYPES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Access Options
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Types of Dialysis Access
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            The type of Dialysis Access used depends on your urgency, vein
            condition, and long-term treatment needs. Dr. Himanshu selects the
            most suitable option for every patient.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-5 mb-6">
          {accessTypes.map((a) => (
            <div
              key={a.name}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-800 text-base">{a.name}</h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${a.badgeClass}`}
                >
                  {a.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {a.desc}
              </p>
              <ul className="space-y-1.5">
                {a.points.map((p) => (
                  <BulletItem key={p} text={p} />
                ))}
              </ul>

              <p className="text-gray-600 text-sm my-4 leading-relaxed">
                {a.desc2}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            You can talk to Dr. Himanshu, a{" "}
            <b>Dialysis Access Specialist in Gurgaon</b>, to understand which
            Dialysis Access suits your condition and lifestyle.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book a Consultation"
          />
        </div>
      </div>

      {/* ── TREATMENTS OFFERED ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Complete Care
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Treatments Offered
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            As a leading <b>Dialysis Access Surgeon in Gurgaon</b> and{" "}
            <b>AV Fistula Surgeon in Gurgaon</b>, Dr. Himanshu offers complete
            Dialysis Access care — from creating new access to maintaining and
            repairing existing AV access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {treatments.map((t, i) => (
            <div
              key={t.name}
              className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xs font-bold text-[var(--med-primary)] opacity-40 flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-gray-800 text-sm leading-snug">
                  {t.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            Each treatment focuses on keeping Dialysis Access working safely and
            reliably, helping patients continue dialysis with fewer
            interruptions and better comfort.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Schedule an Appointment
          </button>
        </div>
      </div>

      {/* ── WARNING SIGNS ── */}
      <div className="mb-14 rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-bold text-gray-800">
            Warning Signs to Act On Early
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          If something feels unusual with your Dialysis Access, early
          consultation with a <b>Dialysis Access Surgeon in Gurgaon</b> can help
          protect your access. Watch for:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Redness, pain, or swelling near the access site",
            "Fistula not working or weak blood flow",
            "Dialysis access blockage or clotting",
            "Unusual warmth or discharge at the site",
          ].map((s) => (
            <div key={s} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Side-by-Side Overview
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Comparison of Dialysis Access Options
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-[var(--med-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--med-primary)] text-white">
                <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl w-36">
                  Dialysis Access Type
                </th>
                <th className="text-left px-5 py-4 font-semibold">
                  What It Is
                </th>
                <th className="text-left px-5 py-4 font-semibold">
                  When It Is Used
                </th>
                <th className="text-left px-5 py-4 font-semibold">
                  Key Benefits
                </th>
                <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                  Important Considerations
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: "Permacath",
                  badge: "bg-orange-100 text-orange-700",
                  what: "A catheter placed in a large central vein, usually in the neck or chest",
                  when: "When dialysis must start immediately or in emergencies",
                  benefits:
                    "Ready for immediate use, no waiting period, useful while planning permanent AV access",
                  considerations:
                    "Higher infection risk, requires strict hygiene, not suitable for long-term Dialysis Access",
                },
                {
                  type: "AV Graft",
                  badge: "bg-blue-100 text-blue-700",
                  what: "A synthetic tube connecting an artery to a vein",
                  when: "When natural veins are not suitable for an AV Fistula",
                  benefits:
                    "Can be used sooner than a fistula, provides stable blood flow, reliable Dialysis Access",
                  considerations:
                    "Needs regular monitoring, higher clotting risk than fistula",
                },
                {
                  type: "AV Fistula",
                  badge: "bg-[var(--med-primary)] text-white",
                  what: "A natural connection between an artery and a vein",
                  when: "Best option for long-term dialysis planning",
                  benefits:
                    "Long-lasting Dialysis Access, lowest infection risk, best blood flow",
                  considerations:
                    "Requires time to mature before use; early planning is essential",
                },
                {
                  type: "Templine",
                  badge: "bg-purple-100 text-purple-700",
                  what: "A temporary catheter placed for urgent dialysis needs",
                  when: "Used when immediate dialysis is required, and no other access is available",
                  benefits:
                    "Quick placement, supports emergency dialysis, bridges to permanent access",
                  considerations:
                    "Very short-term use only, requires close monitoring",
                },
              ].map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-t border-[var(--med-border)] ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--med-light)]"
                  }`}
                >
                  <td className="px-5 py-4 align-top">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${row.badge}`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-700 align-top">
                    {row.what}
                  </td>
                  <td className="px-5 py-4 text-gray-700 align-top">
                    {row.when}
                  </td>
                  <td className="px-5 py-4 text-gray-700 align-top">
                    {row.benefits}
                  </td>
                  <td className="px-5 py-4 text-gray-600 align-top text-xs leading-relaxed">
                    {row.considerations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {[
            {
              type: "Permacath",
              badge: "bg-orange-100 text-orange-700",
              what: "A catheter placed in a large central vein, usually in the neck or chest",
              when: "When dialysis must start immediately or in emergencies",
              benefits:
                "Ready for immediate use, no waiting period, useful while planning permanent AV access",
              considerations:
                "Higher infection risk, requires strict hygiene, not suitable for long-term Dialysis Access",
            },
            {
              type: "AV Graft",
              badge: "bg-blue-100 text-blue-700",
              what: "A synthetic tube connecting an artery to a vein",
              when: "When natural veins are not suitable for an AV Fistula",
              benefits:
                "Can be used sooner than a fistula, provides stable blood flow, reliable Dialysis Access",
              considerations:
                "Needs regular monitoring, higher clotting risk than fistula",
            },
            {
              type: "AV Fistula",
              badge: "bg-[var(--med-primary)] text-white",
              what: "A natural connection between an artery and a vein",
              when: "Best option for long-term dialysis planning",
              benefits:
                "Long-lasting Dialysis Access, lowest infection risk, best blood flow",
              considerations:
                "Requires time to mature before use; early planning is essential",
            },
            {
              type: "Templine",
              badge: "bg-purple-100 text-purple-700",
              what: "A temporary catheter placed for urgent dialysis needs",
              when: "Used when immediate dialysis is required, and no other access is available",
              benefits:
                "Quick placement, supports emergency dialysis, bridges to permanent access",
              considerations:
                "Very short-term use only, requires close monitoring",
            },
          ].map((row) => (
            <div
              key={row.type}
              className="border border-[var(--med-border)] rounded-2xl bg-white overflow-hidden"
            >
              <div className="bg-[var(--med-light)] px-5 py-3 flex items-center justify-between border-b border-[var(--med-border)]">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${row.badge}`}
                >
                  {row.type}
                </span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {[
                  { label: "What It Is", value: row.what },
                  { label: "When It Is Used", value: row.when },
                  { label: "Key Benefits", value: row.benefits },
                  {
                    label: "Important Considerations",
                    value: row.considerations,
                  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold text-[var(--med-primary)] uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE CTA ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Preparing for Life With Dialysis Access
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Living with Dialysis Access does not mean losing independence.
              With the right habits, Dialysis Access becomes part of your
              routine and you stay active and confident.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            {[
              "AV access care and daily monitoring",
              "Regular follow-ups with your surgeon",
              "Open communication about symptoms",
              "Understanding kidney dialysis preparation",
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
          {[
            {
              q: "What are the three types of dialysis access?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  The three main types of Dialysis Access are AV Fistula, AV
                  Graft, and catheter-based access, such as Permacath or
                  Templine. Each Dialysis Access type is chosen based on how
                  urgently dialysis is needed, vein health, and long-term
                  treatment plans. An <b>AV Fistula Surgeon in Gurgaon</b> can
                  help you decide if an AV fistula is the most suitable
                  long-term dialysis access option based on your condition.
                </p>
              ),
            },
            {
              q: "What is the meaning of dialysis access?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dialysis Access is a medical pathway created in your body to
                  allow blood to flow out for dialysis and return safely after
                  cleaning. Without a proper{" "}
                  <b>Dialysis Access Surgeon in Gurgaon</b>, dialysis cannot be
                  performed effectively or safely.
                </p>
              ),
            },
            {
              q: "What's the risk of clotting or infection for my access type?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  Every access carries some risk, but a{" "}
                  <b>Dialysis Access Surgeon in Gurgaon</b> can guide you toward
                  options like AV Fistula, which have lower infection and
                  clotting risk.
                </p>
              ),
            },
            {
              q: "How do I care for my access site?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  Keep the site clean, dry, and avoid pressure, while following
                  advice from a <b>Dialysis Access Surgeon in Gurgaon</b> to
                  maintain long-term access health. A{" "}
                  <b>Dialysis Access Specialist in Gurgaon</b> can guide you on
                  proper care and precautions to keep your access working well.
                </p>
              ),
            },
            {
              q: "How do I know if my dialysis access is not working properly?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  Swelling, pain, or reduced blood flow are warning signs;
                  consult a <b>Dialysis Access Surgeon in Gurgaon</b>{" "}
                  immediately if you notice these changes.
                </p>
              ),
            },
            {
              q: "How long does dialysis access last?",
              a: (
                <p className="text-gray-700 text-sm leading-relaxed">
                  The lifespan varies by type and care, and regular check-ups
                  with a <b>Dialysis Access Surgeon in Gurgaon</b> help keep
                  your access functional for years.
                </p>
              ),
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
                  {faq.a}
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
            Get the Right Dialysis Access for Your Life.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          If you are unsure about your Dialysis Access, schedule a consultation
          with a <b>Dialysis Access Surgeon in Gurgaon</b> or an experienced{" "}
          <b>AV Fistula Surgeon in Gurgaon</b> and get answers that fit your
          daily life.
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
