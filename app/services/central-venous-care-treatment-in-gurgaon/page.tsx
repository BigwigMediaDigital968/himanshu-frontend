import ServiceLayout from "../components/ServiceLayout";
import CentralVenousContent from "./CentralVenousContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/central-venous-care-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Central Venous Care in Gurgaon | Central Venous Catheter Treatment",
  description:
    "Expert Central Venous Care in Gurgaon including central venous catheter placement, angioplasty, and occlusion treatment by experienced vascular specialists.",
  keywords: [
    "Central Venous Care in Gurgaon",
    "Central Venous Catheter Gurgaon",
    "Central Line Treatment Gurgaon",
    "Central Venous Angioplasty Gurgaon",
    "Central Vein Occlusion Treatment Gurgaon",
    "Vascular Specialist Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Central Venous Care in Gurgaon | Central Venous Catheter Treatment",
    description:
      "Expert Central Venous Care in Gurgaon including central venous catheter placement and advanced vascular procedures.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Central Venous Care in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Central Venous Care in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced PICC line, chemo port, and dialysis catheter placement with minimally invasive techniques.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CentralVenousCarePage() {
  return (
    <>
      {/* ✅ FULL SEO STRUCTURED DATA */}
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
                name: "Central Venous Disease",
                description:
                  "A vascular condition affecting central veins, often requiring catheter placement, angioplasty, or occlusion management.",
                possibleTreatment: [
                  {
                    "@type": "MedicalProcedure",
                    name: "Central Venous Catheter Placement",
                  },
                  {
                    "@type": "MedicalProcedure",
                    name: "Central Venous Angioplasty",
                  },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Central Venous Catheter Placement",
                procedureType: "Minimally Invasive Vascular Procedure",
                bodyLocation: "Central Veins",
                howPerformed:
                  "Performed using ultrasound-guided PICC line insertion, chemo port placement, dialysis catheter insertion, and venous angioplasty if required.",
                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Central Venous Care in Gurgaon",
                description:
                  "Comprehensive central venous care including catheter placement, angioplasty, and occlusion treatment.",
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
                    name: "Central Venous Care in Gurgaon",
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
                    name: "How do you care for a central venous line?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Keep the site clean and dry, follow hygiene protocols, change dressings regularly, and flush the catheter as advised.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is central venous access care?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It includes proper catheter placement, maintenance, infection prevention, and monitoring.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long can a central venous catheter stay?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Depending on type—PICC lines last weeks to months, while tunneled catheters can remain longer with proper care.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is central line insertion painful?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Usually done under local anesthesia with minimal discomfort.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are signs of infection?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Fever, redness, swelling, warmth, or discharge near the catheter site.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Central Venous Care in Gurgaon: Expert Treatment for Better Vascular Health"
        description="Advanced central line placement and vascular intervention treatments."
      >
        <CentralVenousContent />
      </ServiceLayout>
    </>
  );
}
