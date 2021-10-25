import { Button, Typography } from '@material-ui/core';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PaymentMethodResult, StripeCardElement, StripeCardNumberElement } from '@stripe/stripe-js';
import { cardStyle, useStyle } from './styles';
import { billingDetailsValidation } from '@/utils/validations/paymentDetailsValidation';
import { addOrder } from '@/user/store/slices/myOrdersSlice';
import { clearCart } from '@/user/store/slices/cartSlice';
import { CLIENT_PATHS } from '@/user/constants';
import { userIdSelector } from '@/user/store/selectors/auth';

export const PaymentDetailsForm: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const { t } = useTranslation(['PaymentForm']);
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState({
    cardCvc: '',
    cardNumber: '',
    cardExpiry: '',
  });

  const [isCardCompleted, setCardIsCompleted] = useState({
    cardCvc: false,
    cardNumber: false,
    cardExpiry: false,
  });
  const [processing, setProcessing] = useState(false);

  const handleCardElementChange = async ({
    elementType,
    error,
    complete,
  }: {
    complete: boolean;
    elementType: string;
    error: { code: string; message: string; type: string } | undefined;
  }): Promise<void> => {
    switch (elementType) {
      case 'cardExpiry':
        setCardIsCompleted({ ...isCardCompleted, cardExpiry: complete });
        if (error) {
          setErrorMessage({ ...errorMessage, cardExpiry: error.message });
        } else {
          setErrorMessage({ ...errorMessage, cardExpiry: '' });
        }
        break;
      case 'cardCvc':
        setCardIsCompleted({ ...isCardCompleted, cardCvc: complete });
        if (error) {
          setErrorMessage({ ...errorMessage, cardCvc: error.message });
        } else {
          setErrorMessage({ ...errorMessage, cardCvc: '' });
        }
        break;
      case 'cardNumber':
        setCardIsCompleted({ ...isCardCompleted, cardNumber: complete });
        if (error) {
          setErrorMessage({ ...errorMessage, cardNumber: error.message });
        } else {
          setErrorMessage({ ...errorMessage, cardNumber: '' });
        }
        break;
      default:
        break;
    }
  };

  const clickSubmitButton = (): void => {
    const obj: { cardCvc: string; cardNumber: string; cardExpiry: string } = errorMessage;
    Object.entries(isCardCompleted).forEach(([key, value]) => {
      if (!value) {
        if (key === 'cardNumber' && errorMessage.cardNumber === '') {
          obj.cardNumber = 'Your card number is incomplete.';
        }
        if (key === 'cardExpiry' && errorMessage.cardExpiry === '') {
          obj.cardExpiry = `Your card's expiration date is incomplete.`;
        }
        if (key === 'cardCvc' && errorMessage.cardCvc === '') {
          obj.cardCvc = `Your card's security code is incomplete.`;
        }
      }
    });
    setErrorMessage(obj);
  };

  const clickBuyButton = async (event: { fullName: string }): Promise<void> => {
    if (Object.values(errorMessage).some((value: string) => value === '')) {
      setProcessing(true);
    }
    const paymentMethodResult: PaymentMethodResult | undefined = await stripe?.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardNumberElement) as
        | StripeCardNumberElement
        | StripeCardElement
        | { token: string },
      billing_details: { name: event.fullName },
    });

    setProcessing(false);

    if (!paymentMethodResult?.error) {
      dispatch(addOrder(userId));
      dispatch(clearCart());
      history.push(CLIENT_PATHS.main);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
    },
    validate: billingDetailsValidation,
    onSubmit: clickBuyButton,
  });

  const isVisibleErrorMessage =
    Boolean(Object.values(errorMessage).some((value: string) => value !== '')) ||
    Boolean(Object.values(isCardCompleted).some((value: boolean) => !value)) ||
    Boolean(formik.errors.fullName);

  const classes = useStyle({
    isVisibleErrorMessage,
    isCardCvcError: Boolean(errorMessage.cardCvc !== ''),
    isCardNumberError: Boolean(errorMessage.cardNumber !== ''),
    isCardExpirationDateError: Boolean(errorMessage.cardExpiry !== ''),
    isFullNameError: Boolean(formik.errors.fullName),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div className={classes.container}>
        <Typography className={classes.title}>{t('cardInformation')}</Typography>
        <fieldset className={classes.formGroup}>
          <div className={`${classes.cardNumber} ${classes.cardElement}`}>
            <CardNumberElement options={cardStyle} onChange={handleCardElementChange} />
          </div>

          <div className={classes.dateCVCContainer}>
            <div
              className={`${classes.cardElement} ${classes.expirationDateCVC} ${classes.expirationDate}`}
            >
              <CardExpiryElement options={cardStyle} onChange={handleCardElementChange} />
            </div>
            <div className={`${classes.cardElement} ${classes.expirationDateCVC} ${classes.cvc}`}>
              <CardCvcElement options={cardStyle} onChange={handleCardElementChange} />
            </div>
          </div>
        </fieldset>
      </div>

      <div className={classes.container}>
        <Typography className={classes.title}>{t('fullName')}</Typography>
        <fieldset className={`${classes.formGroup} ${classes.fullNameError}`}>
          <div className={`${classes.cardElement}`}>
            <input
              className={`${classes.fullName} `}
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Ivan Ivanov"
              autoComplete="name"
              onChange={formik.handleChange}
              style={cardStyle.style.base}
            />
          </div>
        </fieldset>
      </div>
      <ul className={classes.errorMessage}>
        {Object.values(errorMessage)
          .filter((error: string) => error !== '')
          .map((error: string) => (
            <li key={error}>{t(error)}</li>
          ))}
        {formik.errors.fullName && <li>{t(formik.errors.fullName)}</li>}
      </ul>
      <Button
        onClick={clickSubmitButton}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? t('processing') : t('submit')}
      </Button>
    </form>
  );
};
