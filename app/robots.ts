import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/login",

          // Block specific service pages
          "/services/abdominal-aortic-aneurysm-treatment-in-gurgaon",
          "/services/amputation-surgery-in-gurgaon",
          "/services/arteriovenous-malformation-treatment-in-gurgaon",
          "/services/av-fistula-treatment-in-gurgaon",
          "/services/chronic-venous-insufficiency-treatment-in-gurgaon",
          "/services/deep-vein-thrombosis-treatment-in-gurgaon",
          "/services/diabetic-foot-treatment-in-gurgaon",
          "/services/diabetic-wound-care-in-gurgaon",
          "/services/dialysis-access-treatment-in-gurgaon",
          "/services/gonadal-vein-disease-treatment-in-gurgaon",
          "/services/limb-salvage-surgery-in-gurgaon",
          "/services/lymphatic-care-treatment-in-gurgaon",
          "/services/onco-vascular-surgery-in-gurgaon",
          "/services/pelvic-venous-disorder-treatment-in-gurgaon",
          "/services/peripheral-artery-disease-treatment-in-gurgaon",
          "/services/pulmonary-embolism-treatment-in-gurgaon",
          "/services/varicose-vein-treatment-in-varanasi",
          "/services/varicose-veins-treatment-in-gurgaon",
        ],
      },
    ],
    sitemap: "https://www.drhimanshuverma.com/sitemap.xml",
    host: "https://www.drhimanshuverma.com",
  };
}
