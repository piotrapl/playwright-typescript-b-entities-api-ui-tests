import { SearchPage, SearchType } from '../pages/search.page';
import { PositiveAssert } from '../assertions/positive.assert';

export class PositiveFlow {
  constructor(private searchPage: SearchPage) {}

  async searchValid(
    type: SearchType,
    value: string
  ): Promise<PositiveAssert> {
    await this.searchPage.open();

    const apiResponse = await this.searchPage.searchBy(type, value);

    return new PositiveAssert(
      apiResponse,
      this.searchPage.resultsTable,
      this.searchPage.resultsRows
    );
  }
}