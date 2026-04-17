import { test as base } from '@playwright/test';
import { invalidNips } from '../data/invalid-nips';
import { nipFlow } from '../fixtures/test-fixtures';

const test = base.extend({
    nipFlow: nipFlow,
});

for (const dataset of invalidNips) {

    test(`Próba wyszukiwania po nieistniejącym NIP-ie: ${dataset.nip}`, async ({ nipFlow }) => {

        const result = await nipFlow.searchInvalidNip(dataset.nip);

        result.assert();
    
    });

}