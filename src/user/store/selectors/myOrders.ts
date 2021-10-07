import { createSelector } from '@reduxjs/toolkit';
import { IOrders } from '@/interfaces/orderInterface';

interface IMyOrdersState {
  myOrders: IOrders[];
}

const stateSelector = (state: IMyOrdersState): IOrders[] => state.myOrders;

export const myOrdersSelector = createSelector(stateSelector, (state) => state);
