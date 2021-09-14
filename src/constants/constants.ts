export const API_LOGO_URL =
  'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg';

export const API_WEBSITE = 'https://www.themoviedb.org/';

export const CLIENT_PATHS = {
  user: '/user',
  cart: '/cart',
  movies: '/movies',
  movie: '/movie',
  signin: '/signin',
  signup: '/signup',
  main: '/',
};

export const SERVER_PATHS = {
  signin: '/signin',
  signup: '/signup',
  logout: '/signout',
  cart: '/cart',
  users: '/users',
  movies: '/films',
  actors: '/actors',
  genres: '/genres',
  categories: '/categories',
  main: '/',
};

export enum searchOption {
  initial = '',
  actor = 'actor',
  studio = 'studio',
}
