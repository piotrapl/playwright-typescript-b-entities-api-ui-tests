type Environment = {
  baseURL: string;
};

// Record<string, Environment> - obiekt, którego klucze są typu string, a wartości są typu Environment. 
// W tym przypadku, ENVIRONMENTS jest obiektem, który przechowuje różne środowiska (np. prod, staging) 
// i ich odpowiednie konfiguracje (w tym przypadku tylko baseURL).

// możliwe wartości kluczy to 'prod' i 'staging',
//   - każda z nich ma przypisany obiekt typu Environment, który zawiera właściwość baseURL.
const ENVIRONMENTS: Record<string, Environment> = {
  prod: {
    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  },
  staging: {
    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  }
};

const selectedEnvironment = 'prod';

export const ENV = ENVIRONMENTS[selectedEnvironment];