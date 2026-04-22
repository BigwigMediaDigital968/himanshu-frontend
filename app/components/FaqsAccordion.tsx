"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the shape of the data
export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg transition-colors duration-200"
          style={{
            borderColor: "var(--med-border)",
            backgroundColor: openIndex === index ? "var(--med-light)" : "white",
          }}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 text-left focus:outline-none group"
            aria-expanded={openIndex === index} // ✅ Accessibility
            aria-controls={`faq-answer-${index}`} // ✅ Accessibility
          >
            <h3
              className="font-semibold text-base md:text-lg transition-colors"
              style={{ color: "var(--med-text)" }}
            >
              {item.question}
            </h3>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""
                }`}
              style={{ color: "var(--med-primary)" }}
              aria-hidden="true" // ✅ Hide decorative icon from screen readers
            />
          </button>
          <div
            id={`faq-answer-${index}`} // ✅ Accessibility
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
              }`}
          >
            <p
              className="p-4 pt-0 leading-relaxed text-sm md:text-base"
              style={{ color: "var(--med-text)" }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
