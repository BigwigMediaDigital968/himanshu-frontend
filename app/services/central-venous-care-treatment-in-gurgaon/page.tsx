import ServiceLayout2 from "../components/ServiceLayout2";
import CentralVenousContent from "./CentralVenousContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/central-venous-care-treatment-in-gurgaon";

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
      "Expert Central Venous Care in Gurgaon including central venous catheter placement, angioplasty, and occlusion treatment by experienced vascular specialists.",
    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Central Venous Catheter Placement in Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Central Venous Catheter Placement in Gurgaon | Dr. Himanshu Verma",
    description:
      "Advanced central line, PICC and chemo port placement with minimally invasive techniques.",
    images: [OG_IMAGE],
    site: "@YourTwitterHandle", // 🔁 Replace if available
    creator: "@YourTwitterHandle", // 🔁 Replace if available
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
      name: "How do you care for a central venous line?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Central venous line care includes keeping the insertion site clean and dry, washing hands before touching the catheter, changing dressings regularly, and flushing the line as advised by the doctor.",
      },
    },
    {
      "@type": "Question",
      name: "What is central venous access care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Central venous access care involves proper placement, maintenance, infection prevention, and monitoring of a central venous catheter such as PICC lines, chemo ports, or dialysis catheters.",
      },
    },
    {
      "@type": "Question",
      name: "How long can a central venous catheter stay in place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration depends on the type of catheter. Non-tunneled lines are used for short periods, while PICC lines can stay for weeks to months and tunneled catheters or ports can remain for years with proper care.",
      },
    },
    {
      "@type": "Question",
      name: "Is central line insertion painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Central line insertion is usually performed under local anesthesia. Patients may feel mild pressure during the procedure and slight soreness afterward.",
      },
    },
    {
      "@type": "Question",
      name: "What are signs of central line infection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs of infection include fever, redness, swelling, warmth, or discharge around the catheter site. Immediate medical evaluation is important to prevent complications.",
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
      name: "Central Venous Catheter Placement",
      procedureType: "Minimally Invasive Vascular Procedure",
      bodyLocation: "Central Veins",
      howPerformed:
        "Ultrasound-guided PICC line insertion, chemo port placement, dialysis catheter insertion, and venous angioplasty when required.",
      provider: {
        "@id": "https://www.drhimanshuverma.com/#doctor",
      },
    },
  ],
};

export default function CentralVenousCarePage() {
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

      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
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
              {
                "@type": "Physician",
                name: "Dr. Himanshu Verma",
                medicalSpecialty: "Vascular Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Central Venous Catheter Placement",
                procedureType: "Minimally Invasive Vascular Procedure",
                bodyLocation: "Central Veins",
                howPerformed:
                  "Procedure includes ultrasound-guided PICC line insertion, chemo port placement, dialysis catheter insertion and venous angioplasty when required.",
              },
            ],
          }),
        }}
      />

      <ServiceLayout2
        title="Central Venous Care in Gurgaon: Expert Treatment for Better Vascular Health"
        description="Advanced central line placement and vascular intervention treatments."
        active="venouscare"
      >
        <CentralVenousContent />
      </ServiceLayout2>
    </>
  );
}
