import { test } from '../../fixtures/test-fixtures';
import { existingNips } from '../../data/existing-nips';

for (const dataset of existingNips) {
  test(`NIP positive search: ${dataset.nip}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('nip', dataset.nip);

    await result.assert();
  });
}