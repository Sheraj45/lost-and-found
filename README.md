# Lost & Found Portal

A React + Vite + Tailwind rebuild of the original PHP/MySQL Lost & Found portal.
Built the same way as the cricket-scorer demo: no backend, no database — all
data (accounts, items, photos) is saved in the browser's `localStorage`.

> **Note:** Because storage is per-browser, item posts won't be shared between
> different people/devices. That's expected for a demo build. If you ever want
> real shared data, you'd add a small API + cloud database (e.g. Vercel
> serverless functions + Supabase/Neon Postgres).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Vite — just click Deploy

Or with the Vercel CLI:

```bash
npm install -g vercel
vercel
```
