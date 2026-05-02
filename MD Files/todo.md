# 📝 Project Audit TODO List

This list contains the tasks required to bring the current project in full compliance with the updated documentation standards in `MD Files`.

---

## 🚀 Performance (High Priority)
- [ ] **Optimize Hero Image**: `public/hero-developer.jpg` is currently **2.3MB**. 
    - Convert to **AVIF** (primary) and **WebP** (fallback).
    - Aim for a file size under 200KB.
- [x] **Configure Browser Caching**: Create `public/_headers` and set `Cache-Control` for images and fonts to `max-age=2592000` (1 month).
- [ ] **Responsive Image Containers**: Audit all components to ensure `next/image` has appropriate `sizes` attributes to prevent mobile users from downloading desktop assets.

---

## 🔍 SEO & AI Readiness
- [x] **Add `llms.txt`**: Create `public/llms.txt` with a concise summary of your professional profile and services for AI assistants.
- [x] **Implement Dynamic OG Image**: Create `src/app/opengraph-image.tsx` using the Next.js Metadata API for high-quality, dynamic social previews.
- [x] **Refine BLUF Method**: Update the first sentence in `HeroSection.tsx` to be more explicit. 
    - *Current*: "I build fast, responsive and beautiful websites."
    - *Proposed*: "Kevin van Deventer is a Full-Stack Web Engineer based in Cape Town, specializing in high-performance React and AI-powered applications."

---

## 🏗️ Architecture & Components
- [x] **Create Shared `Section` Component**: Build a reusable `Section.tsx` in `src/components/ui/` that wraps content in a Tailwind `container mx-auto px-4`.
- [x] **Refactor `page.tsx`**: Replace hardcoded section containers with the new `Section` component for consistent spacing.
- [x] **Centralize Social Arrays**: Move the social links currently in `layout.tsx` and `HireMeSection.tsx` into a central configuration file for easier updates.

---

## 🔗 Integrations & Compliance
- [x] **Footer Backlink**: Add the required `unlimitedoptionsenterprise` backlink to the global footer in `src/app/page.tsx`.
- [ ] **Migrate Form Logic**: Refactor `HireMeSection.tsx` to use a custom hook and a **Cloudflare Pages Function** instead of Formspree.
- [ ] **Install @cloudflare/next-on-pages**: Although using static export, installing this utility ensures better compatibility with Cloudflare-specific features if the project scales.

---

## 🛡️ Infrastructure (Dashboard)
- [ ] **Verify Bot Fight Mode**: Ensure this is enabled in the Cloudflare dashboard.
- [ ] **Verify Under Attack Mode**: Ensure you know where to toggle this in the dashboard for emergencies.

---

## 🛠️ Manual Implementation Guide

Use the steps and resources below to complete the manual tasks mentioned in the checklists.

### 🖼️ 1. Image Optimization (Manual Asset Cleanup)
*Goal: Reduce `hero-developer.jpg` from 2.3MB to <200KB.*
1. **Tool**: Go to [Squoosh.app](https://squoosh.app/) or [TinyPNG](https://tinypng.com/).
2. **Process**: Upload the JPG. 
3. **Settings**: Select **AVIF** for the best compression or **WebP** for maximum compatibility.
4. **Action**: Download the optimized file, rename it back to `hero-developer.avif` (or .webp), and replace the original in `public/`.
5. **Vite/Next.js Code**: Update the import in `HeroSection.tsx` to point to the new extension.

### 🛡️ 2. Cloudflare Dashboard Settings
*Goal: Enable security and caching standards.*
1. **Login**: Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. **Bot Fight Mode**: 
   - Select your domain -> **Security** -> **Bots**.
   - Toggle **Bot Fight Mode** to **On**.
3. **Under Attack Mode**: 
   - Select your domain -> **Security** -> **WAF**.
   - Note the **Under Attack Mode** toggle on the Overview tab for future use.
4. **Cache TTL (Secondary Check)**: 
   - Go to **Caching** -> **Configuration**.
   - While we set it in `_headers`, verify the **Browser Cache TTL** is set to "Respect Existing Headers" or manually to "1 month."

### 📩 3. Form Migration (Cloudflare Pages Functions)
*Goal: Move from Formspree to a self-hosted Worker logic.*
1. **Get API Key**: Create an account at [Resend.com](https://resend.com/) and generate an API Key.
2. **Set Environment Variable**: 
   - In Cloudflare Dashboard, go to **Workers & Pages** -> your project -> **Settings** -> **Environment variables**.
   - Add `RESEND_API_KEY` with your key.
3. **Antigravity Action**: Once you have the key, ask Antigravity to: *"Migrate the contact form to Cloudflare Pages Functions using Resend."*

### 💻 4. Terminal Installation
*Goal: Improve Cloudflare compatibility.*
1. **Command**: Open your terminal in the project root and run:
   ```bash
   npm install @cloudflare/next-on-pages --save-dev
   ```
2. **Approval**: Antigravity can run this for you if you say *"Run the installation for @cloudflare/next-on-pages."*

