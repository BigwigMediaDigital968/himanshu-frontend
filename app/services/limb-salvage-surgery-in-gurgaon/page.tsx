import ServiceLayout from "../components/ServiceLayout";
import LimbSalvageContent from "./LimbContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/limb-salvage-surgery-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Limb Salvage Surgery in Gurgaon | Dr. Himanshu Verma",
  description:
    "Avoid amputation with expert limb salvage surgery in Gurgaon by Dr. Himanshu Verma at Fortis. Advanced endovascular care for better recovery. Book consultation.",
  keywords: [
    "Limb salvage surgery in Gurgaon",
    "diabetic foot treatment Gurgaon",
    "vascular surgeon Gurgaon",
    "limb preservation surgery",
    "prevent amputation Gurgaon",
    "diabetic foot specialist Gurgaon",
    "trauma limb surgery Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Limb Salvage Surgery in Gurgaon | Save Limbs & Restore Mobility",
    description:
      "Advanced limb salvage procedures for diabetes, trauma, and vascular disease to avoid amputation and improve quality of life.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Limb Salvage Surgery in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Limb Salvage Surgery in Gurgaon | Dr. Himanshu Verma",
    description:
      "Save limbs with advanced vascular and diabetic foot care in Gurgaon.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LimbSalvagePage() {
  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= BUSINESS ================= */
              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma - Vascular Surgeon",
                image: OG_IMAGE,
                url: PAGE_URL,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
              },

              /* ================= DOCTOR ================= */
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },

              /* ================= CONDITION ================= */
              {
                "@type": "MedicalCondition",
                name: "Critical Limb Ischemia",
                description:
                  "A severe blockage in arteries that reduces blood flow to limbs and can lead to tissue damage or amputation if untreated.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Non-healing wounds" },
                  { "@type": "MedicalSymptom", name: "Severe limb pain" },
                  {
                    "@type": "MedicalSymptom",
                    name: "Infection in foot or leg",
                  },
                  {
                    "@type": "MedicalSymptom",
                    name: "Blackened or dead tissue",
                  },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Limb Salvage Surgery",
                procedureType: "Vascular & Reconstructive Surgery",
                howPerformed:
                  "Includes restoring blood flow, removing infected tissue, advanced wound care, and reconstructive procedures to save the limb and prevent amputation.",
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Limb Salvage Surgery in Gurgaon",
                description:
                  "Advanced limb salvage surgery in Gurgaon for diabetic foot, trauma, and vascular diseases to prevent amputation.",
                inLanguage: "en-IN",
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                },
              },

              /* ================= BREADCRUMB ================= */
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.drhimanshuverma.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.drhimanshuverma.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Limb Salvage Surgery in Gurgaon",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= FAQ ================= */
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a salvage surgery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Salvage surgery refers to procedures done to save a body part at risk of being lost. Limb salvage surgery aims to preserve an arm or leg.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who needs limb salvage surgery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Patients with severe infections, poor circulation, trauma, or diabetic complications may require limb salvage surgery.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is limb salvage better than amputation?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "In many cases, limb salvage is preferred because it preserves natural movement and independence.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does recovery take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Recovery depends on the condition and procedures involved. It may take weeks to months.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can limb salvage prevent amputation?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, when performed timely, limb salvage surgery can significantly reduce the risk of amputation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where can I get diabetic foot treatment in Gurgaon?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can consult Dr. Himanshu Verma for advanced diabetic foot treatment and limb salvage care in Gurgaon.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Limb Salvage Surgery in Gurgaon"
        description="Advanced limb preservation surgery for diabetic foot, trauma, and vascular conditions to prevent amputation and restore mobility."
      >
        <LimbSalvageContent />
      </ServiceLayout>
    </>
  );
}
