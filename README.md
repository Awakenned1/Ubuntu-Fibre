# Ubuntu Fibre Telecommunications

Production-ready landing page for **Ubuntu Fibre Telecommunications** — built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion v12
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) + Inter (body) via `next/font/google`

## Project Structure

```
my-app/                  ← Next.js project root (Vercel root directory)
├── app/
│   ├── icon.png         ← Favicon / OG icon
│   ├── globals.css      ← Tailwind v4 + brand color tokens
│   ├── layout.tsx       ← Root layout, fonts, SEO metadata
│   └── page.tsx         ← Composes all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyChoose.tsx
│   ├── Packages.tsx
│   ├── Coverage.tsx
│   ├── Partners.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
    ├── logo.png
    ├── openserve.png
    ├── huawei.png
    └── vodafone.png
```

## Local Development

```bash
cd my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

This repo includes a `vercel.json` at the root that sets `my-app` as the Vercel root directory.

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel will auto-detect Next.js — no extra settings needed.
4. Click **Deploy**.

## Brand Colours

| Token | Hex |
|---|---|
| Primary Blue | `#0A2E63` |
| Secondary Blue | `#123F85` |
| Ubuntu Yellow | `#F5B400` |
| Ubuntu Green | `#009B4D` |
| Ubuntu Red | `#E31E24` |
