# TaskFlow AI

A task and habit tracker. Plan work on a drag and drop board, build daily and weekly habits, track streaks, and let AI break a big task into subtasks.

## Features

- Email/password and Google sign in (Firebase Auth)
- Task board with priority, due dates, search and filters, drag and drop
- Habits with weekly goals and check-ins
- Day and week streaks, stats and charts
- AI subtask suggestions (Google Gemini, called from a serverless function)
- Light and dark theme, per-user time zone

## Tech

React 19, Vite, Tailwind CSS, React Router, Firebase (Auth + Firestore), Recharts, dnd-kit. The AI endpoint is a Vercel serverless function in `api/`.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev            # http://localhost:5173
```

`npm run dev` runs the frontend only. To also run the AI endpoint (`/api/breakdown`) locally, use `npx vercel dev`.

## Environment variables

| Name | Where it is used |
| --- | --- |
| `VITE_FIREBASE_*` (6 values) | Browser. Firebase web config from Project settings > Your apps |
| `GEMINI_API_KEY` | Server only (`api/breakdown.js`). Never prefix it with `VITE_` |
| `GEMINI_MODEL` | Optional, defaults to `gemini-3.5-flash-lite` |

`VITE_` values are baked in at build time, so redeploy after changing them.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run lint` | ESLint |
| `npm test` | Unit tests for date and streak logic (Node built-in test runner) |

## Firestore security rules

Rules live in `firestore.rules`: each task and habit can only be read or changed by the user who owns it. Deploy them with:

```bash
npx firebase-tools deploy --only firestore:rules
```

## Deploying to Vercel

1. Import the repo in Vercel and set **Root Directory** to `taskflow-ai`.
2. Add all variables from `.env.example` under Settings > Environment Variables.
3. Deploy. `vercel.json` sends every non-API route to `index.html` so page refreshes work.
4. In Firebase Console > Authentication > Settings > Authorized domains, add your Vercel domain.

## Project structure

```
api/                 Vercel serverless functions (AI breakdown)
src/
  components/        Shared UI (Button, Modal, Sidebar, dashboard widgets)
  context/           Auth, theme and time zone providers
  hooks/             useTasks, useHabits (live Firestore data)
  pages/             Route pages, big pages split into sections/
  services/          Firebase and API calls
  utils/             Date, streak and stats helpers (+ tests)
```

## Known limits

- The AI rate limit (10 requests per user per 10 minutes) is kept in memory, so it resets when the serverless function restarts.
- The contact form does not send messages anywhere yet.
