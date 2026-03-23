import ServiceLayout from "../components/ServiceLayout";
import PelvicContent from "./PelvicContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/pelvic-venous-disorder-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Pelvic Venous Disorders Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Advanced diagnosis and minimally invasive treatment for pelvic venous disorders and pelvic congestion syndrome (PCS) in Gurgaon.",
  keywords: [
    "pelvic venous disorders treatment Gurgaon",
    "pelvic congestion syndrome treatment Gurgaon",
    "PCS treatment Gurgaon",
    "pelvic vein embolization Gurgaon",
    "pelvic pain vascular specialist Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Pelvic Venous Disorders Treatment in Gurgaon",
    description:
      "Expert care for pelvic congestion syndrome (PCS) including pelvic vein embolization.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pelvic Venous Disorders Treatment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pelvic Venous Disorders Treatment in Gurgaon",
    description:
      "Advanced PCS treatment with minimally invasive embolization techniques.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PelvicVenousDisorder() {
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
                name: "Pelvic Venous Disorders",
                alternateName: "Pelvic Congestion Syndrome (PCS)",
                description:
                  "A condition caused by enlarged or weakened pelvic veins leading to chronic pelvic pain, heaviness, and discomfort.",
                signOrSymptom: [
                  { "@type": "MedicalSymptom", name: "Chronic pelvic pain" },
                  { "@type": "MedicalSymptom", name: "Pelvic heaviness" },
                  { "@type": "MedicalSymptom", name: "Pain after standing" },
                  {
                    "@type": "MedicalSymptom",
                    name: "Lower abdominal discomfort",
                  },
                ],
              },

              /* ================= PROCEDURE ================= */
              {
                "@type": "MedicalProcedure",
                name: "Pelvic Vein Embolization",
                procedureType: "Minimally Invasive Vascular Procedure",
                bodyLocation: "Pelvic Veins",
                howPerformed:
                  "A catheter-based procedure performed under imaging guidance to block abnormal veins and relieve pelvic congestion symptoms.",
                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              /* ================= WEBPAGE ================= */
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Pelvic Venous Disorders Treatment in Gurgaon",
                description:
                  "Advanced treatment for pelvic congestion syndrome including embolization and vascular care.",
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
                    name: "Pelvic Venous Disorders Treatment in Gurgaon",
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
                    name: "How are pelvic venous disorders diagnosed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Diagnosis includes ultrasound, CT scan, MRI, or venography.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What causes pelvic venous disorders?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Weak veins, hormonal changes, genetics, or pressure on pelvic veins.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are pelvic venous disorders painful?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, symptoms range from mild discomfort to chronic pelvic pain.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is treatment effective?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, minimally invasive treatments like embolization provide significant relief.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Pelvic Venous Disorders Treatment in Gurgaon"
        description="Advanced diagnosis and treatment of pelvic congestion syndrome and pelvic venous disorders."
      >
        <PelvicContent />
      </ServiceLayout>
    </>
  );
}
