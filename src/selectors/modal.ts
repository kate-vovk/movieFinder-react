import { createSelector } from '@reduxjs/toolkit';
import { IModalState } from '@/utils/interfaces/modalinterfaces';

interface IState {
  modal: IModalState;
}

const stateSelector = (state: IState): IModalState => state.modal;

export const modalSelector = createSelector(stateSelector, (state) => state);
