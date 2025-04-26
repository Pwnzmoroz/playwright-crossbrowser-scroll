# Playwright Crossbrowser Scroll 🚀

Кроссбраузерные автотесты на Playwright: плавный скроллинг по страницам официальной документации.

---

## 📋 Описание проекта

Проект автоматизирует проверку плавного скроллинга на сайтах:
- [Playwright API Docs](https://playwright.dev/docs/api/class-test)
- [Playwright Community](https://playwright.dev/community)

Тесты выполняются **параллельно** во всех основных браузерах:
- Chromium (Google Chrome)
- Firefox
- WebKit (Safari)

---

## 🚀 Как запустить проект

1. Клонируйте репозиторий:
git clone https://github.com/Pwnzmoroz/playwright-crossbrowser-scroll.git
cd playwright-crossbrowser-scroll
2. Установите зависимости:
npm install
3. Запустите тесты:
npm run test
4. Чтобы запустить тесты в режиме с открытыми браузерами (headed mode):
npm run test:headed
5. Чтобы посмотреть детальный HTML-отчет:
npm run report
После этого откроется подробный отчет в браузере.

✅ Что проверяют тесты
Открытие страниц документации Playwright
Плавный скроллинг до конца каждой страницы
Проверка работы на разных браузерах
Отслеживание успешности загрузки и скроллинга

🛠 Используемые технологии
Playwright Test (@playwright/test)
Node.js
TypeScript (при необходимости можно будет добавить)

📂 Структура проекта
Копировать
Редактировать
playwright-crossbrowser-scroll/
├── tests/
│   └── crossbrowser-scroll.spec.ts    # Основной тест на скроллинг
├── package.json                        # Конфигурация npm
├── playwright.config.ts                # Конфигурация Playwright
├── README.md                            # Описание проекта

⚡ Быстрые команды:
скрипт                назначение
npm run test	Запустить тесты в headless режиме
npm run test:headed	Запустить тесты с открытыми браузерами
npm run report	Открыть детальный HTML-отчет

📌 Примечание
Проект развивается — легко добавить новые страницы или браузеры!
Для полноценного CI/CD можно подключить GitHub Actions.

