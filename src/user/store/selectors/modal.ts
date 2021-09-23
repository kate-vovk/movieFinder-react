import { createSelector } from '@reduxjs/toolkit';
import { IModalState } from '@/interfaces/modalinterfaces';

interface IState {
  modal: IModalState;
}

const stateSelector = (state: IState): IModalState => state.modal;

export const modalSelector = createSelector(stateSelector, (modal) => modal);
