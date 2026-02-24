import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "Gemstones", href: "#gemstones" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Partners", href: "#retailers" },
    { name: "Bespoke", href: "#bespoke" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      data-testid="footer-section"
      className="bg-[#1A1A1A] text-white py-16 md:py-24"
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <button
                onClick={scrollToTop}
                data-testid="footer-logo"
                className="flex flex-col items-start mb-6"
              >
                <span className="font-['Playfair_Display'] text-3xl text-white tracking-tight">
                  Evince
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] -mt-1">
                  Jewels
                </span>
              </button>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                Fine jewellery and gemstone manufacturing, perfected over three
                decades. From heritage craftsmanship to contemporary elegance.
              </p>
              <p className="font-accent text-[#D4AF37] italic">
                Est. 2025 • United Kingdom
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/30 mb-6">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-nav-${link.name.toLowerCase()}`}
                    className="block text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/30 mb-6">
                Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+4407386149641"
                  data-testid="footer-phone"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +44 07386 149641
                </a>
                <a
                  href="mailto:evincejewelsuk@gmail.com"
                  data-testid="footer-email"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  evincejewelsuk@gmail.com
                </a>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    White Building, 1–4 Cumberland Place,
                    <br />
                    Southampton, SO15 2NP, UK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Evince Jewels. All rights reserved.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              data-testid="footer-back-to-top"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/30 hover:text-[#D4AF37] transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
