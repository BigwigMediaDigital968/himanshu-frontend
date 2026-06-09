"use client";

import {
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  FileWarning,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Scale,
  BookOpen,
  Activity,
} from "lucide-react";

const disclaimerSections = [
  {
    icon: Stethoscope,
    title: "General Medical Information",
    content: [
      "The content provided on this website is intended solely for informational and educational purposes related to vascular health, vascular surgery, venous disorders, arterial diseases, dialysis access procedures, preventive healthcare, and related medical topics.",
      "The information presented on this website is not intended to replace professional medical advice, diagnosis, treatment, or individualized healthcare recommendations.",
      "Visitors should always seek the advice of a qualified healthcare professional regarding any medical condition, symptoms, diagnosis, treatment plan, or healthcare decision.",
    ],
  },

  {
    icon: AlertTriangle,
    title: "No Medical Advice",
    content: [
      "Nothing published on this website constitutes medical advice, clinical guidance, treatment recommendations, or physician instructions.",
      "Information available through articles, blogs, videos, educational resources, FAQs, social media content, newsletters, and downloadable materials should not be interpreted as a substitute for direct consultation with a licensed healthcare provider.",
      "Healthcare decisions should be made only after proper medical evaluation and professional consultation.",
    ],
  },

  {
    icon: UserCheck,
    title: "No Doctor–Patient Relationship",
    content: [
      "Accessing this website, reading its content, submitting contact forms, requesting appointments, subscribing to newsletters, sending emails, or communicating through website channels does not establish a doctor–patient relationship.",
      "A formal doctor–patient relationship is created only after a professional consultation has been conducted and care has been accepted by Dr. Himanshu Verma or authorized healthcare providers.",
      "Users should not rely on website content as a substitute for personalized medical care.",
    ],
  },

  {
    icon: Activity,
    title: "Individual Medical Outcomes",
    content: [
      "Every patient's medical condition is unique. Symptoms, diagnoses, treatment plans, recovery timelines, and clinical outcomes may vary significantly among individuals.",
      "Past treatment results, patient experiences, testimonials, educational case studies, and procedural information presented on this website should not be interpreted as guarantees of future outcomes.",
      "Treatment success depends on multiple clinical, physiological, lifestyle, and medical factors that differ from patient to patient.",
    ],
  },

  {
    icon: HeartPulse,
    title: "Healthcare Content Accuracy",
    content: [
      "Reasonable efforts are made to ensure that information published on this website is accurate, evidence-based, and regularly reviewed.",
      "Medical knowledge, clinical guidelines, technologies, and treatment protocols evolve continuously.",
      "We do not guarantee that all information will always remain complete, current, or free from inadvertent inaccuracies.",
    ],
  },

  {
    icon: FileWarning,
    title: "Emergency Medical Situations",
    content: [
      "This website does not provide emergency medical services, emergency diagnosis, or urgent medical intervention.",
      "If you believe you are experiencing a medical emergency, severe symptoms, sudden complications, chest pain, stroke symptoms, severe bleeding, breathing difficulties, or any urgent health condition, immediately contact emergency medical services or visit the nearest emergency department.",
      "Do not delay seeking emergency medical care based on information found on this website.",
    ],
  },

  {
    icon: BookOpen,
    title: "Educational Resources & Articles",
    content: [
      "Blog posts, educational articles, videos, infographics, guides, FAQs, newsletters, and patient education materials are intended solely to improve public awareness and understanding of vascular health conditions.",
      "Educational content may simplify complex medical concepts and should not be interpreted as personalized clinical recommendations.",
      "Users should discuss any healthcare concerns directly with qualified healthcare professionals.",
    ],
  },

  {
    icon: ShieldCheck,
    title: "External Links & Third-Party Resources",
    content: [
      "This website may provide links to external websites, medical resources, research publications, healthcare organizations, social media platforms, mapping services, or third-party tools.",
      "These links are provided for convenience and educational purposes only.",
      "We do not control, endorse, guarantee, or assume responsibility for third-party content, services, security practices, or privacy policies.",
    ],
  },

  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Dr. Himanshu Verma, affiliated clinics, healthcare staff, website operators, content contributors, and service providers shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of this website.",
      "Users assume full responsibility for their interpretation and use of information available through this website.",
      "Reliance upon website content is solely at the user's own risk.",
    ],
  },

  {
    icon: ShieldCheck,
    title: "Acceptance of Disclaimer",
    content: [
      "By accessing and using this website, you acknowledge that you have read, understood, and accepted this Medical Disclaimer.",
      "Continued use of the website constitutes acceptance of the terms contained within this disclaimer.",
      "If you do not agree with any part of this disclaimer, you should discontinue use of the website.",
    ],
  },
];

export default function MedicalDisclaimer() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,141,133,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,141,133,0.05),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-2">
            <ShieldCheck className="mr-2 h-4 w-4 text-[var(--med-primary)]" />
            <span className="text-sm font-semibold text-[var(--med-primary)]">
              Important Healthcare Notice
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--med-text)] md:text-5xl">
            Medical Disclaimer
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Please read this Medical Disclaimer carefully before relying upon
            information available on this website. The information provided is
            intended for educational and informational purposes only.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-[var(--med-light)] px-4 py-2 text-sm font-medium text-[var(--med-primary)]">
            Effective Date: January 01, 2026
          </div>
        </div>

        {/* Emergency Warning */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-red-200 bg-red-50 p-6 md:p-8">
          <div className="flex gap-4">
            <AlertTriangle className="h-7 w-7 shrink-0 text-red-600" />
            <div>
              <h2 className="text-xl font-bold text-red-900">
                Emergency Medical Warning
              </h2>
              <p className="mt-3 leading-7 text-red-800">
                This website is not an emergency medical service. If you are
                experiencing a medical emergency, call emergency services or
                visit the nearest emergency department immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Sections */}
        <div className="mx-auto mt-12 max-w-5xl space-y-8">
          {disclaimerSections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-[var(--med-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--med-light)]">
                    <Icon className="h-6 w-6 text-[var(--med-primary)]" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--med-text)]">
                      {section.title}
                    </h2>

                    <div className="mt-4 space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="leading-8 text-slate-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-3xl bg-[var(--med-primary)] p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold">
              Questions About This Disclaimer?
            </h2>

            <p className="mt-4 text-white/90">
              If you have questions regarding this Medical Disclaimer,
              healthcare information, or website content, please contact us.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>88268 33598</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="break-all">varenyamvascular@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>
                    Fortis Memorial Research Centre, Sector 44, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
