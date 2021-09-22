import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';
import { ru } from './ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
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
      'ModalAddMovieToCart',
      'UserPage',
    ],
    fallbackLng: 'en',
    parseMissingKeyHandler: (value: string) => {
      return `[${value}]`;
    },
  });

export default i18n;
