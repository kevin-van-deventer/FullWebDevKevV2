# ⚡ Vite SEO & Performance Master Checklist (2026 Edition)

Welcome to the definitive guide for building lightning-fast, search-optimized Vite applications. This document is your roadmap to achieving a perfect 100/100 score on **fullwebdevkev.com**.

---

## 🏗️ 01. Technical Foundation & "Ground Truth"
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Use Vite 6+** | Latest stable standard for modern web development. |
| ☐ **Latest Stable Versions** | Always use the latest stable versions of the tech stack (React, Tailwind, etc.) to ensure security and performance. |
| ☐ **Vite Plugin Sitemap** | Use `vite-plugin-sitemap` to automatically generate your `/sitemap.xml` on every build. |
| ☐ **Robots.txt** | Place your `robots.txt` in the `public/` folder to guide crawlers (e.g., disallow /admin). |
| ☐ **Site URL Configuration** | Set your base URL in `vite.config.ts` and use `VITE_SITE_URL` in `.env`. |
| ☐ **Enforce HTTPS** | Critical Google ranking signal and requirement for HTTP/2. |
| ☐ **Environment Variables** | Use `.env` files with `VITE_` prefix for client-side access. |

---

## 🔍 02. Google Search Console (GSC) & Verification
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **DNS Verification** | Verify via DNS instead of HTML file; covers all subdomains. |
| ☐ **Submit Sitemap** | Paste your `/sitemap.xml` link into the GSC Sitemaps section. |
| ☐ **URL Inspection** | Manually "Request Indexing" for your homepage upon launch. |

---

## 📈 03. Google Tag Manager (GTM) & Analytics
This project uses Google Analytics 4 (GA4) and Google Tag Manager (GTM) to monitor performance.

### 📋 Prerequisites
1. Get your **Measurement ID** (`G-XXXXXXXXXX`) from Google Analytics.
2. Get your **GTM ID** (`GTM-PQGTGTJC`) from Google Tag Manager.
3. Add these to your `.env` file:
```bash
VITE_GA_ID=G-T9P45DB6SS
VITE_GTM_ID=GTM-PQGTGTJC
```

### ⚛️ Implementation: Vite (React)
We recommend using `vite-plugin-radar` for optimal performance and easy integration.

1. **Install Dependency**:
```bash
npm install vite-plugin-radar --save-dev
```

2. **Vite Config Integration**:
Add the plugin to your `vite.config.ts`.
```typescript
import { defineConfig } from 'vite'
import ViteRadar from 'vite-plugin-radar'

export default defineConfig({
  plugins: [
    ViteRadar({
      // Google Tag Manager settings
      gtm: {
        id: 'GTM-PQGTGTJC',
      },
      // Google Analytics settings
      analytics: {
        id: 'G-T9P45DB6SS',
      },
    })
  ],
})
```

---

## 🏷️ 04. Metadata & Social (Crucial for Social & Search)
In Vite/React projects, use `react-helmet-async` for managing the document head.

| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Static Metadata** | Set default title and meta tags in `index.html`. |
| ☐ **Dynamic Metadata** | Use `<Helmet>` in your components/pages to ensure unique identities for each route. |
| ☐ **Social Images** | Ensure `og:image` and `twitter:image` are absolute URLs pointing to professional assets. |

---

## 📏 05. Performance & Core Web Vitals
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Image Optimization** | Use `vite-plugin-image-optimizer` or `vite-plugin-imagemin` to compress assets. |
| ☐ **Font Optimization** | Use `vite-plugin-fonts` or local `@font-face` to eliminate FOIT (Flash of Unstyled Text). |
| ☐ **Tailwind v4 (Auto-Scanning)** | Uses Tailwind v4 for automatic bundle optimization and zero-config scanning. |
| ☐ **Code Splitting** | Use dynamic imports `import()` for heavy components or routes. |

---

## 🤖 06. 2026 SEO Strategy: "AI-Ready" Content
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Semantic HTML** | Use `<main>`, `<article>`, `<section>`, and `<nav>`—don't just use `<div>`. |
| ☐ **Structured Data (JSON-LD)** | Add Schema (Organization, FAQ, etc.) to help Google's AI understand your business. |

---

## 🧪 07. Validation Checklist
- [ ] **Lighthouse**: Run a production build (`npm run build` -> `npx serve -s dist`) and check scores.
- [ ] **GTM Preview Mode**: Open GTM dashboard, click "Preview," and verify tags are firing.
- [ ] **Real-Time Analytics**: Check GA4 "Real-time" dashboard to verify your own visit.

---

## 🕯️ 08. The Lighthouse Protocol

### 🚩 The "Production Build" Rule (Most Important)
> [!IMPORTANT]
> **Never run Lighthouse on the dev server.** 
> Vite's dev mode serves unbundled files via ESM, which will give inaccurate (lower) performance results. Always test against the `dist/` folder.

---
*Unlimited Solutions Enterprise · Vite SEO Checklist 2026*
*fullwebdevkev.com*
