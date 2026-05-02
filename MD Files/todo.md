# 📝 Project Audit TODO List

This list contains the remaining manual tasks and verifications required to bring the project into full compliance with the standards defined in `MD Files`.

---

## 🚀 Performance & SEO (Manual Verification)
- [ ] **Lighthouse Production Audit**: Run `npm run build` then `npm run start` (or deploy to staging) and verify Mobile/Desktop scores are 90+.
- [ ] **TinyPNG / Asset Final Check**: Verify all images in `public/` and `src/assets/` have been through a compression pass.
- [ ] **GSC Sitemap Submission**: Once live, ensure `sitemap.xml` is submitted to Google Search Console and "URL Inspection" is requested.
- [ ] **AEO Audit (AI Summary)**: Ask an AI assistant (Gemini/Claude) to summarize the live site and verify the BLUF method is working effectively.
- [ ] **Health Audit**: Connect the domain to Ahrefs (Free Tier) to verify weekly health and keyword indexing.
- [ ] **Deep Audit Tools**: Perform a final pass with **GTmetrix** and **Pingdom** to ensure no bottleneck scripts exist.

---

## ♿ Accessibility & UX (Manual Verification)
- [ ] **Touch Target Audit**: Manually verify that all interactive elements (buttons, nav links, social icons) are at least **48x48px** for mobile users.
- [ ] **Contrast Ratio Check**: Use the **WAVE** tool or browser dev tools to ensure all text meets the 4.5:1 minimum contrast ratio.
- [ ] **Focus States**: Tab through the site using a keyboard and verify that `focus-visible` rings are prominent and clear.

---

## 🛡️ Infrastructure & Cloudflare (Dashboard)
- [ ] **Verify Bot Fight Mode**: Ensure this is enabled in the Cloudflare dashboard (**Security** -> **Bots**).
- [ ] **Verify Under Attack Mode**: Familiarize yourself with the toggle location in the WAF dashboard for emergencies.
- [ ] **HTTPS Enforcement**: Ensure "Always Use HTTPS" and HSTS are enabled in the Cloudflare SSL/TLS settings.
- [ ] **Speed Settings**: Verify "Auto Minify" (HTML/CSS/JS) and "Rocket Loader" are enabled in the Cloudflare Speed dashboard.

---

## 🔗 Integrations & Logic
- [ ] **Migrate Form Logic**: Refactor `HireMeSection.tsx` to use a custom hook and a **Cloudflare Pages Function** instead of Formspree.
- [ ] **GTM Preview Mode**: Open the GTM preview debugger and verify that tags fire correctly on "Launch Mission" and social link clicks.

---

## 🛠️ Manual Implementation Guide

Use the steps and resources below to complete the manual tasks mentioned in the checklists.

### 🛡️ 1. Cloudflare Dashboard Settings
*Goal: Enable security and caching standards.*
1. **Login**: Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. **Bot Fight Mode**: 
   - Select your domain -> **Security** -> **Bots**.
   - Toggle **Bot Fight Mode** to **On**.
3. **HTTPS Enforcement**:
   - Go to **SSL/TLS** -> **Edge Certificates**.
   - Enable **Always Use HTTPS** and **HSTS**.
4. **Auto Minify**:
   - Go to **Speed** -> **Optimization**.
   - Check all boxes under **Auto Minify**.

### 📩 2. Form Migration (Cloudflare Pages Functions)
*Goal: Move from Formspree to a self-hosted Worker logic.*
1. **Get API Key**: Create an account at [Resend.com](https://resend.com/) and generate an API Key.
2. **Set Environment Variable**: 
   - In Cloudflare Dashboard, go to **Workers & Pages** -> your project -> **Settings** -> **Environment variables**.
   - Add `RESEND_API_KEY` with your key.
3. **Antigravity Action**: Once you have the key, ask Antigravity to: *"Migrate the contact form to Cloudflare Pages Functions using Resend."*

### 🧪 3. Audit Tools
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com/)
- **WAVE**: [wave.webaim.org](https://wave.webaim.org/)
- **Schema Validator**: [validator.schema.org](https://validator.schema.org/)
