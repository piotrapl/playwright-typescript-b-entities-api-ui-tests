import { test } from '@playwright/test';
import { SearchPage } from '../pages/search.page';
import { NipAssertions } from '../assertions/nip.assert';

export class NipFlow {
  constructor(private searchPage: SearchPage) {}

  async searchInvalidNip(nip: string) {
    await test.step('Otwórz stronę wyszukiwania po NIP-ie', async () => {
      await this.searchPage.open();
    });

    let apiResponse;

    await test.step('Wpisz NIP, kliknij Szukaj i pobierz response z backendu', async () => {
      apiResponse = await this.searchPage.searchByNip(nip);
    });

    let uiMessage;

    await test.step('Pobierz wiadomość z UI', async () => {
      uiMessage = await this.searchPage.captureMessage();
    });

    return new NipAssertions(uiMessage!, apiResponse!);
  }
}