import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';
import { SearchPage } from '../pages/search.page';

export class NipPositiveAssertions {
  constructor(
    private searchPage: SearchPage,
    private apiResponse: ApiResponse
  ) {}

   async assert() {
    expect(this.apiResponse.status).toBe(200);

    const body = this.apiResponse.body as { d?: string };
    expect(body.d).toBeTruthy();
    expect(body.d).not.toBe('');

    await expect(this.searchPage.messageLocator).toBeHidden();
    await expect(this.searchPage.resultsTable).toBeVisible();

     // asercje dotyczące wyników wyszukiwania - 
    // czy tabela wyników zawiera co najmniej 1 wiersz z danymi, 
    // i czy tekst w pierwszym wierszu nie jest pusty.
    const rowsCount = await this.searchPage.resultsRows.count();
    expect(rowsCount).toBeGreaterThan(0);

    const firstRowText = (await this.searchPage.resultsRows.first().innerText()).trim();
    expect(firstRowText).not.toBe('');
  }

}