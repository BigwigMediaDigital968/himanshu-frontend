import ServiceLayout from "../components/ServiceLayout";
import AmputationContent from "./AmputationSurgeryPage";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/amputation-surgery-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Amputation Surgery in Gurgaon | Expert Amputation Surgery Doctor in Gurgaon",
  description:
    "Looking for Amputation Surgery in Gurgaon? Get advanced care from an experienced Amputation Surgery doctor in Gurgaon. Safe procedures, expert evaluation, and complete rehabilitation support.",
  keywords: [
    "Amputation Surgery in Gurgaon",
    "Amputation Surgery doctor in Gurgaon",
    "limb amputation surgery",
    "vascular surgeon Gurgaon",
    "diabetic foot treatment Gurgaon",
    "PAD treatment Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Amputation Surgery in Gurgaon | Expert Amputation Surgery Doctor in Gurgaon",
    description:
      "Advanced amputation surgery with expert vascular evaluation and complete rehabilitation support by Dr. Himanshu Verma.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Amputation Surgery in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Amputation Surgery in Gurgaon | Expert Amputation Surgery Doctor in Gurgaon",
    description:
      "Expert amputation surgery in Gurgaon with advanced care and complete rehabilitation support.",
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
      name: "Critical Limb Ischemia",
      alternateName: "Peripheral Arterial Disease",
      description:
        "Severe reduction in blood flow to the limbs, often requiring amputation surgery when revascularization is not possible.",
    },

    /* ================= PROCEDURE ================= */
    {
      "@type": "MedicalProcedure",
      name: "Amputation Surgery",
      procedureType: "Vascular Surgical Procedure",
      bodyLocation: "Lower and Upper Extremities",
      howPerformed:
        "Surgical removal of a limb or part of a limb performed under general or regional anesthesia, with careful tissue management to create a residual limb suitable for rehabilitation.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    /* ================= WEBPAGE ================= */
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Amputation Surgery in Gurgaon",
      description:
        "Expert amputation surgery in Gurgaon for complex vascular conditions with advanced surgical care and complete rehabilitation support.",
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
          name: "Amputation Surgery in Gurgaon",
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
          name: "What are the types of amputations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amputations are classified based on which part of the limb is removed and the underlying medical need. Common types include Toe or Finger Amputation, Partial Foot Amputation, Below-Knee Amputation (BKA), Above-Knee Amputation (AKA), Partial Arm or Hand Amputation, and Complete Limb Amputation. The level of amputation is chosen carefully during Amputation Surgery in Gurgaon to ensure maximum healing and functional recovery.",
          },
        },
        {
          "@type": "Question",
          name: "What age are amputations most common?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amputations are most common in older adults, typically above 50–60 years of age, especially in people with diabetes or long-standing vascular disease. However, Amputation Surgery in Gurgaon may be required at any age due to trauma, infections, or tumors.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common reason for amputation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common cause of amputation is diabetes-related complications, particularly non-healing foot ulcers and infections. Poor blood circulation due to peripheral artery disease often worsens the condition. Early vascular evaluation by an experienced Amputation Surgery doctor can significantly reduce the need for Amputation Surgery in Gurgaon.",
          },
        },
        {
          "@type": "Question",
          name: "Is amputation surgery painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During surgery, anesthesia prevents pain. After Amputation Surgery in Gurgaon, some pain or discomfort is expected initially and is effectively managed with medications. Some patients may experience phantom limb sensation, which can be treated with therapy and medication.",
          },
        },
        {
          "@type": "Question",
          name: "How long does recovery take after amputation surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients remain hospitalized 3–7 days following Amputation Surgery in Gurgaon. Early recovery involves wound care, pain management, and physical therapy. Long-term rehabilitation with prosthetic fitting may take several weeks to months.",
          },
        },
      ],
    },
  ],
};

export default function AmputationPage() {
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
        title="Amputation Surgery in Gurgaon"
        description="Comprehensive care for complex vascular conditions — advanced surgical techniques with a focus on patient safety and rehabilitation."
      >
        <AmputationContent />
      </ServiceLayout>
    </>
  );
}
