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
import TestimonialsServices from "@/app/components/TestimonialService";

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
      title: "Stage 1",
      content: (
        <>
          <p>The skin appears smooth and normal. Small nodules can be felt beneath the surface.</p>
          <p>Tenderness may already be present, often mistaken for general muscle soreness.</p>
        </>
      ),
    },
    {
      title: "Stage 2",
      content: (
        <>
          <p>The skin develops a lumpy or mattress-like texture. Larger fat nodules form.</p>
          <p>Swelling becomes more persistent, particularly toward the end of the day.</p>
        </>
      ),
    },
    {
      title: "Stage 3",
      content: (
        <>
          <p>Large, hardened fat masses develop in the legs and hips.</p>
          <p>
            Mobility becomes restricted and daily activities such as walking and climbing stairs
            become increasingly difficult.
          </p>
        </>
      ),
    },
    {
      title: "Stage 4 (Lipo-Lymphedema)",
      content: (
        <>
          <p>
            Lipedema combines with Lymphedema, resulting in severe fluid buildup and compounded swelling.
          </p>
          <p>
            This stage requires immediate and comprehensive specialist care.
          </p>
        </>
      ),
    },
  ];

  const symptoms = [
    {
      title: "Symmetrical Swelling",
      desc: "Both legs or arms are affected equally, while hands and feet remain completely normal in size",
    },
    {
      title: "Heaviness That Worsens During the Day",
      desc: "Legs feel increasingly tight, heavy, and painful as the day progresses",
    },
    {
      title: "Easy Bruising",
      desc: "Even minimal contact causes significant bruising due to fragile tissue",
    },
    {
      title: "Pain and Tenderness",
      desc: "Light pressure on affected areas can cause intense, disproportionate pain",
    },
    {
      title: "No Relief From Elevation",
      desc: "Swelling does not reduce when the limbs are elevated",
    },
    {
      title: "Column-Like Leg Shape",
      desc: "Legs appear uniformly wide with a sudden swelling cutoff at the ankles",
    },
    {
      title: "Resistance to Diet and Exercise",
      desc: "Fat deposits in affected areas simply do not reduce despite consistent healthy habits",
    },
  ]

  const causes = [
    {
      title: "Hormonal Influence",
      desc: " Lipedema commonly appears or worsens during puberty, pregnancy, and menopause, suggesting estrogen plays a central role in triggering abnormal fat deposition.",
    },
    {
      title: "Genetic Factors",
      desc: "Lipedema runs in families. If your mother or grandmother experienced similar symptoms, your risk is considerably higher and early screening is strongly recommended.",
    },
    {
      title: "Lymphatic Dysfunction",
      desc: "The lymphatic system in Lipedema patients does not function efficiently, leading to abnormal fat behavior and fluid accumulation. This is not caused by lifestyle choices and requires targeted clinical management.",
    },
  ];

  const complications = [
    {
      title: "Lipo-Lymphedema",
      desc: "Secondary lymphedema develops, compounding swelling and tissue damage",
    },
    {
      title: "Loss of Mobility",
      desc: "Walking, climbing stairs, and daily tasks become progressively harder",
    },
    {
      title: "Joint Damage",
      desc: "Excess weight on hips, knees, and ankles leads to chronic orthopedic strain",
    },
    {
      title: "Emotional Impact",
      desc: "Anxiety, depression, and loss of self-esteem are commonly reported, especially after years of misdiagnosis",
    },
    {
      title: "Skin Infections",
      desc: "Compromised tissue increases the risk of severe bacterial infections such as cellulitis",
    },
    {
      title: "Chronic Pain",
      desc: "Pain intensifies over time, affecting sleep and daily functioning",
    },
  ];

  const treatments = [
    {
      icon: <Stethoscope size={20} className="text-[var(--med-primary)]" />,
      title: "Manual Lymphatic Drainage (MLD)",
      desc: "A specialized, gentle massage technique that stimulates lymphatic flow.",
      points: [
        "Reduce visible swelling in legs and arms",
        "Relieve pain, tenderness, and heaviness",
        "Improve lymphatic circulation and tissue health",
      ],
    },
    {
      icon: <Wind size={20} className="text-[var(--med-primary)]" />,
      title: "Compression Garments",
      desc: "Custom-fitted, medically prescribed garments that apply graduated pressure to lymphatic vessels.",
      points: [
        "Support and stimulate the lymphatic system",
        "Prevent re-accumulation of fluid between sessions",
        "Sustain the benefits of MLD and CDT over the long term",
      ],
    },
    {
      icon: <Activity size={20} className="text-[var(--med-primary)]" />,
      title: "Complete Decongestive Therapy (CDT)",
      desc: "CDT is the gold-standard treatment protocol for Lipedema, recognized by the International Society of Lymphology.",
      points: [
        "Manual Lymphatic Drainage sessions",
        "Custom compression bandaging",
        "Low-impact guided exercise such as walking and water aerobics",
        "Skincare protocols to reduce infection risk",
        "Patient education on self-management between clinic visits",
      ],
    },
  ]

  const faqs = [
    {
      q: "What is the main cause of Lipedema?",
      a: (
        <>
          Hormonal changes during puberty, pregnancy, and menopause, combined with genetic predisposition and lymphatic dysfunction, are the primary contributing factors.
          <b> It is not caused by diet or lifestyle.</b>
        </>
      ),
    },
    {
      q: "How is Lipedema treated?",
      a: (
        <>
          Through a structured combination of <b>MLD</b>, <b>CDT</b>, and custom compression garment therapy, as recommended by the International Society of Lymphology.
          Dr. Himanshu Verma personalizes every treatment plan based on the patient's stage and clinical presentation.
        </>
      ),
    },
    {
      q: "How do I know if I have Lipedema?",
      a: (
        <>
          Key indicators include symmetrical leg or arm swelling with normal-sized hands and feet, persistent pain, easy bruising, and fat that does not respond to diet or exercise.
          <b> A clinical examination by Dr. Himanshu Verma is needed for a formal diagnosis.</b>
        </>
      ),
    },
    {
      q: "Can Lipedema go away with weight loss?",
      a: (
        <>
          No. Lipedema fat is physiologically different from ordinary body fat and does not respond to caloric restriction or exercise.
          <b> Specialized lymphatic care is required.</b>
        </>
      ),
    },
    {
      q: "Is Lipedema painful?",
      a: (
        <>
          Yes. Pain, tenderness, and heaviness in affected areas are hallmark symptoms.
          With proper treatment including <b>MLD</b> and <b>CDT</b>, these symptoms can be significantly reduced.
        </>
      ),
    },
    {
      q: "How is Lipedema different from obesity?",
      a: (
        <>
          Lipedema causes symmetrical fat buildup specifically in the legs and arms, leaves hands and feet unaffected, does not respond to weight loss, and is consistently painful.
          <b> Obesity does not share these characteristics.</b> A thorough clinical assessment by Dr. Himanshu Verma can clearly differentiate the two.
        </>
      ),
    },
  ];
  const lipedemaReviews = [
    {
      id: 12,
      name: "Ritu Malhotra",
      content:
        "I had been struggling with unexplained fat in my legs for years until I was diagnosed with lipedema. The treatment I received in Gurgaon was life-changing. The doctor explained everything clearly, and my pain has reduced significantly after the procedure.",
      rating: 5,
    },
    {
      id: 13,
      name: "Priya Arora",
      content:
        "After trying multiple weight loss methods without results, I finally found the right diagnosis. My lipedema treatment journey in Gurgaon was smooth, and the results are visible within weeks. Highly satisfied with the care and support.",
      rating: 5,
    },
    {
      id: 14,
      name: "Sneha Kapoor",
      content:
        "The best thing about getting lipedema treatment in Gurgaon was the advanced technology and experienced doctors. My mobility has improved, and I feel much more confident now.",
      rating: 5,
    },
    {
      id: 15,
      name: "Meenakshi Sharma",
      procedure: "Liposuction-based Lipedema Treatment",
      content:
        "I opted for liposuction-based lipedema treatment, and it was the best decision. The recovery was quick, and the results exceeded my expectations. The medical team was very professional.",
      rating: 5,
    },
    {
      id: 16,
      name: "Anjali Verma",
      content:
        "Very professional and supportive doctors. From consultation to post-treatment care, everything was handled perfectly. I would recommend Gurgaon for anyone dealing with lipedema.",
      rating: 5,
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
          Do your legs feel heavy, swollen, and painful despite eating right and exercising regularly? You may be experiencing Lipedema, a chronic medical condition that is frequently misdiagnosed across India.
        </p> <p className="text-gray-700 leading-relaxed">
          Dr. Himanshu Verma, MCh Vascular Surgeon and Director of Vascular and Endovascular Surgery at Fortis FMRI, Gurgaon, provides specialized Lipedema Treatment in Gurgaon with over 17 years of clinical experience in managing complex lymphatic and vascular disorders.

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
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          What is Lipedema?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Lipedema is a chronic, progressive condition characterized by disproportionate accumulation of fatty tissue, most commonly in the legs, thighs, hips, and occasionally the arms.

        </p>
        <p className="text-gray-700 leading-relaxed">
          Unlike ordinary body fat, Lipedema fat does not respond to diet or exercise. It is a physiological condition with hormonal, genetic, and lymphatic roots, not a result of lifestyle choices.

        </p>
        <p className="text-gray-700 leading-relaxed">
          Patients seeking Lipedema Treatment in Gurgaon often arrive after years of being incorrectly told their condition is caused by poor lifestyle habits.

        </p>
        <img
          src="/services/lipedema/Lipedema-1.png"
          alt="Lipedema Diagram"
          className="w-full rounded-lg border border-gray-200"
        />



        <p className="text-gray-700 leading-relaxed font-medium text-gray-800">
          Key characteristics include:
        </p>

        <ul className="space-y-3">
          {[
            "Disproportionate fat accumulation in the lower body",
            "Painful and tender tissue even under light pressure",
            "Easy and unexplained bruising",
            "Persistent swelling that does not improve with rest",
            "Primarily affects women and often runs in families",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* STAGES */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Stages of Lipedema
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Understanding these Stages of Lipedema can also help patients seek the
          right Lipedema Treatment in Gurgaon at the appropriate time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5 space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-[var(--med-primary)] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-[var(--med-primary)]">
                  {stage?.title}
                </h3>
              </div>
              {/* <ul className="space-y-2">
                {stage?.points?.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul> */}
              <div className="space-y-2">
                {stage?.content}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">
          Early diagnosis and timely treatment under Dr. Himanshu Verma can slow progression and prevent complications significantly.

        </p>
      </div>

      <div className="h-px bg-gray-100 mb-5" />
      <img
        src="/services/lipedema/Lipedema-2.png"
        alt="Lipedema Diagram"
        className="w-full rounded-lg border border-gray-200 mb-5"
      />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          What are the Symptoms of Lipedema?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Recognizing Lipedema early gives you the best chance of managing it before it progresses. These symptoms set it apart from general weight gain:
        </p>

        <div className="space-y-4">
          {symptoms.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-6 py-5"
            >
              <span className="flex-shrink-0 mt-2 h-2 w-2 rounded-full bg-[var(--med-primary)]" />
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
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          What Causes Lipedema?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The exact cause is still being researched, but three primary factors are strongly linked:
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
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Complications of Untreated Lipedema
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Without timely care, Lipedema can lead to serious complications:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complications.map((item, i) => (
            <div
              key={i}
              className="border border-[var(--med-border)] rounded-2xl bg-[var(--med-light)] px-5 py-4 space-y-1"
            >
              <h3 className="font-semibold text-[var(--med-primary)] text-sm">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Schedule an Appointment"
        />
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Treatment of Lipedema
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Lipedema has no permanent cure, but the right treatment delivered consistently under expert supervision can dramatically improve symptoms and quality of life.
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
                <ul className="space-y-1 mt-2">
                  {t?.points?.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}

      </div>
      <div className="mb-14">
        <TestimonialsServices testimonials={lipedemaReviews} title="Words of our patients" />
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
                    className={`text-[var(--med-primary)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-52 pb-5" : "max-h-0"
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

      <div className="mt-6 space-y-3">
        <p className="text-gray-700 leading-relaxed">
          Living with Lipedema is physically and emotionally draining, but meaningful improvement is achievable with the right specialist and the right plan.

        </p>
        <p className="text-gray-700 leading-relaxed">

          Dr. Himanshu Verma, MCh, Vascular Surgeon and Director of Vascular and Endovascular Surgery at Fortis FMRI, Gurgaon, is available for in-person consultations to assess your condition and design a personalized treatment plan.
        </p>   <p className="text-gray-700 leading-relaxed">

          Contact Dr. Himanshu Verma for Lipedema Treatment in Gurgaon at Fortis FMRI, Gurgaon.
        </p>
      </div>
      <div className="mt-6">
        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 items-center justify-between gap-4">
          <p className="text-sm text-white/90">
            <strong>Disclaimer:</strong> The information provided on this page is intended for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Individual medical conditions vary, and results differ from patient to patient. Please consult Dr. Himanshu Verma or a qualified medical professional before making any decisions regarding your health or treatment. In case of a medical emergency, please contact your nearest hospital immediately.
          </p>
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
