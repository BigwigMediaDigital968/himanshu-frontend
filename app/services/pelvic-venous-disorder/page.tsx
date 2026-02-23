import ServiceLayout from "../components/ServiceLayout1";
import PelvicContent from "./PelvicContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/pelvic-venous-disorder-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive treatment for pelvic venous disorders and pelvic congestion syndrome (PCS) by Dr. Himanshu Verma in Gurgaon.",
  keywords: [
    "pelvic venous disorders treatment",
    "pelvic congestion syndrome treatment",
    "PCS treatment Gurgaon",
    "pelvic vein embolization",
    "pelvic pain vascular specialist",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert minimally invasive treatment for Pelvic Congestion Syndrome (PCS) and pelvic venous disorders in Gurgaon.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pelvic Venous Disorders Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Minimally invasive pelvic vein embolization & PCS treatment in Gurgaon.",
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

export default function PelvicVenousDisorder() {
  return (
    <>
      {/* ✅ Structured Data Schema */}
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
                name: "Pelvic Venous Disorder Treatment",
                procedureType: "Minimally Invasive",
                bodyLocation: "Pelvic Veins",
                howPerformed:
                  "Treatment includes pelvic vein embolization under imaging guidance to relieve chronic pelvic pain.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Pelvic Venous Disorders"
        description="Advanced diagnosis and treatment of pelvic congestion syndrome and pelvic venous disorders."
        active="pelvic"
      >
        <PelvicContent />
      </ServiceLayout>
    </>
  );
}
