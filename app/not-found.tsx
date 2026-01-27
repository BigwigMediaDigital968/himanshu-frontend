"use client";

import Link from "next/link";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonFill from "./components/Button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center py-20 px-4 bg-gradient-to-br from-(--med-light) to-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number with Animation */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-(--med-primary) opacity-20 select-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-(--med-text)">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off. It
              might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Decorative Icon */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-(--med-primary)/10 flex items-center justify-center animate-pulse">
                <Search className="w-16 h-16 text-(--med-primary)" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-(--med-primary) flex items-center justify-center">
                <span className="text-white text-sm font-bold">?</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <ButtonFill
                text={
                  <span className="flex items-center gap-2">
                    <Home size={18} />
                    Go to Homepage
                  </span>
                }
              />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 text-sm md:text-base uppercase font-semibold
                text-(--med-text) border-2 border-(--med-border) rounded-full
                hover:bg-(--med-light) hover:border-(--med-primary)
                transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-(--med-border)">
            <p className="text-sm text-gray-500 mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/"
                className="text-(--med-primary) hover:underline transition"
              >
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/services"
                className="text-(--med-primary) hover:underline transition"
              >
                Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/about"
                className="text-(--med-primary) hover:underline transition"
              >
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/blogs"
                className="text-(--med-primary) hover:underline transition"
              >
                Blogs
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/gallery"
                className="text-(--med-primary) hover:underline transition"
              >
                Gallery
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact-us"
                className="text-(--med-primary) hover:underline transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
