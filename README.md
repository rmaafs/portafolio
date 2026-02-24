# Portfolio — Rodrigo Maafs Atilano ![CI/CD](https://github.com/rmaafs/portafolio/workflows/🚀%20Build%20and%20Deploy/badge.svg)

My personal portfolio website built with **React**, showcasing my work, real-time integrations, and DevOps practices.

🔗 **Live:** [rmaafs.com](https://rmaafs.com)

## ✨ Features

- **Bilingual** — English / Spanish language switcher with dynamic JSON-based translations.
- **Spotify Integration** — Displays the song I'm currently listening to in real time via a custom API connected to the Spotify API. Visitors can also recommend songs to my queue.
- **Heart Rate Monitor** — Shows my live heart rate pulled from a custom API connected to my Mi Band and Home Assistant.
- **GitHub Repositories** — Fetches and displays selected public repositories directly from the GitHub API.
- **CI/CD Section** — Visualizes my real commits, test runs, and deployments to demonstrate the DevOps culture I follow.
- **Animated Loading** — Random animated loaders on page load with image pre-caching.
- **Scroll Animations** — Sections fade in on scroll for a polished experience.
- **Seasonal Easter Eggs** — A Santa hat appears during December 🎅.

## 🛠 Tech Stack

| Category       | Technologies                                              |
| -------------- | --------------------------------------------------------- |
| **Framework**  | React 16                                                  |
| **Styling**    | CSS (custom)                                              |
| **Animations** | react-animate-on-scroll, react-fade-in, react-loadingg    |
| **Tooltips**   | Tippy.js / @tippyjs/react                                |
| **Linting**    | ESLint, Prettier                                          |
| **Testing**    | Jest, React Testing Library                               |
| **CI/CD**      | GitHub Actions → GitHub Pages                             |
| **Node**       | v25.5.0 (see `.nvmrc`)                                   |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
- npm

### Installation

```bash
git clone https://github.com/rmaafs/portafolio.git
cd portafolio
npm install
```

### Development

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Generates an optimized production build in the `build/` folder.

## 🧪 Code Quality

```bash
# Check code formatting (Prettier)
npm run sintax:test

# Auto-fix formatting
npm run sintax:fix

# Lint (ESLint)
npm run lint

# Run tests
npm test

# All checks at once
npm run check
```

## 📦 Deployment

The project uses a **GitHub Actions** workflow that runs on every push to `main`:

1. Install dependencies
2. Check code formatting (Prettier)
3. Lint code quality (ESLint)
4. Build the project
5. Deploy to the `gh-pages` branch

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component with language provider
├── Colors.jsx               # Global color theme
├── lang/                    # i18n JSON files (EN_us, ES_mx)
├── hooks/LanguageContext/   # Language context & provider
└── Main/
    ├── Main.jsx             # Page layout & loader
    ├── Presentacion/        # Hero section, planets, heart rate
    ├── AboutMe/             # About me section & tech list
    ├── Repositorios/        # GitHub repositories showcase
    ├── Spotify/             # Live Spotify integration & queue
    ├── CI_CD/               # CI/CD pipeline visualization
    ├── Footer/              # Footer
    └── Tooltip/             # Reusable tooltip component
```

## 📄 License

This project is licensed under the **GNU General Public License v2.0** — see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Inspired by [bchiang7](https://github.com/bchiang7).
