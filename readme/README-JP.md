# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

> MapLibre、Deck.gl、およびThree.jsを統合した、高度な地理空間データを可視化するためのReactベースのライブラリです。

## ✨ 主な機能

* **Reactとのシームレスな統合:** Reactベースのコンポーネント設計を採用しており、Reactアプリケーションに簡単に導入できます。Reactのアーキテクチャを活かして、柔軟で効率的な開発が可能です。
* **地理空間データの可視化:** Deck.glとMapLibreを使用して、地理空間データの豊富な可視化機能を提供します。
* **Three.jsによる3D表現:** `@react-three/fiber` と `three` を活用し、地図上でインタラクティブな3Dコンテンツをレンダリングできます。
* **レイヤーベースの設計:** Deck.glを用いて、集約レイヤーやジオレイヤー、カスタムMapbox互換レイヤーなど、複数のレイヤーをサポートしています。
* **データの読み込みと解析:** `@loaders.gl/core` や `@loaders.gl/csv` などのローダーを含んでおり、CSVや3D Tilesなどの多様なデータ形式に対応します。これにより、大規模なデータセットも効率的に扱うことが可能です。
* **Tailwind CSSによる柔軟なスタイル設定:** Tailwind CSSを採用し、ユーティリティファーストのアプローチでUIをカスタマイズできます。
* **モダンな開発ワークフロー:** Rsbuildを使用して、最適化された開発環境を提供します。ホットリロードや効率的なビルドプロセスにより、開発体験が向上します。
* **型安全性:** TypeScriptを活用し、`@types/react` や `@types/three` をサポートすることで、信頼性の高いコード作成を支援します。

## 🚀 始め方

プロジェクトをローカル環境で実行する手順をご紹介します。

### 前提条件

以下のソフトウェアがインストールされていることを確認してください：
* Node.js（バージョン18.x以上を推奨）
* パッケージマネージャー（npm、yarn、またはpnpm）
    ```bash
    node -v
    npm -v # または yarn -v または pnpm -v
    ```

### インストール手順

1. リポジトリをクローンします：
    ```bash
    git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
    cd react-visgl-maplibre
    ```
2. 必要な依存関係をインストールします：
    ```bash
    # お好みのパッケージマネージャーを使用してください
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```

## 🛠️ 使用方法

### 使用可能なスクリプト

以下のコマンドを実行して、開発やビルドを行うことができます（`npm run <script>`、`yarn <script>`、または`pnpm <script>`を使用）：

* `dev`: ホットリロード機能を備えた開発サーバーを起動します（Rsbuildがサポート）。
* `build`: 本番環境用の最適化されたビルドを作成します。
* `preview`: 本番ビルドをプレビューするためのローカルサーバーを起動します。

例：
```bash
# 開発サーバーを起動
npm run dev

# 本番用ビルドを生成
npm run build
```

## 💻 使用技術

このプロジェクトで使用されている主な技術は以下の通りです：

* **フレームワーク/ライブラリ:** React
* **UIデザイン/スタイル:** Tailwind CSS
* **3D視覚化:** Three.js、Deck.gl、MapLibre
* **ビルドツール:** Rsbuild
* **言語:** TypeScript

依存関係の一覧は[package.json](package.json)をご覧ください。

## 🤝 貢献

貢献を歓迎しています！お気軽にプルリクエストやフィードバックをお寄せください。

## 📄 ライセンス

このプロジェクトは**MITライセンス**の下で配布されています。詳細は`LICENSE`ファイルをご確認ください。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHubプロフィール: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **ホームページ:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **問題報告:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
