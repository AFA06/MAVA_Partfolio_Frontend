// src/Components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-2">{t('footer.studioTitle')}</h2>
          <p>{t('footer.studioName')}</p>
          <p>{t('footer.studioDesc')}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">{t('footer.contacts')}</h2>
          <p><a href="tel:+79647269665" className="hover:underline">{t('footer.phone')}</a></p>
          <p><a href="mailto:hello@vproekte.com" className="hover:underline">{t('footer.email')}</a></p>
          <p>{t('footer.address')}</p>
          <p><a href="/map" className="hover:underline">{t('footer.map')}</a></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">{t('footer.navigation')}</h2>
          <div className="grid grid-cols-2 gap-2">
            <a href="/link1" className="hover:underline">{t('footer.link1')}</a>
            <a href="/link2" className="hover:underline">{t('footer.link2')}</a>
            <a href="/link3" className="hover:underline">{t('footer.link3')}</a>
            <a href="/link4" className="hover:underline">{t('footer.link4')}</a>
            <a href="/link5" className="hover:underline">{t('footer.link5')}</a>
            <a href="/link6" className="hover:underline">{t('footer.link6')}</a>
            <a href="/link7" className="hover:underline">{t('footer.link7')}</a>
            <a href="/link8" className="hover:underline">{t('footer.link8')}</a>
            <a href="/link9" className="hover:underline">{t('footer.link9')}</a>
            <a href="/link10" className="hover:underline">{t('footer.link10')}</a>
            <a href="/link11" className="hover:underline">{t('footer.link11')}</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-center text-gray-400">
        <div className="mb-1">{t('footer.bottomLine')}</div>
        <div>{t('footer.orderCall')}</div>
        <div className="mt-2 text-gray-500">{t('footer.dev')} <a href="https://fedorovlab.ru" className="hover:underline" target="_blank" rel="noreferrer">Fedorovlab Digital</a></div>
      </div>
    </footer>
  );
}

export default Footer;
