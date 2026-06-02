# Premium Designer Portfolio — Reinard Canero

A clean local web app for a premium designer portfolio, built with React + Vite on the frontend and Express + Node.js on the backend.

## What changed

- Removed the old workspace-only files and switched to a normal npm project.
- Replaced the old workspace setup with a normal npm project.
- Kept the existing portfolio design and pages in the local client app.
- Added a working Express backend with an `/api/health` route.

## Project structure

```text
/project-root
  client/              # React + Vite frontend
    src/
    index.html
  server/              # Express backend
    index.js
  vite.config.js      # Local Vite config with API proxy
  package.json         # Root npm scripts
  .env.example         # Local environment template
```

## Local setup

1. Install dependencies:
   npm install
2. Create your local environment file:
   copy .env.example .env
3. Start the app:
   npm run dev

## GitHub Pages deployment

1. Push this project to a GitHub repository.
2. Enable GitHub Pages in the repository settings and select the GitHub Actions deployment source.
3. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will build and publish the Vite frontend automatically on every push to main.

## Commands

- npm run dev      # start frontend and backend together
- npm run client   # start Vite frontend only
- npm run server   # start Express backend only
- npm run build    # build the Vite app
- npm start        # start the Express server

## API

The backend exposes:

- GET /api/health

The frontend uses Vite proxying so `/api/*` calls are forwarded to http://localhost:5000 during local development.
