import ServiceLayout from "../components/ServiceLayout";
import GonadalContent from "./GonadalContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/gonadal-vein-disease-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "Gonadal Vein Disease Treatment in Gurgaon",
  description:
    "Get expert Gonadal Vein Disease Treatment in Gurgaon by Dr. Himanshu Verma. Advanced diagnosis and minimally invasive care for pelvic vein disorders.",
  keywords: [
    "Gonadal Vein Disease Treatment in Gurgaon",
    "Gonadal vein disease treatment",
    "pelvic vein disease treatment Gurgaon",
    "gonadal vein embolization Gurgaon",
    "pelvic congestion treatment Gurgaon",
    "vascular specialist Gurgaon",
    "Dr Himanshu Verma",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Gonadal Vein Disease Treatment in Gurgaon",
    description:
      "Specialized minimally invasive embolization for ovarian and testicular vein reflux disorders in Gurgaon.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gonadal Vein Disease Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gonadal Vein Disease Treatment in Gurgaon",
    description:
      "Expert embolization treatment for ovarian and testicular vein reflux.",
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

export default function GonadalVeinDisease() {
  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // ── MedicalBusiness ──────────────────────────────────────────
              {
                "@type": "MedicalBusiness",
                name: "Dr. Himanshu Verma - Vascular Surgeon",
                image: OG_IMAGE,
                url: PAGE_URL,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  addressCountry: "IN",
                },
                areaServed: "Gurgaon",
              },

              // ── Physician ────────────────────────────────────────────────
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },

              // ── MedicalProcedure ─────────────────────────────────────────
              {
                "@type": "MedicalProcedure",
                name: "Gonadal Vein Embolization",
                procedureType: "Minimally Invasive",
                bodyLocation: "Ovarian and Testicular Veins",
                howPerformed:
                  "Procedure performed under imaging guidance using catheter-based embolization to treat vein reflux.",
              },

              // ── WebPage ──────────────────────────────────────────────────
              {
                "@type": "WebPage",
                "@id": PAGE_URL,
                url: PAGE_URL,
                name: "Gonadal Vein Disease Treatment in Gurgaon",
                description:
                  "Get expert Gonadal Vein Disease Treatment in Gurgaon by Dr. Himanshu Verma. Advanced diagnosis and minimally invasive care for pelvic vein disorders.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@type": "WebSite",
                  url: "https://www.drhimanshuverma.com",
                  name: "Dr. Himanshu Verma",
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                  width: 1200,
                  height: 630,
                },
                breadcrumb: {
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
                      name: "Gonadal Vein Disease Treatment in Gurgaon",
                      item: PAGE_URL,
                    },
                  ],
                },
              },

              // ── FAQPage ──────────────────────────────────────────────────
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What Is Gonadal Vein Syndrome?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Gonadal vein syndrome refers to the symptoms caused by gonadal vein disease, especially chronic pelvic pain due to venous congestion.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Happens If the Gonadal Vein Is Blocked?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "When blocked, blood cannot flow properly toward the heart. This increases pressure in the lower abdominal veins, leading to swelling and persistent pain.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What Organs Do the Gonadal Veins Drain?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The gonadal veins drain blood from the ovaries in women and testes in men, carrying it back toward the heart.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is gonadal vein disease diagnosed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ultrasound, CT scan, and venography help confirm gonadal vein disease.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who is at higher risk of gonadal vein disease?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Women with multiple pregnancies are more prone to gonadal vein disease.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can gonadal vein disease be cured permanently?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "With proper intervention like embolization or foam therapy, gonadal vein disease can be effectively managed.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Gonadal Vein Disease Treatment in Gurgaon"
        description="Comprehensive diagnosis and minimally invasive treatment for ovarian and testicular vein reflux disorders."
      >
        <GonadalContent />
      </ServiceLayout>
    </>
  );
}
