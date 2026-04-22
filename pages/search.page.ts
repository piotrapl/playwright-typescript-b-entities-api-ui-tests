import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';

export class SearchPage {
  constructor(private page: Page) {}

    get messageLocator(): Locator {
        return this.page.locator('#divInfoKomunikat');
    }

    get resultsTable(): Locator {
        return this.page.locator('#divListaJednostek');
    }

    get resultsRows(): Locator {
        return this.resultsTable.locator('tr').filter({ hasText: /\S/ });
    }

  async open() {
    await this.page.goto(ENV.baseURL);
    await this.page.getByLabel('NIP', { exact: true }).waitFor();
  }

  async searchRegon(regon: string): Promise<ApiResponse> {
    await this.page.locator('#txtRegon').fill(regon);

    const responsePromise = this.page.waitForResponse(
      response =>
        response.url().includes('daneSzukaj') &&
        response.request().method() === 'POST'
    );

    await this.page.locator('#btnSzukaj').click();

    const response = await responsePromise;
    const body = await response.json();

    return {
      status: response.status(),
      body
    };
  }

  async searchByNip(nip: string): Promise<ApiResponse> {
    const nipInput = this.page.getByLabel('NIP', { exact: true });
    await nipInput.fill(nip);

    const responsePromise = this.page.waitForResponse(
      response =>
        response.url().includes('daneSzukaj') &&
        response.request().method() === 'POST'
    );

    await this.page.locator('#btnSzukaj').click();

    const response = await responsePromise;
    const body = await response.json();

    return {
      status: response.status(),
      body
    };
  }

  async captureMessage(): Promise<string> {
    const messageLocator = this.page.locator('#divInfoKomunikat');
    await messageLocator.waitFor();
    return await messageLocator.innerText();
  }
}