import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUS } from './en-US';
import { ru } from './ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': enUS ,
      ru,
    },
    ns: [
      'AppBar',
      'SignUp',
      'SignIn',
      'Cart',
      'PaymentForm',
      'Search',
      'MoviePage',
      'Filtration',
      'AuthStatuses',
      'CartStatuses',
    ],
    fallbackLng: 'en-US',
    parseMissingKeyHandler: (value: string) => {
      return `[${value}]`;
    }
  });

export default i18n;
