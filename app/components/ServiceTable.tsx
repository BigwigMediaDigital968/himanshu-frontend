const ServiceTable = () => {
  const services = [
    {
      title: "Varicose Veins",
      link: "/services/varicose-veins-treatment-in-gurgaon",
    },
    {
      title: "Gonadal Vein Disease",
      link: "/services/gonadal-vein-disease-treatment-in-gurgaon",
    },
    {
      title: "Peripheral Artery Disease (PAD)",
      link: "/services/peripheral-artery-disease-treatment-in-gurgaon",
    },
    {
      title: "Amputation Surgery",
      link: "/services/amputation-surgery-in-gurgaon",
    },
    {
      title: "Chronic Venous Insufficiency",
      link: "/services/chronic-venous-insufficiency-treatment-in-gurgaon",
    },
    {
      title: "AV Fistula",
      link: "/services/av-fistula-treatment-in-gurgaon",
    },
    {
      title: "Advanced Limb Salvage",
      link: "/services/limb-salvage-surgery-in-gurgaon",
    },
    {
      title: "Deep Vein Thrombosis",
      link: "/services/deep-vein-thrombosis-treatment-in-gurgaon",
    },
    {
      title: "Lymphatic Care",
      link: "/services/lymphatic-care-treatment-in-gurgaon",
    },
    {
      title: "Dialysis Access",
      link: "/services/dialysis-access-treatment-in-gurgaon",
    },
    {
      title: "Diabetic Foot",
      link: "/services/diabetic-foot-treatment-in-gurgaon",
    },
    {
      title: "Pulmonary Embolism",
      link: "/services/pulmonary-embolism-treatment-in-gurgaon",
    },
    {
      title: "Pelvic Venous Disorders",
      link: "/services/pelvic-venous-disorder-treatment-in-gurgaon",
    },
    {
      title: "Central Venous Care",
      link: "/services/central-venous-care-treatment-in-gurgaon",
    },
    {
      title: "Wound Care",
      link: "/services/diabetic-wound-care-in-gurgaon",
    },
    {
      title: "Abdominal Aortic Aneurysm",
      link: "/services/abdominal-aortic-aneurysm-treatment-in-gurgaon",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto animate-fadeIn">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] text-center mb-10">
          Our Specialized Treatments & Services
        </h2>
      </div>

      {/* Grid Container */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l rounded-lg overflow-hidden"
        style={{ borderColor: "var(--med-border)" }}
      >
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="group relative flex items-center justify-center p-6 min-h-[100px] text-center transition-all duration-200 border-r border-b hover:z-10 animate-scaleIn"
            style={{
              borderColor: "var(--med-border)",
              backgroundColor: "white",
              animationDelay: `${index * 0.03}s`,
            }}
          >
            {/* Hover Background Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: "var(--med-light)" }}
            ></div>

            {/* Service Text */}
            <span
              className="relative text-lg font-medium decoration-transparent group-hover:decoration-[var(--med-primary)] transition-all duration-300"
              style={{ color: "var(--med-primary)" }}
            >
              {service.title}
            </span>

            {/* Subtle indicator on hover */}
            <div
              className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: "var(--med-primary)" }}
            ></div>
          </a>
        ))}
      </div>

      <style jsx>{`
        /* Local overrides for the specific grid lines behavior */
        .group:hover {
          box-shadow: inset 0 0 0 2px var(--med-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default ServiceTable;
