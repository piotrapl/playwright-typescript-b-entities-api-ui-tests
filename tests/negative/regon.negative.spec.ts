import { test } from '../../fixtures/test-fixtures';
import { nonExistingShortRegons, nonExistingLongRegons } from '../../data/nonexisting-regons';

for (const dataset of nonExistingShortRegons) {
  test(`REGON negative search: ${dataset.regon}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('regon', dataset.regon);

    await result.assert();
  });
}