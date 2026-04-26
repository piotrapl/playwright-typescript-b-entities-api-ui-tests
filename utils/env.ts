type Environment = {
  baseURL: string;
};

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