interface IState {
  isLoggedIn: boolean;
}

export const getIsLoggedInSelector = (state: IState): boolean => state.isLoggedIn;
