import ServiceLayout2 from "../components/ServiceLayout2";
import DialysisAccessContent from "./DialysisAccessContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/dialysis-access-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Dialysis Access Surgery in Gurgaon | AV Fistula Specialist | Dr. Himanshu Verma",
  description:
    "Expert dialysis access surgery in Gurgaon including AV fistula creation, AV graft, and dialysis catheter placement by Dr. Himanshu Verma.",
  keywords: [
    "dialysis access surgery in Gurgaon",
    "AV fistula surgeon Gurgaon",
    "AV graft surgery",
    "dialysis catheter placement",
    "vascular access specialist Gurgaon",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Dialysis Access Surgery in Gurgaon | Dr. Himanshu Verma",
    description:
      "Comprehensive vascular access solutions including AV fistula, graft, and catheter care in Gurgaon.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dialysis Access Surgery in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dialysis Access Surgery in Gurgaon | Dr. Himanshu Verma",
    description:
      "Safe and reliable AV fistula, graft, and catheter solutions for dialysis patients.",
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

export default function DialysisAccessPage() {
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
                name: "Dialysis Access Surgery",
                procedureType: "Surgical Vascular Access",
                bodyLocation: "Upper Limb Blood Vessels",
                howPerformed:
                  "Procedure includes AV fistula creation, AV graft placement, or tunneled dialysis catheter insertion to provide reliable hemodialysis access.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout2
        title="Dialysis Access"
        description="Safe and reliable vascular access solutions for dialysis patients."
        active="dialysisaccess"
      >
        <DialysisAccessContent />
      </ServiceLayout2>
    </>
  );
}
