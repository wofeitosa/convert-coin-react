export interface CurrencyRates {
  USD: number;
  AUD: number;
  CAD: number;
  EUR: number;
  CHF: number;
  JPY: number;
  GBP: number;
  TRY: number;
  CNY: number;
  ARS: number;
}

export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}

export interface ConversionResult {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  convertedAmount: number;
  formattedRate: string;
  formattedAmount: string;
}

export type CurrencyCode = keyof CurrencyRates;

