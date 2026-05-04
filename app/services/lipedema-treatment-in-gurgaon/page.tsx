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
                "name": "Dr. Himanshu Verma",
                "description": "Dr. Himanshu Verma is the Director of Vascular and Endovascular Surgery at Fortis FMRI, Gurgaon, with over 17 years of clinical experience in managing complex arterial, venous, lymphatic, and dialysis-access disorders including Lipedema and Lymphedema.",
                "medicalSpecialty": [
                  "Vascular Surgery",
                  "Endovascular Surgery",
                  "Lymphatic Care",
                  "Lipedema Treatment"
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "MBBS"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "MS"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "degree",
                    "name": "MCh (Vascular Surgery)"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "certification",
                    "name": "FEVS (Fellow of European Board of Vascular Surgery)"
                  }
                ],
                "jobTitle": "Director, Vascular and Endovascular Surgery",
                "worksFor": {
                  "@type": "Hospital",
                  "name": "Fortis FMRI",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sector 44",
                    "addressLocality": "Gurgaon",
                    "addressRegion": "Haryana",
                    "postalCode": "122002",
                    "addressCountry": "IN"
                  }
                },
                "url": "https://www.drhimanshuverma.com",
                "sameAs": [
                  "https://www.fortishealthcare.com/doctors/dr-himanshu-verma"
                ]
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
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.drhimanshuverma.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://www.drhimanshuverma.com/services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Lipedema Treatment in Gurgaon",
                      "item": "https://www.drhimanshuverma.com/services/lymphatic-care-treatment-in-gurgaon"
                    }
                  ],
                },
              },

              // ── FAQPage ──────────────────────────────────────────────────
              {
                "@type": "FAQPage",
                "@id": PAGE_URL + "#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the main cause of Lipedema?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hormonal changes during puberty, pregnancy, and menopause, combined with genetic predisposition and lymphatic dysfunction, are the primary contributing factors. It is not caused by diet or lifestyle."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Lipedema treated?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lipedema is treated through a structured combination of Manual Lymphatic Drainage (MLD), Complete Decongestive Therapy (CDT), and custom compression garment therapy."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I know if I have Lipedema?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Key indicators include symmetrical leg or arm swelling with normal-sized hands and feet, persistent pain, easy bruising, and fat that does not respond to diet or exercise."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Lipedema go away with weight loss?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Lipedema fat is physiologically different from ordinary body fat and does not respond to caloric restriction or exercise."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Lipedema painful?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Pain, tenderness, and heaviness in affected areas are hallmark symptoms of Lipedema."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Lipedema different from obesity?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lipedema causes symmetrical fat buildup in the legs and arms while leaving hands and feet unaffected, and it does not respond to weight loss unlike obesity."
                    }
                  }
                ]
              }],
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
