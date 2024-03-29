export const en = {
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
    cvc: 'CVC',
    submit: 'Pay',
    processing: 'Processing',
    cardInformation: 'Card information',
    fullName: 'Name on card',
    'Your card number is incomplete.': 'Your card number is incomplete.',
    "Your card's expiration date is incomplete.": `Your card's expiration date is incomplete.`,
    "Your card's security code is incomplete.": `Your card's security code is incomplete.`,
    'Name field is incomplete.': 'Name field is incomplete.',
    'Your card number is invalid.': 'Your card number is invalid.',
    "Your card's expiration year is invalid.": `Your card's expiration year is invalid.`,
    "Your card's expiration year is in the past.": `Your card's expiration year is in the past.`,
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
    min: 'min',
    'Update comment': 'Update comment',
    'Delete comment': 'Delete comment',
    You: 'You',
    Comments: 'Comments',
    movieNotFound: 'Not found movie',
    noComments: 'No comments on this movie',
    errorInComments: 'Error occured while loading comments',
    reloadComments: 'Reload comments',
  },
  Filtration: {
    genres: 'Genres',
    categories: 'Categories',
    countries: 'Countries',
    voteAverage: 'Vote average',
    year: 'Year',
    Action: 'Action',
    Comedy: 'Comedy',
    Fantasy: 'Fantasy',
    Thriller: 'Thriller',
    Horror: 'Horror',
    Crime: 'Crime',
    Drama: 'Drama',
    Movie: 'Movie',
    Cartoon: 'Cartoon',
    USA: 'USA',
    German: 'German',
    France: 'France',
    Canada: 'Canada',
  },
  AuthStatuses: {
    '100': 'processing. Just wait for a while',
    '400': 'SignIn, please',
    '500': 'Such user already exists',
    error: 'Error',
  },
  CartStatuses: {
    'Cart error': 'Something went wrong in cart',
    noCart: 'No cart for current user exists',
  },
  ErrorStatuses: {
    GlobalError: 'Error occured',
    'Try again': 'Try again',
    'Try again later': 'Try again later',
    'Go to login page': 'Go to login page',
    Error: 'Error in {{pageName}}',
    'Error. Network Error': 'Network Error. Please try again',
    'Network Error': 'Network Error in {{pageName}}',
    'Error. Network Error. Please try later': 'Network Error in {{pageName}}. Please try later',
    'Network Error. Please try later': 'Network Error in {{pageName}}. Please try later',
    '400': '400. Bad request in {{pageName}}',
    '401': 'You are not authorized',
    '403': 'You do not have permission to access this resource',
    '404': '404. This request does not exist in {{pageName}}',
    '500': '500. Internal server error. {{pageName}} does not exist',
    '502': '502. Bad gateway in {{pageName}}',
    '503': '503. Service Unavailable in {{pageName}}',

    '/movies': 'Movies',
    '/cart': 'Cart',
    '/user/1': 'Favorites',
    '/user/4': 'My Movies',
    '/user/3': 'My Feedback',
    '/user/2': 'My Orders',
    '/comments': 'Comments',
  },

  UserMenu: {
    adminPanel: 'Admin panel',
    profile: 'Profile',
    orders: 'Orders',
    favorites: 'Favorites',
    feedback: 'My feedback',
    myMovies: 'My movies',
    signout: 'Sign Out',
  },
  AdminPanel: {
    adminPanel: 'Admin panel',
    enterMovieTitle: 'Enter movie title',
    enterUserEmail: 'Enter user email',
    addMovie: 'Add movie',
    allUsers: 'All users',
    allMovies: 'All movies',
    siteSettings: 'Site settings',
    emptyField: 'Empty field',
    apply: 'Apply',
    editMovie: 'Edit movie',
  },
  ModalAddMovieToCart: {
    selectPeriod: 'Select subscription period',
    selectFormat: 'Select movie format',
    submit: 'Submit',
    forever: 'Forever',
    'for 7 days': 'For 7 days',
    'for 30 days': 'For 30 days',
  },
  UserPage: {
    Profile: 'Profile',
    Favorites: 'Favorites',
    'Orders list': 'Orders list',
    'My feedback': 'My feedback',
    MyMovies: 'My Movies',
    emptyMyMovies: 'You do not have active films',
    save: 'Save',
    name: 'name',
    email: 'email',
    'date of birth': 'date of birth',
    goHome: 'GO HOME',
    empty: 'You favorites are empty!',
    Available: 'Available',
    days: 'd',
    hours: 'h',
    minutes: 'm',
    forever: 'Forever',
  },
  MovieControl: {
    tooltipText: 'This movie is already in your orders',
  },
  myOrders: {
    orders: 'My orders',
    orderId: 'Order ID',
    orderDate: 'Order date',
    filmPrice: 'Film price',
    orderPrice: 'Order price',
    noOrder: 'No order for current user exists',
  },
  myFeedback: {
    feedback: 'My Feedback',
    noFeedback: 'Feedback for current user not exist!',
  },
  Movies: {
    nothingFound: 'NOTHING FOUND',
    youSearch: 'Your search "{{movieQuery}}" did not match any movie.',
    suggestions: 'Suggestions',
    suggestionFirst: 'Make sure all words are spelled correctly.',
    suggestionSecond: 'Try using other keywords.',
    suggestionThird: 'Select other options.',
  },
};
