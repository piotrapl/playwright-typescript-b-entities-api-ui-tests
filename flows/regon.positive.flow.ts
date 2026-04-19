import { test } from '@playwright/test';
import { RegonPage } from '../pages/regon.page';
import { RegonPositiveAssertions } from '../assertions/regon.positive.assert';

export class RegonPositiveFlow {
  constructor(private regonPage: RegonPage) {}

  async searchExistingRegonAndVerify(regon: string) {
    await test.step('Open REGON search page', async () => {
      await this.regonPage.open();
    });

    let apiResponse;
    await test.step('Search REGON and capture backend response', async () => {
      apiResponse = await this.regonPage.searchRegon(regon);
    });

    return new RegonPositiveAssertions(
      this.regonPage,
      apiResponse!
    );
  }
}