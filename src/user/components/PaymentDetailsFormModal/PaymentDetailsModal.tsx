import { FunctionComponent } from 'react';
import { Dialog } from '@material-ui/core';
import { ModalHeader } from './ModalHeader';
import { PaymentDetailsForm } from './PaymentDetailsForm/PaymentDetailsForm';
import { StripeWrapper } from './StripeWrapper';

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
      <StripeWrapper>
        <PaymentDetailsForm />
      </StripeWrapper>
    </Dialog>
  );
};
