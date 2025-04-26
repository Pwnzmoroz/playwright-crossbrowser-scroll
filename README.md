Playwright Crossbrowser Scroll
🧪 Кроссбраузерные автотесты на Playwright: плавный скроллинг по страницам официальной документации.

📋 Описание проекта
Проект автоматизирует проверку плавного скроллинга на сайтах:

Playwright API Docs

Playwright Community

Тесты выполняются параллельно во всех основных браузерах:

Chromium (Google Chrome)

Firefox

WebKit (Safari)

🚀 Как запустить проект
Склонируйте репозиторий:

bash
Копировать
Редактировать
git clone https://github.com/Pwnzmoroz/playwright-crossbrowser-scroll.git
cd playwright-crossbrowser-scroll
Установите зависимости:

bash
Копировать
Редактировать
npm install
Запустите тесты:

bash
Копировать
Редактировать
npm run test
Чтобы запустить тесты в режиме с открытыми браузерами (headed mode):

bash
Копировать
Редактировать
npm run test:headed
Посмотреть отчет:

bash
Копировать
Редактировать
npm run report
Откроется детальный HTML-отчет по всем прогонам.

🔎 Что проверяют тесты
Открытие страниц документации Playwright

Плавный скроллинг до конца каждой страницы

Проверка работы на разных браузерах

Отслеживание успешности загрузки и скроллинга

🛠️ Используемые технологии
Playwright (@playwright/test)

Node.js

TypeScript (при необходимости можно добавить)

📁 Структура проекта
bash
Копировать
Редактировать
playwright-crossbrowser-scroll/
├── tests/
│   └── crossbrowser-scroll.spec.ts   # Основной тест на скроллинг
├── package.json
├── playwright.config.ts              # Конфигурация Playwright
└── README.md
✨ Скрипты package.json

Скрипт	Назначение
npm run test	Запустить тесты в headless режиме
npm run test:headed	Запустить тесты с открытыми браузерами
npm run report	Открыть HTML-отчет
📌 Примечание
⚡ Проект постоянно развивается — ты легко можешь добавить больше тестов и браузеров!
Для полноценного CI/CD можно добавить GitHub Actions.

Готов добавить ещё красивую "шапку" с бейджами, типа:


Если хочешь — скажи, я за минутку сделаю красивую версию с бейджами тоже. 🚀

