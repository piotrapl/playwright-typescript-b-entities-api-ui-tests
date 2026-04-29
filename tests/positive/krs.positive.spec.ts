import { test } from '../../fixtures/test-fixtures';
import { existingKrsNumbers } from '../../data/existing-krsumbers';

for (const dataset of existingKrsNumbers) {
  test(`KRS positive search: ${dataset.krs}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('krs', dataset.krs);

    await result.assert();
  });
}