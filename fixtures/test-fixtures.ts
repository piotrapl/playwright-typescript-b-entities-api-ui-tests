// polecenia importujące różne moduły i klasy, które będziemy wykorzystywać w testach. 
// Tu - importujemy test z biblioteki Playwright, allure z biblioteki allure-playwright oraz nasze własne klasy RegonPage i RegonFlow, które znajdują się w katalogu pages i flows.

import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright'

import { RegonPage } from '../pages/regon.page';
import { RegonFlow } from '../flows/regon.flow';

import { NipPage } from '../pages/nip.page';
import { NipFlow } from '../flows/nip.flow';

type Fixtures = {
    regonFlow: RegonFlow;
    nipFlow: NipFlow;
}

// test - to funkcja, która pozwala nam definiować nasze własne testy, ozszerzenie bazowego testu z Playwright.

// Tu - eksportujemy naszą rozszerzoną wersję test, 
// która zawiera nasze własne fixture'y. Wtedy możemy korzystać z nich w naszych testach, 
// importując ten plik i używając `test` zamiast `base`.

// base.extend<Fixtures> -  metoda, która pozwalalająca rozszerzyć bazowy test o nasze fixture'y.
// <Fixtures> - to typ, który definiuje strukturę naszych fixture'ów. 
// tu jest tylko jeden fixture o nazwie `regonFlow`, który jest typu `RegonFlow`.

// "const regonPage" - deklaracja zmiennej, która tworzy nową instancję klasy `RegonPage`,
//  przekazując do niej obiekt `page`

export const test = base.extend<Fixtures>({
    regonFlow: async ({ page }, use) => {

        const regonPage = new RegonPage(page);
        const regonFlow = new RegonFlow(regonPage);

        await use(regonFlow);

    },
// nipFlow: async ({ page }, use) => { - to kolejne fixture, które tworzy instancję klasy `NipPage` i `NipFlow`, a następnie udostępnia `nipFlow` do użycia w testach. Dzięki temu możemy korzystać z metod i funkcji zdefiniowanych w `NipFlow` w naszych testach, które importują ten fixture.
    nipFlow: async ({ page }, use) => {
    
    const nipPage = new NipPage(page);
    const nipFlow = new NipFlow(nipPage);

    await use(nipFlow);
  }
});


// hook `afterEach`, który będzie wykonywany po każdym teście.
// arrow function ma 2 argumenty: `regonFlow` (nasze fixture) 
// i `testInfo` (obiekt zawierający informacje o właśnie zakończonym teście, który właśnie się zakończył).

// async ({ page }, testInfo) => { - to funkcja asynchroniczna (arrow function), \
// wołana po każdym teście, przyjmująca obiekt z właściwością `page` 
// (reprezentującą stronę przeglądarki) i `testInfo` (zawierający informacje o teście).
test.afterEach(async ({ page }, testInfo) => {

    const screenshot = await page.screenshot();

    await testInfo.attach('screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });

    await allure.attachment(
        'screenshot',
        screenshot,
        'image/png'
    );

});
    