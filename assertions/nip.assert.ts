import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

export class NipAssertions {

    constructor {
        private uiMessage: string;
        private apiResponse: ApiResponse;
    } {}

    assert() {
        
        expect(this.uiMessage).toMatch(/Nie znaleziono/); 
