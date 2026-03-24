import ServiceLayout from "../components/ServiceLayout";
import ChronicVenousContent from "./ChronicVenousContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/chronic-venous-insufficiency-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Chronic Venous Insufficiency in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive treatment for Chronic Venous Insufficiency (CVI) in Gurgaon including swelling, pain, and venous ulcers.",
  keywords: [
    "chronic venous insufficiency treatment Gurgaon",
    "CVI treatment Gurgaon",
    "leg swelling treatment Gurgaon",
    "venous ulcer treatment",
    "vein specialist Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert care for CVI including swelling, venous ulcers and vein reflux treatment.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Chronic Venous Insufficiency Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",
    description: "Advanced CVI treatment for swelling, pain and ulcers.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ChronicVenousPage() {
  return (
    <>
      {/* ✅ FULL STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  streetAddress: "Fortis Memorial Research Centre, Sector 44",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122003",
                  addressCountry: "IN",
                },
                areaServed: ["Gurugram", "Delhi NCR"],
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
                name: "Chronic Venous Insufficiency",
                alternateName: "CVI",
                description:
                  "A condition where vein valves in the legs do not function properly, leading to blood pooling, swelling, pain, and venous ulcers.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Leg swelling" },
                  { "@type": "MedicalSymptom", name: "Heaviness in legs" },
                  { "@type": "MedicalSymptom", name: "Pain or aching" },
                  { "@type": "MedicalSymptom", name: "Skin discoloration" },
                  { "@type": "MedicalSymptom", name: "Venous ulcers" },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Chronic Venous Insufficiency Treatment",
                procedureType: "Minimally Invasive Vein Treatment",
                bodyLocation: "Lower Limb Veins",
                howPerformed:
                  "Includes duplex ultrasound evaluation, endovenous laser or radiofrequency ablation, compression therapy, and advanced wound care.",
                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Chronic Venous Insufficiency Treatment in Gurgaon",
                description:
                  "Expert diagnosis and treatment for CVI including swelling, pain and venous ulcers.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@type": "WebSite",
                  name: "Dr Himanshu Verma",
                  url: SITE_URL,
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
                    name: "Chronic Venous Insufficiency Treatment in Gurgaon",
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
                    name: "How to reverse chronic venous insufficiency?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "CVI cannot always be reversed but can be effectively managed with compression therapy, lifestyle changes, and medical treatment.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the root cause of venous insufficiency?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Weak or damaged vein valves that cause backward blood flow.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are early signs of CVI?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Leg heaviness, swelling, aching, and visible veins.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can CVI cause ulcers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, untreated CVI can lead to venous ulcers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When should I see a doctor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "If you have swelling, pain, or skin changes in legs.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Chronic Venous Insufficiency Treatment in Gurgaon"
        description="Expert diagnosis and personalized treatment for leg swelling, venous ulcers, and chronic venous insufficiency."
      >
        <ChronicVenousContent />
      </ServiceLayout>
    </>
  );
}
