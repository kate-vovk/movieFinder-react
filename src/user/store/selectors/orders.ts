import { createSelector } from '@reduxjs/toolkit';
import { IOrder } from '@/interfaces/orderInterface';

interface IOrdersState {
  orders: IOrder[];
}
const stateSelector = (state: IOrdersState): IOrder[] => state.orders;

export const ordersSelector = createSelector(stateSelector, (state) => state);
export const activeOrdersSelector = createSelector(stateSelector, (state) =>
  state.filter(({ isActive }: { isActive: boolean }) => isActive),
);
