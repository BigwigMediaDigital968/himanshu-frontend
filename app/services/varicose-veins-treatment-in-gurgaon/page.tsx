import ServiceLayout3 from "../components/ServiceLayout3";
import VaricoseVeinsContent from "./VaricoseVeinsContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/varicose-veins-treatment-in-gurgaon`;
const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main causes of varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weak vein valves, genetics, prolonged standing, aging, pregnancy, and excess weight are the most common causes. These conditions often require professional evaluation and varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Are varicose veins a worry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can become a concern if pain, swelling, skin changes, or ulcers develop. Early evaluation and varicose veins treatment in Gurgaon help prevent complications.",
      },
    },
    {
      "@type": "Question",
      name: "Is walking good for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Walking improves blood circulation in the legs and reduces pressure in the veins, making it one of the best daily habits for vein health alongside proper varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins go away on their own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minor varicose veins may improve with lifestyle changes, but most require medical evaluation and varicose veins treatment in Gurgaon for long-term relief.",
      },
    },
    {
      "@type": "Question",
      name: "Is treatment for varicose veins painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most modern procedures used in varicose veins treatment in Gurgaon are minimally invasive and designed for patient comfort.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins cause serious health problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If untreated, they can lead to ulcers, blood clots, or chronic venous insufficiency, which is why timely varicose veins treatment in Gurgaon is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "How can I prevent varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular exercise, maintaining a healthy weight, avoiding prolonged standing or sitting, and wearing compression stockings can help reduce the risk and complement varicose veins treatment in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seek medical attention if you notice swelling, persistent pain, or skin changes around your veins. Early consultation ensures better outcomes and timely varicose veins treatment in Gurgaon.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment by Dr. Himanshu Verma. Get expert diagnosis and minimally invasive care including EVLT, foam sclerotherapy & medical glue treatment.",
  keywords: [
    "varicose veins treatment in Gurgaon",
    "varicose vein specialist in Gurgaon",
    "Dr Himanshu Verma vascular surgeon",
    "EVLT treatment for varicose veins",
    "foam sclerotherapy treatment",
    "medical glue varicose veins treatment",
    "spider veins treatment Gurgaon",
    "leg vein specialist Gurgaon",
    "minimally invasive varicose veins treatment",
    "chronic venous insufficiency treatment",
    "best varicose veins doctor in Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Expert minimally invasive varicose veins treatment in Gurgaon including EVLT, foam sclerotherapy & glue therapy.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Varicose Veins Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced minimally invasive treatment for varicose veins in Gurgaon.",
    images: [OG_IMAGE],
    // site: "@YourTwitterHandle",
    // creator: "@YourTwitterHandle",
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

export default function VaricoseVeinsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* ================= WEBSITE ================= */
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: "Dr. Himanshu Verma",
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "Varicose Veins Treatment in Gurgaon",
                description:
                  "Advanced varicose veins treatment in Gurgaon including EVLT, sclerotherapy and glue therapy.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                },
              },

              /* ================= BREADCRUMB ================= */
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
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
                    name: "Varicose Veins Treatment in Gurgaon",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= BUSINESS ================= */
              {
                "@type": "MedicalBusiness",
                "@id": `${SITE_URL}/#clinic`,
                name: "Dr Himanshu Verma Vascular Clinic",
                image: OG_IMAGE,
                url: SITE_URL,
                telephone: "+91-8826833598",
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
                medicalSpecialty: "Vascular Surgery",
                worksFor: {
                  "@id": `${SITE_URL}/#clinic`,
                },
              },

              /* ================= CONDITION ================= */
              {
                "@type": "MedicalCondition",
                name: "Varicose Veins",
                alternateName: "Chronic Venous Insufficiency",
                description:
                  "A condition where veins become enlarged and twisted due to faulty valves, causing pain, swelling, and circulation issues.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Bulging veins in legs" },
                  { "@type": "MedicalSymptom", name: "Leg pain or heaviness" },
                  { "@type": "MedicalSymptom", name: "Swelling in legs" },
                  { "@type": "MedicalSymptom", name: "Skin discoloration" },
                  { "@type": "MedicalSymptom", name: "Ulcers near ankles" },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Varicose Veins Treatment",
                procedureType: "Minimally Invasive",
                bodyLocation: "Leg Veins",
                howPerformed:
                  "Performed using EVLT (laser), foam sclerotherapy, or medical glue under ultrasound guidance.",
                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              /* ================= FAQ ================= */
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: faqSchema.mainEntity,
              },
            ],
          }),
        }}
      />

      <ServiceLayout3
        title="Varicose Veins Treatment in Gurgaon | Dr. Himanshu Verma"
        description="Advanced diagnosis and minimally invasive treatment options for varicose veins, spider veins, and chronic venous disorders."
        active="varicose"
      >
        <VaricoseVeinsContent />
      </ServiceLayout3>
    </>
  );
}
