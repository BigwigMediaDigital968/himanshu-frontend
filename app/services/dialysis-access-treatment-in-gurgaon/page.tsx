import ServiceLayout from "../components/ServiceLayout";
import DialysisAccessContent from "./DialysisAccessContent";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/dialysis-access-treatment-in-gurgaon";

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title: "AV Fistula Treatment in Gurgaon | Dialysis Access Surgery | Dr. Himanshu Verma",
  description:
    "Get expert AV Fistula treatment in Gurgaon by Dr. Himanshu Verma (MBBS, MS, MCh), Director – Vascular Surgery at Fortis FMRI. 17+ yrs experience. AV Graft & Permacath care.",
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
      "Get expert AV Fistula treatment in Gurgaon by Dr. Himanshu Verma (MBBS, MS, MCh), Director - Vascular Surgery at Fortis FMRI. 17+ yrs experience. AV Graft & Permacath care.",
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

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Himanshu Verma",
  honorificPrefix: "Dr.",
  honorificSuffix: "MBBS, MS, MCh (Vascular Surgery), FEVS",
  jobTitle: "Director – Vascular & Endovascular Surgery",
  description:
    "Vascular & Endovascular Surgeon with 17+ years experience, specialising in AV Fistula treatment, dialysis access surgery, and endovascular procedures at Fortis FMRI Gurgaon.",
  url: "https://www.drhimanshuverma.com/about",
  image:
    "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg",
  telephone: "+91-8826833598",
  email: "varenyamvascular@gmail.com",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Banaras Hindu University",
    },
    {
      "@type": "Hospital",
      name: "Mayo Clinic, USA",
    },
    {
      "@type": "Hospital",
      name: "Johns Hopkins Hospital, USA",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MBBS",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MS General Surgery",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MCh Vascular Surgery",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Ted Rogers Clinical Research Fellowship – Mayo Clinic",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Society of Vascular Surgery (SVS), USA",
    },
    {
      "@type": "Organization",
      name: "Vascular Society of India",
    },
  ],
  worksFor: {
    "@type": "Hospital",
    name: "Fortis Memorial Research Institute",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite HUDA City Centre, Sector 44",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122003",
      addressCountry: "IN",
    },
  },
  medicalSpecialty: "Vascular Surgery",
  sameAs: [
    "https://www.linkedin.com/in/drhimanshuverma",
    "https://www.instagram.com/drhimanshu_verma",
    "https://www.youtube.com/channel/UCEoRfpXsGBAhPTUFdJDqGaQ",
  ],
};


const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: "Dr. Himanshu Verma – Vascular & Endovascular Surgery, Fortis FMRI",
  url: "https://www.drhimanshuverma.com",
  telephone: "+91-8826833598",
  email: "varenyamvascular@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Fortis Memorial Research Centre, Opposite HUDA City Centre, Sector 44",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  medicalSpecialty: "Vascular Surgery",
  availableService: [
    "AV Fistula Treatment",
    "Dialysis Access Surgery",
    "AV Graft Placement",
    "Permacath Insertion",
    "Varicose Vein Treatment",
  ],
  priceRange: "₹₹₹",
  sameAs: [
    "https://www.facebook.com/share/1DxjE4e1wq/",
    "https://www.linkedin.com/in/drhimanshuverma",
  ],
};

const avFistulaProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "AV Fistula Treatment in Gurgaon",
  alternateName: [
    "Arteriovenous Fistula Creation",
    "Radiocephalic AV Fistula",
    "Brachiocephalic AV Fistula",
    "Dialysis Access Surgery",
  ],
  description:
    "AV Fistula treatment involves surgically connecting an artery and vein to create a reliable, long-term dialysis access point. Dr. Himanshu Verma performs AV Fistula creation, angioplasty, reconstruction, and access management at Fortis FMRI, Gurgaon.",
  procedureType: "Surgical",
  bodyLocation: "Forearm, Arm (wrist or elbow)",
  indication: {
    "@type": "MedicalIndication",
    name: "Chronic Kidney Disease requiring Haemodialysis",
  },
  followup:
    "Regular AV Fistula monitoring, duplex ultrasound assessment, angioplasty if stenosis develops",
  preparation:
    "Vein mapping, medical history review, vascular assessment",
  recognizingAuthority: {
    "@type": "Organization",
    name: "KDOQI – Kidney Disease Outcomes Quality Initiative",
    url: "https://kdoqi.org",
  },
  guideline: {
    "@type": "MedicalGuidelineRecommendation",
    guidelineSubject: {
      "@type": "MedicalEntity",
      name: "Vascular Access for Haemodialysis",
    },
    recommendationStrength:
      "Strong – AV Fistula preferred as first choice per KDOQI 2019",
  },
  performer: {
    "@type": "Physician",
    name: "Dr. Himanshu Verma",
    url: "https://www.drhimanshuverma.com/about",
  },
  location: {
    "@type": "Hospital",
    name: "Fortis Memorial Research Institute, Gurgaon",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the three types of dialysis access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The three main types of dialysis access are AV Fistula, AV Graft, and catheter-based access (Permacath or Templine). AV Fistula is the gold standard for long-term dialysis, preferred per KDOQI guidelines. The choice depends on vein health, urgency, and long-term treatment goals.",
      },
    },
    {
      "@type": "Question",
      name: "What is AV Fistula treatment and who needs it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AV Fistula treatment involves surgically connecting an artery to a vein in the arm to create a durable dialysis access point. It is recommended for patients with chronic kidney disease (CKD) who require regular haemodialysis. Dr. Himanshu Verma performs AV Fistula creation surgery at Fortis FMRI, Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an AV Fistula last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-created AV Fistula can last many years, often for the entire duration of a patient's dialysis treatment. Regular monitoring, timely angioplasty when needed, and proper home care can significantly extend its lifespan.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my dialysis access is not working properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warning signs include swelling, redness, pain, unusual warmth near the access site, weak or absent thrill (vibration), and reduced blood flow during dialysis sessions. If you notice any of these, consult a vascular surgeon promptly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between AV Fistula and AV Graft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AV Fistula uses your own blood vessels (artery connected directly to vein) and is the preferred long-term option due to lower infection and clotting risk. AV Graft uses a synthetic tube to connect artery to vein when natural veins are not suitable. Fistulas last longer but usually need 4–6 weeks to mature before use.",
      },
    },
    {
      "@type": "Question",
      name: "How do I care for my AV Fistula access site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep the site clean and dry, avoid tight clothing or jewellery over the access, never allow blood pressure measurement on the access arm, check the thrill (vibration) daily, and report any changes immediately. Your care team will provide personalised guidance after surgery.",
      },
    },
  ],
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
                name: "AV Fistula Treatment in Gurgaon | Dialysis Access Surgery | Dr. Himanshu Verma",
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
                    name: "AV Fistula Treatment in Gurgaon",
                    item: "https://www.drhimanshuverma.com/services/dialysis-access-treatment-in-gurgaon",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicSchema),
        }}
      />
      {/* ================= MEDICAL PROCEDURE ================= */}
      <script
        id="av-fistula-procedure-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(avFistulaProcedureSchema),
        }}
      />

      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceLayout
        title="AV Fistula Treatment in Gurgaon - Dialysis Access Surgery by Dr. Himanshu Verma"
        description="Consult Dr. Himanshu, a top Dialysis Access Surgeon in Gurgaon, for AV Fistula, AV Graft, and Permacath care to ensure safe and effective dialysis."
      >
        <DialysisAccessContent />
      </ServiceLayout>
    </>
  );
}
