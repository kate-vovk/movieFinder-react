import { createSlice } from '@reduxjs/toolkit';
import { IModalState } from '@/interfaces/modalinterfaces';

const initialState: IModalState = {
  modalType: null,
  modalProps: {},
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
      state.isModalOpen = true;
    },
    hideModal() {
      return initialState;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
