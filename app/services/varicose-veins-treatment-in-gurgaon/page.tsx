import ServiceLayout from "../components/ServiceLayout";
import ServiceLayout3 from "../components/ServiceLayout3";
import VaricoseVeinsContent from "./VaricoseVeinsContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/varicose-veins-treatment-in-gurgaon`;
const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main causes of varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weak vein valves, genetics, prolonged standing, aging, pregnancy, and excess weight are the most common causes. These conditions often require professional evaluation and varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Are varicose veins a worry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can become a concern if pain, swelling, skin changes, or ulcers develop. Early evaluation and varicose veins treatment in Gurgaon help prevent complications.",
      },
    },
    {
      "@type": "Question",
      name: "Is walking good for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Walking improves blood circulation in the legs and reduces pressure in the veins, making it one of the best daily habits for vein health alongside proper varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins go away on their own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minor varicose veins may improve with lifestyle changes, but most require medical evaluation and varicose veins treatment in Gurgaon for long-term relief.",
      },
    },
    {
      "@type": "Question",
      name: "Is treatment for varicose veins painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most modern procedures used in varicose veins treatment in Gurgaon are minimally invasive and designed for patient comfort.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins cause serious health problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If untreated, they can lead to ulcers, blood clots, or chronic venous insufficiency, which is why timely varicose veins treatment in Gurgaon is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "How can I prevent varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular exercise, maintaining a healthy weight, avoiding prolonged standing or sitting, and wearing compression stockings can help reduce the risk and complement varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seek medical attention if you notice swelling, persistent pain, or skin changes around your veins. Early consultation ensures better outcomes and timely varicose veins treatment in Gurgaon.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Get minimally invasive varicose veins treatment in Gurgaon by Dr. Himanshu Verma at Fortis. Laser, RFA & quick recovery with minimal downtime. Book appointment today.",
  keywords: [
    "varicose veins treatment in Gurgaon",
    "varicose vein specialist in Gurgaon",
    "Dr Himanshu Verma vascular surgeon",
    "EVLT treatment for varicose veins",
    "foam sclerotherapy treatment",
    "medical glue varicose veins treatment",
    "spider veins treatment Gurgaon",
    "leg vein specialist Gurgaon",
    "minimally invasive varicose veins treatment",
    "chronic venous insufficiency treatment",
    "best varicose veins doctor in Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert minimally invasive varicose veins treatment in Gurgaon including EVLT, foam sclerotherapy & glue therapy.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Varicose Veins Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced minimally invasive treatment for varicose veins in Gurgaon.",
    images: [OG_IMAGE],
    // site: "@YourTwitterHandle",
    // creator: "@YourTwitterHandle",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function VaricoseVeinsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= WEBSITE ================= */
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: "Dr. Himanshu Verma",
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "Varicose Veins Treatment in Gurgaon",
                description:
                  "Advanced varicose veins treatment in Gurgaon including EVLT, sclerotherapy and glue therapy.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                },
              },

              /* ================= BREADCRUMB ================= */
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: `${SITE_URL}/services`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Varicose Veins Treatment in Gurgaon",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= BUSINESS ================= */
              {
                "@type": "MedicalBusiness",
                "@id": `${SITE_URL}/#clinic`,
                name: "Dr Himanshu Verma Vascular Clinic",
                image: OG_IMAGE,
                url: SITE_URL,
                telephone: "+91-8826833598",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Fortis Memorial Research Centre, Sector 44",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122003",
                  addressCountry: "IN",
                },
                areaServed: ["Gurugram", "Delhi NCR"],
              },

              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma – Varicose Vein Specialist, Gurgaon",
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                telephone: "+91-88268 33598",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: "12",
                  reviewCount: "12",
                },
                review: [
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Bhavna Bansal" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Dr. Himanshu Verma is not just an exceptional vascular surgeon but also a doctor who truly cares for his patients. He takes the time to explain every detail, listens patiently, and ensures you feel supported throughout recovery. A truly compassionate doctor who treats you like family.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "K A D" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "I was suffering from severe leg pain due to varicose veins. After laser surgery, the pain relief was almost immediate. The swelling reduced quickly and I recovered much faster than expected. Dr. Himanshu Verma is one of the best vascular surgeons in India for varicose vein treatment — highly skilled and explains everything clearly.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Kamal Kanoujiya" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "I was very tense about the branch-shaped veins on my legs. After consulting Dr. Himanshu, all my worries were relieved. He explained everything clearly and made me feel comfortable throughout. I highly recommend him as one of the best vascular surgeons.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Kiran Negi" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "My leg pain and bulging vein have significantly improved following my appointment with Dr. Himanshu Verma. The compression stockings he advised are very helpful during long-term duties. Thank you so much, sir.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Lokanagadatta Beluguri",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "After my consultation, the pain in my legs and the enlarged veins have reduced a lot. The stockings Dr. Verma advised are very helpful, especially during long hours of standing. I am truly satisfied with the treatment. Best vascular surgeon.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Gauransh Saxena" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "My bulging vein and leg pain have significantly decreased since my appointment with Dr. Himanshu Verma. The compression stocking is really useful for my long-term responsibilities. Top vascular surgeon.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Raghvendra Singh Rajpoot",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "What really impressed me was Dr. Himanshu's direct approach — he did not suggest unnecessary tests, drugs, or therapies. He simply clarified what was actually necessary. Gurgaon's top vascular surgeon.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Harshith Goud" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "After my consultation with Dr. Himanshu Verma, both my leg pain and enlarged veins have really reduced. The compression stocking is very helpful during long standing duties. Best vascular surgeon.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Harshita Kanodia" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "I strongly recommend Dr. Himanshu Verma to anyone with vascular problems. His commitment to his patients' well-being and expertise in his field make him the finest vascular surgeon.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Kamal Madaan" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Very good experience. One of the best vascular surgeons with a golden heart. His proficiency and helping nature make him an exceptional person. If anyone is suffering from varicose veins or vascular issues, consult Dr. Himanshu Verma without any doubt.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Patient Review" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Dr. Himanshu Verma is very patient and professional. He listened attentively to all my concerns and took the time to explain my diagnosis and treatment options clearly. The staff was wonderful and I am so grateful for the outstanding care I received.",
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Anonymous Patient" },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Dr. Himanshu Verma is one of the best vascular surgeons in India for varicose vein treatment. He is highly skilled, very humble, and explains everything clearly. I strongly recommend him to anyone looking for the best doctor for varicose veins.",
                  },
                ],
              },

              /* ================= DOCTOR ================= */
              {
                "@type": "Physician",
                "@id": `${SITE_URL}/#doctor`,
                name: "Dr Himanshu Verma",
                jobTitle: "Vascular Surgeon",
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@id": `${SITE_URL}/#clinic`,
                },
              },

              /* ================= CONDITION ================= */
              {
                "@type": "MedicalCondition",
                name: "Varicose Veins",
                alternateName: "Chronic Venous Insufficiency",
                description:
                  "A condition where veins become enlarged and twisted due to faulty valves, causing pain, swelling, and circulation issues.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Bulging veins in legs" },
                  { "@type": "MedicalSymptom", name: "Leg pain or heaviness" },
                  { "@type": "MedicalSymptom", name: "Swelling in legs" },
                  { "@type": "MedicalSymptom", name: "Skin discoloration" },
                  { "@type": "MedicalSymptom", name: "Ulcers near ankles" },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Varicose Veins Treatment",
                procedureType: "Minimally Invasive",
                bodyLocation: "Leg Veins",
                howPerformed:
                  "Performed using EVLT (laser), foam sclerotherapy, or medical glue under ultrasound guidance.",
                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              {
                "@type": "MedicalProcedure",
                "@id":
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon#evlt",
                name: "Endovenous Laser Treatment (EVLT)",
                alternateName: "Laser Surgery for Varicose Veins",
                description:
                  "A laser fibre is inserted into the damaged vein under local anaesthesia, delivering heat that seals the vein permanently.",
                procedureType: "PercutaneousProcedure",
                bodyLocation: "Great saphenous vein, lower legs",
                image:
                  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
                mainEntityOfPage: {
                  "@id":
                    "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                },
                preparation:
                  "Local tumescent anaesthesia; no hospital stay required.",
                howPerformed:
                  "Laser fibre is inserted under ultrasound guidance and heat is applied to seal the vein.",
                followup:
                  "Return to normal activity within 1–2 days. Compression stockings recommended.",
                provider: {
                  "@id": "https://www.drhimanshuverma.com/#doctor",
                },
                availableAtOrFrom: {
                  "@id": "https://www.drhimanshuverma.com/#clinic",
                },
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
              },

              {
                "@type": "MedicalProcedure",
                "@id":
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon#rfa",
                name: "Radiofrequency Ablation (RFA)",
                alternateName: "RF Ablation for Varicose Veins",
                description:
                  "Radiofrequency energy is used to heat and seal the vein.",
                procedureType: "PercutaneousProcedure",
                bodyLocation: "Saphenous veins, lower extremities",
                image:
                  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
                mainEntityOfPage: {
                  "@id":
                    "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                },
                preparation: "Local anaesthesia; day-care procedure.",
                howPerformed:
                  "A catheter delivers radiofrequency energy to close the vein.",
                followup:
                  "Same-day discharge. Resume normal activity within 1–2 days.",
                provider: {
                  "@id": "https://www.drhimanshuverma.com/#doctor",
                },
                availableAtOrFrom: {
                  "@id": "https://www.drhimanshuverma.com/#clinic",
                },
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
              },

              {
                "@type": "MedicalProcedure",
                "@id":
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon#medical-glue",
                name: "Medical Glue Closure (Cyanoacrylate Closure)",
                alternateName: "VenaSeal Treatment",
                description:
                  "Medical adhesive is injected into the vein to seal it without anaesthesia.",
                procedureType: "PercutaneousProcedure",
                bodyLocation: "Great and small saphenous veins",
                image:
                  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
                mainEntityOfPage: {
                  "@id":
                    "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                },
                preparation: "No anaesthesia required.",
                howPerformed: "A catheter delivers adhesive along the vein.",
                followup: "Immediate return to normal activity.",
                provider: {
                  "@id": "https://www.drhimanshuverma.com/#doctor",
                },
                availableAtOrFrom: {
                  "@id": "https://www.drhimanshuverma.com/#clinic",
                },
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
              },

              {
                "@type": "MedicalProcedure",
                "@id":
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon#foam-sclerotherapy",
                name: "Foam Sclerotherapy",
                alternateName: "Injection Treatment for Varicose Veins",
                description:
                  "A foam solution is injected into veins causing them to shrink and close.",
                procedureType: "NoninvasiveProcedure",
                bodyLocation: "Spider veins, lower legs",
                image:
                  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
                mainEntityOfPage: {
                  "@id":
                    "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                },
                preparation: "No anaesthesia required.",
                howPerformed: "Foam sclerosant is injected into the vein.",
                followup: "Compression stockings recommended.",
                provider: {
                  "@id": "https://www.drhimanshuverma.com/#doctor",
                },
                availableAtOrFrom: {
                  "@id": "https://www.drhimanshuverma.com/#clinic",
                },
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
              },

              {
                "@type": "MedicalProcedure",
                "@id":
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon#microphlebectomy",
                name: "Microphlebectomy",
                alternateName: "Ambulatory Phlebectomy",
                description:
                  "Varicose veins are removed through tiny punctures.",
                procedureType: "PercutaneousProcedure",
                bodyLocation: "Superficial veins, lower legs",
                image:
                  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
                mainEntityOfPage: {
                  "@id":
                    "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
                },
                preparation: "Local anaesthesia used.",
                howPerformed: "Small punctures are made to remove veins.",
                followup: "Resume activities within 2–3 days.",
                provider: {
                  "@id": "https://www.drhimanshuverma.com/#doctor",
                },
                availableAtOrFrom: {
                  "@id": "https://www.drhimanshuverma.com/#clinic",
                },
                url: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",
              },

              /* ================= FAQ ================= */
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: faqSchema.mainEntity,
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma"
        description="Advanced diagnosis and minimally invasive treatment options for varicose veins, spider veins, and chronic venous disorders. Medically reviewed by Dr. Himanshu Verma - MCh Vascular Surgery | Director, Fortis FMRI | Member, Vascular Society of India | Last updated: May 2025"
      >
        <VaricoseVeinsContent />
      </ServiceLayout>
    </>
  );
}
