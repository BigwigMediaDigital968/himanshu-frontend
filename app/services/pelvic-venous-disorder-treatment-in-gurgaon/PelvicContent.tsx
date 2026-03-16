"use client";

import { useState } from "react";
import PopupForm from "@/app/components/Popup";
import ButtonFill from "@/app/components/Button";
import { ChevronDown } from "lucide-react";

export default function PelvicContent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How are pelvic venous disorders diagnosed?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> are diagnosed
            through physical exams and imaging tests such as ultrasound, CT
            scan, MRI, or venography.
          </p>
        </>
      ),
    },
    {
      q: "What causes pelvic venous disorders?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            <b>Pelvic Venous Disorders</b> are caused by weakened veins,
            hormonal changes, genetics, or prolonged pressure on pelvic veins.
          </p>
        </>
      ),
    },
    {
      q: "Can pelvic venous disorders be prevented?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Maintaining a healthy lifestyle, regular exercise, and avoiding
            prolonged sitting or standing can help reduce the risk of{" "}
            <b>Pelvic Venous Disorders</b>..
          </p>
        </>
      ),
    },
    {
      q: "Are pelvic venous disorders painful?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Yes, symptoms of <b>Pelvic Venous Disorders</b> can range from mild
            discomfort to severe pelvic pain, especially after standing for long
            periods.
          </p>
        </>
      ),
    },
    {
      q: "Is treatment for pelvic venous disorders effective?",
      a: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Yes, with early diagnosis and proper intervention,{" "}
            <b>Pelvic Venous Disorders Treatment in Gurgaon</b> can provide
            significant symptom relief and improve quality of life.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
        Pelvic Venous Disorders Treatment in Gurgaon
      </h2>

      {/* WHAT IS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          What are Pelvic Venous Disorders?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> refer to
          conditions caused by malfunctioning veins in the pelvic area, often
          leading to chronic pain and discomfort. One of the most common types
          of pelvic venous disorders is <b>Pelvic Congestion Syndrome (PCS)</b>,
          which occurs when veins in the pelvis become dilated and fail to
          efficiently return blood to the heart.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> are more commonly
          seen in women, especially those experiencing chronic pelvic pain.
          Early consultation with a specialist can help manage symptoms and
          prevent complications. Book your consultation with Dr. Himanshu today
          if you suspect <b>Pelvic Venous Disorders Treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* SYMPTOMS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Symptoms of Pelvic Venous Disorders
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Recognizing the signs of{" "}
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b>
          is crucial for timely intervention. Common symptoms include:
        </p>

        <ul className="space-y-3">
          {[
            "Persistent pelvic pain that worsens after standing or sitting for long periods",
            "Swelling in the pelvic area",
            "Visible varicose veins in the lower abdomen, buttocks, or thighs",
            "Pain during or after sexual activity",
            "Heaviness or pressure in the pelvis",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Many individuals with{" "}
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b>
          also experience fatigue or discomfort that affects daily activities.
          If you notice any of these symptoms, do not ignore them. Schedule a
          check-up with an experienced vascular surgeon for proper evaluation of
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b>.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* DIAGNOSIS */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          How Do I Know If I Have Pelvic Venous Disorders?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Diagnosis involves a thorough evaluation and specialized imaging to
          confirm{" "}
          <b>
            Pelvic Venous Disorders in Treatment or Pelvic Congestion Syndrome
            (PCS)
          </b>
          . The process typically includes:
        </p>

        <ul className="space-y-3">
          {[
            "Medical history and physical examination to identify patterns of pelvic pain",
            "Ultrasound to check for vein dilation and blood flow issues",
            "CT or MRI scans for detailed views of pelvic veins",
            "Venography to map abnormal vein patterns and confirm PCS",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-10">
        Early detection of <b>Pelvic Venous Disorders</b> can prevent
        complications and help plan effective treatment. If you suspect{" "}
        <b>Pelvic Venous Disorders</b>, getting evaluated by a specialist is the
        best step.
      </p>

      <div className="h-px bg-gray-100 mb-10" />

      {/* TREATMENT */}
      <div className="space-y-6 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          How is Pelvic Venous Disorders Treated?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> focuses on
          relieving symptoms and improving vein function. Options include:
        </p>

        <p className="text-gray-700 leading-relaxed">
          <b>Lifestyle and supportive care:</b> Regular exercise, avoiding
          prolonged sitting, and managing pain can help control symptoms related
          to <b>Pelvic Venous Disorders</b>.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <b>Minimally invasive procedures:</b> Endovascular treatments like
          embolization or ablation are commonly used for{" "}
          <b>Pelvic Venous Disorders Treatment in Gurgaon</b> to close or remove
          malfunctioning veins. These procedures are done under local
          anesthesia, have shorter recovery times, and are highly effective in
          treating PCS.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <b>Surgical intervention:</b> Rarely needed but may be considered in
          severe cases where minimally invasive methods are not suitable.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Dr. Himanshu personalizes every treatment plan for{" "}
          <b> Pelvic Venous Disorders Treatment in Gurgaon</b> to provide
          maximum relief and improve long-term health. Contact us to discuss the
          best treatment option for you.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5">
          Causes and Risk Factors of Pelvic Venous Disorders
        </h3>

        <p className="text-gray-700 leading-relaxed mb-5">
          <b>Pelvic Venous Disorders</b> can develop due to:
        </p>

        <ul className="space-y-3">
          {[
            "Weak or damaged vein walls",
            "Hormonal changes, especially during pregnancy",
            "Prolonged standing or sitting",
            "Genetic predisposition to vein disorders",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed mt-5 mb-10">
          Understanding the cause of Pelvic Venous Disorders Treatment helps
          your doctor create a targeted treatment approach.
        </p>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* FAQ */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          FAQs
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
