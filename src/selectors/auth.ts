import { createSelector } from '@reduxjs/toolkit';
import { IAuth } from '@/utils/interfaces/authInterfaces';

interface IState {
  auth: IAuth;
}

const stateSelector = (state: IState): IAuth => state.auth;

export const isLoggedInSelector = createSelector(stateSelector, (state) => state.isLoggedIn);

export const userSelector = createSelector(stateSelector, (state) => state.user);
