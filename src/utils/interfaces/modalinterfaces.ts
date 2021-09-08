export interface IModalState {
  modalType: string | null;
  modalProps: IModalProps;
  isModalOpen: boolean;
}

export interface IModalProps {
  [keyof: string]: string | number;
}
