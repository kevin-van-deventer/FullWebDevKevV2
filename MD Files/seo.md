# 🔍 SEO & Brand Identity Checklist

- [ ] **Metadata Configuration**: Update the `metadata` object in `src/app/layout.tsx` (title.default, title.template, description, and openGraph).
- [ ] **Local SEO (JSON-LD)**: Rewrite the `jsonLd` object with the new business Name, Address, Phone (NAP), and geographic coordinates.
- [ ] **Internal Linking**: Audit the site to ensure sufficient internal links between pages.
- [ ] **AEO & AI Search Readiness**: Rewrite descriptions for AI assistants and update `public/llms.txt`.
- [ ] **Sitemap & Robots**: Update `src/app/sitemap.ts` and verify `public/robots.txt`.
- [ ] **Favicon & Manifest**: Replace all assets in `/public` and update `site.webmanifest`.
- [ ] **Google Search Console**: Verify the site property and submit the new sitemap.
- [ ] **Backlink Picking Up**: Verify that all core backlinks (including the footer link) are live and indexable.
- [ ] **Web Accessibility Audit**: Run the **WAVE Web Accessibility Tool** to ensure compliance.

### Performance & SEO Testing Tools (Pre-Launch)
- [ ] **Google PageSpeed Insights**: Achieve a 90+ score on Mobile and Desktop.
- [ ] **GTmetrix**: Verify fully loaded time and request counts.
- [ ] **WebPageTest**: Run a deep audit from a localized server.
- [ ] **Pingdom Tools**: Check for bottleneck scripts.
- [ ] **DebugBear**: Monitor Core Web Vitals and site speed trends.