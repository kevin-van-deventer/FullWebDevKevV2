# ⚡ Vite SEO & Performance Master Checklist (2026 Edition)

Welcome to the definitive guide for building lightning-fast, search-optimized Vite applications. This document is your roadmap to achieving a perfect 100/100 score on **fullwebdevkev.com**.

---

## 🤖 AI Interaction & Manual Guidance Rule
> [!IMPORTANT]
> 1. **Manual Guidance**: If any task requires work outside Antigravity (e.g., Cloudflare Dashboard), the AI **MUST** provide a clear, step-by-step guide and resources.
> 2. **Centralized TODO**: The AI **MUST** create and maintain a `todo.md` file in the `MD Files` directory. This file must aggregate tasks from **EVERY .md file** located within the `MD Files` folder and act as a live checklist.
> 3. **TODO Maintenance**: As tasks are completed, the AI should remove them from `todo.md`. Any tasks requiring manual developer verification found in any of the `.md` files **MUST** be added to the `todo.md`.

---

## 💻 Local Development Setup
Follow these steps to get the project running on your machine after cloning:

1. **Install Dependencies**: Run `npm install` in the project root.
2. **Environment Variables**: Copy `.env.example` to `.env` and populate the required keys (e.g., `VITE_GTM_ID`, `VITE_SITE_URL`).
3. **Launch Dev Server**: Run `npm run dev` to start the local environment at `http://localhost:5173`.
4. **Production Build**: To test the optimized build, run `npm run build` followed by `npm run preview`.

---

## 🏗️ 01. Core Architecture (Static/Brochure)
*Best for: Kindergarten, Personal Portfolio, Company Landing Page.*

| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Vite 6+ & React** | Latest stable standard for modern web development. |
| ☐ **react-router-dom** | Standard for smooth, client-side navigation. |
| ☐ **react-helmet-async** | Manage meta tags dynamically per page for SEO. |
| ☐ **Auto-Minify & Bundle** | Ensure Vite is configured to compress assets in `vite.config.ts`. |
| ☐ **Environment Variables** | Use `.env` files with `VITE_` prefix for client-side access. |

---

## 🎨 02. Design & Components
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Section Component** | Use Tailwind’s `container` class to keep layout consistency. |
| ☐ **Responsive Containers** | Set up Tailwind classes so mobile users don't download desktop-sized assets. |
| ☐ **Typography** | Use `font-display: swap` and local fonts to eliminate FOIT. |
| ☐ **Touch Targets** | Ensure buttons/links are at least **48x48px**. |

---

## ⚡ 03. 2026 Optimization: The "LCP" Rule
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Hero Image: Eager** | Add `loading="eager"` or `fetchpriority="high"` to the first image a user sees. |
| ☐ **Other Images: Lazy** | Add `loading="lazy"` to all non-hero images to save bandwidth. |
| ☐ **AVIF First Strategy** | Use AVIF format primarily, with WebP as a fallback (80% weight reduction). |
| ☐ **Responsive Srcset Rule** | **MANDATORY**: Use the `srcset` attribute on all standard `<img>` tags to serve scaled assets for mobile devices. |
| ☐ **Build-time Compression**| Use `vite-plugin-imagemin` to compress everything in `public/` automatically. |

---

## ☁️ 04. Cloudflare Deployment
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Cloudflare Pages** | Best for static sites; git-integrated and global CDN. |
| ☐ **Pages Functions** | Create a `/functions` folder for serverless logic (Workers) without a backend. |
| ☐ **Form Handling Hook** | Custom hook pings Pages Functions for contact forms. |
| ☐ **Bot Fight Mode** | Enable in Cloudflare dashboard to block basic scrapers. |
| ☐ **Under Attack Mode** | Keep on standby for sudden DDoS or traffic spikes. |

---

## 🔍 05. Google Search Console & Analytics
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Vite Plugin Sitemap** | Automatically generate `/sitemap.xml` on build. |
| ☐ **Robots.txt** | Place in `public/` to guide crawlers. |
| ☐ **GSC Submission** | Submit sitemap to GSC as soon as the site is live. |
| ☐ **GTM & GA4** | Use `vite-plugin-radar` for high-performance tracking. |

---

## 📝 06. Content Strategy: The BLUF Method
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Bottom Line Up Front** | State exactly what the business does in the very first sentence. |
| ☐ **Semantic HTML** | Use `<main>`, `<article>`, `<section>`, and `<nav>` properly. |
| ☐ **Structured Data** | Add JSON-LD (Organization, FAQ) for AI engine readiness. |

---

## 🧪 07. Validation Checklist
- [ ] **Lighthouse**: Run on production build (`npm run build` -> `npx serve -s dist`).
- [ ] **GTM Preview**: Verify tags are firing correctly.
- [ ] **Email Test**: Verify form submission reaches the client's inbox.
- [ ] **TinyPNG**: Ensure client assets were optimized before upload.

---
*Unlimited Solutions Enterprise · Vite SEO Checklist 2026*
*fullwebdevkev.com*
