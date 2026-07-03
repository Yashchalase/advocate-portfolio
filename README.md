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

- **Colors:** Navy/charcoal + burgundy accent + off-white background
- **Typography:** Playfair Display (headings) + Inter (body)
- **Interactions:** Sticky navbar, scroll progress, animated counters, carousel, accordion FAQ, floating WhatsApp/call buttons

## Deploy to GitHub

The project is already committed locally on the `main` branch. Run these commands in the project folder:

### 1. Log in to GitHub (one-time)

```bash
gh auth login
```

Choose **GitHub.com** → **HTTPS** → **Login with a web browser**, then follow the prompts.

### 2. Create the repo and push

```bash
gh repo create advocate-portfolio --public --source=. --remote=origin --push --description "Modern advocate/lawyer portfolio website built with React and Vite"
```

If the repo name is taken, pick another name (e.g. `advocate-portfolio-site`).

### Manual alternative (without GitHub CLI)

1. Create a new empty repo at [github.com/new](https://github.com/new)
2. Run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/advocate-portfolio.git
git push -u origin main
```

## Deploy live (Vercel — recommended)

1. Push the code to GitHub (steps above)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import `advocate-portfolio`
4. Vercel auto-detects Vite — click **Deploy**

Build settings (auto-detected):

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

`vercel.json` is included for React Router SPA routing.

### Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Deploy live (Netlify — alternative)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select the repo — `netlify.toml` is already configured

## After deployment

Update your live URL in:

- `src/data/siteConfig.js` → `url`
- `public/sitemap.xml` → all `<loc>` URLs
- `public/robots.txt` → Sitemap URL

## License

Private — for client use only.
