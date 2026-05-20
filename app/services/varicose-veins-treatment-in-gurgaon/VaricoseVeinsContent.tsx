"use client";

import { useEffect, useRef, useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type ImageSource = string | StaticImageData;

interface CarouselItem {
  id: number;
  src: ImageSource;
  alt: string;
}

import glueTerat from "@/app/assets/service/varicose/glue-treatment.jpeg";
import symptomsImage from "@/app/assets/service/varicose/symptoms.jpg";
import laserTerat from "@/app/assets/service/varicose/laser-trestment.jpeg";
import TestimonialsServices from "@/app/components/TestimonialService";
import { VericoseGurgaon } from "@/app/data/testimonialData";

const carouselImages: CarouselItem[] = [
  {
    id: 1,
    src: glueTerat,
    alt: "varicose veins treatment in Gurgaon",
  },
  // { id: 2, src: HeroImage, alt: "Local Asset Example" },
  {
    id: 3,
    src: laserTerat,
    alt: "varicose veins treatment in Gurgaon",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function VaricoseVeinsContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the main causes of varicose veins?",
      a: (
        <p>
          Weak vein valves, genetics, prolonged standing, aging, pregnancy, and
          excess weight are the most common causes. These conditions often
          require professional evaluation and varicose veins treatment.
        </p>
      ),
    },
    {
      q: "Are varicose veins a worry?",
      a: (
        <p>
          They can become a concern if pain, swelling, skin changes, or ulcers
          develop. Early evaluation and varicose veins treatment in Gurgaon help
          prevent complications.
        </p>
      ),
    },
    {
      q: "Is walking good for varicose veins?",
      a: (
        <p>
          Yes. Walking improves blood circulation in the legs and reduces
          pressure in the veins, making it one of the best daily habits for vein
          health alongside proper varicose veins treatment in Gurgaon.
        </p>
      ),
    },
    {
      q: "Can varicose veins go away on their own?",
      a: (
        <p>
          Minor varicose veins may improve with lifestyle changes, but most
          require medical evaluation and varicose veins treatment in Gurgaon for
          long-term relief.
        </p>
      ),
    },
    {
      q: "Is treatment for varicose veins painful?",
      a: (
        <p>
          Modern minimally invasive treatments involve significantly less
          discomfort and faster recovery times compared to traditional surgical
          stripping. Most patients experience only mild, manageable sensations
          during these quick procedures and can resume normal activities almost
          immediately.
        </p>
      ),
    },
    {
      q: "Can varicose veins cause serious health problems?",
      a: (
        <p>
          Varicose veins can lead to serious complications like blood clots
          (DVT), chronic ulcers, and severe bleeding. Early medical care is
          essential to manage these risks and safeguard your long-term vascular
          health.
        </p>
      ),
    },
    {
      q: "How can I prevent varicose veins?",
      a: (
        <p>
          Regular exercise, maintaining a healthy weight, avoiding prolonged
          standing or sitting, and wearing compression stockings can help reduce
          the risk and complement varicose veins treatment in Gurgaon.
        </p>
      ),
    },
    {
      q: "When should I see a doctor?",
      a: (
        <p>
          Seek medical attention if you notice swelling, persistent pain, or
          skin changes around your veins. Early consultation ensures better
          outcomes and timely varicose veins treatment in Gurgaon.
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
          Varicose Veins Treatment in Gurgaon
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-2">
          by Dr. Himanshu Verma
        </p>
        <p className="text-white/70 text-sm max-w-xl mb-8">
          Advanced minimally invasive procedures to restore healthy blood flow,
          relieve discomfort, and prevent complications -{" "}
          <b>PERSONALIZED FOR YOU</b>.
        </p>
        <div className="grid grid-col-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["9 Procedures", "Treatment Options"],
            ["Minimally Invasive", "Preferred Approach"],
            ["Early Detection", "Best Outcomes"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className=" gap-8 mb-14 items-start">
        <div className="col-span-3 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Dr Himanshu Verma is a board-certified Vascular and Endovascular
            Surgeon with over 17 years of experience, offering advanced varicose
            veins treatment in Gurgaon at Fortis Memorial Research Institute,
            Sector 44, Gurgaon. With more than 5,000 minimally invasive vein
            procedures performed, he specialises in treating varicose veins,
            swollen, twisted veins that develop when the valves inside them
            weaken, causing blood to flow backward and pool. This pooling leads
            to visible bulging, swelling, and discomfort. While many consider
            varicose veins a cosmetic concern, they can indicate underlying
            vascular problems and, if left untreated, lead to serious
            complications.
          </p>
        </div>

        {/* CTA card */}
        <div className="w-full bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 mt-4 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)]">
            When to Consult
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you notice varicose veins, spider veins, or persistent leg
            discomfort, consult Dr Himanshu Verma at Fortis Memorial Research
            Institute, Sector 44, Gurgaon for an accurate diagnosis and a
            personalised treatment plan.
          </p>
          {[
            "Varicose or spider veins",
            "Leg heaviness or aching",
            "Visible bluish veins",
            "Leg swelling or discomfort",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <div className="flex mt-2">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Schedule a Consultation"
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

        <h2 className="text-2xl md:text-2xl font-bold text-gray-800">
          The gold standard: Venous Doppler Ultrasound
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mb-5">
          This painless scan identifies exactly where valves are failing,
          measures the severity of backward blood flow (reflux), and rules out
          deep vein thrombosis, giving your specialist everything needed to
          create a personalized treatment plan.
        </p>

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
      <div className="mb-14 rounded-2xl overflow-hidden border border-[var(--med-border)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--med-primary)] p-8 flex flex-col justify-center gap-4">
            <ShieldCheck className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Dr Himanshu Verma for Varicose Vein
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              If you are looking for varicose veins treatment in Gurgaon, early
              consultation with a specialist can help prevent complications and
              improve your vein health. In this regard, Dr Himanshu Verma is a
              board-certified MBBS, MS, and Vascular and Endovascular Surgeon
              with over 17 years of clinical experience. He holds an MCh in
              Vascular Surgery and is a member of the Vascular Society of India
              and FEVS. Practising at Fortis Memorial Research Institute, Sector
              44, Gurgaon, Dr Verma has performed more than 5,000 minimally
              invasive vein procedures, including EVLT, Radiofrequency Ablation
              (RFA), and Medical Glue Closure (Cyanoacrylate). His clinical
              focus is on achieving lasting relief through evidence-based,
              patient-centred care with minimal recovery time.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-8 flex flex-col justify-center gap-4">
            <p className="text-sm leading-relaxed">
              His clinical focus is on achieving lasting relief through
              evidence-based, patient-centred care with minimal recovery time.
              <br /> <br /> He has authored 29+ peer-reviewed research
              publications and 9 book chapters, with presentations at
              international platforms including the VEITH Symposium, New York,
              reflecting a commitment to evidence-based vascular practice.
            </p>

            {[
              "Minimally invasive, faster recovery",
              "9 advanced treatment procedures available",
              "Personalized care for every patient",
              "Expert in chronic venous & lymphatic disorders",
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

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Procedures
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Advanced Varicose Veins Treatment Options
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            The treatment of varicose veins depends on the severity of symptoms
            and the underlying venous condition. Patients seeking varicose veins
            treatment in Gurgaon can benefit from advanced minimally invasive
            procedures designed to improve blood flow, relieve discomfort, and
            prevent complications.
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Common treatment approaches include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="border border-[var(--med-border)] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-gray-800 text-sm leading-snug">
                  {t.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${t.badgeClass}`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

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
      <div className="mb-14">
        <TestimonialsServices testimonials={VericoseGurgaon} />
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
                  <div className="text-gray-700 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <AnimatedSection>
        <section
          style={{
            padding: "56px 24px",
            background: "var(--med-light)",
            borderTop: "1px solid var(--med-border)",
          }}
        >
          <div
            style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "var(--med-text)",
                marginBottom: 8,
              }}
            >
              Our Varicose Vein Services in Other Cities
            </h2>
            <p style={{ fontSize: 15, color: "#5a7a80", marginBottom: 32 }}>
              Dr. Himanshu Verma provides expert varicose vein care across
              multiple cities.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  city: "Delhi",
                  href: "/services/varicose-vein-treatment-in-delhi",
                },
                {
                  city: "Varanasi",
                  href: "/services/varicose-vein-treatment-in-varanasi",
                },
              ].map((loc) => (
                <p
                  key={loc.city}
                  style={{
                    padding: "13px 28px",
                    borderRadius: 12,
                    border: "2px solid var(--med-primary)",
                    color: "var(--med-primary)",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: 15,
                    background: "#fff",
                    transition: "all 0.25s",
                    display: "inline-block",
                  }}
                >
                  Varicose Veins Treatment in {loc.city}
                </p>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* ── FINAL CTA ── */}
      <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-[var(--med-primary)]" />
          <p className="text-xl font-bold text-gray-800">
            Protect Your Long-Term Leg Health.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          If your legs feel heavy, swollen, or painful, consult Dr. Himanshu to
          find the most suitable <b>varicose veins treatment in Gurgaon</b> for
          your condition. Don't wait — early treatment delivers the best
          outcomes.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule a Consultation"
          />
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
