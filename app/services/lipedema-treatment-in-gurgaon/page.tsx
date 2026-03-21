import ServiceLayout1 from "../components/ServiceLayout1";
import LipedemaContent from "./LipedemaContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/lipedema-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Lipedema Treatment in Gurgaon | Symptoms & Treatment",
  description:
    "Discover Lipedema Treatment in Gurgaon, its symptoms, causes, and treatments like MLD, compression therapy, and CDT to reduce swelling and pain.",
  keywords: [
    "Lipedema Treatment in Gurgaon",
    "lipedema symptoms",
    "lipedema causes",
    "lipedema stages",
    "lipedema therapy",
    "manual lymphatic drainage",
    "compression therapy for lipedema",
    "CDT therapy",
    "lipedema management",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Lipedema Treatment in Gurgaon | Symptoms & Treatment",
    description:
      "Discover Lipedema Treatment in Gurgaon, its symptoms, causes, and treatments like MLD, compression therapy, and CDT to reduce swelling and pain.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lipedema Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lipedema Treatment in Gurgaon | Symptoms & Treatment",
    description:
      "Expert Lipedema Treatment in Gurgaon — MLD, compression therapy, and CDT for swelling and pain relief.",
    images: [OG_IMAGE],
    site: "@drhimanshuverma",
    creator: "@drhimanshuverma",
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

export default function LipedemaPage() {
  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // ── MedicalBusiness ──────────────────────────────────────────
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

              // ── Physician ────────────────────────────────────────────────
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },

              // ── MedicalCondition ─────────────────────────────────────────
              {
                "@type": "MedicalCondition",
                name: "Lipedema",
                alternateName: "Lipoedema",
                description:
                  "A long-lasting and progressively severe disorder of fatty tissue that disproportionately accumulates in the legs, thighs, hips, and sometimes the arms, primarily affecting women and often having a genetic link.",
                signOrSymptom: [
                  {
                    "@type": "MedicalSymptom",
                    name: "Symmetrical swelling in the legs and arms",
                  },
                  {
                    "@type": "MedicalSymptom",
                    name: "Pain and tenderness in affected areas",
                  },
                  {
                    "@type": "MedicalSymptom",
                    name: "Easy and unexplained bruising",
                  },
                  {
                    "@type": "MedicalSymptom",
                    name: "Heaviness that worsens during the day",
                  },
                  {
                    "@type": "MedicalSymptom",
                    name: "Resistance to diet and exercise",
                  },
                ],
                possibleTreatment: [
                  {
                    "@type": "MedicalTherapy",
                    name: "Manual Lymphatic Drainage (MLD)",
                  },
                  {
                    "@type": "MedicalTherapy",
                    name: "Compression Garments",
                  },
                  {
                    "@type": "MedicalTherapy",
                    name: "Complete Decongestive Therapy (CDT)",
                  },
                ],
              },

              // ── WebPage ──────────────────────────────────────────────────
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Lipedema Treatment in Gurgaon | Symptoms & Treatment",
                description:
                  "Discover Lipedema Treatment in Gurgaon, its symptoms, causes, and treatments like MLD, compression therapy, and CDT to reduce swelling and pain.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@type": "WebSite",
                  url: "https://www.drhimanshuverma.com",
                  name: "Dr. Himanshu Verma",
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                  width: 1200,
                  height: 630,
                },
                breadcrumb: {
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
                      name: "Lipedema Treatment in Gurgaon",
                      item: PAGE_URL,
                    },
                  ],
                },
              },

              // ── FAQPage ──────────────────────────────────────────────────
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the main cause of lipedema?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The exact cause of lipedema is not fully known, but hormonal changes and genetic factors are considered the main contributors. Many people experiencing these symptoms consult specialists for Lipedema Treatment in Gurgaon for proper diagnosis and care.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is lipedema treated?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lipedema is commonly managed with Manual Lymphatic Drainage (MLD), compression therapy, and Complete Decongestive Therapy (CDT). Many clinics offering Lipedema Treatment in Gurgaon use these methods to help reduce swelling and improve comfort.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you know if you have lipedema?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Common signs include symmetrical swelling in the legs or arms, pain, easy bruising, and normal-sized hands and feet. If you notice these symptoms, consulting a specialist for Lipedema Treatment in Gurgaon can help confirm the diagnosis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can lipedema go away with weight loss?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, lipedema fat usually does not respond to diet or exercise. Patients often seek Lipedema Treatment in Gurgaon to manage symptoms and control swelling.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is lipedema painful?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, lipedema can cause pain, tenderness, and heaviness in the affected areas. With proper Lipedema Treatment in Gurgaon, these symptoms can often be managed effectively.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is lipedema different from obesity?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lipedema causes symmetrical fat buildup mainly in the legs and arms, while the hands and feet remain unaffected. Specialists providing Lipedema Treatment in Gurgaon can help differentiate lipedema from obesity and suggest the right Lipedema treatment approach.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout1
        title="Lipedema Treatment in Gurgaon"
        description="Comprehensive diagnosis and non-surgical management of lipedema through MLD, compression therapy, and CDT."
        active="lipedema-treatment"
      >
        <LipedemaContent />
      </ServiceLayout1>
    </>
  );
}
