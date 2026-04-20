import { test } from '@playwright/test';
import { SearchPage } from '../pages/search.page';
import { RegonAssertions } from '../assertions/regon.assert';

export class RegonFlow {
  constructor(private searchPage: SearchPage) {}

  async searchRegonAndVerify(regon: string) {
    await test.step('Otwórz stronę wyszukiwania po REGON-ie', async () => {
      await this.searchPage.open();
    });

    let apiResponse;

    await test.step('Wyszukaj REGON i pobierz odpowiedź z backendu', async () => {
      apiResponse = await this.searchPage.searchRegon(regon);
    });

    let uiMessage;

    await test.step('Pobierz wiadomość z UI', async () => {
      uiMessage = await this.searchPage.captureMessage();
    });

    return new RegonAssertions(uiMessage!, apiResponse!);
  }
}