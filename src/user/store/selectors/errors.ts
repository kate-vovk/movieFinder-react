import { createSelector } from '@reduxjs/toolkit';

const stateSelector = (state: any): any => state.errors;

export const errorSelector = createSelector(stateSelector, (state) => state.errors);

export const majorErrorSelector = createSelector(errorSelector, (errors) =>
  errors.filter(({ isMajor }: { isMajor: boolean }) => isMajor),
);

export const minorErrorSelector = createSelector(errorSelector, (errors) =>
  errors.filter(({ isMajor }: { isMajor: boolean }) => !isMajor),
);
