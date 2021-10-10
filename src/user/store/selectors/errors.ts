import { createSelector } from '@reduxjs/toolkit';

// interface IState {
//   cart: ICart;
// }

const stateSelector = (state: any): any => state.errors;

export const errorSelector = createSelector(stateSelector, (state) => state);
