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
  Stethoscope,
} from "lucide-react";
import TestimonialsServices from "@/app/components/TestimonialService";
import CTAButtons from "@/app/components/CTAButtons";
import InlineCTA from "@/app/components/InlineCTA";

const PAD_WHATSAPP_MESSAGE =
  "Hello Dr. Himanshu Verma, I would like to consult about peripheral artery disease (PAD) treatment and book an appointment.";

export default function PeripheralArteryContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are the symptoms of blocked arteries in the legs?",
      a: "Symptoms may include leg pain or cramping during walking, cold feet, numbness, changes in skin colour and wounds that heal slowly. Some people have no obvious symptoms. A clinical assessment is needed to determine whether PAD is the cause.",
    },
    {
      q: "How is Peripheral Artery Disease diagnosed?",
      a: "Assessment may include a medical history, physical examination and an Ankle-Brachial Index (ABI) test. Doppler ultrasound or vascular imaging may be recommended when additional information is needed.",
    },
    {
      q: "What is usually an early symptom of PAD?",
      a: "Pain or cramping in the leg during walking that improves after resting is a common symptom. However, symptoms vary, and some patients may not notice early warning signs.",
    },
    {
      q: "Can Peripheral Artery Disease affect the heart?",
      a: "PAD is associated with an increased risk of cardiovascular disease, including heart attack and stroke. People diagnosed with PAD may need assessment and management of other cardiovascular risk factors.",
    },
    {
      q: "Can Peripheral Artery Disease be reversed?",
      a: "PAD is a long-term condition, and established arterial plaque does not simply disappear. However, appropriate treatment and risk-factor management can help control the condition, improve symptoms and reduce the risk of complications. The expected benefit depends on the individual case.",
    },
    {
      q: "When should I seek medical attention for possible PAD?",
      a: "Arrange a medical assessment if you have recurring leg pain while walking, cold feet, changes in foot colour or a wound that is slow to heal. Sudden severe pain, a suddenly cold or pale limb, or sudden loss of sensation or movement requires emergency medical attention.",
    },
    {
      q: "What is the best treatment for leg artery blockage?",
      a: "There is no single treatment that is best for every patient. Management may include medication and lifestyle changes, angioplasty and stenting, or bypass surgery, depending on the blockage, symptoms and overall health.",
    },
    {
      q: "Does every patient with PAD need surgery?",
      a: "No. Some patients can be managed with risk-factor control, prescribed medicines and an appropriate exercise plan. A procedure may be considered when symptoms, the severity of reduced blood flow or limb-related complications warrant it."
    }
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
    <>
      <strong>Smoking:</strong> Tobacco use damages blood vessels and increases the risk of arterial disease.
    </>,
    <>
      <strong>Diabetes:</strong> High blood glucose can damage blood vessels and is associated with a higher risk of complications.
    </>,
    <>
      <strong>High cholesterol:</strong> Elevated levels of certain blood fats can contribute to plaque formation.
    </>,
    <>
      <strong>High blood pressure:</strong> Poorly controlled blood pressure increases cardiovascular risk.
    </>,
    <>
      <strong>Increasing age:</strong> The risk of PAD rises with age.
    </>,
    <>
      <strong>Existing cardiovascular disease:</strong> A history of heart or blood vessel disease may increase the likelihood of PAD.
    </>,
  ];

  const diagnosisSteps = [
    {
      num: "01",
      title: "Medical History & Physical Examination",
      desc: "The doctor reviews symptoms, smoking history, diabetes, cholesterol and other cardiovascular risk factors. The examination may include checking pulses, skin colour, temperature and any wounds on the legs or feet.",
    },
    {
      num: "02",
      title: "Ankle-Brachial Index (ABI)",
      desc: "The ABI test compares blood pressure measured at the ankle with blood pressure measured at the arm. It is a non-invasive test that can help identify reduced blood flow to the legs. Results are interpreted in the context of the patient's symptoms and clinical findings.",
    },
    {
      num: "03",
      title: "Doppler Ultrasound",
      desc: "Doppler ultrasound uses sound waves to assess blood flow through the arteries. It can help identify areas where circulation is reduced and provide information about the location and severity of a blockage.",
    },
    {
      num: "04",
      title: "CT Angiography or MR Angiography",
      desc: "When more detailed images are needed, CT or MR angiography may be used to examine the blood vessels. These images can help the treating team plan further management or an intervention when indicated.",
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
      desc: "Digital Subtraction Angiography (DSA) is an imaging technique used to visualise blood vessels and identify areas of narrowing or blockage. It can help the vascular specialist assess arterial circulation and plan or guide appropriate treatment when required.",
    },
    {
      title: "Iliac Artery Angioplasty & Stenting",
      desc: "Balloon expansion of narrowed iliac arteries (supplying the pelvis and legs) followed by placement of a metal stent to keep the vessel open.",
    },
    {
      title: "Femoral Artery Angioplasty",
      desc: "Femoral artery angioplasty is a minimally invasive procedure used to improve blood flow through a narrowed section of the femoral artery. A balloon catheter is guided to the affected area and inflated to widen the artery. The treatment approach depends on the location and severity of the blockage and the patient's condition.",
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
      desc: "Tibial and plantar vessel angioplasty may be considered for selected patients with reduced blood flow in the arteries supplying the lower leg and foot. A catheter-based balloon procedure is used to widen suitable narrowed areas and improve circulation. Treatment decisions depend on the arterial anatomy, foot condition and overall health of the patient.",
    },
    {
      title: "Intravascular Lithotripsy (IVL)",
      desc: "Intravascular Lithotripsy (IVL) is a specialised endovascular technique that uses sonic pressure waves to modify calcium within selected hardened arterial blockages. It may help prepare heavily calcified arteries for balloon angioplasty and other appropriate treatments. Its suitability depends on the location and characteristics of the blockage.",
    },
    {
      title: "Intravascular Ultrasound (IVUS) Guidance",
      desc: "Intravascular Ultrasound (IVUS) uses a specialised ultrasound catheter to provide detailed images from inside the artery. It helps the treating specialist assess the vessel, understand the blockage and guide selected endovascular procedures. Its use depends on the patient's condition and treatment requirements.",
    },
    {
      title: "Embolectomy for Acute Limb Ischemia",
      desc: "Emergency surgical removal of a blood clot that has suddenly blocked an artery, causing acute loss of blood supply to the limb. This is a limb- and life-saving procedure requiring immediate intervention.",
    },
  ];

  const lifestyle = [
    <><strong>Stop smoking:</strong> Ask for professional support if you need help quitting tobacco.</>,
    <><strong>Follow an appropriate exercise plan:</strong> Walking programmes may improve symptoms for suitable patients. Your doctor can advise whether supervised exercise is appropriate.</>,
    <><strong>Manage cholesterol:</strong> Follow your prescribed treatment plan and attend recommended reviews.</>,
    <><strong>Control blood pressure and diabetes:</strong> Individual targets should be set with your treating healthcare professional.
    </>,
    <><strong>Choose a heart-healthy diet:</strong> A balanced eating pattern can support the management of cardiovascular risk factors.</>,
    <><strong>Check your feet regularly:</strong> Look for cuts, blisters, colour changes or wounds, particularly if you have diabetes or reduced sensation.</>,
    <>

      <strong>Attend follow-up appointments:</strong> Monitoring helps your care team review symptoms, risk factors and response to treatment.
    </>
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
    text: React.ReactNode;
    color?: string;
  }) => (
    <li className="flex items-start gap-2 text-sm text-gray-700">
      <span
        className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${color}`}
      />
      <span>{text}</span>
    </li>
  );

  return (
    <div className="font-sans">
      {/* ── HERO ── */}
      <div className="relative rounded-2xl overflow-hidden bg-[var(--med-primary)] mb-12 px-6 py-10 md:px-12 md:py-14">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
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
        <p className="text-white/70 text-sm md:text-base max-w-2xl mb-2">
          Leg pain while walking, cold feet, numbness or wounds that take longer to heal may indicate a problem with blood circulation. Peripheral Artery Disease (PAD) develops when arteries supplying blood to the legs become narrowed or blocked, commonly due to plaque buildup.
        </p>
        <p className="text-white/70 text-sm md:text-base max-w-2xl mb-8">
          Early assessment can help identify the severity of the condition and guide appropriate care. Dr. Himanshu Verma, Vascular and Endovascular Surgeon at Fortis Memorial Research Centre, Gurugram, evaluates patients with suspected PAD and discusses suitable treatment options based on their symptoms, test results and overall health.
        </p>
        <CTAButtons
          onBook={() => setOpenPopup(true)}
          whatsappMessage={PAD_WHATSAPP_MESSAGE}
        />
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
            A Peripheral Artery Disease specialist assesses problems affecting blood flow through the arteries, particularly those supplying the legs and feet. A vascular surgeon can evaluate the location and severity of an arterial blockage and explain whether medical management, an endovascular procedure or surgery may be appropriate.

          </p>
          <p className="text-gray-700 leading-relaxed">
            Dr. Himanshu Verma is a Vascular and Endovascular Surgeon practising at Fortis Memorial Research Centre, Gurugram. Patients with suspected PAD can undergo an assessment of their symptoms, circulation and relevant risk factors to help determine the appropriate care plan.

          </p>
        </div>

        {/* Key facts card */}
        <div className="md:col-span-2 bg-[var(--med-light)] border border-[var(--med-border)] rounded-2xl p-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-4">
            Why Early Consultation Matters
          </p>
          {[
            "Helps identify reduced blood flow before symptoms become more severe.",
            "Allows the doctor to assess foot wounds, pain during walking and other circulation-related concerns.",
            "Helps determine whether further vascular tests are needed.",
            "Supports timely treatment planning and follow-up to monitor the condition."
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
          <p className="text-gray-600 mt-2 ">
            <a
              href="https://www.drhimanshuverma.com/blogs/peripheral-artery-disease-treatment-for-better-blood-flow"
              className="text-blue-500 font-medium"
            >
              Peripheral Artery Disease
            </a>{" "}
            may develop gradually, and some people notice symptoms only during physical activity. Common signs include:

          </p>
        </div>

        <div className="mb-6">

          <ol className="list-decimal list-inside space-y-3 text-gray-700 pl-4">
            <li>
              <strong>Leg pain while walking:</strong>{" "}
              Cramping or aching in the calf, thigh or buttock that improves with rest.
            </li>
            <li>
              <strong>Cold feet or lower legs:</strong>{" "}
              One foot may feel colder than the other.
            </li>
            <li>
              <strong>Numbness or weakness:</strong> {" "}
              An unusual sensation in the legs or feet.
            </li>
            <li>
              <strong>Slow-healing wounds:</strong> {" "}
              Cuts or sores on the toes and feet that take longer than expected to heal.
            </li>
            <li>
              <strong>Skin and nail changes:</strong>{" "}
              Changes in skin colour, reduced hair growth or slower nail growth.
            </li>
            <li>
              <strong>Reduced foot pulses:</strong>{" "}
              A clinician may find weaker pulses in the feet during examination.
            </li>
          </ol>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-sm font-medium ">
            Symptoms can have causes other than PAD, so an examination is important for an accurate diagnosis.

          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--med-light)] border border-[var(--med-border)]">
          <div className="flex items-center gap-2 flex-1">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <p className="text-gray-700 text-sm font-medium">
              Notice sudden severe leg pain, a cold or pale foot, or a sudden loss of sensation or movement? Seek emergency medical care immediately.

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
            What Causes Peripheral Artery Disease?
          </h2>
          <p className="text-gray-600 mt-2">
            Peripheral Artery Disease usually develops when fatty deposits called plaque build up inside the arteries. This process, known as atherosclerosis, can narrow the blood vessels and reduce the amount of oxygen-rich blood reaching the legs and feet.

          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">

            Common Risk Factors for PAD
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <div
              key={i + "facts"}
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
        <div className="mb-8 mt-6">

          <h3 className="text-xl md:text-2xl font-bold text-gray-800">

            Can Peripheral Artery Disease Be Prevented?

          </h3>
          <p className="text-gray-600 mt-2">
            Not every case can be prevented, but managing risk factors may reduce the chance of progression. Depending on your health, your doctor may recommend stopping smoking, regular physical activity, a heart-healthy diet and appropriate management of cholesterol, blood pressure and diabetes.
          </p>
          <p className="text-gray-600 mt-2">
            If you have diabetes, smoke or have persistent leg symptoms, ask your healthcare professional whether a PAD assessment is appropriate.
          </p>
         
        </div>
      </div>


      <InlineCTA
        onBook={() => setOpenPopup(true)}
        whatsappMessage={PAD_WHATSAPP_MESSAGE}
        title="Leg Pain While Walking? Get Your Circulation Checked."
        subtitle="Recurring leg pain, cold feet or a wound that is slow to heal should not be ignored. A clinical assessment can help determine whether reduced arterial blood flow may be contributing to your symptoms."
        button="Book a Consultation"
      />

      {/* ── DIAGNOSIS ── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--med-primary)] mb-2">
            Our Diagnostic Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How Is Peripheral Artery Disease Diagnosed?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Diagnosing PAD involves reviewing symptoms, checking circulation and selecting suitable tests. The investigations needed can vary according to the patient's condition and the suspected location of the blockage.
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
          Not every patient needs every test. The doctor selects investigations based on the initial assessment and the information required for treatment planning.
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

      <InlineCTA
        onBook={() => setOpenPopup(true)}
        whatsappMessage={PAD_WHATSAPP_MESSAGE}
        title="Not Sure Which Treatment Is Right for You?"
        subtitle="The right approach depends on your symptoms, circulation tests and the location of the blockage. A vascular assessment can help you understand the available options and the next steps in your care."
        button="Book a Consultation"
      />

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
            Lifestyle measures are an important part of managing Peripheral Artery Disease. They can support circulation and cardiovascular health, although the right plan depends on your symptoms and medical history.
          </p>
          <ul className="space-y-2 mb-4">
            {lifestyle.map((l, i) => (
              <BulletItem key={i + "lifestyle"} text={l} />
            ))}
          </ul>
          <p className="text-gray-600 text-sm mb-4">Do not start, stop or change prescribed medication without consulting your healthcare professional.
          </p>
        </div>

        {/* Why choose */}
        <div className="rounded-2xl overflow-hidden border border-[var(--med-border)]">
          {/* Header Section */}
          <div className="bg-[var(--med-primary)] p-6 flex flex-col justify-center gap-3">
            <ShieldCheck className="w-7 h-7 text-white/60" />
            <h2 className="text-lg font-bold text-white">
              Why Consult Dr. Himanshu Verma for Peripheral Artery Disease?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Choosing a treatment plan for PAD begins with understanding how the condition affects your circulation and daily activities. Dr. Himanshu Verma is a Vascular and Endovascular Surgeon practising at Fortis Memorial Research Centre, Gurugram.
            </p>

            <p className="text-white/80 text-sm leading-relaxed">
              Patients can discuss their symptoms, investigation results and potential treatment options as part of an individual assessment.
            </p>
          </div>

          {/* Designed Middle Section: What to Expect During Your Care */}
          <div className="bg-white p-6 border-b border-[var(--med-border)] flex flex-col gap-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[var(--med-primary)]" />
              What to Expect During Your Care
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-[var(--med-primary)] uppercase tracking-wider">01. Clinical Assessment</span>
                <p className="text-sm text-gray-700 leading-snug">Review of symptoms, medical history and circulation concerns.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-[var(--med-primary)] uppercase tracking-wider">02. Investigation-Led Planning</span>
                <p className="text-sm text-gray-700 leading-snug">Further tests may be recommended when needed to understand the arterial blockage.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-[var(--med-primary)] uppercase tracking-wider">03. Treatment Discussion</span>
                <p className="text-sm text-gray-700 leading-snug">Suitable options are explained according to the patient's condition.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-[var(--med-primary)] uppercase tracking-wider">04. Follow-Up Care</span>
                <p className="text-sm text-gray-700 leading-snug">Monitoring and risk-factor management may form part of the ongoing care plan.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your treatment recommendation will depend on your individual medical needs and assessment.

            </p>
          </div>

          {/* Checklist & Action Section */}
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
            <div className="pt-2">
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

      {/* ── FINAL CTA ── */}
      <div className="rounded-2xl border border-[var(--med-border)] bg-[var(--med-light)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-[var(--med-primary)]" />
          <p className="text-xl font-bold text-gray-800">
            Take the Next Step Towards Better Circulation
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Persistent leg pain, cold feet or slow-healing foot wounds deserve medical attention. Discuss your symptoms with a vascular specialist to understand whether further testing or treatment may be needed.
        </p>
        <CTAButtons
          variant="onLight"
          onBook={() => setOpenPopup(true)}
          bookLabel="Schedule an Appointment"
          whatsappMessage={PAD_WHATSAPP_MESSAGE}
          className="justify-center"
        />
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
            className={`h-2 transition-all duration-300 rounded-full ${currentIndex === idx
              ? "w-8 bg-blue-600"
              : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
