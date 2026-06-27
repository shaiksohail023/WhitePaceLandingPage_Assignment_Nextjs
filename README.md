# Whitepace – SaaS Landing Page

A production-quality Next.js landing page built for the Takamul Technologies Frontend Developer Technical Assessment.

## Live Demo

> Vercel Link: https://white-pace-landing-page-assignment.vercel.app/

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

---

## Getting Started

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
git clone https://github.com/shaiksohail023/WhitePaceLandingPage_Assignment_Nextjs.git
cd whitepace
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000]

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Deployment

1. Push to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click Deploy

No environment variables required.

---

## Project Structure

```
whitepace/
├── app/
│   ├── globals.css          # Global styles, animations, dark mode vars
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Page composition
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav, dropdowns, mobile menu, dark toggle
│   │   └── Footer.tsx       # Links, socials, copyright
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with animated mockup
│   │   ├── TrustedLogos.tsx # Brand logo marquee
│   │   ├── Features.tsx     # 6-card feature grid
│   │   ├── Integrations.tsx # Integration icon grid
│   │   ├── Statistics.tsx   # Stats with indigo background
│   │   ├── HowItWorks.tsx   # 4-step process
│   │   ├── Testimonials.tsx # Interactive testimonial carousel
│   │   ├── Resources.tsx    # Article cards
│   │   └── CTA.tsx          # FAQ accordion + CTA banner
│   │
│   └── ui/
│       ├── Button.tsx        # Variant-based button (primary/secondary/outline/ghost)
│       ├── Card.tsx          # Hover-lift card
│       ├── Container.tsx     # Max-width wrapper
│       ├── SectionHeading.tsx# Eyebrow + title + subtitle
│       ├── Accordion.tsx     # Accessible FAQ accordion
│       ├── ScrollProgress.tsx# Fixed top progress bar
│       ├── ScrollAnimations.tsx # IntersectionObserver for scroll reveals
│       └── DarkModeProvider.tsx # Context + localStorage persistence
```

---

## Animation Approach

All animations follow a **progressive enhancement** pattern:

- **Scroll reveals**: CSS classes (`animate-on-scroll`, `-left`, `-right`) start at `opacity: 0`. An `IntersectionObserver` in `ScrollAnimations.tsx` adds `.visible` when elements enter the viewport, triggering CSS transitions.
- **Stagger**: `transitionDelay` inline styles on list items create a cascade effect.
- **Hero mockup**: Uses `animate-on-scroll-right` for entrance, floating badges use `animate-float` keyframes.
- **Feature cards**: `hover:-translate-y-1 hover:shadow-lg` in the `Card` component.
- **Button transitions**: `transition-all duration-200` for smooth hover states.
- **`prefers-reduced-motion`**: A global CSS rule disables all transitions and animations when the user has reduced motion enabled. The `ScrollAnimations` component also early-returns if `matchMedia('(prefers-reduced-motion: reduce)').matches`.

---

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- `aria-label` on all icon-only buttons
- `aria-expanded` on accordion and mobile menu toggles
- `focus-visible:ring-2` on all interactive elements (keyboard navigation)
- `aria-hidden="true"` on decorative SVGs and backgrounds
- Sufficient color contrast ratios (WCAG AA)
- `prefers-reduced-motion` respected

---

## Responsiveness

- Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Navbar: hamburger menu below `lg:`, animated open/close
- Grid layouts: 1 col → 2 col → 3/4 col at wider breakpoints
- Hero: stacked on mobile, side-by-side on desktop
- All padding/font scales step up at each breakpoint

---

## Performance Optimizations

- No large JS bundles (no animation library, no UI framework)
- `'use client'` only where interactivity requires it; most components are server components
- CSS transitions instead of JS animations
- `next/image` ready for any real images
- `IntersectionObserver` with `passive` scroll listener
- Google Fonts loaded via CSS `@import` (swap display)
