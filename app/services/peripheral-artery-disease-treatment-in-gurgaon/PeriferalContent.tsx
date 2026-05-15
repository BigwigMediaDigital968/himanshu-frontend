"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TestimonialsServices from "@/app/components/TestimonialService";

export default function PeripheralArteryContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the symptoms of blocked arteries in the legs?",
      a: "The most common symptom is leg pain or cramping while walking that eases with rest (intermittent claudication). Other signs include numbness, cold feet, skin changes, and slow-healing wounds. Severe cases may cause rest pain, indicating critical limb ischemia requiring urgent treatment.",
    },
    {
      q: "How is Peripheral Artery Disease tested and diagnosed?",
      a: "Diagnosis starts with the Ankle-Brachial Index (ABI), a simple, painless test. An ABI below 0.9 confirms PAD. As part of our comprehensive Peripheral Artery Disease treatment in Gurgaon, Doppler ultrasound, CT angiography, and DSA are then used to map blockage location and severity to plan treatment.",
    },
    {
      q: "What is considered the first symptom of peripheral arterial disease?",
      a: "Intermittent claudication, leg pain triggered by walking and relieved by rest, is typically the first symptom. Many early-stage patients have no symptoms at all, making screening important for those with diabetes, smoking history, or age over 50.",
    },
    {
      q: "Can PAD lead to heart problems?",
      a: "Yes. PAD and coronary artery disease share the same cause. Having PAD roughly doubles the risk of heart attack and stroke, which is why cardiovascular risk factor control is a core part of PAD management.",
    },
    {
      q: "Is PAD reversible?",
      a: "PAD cannot be fully reversed, but its progression can be significantly slowed. Smoking cessation, exercise, medications, and endovascular procedures can restore blood flow and allow most patients to return to normal daily activity.",
    },
    {
      q: "How quickly should I seek treatment if I suspect PAD?",
      a: "Seek consultation promptly if you notice leg pain on walking, cold or discoloured feet, or slow-healing wounds. Early Peripheral Artery Disease treatment in Gurgaon significantly reduces the risk of serious complications. Sudden severe leg pain with pallor and coldness is a vascular emergency. Go to the hospital immediately.",
    },
    {
      q: "What is the best treatment for leg artery blockage?",
      a: "It depends on the severity and location of the blockage. For patients seeking Peripheral Artery Disease treatment in Gurgaon, shorter blockages are typically treated with angioplasty and stenting. Complex or longer blockages may require bypass surgery. Dr. Himanshu Verma will recommend the most appropriate option after reviewing your imaging results.",
    },
  ];

  const symptoms = [
    "Leg pain or cramping while walking (intermittent claudication)",
    "Numbness or weakness in the legs",
    "Cold lower legs or feet",
    "Slow-healing wounds or ulcers on toes or feet",
    "Shiny skin, hair loss, or changes in nail growth",
    "A weak or nonexistent pulse in the feet or legs",
  ];

  const facts = [
    "PAD affects an estimated 200 million people worldwide, yet many remain undiagnosed due to absent symptoms.",
    "Smoking is the strongest modifiable risk factor; smokers are up to 4x more likely to develop PAD.",
    "Diabetes worsens PAD outcomes, increasing the risk of below-knee disease and limb-threatening ischemia.",
    "Adults over 50 with diabetes or a smoking history should be screened proactively, even without symptoms.",
    "Up to 50% of PAD patients have no leg symptoms; the disease is often detected only during cardiovascular screening.",
    "PAD is a strong predictor of heart attack and stroke.",
    "Smoking cessation and supervised exercise can meaningfully improve walking ability and quality of life in early PAD.",
    "The Ankle-Brachial Index (ABI) is a simple, non-invasive test that detects PAD with high accuracy in routine clinical settings.",
    "Angioplasty and stenting restore blood flow with shorter recovery times than open bypass surgery.",
    "PAD is progressive, and treated vessels can re-narrow (restenosis), making regular specialist follow-up essential.",
  ];

  const diagnosisSteps = [
    {
      num: "01",
      title: "Medical History & Physical Examination",
      desc: "A detailed review of your symptoms, cardiovascular risk factors, smoking history, and diabetes status, combined with physical examination of pulses in the legs and feet.",
    },
    {
      num: "02",
      title: "Ankle-Brachial Index (ABI) Test",
      desc: "A quick, painless comparison of blood pressure measured at the ankle versus the arm. An ABI below 0.9 is diagnostic of PAD. Severely low readings indicate critical limb ischemia requiring urgent intervention.",
    },
    {
      num: "03",
      title: "Doppler Ultrasound",
      desc: "Non-invasive colour Doppler imaging used to visualize blood flow through arteries, detect the location and severity of blockages, and assess flow velocity.",
    },
    {
      num: "04",
      title: "CT or MR Angiography",
      desc: "Advanced cross-sectional imaging providing a comprehensive three-dimensional view of affected arteries, particularly useful for planning complex multi-level disease treatment.",
    },
  ];

  const treatments = [
    "Digital Subtraction Angiography (DSA)",
    "Iliac Artery Angioplasty & Stenting",
    "Femoral Artery Angioplasty",
    "Femoral Endarterectomy",
    "Superficial Femoral Artery (SFA) Angioplasty",
    "SFA Drug-Eluting Balloon Angioplasty",
    "SFA Stenting",
    "Below Knee (BTK / TBL) Angioplasty",
    "Femoro-Popliteal Bypass",
    "Femoro-Tibial Bypass",
    "Tibial / Plantar Vessel Angioplasty",
    "Intravascular Lithotripsy (Shockwave Therapy)",
    "IVUS – Intravascular Ultrasound Guided Procedures",
    "Embolectomy for Acute Limb Ischemia",
  ];

  const treatmentOptions = [
    {
      title: "Digital Subtraction Angiography (DSA)",
      desc: "Used both as a diagnostic tool and as the imaging platform for performing endovascular interventions in the same session.",
    },
    {
      title: "Iliac Artery Angioplasty & Stenting",
      desc: "Balloon expansion of narrowed iliac arteries (supplying the pelvis and legs) followed by placement of a metal stent to keep the vessel open.",
    },
    {
      title: "Femoral Artery Angioplasty",
      desc: "Balloon catheter treatment of blockages in the common femoral artery, which is the main artery supplying the thigh and lower leg.",
    },
    {
      title: "Femoral Endarterectomy",
      desc: "Surgical removal of plaque buildup from inside the femoral artery, typically used for localized disease at the groin level.",
    },
    {
      title: "Superficial Femoral Artery (SFA) Angioplasty",
      desc: "Balloon-based opening of blockages in the SFA, one of the most commonly affected arteries in PAD patients.",
    },
    {
      title: "SFA Drug-Eluting Balloon Angioplasty",
      desc: "An advanced form of SFA angioplasty using a balloon coated with anti-restenosis medication, which is released into the artery wall to reduce the risk of re-narrowing after treatment.",
    },
    {
      title: "SFA Stenting",
      desc: "Placement of a self-expanding metal stent in the SFA to maintain patency after angioplasty, used when balloon treatment alone is insufficient.",
    },
    {
      title: "Below-Knee (BTK / TBL) Angioplasty",
      desc: "Technically demanding endovascular treatment of blocked arteries in the calf and foot, critical for limb salvage in patients with diabetic foot disease or critical limb ischemia.",
    },
    {
      title: "Femoro-Popliteal Bypass",
      desc: "A surgical bypass using either the patient's own vein or a synthetic graft to reroute blood around a blocked segment of the femoral or popliteal artery.",
    },
    {
      title: "Femoro-Tibial Bypass",
      desc: "Bypass surgery extending from the femoral artery to the tibial vessels in the lower leg, typically reserved for extensive multi-level disease where endovascular options are unsuitable.",
    },
    {
      title: "Tibial/Plantar Vessel Angioplasty",
      desc: "Restoration of blood flow to the smallest vessels supplying the foot and toes is essential for wound healing in patients with diabetic foot and critical ischemia.",
    },
    {
      title: "Intravascular Lithotripsy (Shockwave Therapy)",
      desc: "A newer technology using sonic pressure waves to break up heavily calcified (hardened) plaque within artery walls, making them amenable to balloon treatment when conventional angioplasty would fail.",
    },
    {
      title: "IVUS - Intravascular Ultrasound Guided Procedures",
      desc: "Use of a miniature ultrasound probe inside the artery to guide stent placement with precision, ensuring optimal sizing and position, reducing the risk of complications and restenosis.",
    },
    {
      title: "Embolectomy for Acute Limb Ischemia",
      desc: "Emergency surgical removal of a blood clot that has suddenly blocked an artery, causing acute loss of blood supply to the limb. This is a limb- and life-saving procedure requiring immediate intervention.",
    },
  ];

  const lifestyle = [
    "Quit smoking, the single most impactful step; smoking cessation significantly slows PAD progression",
    "Supervised exercise therapy, structured walking programmes have strong clinical evidence for improving claudication symptoms",
    "A heart-healthy diet, reducing saturated fats and increasing fibre, slows arterial plaque progression",
    "Blood pressure control, current guidelines recommend a target below 130/80 mmHg in PAD patients",
    "Cholesterol and diabetes management, statin therapy, and glycaemic control are cornerstones of PAD medical management",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rakesh Chawla",
      content:
        "I had been ignoring cramps in my calves for almost a year, assuming it was just muscle fatigue. When the pain started, even while walking short distances, I consulted Dr. Himanshu Verma. He immediately suspected Peripheral Artery Disease and got a Doppler test done. The blockage was identified early, and he treated it with a minimally invasive angioplasty. Within a week, I could walk comfortably again. Very precise diagnosis.",
      rating: 5,
    },
    {
      id: 2,
      name: "Preeti Bansal",
      content:
        "My mother (age 68) had discoloration in her toes and constant leg pain at night. We were really worried. Dr. Himanshu calmly explained that it was advanced PAD and needed urgent attention. He performed a procedure to restore blood flow, and the improvement was visible within days. His confidence really reassured us.",
      rating: 5,
    },
    {
      id: 3,
      name: "Kunal Aggarwal",
      content:
        "I am diabetic, so when I started having numbness and slow-healing wounds on my foot, it became serious. Dr. Himanshu Verma handled my case very carefully, considering my sugar levels. He planned the treatment step-by-step and avoided major surgery. My wound has healed now, and circulation is much better.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ritu Chhabra",
      content:
        "What I liked most about Dr. Himanshu was that he didn’t rush into procedures. He first tried medication and lifestyle correction for my PAD symptoms. When that didn’t fully help, he suggested the next step. Very ethical doctor, not money-minded.",
      rating: 5,
    },
    {
      id: 5,
      name: "Mohit Sachdeva",
      content:
        "I was unable to walk more than 100 meters without severe pain in my legs. After treatment from Dr. Himanshu Verma, I can now walk almost 2–3 km daily. He explained everything clearly, even showing the blockage in reports. That transparency really built trust.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sushma Kohli",
      content:
        "My father had a high risk of amputation due to poor blood circulation caused by PAD. Dr. Himanshu Verma treated him with an endovascular procedure and literally saved his leg. We are extremely grateful for his expertise.",
      rating: 5,
    },
    {
      id: 7,
      name: "Varun Talwar",
      content:
        "I visited Dr. Himanshu after experiencing a cold sensation and weakness in my legs. He diagnosed early-stage Peripheral Artery Disease and treated it before it got worse. His preventive approach really made a difference.",
      rating: 5,
    },
    {
      id: 8,
      name: "Neelam Ahuja",
      content:
        "Very humble and approachable doctor. I never felt rushed during the consultation. He answered all my questions about PAD and made sure I understood the treatment options. Recovery was smooth and well-monitored.",
      rating: 5,
    },
    {
      id: 9,
      name: "Tarun Oberoi",
      content:
        "I had already consulted two doctors before meeting Dr. Himanshu Verma, but wasn’t satisfied. He gave a completely different perspective and suggested a less invasive solution. The results were excellent, and I avoided a major surgery.",
      rating: 5,
    },
    {
      id: 10,
      name: "Shweta Suri",
      content:
        "My husband’s case was complicated because of his smoking history and severe artery blockage. Dr. Himanshu handled it very professionally and planned the treatment carefully. The improvement in his walking ability has been life-changing.",
      rating: 5,
    },
  ];

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
          Vascular & Endovascular Surgeon · Gurgaon
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
          Peripheral Artery Disease Treatment in Gurgaon
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
          If your legs ache when you walk but feel better at rest, it could be
          more than muscle fatigue - it may be Peripheral Artery Disease, a
          condition where blocked leg arteries silently increase your risk of
          heart attack, stroke, and limb loss. Our clinic provides personalized
          Peripheral Artery Disease treatment in Gurgaon for every patient,
          ensuring accurate diagnosis and effective treatment. Consulting a
          qualified Peripheral Artery Disease Specialist ensures timely
          diagnosis and prevents complications.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
          {[
            ["14 Procedures", "Treatment Options"],
            ["5-Step", "Diagnosis Process"],
            ["Minimally Invasive", "Preferred Approach"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-bold text-base md:text-xl">{val}</p>
              <p className="text-white/60 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <img
          src="/services/peripheral-artery-disease/peripheral-artery-disease-banner.png"
          alt="PAD treatment in Gurgaon image 2"
        />
      </div>

      {/* ── INTRO + WHO IS A SPECIALIST ── */}
      <div className="grid  gap-8 mb-14 items-start">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Who Is a Peripheral Artery Disease Specialist?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Peripheral Artery Disease specialist is a trained vascular surgeon
            who focuses on diagnosing and treating conditions affecting arteries
            outside the heart and brain. Dr. Himanshu Verma is a Vascular &
            Endovascular Surgeon practising at Fortis Memorial Research Centre,
            Sector 44, Gurgaon. He holds an MCh in Vascular & Endovascular
            Surgery and has extensive experience managing complex arterial and
            venous conditions, including PAD.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Under Dr. Himanshu Verma's care, patients seeking Peripheral Artery
            Disease treatment in Gurgaon receive a thorough evaluation of their
            arterial health, followed by a personalized treatment plan ranging
            from lifestyle modifications and medications to advanced minimally
            invasive endovascular procedures.
          </p>
        </div>

        {/* Key facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Why Early Consultation Matters
          </p>
          {[
            "Prevents limb loss and serious vascular complications",
            "Enables accurate mapping of artery blockages before they worsen",
            "Opens access to minimally invasive treatment options with faster recovery",
            "Ensures ongoing specialist monitoring of a progressive condition",
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
            Recognise the Signs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Are Peripheral Artery Disease Symptoms?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            <a
              href="https://www.drhimanshuverma.com/blogs/peripheral-artery-disease-treatment-for-better-blood-flow"
              className="text-blue-500 font-medium"
            >
              Peripheral Artery Disease
            </a>{" "}
            symptoms often start subtly and worsen over time. Watch for:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {symptoms.map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4"
            >
              <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm leading-snug">{s}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-sm font-medium ">
            Early detection can prevent serious complications. If you notice any
            of these signs, consult a Peripheral Artery Disease Specialist
            immediately.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <div className="flex items-center gap-2 flex-1">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <p className="text-gray-700 text-sm font-medium">
              Experiencing any of these symptoms? Contact us immediately for a
              thorough assessment.
            </p>
          </div>
          <ButtonFill
            onClick={() => setOpenPopup(true)}
            text="Contact Us Now"
          />
        </div>
      </div>

      {/* ── 10 FACTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Know the Facts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            10 Evidence-Based Facts About Peripheral Artery Disease
          </h2>
          <p className="text-gray-600 mt-2">
            The following facts are drawn from published clinical guidelines,
            including those of the American Heart Association (AHA), the
            European Society of Cardiology (ESC), and the Vascular Society of
            India, forming the foundation of evidence-based Peripheral Artery
            Disease treatment in Gurgaon at our clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <div
              key={fact}
              className="flex items-start gap-3 border border-[var(--med-border)] rounded-2xl px-5 py-4 bg-white"
            >
              <span className="text-xs font-bold text-[var(--med-primary)] opacity-50 flex-shrink-0 mt-0.5 w-5">
                {i + 1}.
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">
                {fact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DIAGNOSIS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Our Diagnostic Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Dr. Himanshu Verma Diagnoses Peripheral Artery Disease Treatment
            in Gurgaon
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Our diagnostic approach to Peripheral Artery Disease treatment in
            Gurgaon is systematic, evidence-based, and tailored to each
            patient's clinical picture. Accurate staging of disease severity
            determines which treatment will deliver the best outcome.
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
          Accurate diagnosis ensures you receive the most effective Peripheral
          Artery Disease treatment in Gurgaon.
        </div>
      </div>

      {/* ── TREATMENTS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Advanced Procedures
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Treatment Options for Peripheral Artery Disease
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Every procedure is performed under the guidance of an experienced
            Peripheral Artery Disease Specialist to ensure safety and precision.
            We provide advanced{" "}
            <a
              href="https://www.drhimanshuverma.com/blogs/symptoms-of-pad-warning-signs-you-should-never-ignore"
              className="text-blue-500 font-medium "
            >
              Peripheral Artery Disease treatment in Gurgaon
            </a>{" "}
            tailored to each patient, including:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          {treatmentOptions.map((t, i) => (
            <div
              key={i + "treatment-options"}
              className="border border-[var(--med-border)] rounded-2xl p-4 bg-white hover:shadow-md transition-shadow flex items-start gap-3"
            >
              <span className="text-xs font-bold text-[var(--med-primary)] opacity-40 flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-sm text-gray-800 leading-snug">
                <p className="font-medium">{t.title}</p>
                <p className="text-gray-600 mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Our goal is to restore blood flow, relieve symptoms, and improve
            your quality of life. Every patient deserves care from an
            experienced Peripheral Artery Disease Specialist using the most
            advanced techniques available.
          </p>
        </div>
        peripheral-artery-disease-1
        <div></div>
        <div className="rounded-2xl bg-[var(--med-primary)] text-white px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/90 max-w-xl">
            Start your treatment journey now. Speak with our specialists for the
            best Peripheral Artery Disease treatment in Gurgaon tailored to your
            condition.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="flex-shrink-0 bg-white text-[var(--med-primary)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-all cursor-pointer"
          >
            Speak with Our Specialists
          </button>
        </div>
      </div>

      <div className="w-[85vw] lg:w-full overflow-hidden">
        <AutoCarousel
          images={[
            "/services/peripheral-artery-disease/peripheral-artery-disease-1.png",
            "/services/peripheral-artery-disease/peripheral-artery-disease-2.png",
            "/services/peripheral-artery-disease/peripheral-artery-disease-3.png",
            "/services/peripheral-artery-disease/peripheral-artery-disease-4.png",
          ]}
        />
      </div>

      {/* ── LIFESTYLE + WHY CHOOSE ── */}
      <div className="mb-14 grid md:grid-cols-1 gap-6">
        {/* Lifestyle */}
        <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-[var(--med-primary)]" />
            <h2 className="text-lg font-bold text-gray-800">
              Lifestyle and Prevention
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Lifestyle changes are a core part of effective Peripheral Artery
            Disease treatment in Gurgaon. Medical and surgical treatment works
            best when supported by the following:
          </p>
          <ul className="space-y-2">
            {lifestyle.map((l) => (
              <BulletItem key={l} text={l} />
            ))}
          </ul>
        </div>

        {/* Why choose */}
        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          <div className="bg-[var(--med-primary)] p-6 flex flex-col justify-center gap-3">
            <ShieldCheck className="w-7 h-7 text-white/60" />
            <h2 className="text-lg font-bold text-white">
              Why Choose Dr. Himanshu Verma for Peripheral Artery Disease
              Treatment
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Dr. Himanshu Verma is an MCh-qualified Vascular and Endovascular
              Surgeon at Fortis FMRI, Gurgaon, with 17+ years of dedicated
              experience in PAD diagnosis and treatment.
            </p>
          </div>
          <div className="bg-[var(--med-light)] p-6 flex flex-col gap-3">
            {[
              "1000+ successful endovascular and surgical procedures performed",
              "Proficient in 14 advanced endovascular and surgical procedures for PAD",
              "Subspecialty expertise in complex below-knee and multi-level arterial disease",
              "Imaging-guided, minimally invasive approach as first choice",
              "Member, Vascular Society of India",
              "Personalized treatment planning for every patient",
              "Comprehensive follow-up care to monitor long-term vessel patency",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--med-primary)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
            <div>
              <ButtonFill
                onClick={() => setOpenPopup(true)}
                text="Schedule an Appointment"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-14">
        <TestimonialsServices testimonials={testimonials} />
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
            Don't Wait - Early Treatment Makes All the Difference.
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Speak with our specialists for{" "}
          <b>Peripheral Artery Disease treatment in Gurgaon</b> to find the best
          solution for you. Schedule your consultation with Dr. Himanshu Verma
          today.
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
interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const AutoCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Total pages: since we show 2 images at a time
  const totalPages = Math.ceil(images.length / 2);

  // Update width on resize to keep it responsive
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  // Touch handlers for Swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.nativeEvent.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      // Swipe threshold
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full overflow-hidden max-w-4xl mx-auto px-4 group">
      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * containerWidth}px)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {/* Mapping through images in pairs */}
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div
              key={pageIdx}
              className="flex flex-wrap sm:flex-nowrap gap-4 p-2"
              style={{ width: `${containerWidth}px` }}
            >
              {images.slice(pageIdx * 2, pageIdx * 2 + 2).map((src, imgIdx) => (
                <div
                  key={imgIdx}
                  className="sm:flex-1 relative overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`Peripheral Artery Disease treatment in Gurgaon`}
                    className="h-full object-cover mx-auto"
                  />
                </div>
              ))}
              {/* Fallback for odd number of images */}
              {images.slice(pageIdx * 2, pageIdx * 2 + 2).length === 1 && (
                <div className="flex-1" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? "w-8 bg-blue-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
