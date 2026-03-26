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
} from "lucide-react";

export default function AmputationContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the types of amputations?",
      a: (
        <div className="space-y-2">
          <p className="text-gray-700 leading-relaxed">
            Amputations are classified based on which part of the limb is
            removed and the underlying medical need. Common types include:
          </p>
          <ul className="space-y-1.5 mt-2">
            {[
              "Toe or Finger Amputation",
              "Partial Foot Amputation",
              "Below-Knee Amputation (BKA)",
              "Above-Knee Amputation (AKA)",
              "Partial Arm or Hand Amputation",
              "Complete Limb Amputation",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed text-sm mt-2">
            The level of amputation is chosen carefully during{" "}
            <b>Amputation Surgery in Gurgaon</b> to ensure maximum healing and
            functional recovery.
          </p>
        </div>
      ),
    },
    {
      q: "What age are amputations most common?",
      a: "Amputations are most common in older adults, typically above 50–60 years of age, especially in people with diabetes or long-standing vascular disease. However, Amputation Surgery in Gurgaon may be required at any age due to trauma, infections, or tumors.",
    },
    {
      q: "What is the most common reason for amputation?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          The most common cause of amputation is diabetes-related complications,
          particularly non-healing foot ulcers and infections. Poor blood
          circulation due to peripheral artery disease often worsens the
          condition. Early vascular evaluation by an experienced Amputation
          Surgery doctor can significantly reduce the need for{" "}
          <b>Amputation Surgery in Gurgaon</b>.
        </p>
      ),
    },
  ];

  const amputationTypes = [
    {
      name: "Lower Extremity",
      badge: "Most Common",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "Amputation levels for the lower limb, selected based on disease extent and blood supply:",
      items: [
        "Toe Amputation",
        "Ray Amputation",
        "Transmetatarsal Amputation",
        "Syme's Amputation",
        "Below-Knee Amputation (BKA / Transtibial)",
        "Knee Disarticulation",
        "Above-Knee Amputation (AKA / Transfemoral)",
        "Hip Disarticulation",
      ],
      note: "The goal is always to preserve as much functional length as possible while ensuring proper healing.",
    },
    {
      name: "Upper Extremity",
      badge: "Complex",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "Amputation levels for the upper limb, preserving maximum function:",
      items: [
        "Finger Amputation",
        "Partial Hand Amputation",
        "Wrist Disarticulation",
        "Below-Elbow Amputation",
        "Elbow Disarticulation",
        "Above-Elbow Amputation",
        "Shoulder Disarticulation",
      ],
      note: "",
    },
  ];

  const indications = [
    "Peripheral Arterial Disease (PAD)",
    "Diabetic Complications",
    "Traumatic Injuries",
    "Severe Infections",
    "Tumors",
    "Chronic Non-Healing Wounds",
    "Congenital Deformities",
    "Critical Limb Ischemia",
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
          Vascular Surgery Specialists · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Amputation Surgery in Gurgaon: Comprehensive Care for Complex Vascular
          Conditions
        </h2>
        <p className="text-white/80 text-base md:text-md mb-8">
          When blood flow to a limb becomes severely compromised due to vascular
          disease, trauma, or infection, amputation may become a medically
          necessary procedure to preserve your overall health and quality of
          life. Patients seeking Amputation Surgery in Gurgaon often require
          expert vascular evaluation and advanced surgical care, making it
          important to consult an experienced Amputation Surgery doctor in
          Gurgaon. <br /> <br />
          Our practice provides compassionate, expert care for patients facing
          this challenging decision, utilizing advanced surgical techniques to
          ensure the best possible outcomes. Dr. Himanshu Verma, an experienced
          Amputation Surgery doctor in Gurgaon, offers advanced surgical care
          with a strong focus on patient safety, careful surgical planning, and
          long-term rehabilitation support.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Life-Saving", "Intervention"],
            ["1–3 hrs", "Surgery Duration"],
            ["Advanced", "Surgical Techniques"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-lg md:text-2xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What is Amputation?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Amputation is the surgical removal of all or part of a limb or
            extremity. This procedure involves carefully removing tissue that is
            no longer viable while preserving as much healthy tissue and
            function as possible. While amputation represents a significant life
            change, it is sometimes the most appropriate medical intervention to
            prevent life-threatening complications, relieve chronic pain, or
            address conditions that cannot be managed through other treatments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Modern <b>Amputation Surgery in Gurugram</b> focuses not just on
            removing damaged tissue, but on creating a residual limb that heals
            well and can function optimally, whether with or without a
            prosthetic device. Specialists like Dr. Himanshu Verma, a trusted{" "}
            <b>Amputation Surgery doctor in Gurgaon</b>, aim to preserve maximum
            function and improve quality of life after surgery.
          </p>
        </div>
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Why Choose Expert Care?
          </p>
          {[
            "Comprehensive vascular evaluation before surgery",
            "Advanced surgical techniques for optimal outcomes",
            "Focus on preserving maximum limb function",
            "Complete rehabilitation support post-surgery",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHEN IS AMPUTATION NECESSARY ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Medical Indications
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            When Is Amputation Necessary?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Amputation is considered only after all other treatment options have
            been exhausted or when immediate removal is necessary to save a
            life. The decision is made carefully, weighing the risks of keeping
            the limb against the benefits of removal. Patients may be advised to
            undergo Amputation Surgery when recommended by an experienced
            Amputation Surgery doctor advanced vascular disease, trauma, or
            infection makes limb preservation impossible. <br /> <br />
            Common situations requiring amputation include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {[
            {
              title: "Peripheral Arterial Disease (PAD)",
              desc: "Severe blockages in blood vessels can lead to critical limb ischemia, where tissues don't receive adequate oxygen and nutrients. When revascularization procedures are not possible or have failed, Amputation Surgery may be required to prevent gangrene and life-threatening sepsis.",
            },
            {
              title: "Diabetic Complications",
              desc: "Diabetes can cause severe nerve damage (neuropathy) and poor circulation, leading to non-healing ulcers and infections that may progress to the bone (osteomyelitis). When conservative treatments and vascular interventions fail, Amputation Surgery in Gurgaon helps prevent the spread of infection.",
            },
            {
              title: "Traumatic Injuries",
              desc: "Severe accidents causing irreparable damage to blood vessels, nerves, bones, and soft tissues may necessitate Amputation Surgery in Gurgaon when reconstruction is not viable.",
            },
            {
              title: "Severe Infections",
              desc: "Uncontrolled infections such as necrotizing fasciitis, gas gangrene, or sepsis originating from a limb may require Amputation Surgery in Gurugram to prevent spread and save the patient's life.",
            },
            {
              title: "Tumors",
              desc: "Malignant growths in bones or soft tissues of the limbs may require Amputation Surgery in Gurgaon as part of cancer treatment when other options are not feasible.",
            },
            {
              title: "Chronic Non-Healing Wounds",
              desc: "Wounds that fail to heal despite optimal medical management, wound care, and revascularization attempts may require Amputation Surgery in Gurgaon to resolve ongoing pain and infection risk.",
            },
            {
              title: "Congenital Deformities ",
              desc: "In rare cases, severe limb deformities present from birth may require Amputation Surgery in Gurugram to improve function. ",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAUSES AND RISK FACTORS ── */}
      <div className="rounded-2xl mb-14 border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-bold text-gray-800">
            Causes and Risk Factors
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Several underlying conditions and factors increase the risk of
          requiring amputation and may lead patients to consider{" "}
          <b>Amputation Surgery in Gurgaon</b>.
        </p>

        <h3 className="font-semibold text-gray-800 text-sm mb-2">
          Vascular Causes
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
          {[
            "Advanced peripheral arterial disease",
            "Blood clots (thrombosis)",
            "Severe atherosclerosis",
            "Buerger's disease (thromboangiitis obliterans)",
          ].map((s) => (
            <BulletItem key={s} text={s} color="bg-orange-400" />
          ))}
        </ul>

        <h3 className="font-semibold text-gray-800 text-sm mb-2">
          Metabolic Conditions
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
          {[
            "Poorly controlled diabetes mellitus",
            "Chronic kidney disease affecting circulation",
            "Severe metabolic disorders",
          ].map((s) => (
            <BulletItem key={s} text={s} color="bg-orange-400" />
          ))}
        </ul>

        <h3 className="font-semibold text-gray-800 text-sm mb-2">
          Infectious Causes
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
          {[
            "Diabetic foot infections",
            "Bone infections (osteomyelitis)",
            "Soft tissue infections that spread despite antibiotics",
            "Necrotizing infections",
          ].map((s) => (
            <BulletItem key={s} text={s} color="bg-orange-400" />
          ))}
        </ul>

        <h3 className="font-semibold text-gray-800 text-sm mb-2">
          Traumatic Causes
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
          {[
            "Motor vehicle accidents",
            "Industrial injuries",
            "Military combat injuries",
            "Severe burns",
            "Frostbite",
          ].map((s) => (
            <BulletItem key={s} text={s} color="bg-orange-400" />
          ))}
        </ul>

        <h3 className="font-semibold text-gray-800 text-sm mb-2">
          Risk Factors
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {[
            "Smoking (dramatically increases vascular disease risk)",
            "Advanced age",
            "Obesity",
            "High blood pressure",
            "High cholesterol",
            "Sedentary lifestyle",
            "Family history of vascular disease",
            "Poor diabetes management",
          ].map((s) => (
            <BulletItem key={s} text={s} color="bg-orange-400" />
          ))}
        </ul>

        <p className="text-md text-gray-500 mt-4">
          Proper vascular assessment by an experienced{" "}
          <b>Amputation Surgery doctor in Gurgaon</b> helps determine the most
          appropriate treatment approach.
        </p>
      </div>

      {/* ── TYPES ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Surgical Options
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Types of Amputations
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {amputationTypes.map((f) => (
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
          The level of amputation depends on the extent of disease, blood supply
          to remaining tissues, and functional goals. Surgeons performing{" "}
          <b>Amputation Surgery in Gurgaon</b> aim to preserve as much limb
          function as possible.
        </p>

        {/* ── WHY AMPUTATION MAY BE RECOMMENDED ── */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Why Amputation May Be Recommended
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            The decision to recommend <b>Amputation Surgery in Gurgaon</b> is
            never made lightly. It may be necessary for several important
            reasons:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Life-Saving Intervention",
                desc: (
                  <>
                    When infection or gangrene threatens to spread to the
                    bloodstream, <b>Amputation Surgery in Gurgaon</b> can
                    prevent sepsis and save your life.
                  </>
                ),
              },
              {
                title: "Pain Relief",
                desc: (
                  <>
                    Chronic, severe pain from non-healing wounds, ischemia, or
                    nerve damage may be resolved through{" "}
                    <b>Amputation Surgery in Gurgaon</b> when other treatments
                    fail.
                  </>
                ),
              },
              {
                title: "Improved Quality of Life",
                desc: (
                  <>
                    A non-functional, painful limb can severely limit mobility
                    and independence. With proper rehabilitation after{" "}
                    <b>Amputation Surgery in Gurgaon</b>, many patients regain
                    improved mobility.
                  </>
                ),
              },
              {
                title: "Prevention of Complications",
                desc: "Removing diseased tissue prevents ongoing infections, repeated hospitalizations, and the need for multiple unsuccessful surgeries.",
              },
              {
                title: "Enabling Prosthetic Use",
                desc: (
                  <>
                    Modern <b>Amputation Surgery in Gurgaon</b> focuses on
                    creating a functional residual limb that can support
                    prosthetic rehabilitation.
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-4 py-4"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            To learn about the type of amputation that is right for your
            condition? Schedule an evaluation now.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── PROCEDURE PROTOCOL ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Procedure Details
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Procedure Details
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Every step of <b>Amputation Surgery in Gurgaon</b> is carefully
            planned and executed for the safest, most functional outcome.
          </p>
        </div>

        {/* Before Surgery */}
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div
              className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
              style={{ minHeight: "40px" }}
            />
          </div>
          <div className="md:col-span-11 pb-8 md:pl-6">
            <h3 className="text-base font-bold text-gray-800 mb-4">
              Before Surgery
            </h3>

            <p className="text-sm font-semibold text-gray-800 mb-1">
              Comprehensive Evaluation
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your surgical team will conduct thorough assessments including
              vascular studies, imaging, nutritional status evaluation, and
              overall health optimization. Patients considering{" "}
              <b>Amputation Surgery in Gurgaon</b> undergo detailed evaluation
              under the supervision of an experienced Amputation Surgery doctor
              to determine the safest surgical plan.
            </p>

            <p className="text-sm font-semibold text-gray-800 mb-2">
              Pre-Operative Planning
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Detailed discussion of the procedure, risks, and benefits",
                "Determining the optimal amputation level through vascular assessment",
                "Medical optimization (blood sugar control, blood pressure management, smoking cessation)",
                "Nutritional support to promote healing",
                "Psychological preparation and counseling",
                "Meeting with rehabilitation specialists and prosthetists when appropriate",
                "Pre-operative antibiotics if infection is present",
              ].map((item) => (
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

        {/* During Surgery */}
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div
              className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
              style={{ minHeight: "40px" }}
            />
          </div>
          <div className="md:col-span-11 pb-8 md:pl-6">
            <h3 className="text-base font-bold text-gray-800 mb-4">
              During Surgery
            </h3>

            <p className="text-sm font-semibold text-gray-800 mb-1">
              Anesthesia
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The procedure is performed under general anesthesia (fully asleep)
              or regional anesthesia (spinal/epidural block).
            </p>

            <p className="text-sm font-semibold text-gray-800 mb-2">
              Surgical Steps
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {[
                "Incision planning",
                "Tissue removal",
                "Vascular management",
                "Nerve management",
                "Bone preparation",
                "Muscle shaping",
                "Wound closure",
                "Dressing application",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 bg-[var(--med-light)] rounded-xl px-4 py-3 border border-[var(--med-border)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The duration of <b>Amputation Surgery in Gurgaon</b> typically
              ranges from 1–3 hours, depending on the level and complexity of
              the procedure.
            </p>
          </div>
        </div>

        {/* After Surgery */}
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div
              className="hidden md:block w-px flex-1 bg-[var(--med-border)] my-2 mx-auto"
              style={{ minHeight: "40px" }}
            />
          </div>
          <div className="md:col-span-11 pb-8 md:pl-6">
            <h3 className="text-base font-bold text-gray-800 mb-4">
              After Surgery
            </h3>

            <p className="text-sm font-semibold text-gray-800 mb-2">
              Immediate Post-Operative Period
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {[
                "Recovery in the post-anesthesia care unit",
                "Pain management",
                "Vital sign monitoring",
                "Drainage management",
                "Limb elevation to reduce swelling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 bg-[var(--med-light)] rounded-xl px-4 py-3 border border-[var(--med-border)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-gray-800 mb-1">
              Hospital Stay
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Most patients remain hospitalized 3–7 days following{" "}
              <b>Amputation Surgery in Gurugram</b>, with regular monitoring by
              an experienced Amputation Surgery doctor in Gurgaon, depending on
              recovery and overall health.
            </p>

            <p className="text-sm font-semibold text-gray-800 mb-2">
              Early Recovery
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Wound care and dressing changes",
                "Pain management",
                "Prevention of complications",
                "Early physical therapy",
                "Emotional support and counseling",
                "Nutritional support for healing",
              ].map((item) => (
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

        {/* Is Amputation Painful */}
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0 mb-3 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              04
            </div>
          </div>
          <div className="md:col-span-11 pb-8 md:pl-6">
            <h3 className="text-base font-bold text-gray-800 mb-2">
              Is Amputation Painful?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              During surgery, anesthesia prevents pain.
            </p>
            <p className="text-sm font-semibold text-gray-800 mb-2">
              After <b>Amputation Surgery in Gurgaon</b>:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Some pain or discomfort is expected initially",
                "Pain is effectively managed with medications",
                "Some patients may experience phantom limb sensation, which can be treated with therapy and medication",
              ].map((item) => (
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

        <div className="mt-4 rounded-2xl bg-[var(--med-primary)] text-white px-6 py-4 text-center font-semibold text-sm md:text-base">
          Our goal: Preserve as much function as possible. Heal completely.
          Rehabilitate fully. <br /> <br />A key principle in{" "}
          <b>Amputation Surgery in Gurgaon</b>.
        </div>
      </div>

      {/* ── ADVANCED TREATMENTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            When Indicated
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Common Situations Requiring Amputation Surgery
          </h2>
          <p className="text-gray-600 mt-2">
            Patients may be advised to undergo{" "}
            <b>Amputation Surgery in Gurgaon</b> when advanced vascular disease,
            trauma, or infection makes limb preservation impossible.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {indications.map((t, i) => (
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
          Our practice provides compassionate, expert care for patients facing
          this challenging decision, utilizing advanced surgical techniques to
          ensure the best possible outcomes. Dr. Himanshu Verma, an experienced{" "}
          <b>Amputation Surgery doctor in Gurgaon</b>, offers advanced surgical
          care with a strong focus on patient safety, careful surgical planning,
          and long-term rehabilitation support.
        </p>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Expert Care for Amputation Surgery?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Success rates are better, complications lower, and recovery faster
              in patients treated by an experienced vascular surgeon providing{" "}
              <b>Amputation Surgery in Gurgaon</b>.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-5">
            <p className="text-gray-700 leading-relaxed text-sm">
              When blood flow to a limb becomes severely compromised due to
              vascular disease, trauma, or infection, amputation may become a
              medically necessary procedure to preserve your overall health and
              quality of life.
            </p>
            <p className="text-gray-700 font-medium text-sm">
              Schedule your <b>Amputation Surgery in Gurgaon</b> consultation
              today for personalized care and expert evaluation.
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
            Get expert vascular care today.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">If you:</p>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {[
            "Have been advised to consider amputation",
            "Are experiencing non-healing wounds or ulcers",
            "Have been diagnosed with critical limb ischemia",
            "Need a second opinion on limb preservation options",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm mb-6">
          Schedule a structured <b>Amputation Surgery in Gurgaon</b> evaluation
          today with Dr. Himanshu Verma.
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
