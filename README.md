# React + Vite — 3D iPhone Showcase

Minimal React + Vite starter extended with Three\.js / @react-three/drei, GSAP-driven UI animations and a video carousel component.

## Features

- Vite dev server with HMR
- React components rendering a 3D iPhone model via `@react-three/drei`
- Dynamic texture loading for the 3D model
- Video carousel with progress UI and GSAP animations
- Tailwind / utility-based styling used in components

## Requirements

- Node.js 18\+ (recommended)
- npm or yarn
- Windows (development environment targeted)

## Quick start

1. Install dependencies:
   - `npm install`

2. Run development server:
   - `npm run dev`

3. Build for production:
   - `npm run build`

4. Preview production build locally:
   - `npm run preview`

(Replace `npm` with `yarn` if you use Yarn.)

## NPM scripts

- `dev` — start Vite dev server
- `build` — create production build
- `preview` — preview production build locally
- `lint` — run ESLint (if configured)
- `test` — run tests (if configured)

Refer to `package.json` for exact script names.

## Project layout (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry
- `src/App.jsx` — root component
- `src/components/Iphone.jsx` — 3D model component (uses `useGLTF`, `useTexture`)
- `src/components/VideoCarousel.jsx` — video carousel + GSAP animations
- `src/components/Footer.jsx` — footer component
- `src/constants.js` — site constants

## Troubleshooting / Common runtime errors

- Error: `Could not load undefined` (texture loader)
  - Cause: `useTexture` got `undefined` because `props.item.img` was missing.
  - Fix: Always pass a valid URL or a data-URL fallback (1x1 transparent PNG) to `useTexture`, and only apply the loaded texture to materials when a real image exists (guard with `if (props.item?.img)`).

- Error: `Cannot read properties of null (reading 'currentTime')` and `GSAP target null not found`
  - Cause: DOM refs for `<video>` or progress elements are null when your animation/loop runs.
