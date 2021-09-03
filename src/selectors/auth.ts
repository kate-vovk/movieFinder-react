import { createSelector } from '@reduxjs/toolkit';
import { IAuth, IStoreState } from '@/utils/interfaces/authInterfaces';

const stateSelector = (state: IStoreState): IAuth => state.auth;

export const isLoggedInSelector = createSelector(stateSelector, (state) => state?.isLoggedIn);

export const isLoadingSelector = createSelector(stateSelector, (state) => state?.isLoading);

export const userSelector = createSelector(stateSelector, (state) => state.user);
