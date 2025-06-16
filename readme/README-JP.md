# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> MapLibre、Deck.gl、Three.jsを統合したReactベースのライブラリで、高度な地理空間データ可視化を実現します。

## ✨ 特徴

- **React統合:** コンポーネント駆動型アーキテクチャのためにReactを使用し、Reactアプリケーションへのシームレスな統合を可能にします。
- **地理空間データ可視化:** Deck.glとMapLibreを活用して豊富な地理空間データ可視化機能を提供します。
- **Three.jsによる3Dレンダリング:** `@react-three/fiber`と`three`を採用し、マップインターフェース内で3Dレンダリングとインタラクティブな3Dエクスペリエンスを実現します。
- **レイヤーベースの設計:** Deck.glを介した複数のレイヤー（集計レイヤー、ジオレイヤー、カスタムMapbox互換レイヤーなど）のサポートを提供します。
- **データ読み込みと解析:** `@loaders.gl/core`や`@loaders.gl/csv`などのローダーを含み、さまざまなデータ形式（CSV、3D Tilesなど）を処理し、大規模データセットの操作を容易にします。
- **Tailwind CSSスタイリング:** ユーティリティファーストのスタイリングのためにTailwind CSSを採用し、UIカスタマイズの柔軟性を提供します。
- **モダンなビルドワークフロー:** 最適化された開発ビルドとホットモジュール置換のためにRsbuildを使用し、高速で効率的な開発サイクルを確保します。
- **型安全性:** TypeScript（`@types/react`、`@types/three`）を活用してコードの信頼性と開発者エクスペリエンスを向上させます。

## 💻 技術スタック

- **フレームワーク/ライブラリ:** React
- **UIツールキット:** Mantine
- **状態管理:** Zustand
- **データフェッチング:** Tanstack Query (React Query)
- **テーブルコンポーネント:** Tanstack Table
- **ルーティング:** Tanstack Router
- **3D可視化:** Three.js, Deck.gl, MapLibre
- **スタイリング:** Tailwind CSS
- **ビルドツール:** Rsbuild
- **言語:** TypeScript

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

スクリプトの実行

```bash
pnpm create trapar-waves
```

依存関係のインストール

```bash
npm install
yarn install
pnpm install
```

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **リポジトリ:** [https://github.com/react-visgl-maplibre/Trapar-waves](https://github.com/react-visgl-maplibre/Trapar-waves)
- **ホームページ:** [https://github.com/react-visgl-maplibre/Trapar-waves](https://github.com/react-visgl-maplibre/Trapar-waves)
- **イシュー:** [https://github.com/react-visgl-maplibre/Trapar-waves/issues](https://github.com/react-visgl-maplibre/Trapar-waves/issues)
