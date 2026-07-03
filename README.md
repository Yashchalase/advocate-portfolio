# Advocate Portfolio Website

A modern, SEO-friendly, multi-page portfolio website for an Advocate/Lawyer built with React, Vite, Tailwind CSS, Framer Motion, and React Helmet Async.

## Tech Stack

- **React 19** + **Vite 8** — fast development and builds
- **React Router DOM** — client-side routing with code splitting
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll-triggered animations and interactions
- **React Helmet Async** — per-page SEO meta tags
- **Lucide React** — icons
- **EmailJS** — contact form handling (optional)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Updating Content

All site content lives in `src/data/` — edit these files without touching components:

| File | Contents |
|------|----------|
| `siteConfig.js` | Name, contact info, stats, images, social links, nav |
| `practiceAreas.js` | Practice area details, services, FAQs |
| `caseStudies.js` | Notable case summaries |
| `testimonials.js` | Client reviews and ratings |
| `blog.js` | Blog posts and categories |
| `faq.js` | Frequently asked questions |
| `experience.js` | Career timeline, education, awards |

## EmailJS Setup

Update `siteConfig.emailjs` with your credentials:

```js
emailjs: {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
},
```

## Pages

- `/` — Home (hero, stats, practice areas, testimonials, blog preview)
- `/about` — Bio, education, awards, gallery
- `/practice-areas` — All practice areas
- `/practice-areas/:slug` — Practice area detail
- `/case-studies` — Filterable case studies
- `/experience` — Career timeline
- `/testimonials` — Client reviews
- `/blog` — Articles with search and category filters
- `/blog/:slug` — Individual blog post
- `/faq` — Accordion FAQ with schema markup
- `/contact` — Contact form, map, office hours
- `/consultation` — Booking form with date/time picker

## SEO Features

- Per-page `<title>`, meta description, Open Graph, and Twitter Card tags
- JSON-LD schema: Attorney, LegalService, FAQPage, Article, BreadcrumbList
- Semantic HTML with proper heading hierarchy
- `sitemap.xml` and `robots.txt` in `/public`
- Lazy-loaded routes and images
- Mobile-first responsive design

## Design

- **Colors:** Navy/charcoal + gold accent + off-white background
- **Typography:** Playfair Display (headings) + Inter (body)
- **Interactions:** Sticky navbar, scroll progress, animated counters, carousel, accordion FAQ, floating WhatsApp/call buttons

## License

Private — for client use only.
