import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import logoSrc from './assets/img/logo.svg';

function App() {
  return (
    <div className="App">
      <img src={logoSrc} alt="Convert logo" className="app-logo" />
      <CurrencyConverter />
    </div>
  );
}

export default App;

