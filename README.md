# By Hamdi

The homepage for [By Hamdi](https://www.byhamdi.co) — a one-person studio building useful AI-powered products in Minnesota.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals, magnetic hover, and the timeline draw
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
- `src/content/home.ts` — hero, products, strategy session, about, building-in-public sections

## Project structure

```
src/
  app/                Root layout, homepage, and metadata (icon, OG image, robots, sitemap)
  components/
    sections/          One component per homepage section (Hero, ProductsSection, Footer, ...)
    products/           Product row, identity marks, vertical thread
    building/            Building-in-public channel cards
    field/               The constellation field canvas
    ui/                   Shared primitives (buttons, wordmark, reveal wrapper, ...)
  content/               Copy — see above
  lib/                    Small shared helpers
```

Components are organized so new pages (products, writing, newsletter, services) can reuse the
same `ui/` primitives and `site.ts` config as the site grows beyond one page.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) or any Next.js host. Before going live, confirm
`siteUrl` in `src/app/layout.tsx` and the Google Analytics measurement ID in
`src/components/analytics/GoogleAnalytics.tsx` still match production.
