# AI — AI Engineering Roadmap

An interactive, gamified AI Engineering roadmap drawn as a **night city**. Each of the 7 core topics is a **tower**, and each completed lesson lights up a new **floor**. Track your progress, build streaks, and master AI engineering — one floor at a time.

## Features

- **Night-city home screen** — a procedurally drawn SVG skyline with 7 isometric towers. Built floors glow in the tower's colour, the next floor pulses as "under construction", and planned floors show as blueprint outlines. Finish a tower and its crown lights up with a beacon.
- **7 Learning Towers** — Data & ML, Deep Learning, AI Engineering, MLOps, Architecture, Responsible AI, Professional Practices (7 lessons each, 49 total)
- **Lesson Tracking** — click any tower, label or card to open its lessons and mark the next one complete
- **Overall Progress Ring + Floors Unlocked** — overlaid on the city
- **Study Overview** — study-hours ring (hours studied vs. the whole curriculum) with This Week / This Month / All Time ranges, day streak, total study days and towers built
- **Weakness Panel** — auto-computed topics with the lowest completion
- **Memory Cards** — 14 key concepts as flashcards (Show Answer, previous / next, and a full Flashcards page with topic filters)
- **Glossary** — 14 essential AI/ML terms (Key Terms chips on the home screen + full Glossary page)
- **Add your own terms & flashcards** — the **+** card on the Glossary and Flashcards pages opens a form (title + description for a term, front + back for a flashcard). Your items can be edited or deleted, show up in search and the home widgets, are saved in this browser, and survive "Reset all progress"
- **Instant Search** — press `/` and search lessons, topics, memory cards and glossary terms; arrow keys + Enter to open a result
- **City Map** — bird's-eye isometric map with zoom, plus a larger map dialog
- **Activity Feed** — recent completions on the home screen, full history on the Statistics page
- **Statistics page** — KPI tiles, per-tower completion bars and minutes studied over the last 14 days
- **Notifications** — streak reminders and the next lesson for your weakest tower
- **Settings** — display name (avatar initials) and a guarded "reset all progress"
- **Keyboard friendly** — `/` search, `Esc` closes dialogs/menus, focus is trapped in dialogs, visible focus rings everywhere
- **Responsive** — sidebar becomes a drawer on tablets/phones; the city scrolls sideways on small screens
- **Respects reduced motion** — animations switch off when the OS asks for it
- **100% Local & Free** — all data stored in `localStorage` (key `ai_roadmap_state`), no server, no build step
- **Analytics** — Microsoft Clarity (project `yq86md8lio`) records anonymous usage, heatmaps and session replays; the snippet is in the `<head>` of `index.html`

## Quick Start

### Option 1: Open locally

Simply open `index.html` in your browser. No build step, no server required.

### Option 2: Serve locally

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## GitHub Setup

### 1. Create the repository on GitHub

Go to https://github.com/new and create a new repository called `Roadmap-For-Ai` (or `roadmap-for-ai`). **Do not** initialize with a README — we'll push our own.

### 2. Initialize and push

```bash
cd C:/Users/abdul/roadmap-for-ai

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Engineering Roadmap"

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/abdra7/Roadmap-For-Ai.git

# Push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://abdra7.github.io/Roadmap-For-Ai/`

### 4. Publishing an update

After changing any file, push it and GitHub Pages redeploys in a minute or two:

```bash
cd C:/Users/abdul/roadmap-for-ai
git add index.html styles.css app.js README.md
git commit -m "Describe your change"
git push
```

If you changed `styles.css` or `app.js`, also bump the `?v=` number on their `<link>` / `<script>` tags in `index.html` (for example `?v=2026.10.05`). Browsers cache these files for a few minutes, and a new version number makes them download the fresh copy instead of mixing old styles with the new page. To see a change immediately yourself, hard-refresh with `Ctrl + Shift + R`.

## Project Structure

```
roadmap-for-ai/
├── index.html      # Layout: sidebar, top bar, home dashboard, pages, dialogs, SVG icon sprite
├── styles.css      # Night-city theme: design tokens, components, responsive rules
├── app.js          # Data, state (localStorage), SVG city renderer, rendering and interactions
└── README.md       # This file
```

## Tech Stack

- **HTML5** — semantic markup, inline SVG icon sprite
- **CSS3** — custom properties, Grid, Flexbox, `color-mix()`, animations
- **Vanilla JavaScript** — no frameworks, no dependencies; the city is generated as SVG at runtime
- **localStorage** — persistent state across sessions
- **Google Fonts** — Inter + JetBrains Mono

## Browser Support

- Chrome / Edge 111+
- Firefox 113+
- Safari 16.4+
- Mobile browsers (responsive design)

## License

MIT
