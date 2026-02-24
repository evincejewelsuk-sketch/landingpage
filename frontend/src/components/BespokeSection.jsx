import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Diamond, Heart } from "lucide-react";

const BespokeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Begin with a private appointment to discuss your vision, preferences, and requirements.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our designers create detailed sketches and 3D renderings for your approval.",
    },
    {
      step: "03",
      title: "Creation",
      description:
        "Master craftsmen bring your vision to life using the finest materials and techniques.",
    },
    {
      step: "04",
      title: "Presentation",
      description:
        "Your unique piece is presented with full documentation and certification.",
    },
  ];

  return (
    <section
      id="bespoke"
      ref={ref}
      data-testid="bespoke-section"
      className="section-padding bg-[#FFFFF0] overflow-hidden"
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
              Bespoke
              <br />
              <span className="text-[#0B6E4F]">Jewellery</span>
            </h2>
            <p className="text-base text-[#1A1A1A]/70 mb-8 leading-relaxed">
              Commission a one-of-a-kind masterpiece. Our bespoke service offers
              an intimate, appointment-only experience where your dreams take
              shape in precious metals and gemstones.
            </p>

            {/* Icons */}
            <div className="flex gap-8 mb-12">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#1A1A1A]/50">
                  By Appointment
                </span>
              </div>
              <div className="text-center">
                <Diamond className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#1A1A1A]/50">
                  Unique Design
                </span>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#1A1A1A]/50">
                  Personal Touch
                </span>
              </div>
            </div>

            {/* Process */}
            <div className="space-y-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="font-['Playfair_Display'] text-2xl text-[#D4AF37]/50">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-lg text-[#1A1A1A] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#1A1A1A]/60">
                      {item.description}
                    </p>
                  </div>
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
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1769305171851-897e01aa095c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBnb2xkJTIwbmVja2xhY2UlMjBtb2RlbCUyMGVkaXRvcmlhbCUyMGZhc2hpb258ZW58MHx8fHwxNzcxOTM5NDY2fDA&ixlib=rb-4.1.0&q=85"
                alt="Bespoke jewellery"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#D4AF37]/30 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0B6E4F]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
