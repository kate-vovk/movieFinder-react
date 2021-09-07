import { createSelector } from '@reduxjs/toolkit';

const stateSelector = (state: any): any => state.modal;

export const modalSelector = createSelector(stateSelector, (state) => state);
