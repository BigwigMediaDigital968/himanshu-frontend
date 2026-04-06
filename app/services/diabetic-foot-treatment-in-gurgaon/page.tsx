import ServiceLayout from "../components/ServiceLayout";
import DiabeticContent from "./DiabaticContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/diabetic-foot-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Diabetic Foot Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Expert diabetic foot treatment in Gurgaon by Dr. Himanshu Verma at Fortis. Advanced wound care & revascularization to prevent amputation. Book appointment today.",
  keywords: [
    "Diabetic Foot Treatment in Gurgaon",
    "diabetic foot specialist in Gurgaon",
    "diabetic foot care Gurgaon",
    "foot ulcer treatment Gurgaon",
    "diabetic neuropathy treatment",
    "Dr Himanshu Verma Gurgaon",
    "diabetic wound care Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Diabetic Foot Treatment in Gurgaon | Advanced Foot Care | Dr. Himanshu Verma",
    description:
      "Expert care for diabetic foot ulcers, infections, and neuropathy with advanced treatment solutions in Gurgaon.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Diabetic Foot Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diabetic Foot Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced diabetic foot care including wound management, infection control, and circulation improvement.",
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

export default function DiabeticFootPage() {
  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* WEBPAGE */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Diabetic Foot Treatment in Gurgaon",
                description:
                  "Expert diabetic foot care in Gurgaon for ulcers, infections, and neuropathy.",
                inLanguage: "en-IN",
              },

              /* BREADCRUMB */
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
                    name: "Diabetic Foot Treatment",
                    item: PAGE_URL,
                  },
                ],
              },

              /* MEDICAL BUSINESS */
              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma - Vascular Surgeon",
                image: OG_IMAGE,
                url: PAGE_URL,
                telephone: "+91-8826833598",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  postalCode: "122001",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
                medicalSpecialty: "Vascular Surgery",
              },

              /* PHYSICIAN */
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@type": "MedicalBusiness",
                  name: "Dr. Himanshu Verma Clinic",
                },
              },

              /* MEDICAL CONDITION */
              {
                "@type": "MedicalCondition",
                name: "Diabetic Foot",
                description:
                  "A complication of diabetes causing nerve damage, poor circulation, and increased risk of foot ulcers and infections.",
              },

              /* FAQ SCHEMA */
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What are the first signs of Diabetic Foot?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Early signs of Diabetic Foot include numbness, tingling, mild pain, skin color changes, or small wounds that heal slowly. Consulting Dr. Himanshu Verma for Diabetic Foot Treatment in Gurgaon can help detect problems early.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the 5 main symptoms of diabetic neuropathy?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Numbness, burning pain, tingling, muscle weakness, and sensitivity to touch.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can Diabetic Foot be prevented?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Proper blood sugar control, daily foot checks, and early medical care significantly reduce Diabetic Foot risk. Preventive consultations for Diabetic Foot Treatment in Gurugram can also help detect early signs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When should I see a doctor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You should seek care from a diabetic foot specialist in Gurgaon if you notice pain, numbness, wounds, or infections that do not heal within a few days. Early Diabetic Foot Treatment in Gurgaon with Dr. Himanshu Verma can prevent complications.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Diabetic Foot treatment painful?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most Diabetic Foot treatments focus on comfort, wound healing, and preventing further damage, with minimal discomfort. Dr. Himanshu Verma offers Diabetic Foot Treatment in Gurgaon with a patient-focused approach to ensure effective and comfortable care.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Diabetic Foot Treatment in Gurgaon"
        description="Expert Diabetic Foot Treatment in Gurgaon by Dr. Himanshu Verma. Effective care for foot ulcers, infections, and diabetic complications."
      >
        <DiabeticContent />
      </ServiceLayout>
    </>
  );
}
