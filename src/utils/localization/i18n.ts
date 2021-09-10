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
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });

export default i18n;
