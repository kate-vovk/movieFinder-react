import { FunctionComponent } from 'react';
import { Dialog } from '@material-ui/core';
import { PaymentDetailsForm } from './PaymentDetailsForm';
import { ModalHeader } from './ModalHeader';

interface IPaymentDetailsModal {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}
export const PaymentDetailsModal: FunctionComponent<IPaymentDetailsModal> = ({
  isOpen,
  setOpen,
}) => {
  return (
    <Dialog open={isOpen}>
      <ModalHeader setOpen={setOpen} />
      <PaymentDetailsForm />
    </Dialog>
  );
};
