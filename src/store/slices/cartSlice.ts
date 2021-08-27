import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HTTPService from '@/services/httpService';
import { CLIENT_PATHS } from '@/constants/constants';
import { ICart } from '@/utils/interfaces/cartInterfaces';

export const addToCart = createAsyncThunk('cart/addToCart', async (id: number) => {
  return HTTPService.get(`${CLIENT_PATHS.movies}/${id}`);
});
const initialState: ICart = { movies: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      return { ...state, movies: state.movies.filter(({ id }) => id !== action.payload) };
    },
    // will be async action in the future (post request to the server). Currently, just clears the cart.
    sendData: (state, action) => {
      alert(JSON.stringify(action.payload));
      return { ...state, movies: [], totalPrice: 0 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return {
        ...state,
        movies: [...state.movies, action.payload.data],
      };
    });
  },
});

export const { removeFromCart, sendData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
