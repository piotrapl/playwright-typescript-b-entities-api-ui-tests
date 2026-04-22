import { test } from '../../fixtures/test-fixtures';
import { validRegons, validLongRegons } from '../../data/valid-regons';

  for (const dataset of validRegons) {
    // definicja testu dla każdego zestawu danych z istniejącymi REGONami
    // test() - to funkcja z frameworka testowego
  test(`Wyszukiwanie po 9-cyfrowym instniejącym REGON-ie: ${dataset.regon}`, async ({ regonPositiveFlow }) => {

    const result = await regonPositiveFlow.searchExistingRegonAndVerify(dataset.regon);
    
    await result.assert();
  
  });

}

for (const dataset of validLongRegons) {

  test(`Wyszukiwanie po 14-cyfrowym istniejącym REGON-ie: ${dataset.regon}`, async ({ regonPositiveFlow }) => {
    
    const result = await regonPositiveFlow.searchExistingRegonAndVerify(dataset.regon);
    
    await result.assert();
  
  });
}