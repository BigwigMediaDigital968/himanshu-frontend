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
      {
        source: "/services/av-fistula",
        destination: "/services/av-fistula-treatment-in-gurgaon",
        permanent: true,
      },
      {
        source: "/blogs/how-are-varicose-veins-diagnosed-tests-and-procedures-explained",
        destination: "/blogs/how-are-varicose-veins-diagnosed-tests-explained",
        permanent: true,
      },
      {
        source: "/blogs/peripheral-artery-disease-treatment-for-better-blood-flow",
        destination: "/blogs/pad-leg-pain-treatment-options",
        permanent: true,
      },
      {
        source: "/blogs/diagnosis-of-peripheral-artery-disease",
        destination: "/blogs/peripheral-artery-disease-diagnosis",
        permanent: true,
      },
      {
        source: "/blogs/blood-clot-in-the-leg-10-warning-signs-you-should-never-ignore",
        destination: "/blogs/blood-clot-in-the-leg-10-warning-signs-to-know",
        permanent: true,
      },
      {
        source: "/blogs/is-laser-treatment-for-varicose-veins-safe-for-diabetic-patients",
        destination: "/blogs/laser-treatment-safe-for-diabetic-patients",
        permanent: true,
      },
      {
        source: "/blogs/protein-in-your-urine-or-high-creatinine-it-could-be-chronic-kidney-disease-ckd",
        destination: "/blogs/protein-in-urine-or-high-creatinine-signs-of-ckd",
        permanent: true,
      },
      {
        source: "/blogs/lipedema-treatment-best-options-to-reduce-pain-and-fat",
        destination: "/blogs/lipedema-treatment-options",
        permanent: true,
      },
      {
        source: "/blogs/advanced-treatment-for-varicose-veins-what-you-need-to-know",
        destination: "/blogs/advanced-varicose-vein-treatment-options",
        permanent: true,
      },
      {
        source: "/blogs/diabetic-foot-ulcer-symptoms-causes-treatment-guide",
        destination: "/blogs/diabetic-foot-ulcer-symptoms-causes-treatment",
        permanent: true,
      },
      {
        source: "/blogs/recently-diagnosed-with-ckd-learn-what-stage-youre-in-and-what-comes-next",
        destination: "/blogs/recently-diagnosed-with-ckd-what-comes-next",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
