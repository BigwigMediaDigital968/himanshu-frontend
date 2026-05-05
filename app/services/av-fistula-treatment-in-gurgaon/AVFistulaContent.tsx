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
import TestimonialsServices from "@/app/components/TestimonialService";


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
    },
  ];

  const avFistulaReviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      content:
        "I consulted Dr. Himanshu Verma for AV fistula treatment in Gurgaon, and my experience was excellent. He explained the entire procedure clearly and ensured I was comfortable throughout. The surgery was smooth, and recovery was faster than expected. Highly recommended for anyone looking for a vascular specialist.",
      rating: 5,

    },
    {
      id: 2,
      name: "Neha Sharma",
      content:
        "After visiting multiple doctors, I finally chose Dr. Himanshu Verma for my AV fistula surgery. His expertise and calm approach gave me confidence. The results were perfect, and there were no complications. If you're searching for reliable AV fistula treatment in Gurgaon, he is the right choice.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      content:
        "Dr. Himanshu Verma is not just skilled but also very compassionate. He took time to understand my condition and suggested the best treatment plan. The staff was supportive, and the overall experience was seamless. Truly one of the best doctors in Gurgaon for AV fistula procedures.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pooja Mehta",
      content:
        "I was quite nervous before my AV fistula surgery, but Dr. Himanshu Verma handled everything professionally. The procedure went smoothly, and I recovered quickly without any major discomfort. His post-treatment care and follow-ups were excellent.",
      rating: 5,
    },
    {
      id: 5,
      name: "Sandeep Singh",
      content:
        "If you are dealing with dialysis access issues or need AV fistula treatment in Gurgaon, I strongly recommend Dr. Himanshu Verma. He is knowledgeable, patient-friendly, and ensures the best outcomes for his patients.",
      rating: 5,
    },
    {
      id: 6,
      name: "Kavita Gupta",
      content:
        "I had a great experience with Dr. Himanshu Verma. From consultation to surgery and follow-up, everything was handled with utmost care. The results of my AV fistula treatment were successful, and I am very satisfied.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What is an AV fistula?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          An AV fistula is a surgically created connection between an artery and
          a vein — most commonly in the forearm — that provides reliable,
          long-term access for hemodialysis. It is the preferred dialysis access
          method for patients with Chronic Kidney Disease (CKD) or End-Stage
          Renal Disease (ESRD) and is considered the gold standard by
          international nephrology and vascular guidelines.
        </p>
      ),
    },
    {
      q: "What qualifications does Dr. Himanshu Verma hold?",
      a: "Dr. Himanshu Verma holds MBBS, MS, MCh (Vascular Surgery), and FEVS (Fellow of European Board of Vascular Surgery) qualifications. He serves as Director of Vascular & Endovascular Surgery at Fortis Memorial Research Institute (FMRI), Gurgaon, with over 17 years of clinical experience in complex vascular and dialysis access surgery.",
    },
    {
      q: "What is the best type of dialysis access?",
      a: "An AV fistula is the gold standard for most dialysis patients. Compared to AV grafts and central venous catheters, it has the lowest infection risk, the longest functional lifespan, and delivers the most efficient blood flow during hemodialysis sessions.",
    },
    {
      q: "How long does AV fistula surgery take?",
      a: "The procedure typically takes 30–90 minutes and is performed under local anaesthesia as a day-care procedure. Most patients are discharged the same day with specific post-operative care instructions.",
    },
    {
      q: "How long does an AV fistula take to mature?",
      a: "Typically 6–12 weeks after creation. In cases where the fistula is slow to develop adequate flow or size, Balloon Assisted Maturation (BAM) can be used to dilate and accelerate the maturation process.",
    },
    {
      q: "Can a blocked AV fistula be saved?",
      a: "Yes, in most cases. Thrombectomy (clot removal) or angioplasty performed promptly can restore function in an occluded fistula. Dr. Himanshu Verma follows a Salvage First philosophy — ensuring every option is explored before a fistula is considered lost.",
    },
    {
      q: "How long can an AV fistula last?",
      a: "With proper care, daily monitoring, and timely intervention by a vascular access specialist, many AV fistulas remain functional for 10–20 years or more.",
    },
    {
      q: "How often should an AV fistula be checked?",
      a: "Patients should check the thrill (vibration) at home daily. Clinical assessment should take place before every dialysis session, with periodic specialist review — particularly if any change in flow or access function is noticed.",
    },
    {
      q: "Is long-term catheter dialysis safe?",
      a: "Catheters carry significantly higher risks of infection, blood clots, and central venous stenosis compared to AV fistulas. Prolonged catheter use can also damage central veins, complicating future access creation. Dr. Himanshu Verma's protocol actively works to eliminate catheter dependency wherever clinically possible.",
    },
    {
      q: "Can an AV fistula get infected?",
      a: "Infection is rare when proper hygiene and daily wound care are maintained. Regular monitoring and prompt attention to any redness, warmth, swelling, or discharge at the fistula site substantially reduces this risk.",
    },
    {
      q: "What happens if an AV fistula fails?",
      a: "A failed fistula can result in inadequate dialysis, clot formation, or the urgent need for a temporary catheter. Most failures can be anticipated and prevented through structured surveillance — this is why consistent monitoring is built into every stage of our protocol.",
    },
    {
      q: "How is an AV fistula repaired?",
      a: "Repair depends on the underlying problem. Stenosis is treated with angioplasty. Thrombosis is addressed with mechanical or pharmacomechanical thrombectomy. If the access has structurally deteriorated, surgical revision or reconstruction may be required. Dr. Himanshu Verma's Salvage First approach ensures every option is explored before a fistula is considered lost.",
    },
    {
      q: "Is AV fistula creation suitable for every patient?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Most CKD and ESRD patients are eligible for AV fistula creation.
          Vessel size, vein health, and patient anatomy determine which type is
          most appropriate. A pre-operative vein mapping ultrasound is performed
          to confirm suitability and plan the optimal access strategy.
        </p>
      ),
    },
  ];

  const protocolSteps = [
    {
      num: "01",
      title: "Pre-Fistula Planning",
      items: [
        "Early referral before dialysis begins, ideally when CKD reaches Stage 4",
        "Vein preservation education (avoiding IV lines and blood pressure cuffs on the potential access arm)",
        "Ultrasound vein mapping and vessel assessment",
        "Individualised access planning based on vessel calibre, patient age, and dialysis requirements",
      ],
    },
    {
      num: "02",
      title: "Precision Fistula Creation",
      items: [
        "Performed under local anaesthesia as a day-care procedure (approximately 30–90 minutes)",
        "Distal-first approach — radiocephalic technique preferred where vessels permit",
        "Microsurgical techniques to maximise maturation rates",
        "Non-dominant arm prioritised as the access site wherever possible",
      ],
    },
    {
      num: "03",
      title: "Structured Surveillance Program",
      items: [
        "Clinical assessment before every dialysis session",
        "Doppler ultrasound monitoring for flow volume and velocity",
        "Early identification of stenosis, reduced flow, or maturation failure",
      ],
    },
    {
      num: "04",
      title: "Early Intervention Strategy",
      items: [
        "Balloon Assisted Maturation (BAM) for slow-maturing fistulas",
        "Fistula angioplasty (fistuloplasty) for stenosis",
        "Mechanical or pharmacomechanical thrombectomy for clot removal",
        "Salvage procedures prioritised before any consideration of abandonment",
      ],
    },
    {
      num: "05",
      title: "Long-Term Access Preservation",
      items: [
        "Aneurysm monitoring and management",
        "Flow regulation for high-output fistulas",
        "Access rotation planning to reduce needle trauma",
        "Active steps to minimise catheter dependency",
      ],
    },
  ];

  const fistulas = [
    {
      name: "Radiocephalic AV Fistula (Wrist)",
      badge: "First Choice",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "Connects the radial artery and cephalic vein at the wrist. This is the first-choice option for most patients when suitable vessels are available.",
      items: [
        "Lowest complication rates of any fistula type",
        "Preserves all proximal access sites for the future",
        "Preferred under KDOQI guidelines",
      ],
      note: "This is often the first choice during AV Fistula Treatment in Gurgaon when suitable veins are available.",
    },
    {
      name: "Brachiocephalic AV Fistula (Elbow)",
      badge: "High Flow",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "Connects the brachial artery and cephalic vein at the elbow. Recommended when wrist vessels are too small or calcified.",
      items: [
        "Higher flow rates suitable for efficient hemodialysis",
        "Reliable long-term access performance",
        "Used when wrist vessels are unsuitable",
      ],
      note: "",
    },
    {
      name: "Brachial Basilic AV Fistula",
      badge: "Durable",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: "Involves the brachial artery and basilic vein, often requiring Basilic Vein Transposition (BVT) in a two-stage procedure.",
      items: [
        "Suited to patients with deeper veins not accessible at the wrist or elbow",
        "Excellent durability when well matured",
        "Two-stage procedure",
      ],
      note: "",
    },
    {
      name: "Lower-Limb AV Fistula (Complex or Redo Cases)",
      badge: "Complex / Redo",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: "Reserved for patients with exhausted upper-limb access options or complex vascular anatomy.",
      items: [
        "For patients with failed previous upper-limb access",
        "Advanced reconstruction techniques applied",
      ],
      note: "",
    },
  ];

  const treatments = [
    "Balloon Assisted Maturation (BAM)",
    "AV Fistula Angioplasty (Fistuloplasty)",
    "Mechanical Thrombectomy",
    "Pharmacomechanical Thrombectomy",
    "Surgical Revision and Reconstruction",
    "Basilic Vein Transposition (BVT)",
    "Aneurysm Repair and Ligation",
    "Flow Reduction Procedures for High-Output Fistulas",
    "Hybrid Endovascular and Open Surgical Salvage",
  ];

  const aftercareSteps = [
    "Wash the access arm every day, especially before dialysis sessions",
    "Check the thrill (the vibration over the fistula) daily — if it weakens or disappears, contact Dr. Himanshu Verma immediately",
    "Never allow blood pressure readings, blood draws, or IV insertions on the access arm",
    "Avoid wearing tight sleeves, watches, or jewellery on the fistula arm",
    "Do not lift heavy objects that put direct pressure on the access site",
    "Keep the fistula site clean and free from cuts or direct injury",
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
      {/* <div className="relative rounded-2xl overflow-hidden bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14">
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
          The gold standard for hemodialysis access — expertly created,
          monitored, and preserved for life.
        </p>
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
      </div> */}

      {/* ── WHAT IS ── */}
      <div className="grid gap-8 mb-7 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Is an AV Fistula?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An Arteriovenous (AV) fistula is a surgically created connection
            between an artery and a vein, typically in the forearm, that serves
            as a reliable, long-term access point for hemodialysis. For patients
            with Chronic Kidney Disease (CKD) or End-Stage Renal Disease (ESRD)
            who require dialysis 2–3 times a week,{" "}
            <b>AV Fistula Treatment in Gurgaon</b> offers the most durable and
            safest solution available.
          </p>
        </div>
        <div className=" bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Compared to catheters and AV grafts, an AV fistula:
          </p>
          {[
            "Delivers high blood flow for efficient dialysis sessions",
            "Carries the lowest infection risk of any dialysis access method",
            "Requires no synthetic material inside the body",
            "Can last 10–20 years or more with proper care",
            "Significantly reduces hospitalisation and access-related complications",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <img
          src="/services/av-fistula/av-fistula-banner.jpeg"
          alt="AV fistula surgery procedure for dialysis access"
        />
      </div>

      {/* ── ABOUT DR. HIMANSHU VERMA ── */}
      <div className="mb-14 rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          About Dr. Himanshu Verma - Vascular & Endovascular Surgeon
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          MBBS, MS, MCh (Vascular Surgery), FEVS · Director – Vascular &amp;
          Endovascular Surgery, Fortis FMRI, Gurgaon
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dr. Himanshu Verma is one of India's leading vascular specialists,
          bringing over 17 years of clinical expertise in treating complex
          arterial, venous, lymphatic, and dialysis-access disorders. As
          Director of Vascular &amp; Endovascular Surgery at Fortis Memorial
          Research Institute, Gurgaon, one of Delhi-NCR's premier tertiary care
          hospitals, he delivers advanced, patient-focused vascular care using
          evidence-based and minimally invasive techniques.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-3">
          His areas of specialisation include:
        </p>
        <div className="grid sm:grid-cols-2 gap-2 mb-4">
          {[
            "AV fistula creation, Basilic Vein Transposition (BVT), and AV grafts for dialysis access",
            "Advanced endovascular interventions and open vascular surgery",
            "Hybrid vascular procedures tailored to individual patient anatomy",
            "Complex vascular reconstructions and onco-vascular surgery",
            "Emergency and trauma vascular care",
            "Limb salvage and advanced arterial revascularisation",
            "Pelvic venous disease management",
            "Dialysis access creation and long-term surveillance",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm italic">
          Dr. Himanshu Verma's approach is built on three pillars:
          evidence-based protocols, multidisciplinary collaboration, and
          patient-centric care — with a special focus on high-risk,
          limb-threatening, and life-threatening vascular cases.
        </p>
        <p className="text-gray-600 text-sm italic mt-2">
          For patients seeking AV fistula treatment in Gurgaon, Dr. Himanshu Verma offers the full spectrum of care, from pre-surgical vein mapping through to long-term access preservation and complex salvage procedures.

        </p>
      </div>

      {/* ── PROTOCOL ── */}
      <div className="mb-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our AV Fistula Management Protocol
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Dialysis access is not a one-time surgery. It demands careful
            planning, consistent monitoring, and timely intervention at every
            stage. Our structured protocol for{" "}
            <b>AV Fistula Treatment in Gurgaon</b> includes:
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
          Our goal: Create once. Maintain for years. Avoid failure.
        </div>
        <div className="mt-4 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book an Appointment"
          />
        </div>
      </div>

      {/* ── TYPES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Types of AV Fistulas We Create
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            We follow a distal-to-proximal approach at every stage, preserving
            future access sites. The optimal fistula type is selected based on
            vessel calibre, vein depth, patient age, and overall dialysis goals.
          </p>
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
                {/* <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${f.badgeClass}`}
                >
                  {f.badge}
                </span> */}
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
        <div className="mb-6">
          <ServiceCarousel images={typesCarousl} />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            Not sure which type suits you? Schedule a vein mapping evaluation
            with Dr. Himanshu Verma at Fortis FMRI, Gurgaon today.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── THE PROCEDURE ── */}
      <div className="mb-14 rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          The AV Fistula Procedure - What to Expect
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Anaesthesia", value: "Local anaesthesia at the access site" },
            { label: "Duration", value: "Approximately 30–90 minutes" },
            { label: "Setting", value: "Day-care / outpatient — most patients discharged same day" },
            { label: "Maturation Period", value: "Typically 6–12 weeks before ready for use" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-4 border border-[var(--med-border)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-1">
                {item.label}
              </p>
              <p className="text-gray-700 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── AFTERCARE ── */}
      <div className="mb-14">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Fistula Aftercare — Protecting Your Access at Home
          </h2>
          <p className="text-gray-600 mt-2">
            After your AV fistula surgery in Gurgaon, follow these daily care
            steps to protect your dialysis access:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {aftercareSteps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-xl px-4 py-3"
            >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-gray-700 text-sm">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book an Appointment"
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
            Early detection saves your dialysis access. Contact us promptly if
            you notice:
          </p>
          <h3 className="font-semibold text-gray-800 text-sm mb-2">
            Symptoms to Watch For:
          </h3>
          <ul className="space-y-1.5 mb-4">
            {[
              "Swelling of the arm near the fistula",
              "Pain or redness at the fistula site",
              "Weak or absent thrill (the vibration you normally feel over the fistula)",
              "Prolonged bleeding after a dialysis session",
              "Reduced dialysis efficiency or persistent low blood flow alarms",
              "Visible enlargement or aneurysm formation",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-orange-400" />
            ))}
          </ul>
          <h3 className="font-semibold text-gray-800 text-sm mb-2">
            Common Underlying Causes:
          </h3>
          <ul className="space-y-1.5">
            {[
              "Thrombosis — blood clots forming inside the fistula",
              "Stenosis — narrowing of the vein or artery feeding the fistula",
              "Repeated needle trauma from dialysis cannulation",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-orange-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Do not ignore these signs. Timely intervention by a specialist can
            save your fistula and prevent emergency catheter dependence.
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Complications of AV Fistulas
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Though uncommon with proper monitoring, complications can include:
          </p>
          <ul className="space-y-1.5 mb-4">
            {[
              "Infection at the surgical site",
              "Thrombosis (clot formation)",
              "Aneurysm in the fistula vein",
              "High-output cardiac strain in very high-flow fistulas (rare)",
              "Central venous stenosis",
              "Recurrent catheter dependence following access failure",
            ].map((s) => (
              <BulletItem key={s} text={s} color="bg-red-400" />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mb-5">
            Regular follow-up with Dr. Himanshu Verma at Fortis FMRI ensures
            timely detection and intervention, keeping your dialysis access
            functional for the long term.
          </p>

        </div>
      </div>

      {/* ── WHY FAIL + DIAGNOSE ── */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Why Do AV Fistulas Fail?
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Most fistulas fail gradually and can be rescued if detected early.
            Common causes include:
          </p>
          <ul className="space-y-2">
            {[
              "Venous stenosis — narrowing of the outflow vein",
              "Thrombosis — clot formation blocking blood flow",
              "Poor maturation — the fistula does not develop adequate size or flow after creation",
              "Repeated needle trauma causing scarring at the same access segment",
              "High-flow complications straining the heart or central veins",
              "Infection (rare but serious)",
            ].map((s) => (
              <BulletItem key={s} text={s} />
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            This is why a structured surveillance programme is not optional, it
            is the foundation of successful long-term AV fistula treatment in
            Gurgaon.
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
            Accurate diagnosis combines clinical skill with targeted imaging
            during <b>AV Fistula Treatment in Gurgaon</b>:
          </p>
          <ul className="space-y-2">
            {[
              "Detailed physical examination, the most immediate and powerful surveillance tool",
              "Doppler ultrasound to measure flow volume and velocity",
              "Fistulogram (angiography / fluoroscopy) when endovascular intervention is planned",
              "Review of dialysis session records for trending changes in blood flow or pressure",
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
          <div className="mt-5">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Book an Appointment"
            />
          </div>
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
            Dr. Himanshu Verma's "Salvage First" philosophy means every fistula
            deserves a genuine attempt at rescue before it is abandoned. As a
            specialist in complex vascular reconstructions and hybrid
            endovascular procedures, Dr. Himanshu Verma is equipped to handle
            even the most challenging access failure cases during{" "}
            <b>AV Fistula Treatment in Gurgaon</b>.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
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
          AV graft placement is considered only after all appropriate salvage
          options have been exhausted. A well-maintained AV fistula can function
          for decades — sparing patients from repeated surgeries or prolonged
          catheter dependence.
        </p>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="mb-14">
        <TestimonialsServices
          testimonials={avFistulaReviews}
          title="Kind Words of our Patients"
        />
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Is Your Dialysis Access at Risk?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Consult Dr. Himanshu Verma, Director, Vascular & Endovascular Surgery, Fortis FMRI, Gurgaon, if you:
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            <ul className="space-y-2">
              {[
                "Are approaching dialysis and want early vein mapping and access planning",
                "Have a new fistula that is not maturing as expected",
                "Are experiencing reduced blood flow or poor dialysis efficiency",
                "Notice swelling, pain, redness, or repeated clotting at the fistula site",
                "Have had a previous fistula or graft failure and need complex redo access surgery",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4 font-bold">
              Schedule your AV fistula evaluation in Gurgaon today, protect your dialysis access with expert care.
            </p>
            <div className="mt-2">
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
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
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

      <div className="mt-6">
        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 items-center justify-between gap-4">
          <p className="text-sm text-white/90">
            <strong>Disclaimer:</strong> The information provided on this page is intended for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Individual medical conditions vary, and results differ from patient to patient. Please consult Dr. Himanshu Verma or a qualified medical professional before making any decisions regarding your health or treatment. In case of a medical emergency, please contact your nearest hospital immediately. 
          </p>
        </div>
      </div>
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}