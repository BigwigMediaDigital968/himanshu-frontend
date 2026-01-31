"use client";

import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import PopupForm from "../../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import FinalCTA from "../../components/CTA";
import FloatingContactActions from "../../components/ContactActions";
import ButtonFill from "../../components/Button";
import { ChevronRight } from "lucide-react";

const contentData = {
  pelvicVenous: {
    title: "Pelvic Venous Disorders",
    sections: [
      {
        heading: "What are Pelvic Venous Disorders?",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pelvic venous disorders are conditions caused by malfunctioning
              veins in the pelvic area, often leading to chronic pain and
              discomfort. One of the most common types of pelvic venous
              disorders is Pelvic Congestion Syndrome (PCS), which occurs when
              veins in the pelvis become dilated and fail to efficiently return
              blood to the heart.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pelvic venous disorders are more commonly seen in women,
              especially those experiencing chronic pelvic pain. Early
              consultation with a specialist can help manage symptoms and
              prevent complications. Book your consultation with Dr. Himanshu
              today.
            </p>
          </>
        ),
      },
      {
        heading: "Symptoms of Pelvic Venous Disorders",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Recognizing the signs of pelvic venous disorders is crucial for
              timely intervention. Common symptoms include:
            </p>
            <ul className="space-y-3 mb-4">
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
              Many individuals with pelvic venous disorders also experience
              fatigue or discomfort that affects daily activities. If you notice
              any of these symptoms, do not ignore them. Schedule a check-up
              with an experienced vascular surgeon.
            </p>
          </>
        ),
      },
      {
        heading: "How Do I Know If I Have Pelvic Venous Disorders?",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Diagnosis involves a thorough evaluation and specialized imaging
              to confirm pelvic venous disorders or PCS. The process typically
              includes:
            </p>
            <ul className="space-y-3 mb-4">
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
            <p className="text-gray-700 leading-relaxed">
              Early detection can prevent complications and help plan effective
              treatment. If you suspect pelvic venous disorders, getting
              evaluated by a specialist is the best step.
            </p>
          </>
        ),
      },
      {
        heading: "How is Pelvic Venous Disorders Treated?",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Treatment focuses on relieving symptoms and improving vein
              function. Options include:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                "Lifestyle and supportive care: Regular exercise, avoiding prolonged sitting, and managing pain",
                "Minimally invasive procedures: Endovascular treatments like embolization or ablation are used to close or remove malfunctioning veins. These procedures are done under local anesthesia, have shorter recovery times, and are highly effective in treating PCS",
                "Surgical intervention: Rarely needed but may be considered in severe cases where minimally invasive methods are not suitable",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Dr. Himanshu personalizes every treatment plan to provide maximum
              relief and improve long-term health. Contact us to discuss the
              best treatment option for you.
            </p>
          </>
        ),
      },
      {
        heading: "Causes and Risk Factors of Pelvic Venous Disorders",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pelvic venous disorders can develop due to:
            </p>
            <ul className="space-y-3 mb-4">
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
            <p className="text-gray-700 leading-relaxed">
              Understanding the cause helps your doctor create a targeted
              treatment approach.
            </p>
          </>
        ),
      },
      {
        heading: "FAQs",
        isFaq: true,
        faqs: [
          {
            q: "How are pelvic venous disorders diagnosed?",
            a: "Through physical exams and imaging tests such as ultrasound, CT scan, MRI, or venography.",
          },
          {
            q: "What causes pelvic venous disorders?",
            a: "They are caused by weakened veins, hormonal changes, genetics, or prolonged pressure on pelvic veins.",
          },
          {
            q: "Can pelvic venous disorders be prevented?",
            a: "Maintaining a healthy lifestyle, regular exercise, and avoiding prolonged sitting or standing can help reduce risk.",
          },
          {
            q: "Are pelvic venous disorders painful?",
            a: "Yes, symptoms can range from mild discomfort to severe pelvic pain, especially after standing for long periods.",
          },
          {
            q: "Is treatment for pelvic venous disorders effective?",
            a: "Yes, with early diagnosis and proper intervention, patients experience significant symptom relief and improved quality of life.",
          },
        ],
      },
    ],
  },
  gonadalVein: {
    title: "Gonadal Vein Disease",
    sections: [
      {
        heading: "What is Gonadal Vein Disease?",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Gonadal vein disease involves the abnormal functioning of the
              gonadal veins (ovarian veins in women, testicular veins in men),
              leading to reflux and dilation. This condition is a key
              contributor to chronic pelvic pain and can significantly impact
              quality of life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Often associated with pelvic congestion syndrome, gonadal vein
              disease results in blood pooling in the pelvis rather than flowing
              efficiently back to the heart.
            </p>
          </>
        ),
      },
      {
        heading: "Symptoms",
        content: (
          <ul className="space-y-3 mb-4">
            {[
              "Chronic dull ache in the pelvis",
              "Pain worsening during the day, especially with standing",
              "Visible varicose veins in the genital area",
              "Discomfort during menstruation or intercourse",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--med-primary)] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ),
      },
      {
        heading: "Diagnosis & Treatment",
        content: (
          <>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Diagnosis is confirmed via ultrasound, CT/MRI venography, or
              catheter venography.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Treatment often involves minimally invasive embolization
              techniques to close the faulty veins, redirecting blood flow to
              healthy vessels and relieving symptoms.
            </p>
          </>
        ),
      },
    ],
  },
};

export default function PelvicVenousDisorder() {
  const [openPopup, setOpenPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<"pelvicVenous" | "gonadalVein">(
    "pelvicVenous",
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const activeContent = contentData[activeTab];

  return (
    <>
      <title>
        Pelvic Venous Disorders & Gonadal Vein Disease | Dr. Himanshu Verma
      </title>
      <meta
        name="title"
        content="Pelvic Venous Disorders & Gonadal Vein Disease | Dr. Himanshu Verma"
      />
      <meta
        name="description"
        content="Advanced diagnosis and treatment of pelvic congestion syndrome and gonadal vein disorders causing chronic pelvic pain. Expert care by Dr. Himanshu Verma."
      />
      <link
        rel="canonical"
        href="https://www.drhimanshuverma.com/services/pelvic-venous-disorder"
      />

      <div className="bg-[var(--med-light)]">
        <Nav />

        {/* HERO / INTRO */}
        <section className="py-16 bg-[#64bab4] rounded-b-3xl md:rounded-r-full md:rounded-bl-none">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
              Specialized Service
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pelvic Venous Disorders & Gonadal Vein Disease
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Advanced diagnosis and treatment of pelvic congestion syndrome and
              gonadal vein disorders causing chronic pelvic pain. We offer
              comprehensive management using minimally invasive techniques.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT WITH SIDEBAR */}
        <section className="py-16">
          <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
              <div className="bg-white rounded-3xl p-6 border border-[var(--med-border)] shadow-md">
                <h3 className="text-xl font-semibold text-[var(--med-primary)] mb-6 px-2">
                  Select Condition
                </h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setActiveTab("pelvicVenous")}
                    className={`
                      text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group
                      ${
                        activeTab === "pelvicVenous"
                          ? "bg-[var(--med-primary)] text-white shadow-lg"
                          : "bg-[var(--med-light)] text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                      }
                    `}
                  >
                    <span className="font-medium">Pelvic Venous Disorders</span>
                    {activeTab === "pelvicVenous" && <ChevronRight size={20} />}
                  </button>

                  <button
                    onClick={() => setActiveTab("gonadalVein")}
                    className={`
                      text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group
                      ${
                        activeTab === "gonadalVein"
                          ? "bg-[var(--med-primary)] text-white shadow-lg"
                          : "bg-[var(--med-light)] text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                      }
                    `}
                  >
                    <span className="font-medium">Gonadal Vein Disease</span>
                    {activeTab === "gonadalVein" && <ChevronRight size={20} />}
                  </button>
                </div>

                {/* Sidebar CTA */}
                <div className="mt-8 bg-[var(--med-light)] rounded-2xl p-6 border border-[var(--med-border)]">
                  <h4 className="font-semibold text-[var(--med-primary)] mb-2">
                    Need Expert Advice?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Dr. Himanshu Verma specializes in treating complex pelvic
                    venous conditions.
                  </p>
                  <ButtonFill
                    onClick={() => setOpenPopup(true)}
                    text="Book Consultation"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </aside>

            {/* CONTENT AREA */}
            <div className="lg:col-span-8">
              <div
                key={activeTab} // Force re-render animation
                data-aos="fade-up"
                className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--med-border)] shadow-lg"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] mb-8">
                  {activeContent.title}
                </h2>

                <div className="space-y-10">
                  {activeContent.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                        {section.heading}
                      </h3>

                      {section.isFaq ? (
                        <div className="space-y-6 mt-6">
                          {/* @ts-ignore */}
                          {section.faqs.map((faq, fIdx) => (
                            <div
                              key={fIdx}
                              className="bg-[var(--med-light)] p-5 rounded-2xl border border-[var(--med-border)]"
                            >
                              <h4 className="font-semibold text-[var(--med-primary)] mb-2 text-lg">
                                {faq.q}
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        section.content
                      )}

                      {idx !== activeContent.sections.length - 1 && (
                        <div className="h-px bg-gray-100 mt-10" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                  <ButtonFill
                    onClick={() => setOpenPopup(true)}
                    text="Schedule an Appointment"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
        <FloatingContactActions />
      </div>
    </>
  );
}
