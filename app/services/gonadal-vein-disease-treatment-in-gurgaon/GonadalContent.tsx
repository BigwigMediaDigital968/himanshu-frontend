"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  AlertCircle,
  Activity,
  Stethoscope,
  Zap,
} from "lucide-react";

export default function GonadalContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const consequences = [
    "Swelling of the veins in the stomach",
    "Persistent pain in the lower pelvic area",
    "Heaviness in the lower abdomen",
    "Discomfort during long-standing hours",
  ];

  const causes = [
    "Blood flows backward",
    "Veins stretch and enlarge",
    "Pressure builds in the lower abdomen",
    "Blockage symptoms begin",
  ];

  const symptoms = [
    "Pain in the lower pelvic area",
    "Dull aching pain that worsens by evening",
    "Swelling in the abdominal veins",
    "Pain during or after long-standing",
    "Visible enlarged veins in some cases",
  ];

  const treatments = [
    {
      icon: <Stethoscope size={20} className="text-[var(--med-primary)]" />,
      title: "Pelvic Point Foam Sclerotherapy",
      desc: "This is the main and highly effective Gonadal Vein Disease Treatment in Gurgaon. A medical foam is injected into the affected vein, causing it to close and redirect blood to healthy veins.",
    },
    {
      icon: <Activity size={20} className="text-[var(--med-primary)]" />,
      title: "Left Gonadal Vein Coil Embolization",
      desc: "In this procedure, a tiny coil is placed inside the vein during Gonadal Vein Disease Treatment to block abnormal blood flow and relieve congestion.",
    },
    {
      icon: <Zap size={20} className="text-[var(--med-primary)]" />,
      title: "Laser Therapy",
      desc: "Laser treatment helps seal damaged veins and improve circulation in selected cases of Gonadal Vein Disease Treatment in Gurgaon.",
    },
  ];

  const faqs = [
    {
      q: "What Is Gonadal Vein Syndrome?",
      a: (
        <>
          Gonadal vein syndrome refers to the symptoms caused by{" "}
          <b>gonadal vein disease</b>, especially chronic pelvic pain due to
          venous congestion.
        </>
      ),
    },
    {
      q: "What Happens If the Gonadal Vein Is Blocked?",
      a: "When blocked, blood cannot flow properly toward the heart. This increases pressure in the lower abdominal veins, leading to swelling and persistent pain.",
    },
    {
      q: "What Organs Do the Gonadal Veins Drain?",
      a: "The gonadal veins drain blood from the ovaries in women and testes in men, carrying it back toward the heart.",
    },
    {
      q: "How is gonadal vein disease diagnosed?",
      a: (
        <>
          "Ultrasound, CT scan, and venography help confirm gonadal vein
          disease."
        </>
      ),
    },
    {
      q: "Who is at higher risk of gonadal vein disease?",
      a: (
        <>
          Women with multiple pregnancies are more prone to{" "}
          <b>gonadal vein disease</b>.
        </>
      ),
    },
    {
      q: "Can gonadal vein disease be cured permanently?",
      a: (
        <>
          With proper intervention like embolization or foam therapy,{" "}
          <b>gonadal vein disease</b> can be effectively managed.
        </>
      ),
    },
  ];

  return (
    <>
      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Gonadal Vein Disease Treatment in Gurgaon
      </h2>

      {/* INTRO */}
      <div className="space-y-4 mb-10">
        <p className="text-gray-700 leading-relaxed">
          If you are dealing with constant lower pelvic pain and unexplained
          abdominal discomfort, it may be related to gonadal vein disease. This
          condition affects the veins in the stomach and lower abdomen. When
          these veins swell, blood does not flow properly toward the heart. As a
          result, pressure builds up and causes blockage in the lower abdominal
          region.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Gonadal vein disease mainly affects women, especially those who have
          had multiple pregnancies, and timely{" "}
          <b>Gonadal Vein Disease Treatment</b> is essential as the condition
          can silently progress and may be misdiagnosed as general pelvic pain
          if not evaluated by a vascular specialist like Dr. Himanshu Verma.
        </p>

        {/* Inline CTA */}
        <div className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-5 py-4">
          <AlertCircle
            size={18}
            className="text-[var(--med-primary)] mt-0.5 flex-shrink-0"
          />
          <p className="text-gray-700 leading-relaxed text-sm">
            If you are experiencing symptoms that are affecting your daily life,
            do not ignore them.{" "}
            <span className="font-semibold text-[var(--med-primary)]">
              Book a consultation with Dr. Himanshu
            </span>{" "}
            for a proper vascular evaluation.
          </p>
        </div>

        <div className="mt-12 py-2 border-gray-100 flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What Is Gonadal Vein Disease?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Gonadal vein disease is a vascular condition where the gonadal veins
          become enlarged and dysfunctional. These veins are responsible for
          draining blood from the reproductive organs. When they become weak or
          blocked, blood pools in the pelvic region instead of moving upward
          toward the heart.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This pooling increases pressure in the veins and leads to:
        </p>

        <ul className="space-y-3">
          {consequences.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Over time, untreated gonadal vein disease can significantly reduce
          quality of life and may require Gonadal Vein Disease Treatment in
          Gurgaon.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* WHY DOES IT OCCUR */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Why Does Gonadal Vein Disease Occur?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          The main reason behind gonadal vein disease is valve failure inside
          the veins. These valves normally prevent blood from flowing backward.
          When they fail:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {causes.map((cause, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-5 py-4"
            >
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-[var(--med-primary)] text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">
                {cause}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">
          Hormonal changes and pregnancy increase the risk. That is why gonadal
          vein disease treatment is more common in women.
        </p>

        {/* Inline CTA */}
        <div className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-5 py-4">
          <AlertCircle
            size={18}
            className="text-[var(--med-primary)] mt-0.5 flex-shrink-0"
          />
          <p className="text-gray-700 leading-relaxed text-sm">
            If you have chronic pelvic discomfort,{" "}
            <span className="font-semibold text-[var(--med-primary)]">
              early diagnosis can prevent complications.
            </span>{" "}
            Schedule your assessment today to explore the right{" "}
            <span className="font-semibold text-[var(--med-primary)]">
              {" "}
              Gonadal Vein Disease Treatment
            </span>{" "}
            and understand the root cause of your pain.
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Symptoms of Gonadal Vein Disease
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Many patients live with symptoms of gonadal vein disease for years
          without knowing the cause. Common signs include:
        </p>

        <ul className="space-y-3">
          {symptoms.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Recognizing gonadal vein disease early allows for targeted Gonadal
          Vein Disease Treatment in Gurgaon.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Advanced Options for Gonadal Vein Disease Treatment
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Dr. Himanshu offers minimally invasive procedures for Gonadal Vein
          Disease Treatment in Gurgaon that focus on relieving pressure and
          restoring healthy blood flow.
        </p>

        <div className="space-y-4">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-white border border-[var(--med-border)] flex items-center justify-center">
                {t.icon}
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[var(--med-primary)]">
                  {t.title}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">
          These Gonadal Vein Disease Treatments are performed without major
          surgery and allow faster recovery.
        </p>

        {/* Inline CTA */}
        <div className="flex items-start gap-3 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl px-5 py-4">
          <AlertCircle
            size={18}
            className="text-[var(--med-primary)] mt-0.5 flex-shrink-0"
          />
          <p className="text-gray-700 leading-relaxed text-sm">
            If you want a safe and reliable solution,{" "}
            <span className="font-semibold text-[var(--med-primary)]">
              talk to Dr. Himanshu
            </span>{" "}
            about the right Gonadal Vein Disease Treatment in Gurgaon plan for
            you.
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;

            return (
              <div
                key={i}
                className="border border-[var(--med-border)] rounded-2xl overflow-hidden bg-[var(--med-light)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[var(--med-primary)] text-lg">
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`text-[var(--med-primary)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule an Appointment"
        />
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
