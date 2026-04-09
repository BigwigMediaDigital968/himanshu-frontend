"use client";
import React from "react";
import Link from "next/link";

interface Service {
  title: string;
  link: string;
}

interface ServiceTableProps {
  services: Service[];
  currentPath?: string;
  title?: string;
}

const AboutServiceTable = ({
  services,
  currentPath,
  title = "Our Specialized Treatments & Services",
}: ServiceTableProps) => {
  // Filter out the service that matches the current URL
  const filteredServices = currentPath
    ? services.filter((service) => service.link !== currentPath)
    : services;

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto animate-fadeIn">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-10">
          {title}
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l rounded-lg overflow-hidden"
        style={{ borderColor: "var(--med-border)" }}
      >
        {filteredServices.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="group relative flex items-center justify-center p-6 min-h-[100px] text-center transition-all duration-200 border-r border-b hover:z-10 animate-scaleIn"
            style={{
              borderColor: "var(--med-border)",
              backgroundColor: "white",
              animationDelay: `${index * 0.03}s`,
            }}
          >
            {/* Hover Background Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: "var(--med-light)" }}
            ></div>

            {/* Service Text */}
            <span
              className="relative text-lg font-medium group-hover:text-[var(--med-primary-dark)] transition-all duration-300"
              style={{ color: "var(--med-primary)" }}
            >
              {service.title}
            </span>

            {/* Subtle indicator on hover */}
            <div
              className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: "var(--med-primary)" }}
            ></div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .group:hover {
          box-shadow: inset 0 0 0 2px var(--med-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default AboutServiceTable;
