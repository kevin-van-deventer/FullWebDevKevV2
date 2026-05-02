# 🗂️ Project Templates & Selection Guide

Use this guide to determine the best technical stack for a new client project based on their business goals.

---

## ⚡ The Vite + Tailwind Template
**Best for**: Static/Brochure sites, Kindergarten landing pages, Personal Portfolios.

### Core Structure:
- **Routing**: `react-router-dom` for lightweight client-side navigation.
- **SEO**: `react-helmet-async` for static meta tag management.
- **Asset Pipeline**: Build-time compression via `vite-plugin-imagemin`.

### 2026 Optimization:
- **Image Compression**: AVIF first, WebP fallback.
- **Components**: Standard `Section` component with Tailwind containers.
- **Form Handling**: Custom hook pings a **Cloudflare Pages Function** (No backend).

---

## 🚀 The Next.js + Tailwind Template
**Best for**: Dynamic catalogs, Furniture Shops, SEO-heavy blogs, E-commerce.

### Core Structure:
- **App Router**: Nested `layout.js` for consistent UI and metadata inheritance.
- **Metadata API**: `generateMetadata` for dynamic pages (e.g., product details).
- **Asset Pipeline**: Native `next/image` for automatic lazy loading and resizing.

### 2026 SEO & Performance:
- **PPR (Partial Prerendering)**: Instant static shell with dynamic "Stock Levels."
- **Structured Data**: Deep JSON-LD (Product, Organization, LocalBusiness).
- **Fonts**: `next/font` for self-hosted typography performance.
