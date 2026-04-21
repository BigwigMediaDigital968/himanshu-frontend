"use client";

import React, { useState } from "react";

/**
 * Interface for FAQ Item
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ Data extracted from the provided Schema
 */
const faqData: FAQItem[] = [
  {
    question: "What is vascular surgery and when is it needed?",
    answer:
      "Vascular surgery is a medical specialty that treats diseases of the blood vessels, arteries, veins, and lymphatic system, outside of the heart and brain. It is needed when conditions like blocked arteries, varicose veins, aneurysms, blood clots, or diabetic foot complications affect blood flow and cannot be managed with medication alone. Both open surgical and minimally invasive endovascular techniques are used depending on the condition.",
  },
  {
    question:
      "What is the difference between vascular surgery and endovascular surgery?",
    answer:
      "Vascular surgery involves traditional open surgical procedures to repair or bypass damaged blood vessels. Endovascular surgery is a minimally invasive approach where the surgeon works through small incisions using catheters, stents, or grafts guided by imaging. Endovascular procedures typically result in less pain, shorter hospital stays, and faster recovery compared to open surgery.",
  },
  {
    question: "Who is Dr. Himanshu Verma and what is his specialisation?",
    answer:
      "Dr. Himanshu Verma is a Vascular and Endovascular Surgeon based in Gurugram, Haryana. He practices at Fortis Memorial Research Centre, Sector 44, Gurugram, and specialises in advanced, evidence-based vascular care including minimally invasive treatments for varicose veins, AV fistula, peripheral artery disease, diabetic foot, deep vein thrombosis, aortic aneurysm, and more. He is known for combining surgical expertise with a patient-first approach.",
  },
  {
    question: "What services does Dr. Himanshu Verma offer?",
    answer:
      "Dr. Himanshu Verma offers a comprehensive range of vascular and endovascular services including: Varicose Veins Treatment, Chronic Venous Insufficiency, AV Fistula Creation and Care, Dialysis Access, Peripheral Artery Disease (PAD) Treatment, Diabetic Foot Management, Wound Care, Deep Vein Thrombosis (DVT) Treatment, Pulmonary Embolism Management, Abdominal Aortic Aneurysm Repair, Limb Salvage Surgery, Amputation Surgery, Lymphatic Care, Pelvic Venous Disorders, Onco Vascular Surgery, and Arteriovenous Malformation Treatment.",
  },
  {
    question: "What is an AV Fistula and why is it created?",
    answer:
      "An AV (Arteriovenous) Fistula is a surgically created connection between an artery and a vein, most commonly in the forearm or upper arm. It is primarily created for patients with chronic kidney disease who require regular haemodialysis. The fistula allows large volumes of blood to be drawn out, cleaned by the dialysis machine, and returned efficiently. It is considered the gold standard for dialysis access due to its durability, lower infection risk, and better long-term outcomes compared to grafts or catheters.",
  },
  {
    question:
      "What are the treatment options for varicose veins available at Dr. Himanshu Verma's clinic?",
    answer:
      "Dr. Himanshu Verma offers advanced, minimally invasive treatments for varicose veins including Laser Ablation (EVLA), Radiofrequency Ablation (RFA), Sclerotherapy, and VenaSeal. These procedures are performed as day-care treatments with no general anaesthesia required in most cases, minimal downtime, and significantly less pain compared to traditional vein stripping surgery.",
  },
  {
    question:
      "Where is Dr. Himanshu Verma's clinic located and how can I book an appointment?",
    answer:
      "Dr. Himanshu Verma practices at Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44, Gurugram, Haryana 122003. To book an appointment, you can call or WhatsApp at +91 88268 33598, or email at varenyamvascular@gmail.com. You can also request a callback directly through the website at drhimanshuverma.com.",
  },
  {
    question:
      "Is Dr. Himanshu Verma available for consultations in Delhi or other cities?",
    answer:
      "Yes, in addition to his primary practice in Gurugram, Dr. Himanshu Verma is available for vascular surgery consultations in Delhi and Varanasi. Patients from across NCR and other regions can book appointments through the website or contact the clinic directly at +91 88268 33598 to confirm availability.",
  },
];

const ServiceFaqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 bg-[var(--med-light)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-[var(--med-text)]">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[var(--med-primary)] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--med-border)] rounded-lg bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-[var(--med-text)] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--med-primary)] transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-[var(--med-text)] leading-relaxed border-t border-[var(--med-border)] bg-white animate-fadeIn">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;
