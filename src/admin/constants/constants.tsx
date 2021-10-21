import { IFieldsValue } from '@/admin/interfaces';

export const rowsPerPage = [1, 5, 10, 50, 100];

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
  productioncompanies: '/productioncompanies',
  favorites: '/favorites',
  admin: '/admin',
  editMovie: '/editMovie',
  profile: '/profile',
  orders: '/orders',
  main: '/',
};

export const CLIENT_PATHS = {
  user: '/user',
  cart: '/cart',
  movies: '/movies',
  signin: '/signin',
  signup: '/signup',
  notFound: '/notFound',
  admin: '/admin',
  main: '/',
};

export const movieAllFields: IFieldsValue[] = [
  IFieldsValue.title,
  IFieldsValue.description,
  IFieldsValue.coverUrl,
  IFieldsValue.cast,
  IFieldsValue.category,
  IFieldsValue.country,
  IFieldsValue.duration,
  IFieldsValue.genre,
  IFieldsValue.price,
  IFieldsValue.producer,
  IFieldsValue.productionCompany,
  IFieldsValue.releaseDate,
  IFieldsValue.trailerUrl,
];
