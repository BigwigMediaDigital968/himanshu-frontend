"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  AlertCircle,
  Activity,
  Stethoscope,
  Wind,
} from "lucide-react";

export default function LipedemaContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const keyCharacteristics = [
    "Disproportionate fat accumulation in the lower body",
    "Painful, tender tissue",
    "Easy bruising",
    "Swelling that does not improve with rest",
  ];

  const stages = [
    {
      label: "Stage 1",
      points: [
        "Skin surface appears smooth and normal",
        "Small nodules can be felt beneath the skin",
        "Fat is evenly distributed, but tenderness may already be present",
      ],
    },
    {
      label: "Stage 2",
      points: [
        "Skin becomes uneven with a lumpy or mattress-like texture",
        "Larger fat nodules form",
        "Swelling and discomfort become more noticeable",
      ],
    },
    {
      label: "Stage 3",
      points: [
        "Large, hardened fat masses develop",
        "Mobility may be affected",
        "Pain and swelling increase significantly",
      ],
    },
    {
      label: "Stage 4 (Lipo-Lymphedema)",
      points: [
        "Lipedema combines with lymphedema",
        "Severe swelling due to fluid buildup",
        "Requires prompt and specialized medical care",
      ],
    },
  ];

  const symptoms = [
    {
      title: "Symmetrical Swelling",
      desc: "All limbs are equally swollen, with normal-sized feet and hands being a main indicator, as this isn't typical for other swollen conditions.",
    },
    {
      title: "Heaviness That Worsens During the Day",
      desc: "People often do fine in the morning, but by the end of the day, their legs feel heavy, tight, and painful.",
    },
    {
      title: "Easy and Unexplained Bruising",
      desc: "Hyper-elastic tissue causes easy bruising and little trauma shows.",
    },
    {
      title: "Pain and Tenderness",
      desc: "Pressing on swelled areas can be excruciating and not just uncomfortable. Light pressure could cause pain.",
    },
    {
      title: "No Relief From Elevation",
      desc: "Elevated limbs do not show any significant reduction of swelling.",
    },
    {
      title: "Column-Like Leg Shape",
      desc: "Legs appear completely straight and round with an obvious cutoff of swelling at the ankles.",
    },
    {
      title: "Resistance to Diet and Exercise",
      desc: "If you notice these symptoms, consulting a specialist for Lipedema Treatment in Gurgaon can help with proper diagnosis and management.",
    },
  ];

  const causes = [
    {
      title: "Hormonal Influence",
      desc: "Lipedema commonly appears or worsens during times of hormonal change: Puberty, Pregnancy, and Menopause. This suggests hormones play a significant role, and many patients experiencing these changes often explore Lipedema Treatment in Gurgaon to manage their symptoms.",
    },
    {
      title: "Genetic Factors",
      desc: "A family history of similar symptoms greatly increases the risk. Many patients report that their mother or grandmother experienced the same issues, which indicates a strong genetic connection often discussed during consultations for Lipedema Treatment in Gurgaon.",
    },
    {
      title: "Lymphatic Dysfunction",
      desc: "The lymphatic system does not function properly, leading to fat and fluid accumulation. This dysfunction is not related to lifestyle choices, and specialized Lipedema Treatment in Gurgaon can help manage swelling and improve lymphatic flow.",
    },
  ];

  const complications = [
    {
      title: "Lymphedema",
      desc: "Fluid buildup may develop on top of lipedema, worsening swelling and discomfort.",
    },
    {
      title: "Decrease in Mobility",
      desc: "Difficult to walk, go upstairs, and do your day-to-day tasks with pain and great discomfort.",
    },
    {
      title: "Damage to Joints",
      desc: "Putting added strain on hips, knees, and ankles can result in long-term joint issues.",
    },
    {
      title: "Mental / Emotional Toll",
      desc: "Long-term pain causes body image issues and also loss of self-esteem, as well as anxiety and depression, especially after trying so many failed, repeated weight loss attempts.",
    },
    {
      title: "Skin Infections",
      desc: "Tight, swollen tissue can increase the chance of developing an infection; if not treated, it can lead to complications.",
    },
    {
      title: "Chronic Pain",
      desc: "Early Lipedema Treatment in Gurgaon can help reduce these complications and improve overall mobility and comfort.",
    },
  ];

  const treatments = [
    {
      icon: <Stethoscope size={20} className="text-[var(--med-primary)]" />,
      title: "MLD (Manual Lymphatic Drainage)",
      desc: "MLD is a form of therapeutic massage that improves the flow of lymph. Receiving this type of Lipedema treatment regularly can reduce swelling, reduce pain, and improve the health of your tissues.",
    },
    {
      icon: <Wind size={20} className="text-[var(--med-primary)]" />,
      title: "Compression Garments",
      desc: "Compression garments are custom-ordered to apply targeted pressure on the lymphatics and play a key role in Lipedema treatment by improving fluid movement and minimizing swelling. They support the lymphatic system, prevent accumulation of excess fluid, and provide a sustained effect of the therapy after treatment.",
    },
    {
      icon: <Activity size={20} className="text-[var(--med-primary)]" />,
      title: "CDT (Complete Decongestive Therapy)",
      desc: "CDT is a comprehensive approach used in Lipedema treatment that methodically implements MLD and compression therapy along with gentle exercises such as walking. These therapies are commonly included in specialized Lipedema Treatment in Gurgaon to help control symptoms and improve quality of life.",
    },
  ];

  const faqs = [
    {
      q: "What is the main cause of lipedema?",
      a: (
        <>
          The exact cause of lipedema is not fully known, but hormonal changes
          and genetic factors are considered the main contributors. Many people
          experiencing these symptoms consult specialists for{" "}
          <b>Lipedema Treatment in Gurgaon</b> for proper diagnosis and care.
        </>
      ),
    },
    {
      q: "How is lipedema treated?",
      a: (
        <>
          Lipedema is commonly managed with Lipedema treatment such as{" "}
          <b>Manual Lymphatic Drainage (MLD)</b>, compression therapy, and{" "}
          <b>Complete Decongestive Therapy (CDT)</b>. Many clinics offering
          Lipedema Treatment in Gurgaon use these methods to help reduce
          swelling and improve comfort.
        </>
      ),
    },
    {
      q: "How do you know if you have lipedema?",
      a: "Common signs include symmetrical swelling in the legs or arms, pain, easy bruising, and normal-sized hands and feet. If you notice these symptoms, consulting a specialist for Lipedema Treatment in Gurgaon can help confirm the diagnosis.",
    },
    {
      q: "Can lipedema go away with weight loss?",
      a: (
        <>
          No, <b>lipedema fat usually does not respond to diet or exercise</b>.
          Patients often seek Lipedema Treatment in Gurgaon to manage symptoms
          and control swelling.
        </>
      ),
    },
    {
      q: "Is lipedema painful?",
      a: "Yes, lipedema can cause pain, tenderness, and heaviness in the affected areas. With proper Lipedema Treatment in Gurgaon, these symptoms can often be managed effectively.",
    },
    {
      q: "How is lipedema different from obesity?",
      a: (
        <>
          Lipedema causes <b>symmetrical fat buildup</b> mainly in the legs and
          arms, while the hands and feet remain unaffected. Specialists
          providing Lipedema Treatment in Gurgaon can help differentiate
          lipedema from obesity and suggest the right Lipedema treatment
          approach.
        </>
      ),
    },
  ];

  return (
    <>
      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Lipedema Treatment in Gurgaon | Symptoms &amp; Treatment
      </h2>

      {/* INTRO */}
      <div className="space-y-4 mb-10">
        <p className="text-gray-700 leading-relaxed">
          If you've ever had that feeling, then you can relate to many other
          people suffering from lipedema. Many patients today seek Lipedema
          Treatment in Gurgaon to manage this condition and improve their
          quality of life. For them, the feeling of always having heavy, swollen
          legs persists regardless of their fitness regimen and diet choices.
          And the worst part about it is that even though they are doing
          everything correctly, their bodies appear to be working against them.
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
            for a proper evaluation and personalised care plan.
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* WHAT IS LIPEDEMA */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is Lipedema?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Lipedema is a long-lasting and progressively severe problem with fatty
          tissue that can become disproportionately accumulated in the legs,
          thighs, hips, and sometimes the arms (but most commonly in the legs
          and thighs). The fat associated with lipedema does not behave the same
          as fat found throughout the body. Consulting a specialist for Lipedema
          Treatment in Gurgaon can help in early diagnosis and management.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Overeating or insufficient exercise does not cause lipedema. The fat
          associated with lipedema is resistant to the usual methods of losing
          weight. Therefore, dieting and exercising will not have much, if any,
          effect on the fatty tissue that has developed as a result of lipedema.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium text-gray-800">
          Key characteristics include:
        </p>

        <ul className="space-y-3">
          {keyCharacteristics.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Lipedema primarily affects <strong>women</strong> and often has a{" "}
          <strong>genetic link</strong>, meaning it can run in families.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* STAGES */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Stages of Lipedema
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Understanding these Stages of Lipedema can also help patients seek the
          right Lipedema Treatment in Gurgaon at the appropriate time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5 space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-[var(--med-primary)] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="font-semibold text-[var(--med-primary)]">
                  {stage.label}
                </p>
              </div>
              <ul className="space-y-2">
                {stage.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">
          Early diagnosis can slow progression and prevent complications, and
          timely Lipedema Treatment in Gurgaon can help manage symptoms
          effectively.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What are the Symptoms of Lipedema?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Spotting early Symptoms of Lipedema gives you a better shot at keeping
          it under control. Here are some ways Lipedema Treatment in Gurgaon is
          different from regular weight gain:
        </p>

        <div className="space-y-4">
          {symptoms.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5"
            >
              <span className="flex-shrink-0 mt-0.5 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
              <div className="space-y-1">
                <p className="font-semibold text-[var(--med-primary)]">
                  {item.title}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* CAUSES */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What causes Lipedema?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          We don't have the complete answer yet, but researchers know enough to
          point at a few culprits. While the exact cause is still being
          researched, several factors are strongly linked. Understanding these
          causes can also help patients seek the right Lipedema Treatment in
          Gurgaon at an early stage.
        </p>

        <div className="space-y-4">
          {causes.map((cause, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-white border border-[var(--med-border)] flex items-center justify-center">
                <span className="text-[var(--med-primary)] font-bold text-sm">
                  {i + 1}
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[var(--med-primary)]">
                  {cause.title}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {cause.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* COMPLICATIONS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What are the Complications of Lipedema?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Without proper care, lipedema can lead to several complications.
          Seeking timely Lipedema Treatment in Gurgaon can help manage symptoms
          and reduce these risks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complications.map((item, i) => (
            <div
              key={i}
              className="border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-5 py-4 space-y-1"
            >
              <p className="font-semibold text-[var(--med-primary)] text-sm">
                {item.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Treatment of Lipedema
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Lipedema is not curable, but if Lipedema Treatment is done correctly,
          it will significantly improve both your symptoms and quality of life.
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
            about the right Lipedema Treatment in Gurgaon plan for you.
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
                    isOpen ? "max-h-52 pb-5" : "max-h-0"
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
