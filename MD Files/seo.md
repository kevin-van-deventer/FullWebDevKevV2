# 🔍 SEO & Content Strategy Standards

This document defines the high-level strategy for content hierarchy and asset management to ensure search and AI engine readiness.

---

## 📝 The BLUF Method (Bottom Line Up Front)
Users and AI crawlers should know exactly what a business is within the first 3 seconds.

- [ ] **Core Statement**: The first sentence of the landing page must clearly define the business (e.g., *"Green Valley Kindergarten is a bilingual preschool in District 2..."*).
- [ ] **Value Prop**: Follow immediately with the primary service or unique selling point.

---

## 🖼️ Asset Optimization (Client-Side)
To keep build times fast and site weights low, optimize assets *before* they enter the repository.

- [ ] **TinyPNG**: Instruct clients to use TinyPNG before sending images.
- [ ] **WebP/AVIF Conversion**: Convert all hero images to AVIF primarily, with WebP fallbacks.

---

## 🤖 AEO & AI Readiness
- [ ] **llms.txt**: Create and maintain `public/llms.txt` to provide a concise summary for AI assistants.
- [ ] **Schema (JSON-LD)**: 
    - Use **Product** schema for catalogs (Furniture).
    - Use **Organization/LocalBusiness** for service sites (Kindergarten).
- [ ] **AEO Audit**: Periodically ask AI assistants (Gemini, Claude) to summarize the site and verify accuracy.

---

## 🧪 Deep Audit Tools
- [ ] **GTmetrix**: Target "A" grade with < 1.5s LCP.
- [ ] **Pingdom**: Check for bottleneck scripts or heavy third-party tags.
- [ ] **WAVE**: Ensure WCAG compliance for screen readers.