import { createSelector } from '@reduxjs/toolkit';
import { ICart } from '@/interfaces/cartInterfaces';

interface IState {
  cart: ICart;
}

const stateSelector = (state: IState): ICart => state.cart;

export const cartSelector = createSelector(stateSelector, (state) => state);
