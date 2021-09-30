import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as order from '@/user/businessLogic/orders';
import { IOrder } from '@/interfaces/orderInterface';

interface ISetOrdersToStore {
  userId: string;
  isActive?: string | boolean;
}
const initialState: IOrder[] = [];

export const addOrder = createAsyncThunk('orders/addOrder', async (userId: string) => {
  await order.addOrder(userId);
  return order.getUserOrders(userId, '');
});

export const setUserOrdersToStore = createAsyncThunk(
  'orders/getUserOrders',
  async ({ userId, isActive = '' }: ISetOrdersToStore) => {
    return order.getUserOrders(userId, isActive);
  },
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUserOrdersToStore.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
