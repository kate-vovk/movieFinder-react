import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { addMovieToCart, removeMovieFromCart, setCartMoviesToStore } from './cartSlice';

const initialState: { errors: { [key: string]: string | any }[]; currentRoute: string } = {
  errors: [],
  currentRoute: '/',
};
interface IError {
  currentRoute: string;
  message: string | undefined;
  errors: { [key: string]: string | any }[];
  actionType: string;
  params: any;
  route: string;
  reducer: any;
}

export const setError = ({
  currentRoute,
  message,
  errors,
  actionType,
  params,
  route,
  reducer,
}: IError): { [key: string]: string | any }[] => {
  const isMajor = currentRoute === route;
  if (!isMajor) {
    toast(i18next.t(`CartStatuses:${message}`));
  }
  if (!errors.map((error: any) => error.actionType).includes(String(actionType))) {
    return [
      ...errors,
      {
        actionType,
        message,
        reducer,
        isMajor,
        params,
        route,
      },
    ];
  }
  return errors;
};

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload;
    },
    addError(state, action) {
      if (
        !state.errors
          .map(({ actionType }) => actionType)
          .includes(String(action.payload.actionType))
      ) {
        state.errors.push(
          action.payload.page
            ? {
                actionType: action.payload.actionType,
                message: action.payload.message,
                redirectionPage: action.payload.page,
                isMajor: true,
              }
            : {
                actionType: action.payload.actionType,
                message: action.payload.message,
                reducer: action.payload.reducer,
              },
        );
      } else {
        state.errors = state.errors.map((error) => {
          if (error.actionType === String(action.payload.actionType) && !error.redirectionPage) {
            return {
              ...error,
              isMajor: action.payload.isMajor,
              params: action.payload.params,
              route: action.payload.route,
            };
          }
          return error;
        });
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
      state.errors = state.errors.filter(({ actionType }) => actionType !== String(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCartMoviesToStore.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ actionType }) => actionType !== 'cart/getMovies/rejected',
        );
      })
      .addCase(addMovieToCart.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ actionType }) => actionType !== 'cart/addToCart/rejected',
        );
      })
      .addCase(removeMovieFromCart.fulfilled, (state) => {
        state.errors = state.errors.filter(
          ({ actionType }) => actionType !== 'cart/removeMovie/rejected',
        );
      })

      .addCase(setCartMoviesToStore.rejected, (state, action) => {
        state.errors = setError({
          currentRoute: state.currentRoute,
          actionType: action.type,
          message: action.error.message,
          errors: state.errors,
          reducer: setCartMoviesToStore,
          params: action.meta.arg,
          route: '/cart',
        });
      })
      .addCase(addMovieToCart.rejected, (state, action) => {
        state.errors = setError({
          currentRoute: state.currentRoute,
          actionType: action.type,
          message: action.error.message,
          errors: state.errors,
          reducer: addMovieToCart,
          params: action.meta.arg,
          route: '/cart',
        });
      })
      .addCase(removeMovieFromCart.rejected, (state, action) => {
        state.errors = setError({
          currentRoute: state.currentRoute,
          actionType: action.type,
          message: action.error.message,
          errors: state.errors,
          reducer: removeMovieFromCart,
          params: action.meta.arg,
          route: '/cart',
        });
      });
  },
});

export const { addError, clearError, setErrorPriority, setCurrentRoute } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;
