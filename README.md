# LawBey Website

Landing website for LawBey — AI for Bahamian Law. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS with Bahamian-inspired color palette
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Static export (out/) — deploy to Vercel, Netlify, or any static host

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (static export)

```bash
npm run build
```

Output is in the `out/` directory. Serve with any static file server.

### Production

```bash
npm run build
npm run start
```

Note: With `output: 'export'`, `npm run start` serves the built app; for static hosting you deploy the `out/` folder.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import this repository.
4. Leave build settings as default (Vercel detects Next.js).
5. Optional: set environment variable `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://lawbey.com`) for correct canonical and sitemap URLs.
6. Deploy. Vercel will build and deploy on every push to the main branch.

### Custom domain

In the Vercel project: **Settings → Domains** → add your domain (e.g. `lawbey.com`) and follow DNS instructions.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Full production URL (e.g. `https://lawbey.com`). Used for metadata and sitemap. Optional; defaults to `https://lawbey.com`. |

## Project Structure

- `app/` — Next.js App Router (layout, pages, globals)
- `components/` — React components (Header, Hero, Features, Benefits, etc.)
- `public/` — Static assets, robots.txt, sitemap.xml

## Login

All “Start Chatting”, “Login”, and “Get Started” buttons link to **https://beta.lawbey.com**.

## License

Private — LawBey.
