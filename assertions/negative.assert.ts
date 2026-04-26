import { expect, Locator } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

export class NegativeAssert {
  constructor(
    private apiResponse: ApiResponse,
    private messageLocator: Locator
  ) {}

  async assert(): Promise<void> {
    expect(this.apiResponse.status).toBe(200);
    expect(this.apiResponse.body.d).toBe('');

    await expect(this.messageLocator).toContainText('Nie znaleziono podmiotu');
  }
}