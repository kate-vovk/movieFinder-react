import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as order from '@/user/businessLogic/myMovies';
import { IOrder } from '@/interfaces/orderInterface';

interface ISetOrdersToStore {
  userId: string;
}
const initialState: IOrder[] = [];

export const setUserOrdersToStore = createAsyncThunk(
  'myMovies/getUserOrders',
  async ({ userId }: ISetOrdersToStore) => {
    return order.getUserOrders(userId);
  },
);

export const myMoviesSlice = createSlice({
  name: 'myMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserOrdersToStore.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const myMoviesReducer = myMoviesSlice.reducer;
