import ServiceLayout from "../components/ServiceLayout";
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
      "name": "Is varicose vein treatment covered by insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most minimally invasive procedures for symptomatic varicose veins — including EVLT and RFA — are covered under major health insurance plans in India, including Mediclaim policies. Our team will help you verify coverage before your procedure."
      }
    },
    {
      "@type": "Question",
      "name": "How much does varicose veins treatment cost in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatment costs vary depending on the procedure, number of veins treated, and insurance coverage. During your consultation, Dr. Himanshu will provide a transparent, detailed cost estimate with no hidden charges. Contact us for a preliminary cost discussion."
      }
    },
    {
      "@type": "Question",
      "name": "What should I expect on my first visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your first visit includes a clinical examination, medical history review, and a Venous Doppler Ultrasound. The entire assessment takes approximately 60–90 minutes. You will leave with a clear diagnosis and personalized treatment plan."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the procedure take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most procedures are completed in 30–60 minutes under local anaesthesia, with same-day discharge. You will typically be able to walk out of the clinic unassisted."
      }
    },
    {
      "@type": "Question",
      "name": "Will the veins come back after treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treated veins are permanently sealed and do not return. However, new varicose veins can develop over time, particularly if underlying risk factors (obesity, prolonged standing) are not addressed. Lifestyle changes significantly reduce recurrence."
      }
    },
    {
      "@type": "Question",
      "name": "Is treatment painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern minimally invasive techniques involve very little discomfort. Most patients report only a mild sensation during the procedure and minimal soreness for 1–2 days afterward."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main causes of varicose veins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weak vein valves, genetics, prolonged standing, aging, pregnancy, and excess weight are the most common causes."
      }
    },
    {
      "@type": "Question",
      "name": "Are varicose veins dangerous if left untreated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Untreated varicose veins can progress to chronic venous insufficiency, venous ulcers, skin changes, and deep vein thrombosis (DVT) — a potentially serious clotting condition."
      }
    },
    {
      "@type": "Question",
      "name": "When should I see a doctor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seek evaluation if you notice persistent swelling, skin discolouration, aching that worsens through the day, or any visible veins causing discomfort. Early intervention always leads to better outcomes."
      }
    }
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

              {
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "@id": `${SITE_URL}/#clinic`,

                name: "Dr. Himanshu Verma – Varicose Vein Specialist, Gurgaon",

                description:
                  "Advanced varicose veins treatment in Gurgaon by Dr. Himanshu Verma, MCh Vascular Surgery, at Fortis Memorial Research Institute.",

                url:
                  "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon",

                image: OG_IMAGE,

                telephone: "+91-8826833598",

                priceRange: "₹₹₹",

                medicalSpecialty: "Vascular Surgery",

                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Fortis Memorial Research Institute, Sector 44",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122002",
                  addressCountry: "IN",
                },

                areaServed: [
                  {
                    "@type": "City",
                    name: "Gurugram",
                  },
                  {
                    "@type": "AdministrativeArea",
                    name: "Delhi NCR",
                  },
                ],

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
                    author: {
                      "@type": "Person",
                      name: "Bhavna Bansal",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Dr. Himanshu Verma is not just an exceptional vascular surgeon but also a doctor who truly cares for his patients. He takes the time to explain every detail and ensures patients feel supported throughout recovery.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "K A D",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "I was suffering from severe leg pain due to varicose veins. After laser surgery, the pain relief was almost immediate and recovery was much faster than expected.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Kamal Kanoujiya",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Dr. Himanshu Verma explained everything clearly and made me feel comfortable throughout the treatment process.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Kiran Negi",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "My leg pain and bulging veins improved significantly after consultation. The compression stockings advised were very helpful.",
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
                      "The pain in my legs and enlarged veins reduced considerably after treatment. I am very satisfied with the care received.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Gauransh Saxena",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "My bulging veins and leg pain have reduced significantly after consultation with Dr. Himanshu Verma.",
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
                      "What impressed me most was the honest and direct approach without suggesting unnecessary tests or medications.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Harshith Goud",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Both my leg pain and enlarged veins reduced considerably after consultation and treatment.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Harshita Kanodia",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "I strongly recommend Dr. Himanshu Verma for vascular problems due to his expertise and patient care.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Kamal Madaan",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Very good experience. Dr. Himanshu Verma is highly skilled, caring, and professional.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Patient Review",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Excellent care experience. The diagnosis and treatment options were explained very clearly.",
                  },
                  {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Anonymous Patient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody:
                      "Highly skilled and humble doctor for varicose vein treatment. Strongly recommended.",
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
        title="Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma - Fortis Hospital"
        description="This page has been written and reviewed by Dr. Himanshu Verma, MCh (Vascular Surgery), Vascular & Endovascular Surgeon, Fortis Memorial Research Institute, Gurgaon. Content is intended for informational purposes only and does not substitute professional medical consultation, diagnosis, or treatment. Always consult a qualified medical professional for individual advice. Last reviewed: May 2025"
      >
        <VaricoseVeinsContent />
      </ServiceLayout>
    </>
  );
}
