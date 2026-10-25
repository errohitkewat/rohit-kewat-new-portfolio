# Rohit Kewat — Portfolio (React + Redux Toolkit + Tailwind + React Router)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Make it yours
1. **Details:** edit `src/data/profile.js` — name, bio, facts, links, stats, projects, experience, skills.
2. **Photo:** your picture is already at `public/profile.jpg` (replace the file to change it). Click it in the sidebar to zoom it to full size.
3. **Deploy:** push to GitHub and import into Vercel (`vercel.json` already handles routing).

## Structure
- `src/store/` — Redux Toolkit slices: `profile`, `theme` (White / Dark, saved in localStorage), `projects` (filter + search with `createSelector`), `ui` (photo viewer).
- `src/pages/` — routes: `/`, `/projects`, `/experience`, `/skills`, 404.
- `src/components/` — Layout (fixed full-screen shell), Sidebar, TopBar (tabs + theme + hire buttons), ImageViewer (smooth zoom), Heatmap, ProjectCard.
