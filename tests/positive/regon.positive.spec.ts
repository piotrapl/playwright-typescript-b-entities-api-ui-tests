import { test } from '../../fixtures/test-fixtures';
import { validRegons, validLongRegons } from '../../data/valid-regons';

for (const dataset of validRegons) {
  test(`REGON positive search: ${dataset.regon}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('regon', dataset.regon);

    await result.assert();
  });
}