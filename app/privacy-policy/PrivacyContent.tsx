"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  FileText,
  Mail,
  Phone,
  Globe,
  Eye,
  UserCheck,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

const sections = [
  {
    icon: ShieldCheck,
    title: "Introduction",
    content: [
      `Dr. Himanshu Verma (“we,” “our,” or “us”) is committed to protecting your privacy and safeguarding the personal information you share with us through this website and related digital services.`,
      `This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit our website, submit an enquiry, schedule an appointment, subscribe to updates, or interact with our healthcare services.`,
      `We process personal data in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023, Information Technology Act, 2000, and internationally recognized privacy principles where applicable.`,
    ],
  },
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      `We may collect personal information that you voluntarily provide, including your name, phone number, email address, city, medical enquiry details, appointment requests, and communication preferences.`,
      `We may also automatically collect technical information such as IP address, browser type, device information, pages visited, referral sources, session duration, and analytics data through cookies and similar technologies.`,
      `Medical information shared through contact forms or appointment requests is treated with heightened confidentiality and used solely for healthcare-related communication and service delivery.`,
    ],
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    content: [
      `To schedule and manage appointments.`,
      `To respond to enquiries and healthcare-related requests.`,
      `To provide educational content, newsletters, and vascular health updates where consent has been provided.`,
      `To improve website functionality, user experience, and service quality.`,
      `To maintain patient communication and follow-up support.`,
      `To comply with legal, regulatory, and professional obligations.`,
    ],
  },
  {
    icon: Lock,
    title: "Protection of Health Information",
    content: [
      `Healthcare-related information requires a higher level of protection. We implement appropriate administrative, technical, and organizational safeguards to protect personal and medical information from unauthorized access, misuse, alteration, disclosure, or loss.`,
      `While we employ industry-standard security measures, no internet transmission or storage system can be guaranteed to be completely secure.`,
    ],
  },
  {
    icon: Globe,
    title: "Legal Basis for Processing",
    content: [
      `Where required by applicable laws, we process personal information based on your consent, contractual necessity, legitimate healthcare interests, legal obligations, and patient care requirements.`,
      `You may withdraw consent at any time, subject to legal and healthcare record retention requirements.`,
    ],
  },
  {
    icon: Eye,
    title: "Cookies & Analytics",
    content: [
      `Our website may use cookies, analytics tools, and similar technologies to understand website performance, improve user experience, monitor traffic patterns, and maintain website security.`,
      `These technologies may collect anonymous or pseudonymous usage information.`,
      `Users may modify browser settings to manage or disable cookies; however, certain website functions may be affected.`,
    ],
  },
  {
    icon: RefreshCw,
    title: "Information Sharing",
    content: [
      `We do not sell, rent, or trade personal information.`,
      `Information may be shared with trusted service providers involved in website hosting, analytics, appointment management, communication systems, or legal compliance, subject to confidentiality obligations.`,
      `Information may also be disclosed where required by law, court order, regulatory authority, or to protect patient safety and legal rights.`,
    ],
  },
  {
    icon: FileText,
    title: "Data Retention",
    content: [
      `Personal information is retained only for as long as reasonably necessary to fulfil healthcare, operational, legal, regulatory, accounting, and security purposes.`,
      `When information is no longer required, reasonable measures are taken to securely delete, anonymize, or archive it in accordance with applicable requirements.`,
    ],
  },
  {
    icon: AlertTriangle,
    title: "Third-Party Services",
    content: [
      `This website may contain links to third-party platforms, healthcare resources, maps, social media channels, appointment systems, or external websites.`,
      `We are not responsible for the privacy practices, content, or security measures implemented by third-party websites.`,
      `Users are encouraged to review the privacy policies of external services before sharing personal information.`,
    ],
  },
  {
    icon: UserCheck,
    title: "Your Privacy Rights",
    content: [
      `Depending on applicable law, you may have the right to access, update, correct, withdraw consent, request deletion, restrict processing, or obtain information regarding your personal data.`,
      `Requests will be evaluated and processed in accordance with applicable legal and healthcare record retention requirements.`,
    ],
  },
  {
    icon: ShieldCheck,
    title: "Children's Privacy",
    content: [
      `This website is not intended for children under the age required by applicable law to provide independent consent.`,
      `Parents or legal guardians should contact us if they believe a child has provided personal information without appropriate authorization.`,
    ],
  },
  {
    icon: RefreshCw,
    title: "Policy Updates",
    content: [
      `We may update this Privacy Policy periodically to reflect changes in legal requirements, healthcare regulations, technology, or business practices.`,
      `Updated versions will be published on this page along with the revised effective date.`,
    ],
  },
];

export default function PrivacyContent() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,141,133,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,141,133,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-2">
            <ShieldCheck className="mr-2 h-4 w-4 text-[var(--med-primary)]" />
            <span className="text-sm font-semibold text-[var(--med-primary)]">
              Privacy & Data Protection
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--med-text)] md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Your trust is important to us. This Privacy Policy explains how Dr.
            Himanshu Verma collects, uses, protects, and manages personal
            information in connection with healthcare services, appointment
            requests, and website interactions.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-[var(--med-light)] px-4 py-2 text-sm font-medium text-[var(--med-primary)]">
            Effective Date: June 01, 2026
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {sections.map((section) => {
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
                      {section.content.map((item, index) => (
                        <p key={index} className="leading-8 text-slate-600">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Box */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-[var(--med-primary)] p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold">Contact & Privacy Requests</h2>

            <p className="mt-4 max-w-3xl text-white/90">
              If you have questions regarding this Privacy Policy, wish to
              exercise your privacy rights, request data updates, or submit a
              grievance relating to personal information processing, please
              contact us using the details below.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-white/90">88268 33598</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="break-all text-white/90">
                    varenyamvascular@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="mt-1 h-5 w-5" />
                <div>
                  <p className="font-semibold">Clinic Address</p>
                  <p className="text-white/90">
                    Fortis Memorial Research Centre,
                    <br />
                    Sector 44, Gurugram, Haryana 122003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-900">
            Medical Website Disclaimer
          </h3>

          <p className="mt-3 leading-7 text-amber-800">
            Information provided on this website is intended for educational and
            informational purposes only and should not be considered a
            substitute for professional medical advice, diagnosis, or treatment.
            Users should consult a qualified healthcare professional regarding
            any medical condition or treatment decision.
          </p>
        </div>
      </div>
    </section>
  );
}
