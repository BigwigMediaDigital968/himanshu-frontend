import type { Metadata } from "next";
import DelhiContent from "./DelhiContent";
import Nav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

/* ──────────────────────────────────────────────
   PAGE URL: /services/varicose-vein-treatment-in-delhi
────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Delhi | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment in Delhi by Dr. Himanshu Verma. Get expert diagnosis and minimally invasive care, including EVLT, foam sclerotherapy & medical glue treatment.",
  keywords: [
    "varicose veins treatment Delhi",
    "varicose vein treatment in Delhi",
    "varicose veins specialist Delhi",
    "EVLT Delhi",
    "foam sclerotherapy Delhi",
    "VenaSeal Delhi",
    "radiofrequency ablation Delhi",
    "Dr Himanshu Verma varicose veins",
    "varicose vein treatment West Delhi",
    "varicose vein treatment South Delhi",
    "varicose vein treatment North Delhi",
    "varicose vein treatment East Delhi",
    "varicose vein treatment Central Delhi",
    "spider veins treatment Delhi",
  ],
  alternates: {
    canonical:
      "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-delhi",
  },
  openGraph: {
    title: "Varicose Veins Treatment in Delhi | Dr. Himanshu Verma",
    description:
      "Advanced minimally invasive varicose vein treatment in Delhi — EVLT, Foam Sclerotherapy, VenaSeal & RFA by Dr. Himanshu Verma.",
    url: "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-delhi",
    siteName: "Dr. Himanshu Verma",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drhimanshuverma.com/images/varicose-vein-treatment-delhi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Varicose Vein Treatment in Delhi by Dr. Himanshu Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varicose Veins Treatment in Delhi | Dr. Himanshu Verma",
    description:
      "Expert varicose vein care in Delhi — EVLT, Foam Sclerotherapy, VenaSeal & RFA. Book your consultation today.",
    images: [
      "https://www.drhimanshuverma.com/images/varicose-vein-treatment-delhi-og.jpg",
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
   4. MedicalProcedure (treatments)
   5. Physician (Dr. Himanshu Verma)
────────────────────────────────────────────── */

const PAGE_URL =
  "https://www.drhimanshuverma.com/services/varicose-vein-treatment-in-delhi";

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Varicose Veins Treatment in Delhi | Dr. Himanshu Verma",
  description:
    "Advanced varicose veins treatment in Delhi by Dr. Himanshu Verma. Expert diagnosis and minimally invasive care including EVLT, foam sclerotherapy & medical glue treatment.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  about: {
    "@type": "MedicalCondition",
    name: "Varicose Veins",
    alternateName: "Varicose Veins / Chronic Venous Insufficiency",
    description:
      "Varicose veins are bulging, twisted veins most common in the legs, arising from weakening of venous valves that allow blood to flow backward and pool.",
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
      { "@type": "MedicalSymptom", name: "Bulging twisted veins in legs" },
      { "@type": "MedicalSymptom", name: "Leg pain and heaviness" },
      { "@type": "MedicalSymptom", name: "Ankle and lower leg swelling" },
      { "@type": "MedicalSymptom", name: "Itching near affected veins" },
      { "@type": "MedicalSymptom", name: "Nocturnal leg cramps" },
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
        addressLocality: "Delhi",
        addressRegion: "Delhi",
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
      name: "Varicose Vein Treatment in Delhi",
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
      name: "Can varicose veins be cured permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern Varicose Vein Treatment in Delhi, such as laser therapy, radiofrequency ablation (RFA), and sclerotherapy, can effectively eliminate existing varicose veins. However, new veins may develop over time if underlying risk factors are not managed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you live a long life with varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most people live a normal life with varicose veins. With timely Varicose Vein Treatment in Delhi, complications can be prevented, and overall quality of life can be improved.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best treatment for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best Varicose Vein Treatment in Delhi includes minimally invasive procedures like Endovenous Laser Treatment (EVLT) and Radiofrequency Ablation (RFA), which are safe, effective, and offer quick recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Is varicose vein treatment painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Varicose Vein Treatment in Delhi options are minimally invasive and performed under local anesthesia, ensuring little to no pain during the procedure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to recover after treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recovery after Varicose Vein Treatment in Delhi is usually quick, and patients can resume normal activities within 1–3 days in most cases.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if varicose veins are left untreated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without proper Varicose Vein Treatment in Delhi, the condition may worsen and lead to swelling, skin changes, blood clots, or leg ulcers.",
      },
    },
    {
      "@type": "Question",
      name: "Who is at risk of developing varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common risk factors include aging, genetics, obesity, pregnancy, and prolonged standing. Seeking early Varicose Vein Treatment in Delhi can help manage symptoms effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Can varicose veins come back after treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While treated veins do not return, new veins may develop over time. Regular follow-ups after Varicose Vein Treatment in Delhi can help in early detection and management.",
      },
    },
    {
      "@type": "Question",
      name: "Are there non-surgical treatments available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Varicose Vein Treatment in Delhi includes non-surgical options like compression stockings, lifestyle changes, and minimally invasive procedures such as foam sclerotherapy and VenaSeal.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor for varicose veins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should consult a specialist for Varicose Vein Treatment in Delhi if you experience pain, swelling, heaviness, or visible vein enlargement.",
      },
    },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Varicose Vein Treatment Options in Delhi",
  description:
    "Advanced minimally invasive treatments for varicose veins offered by Dr. Himanshu Verma in Delhi.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "MedicalProcedure",
        name: "Endovenous Laser Treatment (EVLT)",
        description:
          "One of the most successful methods for varicose vein treatment. The injured vein is sealed with laser energy under local anesthesia.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: "Leg veins",
        followUp: "Resume normal activities within 1–3 days",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "MedicalProcedure",
        name: "Medical Glue Treatment (VenaSeal)",
        description:
          "Minimally invasive glue-based treatment that seals the affected vein without surgery, allowing quick recovery without compression stockings.",
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
          "A foam solution is injected into troublesome veins to shrink and eradicate them over time.",
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
          "Superficial varicose veins safely removed via tiny incisions under local anesthesia.",
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
          "Heat energy seals and repairs damaged veins. Minimally invasive with rapid recovery, reduces pain and edema.",
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
    "Dr. Himanshu Verma is a leading varicose vein specialist in Delhi, offering advanced minimally invasive treatments including EVLT, RFA, VenaSeal, and foam sclerotherapy.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  sameAs: ["https://www.drhimanshuverma.com"],
};

/* ──────────────────────────────────────────────
   PAGE COMPONENT
────────────────────────────────────────────── */

export default function VaricoseVeinTreatmentDelhiPage() {
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
      <DelhiContent />
      <Footer />
    </>
  );
}
