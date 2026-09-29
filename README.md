# AI Engineering Roadmap

An interactive, gamified AI Engineering roadmap where each of the 7 core topics is a **tower**, and each completed lesson adds a **floor** to that tower. Track your progress, build streaks, and master AI engineering — one floor at a time.

## Features

- **7 Learning Towers** — Data & ML, Deep Learning, AI Engineering, MLOps, Architecture, Responsible AI, Professional Practices
- **Lesson Tracking** — Click any tower to see lessons, mark them complete, and watch your tower grow
- **Circular Progress Ring** — Visual overall progress in the sidebar
- **Day Streak** — Build and maintain your learning streak
- **Study Hours** — Auto-tracked from lesson durations
- **Unlocked Floors Counter** — See how many floors you've built
- **Weakness Panel** — Auto-computed focus areas that need attention
- **Memory Cards** — Key concepts to remember, organized by topic
- **Glossary** — 14 essential AI/ML terms with definitions
- **Instant Search** — Search across lessons, topics, memory cards, and glossary
- **Mini Map** — Bird's-eye view of all 7 towers
- **Activity Feed** — Your recent learning activity
- **100% Local & Free** — All data stored in localStorage, no server needed

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

## Project Structure

```
roadmap-for-ai/
├── index.html      # Main HTML structure
├── styles.css      # Night-city dark theme styles
├── app.js          # All app logic, data, and state management
└── README.md       # This file
```

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **localStorage** — Persistent state across sessions
- **Google Fonts** — Inter + JetBrains Mono

## Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive design)

## License

MIT
