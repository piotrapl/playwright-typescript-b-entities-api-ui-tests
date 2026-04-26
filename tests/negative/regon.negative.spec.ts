import { test } from '../../fixtures/test-fixtures';
import { invalidRegons, invalidLongRegons } from '../../data/invalid-regons';

for (const dataset of invalidRegons) {

    
  test(`Próba wyszukiwania po nieistniejącym REGON-ie 9-cyfrowym: ${dataset.regon}`, async ({ regonFlow }) => {

        const result = await regonFlow.searchRegonAndVerify(dataset.regon);

        await  result.assert();

  });

}

for (const dataset of invalidLongRegons) {

    
  test(`Próba wyszukiwania po nieistniejącym REGON-ie 14-cyfrowym: ${dataset.regon}`, async ({ regonFlow }) => {

        const result = await regonFlow.searchRegonAndVerify(dataset.regon);

        await result.assert();

  });

}
