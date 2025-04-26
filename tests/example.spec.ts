import { test, expect } from '@playwright/test';

test('should open Playwright website and check title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
