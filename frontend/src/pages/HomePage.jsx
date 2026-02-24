import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import GemstonesSection from "@/components/GemstonesSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import RetailersSection from "@/components/RetailersSection";
import BespokeSection from "@/components/BespokeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FFFFF0]"
    >
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <GemstonesSection />
      <CraftsmanshipSection />
      <RetailersSection />
      <BespokeSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
