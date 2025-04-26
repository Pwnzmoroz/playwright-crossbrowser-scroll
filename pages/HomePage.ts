import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
  }

  async open() {
    await this.page.goto('https://playwright.dev/');
  }

  async search(text: string) {
    await this.searchInput.click();
    await this.searchInput.fill(text);
    await this.page.keyboard.press('Enter');
  }
}
