# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Шаблон геопространственной визуализации на основе React, интегрирующий Three.js, Deck.gl и MapLibre для 3D-взаимодействия с картами и богатого рендеринга геопространственных данных.

![react-visgl-maplibre hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **Интегрированный геопространственный стек:** Объединяет MapLibre GL JS для векторных карт, Deck.gl для высокопроизводительных слоев визуализации на основе WebGL и Three.js для пользовательских 3D-объектов в среде React.
- **React Three Fiber и react-three-map:** Использует `@react-three/fiber` для декларативных сцен Three.js и `react-three-map` для синхронизации 3D-объектов с перемещением и рельефом карты MapLibre.
- **Слои и эффекты Deck.gl:** Поддерживает широкий спектр слоев Deck.gl (например, HexagonLayer для агрегации) и эффектов (например, освещение) для продвинутой визуализации данных.
- **Загрузка данных:** Использует `@loaders.gl` для эффективной загрузки и парсинга различных форматов данных, таких как CSV и 3D Tiles.
- **Современный опыт разработки:**
  - Сборка на Rsbuild для быстрого HMR и оптимизированных билдов.
  - Стилизация с Tailwind CSS для быстрой разработки UI.
  - Полная поддержка TypeScript для повышения качества кода и удобства разработки.
  - Линтинг и форматирование с ESLint.
  - Git hooks с Husky для проверки качества кода.

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **UI фреймворк:** `React` (v19) — ядро для компонентной разработки.
- **Движок карт:** `MapLibre GL JS` — рендеринг векторных карт с открытым исходным кодом.
- **Слой визуализации:** `Deck.gl` — высокопроизводительные слои визуализации данных на WebGL2.
- **3D рендеринг:** `Three.js` и `React Three Fiber` — декларативный 3D-граф сцены.
- **Мост карта-3D:** `react-three-map` — синхронизация 3D-объектов с камерой карты.
- **Загрузка данных:** `@loaders.gl` — модульный фреймворк для парсинга CSV, 3D Tiles и др.
- **Инструмент сборки:** `Rsbuild` — быстрый инструмент сборки на основе Rspack.
- **Стилизация:** `Tailwind CSS` — утилитарный CSS-фреймворк.
- **Язык разработки:** `TypeScript` — статическая проверка типов.

Полный список зависимостей смотрите в [package.json](../package.json).

![Getting Started](../assets/readme/headers/getting-started.svg)

## Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # Статические ресурсы
├── src/                # Исходный код
│   ├── App.tsx         # Основной компонент приложения
│   ├── index.tsx       # Точка входа React-приложения
│   ├── deckgl/         # Конфигурация слоев и оверлеев Deck.gl
│   ├── source/         # Компоненты источников карты MapLibre
│   └── global.css      # Глобальные стили (импорты Tailwind)
├── rsbuild.config.ts   # Конфигурация Rsbuild
├── tsconfig.json       # Конфигурация TypeScript
├── eslint.config.js    # Конфигурация ESLint
└── package.json        # Зависимости и скрипты проекта
```

![Contributing](../assets/readme/headers/contributing.svg)

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Issues:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
