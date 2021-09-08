import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        AppBar: {
          cart: 'Cart',
          signOut: 'SignOut',
          signIn: 'SignIn',
          signUp: 'SignUp',
        },
        SignUp: {
          name: 'Name',
          email: 'Email',
          password: 'Password',
          confirmPassword: 'Confirm password',
          submit: 'SignUp',
        },
        SignIn: {
          email: 'Email',
          password: 'Password',
          submit: 'SignIn',
        },
      },
      ru: {
        AppBar: {
          cart: 'Корзина',
          signOut: 'Выход',
          signIn: 'Вход',
          signUp: 'Регистрация',
        },
        SignUp: {
          name: 'Имя',
          email: 'Эл. почта',
          password: 'Пароль',
          confirmPassword: 'Подтвердите пароль',
          submit: 'Зарегистрироваться',
        },
        SignIn: {
          email: 'Эл. почта',
          password: 'Пароль',
          submit: 'Войти',
        },
      },
    },
    ns: ['AppBar', 'SignUp', 'SignIn'],

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
