import { SERVER_PATHS } from './constants';

export interface IUserMenuLinks {
  link: string;
  translate: string;
}

export const userMenuLinks: IUserMenuLinks[] = [
  {
    link: SERVER_PATHS.admin,
    translate: 'adminPanel',
  },
  {
    link: SERVER_PATHS.profile,
    translate: 'profile',
  },
  {
    link: SERVER_PATHS.orders,
    translate: 'orders',
  },
  {
    link: SERVER_PATHS.favorites,
    translate: 'favorites',
  },
];
