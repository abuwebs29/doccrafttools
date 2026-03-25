# Cloudflare deployment guide

This project is prepared for Cloudflare's current recommended Next.js deployment path: the OpenNext adapter on Cloudflare Workers.

Why this route?
- Cloudflare recommends Workers/OpenNext for full-stack Next.js apps.
- Static Pages export is better only for purely static sites.
- This repo includes Next.js metadata routes and an RSS route, so the Workers/OpenNext path is the safer migration from Vercel.

## 1) Install dependencies
npm install

## 2) Preview locally in the Cloudflare runtime
npm run preview

## 3) Log in to Cloudflare
npx wrangler login

## 4) Deploy
npm run deploy

## 5) Add the custom domain
In Cloudflare dashboard, attach `doccrafttools.com` to the deployed Worker and make it the production domain.

## 6) Redirect `www` to apex
This repo already includes an app-level redirect from `www.doccrafttools.com` to `https://doccrafttools.com` in `next.config.mjs`.
You can also enforce the same redirect in Cloudflare Redirect Rules for defense in depth.

## Optional
Generate Cloudflare env typings:
npm run cf-typegen
