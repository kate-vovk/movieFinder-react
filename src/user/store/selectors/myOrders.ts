import { createSelector } from '@reduxjs/toolkit';
import { IOrders } from '@/interfaces/orderInterface';

interface IMyOrderState {
  ordersData: IOrders[];
  status: string;
  error: { [key: string]: string | any };
}
interface IMyOrdersState {
  myOrders: IMyOrderState;
}

const stateSelector = (state: IMyOrdersState): IMyOrderState => state.myOrders;

export const myOrdersSelector = createSelector(stateSelector, (state) => state.ordersData);
export const myOrdersStatusSelector = createSelector(stateSelector, (state) => state.status);
export const myOrdersErrorSelector = createSelector(stateSelector, (state) => state.error);
