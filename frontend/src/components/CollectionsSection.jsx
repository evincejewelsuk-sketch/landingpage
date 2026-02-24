import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CollectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const collections = [
    {
      title: "Gold Collection",
      description:
        "Timeless elegance crafted in 18K and 22K gold. From statement necklaces to delicate earrings, each piece reflects centuries of goldsmithing mastery.",
      image:
        "https://images.unsplash.com/photo-1769305171851-897e01aa095c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBnb2xkJTIwbmVja2xhY2UlMjBtb2RlbCUyMGVkaXRvcmlhbCUyMGZhc2hpb258ZW58MHx8fHwxNzcxOTM5NDY2fDA&ixlib=rb-4.1.0&q=85",
      accent: "Gold",
    },
    {
      title: "Silver Collection",
      description:
        "Contemporary sophistication in sterling silver. Clean lines and modern designs that complement every style, from everyday elegance to special occasions.",
      image:
        "https://images.pexels.com/photos/10983778/pexels-photo-10983778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      accent: "Silver",
    },
  ];

  return (
    <section
      id="collections"
      ref={ref}
      data-testid="collections-section"
      className="section-padding bg-[#FFFFF0]"
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <div className="gold-line mb-6" />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            Our Collections
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl">
            Discover jewellery that transcends trends. Each collection is a
            testament to our commitment to excellence and artistry.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute inset-4 border border-[#D4AF37]/20 pointer-events-none" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-accent text-[#D4AF37] text-lg mb-2 block">
                  {collection.accent}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-6">
                  {collection.title}
                </h3>
                <p className="text-base text-[#1A1A1A]/70 mb-8 leading-relaxed">
                  {collection.description}
                </p>
                <button
                  data-testid={`collection-cta-${collection.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group flex items-center gap-3 text-[#0B6E4F] hover:text-[#084C3A] transition-colors"
                >
                  <span className="text-sm uppercase tracking-widest">
                    Enquire Now
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
