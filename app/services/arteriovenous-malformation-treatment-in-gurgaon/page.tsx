import ServiceLayout from "../components/ServiceLayout";
import ArteriovenousContent from "./ArteriovenousContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/arteriovenous-malformation-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Arteriovenous Malformation Treatment in Gurgaon | AVM Specialist Care",
  description:
    "Get expert arteriovenous malformation treatment in Gurgaon. Advanced AVM diagnosis & personalized care to prevent complications. Book a consultation today.",
  keywords: [
    "arteriovenous malformation treatment in Gurgaon",
    "AVM treatment",
    "AVM specialist",
    "arteriovenous malformation symptoms",
    "brain AVM treatment",
    "peripheral AVM treatment",
    "vascular malformation treatment",
    "AVM diagnosis Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Arteriovenous Malformation Treatment in Gurgaon | AVM Specialist Care",
    description:
      "Advanced AVM diagnosis and personalized treatment plans for safe and effective care.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Arteriovenous Malformation Treatment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Arteriovenous Malformation Treatment in Gurgaon | AVM Specialist Care",
    description:
      "Expert AVM treatment with advanced diagnosis and personalized care.",
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
      "@type": "MedicalCondition",
      name: "Arteriovenous Malformation",
      description:
        "An abnormal connection between arteries and veins that disrupts normal blood flow and may lead to complications like bleeding.",
    },

    {
      "@type": "MedicalProcedure",
      name: "Arteriovenous Malformation Treatment",
      procedureType: "Vascular Treatment",
      howPerformed:
        "Treatment includes monitoring, image-guided procedures, and surgical intervention depending on size and location of the AVM.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Arteriovenous Malformation Treatment in Gurgaon",
      description:
        "Expert AVM diagnosis and treatment options for safe and effective care.",
      inLanguage: "en-IN",
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What causes arteriovenous malformation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most cases of AVM are present at birth due to abnormal vessel development. Some may occur later after injury or through injection.",
          },
        },
        {
          "@type": "Question",
          name: "How serious is an arteriovenous malformation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The seriousness depends on its size and location. Some remain harmless, while others need treatment to prevent bleeding.",
          },
        },
        {
          "@type": "Question",
          name: "What are the first signs of AVM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Early symptoms may include headaches, seizures, swelling, or visible veins.",
          },
        },
        {
          "@type": "Question",
          name: "Can an arteriovenous malformation be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many AVM cases can be effectively treated or controlled with the right approach.",
          },
        },
        {
          "@type": "Question",
          name: "Should every arteriovenous malformation be treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not every AVM needs immediate treatment. A specialist evaluation helps decide the safest plan.",
          },
        },
      ],
    },
  ],
};

export default function AVMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="Arteriovenous Malformation"
        description="Advanced AVM diagnosis and personalized treatment for safer outcomes."
      >
        <ArteriovenousContent />
      </ServiceLayout>
    </>
  );
}
