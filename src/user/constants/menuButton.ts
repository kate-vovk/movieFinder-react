import { CLIENT_PATHS } from './constants';

export interface IUserMenuLinks {
  link: string;
  translate: string;
}

export const userMenuLinks: IUserMenuLinks[] = [
  {
    link: CLIENT_PATHS.admin,
    translate: 'adminPanel',
  },
  {
    link: `${CLIENT_PATHS.user}/0`,
    translate: 'profile',
  },
  {
    link: `${CLIENT_PATHS.user}/1`,
    translate: 'favorites',
  },
  {
    link: `${CLIENT_PATHS.user}/2`,
    translate: 'orders',
  },
  {
    link: `${CLIENT_PATHS.user}/3`,
    translate: 'feedback',
  },
  {
    link: `${CLIENT_PATHS.user}/4`,
    translate: 'myMovies',
  },
];
