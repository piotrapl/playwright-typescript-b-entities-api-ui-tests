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
}