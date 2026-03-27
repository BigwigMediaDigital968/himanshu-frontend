import ServiceLayout from "../components/ServiceLayout";
import AbdominalContent from "./AbdominalContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/abdominal-aortic-aneurysm-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Abdominal Aortic Aneurysm Treatment in Gurgaon | Advanced AAA Care",
  description:
    "Get expert abdominal aortic aneurysm treatment in Gurgaon with advanced EVAR procedures. Learn symptoms, diagnosis, and safe treatment options.",
  keywords: [
    "abdominal aortic aneurysm treatment",
    "abdominal aortic aneurysm treatment in Gurgaon",
    "abdominal aortic aneurysm symptoms",
    "AAA treatment",
    "EVAR treatment",
    "vascular surgeon Gurgaon",
    "aneurysm treatment Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Abdominal Aortic Aneurysm Treatment in Gurgaon | Advanced AAA Care",
    description:
      "Advanced abdominal aortic aneurysm treatment in Gurgaon with EVAR procedures and expert vascular care.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Abdominal Aortic Aneurysm Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdominal Aortic Aneurysm Treatment in Gurgaon | Advanced AAA Care",
    description:
      "Expert AAA treatment with EVAR and minimally invasive vascular care.",
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
      name: "Abdominal Aortic Aneurysm",
      alternateName: "AAA",
      description:
        "A condition where the lower part of the aorta becomes enlarged and weak, increasing the risk of rupture.",
    },

    {
      "@type": "MedicalProcedure",
      name: "Abdominal Aortic Aneurysm Treatment",
      procedureType: "Endovascular Treatment",
      bodyLocation: "Abdominal Aorta",
      howPerformed:
        "Treatment includes monitoring, EVAR stent graft placement, and advanced endovascular procedures to prevent rupture.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Abdominal Aortic Aneurysm Treatment in Gurgaon",
      description:
        "Expert AAA treatment in Gurgaon with EVAR procedures and early diagnosis.",
      inLanguage: "en-IN",
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the symptoms of an abdominal aortic aneurysm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most cases have no symptoms. Pain or pulsation in the abdomen may appear in advanced stages.",
          },
        },
        {
          "@type": "Question",
          name: "How serious is AAA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It becomes serious as it grows, with higher risk of rupture requiring timely treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Can it be treated without surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small aneurysms may only require monitoring, while larger ones need treatment like EVAR.",
          },
        },
        {
          "@type": "Question",
          name: "Is EVAR safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, EVAR is a minimally invasive and safe option, especially for elderly patients.",
          },
        },
      ],
    },
  ],
};

export default function AAApage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="Abdominal Aortic Aneurysm"
        description="Advanced AAA treatment with EVAR procedures and early diagnosis."
      >
        <AbdominalContent />
      </ServiceLayout>
    </>
  );
}
