import { test } from '@playwright/test';
import { RegonPage } from '../pages/regon.page';
import { RegonPositiveAssertions } from '../assertions/regon.positive.assert';

export class RegonPositiveFlow {
  constructor(private regonPage: RegonPage) {}

  async searchExistingRegonAndVerify(regon: string) {
    await test.step('Open REGON search page', async () => {
      await this.regonPage.open();
    });
  }
 
}