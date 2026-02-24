import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GemstonesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gemstones = [
    {
      name: "Emerald",
      description:
        "The stone of royalty. Our Colombian and Zambian emeralds are selected for their exceptional clarity and vivid green hue.",
      image: "https://images.pexels.com/photos/35451979/pexels-photo-35451979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      origin: "Colombia • Zambia",
    },
    {
      name: "Ruby",
      description:
        "The king of precious stones. Deep red Burmese rubies with excellent saturation and natural fluorescence.",
      image: "https://images.pexels.com/photos/13307186/pexels-photo-13307186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      origin: "Myanmar • Mozambique",
    },
    {
      name: "Sapphire",
      description:
        "From Kashmir blues to Ceylon brilliance. Our sapphires display the finest cornflower blue with velvety lustre.",
      image: "https://images.pexels.com/photos/9953656/pexels-photo-9953656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      origin: "Sri Lanka • Kashmir",
    },
    {
      name: "Tanzanite",
      description:
        "Exclusively from Tanzania. Rare violet-blue stones with exceptional trichroic properties.",
      image: "https://images.unsplash.com/photo-1699924539821-f65017a1a851?w=1260&h=750&fit=crop&q=80",
      origin: "Tanzania",
    },
    {
      name: "Opal",
      description:
        "Australian fire opals displaying mesmerising play-of-colour. Each stone is a unique masterpiece of nature.",
      image: "https://images.unsplash.com/photo-1608637273739-15f0cd97285e?w=1260&h=750&fit=crop&q=80",
      origin: "Australia • Ethiopia",
    },
    {
      name: "Rubellite",
      description:
        "Pink to red tourmaline of exceptional quality. Prized for its vivid saturation and crystal clarity.",
      image: "https://images.unsplash.com/photo-1728234553997-f71b87a44e13?w=1260&h=750&fit=crop&q=80",
      origin: "Brazil • Nigeria",
    },
  ];

  return (
    <section
      id="gemstones"
      ref={ref}
      data-testid="gemstones-section"
      className="section-padding bg-[#1A1A1A] overflow-hidden"
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="w-16 h-px bg-[#D4AF37] mb-6" />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Precious Gemstones
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            Sourced from the world's finest mines. Each gemstone is hand-selected
            for its exceptional quality, cut, and brilliance.
          </p>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="gemstone-scroll -mx-6 px-6">
          {gemstones.map((gem, index) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="gemstone-card group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden mb-6 bg-[#2a2a2a]">
                <img
                  src={gem.image}
                  alt={`${gem.name} gemstone`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
                {/* Origin badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs uppercase tracking-widest text-white/70">
                    {gem.origin}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-white mb-3">
                {gem.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {gem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            data-testid="gemstones-cta"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-sm px-8 py-4 uppercase tracking-widest text-xs transition-all duration-500"
          >
            Request Gemstone Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GemstonesSection;
