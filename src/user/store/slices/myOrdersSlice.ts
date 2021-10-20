import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as order from '@/user/businessLogic/myOrders';
import { IOrders } from '@/interfaces/orderInterface';
import { DataStatus } from '@/interfaces/status';

interface ISetOrdersToStore {
  userId: string;
}

interface IMyOrdersState {
  ordersData: IOrders[];
  status: string;
}

const initialState: IMyOrdersState = {
  ordersData: [],
  status: DataStatus.initial,
};

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
      .addCase(setUserOrdersToStore.pending, (state) => {
        state.ordersData = [];
        state.status = DataStatus.loading;
      })
      .addCase(setUserOrdersToStore.fulfilled, (state, action) => {
        if (action.payload.length !== 0) {
          state.ordersData = action.payload;
          state.status = DataStatus.success;
        } else {
          state.status = DataStatus.empty;
        }
      })
      .addCase(setUserOrdersToStore.rejected, (state) => {
        state.status = DataStatus.error;
      })
      .addCase(addOrder.pending, (state) => {
        state.ordersData = [];
        state.status = DataStatus.loading;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.ordersData = action.payload;
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
        }
      })
      .addCase(addOrder.rejected, (state) => {
        state.status = DataStatus.error;
      });
  },
});

export const myOrdersReducer = myOrdersSlice.reducer;
