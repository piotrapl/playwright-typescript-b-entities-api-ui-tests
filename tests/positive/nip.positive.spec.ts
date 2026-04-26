import { test } from '../../fixtures/test-fixtures';
import { validNips } from '../../data/existing-nips';

for (const dataset of validNips) {
  test(`NIP positive search: ${dataset.nip}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('nip', dataset.nip);

    await result.assert();
  });
}