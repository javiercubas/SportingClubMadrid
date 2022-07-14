import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_fr from './translations/fr/global.json';
import global_de from './translations/de/global.json';
import global_it from './translations/it/global.json';

var ln = window.navigator.language || navigator.browserLanguage;
const initialLanguage = ln.split("-")[0];

i18next.init({
  interpolation: { escapeValue: false },
  lng: initialLanguage,
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
    fr: {
      global: global_fr
    },
    de: {
      global: global_de
    },
    it: {
      global: global_it
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <App />
    </Router>
  </I18nextProvider>
);
