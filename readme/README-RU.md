# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md)

> Three.js, Deck.gl и MapLibre интегрированы в шаблон визуализации геопространственных данных на базе React для 3D-картографических взаимодействий и рендеринга насыщенных геопространственных данных.

## ✨ Особенности

- **Интегрированный геопространственный стек:** сочетает MapLibre GL JS для векторных карт, Deck.gl для высокопроизводительных слоев визуализации на базе WebGL и Three.js для пользовательских 3D-объектов, все это в среде React.
- **React Three Fiber и react-three-map:** использует `@react-three/fiber` для декларативных сцен Three.js и `react-three-map` для синхронизации объектов Three.js с движениями и рельефом карты MapLibre.
- **Слои и эффекты Deck.gl:** поддерживает широкий спектр слоев Deck.gl (например, HexagonLayer для агрегирования) и эффекты (например, освещение) для расширенной визуализации данных.
- **Загрузка данных:** включает `@loaders.gl` для эффективной загрузки и разбора различных форматов данных, таких как CSV и 3D Tiles.
- **Современный опыт разработки:**
  - Создан с помощью Rsbuild для быстрой HMR и оптимизированных сборок.
  - Стилизован с помощью Tailwind CSS для быстрой разработки пользовательского интерфейса.
  - Полностью типизирован с помощью TypeScript для повышения надежности кода и удобства разработчика.
  - Проверка и форматирование с помощью ESLint.
  - Git hooks с Husky для проверки качества кода.

## 💻 Технологический стек

- **Основные библиотеки:**
  - React (v18+)
  - MapLibre GL JS
  - Deck.gl
  - Three.js
  - React Three Fiber (`@react-three/fiber`)
  - React Three Map (`react-three-map`)
- **Пользовательский интерфейс и стилизация:**
  - Tailwind CSS
- **Инструменты сборки и разработки:**
  - Rsbuild
  - TypeScript
  - ESLint
  - Husky
- **Загрузка данных:**
  - `@loaders.gl/core`
  - `@loaders.gl/csv`

_(Полный список зависимостей см. в [package.json](package.json))_

## 🚀 Начало работы

Этот шаблон предназначен для использования с `create-trapar-waves`, но вы также можете клонировать и запустить его напрямую.

### Необходимые условия

- Node.js (рекомендуется >= 18.x)
- pnpm (рекомендуется), npm или yarn

```bash
node -v
pnpm -v # или npm -v
```

### Прямой запуск шаблона

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
   cd react-visgl-maplibre
   ```

2. **Установите зависимости:**

   ```bash
   pnpm install
   # или
   # npm install
   # yarn install
   ```

3. **Запустите сервер разработки:**

   ```bash
   pnpm dev
   # или
   # npm run dev
   # yarn dev
   ```

   Это запустит сервер разработки Rsbuild и откроет приложение в вашем браузере по умолчанию.

### Использование шаблона через `create-trapar-waves`

```bash
pnpm create trapar-waves
```

Следуйте подсказкам, чтобы выбрать этот шаблон.

## 🧱 Структура проекта

```
src/
├── App.tsx          # Основной компонент приложения
├── index.tsx        # Точка входа для React-приложения
├── deckgl/          # Конфигурация слоя и оверлея Deck.gl
├── source/          # Компоненты источника карты MapLibre
└── global.css       # Глобальные стили (импорт Tailwind)
```

- `App.tsx`: основной компонент приложения, демонстрирующий интеграцию. Он настраивает карту MapLibre с рельефом и синхронизированный холст Three.js. Deck.gl `HexagonLayer` накладывается для визуализации тепловой карты.
- `deckgl/`: содержит конфигурацию слоев Deck.gl (`heatmapLayer`) и экземпляр `MapboxOverlay` (`deckOverlay`), который связывает Deck.gl с MapLibre.
- `source/`: определяет пользовательские источники карт для карты MapLibre, такие как рельеф и DEM холмов.

## 🤝 Вклад

Вклад приветствуется и высоко ценится!

1. Форкните репозиторий
2. Создайте свою ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Запушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Убедитесь, что ваш код соответствует существующему стилю и проходит проверки линтера.

## 👤 Автор

- **Rikka:** (admin@rikka.cc)
- **Профиль на GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Домашняя страница:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Вопросы:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
