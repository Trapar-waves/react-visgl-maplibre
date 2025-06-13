# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

> 一个基于 React 的库，集成了 MapLibre、Deck.gl 和 Three.js，用于高级地理空间数据可视化。

## ✨ 特性

* **React 集成:** 使用 React 构建的组件驱动架构，可无缝集成到 React 应用中。
* **地理空间数据可视化:** 利用 Deck.gl 和 MapLibre 提供丰富的地理空间数据可视化能力。
* **Three.js 3D 渲染:** 采用 `@react-three/fiber` 和 `three` 实现 3D 渲染和交互式 3D 体验。
* **基于图层的设计:** 支持多种图层（通过 Deck.gl），如聚合图层、地理图层和自定义 Mapbox 兼容图层。
* **数据加载与解析:** 包含 `@loaders.gl/core` 和 `@loaders.gl/csv` 等加载器，可处理多种数据格式（CSV、3D Tiles 等），便于处理大型数据集。
* **Tailwind CSS 样式:** 使用 Tailwind CSS 实现实用优先的样式设计，提供灵活的 UI 自定义能力。
* **现代化构建流程:** 使用 Rsbuild 进行优化的开发构建和热模块替换，确保快速高效的开发周期。
* **类型安全:** 利用 TypeScript (`@types/react`、`@types/three`) 增强代码可靠性和开发体验。

## 🚀 快速开始

按照以下说明在本地运行项目。

### 先决条件

* 确保已安装以下工具：
    * Node.js (推荐 >= 18.x)
    * 包管理器 (npm, yarn 或 pnpm)
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
    # 使用您偏好的包管理器
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用方法

### 可用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 运行以下常用脚本：

* `dev`: 启动带有热重载的开发服务器（由 Rsbuild 提供支持）。
* `build`: 创建生产就绪的构建版本。
* `preview`: 启动本地服务器预览生产构建。

示例：
```bash
# 启动开发服务器
npm run dev

# 创建生产构建
npm run build
```

## 💻 技术栈

项目中使用的关键技术包括：

* **框架/库:** React
* **UI 工具包:** Mantine
* **状态管理:** Zustand
* **数据获取:** Tanstack Query (React Query)
* **表格组件:** Tanstack Table
* **路由:** Tanstack Router
* **3D 可视化:** Three.js, Deck.gl, MapLibre
* **样式:** Tailwind CSS
* **构建工具:** Rsbuild
* **语言:** TypeScript

完整依赖列表请参见 [package.json](package.json)。

## 🤝 贡献指南

欢迎贡献！请按照以下步骤操作：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

请确保适当更新测试。

## 📄 许可证

根据 **MIT** 许可证分发。有关更多信息，请参见 `LICENSE` 文件。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub 个人资料: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🚧 故障排除

* **依赖问题:** 如果遇到依赖冲突，请尝试清除包管理器缓存：
  ```bash
  pnpm store prune
  # 或
  npm cache clean --force
  ```

* **构建错误:** 确保使用 Node.js 18.x 或更高版本。有关构建相关问题，请查看 [Rsbuild 文档](https://rsbuild.dev/)。

## 🔗 链接

* **仓库:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **问题:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
* **npm 包:** [https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre](https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre)
