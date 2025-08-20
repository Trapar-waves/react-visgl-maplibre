# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> 一个基于 React 的地理空间可视化模板，集成了 Three.js、Deck.gl 和 MapLibre，用于 3D 地图交互和丰富的地理空间数据渲染。

## ✨ 特性

- **集成的地理空间技术栈：** 结合 MapLibre GL JS 用于矢量地图、Deck.gl 用于高性能 WebGL 可视化图层，以及 Three.js 用于自定义 3D 对象，全部在 React 环境中。
- **React Three Fiber & react-three-map：** 使用 `@react-three/fiber` 进行声明式 Three.js 场景，并使用 `react-three-map` 将 Three.js 对象与 MapLibre 地图的移动和地形同步。
- **Deck.gl 图层与效果：** 支持广泛的 Deck.gl 图层（例如用于聚合的 HexagonLayer）和效果（例如照明），以实现高级数据可视化。
- **数据加载：** 集成 `@loaders.gl` 以高效加载和解析各种数据格式，例如 CSV 和 3D Tiles。
- **现代化开发体验：**
  - 使用 Rsbuild 构建，实现快速的 HMR 和优化构建。
  - 使用 Tailwind CSS 进行样式设计，加速 UI 开发。
  - 使用 TypeScript 完全类型化，以提高代码质量和开发者体验。
  - 使用 ESLint 进行代码检查和格式化。
  - 使用 Husky 进行 Git 钩子，以检查代码质量。

## 💻 技术栈

- **核心库：**
  - React (v18+)
  - MapLibre GL JS
  - Deck.gl
  - Three.js
  - React Three Fiber (`@react-three/fiber`)
  - React Three Map (`react-three-map`)
- **UI 与样式：**
  - Tailwind CSS
- **构建与开发工具：**
  - Rsbuild
  - TypeScript
  - ESLint
  - Husky
- **数据加载：**
  - `@loaders.gl/core`
  - `@loaders.gl/csv`

*（请参见 [package.json](package.json) 获取完整的依赖列表）*

## 🚀 入门指南

此模板设计用于 `create-trapar-waves`，但您也可以直接克隆并运行它。

### 先决条件

- Node.js (推荐 >= 18.x)
- pnpm (推荐)、npm 或 yarn

```bash
node -v
pnpm -v # 或 npm -v
```

### 直接运行模板

1. **克隆仓库：**

   ```bash
   git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
   cd react-visgl-maplibre
   ```

2. **安装依赖：**

   ```bash
   pnpm install
   # 或
   # npm install
   # yarn install
   ```

3. **启动开发服务器：**

   ```bash
   pnpm dev
   # 或
   # npm run dev
   # yarn dev
   ```

   这将启动 Rsbuild 开发服务器并在默认浏览器中打开应用程序。

### 通过 `create-trapar-waves` 使用模板

```bash
pnpm create trapar-waves
```

按照提示选择此模板。

## 🧱 项目结构

```
src/
├── App.tsx          # 主应用组件
├── index.tsx        # React 应用的入口点
├── deckgl/          # Deck.gl 图层和覆盖配置
├── source/          # MapLibre 地图源组件
└── global.css       # 全局样式 (Tailwind 导入)
```

- `App.tsx`：主应用组件，演示了集成。它设置了一个带有地形和同步 Three.js 画布的 MapLibre 地图。Deck.gl 的 `HexagonLayer` 被覆盖以进行热力图可视化。
- `deckgl/`：包含 Deck.gl 图层 (`heatmapLayer`) 和 `MapboxOverlay` 实例 (`deckOverlay`) 的配置，后者将 Deck.gl 与 MapLibre 连接起来。
- `source/`：为 MapLibre 地图定义自定义地图源，例如地形和山体阴影 DEM。

## 🤝 贡献

欢迎并感谢您的贡献！

1. Fork 仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到该分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

请确保您的代码遵循现有风格并通过了代码检查。

## 👤 作者

- **Rikka:** (admin@rikka.cc)
- **GitHub 主页:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **主页:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **问题:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)