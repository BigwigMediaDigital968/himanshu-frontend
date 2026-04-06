import ServiceLayout from "../components/ServiceLayout";
import AVFistulaContent from "./AVFistulaContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

const PAGE_URL = `${SITE_URL}/services/av-fistula-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma",
  description:
    "Need AV fistula surgery in Gurgaon? Dr. Himanshu Verma at Fortis offers expert creation, repair & dialysis access care with high success rates. Book consultation.",
  keywords: [
    "AV fistula treatment in Gurgaon",
    "AV fistula surgery in Gurgaon",
    "AV fistula surgeon Gurgaon",
    "dialysis access specialist",
    "hemodialysis vascular access",
    "arteriovenous fistula creation",
    "Dr. Himanshu Verma vascular surgeon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Gold standard vascular access procedure for long-term dialysis patients performed with precision and safety.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AV Fistula Treatment in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma",
    description:
      "Specialized arteriovenous fistula creation for reliable dialysis access.",
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
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      areaServed: ["Gurgaon", "Delhi NCR"],
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
      name: "Arteriovenous Fistula",
      alternateName: "AV Fistula",
      description:
        "A surgically created connection between an artery and vein used for long-term hemodialysis access.",
    },

    /* ================= PROCEDURE ================= */
    {
      "@type": "MedicalProcedure",
      name: "AV Fistula Creation Surgery",
      procedureType: "Vascular Surgical Procedure",
      bodyLocation: "Upper Limb Arteries and Veins",
      howPerformed:
        "A surgical connection is made between an artery and vein to create high-flow access for hemodialysis.",
      provider: {
        "@id": `${SITE_URL}/#doctor`,
      },
    },

    /* ================= WEBPAGE ================= */
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "AV Fistula Treatment in Gurgaon",
      description:
        "Expert AV fistula surgery in Gurgaon for long-term dialysis access.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: SITE_URL,
        name: "Dr. Himanshu Verma",
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
          name: "AV Fistula Treatment in Gurgaon",
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
          name: "What is AV fistula used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AV fistula is used for long-term dialysis access by providing a reliable and durable connection between an artery and vein.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an AV fistula last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With proper care, an AV fistula can last for many years and is considered the most durable dialysis access option.",
          },
        },
        {
          "@type": "Question",
          name: "Is AV fistula surgery painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The procedure is usually done under local anesthesia, so patients feel minimal discomfort during surgery.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to recover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery usually takes a few weeks, and the fistula matures in 4–8 weeks before use.",
          },
        },
        {
          "@type": "Question",
          name: "Why is AV fistula preferred over other access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AV fistula has lower infection risk, better blood flow, and longer lifespan compared to grafts or catheters.",
          },
        },
      ],
    },
  ],
};

export default function AVFistulaPage() {
  return (
    <>
      {/* ✅ Full SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ServiceLayout
        title="AV Fistula Treatment in Gurgaon"
        description="Gold standard vascular access for safe and long-term dialysis."
      >
        <AVFistulaContent />
      </ServiceLayout>
    </>
  );
}
