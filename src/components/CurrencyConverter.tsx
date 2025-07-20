import React, { useState, FormEvent, ChangeEvent } from 'react';
import { CurrencyCode } from '../types/currency';
import { CURRENCY_INFO, convertCurrency, validateNumericInput } from '../utils/currencyUtils';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [resultDescription, setResultDescription] = useState<string>('');
  const [resultValue, setResultValue] = useState<string>('');

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validatedValue = validateNumericInput(e.target.value);
    setAmount(validatedValue);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount || !currency) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Por favor, digite um valor válido para converter.');
      return;
    }

    const conversionResult = convertCurrency(numericAmount, currency as CurrencyCode);
    
    if (!conversionResult) {
      alert('Erro na conversão. Tente novamente.');
      setShowResult(false);
      return;
    }

    const currencyInfo = CURRENCY_INFO[currency as CurrencyCode];
    setResultDescription(`${currencyInfo.symbol} 1 = ${conversionResult.formattedRate}`);
    setResultValue(`${conversionResult.formattedAmount} Reais`);
    setShowResult(true);
  };

  return (
    <main className="main-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="amount" className="form-label">
          valor
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="0"
          value={amount}
          onChange={handleAmountChange}
          className="form-input"
          required
        />

        <label htmlFor="currency" className="form-label">
          moeda
        </label>
        <select
          name="currency"
          id="currency"
          value={currency}
          onChange={handleCurrencyChange}
          className="form-select"
          required
        >
          <option value="" disabled>
            Selecione a moeda
          </option>
          {Object.entries(CURRENCY_INFO).map(([code, info]) => (
            <option key={code} value={code}>
              {info.name}
            </option>
          ))}
        </select>

        <button type="submit" className="form-button">
          Converter em Reais
        </button>
      </form>

      <footer className={`result-footer ${showResult ? 'show-result' : ''}`}>
        {showResult && (
          <>
            <span className="result-description">{resultDescription}</span>
            <h1 className="result-value">{resultValue}</h1>
          </>
        )}
      </footer>
    </main>
  );
};

export default CurrencyConverter;

