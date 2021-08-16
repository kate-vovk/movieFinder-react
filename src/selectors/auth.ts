import { createSelector } from '@reduxjs/toolkit';

interface IState {
  auth: {
    token: string;
    isLoggedIn: boolean;
  };
}

interface IAuth {
  token: string;
  isLoggedIn: boolean;
}

const stateSelector = (state: IState): IAuth => state.auth;

export const isLoggedInSelector = createSelector(stateSelector, (state) => state.isLoggedIn);
