# ЛР12 — MongoDB aggregate + Plotly

Вариант 1 — портфолио фриланс-разработчика.

## Запуск
```powershell
# 1. API
cd server
npm install
Copy-Item .env.example .env
# Настрой MONGODB_URI
npm run seed
npm run dev
# 2. В другом терминале — клиент
cd ..\client
npm install
npm run dev
```

## Проверка перед сдачей
- Выполнить команды запуска/сборки из этого README.
- Сделать собственные скриншоты работающего приложения/тестов.
- Вставить скриншоты в PDF-отчёт вместо пометок `[ВСТАВИТЬ СКРИНШОТ]`.
- Заменить `ССЫЛКА_НА_РЕПОЗИТОРИЙ` на ссылку своего GitHub-репозитория.

API: http://localhost:4200/api/analytics/summary. Сначала запусти MongoDB и выполни seed для тестовых данных. Клиент: http://localhost:5173.
