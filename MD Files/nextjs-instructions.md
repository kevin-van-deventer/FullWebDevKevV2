# 🚀 Next.js SEO & Performance Master Checklist (2026 Edition)

Welcome to the definitive guide for building lightning-fast, search-optimized Next.js applications. This document is your roadmap to achieving a perfect 100/100 score on **fullwebdevkev.com**.

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
2. **Environment Variables**: Copy `.env.example` to `.env.local` and populate the required keys (e.g., `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_SITE_URL`).
3. **Launch Dev Server**: Run `npm run dev` to start the local environment at `http://localhost:3000`.
4. **Production Build**: To test the optimized build, run `npm run build` followed by `npm run start`.

---

## 🏗️ 01. Core Architecture (Dynamic/SEO-Heavy)
*Best for: Furniture Shop (Product catalogs), Blog-style Company sites.*

| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Next.js 16+ (App Router)** | Latest stable standard for modern web development. |
| ☐ **layout.js Strategy** | Use for consistent headers/footers and metadata inheritance. |
| ☐ **@cloudflare/next-on-pages** | Essential tool for deploying Next.js to Cloudflare. |
| ☐ **metadataBase Setting** | Set using `NEXT_PUBLIC_SITE_URL` for canonical URLs. |
| ☐ **Environment Variables** | Use `NEXT_PUBLIC_` for client-side keys in `.env.local`. |

---

## ⚡ 02. Performance & PPR
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Partial Prerendering (PPR)** | Instant static shells with dynamic "Stock Levels" or "Related Items." |
| ☐ **next/image Optimization** | Automatic lazy loading, WebP/AVIF serving, and CLS prevention. |
| ☐ **Responsive Sizes Rule** | **MANDATORY**: Use the `sizes` attribute on all `next/image` components to serve the correct asset size for mobile devices. |
| ☐ **The Hero "Priority" Rule** | Add `priority` attribute to the Hero image (first image seen). |
| ☐ **next/font (Self-Hosted)** | Eliminate FOIT by hosting Google Fonts locally. |

---

## 🔍 03. Advanced SEO & AI Strategy
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **generateMetadata** | Create unique titles/descriptions for dynamic product pages. |
| ☐ **Structured Data (JSON-LD)**| Add "Product" or "Organization" schema for rich search results. |
| ☐ **BLUF Method** | First sentence must clearly state the business value. |
| ☐ **Dynamic Sitemap** | Use `app/sitemap.ts` to index products/blogs automatically. |
| ☐ **robots.ts** | Control crawler access to `/admin` or `/api`. |

---

## ☁️ 04. Cloudflare Runtime & Infrastructure
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **Cloudflare Images** | Use Cloudflare's image CDN for high-performance delivery. |
| ☐ **Browser Cache TTL** | Set to **1 month** for static assets (images/fonts). |
| ☐ **Security: Bot Fight Mode** | Enable in Cloudflare to keep sites safe from scrapers. |
| ☐ **Workers Integration** | Use Cloudflare Workers for heavy SSR or custom middleware. |

---

## 📈 05. Tracking & Validation
| TASK | 💡 WHY IT MATTERS |
| :--- | :--- |
| ☐ **@next/third-parties** | Official GTM and GA4 components optimized for performance. |
| ☐ **Lighthouse Production** | Run on `npm run build` -> `npm run start` only. |
| ☐ **GTM Preview Mode** | Verify tags fire on interactive elements (e.g., "Add to Cart"). |
| ☐ **TinyPNG Check** | Ensure original assets were compressed before upload. |

---

## 🧪 06. Final Verification Checklist
- [ ] **Lighthouse**: Mobile and Desktop scores 90+.
- [ ] **GSC**: Sitemap submitted and "URL Inspection" requested for homepage.
- [ ] **Analytics**: Real-time visit verified in GA4.
- [ ] **Product Schema**: Validated via [Schema Markup Validator](https://validator.schema.org/).

---
*Unlimited Solutions Enterprise · Next.js SEO Checklist 2026*
*fullwebdevkev.com*
