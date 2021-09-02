import { ICart } from '@/utils/interfaces/cartInterfaces';
import { createSelector } from '@reduxjs/toolkit';

interface IState {
  cart: ICart;
}

const stateSelector = (state: IState): ICart => state.cart;

export const cartSelector = createSelector(stateSelector, (state) => state);
