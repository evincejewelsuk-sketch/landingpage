import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32498640/pexels-photo-32498640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Luxury gold jewellery"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-32 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-accent text-lg md:text-xl text-[#0B6E4F] mb-4">
            Est. 2025 • United Kingdom
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-6"
        >
          Where Heritage
          <br />
          <span className="text-[#0B6E4F]">Meets Brilliance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-[#1A1A1A]/70 mb-10 max-w-xl leading-relaxed"
        >
          Fine jewellery and gemstone manufacturing, perfected over three
          decades. From the workshops of India to the elegance of British
          craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToContact}
            data-testid="hero-cta-enquire"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book a Consultation
          </button>
          <a
            href="#collections"
            data-testid="hero-cta-collections"
            className="btn-secondary text-center"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#1A1A1A]/50"
        >
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
