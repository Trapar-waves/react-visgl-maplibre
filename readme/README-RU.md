# @trapar-waves/react-visgl-maplibre

![Версия npm](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![Загрузки npm в месяц](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![Лицензия](https://img.shields.io/badge/license-MIT-green)
![Последний коммит в GitHub](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

[English](../README.md) | [中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> Библиотека на базе React, интегрирующая MapLibre, Deck.gl и Three.js для расширенной визуализации геопространственных данных.

## ✨ Возможности

* **Интеграция с React:** Построена на архитектуре компонентов React, что обеспечивает легкую интеграцию в React-приложения.
* **Визуализация геопространственных данных:** Использует Deck.gl и MapLibre для реализации разнообразных возможностей визуализации гео-данных.
* **3D-рендеринг с Three.js:** Внедряет `@react-three/fiber` и `three` для поддержки 3D-рендеринга и интерактивных 3D-эффектов на картах.
* **Многоуровневый дизайн:** Поддерживает несколько слоев (через Deck.gl), включая агрегационные, гео-слои и пользовательские слои, совместимые с Mapbox.
* **Загрузка и обработка данных:** Включает загрузчики, такие как `@loaders.gl/core` и `@loaders.gl/csv`, для работы с различными форматами данных (CSV, 3D Tiles и др.), что упрощает обработку больших наборов данных.
* **Утилитарная стилизация с Tailwind CSS:** Применяет Tailwind CSS для гибкой настройки интерфейса на основе утилитарного подхода.
* **Современный процесс сборки:** Разработана с использованием Rsbuild, обеспечивающим оптимизированные сборки разработки и поддержку HMR, что гарантирует быстрый и эффективный цикл разработки.
* **Типобезопасность:** Написана на TypeScript (`@types/react`, `@types/three`) для повышения надежности кода и улучшения разработчиком опыта.

## 🚀 Начало работы

Чтобы запустить проект локально, следуйте этим инструкциям.

### Предварительные условия

* Убедитесь, что у вас установлено:
    * Node.js (рекомендуется версия >= 18.x)
    * Менеджер пакетов (npm, yarn или pnpm)
    ```bash
    node -v
    npm -v # или yarn -v или pnpm -v
    ```

### Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/Trapar-waves/react-visgl-maplibre.git
    cd react-visgl-maplibre
    ```
2. Установите зависимости:
    ```bash
    # Используйте предпочитаемый менеджер пакетов
    npm install
    # или
    yarn install
    # или
    pnpm install
    ```

## 🛠️ Использование

### Доступные скрипты

Основные скрипты доступны через `npm run <script>`, `yarn <script>` или `pnpm <script>`:

* `dev`: Запускает сервер разработки с поддержкой HMR (горячей замены модулей).
* `build`: Создает оптимизированную сборку для продакшена.
* `preview`: Запускает локальный сервер для предварительного просмотра продакшен-сборки.

Пример:
```bash
# Запуск сервера разработки
npm run dev

# Создание продакшен-сборки
npm run build
```

## 💻 Технологический стек

Основные технологии, используемые в проекте:

* **Фреймворк/Библиотека:** React
* **Инструменты UI:** Mantine
* **Управление состоянием:** Zustand
* **Получение данных:** Tanstack Query (React Query)
* **Табличный компонент:** Tanstack Table
* **Маршрутизация:** Tanstack Router
* **3D-визуализация:** Three.js, Deck.gl, MapLibre
* **Стилизация:** Tailwind CSS
* **Инструмент сборки:** Rsbuild
* **Язык:** TypeScript

Смотрите [package.json](package.json) для полного списка зависимостей.

## 🤝 Вклад в проект

Вклады приветствуются! Пожалуйста, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку для вашей функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте ваши изменения (`git commit -m 'Добавление какой-то удивительной функции'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Убедитесь, что вы обновили тесты при необходимости.

## 📄 Лицензия

Проект распространяется по лицензии **MIT**. Для дополнительной информации смотрите файл `LICENSE`.

## 👤 Автор

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* Профиль GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🚧 Устранение проблем

* **Проблемы с зависимостями:** Если вы столкнулись с конфликтами зависимостей, попробуйте очистить кэш менеджера пакетов:
  ```bash
  pnpm store prune
  # или
  npm cache clean --force
  ```

* **Ошибки при сборке:** Убедитесь, что вы используете Node.js 18.x или новее. Для проблем, связанных со сборкой, обратитесь к [документации Rsbuild](https://rsbuild.dev/).

## 🔗 Ссылки

* **Репозиторий:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **Проблемы:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
* **Пакет npm:** [https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre](https://www.npmjs.com/package/@trapar-waves/react-visgl-maplibre)
