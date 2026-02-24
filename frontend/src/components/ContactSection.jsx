import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Calendar, Send, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const interests = [
    "Gold Jewellery",
    "Silver Jewellery",
    "Gemstones",
    "Bespoke Commission",
    "Wholesale Enquiry",
    "Partnership",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/lead`, formData);
      if (response.data.status === "success") {
        toast.success("Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load Calendly widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="section-padding bg-[#F5F0E6]"
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            Connect With Us
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
            Begin your journey with Evince Jewels. Whether you're seeking a
            bespoke creation or exploring partnership opportunities, we're here
            to assist.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] mb-8">
              Send an Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  data-testid="contact-input-name"
                  className="input-luxury"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  data-testid="contact-input-email"
                  className="input-luxury"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  data-testid="contact-input-phone"
                  className="input-luxury"
                  required
                />
              </div>

              <div>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  data-testid="contact-select-interest"
                  className="input-luxury appearance-none cursor-pointer"
                >
                  <option value="">Select Interest</option>
                  {interests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  data-testid="contact-input-message"
                  rows={4}
                  className="input-luxury resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="contact-submit-button"
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t border-[#D4AF37]/20 space-y-4">
              <a
                href="tel:+4407386149641"
                data-testid="contact-phone-link"
                className="flex items-center gap-4 text-[#1A1A1A]/70 hover:text-[#0B6E4F] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                +44 07386 149641
              </a>
              <a
                href="mailto:evincejewelsuk@gmail.com"
                data-testid="contact-email-link"
                className="flex items-center gap-4 text-[#1A1A1A]/70 hover:text-[#0B6E4F] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                evincejewelsuk@gmail.com
              </a>
              <div className="flex items-start gap-4 text-[#1A1A1A]/70">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  White Building, 1–4 Cumberland Place,
                  <br />
                  Southampton, SO15 2NP, United Kingdom
                </span>
              </div>
            </div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-[#0B6E4F]" />
              <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A]">
                Book a Consultation
              </h3>
            </div>

            <div
              className="calendly-inline-widget bg-white rounded-sm shadow-sm"
              data-url="https://calendly.com/evincejewelsuk/new-meeting?hide_gdpr_banner=1&primary_color=0B6E4F"
              data-testid="calendly-widget"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
