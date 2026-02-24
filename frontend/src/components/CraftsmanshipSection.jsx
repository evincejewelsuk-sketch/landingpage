import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Eye, Shield, Sparkles } from "lucide-react";

const CraftsmanshipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Gem,
      title: "Expert Cutting",
      description:
        "Precision cutting techniques perfected over decades, maximising brilliance and fire in every stone.",
    },
    {
      icon: Eye,
      title: "Quality Control",
      description:
        "Rigorous inspection at every stage. Each piece undergoes multiple quality checks before completion.",
    },
    {
      icon: Shield,
      title: "Certified Authenticity",
      description:
        "Full certification and documentation for all gemstones. Complete transparency in sourcing and grading.",
    },
    {
      icon: Sparkles,
      title: "Master Artisans",
      description:
        "Skilled craftsmen with generations of expertise. Traditional techniques meet modern precision.",
    },
  ];

  return (
    <section
      id="craftsmanship"
      ref={ref}
      data-testid="craftsmanship-section"
      className="section-padding bg-[#FFFFF0]"
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/15955332/pexels-photo-15955332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Jewellery craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 lg:right-8 bg-[#F5F0E6] p-8 max-w-xs shadow-xl"
            >
              <p className="font-accent text-lg text-[#1A1A1A] italic">
                "Every piece tells a story of patience, precision, and passion."
              </p>
              <div className="mt-4 gold-line" />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              Manufacturing
              <br />
              <span className="text-[#0B6E4F]">Excellence</span>
            </h2>
            <p className="text-base text-[#1A1A1A]/70 mb-12 leading-relaxed">
              Our in-house manufacturing facility combines traditional
              craftsmanship with cutting-edge technology. From raw gemstones to
              finished masterpieces, every step is executed with meticulous
              attention to detail.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <feature.icon className="w-8 h-8 text-[#D4AF37] mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-['Playfair_Display'] text-lg text-[#1A1A1A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
