# 🎨 Design System & Aesthetics Standards

This document defines the visual and structural standards for all projects. Use this as a reference for maintaining consistency and accessibility.

---

## 🏗️ The "Section" Component Pattern
To ensure consistency across all landing pages and portfolios, every major block must use a standard `Section` component.

**Key Requirements:**
- [ ] **Tailwind Container**: Wrap content in `<div class="container mx-auto px-4">`.
- [ ] **Vertical Spacing**: Use consistent padding (e.g., `py-16` or `py-24`).
- [ ] **Semantic Wrapper**: Use `<section>` tags with unique IDs for anchor linking.

---

## 🖼️ Responsive Image Strategy
Avoid downloading "giant desktop photos" on mobile devices.

**Standards:**
- [ ] **Tailwind Containers**: Use aspect-ratio classes (e.g., `aspect-video`) to prevent Layout Shift.
- [ ] **Responsive Srcset**: (Next.js) Use the native `next/image` loader. (Vite) Ensure images are contained within parent divs that limit their max-width.
- [ ] **LCP Optimization**: The Hero image must always be `loading="eager"` (Vite) or `priority` (Next.js).

---

## ♿ Accessibility (WCAG 2.1)
- [ ] **Contrast**: Minimum 4.5:1 ratio for all text.
- [ ] **Interactivity**: All touch targets (buttons/links) must be at least **48x48px**.
- [ ] **Focus States**: Ensure `focus-visible` rings are prominent for keyboard navigation.

---

## 🔡 Typography
- [ ] **Font Display**: Always use `font-display: swap` in `@font-face` or font configuration.
- [ ] **Local Hosting**: Favor self-hosted fonts over external CDNs to reduce DNS lookup time.