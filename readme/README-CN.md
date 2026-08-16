# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 一个基于 React 的地理空间可视化模板，集成了 Three.js、Deck.gl 和 MapLibre，用于 3D 地图交互和丰富的地理空间数据渲染。

![react-visgl-maplibre hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **集成地理空间技术栈：** 结合 MapLibre GL JS 用于矢量地图、Deck.gl 用于高性能 WebGL 可视化图层、Three.js 用于自定义 3D 对象，全部运行在 React 环境中。
- **React Three Fiber 与 react-three-map：** 使用 `@react-three/fiber` 实现声明式 Three.js 场景，通过 `react-three-map` 将 Three.js 对象与 MapLibre 地图移动和地形同步。
- **Deck.gl 图层与效果：** 支持多种 Deck.gl 图层（如用于聚合的 HexagonLayer）和效果（如光照），实现高级数据可视化。
- **数据加载：** 集成 `@loaders.gl`，高效加载和解析 CSV、3D Tiles 等多种数据格式。
- **现代开发体验：**
  - 基于 Rsbuild 构建，支持快速 HMR 和优化打包。
  - 使用 Tailwind CSS 实现快速 UI 开发。
  - 完整的 TypeScript 类型支持，提升代码质量和开发体验。
  - 使用 ESLint 进行代码检查和格式化。
  - 通过 Husky 集成 Git hooks 进行代码质量检查。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **UI 框架：** `React` (v19) — 组件化开发核心。
- **地图引擎：** `MapLibre GL JS` — 开源矢量地图渲染。
- **可视化层：** `Deck.gl` — 高性能 WebGL2 数据可视化图层。
- **3D 渲染：** `Three.js` 与 `React Three Fiber` — 声明式 3D 场景图。
- **地图-3D 桥接：** `react-three-map` — 将 Three.js 对象与地图相机同步。
- **数据加载：** `@loaders.gl` — 用于解析 CSV、3D Tiles 等格式的模块化框架。
- **构建工具：** `Rsbuild` — 基于 Rspack 的快速构建工具。
- **样式方案：** `Tailwind CSS` — 实用优先的 CSS 框架。
- **开发语言：** `TypeScript` — 静态类型检查。

查看 [package.json](../package.json) 获取完整的依赖列表。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn 或 pnpm）

### 安装

1. 使用模板创建新项目：

   ```bash
   pnpm create trapar-waves
   ```

2. 导航到项目目录并安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── App.tsx         # 主应用组件
│   ├── index.tsx       # React 应用入口点
│   ├── deckgl/         # Deck.gl 图层和覆盖层配置
│   ├── source/         # MapLibre 地图源组件
│   └── global.css      # 全局样式（Tailwind 导入）
├── rsbuild.config.ts   # Rsbuild 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.js    # ESLint 配置
└── package.json        # 项目依赖和脚本
```

![Contributing](../assets/readme/headers/contributing.svg)

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Issues：** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
