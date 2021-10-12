import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as order from '@/user/businessLogic/myMovies';
import { IMyMovies } from '@/interfaces/orderInterface';
import { DataStatus } from '@/admin/interfaces';

interface ISetOrdersToStore {
  userId: string;
}
const initialState: IMyMovies = {
  myMovies: [],
  status: DataStatus.initial,
};

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
    builder
      .addCase(setUserOrdersToStore.pending, (state) => {
        state.status = DataStatus.loading;
      })
      .addCase(setUserOrdersToStore.fulfilled, (state, action) => {
        state.myMovies = action.payload;
        if (action.payload.length === 0) {
          state.status = DataStatus.empty;
        } else {
          state.status = DataStatus.success;
        }
      })
      .addCase(setUserOrdersToStore.rejected, (state) => {
        state.status = DataStatus.error;
      });
  },
});

export const myMoviesReducer = myMoviesSlice.reducer;
