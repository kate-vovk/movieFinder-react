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
        Cart: {
          emptyCart: 'Your cart is empty',
          buyButton: 'Buy',
          totalPrice: 'Total Price',
        },
        PaymentForm: {
          paymentDetails: 'Payment details',
          cardNumber: 'Card number',
          expirationDate: 'Expiration date',
          cvv: 'CVV',
          submit: 'Submit',
        },
        Search: {
          search: 'search',
          selectOption: 'select option',
        },
        MoviePage: {
          submit: 'Submit',
          feedback: 'Give feedback',
          goHome: 'Go home',
          country: 'country',
          duration: 'duration',
          releaseDate: 'release date (year)',
          productionCompanies: 'production companies',
          genres: 'genres',
          categories: 'categories',
          director: 'director',
          actors: 'actors',
          description: 'Description',
        },
        Filtration: {
          genres: 'Genres',
          categories: 'Categories',
          countries: 'Countries',
          voteAverage: 'Vote average',
          year: 'Year',
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
        Cart: {
          emptyCart: 'Ваша корзина пуста',
          buyButton: 'Купить',
          totalPrice: 'Итого',
        },
        PaymentForm: {
          paymentDetails: 'Данные карты',
          cardNumber: 'Номер карты',
          expirationDate: 'Срок Действия',
          cvv: 'CVV',
          submit: 'Подтвердить',
        },
        Search: {
          search: 'поиск',
          selectOption: 'поиск по...',
        },
        MoviePage: {
          submit: 'Отправить',
          feedback: 'Написать отзыв',
          goHome: 'Вернуться на главную',
          country: 'страна',
          duration: 'продолжительность',
          releaseDate: 'год',
          productionCompanies: 'кинокомпания',
          genres: 'жанр',
          categories: 'категория',
          director: 'режиссёр',
          actors: 'в ролях',
          description: 'Описание',
        },
        Filtration: {
          genres: 'Жанры',
          categories: 'Категории',
          countries: 'Страны',
          voteAverage: 'Средняя оценка',
          year: 'Год',
        },
      },
    },
    ns: ['AppBar', 'SignUp', 'SignIn', 'Cart', 'PaymentForm', 'Search', 'MoviePage', 'Filtration'],

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
