export const CLIENT_PATHS = {
  user: '/user',
  cart: '/cart',
  movies: '/movies',
  signin: '/signin',
  signup: '/signup',
  notFound: '/notFound',
  favorites: '/favorites',
  admin: '/admin',
  profile: '/profile',
  orders: '/orders',
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
  favorites: '/favorites',
  admin: '/admin',
  profile: '/profile',
  orders: '/orders',
  main: '/',
};

export enum searchOption {
  initial = '',
  movie = 'movie',
  actor = 'actor',
  studio = 'studio',
}
