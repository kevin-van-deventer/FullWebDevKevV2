# 🚢 Infrastructure & Hosting Standards

This document outlines the hosting architecture and security protocols for deploying modern web applications to Cloudflare.

---

## ☁️ Cloudflare Pages & Workers
- [ ] **Pages (Static)**: Preferred for Vite projects and pure frontend assets.
- [ ] **Workers (SSR)**: Used for heavy server-side logic or complex Next.js middleware.
- [ ] **Pages Functions**: Use the `/functions` folder in Vite projects to handle backend logic via Workers automatically.

---

## 🛡️ Security Hardening
- [ ] **Bot Fight Mode**: Always enable to block basic scrapers and automated threats.
- [ ] **Under Attack Mode**: Deploy immediately if the site experiences a sudden surge in suspicious traffic.
- [ ] **CSP Headers**: Implement Content Security Policy headers to prevent XSS and data injection.
- [ ] **HTTPS Enforcement**: Use Cloudflare Page Rules to "Always Use HTTPS" and enable HSTS.

---

## ⚡ Caching & Performance
- [ ] **Browser Cache TTL**: Set to at least **1 month** for images and fonts (since these assets rarely change).
- [ ] **Auto Minify**: Enable for HTML, CSS, and JS in the Cloudflare Speed dashboard.
- [ ] **Rocket Loader**: Enable to improve load times for pages with multiple JavaScript elements.

---

## 🐋 Dockerization (Fallback)
If Cloudflare is not the target, use multi-stage Docker builds to keep image sizes small and secure. Always verify `.env` files are excluded from the build context.