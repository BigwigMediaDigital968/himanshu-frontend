"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouContent() {

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-(--med-primary)" />
        <h1 className="text-3xl font-bold mb-3 text-(--med-primary)">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-2">
          Your appointment request has been received.
        </p>
        <p className="text-gray-600 mb-8">
          Our medical team will contact you shortly to confirm your
          consultation with Dr. Himanshu Verma.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-(--med-primary) px-8 py-3 font-semibold text-white hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
