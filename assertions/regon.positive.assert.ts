import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';
import { SearchPage } from '../pages/search.page';

export class RegonPositiveAssertions {
  constructor(
    private searchPage: SearchPage,
    private apiResponse: ApiResponse
  ) {}

  // assert(): metoda - wykonuje szereg asercji w celu weryfikacji poprawności odpowiedzi API 
  // oraz UI po wyszukaniu wg podanego REGON-u.  
  async assert() {
    expect(this.apiResponse.status).toBe(200);

    const body = this.apiResponse.body as { d?: string };
    expect(body.d).toBeTruthy();
    expect(body.d).not.toBe('');

    await expect(this.regonPage.messageLocator).toBeHidden();
    await expect(this.regonPage.resultsTable).toBeVisible();

    const rowsCount = await this.regonPage.resultsRows.count();
    expect(rowsCount).toBeGreaterThan(0);

    const firstRowText = (await this.regonPage.resultsRows.first().innerText()).trim();
    expect(firstRowText).not.toBe('');
  }
}