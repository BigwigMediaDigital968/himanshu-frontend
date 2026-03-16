import ServiceLayout3 from "../components/ServiceLayout3";
import VaricoseVeinsContent from "./VaricoseVeinsContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/varicose-veins-treatment-in-gurgaon`;
const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main causes of varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weak vein valves, genetics, prolonged standing, aging, pregnancy, and excess weight are common causes of varicose veins. Consulting a specialist for varicose veins treatment in Gurgaon helps prevent complications.",
      },
    },
    {
      "@type": "Question",
      name: "Are varicose veins a serious problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varicose veins may become serious if pain, swelling, skin discoloration, or ulcers develop. Early diagnosis and treatment can help prevent complications.",
      },
    },
    {
      "@type": "Question",
      name: "Is walking good for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Walking improves blood circulation in the legs and reduces pressure in the veins, supporting vein health and recovery after treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins go away on their own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minor cases may improve with lifestyle changes, but most require medical evaluation and treatment from a vascular specialist.",
      },
    },
    {
      "@type": "Question",
      name: "Is treatment for varicose veins painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern procedures such as EVLT and endovascular techniques are minimally invasive and usually involve minimal pain with faster recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins cause serious health problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Untreated varicose veins may lead to venous ulcers, blood clots, or chronic venous insufficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How can I prevent varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular exercise, maintaining a healthy weight, avoiding prolonged standing or sitting, and wearing compression stockings may help reduce the risk.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consult a vascular specialist if you experience swelling, pain, skin changes, or visible enlarged veins.",
      },
    },
  ],
};

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

const medicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#clinic`,
      name: "Dr Himanshu Verma Vascular Clinic",
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: "+91 8826833598",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122003",
        addressCountry: "IN",
      },
      areaServed: ["Gurugram", "Delhi NCR"],
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#doctor`,
      name: "Dr Himanshu Verma",
      jobTitle: "Vascular Surgeon",
      medicalSpecialty: "VascularSurgery",
      worksFor: {
        "@id": `${SITE_URL}/#clinic`,
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Varicose Veins Treatment",
      procedureType: "Minimally Invasive",
      bodyLocation: "Leg Veins",
      howPerformed:
        "Treatment includes EVLT, foam sclerotherapy, and medical glue therapy performed under ultrasound guidance.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },
  ],
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
                telephone: "+91-8826833598",
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

      {/* Medical Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalSchema),
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
        title="Varicose Veins Treatment"
        description="Advanced diagnosis and minimally invasive treatment options for varicose veins, spider veins, and chronic venous disorders."
        active="varicose"
      >
        <VaricoseVeinsContent />
      </ServiceLayout3>
    </>
  );
}
