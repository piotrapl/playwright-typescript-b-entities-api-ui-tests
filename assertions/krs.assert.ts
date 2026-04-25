import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

export class KrsAssertions {

    constructor (
        private uiMessage: string,
        private apiResponse: ApiResponse
     ) {}

    assert() {
    
        expect (this.apiResponse.status).toBe(200);

        expect (this.apiResponse.body).toEqual({ d: "" });

        expect(this.uiMessage).toMatch(/Nie znaleziono/); 

    }

}