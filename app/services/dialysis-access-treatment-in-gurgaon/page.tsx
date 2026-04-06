import ServiceLayout from "../components/ServiceLayout";
import DialysisAccessContent from "./DialysisAccessContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/dialysis-access-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Dialysis Access Surgeon in Gurgaon | AV Fistula & AV Graft Care",
  description:
    "Consult Dr. Himanshu, a top Dialysis Access Surgeon in Gurgaon, for AV Fistula, AV Graft, and Permacath care to ensure safe and effective dialysis.",
  keywords: [
    "Dialysis Access Surgeon in Gurgaon",
    "AV Fistula Gurgaon",
    "AV Graft Surgery Gurgaon",
    "Permacath insertion Gurgaon",
    "Dialysis Access care Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Dialysis Access Surgery in Gurgaon | AV Fistula & AV Graft Care | Dr. Himanshu Verma",
    description:
      "Consult Dr. Himanshu, a top Dialysis Access Surgeon in Gurgaon, for AV Fistula, AV Graft, and Permacath care to ensure safe and effective dialysis.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dialysis Access Surgery in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dialysis Access Surgeon in Gurgaon | Dr. Himanshu Verma",
    description:
      "Consult top dialysis access surgeon in Gurgaon – Dr. Himanshu Verma at Fortis. Expert AV fistula, graft placement & long-term access management. Schedule your visit today.",
    images: [OG_IMAGE],
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

export default function DialysisAccessPage() {
  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Dialysis Access Surgeon in Gurgaon | AV Fistula & AV Graft Care",
                description:
                  "Consult Dr. Himanshu, a top Dialysis Access Surgeon in Gurgaon, for AV Fistula, AV Graft, and Permacath care.",
                inLanguage: "en-IN",
              },

              /* ================= BREADCRUMB ================= */
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.drhimanshuverma.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.drhimanshuverma.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Dialysis Access Treatment",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= MEDICAL BUSINESS ================= */
              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma - Vascular Surgeon",
                image: OG_IMAGE,
                url: PAGE_URL,
                telephone: "+91-8826833598",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  postalCode: "122001",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
                medicalSpecialty: "Vascular Surgery",
              },

              /* ================= PHYSICIAN ================= */
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@type": "MedicalBusiness",
                  name: "Dr. Himanshu Verma Clinic",
                },
              },

              /* ================= MEDICAL PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Dialysis Access Surgery",
                procedureType: "Surgical Vascular Access",
                bodyLocation: "Upper Limb Blood Vessels",
                howPerformed:
                  "Includes AV fistula creation, AV graft placement, or tunneled dialysis catheter insertion for safe dialysis access.",
              },

              /* ================= FAQ SCHEMA ================= */
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What are the three types of dialysis access?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The three main types are AV fistula, AV graft, and catheter-based access such as Permacath or Templine. The choice depends on urgency, vein health, and long-term dialysis needs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the meaning of dialysis access?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Dialysis access is a medical pathway created in the body that allows blood to flow out for dialysis and return safely after being filtered.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What’s the risk of clotting or infection for my access type?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "All access types have some risk, but AV fistula has the lowest risk of infection and clotting compared to grafts and catheters.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I care for my access site?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Keep the site clean and dry, avoid pressure, and follow your doctor's instructions to maintain proper function.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I know if my dialysis access is not working properly?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Warning signs include swelling, pain, or reduced blood flow. Immediate medical consultation is advised.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does dialysis access last?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The lifespan varies depending on the type and care, but regular monitoring can help maintain it for years.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Dialysis Access Surgeon in Gurgaon | AV Fistula & AV Graft Care"
        description="Consult Dr. Himanshu, a top Dialysis Access Surgeon in Gurgaon, for AV Fistula, AV Graft, and Permacath care to ensure safe and effective dialysis."
      >
        <DialysisAccessContent />
      </ServiceLayout>
    </>
  );
}
