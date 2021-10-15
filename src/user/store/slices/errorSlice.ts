import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { addMovieToCart, removeMovieFromCart, setCartMoviesToStore } from './cartSlice';
import { IError, IErrorState } from '@/interfaces/errorInterfaces';

const AUTH_FAILED_ERROR = 'auth/failed';

const initialState: IErrorState = {
  errors: [],
  currentRoute: '/',
};

const isMajorError = (currentRoute: string, route: string, message = ''): boolean => {
  const isMajor = currentRoute === route;
  if (!isMajor) {
    toast(i18next.t(`ErrorStatuses:${message} in ${route}`));
  }
  return isMajor;
};

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload;
    },
    addError(state, action) {
      if (!state.errors.map(({ errorName }) => errorName).includes(action.payload.errorName)) {
        state.errors.push(
          action.payload.redirectionPage
            ? {
                errorName: action.payload.errorName,
                message: action.payload.message,
                redirectionPage: action.payload.redirectionPage,
                params: '',
                isMajor: true,
              }
            : {
                errorName: action.payload.errorName,
                message: action.payload.message,
                failedFunctionFromBusinessLogic: action.payload.failedFunctionFromBusinessLogic,
                params: '',
                isMajor: false,
              },
        );
      }
    },
    setErrorPriority(state, action) {
      state.errors = state.errors.map((error) => {
        if (error.route && action.payload.currentRoute === error.route && !error.redirectionPage) {
          return {
            ...error,
            isMajor: true,
          };
        }
        return { ...error, isMajor: false };
      });
    },
    clearError(state, action) {
      state.errors = state.errors.filter(({ errorName }) => errorName !== String(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCartMoviesToStore.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ errorName }) => errorName !== 'cart/getMovies/rejected',
        );
      })
      .addCase(addMovieToCart.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ errorName }) => errorName !== 'cart/addToCart/rejected',
        );
      })
      .addCase(removeMovieFromCart.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ errorName }) => errorName !== 'cart/removeMovie/rejected',
        );
      })

      .addCase(setCartMoviesToStore.rejected, (state, action) => {
        const errorNames = state.errors.map((error: IError) => error.errorName);
        if (!errorNames.includes(action.type) && !errorNames.includes(AUTH_FAILED_ERROR)) {
          state.errors = [
            ...state.errors,
            {
              errorName: action.type,
              message: action.error.message || 'error',
              failedActionFromRedux: setCartMoviesToStore,
              params: action.meta.arg,
              route: '/cart',
              isMajor: isMajorError(state.currentRoute, '/cart', action.error.message),
            },
          ];
        }
      })
      .addCase(addMovieToCart.rejected, (state, action) => {
        const errorName = state.errors.map((error: IError) => error.errorName);
        if (!errorName.includes(action.type) && !errorName.includes(AUTH_FAILED_ERROR)) {
          state.errors = [
            ...state.errors,
            {
              errorName: action.type,
              message: action.error.message || 'error',
              failedActionFromRedux: addMovieToCart,
              params: action.meta.arg,
              route: '/cart',
              isMajor: isMajorError(state.currentRoute, '/cart', action.error.message),
            },
          ];
        }
      })
      .addCase(removeMovieFromCart.rejected, (state, action) => {
        const errorName = state.errors.map((error: IError) => error.errorName);
        if (!errorName.includes(action.type) && !errorName.includes(AUTH_FAILED_ERROR)) {
          state.errors = [
            ...state.errors,
            {
              errorName: action.type,
              message: action.error.message || 'error',
              failedActionFromRedux: removeMovieFromCart,
              params: action.meta.arg,
              route: '/cart',
              isMajor: isMajorError(state.currentRoute, '/cart', action.error.message),
            },
          ];
        }
      });
  },
});

export const { addError, clearError, setErrorPriority, setCurrentRoute } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;
