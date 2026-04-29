import { test } from '../../fixtures/test-fixtures';
import { nonExistingKrsNumbers } from '../../data/nonexisting-krsnumbers';

for (const dataset of nonExistingKrsNumbers) {
  test(`KRS negative search: ${dataset.krs}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('krs', dataset.krs);

    await result.assert();
  });
}