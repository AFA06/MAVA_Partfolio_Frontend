import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n'; // 👈 must be imported before App
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // 👈 import the configured i18n instance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}> {/* ✅ Wrap App in I18nextProvider */}
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
