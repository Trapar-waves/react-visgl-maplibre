# @trapar-waves/react-visgl-maplibre

![npm 版本号](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm 下载次数](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![许可证类型](https://img.shields.io/badge/license-MIT-green)
![GitHub 最近一次提交](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

> 一个以 React 为基础的库，集成了 MapLibre、Deck.gl 和 Three.js，用于高级地理信息可视化。

## ✨ 主要特性

* **React 集成支持:** 基于 React 构建，采用组件化的架构设计，能够无缝嵌入到 React 应用中。
* **地理信息可视化:** 借助 Deck.gl 和 MapLibre 提供丰富的地理空间可视化功能。
* **支持 Three.js 实现 3D 渲染:** 通过 `@react-three/fiber` 和 `three` 提供 3D 渲染能力，并在地图界面中支持交互式 3D 体验。
* **图层化设计:** 提供对多种图层（通过 Deck.gl 实现）的支持，包括聚合图层、地理数据图层以及自定义的 Mapbox 兼容图层。
* **数据加载和解析支持:** 包含如 `@loaders.gl/core` 和 `@loaders.gl/csv` 等加载器，支持处理多种数据格式（如 CSV、3D Tiles 等），轻松应对大规模数据集。
* **Tailwind CSS 样式支持:** 基于 Tailwind CSS 提供实用优先的样式设计，支持灵活的 UI 定制。
* **现代化构建流程:** 使用 Rsbuild 进行构建优化，支持热模块替换，确保高效开发体验。
* **具备类型安全保障:** 通过 TypeScript（如 `@types/react` 和 `@types/three`）提升代码可靠性与开发体验。

## 🚀 快速开始

按照以下步骤在本地运行项目。

### 前置条件

* 确保已安装以下工具：
    * Node.js（推荐 >= 18.x 版本）
    * 包管理器（npm、yarn 或 pnpm）
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装

1. 克隆仓库：
    ```bash
    git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
    cd react-visgl-maplibre
    ```
2. 安装依赖：
    ```bash
    # 使用你喜欢的包管理器
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用方法

### 可用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 运行以下常用命令：

* `dev`: 启动支持热重载的开发服务器（由 Rsbuild 提供支持）。
* `build`: 生成生产环境的构建版本。
* `preview`: 启动本地服务器以预览生产环境构建结果。

示例：
```bash
# 启动开发服务器
npm run dev

# 生成生产环境构建
npm run build
```

## 💻 技术栈

本项目使用的关键技术包括：

* **框架/库:** React
* **UI 工具包/样式:** Tailwind CSS
* **3D 可视化:** Three.js, Deck.gl, MapLibre
* **构建工具:** Rsbuild
* **语言:** TypeScript

更多依赖项见 [package.json](package.json)。

## 🤝 贡献指南

欢迎任何形式的贡献！

## 📄 许可证

本项目采用 **MIT** 许可证分发。更多信息请参考 `LICENSE` 文件。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub 主页: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 相关链接

* **仓库地址:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **主页:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **问题反馈:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
