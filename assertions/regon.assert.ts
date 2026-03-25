import { expect } from '@playwright/test';
import { ApiResponse} from '../types/api.types';

export class RegonAssertions {
// to jest klasa, która będzie zawierać metody asercji (assertions) do sprawdzania wyników testów.
// poniżej - 'constructor(' - ten blok kodu definiuje konstruktor klasy, przyjący 2 argumenty:
//  uiMessage (wiadomość z interfejsu użytkownika) i apiResponse (odpowiedź z API).
    constructor(
        private uiMessage: string,
        private apiResponse: ApiResponse
    ) {}
    
    // expect - funkcja z biblioteki Playwright, która służy do tworzenia asercji w testach.
    // apiResponse to jest obiekt, który zawiera status odpowiedzi i jej treść (body).

    assert() {

        expect(this.apiResponse.status).toBe(200);

        expect (this.apiResponse.body).toEqual({ d: "" });

        expect(this.uiMessage).toMatch(/Nie znaleziono/);

    }

}