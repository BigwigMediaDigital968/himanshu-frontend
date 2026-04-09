import { Metadata } from "next";
import BlogClient from "./BlogClient";

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  faqs: {
    question: string;
    answer: string;
    _id?: string;
  }[];
  faqSchema: string;
}

interface RelatedBlogType {
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  datePublished: string;
}

async function getBlog(slug: string): Promise<BlogType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  const blogs: BlogType[] = await res.json();
  const found = blogs.find((b) => b.slug === slug);

  if (!found) throw new Error("Blog not found");

  return found;
}

async function getRelatedBlogs(slug: string): Promise<RelatedBlogType[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/blog/related/${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) return [];
  return res.json();
}

/* ===================== SEO METADATA ===================== */
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params; // ✅ REQUIRED in Next 15
//   const blog = await getBlog(slug);

//   return {
//     title: blog.title,
//     description: blog.excerpt,
//     alternates: {
//       canonical: `https://www.ethicalinfrastructures.com/blogs/${blog.slug}`,
//     },
//     openGraph: {
//       title: blog.title,
//       description: blog.excerpt,
//       type: "article",
//       url: `https://www.ethicalinfrastructures.com/blogs/${blog.slug}`,
//       images: [{ url: blog.coverImage }],
//       siteName: "Ethical Infrastructures Pvt Ltd",
//       locale: "en_IN",
//     },
//   };
// }

/* ===================== PAGE ===================== */
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ REQUIRED in Next 15

  const blog = await getBlog(slug);
  const relatedBlogs = await getRelatedBlogs(slug);
  console.log("blog", blog);
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Ethical Infrastructures Pvt Ltd",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/avf-logo.png`, // change this
      },
    },
    datePublished: blog.datePublished,
    dateModified: blog.datePublished,
    mainEntityOfPage: `${BASE_URL}/blogs/${blog.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${BASE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${BASE_URL}/blogs/${blog.slug}`,
      },
    ],
  };

  return (
    <>
      {/* ✅ Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* ✅ Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ✅ FAQ Schema (from DB) */}
      {blog?.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blog.faqSchema,
          }}
        />
      )}

      <BlogClient blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
