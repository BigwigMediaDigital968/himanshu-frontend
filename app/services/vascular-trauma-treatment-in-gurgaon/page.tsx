import ServiceLayout from "../components/ServiceLayout";
import VascularContent from "./VascularContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/vascular-trauma-treatment`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Vascular Trauma Treatment | Emergency Blood Vessel Injury Care 24/7",
  description:
    "Get immediate vascular trauma treatment for blood vessel injuries. Expert care for arterial & venous trauma with advanced surgical support.",
  keywords: [
    "vascular trauma treatment",
    "blood vessel injury treatment",
    "emergency vascular surgery",
    "arterial injury treatment",
    "vein injury repair",
    "trauma vascular surgeon",
    "vascular emergency care",
    "limb salvage surgery",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Vascular Trauma Treatment | Emergency Blood Vessel Injury Care",
    description:
      "Expert emergency vascular trauma care for arterial and venous injuries with advanced surgical support.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Vascular Trauma Treatment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vascular Trauma Treatment | Emergency Blood Vessel Injury Care",
    description:
      "Immediate care for vascular trauma with advanced surgical support.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    /* ================= BUSINESS ================= */
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#clinic`,
      name: "Dr Himanshu Verma Vascular Clinic",
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: "+91 8826833598",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },

    /* ================= DOCTOR ================= */
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

    /* ================= CONDITION ================= */
    {
      "@type": "MedicalCondition",
      name: "Vascular Trauma",
      description:
        "A serious condition involving injury to arteries or veins due to trauma, requiring immediate medical intervention.",
    },

    /* ================= PROCEDURE ================= */
    {
      "@type": "MedicalProcedure",
      name: "Vascular Trauma Treatment",
      procedureType: "Emergency Vascular Surgery",
      howPerformed:
        "Treatment includes surgical repair of arteries and veins, bleeding control, and restoration of blood flow to prevent limb loss.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    /* ================= WEBPAGE ================= */
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Vascular Trauma Treatment",
      description:
        "Emergency treatment for vascular injuries including arterial and venous trauma.",
      inLanguage: "en-IN",
    },

    /* ================= FAQ ================= */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly must vascular trauma be treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vascular trauma is a true emergency requiring treatment within 6-8 hours for best limb salvage outcomes. For life-threatening bleeding, treatment must be immediate.",
          },
        },
        {
          "@type": "Question",
          name: "What are the chances of saving a limb?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With prompt treatment, limb salvage rates typically range from 85-95%, depending on injury severity and time to treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need blood thinners after repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many patients require antiplatelet therapy or anticoagulation after vascular repair to prevent clotting. Your surgeon will determine the specific medication and duration based on your repair type.",
          },
        },
        {
          "@type": "Question",
          name: "How long is recovery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hospital stays range from several days to weeks. Return to normal activities typically takes 6-12 weeks for less severe injuries, while complex cases may require 3-6 months.",
          },
        },
        {
          "@type": "Question",
          name: "Can vascular trauma heal without surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most significant vascular trauma requires intervention. Attempting to wait with serious vascular injuries risks limb loss or death. Professional evaluation is essential.",
          },
        },
        {
          "@type": "Question",
          name: "What if I notice problems after treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact your vascular surgeon immediately if you notice new symptoms like pain, swelling, color changes, or decreased pulses. Early detection allows for easier management of any complications.",
          },
        },
      ],
    },
  ],
};

export default function VascularTraumaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="Vascular Trauma Treatment"
        description="Emergency blood vessel injury care with advanced vascular surgery."
      >
        <VascularContent />
      </ServiceLayout>
    </>
  );
}
