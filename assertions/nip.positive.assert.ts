import { expect } from '@playwright/test';
import { ApiResponse } from '../types/api.types';
import { NipPage } from '../pages/nip.page';

export class NipPositiveAssertions {
  constructor(
    private nipPage: NipPage,
    private apiResponse: ApiResponse
  ) {}

}