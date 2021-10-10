import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import { setCartMoviesToStore } from './cartSlice';

toast.configure();

const initialState: { error: { [key: string]: string | any } } = {
  error: {},
};

// export const addNewError = createAsyncThunk('errors/addNewError', async (error: string) => {
//   return error;
// });

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addError(state, action) {
      console.log('addError', action.payload, Boolean(action.payload.page));
      state.error = action.payload.page
        ? {
            errorType: action.type,
            message: action.payload.message,
            redirectionPage: action.payload.page,
            // reducer: removeMovieFromCart,
          }
        : {
            errorType: action.type,
            message: action.payload.message,
            reducer: action.payload.reducer,
            params: action.payload.params,
            route: action.payload.route,
            // reducer: removeMovieFromCart,
          };
    },
    clearError() {
      console.log('clearError');
      return initialState;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(setCartMoviesToStore.rejected, (state, action) => {
  //     console.log('addNewError is fulfilled, setCartMoviesToStore.rejected', state, action);
  //     state.push(String(action.error.message));
  //     toast(String(action.error.message));
  //   });
  // },
});

export const { addError } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;
