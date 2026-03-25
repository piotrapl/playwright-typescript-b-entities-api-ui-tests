import { expect } from '@playwright/test';
import { ApiResponse} from '../types/api.types';

export class RegonAssertions {
    
    assert() {

        expect(this.response.status).toBe(200);

        expect (this.response.body).toEqual({ d: "" });
    }