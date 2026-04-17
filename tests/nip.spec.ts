import { test } from '../fixtures/test-fixtures';
import { invalidNips } from '../data/invalid-nips';

for (const dataset of invalidNips) {

    test(`Próba wyszukiwania po nieistniejącym NIP-ie: ${dataset.nip}`, async ({ nipFlow }) => {

        const result = await nipFlow.searchInvalidNip(dataset.nip);

        result.assert();
    
    });

}