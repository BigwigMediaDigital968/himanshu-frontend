import ServiceLayout3 from "../components/ServiceLayout3";
import LymphaticCareContent from "./LymphaticCareContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/lymphatic-care-lymphedema-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Lymphedema Treatment in Gurgaon | Lymphatic Care | Dr. Himanshu Verma",
  description:
    "Advanced lymphatic care and lymphedema treatment in Gurgaon by Dr. Himanshu Verma. Effective management of chronic swelling with specialized vascular expertise.",
  keywords: [
    "lymphedema treatment in Gurgaon",
    "lymphatic care specialist Gurgaon",
    "chronic swelling treatment",
    "leg swelling vascular doctor",
    "lymphedema management specialist",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Lymphedema Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Comprehensive lymphatic care and advanced lymphedema treatment in Gurgaon for long-term swelling management.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lymphedema Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lymphedema Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Specialized lymphatic care and minimally invasive treatment for chronic swelling.",
    images: [OG_IMAGE],
    site: "@YourTwitterHandle", // 🔁 Replace if available
    creator: "@YourTwitterHandle", // 🔁 Replace if available
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

export default function LymphaticCarePage() {
  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
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
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Lymphedema Treatment",
                procedureType: "Specialized Vascular Care",
                bodyLocation: "Lymphatic System",
                howPerformed:
                  "Treatment includes clinical evaluation, compression therapy, lymphatic drainage techniques, and advanced vascular interventions where required.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout3
        title="Lymphatic Care"
        description="Comprehensive care for lymphedema and lymphatic disorders to reduce swelling and improve long-term limb health."
        active="lymphatic"
      >
        <LymphaticCareContent />
      </ServiceLayout3>
    </>
  );
}
