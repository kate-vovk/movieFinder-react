import { createSelector } from '@reduxjs/toolkit';
import { IErrorState } from '@/interfaces/errorInterfaces';

interface IState {
  errors: IErrorState;
}

const stateSelector = (state: IState): IErrorState => state.errors;

export const errorSelector = createSelector(stateSelector, (state) => state.errors);

export const majorErrorSelector = createSelector(errorSelector, (errors) =>
  errors.filter(({ isMajor }: { isMajor: boolean }) => isMajor),
);

export const minorErrorSelector = createSelector(errorSelector, (errors) =>
  errors.filter(({ isMajor }: { isMajor: boolean }) => !isMajor),
);
