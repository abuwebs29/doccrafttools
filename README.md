# DocCraft Tools (Next.js + Vercel)

This is a ready-to-deploy Next.js (App Router) project for **doccrafttools.com**:
- PDF generators: Invoice, Receipt, Quotation/Estimate, Delivery Note, Rent Receipt
- Guides, search, FAQ, status, RSS, sitemap/robots
- JSON-LD (WebApplication + FAQ + Breadcrumbs)
- Share + Embed widgets
- LocalStorage "Recently used"

## Quick start
```bash
npm install
npm run dev
```

## Deploy to Vercel

## Environment
```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` before production deployment.

1. Create a new GitHub repo and push this code.
2. In Vercel: **New Project** → import repo → Deploy.
3. Add your domain in Vercel settings (optional).

## Notes
- PDFs are generated locally in the browser using `jspdf`.
- Set `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_CONTACT_EMAIL`) for production deployments to control canonical URLs and contact links from one place.
