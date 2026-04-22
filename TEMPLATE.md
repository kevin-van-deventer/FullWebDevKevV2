# Gym & Academy White-Label Template Guide

This repository has been engineered as a high-conversion, highly-dynamic template. Because the architecture (Next.js App Router, Tailwind CSS, Framer Motion) is modular, you can rapidly repurpose this codebase for any other business (e.g., CrossFit Gyms, Yoga Studios, Personal Trainers) by systematically replacing the branding modules.

Follow this checklist to successfully white-label this template for a new client:

---

## 1. Global Brand Identity & SEO Config
The absolute first step is migrating the metadata so Google understands exactly who the new business is.

- [ ] **`src/app/layout.tsx`**:
  - Update the `metadata` object (`title.default`, `title.template`, `description`).
  - Completely rewrite the `jsonLd` object matching the new business' exact NAP (Name, Address, Phone Number), coordinates, and local SEO areas served.
- [ ] **`src/app/sitemap.ts`**:
  - Update the `baseUrl` constant holding the production domain.
- [ ] **Favicons & Manifest**:
  - Generate a new favicon package.
  - Replace all icons in the `/public` folder (`favicon.ico`, `icon.png`, `apple-touch-icon.png`).
  - Update the `name` and `short_name` fields in `/public/site.webmanifest`.
- [ ] **FAQ Schema & Images**:
  - Sync the `FAQPage` schema in `layout.tsx` to match the brand's specific FAQ text.
  - Manually audit all `img` tags in `HomeClient.tsx` to ensure alt-tags contain localized regional keywords (e.g., swapping "Durban" for "Cape Town").
- [ ] **AI Search Readiness (`llms.txt`)**:
  - Update `/public/llms.txt` with the new business's text-only profile for AI crawlers.

---

## 2. Design System & Aesthetics
Change the primary brand aesthetics without breaking the kinetic layouts.

- [ ] **`tailwind.config.ts`**:
  - Open the `theme.extend.colors` object.
  - Swap the `primary` and `secondary` hex codes with the new brand's dominant colors. The app will automatically map these new colors across backgrounds, shadows, borders, and text highlights.
- [ ] **`src/app/globals.css`**:
  - Update your base `--background` and `--foreground` CSS variables if the client wants a light-mode native site or a non-black dark mode (e.g., navy blue).
  - Modify the `.torque-gradient` utility class to match the client's highlight spectrum.
- [ ] **Typography**:
  - If changing the font families, adjust `spaceGrotesk`, `manrope`, and `lexend` variable definitions in `src/app/layout.tsx` and load them appropriately inside `tailwind.config.ts`.

---

## 3. Communication & Lead Generation
Crucial updates to ensure leads flow to the correct individual.

- [ ] **WhatsApp Routing**:
  - Open `src/components/WhatsAppButton.tsx` and change the `whatsappNumber` constant.
- [ ] **Lead Form Connections**:
  - Integrate a database/email hook (e.g., Resend, Formspree) into the `handleSubmit` functions inside `src/components/LeadModal.tsx` and the Contact Page (`src/app/contact/page.tsx`).
- [ ] **Footer Assets**:
  - Open `src/components/Footer.tsx`. Update the hardcoded physical address, email, and copyright text.
  - Check the `SOCIAL` array at the top of the file to swap the exact `href` URLs for Facebook, Instagram, and WhatsApp. *Note: Facebook and Instagram are hardcoded raw SVGs inside this array to bypass outdated dependency limits.*
- [ ] **Google Places Reviews (API)**:
  - Open `src/components/Reviews.tsx` and change the hardcoded `placeId` constant to match the new business's Google Place ID.
  - The `GOOGLE_PLACES_API_KEY` in your `.env.local` will handle fetching their specific 5-star reviews automatically.
  - *IMPORTANT PROTOCOL*: To preserve API billing and guarantee instant load times, the `fetch` function is hardcoded with `{ next: { revalidate: 604800 } }`. This means Next.js will only fetch live reviews from Google **once every 7 days**. If you receive a new 5-star review, it will take up to a week to appear organically unless you force-clear the Next.js cache.
- [ ] **Performance & JS Tree-Shaking**:
  - The `LeadModal` and `WhatsAppButton` global components are explicitly deferred using Next.js `next/dynamic` inside `src/app/layout.tsx`. If you build new heavy components (like popups or large animations) that do not appear immediately "above the fold", ensure you import them dynamically using `const Component = dynamic(() => import(...))` to preserve the ultra-low First Load JS payload.
---

## 4. Media Assets & Schedules
Image manipulation and persistent data structure changes.

- [ ] **Logo Replacements**:
  - Replace `/public/Guerreiro-Grappling-Logo.png` with the new transparent `.png` logo.
  - Do a global Search & Replace in the `.tsx` files for `Guerreiro-Grappling-Logo.png` if the exact filename is changed.
- [ ] **Photography**:
  - The template relies heavily on dynamic aspect-ratio image cards. Replace image `src` strings globally inside `page.tsx`, `About` pages, etc., with high-quality optimized images of the new facility.
- [ ] **Schedule Initialization**:
  - Open `src/data/schedule.json`. Wipe the array and initialize it with the new client's classes.
  - *Note*: Ensure the string values output inside the `category` objects match whatever strict UI styling you intend to pass directly to the new `Schedule` component.

---

## 5. Front-End Copywriting
Run through the static text and update the core content loop.

- [ ] **Homepage (`/src/app/page.tsx`)**: 
    - Rewrite the Hero title. 
    - Rewrite the **Arsenal Section (BJJ, MMA, Kickboxing)** with the new business's specific disciplines. Ensure the copy uses Answer Engine Optimization (AEO) to explicitly define what the disciplines are.
    - Update Ascension Timeline details, Pricing packages, and Coach profiles.
- [ ] **Subpages**: 
    - `/about`: Rewrite gym history.
    - `/faqs`: Adapt questions for the new clientele.
    - `/rules`: Modify gym etiquette guidelines.
    - `/classes`: Re-route class architectures (e.g., drop "Jiu-Jitsu" for "Spin Class").

---

## 6. Deployment Overrides
- [ ] **Environment Variables**: Set up a fresh `.env.local`. Create a new secure `ADMIN_PASSWORD` and `NEXT_PUBLIC_ADMIN_PASSWORD` value to protect the new client's native Schedule editor portal.

---

## 7. Final Accessibility & Visual Polish
Before handing off the project, perform these final checks:

- [x] **Interactive Focus**: Verify all buttons, links, and inputs have visible `focus-visible` rings.
- [x] **ARIA Labels**: Ensure icon-only buttons (like the menu toggle or social icons) have descriptive `aria-label` attributes.
- [x] **Landmarks**: Verify the `<main>` tag is correctly implemented and all pages use semantic tags (`nav`, `footer`).
- [x] **Focus Trapping**: Test the `LeadModal` and Mobile Menu with a keyboard to ensure focus does not escape to the background.
- [x] **Heading Hierarchy**: Ensure all headings (H1-H6) follow a sequentially-descending order across all pages (H1 → H2 → H3) to maintain accessibility standards.
- [ ] **Visual Audit (Mobile)**: Visit the site on a physical device or mobile emulator. Check every section header to ensure it is not clipped or obscured by the diagonal divider design pattern.

