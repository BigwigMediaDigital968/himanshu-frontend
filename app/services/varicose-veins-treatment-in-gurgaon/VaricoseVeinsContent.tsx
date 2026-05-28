"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import glueTerat from "@/app/assets/service/varicose/glue-treatment.jpeg";
import symptomsImage from "@/app/assets/service/varicose/symptoms.jpg";
import laserTerat from "@/app/assets/service/varicose/laser-trestment.jpeg";
import TestimonialsServices from "@/app/components/TestimonialService";
import { VericoseGurgaon } from "@/app/data/testimonialData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ImageSource = string | StaticImageData;

interface CarouselItem {
  id: number;
  src: ImageSource;
  alt: string;
}

const carouselImages: CarouselItem[] = [
  {
    id: 1,
    src: glueTerat,
    alt: "varicose veins treatment in Gurgaon",
  },
  {
    id: 3,
    src: laserTerat,
    alt: "varicose veins treatment in Gurgaon",
  },
];

export default function VaricoseVeinsContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is varicose vein treatment covered by insurance?",
      a: (
        <p>
          Most minimally invasive procedures for symptomatic varicose veins —
          including EVLT and RFA — are covered under major health insurance plans
          in India, including Mediclaim policies. Our team will help you verify
          coverage before your procedure.
        </p>
      ),
    },
    {
      q: "How much does varicose veins treatment cost in Gurgaon?",
      a: (
        <p>
          Treatment costs vary depending on the procedure, number of veins
          treated, and insurance coverage. During your consultation, Dr.
          Himanshu will provide a transparent, detailed cost estimate with no
          hidden charges. Contact us for a preliminary cost discussion.
        </p>
      ),
    },
    {
      q: "What should I expect on my first visit?",
      a: (
        <p>
          Your first visit includes a clinical examination, medical history
          review, and a Venous Doppler Ultrasound. The entire assessment takes
          approximately 60–90 minutes. You will leave with a clear diagnosis and
          personalized treatment plan.
        </p>
      ),
    },
    {
      q: "How long does the procedure take?",
      a: (
        <p>
          Most procedures are completed in 30–60 minutes under local anaesthesia,
          with same-day discharge. You will typically be able to walk out of the
          clinic unassisted.
        </p>
      ),
    },
    {
      q: "Will the veins come back after treatment?",
      a: (
        <p>
          Treated veins are permanently sealed and do not return. However, new
          varicose veins can develop over time, particularly if underlying risk
          factors such as obesity or prolonged standing are not addressed.
          Lifestyle changes significantly reduce recurrence.
        </p>
      ),
    },
    {
      q: "Is treatment painful?",
      a: (
        <p>
          Modern minimally invasive techniques involve very little discomfort.
          Most patients report only a mild sensation during the procedure and
          minimal soreness for 1–2 days afterward.
        </p>
      ),
    },
    {
      q: "What are the main causes of varicose veins?",
      a: (
        <p>
          Weak vein valves, genetics, prolonged standing, aging, pregnancy, and
          excess weight are the most common causes.
        </p>
      ),
    },
    {
      q: "Are varicose veins dangerous if left untreated?",
      a: (
        <p>
          Yes. Untreated varicose veins can progress to chronic venous
          insufficiency, venous ulcers, skin changes, and deep vein thrombosis
          (DVT) — a potentially serious clotting condition.
        </p>
      ),
    },
    {
      q: "When should I see a doctor?",
      a: (
        <p>
          Seek evaluation if you notice persistent swelling, skin discolouration,
          aching that worsens through the day, or any visible veins causing
          discomfort. Early intervention always leads to better outcomes.
        </p>
      ),
    },
  ];

  const symptoms = [
    "Twisted, bulging blue veins in the legs",
    "Visible spider veins on thighs and/or calves",
    "Heaviness or ache in the legs, especially after standing for long periods or sitting with knees bent",
    "Swelling of the lower legs, ankles, and feet",
    "Itching or irritation around the affected veins",
    "Muscle cramps or restless legs, especially at night",
  ];

  const causes = [
    "Valve weakness or damaged veins causing blood pooling",
    "Aging – wall deterioration in elderly veins is natural",
    "Genetics – those with relatives afflicted by varicose veins have the condition more often",
    "Remaining upright or sitting for long periods of time, which strains leg veins",
    "Pregnancy – due to increased blood volume and hormonal changes",
    "Obesity – which puts excessive pressure on the veins",
  ];

  const complications = [
    "Ulcers on the skin near the ankle due to long-term pooling of fluid",
    "Superficial or deep venous thrombosis (blood clots) that may be life-threatening",
    "Chronic venous insufficiency, where blood flow is compromised, causing swelling and skin changes",
    "Hemorrhage from veins located near the surface of the skin",
  ];

  const treatments = [
    {
      name: "EVLT (Endovenous Laser Treatment)",
      badge: "Most Effective",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: "One of the most effective procedures used in modern varicose veins treatment. A laser fibre is inserted into the damaged vein under local anaesthesia, delivering heat that causes the vein to collapse and seal. The procedure takes 30–45 minutes, and most patients return to normal activity within 1–2 days. Best suited for larger veins such as the great saphenous vein.",
    },
    {
      name: "RFA (Radiofrequency Ablation)",
      badge: "No Compression",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: "Radiofrequency energy is delivered through a thin catheter to heat and seal the affected vein. The procedure is well-tolerated, with same-day discharge and a recovery period similar to EVLT. Compression stockings are recommended for 1–2 weeks post-treatment.",
    },
    {
      name: "Medical Glue (Cyanoacrylate Closure)",
      badge: "Minimally Invasive",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "A modern technique used in varicose veins treatment. Medical-grade glue is injected to seal the vein shut, with no tumescent anaesthesia and no compression stockings required. Patients typically return to normal activity the same day, making this one of the most convenient options available.",
    },
    {
      name: "Foam Sclerotherapy",
      badge: "Superficial Veins",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "A foam solution is injected into smaller varicose or reticular veins, irritating the vein wall and causing it to shrink and be absorbed by the body. No anaesthesia is needed, and results become visible over 4–8 weeks. Multiple sessions may be required for extensive veins.",
    },
    {
      name: "Microphlebectomy (Stab Phlebectomy)",
      badge: "Advanced",
      badgeClass: "bg-emerald-100 text-emerald-700",
      desc: "Bulging surface veins are removed through tiny 1–2 mm punctures using a fine hook; no stitches are required. Often combined with EVLT or RFA in a single session for complete treatment. Most patients resume daily activities within 2–3 days.",
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

  const diagnosisSteps = [
    {
      name: "01. Clinical Examination",
      badge: "In-Person",
      badgeClass: "bg-blue-100 text-blue-700",
      desc: "You'll be assessed while standing, so your veins are more visible. Your doctor checks for swelling, skin changes, tenderness, and slow-healing sores.",
    },
    {
      name: "02. Medical History Review",
      badge: "Consultation",
      badgeClass: "bg-purple-100 text-purple-700",
      desc: "We'll discuss your symptoms, aching, cramping, burning, or heaviness, to build a complete picture of your vascular health.",
    },
    {
      name: "03. Venous Doppler Ultrasound",
      badge: "Gold Standard",
      badgeClass: "bg-amber-100 text-amber-700",
      desc: "Sound waves map blood flow in your veins, revealing valve failures, reflux, and hidden clots beneath the skin's surface.",
    },
  ];

  return (
    <div className="font-sans">
      {/* ── HERO ── */}
      <div className="relative rounded-2xl overflow-hidden bg-(--med-primary) px-6 py-10 md:px-12 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Vascular Specialist · Gurgaon
        </p>
        <h2 className="text-3xl font-bold text-white leading-tight mb-4">
          Varicose Veins Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-2">
          by Dr. Himanshu Verma
        </p>
        <p className="text-white/70 text-sm mb-8">
          Are swollen, painful leg veins affecting your daily life? Get expert diagnosis and advanced treatment from Dr. Himanshu Verma - Vascular & Endovascular Surgeon with 17+ years of experience and 5,000+ successful procedures at Fortis Memorial Research Institute, Gurgaon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a className="px-6 py-3 bg-white text-teal-900 font-semibold rounded-lg shadow-md hover:bg-teal-50 transition-colors duration-200 text-center text-sm md:text-base hover:scale-105 tarnsition-all ease-in-out duration-300" href="tel:+919999999999">
            <PhoneCall className="w-4 h-4 inline-block mr-2" />
            Book Your Consultation Today
          </a>
          <a href="https://wa.me/918826833598"
            target="_blank"
            rel="noopener noreferrer" className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors duration-200 text-center text-sm md:text-base flex items-center justify-center gap-2 ">
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp Us Now
          </a>
        </div>

        {/* CTA Section Replaced Here */}
        <div className="mt-10 pt-8 border-t border-white/20">
          {/* Buttons Container */}


          {/* Trust Badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/90 text-xs md:text-sm font-medium">
            <span>✅ No long waiting lists</span>
            <span>✅ Same-day ultrasound available</span>
            <span>✅ Covered under most insurance plans</span>
          </div>
        </div>
      </div>

      <div className=" max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm divide-x divide-y divide-slate-200 md:divide-y-0">

          {/* Column 1: Hospital */}
          <div className="p-5 flex flex-col items-start justify-center min-h-[120px] col-span-2 md:col-span-1">
            <span className="text-2xl mb-2" role="img" aria-label="hospital">🏥</span>
            <p className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
              Fortis Hospital Gurgaon
            </p>
          </div>

          {/* Column 2: Experience */}
          <div className="p-5 flex flex-col items-start justify-center min-h-[120px]">
            <span className="text-2xl mb-2" role="img" aria-label="caduceus">⚕️</span>
            <p className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
              17+ Years Experience
            </p>
          </div>

          {/* Column 3: Procedures */}
          <div className="p-5 flex flex-col items-start justify-center min-h-[120px]">
            <span className="text-2xl mb-2" role="img" aria-label="stethoscope"> 🩺</span>
            <p className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
              5,000+ Procedures Done
            </p>
          </div>

          {/* Column 4: Reviews */}
          <div className="p-5 flex flex-col items-start justify-center min-h-[120px]">
            <span className="text-2xl mb-2" role="img" aria-label="star">⭐</span>
            <p className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
              4.9★ Google <span className="text-xs md:text-sm font-normal text-slate-500 block md:inline">(300+ Reviews)</span>
            </p>
          </div>

          {/* Column 5: Publications */}
          <div className="p-5 flex flex-col items-start justify-center min-h-[120px]">
            <span className="text-2xl mb-2" role="img" aria-label="document">📄</span>
            <p className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
              29+ Research Publications
            </p>
          </div>

        </div>
      </div>

      {/* ── INTRO ── */}
      <div className=" gap-8 mb-14 items-start">
        <div className="col-span-3 space-y-4 text-gray-700 leading-relaxed">
          {/* Small Section Header */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--med-primary)] mb-1">
              What are Varicose Veins
            </h2>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              Understanding the Condition
            </h4>
          </div>

          <p className="text-sm md:text-base">
            Varicose veins are enlarged, twisted veins that appear when the valves inside your leg veins stop working properly. Instead of pushing blood upward toward the heart, weakened valves allow blood to pool - causing the veins to swell, twist, and become visible under the skin.
          </p>

          <p className="text-sm md:text-base">
            They are more common than most people realize. In India, varicose veins affect approximately <strong className="font-semibold text-slate-900">15–20% of the adult population</strong>, with higher rates among those who spend long hours on their feet or have a family history of venous disease.
          </p>

          <p className="text-sm md:text-base">
            The good news: with today's advanced minimally invasive treatments, most patients experience complete relief - often <strong className="font-semibold text-slate-900">returning to normal activity within 24–48 hours</strong>.
          </p>

          {/* Causes Sub-Section */}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <p className="font-semibold text-slate-900 text-sm md:text-base mb-3">
              Common Causes:
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "Faulty or weakened vein valves",
                "Genetics and family history",
                "Prolonged standing or sitting (IT professionals, teachers, retail workers)",
                "Pregnancy and hormonal changes",
                "Obesity and sedentary lifestyle",
                "Aging - natural deterioration of vein walls"
              ].map((cause, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="text-[var(--med-primary)] text-xs mt-1.5 flex-shrink-0">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA card */}
        <div className="w-full bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 mt-10 space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-widest text-[var(--med-primary)]">
            When to Consult
          </h2>
          <h3>Do Your Legs Feel Like This?</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you are experiencing any of the following, it is time to get evaluated:
          </p>

          {/* Symptoms List mapping with respective icons */}
          <div className="space-y-3">
            {[
              { emoji: "🔵", text: "Twisted or bulging blue/purple veins visible under the skin" },
              { emoji: "🦵", text: "Persistent heaviness, aching, or fatigue in the legs" },
              { emoji: "🌡️", text: "Burning, itching, or irritation around the veins" },
              { emoji: "🦶", text: "Swelling in the ankles and feet by end of day" },
              { emoji: "🌙", text: "Nighttime cramps or restless legs" },
              { emoji: "🩹", text: "Slow-healing sores or skin discolouration near the ankles" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-base flex-shrink-0 w-5 text-center leading-none select-none">
                  {item.emoji}
                </span>
                <span className="text-gray-700 text-sm leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed pt-2 border-t border-[var(--med-border)]/60">
            These are not just cosmetic concerns. Left untreated, varicose veins can lead to blood clots (DVT), venous ulcers, and chronic venous insufficiency - conditions that are far harder and costlier to treat.
          </p>

          <div className="flex mt-2 pt-1">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="👉 Check Your Symptoms - Book a Free Evaluation"
            />
          </div>
        </div>
      </div>

      {/* ── SYMPTOMS & CAUSES ── */}
      <div className="mb-14">
        <div className="mb-8">
          {/**<h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Symptoms & Causes
          </h2> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Symptoms and Causes
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Understanding the causes and{" "}
            <a
              className="text-(--med-primary)"
              href="https://www.drhimanshuverma.com/blogs/symptoms-of-varicose-veins-you-should-not-ignore"
            >
              symptoms of varicose veins
            </a>{" "}
            is invaluable in their early detection and effective management.
            People seeking varicose veins treatment in Gurgaon should understand
            the warning signs to ensure timely medical attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-gray-800">
                What Are the Symptoms of Varicose Veins?
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Varicose veins can present themselves in various ways. Common
              symptoms include:
            </p>
            <ul className="space-y-2">
              {symptoms.map((s) => (
                <BulletItem key={s} text={s} color="bg-orange-400" />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Symptoms can vary from person to person and may gradually get
              worse if ignored. However, getting checked early can help avoid
              further complications. If you often feel heaviness, pain, or
              tiredness in your legs, consult Dr Himanshu for a proper diagnosis
              and the right treatment based on your condition.
            </p>
          </div>

          {/* Causes */}
          <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[var(--med-primary)]" />
              <h3 className="text-base font-bold text-gray-800">
                What Causes Varicose Veins?
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Reasons for the development of varicose veins include:
            </p>
            <ul className="space-y-2">
              {causes.map((c) => (
                <BulletItem key={c} text={c} />
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Early treatment and lifestyle changes can help reduce the risk of
              complications. If you notice early symptoms, consulting a
              specialist at the right time can help protect your long-term vein
              health.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            If you experience heavy or aching legs, consult Dr. Himanshu for
            proper evaluation and <b>varicose veins treatment in Gurgaon</b>{" "}
            tailored to your specific condition.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src={symptomsImage}
            alt="varicose veins treatment in Gurgaon"
          />
        </div>
      </div>

      {/* ── COMPLICATIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Why Early Treatment Matters
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are the Serious Complications of Varicose Veins?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            While many people experience mild symptoms, untreated varicose veins
            can sometimes lead to serious complications. That’s why getting
            timely treatment from a specialist in Gurgaon is important if the
            symptoms persist.
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Possible complications include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {complications.map((c, i) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{c}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm flex-1">
            Early referral and intervention can help prevent these
            complications. Dr Himanshu offers comprehensive treatment for
            patients dealing with chronic venous disorders and lymphatic issues.
            Book an appointment today to ensure long-term leg health.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book an Appointment"
          />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-12 md:py-16">
        {/* Section Headings */}
        <div className=" mb-10 md:mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            HOW IT WORKS - 3 SIMPLE STEPS
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900">
            Your Journey to Pain-Free Legs
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 md:mb-12">


          {[
            {
              number: "01",
              step: "Step 1",
              title: "Consult",
              duration: "⏱️ 30 Minutes",
              description: (
                <>
                  Meet Dr. Himanshu Verma for a thorough clinical examination.
                  Discuss your symptoms, medical history, and lifestyle.{" "}
                  <span className="font-medium text-slate-800">
                    No referral needed.
                  </span>
                </>
              ),
            },
            {
              number: "02",
              step: "Step 2",
              title: "Diagnose",
              duration: "⏱️ 20 Minutes",
              description: (
                <>
                  A painless{" "}
                  <span className="font-medium text-slate-800">
                    Venous Doppler Ultrasound
                  </span>{" "}
                  maps your vein health - identifying exactly where valves are
                  failing, measuring reflux severity, and ruling out DVT.{" "}
                  <span className="font-medium text-slate-800">
                    Results available same day.
                  </span>
                </>
              ),
            },
            {
              number: "03",
              step: "Step 3",
              title: "Treat & Recover",
              duration: "⏱️ 45–60 Minutes",
              description: (
                <>
                  Receive your personalized minimally invasive treatment. Most
                  procedures are completed in under an hour with local anaesthesia.{" "}
                  <span className="font-medium text-slate-800">
                    Same-day discharge. Back to work in 1–2 days.
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="absolute top-4 right-6 text-4xl font-black text-slate-100 select-none">
                {item.number}
              </div>

              <div className="inline-flex items-center justify-center w-16 h-10 rounded-xl bg-[var(--med-light)] text-[var(--med-primary)] font-bold text-sm mb-4">
                {item.step}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {item.title}
              </h3>

              <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded mb-4">
                {item.duration}
              </span>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Centralized Action Button */}
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="📅 Book Your 3-Step Assessment - Slots Available This Week"
          />
        </div>
      </div>

      {/* ── DIAGNOSIS PROCESS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Precise Evaluation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How are Varicose Veins Diagnosed?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Getting an accurate{" "}
            <a
              className="text-(--med-primary)"
              href="https://www.drhimanshuverma.com/blogs/how-are-varicose-veins-diagnosed-tests-and-procedures-explained"
            >
              varicose veins diagnosis
            </a>{" "}
            is the first step toward relief. Our evaluation is non-invasive,
            painless, and typically completed within 30–45 minutes, with no
            needles, no radiation, and no recovery time needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {diagnosisSteps.map((step) => (
            <div
              key={step.name}
              className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-gray-800 text-sm leading-snug">
                  {step.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${step.badgeClass}`}
                >
                  {step.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 text-gray-700">
          {/* Section Headings */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
              DIAGNOSIS
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              The Gold Standard: Venous Doppler Ultrasound
            </h3>
          </div>

          {/* Description Narrative */}
          <p className="text-base md:text-lg leading-relaxed mb-8 font-normal">
            This painless, 20-minute scan is the most reliable tool for assessing varicose vein severity. It identifies exactly where valves are failing, measures the degree of blood reflux, and rules out deep vein thrombosis (DVT) — giving Dr. Himanshu everything needed to design your personalized treatment plan.
          </p>

          {/* Interactive What the scan reveals Box Layout */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-4 uppercase tracking-wider text-slate-800">
              What the scan reveals:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Location and extent of valve failure",
                "Severity of venous reflux",
                "Presence of hidden clots (DVT)",
                "Suitability for each treatment option"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800 text-sm md:text-base leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            This comprehensive scan identifies exactly where valves are failing
            and measures the severity of reflux, giving your specialist
            everything needed to create a personalized treatment plan.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Book Your Ultrasound
          </button>
        </div>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)] bg-white shadow-sm">
        {/* Header Block Banner */}
        <div className="bg-[var(--med-primary)] p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-5 h-5 text-white/80" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
              WHY CHOOSE DR. HIMANSHU VERMA
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Gurgaon's Most Trusted Vascular Surgeon
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl">
            When it comes to varicose veins treatment in Gurgaon, the right specialist makes all the difference. Dr. Himanshu Verma combines board-certified surgical expertise with a deeply patient-centred approach - ensuring you receive the most effective, least disruptive treatment for your specific condition.
          </p>
        </div>

        {/* Single Column Content Block */}
        <div className="p-6 md:p-8 space-y-8">

          {/* 1. Qualifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--med-primary)] mb-3">
              Qualifications
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-900">MBBS, MS, MCh (Vascular Surgery)</strong> - Board-Certified Vascular & Endovascular Surgeon</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Fellow, European Venous & Lymphatic Society (FEVS)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Member, Vascular Society of India</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Trained and practising at <strong className="font-semibold text-slate-900">Fortis Memorial Research Institute, Sector 44, Gurgaon</strong> - NABH & JCI Accredited</span>
              </li>
            </ul>
          </div>

          {/* 2. Clinical Expertise */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--med-primary)] mb-3">
              Clinical Expertise
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-900">17+ years</strong> of dedicated vascular surgery experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-900">5,000+</strong> minimally invasive vein procedures performed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Specialist in <strong className="font-medium text-slate-900">EVLT, RFA, Medical Glue Closure, Foam Sclerotherapy, and Microphlebectomy</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Expert in complex chronic venous and lymphatic disorders</span>
              </li>
            </ul>
          </div>

          {/* 3. Research & Academic Recognition */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--med-primary)] mb-3">
              Research & Academic Recognition
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-900">29+ peer-reviewed publications</strong> in indexed medical journals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>9 authored book chapters on vascular surgery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>International speaker at the <strong className="font-medium text-slate-900">VEITH Symposium, New York</strong> - the world's leading vascular surgery platform</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-1 flex-shrink-0" />
                <span>Research findings referenced in clinical practice standards across India</span>
              </li>
            </ul>
          </div>

          {/* Action & Citations Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-md">
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Schedule an Appointment"
              />
            </div>
            <p className="text-[11px] text-gray-400 font-normal max-w-sm italic leading-tight">
              Sources referenced: Mayo Clinic, NHS, Cleveland Clinic, PubMed (NCBI), Cochrane Library, Journal of Vascular Surgery
            </p>
          </div>

        </div>
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <TreatmentOptionsSection />
      </div>

      <div className="max-w-5xl mx-auto px-4 ">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Treatment Comparison at a Glance
          </h2>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full border border-slate-200 rounded-xl bg-white shadow-sm mb-8 overflow-hidden">
          {/* Desktop & Tablet Table View (Hidden on Mobile) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold text-xs md:text-sm uppercase tracking-wider">
                  <th className="p-4 font-bold">Procedure</th>
                  <th className="p-4 font-bold">Anaesthesia</th>
                  <th className="p-4 font-bold">Recovery</th>
                  <th className="p-4 font-bold">Compression</th>
                  <th className="p-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {[
                  { name: "EVLT", anaesthesia: "Local", recovery: "1–2 days", compression: "Yes", best: "Large veins" },
                  { name: "RFA", anaesthesia: "Local", recovery: "1–2 days", compression: "Yes", best: "Large/medium veins" },
                  { name: "Medical Glue", anaesthesia: "None", recovery: "Same day", compression: "No", best: "All sizes" },
                  { name: "Foam Sclerotherapy", anaesthesia: "None", recovery: "Same day", compression: "Optional", best: "Small/spider veins" },
                  { name: "Microphlebectomy", anaesthesia: "Local", recovery: "2–3 days", compression: "Yes", best: "Surface bulges" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-semibold text-slate-900">{row.name}</td>
                    <td className="p-4">{row.anaesthesia}</td>
                    <td className="p-4">{row.recovery}</td>
                    <td className="p-4">{row.compression}</td>
                    <td className="p-4">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View (Visible only on Mobile) */}
          <div className="block md:hidden divide-y divide-slate-200">
            {[
              { name: "EVLT", anaesthesia: "Local", recovery: "1–2 days", compression: "Yes", best: "Large veins" },
              { name: "RFA", anaesthesia: "Local", recovery: "1–2 days", compression: "Yes", best: "Large/medium veins" },
              { name: "Medical Glue", anaesthesia: "None", recovery: "Same day", compression: "No", best: "All sizes" },
              { name: "Foam Sclerotherapy", anaesthesia: "None", recovery: "Same day", compression: "Optional", best: "Small/spider veins" },
              { name: "Microphlebectomy", anaesthesia: "Local", recovery: "2–3 days", compression: "Yes", best: "Surface bulges" }
            ].map((row, index) => (
              <div key={index} className="p-5 bg-white space-y-3">
                {/* Procedure Title Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Procedure</span>
                  <span className="text-sm font-bold text-[var(--med-primary)] bg-[var(--med-light)] px-2.5 py-1 rounded-md">
                    {row.name}
                  </span>
                </div>

                {/* Data Grid Rows */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="block font-medium text-slate-400 mb-0.5">Anaesthesia</span>
                    <span className="text-sm font-medium text-slate-800">{row.anaesthesia}</span>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-400 mb-0.5">Recovery</span>
                    <span className="text-sm font-medium text-slate-800">{row.recovery}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="block font-medium text-slate-400 mb-0.5">Compression</span>
                    <span className="text-sm font-medium text-slate-800">{row.compression}</span>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-400 mb-0.5">Best For</span>
                    <span className="text-sm font-medium text-slate-800">{row.best}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requested CTA Banner Design Block */}
        <div className="rounded-2xl px-6 py-5 flex flex items-center justify-between gap-4">
          <p className="text-lg font-medium text-[var(--med-primary)] max-w-xl text-center sm:text-left">
            Not Sure Which Treatment Is Right for You?
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Consult Dr. Himanshu"
          />
        </div>
      </div>

      <div className="mb-14">
        <div>
          <Carousel />
        </div>

        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            Early diagnosis and the right treatment can help prevent serious
            complications such as ulcers, blood clots, and chronic venous
            insufficiency. If your legs feel heavy, swollen, or painful, consult
            Dr Himanshu to find the most suitable treatment for your condition.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Consult Dr. Himanshu
          </button>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="">
        <TestimonialsServices testimonials={VericoseGurgaon} />
      </div> */}
      <div className="max-w-5xl mx-auto px-4 py-6 relative z-10">
        <div className="bg-white border border-[var(--med-border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">

          {/* Left Side: Google Star Rating */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Visual Badge Group */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xs">
              <span className="text-xl font-bold text-slate-950 tracking-tight">4.9</span>
              <div className="flex text-amber-400 text-sm tracking-tighter select-none">
                ★★★★★
              </div>
            </div>

            {/* Rating Context */}
            <div>
              <p className="font-bold text-slate-900 text-base md:text-lg flex items-center gap-2">
                <span>📊 Verified Google Rating</span>
              </p>
              <p className="text-xs md:text-sm text-slate-500 font-normal">
                Based on 300+ successful patient experiences in Gurgaon
              </p>
            </div>
          </div>

          {/* Vertical Divider line for Desktops */}
          <div className="hidden md:block w-px h-12 bg-slate-200" />

          {/* Right Side: Key Clinical Outcome Statement */}
          <div className="max-w-md">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
              "Most patients report <strong className="text-emerald-700 font-semibold">significant improvement within the first week</strong> of treatment."
            </p>
          </div>

        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
        {/* Section Headings */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            PREVENTION TIPS
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900">
            Protecting Your Vein Health Daily
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl text-sm md:text-base">
            Whether you are recovering from treatment or looking to reduce your risk, these evidence-backed habits support long-term vein health:
          </p>
        </div>

        {/* Prevention Tips Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Walk daily",
              description:
                "Even 20–30 minutes significantly improves venous circulation.",
              highlighted: true,
            },
            {
              title: "Elevate your legs",
              description:
                "15 minutes daily with legs above heart level reduces pressure.",
            },
            {
              title: "Wear compression stockings",
              description:
                "Especially during long travel, standing shifts, or pregnancy.",
            },
            {
              title: "Maintain a healthy weight",
              description:
                "Reduces chronic strain on the venous system",
            },
            {
              title: "Avoid prolonged sitting or standing",
              description:
                "Take a short walk every 30–45 minutes",
            },
            {
              title: "Stay hydrated",
              description:
                "Supports healthy blood viscosity and circulation.",
            },
          ].map((tip, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 shadow-xs flex items-start gap-4 ${tip.highlighted
                ? "border border-teal-100 bg-teal-50/40 col-span-1 md:col-span-2 lg:col-span-1"
                : "border border-[var(--med-border)] bg-white"
                }`}
            >
              <div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                  {tip.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">FAQs</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen
                  ? "border-[var(--med-primary)] bg-[var(--med-light)]"
                  : "border-[var(--med-border)] bg-white"
                  }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left gap-4"
                >
                  <span
                    className={`font-semibold text-sm md:text-base pr-2 ${isOpen ? "text-[var(--med-primary)]" : "text-gray-800"
                      }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 transition-transform duration-300 ${isOpen
                      ? "rotate-180 text-[var(--med-primary)]"
                      : "text-gray-400"
                      }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-5" : "max-h-0"
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

      <div className="relative rounded-2xl overflow-hidden bg-(--med-primary) px-6 py-10 md:px-12 md:py-14 shadow-md">
        {/* Subtitle Accent */}
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          CONTACT & LOCATION
        </p>

        {/* Main Section Header */}
        <h2 className="text-3xl font-bold text-white leading-tight mb-2">
          Book Your Consultation Today
        </h2>

        {/* Doctor Name & Field Branding */}
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-4 font-medium">
          Dr. Himanshu Verma — Vascular & Endovascular Surgeon
        </p>

        {/* Hospital Complete Physical Address */}
        <p className="text-white/70 text-sm mb-8 max-w-2xl leading-relaxed">
          Fortis Memorial Research Institute <br />
          Sector 44, Opposite HUDA City Centre Metro Station <br />
          Gurgaon, Haryana — 122002
        </p>

        {/* Main 3-Way Booking Actions Layout */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
          {/* 1. Online Appointment Booking */}
          <button
            onClick={() => setOpenPopup(true)}
            className="px-6 py-3 bg-white text-teal-900 font-bold rounded-lg shadow-md hover:bg-teal-50 transition-all duration-300 text-center text-sm md:text-base hover:scale-105 ease-in-out cursor-pointer"
          >
            📅 Book Appointment Online
          </button>

          {/* 2. Direct Telecom Call Link */}
          <a
            href="tel:+918826833598"
            className="px-6 py-3 bg-teal-800 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 text-center text-sm md:text-base hover:scale-105 ease-in-out flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </a>

          {/* 3. Direct Message Whatsapp API Link */}
          <a
            href="https://wa.me/918826833598"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300 text-center text-sm md:text-base flex items-center justify-center gap-2 hover:scale-105 ease-in-out"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Info Block Separation Footer Line */}
        <div className="mt-10 pt-8 border-t border-white/20">
          {/* Clinic Data Points Grid */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/90 text-xs md:text-sm font-medium">
            <span className="flex items-center gap-1.5">🏥 Hospital Accreditation: <strong className="font-semibold text-white">NABH & JCI Accredited</strong></span>
            <span className="flex items-center gap-1.5">📞 Appointments: <strong className="font-semibold text-white">Available via Fortis Healthcare</strong></span>
            <span className="flex items-center gap-1.5">🕐 OPD Hours: <strong className="font-semibold text-white">Mon to Sat, 9:00 AM – 5:00 PM</strong></span>
            <span className="flex items-center gap-1.5">🚇 Nearest Metro: <strong className="font-semibold text-white">HUDA City Centre (Yellow Line)</strong></span>
          </div>
        </div>
      </div>

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const onDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) nextStep();
    if (info.offset.x > 50) prevStep();
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Container height matches your luxury aesthetic */}
        <div className="relative  w-full aspect-video overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselImages[index].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
              >
                {/* 2. Use Next.js Image for optimization and local asset support */}
                <Image
                  src={carouselImages[index].src}
                  alt={carouselImages[index].alt}
                  fill
                  priority
                  className="max-w-[400px] aspect-square mx-auto"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── CONTROLS ── */}
        </div>
        <div className=" inset-x-0 bottom-8 flex justify-center items-center gap-6 z-10 mt-5">
          <button
            onClick={prevStep}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur  border border-[var(--med-primary)] shadow-md flex items-center justify-center text-navy-900 hover:bg-[var(--med-primary)] hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="bg-white/90 backdrop-blur border border-[var(--med-primary)] px-5 py-2 rounded-full shadow-md text-[10px] font-bold tracking-[0.2em] text-navy-900/60 uppercase">
            {index + 1} <span className="mx-2 text-gold-400">/</span>{" "}
            {carouselImages.length}
          </div>

          <button
            onClick={nextStep}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[var(--med-primary)] shadow-md flex items-center justify-center text-navy-900 hover:bg-[var(--med-primary)] hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};


export function TreatmentOptionsSection() {
  const treatmentsList = [
    {
      id: "1",
      name: "EVLT - Endovenous Laser Treatment",
      badge: "Most Effective",
      badgeClass: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      desc: "A laser fibre is inserted into the affected vein under local anaesthesia, delivering precise heat that seals the vein shut. The body naturally re-routes blood through healthy veins.",
      stats: [
        { label: "⏱ Procedure time", value: "30–45 minutes" },
        { label: "🏠 Discharge", value: "Same day" },
        { label: "🔄 Recovery", value: "1–2 days" },
        { label: "✅ Best for", value: "Great saphenous vein, large varicose veins" },
        { label: "📊 Success rate", value: ">95% at 1 year (PubMed clinical data)" }
      ]
    },
    {
      id: "2",
      name: "RFA - Radiofrequency Ablation",
      badge: "Highly Comfortable",
      badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
      desc: "Radiofrequency energy delivered through a thin catheter heats and permanently seals the damaged vein. Well-tolerated with minimal discomfort.",
      stats: [
        { label: "⏱ Procedure time", value: "30–45 minutes" },
        { label: "🏠 Discharge", value: "Same day" },
        { label: "🔄 Recovery", value: "1–2 days" },
        { label: "✅ Best for", value: "Medium to large veins" },
        { label: "📌 Compression stockings", value: "1–2 weeks post-procedure" }
      ]
    },
    {
      id: "3",
      name: "Medical Glue - Cyanoacrylate Closure",
      badge: "Most Convenient",
      badgeClass: "bg-purple-50 text-purple-700 border border-purple-200",
      desc: "Medical-grade adhesive is injected to seal the vein - no tumescent anaesthesia, no compression stockings, no downtime.",
      stats: [
        { label: "⏱ Procedure time", value: "20–30 minutes" },
        { label: "🏠 Discharge", value: "Same day" },
        { label: "🔄 Recovery", value: "Immediate return to activity" },
        { label: "✅ Best for", value: "Patients with active lifestyles, travel planned post-procedure" }
      ]
    },
    {
      id: "4",
      name: "Foam Sclerotherapy",
      badge: "Superficial Veins",
      badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
      desc: "A foam solution injected into smaller varicose or reticular veins irritates the vein wall, causing it to shrink and be absorbed naturally.",
      stats: [
        { label: "⏱ Procedure time", value: "15–20 minutes" },
        { label: "🏠 Discharge", value: "Immediate" },
        { label: "🔄 Recovery", value: "Same day" },
        { label: "✅ Best for", value: "Spider veins, small varicose veins" },
        { label: "📅 Results visible", value: "4–8 weeks (multiple sessions may be needed)" }
      ]
    },
    {
      id: "5",
      name: "Microphlebectomy - Stab Phlebectomy",
      badge: "Surface Bulging Veins",
      badgeClass: "bg-rose-50 text-rose-700 border border-rose-200",
      desc: "Bulging surface veins removed through tiny 1–2 mm punctures - no stitches required. Often combined with EVLT or RFA in one session.",
      stats: [
        { label: "⏱ Procedure time", value: "30–45 minutes" },
        { label: "🏠 Discharge", value: "Same day" },
        { label: "🔄 Recovery", value: "2–3 days" },
        { label: "✅ Best for", value: "Prominent surface varicosities" }
      ]
    }
  ];

  return (
    <div className="mb-14">
      {/* Headings */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
          TREATMENT OPTIONS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          9 Advanced Procedures. One Right Choice for You.
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl text-sm md:text-base">
          Every patient receives a personalized treatment plan based on their Doppler ultrasound findings and symptom severity. Available procedures include:
        </p>
      </div>

      {/* Grid Layout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatmentsList.map((t) => (
          <div
            key={t.name}
            className="border border-[var(--med-border)] rounded-2xl p-6 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Card Header Info */}
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-slate-900 text-base leading-snug flex gap-2">
                  <span className="text-[var(--med-primary)] font-medium">{t.id}</span>
                  {t.name}
                </h3>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap uppercase tracking-wider ${t.badgeClass}`}>
                  ✦ {t.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {t.desc}
              </p>
            </div>

            {/* Quick Medical Meta Data List */}
            <div className="pt-4 border-t border-slate-100 space-y-1.5 bg-slate-50/50 -mx-6 -mb-6 p-6 rounded-b-2xl">
              {t.stats.map((stat, i) => (
                <div key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="font-medium text-slate-900 whitespace-nowrap min-w-[140px]">
                    {stat.label}:
                  </span>
                  <span className="text-gray-600 font-normal">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}