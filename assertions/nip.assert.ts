import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

// NipAssertions - to jest definicja klasy NipAssertions, 
//                 która będzie zawierać metody do asercji dotyczących NIP-ów.
export class NipAssertions {

    constructor {
        private uiMessage: string;
        private apiResponse: ApiResponse;
    } {}

    assert() {
        
        expect (this.apiResponse.status).toBe(200);

        expect(this.uiMessage).toMatch(/Nie znaleziono/); 
