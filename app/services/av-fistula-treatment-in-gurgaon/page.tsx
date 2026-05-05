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
      "url": "https://www.drhimanshuverma.com",
      "image": "https://www.drhimanshuverma.com/images/dr-himanshu-verma.jpg",
      "description": "Dr. Himanshu Verma is Director – Vascular & Endovascular Surgery at Fortis FMRI, Gurgaon. He holds MBBS, MS, MCh (Vascular Surgery) and FEVS qualifications with over 17 years of clinical experience in complex arterial, venous, lymphatic, and dialysis-access disorders.",
      "medicalSpecialty": [
        "Vascular Surgery",
        "Endovascular Surgery",
        "Dialysis Access Surgery",
        "Limb Salvage Surgery"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MBBS"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MS (General Surgery)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MCh (Vascular Surgery)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certification",
          "name": "FEVS – Fellow of European Board of Vascular Surgery"
        }
      ],
      "jobTitle": "Director – Vascular & Endovascular Surgery",
      "worksFor": {
        "@type": "Hospital",
        "name": "Fortis Memorial Research Institute (FMRI)",
        "url": "https://www.fortishealthcare.com/hospitals/fortis-memorial-research-institute-gurgaon",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 44",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122002",
          "addressCountry": "IN"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vascular & Dialysis Access Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "AV Fistula Creation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Fistula Angioplasty (Fistuloplasty)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Balloon Assisted Maturation (BAM)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Mechanical Thrombectomy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Pharmacomechanical Thrombectomy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Basilic Vein Transposition (BVT)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Hybrid Endovascular and Surgical Salvage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "AV Graft Placement"
            }
          }
        ]
      }
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

      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.drhimanshuverma.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.drhimanshuverma.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AV Fistula Treatment in Gurgaon",
          "item": "https://www.drhimanshuverma.com/services/av-fistula-treatment-in-gurgaon"
        }
      ],
    },

    /* ================= FAQ ================= */
    {
      "@type": "FAQPage",

      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AV fistula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AV fistula is a surgically created connection between an artery and a vein — most commonly in the forearm — that provides reliable, long-term access for hemodialysis. It is the preferred dialysis access method for patients with Chronic Kidney Disease (CKD) or End-Stage Renal Disease (ESRD) and is considered the gold standard by international nephrology and vascular guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What qualifications does Dr. Himanshu Verma hold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Himanshu Verma holds MBBS, MS, MCh (Vascular Surgery), and FEVS (Fellow of European Board of Vascular Surgery) qualifications. He serves as Director of Vascular & Endovascular Surgery at Fortis Memorial Research Institute (FMRI), Gurgaon, with over 17 years of clinical experience in complex vascular and dialysis access surgery."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best type of dialysis access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AV fistula is the gold standard for most dialysis patients. Compared to AV grafts and central venous catheters, it has the lowest infection risk, the longest functional lifespan, and delivers the most efficient blood flow during hemodialysis sessions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does AV fistula surgery take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The procedure typically takes 30 to 90 minutes and is performed under local anaesthesia as a day-care procedure at Fortis FMRI, Gurgaon. Most patients are discharged the same day with specific post-operative care instructions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an AV fistula take to mature?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 6 to 12 weeks after creation. In cases where the fistula is slow to develop adequate flow or size, Balloon Assisted Maturation (BAM) can be used to dilate and accelerate the maturation process."
          }
        },
        {
          "@type": "Question",
          "name": "Can a blocked AV fistula be saved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in most cases. Thrombectomy (clot removal) or angioplasty performed promptly can restore function in an occluded fistula. Dr. Himanshu Verma follows a Salvage First philosophy — ensuring every option is explored before a fistula is considered lost."
          }
        },
        {
          "@type": "Question",
          "name": "How long can an AV fistula last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper care, daily monitoring, and timely intervention by a vascular access specialist, many AV fistulas remain functional for 10 to 20 years or more."
          }
        },
        {
          "@type": "Question",
          "name": "How often should an AV fistula be checked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients should check the thrill (vibration) at home daily. Clinical assessment should take place before every dialysis session, with periodic specialist review — particularly if any change in flow or access function is noticed."
          }
        },
        {
          "@type": "Question",
          "name": "Is long-term catheter dialysis safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Catheters carry significantly higher risks of infection, blood clots, and central venous stenosis compared to AV fistulas. Prolonged catheter use can also damage central veins, complicating future access creation. Dr. Verma's protocol actively works to eliminate catheter dependency wherever clinically possible."
          }
        },
        {
          "@type": "Question",
          "name": "Is AV fistula creation suitable for every patient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most CKD and ESRD patients are eligible for AV fistula creation. Vessel size, vein health, and patient anatomy determine which type is most appropriate. A pre-operative vein mapping ultrasound is performed to confirm suitability and plan the optimal access strategy."
          }
        },
        {
          "@type": "Question",
          "name": "How is a failed AV fistula repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repair depends on the underlying problem. Stenosis is treated with angioplasty. Thrombosis is addressed with mechanical or pharmacomechanical thrombectomy. If the access has structurally deteriorated, surgical revision or reconstruction may be required. Dr. Verma's Salvage First approach ensures every option is explored before a fistula is considered lost."
          }
        }
      ]
    },
  ],
};

const medicalWebSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "AV Fistula Treatment in Gurgaon",
  "url": "https://www.drhimanshuverma.com/services/av-fistula-treatment-in-gurgaon",
  "description": "Get expert AV fistula creation, maturation support and salvage treatment in Gurgaon by Dr. Himanshu Verma, MCh (Vascular Surgery), FEVS — Director, Vascular & Endovascular Surgery at Fortis FMRI, Gurgaon.",
  "inLanguage": "en-IN",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Dr. Himanshu Verma",
    "url": "https://www.drhimanshuverma.com"
  },
  "about": {
    "@type": "MedicalProcedure",
    "name": "Arteriovenous Fistula Creation",
    "procedureType": "https://health-lifesci.schema.org/SurgicalProcedure",
    "bodyLocation": "Forearm or upper arm",
    "preparation": "Ultrasound vein mapping, vessel assessment, medical history review",
    "followup": "Clinical assessment before every dialysis session, Doppler ultrasound monitoring",
    "indication": {
      "@type": "MedicalIndication",
      "name": "End-Stage Renal Disease (ESRD) and Chronic Kidney Disease (CKD) requiring hemodialysis"
    },
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "Kidney Disease Outcomes Quality Initiative (KDOQI)"
    }
  },
  "specialty": {
    "@type": "MedicalSpecialty",
    "name": "Vascular Surgery"
  },
  "lastReviewed": "2025-01-01",
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. Himanshu Verma",
    "jobTitle": "Director – Vascular & Endovascular Surgery",
    "worksFor": {
      "@type": "Hospital",
      "name": "Fortis Memorial Research Institute (FMRI)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      }
    }
  }
}

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Himanshu Verma",

}



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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />
      <ServiceLayout
        title="AV Fistula Treatment in Gurgaon | Dr. Himanshu Verma - Vascular & Endovascular Surgeon, Fortis FMRI"
        description="Gold standard vascular access for safe and long-term dialysis."
      >
        <AVFistulaContent />
      </ServiceLayout>
    </>
  );
}
