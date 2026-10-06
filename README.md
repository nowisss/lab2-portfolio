# Лабораторная работа №2 — React

**Вариант 1 — Портфолио фриланс-разработчика**

## Что реализовано

- `Button` — функциональный React-компонент кнопки.
- `InputField` — функциональный компонент с локальным состоянием `useState`.
- `ProjectCard` — карточка проекта; `title`, `description`, `image` передаются через `props`.
- Кнопка «Отправить» выводит текущее значение поля ввода в консоль браузера.
- Стили компонентов инкапсулированы через CSS Modules.
- Для проверки `props` используется `PropTypes`.
- Проект создан на Vite и запускается командой `npm run dev`.

## Требования

Node.js 20+ и npm.

## Запуск в WebStorm

1. Откройте папку проекта `lab2-portfolio` в WebStorm.
2. Откройте встроенный Terminal.
3. Выполните:

```bash
npm install
npm run dev
```

4. Откройте адрес, который покажет Vite (обычно `http://localhost:5173`).

## Проверка интерактивности

1. Перейдите к блоку «Есть идея? Давайте обсудим.».
2. Введите текст в поле.
3. Нажмите «Отправить».
4. Откройте DevTools браузера → Console.
5. В консоли появится `Значение поля ввода: ...`.

## Проверка production-сборки

```bash
npm run build
```

## GitHub

```bash
git init
git add .
git commit -m "feat: implement lab 2 React portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/lab2-portfolio.git
git push -u origin main
```

Перед `git remote add origin` создайте на GitHub **пустой** репозиторий `lab2-portfolio` без README, `.gitignore` и лицензии.

## Структура

```text
lab2-portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button/
│   │   ├── InputField/
│   │   └── ProjectCard/
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
