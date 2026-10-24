# ЛР7 — Next.js SSR/SSG

Вариант 1 — портфолио фриланс-разработчика.

## Запуск
```powershell
npm install
npm run dev
# production
npm run build
npm run start
```

## Проверка перед сдачей
- Выполнить команды запуска/сборки из этого README.
- Сделать собственные скриншоты работающего приложения/тестов.
- Вставить скриншоты в PDF-отчёт вместо пометок `[ВСТАВИТЬ СКРИНШОТ]`.
- Заменить `ССЫЛКА_НА_РЕПОЗИТОРИЙ` на ссылку своего GitHub-репозитория.

Маршруты: `/` и `/projects` используют getStaticProps (SSG), `/live` — getServerSideProps (SSR). Для проверки production сначала выполните build. В браузере откройте View Page Source на /live и /projects и сохраните скриншоты HTML.
