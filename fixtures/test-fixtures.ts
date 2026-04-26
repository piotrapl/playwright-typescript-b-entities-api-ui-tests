import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

import { SearchPage } from '../pages/search.page';
import { NegativeFlow } from '../flows/negative.flow';
import { PositiveFlow } from '../flows/positive.flow';

type Fixtures = {
  negativeFlow: NegativeFlow;
  positiveFlow: PositiveFlow;
};

export const test = base.extend<Fixtures>({
  negativeFlow: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    const negativeFlow = new NegativeFlow(searchPage);

    await use(negativeFlow);
  },

  positiveFlow: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    const positiveFlow = new PositiveFlow(searchPage);

    await use(positiveFlow);
  }
});

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();

  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png'
  });

  await allure.attachment(
    'screenshot',
    screenshot,
    'image/png'
  );
});