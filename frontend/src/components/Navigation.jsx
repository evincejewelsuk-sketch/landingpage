import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                  className="text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#0B6E4F] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Logo Center */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="nav-logo"
              className="flex flex-col items-center"
            >
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1A1A1A] tracking-tight">
                Evince
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] -mt-1">
                Jewels
              </span>
            </button>

            {/* Right Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                  className="text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#0B6E4F] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+4407386149641"
                data-testid="nav-phone"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0B6E4F] hover:text-[#084C3A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Us</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1A1A1A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1A1A1A]" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FFFFF0] pt-24 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  className="text-lg uppercase tracking-widest text-[#1A1A1A] hover:text-[#0B6E4F] transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="tel:+4407386149641"
                data-testid="mobile-nav-phone"
                className="flex items-center gap-2 mt-4 btn-primary"
              >
                <Phone className="w-4 h-4" />
                +44 07386 149641
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
