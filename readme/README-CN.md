# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> 一个基于React的库，集成了MapLibre、Deck.gl和Three.js，用于高级地理空间数据可视化。

## ✨ 特性

- **React集成:** 使用React构建组件驱动的架构，允许无缝集成到React应用中。
- **地理空间数据可视化:** 利用Deck.gl和MapLibre提供丰富的地理空间数据可视化能力。
- **Three.js 3D渲染:** 采用`@react-three/fiber`和`three`在地图界面中实现3D渲染和交互式3D体验。
- **基于图层的设计:** 支持多种图层（通过Deck.gl），如聚合图层、地理图层和自定义Mapbox兼容图层。
- **数据加载与解析:** 包含`@loaders.gl/core`和`@loaders.gl/csv`等加载器，可处理各种数据格式（CSV、3D Tiles等），便于处理大型数据集。
- **Tailwind CSS样式:** 采用Tailwind CSS进行实用优先的样式设计，提供UI定制的灵活性。
- **现代构建工作流:** 使用Rsbuild构建，实现优化的开发构建和热模块替换，确保快速高效的开发周期。
- **类型安全:** 利用TypeScript（`@types/react`、`@types/three`）增强代码可靠性和开发者体验。

## 💻 技术栈

- **框架/库:** React
- **UI工具包:** Mantine
- **状态管理:** Zustand
- **数据获取:** Tanstack Query (React Query)
- **表格组件:** Tanstack Table
- **路由:** Tanstack Router
- **3D可视化:** Three.js, Deck.gl, MapLibre
- **样式:** Tailwind CSS
- **构建工具:** Rsbuild
- **语言:** TypeScript

完整依赖列表参见[package.json](package.json)。

## 🚀 开始使用

按照以下说明在本地运行项目。

### 前提条件

确保已安装以下软件：

- Node.js (推荐 >= 18.x 版本)
- 包管理器 (npm, yarn 或 pnpm)

```bash
node -v
npm -v
```

### 安装步骤

运行脚本

```bash
pnpm create trapar-waves
```

安装依赖

```bash
npm install
yarn install
pnpm install
```

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **仓库:** [https://github.com/react-visgl-maplibre/Trapar-waves](https://github.com/react-visgl-maplibre/Trapar-waves)
- **主页:** [https://github.com/react-visgl-maplibre/Trapar-waves](https://github.com/react-visgl-maplibre/Trapar-waves)
- **问题:** [https://github.com/react-visgl-maplibre/Trapar-waves/issues](https://github.com/react-visgl-maplibre/Trapar-waves/issues)
