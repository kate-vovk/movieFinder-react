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
          name: 'Cart',
          to: 'cart',
          badge: 2,
        },
        {
          name: 'SignOut',
          to: `${CLIENT_PATHS.main}`,
        },
      ]
    : [
        {
          name: 'SignUp',
          to: `${CLIENT_PATHS.signup}`,
        },
        {
          name: 'SignIn',
          to: `${CLIENT_PATHS.signin}`,
        },
      ];
