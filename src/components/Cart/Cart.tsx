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
import { IMovie, ICartMovieState } from '@/utils/interfaces/cartInterfaces';
import { getMovie } from '@/businessLogic/cart';
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
  const [cartMovies, setCartMovies] = useState<IMovie[]>([]);
  const [openModal, isModalOpen] = useState(false);

  const setMovies = async (): Promise<void> => {
    movies.forEach(async (movie: ICartMovieState) => {
      const data = await getMovie(movie.movieId);
      setCartMovies((prev) => [...prev, data]);
    });
  };
  useEffect(() => {
    dispatch(setCartMoviesToStore(userId));
    setCartMovies([]);
    setMovies();
  }, [movies.length]);

  const goToPreviousPage = useCallback(() => {
    history.goBack();
  }, []);
  const clickOnBuyButton = (): void => {
    isModalOpen(true);
  };
  const getTotalPrice = (): number =>
    cartMovies.reduce((accumulator, { price }) => accumulator + price, 0);
  return (
    <div>
      {!cartMovies.length ? (
        <CartIsEmpty />
      ) : (
        <div className={classes.cartContainer}>
          <List>
            {cartMovies.map((movie: IMovie) => (
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
