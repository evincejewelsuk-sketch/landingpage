# Evince Jewels - Product Requirements Document

## Original Problem Statement
Build a luxury, elegant, editorial-style website for Evince Jewels - a fine jewellery and gemstone manufacturing company with 30+ years experience, presence in UK, India, and USA. Website should be frontend-heavy for Vercel deployment with Resend email integration for lead capture.

## Brand Identity
- **Company**: Evince Jewels
- **Tagline**: "Where Heritage Meets Brilliance"
- **Aesthetic**: Classy, timeless, high-end luxury comparable to Bvlgari, Gucci High Jewellery, Cartier
- **Color Palette**: Ivory (#FFFFF0), Deep Emerald (#0B6E4F), Champagne Gold (#D4AF37), Onyx (#1A1A1A)

## User Personas
1. **Luxury Consumers (B2C)**: High-net-worth individuals seeking bespoke jewellery
2. **Jewellery Retailers (B2B)**: Looking for wholesale supply and partnership
3. **Partners**: Interested in private label manufacturing

## Core Requirements (Static)
- Single-page luxury website with smooth scroll navigation
- Editorial-style photography and layouts
- Lead capture form with email notifications
- Calendly booking integration
- Mobile responsive design
- High conversion rate CTAs

## What's Been Implemented (Feb 24, 2026)

### Frontend (React)
- ✅ Hero section with full-width image and CTA buttons
- ✅ Sticky navigation with blur effect on scroll
- ✅ About section with stats (30+ years, 3 countries, 1000+ creations)
- ✅ Collections section (Gold & Silver jewellery)
- ✅ Gemstones gallery with horizontal scroll (Emerald, Ruby, Sapphire, Tanzanite, Opal, Rubellite)
- ✅ Craftsmanship section highlighting manufacturing excellence
- ✅ Retailers & B2B section (Wholesale, Private Label, Custom Sourcing)
- ✅ Bespoke jewellery section with process steps
- ✅ Contact section with lead form
- ✅ Calendly widget integration
- ✅ Footer with contact info and navigation
- ✅ Framer Motion animations
- ✅ Playfair Display + Lato typography
- ✅ Mobile responsive menu

### Backend (FastAPI)
- ✅ Lead form submission endpoint (/api/lead)
- ✅ Resend email integration for notifications
- ✅ MongoDB storage for leads

### Integrations
- ✅ Resend (API Key: re_ZZJMjToC_D8EH7Sw1T1qE95ZEQbqEMoST)
- ✅ Calendly embed (https://calendly.com/evincejewelsuk/new-meeting)

## Contact Information
- **Email**: evincejewelsuk@gmail.com
- **Phone**: +44 07386 149641
- **Address**: White Building, 1–4 Cumberland Place, Southampton, SO15 2NP, UK

## Prioritized Backlog

### P0 (Completed)
- [x] Hero section with CTAs
- [x] All main sections
- [x] Lead capture form
- [x] Email notifications via Resend
- [x] Calendly integration
- [x] Mobile responsive

### P1 (Next Phase)
- [ ] SEO meta tags and Open Graph
- [ ] Image optimization/lazy loading
- [ ] Analytics integration (Google Analytics)
- [ ] Cookie consent banner
- [ ] Testimonials section

### P2 (Future)
- [ ] Product catalog with CMS
- [ ] Multi-language support
- [ ] Live chat integration
- [ ] Newsletter subscription
- [ ] Blog section

## Technical Stack
- **Frontend**: React 19, Framer Motion, Tailwind CSS
- **Backend**: FastAPI, Motor (MongoDB async driver)
- **Email**: Resend
- **Scheduling**: Calendly
- **Deployment Ready**: Vercel (frontend), any Python host (backend)

## Next Action Items
1. Add SEO meta tags for better search visibility
2. Consider adding testimonials/social proof
3. Set up analytics to track conversions
4. Add WhatsApp integration for quick inquiries
