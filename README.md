# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

> A React-based visualization library integrating Deck.gl, MapLibre, and Three.js for advanced geospatial and 3D rendering.

## ✨ Features

- Geospatial Visualization: Built using Deck.gl and MapLibre for advanced geospatial data rendering and map-based visualizations.
- 3D Graphics Rendering: Leverages Three.js and `@react-three/fiber` for high-performance 3D graphics rendering within a React environment.
- React Integration: Combines Deck.gl, MapLibre, and Three.js with React components for seamless integration into modern web applications.
- Data Aggregation Layers: Utilizes Deck.gl’s aggregation layers for efficient handling and visualization of large datasets (e.g., heatmaps, hexbins).
- Customizable UI Components: Likely integrates `@react-three/drei` for pre-built, reusable 3D utilities and helpers.
- Type Safety: Employs TypeScript (`@types/react`, `@types/three`) to enhance code reliability and developer experience.
- Utility-First Styling: Employs Tailwind CSS for flexible and rapid styling, ensuring a consistent and responsive design system.
- Fast Development Workflow: Utilizes Rsbuild for optimized builds and a fast development cycle, including hot module replacement.
- Asynchronous Data Loading: Includes loaders like `@loaders.gl/core` and `@loaders.gl/tiles` for handling asynchronous data fetching and processing.
- Focus on Code Quality: Includes ESLint configurations (`@antfu/eslint-config`) for maintaining clean and consistent code standards.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

- Ensure you have the following installed:
    - Node.js (>= 18.x recommended)
    - Package manager (npm, yarn, or pnpm)
    ```bash
    node -v
    npm -v # or yarn -v or pnpm -v
    ```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
    cd react-visgl-maplibre
    ```
2. Install dependencies:
    ```bash
    # Use your preferred package manager
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## 🛠️ Usage

Explain how to run and use the project after installation.

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

- `dev`: Starts the development server with automatic browser opening (`rsbuild dev --open`).
- `build`: Creates a production-ready build (`rsbuild build`).
- `preview`: Previews the production build locally (`rsbuild preview`).

Example:
```bash
# Start development server
npm run dev 

# Create production build
npm run build 
```

💻 Tech Stack
Key technologies used in this project include:

* Framework/Library: React
* UI Toolkit/Styling: Tailwind CSS
* 3D Rendering: `Three.js`, `@react-three/fiber`, `@react-three/drei`
* Geospatial Visualization: `Deck.gl`, `MapLibre`
* State Management: Likely managed through React state or context.
* Build Tool: Rsbuild
* Language: TypeScript 

See the package.json for a full list of dependencies.

🤝 Contributing

Contributions are welcome!

📄 License

Distributed under the MIT License. See LICENSE file for more information.

👤 Author
* Rikka (admin@rikka.cc)
* GitHub: @Muromi-Rikka

🔗 Links
* Repository: https://github.com/Trapar-waves/react-visgl-maplibre
* Homepage: https://github.com/Trapar-waves/react-visgl-maplibre
* Issues: https://github.com/Trapar-waves/react-visgl-maplibre/issues
