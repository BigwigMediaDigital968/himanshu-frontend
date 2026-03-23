import ServiceLayout from "../components/ServiceLayout";
import PeripheralArteryContent from "./PeriferalContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/peripheral-artery-disease-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Peripheral Artery Disease Treatment in Gurgaon",
  description:
    "Get Peripheral Artery Disease treatment in Gurgaon by Dr. Himanshu Verma. Expert diagnosis, angioplasty, stenting, and advanced vascular care.",
  keywords: [
    "Peripheral Artery Disease treatment in Gurgaon",
    "PAD treatment Gurgaon",
    "Peripheral arterial disease specialist Gurgaon",
    "vascular surgeon Gurgaon",
    "leg artery blockage treatment Gurgaon",
    "PAD angioplasty Gurgaon",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Peripheral Artery Disease Treatment in Gurgaon | PAD Specialist",
    description:
      "Expert diagnosis and treatment for Peripheral Artery Disease including angioplasty and vascular procedures.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Peripheral Artery Disease Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PAD Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced Peripheral Artery Disease treatment to restore blood flow and improve mobility.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PeripheralArteryPage() {
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
                name: "Peripheral Artery Disease",
                alternateName: "PAD",
                description:
                  "A circulatory condition where narrowed arteries reduce blood flow to the limbs, causing pain, mobility issues, and potential complications.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Leg pain while walking" },
                  { "@type": "MedicalSymptom", name: "Numbness in legs" },
                  { "@type": "MedicalSymptom", name: "Cold feet or legs" },
                  { "@type": "MedicalSymptom", name: "Slow healing wounds" },
                  { "@type": "MedicalSymptom", name: "Weak pulse in legs" },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Peripheral Artery Disease Treatment",
                procedureType: "Vascular Intervention",
                howPerformed:
                  "Treatment includes angioplasty, stenting, bypass surgery, and minimally invasive vascular procedures to restore blood flow.",
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Peripheral Artery Disease Treatment in Gurgaon",
                description:
                  "Advanced diagnosis and treatment for Peripheral Artery Disease in Gurgaon including angioplasty and vascular procedures.",
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
                    name: "Peripheral Artery Disease Treatment in Gurgaon",
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
                    name: "What are the symptoms of blocked arteries in the legs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pain while walking, numbness, cold feet, slow-healing wounds, and shiny skin are common symptoms.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How to test for Peripheral Artery Disease?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tests include Ankle-Brachial Index (ABI), Doppler ultrasound, and angiography.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the first symptom of PAD?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Intermittent leg pain while walking, known as claudication.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can PAD lead to heart problems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Peripheral Artery Disease increases the risk of heart attack and stroke.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is PAD reversible?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "While not fully reversible, lifestyle changes and treatment can significantly improve symptoms.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When should I seek treatment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Immediate consultation is recommended if you experience leg pain, wounds, or cold feet.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best treatment for blocked leg arteries?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Treatment depends on severity and may include angioplasty, medication, or bypass surgery.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Peripheral Artery Disease Treatment in Gurgaon"
        description="Advanced diagnosis and treatment for blocked arteries in legs including angioplasty, stenting, and bypass procedures."
      >
        <PeripheralArteryContent />
      </ServiceLayout>
    </>
  );
}
