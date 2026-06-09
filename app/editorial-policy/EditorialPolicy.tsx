"use client";

import {
  BookOpen,
  ShieldCheck,
  Stethoscope,
  BadgeCheck,
  FileText,
  RefreshCw,
  Search,
  AlertTriangle,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const policySections = [
  {
    icon: Stethoscope,
    title: "Our Commitment to Medical Accuracy",
    content: [
      "We are committed to publishing accurate, evidence-based, and patient-focused healthcare information that supports informed decision-making and promotes vascular health awareness.",
      "Our content is created with the goal of helping patients better understand vascular conditions, treatment options, preventive care measures, and related healthcare topics.",
      "We strive to ensure that all educational materials reflect current medical understanding and accepted clinical practices whenever reasonably possible.",
    ],
  },

  {
    icon: BadgeCheck,
    title: "Medical Review Process",
    content: [
      "Medical content published on this website is reviewed for clinical relevance, factual accuracy, and patient safety before publication.",
      "Where applicable, content may be reviewed by qualified healthcare professionals with expertise in vascular surgery, vascular medicine, and related specialties.",
      "The review process is designed to improve accuracy but should not be interpreted as a substitute for personalized medical consultation.",
    ],
  },

  {
    icon: BookOpen,
    title: "Evidence-Based Content Standards",
    content: [
      "Our educational resources are developed using recognized medical references, peer-reviewed research, professional guidelines, and established healthcare literature whenever available.",
      "We aim to present information in a manner that is understandable to patients while maintaining scientific accuracy.",
      "Medical information may evolve as new research, technologies, and clinical recommendations become available.",
    ],
  },

  {
    icon: Users,
    title: "Content Creation & Editorial Oversight",
    content: [
      "Content may be prepared by healthcare professionals, medical writers, editorial contributors, or healthcare communication specialists.",
      "All published materials are subject to editorial review prior to publication to ensure consistency, readability, and compliance with healthcare communication standards.",
      "Editorial decisions prioritize patient education, factual accuracy, transparency, and responsible healthcare communication.",
    ],
  },

  {
    icon: Search,
    title: "Sources & References",
    content: [
      "Whenever appropriate, medical content may be informed by clinical guidelines, professional society recommendations, peer-reviewed journals, healthcare institutions, and established medical literature.",
      "References may not be explicitly listed within every article; however, content development follows evidence-based healthcare publishing principles.",
      "We make reasonable efforts to avoid unsupported medical claims and misleading healthcare information.",
    ],
  },

  {
    icon: RefreshCw,
    title: "Content Updates",
    content: [
      "Healthcare information changes over time as new evidence becomes available.",
      "We periodically review and update educational materials to improve relevance, clarity, and accuracy.",
      "Despite these efforts, some content may become outdated, and users should consult qualified healthcare professionals for the most current medical guidance.",
    ],
  },

  {
    icon: ShieldCheck,
    title: "Independence & Editorial Integrity",
    content: [
      "Editorial decisions are guided by medical relevance, patient benefit, and educational value.",
      "Content is not influenced by external commercial interests, advertisers, sponsors, or third-party organizations in a manner that compromises editorial integrity.",
      "We are committed to maintaining transparency and objectivity in healthcare communication.",
    ],
  },

  {
    icon: Globe,
    title: "Audience & Intended Use",
    content: [
      "This website is intended for patients, caregivers, healthcare consumers, and individuals seeking educational information about vascular health.",
      "Content is designed for informational purposes only and should not be interpreted as personalized medical advice, diagnosis, or treatment recommendations.",
      "Users should consult licensed healthcare professionals regarding their individual healthcare needs.",
    ],
  },

  {
    icon: AlertTriangle,
    title: "Limitations of Online Medical Content",
    content: [
      "No online healthcare resource can fully account for an individual's medical history, symptoms, diagnostic findings, or clinical circumstances.",
      "Educational information published on this website should not replace professional medical evaluation or consultation.",
      "Medical emergencies require immediate attention from qualified healthcare providers or emergency services.",
    ],
  },

  {
    icon: FileText,
    title: "Corrections Policy",
    content: [
      "We value accuracy and transparency.",
      "If a factual error, outdated information, or omission is identified, reasonable efforts will be made to review and correct the content where appropriate.",
      "Users may contact us to report potential inaccuracies or suggest updates.",
    ],
  },
];

export default function EditorialPolicy() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,141,133,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,141,133,0.05),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-2">
            <BookOpen className="mr-2 h-4 w-4 text-[var(--med-primary)]" />
            <span className="text-sm font-semibold text-[var(--med-primary)]">
              Transparency & Content Standards
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--med-text)] md:text-5xl">
            Editorial Policy
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            This Editorial Policy explains how healthcare content published on
            this website is created, reviewed, maintained, and updated to
            support transparency, patient education, and responsible medical
            communication.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-[var(--med-light)] px-4 py-2 text-sm font-medium text-[var(--med-primary)]">
            Effective Date: January 01, 2026
          </div>
        </div>

        {/* Intro Notice */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[var(--med-border)] bg-[var(--med-light)] p-6 md:p-8">
          <div className="flex gap-4">
            <ShieldCheck className="h-7 w-7 shrink-0 text-[var(--med-primary)]" />
            <div>
              <h2 className="text-xl font-bold text-[var(--med-text)]">
                Healthcare Information Transparency
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                We believe patients deserve trustworthy, understandable, and
                medically responsible healthcare information. This policy
                outlines the standards used when creating and maintaining
                content across this website.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="mx-auto mt-12 max-w-5xl space-y-8">
          {policySections.map((section) => {
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
                      {section.content.map((paragraph, index) => (
                        <p key={index} className="leading-8 text-slate-600">
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
              Report an Issue or Request a Correction
            </h2>

            <p className="mt-4 text-white/90">
              If you identify potentially inaccurate information or would like
              to request a content review, please contact us using the details
              below.
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
                  <p className="font-semibold">Clinic Location</p>
                  <p>
                    Fortis Memorial Research Centre, Sector 44, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Notice */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-900">
            Important Notice
          </h3>

          <p className="mt-3 leading-7 text-amber-800">
            The content available on this website is intended for educational
            purposes only and should not replace consultation with a qualified
            healthcare professional. Individual diagnosis and treatment
            decisions should always be based on professional medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}
