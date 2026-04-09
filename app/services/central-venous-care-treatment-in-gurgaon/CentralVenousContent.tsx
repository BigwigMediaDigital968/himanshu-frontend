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
import Link from "next/link";

export default function CentralVenousContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do you care for a central venous line?",
      a: "Proper Central Venous Care in Gurgaon includes keeping the site clean and dry, washing your hands before touching the catheter, changing dressings on time, and flushing the line as directed. Watch for redness, swelling, drainage, or fever, as these may indicate infection.",
    },
    {
      q: "What is central venous access care?",
      a: "Central venous access care involves catheter selection, placement, routine maintenance, infection prevention, and monitoring until treatment is completed and the catheter is safely removed.",
    },
    {
      q: "How many days can we keep a central line?",
      a: "The duration depends on the catheter type. Non-tunneled lines may remain for days to weeks, PICC lines for weeks to months, and tunneled catheters or ports for several years with proper Central Venous Care in Gurgaon.",
    },
    {
      q: "Is central line insertion painful?",
      a: "Local anesthesia prevents sharp pain, though you may feel mild pressure during insertion. Slight soreness afterward is normal and usually resolves within a day or two.",
    },
    {
      q: "What are the signs of central line infection?",
      a: "Warning signs include fever, chills, redness, warmth, swelling, or discharge at the catheter site. Immediate medical attention and expert Central Venous Care in Gurgaon are important to prevent complications.",
    },
  ];

  const catheterUses = [
    "Delivering high-dosage medications safely",
    "Administering long-term intravenous (IV) therapy",
    "Obtaining blood samples without repeated needle sticks",
    "Providing direct nutritional support (via parenteral nutrition) into your bloodstream",
  ];

  const whoNeeds = [
    "Cancer patients receiving chemotherapy",
    "Patients needing long-term IV antibiotics",
    "Individuals requiring total parenteral nutrition (TPN)",
    "Dialysis patients with kidney disease",
    "Patients with poor or damaged veins",
    "Those needing frequent blood tests",
  ];

  const catheterTypes = [
    {
      name: "PICC Lines",
      full: "Peripherally Inserted Central Catheters",
      badge: "Weeks–Months",
      badgeClass: "bg-[var(--med-primary)] text-white",
      items: [
        "Inserted in the upper arm",
        "Suitable for weeks to months of use",
        "Less invasive and easier to manage",
      ],
    },
    {
      name: "Tunneled Catheters",
      full: "",
      badge: "Long-Term",
      badgeClass: "bg-teal-100 text-teal-700",
      items: [
        "Threaded under the skin for stability",
        "Commonly used for dialysis patients",
        "Designed for long-term repeated access",
      ],
    },
    {
      name: "Implanted Ports",
      full: "",
      badge: "Discreet",
      badgeClass: "bg-blue-100 text-blue-700",
      items: [
        "Fully placed under the skin",
        "Accessed with a special needle",
        "Preferred by chemotherapy patients due to discretion",
      ],
    },
    {
      name: "Non-Tunneled Catheters",
      full: "",
      badge: "Short-Term",
      badgeClass: "bg-orange-100 text-orange-700",
      items: [
        "Temporary hospital-based solution",
        "Used for days to a few weeks",
      ],
    },
  ];

  const advancedTreatments = [
    {
      title: "Central Venous Angioplasty",
      subtitle: "Innominate / Subclavian / SVC",
      badge: "Minimally Invasive",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "Over time, veins can become narrowed, limiting blood flow and leading to complications. Angioplasty can help treat this issue as part of Central Venous Care in Gurgaon.",
      items: [
        "A balloon gently opens the narrowed vein",
        "Restores normal blood flow",
        "Minimally invasive procedure with quick recovery",
        "Helpful for dialysis patients and repeat catheter users",
      ],
      desc2: (
        <>
          This intervention is commonly used for patients with stenotic
          innominate veins, subclavian veins, or the superior vena cava and is
          an important component of <b>Central Venous Care in Gurgaon</b>.
        </>
      ),
    },
    {
      title: "Central Venous Occlusion Recanalization",
      subtitle: "",
      badge: "Advanced Technique",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "When central veins become fully occluded, specialized procedures are used in Central Venous Care in Gurgaon to reopen these critical pathways.",
      items: [
        "Advanced techniques reopen the blocked vessel",
        "Reduces swelling and discomfort",
        "Restores dialysis or catheter access",
        "Can significantly improve quality of life",
      ],
      desc2: (
        <>
          This procedure can be life-changing for patients who depend on a
          central venous catheter and require advanced{" "}
          <b>Central Venous Care in Gurgaon</b>.
        </>
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
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Vascular Specialist · Gurgaon
        </h3>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Central Venous Care in Gurgaon
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
          Expert treatment for better vascular health - complete Central Venous
          Catheter care covering insertion, maintenance, and complication
          management by Dr. Himanshu.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["4 Types", "Catheter Options"],
            ["2 Advanced", "Procedures Available"],
            ["Image-Guided", "Safe Placement"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS A CVC ── */}
      <div className="mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Expert Central Venous Treatment for Better Vascular Health
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If your doctor has advised you to get a central venous catheter, you
            may be confused about what this means and why it is necessary. In
            simple terms, having central access to your veins will allow you to
            receive longer-term, safer care than if you had normal intravenous
            (IV) access only.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide will outline in straightforward terms all the components
            that make up your Central Venous Catheter so that you can gain the
            understanding necessary to ensure confidence in your overall
            treatment process.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Patients seeking <b>Central Venous Care in Gurgaon</b> can benefit
            from specialized evaluation and treatment by experienced vascular
            specialists. This includes complete{" "}
            <b>Central Venous Catheter Treatment in Gurgaon</b>, covering
            insertion, maintenance, and complication management.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What is a Central Venous Catheter?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A central venous catheter (central line) is a long, thin tube that
            is inserted into a large vein close to your heart (typically within
            your neck, chest, or groin). Because of their larger size and
            strength, doctors can use central lines for several purposes,
            including:
          </p>
        </div>

        {/* Uses card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            What Central Lines Are Used For
          </h3>
          {catheterUses.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 mb-14">
        <p className="text-gray-700 leading-relaxed">
          Unlike standard IVs, Central Venous Catheters are placed deeper into
          your body and can be used for longer periods of time. Many patients
          requiring long-term treatment rely on Central Venous Care in Gurgaon
          to ensure proper catheter placement and safe management.
        </p>
      </div>

      {/* ── CVC VS PERIPHERAL IV ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Understanding the Difference
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Central Venous Catheter vs. Intravenous Catheters (Peripheral IVs)
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            You may know what a peripheral IV (also known as a peripheral
            intravenous line) is. The type of IV that is placed in the hand or
            arm area when you visit the hospital for intravenous therapy or
            hydration. The following is a comparison of peripheral IVs vs.
            Central Venous Catheters:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Peripheral IV */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-gray-400" />
              <h3 className="text-base font-bold text-gray-700">
                Peripheral IV
              </h3>
              <span className="ml-auto text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-600">
                Short-Term
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Inserted into small veins in the hand or arm",
                "Used for short-term treatment (hours to days)",
                "Suitable for fluids and standard medications",
              ].map((s) => (
                <BulletItem key={s} text={s} color="bg-gray-400" />
              ))}
            </ul>
          </div>

          {/* Central Venous Catheter */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                Central Venous Catheter
              </h3>
              <span className="ml-auto text-xs font-semibold px-3 py-1 rounded-full bg-[var(--med-primary)] text-white">
                Long-Term
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Placed in large veins near the heart",
                "Used for long-term care (weeks to years)",
                "Allows strong medications and multiple infusions",
                "Reduces repeated needle sticks",
              ].map((s) => (
                <BulletItem key={s} text={s} />
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8">
          <p className="text-gray-600 mt-2 max-w-2xl">
            The main difference is that peripheral IVs are temporary. Central
            Venous Catheters are intended for lengthy use, which is why proper
            <b> Central Venous Care in Gurgaon</b> is important for long-term
            vascular health.
          </p>
        </div>
      </div>

      {/* ── WHO NEEDS A CENTRAL LINE ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Patient Indications
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Who Needs a Central Line?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Patients do not always require central venous access. However, there
            are situations where a central venous catheter serves an important
            purpose, such as treating the following:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {whoNeeds.map((item, i) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{item}</span>
            </div>
          ))}
        </div>

        <div className="my-8">
          <p className="text-gray-600 mt-2 max-w-2xl">
            If you need long-term care, a central venous catheter can make the
            overall treatment process more comfortable and manageable. Many
            patients benefit from expert <b>Central Venous Care in Gurgaon</b>{" "}
            for safe catheter placement and follow-up management.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            Unsure whether you need <b>Central Venous Care in Gurgaon</b>? Let's
            figure it out together. Book a consultation with Dr. Himanshu to
            discuss your specific medical situation.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book a Consultation"
          />
        </div>
      </div>

      {/* ── CATHETER TYPES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Catheter Options
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What are the Different Central Venous Catheter Types?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            It will depend on your treatment regimen, the duration, and your
            personal requirements about which type of Central Venous Catheter
            will be used. As part of <b>Central Venous Care in Gurgaon</b>, the
            following catheter options are available:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {catheterTypes.map((t) => (
            <div
              key={t.name}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {t.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              {t.full && <p className="text-xs text-gray-500 mb-3">{t.full}</p>}
              <ul className="space-y-1.5 mt-3">
                {t.items.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Who performs */}
        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          <div className="grid md:grid-cols-2">
            <div className="bg-[var(--med-primary)] p-6 flex flex-col justify-center gap-3">
              <Stethoscope className="w-7 h-7 text-white/60" />
              <h2 className="text-lg font-bold text-white">
                Who Performs a Central Venous Catheter Placement?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Dr. Himanshu, a vascular specialist, performs central venous
                catheter placements using image guidance such as ultrasound or
                fluoroscopy to ensure safe and accurate placement as part of
                advanced <b>Central Venous Care in Gurgaon</b>.
              </p>
            </div>
            <div className="bg-[var(--med-light)] p-6 flex flex-col justify-center gap-3">
              {[
                "Performed in a sterile environment",
                "Local anesthesia used for patient comfort",
                "Procedure usually completed within one hour",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ADVANCED TREATMENTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Procedures
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Central Venous Catheter Treatment in Gurgaon: Advanced Procedures
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Having a central venous catheter is one thing, but maintaining
            healthy central veins is another challenge entirely. In some cases,
            these large blood vessels develop complications that require
            specialized <b>Central Venous Care</b>. These conditions are
            effectively managed through{" "}
            <b>Central Venous Catheter Treatment in Gurgaon</b> using advanced
            minimally invasive techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {advancedTreatments.map((t) => (
            <div
              key={t.title}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {t.title}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              {t.subtitle && (
                <h3 className="text-xs text-gray-500 mb-3">{t.subtitle}</h3>
              )}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {t.desc}
              </p>
              <ul className="space-y-1.5">
                {t.items.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
              {t.desc2 && (
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {t.desc2}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-primary)]">
          <p className="text-white/90 text-sm font-medium flex-1">
            Need expert{" "}
            <b className="text-white">
              Central Venous Catheter Treatment in Gurgaon
            </b>
            ? Book a consultation with Dr. Himanshu today.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="mb-14">
        <p className="text-gray-700 mb-6">
          In some cases, vascular health issues extend beyond trauma and may
          include chronic conditions such as varicose veins or peripheral artery
          disease. We provide advanced{" "}
          <Link
            href="/services/varicose-veins-treatment-in-gurgaon"
            className="text-blue-500 font-bold hover:text-blue-700 transition-all"
          >
            varicose veins treatment in Gurgaon{" "}
          </Link>{" "}
          using modern techniques, along with effective{" "}
          <Link
            href="/services/peripheral-artery-disease-treatment-in-gurgaon"
            className="text-blue-500 font-bold hover:text-blue-700 transition-all"
          >
            peripheral artery disease treatment in Gurgaon
          </Link>{" "}
          to restore proper blood circulation and prevent complications.
        </p>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Dr. Himanshu for Central Venous Care?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Patients seeking{" "}
              <b className="text-white">Central Venous Care in Gurgaon</b> can
              benefit from specialized evaluation and treatment by an
              experienced vascular specialist using image-guided techniques.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            {[
              "Image-guided placement for safety and accuracy",
              "Complete care: insertion, maintenance & removal",
              "Advanced angioplasty and recanalization",
              "Personalized catheter selection for every patient",
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

      {/* ── WARNING SIGNS ── */}
      <div className="mb-14 rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-bold text-gray-800">
            Warning Signs to Watch For
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          After catheter placement, contact your doctor immediately if you
          notice any of the following:
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Fever or chills",
            "Redness or warmth at the catheter site",
            "Swelling or discharge around the line",
            "Unusual arm or face puffiness",
          ].map((s) => (
            <div key={s} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{s}</span>
            </div>
          ))}
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
                  type="button"
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
          <h2 className="text-xl font-bold text-gray-800">
            Expert Central Venous Care, Right Here in Gurgaon.
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Whether you need catheter placement, maintenance, or advanced
          treatment for central vein complications, Dr. Himanshu provides
          comprehensive <b>Central Venous Care in Gurgaon</b> tailored to your
          needs.
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
