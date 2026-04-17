// importowanie modułów, klas, funkcji, danych z innych plików. 
// test - funkcja z biblioteki Playwright, która pozwala definiować testy. 

// klasa NipFlow -  będzie zawierać metody do wykonywania różnych kroków w procesie wyszukiwania po NIP. 
// klasa ta będzie korzystać z: 1. obiektu NipPage do interakcji z elementami strony 
// 2. z obiektu NipAssertions do sprawdzania wyników testów.
import { test } from '@playwright/test';
import { NipPage } from '../pages/nip.page';
import { NipAssertions } from '../assertions/nip.assert';

export class NipFlow {

    constructor (private nipPage: NipPage) {}

    async searchInvalidNip(nip: string) {

    // test - funkcja z biblioteki Playwright, która pozwala definiować testy.
    // test.step - metoda pozwalająca na grupowanie kroków testu w logiczne sekcje,

    await test.step('Otwórz stronę wyszukiwania po NIP-ie', async () => {
            await this.nipPage.open();
    }); 

    let apiResponse;

    await test.step('wpisz NIP, kliknij Szukaj i pobierz response z backendu', async () => {
        apiResponse = await this.nipPage.searchByNip(nip);  
    });

    let uiMessage;

    await test.step('Pobierz wiadomość z UI', async () => {
        uiMessage = await this.nipPage.captureMessage();
    });

    return new NipAssertions(uiMessage!, apiResponse!);

    }

} 