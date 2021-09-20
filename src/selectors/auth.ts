import { createSelector } from '@reduxjs/toolkit';
import { IAuth, IStoreState } from '@/utils/interfaces/authInterfaces';

const stateSelector = (state: IStoreState): IAuth => state.auth;

export const userSelector = createSelector(stateSelector, (state) => state);
export const userIdSelector = createSelector(stateSelector, (state) => state.userId);
