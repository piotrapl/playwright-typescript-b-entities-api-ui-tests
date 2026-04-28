import { test } from '../../fixtures/test-fixtures';
import { existing9DigitRegons, existing14DigitRegons } from '../../data/existing-regons';

for (const dataset of existing9DigitRegons) {
  test(`REGON positive search: ${dataset.regon}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('regon', dataset.regon);

    await result.assert();
  });
}

for (const dataset of existing14DigitRegons) {
  test(`REGON positive search: ${dataset.regon}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('regon', dataset.regon);

    await result.assert();
  });
}