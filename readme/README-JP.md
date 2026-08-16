# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> React ベースの地理空間可視化テンプレート。Three.js、Deck.gl、MapLibre を統合し、3D マップインタラクションと豊富な地理空間データレンダリングを実現します。

![react-visgl-maplibre hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **統合地理空間スタック：** MapLibre GL JS によるベクトルマップ、Deck.gl による高性能 WebGL ベースの可視化レイヤー、Three.js によるカスタム 3D オブジェクトを React 環境内で統合。
- **React Three Fiber と react-three-map：** `@react-three/fiber` による宣言的 Three.js シーンと `react-three-map` による Three.js オブジェクトと MapLibre マップの移動・地形の同期。
- **Deck.gl レイヤーとエフェクト：** 集計用 HexagonLayer などの Deck.gl レイヤーやライティングなどのエフェクトに対応し、高度なデータ可視化を実現。
- **データローディング：** `@loaders.gl` を活用し、CSV や 3D Tiles など多様なデータフォーマットを効率的にロード・パース。
- **モダンな開発体験：**
  - Rsbuild による高速 HMR と最適化ビルド。
  - Tailwind CSS による迅速な UI 開発。
  - TypeScript による完全な型サポートでコード品質と開発体験を向上。
  - ESLint によるリントとフォーマット。
  - Husky による Git hooks でコード品質チェック。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **UI フレームワーク：** `React` (v19) — コンポーネントベース開発のコア。
- **マップエンジン：** `MapLibre GL JS` — オープンソースベクトルマップレンダリング。
- **可視化レイヤー：** `Deck.gl` — 高性能 WebGL2 データ可視化レイヤー。
- **3D レンダリング：** `Three.js` と `React Three Fiber` — 宣言的 3D シーングラフ。
- **マップ-3D ブリッジ：** `react-three-map` — Three.js オブジェクトとマップカメラの同期。
- **データローディング：** `@loaders.gl` — CSV、3D Tiles などのパース用モジュラーフレームワーク。
- **ビルドツール：** `Rsbuild` — Rspack ベースの高速ビルドツール。
- **スタイリング：** `Tailwind CSS` — ユーティリティファーストの CSS フレームワーク。
- **開発言語：** `TypeScript` — 静的型チェック。

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、または pnpm）

### インストール

1. テンプレートを使用して新しいプロジェクトを作成：

   ```bash
   pnpm create trapar-waves
   ```

2. プロジェクトディレクトリに移動し、依存関係をインストール：

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # 静的アセット
├── src/                # ソースコード
│   ├── App.tsx         # メインアプリケーションコンポーネント
│   ├── index.tsx       # React アプリのエントリーポイント
│   ├── deckgl/         # Deck.gl レイヤーとオーバーレイ設定
│   ├── source/         # MapLibre マップソースコンポーネント
│   └── global.css      # グローバルスタイル（Tailwind インポート）
├── rsbuild.config.ts   # Rsbuild 設定
├── tsconfig.json       # TypeScript 設定
├── eslint.config.js    # ESLint 設定
└── package.json        # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってコントリビュートしてください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Issues：** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
