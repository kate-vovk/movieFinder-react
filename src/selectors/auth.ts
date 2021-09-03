import { createSelector } from '@reduxjs/toolkit';
import { IAuth, IState } from '@/utils/interfaces/authInterfaces';

const stateSelector = (state: IState): IAuth => state.auth;

export const isLoggedInSelector = createSelector(stateSelector, (state) => state?.isLoggedIn);

export const isLoadingSelector = createSelector(stateSelector, (state) => state);

export const userSelector = createSelector(stateSelector, (state) => state.user);
