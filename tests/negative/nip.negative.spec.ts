import { test } from '../../fixtures/test-fixtures';
import { nonExistingNips } from '../../data/nonexisting-nips';

for (const dataset of nonExistingNips) {
  test(`NIP negative search: ${dataset.nip}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('nip', dataset.nip);

    await result.assert();
  });
}