import { expect, Locator } from '@playwright/test';
import { ApiResponse } from '../types/api.types';

export class PositiveAssert {
  constructor(
    private apiResponse: ApiResponse,
    private resultsTable: Locator,
    private resultsRows: Locator
  ) {}

  async assert(): Promise<void> {
    expect(this.apiResponse.status).toBe(200);
    expect(this.apiResponse.body.d).not.toBe('');

    await expect(this.resultsTable).toBeVisible();
    await expect(this.resultsRows.first()).toBeVisible();
  }
}