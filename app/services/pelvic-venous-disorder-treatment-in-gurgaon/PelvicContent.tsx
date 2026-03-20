"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ShieldCheck,
  Zap,
  HeartPulse,
} from "lucide-react";

export default function PelvicContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How are pelvic venous disorders diagnosed?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> are diagnosed
          through physical exams and imaging tests such as ultrasound, CT scan,
          MRI, or venography.
        </p>
      ),
    },
    {
      q: "What causes pelvic venous disorders?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          <b>Pelvic Venous Disorders</b> are caused by weakened veins, hormonal
          changes, genetics, or prolonged pressure on pelvic veins.
        </p>
      ),
    },
    {
      q: "Can pelvic venous disorders be prevented?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Maintaining a healthy lifestyle, regular exercise, and avoiding
          prolonged sitting or standing can help reduce the risk of{" "}
          <b>Pelvic Venous Disorders</b>.
        </p>
      ),
    },
    {
      q: "Are pelvic venous disorders painful?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Yes, symptoms of <b>Pelvic Venous Disorders</b> can range from mild
          discomfort to severe pelvic pain, especially after standing for long
          periods.
        </p>
      ),
    },
    {
      q: "Is treatment for pelvic venous disorders effective?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Yes, with early diagnosis and proper intervention,{" "}
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> can provide
          significant symptom relief and improve quality of life.
        </p>
      ),
    },
  ];

  const symptoms = [
    "Persistent pelvic pain that worsens after standing or sitting for long periods",
    "Swelling in the pelvic area",
    "Visible varicose veins in the lower abdomen, buttocks, or thighs",
    "Pain during or after sexual activity",
    "Heaviness or pressure in the pelvis",
  ];

  const diagnosisSteps = [
    {
      num: "01",
      title: "Medical History & Physical Exam",
      desc: "Identify patterns of pelvic pain through a comprehensive clinical review.",
    },
    {
      num: "02",
      title: "Ultrasound",
      desc: "Check for vein dilation and blood flow issues using non-invasive imaging.",
    },
    {
      num: "03",
      title: "CT or MRI Scans",
      desc: "Obtain detailed views of pelvic veins to assess the extent of the condition.",
    },
    {
      num: "04",
      title: "Venography",
      desc: "Map abnormal vein patterns and confirm Pelvic Congestion Syndrome (PCS).",
    },
  ];

  const treatments = [
    {
      title: "Lifestyle & Supportive Care",
      badge: "First Step",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: (
        <>
          Regular exercise, avoiding prolonged sitting, and managing pain can
          help control symptoms related to{" "}
          <b>Pelvic Venous Disorders Treatment</b>.
        </>
      ),
    },
    {
      title: "Minimally Invasive Procedures",
      badge: "Most Effective",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: (
        <>
          Endovascular treatments like embolization or ablation are commonly
          used for <b>Pelvic Venous Disorders Treatment in Gurgaon</b> to close
          or remove malfunctioning veins. These procedures are done under local
          anesthesia, have shorter recovery times, and are highly effective in
          treating PCS.
        </>
      ),
    },
    {
      title: "Surgical Intervention",
      badge: "Rare Cases",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: (
        <>
          <p>
            Surgical intervention: Rarely needed but may be considered in severe
            cases where minimally invasive methods are not suitable, including
            advanced <b>Pelvic Venous Disorders Treatment</b>.
          </p>
        </>
      ),
    },
  ];

  const causes = [
    "Weak or damaged vein walls",
    "Hormonal changes, especially during pregnancy",
    "Prolonged standing or sitting",
    "Genetic predisposition to vein disorders",
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
          Pelvic Venous Disorders Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
          Expert care for Pelvic Congestion Syndrome and related vein conditions
          - personalized treatment by Dr. Himanshu.
        </p>
        {/* <button
          onClick={() => setOpenPopup(true)}
          className="inline-flex items-center gap-2 bg-white text-[var(--med-primary)] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all"
        >
          Book a Consultation with Dr. Himanshu
        </button> */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Women", "Most Commonly Affected"],
            ["PCS", "Most Common Type"],
            ["Minimally Invasive", "Preferred Treatment"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT ARE PELVIC VENOUS DISORDERS ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What are Pelvic Venous Disorders?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> refer to
            conditions caused by malfunctioning veins in the pelvic area, often
            leading to chronic pain and discomfort. One of the most common types
            of pelvic venous disorders is{" "}
            <b>Pelvic Congestion Syndrome (PCS)</b>, which occurs when veins in
            the pelvis become dilated and fail to efficiently return blood to
            the heart.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> are more
            commonly seen in women, especially those experiencing chronic pelvic
            pain. Early consultation with a specialist can help manage symptoms
            and prevent complications. Book your consultation with Dr. Himanshu
            today if you suspect{" "}
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b>.
          </p>
        </div>

        {/* Quick-facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Key Facts
          </p>
          {[
            "Caused by malfunctioning pelvic veins",
            "Most common form: Pelvic Congestion Syndrome (PCS)",
            "More prevalent in women with chronic pelvic pain",
            "Early consultation prevents complications",
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
            What to Look For
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Symptoms of Pelvic Venous Disorders
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Recognizing the signs of{" "}
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> is crucial for
            timely intervention. Common symptoms include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {symptoms.map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--med-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{s}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <div className="flex-1">
            <p className="text-gray-700 text-sm">
              Many individuals with{" "}
              <b>Pelvic Venous Disorders Treatment in Gurgaon</b> also
              experience fatigue or discomfort that affects daily activities. If
              you notice any of these symptoms, do not ignore them.
            </p>
          </div>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Check-up"
          />
        </div>
      </div>

      {/* ── DIAGNOSIS TIMELINE ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Getting Diagnosed
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Do I Know If I Have Pelvic Venous Disorders?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Diagnosis involves a thorough evaluation and specialized imaging to
            confirm{" "}
            <b>Pelvic Venous Disorders or Pelvic Congestion Syndrome (PCS)</b>.
            The process typically includes:
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
          Early detection of Pelvic Venous Disorders can prevent complications
          and help plan effective treatment.
        </div>
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Treatment Pathways
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How is Pelvic Venous Disorders Treated?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> focuses on
            relieving symptoms and improving vein function. Options include:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-800 text-sm">{t.title}</h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 font-medium flex-1 text-sm">
            Dr. Himanshu personalizes every treatment plan for{" "}
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> to provide
            maximum relief and improve long-term health. Contact us to discuss
            the <b>best Pelvic Venous Disorders Treatment</b> option for you.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── CAUSES ── */}
      <div className="mb-14">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Causes card */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <HeartPulse className="w-5 h-5 text-[var(--med-primary)]" />
              <h2 className="text-lg font-bold text-gray-800">
                Causes and Risk Factors of Pelvic Venous Disorders
              </h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              <b>Pelvic Venous Disorders</b> can develop due to:
            </p>
            <ul className="space-y-2">
              {causes.map((c) => (
                <BulletItem key={c} text={c} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Understanding the cause of Pelvic Venous Disorders Treatment helps
              your doctor create a targeted treatment approach.
            </p>
          </div>

          {/* Why choose split */}
          <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
            <div className="bg-[var(--med-primary)] p-6 flex flex-col gap-3">
              <ShieldCheck className="w-7 h-7 text-white/60" />
              <h2 className="text-lg font-bold text-white">
                Why Choose Dr. Himanshu?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Personalized treatment plans backed by advanced endovascular
                expertise ensure the best outcomes for Pelvic Venous Disorders
                in Gurgaon.
              </p>
            </div>
            <div className="bg-[var(--med-light)] p-6 flex flex-col gap-4">
              {[
                "Minimally invasive, shorter recovery",
                "Imaging-guided precision procedures",
                "Tailored care for every patient",
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
                  type="button"
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
            Take the First Step Toward Relief.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          If you suspect <b>Pelvic Venous Disorders Treatment in Gurgaon</b>,
          getting evaluated by a specialist is the best step. Schedule a
          structured evaluation today.
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
