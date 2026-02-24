import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Clock, value: "30+", label: "Years Experience" },
    { icon: Globe, value: "3", label: "Countries" },
    { icon: Award, value: "1000+", label: "Creations" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="section-padding bg-[#F5F0E6]"
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              A Legacy of
              <br />
              <span className="text-[#0B6E4F]">Excellence</span>
            </h2>
            <p className="text-base text-[#1A1A1A]/70 mb-6 leading-relaxed">
              Evince Jewels is a fine jewellery and gemstone manufacturing
              company, officially launched in the United Kingdom in 2025. With
              an established presence in India and the United States for over a
              decade, we bring more than 30 years of industry expertise to every
              creation.
            </p>
            <p className="text-base text-[#1A1A1A]/70 mb-8 leading-relaxed">
              We specialise in gold and silver jewellery manufacturing alongside
              precious and semi-precious gemstones—including emeralds, opals,
              tanzanite, sapphires, and more. Our direct manufacturing model
              ensures competitive pricing without compromising on luxury or
              craftsmanship.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4AF37]/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                  <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0B6E4F]">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#1A1A1A]/50 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/15955332/pexels-photo-15955332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Artisan crafting jewellery"
                className="w-full h-full object-cover img-hover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#D4AF37]/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
