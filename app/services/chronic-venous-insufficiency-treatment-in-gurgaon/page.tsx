import ServiceLayout from "../components/ServiceLayout";
import ChronicVenousContent from "./ChronicVenousContent";
import { Metadata } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";
const PAGE_URL = `${SITE_URL}/services/chronic-venous-insufficiency-treatment-in-gurgaon`;

const OG_IMAGE =
  "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769153488/himanshu/images/DSC05964.jpg";

export const metadata: Metadata = {
  title:
    "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",

  description:
    "Expert chronic venous insufficiency treatment in Gurgaon by Dr. Himanshu Verma at Fortis Memorial Research Institute. Specialist in EVLT, RFA, venous ulcer management, and compression therapy.",

  keywords: [
    "chronic venous insufficiency treatment Gurgaon",
    "CVI treatment Gurgaon",
    "leg swelling treatment Gurgaon",
    "venous ulcer treatment Gurgaon",
    "EVLT for CVI Gurgaon",
    "RFA vein treatment Gurgaon",
    "vascular surgeon Gurgaon",
    "Dr Himanshu Verma CVI specialist",
    "compression therapy Gurgaon",
    "vein specialist Gurgaon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",

    description:
      "Advanced diagnosis and minimally invasive treatment for chronic venous insufficiency including EVLT, RFA, venous ulcer care and compression therapy.",

    url: PAGE_URL,
    siteName: "Dr. Himanshu Verma",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Chronic Venous Insufficiency Treatment in Gurgaon",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Chronic Venous Insufficiency Treatment in Gurgaon | Dr. Himanshu Verma",

    description:
      "Expert CVI treatment in Gurgaon for swelling, venous ulcers, pain and venous reflux.",

    images: [OG_IMAGE],
  },
};

export default function ChronicVenousPage() {
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

              /* ================= MEDICAL WEBPAGE ================= */

              {
                "@type": "MedicalWebPage",

                "@id": `${PAGE_URL}#webpage`,

                name: "Chronic Venous Insufficiency Treatment in Gurgaon",

                url: PAGE_URL,

                description:
                  "Expert chronic venous insufficiency treatment in Gurgaon by Dr. Himanshu Verma, MCh Vascular Surgery, Fortis Memorial Research Institute. Specialist in EVLT, RFA, venous ulcer management, and compression therapy.",

                medicalAudience: "Patient",

                inLanguage: "en-IN",

                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },

                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                },

                about: {
                  "@type": "MedicalCondition",

                  name: "Chronic Venous Insufficiency",

                  alternateName: ["CVI", "Venous Insufficiency"],

                  associatedAnatomy: {
                    "@type": "AnatomicalStructure",
                    name: "Leg veins",
                  },
                },

                reviewedBy: {
                  "@id": `${SITE_URL}/#doctor`,
                },

                dateReviewed: "2025-05",
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
                    name: "Chronic Venous Insufficiency Treatment in Gurgaon",
                    item: PAGE_URL,
                  },
                ],
              },

              /* ================= MEDICAL BUSINESS ================= */

              {
                "@type": "MedicalBusiness",

                "@id": `${SITE_URL}/#clinic`,

                name: "Dr. Himanshu Verma — Vascular Surgery",

                image: OG_IMAGE,

                url: PAGE_URL,

                telephone: "+91-8826833598",

                address: {
                  "@type": "PostalAddress",

                  streetAddress:
                    "Fortis Memorial Research Institute, Sector 44",

                  addressLocality: "Gurgaon",

                  addressRegion: "Haryana",

                  postalCode: "122002",

                  addressCountry: "IN",
                },

                aggregateRating: {
                  "@type": "AggregateRating",

                  ratingValue: "4.9",

                  reviewCount: "300",
                },

                areaServed: ["Gurgaon", "Delhi NCR"],
              },

              /* ================= DOCTOR ================= */

              {
                "@type": "Physician",

                "@id": `${SITE_URL}/#doctor`,

                name: "Dr. Himanshu Verma",

                jobTitle: "Vascular & Endovascular Surgeon",

                medicalSpecialty: "Vascular Surgery",

                hasCredential: "MCh Vascular Surgery",

                worksFor: {
                  "@id": `${SITE_URL}/#clinic`,
                },

                memberOf: [
                  {
                    "@type": "Organization",
                    name: "Vascular Society of India",
                  },

                  {
                    "@type": "Organization",
                    name: "European Venous and Lymphatic Society",
                  },
                ],

                affiliation: {
                  "@type": "Hospital",

                  name: "Fortis Memorial Research Institute",

                  address: {
                    "@type": "PostalAddress",

                    addressLocality: "Gurgaon",

                    addressRegion: "Haryana",

                    postalCode: "122002",

                    addressCountry: "IN",
                  },
                },

                url: `${SITE_URL}/about`,
              },

              /* ================= MEDICAL CONDITION ================= */

              {
                "@type": "MedicalCondition",

                "@id": `${PAGE_URL}#condition`,

                name: "Chronic Venous Insufficiency",

                alternateName: ["CVI", "Venous Insufficiency"],

                description:
                  "A chronic venous disorder caused by valve dysfunction in the leg veins resulting in venous reflux, swelling, pain, skin changes, and venous ulcers.",

                associatedAnatomy: {
                  "@type": "AnatomicalStructure",
                  name: "Leg veins",
                },

                signOrSymptom: [
                  {
                    "@type": "MedicalSymptom",
                    name: "Leg heaviness",
                  },

                  {
                    "@type": "MedicalSymptom",
                    name: "Ankle swelling",
                  },

                  {
                    "@type": "MedicalSymptom",
                    name: "Varicose veins",
                  },

                  {
                    "@type": "MedicalSymptom",
                    name: "Skin discolouration",
                  },

                  {
                    "@type": "MedicalSymptom",
                    name: "Venous ulcers",
                  },
                ],
              },

              /* ================= PROCEDURE ================= */

              {
                "@type": "MedicalProcedure",

                "@id": `${PAGE_URL}#procedure`,

                name: "Chronic Venous Insufficiency Treatment",

                procedureType: "Minimally Invasive Vein Treatment",

                bodyLocation: "Lower limb veins",

                howPerformed:
                  "Treatment may include Duplex Doppler ultrasound evaluation, EVLT, radiofrequency ablation, foam sclerotherapy, compression therapy, and venous ulcer management based on disease stage.",

                provider: {
                  "@id": `${SITE_URL}/#doctor`,
                },
              },

              /* ================= FAQ ================= */

              {
                "@type": "FAQPage",

                "@id": `${PAGE_URL}#faq`,

                mainEntity: [
                  {
                    "@type": "Question",

                    name: "What are the signs and symptoms of chronic venous insufficiency?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "The signs and symptoms of chronic venous insufficiency include persistent leg heaviness and aching, ankle swelling that worsens through the day, burning or itching around the lower leg, visible varicose veins, skin discolouration near the ankle, nighttime cramps, and in advanced cases, slow-healing venous ulcers.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "What are the stages of chronic venous insufficiency?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "CVI is staged using the CEAP classification from C0 (no visible signs) to C6 (active venous ulcer). The stage determines the urgency and type of treatment required. Most patients presenting for treatment are at stages C2 to C4.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "What is the difference between varicose veins and chronic venous insufficiency?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Varicose veins are a visible manifestation of venous valve failure. Chronic venous insufficiency is the underlying condition causing them along with swelling, skin changes, and ulcers.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "How is chronic venous insufficiency diagnosed?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Diagnosis involves clinical examination, CEAP staging, and Venous Duplex Doppler Ultrasound which maps valve function, measures reflux, and rules out deep vein thrombosis.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "Is chronic venous insufficiency treatment covered by insurance in India?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Yes. Procedures including EVLT and RFA for symptomatic chronic venous insufficiency are covered under most major health insurance plans in India, including Mediclaim.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "How long does chronic venous insufficiency treatment take?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Most procedural treatments are completed in 30 to 60 minutes under local anaesthesia with same-day discharge. Patients walk out unassisted.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "Can chronic venous insufficiency be reversed?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Treated veins are permanently sealed and the reflux driving symptoms is eliminated. Lifestyle modification and regular Doppler follow-up significantly reduce long-term recurrence.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "When should I see a doctor for chronic venous insufficiency?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Seek evaluation as soon as you notice persistent leg swelling, skin discolouration near the ankle, varicose veins causing discomfort, or any wound that is not healing.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ServiceLayout
        title="Chronic Venous Insufficiency Treatment in Gurgaon"
        description={
          <div>
            <p>
              This page has been written and reviewed by Dr. Himanshu Verma, MCh
              (Vascular Surgery), Vascular & Endovascular Surgeon, Fortis
              Memorial Research Institute, Gurgaon. Content is intended for
              informational purposes only and does not substitute professional
              medical consultation, diagnosis, or treatment. Always consult a
              qualified medical professional for individual advice.{" "}
              <i>Last reviewed: May 2025</i>
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                6 Stages
              </span>

              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                5 Treatments
              </span>

              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                Same-Day Diagnosis
              </span>
            </div>
          </div>
        }
      >
        <ChronicVenousContent />
      </ServiceLayout>
    </>
  );
}
