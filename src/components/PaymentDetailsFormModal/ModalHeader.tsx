import { FunctionComponent } from 'react';
import { DialogTitle, Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

interface IModalHeader {
  setOpen: (value: boolean) => void;
}
export const ModalHeader: FunctionComponent<IModalHeader> = ({ setOpen }) => {
  const { t } = useTranslation(['PaymentForm']);
  const classes = useStyle();
  return (
    <DialogTitle className={classes.modalHeader}>
      <Typography className={classes.modalTitle}>{t('paymentDetails')}</Typography>
      <CustomButton
        name="close"
        buttonType="button"
        className={classes.closeButton}
        onClick={() => setOpen(false)}
      />
    </DialogTitle>
  );
};
