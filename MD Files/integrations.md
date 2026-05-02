# 🔗 Integrations & Communication Standards

This document defines the patterns for connecting frontend applications to external services and serverless logic.

---

## 📩 Form Handling (Serverless)
To avoid a separate backend, use Cloudflare Pages Functions.

- [ ] **Custom Hook**: Build a React hook (e.g., `useContactForm`) that pings a Cloudflare Pages Function.
- [ ] **Functions Folder**: Place logic in `/functions/submit-form.js` to handle POST requests and email notifications.
- [ ] **Success/Error States**: Ensure forms provide immediate visual feedback via Tailwind transitions.

---

## 📈 Tracking & Analytics
- [ ] **GA4/GTM**: Create unique properties for every client. Standardize naming as `[ClientName] - Portfolio`.
- [ ] **Ahrefs**: Connect the site to Ahrefs for weekly health audits and keyword tracking.
- [ ] **GSC Verification**: Use DNS-level verification via Cloudflare for total coverage.

---

## 💬 Social & Proof
- [ ] **WhatsApp/Messenger**: Standardize social arrays to allow for easy updates to contact numbers.
- [ ] **Google Places**: Link the `placeId` for dynamic review fetching.
- [ ] **Backlink Placement**: Every site must include the `unlimitedoptionsenterprise` backlink in the global footer.