# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> A React-based geospatial visualization template integrating Three.js, Deck.gl, and MapLibre for 3D map interactions and rich geospatial data rendering.

## ✨ Features

- **Integrated Geospatial Stack:** Combines MapLibre GL JS for vector maps, Deck.gl for high-performance WebGL-based visualization layers, and Three.js for custom 3D objects, all within a React environment.
- **React Three Fiber & react-three-map:** Uses `@react-three/fiber` for declarative Three.js scenes and `react-three-map` to synchronize Three.js objects with MapLibre map movements and terrain.
- **Deck.gl Layers & Effects:** Supports a wide range of Deck.gl layers (e.g., HexagonLayer for aggregations) and effects (e.g., lighting) for advanced data visualization.
- **Data Loading:** Incorporates `@loaders.gl` for efficient loading and parsing of various data formats like CSV and 3D Tiles.
- **Modern Development Experience:**
  - Built with Rsbuild for fast HMR and optimized builds.
  - Styled with Tailwind CSS for rapid UI development.
  - Fully typed with TypeScript for improved code quality and developer experience.
  - Linting and formatting with ESLint.
  - Git hooks with Husky for code quality checks.

## 💻 Tech Stack

- **Core Libraries:**
  - React (v18+)
  - MapLibre GL JS
  - Deck.gl
  - Three.js
  - React Three Fiber (`@react-three/fiber`)
  - React Three Map (`react-three-map`)
- **UI & Styling:**
  - Tailwind CSS
- **Build & Dev Tools:**
  - Rsbuild
  - TypeScript
  - ESLint
  - Husky
- **Data Loading:**
  - `@loaders.gl/core`
  - `@loaders.gl/csv`

*(See [package.json](package.json) for a complete list of dependencies)*

## 🚀 Getting Started

This template is designed to be used with `create-trapar-waves`, but you can also clone and run it directly.

### Prerequisites

- Node.js (>= 18.x recommended)
- pnpm (recommended), npm, or yarn

```bash
node -v
pnpm -v # or npm -v
```

### Running the Template Directly

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
   cd react-visgl-maplibre
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   # or
   # npm install
   # yarn install
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   # or
   # npm run dev
   # yarn dev
   ```

   This will start the Rsbuild dev server and open the app in your default browser.

### Using the Template via `create-trapar-waves`

```bash
pnpm create trapar-waves
```

Follow the prompts to select this template.

## 🧱 Project Structure

```
src/
├── App.tsx          # Main application component
├── index.tsx        # Entry point for React app
├── deckgl/          # Deck.gl layer and overlay configuration
├── source/          # MapLibre map source components
└── global.css       # Global styles (Tailwind imports)
```

- `App.tsx`: The main application component demonstrating the integration. It sets up a MapLibre map with terrain and a synchronized Three.js canvas. A Deck.gl `HexagonLayer` is overlaid for heatmap visualization.
- `deckgl/`: Contains the configuration for Deck.gl layers (`heatmapLayer`) and the `MapboxOverlay` instance (`deckOverlay`) which bridges Deck.gl with MapLibre.
- `source/`: Defines custom map sources for the MapLibre map, such as terrain and hillshade DEMs.

## 🤝 Contributing

Contributions are welcome and greatly appreciated!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code adheres to the existing style and passes linting checks.

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Homepage:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Issues:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
