# By Hamdi

The homepage for [By Hamdi](https://www.byhamdi.co) — a one-person studio building useful AI-powered products in Minnesota.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for the hero entrance animation
- A hand-rolled `<canvas>` constellation field behind every section

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing copy

Page copy lives in `src/content/` — edit these instead of hunting through components:

- `src/content/site.ts` — brand, contact info, social links, footer nav
- `src/content/home.ts` — hero, services, products, about, building-in-public sections
- `src/content/business.ts`, `src/content/vibe.ts` — service page copy, also served by `/api/v1/services/*`

## Project structure

```
src/
  app/                Root layout, pages (/, /business, /vibe-coding-help), service APIs, and metadata
  components/
    sections/          Nav, Footer, and one component per homepage section (Hero, ServicesSection, ...)
    products/           Product identity marks
    field/               The constellation field canvas
    ui/                   Shared primitives (Section, Button, TextLink, Steps, Tag, wordmark, ...)
  content/               Copy — see above
  lib/                    Small shared helpers
```

Components are organized so new pages (products, writing, newsletter, services) can reuse the
same `ui/` primitives and `site.ts` config as the site grows beyond one page.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) or any Next.js host. Before going live, confirm
`siteUrl` in `src/app/layout.tsx` and the Google Analytics measurement ID in
`src/components/analytics/GoogleAnalytics.tsx` still match production.
