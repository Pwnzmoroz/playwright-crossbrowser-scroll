import { test, expect } from '@playwright/test';

test.describe.parallel('Плавный и быстрый скроллинг по разделам Playwright.dev', () => {
  const pagesToVisit = [
    'https://playwright.dev/docs/api/class-test',
    'https://playwright.dev/community',
  ];

  for (const url of pagesToVisit) {
    test(`Открыть и плавно проскроллить страницу: ${url}`, async ({ page }) => {
      test.setTimeout(60000); // увеличили таймаут до 60 секунд для каждого теста

      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');

      // Плавный скроллинг вниз с увеличенным шагом и меньшей задержкой
      await page.evaluate(async () => {
        const scrollStep = 300; // шаг 300 пикселей (было 100)
        const delay = 20;        // задержка 20 мс (было 50)
        for (let pos = 0; pos < document.body.scrollHeight; pos += scrollStep) {
          window.scrollTo(0, pos);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        window.scrollTo(0, document.body.scrollHeight); // скроллим на самый низ в конце
      });

      await page.waitForTimeout(1000); // небольшая пауза на самом конце
    });
  }
});
