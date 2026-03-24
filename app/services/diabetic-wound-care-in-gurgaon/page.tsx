import ServiceLayout from "../components/ServiceLayout";
import WoundContent from "./WoundContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/diabetic-wound-care-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

/* ================= META ================= */
export const metadata: Metadata = {
  title: "Diabetic Wound Care in Gurgaon",
  description:
    "Get expert Diabetic Wound Care in Gurgaon by Dr. Himanshu Verma. Advanced wound care, infection control, and specialized dressings for faster healing.",
  keywords: [
    "Diabetic Wound Care in Gurgaon",
    "diabetic wound treatment Gurgaon",
    "diabetic foot wound care Gurgaon",
    "diabetic ulcer treatment Gurgaon",
    "wound care specialist Gurgaon",
    "diabetic foot care Gurgaon",
    "Dr Himanshu Verma wound care",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Diabetic Wound Care in Gurgaon | Advanced Wound Healing | Dr. Himanshu Verma",
    description:
      "Expert diabetic wound care with infection control, advanced dressings, and faster healing outcomes.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Diabetic Wound Care in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diabetic Wound Care in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced diabetic wound care, infection control, and faster healing solutions.",
    images: [OG_IMAGE],
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
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

/* ================= PAGE ================= */
export default function DiabeticWoundCarePage() {
  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Diabetic Wound Care in Gurgaon",
                description:
                  "Expert diabetic wound care, infection control, and advanced dressings for faster healing.",
                inLanguage: "en-IN",
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
                    name: "Diabetic Wound Care",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= MEDICAL BUSINESS ================= */
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

              /* ================= PHYSICIAN ================= */
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@type": "MedicalBusiness",
                  name: "Dr. Himanshu Verma Clinic",
                },
              },

              /* ================= MEDICAL PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Diabetic Wound Care",
                procedureType: "Wound Management",
                bodyLocation: "Feet and Lower Limbs",
                howPerformed:
                  "Includes wound cleaning, debridement, infection control, advanced dressings, and circulation management for diabetic patients.",
              },

              /* ================= FAQ SCHEMA ================= */
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the best diabetic wound care in Gurgaon?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The best diabetic wound care includes proper cleaning, removal of dead tissue, infection control, suitable dressings, and blood sugar management.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best dressing for a diabetic wound?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Dressings depend on wound type, depth, and infection risk. Moisture-retaining and antimicrobial dressings are commonly used.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does a diabetic wound take to heal?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Healing time varies. Mild wounds may heal in weeks, while deeper ulcers take longer depending on circulation and sugar control.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can diabetic wounds heal on their own?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Some minor wounds may heal slowly, but without proper care, the risk of infection and complications increases significantly.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I prevent diabetic foot wounds?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Daily foot inspection, good sugar control, proper footwear, and regular medical checkups help prevent diabetic wounds.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ✅ PAGE LAYOUT */}
      <ServiceLayout
        title="Diabetic Wound Care in Gurgaon"
        description="Get expert Diabetic Wound Care in Gurgaon by Dr. Himanshu Verma. Advanced wound care, infection control, and specialized dressings for faster healing."
      >
        <WoundContent />
      </ServiceLayout>
    </>
  );
}
