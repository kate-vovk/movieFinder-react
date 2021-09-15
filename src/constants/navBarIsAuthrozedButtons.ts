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
          name: 'cart',
          to: CLIENT_PATHS.cart,
          badge: 2,
        },
      ]
    : [
        {
          name: 'signUp',
          to: CLIENT_PATHS.signup,
        },
        {
          name: 'signIn',
          to: CLIENT_PATHS.signin,
        },
      ];
