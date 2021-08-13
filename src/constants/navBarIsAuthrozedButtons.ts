interface isAuthorizedButton {
  name: string;
  to: string;
  badge?: number;
}

export const isAuthorizedButtons = (isAuthorized: boolean): isAuthorizedButton[] =>
  isAuthorized
    ? [
        {
          name: 'Cart',
          to: 'cart',
          badge: 2,
        },
        {
          name: 'SignOut',
          to: '/',
        },
      ]
    : [
        {
          name: 'SignUp',
          to: 'signup',
        },
        {
          name: 'SignIn',
          to: 'signin',
        },
      ];
