import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import trTranslations from './translations/tr.json';
import enTranslations from './translations/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: trTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 