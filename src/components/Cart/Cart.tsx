import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { List, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EuroIcon from '@material-ui/icons/Euro';
import { useTranslation } from 'react-i18next';
import { cartSelector } from '@/selectors/cart';
import { setCartMoviesToStore } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { PaymentDetailsModal } from '@/components/PaymentDetailsFormModal/PaymentDetailsModal';
import { CartItem } from './CartItem';
import { useStyle } from './styles';
import { CartIsEmpty } from './CartIsEmpty';

export const Cart: FunctionComponent = () => {
  const { t } = useTranslation(['Cart']);

  const history = useHistory();
  const { movies } = useSelector(cartSelector);
  const userId = useSelector(userSelector);
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

  return (
    <div>
      {!movies.length ? (
        <CartIsEmpty />
      ) : (
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
                {getTotalPrice()} <EuroIcon fontSize="small" />
              </Typography>
            </div>
          </div>
        </div>
      )}
      <PaymentDetailsModal isOpen={openModal} setOpen={isModalOpen} />
    </div>
  );
};
