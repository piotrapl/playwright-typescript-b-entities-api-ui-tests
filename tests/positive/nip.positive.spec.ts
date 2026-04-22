import { test } from '../../fixtures/test-fixtures';
import { validNips } from '../../data/valid-nips';

for (const dataset of validNips) {
  test(`Wyszukiwanie po istniejącym NIP-ie: ${dataset.nip}`, async ({ nipPositiveFlow }) => {
    const result = await nipPositiveFlow.searchExistingNipAndVerify(dataset.nip);
    await result.assert();
  });
}