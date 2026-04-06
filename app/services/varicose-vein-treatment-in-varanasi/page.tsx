import type { Metadata } from "next";
import VaranasiContent from "./VaranasiContent";
import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

/* ──────────────────────────────────────────────
   PAGE URL: /services/varicose-vein-treatment-in-varanasi
────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Varanasi | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment in Varanasi by Dr. Himanshu Verma. Get expert diagnosis and minimally invasive care, including EVLT, foam sclerotherapy & medical glue treatment.",
  keywords: [
    "varicose veins treatment Varanasi",
    "varicose vein treatment in Varanasi",
    "varicose veins specialist Varanasi",
    "EVLT Varanasi",
    "foam sclerotherapy Varanasi",
    "medical glue treatment Varanasi",
    "radiofrequency ablation Varanasi",
    "Dr Himanshu Verma Varanasi",
    "spider veins treatment Varanasi",
    "vein doctor Varanasi",
    "minimally invasive vein treatment Varanasi",
    "varicose vein surgery cost Varanasi",
    "RFA treatment Varanasi",
    "VenaSeal Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-varanasi",
  },
  openGraph: {
    title: "Varicose Veins Treatment in Varanasi | Dr. Himanshu Verma",
    description:
      "Advanced minimally invasive varicose vein treatment in Varanasi — EVLT, Foam Sclerotherapy, Medical Glue & RFA by Dr. Himanshu Verma.",
    url: "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-varanasi",
    siteName: "Dr. Himanshu Verma",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drhimanshuverma.com/images/varicose-vein-treatment-varanasi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Varicose Vein Treatment in Varanasi by Dr. Himanshu Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varicose Veins Treatment in Varanasi | Dr. Himanshu Verma",
    description:
      "Expert varicose vein care in Varanasi — EVLT, Foam Sclerotherapy, Medical Glue & RFA. Book your consultation today.",
    images: [
      "https://www.drhimanshuverma.com/images/varicose-vein-treatment-varanasi-og.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ──────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
   1. MedicalWebPage
   2. BreadcrumbList
   3. FAQPage
   4. ItemList — MedicalProcedures
   5. Physician — Dr. Himanshu Verma
────────────────────────────────────────────── */

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-varanasi";

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Varicose Veins Treatment in Varanasi | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment in Varanasi by Dr. Himanshu Verma. Expert diagnosis and minimally invasive care including EVLT, foam sclerotherapy & medical glue treatment.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  about: {
    "@type": "MedicalCondition",
    name: "Varicose Veins",
    alternateName: "Chronic Venous Insufficiency",
    description:
      "Varicose veins are swollen and twisted veins most frequent in the legs, occurring when venous valves weaken and allow blood to pool beneath the skin.",
    possibleTreatment: [
      { "@type": "MedicalTherapy", name: "Endovenous Laser Treatment (EVLT)" },
      { "@type": "MedicalTherapy", name: "Medical Glue Treatment (VenaSeal)" },
      { "@type": "MedicalTherapy", name: "Foam Sclerotherapy" },
      {
        "@type": "MedicalTherapy",
        name: "Microphlebectomy / Stab Phlebectomy",
      },
      { "@type": "MedicalTherapy", name: "Radiofrequency Ablation (RFA)" },
    ],
    signOrSymptom: [
      {
        "@type": "MedicalSymptom",
        name: "Twisted and bulging blue veins in the legs",
      },
      { "@type": "MedicalSymptom", name: "Leg soreness or heaviness" },
      {
        "@type": "MedicalSymptom",
        name: "Swelling in ankles, feet, and lower legs",
      },
      {
        "@type": "MedicalSymptom",
        name: "Pain or itching near affected veins",
      },
      { "@type": "MedicalSymptom", name: "Restless or cramping legs at night" },
    ],
    riskFactor: [
      { "@type": "MedicalRiskFactor", name: "Genetics / Family history" },
      { "@type": "MedicalRiskFactor", name: "Pregnancy" },
      { "@type": "MedicalRiskFactor", name: "Obesity" },
      { "@type": "MedicalRiskFactor", name: "Prolonged standing or sitting" },
      { "@type": "MedicalRiskFactor", name: "Aging" },
    ],
  },
  author: {
    "@type": "Physician",
    name: "Dr. Himanshu Verma",
    url: "https://www.drhimanshuverma.com",
    medicalSpecialty: "Vascular Surgery",
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Dr. Himanshu Verma Clinic",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Varicose Vein Treatment in Varanasi",
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is surgery for varicose veins done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surgery is done to relieve pain, swelling, and discomfort caused by varicose veins. It also helps prevent complications like ulcers, bleeding, or blood clots, and improves the appearance of the legs.",
      },
    },
    {
      "@type": "Question",
      name: "What is done in the surgery for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern treatments include minimally invasive procedures like laser therapy, radiofrequency ablation, or sclerotherapy. These methods close or remove the damaged veins with small incisions or injections.",
      },
    },
    {
      "@type": "Question",
      name: "How long will the patient remain unconscious after varicose vein treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most procedures are done under local anesthesia, so the patient stays awake or lightly sedated. In rare cases of general anesthesia, unconsciousness lasts only during the procedure.",
      },
    },
    {
      "@type": "Question",
      name: "Can I walk after surgery for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, walking is usually encouraged soon after the procedure to improve blood circulation. Most patients can walk the same day and resume normal activities within a few days.",
      },
    },
    {
      "@type": "Question",
      name: "How much will it cost to remove varicose veins in Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost varies depending on the treatment type, severity, and clinic, but in India it typically ranges from ₹30,000 to ₹1,50,000. Minimally invasive procedures may cost more but offer quicker recovery.",
      },
    },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Varicose Vein Treatment Options in Varanasi",
  description:
    "Advanced minimally invasive treatments for varicose veins offered by Dr. Himanshu Verma in Varanasi.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "MedicalProcedure",
        name: "Endovenous Laser Treatment (EVLT)",
        description:
          "One of the best varicose vein treatments in Varanasi. Laser energy closes the damaged vein under local anesthesia for effective, long-term results.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Leg veins",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "MedicalProcedure",
        name: "Medical Glue Treatment (VenaSeal)",
        description:
          "Advanced treatment that seals the affected vein quickly and effectively without surgery — no compression stockings required.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Leg veins",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "MedicalProcedure",
        name: "Foam Sclerotherapy",
        description:
          "Foam solution injected into problem veins to shrink and eliminate them over time. Suitable for spider veins and smaller varicose veins.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Varicose and spider veins",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "MedicalProcedure",
        name: "Microphlebectomy / Stab Phlebectomy",
        description:
          "Safe removal of superficial varicose veins through tiny incisions under local anesthesia. Minimal scarring with fast healing.",
        procedureType: "https://schema.org/SurgicalProcedure",
        bodyLocation: "Superficial leg veins",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "MedicalProcedure",
        name: "Radiofrequency Ablation (RFA)",
        description:
          "Minimally invasive treatment using heat to seal and heal damaged veins. Enables rapid recovery with reduced pain and swelling.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Leg veins",
      },
    },
  ],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Himanshu Verma",
  url: "https://www.drhimanshuverma.com",
  medicalSpecialty: ["Vascular Surgery", "Interventional Radiology"],
  description:
    "Dr. Himanshu Verma is a leading varicose vein specialist offering advanced minimally invasive treatments in Varanasi including EVLT, RFA, Medical Glue, and foam sclerotherapy.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: ["https://www.drhimanshuverma.com"],
};

/* ──────────────────────────────────────────────
   PAGE COMPONENT
────────────────────────────────────────────── */

export default function VaricoseVeinTreatmentVaranasiPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* Page Content */}
      <Nav />
      <VaranasiContent />
      <Footer />
    </>
  );
}
