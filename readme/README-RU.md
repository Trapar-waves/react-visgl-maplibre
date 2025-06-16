# @trapar-waves/react-visgl-maplibre

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-visgl-maplibre)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-visgl-maplibre)
![License](https://img.shields.io/github/license/Trapar-waves/react-visgl-maplibre)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-visgl-maplibre)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-visgl-maplibre/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md)

> Библиотека на базе React, интегрирующая MapLibre, Deck.gl и Three.js для расширенной геопространственной визуализации данных.

## ✨ Особенности

- **Интеграция с React:** Строится с использованием React для компонентно-ориентированной архитектуры, обеспечивая бесперебойную интеграцию в React-приложения.
- **Геопространственная визуализация данных:** Использует Deck.gl и MapLibre для предоставления богатых возможностей геопространственной визуализации данных.
- **3D-рендеринг с Three.js:** Применяет `@react-three/fiber` и `three` для обеспечения 3D-рендеринга и интерактивных 3D-опытов в интерфейсе карты.
- **Слоистый дизайн:** Поддерживает множественные слои (через Deck.gl), такие как агрегирующие слои, геослои и пользовательские слои, совместимые с Mapbox.
- **Загрузка и парсинг данных:** Включает загрузчики вроде `@loaders.gl/core` и `@loaders.gl/csv` для обработки различных форматов данных (CSV, 3D Tiles и т.д.), облегчая работу с большими наборами данных.
- **Стилизация с Tailwind CSS:** Использует Tailwind CSS для утилитарной стилизации, обеспечивая гибкость при настройке пользовательского интерфейса.
- **Современный рабочий процесс сборки:** Строится с использованием Rsbuild для оптимизированных разработческих сборок и горячей замены модулей, обеспечивая быстрый и эффективный цикл разработки.
- **Типовая безопасность:** Получает преимущества от TypeScript (`@types/react`, `@types/three`) для повышения надежности кода и улучшения опыта разработчика.

## 💻 Технологический стек

- **Фреймворк/Библиотека:** React
- **UI-инструментарий:** Mantine
- **Управление состоянием:** Zustand
- **Получение данных:** Tanstack Query (React Query)
- **Табличный компонент:** Tanstack Table
- **Маршрутизация:** Tanstack Router
- **3D-визуализация:** Three.js, Deck.gl, MapLibre
- **Стилизация:** Tailwind CSS
- **Инструмент сборки:** Rsbuild
- **Язык:** TypeScript

Полный список зависимостей см. в [package.json](package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты:

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Запустить скрипт

```bash
pnpm create trapar-waves
```

Установить зависимости

```bash
npm install
yarn install
pnpm install
```

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Репозиторий:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Домашняя страница:** [https://github.com/Trapar-waves/react-visgl-maplibre](https://github.com/Trapar-waves/react-visgl-maplibre)
- **Проблемы:** [https://github.com/Trapar-waves/react-visgl-maplibre/issues](https://github.com/Trapar-waves/react-visgl-maplibre/issues)
