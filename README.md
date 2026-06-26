# StepCode | Premium Interactive Landing Page

An interactive, brutalist-inspired premium landing page for StepCode, built to meet modern visual standards with rich micro-interactions, smooth scrolling, and app-like layouts.

## 🚀 Tech Stack

- **Core Framework:** Next.js 16 (React 19, App Router)
- **Styling & Design Tokens:** Tailwind CSS v4 (incorporating bespoke `@theme` system properties)
- **Animations:** Framer Motion (governing component coordinated entry transitions and card morphs)
- **Smooth Scroll:** React Lenis (handling scroll easing and speed interpolation)
- **Typography:** 
  - *Cabinet Grotesk* (heavy heading display)
  - *Geist Sans & Geist Mono* (Vercel body and monospaced digits)
  - *Dela Gothic One* (rough brick-like display)

---

## ✨ Features

- **Rough Brick SVG-Filtered Loading Screen:** A solid black loader featuring a static outline logo, a distressed stone-textured header title generated via dynamic SVG displacement maps (`feTurbulence` & `feDisplacementMap`), and an aligned horizontal loading bar.
- **Micro-interactions:** Hover-responsive cards with SVG clip-path morphing, rotating product images, sliding navbar pills, and active call-to-actions.
- **Scroll Completion Indicator:** A minimalistic horizontal scroll bar indicator (approx. 1.5cm wide) positioned at the bottom right (`fixed bottom-8 right-8`) indicating reading progress.
- **Scrollbar Hiding:** Default browser scrollbars are hidden across all major rendering engines to maintain an immersive screen space.
- **Lenis Smooth Scroll integration:** Integrated scroll deceleration for modern web experiences.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```
