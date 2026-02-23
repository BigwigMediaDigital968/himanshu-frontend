import ServiceLayout2 from "../components/ServiceLayout2";
import CentralVenousContent from "./CentralVenousContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/central-venous-catheter-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Central Venous Catheter Placement in Gurgaon | PICC & Port Specialist | Dr. Himanshu Verma",
  description:
    "Expert central venous catheter placement in Gurgaon including PICC lines, chemo ports, dialysis catheters and venous angioplasty by Dr. Himanshu Verma.",
  keywords: [
    "central venous catheter treatment Gurgaon",
    "central line placement Gurgaon",
    "PICC line insertion Gurgaon",
    "chemo port placement Gurgaon",
    "dialysis catheter specialist",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Central Venous Catheter Placement in Gurgaon | Dr. Himanshu Verma",
    description:
      "Safe and advanced PICC line, chemo port, and dialysis catheter placement with expert vascular care.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Central Venous Catheter Placement in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Central Venous Catheter Placement in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced central line, PICC and chemo port placement with minimally invasive techniques.",
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

export default function CentralVenousCarePage() {
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
                name: "Central Venous Catheter Placement",
                procedureType: "Minimally Invasive Vascular Procedure",
                bodyLocation: "Central Veins",
                howPerformed:
                  "Procedure includes ultrasound-guided PICC line insertion, chemo port placement, dialysis catheter insertion and venous angioplasty when required.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout2
        title="Central Venous Care"
        description="Advanced central line placement and vascular intervention treatments."
        active="venouscare"
      >
        <CentralVenousContent />
      </ServiceLayout2>
    </>
  );
}
