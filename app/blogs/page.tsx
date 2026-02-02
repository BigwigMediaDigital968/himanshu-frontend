"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import PopupForm from "../components/Popup";
import FloatingContactActions from "../components/ContactActions";
import ButtonFill from "../components/Button";

import AOS from "aos";
import "aos/dist/aos.css";

import { FileText } from "lucide-react";

/* ================= TYPES ================= */
interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

/* ================= COMPONENT ================= */
export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  /* AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* FETCH BLOGS */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`,
        );
        setBlogs(res.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <title>
        Vascular Health Blogs | AV Fistula, Varicose Veins & Limb Care
      </title>

      <meta
        name="title"
        content="Vascular Health Blogs | AV Fistula, Varicose Veins & Limb Care"
      />
      <meta
        name="description"
        content="Read expert blogs on vascular diseases, AV fistula care, varicose veins, peripheral artery disease, diabetic foot & limb salvage awareness."
      />

      <link rel="canonical" href="https://www.drhimanshuverma.com/blogs" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Dr. Himanshu Verma | Vascular & Endovascular Surgeon in Gurgaon"
      />
      <meta
        property="og:description"
        content="Dr. Himanshu Verma is a leading Vascular & Endovascular Surgeon in Gurgaon with 17+ years of experience, specializing in AV fistula, varicose veins, peripheral arterial disease (PAD) & limb salvage using advanced minimally invasive techniques."
      />
      <meta
        property="og:image"
        content="https://www.drhimanshuverma.com/_next/static/media/logo-removebg-preview.2f05ed1b.png"
      />
      <meta property="og:url" content="https://www.drhimanshuverma.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr Himanshu Verma" />
      <meta property="og:locale" content="en_IN" />

      <div>
        <Nav />

        {/* ================= HERO ================= */}
        <section className="py-16 bg-[#64bab4] rounded-r-full">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--med-text)] mb-4 uppercase">
              Medical Knowledge & Awareness
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              Blogs & Health Insights
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Expert articles, medical insights, and patient awareness content
              focused on vascular and endovascular health.
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-20 bg-white">
          <div className="w-11/12 md:w-5/6 mx-auto">
            {/* LOADING STATE */}
            {loading && (
              <div className="flex flex-col items-center py-24">
                <div className="w-12 h-12 border-4 border-[var(--med-primary)] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-gray-500">Loading blogs...</p>
              </div>
            )}

            {/* EMPTY STATE */}
            {!loading && blogs.length === 0 && (
              <div
                className="max-w-xl mx-auto bg-[var(--med-light)] border border-[var(--med-border)] rounded-3xl p-12 text-center"
                data-aos="fade-up"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--med-primary)]/15 flex items-center justify-center">
                  <FileText size={28} className="text-[var(--med-primary)]" />
                </div>

                <h2 className="text-2xl font-semibold text-[var(--med-text)] mb-4">
                  No Blogs Available Yet
                </h2>

                <p className="text-[var(--med-text)]/70 leading-relaxed mb-8">
                  We are currently working on informative articles and medical
                  insights to help you better understand vascular and
                  endovascular health. Please check back soon.
                </p>

                <ButtonFill
                  onClick={() => setOpenPopup(true)}
                  text="Request a Consultation"
                />
              </div>
            )}

            {/* BLOG LIST */}
            {!loading && blogs.length > 0 && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                data-aos="fade-up"
              >
                {blogs.map((blog) => (
                  <a
                    key={blog._id}
                    href={`/blogs/${blog.slug}`}
                    className="group bg-white border border-[var(--med-border)] rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
                  >
                    {/* IMAGE */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[var(--med-text)] mb-2 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-[var(--med-text)]/70 mb-1">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </p>

                      <p className="text-sm text-[var(--med-text)]/70">
                        By <span className="font-medium">{blog.author}</span>
                      </p>

                      <span className="inline-block mt-4 text-[var(--med-primary)] font-semibold">
                        Read More →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
        <PopupForm open={openPopup} onClose={() => setOpenPopup(false)} />
        <FloatingContactActions />
      </div>
    </>
  );
}
