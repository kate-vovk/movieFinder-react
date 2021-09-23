import { CLIENT_PATHS } from './constants';

interface isAuthorizedButton {
  name: string;
  to: string;
  badge: boolean;
}

export const isAuthorizedButtons = (isAuthorized: boolean): isAuthorizedButton[] =>
  isAuthorized
    ? [
        {
          name: 'cart',
          to: CLIENT_PATHS.cart,
          badge: true,
        },
      ]
    : [
        {
          name: 'signUp',
          to: CLIENT_PATHS.signup,
          badge: false,
        },
        {
          name: 'signIn',
          to: CLIENT_PATHS.signin,
          badge: false,
        },
      ];
