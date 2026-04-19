import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';
import { RegonPage } from '../pages/regon.page';

export class RegonPositiveAssertions {
  constructor(
    private regonPage: RegonPage,
    private apiResponse: ApiResponse
  ) {}

}