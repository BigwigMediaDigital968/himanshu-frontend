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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to reverse chronic venous insufficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic Venous Insufficiency cannot always be fully reversed, but early-stage cases can improve with compression therapy, exercise, and proper vein care through Chronic Venous Insufficiency Treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "What is the root cause of venous insufficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main root cause of Chronic Venous Insufficiency is damaged or weak vein valves that allow blood to flow backward in the veins.",
      },
    },
    {
      "@type": "Question",
      name: "What are the early warning signs of CVI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early signs include leg heaviness, mild swelling, aching, and visible veins. Seeking Chronic Venous Insufficiency Treatment in Gurgaon early can help manage these symptoms effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What exercises should be avoided with venous insufficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-impact activities that strain the legs for long periods may worsen Chronic Venous Insufficiency. Low-impact exercises like walking are generally recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Can chronic venous insufficiency lead to ulcers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, untreated Chronic Venous Insufficiency can reduce skin nutrition and lead to venous ulcers over time, requiring advanced medical treatment.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor for chronic venous insufficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should consult a doctor if you experience persistent swelling, pain, or skin changes. Early consultation ensures timely Chronic Venous Insufficiency Treatment in Gurgaon and better outcomes.",
      },
    },
  ],
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceLayout3
        title="Chronic Venous Insufficiency Treatment in Gurgaon"
        description="Expert diagnosis and personalized treatment for leg swelling, venous ulcers, and chronic venous insufficiency."
        active="chronic"
      >
        <ChronicVenousContent />
      </ServiceLayout3>
    </>
  );
}
