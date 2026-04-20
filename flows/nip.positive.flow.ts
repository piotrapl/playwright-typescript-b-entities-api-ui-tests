import { test } from '@playwright/test';
import { NipPage } from '../pages/nip.page';
import { NipPositiveAssertions } from '../assertions/nip.positive.assert';

export class NipPositiveFlow {
  constructor(private nipPage: NipPage) {}

  async searchExistingNipAndVerify(nip: string) {
    await test.step('Open NIP search page', async () => {
      await this.nipPage.open();
    });

    let apiResponse;
    await test.step('Search NIP and capture backend response', async () => {
      apiResponse = await this.nipPage.searchByNip(nip);
    });

    return new NipPositiveAssertions(
      this.nipPage,
      apiResponse!
    );
  }
}