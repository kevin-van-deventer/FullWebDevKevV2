# 🎨 Design System & Aesthetics Checklist

- [ ] **Tailwind Theme**: Update `tailwind.config.ts` with the new brand’s `primary` and `secondary` hex codes in the `theme.extend.colors` object.
- [ ] **Global CSS**: Adjust `--background` and `--foreground` CSS variables in `src/app/globals.css`.
- [ ] **Typography**: 
    - Swap font family variables in `layout.tsx`.
    - Ensure `font-display: swap` is used to prevent Layout Shift.
    - Load appropriate fonts (Google Fonts or local) in `tailwind.config.ts`.
- [ ] **Interactive Elements**: Ensure all buttons and links have touch targets of at least **48x48px**.
- [ ] **Responsive Design Audit (RECURRING)**: 
    - Verify display on physical devices or mobile emulators.
    - Check section headers/dividers for clipping.
    - **Note: Repeat this check every time a new section, page, or feature is added.**
- [ ] **Accessibility (WCAG 2.1)**:
    - Verify `focus-visible` rings on all elements.
    - Check color contrast ratios (minimum 4.5:1).
    - Ensure semantic HTML tags (`main`, `nav`, `footer`) are used correctly.