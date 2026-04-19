import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

// NipAssertions - to jest definicja klasy NipAssertions, 
//               - będzie zawierać metody do asercji dotyczących NIP-ów.
export class NipAssertions {

    constructor (
        private uiMessage: string,
        private apiResponse: ApiResponse
     ) {}

// assert - to jest metoda, która będzie wykonywać asercje dotyczące NIP-ów.
    assert() {
    
// Oczekujemy, że status odpowiedzi API będzie równy 200, tzn. żądanie zostało przetworzone pomyślnie
// expect - funkcja pozwalająca definiować asercje.
        expect (this.apiResponse.status).toBe(200);

        expect (this.apiResponse.body).toEqual({ d: "" });

        expect(this.uiMessage).toMatch(/Nie znaleziono/); 

    }

}