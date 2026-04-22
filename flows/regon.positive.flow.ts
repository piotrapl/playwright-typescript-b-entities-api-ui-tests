import { test } from '@playwright/test';
import { SearchPage } from '../pages/search.page';
import { RegonPositiveAssertions } from '../assertions/regon.positive.assert';

export class RegonPositiveFlow {
  constructor(private searchPage: SearchPage) {}

  async searchExistingRegonAndVerify(regon: string) {
    await test.step('Open REGON search page', async () => {
      await this.searchPage.open();
    });

    let apiResponse;
    await test.step('Search REGON and capture backend response', async () => {
      apiResponse = await this.searchPage.searchRegon(regon);
    });

    return new RegonPositiveAssertions(
      this.searchPage,
      apiResponse!
    );
  }
}