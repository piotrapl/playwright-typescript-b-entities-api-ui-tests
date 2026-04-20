import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';
import { NipPage } from '../pages/nip.page';

export class NipPositiveAssertions {
  constructor(
    private nipPage: NipPage,
    private apiResponse: ApiResponse
  ) {}

   async assert() {
    expect(this.apiResponse.status).toBe(200);

    const body = this.apiResponse.body as { d?: string };
    expect(body.d).toBeTruthy();
    expect(body.d).not.toBe('');

    await expect(this.nipPage.messageLocator).toBeHidden();
    await expect(this.nipPage.resultsTable).toBeVisible();

}