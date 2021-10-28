import { createSelector } from '@reduxjs/toolkit';
import { IAuth, IStoreState } from '@/interfaces/authInterfaces';

const stateSelector = (state: IStoreState): IAuth => state.auth;

export const userSelector = createSelector(stateSelector, (state) => state);
export const userIdSelector = createSelector(stateSelector, (state) => state.userId);
export const userNameSelector = createSelector(stateSelector, (state) => state.userName);
export const userRoleSelector = createSelector(stateSelector, (state) => state.userRole);
