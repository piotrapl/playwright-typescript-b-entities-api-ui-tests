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

     // asercje dotyczące wyników wyszukiwania - 
    // czy tabela wyników zawiera co najmniej 1 wiersz z danymi, 
    // i czy tekst w pierwszym wierszu nie jest pusty.
    const rowsCount = await this.nipPage.resultsRows.count();
    expect(rowsCount).toBeGreaterThan(0);

    const firstRowText = (await this.nipPage.resultsRows.first().innerText()).trim();
    expect(firstRowText).not.toBe('');
  }

}