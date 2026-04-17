import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';

    
// NipPage - definicja klasy NipPage,
//           będzie zawierać metody do interakcji z elementami strony związanymi z NIP-ami.
export class NipPage {
    constructor (private page: Page) {}