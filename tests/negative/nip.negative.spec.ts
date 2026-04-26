import { test } from '../../fixtures/test-fixtures';
import { invalidNips } from '../../data/invalid-nips';

for (const dataset of invalidNips) {
  test(`NIP negative search: ${dataset.nip}`, async ({ negativeFlow }) => {
    const result = await negativeFlow.searchInvalid('nip', dataset.nip);

    await result.assert();
  });
}