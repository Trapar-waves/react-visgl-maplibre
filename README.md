# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

> A React-based library that integrates MapLibre, Deck.gl, and Three.js for advanced geospatial data visualization.

## ✨ Features

* **React Integration:** Built using React for a component-driven architecture, allowing seamless integration into React applications.
* **Geospatial Data Visualization:** Utilizes Deck.gl and MapLibre to provide rich geospatial data visualization capabilities.
* **3D Rendering with Three.js:** Employs `@react-three/fiber` and `three` to enable 3D rendering and interactive 3D experiences within the map interface.
* **Layer-Based Design:** Offers support for multiple layers (via Deck.gl) such as aggregation layers, geo-layers, and custom Mapbox-compatible layers.
* **Data Loading & Parsing:** Includes loaders like `@loaders.gl/core` and `@loaders.gl/csv` to handle various data formats (CSV, 3D Tiles, etc.), making it easier to work with large datasets.
* **Tailwind CSS Styling:** Employs Tailwind CSS for utility-first styling, offering flexibility in UI customization.
* **Modern Build Workflow:** Built with Rsbuild for optimized development builds and hot module replacement, ensuring a fast and efficient development cycle.
* **Type Safety:** Leverages TypeScript (`@types/react`, `@types/three`) to enhance code reliability and developer experience.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

* Ensure you have the following installed:
    * Node.js (>= 18.x recommended)
    * Package manager (npm, yarn, or pnpm)
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

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

* `dev`: Starts the development server with hot-reloading enabled (powered by Rsbuild).
* `build`: Creates a production-ready build.
* `preview`: Launches a local server to preview the production build.

Example:
```bash
# Start development server
npm run dev

# Create production build
npm run build
```

## 💻 Tech Stack

Key technologies used in this project include:

* **Framework/Library:** React
* **UI Toolkit/Styling:** Tailwind CSS
* **3D Visualization:** Three.js, Deck.gl, MapLibre
* **Build Tool:** Rsbuild
* **Language:** TypeScript

See the [package.json](package.json) for a full list of dependencies.

## 🤝 Contributing

Contributions are welcome!

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Author

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub Profile: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

* **Repository:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **Homepage:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **Issues:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
