import ServiceLayout2 from "../components/ServiceLayout2";
import AVFistulaContent from "./AVFistulaContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/av-fistula-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "AV Fistula Treatment in Gurgaon | Dialysis Access Specialist | Dr. Himanshu Verma",
  description:
    "Expert AV Fistula Treatment in Gurgaon for safe, durable and long-term dialysis access by Dr. Himanshu Verma, vascular surgeon.",
  keywords: [
    "AV fistula treatment in Gurgaon",
    "AV fistula surgery in Gurgaon",
    "AV fistula surgeon Gurgaon",
    "dialysis access specialist",
    "hemodialysis vascular access",
    "arteriovenous fistula creation",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Gold standard vascular access procedure for long-term dialysis patients performed with precision and safety.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AV Fistula Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Specialized arteriovenous fistula creation for reliable dialysis access.",
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

export default function AVFistulaPage() {
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
                name: "Arteriovenous (AV) Fistula Creation",
                procedureType: "Vascular Surgical Procedure",
                bodyLocation: "Upper Limb Arteries and Veins",
                howPerformed:
                  "Surgical connection of an artery to a vein to create durable and high-flow access for long-term hemodialysis.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout2
        title="AV Fistula"
        description="Gold standard vascular access for safe and long-term dialysis."
        active="avfistula"
      >
        <AVFistulaContent />
      </ServiceLayout2>
    </>
  );
}
