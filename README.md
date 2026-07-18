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

## Photography

All 15 studio photos from the design system's `assets/imagery/` live in `public/images/`. The hero (`hero-hands-puppies-bw.jpg`) and the Farmhouse typeface came through the design-sync channel intact; the other 14 are JPEG copies supplied through chat (the sync channel caps file reads at 256 KiB, below the PNG originals' size), stored under the design system's original names with a `.jpg` extension.

They're visually indistinguishable at the sizes the site renders, but if you ever want the pixel-identical originals, overwrite the `.jpg` files with same-named exports from the Claude Design project. `src/components/Photo.jsx` falls back to a labeled placeholder for any image path that fails to load, so a missing or misnamed file degrades gracefully instead of showing a broken image.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```
