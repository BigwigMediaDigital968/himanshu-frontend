import ServiceLayout from "../components/ServiceLayout";
import DVTContent from "./DVTContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/deep-vein-thrombosis-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Deep Vein Thrombosis Treatment in Gurgaon | Expert DVT Specialists in Gurgaon",
  description:
    "Get advanced Deep Vein Thrombosis Treatment in Gurgaon from experienced DVT Specialists. Early diagnosis, effective blood clot treatment, and personalized care for faster recovery.",
  keywords: [
    "Deep Vein Thrombosis Treatment in Gurgaon",
    "DVT Treatment in Gurgaon",
    "DVT Specialists in Gurgaon",
    "blood clot treatment in Gurgaon",
    "vein doctor in Gurgaon",
    "DVT Treatment near me",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Deep Vein Thrombosis Treatment in Gurgaon | Expert DVT Specialists in Gurgaon",
    description:
      "Advanced Deep Vein Thrombosis Treatment in Gurgaon from experienced DVT Specialists. Early diagnosis and personalized care for faster recovery.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Deep Vein Thrombosis Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Deep Vein Thrombosis Treatment in Gurgaon | Expert DVT Specialists in Gurgaon",
    description:
      "Expert DVT treatment in Gurgaon with early diagnosis and effective blood clot management.",
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
      name: "Deep Vein Thrombosis",
      alternateName: "DVT",
      description:
        "A condition caused by a blood clot forming inside one of the body's deep veins, usually in the leg, reducing circulation to that area.",
    },

    /* ================= PROCEDURE ================= */
    {
      "@type": "MedicalProcedure",
      name: "Deep Vein Thrombosis Treatment",
      procedureType: "Vascular Medical Treatment",
      bodyLocation: "Deep Veins of the Leg",
      howPerformed:
        "Treatment includes blood thinners, compression therapy, lifestyle modifications, and advanced interventional procedures for more serious cases.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    /* ================= WEBPAGE ================= */
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Deep Vein Thrombosis Treatment in Gurgaon",
      description:
        "Expert DVT treatment in Gurgaon for effective blood clot management and faster recovery.",
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
          name: "Deep Vein Thrombosis Treatment in Gurgaon",
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
          name: "What is the cause of a deep vein thrombosis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deep Vein Thrombosis is caused by slow blood flow, vein injury, or increased blood clotting, often triggered by inactivity or medical conditions. Proper evaluation for Deep Vein Thrombosis Treatment in Gurgaon can identify the exact cause.",
          },
        },
        {
          "@type": "Question",
          name: "What are three signs of DVT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three common signs of Deep Vein Thrombosis are leg swelling, pain or tenderness, and skin warmth or redness.",
          },
        },
        {
          "@type": "Question",
          name: "Can DVT be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deep Vein Thrombosis can be effectively treated and managed with timely medical care, reducing long-term risks. Many patients opt for Deep Vein Thrombosis Treatment in Gurgaon for advanced care options.",
          },
        },
        {
          "@type": "Question",
          name: "What is the treatment for DVT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deep Vein Thrombosis treatment usually includes blood thinners, compression therapy, and lifestyle changes.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Deep Vein Thrombosis treatment last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment duration for Deep Vein Thrombosis varies, but many patients need medication for several months based on risk factors.",
          },
        },
        {
          "@type": "Question",
          name: "Is Deep Vein Thrombosis life-threatening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deep Vein Thrombosis can be life-threatening if untreated, especially if it leads to a pulmonary embolism, which is why early care matters. For those considering Deep Vein Thrombosis Treatment in Gurgaon, early consultation significantly improves outcomes.",
          },
        },
      ],
    },
  ],
};

export default function DVTPage() {
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
        title="Deep Vein Thrombosis Treatment in Gurgaon"
        description="Early diagnosis, effective blood clot treatment, and personalized care from expert DVT Specialists in Gurgaon."
      >
        <DVTContent />
      </ServiceLayout>
    </>
  );
}
