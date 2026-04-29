# FullWebDevKev | Portfolio

Professional Web Development portfolio by Kevin van Deventer (FullWebDevKev). Built with Next.js, TypeScript, and Framer Motion, optimized for high performance and premium user experience.

## 🚀 Recent Updates

- **Branding Excellence**: Fully migrated to FullWebDevKev with updated logos, metadata, and social thumbnails.
- **Static vs. Dynamic**: Successfully transitioned the project to a Full Dynamic Next.js App on Cloudflare to enable advanced backend features.
- **Resend Integration**: Built a robust, Edge-native email system using direct fetch for maximum reliability on Cloudflare's network.
- **Premium UX**: Implemented Lenis Smooth Scroll for that high-end, silky-smooth browsing feel.
- **Custom 404**: Added a bold "Mission Failed" page to keep users engaged even when they wander off the path.
- **Favicon Overhaul**: Perfectly placed and linked all your new branding assets for browsers and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Email**: [Resend](https://resend.com)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)

## 🏁 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛰️ Deployment

The project is configured for Cloudflare Pages using the `@cloudflare/next-on-pages` adapter.

**Build Settings:**
- **Build command:** `npx @cloudflare/next-on-pages@1`
- **Build output directory:** `.vercel/output/static`

**Environment Variables:**
- `RESEND_API_KEY`: Required for the contact form.
- `NEXT_PUBLIC_SITE_URL`: The canonical URL of the site.

---
© 2026 FullWebDevKev · Crafted with ★
