import ServiceLayout from "../components/ServiceLayout";
import OncoContent from "./OncoContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/onco-vascular-surgery`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "ONCO Vascular Surgery | Expert Cancer & Vascular Care by Specialist",
  description:
    "Get advanced ONCO vascular surgery for safe cancer treatment involving blood vessels. Consult Dr. Himanshu for expert care, precise surgery & better recovery.",
  keywords: [
    "ONCO vascular surgery",
    "oncovascular surgery",
    "vascular surgeon for cancer",
    "cancer surgery blood vessels",
    "tumor vascular involvement treatment",
    "vascular reconstruction surgery",
    "DVT prevention after cancer surgery",
    "cancer surgery specialist",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "ONCO Vascular Surgery | Expert Cancer & Vascular Care",
    description:
      "Advanced ONCO vascular surgery ensuring safe cancer treatment with vascular protection.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ONCO Vascular Surgery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ONCO Vascular Surgery | Cancer & Vascular Care",
    description:
      "Expert oncovascular surgery for safe tumor removal and vascular protection.",
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
      name: "ONCO Vascular Surgery",
      procedureType: "Cancer and Vascular Surgery",
      howPerformed:
        "ONCO vascular surgery involves managing blood vessels during cancer removal, including vessel protection, reconstruction, and prevention of complications.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "ONCO Vascular Surgery",
      description:
        "Advanced ONCO vascular surgery for safe cancer treatment involving blood vessels.",
      inLanguage: "en-IN",
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of cancers need ONCO vascular Surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cancers near major blood vessels, including abdominal, pelvic, and soft tissue tumors, may require ONCO vascular Surgery.",
          },
        },
        {
          "@type": "Question",
          name: "Does ONCO vascular Surgery increase surgery time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It may add planning time, but it significantly improves safety and reduces complications.",
          },
        },
        {
          "@type": "Question",
          name: "Are DVT chances higher after cancer surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but ONCO vascular Surgery helps reduce DVT risk through careful vessel management.",
          },
        },
        {
          "@type": "Question",
          name: "Can blood flow to the heart or brain be affected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Without proper vascular care, yes. ONCO vascular Surgery focuses on preventing such blockages.",
          },
        },
        {
          "@type": "Question",
          name: "Is recovery longer after ONCO vascular Surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery is often smoother due to fewer vascular complications.",
          },
        },
      ],
    },
  ],
};

export default function OncoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="ONCO Vascular Surgery"
        description="Expert cancer surgery with vascular protection for safer outcomes."
      >
        <OncoContent />
      </ServiceLayout>
    </>
  );
}
