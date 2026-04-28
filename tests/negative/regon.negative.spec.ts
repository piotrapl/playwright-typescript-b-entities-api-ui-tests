import { test } from '../../fixtures/test-fixtures';
import { nonExisting9DigitRegons, nonExisting14DigitRegons } from '../../data/nonexisting-regons';

for (const dataset of nonExisting9DigitRegons) {
  test(`REGON negative search: ${dataset.regon}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('regon', dataset.regon);

    await result.assert();
  });
}

for (const dataset of nonExisting14DigitRegons) {
  test(`REGON negative search: ${dataset.regon}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('regon', dataset.regon);

    await result.assert();
  });
}