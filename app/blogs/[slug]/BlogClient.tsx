"use client";

import { Suspense, useEffect, useState } from "react";

import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import BlogSidebar from "../../components/BlogSidebar";
import Navbar from "@/app/components/Navbar";
import PopupForm from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import FAQAccordion from "@/app/components/FaqsAccordion";
import AboutServiceTable from "@/app/components/AboutServiceTable";

const services = [
  {
    title: "Varicose Veins Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/varicose-veins-treatment-in-gurgaon"
  },
  {
    title: "Chronic Venous Insufficiency Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/chronic-venous-insufficiency-treatment-in-gurgaon"
  },
  {
    title: "Lipedema Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/lymphatic-care-treatment-in-gurgaon"
  },
  {
    title: "Pelvic Venous Disorders Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/pelvic-venous-disorder-treatment-in-gurgaon"
  },
  {
    title: "Gonadal Vein Disease Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/gonadal-vein-disease-treatment-in-gurgaon"
  },
  {
    title: "AV Fistula Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/av-fistula-treatment-in-gurgaon"
  },
  {
    title: "Dialysis Access Surgeon in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/dialysis-access-treatment-in-gurgaon"
  },
  {
    title: "Central Venous Care in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/central-venous-care-treatment-in-gurgaon"
  },
  {
    title: "Peripheral Artery Disease Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/peripheral-artery-disease-treatment-in-gurgaon"
  },
  {
    title: "Limb Salvage Surgery in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/limb-salvage-surgery-in-gurgaon"
  },
  {
    title: "Diabetic Foot Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/diabetic-foot-treatment-in-gurgaon"
  },
  {
    title: "Diabetic Wound Care in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/diabetic-wound-care-in-gurgaon"
  },
  {
    title: "Amputation Surgery in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/amputation-surgery-in-gurgaon"
  },
  {
    title: "Deep Vein Thrombosis Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/deep-vein-thrombosis-treatment-in-gurgaon"
  },
  {
    title: "Pulmonary Embolism Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/pulmonary-embolism-treatment-in-gurgaon"
  },
  {
    title: "Abdominal Aortic Aneurysm Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/abdominal-aortic-aneurysm-treatment-in-gurgaon"
  },
  {
    title: "Vascular Trauma Treatment",
    link: "https://www.drhimanshuverma.com/services/vascular-trauma-treatment-in-gurgaon"
  },
  {
    title: "ONCO Vascular Surgery",
    link: "https://www.drhimanshuverma.com/services/onco-vascular-surgery-in-gurgaon"
  },
  {
    title: "Arteriovenous Malformation Treatment in Gurgaon",
    link: "https://www.drhimanshuverma.com/services/arteriovenous-malformation-treatment-in-gurgaon"
  },
  {
    title: "Minor Amputations",
    link: ""
  }
];

export default function BlogClient({
  blog,
  relatedBlogs,
}: {
  blog: any;
  relatedBlogs: any[];
}) {
  const [openPopup, setOpenPopup] = useState(false);

  // ✅ Listen for popup buttons inside blog HTML
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-open-popup='true']")) {
        setOpenPopup(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* ======= BLOG HEADER ======= */}
      <section className="w-11/12 md:w-5/6 mx-auto pt-[40px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{blog.title}</h1>
        <p className="text-gray-500 mb-6">
          By <span className="font-semibold">{blog.author}</span> •{" "}
          {new Date(blog.datePublished).toLocaleDateString()}
        </p>
      </section>

      {blog.coverImage && (
        <div className="relative w-11/12 md:w-5/6 mx-auto h-[40vh] md:h-[60vh] lg:h-[100vh] rounded-xl overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.coverImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ======= BLOG CONTENT ======= */}
      <section className="w-11/12 md:w-5/6 mx-auto my-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT – BLOG */}
        <article className="lg:col-span-8">
          <div
            className="blog-content prose prose-lg max-w-none overflow-x-hidden"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div>
            <AboutServiceTable
              title="Explore Our Services"
              services={services}
              currentPath={""}

              isBlogPage={true}
            />
          </div>
          <main className="p-5 max-w-4xl mx-auto">
            <h2
              style={{ color: "var(--med-primary)" }}
              className="text-2xl font-bold mb-6"
            >
              Frequently Asked Questions
            </h2>

            {/* Just pass the data here */}
            <Suspense fallback={null}>
              <FAQAccordion items={blog.faqs} />
            </Suspense>
          </main>
        </article>

        {/* RIGHT – SIDEBAR */}
        <div className="lg:col-span-4">
          <BlogSidebar relatedBlogs={relatedBlogs} />
        </div>
      </section>

      {/* ======= POPUP ======= */}
      <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />

      <Footer />
    </div>
  );
}
