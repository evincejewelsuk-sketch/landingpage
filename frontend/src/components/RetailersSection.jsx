import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Tag, Settings, ArrowRight } from "lucide-react";

const RetailersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Package,
      title: "Wholesale Supply",
      description:
        "Bulk orders with competitive pricing. Direct from manufacturer to retailer, eliminating unnecessary intermediaries.",
      features: [
        "Volume discounts",
        "Consistent quality",
        "Flexible MOQ",
        "Global shipping",
      ],
    },
    {
      icon: Tag,
      title: "Private Label",
      description:
        "Create your own branded jewellery line. We manufacture, you market. Full white-label solutions for retailers.",
      features: [
        "Custom branding",
        "Exclusive designs",
        "Quality assurance",
        "Packaging options",
      ],
    },
    {
      icon: Settings,
      title: "Custom Sourcing",
      description:
        "Specific gemstone requirements? We source and procure gemstones tailored to your exact specifications.",
      features: [
        "Rare stones",
        "Specific cuts",
        "Certification",
        "Ethical sourcing",
      ],
    },
  ];

  return (
    <section
      id="retailers"
      ref={ref}
      data-testid="retailers-section"
      className="section-padding bg-[#F5F0E6]"
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            For Retailers & Partners
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
            Partner with Evince Jewels for exceptional B2B services. Our direct
            manufacturing model offers unmatched value and quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-luxury feature-hover group"
            >
              <service.icon className="w-10 h-10 text-[#0B6E4F] mb-6 transition-transform group-hover:scale-110" />
              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#1A1A1A]/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                data-testid={`retailer-cta-${service.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-[#0B6E4F] hover:text-[#084C3A] transition-colors"
              >
                <span className="text-xs uppercase tracking-widest">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24 p-8 md:p-12 bg-[#0B6E4F] text-center"
        >
          <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-4">
            Ready to Partner?
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Schedule a consultation to discuss your wholesale requirements and
            discover how we can support your business.
          </p>
          <button
            data-testid="retailer-book-demo"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-[#0B6E4F] hover:bg-[#F5F0E6] rounded-sm px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-500"
          >
            Book a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailersSection;
