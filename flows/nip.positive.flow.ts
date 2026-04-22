import { test } from '@playwright/test';
import { SearchPage } from '../pages/search.page';
import { NipPositiveAssertions } from '../assertions/nip.positive.assert';

export class NipPositiveFlow {
  constructor(private searchPage: SearchPage) {}

  async searchExistingNipAndVerify(nip: string) {
    await test.step('Open NIP search page', async () => {
      await this.searchPage.open();
    });

    let apiResponse;
    await test.step('Search NIP and capture backend response', async () => {
      apiResponse = await this.searchPage.searchByNip(nip);
    });

    return new NipPositiveAssertions(
      this.searchPage,
      apiResponse!
    );
  }
}