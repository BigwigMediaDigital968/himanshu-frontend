import ServiceLayout3 from "../components/ServiceLayout3";
import VaricoseVeinsContent from "./VaricoseVeinsContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/varicose-veins-treatment-in-gurgaon`;
const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment by Dr. Himanshu Verma. Get expert diagnosis and minimally invasive care including EVLT, foam sclerotherapy & medical glue treatment.",
  keywords: [
    "varicose veins treatment in Gurgaon",
    "varicose vein specialist in Gurgaon",
    "Dr Himanshu Verma vascular surgeon",
    "EVLT treatment for varicose veins",
    "foam sclerotherapy treatment",
    "medical glue varicose veins treatment",
    "spider veins treatment Gurgaon",
    "leg vein specialist Gurgaon",
    "minimally invasive varicose veins treatment",
    "chronic venous insufficiency treatment",
    "best varicose veins doctor in Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert minimally invasive varicose veins treatment in Gurgaon including EVLT, foam sclerotherapy & glue therapy.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Varicose Veins Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced minimally invasive treatment for varicose veins in Gurgaon.",
    images: [OG_IMAGE],
    // site: "@YourTwitterHandle",
    // creator: "@YourTwitterHandle",
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

export default function VaricoseVeinsPage() {
  return (
    <>
      {/* ✅ Schema Markup */}
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
                telephone: "+91-XXXXXXXXXX", // 🔁 Replace
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Your Clinic Address",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  postalCode: "122001",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
              },
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@type": "MedicalBusiness",
                  name: "Dr. Himanshu Verma - Vascular Clinic",
                },
              },
              {
                "@type": "MedicalProcedure",
                name: "Varicose Veins Treatment",
                procedureType: "Minimally Invasive",
                bodyLocation: "Leg Veins",
                howPerformed:
                  "Performed using EVLT, foam sclerotherapy, or medical glue under ultrasound guidance.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout3
        title="Varicose Veins Treatment"
        description="Advanced diagnosis and minimally invasive treatment options for varicose veins, spider veins, and chronic venous disorders."
        active="varicose"
      >
        <VaricoseVeinsContent />
      </ServiceLayout3>
    </>
  );
}
