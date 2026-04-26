import { test } from '../../fixtures/test-fixtures';
import { invalidRegons, invalidLongRegons } from '../../data/nonexisting-regons';

for (const dataset of invalidRegons) {
  test(`REGON negative search: ${dataset.regon}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('regon', dataset.regon);

    await result.assert();
  });
}