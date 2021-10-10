import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { List, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EuroIcon from '@material-ui/icons/Euro';
import { useTranslation } from 'react-i18next';
import { cartSelector } from '@/user/store/selectors/cart';
import { setCartMoviesToStore } from '@/user/store/slices/cartSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { CustomButton, PaymentDetailsModal } from '@/user/components';
import { IMovie } from '@/interfaces/movieInterface';
import { CartItem } from './CartItem';
import { useStyle } from './styles';
import { CartIsEmpty } from './CartIsEmpty';
import { Circular } from '@/sharedComponents/Circular/Circular';
import { stateStatus } from '@/user/constants/constants';
// import { ErrorComponent } from '@/sharedComponents/ErrorComponent/ErrorComponent';
import { addError } from '@/user/store/slices/errorSlice';
import { CLIENT_PATHS } from '@/user/constants';

export const Cart: FunctionComponent = () => {
  const { t } = useTranslation(['Cart']);
  const history = useHistory();
  const { movies, status, error } = useSelector(cartSelector);
  const userId = useSelector(userIdSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [openModal, isModalOpen] = useState(false);
  useEffect(() => {
    dispatch(setCartMoviesToStore(userId));
  }, []);

  const goToPreviousPage = useCallback(() => {
    history.goBack();
  }, []);

  const clickOnBuyButton = (): void => {
    isModalOpen(true);
  };

  const getTotalPrice = (): number =>
    movies.reduce((accumulator, { price }) => accumulator + Number(price), 0);

  if (status === stateStatus.loading) {
    return <Circular />;
  }
  if (status === stateStatus.empty) {
    return <CartIsEmpty />;
  }
  if (
    status === stateStatus.error &&
    error.map(({ errorType }): string => String(errorType)).includes('cart/getMovies/rejected')
  ) {
    console.log('Error in Cart', error[0].reducer, userId);
    dispatch(
      addError({
        message: error[0].message,
        reducer: error[0].reducer,
        params: userId,
        route: CLIENT_PATHS.cart,
      }),
    );
    // return <ErrorComponent params={userId} />;
  }
  return (
    <>
      <div className={classes.cartContainer}>
        <List>
          {movies.map((movie: IMovie) => (
            <CartItem key={movie.id} movie={movie} />
          ))}
        </List>
        <div className={classes.buttonsContainer}>
          <CustomButton buttonType="button" onClick={goToPreviousPage} name="back" />
          <CustomButton
            buttonType="button"
            className={classes.buyButton}
            onClick={clickOnBuyButton}
            name={t('buyButton')}
          />
          <div className={classes.priceContainer}>
            <Typography>{t('totalPrice')}: &nbsp; </Typography>
            <Typography className={classes.priceContainer}>
              {getTotalPrice().toFixed(2)} <EuroIcon fontSize="small" />
            </Typography>
          </div>
        </div>
      </div>
      <PaymentDetailsModal isOpen={openModal} setOpen={isModalOpen} />
    </>
  );
};
