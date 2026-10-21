# 🌋 The Stone World (React + Vite Edition)

> **"From zero to the stars through the power of science."**

A production-grade **Vite + React 18 + Tailwind CSS** game where civilization is rebuilt across 8 scientific eras.

---

## ⚡ Quickstart

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server (runs on port 3000)
npm run dev

# 3. Build for production
npm run build
```

The game will launch locally at `http://localhost:3000`.

---

## 🚀 Deploying to GitHub Pages

This repository includes an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

1. Push your code to GitHub on the `main` or `master` branch.
2. In your GitHub repository, navigate to:
   **Settings** ➔ **Pages**
3. Under **Build and deployment** ➔ **Source**, select:
   **"GitHub Actions"**
4. The workflow will automatically trigger, build the project, and deploy your site with zero manual setup.

---

## 🛠️ Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite 6 (Ultra-fast HMR)
* **Styling:** Tailwind CSS 3
* **Icons:** Lucide-react
* **Celebrations:** Canvas-Confetti
* **Audio:** Native Web Audio API procedural synthesis (zero audio downloads)
* **AI Mentor:** Dual-mode (Instant offline Socratic deduction + optional live Google Gemini API)

---

## 📂 Project Structure

```
the-stone-world-react/
├── .github/workflows/deploy.yml # Automated GitHub Pages deployment
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── src/
│   ├── main.jsx                 # React root
│   ├── App.jsx                  # Main application state machine & tabs
│   ├── index.css                # Tailwind directives
│   ├── data/
│   │   └── gameData.js          # 8 Eras, elements, recipes & breakthroughs
│   ├── hooks/
│   │   └── useSoundFX.js        # Web Audio synthesizer hook
│   ├── components/
│   │   ├── Header.jsx           # Stats, era badge, localization switch
│   │   ├── SettlementCanvas.jsx # Dynamic evolving settlement illustration
│   │   ├── Crucible.jsx         # Synthesis laboratory & celebration
│   │   ├── InventoryGrid.jsx    # Filterable unlocked discoveries
│   │   ├── ElementInspector.jsx # Deep lore & science principles
│   │   ├── MentorDrawer.jsx     # Socratic AI chat companion
│   │   └── GreatArchive.jsx     # 8 Eras civilization timeline
│   └── puzzles/
│       ├── LeveragePuzzle.jsx   # Era 1 Archimedes' lever physics simulation
│       └── EraPuzzles.jsx       # Eras 2–8 interactive scientific puzzles
```
