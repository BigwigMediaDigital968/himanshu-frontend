import type { MetadataRoute } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split("T")[0];

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`, {
    next: { revalidate: 60 }, // cache + auto refresh
  });

  const data = await res.json();
  const blogs = data || [];

  const blogUrls = blogs.map((blog: any) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.lastUpdated || blog.datePublished || Date.now())
      .toISOString()
      .split("T")[0],
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/podcast`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/workshop/avf-care`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/featured`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/pelvic-venous-disorder-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/gonadal-vein-disease-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/varicose-veins-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/chronic-venous-insufficiency-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/lymphatic-care-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/av-fistula-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/dialysis-access-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/central-venous-care-treatment-in-gurgaon`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // {
    //   url: `${SITE_URL}/services/peripheral-artery-disease-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/limb-salvage-surgery-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/diabetic-foot-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/diabetic-wound-care-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/amputation-surgery-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/deep-vein-thrombosis-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/pulmonary-embolism-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/abdominal-aortic-aneurysm-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/vascular-trauma-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/onco-vascular-surgery-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/arteriovenous-malformation-treatment-in-gurgaon`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/varicose-vein-treatment-in-delhi`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/services/varicose-vein-treatment-in-varanasi`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    ...blogUrls,
  ];
}
