import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { List, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EuroIcon from '@material-ui/icons/Euro';
import { cartSelector } from '@/selectors/cart';
import { getCartMovies, sendData } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { getMovie } from '@/businessLogic/cart';
import { CartItem } from './CartItem';
import { useStyle } from './styles';
import { CartIsEmpty } from './CartIsEmpty';

export const Cart: FunctionComponent = () => {
  const history = useHistory();
  const { movies } = useSelector(cartSelector);
  const { id } = useSelector(userSelector);
  const classes = useStyle();
  const dispatch = useDispatch();
  const [cartMovies, setCartMovies] = useState<IMovie[]>([]);

  const setMovies = async (): Promise<void> => {
    movies.forEach(async (movieId: number) => {
      const data = await getMovie(movieId);
      setCartMovies((prev) => [...prev, data]);
    });
  };
  useEffect(() => {
    dispatch(getCartMovies(id));
    setCartMovies([]);
    setMovies();
  }, [movies.length]);

  const goToPreviousPage = useCallback(() => {
    history.goBack();
  }, []);
  const clickOnBuyButton = (): void => {
    dispatch(sendData({ userId: id, moviesIds: movies }));
    history.push('/');
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
              name="Buy"
            />
            <div className={classes.priceContainer}>
              <Typography>Total Price: &nbsp; </Typography>
              <Typography className={classes.priceContainer}>
                {getTotalPrice()} <EuroIcon fontSize="small" />
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
