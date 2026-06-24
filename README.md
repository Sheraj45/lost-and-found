# Lost & Found Portal

A simple Lost & Found portal where users can sign up, post lost or found items (with a photo), and browse everything others have posted.

This is a React rebuild of an original PHP/MySQL version, restructured as a frontend-only demo — no backend or database required.

## Features

- Sign up / Sign in
- Post a lost or found item (name, type, description, location, date, contact, photo)
- Browse all posted items
- Delete your own posted items
- Data persists across page reloads (saved in the browser)

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4

## Demo Note

This is a **frontend-only demo build**. All data (accounts and items) is stored in the browser's `localStorage` — there is no shared backend or database. That means:

- Your data stays on your device and persists between visits
- Items posted in one browser won't be visible from another browser or device

For a production version, this would be extended with a small API and a shared database (e.g. Vercel serverless functions + a hosted Postgres database).

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own copy:

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects the Vite project — click **Deploy**

## Project Structure

```
src/
  components/
    AuthScreen.jsx        # Sign up / Sign in
    HomeScreen.jsx         # Dashboard
    PostItemScreen.jsx     # Post a lost/found item
    ViewItemsScreen.jsx    # Browse & delete items
  App.jsx                  # Screen routing + localStorage persistence
  main.jsx                 # Entry point
```
