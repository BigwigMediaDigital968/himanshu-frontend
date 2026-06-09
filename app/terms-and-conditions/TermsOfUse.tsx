"use client";

import {
  FileCheck,
  Shield,
  Stethoscope,
  AlertTriangle,
  Globe,
  Scale,
  Copyright,
  ExternalLink,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const sections = [
  {
    icon: FileCheck,
    title: "Acceptance of Terms",
    content: [
      "By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, our Privacy Policy, and all applicable laws and regulations.",
      "If you do not agree with any part of these Terms, you should discontinue use of this website immediately.",
      "These Terms apply to all visitors, patients, caregivers, healthcare professionals, and users accessing this website.",
    ],
  },
  {
    icon: Globe,
    title: "Website Purpose",
    content: [
      "This website has been created to provide educational information regarding vascular health, venous diseases, arterial disorders, dialysis access procedures, treatment options, preventive care, clinic updates, and appointment scheduling services.",
      "The information published on this website is intended solely for general informational and educational purposes.",
      "Website content should not be interpreted as medical advice, diagnosis, treatment recommendations, or emergency healthcare guidance.",
    ],
  },
  {
    icon: Stethoscope,
    title: "No Doctor–Patient Relationship",
    content: [
      "Use of this website, submission of forms, email communication, newsletter subscriptions, blog interactions, or viewing website content does not establish a doctor–patient relationship.",
      "A doctor–patient relationship is established only after a formal consultation, medical evaluation, and acceptance of care by Dr. Himanshu Verma or authorized healthcare professionals.",
      "Users should not rely solely on website content for making healthcare decisions.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Medical Disclaimer",
    content: [
      "Medical information available on this website is provided for educational purposes only.",
      "Every patient’s condition is unique, and treatment outcomes may vary based on medical history, diagnosis, age, lifestyle factors, and other clinical considerations.",
      "Nothing on this website should be considered a substitute for professional medical advice, diagnosis, examination, or treatment.",
      "In case of a medical emergency, users should immediately contact emergency services or visit the nearest healthcare facility.",
    ],
  },
  {
    icon: CalendarDays,
    title: "Appointments & Enquiries",
    content: [
      "Appointment requests submitted through this website are subject to confirmation and availability.",
      "Submitting an appointment request does not guarantee a confirmed consultation.",
      "Users are responsible for providing accurate and up-to-date information when booking appointments or submitting enquiries.",
      "The clinic reserves the right to reschedule, modify, or cancel appointments when necessary.",
    ],
  },
  {
    icon: Shield,
    title: "User Responsibilities",
    content: [
      "Users agree not to misuse the website, submit false information, attempt unauthorized access, interfere with website functionality, or engage in activities that may compromise website security.",
      "Users shall not upload, distribute, or transmit harmful, unlawful, misleading, defamatory, or malicious content through any communication channel associated with this website.",
      "Any misuse may result in restricted access and potential legal action where applicable.",
    ],
  },
  {
    icon: Copyright,
    title: "Intellectual Property Rights",
    content: [
      "All website content, including text, graphics, branding, logos, photographs, illustrations, videos, blog articles, educational materials, design elements, and source materials, are protected by applicable intellectual property laws.",
      "No content may be copied, reproduced, modified, distributed, republished, or commercially exploited without prior written permission.",
      "Permitted personal use does not grant ownership or transfer of intellectual property rights.",
    ],
  },
  {
    icon: ExternalLink,
    title: "Third-Party Websites & Resources",
    content: [
      "This website may contain links to external websites, healthcare resources, maps, social media platforms, appointment tools, or other third-party services.",
      "Such links are provided solely for convenience and informational purposes.",
      "We do not control or endorse third-party content and are not responsible for the accuracy, availability, security, or privacy practices of external websites.",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Data Protection",
    content: [
      "Personal information submitted through this website is processed in accordance with our Privacy Policy.",
      "Users are encouraged to review the Privacy Policy to understand how personal information is collected, stored, used, and protected.",
      "Reasonable security measures are implemented; however, no internet-based transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "While reasonable efforts are made to ensure that information published on this website is accurate and up to date, no guarantee is made regarding completeness, reliability, or accuracy.",
      "Neither Dr. Himanshu Verma nor affiliated entities shall be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from website use or reliance on website content.",
      "Users assume full responsibility for decisions made based on information obtained from this website.",
    ],
  },
  {
    icon: Globe,
    title: "Website Availability",
    content: [
      "We reserve the right to modify, suspend, restrict, or discontinue any aspect of the website without prior notice.",
      "We do not guarantee uninterrupted availability, error-free functionality, or freedom from technical issues beyond reasonable control.",
    ],
  },
  {
    icon: Scale,
    title: "Governing Law & Jurisdiction",
    content: [
      "These Terms of Use shall be governed and interpreted in accordance with the laws of India.",
      "Any disputes arising from website usage shall be subject to the exclusive jurisdiction of competent courts located in Gurugram, Haryana, India.",
      "Users accessing this website from outside India are responsible for compliance with local laws where applicable.",
    ],
  },
  {
    icon: FileCheck,
    title: "Changes to These Terms",
    content: [
      "We reserve the right to update, revise, or modify these Terms of Use at any time without prior notice.",
      "Updated versions will become effective immediately upon publication on this page.",
      "Continued use of the website after changes are published constitutes acceptance of the revised Terms.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,141,133,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,141,133,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--med-border)] bg-[var(--med-light)] px-4 py-2">
            <FileCheck className="mr-2 h-4 w-4 text-[var(--med-primary)]" />
            <span className="text-sm font-semibold text-[var(--med-primary)]">
              Legal Information
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--med-text)] md:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Please read these Terms of Use carefully before accessing or using
            this website. These terms govern your access to and use of the
            services, information, educational resources, and appointment
            facilities provided through this website.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-[var(--med-light)] px-4 py-2 text-sm font-medium text-[var(--med-primary)]">
            Effective Date: January 01, 2026
          </div>
        </div>

        {/* Sections */}
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
            <h2 className="text-3xl font-bold">Contact Information</h2>

            <p className="mt-4 text-white/90">
              If you have any questions regarding these Terms of Use,
              appointment policies, website content, or legal notices, please
              contact us.
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
                  <p className="font-semibold">Clinic Address</p>
                  <p>
                    Fortis Memorial Research Centre, Sector 44, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-900">
            Important Healthcare Notice
          </h3>

          <p className="mt-3 leading-7 text-amber-800">
            This website is intended for informational and educational purposes
            only. It is not designed to provide emergency medical assistance,
            diagnosis, or treatment recommendations. If you believe you are
            experiencing a medical emergency, seek immediate medical attention
            or contact emergency services without delay.
          </p>
        </div>
      </div>
    </section>
  );
}
