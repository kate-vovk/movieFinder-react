import { CLIENT_PATHS } from './constants';

interface isAuthorizedButton {
  name: string;
  to: string;
  badge?: number;
}

export const isAuthorizedButtons = (isAuthorized: boolean): isAuthorizedButton[] =>
  isAuthorized
    ? [
        {
          name: 'User',
          to: `${CLIENT_PATHS.user}`,
        },
        {
          name: 'cart',
          to: 'cart',
          badge: 2,
        },
        {
          name: 'signOut',
          to: `${CLIENT_PATHS.main}`,
        },
      ]
    : [
        {
          name: 'signUp',
          to: `${CLIENT_PATHS.signup}`,
        },
        {
          name: 'signIn',
          to: `${CLIENT_PATHS.signin}`,
        },
      ];
