"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
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
          Diagnosis typically begins with a detailed clinical history and a
          pelvic ultrasound to assess blood flow patterns and vein diameter. If
          Pelvic Congestion Syndrome (PCS) is suspected, a CT or MRI scan may be
          recommended for a more detailed assessment of the pelvic venous
          anatomy. In some cases, a venogram — where contrast dye is injected
          and X-ray images are taken — is used to map abnormal vein flow
          precisely. Dr. Himanshu Verma will explain which tests are appropriate
          for your specific situation.
        </p>
      ),
    },
    {
      q: "What causes pelvic venous disorders?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          The most common cause is weakening of the valves inside the pelvic
          veins, which allows blood to pool rather than drain efficiently.
          Pregnancy, hormonal influences (particularly oestrogen), genetic
          predisposition, and certain anatomical variants can all contribute.
          Women with multiple pregnancies are particularly susceptible.
        </p>
      ),
    },
    {
      q: "Is the embolization procedure painful?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Most patients experience minimal discomfort during the procedure,
          which is performed under local anaesthesia. You may feel mild pressure
          or warmth at the catheter entry site, but the procedure itself is not
          typically painful. Mild pelvic cramping in the day or two after
          treatment is common and is usually well managed with standard pain
          relief.
        </p>
      ),
    },
    {
      q: "Can pelvic venous disorders come back after treatment?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Embolization has a high long-term success rate. However, in a small
          percentage of cases, symptoms may recur if additional veins become
          affected over time. Dr. Himanshu Verma will discuss your individual
          risk profile and what follow-up monitoring is recommended after
          treatment.
        </p>
      ),
    },
    {
      q: "Can pelvic venous disorders be prevented?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          While genetic and hormonal factors cannot be changed, maintaining a
          healthy weight, staying active, and avoiding prolonged periods of
          standing or sitting can help reduce pressure on the pelvic venous
          system. Women with a family history of vein disorders may benefit from
          earlier specialist assessment after pregnancies.
        </p>
      ),
    },
    {
      q: "Are pelvic venous disorders painful?",
      a: (
        <p className="text-gray-700 leading-relaxed">
          Yes — chronic pelvic pain is the defining feature of Pelvic Congestion
          Syndrome. The pain typically ranges from a dull ache to a sharp,
          dragging discomfort and tends to worsen with prolonged standing,
          physical exertion, sexual activity, and toward the end of the day.
          Symptoms often improve when lying down.
        </p>
      ),
    },
  ];

  const symptoms = [
    "Persistent pelvic pain that worsens after standing or sitting for long periods",
    "A feeling of heaviness or pressure deep in the pelvis",
    "Visible varicose veins on the lower abdomen, buttocks, inner thighs, or vulva",
    "Pain during or after sexual intercourse (dyspareunia)",
    "Swelling or bloating in the pelvic region",
    "Symptoms that worsen before or during menstruation",
    "General fatigue and difficulty with prolonged physical activity",
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
      title: "Lifestyle & Supportive Measures",
      badge: "First-line Management",
      badgeClass: "bg-[var(--med-primary)] text-white",
      desc: (
        <>
          In early or mild cases, conservative steps can significantly reduce
          discomfort. These include regular low-impact exercise, avoiding
          prolonged standing or sitting, wearing compression garments, and using
          prescribed pain-relief medication where appropriate. While these
          measures won't resolve the underlying vein problem, they help manage
          day-to-day symptoms while a formal treatment plan is being organised.
        </>
      ),
    },
    {
      title: "Pelvic Vein Embolization",
      badge: "Minimally Invasive (Gold Standard)",
      badgeClass: "bg-teal-100 text-teal-700",
      desc: (
        <>
          Embolization is the preferred treatment for Pelvic Congestion Syndrome
          and most pelvic venous disorders. It is a catheter-based, image-guided
          procedure performed under local anaesthesia — no open surgery, no
          general anaesthesia, and no large incision. A thin tube is guided
          through a small entry point, typically at the wrist or groin, to reach
          and seal the malfunctioning pelvic veins. The entire procedure usually
          takes one to two hours, and most patients go home on the same day.
          <br />
          <br />
          Clinical evidence shows embolization achieves significant symptom
          relief in the vast majority of PCS patients, with a low rate of
          recurrence.
        </>
      ),
    },
    {
      title: "Surgical Intervention",
      badge: "Rare Cases",
      badgeClass: "bg-orange-100 text-orange-700",
      desc: (
        <>
          Surgery is seldom required for pelvic venous disorders today. It may
          be considered in highly complex anatomical situations where minimally
          invasive options are not feasible. Dr. Verma will discuss this option
          only where it is genuinely indicated, and all alternatives will be
          explored first.
        </>
      ),
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
        <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["Women", "Most Commonly Affected"],
            ["PCS", "Most Common Vein Disorder"],
            ["Minimally Invasive", "Preferred Approach"],
            ["Same Day", "Discharge in Most Cases"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT ARE PELVIC VENOUS DISORDERS ── */}
      <div className="grid md:grid-cols-5 gap-8 mb-6 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Understanding Pelvic Venous Disorders
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pelvic venous disorders are conditions where the veins inside the
            pelvis stop working properly - they become enlarged, twisted, or
            unable to drain blood efficiently back toward the heart. The most
            common form is Pelvic Congestion Syndrome (PCS), a condition that
            causes persistent, often unexplained pelvic pain, particularly in
            women of childbearing age.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of it like varicose veins but inside the pelvis rather than on
            the legs. Because these veins are internal, the condition is
            frequently missed or misattributed to gynaecological problems, IBS,
            or musculoskeletal issues. Many patients wait years for a correct
            diagnosis. Dr. Himanshu Verma is trained to identify these vascular
            patterns early through targeted imaging and treat them effectively
            without major surgery.
          </p>
        </div>

        {/* Quick-facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Key Facts
          </p>
          {[
            "Caused by dilated, malfunctioning pelvic veins that fail to drain properly",
            "Pelvic Congestion Syndrome (PCS) is the most common type",
            "Predominantly affects women, especially those who have had pregnancies",
            "Often misdiagnosed - early specialist consultation is important",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-6">
        <img
          src="/services/pelvic-venous-disorder/pelvic-venous-disorder-1.png"
          alt="What are Pelvic Venous Disorders?"
          className="w-full rounded-lg border border-gray-200"
        />
      </div>

      {/* ── SYMPTOMS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            What to Look For
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Symptoms: What Pelvic Venous Disorders Feel Like
          </h2>
          <p className="text-gray-600 mt-2">
            Pelvic venous disorders often cause a dull, aching discomfort in the
            lower abdomen or pelvic area that many patients describe as a
            "dragging" feeling. What makes PCS particularly difficult to spot is
            that symptoms tend to worsen in predictable situations such as
            prolonged standing, sitting, or after sex and improve when lying
            down.
            <br />
            <br />
            Common symptoms include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
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

        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <p className="text-gray-700 text-sm">
            If you recognise several of these symptoms particularly if they've
            persisted for more than three to six months - a structured vascular
            assessment is the recommended next step. These symptoms are
            frequently misattributed to other conditions, so a specialist's
            evaluation is important.
          </p>
        </div>
        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Get a Specialist Assessment - Book a Consultation with Dr. Verma"
          className="mt-6 bg-[var(--med-primary)] text-white hover:bg-[var(--med-primary)]/90"
        />
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
          <p className="text-gray-600 mt-2">
            Because pelvic venous disorders are internal and their symptoms
            overlap with many other conditions, an accurate diagnosis requires
            specialised imaging not just a routine examination. Dr. Verma
            follows a structured, step-by-step diagnostic protocol to confirm
            PCS and rule out other causes before recommending any treatment.
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
          Most patients receive a clear diagnostic picture within one or two
          visits. Where venography is required, it is typically performed as a
          day-procedure at Fortis Memorial Research Centre, Gurugram.
        </div>

        <ButtonFill
          onClick={() => setOpenPopup(true)}
          text="Find Out If You Have PCS - Request a Diagnostic Appointments"
          className="mt-6 bg-[var(--med-primary)] text-white hover:bg-[var(--med-primary)]/90"
        />
      </div>

      <div className="mb-6">
        <img
          src="/services/pelvic-venous-disorder/pelvic-venous-disorder-treatment.png"
          alt="What are Pelvic Venous Disorders?"
          className="w-full rounded-lg border border-gray-200"
        />
      </div>

      {/* ── TREATMENT OPTIONS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Treatment Pathways
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Are Pelvic Venous Disorders Treated?
          </h2>
          <p className="text-gray-600 mt-2">
            Treatment for pelvic venous disorders is tailored to the severity of
            the condition and the patient's overall health. Dr. Verma evaluates
            each case individually before recommending a pathway.
          </p>
        </div>

        <div className="grid gap-5 mb-6">
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
            Every treatment plan is discussed in full with the patient before
            any procedure begins. You will always understand your options, the
            expected outcomes, and any possible risks.
          </p>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Schedule an Appointment"
          />
        </div>
      </div>

      {/* ── CAUSES + WHY CHOOSE ── */}
      <div className="mb-14 space-y-8">
        {/* Causes Section */}
        <div className="rounded-3xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <HeartPulse className="w-6 h-6 text-[var(--med-primary)]" />
            <h2 className="text-2xl font-bold text-gray-800">
              What Causes Pelvic Venous Disorders?
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Pelvic venous disorders develop when the valves inside the pelvic
            veins weaken and stop working efficiently. Healthy vein valves open
            to allow blood to flow toward the heart and close to prevent it from
            flowing back. When these valves fail, blood pools in the pelvic
            veins, causing them to become engorged and painful — similar to
            varicose veins in the legs.
          </p>

          <p className="text-gray-700 font-semibold mb-4">
            Several factors can contribute to this valve weakening:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Pregnancy",
                desc: "The most significant risk factor. Increased blood volume and hormonal changes during pregnancy place significant stress on pelvic vein walls. Women who have had multiple pregnancies are particularly at risk.",
              },
              {
                title: "Hormonal Influence",
                desc: "Oestrogen relaxes vein walls and reduces their tone, which is why PCS is far more common in women and often improves after menopause.",
              },
              {
                title: "Genetic Predisposition",
                desc: "A family history of varicose veins or vascular conditions may increase susceptibility.",
              },
              {
                title: "Prolonged Standing or Sitting",
                desc: "Occupations involving long periods in one position can increase pressure in the pelvic venous system over time.",
              },
              {
                title: "Anatomical Factors",
                desc: "Certain anatomical variants, such as a retroverted uterus or narrowing at the left renal vein (nutcracker phenomenon), can contribute to pelvic vein congestion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[var(--med-border)] rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mt-6">
            Understanding your specific risk profile helps Dr. Verma determine
            not only how to treat the condition, but also how to reduce the
            likelihood of recurrence.
          </p>
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl bg-[var(--med-primary)] p-8 md:p-10 text-white">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Take the First Step Toward a Clear Diagnosis
            </p>

            <p className="text-white/85 leading-relaxed mb-6">
              If chronic pelvic pain has been affecting your daily life, you do
              not have to keep guessing. A structured vascular evaluation with
              Dr. Himanshu Verma at Fortis Memorial Research Centre, Gurugram,
              can provide a clear diagnosis and — where appropriate — a
              minimally invasive treatment option that does not require an
              overnight hospital stay.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Book a Consultation with Dr. Verma - Fortis Memorial, Gurugram"
                className="bg-white !text-[var(--med-primary)] hover:bg-white/90"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="rounded-3xl border border-[var(--med-border)] bg-white p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[var(--med-primary)]" />
            <h2 className="text-2xl font-bold text-gray-800">
              Why Patients Choose Dr. Himanshu Verma for Pelvic Vein Treatment
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            When dealing with a condition as misunderstood as Pelvic Congestion
            Syndrome, the specialist you choose matters enormously. Dr. Himanshu
            Verma is a trained Vascular & Endovascular Surgeon with specialist
            expertise in venous and endovascular conditions, practising at
            Fortis Memorial Research Centre — one of Gurugram’s leading tertiary
            care hospitals.
          </p>

          <div className="space-y-5">
            {[
              {
                title: "Specialist Vascular Training",
                desc: "Dr. Verma’s clinical background is specifically in vascular and endovascular surgery. Pelvic vein embolization requires precision imaging interpretation and advanced catheter-based skills unique to vascular specialists.",
              },
              {
                title:
                  "Minimally Invasive, No Hospital Admission in Most Cases",
                desc: "Procedures are performed under local anaesthesia, typically as day-care treatments with faster recovery and minimal disruption to daily life.",
              },
              {
                title: "Imaging-Guided Accuracy",
                desc: "Every procedure is guided by real-time imaging to ensure precision targeting of malfunctioning veins while protecting surrounding structures.",
              },
              {
                title: "Fortis Memorial Research Centre",
                desc: "Procedures are performed in a NABH-accredited tertiary care hospital with advanced catheterisation laboratories and complete emergency backup.",
              },
              {
                title: "Patient-Centred Care",
                desc: "Dr. Verma takes time to explain the diagnosis, treatment options, and expected outcomes. Patients are never rushed into decisions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 pb-5 border-b border-[var(--med-border)] last:border-none"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--med-light)] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[var(--med-primary)]" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonFill
              onClick={() => setOpenPopup(true)}
              text="Book Consultation"
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
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen
                    ? "border-[var(--med-primary)] bg-[var(--med-light)]"
                    : "border-[var(--med-border)] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex justify-between cursor-pointer items-center px-6 py-4 text-left gap-4"
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
      {/* <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-[var(--med-primary)]" />
          <p className="text-xl font-bold text-gray-800">
            Take the First Step Toward Relief.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          If chronic pelvic pain has been affecting your daily life, you don't
          have to keep guessing. A structured vascular evaluation with Dr.
          Himanshu Verma at Fortis Memorial Research Centre can give you a clear
          diagnosis and, where appropriate, a minimally invasive treatment
          option often without an overnight hospital stay.
        </p>
        <div className="flex justify-center">
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Book a Consultation with Dr. Verma - Fortis Memorial, Gurugram"
          />
        </div>
      </div> */}

      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
