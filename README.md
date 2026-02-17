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
1. Create a new GitHub repo and push this code.
2. In Vercel: **New Project** → import repo → Deploy.
3. Add your domain in Vercel settings (optional).

## Notes
- PDFs are generated locally in the browser using `jspdf`.
- Update `https://doccrafttools.com` in `app/layout.tsx` and related files if you deploy under a different domain.
