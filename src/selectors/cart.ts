import { ICartData } from '@/utils/interfaces/cartInterfaces';
import { createSelector } from '@reduxjs/toolkit';

interface IState {
  cart: ICartData;
}

const stateSelector = (state: IState): ICartData => state.cart;

export const cartSelector = createSelector(stateSelector, (state) => state);
