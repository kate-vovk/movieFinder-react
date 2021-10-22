import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { IErrorState } from '@/interfaces/errorInterfaces';
import { exctractParams, exctractRoute } from '@/utils/extractRouteParams';

const initialState: IErrorState = {
  errors: [],
  currentRoute: '/',
};

const isMajorError = (
  currentRoute: string | undefined,
  route: string | undefined,
  message = '',
  isMajorFlag: boolean,
): boolean => {
  const pageName = i18next.t(`ErrorStatuses:${exctractRoute(route)}`);
  const param = exctractParams(route);
  const isMajor = isMajorFlag ?? (currentRoute && route) ? currentRoute === route : false;
  if (!isMajor) {
    toast(`${i18next.t(`ErrorStatuses:${message}`, { pageName })} ${param}`);
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
      const isMajorErr =
        action.payload.redirectionPage ||
        isMajorError(
          state.currentRoute,
          action.payload.route,
          action.payload.message,
          action.payload.isMajor,
        );
      if (!state.errors.map(({ errorName }) => errorName).includes(action.payload.errorName)) {
        state.errors.push(
          action.payload.redirectionPage
            ? {
                errorName: action.payload.errorName,
                message: action.payload.message,
                redirectionPage: action.payload.redirectionPage,
                params: '',
                isMajor: true,
                isMajorFlagMutable: false,
              }
            : {
                errorName: action.payload.errorName,
                message: action.payload.message,
                failedFunctionFromBusinessLogic: action.payload.failedFunctionFromBusinessLogic,
                params: action.payload.params || '',
                isMajor: isMajorErr,
                isMajorFlagMutable: action.payload.isMajorFlagMutable,
                route: action.payload.route || '/',
              },
        );
      }
    },
    setErrorPriority(state) {
      state.errors = state.errors.map((error) => {
        if (!error.redirectionPage && error.isMajorFlagMutable) {
          if (error.route && state.currentRoute === error.route) {
            return { ...error, isMajor: true };
          }
          return { ...error, isMajor: false };
        }
        return error;
      });
    },
    clearError(state, action) {
      state.errors = state.errors.filter(({ errorName }) => errorName !== String(action.payload));
    },
  },
});

export const { addError, clearError, setErrorPriority, setCurrentRoute } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;
