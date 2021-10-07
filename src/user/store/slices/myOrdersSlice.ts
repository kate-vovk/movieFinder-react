import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as order from '@/user/businessLogic/myOrders';
import { IOrders } from '@/interfaces/orderInterface';

interface ISetOrdersToStore {
  userId: string;
}
const initialState: IOrders[] = [];

export const addOrder = createAsyncThunk('myOrders/addOrder', async (userId: string) => {
  await order.addOrder(userId);
  return order.getAllUserOrders(userId);
});

export const setUserOrdersToStore = createAsyncThunk(
  'myOrders/getUserOrders',
  async ({ userId }: ISetOrdersToStore) => {
    return order.getAllUserOrders(userId);
  },
);

export const myOrdersSlice = createSlice({
  name: 'myOrders',
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

export const myOrdersReducer = myOrdersSlice.reducer;
