import type { MetadataRoute } from "next";

const SITE_URL = "https://www.drhimanshuverma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

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
  ];
}
