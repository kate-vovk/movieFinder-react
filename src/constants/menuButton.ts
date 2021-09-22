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
    link: `${CLIENT_PATHS.user}/Profile`,
    translate: 'profile',
  },
  {
    link: `${CLIENT_PATHS.user}/Favorites`,
    translate: 'favorites',
  },
  {
    link: `${CLIENT_PATHS.user}/OrdersList`,
    translate: 'orders',
  },
];
