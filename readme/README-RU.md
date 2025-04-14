# @trapar-waves/react-visgl-maplibre

![Версия npm](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![Загрузки npm в месяц](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![Лицензия](https://img.shields.io/badge/license-MIT-green)
![Последний коммит в GitHub](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)

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
* **Инструменты UI/Стилизация:** Tailwind CSS
* **3D-визуализация:** Three.js, Deck.gl, MapLibre
* **Инструмент сборки:** Rsbuild
* **Язык:** TypeScript

Смотрите [package.json](package.json) для полного списка зависимостей.

## 🤝 Вклад

Вклады приветствуются!

## 📄 Лицензия

Проект распространяется по лицензии **MIT**. Для дополнительной информации смотрите файл `LICENSE`.

## 👤 Автор

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* Профиль GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

* **Репозиторий:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **Домашняя страница:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
* **Проблемы:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
