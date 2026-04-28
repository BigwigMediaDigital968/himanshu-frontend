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
import ServiceCarousel from "../ServiceCarousal";

export default function AVFistulaContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const typesCarousl = [
    {
      id: 1,
      src: "/services/av-fistula/av-fistula-surgery-1.jpeg",
      alt: "AV fistula surgery procedure for dialysis access",
    },
    {
      id: 2,
      src: "/services/av-fistula/av-fistula-basilic-vein-transposition.jpeg",
      alt: "Basilic vein transposition surgery for AV fistula creation",
    },
    {
      id: 3,
      src: "/services/av-fistula/av-fistula-angioplasty.jpeg",
      alt: "Angioplasty treatment to restore AV fistula function",
    }
  ];

  const faqs = [
    {
      q: "What is an AV Fistula?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          An Arteriovenous (AV) Fistula is a surgically constructed conduit made
          between an artery and vein that is typically created in the arm to
          provide stable access for hemodialysis. For patients seeking{" "}
          <b>AV Fistula Treatment in Gurgaon</b>, this procedure is considered
          the most reliable form of dialysis access.
        </p>
      ),
    },
    {
      q: "What is the best dialysis access?",
      a: "An AV fistula is considered the safest and longest-lasting option for most patients.",
    },
    {
      q: "How long does a fistula take to mature?",
      a: "Typically 6–12 weeks, but early Balloon Assisted Maturation can accelerate usability.",
    },
    {
      q: "Can a blocked fistula be saved?",
      a: "Yes. If early AV Fistula Treatment (thrombectomy or angioplasty) is performed, most occluded fistulas are salvageable.",
    },
    {
      q: "How long can an AV fistula last?",
      a: "With proper oversight and upkeep, some can endure 10–20 years or more.",
    },
    {
      q: "How often should a fistula be checked?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Before every dialysis session and periodically by a vascular access
          specialist providing <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      ),
    },
    {
      q: "Is catheter dialysis safe long-term?",
      a: "Catheters have higher infection and complication rates. We want to avoid continuous catheter dependency.",
    },
    {
      q: "Can an AV Fistula get infected?",
      a: "Infection is rare but possible. Proper hygiene and monitoring reduce risk.",
    },
    {
      q: "What happens if an AV Fistula Treatment fails?",
      a: "Failure can cause poor dialysis, clot formation, or infection. We want to avoid continuous catheter dependency.",
    },
    {
      q: "How do you repair an AV Fistula?",
      a: "That means they'll last for many years, reducing the number of times surgeries are required.",
    },
    {
      q: "Is AV Fistula suitable for all patients?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Most patients can have an AV Fistula, but vein size and health may
          influence the type chosen during{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
      ),
    },
  ];

  const protocolSteps = [
    {
      num: "01",
      title: "Pre-Fistula Planning",
      items: [
        "Early referral before dialysis starts",
        "Vein preservation education (avoid IV lines in potential access arm)",
        "Ultrasound vein mapping",
        "Individualized access planning",
      ],
    },
    {
      num: "02",
      title: "Precision Fistula Creation",
      items: [
        "Distal-first strategy (radiocephalic preferred when possible)",
        "Microsurgical techniques for better maturation",
        "Selection based on vessel quality, age, and dialysis needs",
      ],
    },
    {
      num: "03",
      title: "Structured Surveillance Program",
      items: [
        "Regular clinical examination",
        "Flow assessment during dialysis",
        "Doppler ultrasound monitoring",
        "Early detection of narrowing or flow reduction",
      ],
    },
    {
      num: "04",
      title: "Early Intervention Strategy",
      items: [
        "Balloon Assisted Maturation (BAM)",
        "Fistula angioplasty for narrowing",
        "Thrombectomy for clot removal",
        "Salvage procedures before considering abandonment",
      ],
    },
    {
      num: "05",
      title: "Long-Term Access Preservation",
      items: [
        "Aneurysm monitoring",
        "Flow regulation for high-output fistulas",
        "Access rotation planning",
        "Minimizing catheter dependency",
      ],
    },
  ];

  const fistulas = [
    {
      name: "Radiocephalic AV Fistula",
      badge: "First Choice",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "Wrist [radial artery & cephalic vein in the wrist end-to-side anastomosis] making it:",
      items: [
        "First and preferred option",
        "Preserves future access sites",
        "Lower complication rates",
      ],
      note: "This is often the first choice during AV Fistula Treatment in Gurgaon when suitable veins are available.",
    },
    {
      name: "Brachiocephalic AV Fistula",
      badge: "High Flow",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "Connection at the elbow between the brachial artery and cephalic vein with features such as:",
      items: [
        "Created at the elbow",
        "Higher flow rates",
        "Used when wrist veins are unsuitable",
      ],
      note: "",
    },
    {
      name: "Brachial Basilic AV Fistula",
      badge: "Durable",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: "Involves the brachial artery and basilic vein, often requiring vein transposition.",
      items: [
        "Two-stage procedure",
        "Suitable for deeper veins",
        "Durable long-term access option",
      ],
      note: "",
    },
    {
      name: "Lower-Limb AV Fistula",
      badge: "Complex / Redo",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: "Rarely performed, reserved for selected cases, such as:",
      items: [
        "For patients with failed previous access",
        "Advanced reconstruction techniques",
      ],
      note: "",
    },
  ];

  const treatments = [
    "Balloon Assisted Maturation (BAM)",
    "AV Fistula Angioplasty",
    "Mechanical or Pharmacomechanical Thrombectomy",
    "Surgical Revision",
    "Basilic Vein Transposition",
    "Aneurysm Repair",
    "Flow Reduction Procedures",
    "Hybrid Endovascular and Surgical Salvage",
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
          Vascular Access Specialists · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          AV Fistula Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
          The gold standard for hemodialysis access - expertly created,
          monitored, and preserved for life.
        </p>
        {/* <button
          onClick={() => setOpenPopup(true)}
          className="inline-flex items-center gap-2 bg-white text-[var(--med-primary)] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all"
        >
          Schedule a Consultation
        </button> */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Lowest", "Infection Risk"],
            ["10–20 yrs", "Fistula Lifespan"],
            ["Gold Standard", "Dialysis Access"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-lg md:text-2xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-7 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Is an AV Fistula?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An Arteriovenous (AV) Fistula Treatment is a surgically constructed
            conduit made between an artery and concern that is typically guided
            in the arm to provide stable access for hemodialysis. For patients
            seeking <b>AV Fistula Treatment in Gurgaon</b>, this procedure is
            considered the most reliable form of dialysis access.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At AV Access Care, we follow a structured AV Fistula Management
            Protocol focusing not only on creation, but on lifelong maintenance
            and preservation of your dialysis access for patients seeking{" "}
            <b>AV Fistula Treatment in Gurgaon</b>.
          </p>
        </div>
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Why AV Fistula?
          </p>
          {[
            "Provides high blood flow for efficient dialysis",
            "Has the lowest infection risk",
            "Lasts longer than grafts or catheters",
            "Reduces hospitalization and access-related complications",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <img src="/services/av-fistula/av-fistula-banner.jpeg" alt="AV fistula surgery procedure for dialysis access" />
      </div>

      {/* ── PROTOCOL ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Structured Care
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our AV Fistula Management Protocol
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Dialysis access is not a one-time surgery. It takes planning,
            tracking and timely intervention. Our protocol for AV Fistula
            Treatment in Gurgaon includes:
          </p>
        </div>
        <div className="space-y-0">
          {protocolSteps.map((step, i) => (
            <div key={step.num} className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                {i < protocolSteps.length - 1 && (
                  <div
                    className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
                    style={{ minHeight: "40px" }}
                  />
                )}
              </div>
              <div className="md:col-span-11 pb-8 md:pl-6">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 bg-[var(--med-light)] rounded-xl px-4 py-3 border border-[var(--med-border)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-[var(--med-primary)] text-white px-6 py-4 text-center font-semibold text-sm md:text-base">
          Our goal is simple: Create once. Maintain for years. Avoid failure.{" "}
          <br /> <br />A key principle in effective{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </div>
      </div>

      {/* ── TYPES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Access Options
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Types of AV Fistulas
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {fistulas.map((f) => (
            <div
              key={f.name}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {f.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${f.badgeClass}`}
                >
                  {f.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{f.desc}</p>
              <ul className="space-y-1.5">
                {f.items.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
              {f.note && (
                <p className="mt-3 text-xs text-gray-500 italic">{f.note}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm mb-6">
          We follow a distal-to-proximal approach to preserve future dialysis
          access options, and each type of AV Fistula is selected based on vein
          and artery quality, patient age, and dialysis needs during{" "}
          <b>AV Fistula Treatment in Gurgaon</b>.
        </p>
        <div className="mb-4">
        <ServiceCarousel images={typesCarousl} />
      </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            To learn about the type of AV Fistula that is right for you?
            Schedule an evaluation now.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── WARNING + COMPLICATIONS ── */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Warning Signs of AV Fistula Problems
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Early detection prevents access loss.
          </p>
          <h3 className="font-semibold text-gray-800 text-sm mb-2">
            Symptoms to Watch For:
          </h3>
          <ul className="space-y-1.5 mb-4">
            {[
              "Swelling of the arm",
              "Pain or redness near the fistula",
              "Weak or absent thrill (vibration)",
              "Prolonged bleeding after dialysis",
              "Reduced dialysis efficiency",
              "Visible enlargement or aneurysm",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-orange-400" />
            ))}
          </ul>
          <h3 className="font-semibold text-gray-800 text-sm mb-2">Causes:</h3>
          <ul className="space-y-1.5">
            {[
              "Blood clots inside the fistula",
              "Narrowing of the veins or arteries",
              "Repeated trauma from dialysis needles",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-orange-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Prompt attention to these signs helps prevent severe complications
            during AV Fistula Treatment in Gurgaon.
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Complications of AV Fistula
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Though rare, complications can arise:
          </p>
          <ul className="space-y-1.5 mb-4">
            {[
              "Infection at the surgical site",
              "Thrombosis or clot formation",
              "Aneurysm formation in the vein",
              "Heart strain due to high blood flow",
              "Central venous stenosis",
              "Recurrent catheter dependence",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-red-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mb-5">
            Regular monitoring ensures timely intervention, keeping the AV
            Fistula Treatment functional for years for patients undergoing AV
            Fistula Treatment in Gurgaon.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="w-full text-center text-sm font-semibold text-[var(--med-primary)] border border-[var(--med-primary)] rounded-xl py-2.5 hover:bg-[var(--med-primary)] hover:text-white transition-all cursor-pointer"
          >
            Protect your dialysis access. Book a follow-up →
          </button>
        </div>
      </div>

      {/* ── WHY FAIL + DIAGNOSE ── */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Why Do AV Fistulas Fail?
          </h2>
          <p className="text-gray-600 text-sm mb-4">Common causes include:</p>
          <ul className="space-y-2">
            {[
              "Venous narrowing (stenosis)",
              "Thrombosis (clot formation)",
              "Poor maturation",
              "Repeated needle trauma",
              "High-flow complications",
              "Infection (rare but serious)",
            ].map((s) => (
              <BulletItem key={s} text={s} />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Most fistulas fail gradually and can be saved if detected early
            during ongoing AV Fistula Treatment in Gurgaon.
          </p>
        </div>

        <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-[var(--med-primary)]" />
            <h2 className="text-lg font-bold text-gray-800">
              How We Diagnose AV Fistula Problems
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Our protocol combines clinical expertise with imaging for accurate
            diagnosis during AV Fistula Treatment in Gurgaon:
          </p>
          <ul className="space-y-2">
            {[
              "Detailed physical examination",
              "Doppler ultrasound flow assessment",
              "Fistulogram (angiography) when needed",
              "Dialysis parameter review",
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
          <p className="text-sm text-gray-600 mt-4 italic">
            We believe clinical examination remains the most powerful
            surveillance tool when performed regularly.
          </p>
        </div>
      </div>

      {/* ── ADVANCED TREATMENTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Salvage First
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Advanced Treatments for AV Fistula Salvage
          </h2>
          <p className="text-gray-600 mt-2">
            Our "Salvage First" philosophy dictates every fistula deserves an
            attempt at saving during <b>AV Fistula Treatment in Gurgaon</b>.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {treatments.map((t, i) => (
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
          Only when absolutely necessary do we recommend AV graft placement. The
          AV Fistula Treatment is long-lasting, well-maintained, and can last
          for decades, meaning no repeated surgeries.
        </p>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Expert Care for AV Fistula?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Fistula success rates are better, complications lower and recovery
              faster in patients treated by an experienced vascular surgeon
              providing AV Fistula Treatment in Gurgaon.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-5">
            <p className="text-gray-700 leading-relaxed text-sm">
              Consultation is the most important step you can take; don't wait
              to notice something that makes your fistula look funny or feel
              funny before taking action to protect your dialysis access.
            </p>
            <p className="text-gray-700 font-medium text-sm">
              Schedule your AV Fistula Treatment consultation today for
              personalized care.
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">FAQs</h2>
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
            Protect your dialysis lifeline.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">If you:</p>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {[
            "Are planning dialysis",
            "Have a new fistula that is not maturing",
            "Notice reduced dialysis flow",
            "Have swelling or repeated clotting",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm mb-6">
          Schedule a structured <b>AV Fistula Treatment in Gurgaon</b>{" "}
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
