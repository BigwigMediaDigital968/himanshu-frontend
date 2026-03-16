import ServiceLayout3 from "../components/ServiceLayout3";
import ChronicVenousContent from "./ChronicVenousContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/chronic-venous-insufficiency-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Chronic Venous Insufficiency in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive treatment for Chronic Venous Insufficiency (CVI) in Gurgaon. Effective care for leg swelling, pain, and venous ulcers by Dr. Himanshu Verma.",
  keywords: [
    "chronic venous insufficiency treatment Gurgaon",
    "CVI treatment Gurgaon",
    "leg swelling treatment Gurgaon",
    "venous ulcer treatment",
    "vein specialist Gurgaon",
    "Dr Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert care for CVI including treatment for leg swelling, venous ulcers and vein reflux disorders.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Chronic Venous Insufficiency Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",
    description: "Advanced CVI treatment for swelling, pain and venous ulcers.",
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

export default function ChronicVenousPage() {
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
                name: "Chronic Venous Insufficiency Treatment",
                procedureType: "Minimally Invasive Vein Treatment",
                bodyLocation: "Lower Limb Veins",
                howPerformed:
                  "Treatment includes ultrasound evaluation, endovenous ablation, compression therapy, and advanced wound care for venous ulcers.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout3
        title="Chronic Venous Insufficiency"
        description="Expert diagnosis and personalized treatment for leg swelling, venous ulcers, and chronic venous insufficiency."
        active="chronic"
      >
        <ChronicVenousContent />
      </ServiceLayout3>
    </>
  );
}
