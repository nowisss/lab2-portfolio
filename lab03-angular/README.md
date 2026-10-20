# Лабораторная работа № 3 — Angular

**Вариант 1: портфолио фриланс-разработчика.**

## Реализовано
- `AppModule` (`@NgModule`) — модуль приложения.
- `HeaderComponent` — шапка и навигация.
- `ProjectListComponent` — получает данные из `ProjectsService` в `ngOnInit()` и отображает список через `*ngFor`.
- `ProjectCardComponent` — отображает один проект, получает его через `@Input()`.
- `ProjectsService` (`@Injectable({ providedIn: 'root' })`) — возвращает 4 mock-проекта с полями `id`, `title`, `description`, `imageUrl`.
- У компонентов отдельные CSS-файлы; изображения расположены в `src/assets/`.

## Требования
- Node.js 18.13+ (рекомендуется Node.js 20 LTS).
- npm.

## Запуск в WebStorm / PowerShell
Откройте именно папку `lab03-angular` как проект, затем выполните в терминале:

```powershell
npm install
npm start
```

Откройте `http://localhost:4200`. Оставьте терминал работающим.

Проверка production-сборки:

```powershell
npm run build
```

Angular CLI установлен локально как зависимость проекта. Глобально устанавливать `ng` не требуется. Если после `npm install` команда `ng` не найдена, выполните `npm install` до успешного завершения и проверьте, что существует `node_modules/.bin/ng.cmd`.

## Структура
```text
src/
  app/
    components/
      header/
      project-card/
      project-list/
    models/project.ts
    services/projects.service.ts
    app.component.ts
    app.module.ts
  assets/
  main.ts
  index.html
  styles.css
```

## Git
Если лабораторная №2 уже лежит в существующем репозитории, распакуйте папку `lab03-angular` в корень репозитория рядом с файлами ЛР2. Не запускайте `git init` повторно и не удаляйте существующую ветку `main`.

Из корня репозитория выполните:

```powershell
git status
git add lab03-angular
git commit -m "Add lab 3 Angular portfolio"
git push origin main
```

Если ваша основная ветка называется иначе, укажите её имя вместо `main`. Перед `git add` проверьте, что `node_modules` не попадает в список файлов: он исключён через `.gitignore`.
