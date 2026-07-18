# loulink

Marketing site for **loulink** — a fine-line tattoo studio positioned for weddings (couples, wedding parties, and the venues/planners who host them). Implemented from the [`Louink Design System`](https://claude.ai/design/p/512e91cc-8af7-4232-b622-7715b274e942) Claude Design project.

Editorial, intimate, quietly confident — see `src/styles` for the full token system (color, type, spacing, motion) ported from the design system's `tokens/` and `readme.md`.

## Stack

- [Vite](https://vitejs.dev) + React 18, plain JS/JSX (no TypeScript, matching the source design kit)
- [react-router-dom](https://reactrouter.com) for client-side routing between the five pages
- [lucide-react](https://lucide.dev) for icons, stroke width tuned down (1.3–1.6) for the brand's fine-line feel
- No CSS framework — components use inline styles reading CSS custom properties defined in `src/styles/tokens/*.css`, exactly as authored in the source design system

## Pages

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, philosophy strip, services teaser, flash teaser, inverse quote, CTA band |
| `/services` | Services | Four offerings + FAQ accordion |
| `/flash` | Flash | Filterable flash/work gallery |
| `/booking` | Booking | Interactive 3-step inquiry form with a confirmation state |
| `/about` | About | Studio philosophy + three value props |

`Nav`/`Footer` are shared chrome (`src/components/`). All five pages compose the reusable design-system primitives in `src/design-system/components/` (Button, Card, Eyebrow, Tag, Quote, Accordion, form controls, Tabs, etc.) — ported 1:1 from the design system, only swapping `window.LouinkDesignSystem_*` globals and `<a href="*.html">` navigation for real ES module imports and `react-router-dom`.

Mobile (<720px) behaves app-like: fixed 5-tab bottom nav, compact footer, desktop-only sections hidden, full-width stacked CTAs — same breakpoint and behavior as the source kit's `useIsMobile`/`BottomNav`.

## Known gap: photography

The design system ships 15 real studio photos in `assets/imagery/`, but the design-sync channel used to pull files into this repo caps individual file reads at 256 KiB. Only two binary assets were small enough to come across intact:

- `public/images/hero-hands-puppies-bw.jpg` (the homepage hero) ✅
- `public/fonts/Farmhouse.otf` (the signature accent typeface) ✅

The other 13 photos (artist portrait, tattooing process, wedding-booth station, and the 10 `work-*` finished-tattoo shots) are all PNGs above that cap, so they render as a labeled placeholder (`src/components/Photo.jsx`) instead of a broken image — same pattern the design system itself uses for its still-missing flash-art illustrations.

**To finish:** pull the 13 originals from the design project's `assets/imagery/` folder (via the Claude Design UI, or "Send to Netlify"/"Send to Adobe Express" which bundle images inline) and drop them into `public/images/` under their original names, then pass `src="/images/<name>.png"` into the corresponding `<Photo>` call in `src/pages/Home.jsx`, `About.jsx`, `Services.jsx`, and `Flash.jsx`.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```
