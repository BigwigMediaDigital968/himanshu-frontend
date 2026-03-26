import ServiceLayout from "../components/ServiceLayout";
import PulmonaryEmbolismContent from "./PulmonaryEmbolismContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/pulmonary-embolism-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Pulmonary Embolism Treatment in Gurgaon | Best Specialist & Advanced Care | Dr. Himanshu Verma",
  description:
    "Get expert pulmonary embolism treatment in Gurgaon with advanced care and personalized plans. Consult the best doctor for pulmonary embolism today for safe recovery.",
  keywords: [
    "pulmonary embolism treatment in Gurgaon",
    "pulmonary embolism treatment",
    "pulmonary embolism specialist",
    "best doctor for pulmonary embolism",
    "pulmonary embolism management",
    "blood clot treatment Gurgaon",
    "lung clot treatment",
    "DVT to PE treatment",
    "vascular specialist Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Pulmonary Embolism Treatment in Gurgaon | Best Specialist & Advanced Care",
    description:
      "Advanced pulmonary embolism treatment in Gurgaon with expert care, early diagnosis, and personalized recovery plans.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pulmonary Embolism Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Pulmonary Embolism Treatment in Gurgaon | Best Specialist & Advanced Care",
    description:
      "Expert pulmonary embolism treatment with safe and effective blood clot management in Gurgaon.",
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
      areaServed: ["Gurgaon", "Delhi NCR"],
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
      name: "Pulmonary Embolism",
      description:
        "A serious condition where a blood clot blocks one of the arteries in the lungs, affecting oxygen flow and putting strain on the heart.",
    },

    /* ================= PROCEDURE ================= */
    {
      "@type": "MedicalProcedure",
      name: "Pulmonary Embolism Treatment",
      procedureType: "Vascular Medical Treatment",
      bodyLocation: "Lung Arteries",
      howPerformed:
        "Treatment includes blood thinners, oxygen support, monitoring, and advanced interventions for severe cases, along with long-term prevention strategies.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    /* ================= WEBPAGE ================= */
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Pulmonary Embolism Treatment in Gurgaon",
      description:
        "Expert pulmonary embolism treatment in Gurgaon with advanced care, early diagnosis, and long-term prevention.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: SITE_URL,
        name: "Dr. Himanshu Verma",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
      },
    },

    /* ================= BREADCRUMB ================= */
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pulmonary Embolism Treatment in Gurgaon",
          item: PAGE_URL,
        },
      ],
    },

    /* ================= FAQ ================= */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the management of pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary embolism treatment includes medications, monitoring, and preventive care aimed at restoring blood flow and reducing future clot risk.",
          },
        },
        {
          "@type": "Question",
          name: "What is the first-line treatment for pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blood-thinning medicines are usually the first step in pulmonary embolism treatment to stop existing clots from growing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the emergency treatment for pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Emergency pulmonary embolism treatment may involve oxygen support, clot-dissolving treatment, or urgent procedures in severe cases.",
          },
        },
        {
          "@type": "Question",
          name: "Can pulmonary embolism come back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, recurrence is possible. Long-term pulmonary embolism management helps lower this risk.",
          },
        },
        {
          "@type": "Question",
          name: "How long does recovery take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery varies. With proper pulmonary embolism treatment, many patients improve within weeks, while some need longer follow-up.",
          },
        },
      ],
    },
  ],
};

export default function PulmonaryEmbolismPage() {
  return (
    <>
      {/* ✅ Full SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="Pulmonary Embolism Treatment in Gurgaon"
        description="Timely diagnosis, advanced care, and personalized pulmonary embolism treatment plans for safe recovery."
      >
        <PulmonaryEmbolismContent />
      </ServiceLayout>
    </>
  );
}
