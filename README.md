# Ahmed Abdelmaqsoud — Portfolio

Personal portfolio website built with React 18, TypeScript, Vite, and GSAP.

**Live:** [ahmedpaulo77.github.io/my-portfolio](https://ahmedpaulo77.github.io/my-portfolio/)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router v6 |
| Animation | GSAP + ScrollTrigger |
| Rendering | WebGL (custom GLSL shaders) |
| Styling | CSS custom properties (single global stylesheet) |
| Fonts | Space Grotesk + Inter (self-hosted WOFF2) |

---

## Features

- **Hero** — full-name wordmark with letter-by-letter masked entrance, WebGL poster field that scatters into depth-of-field flight on scroll
- **Horizontal Gallery** — GSAP-pinned horizontal track with custom bezier entrance and WebGL chromatic-aberration lens on both edges
- **Selected Work** — numbered project list with per-character roll hover and sticky cover preview
- **About** — scroll-reveal bio with portrait
- **Skills** — accessible accordion with tag pills
- **Contact** — email copy-to-clipboard with ARIA live feedback, social links
- **15 Case Studies** — each at `/work/:slug`, with full project narrative and image gallery
- Page transition wipe, custom cursor, scroll position restoration on back navigation, reduced-motion fallbacks throughout

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5274
npm run build      # type-check + production build → dist/
npm run preview    # preview the build
```

---

## Content

All text, project data, and motion parameters live in one file:

```
src/content/site.ts
```

Edit `site`, `hero`, `about`, `capabilities`, `contact`, and the `projects` array there — no component changes needed.

---

## Project Images

Place images in `public/images/sites/`. Each project uses four images:

| Suffix | Usage |
|---|---|
| `-cover.webp` | Selected Work list + case study hero |
| `-detail.webp` | Case study gallery (image 1) |
| `-detail2.webp` | Case study gallery (image 2) |
| `-wall.webp` | WebGL poster field texture atlas |

Recommended ratio: 3:2 (1536×1024 px).

---

## License

Fonts (Space Grotesk, Inter) are licensed under SIL OFL 1.1 — see `LICENSES/`.
