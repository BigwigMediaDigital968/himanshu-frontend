import ServiceLayout from "../components/ServiceLayout1";
import PelvicContent from "./PelvicContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/pelvic-venous-disorder-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive treatment for pelvic venous disorders and pelvic congestion syndrome (PCS) by Dr. Himanshu Verma in Gurgaon.",
  keywords: [
    "pelvic venous disorders treatment",
    "pelvic congestion syndrome treatment",
    "PCS treatment Gurgaon",
    "pelvic vein embolization",
    "pelvic pain vascular specialist",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Get expert Pelvic Venous Disorders Treatment in Gurgaon by Dr. Himanshu Verma. Advanced diagnosis and minimally invasive care for pelvic congestion syndrome (PCS).",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pelvic Venous Disorders Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Minimally invasive pelvic vein embolization & PCS treatment in Gurgaon.",
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
      name: "How are pelvic venous disorders diagnosed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pelvic venous disorders are diagnosed through physical examination and imaging tests such as ultrasound, CT scan, MRI, or venography. Patients experiencing symptoms can consult a vascular specialist for pelvic venous disorder treatment in Gurgaon for accurate diagnosis and care.",
      },
    },
    {
      "@type": "Question",
      name: "What causes pelvic venous disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pelvic venous disorders are usually caused by weakened vein valves, hormonal changes, genetic factors, or prolonged pressure on the pelvic veins.",
      },
    },
    {
      "@type": "Question",
      name: "Can pelvic venous disorders be prevented?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maintaining a healthy lifestyle, engaging in regular exercise, and avoiding prolonged sitting or standing may help reduce the risk of pelvic venous disorders.",
      },
    },
    {
      "@type": "Question",
      name: "Are pelvic venous disorders painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, pelvic venous disorders can cause symptoms ranging from mild discomfort to severe pelvic pain, especially after prolonged standing.",
      },
    },
    {
      "@type": "Question",
      name: "Is treatment for pelvic venous disorders effective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With early diagnosis and appropriate medical intervention, pelvic venous disorder treatment can significantly reduce symptoms and improve quality of life.",
      },
    },
  ],
};

const medicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.drhimanshuverma.com/#clinic",
      name: "Dr Himanshu Verma Vascular Clinic",
      url: PAGE_URL,
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
      "@id": "https://www.drhimanshuverma.com/#doctor",
      name: "Dr Himanshu Verma",
      jobTitle: "Vascular Surgeon",
      medicalSpecialty: "VascularSurgery",
      worksFor: {
        "@id": "https://www.drhimanshuverma.com/#clinic",
      },
    },
    {
      "@type": "MedicalProcedure",
      name: "Pelvic Venous Disorder Treatment",
      procedureType: "Minimally Invasive",
      bodyLocation: "Pelvic Veins",
      howPerformed:
        "Treatment includes pelvic vein embolization under imaging guidance to relieve chronic pelvic pain.",
      provider: {
        "@id": "https://www.drhimanshuverma.com/#doctor",
      },
    },
  ],
};

export default function PelvicVenousDisorder() {
  return (
    <>
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

      <ServiceLayout
        title="Pelvic Venous Disorders"
        description="Advanced diagnosis and treatment of pelvic congestion syndrome and pelvic venous disorders."
        active="pelvic"
      >
        <PelvicContent />
      </ServiceLayout>
    </>
  );
}
