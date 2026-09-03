# .NET Hub Kathmandu — Frontend

React + Vite SPA for the .NET Hub Kathmandu community website.

## Stack

- **React 19** + **Vite 8**
- Vanilla CSS design system (no Tailwind)
- Google Fonts: Sora + Inter

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Connect to API (optional)

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

The app automatically uses the backend API when set; otherwise it falls back to bundled local data.

## Build for production

```bash
npm run build
```

## Project structure

```
src/
├── data/          ← Content as JS data files (easy to update)
├── services/      ← API abstraction layer
├── hooks/         ← useScrollProgress, useIntersection, useCountUp
├── components/
│   ├── common/    ← Navbar, Footer, ProgressBar, BackToTop
│   └── sections/  ← Hero, Marquee, About, Stats, TechStack, Leadership, Events, Community
├── App.jsx
├── main.jsx
└── index.css
```
