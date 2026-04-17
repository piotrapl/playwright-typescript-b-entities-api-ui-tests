import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';


// NipPage - definicja klasy NipPage,
//           będzie zawierać metody do interakcji z elementami strony związanymi z NIP-ami.
export class NipPage {

    constructor (private page: Page) {}

    async open() {

        await this.page.goto(ENV.baseURL);

// getByLabel - metoda lokalizująca element na stronie na podstawie jego etykiety (label).
// waitFor - metoda - czeka, aż element będzie dostępny na stronie, zanim przejdzie się do kolejnych kroków testu.
        await this.page.getByLabel('NIP', { exact: true }).waitFor();
    }

    async searchByNip(nip: string): Promise<ApiResponse> {
        // nipInput - element strony - pole do wprowadzania NIP-u
        const nipInput = this.page.getByLabel('NIP', { exact: true });

        await nipInput.fill(nip);

        // definicja obietnicy (promise), która będzie czekać na odpowiedź API, 
        // spełniającą określ. warunki (URL, użytwa metoda HTTP)
        // obietnica/promise - mechanizm obsługi operacji asynchronicznych, np. oczekiwana na odpowiedź z serwera.

        const responsePromise = this.page.waitForResponse(    
        response =>
            response.url.includes('daneSzukaj') &&
            response.request.method() === 'POST'    
        );

        await this.page.locator('#btnSzukaj').click();

        const response = await responsePromise;

        const responseBody = await response.json();

        // metoda searchByNip zwraca obiekt ApiResponse - zawiera status response i treść tego response (body).
        return {
            status: response.status(),
            body: responseBody
        };
    }     

    async captureMessage(): Promise<string> {
    // Zakładamy, że komunikat jest wyświetlany w elemencie o id 'divInfoKomunikat'
        const messageLocator = this.page.locator('#divInfoKomunikat');
        await messageLocator.waitFor(); // Czekamy, aż element będzie dostępny

            return await messageLocator.innerText();
    }

}
