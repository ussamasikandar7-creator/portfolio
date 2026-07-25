# Ussama Sikandar — Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion. Dark theme, animated hero, expandable case
studies, scroll reveals.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Zero errors/warnings expected.

## Editing content

Everything text-based — name, tagline, stats, case studies, experience, education, skills,
contact links — lives in one file:

```
src/data/content.js
```

Edit that file and the whole site updates. No need to touch the components.

To swap the profile photo, replace `src/assets/img/profile-web.jpg` (recommended: portrait
orientation, ~1000px wide, under 300KB).

### Adding live links to case studies

Each case study in `src/data/content.js` has a `url: null` field. Once a project has a public
link (live app, GitHub repo, deck), set `url` to that link and the "View project" button will
appear automatically.

## Deploy (free)

**Vercel (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist` (Vercel
   detects this automatically).
4. Deploy. You get a free `*.vercel.app` URL immediately.
5. To use a custom domain: Project → Settings → Domains → add your domain, then update the
   nameservers/DNS records at your registrar as instructed.

**Netlify** works the same way (`npm run build`, publish directory `dist`).

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`, no config file needed)
- Framer Motion (scroll reveals, animated counters, hover states)
- lucide-react for icons (GitHub/LinkedIn are hand-drawn since lucide dropped brand icons)
