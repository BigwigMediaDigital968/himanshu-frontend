import ServiceLayout1 from "../components/ServiceLayout1";
import GonadalContent from "./GonadalContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/gonadal-vein-disease-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Gonadal Vein Disease Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive embolization treatment for ovarian and testicular vein reflux by Dr. Himanshu Verma in Gurgaon.",
  keywords: [
    "gonadal vein disease treatment",
    "ovarian vein reflux treatment",
    "testicular vein reflux treatment",
    "gonadal vein embolization",
    "varicocele embolization Gurgaon",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Gonadal Vein Disease Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Specialized minimally invasive embolization for ovarian and testicular vein reflux disorders in Gurgaon.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gonadal Vein Disease Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gonadal Vein Disease Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert embolization treatment for ovarian and testicular vein reflux.",
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

export default function GonadalVeinDisease() {
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
                name: "Gonadal Vein Embolization",
                procedureType: "Minimally Invasive",
                bodyLocation: "Ovarian and Testicular Veins",
                howPerformed:
                  "Procedure performed under imaging guidance using catheter-based embolization to treat vein reflux.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout1
        title="Gonadal Vein Disease"
        description="Comprehensive diagnosis and minimally invasive treatment for ovarian and testicular vein reflux disorders."
        active="gonadal"
      >
        <GonadalContent />
      </ServiceLayout1>
    </>
  );
}
