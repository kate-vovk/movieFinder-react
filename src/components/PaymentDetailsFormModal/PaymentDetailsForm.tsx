import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';
import { cardDetailsValidation } from '@/utils/validations/paymentDetailsValidation';
import { sendData } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { CLIENT_PATHS } from '@/constants';
import { useStyle } from './styles';

export const PaymentDetailsForm: FunctionComponent = () => {
  const { t } = useTranslation(['PaymentForm']);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const userId = useSelector(userSelector);

  const clickBuyButton = (): void => {
    dispatch(sendData({ userId }));
    history.push(CLIENT_PATHS.main);
  };
  const formik = useFormik({
    initialValues: {
      cardNumber: null,
      expirationDate: null,
      cvv: null,
    },
    validate: cardDetailsValidation,
    onSubmit: clickBuyButton,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.cardNumber}>
          <Typography className={classes.title}>{t('cardNumber')}</Typography>
          <InputMask
            mask="9999 9999 9999 9999"
            maskPlaceholder="X"
            alwaysShowMask
            onChange={formik.handleChange}
          >
            <TextField
              id="number"
              name="cardNumber"
              error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
              inputProps={{ min: 0, style: { textAlign: 'center' } }}
              className={classes.cardNumber}
            />
          </InputMask>
        </div>
        <div className={classes.dateCVVContainer}>
          <div className={classes.dateCVV}>
            <Typography className={classes.title}>{t('expirationDate')}</Typography>
            <InputMask
              mask="99 / 99"
              maskPlaceholder="mm / yy"
              alwaysShowMask
              onChange={formik.handleChange}
            >
              <TextField
                id="expirationDate"
                name="expirationDate"
                error={formik.touched.expirationDate && Boolean(formik.errors.expirationDate)}
                helperText={formik.touched.expirationDate && formik.errors.expirationDate}
                inputProps={{ min: 0, style: { textAlign: 'center' } }}
              />
            </InputMask>
          </div>

          <div className={classes.dateCVV}>
            <Typography className={classes.title}>{t('cvv')}</Typography>
            <InputMask mask="999" maskPlaceholder="*" alwaysShowMask onChange={formik.handleChange}>
              <TextField
                id="cvv"
                name="cvv"
                error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                helperText={formik.touched.cvv && formik.errors.cvv}
                inputProps={{ min: 0, style: { textAlign: 'center' } }}
              />
            </InputMask>
          </div>
        </div>

        <Button color="primary" variant="contained" fullWidth type="submit">
          {t('submit')}
        </Button>
      </form>
    </div>
  );
};
