import { test } from '../../fixtures/test-fixtures';
import { validNips } from '../../data/positive/valid.nips';

for (const dataset of validNips) {
  test(`NIP positive search: ${dataset.nip}`, async ({ nipPositiveFlow }) => {
    const result = await nipPositiveFlow.searchExistingNipAndVerify(dataset.nip);
    await result.assert();
  });
}