import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  modalType: string | null;
  modalProps: IModalProps;
}

interface IModalProps {
  movieId?: string;
  price?: number;
}

const initialState: IModalState = {
  modalType: null,
  modalProps: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
    },
    hideModal() {
      return initialState;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
