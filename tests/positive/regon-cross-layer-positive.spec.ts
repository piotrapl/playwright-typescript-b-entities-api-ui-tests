import { test } from '../../fixtures/test-fixtures';
import { validRegons } from '../../data/valid-regons';

for (const dataset of validRegons) {
  // definicja testu dla każdego zestawu danych z istniejącymi REGONami
  // test() - to funkcja z frameworka testowego
  test(`REGON positive search: ${dataset.regon}`, async ({ regonPositiveFlow }) => {
    const result = await regonPositiveFlow.searchExistingRegonAndVerify(dataset.regon);
    await result.assert();
  });
}