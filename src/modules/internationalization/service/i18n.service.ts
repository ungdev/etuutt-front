import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import locales from '../../../translations/locale';

const resources = Object.entries(locales).reduce<{
  [locale: string]: { translation: { [key: string]: string } };
}>((accumulator, locale) => {
  accumulator[locale[0]] = { translation: locale[1] };

  return accumulator;
}, {});

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'fr',
  keySeparator: false,
});

export default i18n;
