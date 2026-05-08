# InfinityX Fitness (React + Vite + Tailwind + Framer Motion)

Premium, modern, highly animated gym marketing website.

## Tech stack
- React + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM (routing)
- Swiper.js (testimonials)
- EmailJS (contact form)
- GitHub Pages deployment (via `gh-pages`)

## Quick start

```bash
npm install
npm run dev
```
Open the displayed local URL in your browser.

## Build
```bash
npm run build
```
Output is in `dist/`.

## GitHub Pages deployment

### 1) Create a GitHub repo
Create a new repository (for example: `infinityx-fitness`).

### 2) Enable GitHub Pages
Repo settings -> **Pages** -> deploy from the **`gh-pages` branch** (created by the deploy command below).

### 3) Deploy
```bash
npm run deploy
```
This will build the site and publish it to the `gh-pages` branch.

> If this is your first deploy from a fresh repo, you may need to set Git authentication (GitHub token / CLI login) in your environment.

## Replace content (images, address, phone, Instagram)

All “site content placeholders” live in:
- `src/content/site.ts`
- `src/content/gallery.ts`
- `src/content/gymData.ts`

### Address, phone number, Instagram link
Edit these fields in `src/content/site.ts`:
- `address`
- `phone`
- `instagramUrl`

### Google Maps location
Update in `src/content/site.ts`:
- `mapQuery`
- `googleMapsEmbedUrl`

The map embed + “Get Directions” button are generated from these values.

### Gym gallery / cover photos
The gallery items are currently generated as premium SVG placeholders in `src/content/gallery.ts`.

To use your real photos:
1. Put images into `src/assets/` (or another folder you prefer).
2. Replace each gallery item’s `image` field with the imported file URL (example pattern below).

```ts
import cardio1 from '../assets/cardio-1.jpg'

// then:
image: cardio1
```

## Contact form (EmailJS)

Create a `.env.local` file (not committed) based on `.env.example`:
```bash
cp .env.example .env.local
```
Then fill:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The EmailJS credentials are used inside:
- `src/components/sections/ContactSection.tsx`

## Notes
- Routing uses `HashRouter`, which works well for GitHub Pages.
- Animations respect `prefers-reduced-motion`.

