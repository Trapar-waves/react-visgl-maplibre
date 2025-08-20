# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> React ベースの地理空間可視化テンプレートで、Three.js、Deck.gl、MapLibre を統合し、3D マップのインタラクションと豊富な地理空間データのレンダリングを実現します。

## ✨ 特徴

- **統合された地理空間スタック：** MapLibre GL JS を使用したベクトル マップ、Deck.gl を使用した高性能 WebGL ベースの可視化レイヤー、Three.js を使用したカスタム 3D オブジェクトを、すべて React 環境内で組み合わせます。
- **React Three Fiber と react-three-map：** `@react-three/fiber` を使用して宣言的な Three.js シーンを構築し、`react-three-map` を使用して Three.js オブジェクトを MapLibre マップの移動や地形と同期させます。
- **Deck.gl レイヤーとエフェクト：** HexagonLayer（集計用）などの幅広い Deck.gl レイヤーと、ライティングなどのエフェクトをサポートし、高度なデータ可視化を実現します。
- **データの読み込み：** @loaders.gl を使用して、CSV や 3D Tiles などのさまざまなデータ形式を効率的に読み込み、解析します。
- **モダンな開発体験：**
  - Rsbuild を使用して、高速な HMR と最適化されたビルドを実現。
  - Tailwind CSS を使用して、迅速な UI 開発を実現。
  - TypeScript を使用して完全に型付けされ、コードの信頼性と開発者エクスペリエンスが向上。
  - ESLint を使用して、コードのチェックとフォーマットを実施。
  - Husky を使用して Git フックを設定し、コード品質をチェック。

## 💻 技術スタック

- **コア ライブラリ：**
  - React (v18+)
  - MapLibre GL JS
  - Deck.gl
  - Three.js
  - React Three Fiber (`@react-three/fiber`)
  - React Three Map (`react-three-map`)
- **UI とスタイル：**
  - Tailwind CSS
- **ビルドと開発ツール：**
  - Rsbuild
  - TypeScript
  - ESLint
  - Husky
- **データの読み込み：**
  - `@loaders.gl/core`
  - `@loaders.gl/csv`

*（依存関係の完全なリストについては、[package.json](package.json) を参照してください）*

## 🚀 はじめに

このテンプレートは `create-trapar-waves` で使用するように設計されていますが、直接クローンして実行することもできます。

### 前提条件

- Node.js (>= 18.x を推奨)
- pnpm (推奨)、npm、または yarn

```bash
node -v
pnpm -v # または npm -v
```

### テンプレートを直接実行する

1. **リポジトリをクローン：**

   ```bash
   git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
   cd react-visgl-maplibre
   ```

2. **依存関係をインストール：**

   ```bash
   pnpm install
   # または
   # npm install
   # yarn install
   ```

3. **開発サーバーを起動：**

   ```bash
   pnpm dev
   # または
   # npm run dev
   # yarn dev
   ```

   これにより Rsbuild 開発サーバーが起動し、デフォルトのブラウザでアプリが開きます。

### `create-trapar-waves` 経由でテンプレートを使用する

```bash
pnpm create trapar-waves
```

プロンプトに従って、このテンプレートを選択してください。

## 🧱 プロジェクト構造

```
src/
├── App.tsx          # メイン アプリケーション コンポーネント
├── index.tsx        # React アプリのエントリ ポイント
├── deckgl/          # Deck.gl レイヤーとオーバーレイの構成
├── source/          # MapLibre マップ ソース コンポーネント
└── global.css       # グローバル スタイル (Tailwind のインポート)
```

- `App.tsx`：統合を示すメイン アプリケーション コンポーネント。地形付きの MapLibre マップと同期された Three.js キャンバスをセットアップします。ヒートマップの可視化のために Deck.gl の `HexagonLayer` がオーバーレイされます。
- `deckgl/`：Deck.gl レイヤー（`heatmapLayer`）と、Deck.gl と MapLibre を橋渡しする `MapboxOverlay` インスタンス（`deckOverlay`）の構成が含まれます。
- `source/`：地形やヒルシェイド DEM など、MapLibre マップのカスタム マップ ソースを定義します。

## 🤝 貢献

貢献は歓迎され、大歓迎です！

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プル リクエストを開く

コードが既存のスタイルに準拠し、チェックに合格することを確認してください。

## 👤 作者

- **Rikka:** (admin@rikka.cc)
- **GitHub プロフィール:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **ホームページ:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **問題:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)