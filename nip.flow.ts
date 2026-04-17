// importowanie modułów, klas, funkcji, danych z innych plików. 
// test - funkcja z biblioteki Playwright, która pozwala definiować testy. 

// klasa NipFlow -  będzie zawierać metody do wykonywania różnych kroków w procesie wyszukiwania po NIP. 
// Klasa ta będzie korzystać z: 1. obiektu NipPage do interakcji z elementami strony 
// 2. z obiektu NipAssertions do sprawdzania wyników testów.
import { test } from '@playwright/test';
import { NipPage } from '../pages/nip.page';
import { NipAssertions } from '../assertions/nip.assert';

export class NipFlow {

    constructor (private nipPage: NipPage) {}
