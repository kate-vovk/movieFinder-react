export const ru = {
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
    min: 'мин',
    'Update comment': 'Редактировать комментарий',
    'Delete comment': 'Удалить комментарий',
    You: 'Вы',
    Comments: 'Комментарии',
  },
  Filtration: {
    genres: 'Жанры',
    categories: 'Категории',
    countries: 'Страны',
    voteAverage: 'Средняя оценка',
    year: 'Год',
    Action: 'Боевик',
    Comedy: 'Комедия',
    Fantasy: 'Фантастика',
    Thriller: 'Триллер',
    Horror: 'Ужасы',
    Crime: 'Криминал',
    Drama: 'Драма',
    Movie: 'Фильм',
    Cartoon: 'Мультфильм',
    USA: 'США',
    German: 'Германия',
    France: 'Франция',
    Canada: 'Канада',
  },
  AuthStatuses: {
    '100': 'идет обработка. Ожидайте',
    '400': 'Залогинтесь, пожалуйста',
    '500': 'Данный пользователь уже существует',
    error: 'Ошибка',
  },
  CartStatuses: {
    'Cart error': 'Произошла ошибка при загрузке корзины',
    noCart: 'Корзины для данного пользователя не существует',
  },
  ErrorStatuses: {
    GlobalError: 'Произошла ошибка',
    'Try again': 'Попробуйте снова',
    'Try again later': 'Попробуйте снова позже',
    'Go to login page': 'Вернутся на страницу логина',
    Error: 'Ошибка при загрузке {{pageName}}',
    'Network Error': 'Ошибка сети при получении {{pageName}}',
    'Network Error. Please try later':
      'Ошибка сети при получении {{pageName}}. Попробуйте снова позже',
    '400': '400. Плохой запрос при загрузке {{pageName}}',
    '401': 'Вы не авторизованны',
    '403': 'У вас нет прав для доступа к данному ресурсу',
    '404': '404. Данный запрос не существует в {{pageName}}',
    '500': '500. Внутренняя ошибка сервера. {{pageName}} для данного пользователя не существует',
    '502': '502. Плохой шлюз при загрузке {{pageName}}',
    '503': '503. Сервис недоступен при загрузке {{pageName}}',

    '/cart': 'Корзины',
    '/user/4': 'Ваших фильмов',
  },
  UserMenu: {
    adminPanel: 'Админ панель',
    profile: 'Профиль',
    orders: 'Мои заказы',
    favorites: 'Избранное',
    feedback: 'Мои отзывы',
    myMovies: 'Мои фильмы',
    signout: 'Выйти',
  },
  AdminPanel: {
    adminPanel: 'Панель администратора',
    enterMovieTitle: 'Введите название фильма',
    enterUserEmail: 'Введите email пользователя',
    addMovie: 'Добавить новый фильм',
    allUsers: 'Все пользователи',
    allMovies: 'Все фильмы',
    siteSettings: 'Настройки сайта',
  },
  mockFavorites: {
    favoritesPage: 'Избранное',
    goBack: 'ВЕРНУТЬСЯ НАЗАД',
  },
  mockOrders: {
    orderPage: 'Мои заказы',
    goBack: 'ВЕРНУТЬСЯ НАЗАД',
  },
  mockProfile: {
    profilePage: 'Профиль',
    goBack: 'ВЕРНУТЬСЯ НАЗАД',
  },
  ModalAddMovieToCart: {
    selectPeriod: 'Выберите период подписки',
    selectFormat: 'Выберите качество фильма',
    submit: 'Подтвердить',
    forever: 'Навсегда',
    'for 7 days': 'На 7 дней',
    'for 30 days': 'На 30 дней',
  },
  UserPage: {
    Profile: 'Профиль',
    Favorites: 'Избранное',
    'Orders list': 'Мои заказы',
    'My feedback': 'Мои отзывы',
    MyMovies: 'Мои фильмы',
    emptyMyMovies: 'У вам нет активных фильмов',
    save: 'Сохранить',
    name: 'имя',
    email: 'эл. почта',
    'date of birth': 'дата рождения',
    goHome: 'ВЕРНУТЬСЯ НА ГЛАВНУЮ',
    empty: 'У вас нет фильмов в избранном!',
    Available: 'Доступно',
    days: 'д',
    hours: 'ч',
    minutes: 'м',
    forever: 'Навсегда',
  },
  MovieControl: {
    tooltipText: 'Данный фильм уже находится в ваших заказах',
  },
  myOrders: {
    orders: 'Мои заказы',
    orderId: 'Номер заказа',
    orderDate: 'Дата заказа',
    filmPrice: 'Стоимость фильма',
    orderPrice: 'Стоимость заказа',
  },
};
