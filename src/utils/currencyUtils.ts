import { CurrencyRates, CurrencyInfo, ConversionResult, CurrencyCode } from '../types/currency';

// Cotação de moedas do dia
export const CURRENCY_RATES: CurrencyRates = {
  USD: 5.58,
  AUD: 3.64,
  CAD: 4.07,
  EUR: 5.32,
  CHF: 6.98,
  JPY: 0.038,
  GBP: 7.49,
  TRY: 0.14,
  CNY: 0.779,
  ARS: 0.004,
};

export const CURRENCY_INFO: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', name: 'Dólar Americano', symbol: 'US$', rate: CURRENCY_RATES.USD },
  AUD: { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$', rate: CURRENCY_RATES.AUD },
  CAD: { code: 'CAD', name: 'Dólar Canadense', symbol: 'C$', rate: CURRENCY_RATES.CAD },
  EUR: { code: 'EUR', name: 'Euro', symbol: 'EUR€', rate: CURRENCY_RATES.EUR },
  CHF: { code: 'CHF', name: 'Franco Suíço', symbol: 'CHF', rate: CURRENCY_RATES.CHF },
  JPY: { code: 'JPY', name: 'Iene', symbol: '¥', rate: CURRENCY_RATES.JPY },
  GBP: { code: 'GBP', name: 'Libra Esterlina', symbol: '£', rate: CURRENCY_RATES.GBP },
  TRY: { code: 'TRY', name: 'Lira Turca', symbol: '₺', rate: CURRENCY_RATES.TRY },
  CNY: { code: 'CNY', name: 'Renminbi (Yuan)', symbol: 'CN¥', rate: CURRENCY_RATES.CNY },
  ARS: { code: 'ARS', name: 'Peso Argentino', symbol: 'AR$', rate: CURRENCY_RATES.ARS },
};

// Formata a moeda em Real Brasileiro
export function formatCurrencyBRL(value: number): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 3 : 2,
  };

  return Number(value).toLocaleString("pt-BR", options);
}

// Função para converter moeda
export function convertCurrency(
  amount: number,
  currencyCode: CurrencyCode
): ConversionResult | null {
  try {
    const currencyInfo = CURRENCY_INFO[currencyCode];
    if (!currencyInfo) {
      throw new Error('Moeda não encontrada');
    }

    const { rate, symbol } = currencyInfo;
    const convertedAmount = amount * rate;

    if (isNaN(convertedAmount)) {
      throw new Error('Valor inválido para conversão');
    }

    const formattedRate = formatCurrencyBRL(rate);
    const formattedAmount = formatCurrencyBRL(convertedAmount).replace("R$", "").trim();

    return {
      amount,
      fromCurrency: currencyCode,
      toCurrency: 'BRL',
      rate,
      convertedAmount,
      formattedRate,
      formattedAmount,
    };
  } catch (error) {
    console.error('Erro na conversão:', error);
    return null;
  }
}

// Valida se o input contém apenas números
export function validateNumericInput(value: string): string {
  const hasCharactersRegex = /\D+/g;
  return value.replace(hasCharactersRegex, "");
}

