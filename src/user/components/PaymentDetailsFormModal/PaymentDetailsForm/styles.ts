import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  form: {
    width: 400,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    '@media (max-width:510px)': {
      width: 300,
      height: 300,
    },
    '@media (max-width:410px)': {
      width: 200,
      height: 350,
    },
  },
  title: {
    fontSize: 20,
    '@media (max-width:510px)': {
      fontSize: 15,
    },
    margin: 0,
  },
  container: {
    width: '100%',
  },
  formGroup: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    boxShadow: '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08)',
    borderRadius: '10px',
    border: '0px',
  },
  cardElement: {
    height: '30px',
    alignItems: 'center',
    padding: '15px 0px 0px 5px',
    borderRadius: '10px',
  },
  cardNumber: {
    width: '98%',
    borderBottom: '1px solid lightGrey',
    border: ({ isCardNumberError }: { isCardNumberError: boolean }) =>
      isCardNumberError ? '1px solid red' : 0,
  },
  dateCVCContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '@media (max-width:410px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
  expirationDate: {
    borderRight: '1px solid lightGrey',
    border: ({ isCardExpirationDateError }: { isCardExpirationDateError: boolean }) =>
      isCardExpirationDateError ? '1px solid red' : 0,
  },
  cvc: {
    borderLeft: '1px solid lightGrey',
    border: ({ isCardCvcError }: { isCardCvcError: boolean }) =>
      isCardCvcError ? '1px solid red' : 0,
  },
  expirationDateCVC: {
    width: '50%',
    '@media (max-width:410px)': {
      width: '100%',
    },
  },
  fullName: {
    width: '98%',
    outline: 'none',
    '&::placeholder': {
      color: 'lightGrey',
    },
    border: 'none',
  },
  fullNameError: {
    border: ({ isFullNameError }: { isFullNameError: boolean }) =>
      isFullNameError ? '1px solid red' : 'none',
  },
  errorMessage: {
    width: '100%',
    height: '50px',
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '13px',
    color: 'red',
    visibility: ({
      isVisibleErrorMessage,
    }: {
      isVisibleErrorMessage: boolean;
      isCardCvcError: boolean;
      isCardNumberError: boolean;
      isCardExpirationDateError: boolean;
      isFullNameError: boolean;
    }) => (isVisibleErrorMessage ? 'visible' : 'hidden'),
    '@media (max-width:510px)': {
      height: '40px',
      fontSize: '10px',
    },
  },
}));

export const cardStyle = {
  style: {
    base: {
      color: 'grey',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '20px',
      fontSmoothing: 'antialiased',
      ':WebkitAutofill': {
        color: 'lightGrey',
      },
      '::placeholder': {
        color: 'lightGrey',
      },
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
      border: '1px solid red',
    },
  },
};
