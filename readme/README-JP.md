# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

[English](../README.md) | [中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> MapLibre、Deck.gl、および Three.js を統合した、高度な地理空間データ可視化のための React ベースのライブラリです。

## ✨ 特徴

* **React 統合:** React を使用したコンポーネント駆動型アーキテクチャにより、React アプリケーションにシームレスに統合できます。
* **地理空間データ可視化:** Deck.gl と MapLibre を活用し、豊富な地理空間データ可視化機能を提供します。
* **Three.js による 3D レンダリング:** `@react-three/fiber` と `three` を採用し、地図インターフェース内で 3D レンダリングとインタラクティブな 3D 体験を実現します。
* **レイヤーベースの設計:** Deck.gl を介して、集約レイヤー、ジオレイヤー、カスタム Mapbox 互換レイヤーなど、複数のレイヤーをサポートします。
* **データ読み込みと解析:** `@loaders.gl/core` や `@loaders.gl/csv` などのローダーを含み、CSV、3D Tiles などさまざまなデータ形式を処理できるため、大規模データセットの扱いが容易です。
* **Tailwind CSS スタイリング:** Tailwind CSS を採用したユーティリティファーストのスタイリングにより、UI カスタマイズに柔軟性を提供します。
* **モダンなビルドワークフロー:** Rsbuild を使用して最適化された開発ビルドとホットモジュール置換を実現し、高速かつ効率的な開発サイクルを確保します。
* **型安全性:** TypeScript (`@types/react`、`@types/three`) を活用し、コードの信頼性と開発体験を向上させます。

## 🚀 始め方

ローカルでプロジェクトを実行するには、以下の手順に従ってください。

### 前提条件

* 以下がインストールされていることを確認してください：
    * Node.js (推奨バージョン >= 18.x)
    * パッケージマネージャー (npm、yarn、または pnpm)
    ```bash
    node -v
    npm -v # または yarn -v または pnpm -v
    ```

### インストール

1. リポジトリをクローンします：
    ```bash
    git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
    cd react-visgl-maplibre
    ```
2. 依存関係をインストールします：
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

`npm run <script>`、`yarn <script>`、または `pnpm <script>` を介して使用できる一般的なスクリプト：

* `dev`: ホットリロードが有効な開発サーバーを起動します (Rsbuild を使用)。
* `build`: 本番環境用のビルドを作成します。
* `preview`: 本番ビルドをプレビューするためのローカルサーバーを起動します。

例：
```bash
# 開発サーバーを起動
npm run dev

# 本番ビルドを作成
npm run build
```

## 💻 技術スタック

このプロジェクトで使用されている主な技術：

* **フレームワーク/ライブラリ:** React
* **UI ツールキット:** Mantine
* **状態管理:** Zustand
* **データフェッチ:** Tanstack Query (React Query)
* **テーブルコンポーネント:** Tanstack Table
* **ルーティング:** Tanstack Router
* **3D 可視化:** Three.js、Deck.gl、MapLibre
* **スタイリング:** Tailwind CSS
* **ビルドツール:** Rsbuild
* **言語:** TypeScript

依存関係の完全なリストについては [package.json](package.json) を参照してください。

## 🤝 貢献方法

貢献を歓迎します！以下の手順に従ってください：

1. リポジトリをフォークします
2. 機能ブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更をコミットします (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュします (`git push origin feature/amazing-feature`)
5. Pull Request を作成します

適切にテストを更新するようにしてください。

## 📄 ライセンス

**MIT** ライセンスの下で配布されています。詳細については `LICENSE` ファイルを参照してください。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub プロフィール: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🚧 トラブルシューティング

* **依存関係の問題:** 依存関係の競合が発生した場合は、パッケージマネージャーのキャッシュをクリアしてみてください：
  ```bash
  pnpm store prune
  # または
  npm cache clean --force
  ```

* **ビルドエラー:** Node.js 18.x 以上を使用していることを確認してください。ビルド関連の問題については、[Rsbuild ドキュメント](https://rsbuild.dev/) を確認してください。

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **イシュー:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
* **npm パッケージ:** [https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre](https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre)
