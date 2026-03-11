# Marc Cooperstein — Portfolio

Personal portfolio site for Marc Cooperstein, Software Engineer at Yahoo Search. Live at [mcooperstein.dev](https://mcooperstein.dev).

---

## Tech Stack

| Technology | Why |
|---|---|
| **Vite** | Fast dev server with HMR, minimal config, and modern ESM-based builds — much faster than webpack for a small project |
| **React 18** | Component-based UI makes each section independently maintainable |
| **TypeScript (strict)** | Catches bugs at compile time, especially useful for typed project data |
| **CSS Modules** | Scoped styles per component with zero runtime overhead, no library needed |
| **No UI library** | No Bootstrap/MUI/Tailwind in the new site — keeps bundle tiny and gives full design control |

---

## Project Structure

```
index.html                  # Single HTML entry point
src/
├── main.tsx                # Mounts React to #root
├── App.tsx                 # Composes all sections in order
├── types.ts                # TypeScript interfaces (Project)
├── components/             # One file per section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollReveal.ts  # Custom Intersection Observer hook
└── styles/
    ├── global.css          # Design tokens (CSS vars) + scroll-reveal animation
    └── *.module.css        # Per-component scoped styles

public/
├── CNAME                   # mcooperstein.dev (GitHub Pages)
├── images/                 # Project screenshots (18 files, 3 per project)
├── oldportfolio/           # Preserved legacy Bootstrap site
│   └── index.html
├── css/                    # Bootstrap 3 assets (legacy only)
└── js/                     # jQuery + ScrollReveal (legacy only)
```

---

## Architecture

**`App.tsx` is intentionally simple** — it stacks six section components vertically. There's no client-side router because navigation is anchor-scroll based.

```tsx
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
```

### Scroll Animations

`useScrollReveal` uses the native Intersection Observer API — no library needed. It adds a `.visible` class when an element enters the viewport (10% threshold), triggering a CSS transition defined in `global.css`:

```css
.reveal { opacity: 0; transform: translateY(28px); }
.reveal.visible { opacity: 1; transform: translateY(0); transition: opacity 0.55s ease, transform 0.55s ease; }
```

### Image Carousel

`Projects.tsx` tracks `currentIndex` per card with `useState`. Mouse hover cycles through 3 screenshots. No carousel library — just component state + CSS transitions.

### Design System

All colors, spacing, and typography are CSS custom properties in `global.css`:

```css
:root {
  --color-bg: #111318;
  --color-surface: #1a1d27;
  --color-accent: #6366f1;
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #9ca3af;
  --nav-height: 64px;
  --max-width: 1100px;
}
```

### Legacy Portfolio at `/oldportfolio`

A custom Vite middleware serves `public/oldportfolio/index.html` at the `/oldportfolio` route during development. In production (GitHub Pages), it's served as a static file. The `public/css/` and `public/js/` folders are Bootstrap 3 + jQuery assets that only exist for this legacy page.

---

## Legacy vs. Modern

| Path | Purpose |
|---|---|
| `src/` | Modern React/TS code — the current portfolio |
| `public/images/` | Project screenshots used by React |
| `public/oldportfolio/` | Preserved old Bootstrap site |
| `public/css/`, `public/js/` | Bootstrap 3 + jQuery for old portfolio only |
| `css/`, `js/` (root) | Duplicate legacy assets, effectively unused |
| `gulpfile.js` | Empty — was used pre-Vite, now a no-op |

---

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # TypeScript check + Vite build
npm run preview   # Preview production build
```

---

## Projects Featured

Six Yahoo Search experiences, each with 3 screenshots in a hover carousel:

| Project | Description |
|---|---|
| **Entertainment** | What to watch discovery + Oscars module |
| **Sports** | NFL, NBA, NHL, MLB, Soccer, Golf, Tennis, motorsports |
| **Movies** | Movie browsing + Fandango showtime integration |
| **TV Shows** | TV show browsing + episode experience |
| **Finance** | Stock charts + company financial modules |
| **People** | Celebrity profiles with React-based design system |
