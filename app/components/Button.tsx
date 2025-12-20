"use client";
import Link from "next/link";
import React from "react";

interface ButtonFillProps {
  text: React.ReactNode;
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
  className?: string;
  aos?: string;
  aosDelay?: string;
  disabled?: boolean;
}

const ButtonFill: React.FC<ButtonFillProps> = ({
  text,
  type = "button",
  href,
  onClick,
  className = "",
  aos,
  aosDelay,
  disabled = false,
}) => {
  const buttonBase = (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`
        relative px-6 py-3 text-sm md:text-base uppercase font-semibold
        overflow-hidden cursor-pointer border-2 rounded-full
        text-(--med-primary) border-(--med-primary)
        transition-all duration-500
        group
        ${
          disabled
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        }
        ${className}
      `}
    >
      {/* LEFT FILL */}
      <span
        className={`
          absolute inset-y-0 left-0 w-0
          bg-(--med-primary-dark)
          transition-all duration-1500 ease-out
          ${disabled ? "" : "group-hover:w-full"}
        `}
      />

      {/* RIGHT FILL */}
      <span
        className={`
          absolute inset-y-0 right-0 w-0
          bg-(--med-primary-dark)
          transition-all duration-1500 ease-out
          ${disabled ? "" : "group-hover:w-full"}
        `}
      />

      {/* TEXT */}
      <span
        className={`
          relative z-10 transition-all duration-300
          ${disabled ? "text-(--med-primary)" : "group-hover:text-white"}
        `}
      >
        {text}
      </span>
    </button>
  );

  if (href)
    return (
      <Link
        href={href}
        className={disabled ? "pointer-events-none opacity-50" : ""}
      >
        {buttonBase}
      </Link>
    );

  return buttonBase;
};

export default ButtonFill;
