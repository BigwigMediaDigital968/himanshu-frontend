import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/services/varicose-vein-treatment-in-delhi",
        destination: "/services/varicose-veins-treatment-in-gurgaon",
        permanent: true, // 301 redirect (SEO friendly)
      },
      {
        source: "/services/varicose-vein-treatment-in-varanasi",
        destination: "/services/varicose-veins-treatment-in-gurgaon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
