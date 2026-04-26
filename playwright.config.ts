// contextOptions to jest obiekt, który można przekazać do metody browser.newContext() w Playwright, 
// by skonfigurować kontekst przeglądarki. Można w nim ustawić różne opcje, jak
// recordHar - recordHar.path - ścieżka do pliku, w którym zostanie zapisany plik HAR 
// z danymi o ruchu sieciowym podczas testów. 
// Dzięki temu można dostosować środowisko testowe do swoich potrzeb 
// i symulować różne scenariusze użytkowania.

// import { defineConfig } from '@playwright/test';
// import { ENV } from './utils/env';
import { defineConfig, devices } from '@playwright/test';
import { ENV } from './utils/env';

/* export default defineConfig ({

    testDir: './tests',
    
    use: {

        baseURL: ENV.baseUrl,

        browserName: 'chromium',
        
        headless: true,

        screenshot: 'on',
        
        trace: 'on',

        video: 'off',

        contextOptions: {
            recordHar: {
                path: 'artifacts/network.har'
            }
        }
    }, */

export default defineConfig({
  testDir: './tests',

  timeout: 30_000,

  expect: {
    timeout: 5_000
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['list'],
        ['html', { open: 'never' }],
        ['allure-playwright']
    ],

  use: {
        baseURL: ENV.baseURL,

        browserName: 'chromium',
        
        headless: true,

        screenshot: 'on',
        
        trace: 'on',

        video: 'off'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ],

    outputDir: 'artifacts/test-results'

});
